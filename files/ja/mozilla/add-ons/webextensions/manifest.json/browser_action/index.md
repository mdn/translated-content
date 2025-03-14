---
title: browser_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
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
        <pre class="brush: json no-line-numbers notranslate">
"browser_action": {
  "browser_style": true,
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html",
  "theme_icons": [{
    "light": "icons/geo-16-light.png",
    "dark": "icons/geo-16.png",
    "size": 16
  }, {
    "light": "icons/geo-32-light.png",
    "dark": "icons/geo-32.png",
    "size": 32
  }]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

browser action はあなたのブラウザーのツールバーに拡張機能のボタンを追加します。ボタンはアイコンと、オプションで HTML、CSS と JavaScript を使用した、ポップアップコンテンツを使用できます。

ポップアップを提供する場合は、ユーザーがボタンをクリックしたときポップアップが開かれ、ポップアップで実行されている JavaScript は、ユーザーの実行を処理できます。ポップアップを提供しない場合、ユーザーがボタンをクリックすると、クリックイベントが拡張機能の[バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)に送信されます。

You can also create and manipulate browser actions programmatically using the [browserAction API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction).

## 構文

The `browser_action` key is an object that may have any of the following properties, all optional:

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
        <div>New in Firefox 48</div>
        <p>Optional, defaulting to <code>false</code>.</p>
        <p>
          Use this to include a stylesheet in your popup that will make it look
          consistent with the browser's UI and with other extensions that use
          the <code>browser_style</code> property. Although this key defaults to
          <code>false</code>, it's recommended that you include it and set it to
          <code>true</code>.
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
      <td><code>default_area</code></td>
      <td><code>String</code></td>
      <td>
        <div>New in Firefox 54</div>
        <p>
          Defines the part of the browser in which the button is initially
          placed. This is a string that may take one of four values:
        </p>
        <ul>
          <li>
            "navbar": the button is placed in the main browser toolbar,
            alongside the URL bar.
          </li>
          <li>"menupanel": the button is placed in a popup panel.</li>
          <li>
            "tabstrip": the button is placed in the toolbar that contains
            browser tabs.
          </li>
          <li>
            "personaltoolbar": the button is placed in the bookmarks toolbar.
          </li>
        </ul>
        <p>This property is only supported in Firefox.</p>
        <p>This property is optional, and defaults to "navbar".</p>
        <p>
          An extension can't change the location of the button after it has been
          installed, but the user may be able to move the button using the
          browser's built-in UI customization mechanism.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>default_icon</code></td>
      <td><code>Object</code> or <code>String</code></td>
      <td>
        <p>
          Use this to specify one or more icons for the browser action. The icon
          is shown in the browser toolbar 既定では.
        </p>
        <p>
          Icons are specified as URLs relative to the manifest.json file itself.
        </p>
        <p>You can specify a single icon file by supplying a string here:</p>
        <pre class="brush: json no-line-numbers notranslate">
"default_icon": "path/to/geo.svg"</pre
        >
        <p>
          To specify multiple icons in different sizes, specify an object here.
          The name of each property is the icon's height in pixels, and must be
          convertible to an integer. The value is the URL. 例えば、:
        </p>
        <pre class="brush: json no-line-numbers notranslate">
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
          elements, just like a normal web page.
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
          Tooltip for the button, displayed when the user moves their mouse over
          it. If the button is added to the browser's menu panel, this is also
          shown under the app icon.
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
      <td><code>theme_icons</code></td>
      <td><code>Array</code></td>
      <td>
        <p>
          This property enables you to specify different icons for dark and
          light themes.
        </p>
        <p>
          If this property is present, it's an array containing at least one
          <code>ThemeIcons</code> object. A <code>ThemeIcons</code> object
          contains three properties, all mandatory:
        </p>
        <dl>
          <dt><code>"dark"</code></dt>
          <dd>
            A URL pointing to an icon. This icon will be selected when themes
            with dark text are active (e.g. Firefox's Light theme, and the
            Default theme if no default_icon is specified).
          </dd>
          <dt><code>"light"</code></dt>
          <dd>
            A URL pointing to an icon. This icon will be selected when themes
            with light text are active (e.g. Firefox's Dark theme).
          </dd>
          <dt><code>"size"</code></dt>
          <dd>The size of the two icons in pixels.</dd>
        </dl>
        <p>
          Icons are specified as URLs relative to the manifest.json file itself.
        </p>
        <p>
          You need to supply an <code>ThemeIcons</code> in size 16 and one in
          size 32 (for retina display).
        </p>
      </td>
    </tr>
  </tbody>
</table>

## アイコンサイズを選ぶ

The browser action's icon may need to be displayed in different sizes in different contexts:

- The icon is displayed 既定では in the browser toolbar, but the user can move it into the browser's menu panel (the panel that opens when the user clicks the "hamburger" icon). The icon in the toolbar is smaller than the icon in the menu panel.
- On a high-density display like a Retina screen, icons needs to be twice as big.

If the browser can't find an icon of the right size in a given situation, it will pick the best match and scale it. Scaling may make the icon appear blurry, so it's important to choose icon sizes carefully.

There are two main approaches to this. You can supply a single icon as an SVG file, and it will be scaled correctly:

```json
"default_icon": "path/to/geo.svg"
```

Alternatively, you can supply several icons in different sizes, and the browser will pick the best match.

In Firefox:

- The default height and width for icons in the toolbar is 16 \* [`window.devicePixelRatio`](/ja/docs/Web/API/Window/devicePixelRatio).
- The default height and width for icons in the menu panel is 32 \* [`window.devicePixelRatio`](/ja/docs/Web/API/Window/devicePixelRatio).

So you can specify icons that match exactly, on both normal and Retina displays, by supplying three icon files, and specifying them like this:

```json
    "default_icon": {
      "16": "path/to/geo-16.png",
      "32": "path/to/geo-32.png",
      "64": "path/to/geo-64.png"
    }
```

If Firefox can't find an exact match for the size it wants, then it will pick the smallest icon specified that's bigger than the ideal size. If all icons are smaller than the ideal size, it will pick the biggest icon specified.

## 例

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  }
}
```

A browser action with just an icon, specified in 2 different sizes. The extension's background scripts can receive click events when the user clicks the icon using code like this:

browser.browseAction.onClicked.addListener(handleClick);

```json
"browser_action": {
  "default_icon": {
    "16": "button/geo-16.png",
    "32": "button/geo-32.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

A browser action with an icon, a title, and a popup. The popup will be shown when the user clicks the button.

For a simple, but complete, extension that uses a browser action, see the [walkthrough tutorial](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension).

## ブラウザーの互換性

{{Compat}}
