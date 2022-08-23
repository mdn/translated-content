---
title: Migrate apps from Internet Explorer to Mozilla
slug: orphaned/Migrate_apps_from_Internet_Explorer_to_Mozilla
tags:
  - 要更新
original_slug: Migrate_apps_from_Internet_Explorer_to_Mozilla
---
<h3 id="Introduction" name="Introduction">イントロダクション</h3>

<p>Netscape が Mozilla ブラウザを始めたときには、W3C 標準をサポートすると明確に決めていました。その結果、Mozilla は Netscape Navigator 4.x 系や Microsoft Internet Explorer のレガシコードと完全に後方互換ではなくなっています。たとえば、Mozilla は、後述する &lt;layer&gt; タグをサポートしません。W3C 標準というコンセプトがもたらされる前に開発された Internet Explorer 4 のようなブラウザは、さまざまな特異な仕様を引き継いでいます。この記事では、Internet Explorer やその他のレガシブラウザとの強力な HTML 後方互換を実現するための Mozilla の quirks モードについて解説します。<br>
 <br>
 さらに、ここでは、当時 W3C と同等のものがなかったために Mozilla がサポートしている XMLHttpRequest やリッチテキスト編集などのなどの非標準技術についても触れます。そこには次のものが含まれます:</p>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/html401/">HTML 4.01</a>, <a class="external" href="http://www.w3.org/TR/xhtml1/">XHTML 1.0</a> および <a class="external" href="http://www.w3.org/TR/xhtml11/">XHTML 1.1</a></li>
 <li>Cascade Style Sheets(CSS): <a class="external" href="http://www.w3.org/TR/REC-CSS1">CSS Level 1</a>, <a class="external" href="http://www.w3.org/TR/CSS21/">CSS Level 2.1</a> および <a class="external" href="http://www.w3.org/Style/CSS/current-work.html">CSS Level 3</a> の一部</li>
 <li>Document Object Model (DOM): <a class="external" href="http://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/">DOM Level 1</a>, <a class="external" href="http://www.w3.org/DOM/DOMTR#dom2">DOM Level 2</a> および <a class="external" href="http://www.w3.org/DOM/DOMTR#dom3">DOM Level 3</a>の一部</li>
 <li>Mathematical Markup Language: <a class="external" href="http://www.w3.org/Math/">MathML Version 2.0</a></li>
 <li>Extensible Markup Language (XML): <a class="external" href="http://www.w3.org/TR/REC-xml">XML 1.0</a>, <a class="external" href="http://www.w3.org/TR/REC-xml-names/">Namespaces in XML</a>, <a class="external" href="http://www.w3.org/TR/xml-stylesheet/">Associating Style Sheets with XML Documents 1.0</a>, <a class="external" href="http://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJ%20un/att-0074/01-NOTE-FIXptr-20010425.htm">Fragment Identifier for XML</a></li>
 <li>XSL Transformations: <a class="external" href="http://www.w3.org/TR/xslt">XSLT 1.0</a></li>
 <li>XML Path Language: <a class="external" href="http://www.w3.org/TR/xpath">XPath 1.0</a></li>
 <li>Resource Description Framework: <a class="external" href="http://www.w3.org/RDF/">RDF</a></li>
 <li>Simple Object Access Protocol: <a class="external" href="http://www.w3.org/TR/soap">SOAP 1.1</a></li>
 <li>ECMA-262, revision 3 (JavaScript 1.5): <a class="external" href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMA-262</a></li>
</ul>

<h3 id="General_cross-browser_coding_tips" name="General_cross-browser_coding_tips">一般的なクロスブラウザコーディングの tips</h3>

<p>Web 標準は存在しているものの、ブラウザごとに挙動は違いますす(実際には、同じブラウザもプラットフォームによって挙動が変わります)。Internet Explorer を含む多くのブラウザは、W3C 以前の API をサポートし、W3C を遵守した拡張を行わずにいます。</p>

<p>Mozilla と Internet Explorer の違いに触れる前に、新たなブラウザをサポートするために Web アプリを拡張しやすくする方法の基本を説明しましょう。</p>

<p>同じ機能でもブラウザごとに異なる API を使うことがあるので、ブラウザごとに処理を変えるために if() else() ブロックをあちこちに含んだコードをしばしば見かけます。次のコードは、Internet Explorer を指定したブロックを含んでいます:</p>

<pre>. . .

var elm;

if (ns4)
  elm = document.layers["myID"];
else if (ie4)
  elm = document.all["myID"]</pre>

<p>このコードは、拡張性に欠けています。新たなブラウザをサポートしたくなったときに、Web アプリケーション全体のこういったブロックを修正する必要が出てくるからです。</p>

<p>新たなブラウザをサポートするときの修正を不要にするための最も簡単な方法として、処理部分を関数として抽出するというのがあります。何箇所も if() else() ブロックを書くよりも、こういった共通の処理を探して独自の関数として抽出してしまうほうがずっと効率的です。これはコードの可読性を高めるだけでなく、新たなクライアントを簡単に追加できるようにします。</p>

<pre>var elm = getElmById("myID");

function getElmById(aID){
  var element = null;

  if (isMozilla || isIE5)
    element = document.getElementById(aID);
  else if (isNetscape4)
    element = document.layers[aID];
  else if (isIE4)
    element = document.all[aID];

  return element;
}
</pre>

<p>それでもまだ上記のコードは<em>ブラウザ判定</em>を行っています。ブラウザ判定はしばしば次のようにユーザエージェント情報を使って行われます:</p>

<pre>Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.5) Gecko/20031016
</pre>

<p>ブラウザ判定のためにユーザエージェント情報を使うと、使用中のブラウザについての詳細な情報を扱うことになり、ユーザエージェント情報を使ったコードは、新たなブラウザのバージョンが加わったときにミスが発生しやすくなり、コードの修正が必要になってきます。</p>

<p><strong style="font-weight: bold;">ブラウザの能力やオブジェクトの機能のサポート状況を使ってブラウザを判定した方がずっと良く、信頼性も上がります。</strong> これは、必要な機能が実装されているかどうかを JavaScript で確認すればできます。たとえば、こんな風に書くよりも</p>

<pre>if (isMozilla || isIE5)
</pre>

<p>こうした方がいいでしょう</p>

<pre>if (document.getElementById)
</pre>

<p>こうすることで、W3C 標準のメソッドをサポートした Opera や Safari でも、変更することなく動くようになります。</p>

<p>ユーザエージェント判定が有効なのは、たとえば特定のブラウザの特定のバージョンでのバグに対処する場合など、ごく限られたケースだけです。それ以外の目的ならば、想定しているブラウザがその機能をサポートするかどうかではなく、必要な機能が実際に使えるかをチェックすればよいのです。</p>

<p>JavaScript では、コードの可読性を良くする三項演算子が使えます:</p>

<pre class="eval">var foo = (condition) ? conditionIsTrue : conditionIsFalse;
</pre>

<p>例えば、要素を取得するのに、次のような書き方をします:</p>

<pre class="eval">function getElement(aID){
  return (document.getElementById) ? document.getElementById(aID)
                                   : document.all[aID]);
}
</pre>

<p> </p>

<h3 id="Differences_between_Mozilla_and_Internet_Explorer" name="Differences_between_Mozilla_and_Internet_Explorer">Mozilla と Internet Explorer の違い</h3>

<p>まず最初に、Mozilla と Internet Explorer の HTML のふるまいの違いを比較してみます。</p>

<h4 id="Tooltips" name="Tooltips">ツールチップ</h4>

<p>レガシブラウザは、リンクの上に alt 属性値を表示するツールチップを HTML に導入しました。最新の W3C HTML の仕様では、リンクの詳しい記述を含めることを目的とした title 属性が作られています。新しめのブラウザはツールチップの表示に title 属性値を使います。Mozilla も、alt ではなく、この title 属性を表示するようなツールチップのサポートをしています。</p>

<h4 id="Entities" name="Entities">エンティティ</h4>

