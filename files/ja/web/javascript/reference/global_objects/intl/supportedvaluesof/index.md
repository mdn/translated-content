---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

静的メソッド **`Intl.supportedValuesOf()`** は、実装で対応している暦、文字列の比較方法、通貨、数え方、単位が格納された配列を返します。

重複した値は除かれ、配列は辞書順の昇順で (より正確には、比較関数を `undefined` に設定した {{jsxref("Array/sort", "Array.prototype.sort()")}} を用いて) ソートされています。

このメソッドは、特定の実装が値に対応しているかの機能テストを行い、必要な場合のみポリフィルをダウンロードするために用いることができます。また、たとえば UI が WebGL やサーバーサイドで構築される場合に、ユーザーが好きなローカライズされた値を選択できる UI を構築するためにも使用できます。

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

## 構文

```js-nolint
Intl.supportedValuesOf(key)
```

### 引数

- `key`
  - : 返す値のカテゴリーを表すキー文字列です。`"calendar"`、`"collation"`、`"currency"`、`"numberingSystem"`、`"timeZone"`、`"unit"` のいずれかです。

### 返値

指定のキーに対応する、実装で対応している値を表す重複のない文字列のソート済み配列です。

### 例外

- {{jsxref("RangeError")}}
  - : 引数として未対応のキーが渡されたとき投げられます。

## 例

### 機能テスト

`undefined` と比較することで、このメソッドに対応しているかをチェックできます。

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // メソッドに対応している
}
```

### キーに対応するすべての値を取得する

暦に関する対応している値を取得するには、キー `"calendar"` を指定してこのメソッドを呼び出します。
その後、以下のように返された配列を走査できます。

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

> [!NOTE]
> 暦の値に関して返される配列には、常に値 `"gregory"` (グレゴリオ暦) が含まれます。

他の値も、同様にして取得できます。

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### 無効なキーでは RangeError が投げられる

```js
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  //Error: RangeError: invalid key: "someInvalidKey"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormatJS における `Intl.supportedValuesOf` のポリフィル](https://github.com/formatjs/formatjs/tree/main/packages/intl-enumerator)
- {{jsxref("Intl")}}
