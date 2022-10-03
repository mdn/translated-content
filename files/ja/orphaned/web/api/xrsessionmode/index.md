---
title: XRSessionMode
slug: orphaned/Web/API/XRSessionMode
original_slug: Web/API/XRSessionMode
---

{{APIRef("WebXR Device API")}}

[WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) の **`XRSessionMode`** 列挙型は、使用できるセッションモードの可能な種類を識別するために使用される文字列値を定義します。

## 値

- `immersive-ar` {{experimental_inline}}

  - : セッションの出力には、没入型デバイスへの排他的アクセスが許可されますが、レンダリングされたコンテンツは実世界の環境とブレンドされます。 セッションの {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} は、コンテンツをブレンドするために使用する方法を示します。

    > **警告:** `immersive-ar` モードは、WebXR 拡張現実モジュールによって定義されていますが、まだ安定しておらず、テストと実験以外には使用しないでください。

- `immersive-vr`
  - : レンダリングされたセッションが VR モードの没入型 XR デバイスを使用して表示されることを示します。 これは、周囲の環境にオーバーレイしたり、統合したりすることを意図したものではありません。 {{DOMxRef("XRSession.environmentBlendMode", "environmentBlendMode")}} は、可能であれば `opaque` であると予想されますが、ハードウェアが必要とする場合は `additiv` になる可能性があります。
- `inline`
  - : 出力は、視覚的な空間全体を占めるのではなく、標準の HTML 文書の要素のコンテキスト内でインラインで表示されます。 インラインセッションは、モノラルモードまたはステレオモードのいずれかで表示でき、ビューアー追跡を利用できる場合とできない場合があります。 インラインセッションは特別なハードウェアを必要とせず、WebXR API のサポートを提供するすべての{{Glossary("user agent","ユーザーエージェント")}}で利用可能である必要があります。

## 使用上の注意

`XRSessionMode` 型は、{{domxref("XRSystem.isSessionSupported()")}} を呼び出して、指定されたセッションタイプがサポートされ、使用できるかどうかを判断するとき、および {{domxref("XRSystem.requestSession", "requestSession()")}} によって新しい WebXR セッションを開こうとするときに指定できる値を示します。

どちらも没入型セッションであるため、`immersive-ar` モードは、`immersive-vr` と同じ機能と参照空間をすべてサポートします。 ブラウザーはこれらのモードのいずれかまたは両方をサポートできますが、WebXR が使用可能な場合は、`inline` モードが*常に*サポートされます。

## 仕様

| 仕様                                                                                                                             | 状態                                 | コメント                |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------- |
| {{SpecName("WebXR","#xrsessionmode-enum","XRSessionMode")}}                                                 | {{Spec2("WebXR")}}             | 初期定義                |
| {{SpecName("WebXR AR Module", "#dom-xrsessionmode-immersive-ar", "XRSessionMode: immersive-ar")}} | {{Spec2("WebXR AR Module")}} | `immersive-ar` 値を追加 |

## ブラウザーの互換性

{{Compat("api.XRSessionMode")}}
