---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.formatToParts
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
---
{{JSRef}}

**`Intl.DateTimeFormat.prototype.formatToParts()`** メソッドは、ロケールを考慮した {{jsxref("Intl.DateTimeFormat")}} フォーマッターが生成する文字列のロケールを考慮した書式化を可能にします。

## 構文

```js
formatToParts(date)
```

### 引数

- `date` {{optional_inline}}
  - : 書式化する日付。

### 返値

{{jsxref("Array")}} で、書式化された日付のパーツを含むオブジェクトの配列です。

## 解説

`formatToParts()` メソッドは、日付文字列のフォーマットをカスタマイズするときに役立ちます。これは、ロケール特有の部分を保持しながら、カスタム文字列を構築できるロケール特有のトークンを含むオブジェクトの {{jsxref("Array")}} を返します。`formatToParts()` メソッドが返却する構造は、このようになります。

```js
[
  { type: 'day', value: '17' },
  { type: 'weekday', value: 'Monday' }
]
```

渡される可能性がある type は以下のとおりです。

- day
  - : 日付として使用される文字列。たとえば、 "`17`"。
- dayPeriod
  - : 日付期間として使用される文字列。たとえば、 "`AM`", "`PM`", "`in the morning`", "`noon`" など。
- era
  - : 時代として使用される文字列。たとえば、"`BC`" や "`AD`"。
- fractionalSecond
  - : 小数点以下の秒として使用される文字列です。例えば "`0`" や "`00`" や "`000`" です。
- hour
  - : 時刻として使用される文字列。たとえば "`3`" や "`03`"。
- literal
  - : 日付や時刻の区切りとして使用される文字列。たとえば "`/`"、"`,`"、"`o'clock`"、"`de`"。
- minute
  - : 分として使用される文字列。たとえば、"`00`"。
- month
  - : 月として使用される文字列。たとえば、"`12`"。
- relatedYear
  - : カレンダーの表現が year ではなくyearNameである場合、関連する4桁のグレゴリオ暦の年に使用される文字列です。例えば "`2019`" です。
- second
  - : 秒として使用される文字列。たとえば、"`07`" や "`42`"。
- timeZoneName
  - : タイムゾーン名として使用される文字列。たとえば、"`UTC`"。
- weekday
  - : 曜日として使用される文字列。たとえば、"`M`" や "`Monday`"、"`Montag`"。
- year
  - : 年として使用される文字列。たとえば、"`2012`" や "`96`"。
- yearName
  - : 関連するコンテキストで yearName に使用される文字列、例えば "`geng-zi`" など。

## ポリフィル

この機能のポリフィルは、[提案リポジトリー](https://github.com/zbraniecki/proposal-intl-formatToParts)から利用できます。

## 例

`DateTimeFormat` は、直接操作できないローカライズされた透過的でない文字列を出力します。

```js
var date = Date.UTC(2012, 11, 17, 3, 0, 42);

var formatter = new Intl.DateTimeFormat('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  fractionalSecondDigits: 3,
  hour12: true,
  timeZone: 'UTC'
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42.000 AM"
```

しかし、多くのユーザーインターフェイスでは、この文字列の書式をカスタマイズしたいという要望があります。 `formatToParts` メソッドは、文字列を部品単位で提供することで、 `DateTimeFormat` フォーマッターによって生成された文字列のロケールを意識した書式設定ができるようになります。

```js
formatter.formatToParts(date);

// return value:
[
  { type: 'weekday',   value: 'Monday' },
  { type: 'literal',   value: ', '     },
  { type: 'month',     value: '12'     },
  { type: 'literal',   value: '/'      },
  { type: 'day',       value: '17'     },
  { type: 'literal',   value: '/'      },
  { type: 'year',      value: '2012'   },
  { type: 'literal',   value: ', '     },
  { type: 'hour',      value: '3'      },
  { type: 'literal',   value: ':'      },
  { type: 'minute',    value: '00'     },
  { type: 'literal',   value: ':'      },
  { type: 'second',    value: '42'     },
  { type: 'fractionalSecond', value: '000' },
  { type: 'literal',   value: ' '      },
  { type: 'dayPeriod', value: 'AM'     }
]
```

これで情報は個別に利用可能になり、カスタマイズされた方法で再び書式化して連結することができます。例えば、{{jsxref("Array.prototype.map()")}}、<a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>、 <a href="/ja/docs/Web/JavaScript/Reference/Statements/switch">switch 文</a>、<a href="/ja/docs/Web/JavaScript/Reference/Template_literals">テンプレートリテラル</a>、 {{jsxref("Array.prototype.join()")}} などを使用しています。

```js
var dateString = formatter.formatToParts(date).map(({type, value}) => {
  switch (type) {
    case 'dayPeriod': return `<b>${value}</b>`;
    default : return value;
  }
}).join('');
```

これにより、 `formatToParts()` メソッドを使用する際に、日の部分が太字になります。

```js
console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42.000 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 <b>AM</b>"
```

### 名前付きの年と混合カレンダー

名前付きの年を使用している暦もあります。例えば、中国やチベットの暦では、 60 年周期の[干支](https://ja.wikipedia.org/wiki/%E5%B9%B2%E6%94%AF)を使用しています。これらの年は、グレゴリオ暦の年と関連付けて識別されます。このような場合、 `formatToParts()` の結果は、通常は年が存在するはずなのに、年の項目ではなく、 4 桁のグレゴリオ暦の年を含む `relatedYear` の項目を含むことになります。バッグの中の項目を (任意の値で) `year` に設定すると、年と `yearName` グレゴリオ暦の `relatedYear` の両方が得られます。

```js
let opts = { year: "numeric", month: "numeric", day: "numeric" };
let df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
[
  { type: 'relatedYear', value: '2012' },
  { type: 'literal', value: '年' },
  { type: 'month', value: '十一月' },
  { type: 'day', value: '4' }
]
```

`year` オプションがバッグ内で設定されていない場合 (任意の値に設定されている場合)、結果には `relatedYear` のみが含まれます。

```js
let df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// 返値
[
   { type: 'relatedYear', value: '2012' },
   { type: 'literal', value: '年' },
   { type: 'month', value: '十一月' },
   { type: 'day', value: '4' }
]
```

`year` を出力したい場合は、 `.format()` は一般的にこれらを並べて表示することができます。

```js
let df = new Intl.DateTimeFormat("zh-u-ca-chinese", {year: "numeric"});
df.format(Date.UTC(2012, 11, 17, 3, 0, 42));

// 返値
2012壬辰年
```

これにより、ロケールとカレンダーを両方の `format` で混在させることも可能になります。

```js
let df = new Intl.DateTimeFormat("en-u-ca-chinese", {year: "numeric"});
let date = Date.UTC(2012, 11, 17, 3, 0, 42);
df.format(date);

// 返値
2012(ren-chen)
```

および `formatToParts` の場合

```js
let opts = {month: 'numeric', day: 'numeric', year: "numeric"};
let df = new Intl.DateTimeFormat("en-u-ca-chinese", opts);
let date = Date.UTC(2012, 11, 17, 3);
df.formatToParts(date)

// 返値
[
  { type: 'month', value: '11' },
  { type: 'literal', value: '/' },
  { type: 'day', value: '4' },
  { type: 'literal', value: '/' },
  { type: 'relatedYear', value: '2012' }
]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
