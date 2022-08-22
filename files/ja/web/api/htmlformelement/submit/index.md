---
title: HTMLFormElement.submit
slug: Web/API/HTMLFormElement/submit
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLFormElement/submit
---
{{ApiRef}}

## 概要

`submit` はフォームを送信します。

## 構文

```
HTMLFormElement.submit();
```

## 例

```js
document.forms["myform"].submit()
```

## 注記

このメソッドはフォームの送信ボタンをクリックするのと同じ動作をします。

Gecko ベースのアプリケーションからこのメソッドを呼び出すときに、フォームの `onsubmit` イベントハンドラ (例 : `onsubmit="return false;"`) はトリガされません。一般的に、ユーザエージェントによる呼び出しは保証されていません (※参照 : <http://lists.w3.org/Archives/Public/www-dom/2012JanMar/0011.html>)

もしフォームコントロール (送信ボタン等) の `name` 属性か `id` 属性の属性値に "`submit`" が設定されていた場合、フォームの `submit` メソッドはマスキングされてしまいます。

## 仕様書

- [DOM Level 2 HTML: submit](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76767676)
