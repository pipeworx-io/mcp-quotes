# mcp-quotes

Quotes MCP — citation-grade quote API for public-domain authors.

Part of [Pipeworx](https://pipeworx.io) — an MCP gateway connecting AI agents to 1476+ live data sources.

## Tools

| Tool | Description |
|------|-------------|
| `random_quote` | Return a random quote from the corpus, optionally filtered by author, fame, verification status, or tag. Each result includes citation: work, year, speaker (for plays/fiction), and source URL. |
| `search_quotes` | Search quotes by substring. Matches both canonical text and known popular paraphrases — searching for 'protest' finds Hamlet's 'The lady doth protest too much, methinks' even though the popular form 'Methinks the lady doth protest too much' is what most people remember. |
| `check_attribution` | Given a quote and (optionally) the author it is claimed to be by, return one of four verdicts: "verified" (genuine, with citation), "misattributed" (no primary source — popular but fake), "paraphrase_of_verified" (popular corruption of a real quote, returns the actual text), or "no_match" (not in corpus). Useful for journalists, researchers, and anyone tired of fake Mark Twain quotes. |
| `quote_by_location` | Look up quotes by structural address within a work — act/scene for plays, chapter for novels. Example: author_id="william-shakespeare", work_title="Hamlet", act=3, scene=1 returns the "To be, or not to be" line. |
| `list_authors` | Return all authors available in the corpus — each entry includes author id (used as input to other tools), display name, birth/death dates, and public-domain status. |
| `list_full_text_works` | List works for which the full text (every scene, speech, and line) is loaded — beyond just the famous-quote excerpts. Use this to discover what is available for deep structural lookup via get_scene and get_act. |
| `get_scene` | Return the full text of a specific scene from a play (every speech, every line, in order). Example: author_id="william-shakespeare", work_slug="hamlet", act=3, scene=1 returns the entire "To be, or not to be" scene including all of Hamlet's soliloquy and the subsequent dialogue with Ophelia. Useful for context, citation, or close reading. |
| `get_act` | Return the full text of an entire act (all scenes within it). Use this to read a full structural unit at once. Returned object contains nested scenes with their speeches and lines. |
| `get_chapter` | Return the full text of a chapter from a novel/prose work (all paragraphs in order). Example: author_id="oscar-wilde", work_slug="the-picture-of-dorian-gray", chapter=2 returns the entire chapter where Lord Henry tempts Dorian. Use list_full_text_works to discover which works are chapter-based. |

## Quick Start

Add to your MCP client (Claude Desktop, Cursor, Windsurf, etc.):

```json
{
  "mcpServers": {
    "quotes": {
      "url": "https://gateway.pipeworx.io/quotes/mcp"
    }
  }
}
```

### What this endpoint actually serves

`tools/list` at `https://gateway.pipeworx.io/quotes/mcp` returns the tools in the table
above **plus the shared Pipeworx meta-tools** — `ask_pipeworx`,
`discover_tools`, `search_within`, `remember`/`recall` and the rest of the
gateway-wide set. So the tool count you see is larger than this table: a
single-pack endpoint currently lists roughly 30 shared tools alongside the
pack's own. The connection's `initialize` response states its exact scope, and
is the authoritative answer for a given day.

This is deliberate, not multiplexing by accident. The meta-tools are what let a
scoped connection answer a question this pack does not cover — via
`ask_pipeworx`, which routes across the whole catalog — without you adding a
second MCP server. There is currently no way to mount a pack endpoint without
them; if the extra schemas cost you more context than the routing is worth,
connect to the full gateway once rather than to several pack endpoints.

Or connect to the full Pipeworx gateway to get every pack's tools listed
directly, instead of just this one's:

```json
{
  "mcpServers": {
    "pipeworx": {
      "url": "https://gateway.pipeworx.io/mcp"
    }
  }
}
```

Both URLs reach the same gateway and the same 1476+ data sources. The
only difference is which pack's tools are listed **directly**; `ask_pipeworx`
reaches all of them from either one.

## Using with ask_pipeworx

Instead of calling tools directly, you can ask questions in plain English —
this works on the pack endpoint above as well as on the full gateway:

```
ask_pipeworx({ question: "your question about Quotes data" })
```

The gateway picks the right tool and fills the arguments automatically.

## More

- [Docs and guides](https://pipeworx.io/docs)
- [pipeworx.io](https://pipeworx.io)

## License

MIT
