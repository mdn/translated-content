---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
---

{{APIRef("HTML DOM")}}

**`HTMLIFrameElement`** インターフェイスは、（継承によって使用できる通常の {{domxref("HTMLElement")}} インターフェイスのものに加えて）インラインフレーム要素を操作するための特別なプロパティを提供します。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLIFrameElement.align")}} {{deprecated_inline}}
  - : 文字列で、周囲のコンテキストに対するフレームの配置を指定します。
- {{domxref("HTMLIFrameElement.allow")}} {{experimental_inline}}
  - : フレームがコンテンツを表示することを許可されているオリジンのリストです。この属性には `self` と `src` という値も指定でき、これらは iframe の src 属性で指定されたオリジンを表します。既定値は `src` です。
- {{domxref("HTMLIFrameElement.allowfullscreen")}} {{experimental_inline}}
  - : 論理値で、インラインフレームを全画面モードにすることが期待されているかを示します。詳細は、[全画面モードの使用](/ja/docs/Web/API/Fullscreen_API)を参照してください。
- {{domxref("HTMLIFrameElement.allowPaymentRequest")}} {{deprecated_inline}}
  - : 論理値で、[支払いリクエスト API](/ja/docs/Web/API/Payment_Request_API) をクロスオリジンの iframe 内で起動できるかどうかを示します。
- {{domxref("HTMLIFrameElement.contentDocument")}} {{readonlyInline}}
  - : インラインフレームの中にある閲覧コンテキストのアクティブな文書を {{domxref("Document")}} で返します。
- {{domxref("HTMLIFrameElement.contentWindow")}} {{readonlyInline}}
  - : {{domxref("WindowProxy")}} で、中にある閲覧コンテキストのウィンドウプロキシーを返します。
- {{domxref("HTMLIFrameElement.csp")}}
  - : 埋め込み文書が自分自身に適用することに同意しなければならないコンテンツセキュリティポリシーを指定します。
- {{domxref("HTMLIFrameElement.fetchPriority")}}
  - : オプションの文字列で、他の iframe との比較においてこの iframe の取得を優先させるためのブラウザーへのヒントを表します。この値を指定する場合、許可されている値のいずれかでなければなりません。高い優先度で取得する場合は `high`、低い優先度で取得する場合は `low`、優先度を設定しない場合は `auto` （これが既定値）です。
- {{domxref("HTMLIFrameElement.frameBorder")}} {{deprecated_inline}}
  - : 文字列で、フレーム間に境界線を生成するかどうかを示します。
- {{domxref("HTMLIFrameElement.height")}}
  - : 文字列で HTML 属性の {{htmlattrxref("height", "iframe")}} を反映し、フレームの高さを表します。
- {{domxref("HTMLIFrameElement.longDesc")}} {{deprecated_inline}}
  - : フレームの長い説明文の URI をが入った文字列です。
- {{domxref("HTMLIFrameElement.marginHeight")}} {{deprecated_inline}}
  - : フレームのマージンの高さである文字列です。
- {{domxref("HTMLIFrameElement.marginWidth")}} {{deprecated_inline}}
  - : フレームのマージンの幅である文字列です。
- {{domxref("HTMLIFrameElement.name")}}
  - : 文字列で HTML 属性の {{htmlattrxref("name", "iframe")}} を反映し、フレームを参照するための名前を表します。
- {{domxref("HTMLIFrameElement.featurePolicy")}} {{readonlyinline}}{{experimental_inline}}
  - : 特定の文書に適用される機能ポリシーを簡単にイントロスペクトするための API を提供する {{domxref("FeaturePolicy")}} インターフェイスを返します。
- {{domxref("HTMLIFrameElement.referrerPolicy")}} {{experimental_inline}}
  - : 文字列で、 HTML の {{htmlattrxref("referrerPolicy", "iframe")}} 属性を反映し、リンク先のリソースを取得する際にどのリファラーを使用するかを示します。
- {{domxref("HTMLIFrameElement.sandbox")}}
  - : {{domxref("DOMTokenList")}} で HTML の {{htmlattrxref("sandbox", "iframe")}} 属性を反映し、ネストされたコンテンツの動作に特別な制限を加えることを示します。
- {{domxref("HTMLIFrameElement.scrolling")}} {{deprecated_inline}}
  - : 文字列で、ブラウザーがフレームにスクロールバーを提供すべきかどうかを示します。
- {{domxref("HTMLIFrameElement.src")}}
  - : 文字列で HTML の {{htmlattrxref("src", "iframe")}} 属性を反映し、埋め込むコンテンツのアドレスが入ります。プログラムから `<iframe>` の src 属性を削除すると（例えば {{domxref("Element.removeAttribute()")}} によって）、 Firefox （バージョン65以降）、 Chromium ベースのブラウザー、および Safari/iOS ではフレーム内に `about:blank` が読み込まれることに注意してください。
- {{domxref("HTMLIFrameElement.srcdoc")}}
  - : 文字列で、フレームに表示する内容を表します。
- {{domxref("HTMLIFrameElement.width")}}
  - : 文字列で、 HTML の {{htmlattrxref("width", "iframe")}} 属性を反映し、フレームの幅を表します。

## メソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("iframe")}}
