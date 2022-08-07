---
title: すべてのコードの全般的なガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
tags:
  - Code
  - General
  - Guide
  - Guidelines
  - MDN Meta
  - MDN メタ
  - ガイド
  - ガイドライン
  - コード
  - 全般
translation_of: MDN/Guidelines/Code_guidelines/General
original_slug: MDN/Guidelines/Code_guidelines/General
---
<div>{{MDNSidebar}}{{IncludeSubnav("/ja/docs/MDN")}}</div>

<p class="summary">以下のコード例のガイドラインは、 HTML, CSS, JavaScript, その他のどれであっても適用されます。</p>

<h2 id="In_this_article" name="In_this_article">目次</h2>

<ul>
 <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Indentation_spacing_size">インデントづけ、領域、大きさ</a>

  <ul>
   <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Indentation">インデント付け</a></li>
   <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Code_line_length">コードの行の長さ</a></li>
   <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Code_block_height">コードブロックの高さ</a></li>
  </ul>
 </li>
 <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Guidelines_for_displaying_examples">例を示す場合のガイドライン</a>
  <ul>
   <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Size_of_rendered_example">例を表示する大きさ</a></li>
   <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Use_of_images_and_other_media">画像およびその他のメディアの使用</a></li>
   <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Use_of_color">色の使用</a></li>
   <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Highlight_good_and_bad_practice_examples">良い例と悪い例の強調表示</a></li>
  </ul>
 </li>
 <li><a href="/ja/docs/MDN/Contribute/Guidelines/Code_guidelines/General#Writing_syntax_sections_on_reference_pages">リファレンスページの構文の節を書く</a></li>
</ul>

<h2 id="Indentation_spacing_size" name="Indentation_spacing_size">インデント付け、領域、大きさ</h2>

<h3 id="Indentation" name="Indentation">インデント付け</h3>

<p>すべてのコードは、次のように2文字のインデントを使用します。</p>

<pre class="brush: html example-good notranslate">&lt;div&gt;
  &lt;p&gt;This is my paragraph.&lt;/p&gt;
&lt;/div&gt;</pre>

<pre class="brush: js example-good notranslate">function myFunc() {
  if(thingy) {
    console.log('Yup, that worked.');
  }
}</pre>

<h3 id="Code_line_length" name="Code_line_length">コードの行の長さ</h3>

<p>コードの行の長さは最大80文字 (<a href="https://github.com/mdn/interactive-examples">対話型デモ</a>の場合は64文字) にしてください。読みやすくするために、適切な方法で改行する必要がありますが、ベストプラクティスを犠牲にする必要はありません。</p>

<p>例えば、次のものは良くありません。</p>

<pre class="brush: js example-bad notranslate">let tommyCat = 'Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.';</pre>

<p>次のものはましですが、まだ幾らかぎこちないです。</p>

<pre class="brush: js notranslate">let tommyCat = 'Said Tommy the Cat as he reeled back to clear whatever foreign '
+ 'matter may have nestled its way into his mighty throat. Many a fat alley rat '
+ 'had met its demise while staring point blank down the cavernous barrel of '
+ 'this awesome prowling machine.';</pre>

<p>テンプレートリテラルを使うのもよいでしょう。</p>

<pre class="brush: js example-good notranslate">let tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;</pre>

<h3 id="Code_block_height" name="Code_block_height">コードブロックの高さ</h3>

<p>コードブロックは必要なだけの長さであるべきですが、それより長くなってもいけません。できれば、15-25行が目安です。コードブロックがはるかに長くなりそうであれば、最も有用なスニペットのみを示し、 GitHup リポジトリや codepen に入れた完全な例にリンクさせてください。</p>

<h2 id="Guidelines_for_displaying_examples" name="Guidelines_for_displaying_examples">例を表示する際のガイドライン</h2>

<h3 id="Size_of_rendered_example" name="Size_of_rendered_example">例を表示する大きさ</h3>

<p>MDN のメインコンテンツペインは、デスクトップでおよそ 700px の幅ですので、 MDN に埋め込む例はその幅であれば大丈夫です (埋め込む例の幅を 100% に設定してください)。</p>

<p>高さについては、可能な限り画面で読みやすくするために、例を表示する高さを 700px 未満に保つことをお勧めします。</p>

<p>また、サンプルをある程度レスポンシブにすることを検討する必要があり、そうすればモバイル端末でも役立ちます。</p>

<h3 id="Use_of_images_and_other_media" name="Use_of_images_and_other_media">画像およびその他のメディアの使用</h3>

<p>画像やその他のメディアを例に含めたい場合があるでしょう。その場合は次のようにしてください。</p>

