---
title: CSS.escape()
slug: Web/API/CSS/escape
tags:
  - API
  - CSS
  - CSSOM
  - メソッド
  - リファレンス
  - Static
  - escape()
browser-compat: api.CSS.escape
translation_of: Web/API/CSS/escape
---
{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`CSS.escape()`** は静的メソッドで、 CSS セレクターの一部として使用するために引数として渡されるエスケープした文字列が入った {{DOMxRef("CSSOMString")}} を返します。

## 構文

```js
escapedStr = CSS.escape(str);
```

### 引数

- _str_
  - : エスケープ処理する {{DOMxRef("CSSOMString")}} です。

## 例

### 基本的な結果

```js
CSS.escape(".foo#bar")        // "\.foo\#bar"
CSS.escape("()[]{}")          // "\(\)\[\]\\{\\}"
CSS.escape('--a')             // "--a"
CSS.escape(0)                 // "\30 " （'0' の Unicode コードポイントは 30）
CSS.escape('\0')              // "\ufffd" （Unicode REPLACEMENT CHARACTER）
```

### 文脈内での使用

セレクターの一部として使用するために文字列をエスケープするには、 `escape()` メソッドを使用します。

```js
var element = document.querySelector('#' + CSS.escape(id) + ' > img');
```

`escape()` メソッドは文字列のエスケープにも使えますが、厳密にはエスケープする必要がない文字もエスケープしてしまいます。

```js
var element = document.querySelector('a[href="#' + CSS.escape(fragment) + '"]');
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- この静的メソッドが所属する {{DOMxRef("CSS")}} インターフェイス
- [CSS.escape のポリフィル](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