<p>HTML マークアップには、<a class="external" href="http://www.w3.org/TR/REC-html40/sgml/entities.html">W3C web standards body</a> の定めているいくつかのエンティティを使うことができます。これらのエンティティは、数字または文字による参照によって利用することができます。たとえば、ノーブレークスペース文字は <code>&amp;#160;</code> もしくは同等の文字列参照 &amp;nbsp; で参照します。</p>

<p>Internet Explorer のような古いブラウザは、末尾の ; (セミコロン) のかわりに通常文字が来るような実体参照を許してしまうという特異な挙動をします:</p>

<pre>&amp;nbsp Foo
&amp;nbsp&amp;nbsp Foo
</pre>

<p>Internet Explorer は、W3C 仕様に反して、上のほうの &amp;nbsp をホワイトスペースとして表示します。ブラウザは、直後に通常文字が続くような &amp;nbsp という記述をパースしないはずです。たとえば次のような表記です:</p>

<pre>&amp;nbsp12345
</pre>

<p>このコードは Mozilla では動きません。これは W3C web 標準に反するからです。ブラウザ間の挙動が変わらないよう、常に正しい形式 (&amp;nbsp;) を使ってください。</p>

<h3 id="DOM_differences" name="DOM_differences">DOM の相違</h3>

<p>ドキュメントオブジェクトモデル (DOM) は、ドキュメントの要素を含んだ木構造です。W3C の標準化した JavaScript API を用いてこれを操作することができます。しかし、W3C による標準化よりも前に、Netscape 4 と Internet Explorer 1は同様に API 1を実装しました。Mozilla は、W3C ウェブスタンダードでは達成できない場合についてのみ、レガシ API を実装しています。</p>

<h4 id="Accessing_elements" name="Accessing_elements">要素へのアクセス</h4>

<p>クロスブラウザなアプローチによって要素にアクセスするには、Internet Explorer 5.0 以上、Mozilla ベースのブラウザ、およびその他 W3C 互換のブラウザで利用可能で、DOM Level 1 の機能に含まれる document.getElementById(aID)を使用します。<br>
 <br>
 Mozilla は、Internet Explorer で利用可能な document.elementName や要素の name による要素へのアクセス (グローバル名前空間の汚染ともいわれています) をサポートしていません。また、Mozilla は、Netscape 4 の document.layers メソッドや Internet Explorer の document.all をサポートしません。 Netscape 4 document.layers method and Internet Explorer's document.all. While document.getElementById lets you retrieve one element, you can also use document.layers and document.all to obtain a list of all document elements with a certain tag name, such as all &lt;div&gt; elements.<br>
 <br>
 W3C DOM Level 1 のメソッドは、getElementsByTagName() によって、同じ name の要素をすべて取得します。このメソッドは、JavaScript で配列を返し、document 要素やその他のノードに対して実行することで、その要素以下に連なる木構造のみに含まれる要素を検索することができます。DOM 木構造に含まれるすべての要素の配列を取得するには、getElementsByTagName("*") を使用します。</p>

<p>The DOM Level 1 methods, as shown in Table 1, are commonly used to move an element to a certain position and toggle its visibility (menus, animations). Netscape 4 used the <code>&lt;layer&gt;</code> tag, which Mozilla does not support, as an HTML element that can be positioned anywhere. In Mozilla, you can position any element using the <code>&lt;div&gt;</code> tag, which Internet Explorer uses as well and which you'll find in the HTML specification.</p>

<table class="standard-table">
 <caption>Table 1. Methods used to access elements</caption>
 <tbody>
  <tr>
   <th>Method</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>document.getElementById( aId )</td>
   <td>Returns a reference to the element with the specified ID.</td>
  </tr>
  <tr>
   <td>document.getElementsByTagName( aTagName )</td>
   <td>Returns an array of elements with the specified name in the document.</td>
  </tr>
 </tbody>
</table>

<h4 id="Traverse_the_DOM" name="Traverse_the_DOM">Traverse the DOM</h4>

<p>Mozilla supports the W3C DOM APIs for traversing the DOM tree through JavaScript (see Table 2). The APIs exist for each node in the document and allow walking the tree in any direction. Internet Explorer supports these APIs as well, but it also supports its legacy APIs for walking a DOM tree, such as the <code>children</code> property.</p>

<table class="standard-table">
 <caption>Table 2. Methods used to traverse the DOM</caption>
 <tbody>
  <tr>
   <th>Property/Method</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>childNodes</td>
   <td>Returns an array of all child nodes of the element.</td>
  </tr>
  <tr>
   <td>firstChild</td>
   <td>Returns the first child node of the element.</td>
  </tr>
  <tr>
   <td>getAttribute( aAttributeName )</td>
   <td>Returns the value for the specified attribute.</td>
  </tr>
  <tr>
   <td>hasAttribute( aAttributeName )</td>
   <td>Returns a boolean stating if the current node has an attribute defined with the specified name.</td>
  </tr>
  <tr>
   <td>hasChildNodes()</td>
   <td>Returns a boolean stating whether the current node has any child nodes.</td>
  </tr>
  <tr>
   <td>lastChild</td>
   <td>Returns the last child node of the element.</td>
  </tr>
  <tr>
   <td>nextSibling</td>
   <td>Returns the node immediately following the current one.</td>
  </tr>
  <tr>
   <td>nodeName</td>
   <td>Returns the name of the current node as a string.</td>
  </tr>
  <tr>
   <td>nodeType</td>
   <td>Returns the type of the current node.
    <table>
     <tbody>
      <tr>
       <th>Value</th>
       <th>Description</th>
      </tr>
      <tr>
       <td>1</td>
       <td>Element Node</td>
      </tr>
      <tr>
       <td>2</td>
       <td>Attribute Node</td>
      </tr>
      <tr>
       <td>3</td>
       <td>Text Node</td>
      </tr>
      <tr>
       <td>4</td>
       <td>CDATA Section Node</td>
      </tr>
      <tr>
       <td>5</td>
       <td>Entity Reference Node</td>
      </tr>
      <tr>
       <td>6</td>
       <td>Entity Node</td>
      </tr>
      <tr>
       <td>7</td>
       <td>Processing Instruction Node</td>
      </tr>
      <tr>
       <td>8</td>
       <td>Comment Node</td>
      </tr>
      <tr>
       <td>9</td>
       <td>Document Node</td>
      </tr>
      <tr>
       <td>10</td>
       <td>Document Type Node</td>
      </tr>
      <tr>
       <td>11</td>
       <td>Document Fragment Node</td>
      </tr>
      <tr>
       <td>12</td>
       <td>Notation Node</td>
      </tr>
     </tbody>
    </table>
   </td>
  </tr>
  <tr>
   <td>nodeValue</td>
   <td>Returns the value of the current node. For nodes that contain text, such as text and comment nodes, it will return their string value. For attribute nodes, the attribute value is returned. For all other nodes, <code>null</code> is returned.</td>
  </tr>
  <tr>
   <td>ownerDocument</td>
   <td>Returns the <code>document</code> object containing the current node.</td>
  </tr>
  <tr>
   <td>parentNode</td>
   <td>Returns the parent node of the current node.</td>
  </tr>
  <tr>
   <td>previousSibling</td>
   <td>Returns the node immediately preceding the current one.</td>
  </tr>
  <tr>
   <td>removeAttribute( aName )</td>
   <td>Removes the specified attribute from the current node.</td>
  </tr>
  <tr>
   <td>setAttribute( aName, aValue )</td>
   <td>Sets the value of the specified attribute with the specified value.</td>
  </tr>
 </tbody>
</table>

<p>Internet Explorer has a nonstandard quirk, where many of these APIs will skip white space text nodes that are generated, for example, by new line characters. Mozilla will not skip these, so sometimes you need to distinguish these nodes. Every node has a <code>nodeType</code> property specifying the node type. For example, an element node has type 1, while a text node has type 3 and a comment node is type 8. The best way to only process element nodes is to iterate over all child nodes and only process those with a nodeType of 1:</p>

<pre>HTML:
  &lt;div id="foo"&gt;
    &lt;span&gt;Test&lt;/span&gt;
  &lt;/div&gt;

JavaScript:
  var myDiv = document.getElementById("foo");
  var myChildren = myDiv.childNodes;
  for (var i = 0; i &lt; myChildren.length; i++) {
    if (myChildren[i].nodeType == 1){
      // element node
    };
  };
