---
title: DOMTokenList.replace()
slug: Web/API/DOMTokenList/replace
tags:
- API
- DOM
- Document
- メソッド
- リファレンス
browser-compat: api.DOMTokenList.replace
translation_of: Web/API/DOMTokenList/replace
---
{{APIRef("DOM")}}

**`replace()`** は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、既存のトークンを新しいトークンで置き換えます。最初のトークンが存在しない場合、 `replace()` はすぐに `false` を返し、トークンリストに新しいトークンを追加しません。

## 構文

```js
replace(oldToken, newToken);
```

## 引数

- `oldToken`
  - : 置き換えたいトークンを表す文字列です。
- `newToken`
  - : `oldToken` を置き換えたいトークンを表す文字列です。

### 返値

論理値で、 `oldToken` の置き換えに成功した場合は `true`、それ以外の場合は `false` です。

## 例

以下の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを `DOMTokenList` として受け取るのに {{domxref("Element.classList")}} を使用しています。それからリスト内のトークンを置き換え、リストを `<span>` の {{domxref("Node.textContent")}} に書き込みます。

最初に HTML です。

```html
<span class="a b c"></span>
```

そして JavaScript です。

```js
const span = document.querySelector("span");
const classes = span.classList;

const result = classes.replace("c", "z");

if (result) {
  span.textContent = classes;
} else {
  span.textContent = 'token not replaced successfully';
}
```

出力結果は以下のようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
