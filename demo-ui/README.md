# Podcast Generat0r — Demo UI

**Live demo: [kchyslope.github.io/podcast_generator](https://kchyslope.github.io/podcast_generator/)**

A self-contained React + Vite demo for the [podcast_generator](../) GitHub Action. Edit podcast/episode
metadata in the form and watch two live previews update: a podcast-app-style episode list, and the raw
`podcast.xml` RSS feed that would be generated (via a JS port of [`feed.py`](../feed.py)).

Seeded with sample data based on *Ten Percent Happier with Dan Harris* — see the attribution note in the
app footer. Audio files are freely-licensed sample clips, not the real show's episodes.

## Run it

```sh
npm install
npm run dev
```

See the design spec: [`docs/superpowers/specs/2026-07-29-demo-ui-design.md`](../docs/superpowers/specs/2026-07-29-demo-ui-design.md)