</pre>

<h4 id="Generate_and_manipulate_content" name="Generate_and_manipulate_content">Generate and manipulate content</h4>

<p>Mozilla supports the legacy methods for adding content into the DOM dynamically, such as <code>document.write</code>, <code>document.open</code> and <code>document.close</code>. Mozilla also supports Internet Explorer's <code>innerHTML</code> method, which it can call on almost any node. It does not, however, support <code>outerHTML</code> (which adds markup around an element, and has no standard equivalent) and <code>innerText</code> (which sets the text value of the node, and which you can achieve in Mozilla by using <code>textContent</code>).</p>

<p>Internet Explorer has several content manipulation methods that are nonstandard and unsupported in Mozilla, including retrieving the value, inserting text and inserting elements adjacent to a node, such as <code>getAdjacentElement</code> and <code>insertAdjacentHTML</code>. Table 3 shows how the W3C standard and Mozilla manipulate content, all of which are methods of any DOM node.</p>

<table class="standard-table">
 <caption>Table 3. Methods Mozilla uses to manipulate content</caption>
 <tbody>
  <tr>
   <th>Method</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>appendChild( aNode )</td>
   <td>Creates a new child node. Returns a reference to the new child node.</td>
  </tr>
  <tr>
   <td>cloneNode( aDeep )</td>
   <td>Makes a copy of the node it is called on and returns the copy. If aDeep is true, it copies over the node's entire subtree.</td>
  </tr>
  <tr>
   <td>createElement( aTagName )</td>
   <td>Creates and returns a new and parentless DOM node of the type specified by aTagName.</td>
  </tr>
  <tr>
   <td>createTextNode( aTextValue )</td>
   <td>Creates and returns a new and parentless DOM textnode with the data value specified by aTextValue.</td>
  </tr>
  <tr>
   <td>insertBefore( aNewNode, aChildNode )</td>
   <td>Inserts aNewNode before aChildNode, which must be a child of the current node.</td>
  </tr>
  <tr>
   <td>removeChild( aChildNode )</td>
   <td>Removes aChildNode and returns a reference to it.</td>
  </tr>
  <tr>
   <td>replaceChild( aNewNode, aChildNode )</td>
   <td>Replaces aChildNode with aNewNode and returns a reference to the removed node.</td>
  </tr>
 </tbody>
</table>

<h4 id="Document_fragments" name="Document_fragments">Document fragments</h4>

<p>For performance reasons, you can create documents in memory, rather than working on the existing document's DOM. DOM Level 1 Core introduced document fragments, which are lightweight documents that contain a subset of a normal document's interfaces. For example, <code>getElementById</code> does not exist, but <code>appendChild</code> does. You can also easily add document fragments to existing documents.</p>

<p>Mozilla creates document fragments through <code>document.createDocumentFragment()</code>, which returns an empty document fragment.</p>

<p>Internet Explorer's implementation of document fragments, however, does not comply with the W3C web standards and simply returns a regular document.</p>

<h3 id="JavaScript_differences" name="JavaScript_differences">JavaScript の相違</h3>

<p>Most differences between Mozilla and Internet Explorer are usually blamed on JavaScript. However, the issues usually lie in the APIs that a browser exposes to JavaScript, such as the DOM hooks. The two browsers possess few core JavaScript differences; issues encountered are often timing related.</p>

<h4 id="JavaScript_date_differences" name="JavaScript_date_differences">JavaScript の date の相違</h4>

<p>Date にかかわる唯一の相違点は、getYear メソッドです。As per the ECMAScript specification (which is the specification JavaScript follows), running <code>new Date().getYear()</code> in 2004 will return "104". Per the ECMAScript specification, <code>getYear</code> returns the year minus 1900, originally meant to return "98" for 1998. <code>getYear</code> was deprecated in ECMAScript Version 3 and replaced with <code>getFullYear()</code>. Internet Explorer uses an obsolete behavior for <code>getYear()</code>, similar to Netscape 4 and earlier, returning the year minus 1900 for years 1900-1999, and the full year for any other year. (i.e. for 1999, <code>getYear()</code> returns 99, for 2000, it returns 2000).</p>

<h4 id="JavaScript_execution_differences" name="JavaScript_execution_differences">JavaScript execution differences</h4>

<p>Different browsers execute JavaScript differently. For example, the following code assumes that the <code>div</code> node already exists in the DOM by the time the <code>script</code> block executes:</p>

<pre>...
&lt;div id="foo"&gt;Loading...&lt;/div&gt;

&lt;script&gt;
  document.getElementById("foo").innerHTML = "Done.";
&lt;/script&gt;
</pre>

<p>However, this is not guaranteed. To be sure that all elements exist, you should use the <code>onload</code> event handler on the <code>&lt;body&gt;</code> tag:</p>

<pre>&lt;body onload="doFinish();"&gt;

&lt;div id="foo"&gt;Loading...&lt;/div&gt;

&lt;script&gt;
  function doFinish() {
    var element = document.getElementById("foo");
    element.innerHTML = "Done.";
  }
&lt;/script&gt;
...
</pre>

<p>Such timing-related issues are also hardware-related -- slower systems can reveal bugs that faster systems hide. One concrete example is <code>window.open</code>, which opens a new window:</p>

<pre>&lt;script&gt;
  function doOpenWindow(){
    var myWindow = window.open("about:blank");
    myWindow.location.href = "http://www.ibm.com";
  }
&lt;/script&gt;
</pre>

<p>The problem with the code is that <code>window.open</code> is asynchronous -- it does not block the JavaScript execution until the window has finished loading. Therefore, you may execute the line after the <code>window.open</code> line before the new window has finished. You can deal with this by having an <code>onload</code> handler in the new window and then call back into the opener window (using <code>window.opener</code>).</p>

<h4 id="Differences_in_JavaScript-generating_HTML" name="Differences_in_JavaScript-generating_HTML">Differences in JavaScript-generating HTML</h4>

<p>JavaScript can, through <code>document.write</code>, generate HTML on the fly from a string. The main issue here is when JavaScript, embedded inside an HTML document (thus, inside an <code>&lt;script&gt;</code> tag), generates HTML that contains a <code>&lt;script&gt;</code> tag. If the document is in strict rendering mode, it will parse the <code>&lt;/script&gt;</code> inside the string as the closing tag for the enclosing <code>&lt;script&gt;</code>. The following code illustrates this best:</p>

<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
...
&lt;script&gt;
  document.write("&lt;script type='text/javascript'&gt;alert('Hello');&lt;/script&gt;")
&lt;/script&gt;
</pre>

<p>Since the page is in strict mode, Mozilla's parser will see the first <code>&lt;script&gt;</code> and parse until it finds a closing tag for it, which would be the first <code>&lt;/script&gt;</code>. This is because the parser has no knowledge about JavaScript (or any other language) when in strict mode. In quirks mode, the parser is aware of JavaScript when parsing (which slows it down). Internet Explorer is always in quirks mode, as it does not support true XHTML. To make this work in strict mode in Mozilla, separate the string into two parts:</p>

<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
...
&lt;script&gt;
  document.write("&lt;script type='text\/javascript'&gt;alert('Hello');&lt;/" + "script&gt;")
&lt;/script&gt;
</pre>

<h4 id="Debug_JavaScript" name="Debug_JavaScript">Debug JavaScript</h4>

<p>Mozilla provides several ways to debug JavaScript-related issues found in applications created for Internet Explorer. The first tool is the built-in JavaScript console, shown in Figure 1, where errors and warnings are logged. You can access it in Mozilla by going to <strong>Tools -&gt; Web Development -&gt; JavaScript Console</strong> or in Firefox (the standalone browser product from Mozilla) at <strong>Tools -&gt; JavaScript Console</strong>.</p>

<p>Figure 1. JavaScript console</p>

<p><img alt="Javascript Console" class="internal" src="/@api/deki/files/764/=Migrationguide-jsconsole.jpg"></p>

