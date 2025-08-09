---
title: "XSLTProcessor: getParameter() メソッド"
short-title: getParameter()
slug: Web/API/XSLTProcessor/getParameter
l10n:
  sourceCommit: 80a9cc85c3f718386f709c22a9e01a2a5c74580d
---

{{APIRef("XSLT")}}

`getParameter()` は {{domxref("XSLTProcessor")}} インターフェイスのメソッドで、プロセッサーにインポートされたスタイルシートの引数 (`<xsl:param>`) の値を返します。

## 構文

```js-nolint
getParameter(namespaceURI, localName)
```

### 引数

- `namespaceURI`
  - : 引数名に関連付けられた名前空間。 ["null"](/ja/docs/Web/JavaScript/Reference/Operators/null) の値は空文字列 (`""`) と同様に扱われます。
- `localName`
  - : 関連付けられた名前空間にある引数名。

### 返値

引数に関連付けられた値であるオブジェクト。任意の型を入力できます。

> [!NOTE]
> Firefox はあらゆる種類の引数に対応しています。 Chrome、Edge、Safari は文字列引数のみに対応しています。

## 例

### getParameter() の使用

例えば、 XSLT 変換の動作を制御する引数の値を調べるために、`getParameter()` を使用する方法を示します。

```js
const xsltProcessor = new XSLTProcessor();
xsltProcessor.setParameter(null, "foo", "bar");
console.log(xsltProcessor.getParameter(null, "foo")); // "bar"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
