---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{APIRef("HTML DOM")}}

HTML の {{HTMLElement("script")}} 要素は **`HTMLScriptElement`** インターフェイスを公開しています。これは `<script>` 要素の動作や実行を操作するための特別なプロパティやメソッドを（通常の {{domxref("HTMLElement")}} から継承によって利用できるものに加えて）提供します。

JavaScript ファイルは `text/javascript` の [MIME タイプ](/ja/docs/Web/HTTP/MIME_types)で提供されます。しかし、ブラウザーは寛大であり、スクリプトが画像型 (`image/*`)、動画型 (`video/*`)、音声型 (`audio/*`)、または `text/csv` で提供されている場合のみブロックされます。スクリプトがブロックされた場合、その要素は {{domxref("HTMLElement/error_event", "error")}} イベントを受け取ります。それ以外の場合は、{{domxref("Window/load_event", "load")}} イベントを受け取ります。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティもあります。_

- {{domxref("HTMLScriptElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : {{htmlelement("script")}} 要素の [`attributionsrc`](/ja/docs/Web/HTML/Element/script#attributionsrc) 属性をプログラムで取得・設定し、その属性値を反映します。`attributionsrc` はブラウザーにスクリプトリソースリクエストと一緒に {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信することを指定します。サーバー側では、これはレスポンスで {{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーを送信するトリガーとして用いられ、それぞれ JavaScript ベースの[帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources)または[帰属トリガー](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers)を登録します。
- {{domxref("HTMLScriptElement.async")}}
  - : スクリプトの実行方法を論理値で制御します。クラシックスクリプトの場合、`async` プロパティを `true` に設定すると、構文解析と並列に外部スクリプトが取得され、利用できるようになるとすぐに評価されます。[モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)の場合、`async` プロパティを `true` に設定すると、スクリプトとその依存関係がすべて並列に取得され、利用できるようになるとすぐに評価されます。
- {{domxref("HTMLScriptElement.blocking")}} {{Experimental_Inline}}
  - : スクリプトを取得する際に特定の操作を実行しないことを示す文字列です。これは {{HTMLElement("script")}} 要素の `blocking` 属性を反映しています。
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : 文字列で、外部スクリプトの文字エンコーディングを表します。これは [`charset`](/ja/docs/Web/HTML/Element/script#charset) 属性を反映します。
- {{domxref("HTMLScriptElement.crossOrigin")}}
  - : 文字列で、 script 要素の [CORS 設定](/ja/docs/Web/HTML/Attributes/crossorigin) を反映します。他の[オリジン](/ja/docs/Glossary/Origin)のスクリプトについては、エラー情報が公開されるかどうかを制御します。
- {{domxref("HTMLScriptElement.defer")}}
  - : スクリプトの実行方法を論理値で制御します。クラシックスクリプトの場合、`defer` プロパティを `true` に設定すると、外部スクリプトは文書が構文解析された後、`DOMContentLoaded` イベントを発行する前に実行されます。[モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)の場合、`defer` プロパティは何の効果もありません。
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : 文字列です。 HTML 文書で要素にイベントハンドラーを設定するための廃止された方法です。
- {{domxref("HTMLScriptElement.fetchPriority")}}
  - : オプションの文字列で、ブラウザーが外部スクリプトの取得を他の外部スクリプトと比較してどのように優先させるべきかのヒントを表します。この値を指定する場合は、許可された値のいずれかでなければなりません。高い優先度で取得する場合は `high` 、低い優先度で取得する場合は `low` 、優先度がない場合は `auto` （既定値）となります。これは {{HTMLElement("script")}} 要素の `fetchpriority` 属性を反映したものです。
- {{domxref("HTMLScriptElement.integrity")}}
  - : 取得されたリソースが予期せぬ改変なしに配信されたことを確認するためにブラウザーが使用することができる、インラインメタデータを格納する文字列です。これは {{HTMLElement("script")}} 要素の `integrity` 属性を反映したものです。
- {{domxref("HTMLScriptElement.noModule")}}
  - : 論理値で、 true ならば [ES モジュール](/ja/docs/Web/JavaScript/Guide/Modules)に対応したブラウザーにおいてスクリプトの実行を停止します。 — JavaScript モジュールに対応して*いない*古いブラウザーで代替スクリプトを実行するために使用します。
- {{domxref("HTMLScriptElement.referrerPolicy")}}
  - : 文字列で、 HTML 属性 [`referrerPolicy`](/ja/docs/Web/HTML/Element/script#referrerpolicy) を反映し、スクリプトを取得する際、そのスクリプトの取得が完了した時にどのリファラーを使用するかを示します。
- {{domxref("HTMLScriptElement.src")}}
  - : 文字列で、外部スクリプトの URL を表します。これは [`src`](/ja/docs/Web/HTML/Element/script#src) 属性を反映します。これは {{HTMLElement("script")}} 要素の `src` 属性を反映したものです。
- {{domxref("HTMLScriptElement.text")}}

  - : この {{HTMLElement("script")}} 要素の中にあるすべての {{domxref("Text")}} ノード（コメントなどの他のノードを除く）の内容をツリー順で連結した文字列です。設定した場合は、{{domxref("Node.textContent")}} プロパティと同様に動作します。

    > **メモ:** {{domxref("Document.write()")}} メソッドで挿入された場合、 {{HTMLElement("script")}} 要素は（ふつう同期的に）実行されますが、 {{domxref("Element.innerHTML")}} または {{domxref("Element.outerHTML")}} を使用して挿入された場合は実行されません。

- {{domxref("HTMLScriptElement.type")}}
  - : 文字列で、スクリプトの MIME タイプを表します。これは {{HTMLElement("script")}} 要素の `type` 属性を反映したものです。

## 静的メソッド

- {{domxref("HTMLScriptElement.supports_static")}}
  - : ブラウザーが指定された種類のスクリプトに対応している場合は `true` を、それ以外の場合は `false` を返します。
    このメソッドは、スクリプト関連の機能検出のためのシンプルで統一された方法を提供します。

## インスタンスメソッド

_独自のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## イベント

_独自のイベントはありません。親である {{domxref("HTMLElement")}} からイベントを継承しています。_

## 例

### スクリプトの動的なインポート

文書内の新しいスクリプトをインポートする関数を作成しましょう。次のコードをホストする {{HTMLElement("script")}} の直前に {{HTMLElement("script")}} ノードを作成します（{{domxref("document.currentScript")}} を使用）。これらのスクリプトは**非同期**で実行されます。詳細については、 [`defer`](#defer_property) および [`async`](#async_property) プロパティを参照してください。

```js-nolint
function loadError(oError) {
  throw new URIError(`スクリプト ${oError.target.src} は正しく読み込まれませんでした。`);
}

function prefixScript(url, onloadFunction) {
  const newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.currentScript.parentNode.insertBefore(
    newScript,
    document.currentScript,
  );
  newScript.src = url;
}
```

次の関数は、新しいスクリプトを {{domxref("document.currentScript")}} 要素の直前に追加するのではなく、 {{HTMLElement("head")}} タグの子として追加するものです。

```js-nolint
function loadError(oError) {
  throw new URIError(`スクリプト ${oError.target.src} は正しく読み込まれませんでした。`);
}

function affixScriptToHead(url, onloadFunction) {
  const newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.head.appendChild(newScript);
  newScript.src = url;
}
```

サンプルの使用法は次の通りです。

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('スクリプト "myScript2.js" は正しく読み込まれました。');
});
```

### あるスクリプト種別に対応しているかどうかをチェック

{{domxref("HTMLScriptElement.supports_static")}} は、ブラウザーが特定の種類のスクリプトに対応しているかどうかをチェックする統一的な仕組みを提要します。

以下の例では、 `noModule` 属性の存在を代替として使用して、モジュールの対応をチェックする方法を示しています。

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
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
