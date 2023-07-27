---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"page_action": {
  "browser_style": true,
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

ページアクションは拡張機能がブラウザーの URL バーの中に追加できるアイコンです。

拡張機能では関連したポップアップをつけて、そこで HTML、CSS、 JavaScript を使ったコンテンツを提供することもできます。

ポップアップを提供した場合、ユーザーがアイコンをクリックした時にポップアップが開いて、ポップアップ内で実行する JavaScript にてユーザーのインタラクションを扱います。ポップアップをつけない場合、ユーザーがアイコンをクリックした時のクリックイベントは拡張機能の [background scripts](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_pages) に送られます。

[pageAction API](/ja/Add-ons/WebExtensions/API/pageAction) を使用してプログラムでページアクションを作成および操作することもできます。

ページアクションはブラウザアクションと似ていますが、ブラウザ全体ではなく特定の Web ページに関連付けられている点が異なります。アクションが特定のページにのみ関連している場合は、ページアクションを使用して関連するページにのみ表示する必要があります。アクションがすべてのページまたはブラウザ自体に関連している場合は、ブラウザアクションを使用してください。

ブラウザアクションはデフォルトで表示されますが、ページアクションはデフォルトで非表示になります。タブの ID を渡して [`pageAction.show()`](/ja/Add-ons/WebExtensions/API/pageAction/show) を呼び出すことで、それらを特定のタブに対して表示できます。show_matches プロパティを使用してこのデフォルトの動作を変更することもできます。

## 構文

The `page_action` key is an object that may have any of three properties, all optional:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名前</th>
      <th scope="col">型</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >browser_style</a
          ></code
        >
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional, defaulting to <code>false</code>.</p>
        <p>
          Use this to include a stylesheet in your popup that will make it look
          consistent with the browser's UI and with other extensions that use
          the <code>browser_style</code> property. Although this key defaults to
          <code>false</code>, it's recommended that you include it and set it to
          <code>true</code> in order to make your popups consistent with the
          look of the rest of the browser user interface.
        </p>
        <p>
          In Firefox, the stylesheet can be seen at
          chrome://browser/content/extension.css, or
          chrome://browser/content/extension-mac.css on OS X.
        </p>
        <p>
          The
          <a href="https://firefoxux.github.io/StyleGuide/#/controls"
            >Firefox Style Guide</a
          >
          describes the classes you can apply to elements in the popup in order
          to get particular styles.
        </p>
        <p>
          The
          <a
            href="https://github.com/mdn/webextensions-examples/tree/master/latest-download"
            >latest-download</a
          >
          example extension uses <code>browser_style</code> in its popup.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Object</code> or <code>String</code></td>
      <td>
        <p>Use this to specify an icon for the action.</p>
        <p>
          It's recommended that you supply two icons here, one 19x19 pixels, and
          one 38x38 pixels, and specify them in an object with properties named
          "19" and "38", like this:
        </p>
        <pre class="brush: json no-line-numbers">
    "default_icon": {
      "19": "geo-19.png",
      "38": "geo-38.png"
    }</pre
        >
        <p>
          If you do this, then the browser will pick the right size icon for the
          screen's pixel density.
        </p>
        <p>You can just supply a string here:</p>
        <pre class="brush: json no-line-numbers">"default_icon": "geo.png"</pre>
        <p>
          If you do this, then the icon will be scaled to fit the toolbar, and
          may appear blurry.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_popup</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          The path to an HTML file containing the specification of the popup.
        </p>
        <p>
          The HTML file may include CSS and JavaScript files using
          <code><a href="/ja/docs/Web/HTML/Element/link">&#x3C;link></a></code>
          and
          <code
            ><a href="/ja/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >
          elements, just like a normal web page. However, don't use
          <code
            ><a href="/ja/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >
          with embedded code, because you'll get a Content Violation Policy
          error. Instead,
          <code
            ><a href="/ja/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >
          must use the
          <code><a href="/ja/docs/Web/HTML/Element/script">src</a></code>
          attribute to load a separate script file.
        </p>
        <p>
          Unlike a normal web page, JavaScript running in the popup can access
          all the
          <a href="/ja/Add-ons/WebExtensions/API">WebExtension APIs</a>
          (subject, of course, to the extension having the appropriate
          <a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >permissions</a
          >).
        </p>
        <p>
          これは<a
            href="/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json"
            >ローカライズ可能なプロパティ</a
          >です。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_title</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          Tooltip for the icon, displayed when the user moves their mouse over
          it.
        </p>
        <p>
          This is a
          <a
            href="/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json"
            >localizable property</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>hide_matches</code></td>
      <td>
        <code>Array</code> of <code>Match Pattern</code> except
        <code>&#x3C;all_urls></code>
      </td>
      <td>
        <p>
          Hide the page action 既定では for pages whose URLs match any of the
          given
          <a href="/ja/Add-ons/WebExtensions/match_patterns">match patterns</a>.
        </p>
        <p>
          Note that page actions are always hidden 既定では unless
          <code>show_matches</code> is given. Therefore it only makes sense to
          include this property if <code>show_matches</code> is also given, and
          in this case it will override the patterns in
          <code>show_matches</code>. 例えば、consider a value like:
        </p>
        <pre class="brush: json">
"page_action": {
  "show_matches": ["https://*.mozilla.org/*"],
  "hide_matches": ["https://developer.mozilla.org/*"]
}</pre
        >
        <p>
          This shows the page action 既定では for all HTTPS URLs under the
          "mozilla.org" domain, except for pages under "developer.mozilla.org".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>show_matches</code></td>
      <td><code>Array</code> of <code>Match Pattern</code></td>
      <td>
        <p>
          Show the page action 既定では for pages whose URLs match any of the
          given patterns.
        </p>
        <p>See also <code>hide_matches</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>pinned</code></td>
      <td><code>Boolean</code></td>
      <td>
        <p>Optional, defaulting to <code>true</code>.</p>
        <p>
          Controls whether or not the page action should appear in the location
          bar 既定では when the user installs the extension.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 例

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
```

A page action with just an icon, specified in 2 different sizes. The extension's background scripts can receive click events when the user clicks the icon using code like this:

```js
browser.pageAction.onClicked.addListener(handleClick);
```

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

A page action with an icon, a title, and a popup. The popup will be shown when the user clicks the icon.

## ブラウザーの互換性

{{Compat("webextensions.manifest.page_action")}}

## 関連情報

- [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser styles](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
