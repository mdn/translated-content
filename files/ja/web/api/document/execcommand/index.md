---
title: Document.execCommand()
slug: Web/API/Document/execCommand
tags:
  - API
  - DOM
  - Document
  - Reference
  - execCommand
  - エディター
  - メソッド
translation_of: Web/API/Document/execCommand
---
<div>{{ApiRef("DOM")}}{{Obsolete_header}}</div>

<p><span class="seoSummary">HTML 文書が <code><a href="/ja/docs/Web/API/Document/designMode">designMode</a></code> に切り替わっていると、その <code>document</code> オブジェクトは <strong><code>execCommand</code></strong> メソッドを公開して、<a href="/ja/docs/Web/HTML/Element/input">フォーム入力欄</a>や <code><a href="/ja/docs/Web/HTML/Global_attributes/contenteditable">contentEditable</a></code> を持った要素など、現在編集可能な領域を操作するためのコマンドが実行できるようにします。</span></p>

<p>多くのコマンドは、文書の<a href="/ja/docs/Web/API/Selection">選択範囲</a>に対して影響を及ぼしますが (太字、イタリック、など)、他にも新しい要素の挿入 (リンクの追加) や行全体に影響するもの (字下げ) もあります。 <code>contentEditable</code> を使用した場合、 <code>execCommand()</code> は現在アクティブな編集可能要素に影響を及ぼします。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>document</var>.execCommand(<var>aCommandName</var>, <var>aShowDefaultUI</var>, <var>aValueArgument</var>)
</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref('Boolean')}} で、コマンドが対応していないか無効であれば <code>false</code> になります。</p>

<div class="note">
<p><strong>メモ</strong>: ユーザーの操作の中で行われた場合にのみ <code>true</code> を返します。コマンドを呼び出す前、ブラウザーが対応しているかどうかを検査するために、返値を使用しないでください。</p>
</div>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>aCommandName</var></code></dt>
 <dd>{{domxref("DOMString")}} で、実行するコマンドの名前を指定します。使用可能なコマンドの一覧は、{{anch("Commands", "コマンド")}}の節をご覧ください。</dd>
 <dt><code><var>aShowDefaultUI</var></code></dt>
 <dd>{{jsxref("Boolean")}} で、既定のユーザインターフェースを表示するかどうかを指示します。 Mozilla では未実装です。</dd>
 <dt><code><var>aValueArgument</var></code></dt>
 <dd>追加の引数を必要とするコマンドの引数 (例えば、 <code>insertImage</code> では挿入する画像の URL)。引数の値は {{domxref("DOMString")}} です。引数が不要な場合は <code>null</code> を指定します。</dd>
</dl>

<h3 id="Commands" name="Commands">コマンド</h3>

