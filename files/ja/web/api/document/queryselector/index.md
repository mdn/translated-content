---
title: Document.querySelector()
slug: Web/API/Document/querySelector
tags:
  - API
  - CSS セレクター
  - DOM
  - DOM 要素
  - Document
  - メソッド
  - リファレンス
  - セレクター API
  - セレクター
  - querySelector
translation_of: Web/API/Document/querySelector
browser-compat: api.Document.querySelector
---
{{ApiRef("DOM")}}

{{domxref("Document")}} の **`querySelector()`** メソッドは、指定されたセレクターまたはセレクター群に一致する、文書内の最初の {{domxref("Element")}} を返します。一致するものが見つからない場合は `null` を返します。

> **Note:** 照合処理は、文書マークアップにおける最初の要素を経由して文書ノードの深さ優先前順走査 (depth-first pre-order traversal) を使用して実行され、子ノードのカウント順で順次ノードを反復して行われます。

## 構文

```js
element = document.querySelector(selectors);
```

### 引数

- _selectors_
  - : {{domxref("DOMString")}} で、照合する 1 つ以上のセレクターを設定します。この文字列は妥当な CSS セレクターでなければなりません。そうでない場合は `SyntaxError` が発生します。セレクターとその管理の方法の詳細について、[セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)を参照してください。

> **Note:** 標準の CSS 構文に含まれない文字は、バックスラッシュ文字を使ってエスケープしなければなりません。 JavaScript でもバックスラッシュによるエスケープが使われているため、これらの文字を使った文字列リテラルを記述する際は、特に注意する必要があります。詳細は[特殊文字のエスケープ](#特殊文字のエスケープ)を参照してください。

### 返値

{{domxref("Element")}} オブジェクトで、文書内で指定された [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)に最初に一致する要素を示すオブジェクト、もしくは、一致する要素がない場合は `null` を返します。

指定されたセレクターに一致するすべての要素のリストが必要な場合は、代わりに {{domxref("Document.querySelectorAll", "querySelectorAll()")}} を使用してください。

### 例外

- `SyntaxError`
  - : 指定された _selectors_ の構文が妥当ではない。

## 使用上のメモ

指定されたセレクターが、誤って文書内で複数回使われている ID に一致する場合は、その ID を持つ最初の要素が返されます。

[CSS 擬似要素](/ja/docs/Web/CSS/Pseudo-elements)は[セレクター API](https://www.w3.org/TR/selectors-api/#grammar) で策定されている通り、何も要素を返しません。

### 特殊文字のエスケープ

標準の CSS の構文に従っていない ID やセレクター (例えば、コロンや空白を不適切に使用しているもの) に一致させるためには、バックスラッシュ ("`\`") でその文字をエスケープしなければなりません。バックスラッシュは JavaScript のエスケープ文字でもあるので、文字列リテラルを入力する場合、それを *2 回*エスケープする必要があります (1 回目は JavaScript の文字列のため、2 回目は `querySelector()` のため)。

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log('#foo\bar');               // "#fooar" (\b はバックスペース制御文字)
  document.querySelector('#foo\bar');    // いずれにも一致しない

  console.log('#foo\\bar');              // "#foo\bar"
  console.log('#foo\\\\bar');            // "#foo\\bar"
  document.querySelector('#foo\\\\bar'); // 最初の div に一致する

  document.querySelector('#foo:bar');    // いずれにも一致しない
  document.querySelector('#foo\\:bar');  // 2 番目の div に一致する
</script>
```

## 例

### あるクラスに一致する最初の要素を探索する

次の例は、クラス "`myclass`" を持つ文書内の要素の内、最初のものを返します。

```js
var el = document.querySelector(".myclass");
```

### より複雑なセレクター

セレクターは、次の例で示しているように、実に力強いものになり得ます。ここでは、文書内で {{HTMLElement("input")}} に "login" という名前の付いた最初のもの (`<input name="login"/>`) のうち、 {{HTMLElement("div")}} でクラスが "user-panel main" (`<div class="user-panel main">`) の中にあるものが返されます。

```js
var el = document.querySelector("div.user-panel.main input[name='login']");
```

### 否定

すべての CSS セレクター文字列が妥当な場合、セレクターを否定することもできます。

```js
var el = document.querySelector("div.user-panel:not(.main) input[name='login']");
```

これで、 input 要素のうち親に `user-panel` クラスのついた div があるものの、`main` クラスがないものを 1 つ選択します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の指定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
- {{domxref("Element.querySelectorAll()")}}
