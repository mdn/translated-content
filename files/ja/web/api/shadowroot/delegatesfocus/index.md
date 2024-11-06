---
title: "ShadowRoot: delegatesFocus プロパティ"
short-title: delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
l10n:
  sourceCommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{APIRef("Shadow DOM")}}

**`delegatesFocus`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、シャドウルートがフォーカスを委任する場合は `true`、そうでなければ `false` を返します。

`true` の場合、シャドウ DOM のフォーカスを受け取れない部分がクリックされるか、ホスト要素に対して `.focus()` が呼び出されると、フォーカスを受け取ることができる最初の部分がフォーカスを受け取り、シャドウホストが `:focus` のスタイルになります。

キーボードのユーザー（スクリーンリーダーを使用するユーザーも含む）にとっては、フォーカスが特に重要です。 `delegatesFocus` の既定の動作は、最初のフォーカス可能な要素にフォーカスを当てるというものです。これは、その要素がタブ順序の一部として意図されていない場合（例えば、`tabindex="-1"` の要素）や、より「重要な」フォーカス可能な要素に初期フォーカスを当てるべき場合（例えば、最初のテキストフィールドをその前にある「閉じる」ボタンより優先させるなど）には望ましくない場合があります。このような場合、初期フォーカスを受け取る要素に `autofocus` 属性を指定することができます。 `autofocus` 属性は、アクセシビリティに関する課題を引き起こす可能性があるため、使用する際には注意が必要です。例えば、DOM の順序が後にある要素にフォーカスが設定されているために気づかないような重要なコンテンツを回避するといった課題です。

このプロパティ値は、元々、{{domxref("Element.attachShadow()")}} に渡すオブジェクトの `delegatesFocus` プロパティを使用するか、またはシャドウルートを宣言的に作成する際の [`<template>`](/ja/docs/Web/HTML/Element/template) 要素の [`shadowrootdelegatesfocus`](/ja/docs/Web/HTML/Element/template#shadowrootclonable) 属性を使用して設定します。

### 値

シャドウルートがフォーカスを譲る場合は `true`、そうでない場合は `false`。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

`<template>` のドキュメント内の[フォーカスのｐ譲渡を伴う宣言的シャドウ DOM](/ja/docs/Web/HTML/Element/template#フォーカスを譲渡を伴う宣言的シャドウ_dom)の例では、フォーカスを譲ることの効果が示されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
