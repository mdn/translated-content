---
title: 'ARIA: table ロール'
slug: Web/Accessibility/ARIA/Roles/Table_Role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Table_Role
---
<div>\{{ariaref}}</div>

<p>ARIA の role 属性の table 値は、このロールを含む要素を、ネイティブの {{htmlelement("table")}} HTML 要素と同様に、行と列に配置されたデータを含む非インタラクティブな表構造を持つものとして識別します。</p>

<pre class="brush: html">&lt;div role="table" aria-label="意味論的な表の要素" aria-describedby="semantic_table_desc"&gt;
  &lt;div id="semantic_table_desc"&gt;ARIA の table ロールの代わりに使用する意味論的な要素&lt;/div&gt;
  &lt;div role="rowgroup"&gt;
     &lt;div role="row"&gt;
       &lt;span role="columnheader"&gt;ARIA の table ロール&lt;/span&gt;
       &lt;span role="columnheader"&gt;意味論的な要素&lt;/span&gt;
     &lt;/div&gt;
   &lt;/div&gt;
   &lt;div role="rowgroup"&gt;
    &lt;div role="row"&gt;
       &lt;span role="cell"&gt;table&lt;/span&gt;
       &lt;span role="cell"&gt;table&lt;/span&gt;
    &lt;/div&gt;
    &lt;div role="row"&gt;
      &lt;span role="cell"&gt;rowgroup&lt;/span&gt;
      &lt;span role="cell"&gt;thead, tbody, or tfoot &lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h2 id="Description" name="Description">説明</h2>

<p><code>role="table"</code> を持つ要素はセルを含む行を持つ静的な表構造です。 表の個々のセル内のウィジェットはインタラクティブになることがありますが、セルはフォーカス可能または選択可能ではありません。 可能な限りネイティブの HTML {{htmlelement("table")}} 要素を使用することを強くお勧めします。</p>

<div class="warning">
<p>表が選択状態を維持している場合、2次元ナビゲーションを使用している場合、またはユーザーがセルの順序を並べ替えることができる場合は、代わりにグリッド（<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">grid</a></code>）またはツリーグリッド（<code><a href="/ja/docs/">treegrid</a></code>）を使用します。</p>
</div>

<p>ARIA の表を作成するには、<code>role="table"</code> をコンテナ要素に追加します。 そのコンテナ内では、各行に <code>role="row"</code> を設定し、子セルを含ませます。 各セルには、列ヘッダー（<code>columnheader</code>）、行ヘッダー（<code>rowheader</code>）、または単なるセル（<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Cell_Role">cell</a></code>）のいずれかのロールがあります。 行は、表の子になることも、行グループ（<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">rowgroup</a></code>）内になることもあります。</p>

<p>表のキャプションは、<code>aria-labelledby</code>、<code>aria-label</code>、または <code>aria-describeby</code> によって定義できます。 {{htmlelement("tbody")}}、{{htmlelement("thead")}}、{{htmlelement("tr")}}、{{htmlelement("th")}}、{{htmlelement("td")}} など、他のすべての意味論的な表の要素は、<code>rowgroup</code>、<code>row</code>、<code>columnheader</code>、<code>cell</code> などの関連するロールを介して追加する必要があります。</p>

<p>表にソート可能な列または行が含まれる場合は、<code>aria-sort</code> 属性をヘッダーのセル要素に追加する必要があります（表自体ではありません）。 ある行または列が隠されている場合は、それぞれのセルの <code>aria-colindex</code> または <code>aria-rowindex</code> とともに、それぞれ列または行の総数を示す <code>aria-colcount</code> または <code>aria-rowcount</code> を含める必要があります。 <code>aria-colindex</code> または <code>aria-rowindex</code> は、それぞれ行または列内のセルの位置に設定します。 表に複数行または複数列にわたるセルが含まれる場合は、<code>aria-rowspan</code> または <code>aria-colspan</code> も含める必要があります。 すべての支援技術でサポートされているすべての関連する意味論的な要素および属性と共に、{{htmlelement("table")}} 要素を単純に使用する方がはるかに簡単です。</p>

<p>表構造を持つインタラクティブなウィジェットを作成するには、代わりにグリッドパターンを使用してください。 インタラクションが個々のセルの選択状態を提供する場合、左から右へ、上から下へのナビゲーションを提供する場合、またはユーザーインターフェイスでセルの順序の並べ替えやドラッグアンドドロップなどの個々のセルの順序の変更を許可する場合、代わりに <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">grid</a></code> または <code><a href="/ja/docs/">treegrid</a></code> を使用してください。</p>

<div class="note">
<p><strong>注</strong>: 可能な限りネイティブの <a href="/ja/docs/Learn/HTML/Tables/Advanced">HTML の表要素</a>を使用することを強くお勧めします。</p>
</div>

