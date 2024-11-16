---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Web Components")}}

`HTMLTemplateElement` インターフェイスは、HTML の {{HTMLElement("template")}} 要素の内容にアクセスできるようにします。

> [!NOTE]
> HTML パーサーは、{{HTMLElement("template")}} 要素を構文解析する際に、その `<template>` 属性に応じて、`HTMLTemplateElement` または {{domxref("ShadowRoot")}} のどちらかを生成する可能性があります。
> `HTMLTemplateElement` が作成されると、"shadow" 属性がテンプレートから反映されます。
> しかし、これらは有用ではありません。`HTMLTemplateElement` はシャドウルートではなく、シャドウルートに変更することができないからです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLTemplateElement.content", "content")}} {{ReadOnlyInline}}
  - : 読み取り専用の {{domxref("DocumentFragment")}} で、 {{HTMLElement("template")}} 要素のテンプレートの内容を表す DOM サブツリーを返します。
- {{domxref("HTMLTemplateElement.shadowRootMode", "shadowRootMode")}}
  - : 文字列で、関連付けられた `<template>` 要素の [`shadowrootmode`](/ja/docs/Web/HTML/Element/template#shadowrootmode) 属性の値を反映します。
- {{domxref("HTMLTemplateElement.shadowRootDelegatesFocus", "shadowRootDelegatesFocus")}}
  - : 論理値で、関連付けられた `<template>` 要素の [`shadowrootdelegatesfocus`](/ja/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) 属性の値を反映します。
- {{domxref("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : 論理値で、関連付けられた `<template>` 要素の [`shadowrootclonable`](/ja/docs/Web/HTML/Element/template#shadowrootclonable) 属性の値を反映します。
- {{domxref("HTMLTemplateElement.shadowRootSerializable", "shadowRootSerializable")}}
  - : 論理値で、関連付けられた `<template>` 要素の [`shadowrootserializable`](/ja/docs/Web/HTML/Element/template#shadowrootserializable) 属性の値を反映します。

## インスタンスメソッド

_このインターフェイスには {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
