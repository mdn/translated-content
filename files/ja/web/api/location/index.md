---
title: Location
slug: Web/API/Location
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("HTML DOM")}}

**`Location`** インターフェイスは、関連付けられたオブジェクトの場所 (URL) を表します。変更が行われると、関連するオブジェクトに反映されます。 {{domxref("Document")}} および {{domxref("Window")}} インターフェイスにはこのような関連付けられた `Location` があり、それぞれ {{domxref("Document.location")}} および {{domxref("Window.location")}} でアクセスできます。

## Location の解剖

下記 URL の各部分にポインターを当てると、その意味が強調されます。

```html hidden
<span id="href" title="href"
  ><span id="origin" title="origin"
    ><span id="protocol" title="protocol">https:</span>//<span
      id="host"
      title="host"
      ><span id="hostname" title="hostname">example.org</span>:<span
        id="port"
        title="port"
        >8080</span
      ></span
    ></span
  ><span id="pathname" title="pathname">/foo/bar</span
  ><span id="search" title="search">?q=baz</span
  ><span id="hash" title="hash">#bang</span></span
>
```

```css hidden
html {
  display: table;
  width: 100%;
}

body {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-family: Georgia;
  font-size: 175%;
  line-height: 1em;
  white-space: nowrap;
}

[title] {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  line-height: 2em;
  cursor: pointer;
  color: gray;
}

[title]::before {
  content: attr(title);
  font-family: monospace;
  position: absolute;
  top: 100%;
  width: 100%;
  left: 50%;
  margin-left: -50%;
  font-size: 60%;
  line-height: 1.5;
  background: black;
}

[title]:hover::before,
:target::before {
  background: black;
  color: yellow;
}

[title] [title]::before {
  margin-top: 1.5em;
}

[title] [title] [title]::before {
  margin-top: 3em;
}

[title] [title] [title] [title]::before {
  margin-top: 4.5em;
}

[title]:hover,
:target {
  position: relative;
  z-index: 1;
  outline: 50em solid rgba(255, 255, 255, 0.8);
}
```

```js hidden
document.body.addEventListener("click", (event) => {
  event.preventDefault();

  window.location.hash = event.target.hasAttribute("id")
    ? `#${event.target.getAttribute("id")}`
    : "";
});
```

{{EmbedLiveSample('Location anatomy', '85ch', '180px')}}

## インスタンスプロパティ

- {{domxref("Location.ancestorOrigins")}}
  - : 静的な {{domxref("DOMStringList")}} で、指定された `Location` オブジェクトに関連付けられた文書の、すべての祖先の閲覧コンテキストを逆順に保持します。
- {{domxref("Location.href")}}
  - : URL 全体を収めた文字列を返す{{Glossary("stringifier", "文字列化")}}です。この値を変更すると、関連付けられた文書が新しいページへ移動します。この値は、関連付けられた文書のものとは異なるオリジンから設定できます。
- {{domxref("Location.protocol")}}
  - : 末尾の `':'` を含む、URL のプロトコルスキームを収めた文字列です。
- {{domxref("Location.host")}}
  - : URL のホスト (すなわち*ホスト名*、`':'`、_ポート番号_) を収めた文字列です。
- {{domxref("Location.hostname")}}
  - : URL のドメインを収めた文字列です。
- {{domxref("Location.port")}}
  - : URL のポート番号を収めた文字列です。
- {{domxref("Location.pathname")}}
  - : URL のパス部分で、先頭の `'/'` に続いて URL のパス部分が入ったもので、クエリー文字列やフラグメントを含めない文字列です。
- {{domxref("Location.search")}}
  - : URL のうち、 `'?'` とそれに続く引数や「クエリー文字列」を収めた文字列です。最近のブラウザーは、クエリー文字列から引数を容易に解析するための [URLSearchParams](/ja/docs/Web/API/URLSearchParams/get#example) や [URL.searchParams](/ja/docs/Web/API/URL/searchParams#example) を提供しています。
- {{domxref("Location.hash")}}
  - : URL のうち、 `'#'` とそれに続くフラグメント識別子を収めた文字列です。
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : 特定の位置のオリジンの正規形を収めた文字列です。

## インスタンスメソッド

- {{domxref("Location.assign()")}}
  - : 引数で指定した URL のリソースを読み込みます。
- {{domxref("Location.reload()")}}
  - : 現在の URL のリソースを再読み込みします。
- {{domxref("Location.replace()")}}
  - : 現在のリソースを、指定した URL のリソースで置き換えます。 `assign()` メソッドとの違いは、`replace()` を使用した後は現在のページがセッションの {{domxref("History")}} に保存されないことであり、ユーザーは*戻る*ボタンを使用して移動することができません。
- {{domxref("Location.toString()")}}
  - : URL 全体を収めた文字列を返します。これは {{domxref("Location.href")}} と同義ですが、こちらは値を変更するために使用できません。

## 例

```js
// location: https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
const loc = document.location;
console.log(loc.href); // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(loc.protocol); // https:
console.log(loc.host); // developer.mozilla.org:8080
console.log(loc.hostname); // developer.mozilla.org
console.log(loc.port); // 8080
console.log(loc.pathname); // /en-US/search
console.log(loc.search); // ?q=URL
console.log(loc.hash); // #search-results-close-container
console.log(loc.origin); // https://developer.mozilla.org:8080

location.assign("http://another.site"); // load another page
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 2 つの `Location` のプロパティ: {{domxref("Window.location")}} および {{domxref("Document.location")}}.
- URL を操作するインターフェイス: {{domxref("URL")}}, {{domxref("URLSearchParams")}}
