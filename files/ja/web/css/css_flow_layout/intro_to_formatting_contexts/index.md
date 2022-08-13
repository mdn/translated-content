---
title: 整形コンテキストの紹介
slug: Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts
tags:
  - BFC
  - Block Formatting Context
  - CSS
  - Formatting contexts
  - Guide
  - Intermediate
  - Layout
  - flow
  - ガイド
  - ブロック整形コンテキスト
  - 中級者
  - 整形コンテキスト
translation_of: Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts
---
<div>{{CSSRef}}</div>

<p class="summary"><span class="seoSummary">この記事では整形コンテキストの概念を紹介します。ブロック整形コンテキスト、インライン整形コンテキスト、フレックス整形コンテキストなど、いくつかの種類があります。どのように動作するのか、これらの動作をどのように利用できるのかについても紹介します。</span></p>

<p>ページ上のすべてのものが<strong>整形コンテキスト</strong>、またはコンテンツを特定の方法でレイアウトする際に定義されている領域の一部です。<strong>ブロック整形コンテキスト</strong> (<abbr title="Block Formatting Context">BFC</abbr>) は、子要素をブロックレイアウトの規則に則って配置し、<strong>フレックス整形コンテキスト</strong>は、子要素を{{Glossary("flex item", "フレックスアイテム")}}として配置するなどです。それぞれの整形コンテキストは、そのコンテキストにあるときにどのようにレイアウトを行うかの特定の規則を持っています。</p>

<h2 id="The_Block_Formatting_Context" name="The_Block_Formatting_Context">ブロック整形コンテキスト</h2>

<p>ブロックレイアウト規則を使用する文書の中で一番外側の要素は、最初の、あるいは<strong>初期ブロック整形コンテキスト</strong>を確立します。これは、 <code>&lt;html&gt;</code> 要素のブロック内のすべての要素が、ブロックおよびインラインレイアウトの規則に従って、通常のフローに従ってレイアウトされることを意味します。ブロック整形コンテキスト (<abbr title="Block Formatting Context">BFC</abbr>) に参加する要素は、 CSS ボックスモデルによって概説された規則を使用します。これは、要素のマージン、境界、パディングが同じコンテキスト内の他のブロックとどのように相互作用するかを定義します。</p>

<h3 id="Creating_a_new_block_formatting_context" name="Creating_a_new_block_formatting_context">新しいブロック整形コンテキストの生成</h3>

<p>{{HTMLElement("html")}} 要素がブロック整形コンテキストを生成できる唯一の要素ではありません。どのブロックレベルの要素でも、特定の CSS プロパティを適用することで BFC を生成することができます。</p>

<p>新しい BFC は以下のような場面で生成されます。</p>

<ul>
 <li>{{cssxref("float")}} を使用して浮動状態になった要素</li>
 <li>絶対位置指定の要素 ({{cssxref("position", "position: fixed", "#fixed")}} または {{cssxref("position", "position: sticky", "#sticky")}} を含む)</li>
 <li>{{cssxref("display", "display: inline-block", "#inline-block")}} の要素</li>
 <li>表のセル、または <code>display: table-cell</code> が指定された要素で、 <code>display: table-*</code> プロパティを使用して生成された無名の表のセルを含む</li>
 <li>テーブルのキャプション、または <code>display: table-caption</code> が付いた要素</li>
 <li><code>overflow</code> が <code>visible</code> 以外の値であるブロック要素</li>
 <li><code>display: flow-root</code> または <code>display: flow-root list-item </code> の要素</li>
 <li>{{cssxref("contain", "contain: layout", "#layout")}}, <code>content</code>, <code>strict</code> のいずれかの要素</li>
 <li>{{Glossary("flex item", "フレックスアイテム")}}</li>
 <li>グリッドアイテム</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol">段組みコンテナー</a></li>
 <li>{{cssxref("column-span")}} が <code>all</code> に設定された要素</li>
</ul>

<p>これは、新しい BFC がメインレイアウトの中でミニレイアウトとなり、一番外側の文書のように動作するので便利です。 BFC はその中にすべてを含み、 {{cssxref("float")}} と {{cssxref("clear")}} は同じ整形コンテキスト内の項目にのみ適用され、マージンは同じ書式設定コンテキスト内の要素間でのみ相殺されます。</p>

<h3 id="BFC_creation_examples" name="BFC_creation_examples">BFC が生成される例</h3>

<p>新しい <abbr title="Block Formatting Context">BFC</abbr> を生成する効果を見るために、いくつかの例を見てみましょう。</p>

