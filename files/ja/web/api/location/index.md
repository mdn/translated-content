---
title: Location
slug: Web/API/Location
tags:
  - API
  - HTML DOM
  - インターフェイス
  - Location
  - リファレンス
browser-compat: api.Location
translation_of: Web/API/Location
---
{{APIRef("HTML DOM")}}

**`Location`** インターフェイスは、関連付けられたオブジェクトの場所 (URL) を表します。 変更が行われると、関連するオブジェクトに反映されます。 {{domxref("Document")}} インターフェイスおよび {{domxref("Window")}} インターフェイスにはこのような関連付けられた `Location` があり、それぞれ {{domxref("Document.location")}} および {{domxref("Window.location")}} でアクセスできます。

## Location の解剖

### HTML

```html
<span id="href" title="href"><span id="origin" title="origin"><span id="protocol" title="protocol">https:</span>//<span id="host" title="host"><span id="hostname" title="hostname">example.org</span>:<span id="port" title="port">8080</span></span></span><span id="pathname" title="pathname">/foo/bar</span><span id="search" title="search">?q=baz</span><span id="hash" title="hash">#bang</span></span>
```

### CSS

```css
html, body { height: 100%; }

html { display: table; width: 100%; }

body { display: table-cell; text-align: center; vertical-align: middle; font-family: Georgia; font-size: 200%; line-height: 1em; white-space: nowrap; }

[title] { position: relative; display: inline-block; box-sizing: border-box; line-height: 2em; cursor: pointer; }

[title]:before { content: attr(title); font-family: monospace; position: absolute; top: 100%; width: 100%; left: 50%; margin-left: -50%; font-size: 40%; line-height: 1.5; background: black; }

[title]:hover:before, :target:before { background: black; color: yellow; }

[title] [title]:before { margin-top: 1.5em; }

[title] [title] [title]:before { margin-top: 3em; }

[title] [title] [title] [title]:before { margin-top: 4.5em; }

[title]:hover, :target { position: relative; z-index: 1; outline: 50em solid rgba(255, 255, 255, .8); }
```

### JavaScript

```js
document.body.addEventListener('click', function (evt) {
    evt.preventDefault();

    window.location.hash = evt.target.hasAttribute('id')
        ? '#' + evt.target.getAttribute('id')
        : '';
});
```

### 結果

{{EmbedLiveSample('Anatomy_Of_Location', '85ch', '220px')}}

## プロパティ

- {{domxref("Location.ancestorOrigins")}}
  - : 静的な {{domxref("DOMStringList")}} で、指定された `Location` オブジェクトに関連付けられた文書の、すべての祖先の閲覧コンテキストを逆順に保持します。
- {{domxref("Location.href")}}
  - : URL 全体を収めた {{domxref("USVString")}} を返す{{Glossary("stringifier", "文字列化")}}です。この値を変更すると、関連付けられた文書が新しいページへ移動します。この値は、関連付けられた文書のものとは異なるオリジンから設定できます。
- {{domxref("Location.protocol")}}
  - : 末尾の `':'` を含む、URL のプロトコルスキームを収めた {{domxref("USVString")}} です。
- {{domxref("Location.host")}}
  - : URL のホスト (すなわち*ホスト名*、`':'`、*ポート番号*) を収めた {{domxref("USVString")}} です。
- {{domxref("Location.hostname")}}
  - : URL のドメインを収めた {{domxref("USVString")}} です。
- {{domxref("Location.port")}}
  - : URL のポート番号を収めた {{domxref("USVString")}} です。
- {{domxref("Location.pathname")}}
  - : URL のパス部分を、先頭の `'/'` を含めて収めた {{domxref("USVString")}} です。
- {{domxref("Location.search")}}
  - : URL のうち、 `'?'` とそれに続く引数や「クエリー文字列」を収めた {{domxref("USVString")}} です。最近のブラウザーは、クエリー文字列からパラメーターを容易に解析するための [URLSearchParams](/ja/docs/Web/API/URLSearchParams/get#example) や [URL.searchParams](/ja/docs/Web/API/URL/searchParams#example) を提供しています。
- {{domxref("Location.hash")}}
  - : URL のうち、 `'#'` とそれに続くフラグメント識別子を収めた {{domxref("USVString")}} です。
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : 特定の位置のオリジンの正規形を収めた {{domxref("USVString")}} です。

## メソッド

- {{domxref("Location.assign()")}}
  - : 引数で指定した URL のリソースを読み込みます。
- {{domxref("Location.reload()")}}
  - : 現在の URL のリソースを再読み込みします。
- {{domxref("Location.replace()")}}
  - : 現在のリソースを、指定した URL のリソースで置き換えます。 `assign()` メソッドとの違いは、`replace()` を使用した後は現在のページがセッションの {{domxref("History")}} に保存されないことであり、ユーザーは*戻る*ボタンを使用して移動することができません。
- {{domxref("Location.toString()")}}
  - : URL 全体を収めた {{domxref("USVString")}} を返します。これは {{domxref("Location.href")}} と同義ですが、こちらは値を変更するために使用できません。

## 例

```js
// location: https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
var loc = document.location;
console.log(loc.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(loc.protocol);  // https:
console.log(loc.host);      // developer.mozilla.org:8080
console.log(loc.hostname);  // developer.mozilla.org
console.log(loc.port);      // 8080
console.log(loc.pathname);  // /en-US/search
console.log(loc.search);    // ?q=URL
console.log(loc.hash);      // #search-results-close-container
console.log(loc.origin);    // https://developer.mozilla.org:8080

location.assign('http://another.site') // load another page
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このようなオブジェクトを生成する 2 つの手段: {{domxref("Window.location")}} および {{domxref("Document.location")}}.
- URL 関連のインターフェイス: {{domxref("URL")}}, {{domxref("URLSearchParams")}}, {{domxref("HTMLHyperlinkElementUtils")}}
