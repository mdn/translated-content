---
title: Element.innerHTML
slug: Web/API/Element/innerHTML
tags:
  - API
  - DOM
  - DOM Parsing
  - Element
  - Parsing HTML
  - Property
  - Reference
  - innerHTML
  - プロパティ
browser-compat: api.Element.innerHTML
translation_of: Web/API/Element/innerHTML
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary">{{domxref("Element")}} オブジェクトの <strong><code>innerHTML</code></strong> プロパティは、要素内の HTML または XML のマークアップを取得したり設定したりします。</span></p>

<div class="note"><strong>メモ:</strong> {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("noembed")}} ノードが <code>(&amp;)</code>, <code>(&lt;)</code>, <code>(&gt;)</code> の文字を含むテキストの子ノードを持っている場合、 <code>innerHTML</code> はこれらの文字を HTML エンティティの <code>"&amp;amp;"</code>, <code>"&amp;lt;"</code>, <code>"&amp;gt;"</code> としてそれぞれ返します。これらのテキストノードの内容の生のコピーを取得するには {{domxref("Node.textContent")}} を使用してください。</div>

<p>要素の内容を置き換えるというより、文書に HTML を挿入するという場合には、 {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}} メソッドを使用してください。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">const <var>content</var> = <var>element</var>.innerHTML;

<var>element</var>.innerHTML = <var>htmlString</var>;
</pre>

<h3 id="Value">値</h3>

<p>要素の子孫を HTML シリアライズしたものを含んだ {{domxref("DOMString")}} です。 <code>innerHTML</code> に値を設定すると、要素のすべての子孫を削除して、 <var>htmlString</var> の文字列で与えられた HTML を解析して構築されたノードに置き換えます。</p>

<h3 id="Exceptions">例外</h3>

<dl>
  <dt><code>SyntaxError</code></dt>
  <dd>正しくない形の HTML の文字列を使用して <code>innerHTML</code> の値を設定しようとした場合。</dd>
  <dt><code>NoModificationAllowedError</code></dt>
  <dd>親が {{domxref("Document")}} であるノードに HTML を挿入しようとした場合。</dd>
</dl>

<h2 id="Usage_notes">使用上のメモ</h2>

<p><code>innerHTML</code> プロパティは、ページの現在の HTML ソースを、ページが最初に読み込まれてから行われたあらゆる変更を含めて、見るために利用することができます。</p>

<h3 id="Reading_the_HTML_contents_of_an_element">要素の HTML コンテンツの読み取り</h3>

<p><code>innerHTML</code> を読み取ると、ユーザーエージェントが要素の子孫で構成される HTML または XML の断片をシリアライズします。結果として文字列が返ります。</p>

<pre class="brush: js">let contents = myElement.innerHTML;</pre>

<p>これで、 HTML のコンテンツのノードの HTML マークアップを見ることができます。</p>

<div class="note">
  <p><strong>メモ:</strong> 返される HTML または XML の断片は、現在の要素の中身に基づいて生成されますので、返される断片のマークアップや整形方法は、元のページのマークアップと同じであるとは限りません。</p>
</div>

<h3 id="Replacing_the_contents_of_an_element">要素の中身の置き換え</h3>

<p><code>innerHTML</code> の値を設定することで、既存の要素の内容を新しい内容に置き換えることが簡単にできます。</p>

<p>例えば、文書の {{domxref("Document.body", "body")}} 属性の内容を消去することで、文書の内容全体を消去することができます。</p>

<pre class="brush: js">document.body.innerHTML = "";</pre>

<p>この例は文書の現在の HTML マークアップを走査し、 <code>"&lt;"</code> の文字を HTML エンティティの <code>"&amp;lt;"</code> に置き換え、それによって本質的に HTML を生テキストに変換します。そしてこれを {{HTMLElement("pre")}} で囲みます。そして、 <code>innerHTML</code> の値をこの新しい文字列に変更します。結果として、文書の内容がページ全体のソースコードの表示に置き換わります。</p>

<pre class="brush: js">document.documentElement.innerHTML = "&lt;pre&gt;" +
         document.documentElement.innerHTML.replace(/&lt;/g,"&amp;lt;") +
            "&lt;/pre&gt;";</pre>

<h4 id="Operational_details">操作の詳細</h4>

<p><code>innerHTML</code> に値を設定すると、正確には何が起きるのでしょうか？これを行うと、ユーザーエージェントは以下のステップを追います。</p>

<ol>
 <li>指定された値は (文書型に基づいて) HTML または XML として解釈され、新しい一連の要素の DOM ノードを表す {{domxref("DocumentFragment")}} オブジェクトの中に結果が入れられます。</li>
 <li>中身を置き換えようとしている要素が {{HTMLElement("template")}} 要素である場合は、 <code>&lt;template&gt;</code> 要素の {{domxref("HTMLTemplateElement.content", "content")}} 属性を、ステップ1で生成された新しい <code>DocumentFragment</code> で置き換えます。</li>
 <li>その他の要素はすべて、要素の内容を新しい <code>DocumentFragment</code> のノードで置き換えます。</li>
</ol>

