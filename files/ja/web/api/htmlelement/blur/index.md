---
title: "HTMLElement: blur() メソッド"
short-title: blur()
slug: Web/API/HTMLElement/blur
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLElement.blur()`** メソッドは、現在の要素からキーボードフォーカスを取り除きます。

## 構文

```js-nolint
blur()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### テキスト入力からフォーカスを取り除く

#### HTML

```html
<input type="text" id="sampleText" value="サンプルテキスト" /><br /><br />
<button type="button" onclick="focusInput()">
  クリックするとフォーカスを得ます
</button>
```

#### JavaScript

```js
function focusInput() {
  const textField = document.getElementById("sampleText");

  textField.focus();

  // 入力欄から 3 秒後にフォーカスが外れる
  setTimeout(() => {
    textField.blur();
  }, 3000);
}
```

#### 結果

{{ EmbedLiveSample('Remove_focus_from_a_text_input') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.focus")}}
