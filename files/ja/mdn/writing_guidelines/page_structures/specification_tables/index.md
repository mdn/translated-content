---
title: 仕様書一覧表
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

MDN 上のすべてのリファレンスページでは、 API または技術が定義されている仕様書に関する情報を提供するようにしてください。この記事ではこれらの表の外見を示し、構築方法を説明します。

仕様書一覧表の節の定義は[互換性一覧表](/ja/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)と似ており、ページでは通常その直前に現れる、同じデータソースから生成されるのが一般的です。

## 標準の仕様書一覧表

標準の仕様書の節は次のようにしてください。

```md
## 仕様書

\{{Specifications}}
```

`\{{Specifications}}` マクロはページのフロントマターの値に基づいて仕様表を生成します。

既定では `browser-compat` キーの値が使用されます。
各値は [browser-compat-data](https://github.com/mdn/browser-compat-data) リポジトリーにある特定の機能とそれに関連する互換性や仕様情報を参照します。
例えば、 {{cssxref("text-align")}} ページには次のキーがあり、関連する仕様情報を取得するために使用します。

```yaml
browser-compat: css.property.text-align
```

一部の機能は上記のリポジトリーで管理されていません。
このような用途では、 `spec-urls` キーを使用してページのフロントマターに仕様情報を追加することができます。
例えば、 [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) 属性はフロントマターキーがあります。

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

上記の `css.property.text-align` キーの仕様表は、示すように表でレンダリングされます。

### 仕様書

{{Specifications}}

## 標準外の機能

標準外の機能、特に標準化の流れから除去された機能を文書化する場合は、 `{{Specifications}}` マクロを呼び出さないでください。

その代わり、機能の状況や考えられる代替案についての情報を提供するようにしましょう。例えば次のようにします。

- このメソッドはもう標準化路線にありません。互換性のために残してあります。代わりに _他のこのメソッド_ を使用してください。
- このメソッドはもともと [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/) の一部でしたが、現在の DOM 仕様には存在しません。この機能は、もはや標準になる見込みはありません。
- このイベントハンドラーは、古い [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) の一部でしたが、[WebXR Device API](https://immersive-web.github.io/webxr/) に取って代わられました。この機能は標準化される予定がありません。
