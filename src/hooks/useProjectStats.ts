import { useState, useEffect } from 'react'

interface ProjectStats {
  stars: number | null
  downloads: number | null
  loading: boolean
}

export function useProjectStats(githubUrl: string, flathubId?: string): ProjectStats {
  const [stats, setStats] = useState<ProjectStats>({
    stars: null,
    downloads: null,
    loading: true,
  })

  useEffect(() => {
    async function fetchStats() {
      try {
        // Extract owner/repo from GitHub URL
        const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+)/)
        if (!match) return

        const repoPath = match[1]

        // Fetch GitHub stars
        const githubResponse = await fetch(`https://api.github.com/repos/${repoPath}`)
        const githubData = await githubResponse.json()
        const stars = githubData.stargazers_count ?? null

        // Fetch Flathub downloads if ID provided (using CORS proxy)
        let downloads: number | null = null
        if (flathubId) {
          try {
            const flathubUrl = `https://flathub.org/api/v2/stats/${flathubId}`
            const corsProxyUrl = `https://corsproxy.io/?${encodeURIComponent(flathubUrl)}`
            const flathubResponse = await fetch(corsProxyUrl)
            const flathubData = await flathubResponse.json()
            downloads = flathubData.installs_total ?? null
          } catch {
            // Flathub API might fail, continue without downloads
          }
        }

        setStats({ stars, downloads, loading: false })
      } catch {
        setStats(prev => ({ ...prev, loading: false }))
      }
    }

    fetchStats()
  }, [githubUrl, flathubId])

  return stats
}
