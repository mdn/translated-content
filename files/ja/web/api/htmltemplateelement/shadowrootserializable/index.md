---
title: "HTMLTemplateElement: shadowRootSerializable プロパティ"
short-title: shadowRootSerializable
slug: Web/API/HTMLTemplateElement/shadowRootSerializable
l10n:
  sourceCommit: b9e02b32080fc4e079ed3d0e1ae003cab3b770ad
---

{{APIRef("Web Components")}}

**`shadowRootSerializable`** プロパティは、関連付けられた [`<template>`](/ja/docs/Web/HTML/Element/template) 要素の [`shadowrootserializable`](/ja/docs/Web/HTML/Element/template#shadowrootserializable) 属性の値を反映します。

このプロパティは開発者にとって有用ではないことに注意してください。
`<template>` 要素を使用して宣言的に [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) を作成する場合は、このオブジェクトおよびプロパティは存在しません。
それ以外の場合、`HTMLTemplateElement` が作成された場合は、オブジェクトがシャドウルートではないため、このプロパティの値は無関係であり、シャドウルートに変更することはできません。

## 値

関連付けられた [`<template>`](/ja/docs/Web/HTML/Element/template) 要素の [`shadowrootserializable`](/ja/docs/Web/HTML/Element/template#shadowrootserializable) 属性の値を反映します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`shadowrootserializable`](/ja/docs/Web/HTML/Element/template#shadowrootserializable)（`<template>` 要素の属性）
- [`ShadowRoot.serializable`](/ja/docs/Web/API/ShadowRoot/serializable)
