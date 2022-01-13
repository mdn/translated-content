---
title: Element.classList
slug: Web/API/Element/classList
tags:
  - API
  - DOM
  - Element
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.Element.classList
translation_of: Web/API/Element/classList
---
{{APIRef("DOM")}}

**`Element.classList`** は読み取り専用のプロパティで、生きた {{domxref("DOMTokenList")}} コレクションでその要素の `class` 属性を返します。これを使用してクラスリストを操作することができます。

`classList` を使用することは、 {{domxref("element.className")}} から取得した空白区切りの文字列として要素のクラスのリストにアクセスすることの便利な代替手段になります。

## 構文

```js
const elementClasses = elementNodeReference.classList;
```

### 返値

{{domxref("DOMTokenList")}} で、その要素の `class` 属性を返します。 `class` 属性が設定されていない場合や空の場合は、空の `DOMTokenList` を返します。すなわち、 `DOMTokenList` の `length` プロパティが `0` になります。

`DOMTokenList` 自体は読み取り専用ですが、 {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, {{domxref("DOMTokenList/toggle", "toggle()")}} の各メソッドを用いてオブジェクトを変更することはできます。

## 例

```js
const div = document.createElement('div');
div.className = 'foo';

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
div.classList.toggle("visible", i < 10 );

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

> **Note:** Firefox 26 以前のバージョンでは、 add/remove/toggle メソッドでいくつかの引数の使用を実装していません。詳しくは <https://bugzilla.mozilla.org/show_bug.cgi?id=814014> を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}}
- [`classList.js`](https://github.com/eligrey/classList.js) (クロスブラウザーの JavaScript ポリフィルで、完全に `element.classList` を実装しています)
