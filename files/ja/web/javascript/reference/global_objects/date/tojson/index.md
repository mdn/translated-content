---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: d6ce8fcbbc4a71ec9209f379e5ea9774bbf1f5ac
---

{{JSRef}}

**`toJSON()`** メソッドは、{{jsxref("Date")}} オブジェクトの文字列表現を返します。

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## 構文

```js-nolint
toJSON()
```

### 返値

与えられた日付を表す文字列。

## 解説

{{jsxref("Date")}} インスタンスは、特定の時点を参照します。`toJSON()` の呼び出しは、{{jsxref("Date")}} オブジェクトの値を表す文字列 ({{jsxref("Date.prototype.toISOString()", "toISOString()")}} を使用) を返します。このメソッドは、既定で、 {{jsxref("Date")}} オブジェクトを [JSON](/ja/docs/Glossary/JSON) シリアライズ中に有益にシリアライズし、その後、 [`Date()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) または [`Date.parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) の更新版としての [`JSON.parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) を使用してデシリアライズできるようにすることが一般に意図されています。

## 例

### toJSON() を使う

```js
const jsonDate = new Date().toJSON();
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 2015-10-26T07:46:36.611Z
```

### シリアライズの往復

日付文字列を含む JSON を解釈する場合、 [`Date.parse()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) を使用して、元の日付オブジェクトに復活させることができます。

```js
const fileData = {
  author: "John",
  title: "Date.prototype.toJSON()",
  createdAt: new Date(2019, 3, 15),
  updatedAt: new Date(2020, 6, 26),
};
const response = JSON.stringify(fileData);

// ネットワーク経由での送信をイメージ

const data = JSON.parse(response, (key, value) => {
  if (key === "createdAt" || key === "updatedAt") {
    return Date.parse(value);
  }
  return value;
});

console.log(data);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
