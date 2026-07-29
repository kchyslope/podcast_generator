// Seed data for the demo UI, inspired by "Ten Percent Happier with Dan Harris".
// Episode audio points at freely-licensed sample clips, not the real show's files.
const SAMPLE_AUDIO = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
]

const PLACEHOLDER_ARTWORK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23ff9f43'/%3E%3Cstop offset='1' stop-color='%23e84393'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='600' fill='url(%23g)'/%3E%3Ccircle cx='300' cy='260' r='120' fill='rgba(255,255,255,0.18)'/%3E%3Ctext x='300' y='300' font-family='system-ui,sans-serif' font-size='150' text-anchor='middle' fill='white'%3E10%25%3C/text%3E%3Ctext x='300' y='430' font-family='system-ui,sans-serif' font-size='42' text-anchor='middle' fill='white' font-weight='600'%3EHAPPIER%3C/text%3E%3C/svg%3E"

export const demoPodcast = {
  title: 'Ten Percent Happier with Dan Harris',
  format: 'audio',
  subtitle: "A skeptic's guide to meditation and the mind",
  author: 'Dan Harris',
  description:
    "Dan Harris was a successful reporter who had a panic attack live on Good Morning America. That's what led him, kicking and screaming, to try something he always thought was ridiculous: meditation. This show features practical conversations about mindfulness, mental health, and habit change with scientists, monks, and skeptics alike.",
  image: 'artwork.jpg',
  link: 'https://example.com/podcast/',
  language: 'en-us',
  category: 'Health & Fitness',
  item: [
    {
      title: 'Anxiety, Uncertainty, and the Present Moment',
      description:
        'A conversation about why the mind gravitates toward worst-case scenarios, and a few concrete techniques for coming back to the present when anxiety takes over.',
      duration: '38:12',
      published: 'Mon, 06 Jan 2025 09:00:00 GMT',
      file: SAMPLE_AUDIO[0],
      length: '30500000',
    },
    {
      title: "How to Meditate When Your Mind Won't Stop",
      description:
        'For anyone who has tried to meditate and given up because it felt impossible: a practical breakdown of what meditation actually is, and why a busy mind is not a failed practice.',
      duration: '41:47',
      published: 'Mon, 13 Jan 2025 09:00:00 GMT',
      file: SAMPLE_AUDIO[1],
      length: '33800000',
    },
    {
      title: 'The Science of Habit Change',
      description:
        "Why willpower alone rarely works, and what research says actually helps a new habit stick — with a focus on starting small enough that it's almost impossible to fail.",
      duration: '35:29',
      published: 'Mon, 20 Jan 2025 09:00:00 GMT',
      file: SAMPLE_AUDIO[2],
      length: '28100000',
    },
  ],
}

export const placeholderArtwork = PLACEHOLDER_ARTWORK

export function createEmptyEpisode() {
  return {
    title: '',
    description: '',
    duration: '',
    published: '',
    file: '',
    length: '',
  }
}
