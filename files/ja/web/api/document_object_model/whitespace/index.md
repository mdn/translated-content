---
title: ホワイトスペースは HTML、 CSS、そして DOM 内でどう扱われるか
slug: Web/API/Document_Object_Model/Whitespace
tags:
  - CSS
  - DOM
  - HTML
  - JavaScript
  - whitespace
translation_of: Web/API/Document_Object_Model/Whitespace
---
<div>{{APIRef("DOM")}}</div>

<p><a href="/ja/docs/Web/API/Document_Object_Model">DOM</a> にホワイトスペースが存在すると、レイアウトの問題が発生したり、ホワイトスペースがある場所によっては、予期せぬ方法でコンテンツツリーの操作が困難になることがあります。この記事では、どのような場合に問題が発生するかを探り、その結果生じる問題を軽減するために何ができるかを見ていきます。</p>

<h2 id="What_is_whitespace" name="What_is_whitespace">ホワイトスペースとは</h2>

<p>ホワイトスペースとは、スペース、タブ、改行 (正確には、CRLF シーケンス、キャリッジリターン、改行) のみで構成されたテキストの文字列のことです。これらの文字を使用することで、自分や他の人が読みやすいようにコードを整形することができます。実際、私たちのソースコードの多くはこれらのホワイトスペースであふれており、コードのダウンロードサイズを減らすために、本番のビルド段階でホワイトスペースを取り除く傾向があります。</p>

<h3 id="HTML_largely_ignores_whitespace" name="HTML_largely_ignores_whitespace">HTML は大体空白を無視するのか</h3>

<p>HTML の場合、ホワイトスペースはほとんど無視されます。単語と単語の間のホワイトスペースは 1文字として扱われ、要素の開始と終了、要素外のホワイトスペースは無視されます。以下の最小限の例を見てみましょう。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

    &lt;h1&gt;       Hello      World!     &lt;/h1&gt;</pre>

<p>このソースコードには、<code>DOCTYPE</code> の後に 2 つの改行と <code>&lt;h1&gt;</code> 要素の前後と内部に空白文字の束が含まれていますが、ブラウザーは全く気にしていないようで、これらの文字が全く存在しないかのように "Hello World!" という言葉を表示しています。</p>

<p>{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}</p>

<p>これは、ホワイトスペースがページのレイアウトに影響を与えないようにするためです。要素の周囲や内部に余白を作るのは CSS の仕事です。</p>

<h3 id="What_does_happen_to_whitespace" name="What_does_happen_to_whitespace">ホワイトスペースに 何が<em>起こる</em>のか</h3>

<p>しかし、ただ消えるだけではありません。</p>

<p>元の文書で HTML 要素の外にあるホワイトスペースはすべて DOM で表現されます。これは、エディターが文書の書式を保持するために内部的に必要です。これは、次のことを意味します。</p>

<ul>
 <li>ホワイトスペースのみを含むテキストノードが存在し、</li>
 <li>テキストノードによっては先頭や末尾にホワイトスペースを持つことがある。</li>
</ul>

<p>例えば、次の文書を見てください。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Header&lt;/h1&gt;
  &lt;p&gt;
    Paragraph
  &lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>この DOM ツリーは次のように見えます。</p>

<p><img alt="上記の HTML の例と同等の DOM ツリー" src="https://mdn.mozillademos.org/files/17084/dom-string.png" style="display: block; height: 288px; margin: 0 auto; width: 562px;"></p>

<p>DOM でホワイトスペースを保存することは多くの点で便利ですが、特定のレイアウトを実装するのが難しくなったり、DOM 内のノードを反復処理したい開発者にとっては問題が生じたりする場所があります。これらの問題と解決策については、後ほど見ていきましょう。</p>

<h3 id="How_does_CSS_process_whitespace" name="How_does_CSS_process_whitespace">CSS はホワイトスペースをどのように処理するのか</h3>

<p>ほとんどのホワイトスペースは無視されますが、すべてが無視されるわけではありません。先ほどの例では、"Hello" と "World!" の間のホワイトスペースの一つは、ブラウザーでページがレンダリングされたときにまだ存在しています。ブラウザーエンジンには、どのホワイトスペースが有用でどれが不要かを決定する規則があります — これらは、少なくとも <a href="https://www.w3.org/TR/css-text-3">CSS テキストモジュールレベル 3</a>、特に <a href="https://www.w3.org/TR/css-text-3/#white-space-property">CSS の white-space プロパティ</a>と<a href="https://www.w3.org/TR/css-text-3/#white-space-processing">ホワイトスペースの処理の詳細</a>についての部分で規定されていますが、以下ではより簡単な説明を提供します。</p>

