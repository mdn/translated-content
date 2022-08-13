---
title: MathML 要素リファレンス
slug: Web/MathML/Element
tags:
  - MathML
  - MathML Reference
translation_of: Web/MathML/Element
---
<p>これは、MathML <strong>プレゼンテーション</strong> 要素のアルファベット順のリストです。</p>

<p><strong>プレゼンテーションマークアップ</strong> という用語は、数学的表記のレイアウト構造を記述するために使用するのに対して、<strong>コンテンツマークアップ</strong> という用語は、その基礎をなす数学的な意味を提供します。これは、MarhML パーザーによる描画を想定するものではありません ({{bug(276028)}} 参照)。コンテンツマークアップについて詳しく学びたい場合は、 <a class="external" href="http://www.w3.org/TR/MathML3/">MathML 3 仕様</a> の <a class="external" href="http://www.w3.org/TR/MathML3/chapter4.html">第 4 章</a> を調べてください。</p>
<div class="multiColumnList">
<h3 id="math">math</h3>
<ul>
 <li>{{ MathMLElement("math") }} (トップレベル要素)</li>
</ul>

<h3 id="A">A</h3>
<ul>
 <li>{{ MathMLElement("maction") }} (部分式にバインドされたアクション)</li>
 <li>{{ MathMLElement("maligngroup") }} (揃えグループ)</li>
 <li>{{ MathMLElement("malignmark") }} (揃えポイント)</li>
</ul>

<h3 id="E">E</h3>
<ul>
 <li>{{ MathMLElement("menclose") }} (囲みコンテンツ)</li>
 <li>{{ MathMLElement("merror") }} (囲み構文エラーメッセージ)</li>
</ul>

<h3 id="F">F</h3>
<ul>
 <li>{{ MathMLElement("mfenced") }} (括弧)</li>
 <li>{{ MathMLElement("mfrac") }} (分数)</li>
</ul>

<h3 id="G">G</h3>
<ul>
 <li>{{ MathMLElement("mglyph") }} (非標準記号の表示)</li>
</ul>

<h3 id="I">I</h3>
<ul>
 <li>{{ MathMLElement("mi") }} (識別子)</li>
</ul>

<h3 id="L">L</h3>
<ul>
 <li>{{ MathMLElement("mlabeledtr") }} (表または行列のラベル付き行)</li>
 <li>{{ MathMLElement("mlongdiv") }} (割り算の筆算表記)</li>
</ul>

<h3 id="M">M</h3>
<ul>
 <li>{{ MathMLElement("mmultiscripts") }} (前置字とテンソル添字)</li>
</ul>

<h3 id="N">N</h3>
<ul>
 <li>{{ MathMLElement("mn") }} (数字)</li>
</ul>

<h3 id="O">O</h3>
<ul>
 <li>{{ MathMLElement("mo") }} (演算子)</li>
 <li>{{ MathMLElement("mover") }} (真上付き)</li>
</ul>

<h3 id="P">P</h3>
<ul>
 <li>{{ MathMLElement("mpadded") }} (コンテンツまわりの空白)</li>
 <li>{{ MathMLElement("mphantom") }} (予約スペースを持つ不可視コンテンツ)</li>
</ul>

<h3 id="R">R</h3>
<ul>
 <li>{{ MathMLElement("mroot") }} (累乗根)</li>
 <li>{{ MathMLElement("mrow") }} (グループ化された部分式)</li>
</ul>

<h3 id="S">S</h3>
<ul>
 <li>{{ MathMLElement("ms") }} (文字列リテラル)</li>
 <li>{{ MathMLElement("mscarries") }} (carries などのアノテーション)</li>
 <li>{{ MathMLElement("mscarry") }} (Single carry, {{ MathMLElement("mscarries") }} の子要素)</li>
 <li>{{ MathMLElement("msgroup") }} ({{ MathMLElement("mstack") }} および {{ MathMLElement("mlongdiv") }} 要素のグループ化された行)</li>
 <li>{{ MathMLElement("msline") }} ({{ MathMLElement("mstack") }} 要素内の水平線)</li>
 <li>{{ MathMLElement("mspace") }} (空白)</li>
 <li>{{ MathMLElement("msqrt") }} (平方根)</li>
 <li>{{ MathMLElement("msrow") }} ({{ MathMLElement("mstack") }} 要素の行)</li>
 <li>{{ MathMLElement("mstack") }} (スタック揃え)</li>
 <li>{{ MathMLElement("mstyle") }} (書式変更)</li>
 <li>{{ MathMLElement("msub") }} (下付き)</li>
 <li>{{ MathMLElement("msup") }} (上付き)</li>
 <li>{{ MathMLElement("msubsup") }} (下付き上付きの組)</li>
</ul>

<h3 id="T">T</h3>
<ul>
 <li>{{ MathMLElement("mtable") }} (表または行列)</li>
 <li>{{ MathMLElement("mtd") }} (表または行列のセル)</li>
 <li>{{ MathMLElement("mtext") }} (テキスト)</li>
 <li>{{ MathMLElement("mtr") }} (表または行列の列)</li>
</ul>

<h3 id="U">U</h3>
<ul>
 <li>{{ MathMLElement("munder") }} (真下付き)</li>
 <li>{{ MathMLElement("munderover") }} (真下付きと真上付きの組)</li>
</ul>

<h3 id="Other_elements" name="Other_elements">他の要素</h3>
<ul>
 <li>{{ MathMLElement("semantics") }} (セマンティックアノテーション用のコンテナ)</li>
 <li><a href="/ja/docs/MathML/Element/semantics"><code>&lt;annotation&gt;</code></a> (Data アノテーション)</li>
 <li><a href="/ja/docs/MathML/Element/semantics"><code>&lt;annotation-xml&gt;</code></a> (XML アノテーション)</li>
</ul>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/MathML">MathML</a></li>
 <li><a href="/ja/docs/Web/MathML/Attribute">MathML 属性リファレンス</a></li>
</ul>