<h3 id="Security_considerations">セキュリティの考慮事項</h3>

<p>ウェブページにテキストを挿入するために <code>innerHTML</code> を使用している例は珍しくありませんありません。これがサイト上の攻撃ベクトルになる可能性があり、潜在的なセキュリティリスクが生じます。</p>

<pre class="brush: js">const name = "John";
// 'el' を HTML の DOM 要素と想定します
el.innerHTML = name; // この場合は無害

// ...

name = "&lt;script&gt;alert('I am John in an annoying alert!')&lt;/script&gt;";
el.innerHTML = name; // この場合は無害</pre>

<p>これは{{interwiki("wikipedia", "クロスサイトスクリプティング")}}攻撃のように見えますが、結果的には無害です。 HTML5 では <code>innerHTML</code> で挿入された {{HTMLElement("script")}} タグは<a href="https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0">実行するべきではない</a>と定義しているからです。</p>

<p>しかし、次のように {{HTMLElement("script")}} を使わずに JavaScript を実行する方法もあるので、制御することができない文字列を設定するために <code>innerHTML</code> を使用するたびに、セキュリティリスクは残ります。</p>

<pre class="brush: js">const name = "&lt;img src='x' onerror='alert(1)'&gt;";
el.innerHTML = name; // アラートが表示される</pre>

<p>このため、プレーンテキストを挿入するときには <code>innerHTML</code> を使用せず、代わりに {{domxref("Node.textContent")}} を使用することをお勧めします。これは渡されたコンテンツを HTML として解釈するのではなく、生テキストとして挿入します。</p>

<div class="warning">
<p><strong>警告:</strong> プロジェクトに対して何らかの形のセキュリティレビューが行われる場合、 <code>innerHTML</code> は多くの場合、コードが拒絶される結果になります。例えば、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions">ブラウザー拡張機能</a>の中で <a href="https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation"><code>innerHTML</code> を使用した場合</a>、拡張機能を <a href="https://addons.mozilla.org/">addons.mozilla.org</a> に提出すると、自動レビュープロセスを通過できないでしょう。</p>
</div>

<h2 id="Example">例</h2>

<p>この例は <code>innerHTML</code> を使用して、ウェブページ上のボックス内にメッセージを記録するメカニズムを作成します。</p>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function log(msg) {
  var logElem = document.querySelector(".log");

  var time = new Date();
  var timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "&lt;br/&gt;";
}

log("Logging mouse events inside this container...");
</pre>

<p><code>log()</code> 関数は {{jsxref("Date")}} オブジェクトから {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} を使用して現在時刻を取得し、タイムスタンプとメッセージテキストから成る文字列を構築してログ出力を生成します。それから <code>"log"</code> クラスのボックスにメッセージを追加します。</p>

<p>{{domxref("MouseEvent")}} ベースのイベント ({{event("mousedown")}}, {{event("click")}}, {{event("mouseenter")}} など) についての情報を記録する第二のメソッドを追加します。</p>

<pre class="brush: js">function logEvent(event) {
  var msg = "Event &lt;strong&gt;" + event.type + "&lt;/strong&gt; at &lt;em&gt;" +
            event.clientX + ", " + event.clientY + "&lt;/em&gt;";
  log(msg);
}</pre>

<p>それから、これをログを収めるボックスの様々なマウスイベントのイベントハンドラーとして登録します。</p>

<pre class="brush: js">var boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);</pre>

<h3 id="HTML">HTML</h3>

<p>この例の HTML はとても単純です。</p>

<pre class="brush: html">&lt;div class="box"&gt;
  &lt;div&gt;&lt;strong&gt;Log:&lt;/strong&gt;&lt;/div&gt;
  &lt;div class="log"&gt;&lt;/div&gt;
&lt;/div&gt;</pre>

<p><code>"box"</code> クラスが付いた {{HTMLElement("div")}} は、単なるレイアウト用途のコンテナーであり、内容とその周りのボックスを表します。クラスが <code>"log"</code> である <code>&lt;div&gt;</code> は、ログテキスト自身のコンテナーです。</p>

<h3 id="CSS">CSS</h3>

<p>以下の CSS が例の内容をスタイル付けします。</p>

<pre class="brush: css">.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}</pre>

<h3 id="Result">結果</h3>

<p>結果の内容はこのように見えます。マウスが移動してボックスを出入りしたり、中でクリックしたりすると、ログが出力されるのを見ることができます。</p>

<p>{{EmbedLiveSample("Example", 640, 350)}}</p>

<h2 id="Specifications">仕様書</h2>

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
      <td>{{SpecName('DOM Parsing', '#dom-element-innerhtml', 'Element.innerHTML')}}</td>
      <td>{{Spec2('DOM Parsing')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("Node.textContent")}} および {{domxref("HTMLElement.innerText")}}</li>
  <li>{{domxref("Element.insertAdjacentHTML()")}}</li>
  <li>HTML を解析して DOM ツリーへ入れる: {{domxref("DOMParser")}}</li>
  <li>XML または HTML をシリアライズして DOM ツリーへ入れる: {{domxref("XMLSerializer")}}</li>
</ul>
