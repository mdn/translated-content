---
title: "CSS: escape() 静的メソッド"
slug: Web/API/CSS/escape_static
l10n:
  sourceCommit: f29d8a648ef7ada05a00c358bfb9e9f67f3bc90d
---

{{APIRef("CSSOM")}}

**`CSS.escape()`** は静的メソッドで、 CSS セレクターの一部として使用するために引数として渡されるエスケープ処理された文字列の入った文字列を返します。

## 構文

```js-nolint
CSS.escape(str)
```

### 引数

- `str`
  - : エスケープ処理する文字列です。

### 返値

エスケープされた文字列です。

## 例

### 基本的な結果

```js-nolint
CSS.escape(".foo#bar"); // "\.foo\#bar"
CSS.escape("()[]{}"); // "\(\)\[\]\\{\\}"
CSS.escape('--a'); // "--a"
CSS.escape(0); // "\30 " （'0' の Unicode コードポイントは 30）
CSS.escape('\0'); // "\ufffd" （Unicode REPLACEMENT CHARACTER）
```

### コンテキスト内での使用

セレクターの一部として使用するために文字列をエスケープするには、 `escape()` メソッドを使用します。

```js
const element = document.querySelector(`#${CSS.escape(id)} > img`);
```

`escape()` メソッドは文字列のエスケープにも使えますが、厳密にはエスケープする必要がない文字もエスケープしてしまいます。

```js
const element = document.querySelector(`a[href="#${CSS.escape(fragment)}"]`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- この静的メソッドが所属する {{DOMxRef("CSS")}} インターフェイス
- [CSS.escape のポリフィル](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
