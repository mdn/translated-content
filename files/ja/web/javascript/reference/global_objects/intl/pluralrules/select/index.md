---
title: Intl.PluralRules.prototype.select()
short-title: select()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`select()`** は {{jsxref("Intl.PluralRules")}} インスタンスのメソッドで、ロケールを考慮した書式設定に使用する複数形ルールを示す文字列を返します。

{{InteractiveExample("JavaScript デモ: Intl.PluralRules.prototype.select()")}}

```js interactive-example
console.log(new Intl.PluralRules("ar-EG").select(0));
// 予想される結果: "zero"

console.log(new Intl.PluralRules("ar-EG").select(5));
// 予想される結果: "few"

console.log(new Intl.PluralRules("ar-EG").select(55));
// 予想される結果: "many"

console.log(new Intl.PluralRules("en").select(0));
// 予想される結果: "other"
```

## 構文

```js-nolint
select(number)
```

### 引数

- `number`
  - : 複数のルールを取得するための数値です。

### 返値

数字の複数形のカテゴリーを表す文字列で、 `zero`, `one`, `two`, `few`, `many`, `other` のいずれかになります。

## 解説

この関数は、 {{jsxref("Intl.PluralRules")}} オブジェクトのロケールや書式オプションに応じて、複数形のカテゴリーを選択します。
これらのオプションは、[`Intl.PluralRules()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) コンストラクターで設定されます。

## 例

### select() の使用

まず、適切な `locales` および `options` 引数を渡して、`Intl.PluralRules` オブジェクトを生成します。
ここでは、エジプト方言のアラビア語用の複数形ルールオブジェクトを作成します。
`type` が指定されていないため、ルールオブジェクトは基数詞の書式化を行います（デフォルト）。

```js
const pr = new Intl.PluralRules("ar-EG");
```

次に、ルールオブジェクトに対して `select()` を呼び出し、複数形が要求される数値を指定します。
なお、図に示すように、アラビア語には基数詞に 5 つの形があります。

```js
pr.select(0); // 'zero'
pr.select(1); // 'one'
pr.select(2); // 'two'
pr.select(6); // 'few'
pr.select(18); // 'many'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.PluralRules")}}
