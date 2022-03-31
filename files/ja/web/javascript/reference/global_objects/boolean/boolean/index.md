---
title: Boolean() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
tags:
  - Boolean
  - コンストラクター
  - JavaScript
  - リファレンス
browser-compat: javascript.builtins.Boolean.Boolean
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
---
{{JSRef}}

**`Boolean()`** コンストラクターは {{jsxref("Boolean")}} オブジェクトを生成するために使用します。

{{EmbedInteractiveExample("pages/js/boolean-constructor.html","shorter")}}

## 構文

```js
new Boolean()
new Boolean(value)
```

### 引数

- `value` {{optional_inline}}
  - : この `Boolean` オブジェクトの初期値です。

## 例

### `Boolean` を生成して初期値を `false` とする

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
```

### `Boolean` を生成して初期値を `true` とする

```js
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Boolean](/ja/docs/Glossary/Boolean)
