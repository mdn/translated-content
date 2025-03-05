---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("HTML DOM")}}

**`HTMLIFrameElement`** インターフェイスは、（継承によって使用できる通常の {{domxref("HTMLElement")}} インターフェイスのものに加えて）インラインフレーム要素を操作するための特別なプロパティを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLIFrameElement.align")}} {{Deprecated_Inline}}
  - : 文字列で、周囲のコンテキストに対するフレームの配置を指定します。
- {{domxref("HTMLIFrameElement.allow")}}
  - : この `<iframe>` に指定された[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)を示す文字列です。
- {{domxref("HTMLIFrameElement.allowFullscreen")}}
  - : 論理値で、インラインフレームを全画面モードにすることが期待されているかを示します。詳細は、[全画面モードの使用](/ja/docs/Web/API/Fullscreen_API)を参照してください。
- {{domxref("HTMLIFrameElement.allowPaymentRequest")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 論理値で、[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) をクロスオリジンの iframe 内で起動できるかどうかを示します。
- {{domxref("HTMLIFrameElement.browsingTopics")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : 現在のユーザーが選択したトピックを、関連する {{htmlelement("iframe")}} のソースのリクエストとともに送信することを指定する論理値プロパティ。これは、`browsingtopics` コンテンツ属性の値を反映します。
- {{domxref("HTMLIFrameElement.contentDocument")}} {{ReadOnlyInline}}
  - : インラインフレームの中にある閲覧コンテキストのアクティブな文書を {{domxref("Document")}} で返します。
- {{domxref("HTMLIFrameElement.contentWindow")}} {{ReadOnlyInline}}
  - : {{glossary("WindowProxy")}} で、中にある閲覧コンテキストのウィンドウプロキシーを返します。
- {{domxref("HTMLIFrameElement.credentialless")}} {{Experimental_Inline}}
  - : 論理値で `<iframe>` が無信頼であることを示し、そのコンテンツは新しい、一時的なコンテキストで読み込まれることを意味します。このコンテキストは、親コンテキストの共有ストレージと資格情報にアクセスすることはできません。その代わり {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 埋め込みルールが解除されるいため、COEP を設定した文書でもそうでないサードパーティ文書を埋め込むことができます。より詳しい説明は、[無信頼の iframe](/ja/docs/Web/Security/IFrame_credentialless) を参照してください。
- {{domxref("HTMLIFrameElement.csp")}} {{Experimental_Inline}}
  - : 埋め込み文書が自分自身に適用することに同意しなければならないコンテンツセキュリティポリシーを指定します。
- {{domxref("HTMLIFrameElement.featurePolicy")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("FeaturePolicy")}} インターフェイスを返します。これは、特定の文書に適用された[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)を調査するための単純な API を提供します。
- {{domxref("HTMLIFrameElement.frameBorder")}} {{Deprecated_Inline}}
  - : 文字列で、フレーム間に境界線を生成するかどうかを示します。
- {{domxref("HTMLIFrameElement.height")}}
  - : 文字列で HTML 属性の [`height`](/ja/docs/Web/HTML/Element/iframe#height) を反映し、フレームの高さを表します。
- {{domxref("HTMLIFrameElement.loading")}}
  - : この iframe を即座に (`eager`) 読み込むべきか、または必要に応じて (`lazy`) 読み込むべきであるというヒントをブラウザーに提供する文字列。
    これは、HTML の [`loading`](/ja/docs/Web/HTML/Element/iframe#loading) 属性を反映します。
- {{domxref("HTMLIFrameElement.longDesc")}} {{Deprecated_Inline}}
  - : フレームの長い説明文の URI をが入った文字列です。
- {{domxref("HTMLIFrameElement.marginHeight")}} {{Deprecated_Inline}}
  - : フレームのマージンの高さである文字列です。
- {{domxref("HTMLIFrameElement.marginWidth")}} {{Deprecated_Inline}}
  - : フレームのマージンの幅である文字列です。
- {{domxref("HTMLIFrameElement.name")}}
  - : 文字列で HTML 属性の [`name`](/ja/docs/Web/HTML/Element/iframe#name) を反映し、フレームを参照するための名前を表します。
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
  - : 文字列で、 HTML の [`referrerPolicy`](/ja/docs/Web/HTML/Element/iframe#referrerpolicy) 属性を反映し、リンク先のリソースを取得する際にどのリファラーを使用するかを示します。
- {{domxref("HTMLIFrameElement.sandbox")}} {{ReadOnlyInline}}
  - : {{domxref("DOMTokenList")}} で HTML の [`sandbox`](/ja/docs/Web/HTML/Element/iframe#sandbox) 属性を反映し、ネストされたコンテンツの動作に特別な制限を加えることを示します。
- {{domxref("HTMLIFrameElement.scrolling")}} {{Deprecated_Inline}}
  - : 文字列で、ブラウザーがフレームにスクロールバーを提供すべきかどうかを示します。
- {{domxref("HTMLIFrameElement.src")}}
  - : 文字列で HTML の [`src`](/ja/docs/Web/HTML/Element/iframe#src) 属性を反映し、埋め込むコンテンツのアドレスが入ります。プログラムから `<iframe>` の src 属性を削除すると（例えば {{domxref("Element.removeAttribute()")}} によって）、 Firefox （バージョン65以降）、 Chromium ベースのブラウザー、および Safari/iOS ではフレーム内に `about:blank` が読み込まれることに注意してください。
- {{domxref("HTMLIFrameElement.srcdoc")}}
  - : 文字列で、フレームに表示する内容を表します。
- {{domxref("HTMLIFrameElement.width")}}
  - : 文字列で、 HTML の [`width`](/ja/docs/Web/HTML/Element/iframe#width) 属性を反映し、フレームの幅を表します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("iframe")}}
