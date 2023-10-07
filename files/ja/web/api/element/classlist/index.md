---
title: "Element: classList プロパティ"
short-title: classList
slug: Web/API/Element/classList
l10n:
  sourceCommit: 1b22d649b27f7b9359388cb57fc0075559e32584
---

{{APIRef("DOM")}}

**`Element.classList`** は読み取り専用のプロパティで、生きた {{domxref("DOMTokenList")}} コレクションでその要素の `class` 属性を返します。これを使用してクラスリストを操作することができます。

`classList` を使用することは、 {{domxref("element.className")}} から取得した空白区切りの文字列として要素のクラスのリストにアクセスすることの便利な代替手段になります。

## 値

{{domxref("DOMTokenList")}} で、その要素の `class` 属性を返します。 `class` 属性が設定されていない場合や空の場合は、空の `DOMTokenList` を返します。すなわち、 `DOMTokenList` の `length` プロパティが `0` になります。

`DOMTokenList` 自体は読み取り専用ですが、 {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, {{domxref("DOMTokenList/toggle", "toggle()")}} の各メソッドを用いてオブジェクトを変更することはできます。

要素が指定されたクラスを含むかどうかは、{{domxref("DOMTokenList/contains", "classList.contains()")}} メソッドを用いて検査することができます。

## 例

```js
const div = document.createElement("div");
div.className = "foo";

// 最初の状態: <div class="foo"></div>
console.log(div.outerHTML);

// classList API を用いてクラスを除去、追加
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// visible が設定されていれば除去し、なければ追加
div.classList.toggle("visible");

// i が 10 未満であるかどうかの条件によって visible を追加または除去
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// 複数のクラスを追加または除去
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// スプレッド構文を使用したクラスの追加または除去
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// "foo" クラスを "bar" クラスで置き換え
div.classList.replace("foo", "bar");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}}
- [`classList.js`](https://github.com/eligrey/classList.js) (クロスブラウザーの JavaScript ポリフィルで、完全に `element.classList` を実装しています)
