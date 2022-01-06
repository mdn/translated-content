---
title: var()
slug: Web/CSS/var()
tags:
  - CSS
  - CSS カスタムプロパティ
  - CSS 変数
  - CSS 関数
  - Experimental
  - Reference
  - var
  - var()
  - 変数
translation_of: Web/CSS/var()
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>var()</code></strong> 関数は、他のプロパティの値の一部に代わって<a href="/ja/docs/Web/CSS/--*">カスタムプロパティ</a> (「CSS 変数」と呼ばれることもあります) の値を挿入できます。</span></p>

<div>{{EmbedInteractiveExample("pages/css/var.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p><code>var()</code> 関数は、プロパティ名、セレクター、またはプロパティ値以外のところでは使用できません。 (使用してしまうと、無効な構文が生成されるか、もしくはその変数に接続していない値が生成されてしまいます。)</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>関数の最初の引数は、置換されるカスタムプロパティの名前です。関数のオプションの2番目の引数は、フォールバック値として機能します。 最初の引数で参照されるカスタムプロパティが無効な場合、関数は2番目の値を使用します。</p>

{{csssyntax}}

<div class="note">
<p><strong>メモ:</strong> フォールバックの構文は、カスタムプロパティの構文と同様にカンマを使用できます。たとえば <code>var(--foo, red, blue)</code> では、 <code>red, blue</code> をフォールバックとして定義します。つまり、最初のカンマから関数の最後にかけてのすべてが、フォールバック値と見なされます。</p>
</div>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;custom-property-name&gt;</code></dt>
 <dd>カスタムプロパティの名前で、二つのハイフンで始まる識別子で表されます。カスタムプロパティは、作成者とユーザーだけが使用できます。 CSS はここに提示されているものを超えて意味を与えません。</dd>
 <dt><code>&lt;declaration-value&gt;</code></dt>
 <dd>カスタムプロパティのフォールバック値。カスタムプロパティが使用されているコンテキストが無効な場合に使用されます。この値には、改行、不等式の閉じ括弧、つまり <code>)</code>, <code>]</code>, <code>}</code>, トップレベルのセミコロン、感嘆符などの特別な意味を持つ文字を除く任意の文字を含めることができます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css notranslate">:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
</pre>

<pre class="notranslate">/* フォールバック */
/* コンポーネント内のスタイル: */
.component .header {
  color: var(--header-color, blue); /* header-color という変数は設定されていないため、フォールバック値である blue がセットされます */
}

.component .text {
  color: var(--text-color, black);
}

/* より規模の大きなアプリケーションのスタイルでは */
.component {
  --text-color: #080;
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName('CSS3 Variables', '#using-variables', 'var()')}}</td>
   <td>{{Spec2('CSS3 Variables')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.custom-property.var")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("env","env(…)")}} – ユーザーエージェントによって制御される読み取り専用環境変数</li>
 <li><a href="/ja/docs/Web/CSS/Using_CSS_variables">CSS 変数の利用</a></li>
</ul>
