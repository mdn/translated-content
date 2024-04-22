---
title: "HTMLElement: cut イベント"
slug: Web/API/HTMLElement/cut_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を行おうとした時に発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかします。

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## イベント型

{{domxref("ClipboardEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("ClipboardEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : {{domxref("DataTransfer")}} オブジェクトで、ユーザーが行った {{domxref("HTMLElement/cut_event", "cut")}}, {{domxref("HTMLElement/copy_event", "copy")}}, {{domxref("HTMLElement/paste_event", "paste")}} 操作によって影響されたデータと MIME タイプが入ります。

## 例

この例では、テキストを {{htmlElement("textarea")}} からコピーすることはできますが、テキストを切り取りすることはできません。また、コピーと切り取りをしようとしたことをそれぞれ記録します。

### HTML

```html
<h3>このテキストエリアで実行しましょう。</h3>
<textarea id="editor" rows="3">
このフィールド内でテキストのコピーや切り取りをしてみましょう。
</textarea>

<h3>ログ:</h3>
<p id="log"></p>
```

### JavaScript

```js
function logCopy(event) {
  log.innerText = `Copied!\n${log.innerText}`;
}

function preventCut(event) {
  event.preventDefault();
  log.innerText = `Cut blocked!\n${log.innerText}`;
}

const editor = document.getElementById("editor");
const log = document.getElementById("log");

editor.oncopy = logCopy;
editor.oncut = preventCut;
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
  - {{domxref("HTMLElement.paste_event")}}