<p>下の例では、境界が適用された <code>&lt;div&gt;</code> の中に浮動要素があります。その <code>&lt;div&gt;</code> の内容は、その浮動要素の横に並んでいます。その浮動要素の内容は、その横にある内容よりも高さが高いため、 <code>&lt;div&gt;</code> の境界線がその浮動要素を通過するようになりました。<a href="/ja/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow">フロー内とフローの外のガイド</a>で説明されているように、浮動要素はフローから外れているので、 <code>&lt;div&gt;</code> の背景と境界には内容だけが含まれ、浮動要素は含まれません。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}</p>

<p>新しい <abbr title="Block Formatting Context">BFC</abbr> を生成すると浮動要素が収まります。これまでよく使われてきた方法は、 <code>overflow: auto</code> または初期値である <code>overflow: visible</code> 以外の値を設定することでした。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}</p>

<p><code>overflow: auto</code> を設定することで、浮動要素を含む新しい <abbr title="Block Formatting Context">BFC</abbr> を生成しました。 <code>&lt;div&gt;</code> はレイアウト内のミニレイアウトになりました。すべての子要素はその中に収まります。</p>

<p><code>overflow</code> を使って新しい <abbr title="Block Formatting Context">BFC</abbr> を生成する場合の問題点は、 <code>overflow</code> プロパティは、あふれた内容をどのように処理したいかをブラウザーに伝えるためのものだということです。このプロパティを純粋に BFC を作成するために使用した場合、意図せずにスクロールバーが現れたり、影がクリッピングされたりすることに気づくこともあるでしょう。さらに、 <code>overflow</code> を使用した理由が明らかにならないこともあるかもしれないので、将来の開発者からは理解しやすくない可能性があります。このような場合は、コードにコメントをつけて説明するのが良いでしょう。</p>

<h3 id="Explicitly_creating_a_BFC_using_display_flow-root" name="Explicitly_creating_a_BFC_using_display_flow-root">display: flow-root を使用した明示的な BFC の生成</h3>

<p>包含ブロックに <code>display: flow-root</code> (または <code>display: flow-root list-item</code>) を使用すると、問題を起こす副作用が発生することなく新しい <abbr title="Block Formatting Context">BFC</abbr> を生成することができます。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}</p>

<p><code>display: flow-root</code> を {{HTMLElement("div")}} に指定すると、コンテナー内のすべてのものがそのコンテナーのブロック整形コンテキストに参加し、浮動要素が要素の底から飛び出すことはなくなります。</p>

<p><code>flow-root</code> キーワードの名前は、新しいコンテキストがどのように作成され、そのフローレイアウト機能がどのように機能するかを考えると、本質的には ({{HTMLElement("html")}} にように) 新しいルート要素のような役割を果たすものを生成しているという事実を示しています。</p>

<h2 id="Inline_formatting_contexts" name="Inline_formatting_contexts">インライン整形コンテキスト</h2>

<p>インライン整形コンテキストは、他の整形コンテキストの中に存在する、段落のコンテキストと考えることができます。段落は、テキスト上で {{HTMLElement("strong")}}, {{HTMLElement("a")}}, {{HTMLElement("span")}} などの要素が使われた場合のようなインライン整形コンテキストを作成します。</p>

<p>ボックスモデルは、インライン整形コンテキストに参加している項目には完全には適用されません。横書きモードの行では、水平方向のパディング、境界、マージンが要素に適用され、テキストを左右に押しのけます。ただし、要素の上下のマージンは適用されません。水平のパディングや境界は適用されますが、インライン整形コンテキストでは、ラインボックスがパディングや境界によって押し広げられることはないため、上下の内容が重なる可能性があります。</p>

<p>{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}</p>

<h2 id="Other_formatting_contexts" name="Other_formatting_contexts">その他の整形コンテキスト</h2>

<p>このガイドはフローレイアウトを対象としているため、他のありうる整形コンテキストについては言及していません。そのため、どのような種類の整形コンテキストを作成しても、その整形コンテキスト内の要素の動作が変わることを理解しておくと便利です。この動作は常に仕様書に記述されており、ここ、 MDN にも記述されています。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>このガイドでは、ブロックおよびインライン整形コンテキストにおける詳細と、ブロック整形コンテキスト (<abbr title="Block Formatting Context">BFC</abbr>) を生成することの重要な目的を見てきました。次のガイドでは、<a href="/ja/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes">通常フローがどのように様々な所持方向に対応するか</a>を見ていきます。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/CSS/Block_formatting_context">ブロック整形コンテキスト (BFC)</a></li>
 <li><a href="/ja/docs/Web/CSS/Visual_formatting_model">視覚整形モデル</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Model">CSS ボックスモデル</a></li>
</ul>
