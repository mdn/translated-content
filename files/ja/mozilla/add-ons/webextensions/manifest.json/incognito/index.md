---
title: incognito
slug: Mozilla/Add-ons/WebExtensions/manifest.json/incognito
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">"incognito": "spanning"</pre>
        <pre class="brush: json no-line-numbers">"incognito": "split"</pre>
        <pre class="brush: json no-line-numbers">
"incognito": "not_allowed"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`incognito` キーを使ってプライベートブラウジングウィンドウで機能拡張が動作する方法を管理できます。

This is a string which may take any of the following values:

- "spanning" (the default): the extension will see events from private and non-private windows and tabs. Windows and tabs will get an `incognito` property in the [`Window`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) or [`Tab`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) that represents them. This property indicates whether or not the object is private:

  ```js
  browser.windows.getLastFocused().then((windowInfo) => {
    console.log(`Window is private: ${windowInfo.incognito}`);
  });
  ```

- "split": the extension will be split between private and non-private windows. There are effectively two copies of the extension running: one sees only non-private windows, the other sees only private windows. Each copy has isolated access to Web APIs (so, for example, [`localStorage`](/ja/docs/Web/API/Window/localStorage) is not shared). However, the WebExtension API [`storage.local`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) is shared.
- "not_allowed": private tabs and windows are invisible to the extension.

## 例

```json
"incognito": "spanning"
```

```json
"incognito": "split"
```

```json
"incognito": "not_allowed"
```

## ブラウザーの互換性

{{Compat}}
