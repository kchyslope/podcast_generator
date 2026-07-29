import { createEmptyEpisode } from '../data/demoPodcast'

const PODCAST_FIELDS = [
  { key: 'title', label: 'Title' },
  { key: 'subtitle', label: 'Subtitle' },
  { key: 'author', label: 'Author' },
  { key: 'description', label: 'Description', textarea: true },
  { key: 'link', label: 'Link prefix' },
  { key: 'image', label: 'Image filename' },
  { key: 'language', label: 'Language' },
  { key: 'category', label: 'Category' },
]

const EPISODE_FIELDS = [
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description', textarea: true },
  { key: 'duration', label: 'Duration' },
  { key: 'published', label: 'Published (pubDate)' },
  { key: 'file', label: 'Audio file URL' },
  { key: 'length', label: 'Length (bytes)' },
]

export default function Editor({ podcast, onChange }) {
  function updatePodcastField(key, value) {
    onChange({ ...podcast, [key]: value })
  }

  function updateEpisodeField(index, key, value) {
    const item = podcast.item.map((episode, i) =>
      i === index ? { ...episode, [key]: value } : episode,
    )
    onChange({ ...podcast, item })
  }

  function addEpisode() {
    onChange({ ...podcast, item: [...podcast.item, createEmptyEpisode()] })
  }

  function removeEpisode(index) {
    onChange({ ...podcast, item: podcast.item.filter((_, i) => i !== index) })
  }

  return (
    <div className="editor">
      <section className="editor-section">
        <h2>Podcast</h2>
        {PODCAST_FIELDS.map((field) => (
          <label key={field.key} className="field">
            <span>{field.label}</span>
            {field.textarea ? (
              <textarea
                value={podcast[field.key]}
                onChange={(e) => updatePodcastField(field.key, e.target.value)}
                rows={3}
              />
            ) : (
              <input
                type="text"
                value={podcast[field.key]}
                onChange={(e) => updatePodcastField(field.key, e.target.value)}
              />
            )}
          </label>
        ))}
      </section>

      <section className="editor-section">
        <div className="episodes-header">
          <h2>Episodes</h2>
          <button type="button" className="btn-add" onClick={addEpisode}>
            + Add episode
          </button>
        </div>

        {podcast.item.map((episode, index) => (
          <div className="episode-card" key={index}>
            <div className="episode-card-header">
              <strong>Episode {index + 1}</strong>
              <button
                type="button"
                className="btn-remove"
                onClick={() => removeEpisode(index)}
                aria-label={`Remove episode ${index + 1}`}
              >
                Remove
              </button>
            </div>
            {EPISODE_FIELDS.map((field) => (
              <label key={field.key} className="field">
                <span>{field.label}</span>
                {field.textarea ? (
                  <textarea
                    value={episode[field.key]}
                    onChange={(e) => updateEpisodeField(index, field.key, e.target.value)}
                    rows={2}
                  />
                ) : (
                  <input
                    type="text"
                    value={episode[field.key]}
                    onChange={(e) => updateEpisodeField(index, field.key, e.target.value)}
                  />
                )}
              </label>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}
