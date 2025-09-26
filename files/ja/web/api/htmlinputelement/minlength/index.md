---
title: "HTMLInputElement: minLength プロパティ"
short-title: minLength
slug: Web/API/HTMLInputElement/minLength
l10n:
  sourceCommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{ApiRef("HTML DOM")}}

**`minLength`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、この {{HTMLElement("input")}} 要素の値として必要な最小文字数（UTF-16 コード単位）を示します。これは、この要素の [`minlength`](/ja/docs/Web/HTML/Reference/Elements/input#minlength) 属性を反映します。`-1` は、必要な最小文字数がないことを意味します。

> [!NOTE]
> 入力に値があり、その値が `minlength` 属性で要求される文字数よりも少ない場合、その要素は無効と見なされ、{{domxref("ValidityState")}} オブジェクトの {{domxref("ValidityState.tooShort", "tooShort")}} プロパティが `true` になります。

## 値

存在する場合は要素の `minlength` を表す数値、さもなくば `-1`。

## 例

次の HTML があったとします。

```html
<p>
  <label for="password">パスワード</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

`minLength` プロパティを使用して、`<input>` の `minlength` 属性値を取得または設定することができます。

```js
const inputElement = document.querySelector("#password");
console.log(`要素の minLength: ${inputElement.minLength}`); // "要素の minlength: 8"
inputElement.minLength = 12; // この要素の minlength 属性値を更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.maxLength")}}
- {{domxref("ValidityState.tooShort")}}
