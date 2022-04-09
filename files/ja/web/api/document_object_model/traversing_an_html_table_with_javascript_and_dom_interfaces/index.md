---
title: JavaScript と DOM インターフェイスによる HTML の表の操作
slug: >-
  Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
tags:
  - API
  - DOM
  - Guide
  - HTML
  - JavaScript
translation_of: >-
  Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
---
<p>{{DefaultAPISidebar("DOM")}}</p>

<h2 id="Introduction" name="Introduction">はじめに</h2>

<p>この記事では、強力で基本的な DOM レベル 1 のメソッドと、それを JavaScript からどのように使用するかを概観します。どのようにして HTML 要素を動的に生成、アクセス、制御、削除するかを学ぶことができます。ここで紹介する DOM メソッドは HTML に限ったものではなく、XML に対しても用いることができます。ここで用意しているデモは、Firefox のすべてのバージョンや IE 5 以上を含むすべての最近のブラウザーで正常に動作します。</p>

<div class="notecard note">
<p>ここで紹介する DOM メソッドは ドキュメントオブジェクトモデル (コア) レベル 1 仕様の一部に過ぎません。DOM レベル 1 には HTML ドキュメント特有のメソッド (DOM 1 HTML) と共に、一般的なドキュメントアクセスと操作 (DOM 1 コア) のためのメソッドが含まれています。</p>
</div>

<h2 id="Overview_of_Sample1.html" name="Overview_of_Sample1.html">例: 動的な HTML の表の生成 (<code>Sample1.html</code>)</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html; notranslate">&lt;input type="button" value="Generate a table." onclick="generate_table()"&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a &lt;table&gt; element and a &lt;tbody&gt; element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i &lt; 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j &lt; 2; j++) {
      // Create a &lt;td&gt; element and a text node, make the text
      // node the contents of the &lt;td&gt;, and put the &lt;td&gt; at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("セルは "+i+" 行 "+j+" 列 です");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the &lt;tbody&gt; in the &lt;table&gt;
  tbl.appendChild(tblBody);
  // appends &lt;table&gt; into &lt;body&gt;
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}</pre>

<p>{{ EmbedLiveSample('Overview_of_Sample1.html') }}</p>

<p>要素とテキストノードを生成する順序を意識しながら確認していってください。</p>

<ol>
 <li>まず、<code>&lt;table&gt;</code> 要素を生成しました。</li>
 <li>次に <code>&lt;tbody&gt;</code> 要素生成し、これが <code>&lt;table&gt;</code> 要素の子となります。</li>
 <li>次に、ループを用いて <code>&lt;tr&gt;</code> 要素を生成し、これらが <code>&lt;tbody&gt;</code> 要素の子となります。</li>
 <li>それぞれの <code>&lt;tr&gt;</code> 要素に対して、ループを用いて <code>&lt;td&gt;</code> 要素を生成し、これらが <code>&lt;tr&gt;</code> の子となります。</li>
 <li>それから、それぞれの <code>&lt;td&gt;</code> 要素に対して、表のセルのテキストノードとテキストを生成しました。</li>
</ol>

<p><code>&lt;table&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code> の各要素とテキストノードを生成したら、逆の順序でそれぞれのオブジェクトを親へ追加していきます。</p>

<ol>
 <li>まず、各テキストノードをその親である <code>&lt;td&gt;</code> 要素へ追加します。

  <pre class="brush: js">cell.appendChild(cellText);</pre>
 </li>
 <li>次に、各 <code>&lt;td&gt;</code> 要素をその親である <code>&lt;tr&gt;</code> 要素へと追加します。
  <pre class="brush: js">row.appendChild(cell);</pre>
 </li>
 <li>次に、各 <code>&lt;tr&gt;</code> 要素をその親である <code>&lt;tbody&gt;</code> 要素へと追加します。
  <pre class="brush: js">tblBody.appendChild(row);</pre>
 </li>
 <li>次に、<code>&lt;tbody&gt;</code> 要素をその親である <code>&lt;table&gt;</code> 要素へと追加します。
  <pre class="brush: js">tbl.appendChild(tblBody);</pre>
 </li>
 <li>次に、<code>&lt;table&gt;</code> 要素をその親である <code>&lt;body&gt;</code> 要素へと追加します。
  <pre class="brush: js">body.appendChild(tbl);</pre>
 </li>
