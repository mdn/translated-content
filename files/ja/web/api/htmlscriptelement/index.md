---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
tags:
  - API
  - HTML DOM
  - インターフェイス
  - NeedsNewLayout
  - リファレンス
browser-compat: api.HTMLScriptElement
translation_of: Web/API/HTMLScriptElement
---
{{APIRef("HTML DOM")}}

HTML の {{HTMLElement("script")}} 要素は **`HTMLScriptElement`** インターフェイスの公開しています。これは（通常の {{domxref("HTMLElement")}} から継承によって利用できるものに加えて） `<script>` 要素の動作や実行を操作するための特別なプロパティやメソッドを提供します。

JavaScript ファイルは `application/javascript` の [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)で提供されますが、 しかし、ブラウザーは寛大で、スクリプトが画像型 (`image/*`)、動画型 (`video/*`)、音声型 (`audio/*`)、または `text/csv` で提供されている場合のみブロックされます。スクリプトがブロックされた場合、その要素は {{domxref("Element/error_event", "error")}} イベントを受け取ります。それ以外の場合は、{{domxref("Window/load_event", "load")}} イベントを受け取ります。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLScriptElement.type")}}
  - : 文字列で、スクリプトの MIME タイプを表します。これは {{htmlattrxref("type","script")}} 属性を反映します。
- {{domxref("HTMLScriptElement.src")}}
  - : 文字列で、外部スクリプトの URL を表します。これは {{htmlattrxref("src","script")}} 属性を反映します。
- {{domxref("HTMLScriptElement.event")}} {{deprecated_inline}}
  - : 文字列です。 HTML 文書で要素にイベントハンドラーを設定するための廃止された方法です。
- {{domxref("HTMLScriptElement.charset")}} {{deprecated_inline}}
  - : 文字列で、外部スクリプトの文字エンコーディングを表します。これは {{htmlattrxref("charset","script")}} 属性を反映します。
