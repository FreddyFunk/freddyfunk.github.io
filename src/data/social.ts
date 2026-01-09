import { Github, Mail, Briefcase, KeyRound, LucideIcon } from 'lucide-react'

export interface SocialLink {
  name: string
  href: string
  icon: LucideIcon
  description?: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/FreddyFunk',
    icon: Github,
    description: 'Check out my projects',
  },
  {
    name: 'Xing',
    href: 'https://www.xing.com/profile/Frederic_Laing',
    icon: Briefcase,
    description: 'Connect professionally',
  },
  {
    name: 'Email',
    href: 'mailto:frederic.laing.development@gmail.com',
    icon: Mail,
    description: 'Get in touch',
  },
  {
    name: 'GPG Key',
    href: '/gpg.txt',
    icon: KeyRound,
    description: 'Verify my identity',
  },
]

// Subset for navbar (excludes GPG key)
export const navLinks = socialLinks.slice(0, 3)
