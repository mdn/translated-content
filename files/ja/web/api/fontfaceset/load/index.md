---
title: "FontFaceSet: load() メソッド"
short-title: load()
slug: Web/API/FontFaceSet/load
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

`load()` は {{domxref("FontFaceSet")}} のメソッドで、引数で指定されたフォントをすべて読み込ませます。

## 構文

```js-nolint
load(font)
load(font, text)
```

### 引数

- `font`
  - : CSS の値構文を使用するフォント指定。例えば `"italic bold 16px Roboto"` です。
- `text`
  - : Unicode 範囲がテキスト中の文字の少なくとも 1 つを含んでいるフォントフェイスに限定します。これは[個々のグリフが網羅されているかどうかは調べません](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html)。

### 返値

{{jsxref("Promise")}} で、読み込まれた {{domxref("FontFace")}} オブジェクトの配列 ({{jsxref("Array")}}) で履行されます。このプロミスは、すべてのフォントが読み込まれたときに履行され、フォントが 1 つでも読み込めなかった場合は拒否されます。

## 例

次の例は、 "MyFont" の読み込みが成功したかどうかに応じて履行または拒否されるプロミスを返します。 `then()` のコードは、そのフォントが利用できるとみなされます。

```js
document.fonts.load("12px MyFont", "ß").then(/* ... */);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
