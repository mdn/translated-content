---
title: element.setAttribute
slug: Web/API/Element/setAttribute
---

{{ApiRef}}

## 概要

指定の要素に新しい属性を追加します。または指定の要素に存在する属性の値を変更します。

## 構文

```
element.setAttribute(name,value);
```

- `name` は属性の名前を文字列で表現したものです。
- `value` は属性の希望する新しい値です。

## 例

```js
var d = document.getElementById("d1");

d.setAttribute("align", "center");
```

## 注記

指定の属性が既に存在しているときはその属性の値はこの関数に渡された値に変更されます。もし存在しなければ属性は新しく作成されます。

[`getAttribute()`](/ja/docs/DOM/element.getAttribute) は存在しない属性に対し `null` を返しますが、属性を取り除く為には `elt.setAttribute(attr, null)` を使うのではなく、[`removeAttribute()`](/ja/docs/DOM/element.removeAttribute) を使用するべきです。

`setAttribute()` を使ってある属性、XUL や HTML の特別な値、および HTML の選択領域の変更は、属性がデフォルト値を特定している場合に一貫性の無い動作となります。現在の値にアクセスしたり、変更したりするにはプロパティを使用すべきです。具体例として、 `elt.setAttribute('value',val)` の代わりに `elt.value` を使用します。

{{DOMAttributeMethods}}

## 仕様

- [DOM Level 2 Core: setAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68F082) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute))
- [HTML5: APIs in HTML documents](https://www.whatwg.org/specs/web-apps/current-work/#apis-in-html-documents)
