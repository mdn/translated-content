---
title: Window.sidebar
slug: Web/API/Window/sidebar
---

{{APIRef}} {{Non-standard_header}}

Returns a sidebar object, which contains several methods for registering add-ons with the browser.

## Notes

The sidebar object returned has the following methods:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Method</th>
      <th>Description (SeaMonkey)</th>
      <th>Description (Firefox)</th>
    </tr>
    <tr>
      <td>
        <code>addPanel(<var>title</var>, <var>contentURL</var>, "")</code>
      </td>
      <td>Adds a sidebar panel.</td>
      <td rowspan="2">
        Obsolete since Firefox 23 (only present in SeaMonkey).<br />End users
        can use the "load this bookmark in the sidebar" option instead. Also see
        <a href="/zh-TW/docs/Mozilla/Creating_a_Firefox_sidebar"
          >Creating a Firefox sidebar.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >addPersistentPanel(<var>title</var>, <var>contentURL</var>, "")</code
        >
      </td>
      <td>Adds a sidebar panel, which is able to work in the background.</td>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(<em>descriptionURL)</em></code>
      </td>
      <td colspan="2">
        Installs a search provider (OpenSearch).
        <a
          href="/zh-TW/docs/Web/API/Window/sidebar/Adding_search_engines_from_Web_pages#Installing_OpenSearch_plugins"
          >Adding OpenSearch search engines </a
        >contains more details. Added in Firefox 2.
      </td>
    </tr>
    <tr>
      <td>
        <code
          >addSearchEngine(<var>engineURL</var>, <var>iconURL</var>,
          <var>suggestedTitle</var>, <var>suggestedCategory</var>)</code
        >
        {{Deprecated_Inline}}
      </td>
      <td colspan="2">
        Installs a search engine (Sherlock).
        <a
          href="/zh-TW/docs/Web/API/Window/sidebar/Adding_search_engines_from_Web_pages#Installing_Sherlock_plugins"
          >Adding Sherlock search engines </a
        >contains more details.
      </td>
    </tr>
    <tr>
      <td>
        <code>IsSearchProviderInstalled(<em>descriptionURL)</em></code>
      </td>
      <td colspan="2">
        Indicates if a specific search provider (OpenSearch) is installed.
      </td>
    </tr>
  </tbody>
</table>

## Specification

Mozilla-specific. Not part of any standard.
