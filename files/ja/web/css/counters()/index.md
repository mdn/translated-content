---
title: counters()
slug: Web/CSS/counters()
tags:
  - CSS
  - CSS カウンター
  - CSS 関数
  - 関数
  - リファレンス
translation_of: Web/CSS/counters()
---
{{CSSRef}}

**`counter()`** は [CSS](/ja/docs/Web/CSS) の関数で、階層的なカウンターを利用できるようにし、指定された名前付きカウンターがあれば、その現在値を表す連結された文字列を返します。 `counters()` 関数には `counters(<var>name</var>, <var>string</var>)` と `counters(<var>name</var>, <var>string</var>, <var>style</var>)` の二つの形式があります。一般的には[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)と一緒に使用されますが、理論的には `[&lt;string&gt;](/ja/docs/Web/CSS/string)` 値に対応している場所ならばどこでも使用できます。生成されるテキストは、指定された名前を持つすべてのカウンターの値で、指定された文字列で区切られた一番外側から一番内側までの値です。カウンターは、指定されたスタイルで表示され、スタイルが指定されていない場合は既定で `decimal` で表示されます。

<pre class="brush: css notranslate">/* 単純な使用法 - スタイルは既定で decimal */
counters(countername, '-');

/* カウンターの表示の変更 */
counters(countername, '.', upper-roman)</pre>

[カウンター](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)自身には視覚的効果が何もありません。 `counters()` 関数 (および {{cssxref("counter", "counter()")}} 関数) は開発者が定義した文字列 (または画像) を返すことでカウンターは利用価値が生まれます。

<div class="blockIndicator note">
注: `counters()` 関数は CSS プロパティとも併用できますが、 {{CSSxRef("content")}} 以外のプロパティにおける対応は実験的であり、型または単位の引数への対応は限られています。

[ブラウザーの互換性の表](#Browser_compatibility)を注意深く確認してから本番環境に用いてください。
</div>

## 構文

### 値

- {{cssxref("&lt;custom-ident&gt;")}}
  - : カウンターを識別する名前であり、 {{cssxref("counter-reset")}} および {{cssxref("counter-increment")}} に用いた名前と、大文字小文字まで同一でなければなりません。名前をダッシュ2つで始めることはできず、また `none`, `unset`, `initial`, `inherit` という名前は禁止です。
- <code style="white-space: nowrap;">&lt;counter-style&gt;</code>
  - : カウンタースタイル名または {{cssxref("symbols()")}} 関数です。カウンタースタイル名には `numeric`, `alphabetic`, `symbolic` などの単純な定義済みスタイル、より複雑なアジアやエチオピアのカウンタースタイル、その他の[定義済みカウンタースタイル](/ja/docs/Web/CSS/CSS_Counter_Styles)があります。省略された場合は、既定で `decimal` になります。
- {{cssxref("&lt;string&gt;")}}
  - : 任意の数のテキスト文字です。ラテン文字以外は Unicode エスケープシーケンスでエンコードする必要があります。例えば `\000A9` は著作権記号を表します。

### 形式文法

{{CSSSyntax}}

## 例

<h3 id="default_value_compared_to_upper_Roman" name="default_value_compared_to_upper_Roman">既定値と upper-roman との比較</h3>

#### HTML

<pre class="brush: html; notranslate">&lt;ol&gt;
  &lt;li&gt;
     &lt;ol&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
      &lt;/ol&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;
     &lt;ol&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;
           &lt;ol&gt;
              &lt;li&gt;&lt;/li&gt;
              &lt;li&gt;&lt;/li&gt;
              &lt;li&gt;&lt;/li&gt;
           &lt;/ol&gt;
        &lt;/li&gt;
      &lt;/ol&gt;
  &lt;/li&gt;
&lt;/ol&gt;</pre>

#### CSS

<pre class="brush: css; highlight[2] notranslate">ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
   content:  counters(listCounter, '.', upper-roman) ') ';
}
li::before {
  content:  counters(listCounter, ".") " == " counters(listCounter, ".", lower-roman) ;
}</pre>

#### 結果

{{EmbedLiveSample("default_value_compared_to_upper_Roman", "100%", 150)}}

<h3 id="decimal-leading-zero_compared_to_lower-alpha" name="decimal-leading-zero_compared_to_lower-alpha">decimal-leading-zero と lower-alpha との比較</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html; notranslate">&lt;ol&gt;
  &lt;li&gt;
     &lt;ol&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
      &lt;/ol&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;
     &lt;ol&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;
           &lt;ol&gt;
              &lt;li&gt;&lt;/li&gt;
              &lt;li&gt;&lt;/li&gt;
              &lt;li&gt;&lt;/li&gt;
           &lt;/ol&gt;
        &lt;/li&gt;
      &lt;/ol&gt;
  &lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css; highlight[2] notranslate">ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
   content: counters(count, '.', upper-alpha) ') ';
}
li::before {
  content: counters(count, ".", <dfn>decimal-leading-zero</dfn>) " == " counters(count, ".", lower-alpha);
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}

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
   <td>{{SpecName("CSS3 Lists", "#counter-functions", "CSS Counters")}}</td>
   <td>{{Spec2("CSS3 Lists")}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "generate.html#counter-styles", "CSS Counters")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

## ブラウザーの互換性

{{Compat("css.types.counters")}}

## 関連情報

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-set")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS の `[counters()](/ja/docs/Web/CSS/counters)` 関数
- {{cssxref("::marker")}}
