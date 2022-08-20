---
title: HTMLFormElement.reset
slug: Web/API/HTMLFormElement/reset
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - form
  - form Methods
translation_of: Web/API/HTMLFormElement/reset
---
## 概要

`reset` はフォームを初期状態にリセットします。

## 構文

```
HTMLFormElement.reset()
```

## 例

```js
document.forms["myform"].reset();
```

## 注記

このメソッドは、フォームのリセットボタン押下と同様の効果となります。

もしフォームコントロール（※リセットボタンなど）の id 属性か name 属性の値に "`reset`" が指定されている場合、フォームの `reset` メソッドをマスキングしてしまうという点に注意して下さい。

## 仕様書

- [DOM Level 2 HTML: reset](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76767677)
