---
title: "HTMLTextAreaElement: maxLength プロパティ"
short-title: maxLength
slug: Web/API/HTMLTextAreaElement/maxLength
l10n:
  sourceCommit: 8cf200c4039f6399b6696fc710bee1c4b395d401
---

{{ApiRef("HTML DOM")}}

**`maxLength`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのプロパティで、この {{HTMLElement("textarea")}} 要素の値として入力が許可される最大文字数（UTF-16 コード単位）と、有効な値として許可される最大文字数を示します。これは、この要素の [`maxlength`](/ja/docs/Web/HTML/Element/textarea#maxlength) 属性を反映します。`-1` は、値の長さに制限がないことを意味します。

> [!NOTE]
> ブラウザーは通常、`maxlength` 属性で許可された文字数以上の文字が入力できないようにしています。長さがこれより長い場合、その要素は無効と見なされ、{{domxref("ValidityState")}} オブジェクトの {{domxref("ValidityState.tooLong", "tooLong")}} プロパティが `true` になります。

## 値

存在する場合は要素の `maxlength` を表す数値、さもなくば `-1`。

## 例

次の HTML があったとします。

```html
<p>
  <label for="comment">コメント</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

`maxLength` プロパティを使用して、`<textarea>` の `maxlength` 属性値を取得または設定することができます。

```js
const textareaElement = document.querySelector("#comment");
console.log(`要素の maxLength: ${textareaElement.maxLength}`); // "要素の maxlength: 200"
textareaElement.maxLength = 220; // この要素の maxlength 属性値を更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.value")}}
- {{domxref("HTMLTextAreaElement.minLength")}}
- {{domxref("ValidityState.tooLong")}}
