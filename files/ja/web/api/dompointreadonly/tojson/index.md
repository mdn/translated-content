---
title: DOMPointReadOnly.toJSON()
slug: Web/API/DOMPointReadOnly/toJSON
---

{{APIRef("DOM")}}

メソッド `toJSON()` は、この点オブジェクトの {{Glossary("JSON")}} 形式を表すオブジェクトを返します。

## 構文

```js
toJSON();
```

### 引数

なし。

### 返値

プロパティに、メソッドが呼び出された `DOMPoint` または `DOMPointReadOnly` の値が設定された新しいオブジェクトを返します。

## 例

この例では、現在のウィンドウの左上隅をスクリーン座標で表す {{domxref("DOMPoint")}} オブジェクトを作成し、それを JSON に変換しています。

```js
var topLeft = new DOMPoint(window.screenX, window.screenY);

var pointJSON = topLeft.toJSON();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
