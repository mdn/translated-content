---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`toJSON()`** は {{jsxref("Date")}} インスタンスのメソッドで、この日時を {{jsxref("Date/toISOString", "toISOString()")}} と同じ ISO 形式で表す文字列を返します。

{{InteractiveExample("JavaScript デモ: Date.toJSON()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 UTC");

const jsonDate = event.toJSON();

console.log(jsonDate);
// 予想される結果: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// 予想される結果: "Tue, 19 Aug 1975 23:15:30 GMT"
```

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

協定世界時に基づき、指定された日付を[日時文字列形式](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#日時文字列形式)で表す文字列。または、日付が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)である場合は `null` です。有効な日時である場合、返値は {{jsxref("Date/toISOString", "toISOString()")}} と同じ ISO 形式です。

## 解説

`toJSON()` メソッドは、 `Date` オブジェクトが文字列化されると、{{jsxref("JSON.stringify()")}} によって自動的に呼び出されます。このメソッドは、通常、 [JSON](/ja/docs/Glossary/JSON) シリアライズ中に {{jsxref("Date")}} オブジェクトをシリアライズするために使用することを意図しており、 {{jsxref("Date/Date", "Date()")}} コンストラクターを使用して {{jsxref("JSON.parse()")}} の復元関数としてシリアライズ解除することができます。

このメソッドは、[プリミティブ値に変換](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)するために、まず、その `this` 値を [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (ヒントとして `"number"` を使用)、{{jsxref("Object/valueOf", "valueOf()")}}、{{jsxref("Object/toString", "toString()")}} の各メソッドをこの順で呼び出します。結果が[有限数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)でない場合は、 `null` が返されます（これは通常、{{jsxref("Date/valueOf", "valueOf()")}} が {{jsxref("NaN")}} を返す無効な日付に対応します）。それ以外の場合、変換されたプリミティブが数値でないか、有限の数値である場合は、 {{jsxref("Date/toISOString", "this.toISOString()")}} の返値が返されます。

このメソッドは、 `this` の値が有効な {{jsxref("Date")}} オブジェクトであるかどうかを検証しないことに注意してください。ただし、 `Date` 以外のオブジェクトに対して `Date.prototype.toJSON()` を呼び出すと、そのオブジェクトのプリミティブ数値表現が `NaN` であるか、そのオブジェクトが `toISOString()` メソッドを併せて持っている場合を除き、失敗します。

## 例

### toJSON() を使う

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### シリアライズの往復

日時文字列を含む JSON を構文解析する場合、 {{jsxref("Date/Date", "Date()")}} コンストラクターを使用して、それらを元の日時オブジェクトに復元することができます。

```js
const fileData = {
  author: "Maria",
  title: "Date.prototype.toJSON()",
  createdAt: new Date(2019, 3, 15),
  updatedAt: new Date(2020, 6, 26),
};
const response = JSON.stringify(fileData);

// ネットワーク経由での送信をイメージ

const data = JSON.parse(response, (key, value) => {
  if (key === "createdAt" || key === "updatedAt") {
    return new Date(value);
  }
  return value;
});

console.log(data);
```

> [!NOTE]
> `JSON.parse()` の復元関数は、期待する内容の形状に仕様上一致している必要があります。これは、シリアライズは不可逆であるため、 Date を表す文字列と通常の文字列を判別することが不可能だからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
