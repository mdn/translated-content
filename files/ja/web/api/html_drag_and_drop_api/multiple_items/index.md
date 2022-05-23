---
title: 複数の項目のドラッグ＆ドロップ
slug: Web/API/HTML_Drag_and_Drop_API/Multiple_items
translation_of: Web/API/HTML_Drag_and_Drop_API/Multiple_items
original_slug: DragDrop/Dragging_and_Dropping_Multiple_Items
---
<p>Mozillaはいくつかの非標準の機能によって、複数の項目のドラッグをサポートしています。それらの機能は<a class="internal" href="/Ja/DragDrop/DataTransfer#types.28.29">types</a>プロパティや<a class="internal" href="/Ja/DragDrop/DataTransfer#getData.28.29">getData</a>、<a class="internal" href="/Ja/DragDrop/DataTransfer#setData.28.29">setData</a>、<a class="internal" href="/Ja/DragDrop/DataTransfer#clearData.28.29">clearData</a>の各メソッドに酷似していますが、データの取得や変更、削除の際などに項目のインデックスを追加の引数として要求します。</p>
<p><a class="internal" href="/Ja/DragDrop/DataTransfer#mozSetDataAt.28.29">mozSetDataAt</a>を使うと、<code>dragstart</code>イベントで複数の項目を登録することができます。これは<a class="internal" href="/Ja/DragDrop/DataTransfer#setData.28.29">setData</a>メソッドとよく似た働きをします。</p>
<pre>var dt = event.dataTransfer;
dt.mozSetDataAt("text/plain", "ドラッグされるデータ", 0);
dt.mozSetDataAt("text/plain", "ドラッグされる2つめのデータ", 1);
</pre>
<p>この例では2つのドラッグ項目を追加しています。最後の引数は追加する項目のインデックスを示しています。これらの項目は0番から順番に登録するべきで、最後の方（インデックスの大きなもの）から逆順に登録することはできません。また、すでにデータが登録されているインデックスを指定してもう1度データを登録すると、前に登録したデータを置き換えることができます。インデックスとして0を指定すると、<a class="internal" href="/Ja/DragDrop/DataTransfer#setData.28.29">setData</a>メソッドを呼んだのと等しく扱われます。</p>
<p><a class="internal" href="/Ja/DragDrop/DataTransfer#mozClearDataAt.28.29">mozClearDataAt</a>メソッドを使って、指定した項目を削除することもできます。</p>
<pre>event.dataTransfer.mozClearDataAt("text/plain", 1);
</pre>
<p>あるインデックスで示される項目について、最後のデータ形式の削除によって項目全体を削除すると、残りの項目が繰り上がって項目のインデックスが変わることに注意してください。例えば、</p>
<pre>var dt = event.dataTransfer;
dt.mozSetDataAt("text/uri-list", "URL1", 0);
dt.mozSetDataAt("text/plain",    "URL1", 0);
dt.mozSetDataAt("text/uri-list", "URL2", 1);
dt.mozSetDataAt("text/plain",    "URL2", 1);
dt.mozSetDataAt("text/uri-list", "URL3", 2);
dt.mozSetDataAt("text/plain",    "URL3", 2);
// [item1] data=URL1, index=0
// [item2] data=URL2, index=1
// [item3] data=URL3, index=2
</pre>
<p>このように2つの形式で提供されたデータを持つ3つの項目を登録した後で、</p>
<pre>dt.mozClearDataAt("text/uri-list", 1);
dt.mozClearDataAt("text/plain", 1);
</pre>
<p>このように2番目の項目についてすべての形式のデータを削除すると、3番目だった項目が繰り上がって2番目の項目になり、インデックスが2から1に変わります。</p>
<pre>// [item1] data=URL1, index=0
// [item2] data=URL3, index=1
</pre>
<p>幸いなことに、通常は項目を削除する必要がある場合は希で、それよりも、必要に応じて項目を追加するだけの場合の方がずっと多いです。</p>
<p>複数の項目のドラッグが使われる場合の代表は、複数のファイルやブックマークをドラッグする時です。この場合には、適切な形式でそれらの項目を追加してください。また必須ではありませんが、それぞれの項目は常に同じ形式でデータを追加するべきです。これによりドロップ対象は、一貫したデータの受け取りを期待できます。</p>
<p>複数のファイルがドラッグされているかどうかを確認するには、<a class="internal" href="/Ja/DragDrop/DataTransfer#mozItemCount.28.29">mozItemCount</a>プロパティを調べます。このプロパティにはドラッグされている項目の数がセットされます。もしそのドロップ対象が1つの項目のドロップだけを受け付ける場合には、ドラッグされた項目すべてを拒否することもできますし、最初の項目だけを受け取ることもできます。複数の項目の受け取りを拒否するには、dragoverイベントをキャンセルしないか、<a class="internal" href="/Ja/DragDrop/DataTransfer#effectAllowed.28.29">effectAllowed</a>プロパティに<code>none</code>を指定します。他のイベントリスナがすでにイベントをキャンセルしている場合に備えて、両方を実行しても構いません。</p>
<p>ドロップされた項目のうち最初の項目だけを扱う場合は、1つだけの項目のドラッグの場合と同様に<a class="internal" href="/Ja/DragDrop/DataTransfer#getData.28.29">getData</a>を使います。これは、何も追加の処理が必要ないドロップ項目を1つだけ受け取るドロップ対象のために有用です。</p>
<p>それに対して、任意のインデックスの項目をデータトランスファーから取得するには<a class="internal" href="/Ja/DragDrop/DataTransfer#mozGetDataAt.28.29">mozGetDataAt</a>メソッドを使います。以下の例は、ドラッグされたファイルを取得し、それらを配列に追加するものです。</p>
<pre>function onDrop(event)
{
  var files = [];
  var dt = event.dataTransfer;
  for (var i = 0; i &lt; dt.mozItemCount; i++)
    files.push(dt.mozGetDataAt("application/x-moz-file", i));
}
</pre>
<p><a class="internal" href="/Ja/DragDrop/DataTransfer#mozTypesAt.28.29">mozTypesAt</a>メソッドを使って、望んでいる形式のデータが存在しているかどうかを確かめたいとも思うでしょう。<a class="internal" href="/Ja/DragDrop/DataTransfer#types.28.29">types</a>プロパティと同様に、このメソッドは、その項目が保持しているデータの型の文字列を返します。<a class="internal" href="/Ja/DragDrop/DataTransfer#types.28.29">types</a>プロパティを取得する事は、インデックスが0の項目の型のリストを取得する事に等しいです。</p>
<pre>var types = event.dataTransfer.mozTypesAt(1);
</pre>
<h2 id="文字列でないデータのドラッグ">文字列でないデータのドラッグ</h2>
<p>上で解説した追加のメソッドが扱えるデータは文字列に限定されず、どんな種類のデータでも指定することができます。例えば、ファイルは<a class="internal" href="/Ja/DragDrop/Recommended_Drag_Types#file">application/x-moz-file</a>型で<a class="internal" href="/ja/nsIFile">nsIFile</a>のオブジェクトとして保持されてドラッグされます。<code>setData</code>メソッドは文字列しかサポートしておらず、 ドラッグするファイルを指定するのには利用できないため、代わりに<a class="internal" href="/Ja/DragDrop/DataTransfer#mozSetDataAt.28.29">mozSetDataAt</a>メソッドを使わなくてはなりません。</p>
<pre>dt.mozSetDataAt("application/x-moz-file", file, 0);
</pre>
<p>複数の項目を扱う必要がない場合でも、このメソッドを使うことによって任意のオブジェクトをデータに指定できます。この場合には、インデックスとして0を指定しておきます。</p>
<p>同様に、ファイルやその他のオブジェクトを取得するには<a class="internal" href="/Ja/DragDrop/DataTransfer#mozGetDataAt.28.29">mozGetDataAt</a>メソッドを使う必要があります。もし<a class="internal" href="/Ja/DragDrop/DataTransfer#getData.28.29">getData</a>を使った場合は、値が文字列でない型のデータは空文字として取得されます。ただし、数値のような単純な型のデータについては文字列に変換できるため、この場合は<a class="internal" href="/Ja/DragDrop/DataTransfer#getData.28.29">getData</a>を使っても問題ありません。</p>
<h2 id="複数項目のドロップの例">複数項目のドロップの例</h2>
<p>以下は、ドロップされた項目のデータとその形式を一覧表示するボックスの例です。</p>
<pre>&lt;html&gt;
&lt;head&gt;
&lt;script&gt;

