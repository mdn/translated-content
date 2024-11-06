---
title: "HTMLElement: accessKeyLabel プロパティ"
short-title: accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.accessKeyLabel`** は読み取り専用プロパティで、要素に割り当てられたアクセスキーを（あれば）文字列で返します。それ以外の場合は空文字列を返します。

## 構文

```js-nolint
label = element.accessKeyLabel
```

## 例

### JavaScript

```js
const btn = document.getElementById("btn1");
const shortcutLabel = btn.accessKeyLabel || btn.accessKey;
btn.title += ` [${shortcutLabel.toUpperCase()}]`;

btn.onclick = () => {
  const feedback = document.createElement("output");
  feedback.textContent = "Pressed!";
  btn.insertAdjacentElement("afterend", feedback);
};
```

### HTML

```html
<button accesskey="h" title="キャプション" id="btn1">
  マウスを当ててください
</button>
```

### 結果

{{ EmbedLiveSample('Example') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.accessKey")}}
- [accesskey](/ja/docs/Web/HTML/Global_attributes/accesskey) グローバル属性