- {{domxref("HTMLScriptElement.async")}}, {{domxref("HTMLScriptElement.defer")}}

  - : `async` および `defer` 属性は論理属性で、スクリプトの実行方法を制御します。 **`defer` および `async` 属性は `src` 属性がないときには指定しないでください。**

    取りうる実行モードは 3 種類あります。

    1. `async` 属性が存在した場合、スクリプトはダウンロードされ次第、非同期に実行されます。
    2. `async` 属性がなく `defer` 属性が存在した場合、スクリプトは[ページの解釈の終了](/ja/docs/Web/API/Window/DOMContentLoaded_event)時に実行されます。
    3. どちらの属性もなかった場合、スクリプトは直ちに読み取られて実行され、ページの解釈はブロックされます。

    `defer` 属性は `async` 属性と共に指定することができます。 `defer` のみに対応している（そして `async` には対応していない）ブラウザーでは、既定のブロックが発生する動作の代わりに `defer` で代替することができます。

    > **Note:** これらの属性における正確な処理の詳細は、 HTML の多くの異なる側面を含むため複雑であり、そのため仕様全体に散らばっています。[これらのアルゴリズム](https://html.spec.whatwg.org/multipage/scripting.html)は、核となる考えを記述していますが、 {{HTMLElement("script")}} の[開始](https://html.spec.whatwg.org/multipage/syntax.html)および[終了](https://html.spec.whatwg.org/multipage/syntax.html)タグのHTML、[外部コンテンツ](https://html.spec.whatwg.org/multipage/syntax.html)、[XML](https://html.spec.whatwg.org/multipage/xhtml.html)における解釈ルール、 [`document.write()`](/ja/docs/Web/API/Document/write) メソッドのルール、[スクリプティング](https://html.spec.whatwg.org/multipage/webappapis.html)の扱い、などによります。

- {{domxref("HTMLScriptElement.crossOrigin")}} {{experimental_inline}}
  - : 文字列で、 script 要素の [CORS 設定](/ja/docs/Web/HTML/Attributes/crossorigin) を反映します。他の[オリジン](/ja/docs/Glossary/Origin)のスクリプトについては、エラー情報が公開されるかどうかを制御します。
- {{domxref("HTMLScriptElement.text")}}

  - : この {{HTMLElement("script")}} 要素の中にあるすべての [`Text` ノード](/ja/docs/Web/API/Text)（コメントなどの他のノードを除く）の内容をツリー順で連結した文字列です。設定すると、 [`textContent`](/ja/docs/Web/API/Node/textContent) IDL 属性と同様に動作します。

    > **Note:** [`document.write()`](/ja/docs/Web/API/Document/write) メソッドで挿入された場合、 {{HTMLElement("script")}} 要素は（ふつう同期的に）実行されますが、 [`innerHTML`](/ja/docs/Web/API/Element/innerHTML) または [`outerHTML`](/ja/docs/Web/API/Element/outerHTML) を使用して挿入された場合は実行されません。

- {{domxref("HTMLScriptElement.fetchPriority")}}
  - : オプションの文字列で、ブラウザーが外部スクリプトの取得を他の外部スクリプトと比較してどのように優先させるべきかのヒントを表します。この値を指定する場合は、許可された値のいずれかでなければなりません。高い優先度で取得する場合は `high` 、低い優先度で取得する場合は `low` 、優先度がない場合は `auto` （既定値）となります。
- {{domxref("HTMLScriptElement.noModule")}}
  - : 論理値で、 true ならば [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) に対応したブラウザーにおいてスクリプトの実行を停止します。 — JavaScript モジュールに対応して*いない*古いブラウザーで代替スクリプトを実行するために使用します。
- {{domxref("HTMLScriptElement.referrerPolicy")}}
  - : 文字列で、 HTML 属性 {{htmlattrxref("referrerPolicy", "script")}} を反映し、スクリプトを取得する際、そのスクリプトの取得が完了した時にどのリファラーを使用するかを示します。

## 静的メソッド

- {{domxref("HTMLScriptElement.supports()")}}
  - : ブラウザーが指定された種類のスクリプトに対応している場合は `true` を、それ以外の場合は `false` を返します。
     このメソッドは、スクリプト関連の機能検出のためのシンプルで統一された方法を提供します。

## メソッド

_独自のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 例

### スクリプトの動的なインポート

文書内の新しいスクリプトをインポートする関数を作成しましょう。次のコードをホストする {{HTMLElement("script")}} の直前に {{HTMLElement("script")}} ノードを作成します（{{domxref("document.currentScript")}} を使用）。これらのスクリプトは**非同期**で実行されます。詳細については、 [`defer`](#defer_property) および [`async`](#async_property) プロパティを参照してください。

```js
function loadError(oError) {
  throw new URIError("The script " + oError.target.src + " didn't load correctly.");
}

function prefixScript(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) { newScript.onload = onloadFunction; }
  document.currentScript.parentNode.insertBefore(newScript, document.currentScript);
  newScript.src = url;
}
```

次の関数は、新しいスクリプトを {{domxref("document.currentScript")}} 要素の直前に追加するのではなく、 {{HTMLElement("head")}} タグの子として追加するものです。


```js
function loadError(oError) {
  throw new URIError("The script " + oError.target.src + " didn't load correctly.");
}

function affixScriptToHead(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) { newScript.onload = onloadFunction; }
  document.head.appendChild(newScript);
  newScript.src = url;
}
```

サンプルの使用法:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", function () { alert("The script \"myScript2.js\" has been correctly loaded."); });
```

### あるスクリプト種別に対応しているかどうかをチェック

{{domxref("HTMLScriptElement.supports()")}} は、ブラウザーが特定の種類のスクリプトに対応しているかどうかをチェックする統一的な仕組みを提要します。

以下の例では、 `noModule` 属性の存在を代替として使用して、モジュールの対応をチェックする方法を示しています。

```js
function checkModuleSupport() {
  if ('supports' in HTMLScriptElement) {
    return HTMLScriptElement.supports('module');
  }
  return 'noModule' in document.createElement('script');
}
```

クラシックスクリプトはすべてのブラウザーで対応していると想定できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{HTMLElement("script")}} 要素
- HTML の {{HTMLElement("noscript")}} 要素
- {{domxref("document.currentScript")}}
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API/Using_web_workers) （script と似たコードの断片だが、[別なグローバルコンテキスト](/ja/docs/Web/API/DedicatedWorkerGlobalScope)で実行されるもの）
- [Ryan Grove's \<script> and \<link> node event compatibility chart](https://pie.gd/test/script-link-events/)
