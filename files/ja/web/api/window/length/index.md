---
title: window.length
slug: Web/API/Window/length
---

{{ApiRef}}

## 概要

ウィンドウにおけるフレーム（{{HTMLElement("frame")}} か {{HTMLElement("iframe")}} 要素のいずれか）の数を返します。

## 構文

```
framesCount = window.length;
```

- `framesCount` はフレームの数です。

## 例

```js
if (window.length) {
  // サブフレーム数が 0 でない場合の処理をここに記述
}
```

## 仕様

{{Specifications}}