<p>The JavaScript console can show the full log list or just errors, warnings, and messages. The error message in Figure 1 says that at aol.com, line 95 tries to access an undefined variable called is_ns70. Clicking on the link will open Mozilla's internal view source window with the offending line highlighted.</p>

<p>The console also allows you to evaluate JavaScript. To evaluate the entered JavaScript syntax, type in <code>1+1</code> into the input field and press <strong>Evaluate</strong>, as Figure 2 shows.</p>

<p>Figure 2. JavaScript console evaluating</p>

<p><img alt="JavaScript Console evaluating" class="internal" src="/@api/deki/files/763/=Migrationguide-jsconsole-eval.jpg"></p>

<p>Mozilla's JavaScript engine has built-in support for debugging, and thus can provide powerful tools for JavaScript developers. Venkman, shown in Figure 3, is a powerful, cross-platform JavaScript debugger that integrates with Mozilla. It is usually bundled with Mozilla releases; you can find it at <strong>Tools -&gt; Web Development -&gt; JavaScript Debugger</strong>. For Firefox, the debugger isn't bundled; instead, you can download and install it from the <a class="external" href="http://www.mozilla.org/projects/venkman/">Venkman Project Page</a>. You can also find tutorials at the development page, located at the <a class="external" href="http://www.hacksrus.com/%7Eginda/venkman/">Venkman Development Page</a>.</p>

<p>Figure 3. Mozilla's JavaScript debugger</p>

<p><img alt="Mozilla's JavaScript debugger" class="internal" src="/@api/deki/files/766/=Migrationguide-venkman.jpg"></p>

<p>The JavaScript debugger can debug JavaScript running in the Mozilla browser window. It supports such standard debugging features as breakpoint management, call stack inspection, and variable/object inspection. All features are accessible through the user interface or through the debugger's interactive console. With the console, you can execute arbitrary JavaScript in the same scope as the JavaScript currently being debugged.</p>

<h3 id="CSS_differences" name="CSS_differences">CSS の相違</h3>

<p>Internet Explorer やその他のブラウザと比べ、Mozilla ベースの製品は、CSS1 のほとんど、CSS2.1、および CSS3 の一部を含んだカスケーディングスタイルシート (CSS)  のサポートでは最も強力です。</p>

<p>下記で言及するような問題が発生した場合、Mozilla  は JavaScript コンソールにエラーまたは警告を表示します。CSS 関連の問題に遭遇したとは、JavaScript コンソールを開いて確認するとよいでしょう。</p>

<h4 id="Mimetypes_.28when_CSS_files_are_not_applied.29" name="Mimetypes_.28when_CSS_files_are_not_applied.29">Mimetypes (when CSS files are not applied)</h4>

<p>The most common CSS-related issue is that CSS definitions inside referenced CSS files are not applied. This is usually due to the server sending the wrong mimetype for the CSS file. The CSS specification states that CSS files should be served with the <code>text/css</code> mimetype. Mozilla will respect this and only load CSS files with that mimetype if the Web page is in strict standards mode. Internet Explorer will always load the CSS file, no matter with which mimetype it is served. Web pages are considered in strict standards mode when they start with a strict doctype. To solve this problem, you can make the server send the right mimetype or remove the doctype. I'll discuss more about doctypes in the next section.</p>

<h4 id="CSS_and_units" name="CSS_and_units">CSS and units</h4>

<p>Many Web applications do not use units with their CSS, especially when you use JavaScript to set the CSS. Mozilla tolerates this, as long as the page is not rendered in strict mode. Since Internet Explorer does not support true XHTML, it does not care if no units are specified. If the page is in strict standards mode, and no units are used, then Mozilla ignores the style:</p>

<pre class="eval">&lt;DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "<span class="nowiki">http://www.w3.org/TR/html4/strict.dtd</span>"&gt;
&lt;html&gt;
  &lt;head&gt;
   &lt;meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"&gt;
   &lt;title&gt;CSS and units example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    // works in strict mode
    &lt;div style="width: 40<span class="boldcode">px</span>; border: 1px solid black;"&gt;
      Text
    &lt;/div&gt;

    // will fail in strict mode
    &lt;div style="width: 40; border: 1px solid black;"&gt;
      Text
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Since the above example has a strict doctype, the page is rendered in strict standards mode. The first div will have a width of 40px, since it uses units, but the second div won't get a width, and thus will default to 100% width. The same would apply if the width were set through JavaScript.</p>

<h4 id="JavaScript_and_CSS" name="JavaScript_and_CSS">JavaScript and CSS</h4>

<p>Since Mozilla supports the CSS standards, it also supports the CSS DOM standard for setting CSS through JavaScript. You can access, remove, and change an element's CSS rules through the element's <code>style</code> member:</p>

<pre>&lt;div id="myDiv" style="border: _fckstyle="border: 1px solid black;"&gt;
  Text
&lt;/div&gt;

&lt;script&gt;
  var myElm = document.getElementById("myDiv");
  myElm.style.width = "40px";
&lt;/script&gt;
</pre>

<p>You can reach every CSS attribute that way. Again, if the Web page is in strict mode, you must set a unit or else Mozilla will ignore the command. When you query a value, say through <code>.style.width</code>, in Mozilla and Internet Explorer, the returned value will contain the unit, meaning a string is returned. You can convert the string into a number through <code>parseFloat("40px")</code>.</p>

<h4 id="CSS_overflow_differences" name="CSS_overflow_differences">CSS overflow differences</h4>

<p>CSS added the notion of overflow, which allows you to define how to handle overflow; for example, when the contents of a <code>div</code> with a specified height are taller than that height. The CSS standard defines that if no overflow behavior is set in this case, the <code>div</code> contents will overflow. However, Internet Explorer does not comply with this and will expand the <code>div</code> beyond its set height in order to hold the contents. Below is an example that shows this difference:</p>

<pre>&lt;div style="height: _fckstyle="height: 100px; border: 1px solid black;"&gt;
  &lt;div style="height: 150px; border: 1px solid red; margin: 10px;"&gt;
    a
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<p>As you can see in Figure 4, Mozilla acts like the W3C standard specifies. The W3C standard says that, in this case, the inner <code>div</code> overflows to the bottom since the inner content is taller than its parent. If you prefer the Internet Explorer behavior, simply do not specify a height on the outer element.</p>

<p>Figure 4. DIV overflow</p>

<p><img alt="DIV Overflow" class="internal" src="/@api/deki/files/765/=Migrationguide-overflow.jpg"></p>

<h4 id="hover_differences" name="hover_differences">hover differences</h4>

<p>The nonstandard CSS hover behavior in Internet Explorer occurs on quite a few web sites. It usually manifests itself by changing text style when hovered over in Mozilla, but not in Internet Explorer. This is because the <code>a:hover</code> CSS selector in Internet Explorer matches <code>&lt;a href=""&gt;...&lt;/a&gt;</code> but not <code>&lt;a name=""&gt;...&lt;/a&gt;</code>, which sets anchors in HTML. The text changes occur because authors encapsulate the areas with the anchor-setting markup:</p>

<pre>CSS:
  a:hover {color: green;}

HTML:
  &lt;a href="foo.com"&gt;This text should turn green when you hover over it.&lt;/a&gt;

  &lt;a name="anchor-name"&gt;
    This text should change color when hovered over, but doesn't
    in Internet Explorer.
  &lt;/a&gt;
</pre>

<p>Mozilla follows the CSS specification correctly and will change the color to green in this example. You can use two ways to make Mozilla behave like Internet Explorer and not change the color of the text when hovered over:</p>

<ul>
 <li>First, you can change the CSS rule to be <code>a:link:hover {color: green;}</code>, which will only change the color if the element is a link (has an <code>href</code> attribute).</li>
 <li>Alternatively, you can change the markup and close the opened <code>&lt;a /&gt;</code> before the start of the text -- the anchor will continue to work this way.</li>
</ul>

<h3 id="Quirks_versus_standards_mode" name="Quirks_versus_standards_mode">Quirks versus standards mode</h3>