</ol>

<p>この手法を覚えておきましょう。W3C DOM によるプログラミングでは頻繁に使うことになります。まず、トップダウンで要素を作成し、子を親へとボトムアップで追加していくのです。</p>

<p>JavaScript コードによって生成される HTML マークアップはこのようになります。</p>

<pre class="brush: html">...
&lt;table border="2"&gt;
&lt;tbody&gt;
&lt;tr&gt;&lt;td&gt;セルは 0 行 0 列 です&lt;/td&gt;&lt;td&gt;セルは 0 行 1 列 です&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;セルは 1 行 0 列 です&lt;/td&gt;&lt;td&gt;セルは 1 行 1 列 です&lt;/td&gt;&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;
...
</pre>

<p>このコードによって生成される <code>&lt;table&gt;</code> 要素とその子要素を示す DOM オブジェクトツリーはこのようになります。</p>

<p><img src="sample1-tabledom.jpg"></p>

<p>ほんの幾つかの DOM メソッドを使用するだけでこのように表と内部の子要素を構築できます。生成しようと計画している構造のツリーモデルを頭に置いておくことを忘れないようにしてください。そうすれば必要なコードを書くのは簡単です。図 1 の <code>&lt;table&gt;</code> ツリーでは <code>&lt;table&gt;</code> 要素は <code>&lt;tbody&gt;</code> 要素という子を 1 つ持ちます。<code>&lt;tbody&gt;</code> は 2 つ子を持ちます。各 <code>&lt;tbody&gt;</code> の子 (<code>&lt;tr&gt;</code>) は子を 1 つ (<code>&lt;td&gt;</code>) 持ちます。最後に各 <code>&lt;td&gt;</code> はテキストノードという子を 1 つ持ちます。</p>

<h2 id="Setting_background_of_a_paragraph" name="Setting_background_of_a_paragraph">例: 段落の背景色の設定</h2>

<p><code>getElementsByTagName(tagNameValue)</code> は DOM の {{domxref("Element")}} および ルートの {{domxref("Document")}} 要素で利用することができます。呼び出すと、その要素の配下でタグ名が一致するすべての要素の配列を返します。リスト中の先頭の要素は、配列内の <code>[0]</code> の位置にあります。</p>

<h3 id="HTML_2">HTML</h3>

<pre class="brush: html">&lt;body&gt;
  &lt;input type="button" value="Set paragraph background color" onclick="set_background()"&gt;
  &lt;p&gt;hi&lt;/p&gt;
  &lt;p&gt;hello&lt;/p&gt;
&lt;/body&gt;</pre>

<h3 id="JavaScript_2">JavaScript</h3>

<pre class="brush: js">function set_background() {
  // body 要素すべてのリストを取得します (あるのは 1 つだけですが)
  // それからその要素の 0 番目 (最初) の要素を選択します
  myBody = document.getElementsByTagName("body")[0];

  // 今度は body の子供である p 要素をすべて取得します
  myBodyElements = myBody.getElementsByTagName("p");

  // p 要素のリストから 2 番目の項目を取得します
  myP = myBodyElements[1];
  myP.style.background = "rgb(255,0,0)";
}</pre>

<p>{{ EmbedLiveSample('Setting_background_of_a_paragraph') }}</p>

<p>この例では、<code>myP</code> 変数を body 中の 2 つ目の <code>p</code> 要素を表す DOM オブジェクトに設定しています。</p>

<ol>
 <li>まず、すべての body 要素リストをこのようにして取得します。
  <pre class="brush: js">myBody = document.getElementsByTagName("body")[0]</pre>
  有効な HTML 文書では body 要素は 1 つしかないため、このリストは 1 項目だけを持ちます。そのリストの最初の要素を <code>[0]</code> を使って選択することで取得します。</li>
 <li>次に、 <code>body</code> の子であるすべての <code>p</code> 要素をこのようにして取得します。
  <pre class="brush: js">myBodyElements = myBody.getElementsByTagName("p");</pre>
 </li>
 <li>そして <code>p</code> 要素のリストから 2 つ目の項目をこのようにして取得します。
  <pre class="brush: js">myP = myBodyElements[1];</pre>
 </li>
