---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
tags:
  - API
  - DOM
  - Element
  - メソッド
  - リファレンス
browser-compat: api.Element.getAttribute
translation_of: Web/API/Element/getAttribute
---
{{APIRef("DOM")}}

**`getAttribute()`** は {{domxref("Element")}} インターフェイスのメソッドで、この要素の指定された属性の値を返します。

指定された属性が存在しない場合、値は `null` か `""` （空文字列）のどちらかになります。詳しくは[属性が存在しない場合](#属性が存在しない場合)を参照してください。

## 構文

```js
let attribute = element.getAttribute(attributeName);
```

ここで、

- `attribute` は `attributeName` の値を持つ文字列です。
- `attributeName` は値を取得したい属性の名前です。

## 例

```js
<!-- HTML 文書内の div の例 -->
<div id="div1">Hi Champ!</div>

// コンソールへの出力
const div1 = document.getElementById('div1');
//=> <div id="div1">Hi Champ!</div>

const exampleAttr= div1.getAttribute('id');
//=> "div1"

const align = div1.getAttribute('align')
//=> null
```

## 解説

### 小文字化

HTML 文書とされている DOM の HTML 要素に対して呼び出すと、 `getAttribute()` は処理前に引数を小文字化します。

### 属性が存在しない場合

基本的にはすべてのウェブブラウザー（限定的なリストですが Firefox, Internet Explorer, Opera の最新バージョン, Safari, Konqueror, iCab など）は、指定された要素に指定された属性が存在しない場合は `null` を返します。これは[現在の DOM 仕様書の草稿](https://dom.spec.whatwg.org/#dom-element-getattribute)で指定されています。一方、古い DOM 3 Core 仕様書では、このような場合の正しい返値は実際には空文字列となっています。そしていくつかの DOM の実装はこの動作を実装しています。実際、 `getAttribute()` の XUL (Gecko) での実装では、 DOM 3 Core 仕様書に従い空文字列を返します。結果的に、指定された要素に指定された属性が存在しない可能性があるのであれば、 {{domxref("element.hasAttribute()")}} を使用して属性の存在をチェックしてから `getAttribute()` を呼び出すべきでしょう。

### ノンス値の受け取り

セキュリティ上の理由で、スクリプト以外、例えば CSS セレクターから来た [CSP](/ja/docs/Web/HTTP/CSP) のノンスと、 `.getAttribute("nonce")` の呼び出しは隠蔽されます。

```js example-bad
let nonce =  script.getAttribute('nonce');
// 空文字列が返される
```

コンテンツ属性のノンスをるには、代わりに {{domxref("HTMLElement/nonce", "nonce")}} プロパティを使用してください。

```js
let nonce =  script.nonce;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