<p>Older legacy browsers, such as Internet Explorer 4, rendered with so-called quirks under certain conditions. While Mozilla aims to be a standards-compliant browser, it has three modes that support older Web pages created with these quirky behaviors. The page's content and delivery determine which mode Mozilla will use. Mozilla will indicate the rendering mode in <strong>View -&gt; Page Info</strong> (or <code>Ctrl+I</code>) ; Firefox will list the rendering mode in <strong>Tools -&gt; Page Info</strong>. The mode in which a page is located depends on its doctype.</p>

<p>Doctypes (short for document type declarations) look like this:</p>

<p><code>&lt;!DOCTYPE HTML PUBLIC <span style="color: blue;">"-//W3C//DTD HTML 4.01 Transitional//EN"</span> <span style="color: green;">"<span class="nowiki">http://www.w3.org/TR/html4/loose.dtd</span>"</span>&gt;</code></p>

<p>The section in blue is called the public identifier, the green part is the system identifier, which is a URI.</p>

<h4 id="Standards_mode" name="Standards_mode">Standards mode</h4>

<p>Standards mode is the strictest rendering mode -- it will render pages per the W3C HTML and CSS specifications and will not support any quirks. Mozilla uses it for the following conditions:</p>

<ul>
 <li>If a page is sent with a <code>text/xml</code> mimetype or any other XML or XHTML mimetype</li>
 <li>For any "DOCTYPE HTML SYSTEM" doctype (for example, <code>&lt;!DOCTYPE HTML SYSTEM "<span class="nowiki">http://www.w3.org/TR/REC-html40/strict.dtd</span>"&gt;</code>), except for the IBM doctype</li>
 <li>For unknown doctypes or doctypes without DTDs</li>
</ul>

<h4 id="Almost_standards_mode" name="Almost_standards_mode">Almost standards mode</h4>

<p>Mozilla introduced almost standards mode for one reason: a section in the CSS 2 specification breaks designs based on a precise layout of small images in table cells. Instead of forming one image to the user, each small image ends up with a gap next to it. The old IBM homepage shown in Figure 5 offers an example.</p>

<p>Figure 5. Image gap</p>

<p><img alt="Image Gap" class="internal" src="/@api/deki/files/762/=Migrationguide-imagegap.jpg"></p>

<p>Almost standards mode behaves almost exactly as standards mode, except when it comes to an image gap issue. The issue occurs often on standards-compliant pages and causes them to display incorrectly.</p>

<p>Mozilla uses almost standards mode for the following conditions:</p>

