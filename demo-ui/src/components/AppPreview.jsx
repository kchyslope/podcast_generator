import { placeholderArtwork } from '../data/demoPodcast'

export default function AppPreview({ podcast }) {
  return (
    <div className="app-preview">
      <div className="show-header">
        <img
          className="artwork"
          src={placeholderArtwork}
          alt={`${podcast.title || 'Podcast'} artwork`}
        />
        <div className="show-meta">
          <h1>{podcast.title || 'Untitled podcast'}</h1>
          <p className="show-author">{podcast.author}</p>
          <p className="show-description">{podcast.description}</p>
          <span className="show-category">{podcast.category}</span>
        </div>
      </div>

      <ol className="episode-list">
        {podcast.item.map((episode, index) => (
          <li className="episode-row" key={index}>
            <div className="episode-row-main">
              <div className="episode-row-text">
                <h3>{episode.title || 'Untitled episode'}</h3>
                <p>{episode.description}</p>
              </div>
              <div className="episode-row-meta">
                <span>{episode.published}</span>
                <span>{episode.duration}</span>
              </div>
            </div>
            {episode.file && (
              <audio className="episode-audio" controls src={episode.file}>
                Your browser does not support audio playback.
              </audio>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
