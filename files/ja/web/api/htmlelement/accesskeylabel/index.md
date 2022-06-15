---
title: HTMLElement.accessKeyLabel
slug: Web/API/HTMLElement/accessKeyLabel
browser-compat: api.HTMLElement.accessKeyLabel
translation_of: Web/API/HTMLElement/accessKeyLabel
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.accessKeyLabel`** は読み取り専用プロパティで、要素に割り当てられたアクセスキーを（あれば）文字列で返します。それ以外の場合は空文字列を返します。

## 構文

```js
label = element.accessKeyLabel
```

## 例

### JavaScript

```js
var btn = document.getElementById('btn1');
var shortcutLabel = btn.accessKeyLabel || btn.accessKey;
btn.title += ' [' + shortcutLabel.toUpperCase() + ']';

btn.onclick = function () {
  var feedback = document.createElement('output');
  feedback.textContent = '押されました';
  btn.insertAdjacentElement('afterend', feedback);
};
```

### HTML

```html
<button accesskey="h" title="キャプション" id="btn1">マウスを当ててください</button>
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