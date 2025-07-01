---
title: "ShadowRoot: getHTML() メソッド"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("DOM")}}

**`getHTML()`** は {{domxref("ShadowRoot")}} インターフェイスのメソッドで、シャドウルートの DOM を HTML 文字列にシリアライズするために使用します。

このメソッドは、options 引数を提供しており、シャドウルートである子ノードのシリアライズができるようにします。options を使用すると、{{domxref("ShadowRoot/serializable","シリアライズ可能","",1)}}なネストされたシャドウルートを含めることができます。また、{{domxref("ShadowRoot")}} オブジェクトの指定された配列を含めることもできます。この配列は、開いているものも閉じているものも含みます。

引数がない場合、シャドウルートである子ノードはシリアライズされず、このメソッドは {{domxref("Element.innerHTML")}} の値を読み取る場合と同じ動作をします。

## 構文

```js-nolint
const html = shadowRoot.getHTML(options)
```

### 引数

- `options` {{optional_inline}}
  - : 次のオプションのパラメーターを持つオプションオブジェクトです。
    - `serializableShadowRoots`
      - : 論理値で、[シリアライズ可能](/ja/docs/Web/API/ShadowRoot/serializable)なシャドウルートを含めるかどうかを指定します。
        既定値は `false` です。
    - `shadowRoots`
      - : シリアライズする {{domxref("ShadowRoot")}} オブジェクトの配列です。
        これらは、`serializable` としてマークされているかどうか、または開かれているか閉じられたかに関係なく含まれます。
        既定値は空の配列です。

### 返値

文字列で、シャドウルートの HTML シリアライズを表します。

### 例外

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.getHTML()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.setHTMLUnsafe()")}}