<p>もう一つ、本当に簡単な例を挙げてみましょう。簡単にするように、すべての空白を ◦ で、すべてのタブを ⇥ で、すべての開業を ⏎ で表現します。</p>

<p>例を示します。</p>

<pre class="brush: html">&lt;h1&gt;◦◦◦Hello◦⏎
⇥⇥⇥⇥&lt;span&gt;◦World!&lt;/span&gt;⇥◦◦&lt;/h1&gt;</pre>

<p>これはブラウザーで次のようにレンダリングされます。</p>

<div class="hidden">
<h4 id="Hidden_example" name="Hidden_example">Hidden example</h4>

<pre class="brush: html">&lt;h1&gt;   Hello
    &lt;span&gt; World!&lt;/span&gt;   &lt;/h1&gt;</pre>
</div>

<p>{{EmbedLiveSample('Hidden_example')}}</p>

<p><code>&lt;h1&gt;</code> 要素はインライン要素のみを含んでいます。実際にはこのようなものを含んでいます。</p>

<ul>
 <li>1 つのテキストノード (いくつかの空白、"Hello" という語、いくつかのタブから成る)</li>
 <li>1 つのインライン要素 (<code>&lt;span&gt;</code> で、中に空白と "World!" という語を含む)</li>
 <li>もう 1 つのテキストノード (タブと空白のみから成る)</li>
</ul>

<p>このため、<a href="/ja/docs/Web/CSS/Inline_formatting_context">インライン整形コンテキスト</a>と呼ばれるものを確立します。これは、ブラウザーエンジンが作業を行う存在する可能性のあるレイアウトレンダリングコンテキストの一つです。</p>

<p>このコンテキストの中では、ホワイトスペース文字の処理は次のように要約されます。</p>

<ol>
 <li>
  <p>まず、改行の直前と直後の空白とタブはすべて無視されるので、以前のマークアップの例を参考にして、この最初の規則を適用すると、次のようになります。</p>

  <pre class="brush: html">&lt;h1&gt;◦◦◦Hello⏎
&lt;span&gt;◦World!&lt;/span&gt;⇥◦◦&lt;/h1&gt;</pre>
 </li>
 <li>
  <p>次に、タブ文字がすべて空白として扱われるので、この例は次のようになります。</p>

  <pre class="brush: html">&lt;h1&gt;◦◦◦Hello⏎
&lt;span&gt;◦World!&lt;/span&gt;◦◦◦&lt;/h1&gt;</pre>
 </li>
 <li>
  <p>次に、改行が空白に変換されます。</p>

  <pre class="brush: html">&lt;h1&gt;◦◦◦Hello◦&lt;span&gt;◦World!&lt;/span&gt;◦◦◦&lt;/h1&gt;</pre>
 </li>
 <li>
  <p>その後で、空白の直後に他の空白がある場合は (2 つが別々なインライン要素をまたぐ場合も含めて) 無視されるので、次のようになります。</p>

  <pre class="brush: html">&lt;h1&gt;◦Hello◦&lt;span&gt;World!&lt;/span&gt;◦&lt;/h1&gt;</pre>
 </li>
 <li>
  <p>そして、行頭と行末の一連の空白が削除されるので、ようやくこんな感じになります。</p>

  <pre class="brush: html">&lt;h1&gt;Hello◦&lt;span&gt;World!&lt;/span&gt;&lt;/h1&gt;</pre>
 </li>
</ol>

<p>このため、ウェブページを訪れた人は、ひどく字下げされた "Hello" に続いてもっとひどく字下げされた "World!" をその下の行に見かけるのではなく、ページの先頭にきれいに書かれた "Hello World!" という文言を見ることになります。</p>

<div class="blockIndicator note">
<p><strong>メモ</strong>: <a href="/ja/docs/Tools">Firefox DevTools</a> ではバージョン 52 以降、テキストノードの強調表示に対応しており、どのノードにホワイトスペース文字が含まれているかを正確に確認できるようになりました。純粋なホワイトスペースノードには "whitespace" ラベルが付けられます。</p>
</div>

<h3 id="Whitespace_in_block_formatting_contexts" name="Whitespace_in_block_formatting_contexts">ブロック整形コンテキストでのホワイトスペース</h3>

