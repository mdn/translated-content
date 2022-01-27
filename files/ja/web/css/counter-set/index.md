---
title: counter-set
slug: Web/CSS/counter-set
tags:
  - CSS
  - CSS Counter
  - CSS Lists
  - CSS Property
translation_of: Web/CSS/counter-set
---
{{CSSRef}}

<span class="seoSummary">[CSS](/ja/docs/Web/CSS)属性**`counter-set`**は，[CSS計数](/ja/docs/Web/Guide/CSS/Counters)を指定した値に設定します。当属性は存在する計数を操作し，新しい計数を作成するのは指定された名前の計数が要素に未だ存在しない場合のみです。</span>

<div class="note">
**注意:** 計数値の増減分にはCSS属性{{cssxref("counter-increment")}}を用いることもできます。
</div>

<h2 id="構文">構文</h2>

<pre class="brush:css no-line-numbers">/* "my-counter"を0に設定 */
counter-set: my-counter;

/* "my-counter"を-1に設定 */
counter-set: my-counter -1;

/* "counter1"を1に，"counter2"を4に設定 */
counter-set: counter1 1 counter2 4;

/* これより詳細度が低い規則で設定される全計数を消去する */
counter-set: none;

/* 大域値 */
counter-set: inherit;
counter-set: initial;
counter-set: unset;
</pre>

`counter-set`属性には次の内どれかを指定します。

- 計数名`&lt;custom-ident&gt;`に引き続く任意の`&lt;integer&gt;`。指定できる計数の個数に制限はなく，それぞれを空白で区切って指定します。
- 予約語`none`。

<h3 id="値">値</h3>

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 設定する計数名。
- {{cssxref("&lt;integer&gt;")}}
  - : この値が，〔当CSSが規則を適用する〕要素が現れる度に計数を設定します。指定なき場合の既定値は0です。指定した名前の計数が現在要素に存在しない場合，その要素に指定された名前の計数を初期値0で新たに作成します（ただし，作成の後，速やかに他の値に設定又は増分されます）。
- `none`
  - : いかなる計数の設定も行いません。より詳細度の低い規則で定めた`counter-set`を上書きするのに使えるでしょう。

<h3 id="形式文法">形式文法</h3>

{{csssyntax}}

<h2 id="事例">事例</h2>

<pre class="brush:css">h1 {
  counter-set: chapter section 1 page;
  /* "chapter"及び"page"計数を0に，
     "section"計数を1に設定 */
}
</pre>

<h2 id="仕様書">仕様書</h2>

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
   <td>{{SpecName('CSS3 Lists', '#propdef-counter-set', 'counter-set')}}</td>
   <td>{{Spec2('CSS3 Lists')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

{{cssinfo}}

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<div>


{{Compat("css.properties.counter-set")}}
</div>

<h2 id="関連項目">関連項目</h2>

- [CSSカウンタの使用](/ja/docs/CSS/Counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter")}}及び{{cssxref("counters")}}関数
- {{cssxref("content")}}属性
