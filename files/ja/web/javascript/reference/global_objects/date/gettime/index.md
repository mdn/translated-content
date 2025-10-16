---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`getTime()`** は {{jsxref("Date")}} インスタンスのメソッドで、 [元期](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)、すなわち協定世界時 (UTC) における 1970 年 1 月 1 日の先頭の深夜からの経過ミリ秒数を返します。

{{InteractiveExample("JavaScript デモ: Date.prototype.getTime()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// Jan 1, 1970, 00:00:00.000 GMT からの経過秒数
console.log(moonLanding.getTime());
// 予想される結果: -14182940000
```

## 構文

```js-nolint
getTime()
```

### 引数

なし。

### 返値

数値で、この日時のミリ秒単位の[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)です。日時が[無効](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)な場合は `NaN` を返します。

## 解説

`Date` オブジェクトは基本的に[タイムスタンプ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#元期、タイムスタンプ、無効な日時)で表されますが、このメソッドを使用すると、そのタイムスタンプを取得することができます。このメソッドを使用すると、日付と時刻を別の {{jsxref("Date")}} オブジェクトに代入するのに便利です。このメソッドは、機能的には {{jsxref("Date/valueof", "valueOf()")}} メソッドと同じです。

## 例

### getTime() を使って日付をコピーする

同一の time 値を持つ date オブジェクトを構築します。

```js
// month は 0 を基点とするため、birthday は 1995 年 1 月 10 日になります
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### 実行時間を計測する

新たに生成された {{jsxref("Date")}} オブジェクトでの、続く 2 個の `getTime()` の結果を減算して、これらの呼び出しと呼び出しの間の時間を得ます。これは、何らかの命令の実行時間を計測するために使用できます。不要な {{jsxref("Date")}} オブジェクトのインスタンス化を避けるため、{{jsxref("Date.now()")}} も参照してください。

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
```

> [!NOTE]
> {{domxref("Performance API", "パフォーマンス API", "", "nocode")}} の高解像度時刻機能に対応しているブラウザーでは、 {{domxref("Performance.now()")}} を使用すると、 {{jsxref("Date.now()")}} よりも信頼性が高く正確な経過時間を測定できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
