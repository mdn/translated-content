---
title: "HTMLTextAreaElement: type プロパティ"
short-title: type
slug: Web/API/HTMLTextAreaElement/type
l10n:
  sourceCommit: 9054005318a0d1e8fbdf28910d1dd83f7615ef70
---

{{ApiRef("HTML DOM")}}

**`type`** は {{domxref("HTMLTextAreaElement")}} の読み取り専用プロパティで、常に `textarea` を返します。

## 値

文字列で、常に `textarea` を返します。

## 例

### HTML

```html
<textarea id="txtarea"></textarea>
```

### JavaScript

```js
const txtAreaElement = document.querySelector("#txtarea");
console.log(txtAreaElement.type); // 出力結果: "textarea"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLInputElement.type")}} プロパティ
