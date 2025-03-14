---
title: "Element: getHTML() メソッド"
short-title: getHTML()
slug: Web/API/Element/getHTML
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("DOM")}}

**`getHTML()`** は {{domxref("Element")}} インターフェイスのメソッドで、要素の DOM を HTML 文字列にシリアライズするために使用します。

このメソッドは、シャドウルートに含まれる子ノードのシリアライズを有効にするオプション引数を提供します。
このオプションによって、{{domxref("ShadowRoot/serializable","serializable")}} として設定されている入れ子のシャドウルートや、{{domxref("ShadowRoot")}} オブジェクトの指定された配列を含めることができます。

引数がない場合、シャドウルートである子ノードはシリアライズされず、このメソッドは {{domxref("Element.innerHTML")}} の値を読み取るのと同じ方法で動作します。

## 構文

```js-nolint
getHTML(options)
```

### 引数

- `options` {{optional_inline}}

  - : 以下のオプション引数を持つオプションオブジェクトです。

    - `serializableShadowRoots`
      - : 論理値で、{{domxref("ShadowRoot/serializable","serializable")}} なシャドウルートを含めるかどうかを指定します。
        既定値は `false` です。
    - `shadowRoots`
      - : シリアライズする {{domxref("ShadowRoot")}} オブジェクトの配列。
        これらは `serializable` としてマークされているかどうかや、開いているか閉じられているかに関係なく含まれます。
        既定値は空の配列です。

### 返値

要素の HTML シリアライズを表す文字列です。

### 例外

なし。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.getHTML()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
