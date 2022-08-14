---
title: コンテンツを編集可能にする
slug: Web/Guide/HTML/Editable_content
tags:
  - Advanced
  - Example
  - Guide
  - HTML
  - HTML5
  - Text
  - Web
  - contenteditable
  - text entry
  - text input
translation_of: Web/Guide/HTML/Editable_content
---
<div class="notecard warning">
  <h2>警告</h2>
  <p><a href="https://w3c.github.io/editing/docs/execCommand/"><code>execCommand()</code> 仕様書</a>で警告しているように、この機能は<q>すべてのユーザーエージェントで一貫した、または完全な実装が行われているわけではなく</q>、それに加えて、 <a href="/ja/docs/Web/API/Document/execCommand"><code>Document.execCommand()</code></a> リファレンスページでは非推奨とされています。したがって、このページの内容の多くは、本番コードで使用するには信頼できません。</p>
</div>

<p><span class="seoSummary">HTML では、すべての要素を編集可能状態 (editable) にすることができます。 JavaScript のいくつかのイベントハンドラーと併用することで、ウェブページを多機能でかつ高速に動作するリッチテキストエディターにしてしまうことも可能です。本記事では、この機能に関する情報を提供します。</span></p>

<div class="note">
<p><strong>注</strong>: Firefox 63 Beta/Dev Edition では、ブラウザー間の互換性を高めるために、一部のリッチテキスト編集機能を既定で無効にしています。具体的には、 {{htmlelement("img")}}, {{htmlelement("table")}} および絶対位置指定要素のオブジェクトのサイズ変更、インラインテーブルを編集して行や列の追加や削除すること、および絶対位置指定要素の移動を可能にするグラバーです。詳しくは {{bug("1449564")}} を参照してください。</p>
</div>

<h2 id="How_does_it_work">どのような挙動を示すか</h2>

<p>編集可能にする個所と密接に関係する要素へ {{htmlattrxref("contenteditable")}} 属性を設定しなければなりません。</p>

<p>ユーザーが内容を編集可能な {{HTMLElement("div")}} 要素を作成する、簡単な記述例を示します。</p>

<pre class="brush: html">&lt;div contenteditable="true"&gt;
  このテキストは閲覧者が編集することができます。
&lt;/div&gt;</pre>

<p>上記の HTML は以下のようになります:</p>

<p>{{EmbedLiveSample('How_does_it_work')}}</p>

<h2 id="Executing_commands">コマンドを実行する</h2>

<p>HTML 要素の <code>contenteditable</code> 属性を <code>true</code> に設定すると、{{domxref("document.execCommand()")}} メソッドが使用可能になります。これは、編集可能な部分の内容物を操作する <a href="/ja/docs/Web/API/Document/execCommand#commands">コマンド</a> を実行できます。ほとんどのコマンドは文書の選択範囲に作用します (例えば、テキストに太字や斜体などのスタイルを適用する) が、新しい要素を挿入する (リンクを追加するなど) コマンドや行全体に作用する (インデント) コマンドもあります。<code>contentEditable</code> を使用しているときに <code>execCommand()</code> を呼び出すと、現在アクティブな編集可能要素に作用します。</p>

<h2 id="Differences_in_markup_generation">マークアップ生成の違い</h2>

<p>さまざまなブラウザーで <code>contenteditable</code> を使用することは、ブラウザーが生成するマークアップの違いのために、長い間苦痛でした。例えば、編集可能な要素内で新しいテキストの行を作成するために Enter/Return を押下したときのようなシンプルな場合でさえ、主要なブラウザー間で扱いが異なっていました (Firefox は {{htmlelement("br")}} 要素を挿入、IE/Opera は {{htmlelement("p")}} を使用、Chrome/Safari は {{htmlelement("div")}} を使用)。</p>

<p>幸い、最新のブラウザーではこれらが多少統一されています。<a href="/ja/docs/Mozilla/Firefox/Releases/60">Firefox 60</a> では Chrome、最新の Opera、Edge、Safari に合わせて、{{htmlelement("div")}} 要素で行をくくるように更新しました。</p>

<p>前出の例で試してみてください。</p>

<div class="note">
<p><strong>注記</strong>: Internet Explorer はもはや開発されておらず、<code>&lt;div&gt;</code> ではなく {{htmlelement("p")}} 要素を使用します。</p>
</div>

