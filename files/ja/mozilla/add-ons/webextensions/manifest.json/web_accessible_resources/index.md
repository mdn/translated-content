---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td><p>いいえ</p></td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json notranslate">
"web_accessible_resources": [
  "images/my-image.png"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## 説明

ときには、拡張機能に何らかのリソース - たとえば、画像や HTML、CSS、JavaScript - をパッケージして、ウェブページで使用できるようにしたい場合があります。

たとえば、[2 つめの WebExtension](/ja/Add-ons/WebExtensions/Walkthrough) で使われている "beastify" 例題エクステンションでは、[`<img>`](/ja/docs/Web/HTML/Element/img) 要素の `src` 属性を設定することで、ウェブページの画像を動物に置き換えています。画像は拡張機能とともにパッケージ化されており、ウェブページがそれらをロードできるようにするには、ウェブアクセシブルにする必要があります。

`web_accessible_resources` キーは、この方法でウェブページで利用可能にしたいすべてのパッケージされたリソースをリストします。manifest.json ファイルを基準としたパスを指定します。

コンテンツスクリプトは、ウェブアクセシブルリソースとしてリストする必要がないことに注意してください。

しかし、拡張機能が {{WebExtAPIRef("webRequest")}} API を使ってパブリックな (例 HTTPS) URL から拡張機能にパッケージされたページにリダイレクトする場合、拡張機能は`web_accessible_resources` キーにリストしておく必要があります。

### web_accessible_resources を使う

例えば、拡張機能に images/my-image.png にある画像ファイルを入れたい場合、このようにします:

```plain
my-extension-files/
    manifest.json
    my-background-script.js
    images/
        my-image.png
```

ウェブページに、この画像を指す `src` 属性のある [`<img>`](/ja/docs/Web/HTML/Element/img) 要素を入れるには、 "web_accessible_resources" で次のように指定します:

```json
"web_accessible_resources": ["images/my-image.png"]
```

このファイルは次の URL で利用できます:

```url
moz-extension://<extension-UUID>/images/my-image.png
```

`<extension-UUID>` は拡張機能の ID **ではありません。**これは各ブラウザーインスタンス用にランダムに生成されます。これはウェブサイトがインストールしている拡張機能を調べることで指紋を取ることを防止します。

> **メモ:** Chrome では、拡張機能の ID は固定です。リソースを `web_accessible_resouce` に指定すると、`chrome-extension://<your-extension-id>/<path/to/resouce>` でアクセス可能です。

この URL を取得する推奨される方法は、[`browser.runtime.getURL`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) API を使用して、 manifest.json の相対パスとして渡すことです:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

この方法は拡張機能が実行されているブラウザがなんであれ正しい URL を取得します。

### ワイルドカード

`web_accessible_resources`エントリーにはワイルドカードを含めることができます。たとえば下記のエントリーでも "images/my-image.png" のリソースを入れることができます:

```json
"web_accessible_resources": ["images/*.png"]
```

### セキュリティ

ページを web-accessible にすると、あらゆるウェブサイトからそのページにリンクやリダイレクトができます。このページは、通常のウェブページと同様に、あらゆる入力 (例えば POST データ) を、信頼のないソースから取っときたかのように扱うべきです。

## 例

```json
"web_accessible_resources": ["images/my-image.png"]
```

"images/my-image.png" のファイルをウェブアクセス可能にしています。

## ブラウザーの互換性

{{Compat("webextensions.manifest.web_accessible_resources")}}
