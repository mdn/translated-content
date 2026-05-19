---
title: Intl.RelativeTimeFormat() コンストラクター
short-title: Intl.RelativeTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**`Intl.RelativeTimeFormat()`** コンストラクターは、 {{jsxref("Intl.RelativeTimeFormat")}} オブジェクトを生成します。

## 構文

```js-nolint
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.RelativeTimeFormat()` は、[`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用しても、使用しなくても呼び出すことができます。どちらも新しい `Intl.RelativeTimeFormat` インスタンスを作成します。ただし、`new` を使用せずに呼び出し、`this` 値が別の `Intl.RelativeTimeFormat` インスタンスである場合は、特別な動作があります。[返値](#返値)を参照してください。

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグの文字列、または {{jsxref("Intl.Locale")}} インスタンス、またはそのようなロケール識別子の配列です。 `undefined` が渡された場合、または指定されたロケール識別子が対応していない場合は、実行時の既定のロケールが使用されます。 `locales` 引数の一般的な形式および解釈については、[`Intl` メインページにある引数の説明](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument)を参照してください。

    次の Unicode 拡張キーが許可されています。
    - `nu`
      - : [`numberingSystem`](#numberingsystem) を参照してください。

    このキーは、以下に掲載されている `options` にも対応しています。両方が設定されている場合、 `options` プロパティが優先されます。

- `options` {{optional_inline}}
  - : 以下のプロパティを含むオブジェクト（取得される順に記載しています。すべてオプションです）。
    - `localeMatcher`
  - : 使用するロケール照合アルゴリズムです。使用可能な値は `"lookup"` および `"best fit"` です。既定値は `"best fit"` です。このオプションについての情報は、[ロケールの識別とネゴシエーション](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl#ロケールの識別とネゴシエーション)を参照してください。
    - `numberingSystem`
      - : 数値の書式化に使用する記数法。たとえば、`"arab"`、`"hans"`、`"mathsans"`などが使用されます。対応している記数法の種類の一覧については、 [`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している記数法) を参照してください。このオプションは、Unicode 拡張キー `nu` を使用して設定することもできます。両方が指定されている場合、この `options` プロパティが優先されます。
    - `style`
      - : 国際化されたメッセージの長さです。使用可能な値は次の通りです。
        - `"long"` (デフォルト値)
          - : 例えば "'1 か月前"
        - `"short"`
          - : 例えば "1 か月前"
        - `"narrow"`
          - : 例えば "1か月前"。一部のロケールでは、narrow スタイルは short スタイルと同様になることがあります。
    - `numeric`
      - : 出力に数値を使用するかどうかを指定します。指定可能な値は `"always"` と `"auto"` です。デフォルトは `"always"` です。`"auto"` に設定すると、出力では `1 日前` ではなく `昨日` といった、より自然な表現が使用される場合があります。

### 例外

- {{jsxref("RangeError")}}
  - : `locales` または `options` に不正な値が含まれている場合に発生します。

## 例

### 基本的な書式の使い方

以下の例は、英語を使用した相対時間のフォーマッターの生成方法を示しています。

```js
// 現在のロケールで、デフォルト値を明示的に指定した
// 相対時刻フォーマッターを作成
const rtf = new Intl.RelativeTimeFormat("ja", {
  numeric: "always", // 他の値: "auto"
  style: "long", // 他の値: "short" または "narrow"
});

// 負の値 (-1) を使った相対時間の書式
rtf.format(-1, "day"); // "1 日後"

// 正の値 (1) を使った相対時間の書式
rtf.format(1, "day"); // "1 日前"
```

### auto オプションの使用

`numeric: "auto"` オプションが渡された場合は、 `yesterday` や `tomorrow` の文字列が `1 day ago` や `in 1 day` の代わりに生成されます。これにより、出力に数値が含まれなくなることがあります。

```js
// 現在のロケールで、 numeric: "auto" オプション値を渡して
// 相対時刻フォーマッターを作成
const rtf = new Intl.RelativeTimeFormat("ja", { numeric: "auto" });

// 負の値 (-1) を使った相対時間の書式
rtf.format(-1, "day"); // "昨日"

// 正の値 (1) を使った相対時間の書式
rtf.format(1, "day"); // "明日"
```

値が `0` の場合、出力は単位によって異なることがあります。「0 秒」は、その地域の言語に合わせた「今」という表現で表します。

```js
rtf.format(0, "second"); // "今"
rtf.format(0, "day"); // "今日"
rtf.format(0, "minute"); // "1 分以内"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl")}}
- [`Intl.RelativeTimeFormat`](https://v8.dev/features/intl-relativetimeformat) - v8.dev (2018)