<dl>
 <dt><code>backColor</code></dt>
 <dd>文書の背景色を変更します。 <code>styleWithCss</code> モードでは、文書ではなく含まれているブロックの背景色に影響します。この場合、引数として {{cssxref("&lt;color&gt;")}} 値の文字列を渡す必要があります。ただし、Internet Explorer ではテキストの背景色を設定するために使用します。</dd>
 <dt><code>bold</code></dt>
 <dd>選択範囲または挿入位置の太字のオンとオフを切り替えます。 Internet Explorer は {{HTMLElement("b")}} タグの代わりに {{HTMLElement("strong")}} タグを使用します。</dd>
 <dt><code>ClearAuthenticationCache</code></dt>
 <dd>キャッシュからすべての資格情報をクリアします。</dd>
 <dt><code>contentReadOnly</code></dt>
 <dd>コンテンツドキュメントを読み取り専用または編集可能にします。引数として true または false の真偽値が必要です。 (Internet Explorer は対応していません。)</dd>
 <dt><code>copy</code></dt>
 <dd>現在の選択範囲をクリップボードにコピーします。この動作が有効になる条件は、ブラウザーによって様々であり、時の経過により発展する可能性があります。このコマンドが使用可能かどうかは、ブラウザーの互換性のセクションで確認してください。</dd>
 <dt><code>createLink</code></dt>
 <dd>選択範囲からハイパーリンクを作成しますが、選択範囲が<em>ある</em>ときだけです。ハイパーリンクの <code>href</code> の引数として、 <a href="/ja/docs/Archive/Mozilla/URIs_and_URLs">URI</a> が必要です。 URI は少なくとも1文字を含む必要があり、空白文字でもかまいません。 (Internet Explorer は <code>null</code> 値でリンクを作成できます。)</dd>
 <dt><code>cut</code></dt>
 <dd>現在の選択範囲を除去して、クリップボードにコピーします。いつこの動作が有効になるかはブラウザーによって様々であり、条件は時期によって変化しています。使用方法の詳細は<a href="#Browser_compatibility">ブラウザーの互換性</a>で確認してください。</dd>
 <dt><code>decreaseFontSize</code></dt>
 <dd>選択範囲の前後または挿入位置に {{HTMLElement("small")}} タグを追加します。(Internet Explorer では対応していません。)</dd>
 <dt><code>defaultParagraphSeparator</code></dt>
 <dd>編集可能なテキスト領域に新しい段落が作成された時の、段落区切りを変更します。詳しくは<a href="/ja/docs/Web/Guide/HTML/Editable_content#Differences_in_markup_generation">マークアップ生成の違い</a>を参照してください。</dd>
 <dt><code>delete</code></dt>
 <dd>現在の選択範囲を削除します。</dd>
 <dt><code>enableAbsolutePositionEditor</code></dt>
 <dd>絶対配置の要素を移動させるためのグラバーを有効化または無効化します。 Firefox 63 ベータ/開発版では、既定で無効です。 ({{bug(1449564)}})</dd>
 <dt><code>enableInlineTableEditing</code></dt>
 <dd>表の行/列の挿入・削除コントロールを有効または無効にします。 Firefox 63 ベータ/開発版では、既定で無効です。 ({{bug(1449564)}})</dd>
 <dt><code>enableObjectResizing</code></dt>
 <dd>画像、表、絶対配置の要素、などの大きさの変更が可能なオブジェクトにおいて、大きさ変更用のハンドルを有効化または無効化します。 Firefox 63 ベータ/開発版では、既定で無効です。 ({{bug(1449564)}})</dd>
 <dt><code>fontName</code></dt>
 <dd>選択範囲または挿入位置のフォント名を変更します。引数としてフォント名の文字列 (<code>"Arial"</code> など) が必要です。</dd>
 <dt><code>fontSize</code></dt>
 <dd>選択範囲または挿入位置のフォントサイズを変更します。引数として <code>1</code>-<code>7</code> の整数値が必要です。</dd>
 <dt><code>foreColor</code></dt>
 <dd>選択範囲または挿入位置のフォント色を変更します。引数として16進表記で色の値の文字列が必要です。</dd>
 <dt><code>formatBlock</code></dt>
 <dd>現在の選択範囲を含む行の前後に HTML ブロックレベル要素を追加し、すでに存在する場合は、その行を含むブロック要素に置き換えます (Firefox では {{HTMLElement("blockquote")}} は例外です。 — これはブロック要素を囲みます)。引数としてタグ名の文字列が必要です。実質的にすべてのブロックレベル要素を利用することができます。 (Internet Explorer および Edge は見出しタグ <code>H1</code>–<code>H6</code>, <code>ADDRESS</code>, <code>PRE</code> のみに対応しており、 <code>"&lt;H1&gt;"</code> のように山かっこで囲む必要があります。)</dd>
 <dt><code>forwardDelete</code></dt>
 <dd><a href="https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%AB">カーソル</a>位置より前の文字を 1 文字削除します。これは、 Windows のキーボードで Delete キーを押すのと同じ動作です。</dd>
 <dt><code>heading</code></dt>
 <dd>選択範囲または挿入位置の行の周りに見出し要素を追加します。引数としてタグ名の文字列 (つまり <code>"H1"</code> や <code>"H6"</code>) が必要です。 (Internet Explorer や Safari は対応していません。)</dd>
 <dt><code>hiliteColor</code></dt>
 <dd>選択範囲または挿入位置の背景色を変更します。引数として color 値の文字列が必要です。この機能は <code>useCSS</code> を <code>true</code> にしないと使えません。(Internet Explorer では対応していません。)</dd>
 <dt><code>increaseFontSize</code></dt>
 <dd>選択範囲または挿入位置に {{HTMLElement("big")}} タグを追加します。(Internet Explorer では対応していません。)</dd>
 <dt><code>indent</code></dt>
 <dd>選択範囲または挿入位置を含む行を字下げします。Firefox では、選択範囲が字下げレベルの異なる複数行にわたる場合、選択範囲内の最も字下げの少ない行のみが字下げされます。</dd>
 <dt><code>insertBrOnReturn</code></dt>
 <dd>Enter キーで {{HTMLElement("br")}} 要素を挿入するか現在のブロック要素を二分割するかを制御します。 (Internet Explorer では対応していません。)</dd>
 <dt><code>insertHorizontalRule</code></dt>
 <dd>挿入位置に {{HTMLElement("hr")}} 要素を挿入するか、選択範囲を置き換えるかします。</dd>
 <dt><code>insertHTML</code></dt>
 <dd>挿入位置に HTML 文字列を挿入します (選択範囲は削除されます)。引数として正しい HTML 文字列が必要です。(Internet Explorer では対応していません。)</dd>
 <dt><code>insertImage</code></dt>
 <dd>挿入位置に画像を挿入します (選択範囲は削除されます)。引数として画像の <code>src</code> のための URL 文字列が必要です。この文字列の要求事項は、 <code>createLink</code> と同じです。</dd>
 <dt><code>insertOrderedList</code></dt>
 <dd>選択範囲または挿入位置に<a href="/ja/docs/Web/HTML/Element/ol">番号付き順序付きリスト</a>を生成します。</dd>
 <dt><code>insertUnorderedList</code></dt>
 <dd>選択範囲または挿入位置<a href="/ja/docs/Web/HTML/Element/ul">行頭記号付き順序なしリスト</a>を生成します。</dd>
 <dt><code>insertParagraph</code></dt>
 <dd>選択範囲の前後または現在の行に<a href="/ja/docs/Web/HTML/Element/p">段落</a>を挿入します。(Internet Explorer は挿入位置に段落を挿入し、現在の選択範囲を削除します。)</dd>
 <dt><code>insertText</code></dt>
 <dd>挿入位置に与えられたプレーンテキストを挿入します (選択範囲は削除されます)。</dd>
 <dt><code>italic</code></dt>
 <dd>選択範囲または挿入位置のイタリック体のオンとオフを切り替えます。(Internet Explorer は {{HTMLElement("i")}} 要素ではなく、 {{HTMLElement("em")}} 要素を使用します。)</dd>
 <dt><code>justifyCenter</code></dt>
 <dd>選択範囲または挿入位置を中央揃えにします。</dd>
 <dt><code>justifyFull</code></dt>
 <dd>選択範囲または挿入位置を両端揃えにします。</dd>
 <dt><code>justifyLeft</code></dt>
 <dd>選択範囲または挿入位置を左寄せにします。</dd>
 <dt><code>justifyRight</code></dt>
 <dd>選択範囲または挿入位置を右寄せにします。</dd>
 <dt><code>outdent</code></dt>
 <dd>選択範囲または挿入位置を含む行の字下げを戻します。</dd>
 <dt><code>paste</code></dt>
 <dd>クリップボードのコンテンツを挿入位置に貼り付け (ペースト) します (現在の選択範囲は置き換えられます)。ウェブコンテンツでは無効です。 [1] を参照。</dd>
 <dt><code>redo</code></dt>
 <dd>前回の undo コマンドを元に戻します。</dd>
 <dt><code>removeFormat</code></dt>
 <dd>現在の選択範囲からすべての書式を削除します。</dd>
 <dt><code>selectAll</code></dt>
 <dd>編集可能領域のすべてのコンテンツを選択します。</dd>
 <dt><code>strikeThrough</code></dt>
 <dd>選択範囲または挿入位置の取り消し線のオンとオフを切り替えます。</dd>
 <dt><code>subscript</code></dt>
 <dd>選択範囲または挿入位置の<a href="/ja/docs/Web/HTML/Element/sub">下付き文字</a>のオンとオフを切り替えます。</dd>
 <dt><code>superscript</code></dt>
 <dd>選択範囲または挿入位置の<a href="/ja/docs/Web/HTML/Element/sup">上付き文字</a>のオンとオフを切り替えます。</dd>
 <dt><code>underline</code></dt>
 <dd>選択範囲または挿入位置の<a href="/ja/docs/Web/HTML/Element/u">下線</a>のオンとオフを切り替えます。</dd>
 <dt><code>undo</code></dt>
 <dd>最後に実行したコマンドを取り消します。</dd>
 <dt><code>unlink</code></dt>
 <dd>選択されたハイパーリンクから<a href="/ja/docs/Web/HTML/Element/a">アンカー要素</a>を削除します。</dd>
 <dt><code>useCSS</code> {{Deprecated_inline}}</dt>
 <dd>生成するマークアップに HTML タグと CSS のどちらを使用するかを切り替えます。引数として true または false の真偽値が必要です。</dd>
 <dd>メモ: この引数は論理的に逆で (つまり、 false で CSS が使用され、true で HTML が使用される)、 Internet Explorer では対応していません。これは <em>styleWithCSS</em> に置き換えられ、非推奨になりました。</dd>
 <dt><code>styleWithCSS</code></dt>
 <dd><em>useCSS</em> コマンドを置き換えるものです。 <code>true</code> はマークアップ時に <em>style</em> 属性が生成または変更され、 false では書式要素が生成されます。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>CodePen に<a href="https://codepen.io/chrisdavidmills/full/gzYjag/">使用方法</a>の例があります。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="spectable standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td><a href="https://w3c.github.io/editing/ActiveDocuments/execCommand.html#execcommand()">execCommand</a></td>
   <td>非公式の草稿</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.execCommand")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("HTMLElement.contentEditable")}}</li>
 <li>{{domxref("document.designMode")}}</li>
 <li><a href="/ja/docs/Rich-Text_Editing_in_Mozilla">Mozilla におけるリッチテキスト編集</a></li>
 <li><a href="https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md">Scribe's "Browser Inconsistencies" documentation</a> with bugs related to <code>document.execCommand</code>.</li>
</ul>
