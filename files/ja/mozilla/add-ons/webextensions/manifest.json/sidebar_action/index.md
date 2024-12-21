---
title: sidebar_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action
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
"sidebar_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "My sidebar",
  "default_panel": "sidebar/sidebar.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

[サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)はブラウザーウィンドウの左側の、ウェブページの横に表示されるペインです。ブラウザーはユーザーに現在利用できるサイドバーを表示して表示するサイドバーを選ぶ UI を提供します。

sidebar_action キーによりサイドバーの既定のプロパティを定義できます。このプロパティは {{WebExtAPIRef("sidebarAction")}} API.を使って変更できます。

## 構文

`sidebar_action` キーは下記に載っているプロパティを持つことのあるオブジェクトです。唯一の必須プロパティは `default_panel` です。

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
      <td><code>browser_style</code></td>
      <td><code>Boolean</code></td>
      <td>
        <p>オプション、デフォルトでは <code>true</code>。</p>
        <p>
          Use this to include a stylesheet in your popup that will make it look
          consistent with the browser's UI and with other extensions that use
          the <code>browser_style</code> property.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Object</code> or <code>String</code></td>
      <td>
        <p>
          これはサイドバーのアイコンを指定するのに使います。このアイコンはブラウザーのUI内でサイドバーを開いたり閉じたりするのに表示されます。
        </p>
        <p>
          Icons are specified as URLs relative to the manifest.json file itself.
        </p>
        <p>You can specify a single icon file by supplying a string here:</p>
        <pre class="brush: json no-line-numbers">
"default_icon": "path/to/geo.svg"</pre
        >
        <p>
          To specify multiple icons in different sizes, specify an object here.
          The name of each property is the icon's height in pixels, and must be
          convertible to an integer. The value is the URL. For example:
        </p>
        <pre class="brush: json no-line-numbers">
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png"
    }</pre
        >
        <p>
          See
          <a
            href="/ja/Add-ons/WebExtensions/manifest.json/browser_action#Choosing_icon_sizes"
            >Choosing icon sizes</a
          >
          for more guidance on this.
        </p>
        <p>
          This property is optional: if it is omitted, the sidebar doesn't get
          an icon.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_panel</code></td>
      <td><code>String</code></td>
      <td>
        <p>サイドバーのコンテンツを指定する HTML ファイルのパス。</p>
        <p>
          HTML ファイルには、普通のウェブページと同様に CSS と JavaScript
          ファイルを
          <code><a href="/ja/docs/Web/HTML/Element/link">&#x3C;link></a></code>
          と
          <code
            ><a href="/ja/docs/Web/HTML/Element/script">&#x3C;script></a></code
          >
          要素を使って入れることができます。
        </p>
        <p>
          普通のウェブページと異なり、パネル内で実行される JavaScript はすべての
          <a href="/ja/Add-ons/WebExtensions/API">WebExtension APIs</a>
          にアクセスできます(もちろん、拡張機能が持っている<a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions"
            >権限</a
          >に従います)。
        </p>
        <p>このプロパティは必須です。</p>
        <p>
          これは<a
            href="/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json"
            >ローカライズ可能なプロパティです。</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_title</code></td>
      <td><code>String</code></td>
      <td>
        <p>
          サイドバーのタイトル。これはブラウザーのUIの中でサイドバーを一覧したり開くのに使われ、サイドバーが開いた時には上に表示されます。
        </p>
        <p>
          This property is optional: if it is omitted, the sidebar's title is
          the extension's
          <code
            ><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name"
              >name</a
            ></code
          >.
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
  </tbody>
</table>

## 例

```json
"sidebar_action": {
  "default_icon": "sidebar.svg",
  "default_title": "My sidebar!",
  "default_panel": "sidebar.html",
  "browser_style": true
}
```

For a simple example of an extension that uses a sidebar, see [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page).

## ブラウザーの互換性

{{Compat}}
