import { useState } from 'react'

export default function FeedXmlView({ xml }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(xml)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="feed-xml">
      <div className="feed-xml-toolbar">
        <span>podcast.xml</span>
        <button type="button" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{xml}</code>
      </pre>
    </div>
  )
}
