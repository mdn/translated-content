---
title: StylePropertyMap
slug: Web/API/StylePropertyMap
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

**`StylePropertyMap`** は [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Object_Model#css_typed_object_model_experimental) のインターフェイスで、{{DOMxRef("CSSStyleDeclaration")}} に代わる CSS 宣言ブロックの表現を提供するものです。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{DOMxRef("StylePropertyMapReadOnly")}} からプロパティを継承しています。_

## インスタンスメソッド

_親である {{DOMxRef("StylePropertyMapReadOnly")}} からメソッドを継承しています。_

- {{DOMxRef("StylePropertyMap.append()")}} {{Experimental_Inline}}
  - : 指定されたプロパティと値を持つ新しい CSS 宣言を `StylePropertyMap` に追加します。
- {{DOMxRef("StylePropertyMap.clear()")}} {{Experimental_Inline}}
  - : `StylePropertyMap` 内のすべての宣言を削除します。
- {{DOMxRef("StylePropertyMap.delete()")}} {{Experimental_Inline}}
  - : 指定されたプロパティを持つ CSS 宣言を削除します。
- {{DOMxRef("StylePropertyMap.set()")}} {{Experimental_Inline}}
  - : 指定されたプロパティを持つ CSS 宣言を変更します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