</ol>

<p><img src="sample2a2.jpg"></p>

<p>一旦 HTML 要素に対応する DOM オブジェクトを取得すれば、そのプロパティを設定することできます。例えば、背景色のスタイルプロパティを設定したいのであればこのように加えるだけです。</p>

<pre class="notranslate">myP.style.background = "rgb(255,0,0)";
// インラインの STYLE 属性を設定
</pre>

<h3 id="Creating_TextNodes_with_document.createTextNode.28.22...22.29" name="Creating_TextNodes_with_document.createTextNode.28.22...22.29">document.createTextNode("..") によるテキストノードの生成</h3>

<p>document オブジェクトを使用して <code>createTextNode</code> メソッドを呼び出し、テキストノードを生成します。テキスト内容を渡す必要があるだけです。返値はそのテキストノードを表すオブジェクトとなります。</p>

<pre class="brush: js">myTextNode = document.createTextNode("world");
</pre>

<p>これはそのテキストデータが「world」である <code>TEXT_NODE</code> 型 (テキスト断片) のノードを生成し、myTextNode がこのノードオブジェクトへの参照だということです。このテキストを HTML ページに挿入するには、このテキストノードを何か他のノード要素の子供にする必要があります。</p>

<h3 id="Inserting_Elements_with_appendChild.28...29" name="Inserting_Elements_with_appendChild.28...29">appendChild(..) による要素の挿入</h3>

<p>そこで <code>myP.appendChild(<var>node_element</var>)</code> を使って、その要素を 2 つ目の <code>&lt;p&gt;</code> 要素の子とします。</p>

<pre class="brush: js">myP.appendChild(myTextNode);
</pre>

<p>例を見て頂いたところで、単語 hello と world が一緒になっていることに注目して下さい: helloworld。ご覧のように外見的には、HTML ページを見ると 2 つのテキスト hello と world は単一ノードのように見えますが、ドキュメントモデルでは 2つのノードがあるのです。2 つ目のノードは <code>TEXT_NODE</code> 型の新しいノードで、2つ目の <code>&lt;p&gt;</code> タグの 2つ目の子供です。以下の図は文書ツリー中につい先程生成された Text Node オブジェクトを表しています。</p>

<p><img src="sample2b2.jpg"></p>

<div class="notecard note">
<p><code>createTextNode()</code> と <code>appendChild</code> は、hello と world という単語の間にホワイトスペースを入れる簡単な方法です。もう 1 つの重要な注意点は、hello の後に world という単語が追加されたように、<code>appendChild</code> メソッドは最後の子の後に子を追加するということです。ですから、hello と world の間にテキストノードを追加したい場合は、<code>appendChild</code> の代わりに <code>appendChild</code> を使用する必要があります。</p>
</div>

<h3 id="Creating_New_Elements_with_the_document_object_and_the_createElement.28...29_method" name="Creating_New_Elements_with_the_document_object_and_the_createElement.28...29_method">文書オブジェクトと createElement(..) メソッドによる新しい要素の生成</h3>

<p>createElement を使って、新しい HTML 要素やその他の任意の要素を作成することができます。例えば、&lt;body&gt; 要素の子として新しい &lt;p&gt; 要素を作成したい場合は、先ほどの例の <code>myBody</code> を使用して、新しい要素ノードを追加します。ノードを作成するには、単に <code>document.createElement("タグ名")</code> を呼び出すだけです。例えば、以下のようになります。</p>

<pre class="brush: js">myNewPTAGnode = document.createElement("p");
myBody.appendChild(myNewPTAGnode);
</pre>

<p><img src="sample2c.jpg"></p>

<h3 id="Removing_nodes_with_the_removeChild.28...29_method" name="Removing_nodes_with_the_removeChild.28...29_method">removeChild(..) メソッドによるノードの削除</h3>

<p>ノードを削除することができます。以下のコードは、テキストノード <code>myTextNode</code> ("world" という単語を含む) を 2 番目の <code>&lt;p&gt;</code> 要素である <code>myP</code> から削除します。</p>

