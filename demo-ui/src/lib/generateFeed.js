// Ports feed.py's element structure to JS, including its quirk where the
// <enclosure> element is only ever attached to the LAST episode (a
// consequence of the Python script's indentation placing that block outside
// the item loop). We reproduce it here so the generated feed matches what
// the real GitHub Action produces for the same input.

function escapeXml(value) {
  if (value == null) return ''
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildItemXml(item, author, isLastItem, linkPrefix) {
  const enclosure = isLastItem
    ? `\n      <enclosure url="${escapeXml(linkPrefix + item.file)}" type="audio/mpeg" length="${escapeXml(item.length)}" />`
    : ''

  return `    <item>
      <title>${escapeXml(item.title)}</title>
      <itunes:author>${escapeXml(author)}</itunes:author>
      <description>${escapeXml(item.description)}</description>
      <itunes:duration>${escapeXml(item.duration)}</itunes:duration>
      <pubDate>${escapeXml(item.published)}</pubDate>
      <title>${escapeXml(item.title)}</title>${enclosure}
    </item>`
}

export function generateFeedXml(podcast) {
  const linkPrefix = podcast.link || ''
  const items = podcast.item || []

  const itemsXml = items
    .map((item, index) => buildItemXml(item, podcast.author, index === items.length - 1, linkPrefix))
    .join('\n')

  return `<?xml version='1.0' encoding='UTF-8'?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(podcast.title)}</title>
    <format>${escapeXml(podcast.format)}</format>
    <subtitle>${escapeXml(podcast.subtitle)}</subtitle>
    <itunes:author>${escapeXml(podcast.author)}</itunes:author>
    <description>${escapeXml(podcast.description)}</description>
    <itunes:image href="${escapeXml(linkPrefix + podcast.image)}" />
    <language>${escapeXml(podcast.language)}</language>
    <link>${escapeXml(linkPrefix)}</link>
    <itunes:category text="${escapeXml(podcast.category)}" />
${itemsXml}
  </channel>
</rss>
`
}
