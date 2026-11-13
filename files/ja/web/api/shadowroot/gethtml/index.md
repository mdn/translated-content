---
title: "ShadowRoot: getHTML() メソッド"
short-title: getHTML()
slug: Web/API/ShadowRoot/getHTML
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{APIRef("DOM")}}

**`getHTML()`** は {{domxref("ShadowRoot")}} インターフェイスのメソッドで、シャドウルートの DOM を HTML 文字列にシリアライズするために使用します。

このメソッドは、options 引数を提供しており、シャドウルートである子ノードのシリアライズができるようにします。options を使用すると、{{domxref("ShadowRoot/serializable","シリアライズ可能","",1)}}なネストされたシャドウルートを含めることができます。また、{{domxref("ShadowRoot")}} オブジェクトの指定された配列を含めることもできます。この配列は、開いているものも閉じているものも含みます。

引数がない場合、シャドウルートである子ノードはシリアライズされず、このメソッドは {{domxref("Element.innerHTML")}} の値を読み取る場合と同じ動作をします。

なお、一部のブラウザーでは、属性値内に `<` や `>` 文字が現れる場合、これらを `&lt;` や `&gt;` としてシリアライズします（[ブラウザーの互換性](#ブラウザーの互換性)を参照）。
これは、攻撃者が[無害化関数](/ja/docs/Web/Security/Attacks/XSS#無害化)を迂回するような入力を仕掛けることで、クロスサイトスクリプティング (XSS) 攻撃をすることができる、潜在的なセキュリティ上の脆弱性（[ミューテーション XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)<sup>(英語)</sup>）を防ぐためのものです。

## 構文

```js-nolint
getHTML(options)
```

### 引数

- `options` {{optional_inline}}
  - : 次のオプションのパラメーターを持つオプションオブジェクトです。
    - `serializableShadowRoots`
      - : 論理値で、[シリアライズ可能](/ja/docs/Web/API/ShadowRoot/serializable)なシャドウルートを含めるかどうかを指定します。
        デフォルト値は `false` です。
    - `shadowRoots`
      - : シリアライズする {{domxref("ShadowRoot")}} オブジェクトの配列です。
        これらは、`serializable` としてマークされているかどうか、または開かれているか閉じられたかに関係なく含まれます。
        デフォルト値は空の配列です。

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
