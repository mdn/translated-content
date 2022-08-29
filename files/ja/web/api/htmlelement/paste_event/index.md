---
title: 'HTMLElement: paste イベント'
slug: Web/API/HTMLElement/paste_event
tags:
  - API
  - クリップボード API
  - HTMLElement
  - Event
  - リファレンス
  - ウェブ
  - paste
browser-compat: api.HTMLElement.paste_event
translation_of: Web/API/HTMLElement/paste_event
original_slug: Web/API/HTMLElement/onpaste
---
{{ APIRef("HTML DOM") }}

**`paste`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから貼り付け操作を行おうとした時に発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('paste', event => { });

onpaste = event => { };
```

## イベント型

{{domxref("ClipboardEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("ClipboardEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : {{domxref("DataTransfer")}} オブジェクトで、ユーザーが行った {{domxref("HTMLElement/cut_event", "cut")}}, {{domxref("HTMLElement/copy_event", "copy")}}, {{domxref("HTMLElement/paste_event", "paste")}} 操作によって影響されたデータと MIME タイプが入ります。

## 例

この例では、 {{htmlElement("textarea")}} からのすべてのコピーと貼り付けを記録します。

### HTML

```html
<h3>このテキストエリアで実行してみる</h3>
<textarea id="editor" rows="3">このフィールドにテキストをコピー＆ペーストしてみてください。</textarea>

<h3>ログ:</h3>
<p id="log"></p>
```

### JavaScript

```js
function logCopy(event) {
  log.innerText = 'コピーされました。\n' + log.innerText;
}

function logPaste(event) {
  log.innerText = '貼り付けされました。\n' + log.innerText;
}

const editor = document.getElementById('editor');
const log = document.getElementById('log');

editor.oncopy = logCopy;
editor.onpaste = logPaste;
```

### 結果

{{EmbedLiveSample("Example", 700, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント
  - {{domxref("HTMLElement.copy_event")}}
  - {{domxref("HTMLElement.cut_event")}}
