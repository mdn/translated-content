---
title: Window.sidebar
slug: Web/API/Window/sidebar
---

{{APIRef}} {{SeeCompatTable}}

Returns a sidebar object, which contains several methods for registering add-ons with browser.

## Example

```
window.sidebar.addPanel("Google", "http://www.google.com/", "");
```

Note: the third empty parameter is required!

## Notes

The sidebar object returned has the following methods:

| Method                                                                             | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addPanel(title, contentURL, customizeURL)` {{Deprecated_Inline}}           | Adds a sidebar panel. See [Creating a Firefox sidebar](/zh-CN/docs/Creating_a_Firefox_sidebar) for details on sidebars in Firefox 2 and later.             |
| `addPersistentPanel(title, contentURL, customizeURL)` {{Deprecated_Inline}} | Adds a sidebar panel, which is able to work in the background. This only works in SeaMonkey or Firefox 1.x; Firefox 2 and later will just do `addPanel()`. |
| `addSearchEngine(engineURL, iconURL, suggestedTitle, suggestedCategory)`           | Installs a search engine. See [Adding search engines from web pages](/zh-CN/docs/Adding_search_engines_from_web_pages) for details.                        |
| `addMicrosummaryGenerator(generatorURL)` {{Deprecated_Inline}}              | Installs a microsummary generator.                                                                                                                         |

## Specification

Mozilla-specific. Not part of any standard.
