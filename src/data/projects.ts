export interface Project {
  id: string
  title: string
  description: string
  language: string
  githubUrl: string
  liveUrl?: string
  imageUrl?: string
  flathubId?: string
}

export const projects: Project[] = [
  {
    id: 'cosmic-camera',
    title: 'Camera',
    description:
      'A camera application designed for the COSMIC™ desktop environment, offering both GUI and CLI modes with night mode computational photography.',
    language: 'Rust',
    githubUrl: 'https://github.com/cosmic-utils/camera',
    liveUrl: 'https://flathub.org/apps/io.github.cosmic_utils.camera',
    imageUrl: 'https://raw.githubusercontent.com/cosmic-utils/camera/main/preview/preview-001.png',
    flathubId: 'io.github.cosmic_utils.camera',
  },
]
