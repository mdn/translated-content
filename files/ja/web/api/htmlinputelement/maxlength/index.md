---
title: "HTMLInputElement: maxLength プロパティ"
short-title: maxLength
slug: Web/API/HTMLInputElement/maxLength
l10n:
  sourceCommit: 2d74302e9ea9c6aef27f02553fa1b421ef6a7e89
---

{{ApiRef("HTML DOM")}}

**`maxLength`** は {{domxref("HTMLInputElement")}} インターフェイスのプロパティで、この {{HTMLElement("input")}} 要素の値として入力が許可される最大文字数（UTF-16 コード単位）と、有効な値として許可される最大文字数を示します。これは、この要素の [`maxlength`](/ja/docs/Web/HTML/Element/input#maxlength) 属性を反映します。`-1` は、値の長さに制限がないことを意味します。

> [!NOTE]
> ブラウザーは通常、`maxlength` 属性で許可された文字数以上の文字が入力できないようにしています。長さがこれより長い場合、その要素は無効と見なされ、{{domxref("ValidityState")}} オブジェクトの {{domxref("ValidityState.tooLong", "tooLong")}} プロパティが `true` になります。

## 値

存在する場合は要素の `maxlength` を表す数値、さもなくば `-1`。

## 例

次の HTML があったとします。

```html
<p>
  <label for="password">パスワード</label>
  <input id="password" type="password" minlength="8" maxlength="20" />
</p>
```

`maxLength` プロパティを使用して、`<input>` の `maxlength` 属性値を取得または設定することができます。

```js
const inputElement = document.querySelector("#password");
console.log(`要素の maxLength: ${inputElement.maxLength}`); // "要素の maxlength: 20"
inputElement.maxLength = 18; // この要素の maxlength 属性値を更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.value")}}
- {{domxref("HTMLInputElement.minLength")}}
- {{domxref("ValidityState.tooLong")}}