function dodrop(event)
{
  var dt = event.dataTransfer;
  var count = dt.mozItemCount;
  output("Items: " + count + "\n");

  for (var i = 0; i &lt; count; i++) {
    output(" Item " + i + ":\n");
    var types = dt.mozTypesAt(i);
    for (var t = 0; t &lt; types.length; t++) {
      output("  " + types[t] + ": ");
      try {
        var data = dt.mozGetDataAt(types[t], i);
        output("(" + (typeof data) + ") : &lt;" + data + " &gt;\n");
      } catch (ex) {
        output("&lt;&lt;error&gt;&gt;\n");
        dump(ex);
      }
    }
  }
}

function output(text)
{
  document.getElementById("output").textContent += text;
  dump(text);
}

&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div id="output" style="min-height: 100px; white-space: pre; border: 1px solid black;"
     ondragenter="document.getElementById('output').textContent = ''; event.stopPropagation(); event.preventDefault();"
     ondragover="event.stopPropagation(); event.preventDefault();"
     ondrop="event.stopPropagation(); event.preventDefault(); dodrop(event);"&gt;
&lt;div&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<p>この例は、<a class="internal" href="/ja/DOM/event.preventDefault">preventDefault</a>メソッドによって<code>dragenter</code>イベントと<code>dragover</code>イベントを両方ともキャンセルします。これにより、要素の上でのドロップが可能になっています。</p>
<p>項目をドロップした時に、<code>dodrop</code>関数が呼ばれます。この関数は<a class="internal" href="/Ja/DragDrop/DataTransfer#mozItemCount.28.29">mozItemCount</a>プロパティを見て、いくつの項目がドロップされたのかを調べ、それらに繰り返し処理を行います。それぞれの項目について、型の一覧を得るために<a class="internal" href="/Ja/DragDrop/DataTransfer#mozTypesAt.28.29">mozTypesAt</a>メソッドが呼ばれます。この一覧の生成処理は、ドラッグに対して関連づけられたすべてのデータに対して繰り返されます。</p>
<p>この例は、あるドラッグ操作が保持しているデータを確かめたい時に便利です。ただ項目をこの例のドロップ対象にドロップするだけで、ドラッグされたどの項目がどんな形式でどのようなデータを保持しているのかを見ることができます。</p>
<p>{{ languages( { "en": "En/DragDrop/Dragging_and_Dropping_Multiple_Items" } ) }}</p>
