---
title: レイアウトモード
slug: Web/CSS/Layout_mode
tags:
  - CSS
  - リファレンス
  - レイアウト
translation_of: Web/CSS/Layout_mode
---
<div>{{cssref}}</div>

<p> <a href="/ja/docs/Web/CSS">CSS</a> の<strong>レイアウトモード</strong> (または単に「レイアウト」) は、ボックスの位置やサイズを、兄弟要素や祖先要素のボックスとの相互作用を踏まえて決めるアルゴリズムです。複数のレイアウトモードがあります。</p>

<ul>
 <li><em><a href="/ja/docs/Web/CSS/CSS_Flow_Layout">通常フロー</a></em> — すべての要素は何かの操作をしてこれから外すまで、通常フローの一部です。通常フローは、段落のようなボックスをレイアウトするための<em>ブロックレイアウト</em>と、テキストのような行内アイテムをレイアウトするための<em>インラインレイアウト</em>を含みます。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Table"><em>表レイアウト</em></a>は、表のレイアウトのためのものです。</li>
 <li><em>浮動レイアウト</em>は、アイテムを左または右に配置して、残りの部分はそれを回り込む通常フローにするためのものです。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Positioning"><em>位置指定レイアウト</em></a>は、他要素とほとんど相互作用のない位置指定要素のためのものです。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Columns"><em>段組みレイアウト</em></a>は、新聞のように複数の段でコンテンツをレイアウトするためのものです。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout"><em>フレックスボックスレイアウト</em></a>は、滑らかに大きさが変更できる複雑なページのレイアウトに使われます。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout"><em>グリッドレイアウト</em></a>は、固定グリッドを基準にした要素配置に使われます。</li>
</ul>

<div class="note">
<p><strong>メモ:</strong> レイアウトモードによって、使える <a href="/ja/docs/Web/CSS/Reference">CSS プロパティ</a>に制限があります。大半は 1 つか 2 つのレイアウトモードで用いられ、別のレイアウトモードに関わる要素に設定しても効果がありません。</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{CSS_key_concepts}}</li>
</ul>
