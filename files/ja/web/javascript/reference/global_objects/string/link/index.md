---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
---

{{JSRef}} {{deprecated_header}}

**`link()`** メソッドは、他の URL へのハイパーテキストリンクとして使用される HTML の {{HTMLElement("a")}} 要素を生成します。

## 構文

```
str.link(url)
```

### 引数

- `url`
  - : `<a>` 要素の `href` 属性を指定する任意の文字列です。これは妥当な (相対または絶対) URL を、すべての `&` の文字を `&amp;` でエスケープし、すべての `"` の文字を `&quot;` でエスケープしたものにしてください。

### 返値

HTML の {{HTMLElement("a")}} 要素を含む文字列です。

## 解説

`link()` メソッドを使用すると、ハイパーリンクを表す HTML スニペットを生成することができます。返値の文字列はその後、 {{domxref("document.write()")}} または {{domxref("element.innerHTML")}} を通して文書に追加することができます。

`link()` メソッドで生成したリンクは、 `document` オブジェクトの `links` 配列の要素になります。 {{domxref("document.links")}} を参照してください。

## 例

### small() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
var hotText = 'MDN';
var URL = 'https://developer.mozilla.org/';

console.log('Click to return to ' + hotText.link(URL));
// Click to return to <a href="https://developer.mozilla.org/">MDN</a>
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.link', 'String.prototype.link')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.link")}}

## 関連情報

- {{jsxref("String.prototype.anchor()")}}
