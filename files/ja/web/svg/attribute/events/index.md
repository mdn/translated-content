---
title: SVG イベント属性
slug: Web/SVG/Attribute/Events
tags:
  - 上級者
  - 属性
  - 草稿
  - Landing
  - NeedsUpdate
  - SVG
browser-compat: svg.attributes.events.global
translation_of: Web/SVG/Attribute/Events
---
イベント属性は、常に "on" で始まる名前を持ち、その後に目的とするイベントの名前が続きます。これらの属性は、属性が指定された要素に与えられた種類のイベントが発行されたときに実行される何らかのスクリプトを指定します。

ブラウザーが対応するすべての種類のイベントについて、SVG は HTML イベント属性と同じ要件に従い、イベント属性として対応しています。

グローバルイベント属性は*すべての SVG 要素*で使用可能です。その他のイベント属性の使用可否は要素によります。

イベント属性はすべて、*アニメーション不可*です。

## 属性

### アニメーションイベント属性

**`onbegin`**, **`onend`**, **`onrepeat`**

### 文書イベント属性

**`onabort`**, **`onerror`**, **`onresize`**, **`onscroll`**, **`onunload`**

### 文書要素イベント属性

**`oncopy`**, **`oncut`**, **`onpaste`**

### グローバルイベント属性

**`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**

### グラフィックイベント属性

**`onactivate`**, **`onfocusin`**, **`onfocusout`**

## ブラウザーの互換性

{{Compat}}
