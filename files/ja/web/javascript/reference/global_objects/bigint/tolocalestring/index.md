---
title: BigInt.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

**`toLocaleString()`** は {{jsxref("BigInt")}} 値のメソッドで、この長整数値の言語に合わせた表現の文字列を返します。[`Intl.NumberFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) に対応している実装では、このメソッドは `Intl.NumberFormat` に委譲します。

`toLocaleString` が呼び出されるたびに、大規模なローカライズ文字列データベース内を検索する必要があり、潜在的に非効率的です。同じ引数でメソッドが頻繁に呼び出される場合、{{jsxref("Intl.NumberFormat")}} オブジェクトを作成し、その {{jsxref("Intl/NumberFormat/format", "format()")}} メソッドを使用する方が望ましいです。これは、`NumberFormat` オブジェクトが渡された引数を記憶し、データベースのスライスをキャッシュする可能性があるためです。これにより、将来の `format` 呼び出しでは、より限定されたコンテキスト内でローカライズ文字列を検索できるようになります。

{{InteractiveExample("JavaScript デモ: BigInt.prototype.toLocaleString()")}}

```js interactive-example
const bigint = 123456789123456789n;

// ドイツ語では千の位をピリオドで表す
console.log(bigint.toLocaleString("de-DE"));
// 予想される結果: "123.456.789.123.456.789"

// 通貨形式をリクエスト
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 予想される結果: "123.456.789.123.456.789,00 €"
```

## 構文

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 引数

`locales` および `options` の引数は、この関数の動作をカスタマイズするためのもので、アプリケーションは整形の慣例を使用する言語を指定することができます。

[`Intl.NumberFormat` API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) に対応している実装では、これらの引数は[`Intl.NumberFormat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) コンストラクターの引数と完全に一致します。`Intl.NumberFormat` に対応していない実装では、両方の引数を無視するよう求められており、使用されるロケールと返される文字列の形式は完全に実装依存となります。

- `locales` {{optional_inline}}
  - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}の文字列、またはそのような文字列の配列です。`Intl.NumberFormat()` コンストラクターの [`locales`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) 引数に対応します。

    `Intl.NumberFormat` の対応がない実装では、この引数は無視され、ホストのロケールが使用されます。

- `options` {{optional_inline}}
  - : 出力形式を調整するオブジェクトです。`Intl.NumberFormat()` コンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 引数に対応します。

    `Intl.NumberFormat` の対応がない実装では、この引数は無視されます。

これらの引数の詳細と使用方法については、[`Intl.NumberFormat()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)を参照してください。

### 返値

指定された長整数を言語固有の規則に従って表現した文字列。

`Intl.NumberFormat` に対応している実装では、これは `new Intl.NumberFormat(locales, options).format(number)` と同等です。

> [!NOTE]
> ほとんどの場合、`toLocaleString()` が返す書式は一貫しています。ただし、同じロケール内であっても、実装によって出力は異なる場合があります。出力のばらつきは設計上のものであり、仕様で認められています。また、期待した結果と異なる場合もあります。例えば、文字列に改行禁止スペースが使用されたり、書字方向制御文字で囲まれたりする場合があります。`toLocaleString()` の結果を、ハードコードされた定数と比較しないでください。

## 例

### toLocaleString() の使用

ロケールを使用しない基本的な使用では、既定のロケールと既定のオプションで成形された文字列が返されます。

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// "3,500" と表示 (U.S. English ロケールの場合)
```

### locales と options 引数への対応有無のチェック

国際化 API への対応はオプションであり、一部のシステムには必要なデータが存在しない場合があるため、`locales` および `options` 引数はすべての実装で対応しているとは限りません。国際化に対応していない実装では、`toLocaleString()` は常にシステムのロケールを使用します。これは、期待した結果とは異なる場合があります。`locales` および `options` 引数に対応している実装は、 {{jsxref("Intl")}} API にも対応している必要があるため、後者の存在を調べると対応しているかどうかを確認することができます。

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### locales の使用

この例ではローカライズされた数値書式の変化形の一部を示しています。アプリケーションのユーザーインターフェイスで使用されている言語の書式を取得するには、必ず `locale` 引き数でその言語を (場合によっては予備の言語も) 指定してください。

```js
const bigint = 123456789123456789n;

// ドイツ語では千の位の区切りにピリオドを使用
console.log(bigint.toLocaleString("de-DE"));
// 123.456.789.123.456.789

// 多くのアラビア語を話す国ではアラビア語で東アラビア数字を使用
console.log(bigint.toLocaleString("ar-EG"));
// ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// インドでは千/十万/千万の区切りを使用
console.log(bigint.toLocaleString("en-IN"));
// 1,23,45,67,89,12,34,56,789

// nu 拡張キーは数値体系を要求。例えば中国語の数字の場合
console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六,七八九,一二三,四五六,七八九

// 要求した言語に対応していない場合、例えばバリ語の場合、
// 予備の言語、この場合はインドネシア語を使用
console.log(bigint.toLocaleString(["ban", "id"]));
// → 123.456.789.123.456.789
```

### options の使用

`toLocaleString()` で提供される結果は `options` 引数でカスタマイズできます。

```js
const bigint = 123456789123456789n;

// 通貨書式を要求
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456.789.123.456.789,00 €

// 日本円には下位の単位がない
console.log(
  bigint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,456,789,123,456,789

// 有効数字を 3 桁に限定
console.log(bigint.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,00,00,00,00,00,00,000
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("BigInt.prototype.toString()")}}
