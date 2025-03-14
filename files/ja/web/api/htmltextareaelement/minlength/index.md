---
title: "HTMLTextAreaElement: minLength プロパティ"
short-title: minLength
slug: Web/API/HTMLTextAreaElement/minLength
l10n:
  sourceCommit: 8cf200c4039f6399b6696fc710bee1c4b395d401
---

{{ApiRef("HTML DOM")}}

**`minLength`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのプロパティで、この {{HTMLElement("textarea")}} 要素の値として必要な最小文字数（UTF-16 コード単位）を示します。これは、この要素の [`minlength`](/ja/docs/Web/HTML/Element/textarea#minlength) 属性を反映します。`-1` は、必要な最小文字数がないことを意味します。

> [!NOTE]
> 入力に値があり、その値が `minlength` 属性で要求される文字数よりも少ない場合、その要素は無効と見なされ、{{domxref("ValidityState")}} オブジェクトの {{domxref("ValidityState.tooShort", "tooShort")}} プロパティが `true` になります。

## 値

存在する場合は要素の `minlength` を表す数値、さもなくば `-1`。

## 例

次の HTML があったとします。

```html
<p>
  <label for="comment">Comment</label>
  <textarea id="comment" minlength="10" maxlength="200" /></textarea>
</p>
```

`minLength` プロパティを使用して、`<textarea>` の `minlength` 属性値を取得または設定することができます。

```js
const textareaElement = document.querySelector("#comment");
console.log(`Element's minLength: ${textareaElement.minLength}`); // "Element's minlength: 10"
textareaElement.minLength = 5; // この要素の minlength 属性値を更新
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.value")}}
- {{domxref("HTMLTextAreaElement.maxLength")}}
- {{domxref("ValidityState.tooShort")}}
