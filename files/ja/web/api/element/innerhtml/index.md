---
title: "Element: innerHTML プロパティ"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

{{domxref("Element")}} オブジェクトの **`innerHTML`** プロパティは、要素内の HTML または XML のマークアップを取得したり設定したりします。

要素の内容を置き換えるというより、文書に HTML を挿入するという場合には、{{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}} メソッドを使用してください。

## 値

要素の子孫を HTML にシリアライズしたものを含んだ文字列です。`innerHTML` に値を設定すると、要素のすべての子孫を削除して、_htmlString_ の文字列で与えられた HTML を解釈して構築されたノードに置き換えます。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : 正しくない形の HTML の文字列を使用して `innerHTML` の値を設定しようとした場合に発生します。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : 親が {{domxref("Document")}} であるノードに HTML を挿入しようとした場合に発生します。

## 使用上のメモ

`innerHTML` プロパティは、ページの現在の HTML ソースを、ページが最初に読み込まれてから行われたあらゆる変更を含めて、見るために利用することができます。

### 要素の HTML コンテンツの読み取り

`innerHTML` を読み取ると、ユーザーエージェントが要素の子孫で構成される HTML または XML の断片をシリアライズします。結果として文字列が返ります。

```js
let contents = myElement.innerHTML;
```

これで、 HTML のコンテンツのノードの HTML マークアップを見ることができます。

> **メモ:** 返される HTML または XML の断片は、現在の要素の中身に基づいて生成されますので、返される断片のマークアップや整形方法は、元のページのマークアップと同じであるとは限りません。

### 要素の中身の置き換え

`innerHTML` の値を設定することで、既存の要素の内容を新しい内容に置き換えることが簡単にできます。

> **メモ:** 挿入される文字列に悪意のある内容が含まれる可能性がある場合、[セキュリティ上のリスク](#セキュリティの考慮事項)になります。
> ユーザーが提供したデータを挿入する場合は、 {{domxref("Element.setHTML()")}} を使用するよう常に検討してください。こちらは挿入する前に無害化を行います。

例えば、文書の {{domxref("Document.body", "body")}} 属性の内容を消去することで、文書の内容全体を消去することができます。

```js
document.body.innerHTML = "";
```

この例は文書の現在の HTML マークアップを走査し、 `"<"` の文字を HTML エンティティの `"&lt;"` に置き換え、それによって本質的に HTML を生テキストに変換します。そしてこれを {{HTMLElement("pre")}} で囲みます。そして、 `innerHTML` の値をこの新しい文字列に変更します。結果として、文書の内容がページ全体のソースコードの表示に置き換わります。

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### 操作の詳細

`innerHTML` に値を設定すると、正確には何が起きるのでしょうか？これを行うと、ユーザーエージェントは以下のステップを追います。

1. 指定された値は (文書型に基づいて) HTML または XML として解釈され、新しい一連の要素の DOM ノードを表す {{domxref("DocumentFragment")}} オブジェクトの中に結果が入れられます。
2. 中身を置き換えようとしている要素が {{HTMLElement("template")}} 要素である場合は、 `<template>` 要素の {{domxref("HTMLTemplateElement.content", "content")}} 属性を、ステップ 1 で生成された新しい `DocumentFragment` で置き換えます。
3. その他の要素はすべて、要素の内容を新しい `DocumentFragment` のノードで置き換えます。

### HTML を要素に適用

`innerHTML` に値を設定すると、既存の要素の一つに新しい内容物を追加します。

例えば、新しいリスト項目 (`<li>`) を既存のリスト (`<ul>`) に追加することができます。

#### HTML

```html
<ul id="list">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
</ul>
```

#### JavaScript

```js
const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
```

なお、`innerHTML` を使用して HTML 要素を追加すると（例えば `el.innerHTML += "<a href='…'>link</a>"`）、以前設定したイベントリスナーを取り除くことになります。
つまり、この方法で HTML 要素を追加すると、以前設定したイベントリスナーで待ち受けすることができなくなります。

### セキュリティの考慮事項

ウェブページにテキストを挿入するために `innerHTML` を使用している例は珍しくありません。これがサイト上の攻撃ベクトルになる可能性があり、潜在的なセキュリティリスクが生じます。

```js
let name = "John";
// 'el' を HTML の DOM 要素と想定します
el.innerHTML = name; // この場合は無害

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // この場合は無害
```

これは[クロスサイトスクリプティング](https://ja.wikipedia.org/wiki/クロスサイトスクリプティング)攻撃のように見えますが、結果的には無害です。 HTML5 では `innerHTML` で挿入された {{HTMLElement("script")}} タグは[実行するべきではない](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0)と定義しているからです。

しかし、次のように {{HTMLElement("script")}} を使わずに JavaScript を実行する方法もあるので、制御することができない文字列を設定するために `innerHTML` を使用するたびに、セキュリティリスクは残ります。

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // アラートが表示される
```

このため、 `innerHTML` を使用する代わりに次のようにしてください。

- {{domxref("Element.setHTML()")}} で DOM に挿入する前にテキストを無害化する。
- プレーンテキストを挿入する際には、代わりに {{domxref("Node.textContent")}} を使用する。これは渡されたコンテンツを HTML として解釈するのではなく、生のテキストとして挿入します。

> **警告:** プロジェクトに対して何らかの形のセキュリティレビューが行われた場合、 `innerHTML` は多くの場合で、コードが拒絶される結果になります。
> 例えば、[ブラウザー拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions)の中で [`innerHTML` を使用した場合](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation)、拡張機能を [addons.mozilla.org](https://addons.mozilla.org/) に提出すると、自動レビュープロセスを通過できないでしょう。
> 代替方法については、[ページへ外部コンテンツを安全に挿入する](/ja/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)を参照してください。

## 例

この例は `innerHTML` を使用して、ウェブページ上のボックス内にメッセージを記録するメカニズムを作成します。

### JavaScript

```js
function log(msg) {
  const logElem = document.querySelector(".log");

  const time = new Date();
  const timeStr = time.toLocaleTimeString();
  logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
}

log("Logging mouse events inside this container…");
```

`log()` 関数は {{jsxref("Date")}} オブジェクトから {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} を使用して現在時刻を取得し、タイムスタンプとメッセージテキストから成る文字列を構築してログ出力を生成します。それから `"log"` クラスのボックスにメッセージを追加します。

{{domxref("MouseEvent")}} ベースのイベント ({{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/click_event", "click")}}, {{domxref("Element/mouseenter_event", "mouseenter")}} など) についての情報を記録する第二のメソッドを追加します。

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

それから、これをログを収めるボックスの様々なマウスイベントのイベントハンドラーとして登録します。

```js
const boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

この例の HTML はとても単純です。

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

`"box"` クラスが付いた {{HTMLElement("div")}} は、単なるレイアウト用途のコンテナーであり、内容とその周りのボックスを表します。
クラスが `"log"` である `<div>` は、ログテキスト自身のコンテナーです。

### CSS

以下の CSS が例の内容をスタイル付けします。

```css
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}
```

### 結果

結果の内容はこのように見えます。
マウスを移動してボックスを出入りさせたり、中でクリックしたりすると、ログが出力されるのを見ることができます。

{{EmbedLiveSample("Examples", 640, 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.textContent")}} および {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.outerHTML")}}
- {{domxref("Element.setHTML")}}
- HTML または XML を解釈して DOM ツリーへ: {{domxref("DOMParser")}}
- DOM ツリーを XML 文字列へシリアライズ: {{domxref("XMLSerializer")}}