<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties" name="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">role="rowgroup"</a></dt>
 <dd>表のオプションの子である行グループは、{{htmlelement("thead")}}、{{htmlelement("tbody")}}、および {{htmlelement("tfoot")}} と同様に、行のグループをカプセル化します。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role">role="row"</a></dt>
 <dd>表内の行、およびオプションで行グループ（<code>rowgroup</code>）内の行、つまり1つ以上のセル（<code>cell</code>）、列ヘッダー（<code>columnheader</code>）、または行ヘッダー（<code>rowheader</code>）のコンテナです。</dd>
 <dt>aria-describedby 属性</dt>
 <dd>値として、表のキャプションとして機能する要素の <code>id</code> を取ります。</dd>
 <dt>aria-label 属性</dt>
 <dd><code>aria-label</code> は、表にアクセス可能な名前を提供します。</dd>
 <dt>aria-colcount 属性</dt>
 <dd>
 <p>この属性は、ある列が常に DOM に存在しない場合にのみ必要です。 全表の列数を明示的に示します。 値を全表の列の総数に設定します。 不明な場合は、<code>aria-colcount="-1"</code> を設定してください。</p>
 </dd>
 <dt>aria-rowcount 属性</dt>
 <dd>この属性は、DOM ノードの数を最小限に抑えるために行を再利用するスクロール可能な表など、ある行が常に DOM に存在しない場合にのみ必要です。 全表の行数を明示的に示します。 値を全表の行の総数に設定します。 不明な場合は、<code>aria-rowcount="-1"</code> を設定してください。</dd>
</dl>

<h3 id="Keyboard_Interactions" name="Keyboard_Interactions">キーボードインタラクション</h3>

<p>無し</p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<dl>
</dl>

<p>無し。 ソート可能な列については、 <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Columnheader_Role">columnheader</a></code> ロールを参照してください。</p>

<div class="note">
<p>ARIA の最初のルールは、要素を再定義し、ARIA のロール、ステート、プロパティを<strong>追加して</strong>アクセス可能にするのではなく、すでに組み込まれている意味論と挙動を持つネイティブな機能を使用できることです。 可能な限り、ARIA の <code>table</code> ロールの代わりに HTML の {{htmlelement("table")}} 要素を使用してください。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: html">&lt;div role="table" aria-label="意味論的な要素" aria-describedby="semantic_elements_table_desc" aria-rowcount="81"&gt;
  &lt;div id="semantic_elements_table_desc"&gt;ARIA のロールの代わりに使用する意味論的な要素&lt;/div&gt;
  &lt;div role="rowgroup"&gt;
     &lt;div role="row"&gt;
       &lt;span role="columnheader" aria-sort="none"&gt;ARIA のロール&lt;/span&gt;
       &lt;span role="columnheader" aria-sort="none"&gt;意味論的な要素&lt;/span&gt;
     &lt;/div&gt;
   &lt;/div&gt;
   &lt;div role="rowgroup"&gt;
    &lt;div role="row" aria-rowindex="11"&gt;
       &lt;span role="cell"&gt;header&lt;/span&gt;
       &lt;span role="cell"&gt;h1&lt;/span&gt;
    &lt;/div&gt;
    &lt;div role="row"  aria-rowindex="16"&gt;
      &lt;span role="cell"&gt;header&lt;/span&gt;
      &lt;span role="cell"&gt;h6&lt;/span&gt;
    &lt;/div&gt;
    &lt;div role="row"  aria-rowindex="18"&gt;
      &lt;span role="cell"&gt;rowgroup&lt;/span&gt;
      &lt;span role="cell"&gt;thead&lt;/span&gt;
    &lt;/div&gt;
    &lt;div role="row"  aria-rowindex="24"&gt;
      &lt;span role="cell"&gt;term&lt;/span&gt;
      &lt;span role="cell"&gt;dt&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<p>上記は表の一部です。 <code>aria-rowcount</code> プロパティで示されるように、全表には81のエントリがありますが、現在表示されているのは4つだけです。 列ヘッダーの <code>aria-sort</code> プロパティで示されるように、列はソート可能ですが、現在はソートされていません。</p>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<p>データ表構造には、{{htmlelement("table")}}、{{htmlelement("tbody")}}、{{htmlelement("thead")}}、{{htmlelement("tr")}}、{{htmlelement("th")}}、{{htmlelement("td")}} などのみを使用します。 アクセシビリティを確保するために ARIA のロールを追加し、例えば CSS で表のネイティブな意味論を削除するべきです。 ARIA の <code>table</code> ロールの関連するユースケースは、<code>display: grid</code> など、CSS の {{cssxref("display")}} プロパティによって表のネイティブな意味論がオーバーライドされる場合です。 この場合、ARIA の <code>table</code> ロールを使用して意味論を戻すことができます。</p>

<h3 id="Added_benefits" name="Added_benefits">追加された利点</h3>

<p>無し</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#table","ARIA Table Role")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
  <tr>
   <td>{{SpecName("ARIA Authoring Practices","#table","ARIA Table Role")}}</td>
   <td>{{Spec2('ARIA Authoring Practices')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/HTML/Tables/Advanced">HTML の表要素</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">ARIA: grid ロール</a></li>
</ul>