<p>Above we just looked at elements that contain inline elements, and inline formatting contexts. If an element contains at least one block element, then it instead establishes what is called a <a href="/ja/docs/Web/Guide/CSS/Block_formatting_context">block formatting context</a>.</p>

<p>Within this context, whitespace is treated very differently. Let’s take a look at an example to explain how. We've marked the whitespace characters as before.</p>

<pre class="brush: html">&lt;body&gt;⏎
⇥&lt;div&gt;◦◦Hello◦◦&lt;/div&gt;⏎
⏎
◦◦◦&lt;div&gt;◦◦World!◦◦&lt;/div&gt;◦◦⏎
&lt;/body&gt;</pre>

<p>We have 3 text nodes that contain only whitespace, one before the first <code>&lt;div&gt;</code>, one between the 2 <code>&lt;divs&gt;</code>, and one after the second <code>&lt;div&gt;</code>.</p>

<p>This renders like so:</p>

<div class="hidden">
<h4 id="Hidden_example_2" name="Hidden_example_2">Hidden example 2</h4>

<pre class="brush: html">&lt;body&gt;
  &lt;div&gt;  Hello  &lt;/div&gt;

   &lt;div&gt;  World!   &lt;/div&gt;
&lt;/body&gt;</pre>
</div>

<p>{{EmbedLiveSample('Hidden_example_2')}}</p>

<p>We can summarize how the whitespace here is handled as follows (the may be some slight differences in exact behavior between browsers, but this basically works):</p>

<ol>
 <li>
  <p>Because we’re inside a block formatting context, everything must be a block, so our 3 text nodes also become blocks, just like the 2 <code>&lt;div&gt;</code>s. Blocks occupy the full width available and are stacked on top of each other, which means that we end up with a layout composed of this list of blocks:</p>

  <pre class="brush: html">&lt;block&gt;⏎⇥&lt;/block&gt;
&lt;block&gt;◦◦Hello◦◦&lt;/block&gt;
&lt;block&gt;⏎◦◦◦&lt;/block&gt;
&lt;block&gt;◦◦World!◦◦&lt;/block&gt;
&lt;block&gt;◦◦⏎&lt;/block&gt;</pre>
 </li>
 <li>
  <p>This is then simplified further by applying the processing rules for whitespace in inline formatting contexts to these blocks:</p>

  <pre class="brush: html">&lt;block&gt;&lt;/block&gt;
&lt;block&gt;Hello&lt;/block&gt;
&lt;block&gt;&lt;/block&gt;
&lt;block&gt;World!&lt;/block&gt;
&lt;block&gt;&lt;/block&gt;</pre>
 </li>
 <li>
  <p>The 3 empty blocks we now have are not going to occupy any space in the final layout, because they don’t contain anything, so we’ll end up with only 2 blocks taking up space in the page. People viewing the web page see the words "Hello" and "World!" on 2 separate lines as you’d expect 2 <code>&lt;div&gt;</code>s to be laid out. The browser engine has essentially ignored all of the whitespace that was added in the source code.</p>
 </li>
</ol>

<h2 id="Spaces_in_between_inline_and_inline-block_elements" name="Spaces_in_between_inline_and_inline-block_elements">inline および inline-block 要素間の空白</h2>

<p>Let's move on to look at a few issues that can arise due to whitespace, and what can be done about them. First of all, we'll look at what happens with spaces in between inline and inline-block elements. In fact, we saw this already in our very first example, when we described how whitespace is processed inside inline formatting contexts.</p>

<p>We said that there were rules to ignore most characters but that word-separating characters remain. When you’re only dealing with block-level elements such as <code>&lt;p&gt;</code> that only contain inline elements such as <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;span&gt;</code>, etc., you don’t normally care about this because the extra whitespace that does make it to the layout is helpful to separate the words in the sentence.</p>

<p>It gets more interesting however when you start using <code>inline-block</code> elements. These elements behave like inline elements on the outside, and blocks on the inside, and are often used to display more complex pieces of UI than just text, side-by-side on the same line, for example navigation menu items.</p>

<p>Because they are blocks, many people expect that they will behave as such, but really they don’t. If there is formatting whitespace between adjacent inline elements, this will result in space in the layout, just like the spaces between words in text.</p>

<p>Consider this example (again, the whitespace characters in the HTML are marked so they are visible):</p>

<pre class="brush: css" id="ef6f">.people-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.people-list li {
  display: inline-block;
  width: 2em;
  height: 2em;
  background: #f06;
  border: 1px solid;
}
</pre>