<ul>
 <li>あなたが利用できるライセンスであることを確認してください。許容度がとても広いライセンス、例えば <a href="https://creativecommons.org/share-your-work/public-domain/cc0/" rel="nofollow">CC0</a> や、一般的なコンテンツライセンス — <a class="external text external-icon" href="http://creativecommons.org/licenses/by-sa/2.5/" rel="nofollow noopener">クリエイティブ・コモンズの表示-継承ライセンス</a> (CC-BY-SA) — と互換性のある1つ以上のライセンスを持つメディアを使用してみてください。</li>
 <li>画像については、 <a href="https://tinypng.com" rel="nofollow">https://tinypng.com</a> や <a href="https://imageoptim.com" rel="nofollow">https://imageoptim.com</a> を通すと例のページの重さを軽減することができます。</li>
 <li><code>SVG</code> については、コードを <a href="https://jakearchibald.github.io/svgomg/">SVGOMG</a> に通すと <code>SVG</code> ファイルの最後に空行があることを保証することができます。</li>
 <li>
  <p>ページ上にアイコンを表示するときは (例えば {{cssxref("background-image")}} などで)、適切な箇所に <a href="https://mdn.github.io/mdn-fiori/patterns/css/iconography/">MDN 組み込みアイコン</a>を使用し、他のものとスタイルを合わせるようにしてください。</p>
 </li>
</ul>

<h3 id="Use_of_color" name="Use_of_color">色の使用</h3>

<p>16進数であれば小文字で、影や主な色 (black, white, red など) ならばキーワードを使用することもできます。より複雑な方式 (透過を含めるなど) は必要な場合だけ使用してください。</p>

<p>下記のように、主要な色やその他の「基本的な」色はキーワードを使用することを推奨します。</p>

<pre class="brush: css example-good notranslate">color: black;
color: white;
color: red;</pre>

<p>もっと複雑な色には rgb() を使用してください (半透過のものも含む)。</p>

<pre class="brush: css example-good notranslate">color: rgb(0, 0, 0, 0.5);
color: rgb(248, 242, 230);</pre>

<p>16進の色を使用する必要がある場合は、小文字を使用してください。</p>

<pre class="brush: css example-good notranslate">color: #058ed9;
color: #a39a92;</pre>

<p>冗長であれば短縮形を使用してください。</p>

<pre class="brush: css example-good notranslate">color: #ff0;
color: #fff;</pre>

<p><a href="https://mdn.github.io/mdn-fiori/">MDN's Fiori guidelines</a> (フロンドエンドコードベース向け) には、 MDN のデザイン全般を貫く<a href="https://mdn.github.io/mdn-fiori/patterns/scss/variables/">有用な色のセット</a>があります。</p>

<h3 id="Highlight_good_and_bad_practice_examples" name="Highlight_good_and_bad_practice_examples">良い例と悪い例の強調表示</h3>

<p>このガイドラインを見ていてお気づきと思いますが、良い方法と思われるコードブロックは緑地に笑顔で強調表示され、悪い方法と思われるコードブロックには赤地に悲しい顔で強調表示されています。</p>

<p>これを行うには、まず MDN エディターコントロールを使用してコードブロックを <code>&lt;pre&gt;</code> ブロックの中に入れ、適切な構文強調表示を指定してください。コードのソースは次のようになります。</p>

<pre class="notranslate">&lt;pre class="brush: js"&gt;
function myFunc() {
  console.log('Hello!');
};&lt;/pre&gt;</pre>

<p>これを良い例とするには、 <code>example-good</code> を <code>class</code> 属性の引用符の直前に入れてください。</p>

<pre class="notranslate">&lt;pre class="brush: js example-good"&gt;
  ...</pre>

<p>悪い例とするには、 <code>example-bad</code> を <code>class</code> 属性の引用符の直前に入れてください。</p>

<pre class="notranslate">&lt;pre class="brush: js example-bad"&gt;
  ...</pre>

<p>これらの使用をお勧めします。これらをすべての場所で使用する必要はありません。特に、コードの良い点と悪い点を明確に示している場合に限って使用してください。</p>

<h2 id="Writing_syntax_sections_on_reference_pages" name="Writing_syntax_sections_on_reference_pages">リファレンスページの構文の節を書く</h2>

<p>MDN リファレンスページには、ある機能、例えば JavaScript メソッド、 CSS プロパティ、 HTML 要素、などがどのような構文を取りうる・取るべきかを曖昧にせずに示します。これらを記述するガイドラインは<a href="/ja/docs/MDN/Contribute/Structures/Syntax_sections">構文の節</a>の文書にあります。</p>