<p>別の方法で段落を分割したい場合は、前出のブラウザーはすべて {{domxref("document.execCommand")}} をサポートしていますので、<code>defaultParagraphSeparator</code> コマンドで分割方法を変更できます。例えば、{{htmlelement("p")}} 要素を使用するには以下のようにします:</p>

<pre class="brush: js">document.execCommand("DefaultParagraphSeparator", false, "p");</pre>

<p>また Firefox 55 より、<code>defaultParagraphSeparator</code> で<em>非標準</em>の引数として <code>br</code> をサポートしています。これは、ブラウザーが Firefox であるかを確認することで古い Firefox をサポートするウェブアプリケーションで、残念ながら新しい Firefox 向けにウェブアプリケーションを修正するための十分な時間がない場合に、<code>designMode</code> または <code>contenteditable</code> のエディターを初期化する際に以下の行を挿入すると、古い Firefox の動作に戻すことができます:</p>

<pre class="brush: js">document.execCommand("defaultParagraphSeparator", false, "br")<span class="punctuation token">;</span></pre>

<h2 id="Security">セキュリティ</h2>

<p>セキュリティ上の理由で Firefox は、JavaScript コードがクリップボード関連の機能 (コピーや貼り付けなど) を使用することをデフォルトで許可していません。<code>about:config</code> を使用して以下の設定を行うと、これらを有効化できます:</p>

<pre class="code">user_pref("capability.policy.policynames", "allowclipboard");
user_pref("capability.policy.allowclipboard.sites", "https://www.mozilla.org");
user_pref("capability.policy.allowclipboard.Clipboard.cutcopy", "allAccess");
user_pref("capability.policy.allowclipboard.Clipboard.paste", "allAccess");</pre>

<h2 id="Example_A_simple_but_complete_rich_text_editor">例: シンプルであるが完成されたリッチテキストエディター</h2>

<pre class="brush: html" style="height: 500px; width: auto; overflow: auto;">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Rich Text Editor&lt;/title&gt;
&lt;script type="text/javascript"&gt;
var oDoc, sDefTxt;

function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchMode.checked) { setDocMode(true); }
}

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

function validateMode() {
  if (!document.compForm.switchMode.checked) { return true ; }
  alert("Uncheck \"Show HTML\".");
  oDoc.focus();
  return false;
}

function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("pre");
    oDoc.contentEditable = false;
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
    document.execCommand("defaultParagraphSeparator", false, "div");
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();
}