<ul>
 <li>For any "loose" doctype (for example, <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"&gt;</code>, <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "<span class="nowiki">http://www.w3.org/TR/html4/loose.dtd</span>"&gt;</code>)</li>
 <li>For the IBM doctype (<code>&lt;!DOCTYPE html SYSTEM "<span class="nowiki">http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd</span>"&gt;</code>)</li>
</ul>

<p>You can read more about the <a href="/en/Images,_Tables,_and_Mysterious_Gaps" title="en/Images,_Tables,_and_Mysterious_Gaps">image gap issue</a>.</p>

<h4 id="Quirks_mode" name="Quirks_mode">Quirks mode</h4>

<p>Currently, the Web is full of invalid HTML markup, as well as markup that only functions due to bugs in browsers. The old Netscape browsers, when they were the market leaders, had bugs. When Internet Explorer arrived, it mimicked those bugs in order to work with the content at that time. As newer browsers came to market, most of these original bugs, usually called <strong>quirks</strong>, were kept for backwards compatibility. Mozilla supports many of these in its quirks rendering mode. Note that due to these quirks, pages will render slower than if they were fully standards-compliant. Most Web pages are rendered under this mode.</p>

<p>Mozilla uses quirks mode for the following conditions:</p>

<ul>
 <li>When no doctype is specified</li>
 <li>For doctypes without a system identifier (for example, <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"&gt;</code>)</li>
</ul>

<p>For further reading, check out: <a href="/en/Mozilla_Quirks_Mode_Behavior" title="en/Mozilla_Quirks_Mode_Behavior">Mozilla Quirks Mode Behavior</a> and <a href="/en/Mozilla's_DOCTYPE_sniffing" title="en/Mozilla's_DOCTYPE_sniffing">Mozilla's DOCTYPE sniffing</a>.</p>

<h3 id="Event_differences" name="Event_differences">Event differences</h3>

<p>Mozilla and Internet Explorer are almost completely different in the area of events. The Mozilla event model follows the W3C and Netscape model. In Internet Explorer, if a function is called from an event, it can access the <code>event</code> object through <code>window.event</code>. Mozilla passes an <code>event</code> object to event handlers. They must specifically pass the object on to the function called through an argument.</p>

<p>A cross-browser event handling example follows (note that it means you can't define a global variable named <code>event</code> in your code):</p>

<pre>&lt;div onclick="handleEvent(event);"&gt;Click me!&lt;/div&gt;

&lt;script&gt;
  function handleEvent(aEvent) {
    var myEvent = window.event ? window.event : aEvent;
  }
&lt;/script&gt;
</pre>

<p>The properties and functions that the event object exposes are also often named differently in Mozilla and Internet Explorer, as Table 4 shows.</p>

<table class="standard-table">
 <caption>Table 4. Event properties differences between Mozilla and Internet Explorer</caption>
 <tbody>
  <tr>
   <th>Internet Explorer Name</th>
   <th>Mozilla Name</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>altKey</td>
   <td>altKey</td>
   <td>Boolean property that returns whether the alt key was pressed during the event.</td>
  </tr>
  <tr>
   <td>cancelBubble</td>
   <td>stopPropagation()</td>
   <td>Used to stop the event from bubbling farther up the tree.</td>
  </tr>
  <tr>
   <td>clientX</td>
   <td>clientX</td>
   <td>The X coordinate of the event, in relation to the element viewport.</td>
  </tr>
  <tr>
   <td>clientY</td>
   <td>clientY</td>
   <td>The Y coordinate of the event, in relation to the element viewport.</td>
  </tr>
  <tr>
   <td>ctrlKey</td>
   <td>ctrlKey</td>
   <td>Boolean property that returns whether the Ctrl key was pressed during the event.</td>
  </tr>
  <tr>
   <td>fromElement</td>
   <td>relatedTarget</td>
   <td>For mouse events, this is the element from which the mouse moved away.</td>
  </tr>
  <tr>
   <td>keyCode</td>
   <td>keyCode</td>
   <td>For keyboard events, this is a number representing the key that was pressed. It is 0 for mouse events. For keypress events (not keydown/keyup) of keys that produce output, the Mozilla equivalent is charCode, not keyCode.</td>
  </tr>
  <tr>
   <td>returnValue</td>
   <td>preventDefault()</td>
   <td>Used to prevent the event's default action from occurring.</td>
  </tr>
  <tr>
   <td>screenX</td>
   <td>screenX</td>
   <td>The X coordinate of the event, in relation to the screen.</td>
  </tr>
  <tr>
   <td>screenY</td>
   <td>screenY</td>
   <td>The Y coordinate of the event, in relation to the screen.</td>
  </tr>
  <tr>
   <td>shiftKey</td>
   <td>shiftKey</td>
   <td>Boolean property that returns whether the Shift key was pressed during the event.</td>
  </tr>
  <tr>
   <td>srcElement</td>
   <td>target</td>
   <td>The element to which the event was originally dispatched.</td>
  </tr>
  <tr>
   <td>toElement</td>
   <td>currentTarget</td>
   <td>For mouse events, this is the element to which the mouse moved.</td>
  </tr>
  <tr>
   <td>type</td>
   <td>type</td>
   <td>Returns the name of the event.</td>
  </tr>
 </tbody>
</table>

<h4 id="Attach_event_handlers" name="Attach_event_handlers">Attach event handlers</h4>

<p>Mozilla supports two ways to attach events through JavaScript. The first, supported by all browsers, sets event properties directly on objects. To set a <code>click</code> event handler, a function reference is passed to the object's <code>onclick</code> property:</p>

<pre>&lt;div id="myDiv"&gt;Click me!&lt;/div&gt;

&lt;script&gt;
  function handleEvent(aEvent) {
    // if aEvent is null, means the Internet Explorer event model,
    // so get window.event.
    var myEvent = aEvent ? aEvent : window.event;
  }

  function onPageLoad(){
    document.getElementById("myDiv").onclick = handleEvent;
  }
&lt;/script&gt;
</pre>

<p>Mozilla fully supports the W3C standard way of attaching listeners to DOM nodes. You use the <code>addEventListener()</code> and <code>removeEventListener()</code> methods, and have the benefit of being able to set multiple listeners for the same event type. Both methods require three parameters: the event type, a function reference, and a boolean denoting whether the listener should catch events in their capture phase. If the boolean is set to false, it will only catch bubbling events. W3C events have three phases: capturing, at target, and bubbling. Every event object has an <code>eventPhase</code> attribute indicating the phase numerically (0 indexed). Every time you trigger an event, the event starts at the DOM's outermost element, the element at the top of the DOM tree. It then walks the DOM using the most direct route toward the target, which is the capturing phase. When the event reaches the target, the event is in the target phase. After arriving at the target, it walks up the DOM tree back to the outermost node; this is <strong>bubbling</strong>. Internet Explorer's event model only has the bubbling phase; therefore, setting the third parameter to false results in Internet Explorer-like behavior:</p>

<pre>&lt;div id="myDiv"&gt;Click me!&lt;/div&gt;

&lt;script&gt;

  function handleEvent(aEvent) {
    // if aEvent is null, it is the Internet Explorer event model,
    // so get window.event.
    var myEvent = aEvent ? aEvent : window.event;
  }

  function onPageLoad() {
    var element = document.getElementById("myDiv");
    element.addEventListener("click", handleEvent, false);
  }
&lt;/script&gt;
</pre>

<p>One advantage of <code>addEventListener()</code> and <code>removeEventListener()</code> over setting properties is that you can have multiple event listeners for the same event, each calling another function. Thus, to remove an event listener requires all three parameters be the same as the ones you use when adding the listener.</p>

<p>Mozilla does not support Internet Explorer's method of converting &lt;script&gt; tags into event handlers, which extends &lt;script&gt; with <code>for</code> and <code>event</code> attributes (see Table 5). It also does not support the <code>attachEvent</code> and <code>detachEvent</code> methods. Instead, you should use the <code>addEventListener</code> and <code>removeEventListener</code> methods. Internet Explorer does not support the W3C events specification. However, IE can be <a href="/en/RemediateIE" title="en/RemediateIE">remediated to support addEventListener and removeEventListener.</a></p>

<table class="standard-table">
 <caption>Table 5. Event method differences between Mozilla and Internet Explorer</caption>
 <tbody>
  <tr>
   <th>Internet Explorer Method</th>
   <th>Mozilla Method</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>attachEvent(aEventType, aFunctionReference)</td>
   <td>addEventListener(aEventType, aFunctionReference, aUseCapture)</td>
   <td>Adds an event listener to a DOM element.</td>
  </tr>
  <tr>
   <td>detachEvent(aEventType, aFunctionReference)</td>
   <td>removeEventListener(aEventType, aFunctionReference, aUseCapture)</td>
   <td>Removes an event listener to a DOM element.</td>
  </tr>
 </tbody>
</table>

<h3 id="Rich_text_editing" name="Rich_text_editing">Rich text editing</h3>

<p>While Mozilla prides itself with being the most W3C web standards compliant browser, it does support nonstandard functionality, such as <code>innerHTML</code> and <a href="/en/Midas" title="en/Midas">rich text editing</a>, if no W3C equivalent exists.</p>

<p>Mozilla 1.3 introduced an implementation of Internet Explorer's <a href="/en/Rich-Text_Editing_in_Mozilla/Class_xbDesignMode" title="en/Rich-Text_Editing_in_Mozilla/Class_xbDesignMode">designMode</a> feature, which turns an HTML document into a rich text editor field. Once turned into the editor, commands can run on the document through the <code>execCommand</code> command. Mozilla also supports Internet Explorer's <code>contentEditable</code> attribute for making any widget editable. Alternatively, you could use an iframe to add a rich text editor.</p>

<h4 id="Rich_text_differences" name="Rich_text_differences">Rich text differences</h4>

<p>Mozilla supports the W3C standard of accessing iframe's document object through <code>IFrameElmRef.contentDocument</code>, while Internet Explorer requires you to access it through <code>document.frames{{ mediawiki.external('\"IframeName\"') }}</code> and then access the resulting <code>document</code>:</p>

<pre>&lt;script&gt;
function getIFrameDocument(aID) {
  var rv = null;

  // if contentDocument exists, W3C compliant (Mozilla)
  if (document.getElementById(aID).contentDocument){
    rv = document.getElementById(aID).contentDocument;
  } else {
    // IE
    rv = document.frames[aID].document;
  }
  return rv;
}
&lt;/script&gt;
</pre>

<p>Another difference between Mozilla and Internet Explorer is the HTML that the rich text editor creates. Mozilla defaults to using CSS for the generated markup. However, Mozilla allows you to toggle between HTML and CSS mode using the <code>useCSS</code> execCommand and toggling it between true and false. Internet Explorer always uses HTML markup.</p>

<pre>Mozilla (CSS):
  &lt;span style="color: blue;"&gt;Big Blue&lt;/span&gt;

Mozilla (HTML):
  &lt;font color="blue"&gt;Big Blue&lt;/font&gt;

Internet Explorer:
  &lt;FONT color="blue"&gt;Big Blue&lt;/FONT&gt;
</pre>

<p>Below is a list of commands that execCommand in Mozilla supports:</p>

<table class="standard-table">
 <caption>Table 6. Rich text editing commands</caption>
 <tbody>
  <tr>
   <th>Command Name</th>
   <th>Description</th>
   <th>Argument</th>
  </tr>
  <tr>
   <td>bold</td>
   <td>Toggles the selection's bold attribute.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>createlink</td>
   <td>Generates an HTML link from the selected text.</td>
   <td>The URL to use for the link</td>
  </tr>
  <tr>
   <td>delete</td>
   <td>Deletes the selection.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>fontname</td>
   <td>Changes the font used in the selected text.</td>
   <td>The font name to use (Arial, for example)</td>
  </tr>
  <tr>
   <td>fontsize</td>
   <td>Changes the font size used in the selected text.</td>
   <td>The font size to use</td>
  </tr>
  <tr>
   <td>fontcolor</td>
   <td>Changes the font color used in the selected text.</td>
   <td>The color to use</td>
  </tr>
  <tr>
   <td>indent</td>
   <td>Indents the block where the caret is.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>inserthorizontalrule</td>
   <td>Inserts an &lt;hr&gt; element at the cursor's position.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>insertimage</td>
   <td>Inserts an image at the cursor's position.</td>
   <td>URL of the image to use</td>
  </tr>
  <tr>
   <td>insertorderedlist</td>
   <td>Inserts an ordered list (&lt;ol&gt;) element at the cursor's position.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>insertunorderedlist</td>
   <td>Inserts an unordered list (&lt;ul&gt;) element at the cursor's position.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>italic</td>
   <td>Toggles the selection's italicize attribute.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>justifycenter</td>
   <td>Centers the content at the current line.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>justifyleft</td>
   <td>Justifies the content at the current line to the left.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>justifyright</td>
   <td>Justifies the content at the current line to the right.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>outdent</td>
   <td>Outdents the block where the caret is.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>redo</td>
   <td>Redoes the previous undo command.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>removeformat</td>
   <td>Removes all formatting from the selection.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>selectall</td>
   <td>Selects everything in the rich text editor.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>strikethrough</td>
   <td>Toggles the strikethrough of the selected text.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>subscript</td>
   <td>Converts the current selection into subscript.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>superscript</td>
   <td>Converts the current selection into superscript.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>underline</td>
   <td>Toggles the underline of the selected text.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>undo</td>
   <td>Undoes the last executed command.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>unlink</td>
   <td>Removes all link information from the selection.</td>
   <td>---</td>
  </tr>
  <tr>
   <td>useCSS</td>
   <td>Toggles the usage of CSS in the generated markup.</td>
   <td>Boolean value</td>
  </tr>
 </tbody>
</table>

<p>For more information, visit <a href="/en/Rich-Text_Editing_in_Mozilla" title="en/Rich-Text_Editing_in_Mozilla">Rich-Text Editing in Mozilla</a>.</p>

<h3 id="XML_differences" name="XML_differences">XML differences</h3>

<p>Mozilla has strong support for XML and XML-related technologies, such as <a href="/en/XSLT" title="en/XSLT">XSLT</a> and Web services. It also supports some non-standard Internet Explorer extensions, such as <code><a href="/en/XMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a></code>.</p>

<h4 id="How_to_handle_XML" name="How_to_handle_XML">How to handle XML</h4>

<p>As with standard HTML, Mozilla supports the W3C XML DOM specification, which allows you to manipulate almost any aspect of an XML document. Differences between Internet Explorer's XML DOM and Mozilla are usually caused by Internet Explorer's nonstandard behaviors. Probably the most common difference is how they handle white space text nodes. Often when XML generates, it contains white spaces between XML nodes. Internet Explorer, when using <code><a href="/En/DOM/Node.childNodes" title="en/DOM/element.childNodes">Node.childNodes</a></code>, will not contain these white space nodes. In Mozilla, those nodes will be in the array.</p>

<pre>XML:
  &lt;?xml version="1.0"?&gt;
  &lt;myXMLdoc xmlns:myns="http://myfoo.com"&gt;
    &lt;myns:foo&gt;bar&lt;/myns:foo&gt;
  &lt;/myXMLdoc&gt;

JavaScript:
  var myXMLDoc = getXMLDocument().documentElement;
  alert(myXMLDoc.childNodes.length);
</pre>

<p>The first line of JavaScript loads the XML document and accesses the root element (<code>myXMLDoc</code>) by retrieving the <code><a href="/en/DOM/document.documentElement" title="en/DOM/document.documentElement">documentElement</a></code>. The second line simply alerts the number of child nodes. Per the W3C specification, the white spaces and new lines merge into one text node if they follow each other. For Mozilla, the <code>myXMLdoc</code> node has three children: a text node containing a new line and two spaces; the <code>myns:foo</code> node; and another text node with a new line. Internet Explorer, however, does not abide by this and will return "1" for the above code, namely only the <code>myns:foo</code> node. Therefore, to walk the child nodes and disregard text nodes, you must distinguish such nodes.</p>

<p>As mentioned earlier, every node has a <code><a href="/En/DOM/Node.nodeType" title="en/DOM/element.nodeType">nodeType</a></code> property representing the node type. For example, an element node has type 1, while a document node has type 9. To disregard text nodes, you must check for types 3 (text node) and 8 (comment node).</p>

<pre>XML:
  &lt;?xml version="1.0"?&gt;
  &lt;myXMLdoc xmlns:myns="http://myfoo.com"&gt;
    &lt;myns:foo&gt;bar&lt;/myns:foo&gt;
  &lt;/myXMLdoc&gt;

JavaScript:
  var myXMLDoc = getXMLDocument().documentElement;
  var myChildren = myXMLDoc.childNodes;

  for (var run = 0; run &lt; myChildren.length; run++){
    if ( (myChildren[run].nodeType != 3) &amp;&amp;
          myChildren[run].nodeType != 8) ){
      // not a text or comment node
    };
  };
</pre>

<p>See <a href="/en/Whitespace_in_the_DOM" title="en/Whitespace_in_the_DOM">Whitespace in the DOM</a> for more detailed discussion and a possible solution.</p>

<h4 id="XML_data_islands" name="XML_data_islands">XML data islands</h4>

<p>Internet Explorer has a nonstandard feature called <a class="external" href="http://msdn.microsoft.com/workshop/author/dhtml/reference/objects/xml.asp">XML data islands</a>, which allow you to embed XML inside an HTML document using the nonstandard HTML tag <code>&lt;xml&gt;</code>. Mozilla does not support XML data islands and handles them as unknown HTML tags. You can achieve the same functionality using XHTML; however, because Internet Explorer's support for XHTML is weak, this is usually not an option.</p>

<p>IE XML data island:</p>

<pre class="eval">&lt;xml id="xmldataisland"&gt;
  &lt;foo&gt;bar&lt;/foo&gt;
&lt;/xml&gt;
</pre>

<p>One cross-browser solution is to use DOM parsers, which parse a string that contains a serialized XML document and generates the document for the parsed XML. Mozilla uses the <code><a href="/en/DOMParser" title="en/DOMParser">DOMParser</a></code> object, which takes the serialized string and creates an XML document out of it. In Internet Explorer, you can achieve the same functionality using ActiveX. The object created using <code>new ActiveXObject("Microsoft.XMLDOM")</code> has a <code>loadXML</code> method that can take in a string and generate a document from it. The following code shows you how:</p>

<pre class="eval">var xmlString = "&lt;xml id=\"xmldataisland\"&gt;&lt;foo&gt;bar&lt;/foo&gt;&lt;/xml&gt;";
var myDocument;

if (window.DOMParser) {
  // This browser appears to support DOMParser
  var parser = new DOMParser();
  myDocument = parser.parseFromString(xmlString, "text/xml");
} else if (window.ActiveXObject){
  // Internet Explorer, create a new XML document using ActiveX
  // and use loadXML as a DOM parser.
  myDocument = new ActiveXObject("Microsoft.XMLDOM");
  myDocument.async = false;

  myDocument.loadXML(xmlString);
} else {
  // Not supported.
}
</pre>

<p>See <a href="/en/Using_XML_Data_Islands_in_Mozilla" title="en/Using_XML_Data_Islands_in_Mozilla">Using XML Data Islands in Mozilla</a> for an alternative approach.</p>

<h4 id="XMLHttpRequest" name="XMLHttpRequest">XMLHttpRequest</h4>

<p>Internet Explorer allows you to send and retrieve XML files using MSXML's <code>XMLHTTP</code> class, which is instantiated through ActiveX using <code>new ActiveXObject("Msxml2.XMLHTTP")</code> or <code>new ActiveXObject("Microsoft.XMLHTTP")</code>. Since there is no standard method of doing this, Mozilla provides the same functionality in the global JavaScript <code><a href="/en/XMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a></code> object. Since version 7 IE also supports the "native" <code>XMLHttpRequest</code> object.</p>

<p>After instantiating the object using <code>new XMLHttpRequest()</code>, you can use the <code>open</code> method to specify what type of request (GET or POST) you use, which file you load, and if it is asynchronous or not. If the call is asynchronous, then give the <code>onload</code> member a function reference, which is called once the request has completed.</p>

<p>Synchronous request:</p>

<pre class="eval">var myXMLHTTPRequest = new XMLHttpRequest();
myXMLHTTPRequest.open("GET", "data.xml", false);

myXMLHTTPRequest.send(null);

var myXMLDocument = myXMLHTTPRequest.responseXML;
</pre>

<p>Asynchronous request:</p>

<pre class="eval">var myXMLHTTPRequest;

function <span class="boldcode">xmlLoaded</span>() {
  var myXMLDocument = myXMLHTTPRequest.responseXML;
}

function loadXML(){
  myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "data.xml", true);
  myXMLHTTPRequest.onload = <span class="boldcode">xmlLoaded</span>;
  myXMLHTTPRequest.send(null);
}
</pre>

<p>Table 7 features a list of available methods and properties for Mozilla's <code><a href="/en/XMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a></code>.</p>

<table class="standard-table">
 <caption>Table 7. XMLHttpRequest methods and properties</caption>
 <tbody>
  <tr>
   <th>Name</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>void abort()</td>
   <td>Stops the request if it is still running.</td>
  </tr>
  <tr>
   <td>string getAllResponseHeaders()</td>
   <td>Returns all response headers as one string.</td>
  </tr>
  <tr>
   <td>string getResponseHeader(string headerName)</td>
   <td>Returns the value of the specified header.</td>
  </tr>
  <tr>
   <td>functionRef onerror</td>
   <td>If set, the references function will be called whenever an error occurs during the request.</td>
  </tr>
  <tr>
   <td>functionRef onload</td>
   <td>If set, the references function will be called when the request completes successfully and the response has been received. Use when an asynchronous request is used.</td>
  </tr>
  <tr>
   <td>void open (string HTTP_Method, string URL)<br>
    <br>
    void open (string HTTP_Method, string URL, boolean async, string userName, string password)</td>
   <td>Initializes the request for the specified URL, using either GET or POST as the HTTP method. To send the request, call the <code>send()</code> method after initialization. If <code>async</code> is false, the request is synchronous, else it defaults to asynchronous. Optionally, you can specify a username and password for the given URL needed.</td>
  </tr>
  <tr>
   <td>int readyState</td>
   <td>State of the request. Possible values:
    <table>
     <tbody>
      <tr>
       <th>Value</th>
       <th>Description</th>
      </tr>
      <tr>
       <td>0</td>
       <td>UNINITIALIZED - open() has not been called yet.</td>
      </tr>
      <tr>
       <td>1</td>
       <td>LOADING - send() has not been called yet.</td>
      </tr>
      <tr>
       <td>2</td>
       <td>LOADED - send() has been called, headers and status are available.</td>
      </tr>
      <tr>
       <td>3</td>
       <td>INTERACTIVE - Downloading, responseText holds the partial data.</td>
      </tr>
      <tr>
       <td>4</td>
       <td>COMPLETED - Finished with all operations.</td>
      </tr>
     </tbody>
    </table>
   </td>
  </tr>
  <tr>
   <td>string responseText</td>
   <td>String containing the response.</td>
  </tr>
  <tr>
   <td>DOMDocument responseXML</td>
   <td>DOM Document containing the response.</td>
  </tr>
  <tr>
   <td>void send(variant body)</td>
   <td>Initiates the request. If <code>body</code> is defined, it is sent as the body of the POST request. <code>body</code> can be an XML document or a string serialized XML document.</td>
  </tr>
  <tr>
   <td>void setRequestHeader (string headerName, string headerValue)</td>
   <td>Sets an HTTP request header for use in the HTTP request. Has to be called after <code>open()</code> is called.</td>
  </tr>
  <tr>
   <td>string status</td>
   <td>The status code of the HTTP response.</td>
  </tr>
 </tbody>
</table>

<h4 id="XSLT_differences" name="XSLT_differences">XSLT differences</h4>

<p>Mozilla supports XSL Transformations (<a href="/en/XSLT" title="en/XSLT">XSLT</a>) 1.0. It also allows JavaScript to perform XSLT transformations and allows running <a href="/en/XPath" title="en/XPath">XPath</a> on a document.</p>

<p>Mozilla requires that you send the XML and XSLT files with an XML mimetype (<code>text/xml</code> or <code>application/xml</code>). This is the most common reason why XSLT won't run in Mozilla but will in Internet Explorer. Mozilla is strict in that way.</p>

<p>Internet Explorer 5.0 and 5.5 supported XSLT's working draft, which is substantially different than the final 1.0 recommendation. The easiest way to distinguish what version an XSLT file was written against is to look at the namespace. The namespace for the 1.0 recommendation is <code><span class="nowiki">http://www.w3.org/1999/XSL/Transform</span></code>, while the working draft's namespace is <code><span class="nowiki">http://www.w3.org/TR/WD-xsl</span></code>. Internet Explorer 6 supports the working draft for backwards compatibility, but Mozilla does not support the working draft, only the final recommendation.</p>

<p>If XSLT requires you to distinguish the browser, you can query the "xsl:vendor" system property. Mozilla's XSLT engine will report itself as "Transformiix" and Internet Explorer will return "Microsoft".</p>

<pre>&lt;xsl:if test="system-property('xsl:vendor') = 'Transformiix'"&gt;
  &lt;!-- Mozilla specific markup --&gt;
&lt;/xsl:if&gt;
&lt;xsl:if test="system-property('xsl:vendor') = 'Microsoft'"&gt;
  &lt;!-- Internet Explorer specific markup --&gt;
&lt;/xsl:if&gt;
</pre>

<p>Mozilla also provides JavaScript interfaces for XSLT, allowing a Web site to complete XSLT transformations in memory. You can do this using the global <code><a href="/en/XSLTProcessor" title="en/XSLTProcessor">XSLTProcessor</a></code> JavaScript object. <code>XSLTProcessor</code> requires you to load the XML and XSLT files, because it needs their DOM documents. The XSLT document, imported by the <code>XSLTProcessor</code>, allows you to manipulate XSLT parameters.</p>

<p><code>XSLTProcessor</code> can generate a standalone document using <code>transformToDocument()</code>, or it can create a document fragment using <code>transformToFragment()</code>, which you can easily append into another DOM document. Below is an example:</p>

<pre>var xslStylesheet;
var xsltProcessor = new XSLTProcessor();

// load the xslt file, example1.xsl
var myXMLHTTPRequest = new XMLHttpRequest();
myXMLHTTPRequest.open("GET", "example1.xsl", false);
myXMLHTTPRequest.send(null);

// get the XML document and import it
xslStylesheet = myXMLHTTPRequest.responseXML;

xsltProcessor.importStylesheet(xslStylesheet);

// load the xml file, example1.xml
myXMLHTTPRequest = new XMLHttpRequest();
myXMLHTTPRequest.open("GET", "example1.xml", false);
myXMLHTTPRequest.send(null);

var xmlSource = myXMLHTTPRequest.responseXML;

var resultDocument = xsltProcessor.transformToDocument(xmlSource);
</pre>

<p>After creating an <code>XSLTProcessor</code>, you load the XSLT file using <code>XMLHttpRequest</code>. The XMLHttpRequest's <code>responseXML</code> member contains the XML document of the XSLT file, which is passed to <code>importStylesheet</code>. You then use the <code>XMLHttpRequest</code> again to load the source XML document that must be transformed; that document is then passed to the <code>transformToDocument</code> method of <code>XSLTProcessor</code>. Table 8 features a list of <code>XSLTProcessor</code> methods.</p>

<table class="standard-table">
 <caption>Table 8. XSLTProcessor methods</caption>
 <tbody>
  <tr>
   <th>Method</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>void importStylesheet(Node styleSheet)</td>
   <td>Imports the XSLT stylesheet. The <code>styleSheet</code> argument is the root node of an XSLT stylesheet's DOM document.</td>
  </tr>
  <tr>
   <td>DocumentFragment transformToFragment(Node source, Document owner)</td>
   <td>Transforms the Node <code>source</code> by applying the stylesheet imported using the <code>importStylesheet</code> method and generates a DocumentFragment. <code>owner</code> specifies what DOM document the DocumentFragment should belong to, making it appendable to that DOM document.</td>
  </tr>
  <tr>
   <td>Document transformToDocument(Node source)</td>
   <td>Transforms the Node <code>source</code> by applying the stylesheet imported using the <code>importStylesheet</code> method and returns a standalone DOM document.</td>
  </tr>
  <tr>
   <td>void setParameter(String namespaceURI, String localName, Variant value)</td>
   <td>Sets a parameter in the imported XSLT stylesheet.</td>
  </tr>
  <tr>
   <td>Variant getParameter(String namespaceURI, String localName)</td>
   <td>Gets the value of a parameter in the imported XSLT stylesheet.</td>
  </tr>
  <tr>
   <td>void removeParameter(String namespaceURI, String localName)</td>
   <td>Removes all set parameters from the imported XSLT stylesheet and makes them default to the XSLT-defined defaults.</td>
  </tr>
  <tr>
   <td>void clearParameters()</td>
   <td>Removes all set parameters and sets them to defaults specified in the XSLT stylesheet.</td>
  </tr>
  <tr>
   <td>void reset()</td>
   <td>Removes all parameters and stylesheets.</td>
  </tr>
 </tbody>
</table>

<div class="originaldocinfo">
<h3 id="Original_Document_Information" name="Original_Document_Information">Original Document Information</h3>

<ul>
 <li>Author(s): Doron Rosenberg, IBM Corporation</li>
 <li>Published: 26 Jul 2005</li>
 <li>Link: <a class="external" href="http://www.ibm.com/developerworks/web/library/wa-ie2mozgd/" rel="freelink">http://www.ibm.com/developerworks/we...y/wa-ie2mozgd/</a></li>
</ul>
</div>
