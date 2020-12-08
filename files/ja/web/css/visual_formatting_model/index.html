---
title: 視覚整形モデル
slug: Web/CSS/Visual_formatting_model
tags:
  - CSS
  - CSS Box Model
  - Guide
  - Reference
  - visual formatting model
translation_of: Web/CSS/Visual_formatting_model
---
<div>{{CSSRef}}</div>

<p class="summary">CSS の<ruby><strong>視覚整形モデル</strong><rp> (</rp><rt>visual formatting model</rt><rp>) </rp></ruby>は、ユーザーエージェントが文書ツリーをどのように受け取り、視覚メディア用に処理して表示するかを説明するものです。これには、コンピューター画面のような{{glossary("continuous media", "連続メディア")}}と、ブラウザーの印刷機能によって印刷された本や文書のような{{glossary("paged media", "ページ付きメディア")}}が含まれます。情報の大部分は、連続メディアとページ付きメディアに等しく適用されます。</p>

<p>視覚整形モデルでは、文書ツリーの各要素は、モデルに応じてゼロ個以上のボックスを生成します。これらのボックスのレイアウトは、次のようにして制御されます。</p>

<ul>
 <li>ボックスの寸法と種類</li>
 <li>位置決定方法 (通常フロー、浮動、絶対位置指定)</li>
 <li>文書ツリー内の他の要素</li>
 <li>外部情報 ({{glossary("viewport", "ビューポート")}}の寸法、画像の固有の寸法、など)</li>
</ul>

<p>視覚整形モデルに関する情報の多くは CSS2 で定義されていますが、様々なレベル 3 の仕様書ではこの情報が追加されています。仕様書を読む際には、 CSS2 で定義されているモデルが参照されていることが多いので、他のレイアウト仕様書を読む際には、 CSS2 で定義されているモデルとそれを説明するために使用されている用語を理解しておくことが重要です。</p>

<p>この文書では、モデルを定義して関連する用語や概念をいくつか紹介し、より詳細な情報を説明している MDN のより具体的なページへのリンクを紹介します。</p>

<h2 id="The_role_of_the_viewport" name="The_role_of_the_viewport">ビューポートの役割</h2>

<p>連続メディアでは、{{glossary("viewport", "ビューポート")}}はブラウザーのウィンドウから見える領域です。ユーザーエージェントはビューポートの寸法が変更されたときに、ページのレイアウトを変更することがあります。 — 例えば、ウィンドウの寸法を変更した場合や、モバイル端末の向きを変更した場合です。</p>

<p>ビューポートが文書の寸法よりも小さい場合、ユーザーエージェントは文書の表示されていない部分へスクロールする方法を提供する必要があります。もっともよくあるのは、横書きで、上から下へ書く言語の場合、<strong>ブロック方向</strong>のスクロールです。しかし、<strong>インライン方向</strong>のスクロールを設計する必要がある場合もあるかもしれません。</p>

<h2 id="Box_generation" name="Box_generation">ボックスの生成</h2>

<p><strong>ボックスの生成</strong>は CSS の視覚整形モデルの一部で、文書内の要素からボックスを作ることです。生成されたボックスは様々な種類を持ち、視覚整形モデルに影響します。生成されるボックスの種類は CSS の {{cssxref("display")}} プロパティによって決まります。</p>

<p>当初 CSS2 で定義された <code>display</code> プロパティは、 <a href="https://www.w3.org/TR/css-display-3/">CSS Display Module Level 3</a> で拡張されました。これに加え、 display にまつわる用語の一部が CSS2 から何年にもわたって更新され明確化されました。</p>

<p>CSS はソース文書を読み取り、キャンバスにレンダリングします。これを行うために、中間的な構造である<strong>ボックスツリー</strong>を生成し、レンダリングされる文書の書式構造を表現します。ボックスツリー内のそれぞれのボックスは、キャンバス上の空間や時間において対応する要素 (または擬似要素) を表現しており、ボックスツリー内のテキストは対応するテキストノードの内容のように表現します。</p>