function printDoc() {
  if (!validateMode()) { return; }
  var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  oPrntWin.document.open();
  oPrntWin.document.write("&lt;!doctype html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;Print&lt;\/title&gt;&lt;\/head&gt;&lt;body onload=\"print();\"&gt;" + oDoc.innerHTML + "&lt;\/body&gt;&lt;\/html&gt;");
  oPrntWin.document.close();
}
&lt;/script&gt;
&lt;style type="text/css"&gt;
.intLink { cursor: pointer; }
img.intLink { border: 0; }
#toolBar1 select { font-size:10px; }
#textBox {
  width: 540px;
  height: 200px;
  border: 1px #000000 solid;
  padding: 12px;
  overflow: scroll;
}
#textBox #sourceText {
  padding: 0;
  margin: 0;
  min-width: 498px;
  min-height: 200px;
}
#editMode label { cursor: pointer; }
&lt;/style&gt;
&lt;/head&gt;
&lt;body onload="initDoc();"&gt;
&lt;form name="compForm" method="post" action="sample.php" onsubmit="if(validateMode()){this.myDoc.value=oDoc.innerHTML;return true;}return false;"&gt;
&lt;input type="hidden" name="myDoc"&gt;
&lt;div id="toolBar1"&gt;
&lt;select onchange="formatDoc('formatblock',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option selected&gt;- formatting -&lt;/option&gt;
&lt;option value="h1"&gt;Title 1 &amp;lt;h1&amp;gt;&lt;/option&gt;
&lt;option value="h2"&gt;Title 2 &amp;lt;h2&amp;gt;&lt;/option&gt;
&lt;option value="h3"&gt;Title 3 &amp;lt;h3&amp;gt;&lt;/option&gt;
&lt;option value="h4"&gt;Title 4 &amp;lt;h4&amp;gt;&lt;/option&gt;
&lt;option value="h5"&gt;Title 5 &amp;lt;h5&amp;gt;&lt;/option&gt;
&lt;option value="h6"&gt;Subtitle &amp;lt;h6&amp;gt;&lt;/option&gt;
&lt;option value="p"&gt;Paragraph &amp;lt;p&amp;gt;&lt;/option&gt;
&lt;option value="pre"&gt;Preformatted &amp;lt;pre&amp;gt;&lt;/option&gt;
&lt;/select&gt;
&lt;select onchange="formatDoc('fontname',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option class="heading" selected&gt;- font -&lt;/option&gt;
&lt;option&gt;Arial&lt;/option&gt;
&lt;option&gt;Arial Black&lt;/option&gt;
&lt;option&gt;Courier New&lt;/option&gt;
&lt;option&gt;Times New Roman&lt;/option&gt;
&lt;/select&gt;
&lt;select onchange="formatDoc('fontsize',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option class="heading" selected&gt;- size -&lt;/option&gt;
&lt;option value="1"&gt;Very small&lt;/option&gt;
&lt;option value="2"&gt;A bit small&lt;/option&gt;
&lt;option value="3"&gt;Normal&lt;/option&gt;
&lt;option value="4"&gt;Medium-large&lt;/option&gt;
&lt;option value="5"&gt;Big&lt;/option&gt;
&lt;option value="6"&gt;Very big&lt;/option&gt;
&lt;option value="7"&gt;Maximum&lt;/option&gt;
&lt;/select&gt;
&lt;select onchange="formatDoc('forecolor',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option class="heading" selected&gt;- color -&lt;/option&gt;
&lt;option value="red"&gt;Red&lt;/option&gt;
&lt;option value="blue"&gt;Blue&lt;/option&gt;
&lt;option value="green"&gt;Green&lt;/option&gt;
&lt;option value="black"&gt;Black&lt;/option&gt;
&lt;/select&gt;
&lt;select onchange="formatDoc('backcolor',this[this.selectedIndex].value);this.selectedIndex=0;"&gt;
&lt;option class="heading" selected&gt;- background -&lt;/option&gt;
&lt;option value="red"&gt;Red&lt;/option&gt;
&lt;option value="green"&gt;Green&lt;/option&gt;
&lt;option value="black"&gt;Black&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div id="toolBar2"&gt;
&lt;img class="intLink" title="Clean" onclick="if(validateMode()&amp;&amp;confirm('Are you sure?')){oDoc.innerHTML=sDefTxt};" src="data:image/gif;base64,R0lGODlhFgAWAIQbAD04KTRLYzFRjlldZl9vj1dusY14WYODhpWIbbSVFY6O7IOXw5qbms+wUbCztca0ccS4kdDQjdTLtMrL1O3YitHa7OPcsd/f4PfvrvDv8Pv5xv///////////////////yH5BAEKAB8ALAAAAAAWABYAAAV84CeOZGmeaKqubMteyzK547QoBcFWTm/jgsHq4rhMLoxFIehQQSAWR+Z4IAyaJ0kEgtFoLIzLwRE4oCQWrxoTOTAIhMCZ0tVgMBQKZHAYyFEWEV14eQ8IflhnEHmFDQkAiSkQCI2PDC4QBg+OAJc0ewadNCOgo6anqKkoIQA7" /&gt;
&lt;img class="intLink" title="Print" onclick="printDoc();" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oEBxcZFmGboiwAAAAIdEVYdENvbW1lbnQA9syWvwAAAuFJREFUOMvtlUtsjFEUx//n3nn0YdpBh1abRpt4LFqtqkc3jRKkNEIsiIRIBBEhJJpKlIVo4m1RRMKKjQiRMJRUqUdKPT71qpIpiRKPaqdF55tv5vvusZjQTjOlseUkd3Xu/3dPzusC/22wtu2wRn+jG5So/OCDh8ycMJDflehMlkJkVK7KUYN+ufzA/RttH76zaVocDptRxzQtNi3mRWuPc+6cKtlXZ/sddP2uu9uXlmYXZ6Qm8v4Tz8lhF1H+zDQXt7S8oLMXtbF4e8QaFHjj3kbP2MzkktHpiTjp9VH6iHiA+whtAsX5brpwueMGdONdf/2A4M7ukDs1JW662+XkqTkeUoqjKtOjm2h53YFL15pSJ04Zc94wdtibr26fXlC2mzRvBccEbz2kiRFD414tKMlEZbVGT33+qCoHgha81SWYsew0r1uzfNylmtpx80pngQQ91LwVk2JGvGnfvZG6YcYRAT16GFtW5kKKfo1EQLtfh5Q2etT0BIWF+aitq4fDbk+ImYo1OxvGF03waFJQvBCkvDffRyEtxQiFFYgAZTHS0zwAGD7fG5TNnYNTp8/FzvGwJOfmgG7GOx0SAKKgQgDMgKBI0NJGMEImpGDk5+WACEwEd0ywblhGUZ4Hw5OdUekRBLT7DTgdEgxACsIznx8zpmWh7k4rkpJcuHDxCul6MDsmmBXDlWCH2+XozSgBnzsNCEE4euYV4pwCpsWYPW0UHDYBKSWu1NYjENDReqtKjwn2+zvtTc1vMSTB/mvev/WEYSlASsLimcOhOBJxw+N3aP/SjefNL5GePZmpu4kG7OPr1+tOfPyUu3BecWYKcwQcDFmwFKAUo90fhKDInBCAmvqnyMgqUEagQwCoHBDc1rjv9pIlD8IbVkz6qYViIBQGTJPx4k0XpIgEZoRN1Da0cij4VfR0ta3WvBXH/rjdCufv6R2zPgPH/e4pxSBCpeatqPrjNiso203/5s/zA171Mv8+w1LOAAAAAElFTkSuQmCC"&gt;
&lt;img class="intLink" title="Undo" onclick="formatDoc('undo');" src="data:image/gif;base64,R0lGODlhFgAWAOMKADljwliE33mOrpGjuYKl8aezxqPD+7/I19DV3NHa7P///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARR8MlJq7046807TkaYeJJBnES4EeUJvIGapWYAC0CsocQ7SDlWJkAkCA6ToMYWIARGQF3mRQVIEjkkSVLIbSfEwhdRIH4fh/DZMICe3/C4nBQBADs=" /&gt;
&lt;img class="intLink" title="Redo" onclick="formatDoc('redo');" src="data:image/gif;base64,R0lGODlhFgAWAMIHAB1ChDljwl9vj1iE34Kl8aPD+7/I1////yH5BAEKAAcALAAAAAAWABYAAANKeLrc/jDKSesyphi7SiEgsVXZEATDICqBVJjpqWZt9NaEDNbQK1wCQsxlYnxMAImhyDoFAElJasRRvAZVRqqQXUy7Cgx4TC6bswkAOw==" /&gt;
&lt;img class="intLink" title="Remove formatting" onclick="formatDoc('removeFormat')" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9oECQMCKPI8CIIAAAAIdEVYdENvbW1lbnQA9syWvwAAAuhJREFUOMtjYBgFxAB501ZWBvVaL2nHnlmk6mXCJbF69zU+Hz/9fB5O1lx+bg45qhl8/fYr5it3XrP/YWTUvvvk3VeqGXz70TvbJy8+Wv39+2/Hz19/mGwjZzuTYjALuoBv9jImaXHeyD3H7kU8fPj2ICML8z92dlbtMzdeiG3fco7J08foH1kurkm3E9iw54YvKwuTuom+LPt/BgbWf3//sf37/1/c02cCG1lB8f//f95DZx74MTMzshhoSm6szrQ/a6Ir/Z2RkfEjBxuLYFpDiDi6Af///2ckaHBp7+7wmavP5n76+P2ClrLIYl8H9W36auJCbCxM4szMTJac7Kza////R3H1w2cfWAgafPbqs5g7D95++/P1B4+ECK8tAwMDw/1H7159+/7r7ZcvPz4fOHbzEwMDwx8GBgaGnNatfHZx8zqrJ+4VJBh5CQEGOySEua/v3n7hXmqI8WUGBgYGL3vVG7fuPK3i5GD9/fja7ZsMDAzMG/Ze52mZeSj4yu1XEq/ff7W5dvfVAS1lsXc4Db7z8C3r8p7Qjf///2dnZGxlqJuyr3rPqQd/Hhyu7oSpYWScylDQsd3kzvnH738wMDzj5GBN1VIWW4c3KDon7VOvm7S3paB9u5qsU5/x5KUnlY+eexQbkLNsErK61+++VnAJcfkyMTIwffj0QwZbJDKjcETs1Y8evyd48toz8y/ffzv//vPP4veffxpX77z6l5JewHPu8MqTDAwMDLzyrjb/mZm0JcT5Lj+89+Ybm6zz95oMh7s4XbygN3Sluq4Mj5K8iKMgP4f0////fv77//8nLy+7MCcXmyYDAwODS9jM9tcvPypd35pne3ljdjvj26+H2dhYpuENikgfvQeXNmSl3tqepxXsqhXPyc666s+fv1fMdKR3TK72zpix8nTc7bdfhfkEeVbC9KhbK/9iYWHiErbu6MWbY/7//8/4//9/pgOnH6jGVazvFDRtq2VgiBIZrUTIBgCk+ivHvuEKwAAAAABJRU5ErkJggg=="&gt;
&lt;img class="intLink" title="Bold" onclick="formatDoc('bold');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs=" /&gt;
&lt;img class="intLink" title="Italic" onclick="formatDoc('italic');" src="data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw==" /&gt;
&lt;img class="intLink" title="Underline" onclick="formatDoc('underline');" src="data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7" /&gt;
&lt;img class="intLink" title="Left align" onclick="formatDoc('justifyleft');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JMGELkGYxo+qzl4nKyXAAAOw==" /&gt;
&lt;img class="intLink" title="Center align" onclick="formatDoc('justifycenter');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIfhI+py+0Po5y02ouz3jL4D4JOGI7kaZ5Bqn4sycVbAQA7" /&gt;
&lt;img class="intLink" title="Right align" onclick="formatDoc('justifyright');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JQGDLkGYxouqzl43JyVgAAOw==" /&gt;
&lt;img class="intLink" title="Numbered list" onclick="formatDoc('insertorderedlist');" src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAADljwliE35GjuaezxtHa7P///////yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKSespwjoRFvggCBUBoTFBeq6QIAysQnRHaEOzyaZ07Lu9lUBnC0UGQU1K52s6n5oEADs=" /&gt;
&lt;img class="intLink" title="Dotted list" onclick="formatDoc('insertunorderedlist');" src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAAB1ChF9vj1iE33mOrqezxv///////yH5BAEAAAcALAAAAAAWABYAAAMyeLrc/jDKSesppNhGRlBAKIZRERBbqm6YtnbfMY7lud64UwiuKnigGQliQuWOyKQykgAAOw==" /&gt;
&lt;img class="intLink" title="Quote" onclick="formatDoc('formatblock','blockquote');" src="data:image/gif;base64,R0lGODlhFgAWAIQXAC1NqjFRjkBgmT9nqUJnsk9xrFJ7u2R9qmKBt1iGzHmOrm6Sz4OXw3Odz4Cl2ZSnw6KxyqO306K63bG70bTB0rDI3bvI4P///////////////////////////////////yH5BAEKAB8ALAAAAAAWABYAAAVP4CeOZGmeaKqubEs2CekkErvEI1zZuOgYFlakECEZFi0GgTGKEBATFmJAVXweVOoKEQgABB9IQDCmrLpjETrQQlhHjINrTq/b7/i8fp8PAQA7" /&gt;
&lt;img class="intLink" title="Delete indentation" onclick="formatDoc('outdent');" src="data:image/gif;base64,R0lGODlhFgAWAMIHAAAAADljwliE35GjuaezxtDV3NHa7P///yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKCQG9F2i7u8agQgyK1z2EIBil+TWqEMxhMczsYVJ3e4ahk+sFnAgtxSQDqWw6n5cEADs=" /&gt;
&lt;img class="intLink" title="Add indentation" onclick="formatDoc('indent');" src="data:image/gif;base64,R0lGODlhFgAWAOMIAAAAADljwl9vj1iE35GjuaezxtDV3NHa7P///////////////////////////////yH5BAEAAAgALAAAAAAWABYAAAQ7EMlJq704650B/x8gemMpgugwHJNZXodKsO5oqUOgo5KhBwWESyMQsCRDHu9VOyk5TM9zSpFSr9gsJwIAOw==" /&gt;
&lt;img class="intLink" title="Hyperlink" onclick="var sLnk=prompt('Write the URL here','http:\/\/');if(sLnk&amp;&amp;sLnk!=''&amp;&amp;sLnk!='http://'){formatDoc('createlink',sLnk)}" src="data:image/gif;base64,R0lGODlhFgAWAOMKAB1ChDRLY19vj3mOrpGjuaezxrCztb/I19Ha7Pv8/f///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARY8MlJq7046827/2BYIQVhHg9pEgVGIklyDEUBy/RlE4FQF4dCj2AQXAiJQDCWQCAEBwIioEMQBgSAFhDAGghGi9XgHAhMNoSZgJkJei33UESv2+/4vD4TAQA7" /&gt;
&lt;img class="intLink" title="Cut" onclick="formatDoc('cut');" src="data:image/gif;base64,R0lGODlhFgAWAIQSAB1ChBFNsRJTySJYwjljwkxwl19vj1dusYODhl6MnHmOrpqbmpGjuaezxrCztcDCxL/I18rL1P///////////////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAVu4CeOZGmeaKqubDs6TNnEbGNApNG0kbGMi5trwcA9GArXh+FAfBAw5UexUDAQESkRsfhJPwaH4YsEGAAJGisRGAQY7UCC9ZAXBB+74LGCRxIEHwAHdWooDgGJcwpxDisQBQRjIgkDCVlfmZqbmiEAOw==" /&gt;
&lt;img class="intLink" title="Copy" onclick="formatDoc('copy');" src="data:image/gif;base64,R0lGODlhFgAWAIQcAB1ChBFNsTRLYyJYwjljwl9vj1iE31iGzF6MnHWX9HOdz5GjuYCl2YKl8ZOt4qezxqK63aK/9KPD+7DI3b/I17LM/MrL1MLY9NHa7OPs++bx/Pv8/f///////////////yH5BAEAAB8ALAAAAAAWABYAAAWG4CeOZGmeaKqubOum1SQ/kPVOW749BeVSus2CgrCxHptLBbOQxCSNCCaF1GUqwQbBd0JGJAyGJJiobE+LnCaDcXAaEoxhQACgNw0FQx9kP+wmaRgYFBQNeAoGihCAJQsCkJAKOhgXEw8BLQYciooHf5o7EA+kC40qBKkAAAGrpy+wsbKzIiEAOw==" /&gt;
&lt;img class="intLink" title="Paste" onclick="formatDoc('paste');" src="data:image/gif;base64,R0lGODlhFgAWAIQUAD04KTRLY2tXQF9vj414WZWIbXmOrpqbmpGjudClFaezxsa0cb/I1+3YitHa7PrkIPHvbuPs+/fvrvv8/f///////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAWN4CeOZGmeaKqubGsusPvBSyFJjVDs6nJLB0khR4AkBCmfsCGBQAoCwjF5gwquVykSFbwZE+AwIBV0GhFog2EwIDchjwRiQo9E2Fx4XD5R+B0DDAEnBXBhBhN2DgwDAQFjJYVhCQYRfgoIDGiQJAWTCQMRiwwMfgicnVcAAAMOaK+bLAOrtLUyt7i5uiUhADs=" /&gt;
&lt;/div&gt;
&lt;div id="textBox" contenteditable="true"&gt;&lt;p&gt;Lorem ipsum&lt;/p&gt;&lt;/div&gt;
&lt;p id="editMode"&gt;&lt;input type="checkbox" name="switchMode" id="switchBox" onchange="setDocMode(this.checked);" /&gt; &lt;label for="switchBox"&gt;Show HTML&lt;/label&gt;&lt;/p&gt;
&lt;p&gt;&lt;input type="submit" value="Send" /&gt;&lt;/p&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{domxref("HTMLElement.contentEditable")}}</li>
 <li>{{htmlattrxref("contenteditable")}} グローバル属性</li>
 <li><a href="/ja/docs/Mozilla/Projects/Midas">Midas</a> (スクリプトで操作可能なテキストエディターコンポーネント)</li>
 <li>{{cssxref("caret-color")}} (テキスト挿入キャレットの色を設定できます)</li>
</ul>
