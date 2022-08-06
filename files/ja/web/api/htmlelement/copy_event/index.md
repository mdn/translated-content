---
title: 'HTMLElement: copy イベント'
slug: Web/API/HTMLElement/copy_event
tags:
  - API
  - クリップボード API
  - HTMLElement
  - イベント
  - リファレンス
  - ウェブ
  - copy
browser-compat: api.HTMLElement.copy_event
translation_of: Web/API/HTMLElement/oncopy
---
{{ APIRef("HTML DOM") }}

**`copy`** イベントは、ユーザーがブラウザーのユーザーインターフェイスからコピー操作を行おうとした時に発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('copy', event => { });

oncopy = event => { };
```

## イベント型

{{domxref("ClipboardEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("ClipboardEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : {{domxref("DataTransfer")}} オブジェクトで、ユーザーが行った {{domxref("HTMLElement/cut_event", "cut")}}, {{domxref("HTMLElement/copy_event", "copy")}}, {{domxref("HTMLElement/paste_event", "paste")}} 操作によって影響されたデータと MIME タイプが入ります。

## 例

この例では、 {{htmlElement("textarea")}} からのすべてのコピーと貼り付けをブロックします。

### HTML

```html
<h3>このテキストエリアで実行してみる</h3>
<textarea id="editor" rows="3">このフィールドにテキストをコピー＆ペーストしてみてください。</textarea>

<h3>ログ:</h3>
<p id="log"></p>
```

### JavaScript

```js
const log = document.getElementById('log');

function logCopy(event) {
  log.innerText = 'コピーがブロックされました。\n' + log.innerText;
  event.preventDefault();
}

function logPaste(event) {
  log.innerText = '貼り付けがブロックされました。\n' + log.innerText;
  event.preventDefault();
}

const editor = document.getElementById('editor');

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
  - {{domxref("HTMLElement.cut_event")}}
  - {{domxref("HTMLElement.paste_event")}}