<p>それから、それぞれの要素について、 CSS はその要素の <code>display</code> プロパティの値に応じてゼロ個以上のボックスを生成します。</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: ボックスはよく display の種類によって参照されます。例えば、 <code>display: block</code> の要素によって生成されたボックスは「ブロックボックス」と呼ばれたり、単に「ブロック」と呼ばれたりします。ただし、ブロックボックス、ブロックレベルボックス、ボックスコンテナーはすべて微妙に異なることに注意してください。詳しくは下記の{{anch("Block boxes", "ブロックボックス")}}を参照してください。</p>
</div>

<h3 id="主ボックス">主ボックス</h3>

<p>要素が1つ以上のボックスを生成する場合、そのうちの一つが<ruby><strong>主ボックス</strong><rp> (</rp><rt>principal box</rt><rp>) </rp></ruby>となります。これがボックスツリー内の子孫ボックスと生成コンテンツを含み、様々な配置方法の対象となるボックスとなります。</p>

<p>要素によっては、主ボックスに加えて追加のボックスを生成することがあり、例えば、 <code>display: list-item</code> は複数のボックス (例えば <strong>主ブロックボックス</strong>や<strong>子マーカーボックス</strong>) を生成します。また、値によっては (<code>none</code> や <code>contents</code> など) 要素やその子孫が全くボックスを生成しなくなります。</p>

<h3 id="Anonymous_boxes" name="Anonymous_boxes">無名ボックス</h3>

<p><ruby><strong>無名ボックス</strong><rp> (</rp><rt>anonymous box</rt><rp>) </rp></ruby>は、ボックスに使用する HTML 要素がない場合に作成されます。このような状況は、例えば、親要素で <code>display: flex</code> を宣言した場合に、その中に他の要素に含まれないテキストが直接存在する場合に発生します。ボックスツリーを修正するために、そのテキストの周りに無名ボックスが作成されます。これはフレックスアイテムとして動作しますが、対象となる要素がないため、通常のボックスのように対象を設定したり、スタイルを設定したりすることはできません。</p>

