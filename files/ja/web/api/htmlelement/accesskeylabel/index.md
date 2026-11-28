---
title: "HTMLElement: accessKeyLabel プロパティ"
short-title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.accessKeyLabel`** は読み取り専用プロパティで、ブラウザーが要素にアクセスキーを割り当てている場合は、そのキーを含む文字列を返します。割り当てられていない場合は空文字列を返します。

## 例

### HTML

```html
<button accesskey="h" title="キャプション" id="btn1">
  マウスポインターを合わせてください
</button>
```

### JavaScript

```js
const btn = document.getElementById("btn1");
const shortcutLabel = btn.accessKeyLabel || btn.accessKey;
btn.title += ` [${shortcutLabel.toUpperCase()}]`;

btn.onclick = () => {
  const feedback = document.createElement("output");
  feedback.textContent = "押されました！";
  btn.insertAdjacentElement("afterend", feedback);
};
```

### 結果

{{ EmbedLiveSample('Example') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.accessKey")}}
- [accesskey](/ja/docs/Web/HTML/Reference/Global_attributes/accesskey) グローバル属性
