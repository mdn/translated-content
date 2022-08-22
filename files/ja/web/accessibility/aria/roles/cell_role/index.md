---
title: 'ARIA: cell ロール'
slug: Web/Accessibility/ARIA/Roles/Cell_Role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Cell_Role
---
<p>ARIA の <em>role</em> 属性の <code>cell</code> 値は、要素を列ヘッダーや行ヘッダーの情報を含まない表形式コンテナー内のセルとして識別します。 サポートされるには、セルが行 (<code>row</code>) ロールを持つ要素内にネストされている必要があります。</p>

<pre class="brush: html">&lt;div role="row"&gt;
  &lt;span role="cell"&gt;フランス&lt;/span&gt;
  &lt;span role="cell"&gt;6700 万&lt;/span&gt;
&lt;/div&gt;
</pre>

<p>上のセルの書き方のより良い、より意味論的な方法は、意味論的な <code>&lt;td&gt;</code> 要素を使うことです。</p>

<pre class="brush: html">&lt;tr role="row"&gt;
  &lt;td role="cell"&gt;フランス&lt;/td&gt;
  &lt;td role="cell"&gt;6700 万&lt;/td&gt;
&lt;/tr&gt;
</pre>

<h2 id="Description" name="Description">説明</h2>

<p><code>role="cell"</code> を持つ要素は、静的な表形式構造内のグリッド (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">grid</a></code>)、表 (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role">table</a></code>)、またはツリーグリッド (<code>treegrid</code>) 内の、任意で行グループ (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">rowgroup</a></code>) 内の、行内のセルです。 可能であれば、ネイティブな <a href="/ja/docs/Web/HTML/Element/td">HTML <code>&lt;td&gt;</code></a> 要素を使用することを強く推奨します。</p>

<p><code>role="row"</code> を持つコンテナー要素内に、<code>role="cell"</code> を持つ各要素をネストしなければなりません (MUST)。 この行は、<code>role="rowgroup"</code> を持つ要素内にネストすることができ、グリッド (<code>grid</code>)、表 (<code>table</code>)、ツリーグリッド (<code>treegrid</code>) 内にネストするべきです。 セルに列ヘッダーまたは行ヘッダーの情報が含まれている場合は、それぞれ列ヘッダー (<code>columnheader</code>) ロールや行ヘッダー (<code>rowheader</code>) ロールを使用します。 セルにヘッダー情報が含まれておらず、グリッド (<code>grid</code>) やツリーグリッド (<code>treegrid</code>) にネストされている場合、グリッドセル (<code>gridcell</code>) ロールがより適切な場合があります。</p>

<p>セルには、<code>aria-colindex</code>、<code>aria-colspan</code>、<code>aria-rowindex</code>、<code>aria-rowspan</code> など、表形式データ構造内のセルの位置を明確にする多数のプロパティ属性を含めることができます。</p>

<div class="note">
<p>可能であれば、ネイティブな HTML 表要素 (<code>&lt;table&gt;</code>) を、表の行要素 (<code>&lt;tr&gt;</code>) および表のセル要素 (<code>&lt;td&gt;</code>) と共に使用することを強く推奨します。</p>
</div>

<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties" name="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<h4 id="Context_Roles" name="Context_Roles">コンテキストロール</h4>

<dl>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role">role="row"</a></dt>
 <dd><code>role="row"</code> の要素は、表形式構造内のセルの行です。 行には、グリッド (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">grid</a></code>)、表 (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role">table</a></code>)、ツリーグリッド (<code>treegrid</code>) 内において、そして任意で行グループ (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">rowgroup</a></code>) 内において、1つ以上のセル、グリッドセル、列ヘッダー、行ヘッダーが含まれます。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">role="rowgroup"</a></dt>
 <dd>行はセルの親として必須です。 行グループ (<code>rowgroup</code>) は、任意のコンテキスト上の行の親で、子孫となる行との間に関係を確立します。 これは、<a href="/ja/docs/Learn/HTML/Tables/Basics">HTML 表 (<code>table</code>)</a> 要素の <code>thead</code>、<code>tfoot</code>、<code>tbody</code> 要素と構造的に同等です。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Table_Role">role="table"</a></dt>
 <dd>セルを含む行を見つけることができる、グリッド (<code>grid</code>) とツリーグリッド (<code>treegrid</code>) と共に3つの可能なコンテキストのうちの1つ。 表 (<code>table</code>) は、セルを、ネイティブな HTML <code><a href="/ja/docs/Web/HTML/Element/table">&lt;table&gt;</a></code> 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として識別します。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">role="grid"</a></dt>
 <dd>セル (<code>cell</code>) とグリッドセル (<code>gridcell</code>) を含む行を見つけることができる、表 (<code>table</code>) とツリーグリッド (<code>treegrid</code>) と共に3つの可能なコンテキストのうちの1つ。 グリッド (<code>grid</code>) は、セルを、ネイティブな HTML <code><a href="/ja/docs/Web/HTML/Element/table">&lt;table&gt;</a></code> 要素と同様に、行と列に配置されたデータを含むインタラクティブかもしれない表構造の一部として識別します。</dd>
 <dt>role="treegrid"</dt>
 <dd>グリッド (<code>grid</code>) に似ていますが、ツリー (<code>tree</code>) と同じ方法で展開や折りたたみができる行があります。</dd>
</dl>

<h4 id="Subclass_Roles" name="Subclass_Roles">サブクラスロール</h4>

<dl>
 <dt>role="gridcell"</dt>
 <dd>グリッド (<code>grid</code>) やツリーグリッド (<code>treegrid</code>) 内の行内のセル。</dd>
 <dt>role="columnheader"</dt>
 <dd>列スコープを持つ HTML <code><a href="/ja/docs/Web/HTML/Element/th">&lt;th&gt;</a></code> 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、列ヘッダー (<code>columnheader</code>) ロールは、対応する列の全てのセルとの関係を確立します。</dd>
 <dt>role="rowheader"</dt>
 <dd>行スコープを持つ HTML <code><a href="/ja/docs/Web/HTML/Element/th">&lt;th&gt;</a></code> 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、行ヘッダー (<code>rowheader</code>) ロールは、対応する行の全てのセルとの関係を確立します。</dd>
</dl>

<h4 id="States_and_Properties" name="States_and_Properties">ステートとプロパティ</h4>

<dl>
 <dt>aria-colspan 属性</dt>
 <dd>HTML の <code><a href="/ja/docs/Web/HTML/Element/th">&lt;th&gt;</a></code> と <a href="/ja/docs/Web/HTML/Element/td"><code>&lt;td&gt;</code> 要素の <code>colspan</code> 属性</a>と同様に、セルにまたがる列数を定義します。</dd>
 <dt>aria-rowspan 属性</dt>
 <dd>HTML の <code><a href="/ja/docs/Web/HTML/Element/th">&lt;th&gt;</a></code> と <a href="/ja/docs/Web/HTML/Element/td"><code>&lt;td&gt;</code> 要素の <code>rowspan</code> 属性</a>と同様に、セルにまたがる行数を定義します。</dd>
 <dt>aria-colindex 属性</dt>
 <dd>
 <p><code>aria-colindex</code> 属性は、列が DOM から隠されている場合にのみ必要です。 この属性は、値として 1 から表 (<code>table</code>)、グリッド (<code>grid</code>)、ツリーグリッド (<code>treegrid</code>) 内の総列数の間の整数をとります。 <code>aria-colindex</code> は、行内の総列数に対する要素の列インデックスまたは位置を定義します。 全ての列が DOM 内にある場合、この属性は必要ありません。</p>
 </dd>
 <dt>aria-rowindex 属性</dt>
 <dd>
 <p><code>aria-rowindex</code> 属性は、行が DOM から隠されている場合にのみ必要で、現在のセルが総ての行のリスト内のどの行かを示します。 この属性は、値として 1 から表 (<code>table</code>)、グリッド (<code>grid</code>)、ツリーグリッド (<code>treegrid</code>) 内の総行数の間の整数をとり、セルの位置またはインデックスを示します。 たとえば、最初のヘッダーの最初の行のセルは <code>aria-rowindex="1"</code> と設定され、47 行目のセルは、DOM 内に全ての行が存在しないために <code>aria-rowindex</code> が必要な場合は、<code>aria-rowindex="47"</code> となるでしょう。 表示されている行が連続していて、<code>colspan</code> や <code>rowspan</code> が 1 より大きいセルがない場合、このプロパティは行の全てのセルの代わりに親の行に追加できます。</p>

 </dd>
</dl>

<h3 id="Keyboard_Interactions" name="Keyboard_Interactions">キーボードインタラクション</h3>

<p>無し</p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<p>ARIA の第一のルールは、要素を転用して、ARIA のロール、ステート、プロパティを<strong>追加</strong>してアクセス可能にするのではなく、必要としている意味論と振る舞いがすでに組み込まれているネイティブな機能を使用できる場合は、そうすることです。 可能な限り、ARIA のセル (<code>cell</code>) ロールの代わりに HTML の <code>&lt;td&gt;</code> 要素を使用してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre>&lt;div role="table" aria-label="意味論的な要素" aria-describedby="semantic_elements_table_desc" aria-rowcount="81"&gt;
  &lt;div id="semantic_elements_table_desc"&gt;ARIA のロールの代わりに使用する意味論的な要素&lt;/div&gt;
  &lt;div role="rowgroup"&gt;
     &lt;div role="row"&gt;
       &lt;span role="columnheader" aria-sort="none" aria-rowindex="1"&gt;ARIA ロール&lt;/span&gt;
       &lt;span role="columnheader" aria-sort="none" aria-rowindex="1"&gt;意味論的な要素&lt;/span&gt;
     &lt;/div&gt;
   &lt;/div&gt;
   &lt;div role="rowgroup"&gt;
    &lt;div role="row"&gt;
       &lt;span role="cell" aria-rowindex="11"&gt;header&lt;/span&gt;
       &lt;span role="cell" aria-rowindex="11"&gt;h1&lt;/span&gt;
    &lt;/div&gt;
    &lt;div role="row"&gt;
      &lt;span role="cell" aria-rowindex="16"&gt;header&lt;/span&gt;
      &lt;span role="cell" aria-rowindex="16"&gt;h6&lt;/span&gt;
    &lt;/div&gt;
    &lt;div role="row"&gt;
      &lt;span role="cell" aria-rowindex="18"&gt;rowgroup&lt;/span&gt;
      &lt;span role="cell" aria-rowindex="18"&gt;thead&lt;/span&gt;
    &lt;/div&gt;
    &lt;div role="row"&gt;
      &lt;span role="cell" aria-rowindex="24"&gt;term&lt;/span&gt;
      &lt;span role="cell" aria-rowindex="24"&gt;dt&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<p>上記は、DOM 内に 81 行のうち 5 行が存在する意味論的でない ARIA の表です。 表のヘッダー内に 1 行、表の本体内に 4 行あります。 全ての行が DOM 内にあるわけではないので、全てのセルに <code>aria-rowindex</code> プロパティを含めています。 複数の行や列にまたがるセルがない場合、<code>aria-rowindex</code> は行の個々のセルではなく行に配置されている可能性があります。</p>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<p>データ表構造には、<code>table</code>、<code>tbody</code>、<code>thead</code>、<code>tr</code>、<code>th</code>、<code>td</code> などのみを使用します。 CSS などを使用して、表のネイティブな意味論を削除しなくてはならない場合に、ARIA ロールを追加してアクセシビリティを確保できます。 ARIA の表 (<code>table</code>) ロールの関連するユースケースは、<a href="/ja/docs/Web/CSS/display#accessibility_concerns">display: grid など、CSS の display プロパティ</a>によって表のネイティブな意味論がオーバーライドされる場合です。 この場合、ARIA の表 (<code>table</code>) ロールを使用して意味論を戻すことができます。</p>

<pre>&lt;table role="table" aria-label="意味論的な要素" aria-describedby="semantic_elements_table_desc" aria-rowcount="81"&gt;
  &lt;caption id="semantic_elements_table_desc"&gt;ARIA のロールの代わりに使用する意味論的な要素&lt;/caption&gt;
  &lt;thead role="rowgroup"&gt;
     &lt;tr role="row"&gt;
       &lt;th role="columnheader" aria-sort="none" aria-rowindex="1"&gt;ARIA ロール&lt;/th&gt;
       &lt;th role="columnheader" aria-sort="none" aria-rowindex="1"&gt;意味論的な要素&lt;/th&gt;
     &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody role="rowgroup"&gt;
     &lt;tr role="row"&gt;
       &lt;td role="cell" aria-rowindex="11"&gt;header&lt;/td&gt;
       &lt;td role="cell" aria-rowindex="11"&gt;h1&lt;/td&gt;
     &lt;/tr&gt;
     &lt;tr role="row"&gt;
       &lt;td role="cell" aria-rowindex="16"&gt;header&lt;/td&gt;
       &lt;td role="cell" aria-rowindex="16"&gt;h6&lt;/td&gt;
     &lt;/tr&gt;
     &lt;tr role="row"&gt;
       &lt;td role="cell" aria-rowindex="18"&gt;rowgroup&lt;/td&gt;
       &lt;td role="cell" aria-rowindex="18"&gt;thead&lt;/td&gt;
     &lt;/tr&gt;
     &lt;tr role="row"&gt;
       &lt;td role="cell" aria-rowindex="24"&gt;term&lt;/td&gt;
       &lt;td role="cell" aria-rowindex="24"&gt;dt&lt;/td&gt;
     &lt;/tr&gt;
   &lt;/tbody&gt;
 &lt;/table&gt;</pre>

<p>上記は、表を作成する意味論的な方法です。 表のネイティブな意味論、つまり表の行が、<a href="/ja/docs/Web/CSS/display#accessibility_concerns">display プロパティ</a>などを介して変更されていない場合、ARIA ロールは必要ありません。</p>

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
   <td>{{SpecName("ARIA","#cell","ARIA Cell Role")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
  <tr>
   <td>{{SpecName("ARIA Authoring Practices","#cell","ARIA Cell Role")}}</td>
   <td>{{Spec2('ARIA Authoring Practices')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role">role="row"</a></li>
 <li><a href="/ja/docs/Web/HTML/Element/td">HTML &lt;td&gt; 要素</a></li>
 <li><a href="/ja/docs/Web/HTML/Element/th">HTML &lt;th&gt; 要素</a></li>
 <li><a href="/ja/docs/Learn/HTML/Tables/Advanced">HTML 表の高度な機能とアクセシビリティ</a></li>
 <li><a href="/ja/docs/Learn/HTML/Tables/Basics">HTML の表の基本</a></li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