<p>{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-flex.html", '100%', 720)}}</p>

<p>同じことは、ブロック要素にテキストが混在している場合にも起こります。次の例では、 <code>&lt;div&gt;</code> の中に文字列があり、文字列の中央にはテキストの一部を含む <code>&lt;p&gt;</code> 要素があります。</p>

<p>{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-block.html", '100%', 720)}}</p>

<p>文字列はボックスツリーの中で3つのボックスに分割されます。段落要素の前の文字列の部分は無名ボックスに包まれ、次にボックスを生成する <code>&lt;p&gt;</code> があり、さらに別の無名ボックスがあります。</p>

<p>これらの無名ボックスについて考慮すべきことは、直接の親からスタイルを継承するということですが、無名ボックスを対象にして、それらがどのように見えるかを変更することはできません。この例では、コンテナーの子を対象にするために直接子セレクターを使用しています。これは、無名ボックスは親ブロックの子ではないので、無名ボックスを変更するものではありません。</p>

<p><strong>インライン無名ボックス</strong>は、文字列がインライン要素によって分割されたとき、、例えば文に <code>&lt;em&gt;&lt;/em&gt;</code> で囲まれた区間がある場合に作成されます。これにより、文が3つのインラインボックスに分割されます。強調された区間の前の無名インラインボックス、 <code>&lt;em&gt;</code> 要素で包まれた区間、そして最後の無名インラインボックスです。無名ブロックボックスと同様に、これらの無名インラインボックスは <code>&lt;em&gt;</code> の場合とは異なり、独立してスタイルを設定することはできず、コンテナーのスタイルを継承するだけです。</p>

<p>他にも無名ボックスを生成する整形コンテキストがあります。<a href="/ja/docs/Web/CSS/CSS_Grid_Layout">グリッドレイアウト</a>は上記の<a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">フレックスボックス</a>の例と同様に動作し、テキストの文字列を無名ボックス付きのグリッドアイテムに変換します。<a href="/ja/docs/Web/CSS/CSS_Columns">段組み</a>レイアウトは段の周りに無名の段ボックスを生成します。これらもスタイル付けなどの対象にすることはできません。<a href="/ja/docs/Web/CSS/CSS_Table">表レイアウト</a>は適切な表構造を生成するために無名ボックスを追加します。例えば、 <code>display: table-row</code> が付いたボックスがない場合、無名の表の行を追加するなどです。</p>

<h3 id="Line_boxes" name="Line_boxes">行ボックス</h3>

<p><strong>行ボックス</strong>は、テキストの各行を包むボックスのことです。アイテムを浮動させた後に、背景色のあるブロックを続けると、行ボックスとそれを含むブロックの違いがわかります。</p>

<p>次の例では、浮動している <code>&lt;div&gt;</code> の後に続く行ボックスは、浮動要素を回り込むように短くなっています。浮動したアイテムがフローから抜けるので、ボックスの背景は浮動要素の後ろを走っています。</p>

<p>{{EmbedGHLiveSample("css-examples/visual-formatting/line-boxes.html", '100%', 720)}}</p>

<h2 id="Positioning_schemes_and_in-flow_and_out-of-flow_elements" name="Positioning_schemes_and_in-flow_and_out-of-flow_elements">配置の仕組みとフロー内・フロー外の要素</h2>

<p>CSS では、ボックスをレイアウトするための配置の仕組みが3種類あります。 — <strong>通常フロー</strong>、<strong>浮動</strong>、<strong>絶対位置指定</strong>です。</p>

<h3 id="Normal_flow" name="Normal_flow">通常フロー</h3>

<p>CSS において、<ruby><strong>通常フロー</strong><rp> (</rp><rt>normal flow</rt><rp>) </rp></ruby>にはブロックボックスのブロックレベル整形、インラインボックスのインラインレベル整形、それにブロックレベルおよびインラインレベルボックスの相対位置指定と粘着位置指定があります。</p>

<p>詳しくは <a href="/ja/docs/Web/CSS/CSS_Flow_Layout">フローレイアウト</a>を参照してください。</p>

<h3 id="Floats" name="Floats">浮動要素</h3>

<p>浮動モデルでは、ボックスは、まず通常の流れに従ってレイアウトされ、その後、流れから取り出され、ふつう左または右に配置されます。コンテンツは、フロートの側面に沿って折り返されます。</p>

<p>詳しくは<a href="/ja/docs/Learn/CSS/CSS_layout/Floats">浮動要素</a>を参照してください。</p>

<h3 id="Absolute_positioning" name="Absolute_positioning">絶対位置指定</h3>

<p>絶対位置指定モデルでは (固定位置指定も含む)、ボックスは完全に通常フローから外され、包含ブロック (固定位置指定の場合はビューポート) を基準とした位置に配置されます。</p>

<p>要素が浮動要素、絶対位置指定、ルート要素のいずれかであれば、<strong>フロー外</strong>と呼ばれます。フロー外ではない要素は<strong>フロー内</strong>と呼ばれます。</p>

<p>詳しくは<a href="/ja/docs/Web/CSS/CSS_Positioning">CSS 位置指定レイアウト</a>を参照してください。</p>

<h2 id="Formatting_contexts_and_the_display_property" name="Formatting_contexts_and_the_display_property">整形コンテキストと display プロパティ</h2>

<p>ボックスは<strong>外部表示型</strong>、すなわち <code>block</code> または <code>inline</code> で表すことができます。この外部表示型はページ上でそのボックスが他の要素との間でどのようにふるまうかを示します。</p>

<p>ボックスには内部表示型もあり、これは子がどのように動作するかを示します。通常ブロックかつインラインレイアウト、または通常フローであれば、この表示型は <code>flow</code> です。これは、子要素が <code>block</code> または <code>inline</code> のどちらかであることを示します。</p>

<p>しかし、内部表示型は <code>grid</code> や <code>flex</code> になる可能性もあり、この場合は直接の子がグリッドまたはフレックスアイテムとして表示されます。このような場合、要素はグリッドやフレックスの<a href="/ja/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts">整形コンテキスト</a>を生成しているといいます。多くの点でこれはブロックの整形コンテキストに似ていますが、子要素は通常のフローのアイテムではなく、フレックスやグリッドのアイテムとして動作します。</p>

<p>ブロックレベルとインラインレベルの各ボックスの相互作用は、 {{cssxref("display")}} の MDN ドキュメントで説明しています。</p>

<p>また、 display の特定の値については、ボックスレイアウトの観点から、これらの整形コンテキストがどのように機能するかを以下のリファレンスで説明しています。</p>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS グリッドレイアウト</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS フレックスボックスレイアウト</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Table">CSS 表レイアウト</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Lists_and_Counters">リスト</a></li>
</ul>

<h3 id="Independent_formatting_contexts" name="Independent_formatting_contexts">独立整形コンテキスト</h3>

<p>要素は、それを含むブロックの整形コンテキストに参加するか、独立した整形コンテキストを確立するかします。例えば、グリッドコンテナーは、その子に対して新しい<strong>グリッド整形コンテキスト</strong>を確立します。</p>

<p><strong>独立整形コンテキスト</strong>には浮動要素を含み、マージンは整形コンテキストの境界を越えて相殺されることはありません。そのため、新しいブロック整形コンテキストを作成することで、ボックス内に浮動要素が収まるようにすることができます。浮動状態を解除するために {{cssxref("overflow")}} プロパティの値を変更して、新しいブロック整形コンテキストが生成することがあります。新しい値 <code>display: flow-root</code> は、 overflow の値が変更されたことによって望ましくない問題が発生することなく、この有用な効果を得るために新しい<a href="/ja/docs/Web/Guide/CSS/Block_formatting_context">ブロック整形コンテキスト</a>を生成します。</p>

<h3 id="Block_boxes" name="Block_boxes">ブロックボックス</h3>

<p>仕様書では、ブロックボックス、ブロックレベルボックス、ブロックコンテナーのことを、あるところでは<strong>ブロックボックスと</strong>呼んでいます。これらはやや異なるものであり、ブロックボックスという用語は曖昧さがない場合にのみ使用すべきです。</p>

<h4 id="Block_containers" name="Block_containers">ブロックコンテナー</h4>

<p><strong>ブロックコンテナー</strong>は、インライン整形コンテキストに参加するインラインレベルのボックスのみを含むか、ブロック整形コンテキストに参加するブロックレベルのボックスのみを含むかします。このため、上で説明した動作では、すべてのアイテムがブロックまたはインラインの書式設定コンテキストに参加できるように、無名ボックスが導入されています。要素は、ブロックレベルまたはインラインレベルのボックスを含む場合にのみ、ブロックコンテナーとなります。</p>

<h4 id="Inline-level_and_block-level_boxes" name="Inline-level_and_block-level_boxes">インラインレベルボックスとブロックレベルボックス</h4>

<p>これらはブロックコンテナーの内部に含まれるボックスであり、それぞれインラインレイアウトとブロックレイアウトに参加します。</p>

<h4 id="Block_boxes_2" name="Block_boxes_2">ブロックボックスの場合</h4>

<p>ブロックボックスとは、ブロックレベルボックスでありながらブロックコンテナーでもあるものを指します。 CSS の <code>display</code> で説明されているように、ボックスがブロックレベルのボックスであってもブロックコンテナーにはならないこともあります (例えば、フレックスコンテナーやグリッドコンテナーになることもあります)。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{css_key_concepts}}</li>
</ul>