<pre class="brush: js">myP.removeChild(myTextNode);
</pre>

<p>テキストノード <code>myTextNode</code> ("world" という単語を含む) はまだ存在しています。以下のコードは、<code>myTextNode</code> を最近作成された <code>&lt;p&gt;</code> 要素である <code>myNewPTAGnode</code> に割り当てています。</p>

<pre class="brush: js">myNewPTAGnode.appendChild(myTextNode);
</pre>

<p>最終的に変更されたオブジェクトツリーはこのような状態なります。</p>

<p><img src="sample2d.jpg"></p>

<h2 id="Creating_a_table_dynamically_.28back_to_Sample1.html.29" name="Creating_a_table_dynamically_.28back_to_Sample1.html.29">表の動的生成 (Sample1.html に戻って)</h2>

<p>この文書ではこれ以降再び sample1.html を扱っていきます。以下の図はこの例で生成される table オブジェクトツリー構造を表しています。</p>

<h3 id="Reviewing_the_HTML_Table_structure" name="Reviewing_the_HTML_Table_structure">HTML 表構造の再確認</h3>

<p><img src="sample1-tabledom.jpg"></p>

<h3 id="Creating_element_nodes_and_inserting_them_into_the_document_tree" name="Creating_element_nodes_and_inserting_them_into_the_document_tree">要素ノードの生成とその文書ツリーへの挿入</h3>

<p>sample1.html における基本的な table 生成の手順は次の通りです。</p>

<ul>
 <li>body オブジェクトを取得する (document オブジェクトの最初の項目)。</li>
 <li>すべての要素を生成する。</li>
 <li>最後に、各子要素を (上の図のように) table 構造に従って付加していきます。以下のソースコードは sample1.html のコメント付き版になります。</li>
</ul>

<div class="notecard note">
<p><code>start</code> 関数の最後には新たなコードがあります。DOM のメソッド <code>setAttribute()</code> を用いて table の <code>border</code> プロパティが設定されており、<code>setAttribute()</code> は属性名と属性値という 2 つの引数を取ります。<code>setAttribute</code> メソッドを用いて任意の要素の任意の属性を設定することができます。</p>
</div>

<pre class="brush: html; notranslate">&lt;head&gt;
&lt;title&gt;サンプルコード - 基本的 DOM インターフェイスによる HTML 要素の動的操作法&lt;/title&gt;
&lt;script&gt;
    function start() {
        // body への参照を取得します
        var mybody = document.getElementsByTagName("body")[0];

        // &lt;table&gt; と &lt;tbody&gt; 要素を生成します
        mytable = document.createElement("table");
        mytablebody = document.createElement("tbody");

        // すべてのセルを生成します
        for(var j = 0; j &lt; 2; j++) {
            // &lt;tr&gt; 要素を生成します
            mycurrent_row = document.createElement("tr");

            for(var i = 0; i &lt; 2; i++) {
                // &lt;td&gt; 要素を生成します
                mycurrent_cell = document.createElement("td");
                // テキストノードを生成します
                currenttext = document.createTextNode("cell is row " + j + ", column " + i);
                // 生成したテキストノードを &lt;td&gt; セルへと付加します
                mycurrent_cell.appendChild(currenttext);
                // その &lt;td&gt; セルを &lt;tr&gt; 行へと付加します
                mycurrent_row.appendChild(mycurrent_cell);
            }
            // その &lt;tr&gt; 行を &lt;tbody&gt; へと付加します
            mytablebody.appendChild(mycurrent_row);
        }

        // &lt;tbody&gt; を &lt;table&gt; へと付加します
        mytable.appendChild(mytablebody);
        // &lt;table&gt; を &lt;body&gt; へと付加します
        mybody.appendChild(mytable);
        // mytable の border 属性を 2 に設定します
        mytable.setAttribute("border","2");
    }
&lt;/script&gt;
&lt;/head&gt;
&lt;body onload="start()"&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="Manipulating_the_table_with_DOM_and_CSS" name="Manipulating_the_table_with_DOM_and_CSS">DOM と CSS による表の操作</h2>

<h3 id="Getting_a_text_node_from_the_table" name="Getting_a_text_node_from_the_table">表からのテキスト取得</h3>

