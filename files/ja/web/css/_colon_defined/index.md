---
title: ':defined'
slug: 'Web/CSS/:defined'
tags:
  - CSS
  - HTML
  - レイアウト
  - 擬似クラス
  - リファレンス
  - ウェブ
  - セレクター
  - 擬似クラス
translation_of: 'Web/CSS/:defined'
---
{{ CSSRef }}

<span class="seoSummary">[CSS](/ja/docs/Web/CSS) の ``:defined`` [擬似クラス](/ja/docs/CSS/Pseudo-classes" title="Pseudo-classes)は、定義されているすべての要素を表します。これにはブラウザーに組み込まれたすべての標準要素と、 ({{domxref("CustomElementRegistry.define()")}} メソッドを使用して) 定義に成功したカスタム要素が含まれます。</span>

<pre class="brush: css no-line-numbers">/* 定義されたすべての要素を選択 */
:defined {
  font-style: italic;
}

/* 特定の custom 要素のすべてのインスタンスを選択 */
simple-custom:defined {
  display: block;
}
</pre>

## 構文

{{csssyntax}}

## 例

この最初の例は `&lt;simple-custom&gt;` [カスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)を定義するスクリプトを含んでいます。

<pre class="brush: js">customElements.define('simple-custom',
  class extends HTMLElement {
    constructor() {
      super();

      let divElem = document.createElement('div');
      divElem.textContent = this.getAttribute('text');

      let shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(divElem);
  }
})</pre>

次に、 `&lt;simple-custom&gt;` 要素と標準の {{htmlelement("p")}} 要素のインスタンスがある HTML です。

<pre class="brush: html">&lt;simple-custom text="Custom element example text"&gt;&lt;/simple-custom&gt;

&lt;p&gt;Standard paragraph example text&lt;/p&gt;</pre>

それでは CSS です。ここでは、要素の種類に基づいて背景色を定義し、カスタム要素の不透明度を定義済みであるかどうかによって変更し、 `:defined` セレクターを使用して定義された要素テキストをすべて斜体で表示します。

<pre class="brush: css">/* 2つの要素を背景で区別できるようにする */
p {
  background: yellow;
}

simple-custom {
  display: block;
  background: cyan;
}

/* カスタム要素と組み込み要素を両方イタリック体にする */
:defined {
  font-style: italic;
}</pre>

それから、カスタム要素が定義されていないときには非表示にするルールと、定義されていたらブロックレベル要素として定義して表示します。

<pre class="brush: css">simple-custom:not(:defined) {
  opacity: 0;
}

simple-custom:defined {
  opacity: 0.75;
  text-decoration: underline;
}</pre>

これは、複雑なカスタム要素があってページの読み込みを待ちたいときに便利です。定義が完了するまで要素のインスタンスを非表示にして、ページ上でスタイル適用前の醜い要素が一瞬現れるのを防ぐことができます。

<h3 id="Result" name="Result">結果</h3>

以上のコードを実行した結果は次の通りです。

{{EmbedLiveSample('Examples')}}

## 仕様書

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'semantics-other.html#selector-defined', ':defined') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

このページの互換性一覧表は構造化データから生成されています。データに協力したいのであれば、 [https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) をチェックアウトしてプルリクエストを送信してください。

{{Compat("css.selectors.defined")}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/Web_Components)
- {{cssxref(":host")}}
- {{cssxref(":host()")}}
- {{cssxref(":host-context()")}}
