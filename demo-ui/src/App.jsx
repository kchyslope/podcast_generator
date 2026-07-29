import { useMemo, useState } from 'react'
import Editor from './components/Editor'
import AppPreview from './components/AppPreview'
import FeedXmlView from './components/FeedXmlView'
import Attribution from './components/Attribution'
import { demoPodcast } from './data/demoPodcast'
import { generateFeedXml } from './lib/generateFeed'
import './App.css'

function App() {
  const [podcast, setPodcast] = useState(demoPodcast)
  const [tab, setTab] = useState('preview')

  const feedXml = useMemo(() => generateFeedXml(podcast), [podcast])

  return (
    <div className="layout">
      <header className="page-header">
        <h1>Podcast Generator — Demo</h1>
        <p>Edit the feed data and watch the preview and generated RSS feed update live.</p>
      </header>

      <div className="panes">
        <Editor podcast={podcast} onChange={setPodcast} />

        <div className="preview-pane">
          <div className="tabs">
            <button
              type="button"
              className={tab === 'preview' ? 'tab active' : 'tab'}
              onClick={() => setTab('preview')}
            >
              App preview
            </button>
            <button
              type="button"
              className={tab === 'xml' ? 'tab active' : 'tab'}
              onClick={() => setTab('xml')}
            >
              Feed XML
            </button>
          </div>

          {tab === 'preview' ? <AppPreview podcast={podcast} /> : <FeedXmlView xml={feedXml} />}
        </div>
      </div>

      <footer className="page-footer">
        <Attribution />
      </footer>
    </div>
  )
}

export default App