<p>この例では、2 つの新しい DOM 属性を導入しています。まず、<code>childNodes</code> 属性を使用して mycel の子ノードのリストを取得します。<code>childNodes</code> リストには、名前やタイプに関係なく、すべての子ノードが含まれます。<code>getElementsByTagName()</code> と同様に、ノードのリストを返します。</p>

<p>違いは、(a) <code>getElementsByTagName()</code> が指定したタグ名の要素のみを返すことと、(b) <code>getElementsByTagName()</code> が直系の子だけでなく、任意のレベルの子孫を返すことです。</p>

<p>返されたリストを手に入れたら、<code>[x]</code> メソッドを使って目的の子項目を取得します。この例では、表の 2 行目の 2 番目のセルのテキストノードを myceltext に格納しています。</p>

<p>そして、この例では結果を表示するために、内容が <code>myceltext</code> のデータである新しいテキストノードを作成し、<code>&lt;body&gt;</code> 要素の子として追加します。</p>

<div class="notecard note">
<p>オブジェクトがテキストノードである場合、data 属性を使用して当該ノードのテキスト内容を得ることができます。</p>
</div>

<pre class="brush: js">mybody = document.getElementsByTagName("body")[0];
mytable = mybody.getElementsByTagName("table")[0];
mytablebody = mytable.getElementsByTagName("tbody")[0];
myrow = mytablebody.getElementsByTagName("tr")[1];
mycel = myrow.getElementsByTagName("td")[1];

// first item element of the childNodes list of mycel
myceltext=mycel.childNodes[0];

// currenttext の中身は myceltext の data 内容
currenttext=document.createTextNode(myceltext.data);
mybody.appendChild(currenttext);
</pre>

<h3 id="Getting_an_attribute_value" name="Getting_an_attribute_value">属性値の取得</h3>

<p>sample1 の最後で <code>setAttribute</code> が <code>mytable</code> オブジェクトに対して呼び出されています。この呼び出しは table の border プロパティを設定するのに使用されています。属性をの値取得するには、属性オブジェクトを返す <code>getAttribute</code> メソッドを使用してください。</p>

<pre class="brush: js; notranslate">mytable.getAttribute("border");</pre>

<h3 id="Hiding_a_column_by_changing_style_properties" name="Hiding_a_column_by_changing_style_properties">スタイルプロパティ変更による列の非表示化</h3>

<p>JavaScript 変数にオブジェクトを納めさえすれば、スタイルプロパティを直接設定できます。以下のコードは 2 列目の各セル非表示とされ 1 行目の各セルが赤い背景色を持つように変更された sample1.html です。style プロパティが直接設定されていることに注意して下さい。</p>

<pre class="brush: html">&lt;html&gt;
&lt;body onload="start()"&gt;
&lt;/body&gt;
&lt;script&gt;
    function start() {
       var mybody = document.getElementsByTagName("body")[0];
       mytable = document.createElement("table");
       mytablebody = document.createElement("tbody");

       for(var row = 0; row &lt; 2; row++) {
           mycurrent_row=document.createElement("tr");
           for(var col = 0; col &lt; 2; col++) {
               mycurrent_cell = document.createElement("td");
               currenttext = document.createTextNode("cell is: " + row + col);
               mycurrent_cell.appendChild(currenttext);
               mycurrent_row.appendChild(mycurrent_cell);
               // 0 列目であればセルの背景色を設定し、
               // 1 列目であればセルを非表示とする
               if (col === 0) {
                   mycurrent_cell.style.background = "rgb(255,0,0)";
               } else {
                   mycurrent_cell.style.display = "none";
               }
           }
           mytablebody.appendChild(mycurrent_row);
       }
       mytable.appendChild(mytablebody);
       mybody.appendChild(mytable);
    }
&lt;/script&gt;
&lt;/html&gt;</pre>

<h4 id="Original_Document_Information" name="Original_Document_Information">出典情報</h4>

<dl>
 <dt>著者</dt>
 <dd>Marcio Galli</dd>
 <dt>引用元</dt>
 <dd>http://web.archive.org/web/20000815054125/http://mozilla.org/docs/dom/technote/tn-dom-table/</dd>
</dl>