<pre class="brush: html" id="24bb">&lt;ul class="people-list"&gt;⏎

◦◦&lt;li&gt;&lt;/li&gt;⏎

◦◦&lt;li&gt;&lt;/li&gt;⏎

◦◦&lt;li&gt;&lt;/li&gt;⏎

◦◦&lt;li&gt;&lt;/li&gt;⏎

◦◦&lt;li&gt;&lt;/li&gt;⏎

&lt;/ul&gt;</pre>

<p>This renders as follows:</p>

<div class="hidden">
<h3 id="Hidden_example_3" name="Hidden_example_3">Hidden example 3</h3>

<pre class="brush: css" id="ef6f">.people-list { list-style-type: none; margin: 0; padding: 0; }
.people-list li { display: inline-block; width: 2em; height: 2em; background: #f06; border: 1px solid; }
</pre>

<pre class="brush: html" id="24bb">&lt;ul class="people-list"&gt;

  &lt;li&gt;&lt;/li&gt;

  &lt;li&gt;&lt;/li&gt;

  &lt;li&gt;&lt;/li&gt;

  &lt;li&gt;&lt;/li&gt;

  &lt;li&gt;&lt;/li&gt;

&lt;/ul&gt;</pre>
</div>

<p>{{EmbedLiveSample('Hidden_example_3')}}</p>

<p>You probably don't want the gaps in between the blocks — depending on the use case (is this a list of avatars, or horizontal nav buttons?), you probably want the element sides flush with each other, and to be able to control any spacing yourself.</p>

<p>The Firefox DevTools HTML Inspector will highlight text nodes, and also show you exactly what area the elements are taking up — useful if you are wondering what is causing the problem, and are maybe thinking you've got some extra margin in there or something!</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/17085/whitespace-devtools.png" style="border-style: solid; border-width: 1px; height: 454px; width: 797px;"></p>

<p>There are a few ways of getting around this problem:</p>

<p>Use <a href="/ja/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a> to create the horizontal list of items instead of trying an <code>inline-block</code> solution. This handles everything for you, and is definitely the preferred solution:</p>

<pre class="brush: css">ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}</pre>

<p>If you need to rely on <code>inline-block</code>, you could set the <code><a href="/ja/docs/Web/CSS/font-size">font-size</a></code> of the list to 0. This only works if your blocks are not sized with ems (based on the <code>font-size</code>, so the block size would also end up being 0). rems would be a good choice here:</p>

<pre class="brush: css">ul {
  font-size: 0;
  ...
}

li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  ...
}
</pre>

<p>Or you could set negative margin on the list items:</p>

<pre class="brush: css">li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}</pre>

<p>You can also solve this problem by putting your list items all on the same line in the source, which causes the whitespace nodes to not be created in the first place:</p>

<pre class="brush: html">&lt;li&gt;&lt;/li&gt;&lt;li&gt;&lt;/li&gt;&lt;li&gt;&lt;/li&gt;&lt;li&gt;&lt;/li&gt;&lt;li&gt;&lt;/li&gt;</pre>

<h2 id="DOM_traversal_and_whitespace" name="DOM_traversal_and_whitespace">DOM トラバーサルとホワイトスペース</h2>

<p>When trying to do <a href="/ja/docs/Web/API/Document_Object_Model">DOM</a> manipulation in JavaScript, you can also encounter problems because of whitespace nodes. For example, if you have a reference to a parent node and want to affect its first element child using <code><a href="/ja/docs/Web/API/Node/firstChild">Node.firstChild</a></code>, if there is a rogue whitespace node just after the opening parent tag you will not get the result you are expecting. The text node would be selected instead of the element you want to affect.</p>

<p>As another example, if you have a certain subset of elements that you want to do something to based on whether they are empty (have no child nodes) or not, you could check whether each element is empty using something like <code><a href="/ja/docs/Web/API/Node/hasChildNodes">Node.hasChildNodes()</a></code>, but again, if any target elements contain text nodes, you could end up with false results.</p>

<h2 id="Whitespace_helper_functions" name="Whitespace_helper_functions">ホワイトスペースヘルパー関数</h2>

<p>The JavaScript code below defines several functions that make it easier to deal with whitespace in the DOM:</p>

