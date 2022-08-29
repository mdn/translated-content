---
title: DOMTokenList
slug: Web/API/DOMTokenList
tags:
  - インターフェイス
  - リファレンス
browser-compat: api.DOMTokenList
translation_of: Web/API/DOMTokenList
---
{{APIRef("DOM")}}

**`DOMTokenList`** インターフェイスは、スペースで区切られたトークンのセットを表します。こうしたセットは {{domxref("Element.classList")}} や {{domxref("HTMLLinkElement.relList")}} など、数多くのものから返されるものです。

`DOMTokenList` の添字は JavaScript の {{jsxref("Array")}} オブジェクトのように `0` から始まります。 `DOMTokenList` は常に大文字と小文字を区別します。

## プロパティ

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : 整数で、このオブジェクトに格納されているオブジェクトの数を表します。
- {{domxref("DOMTokenList.value")}}
  - : {{Glossary("stringifier", "文字列化")}}プロパティであり、リストの値を文字列で返します。

## メソッド

- {{domxref("DOMTokenList.item()")}}
  - : そのリスト内で指定された位置の項目を返します。指定された位置がそのリストの `length` 以上であれば `undefined` を返します。
- {{domxref("DOMTokenList.contains()")}}
  - : 指定されたトークンがリストに含まれていれば `true` を返し、そうでなければ `false`を返します。
- {{domxref("DOMTokenList.add()")}}
  - : 指定されたトークンをリストに追加します。
- {{domxref("DOMTokenList.remove()")}}
  - : 指定されたトークンをリストから削除します。
- {{domxref("DOMTokenList.replace()")}}
  - : そのトークンを別なトークンで置き換えます。
- {{domxref("DOMTokenList.supports()")}}
  - : 指定されたトークンが、関連付けられた属性で対応しているトークンであれば `true` を返します。
- {{domxref("DOMTokenList.toggle()")}}
  - : もしそのトークンが存在すればリストから削除し、存在しなければそのトークンをリストに追加します。操作後にリスト内にそのトークンが存在するかどうかを論理値で返します。
- {{domxref("DOMTokenList.entries()")}}
  - : このオブジェクト内に含まれるすべてのキーと値のペアを反復処理することができる{{jsxref("Iteration_protocols", "反復子", "", 1)}}を返します。
- {{domxref("DOMTokenList.forEach()")}}
  - : `DOMTokenList` オブジェクトの各要素に対して 1 回ずつ、指定したコールバック関数を実行します。
- {{domxref("DOMTokenList.keys()")}}
  - : このオブジェクト内に含まれるすべてのキーと値のペアのうち、キーを反復処理することができる{{jsxref("Iteration_protocols", "反復子", "", 1)}}を返します。
- {{domxref("DOMTokenList.values()")}}
  - : このオブジェクト内に含まれるすべてのキーと値のペアのうち、値を反復処理することができる{{jsxref("Iteration_protocols", "反復子", "", 1)}}を返します。

## 例

以下の簡単な例では、 {{htmlelement("p")}} 要素のクラスのリストを {{domxref("Element.classList")}} を使用して `DOMTokenList` として受け取り、 {{domxref("DOMTokenList.add()")}} を使用してクラスを 1 つ追加し、最後に `<p>` の {{domxref("Node.textContent")}} が `DOMTokenList` と等しくなるように更新します。

まず、 HTML は以下のとおりです。

```html
<p class="a b c"></p>
```

そして JavaScript です。

```js
let para = document.querySelector("p");
let classes = para.classList;
para.classList.add("d");
para.textContent = `段落の classList は "${classes}"`;
```

出力結果はこのようになります。

{{ EmbedLiveSample('Examples', '100%', 60) }}

## ホワイトスペースのトリミングと重複の削除

`DOMTokenList` を編集するメソッド ({{domxref("DOMTokenList.add()")}} など) は、自動的にそのリストから余分な{{Glossary("Whitespace", "ホワイトスペース")}}をトリミングし、重複した値を削除します。例えば次のようになります。

```html
<span class="    d   d e f"></span>
```

```js
let span = document.querySelector("span");
let classes = span.classList;
span.classList.add("x");
span.textContent = `span の classList は "${classes}"`;
```

出力結果はこのようになります。

{{ EmbedLiveSample('Trimming_of_whitespace_and_removal_of_duplicates', '100%', 60) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
