---
title: Clipboard.readText()
slug: Web/API/Clipboard/readText
tags:
  - API
  - Async Clipboard API
  - Clip
  - Clipboard
  - Clipboard API
  - Cut
  - Editing
  - Method
  - Pasteboard
  - Reference
  - Text
  - copy
  - paste
  - readText
translation_of: Web/API/Clipboard/readText
---
{{APIRef("Clipboard API")}}

**{{domxref("Clipboard")}}** インターフェイスの **`readText()`** メソッドは、システムクリップボードのテキストの内容のコピーに解決される {{jsxref("Promise")}} を返します。

## 構文

    var promise = navigator.clipboard.readText()

### パラメーター

なし。

### 戻り値

クリップボードのテキストの内容を持つ {{domxref("DOMString")}} に解決される、{{jsxref("Promise")}} オブジェクト。クリップボードが空であったり、テキストがないか、クリップボードの内容を表す {{domxref("DataTransfer")}} オブジェクトがテキストの表現を持たない場合は、空文字列を返します。

テキストでない内容をクリップボードから読むためには、代わりに {{domxref("Clipboard.read", "read()")}} メソッドを使ってください。クリップボードへのテキストの書き込みには、{{domxref("Clipboard.writeText", "writeText()")}} を使ってください。

## 例

この使用例は、クリップボードからテキストの内容を取得し、ある要素の内容にその取得されたテキストを設定します。

```js
navigator.clipboard.readText().then(
  clipText => document.getElementById("outbox").innerText = clipText);
```

## 仕様

| 仕様書                                                                                       | 策定状況                             | コメント |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Clipboard API','#dom-clipboard-readtext','readText()')}} | {{Spec2('Clipboard API')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.Clipboard.readText")}}

## 関連情報

- [Clipboard API](/ja/docs/Web/API/Clipboard_API)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