<pre class="brush:js">/**
 * スクリプト全体で、ホワイトスペースを以下のいずれかの文字として定義しています。
 *  "\t" TAB \u0009
 *  "\n" LF  \u000A
 *  "\r" CR  \u000D
 *  " "  SPC \u0020
 *
 * JavaScript の \s は非改行スペース (および他のいくつかの文字) を含んでいる為
 * このスクリプトでは使用しません。
 */


/**
 * ノードのテキスト内容が完全に空白であるか判断
 *
 * @param nod  CharacterData インターフェイスを実装したノード
 *             (例: Text, Comment, CDATASection ノード)
 * @return     nod のテキスト内容がすべてホワイトスペースであれば true
 *             それ以外は false
 */
function is_all_ws( nod )
{
  // ECMA-262 第3版 の String および RegExp の機能を使用
  return !(/[^\t\n\r ]/.test(nod.data));
}


/**
 * 反復処理関数がノードを無視するべきかどうか判断
 *
 * @param nod  DOM1 の Node インターフェイスを実装したノード
 * @return     ノードが次のいずれかであれば true:
 *                1) すべてホワイトスペースである Text ノード
 *                2) Comment ノード
 *             それ以外は false
 */

function is_ignorable( nod )
{
  return ( nod.nodeType == 8) || // コメントノード
         ( (nod.nodeType == 3) &amp;&amp; is_all_ws(nod) ); // 全空白テキストノード
}

/**
 * 完全に空白あるいはコメントのノードを無視するようにした previousSibling
 * (通常 previousSibling はすべての DOM ノードが持つプロパティのことで、親が
 * 同じで参照ノードの直前にある兄弟ノードを表します)
 *
 * @param sib  参照ノード
 * @return     次のいずれか:
 *               1) is_ignorable 検査で無視できないと判断された sib に
 *                  最も近い前方の兄弟ノード、あるいは
 *               2) 該当するノードがなければ null
 */
function node_before( sib )
{
  while ((sib = sib.previousSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * 完全に空白あるいはコメントのノードを無視するようにした nextSibling
 *
 * @param sib  参照ノード
 * @return     次のいずれか:
 *               1) is_ignorable 検査で無視できないと判断された sib に
 *                  最も近い後方の兄弟ノード、あるいは
 *               2) 該当するノードがなければ null
 */
function node_after( sib )
{
  while ((sib = sib.nextSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * 完全に空白あるいはコメントのノードを無視するようにした lastChild
 * (通常 lastChild はすべての DOM ノードが持つプロパティのことで、参照ノードに
 * 直接含まれる最後のノードを表します)
 *
 * @param sib  参照ノード
 * @return     次のいずれか:
 *               1) is_ignorable 検査で無視できないと判断された sib の
 *                  最後の子供ノード、あるいは
 *               2) 該当するノードがなければ null
 */
function last_child( par )
{
  var res=par.lastChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.previousSibling;
  }
  return null;
}

/**
 * 完全に空白あるいはコメントのノードを無視するようにした firstChild
 *
 * @param sib  参照ノード
 * @return     次のいずれか:
 *               1) is_ignorable 検査で無視できないと判断された sib の
 *                  最初の子供ノード、あるいは
 *               2) 該当するノードがなければ null
 */
function first_child( par )
{
  var res=par.firstChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.nextSibling;
  }
  return null;
}

/**
 * 最初と最後にホワイトスペースを含まず、すべてのホワイトスペースを単一スペースに正規化する
 * ようにした data
 * (通常 data はテキストノードが持つプロパティのことで、ノードのテキストを
 * 表します)
 *
 * @param txt  data が返されるべきテキストノード
 * @return     当該テキストノードの内容が与えるホワイトスペースを纏めた文字列
 */
function data_of( txt )
{
  var data = txt.data;
  // ECMA-262 第3版 の String および RegExp の機能を使用
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data.charAt(0) == " ")
    data = data.substring(1, data.length);
  if (data.charAt(data.length - 1) == " ")
    data = data.substring(0, data.length - 1);
  return data;
}
</pre>

<h2 id="Example" name="Example">例</h2>

<p>The following code demonstrates the use of the functions above. It iterates over the children of an element (whose children are all elements) to find the one whose text is <code>"This is the third paragraph"</code>, and then changes the class attribute and the contents of that paragraph.</p>

<pre class="brush: js">var cur = first_child(document.getElementById("test"));
while (cur)
{
  if (data_of(cur.firstChild) == "This is the third paragraph.")
  {
    cur.className = "magic";
    cur.firstChild.textContent = "This is the magic paragraph.";
  }
  cur = node_after(cur);
}
</pre>
