---
title: Document.currentScript
slug: Web/API/Document/currentScript
tags:
  - API
  - DOM
  - Document
  - Property
  - Reference
  - プロパティ
translation_of: Web/API/Document/currentScript
---
{{APIRef("DOM")}}

**`Document.currentScript`** プロパティは、現在処理中で、 [JavaScript モジュールではない](https://github.com/whatwg/html/issues/997)スクリプトの {{HTMLElement("script")}} 要素を返します。 (モジュールの場合は代わりに {{JSxRef("Statements/import%2Emeta", "import.meta")}} を使用してください。

重要なことですが、スクリプト内のコードがコールバックまたはイベントハンドラーとして呼び出されている場合は、 {{HTMLElement("script")}} 要素を参照しないことに注意してください。初期化時に処理されている要素のみを参照します。

## 構文

```
var curScriptElement = document.currentScript;
```

## 例

次の例では、スクリプトが非同期で実行されているかどうかをチェックしています。

```js
if (document.currentScript.async) {
  console.log("非同期で実行中");
} else {
  console.log("同期で実行中");
}
```

[実際の表示を確認](/samples/html/currentScript.html)

## 仕様書

| 仕様書                                                                                                                       | 状態                             | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName("HTML WHATWG", "dom.html#dom-document-currentscript", "Document.currentScript")}} | {{Spec2("HTML WHATWG")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("Statements/import%2Emeta", "import.meta")}}
- {{HTMLElement("script")}}
- {{DOMxRef("document.onafterscriptexecute")}}
- {{DOMxRef("document.onbeforescriptexecute")}}
