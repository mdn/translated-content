---
title: 'ARIA: gridcell ロール'
slug: Web/Accessibility/ARIA/Roles/Gridcell_role
tags:
  - ARIA
  - HTML
---
<p><span class="seoSummary"><a href="https://www.w3.org/TR/wai-aria-1.1/#gridcell">グリッドセル (gridcell) ロール</a>は、グリッド (<a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">grid</a>) やツリーグリッド (<a href="/ja/docs/Web/Accessibility/ARIA/Roles/Treegrid_role">treegrid</a>)  にセルを作成するために使用します。 これは、情報を表スタイルでグループ化する <a href="/ja/docs/Web/HTML/Element/td">HTML の <code>td</code> 要素</a>の機能を模倣することを意図しています。</span></p>

<pre class="brush: html">&lt;div role="gridcell"&gt;Potato&lt;/div&gt;
&lt;div role="gridcell"&gt;Cabbage&lt;/div&gt;
&lt;div role="gridcell"&gt;Onion&lt;/div&gt;
</pre>

<p><code>role="gridcell"</code> が適用されている要素は、行 (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role">row</a></code>) ロールを持つ要素の子である必要があります。</p>

<pre class="brush: html">&lt;div role="row"&gt;
  &lt;div role="gridcell"&gt;Jane&lt;/div&gt;
  &lt;div role="gridcell"&gt;Smith&lt;/div&gt;
  &lt;div role="gridcell"&gt;496-619-5098&lt;/div&gt;
  …
&lt;/div&gt;
</pre>

<p>ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA を追加する代わりにネイティブな HTML を使用することです。 次のように、代わりに、ネイティブな <a href="/ja/docs/Web/HTML/Element/td">HTML の <code>td</code> 要素</a>を <a href="/ja/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code> 属性</a>と組み合わせて使用します。</p>

<pre class="brush: html">&lt;td&gt;Potato&lt;/td&gt;
&lt;td&gt;Cabbage&lt;/td&gt;
&lt;td&gt;Onion&lt;/td&gt;</pre>

<h2 id="Description">説明</h2>

<h3 id="gridcells_with_dynamically_added_hidden_or_removed_rows_and_columns">行と列が動的に追加、非表示、または削除されるグリッドセル</h3>

<p><code>role="gridcell"</code> が適用されている要素は、表、グリッド、またはツリーグリッドに行や列を動的に追加、非表示、または削除する機能がある場合、ARIA を使用して表スタイルのグループ化における順序を説明する必要があります。</p>

<p><code>aria-colindex</code> を使用して、列の並びでのグリッドセル (<code>gridcell</code>) の順序を説明し、<code>aria-rowindex</code> を使用して、行の並びでのグリッドセルの順序を説明します。 <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">role="grid"</a></code> が適用された親要素で <code>aria-colcount</code> と <code>aria-rowcount</code> を使用して、列または行の総数を設定します。</p>

<p>次のサンプルコードは、3 番目と 4 番目の列が削除された情報の表スタイルでのグループ化を示しています。 <code>aria-colindex</code> は行の位置を説明するために使用されており、支援技術を使用している人が特定の行が削除されたことを推測できるようにします。 </p>

<pre class="brush: html">&lt;div role="grid" aria-colcount="6"&gt;
  &lt;div role="rowgroup"&gt;
    &lt;div role="row"&gt;
      &lt;div role="columnheader" aria-colindex="1"&gt;First name&lt;/div&gt;
      &lt;div role="columnheader" aria-colindex="2"&gt;Last name&lt;/div&gt;
      &lt;div role="columnheader" aria-colindex="5"&gt;City&lt;/div&gt;
      &lt;div role="columnheader" aria-colindex="6"&gt;Zip&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div role="rowgroup"&gt;
    &lt;div role="row"&gt;
      &lt;div role="gridcell" aria-colindex="1"&gt;Debra&lt;/div&gt;
      &lt;div role="gridcell" aria-colindex="2"&gt;Burks&lt;/div&gt;
      &lt;div role="gridcell" aria-colindex="5"&gt;New York&lt;/div&gt;
      &lt;div role="gridcell" aria-colindex="6"&gt;14127&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  …
&lt;/div&gt;
</pre>

<h3 id="Describing_the_position_of_gridcells_when_the_overall_structure_is_unknown">全体的な構造が不明な場合のグリッドセルの位置の説明</h3>

<p>コンテンツを表スタイルでグループ化することで列と行に関する情報が提供されない場合、グリッドセルの位置は、<code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute">aria-describedby</a></code> を使用してプログラムで説明する必要があります。 <code>aria-describedby</code> に提供される <code><a href="/ja/docs/Web/HTML/Global_attributes/id">id</a></code> は、行と列を意図する親要素に対応している必要があります。</p>

<p><code>aria-describedby</code> を介して適用された行ヘッダー (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowheader_role">rowheader</a></code>) ロールまたは列ヘッダー (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Columnheader_role">columnheader</a></code>) ロールを持つ親要素を参照することにより、支援技術は、グリッドセル (<code>gridcell</code>) 要素とコンテンツを表スタイルでグループ化した残りとの位置と関係を理解できます。</p>

<h3 id="Interactive_grids_and_treegrids">インタラクティブなグリッドとツリーグリッド</h3>

<h4 id="Editable_cells">編集可能なセル</h4>

<p><code>td</code> 要素とグリッドセル (<code>gridcell</code>) ロールが適用された要素の両方を編集可能にして、スプレッドシートの編集と同様の機能を模倣することができます。 これは、HTML の <a href="/ja/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code> 属性</a>を適用することによって行われます。</p>

<pre class="brush: html">&lt;td contenteditable="true"&gt;Notes&lt;/td&gt;

&lt;div role="gridcell" contenteditable="true"&gt;Item cost&lt;/div&gt;
</pre>

<p><code>contenteditable</code> は、適用される要素を <kbd>Tab</kbd> キーでフォーカス可能にします。 グリッドセルが条件付きで編集が禁止されている状態に切り替わる場合は、グリッドセル要素で <code><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-readonly_attribute">aria-readonly</a></code> を切り替えます。</p>

<h4 id="Expandable_cells">展開可能なセル</h4>

<p>ツリーグリッド (<a href="/ja/docs/Web/Accessibility/ARIA/Roles/Treegrid_role">treegrid</a>) では、<code>aria-expanded</code> 属性を切り替えることでグリッドセルを展開可能にできます。 この属性が指定されている場合、個々のグリッドセルにのみ適用されることに注意してください。</p>

<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt>grid</dt>
 <dd>
 <p>親要素が情報を表スタイルまたはツリースタイルでグループ化するものであることを伝えます。</p>
 </dd>
 <dt>row</dt>
 <dd>
 <p>グリッドセル (<code>gridcell</code>) が情報の表スタイルでのグループ化による行の一部であることを伝えるために必要です。</p>
 </dd>
 <dt>columnheader</dt>
 <dd>
 <p>どの要素が関連する列ヘッダーであるかを指定します。</p>
 </dd>
 <dt>aria-colindex</dt>
 <dd>
 <p>情報を表スタイルでグループ化した列の残りの部分に対する要素の位置を識別します。</p>
 </dd>
 <dt>rowheader</dt>
 <dd>どの要素が関連する行ヘッダーであるかを指定します。</dd>
 <dt>aria-rowindex</dt>
 <dd>
 <p>情報を表スタイルでグループ化した行の残りの部分に対する要素の位置を識別します。</p>
 </dd>
</dl>

<h3 id="Examples">例</h3>

<p>次の例では、情報を表スタイルでグループ化したものを作成します。</p>

<pre class="brush: html">&lt;h3 id="table-title"&gt;Jovian gas giant planets&lt;/h3&gt;
&lt;div role="grid" aria-describedby="table-title"&gt;
  &lt;div role="rowgroup"&gt;
    &lt;div role="row"&gt;
      &lt;div role="columnheader"&gt;Name&lt;/div&gt;
      &lt;div role="columnheader"&gt;Diameter (km)&lt;/div&gt;
      &lt;div role="columnheader"&gt;Length of day (hours)&lt;/div&gt;
      &lt;div role="columnheader"&gt;Distance from Sun (10&lt;sup&gt;6&lt;/sup&gt;km)&lt;/div&gt;
      &lt;div role="columnheader"&gt;Number of moons&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div role="rowgroup"&gt;
    &lt;div role="row"&gt;
      &lt;div role="gridcell"&gt;Jupiter&lt;/div&gt;
      &lt;div role="gridcell"&gt;142,984&lt;/div&gt;
      &lt;div role="gridcell"&gt;9.9&lt;/div&gt;
      &lt;div role="gridcell"&gt;778.6&lt;/div&gt;
      &lt;div role="gridcell"&gt;67&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div role="rowgroup"&gt;
    &lt;div role="row"&gt;
      &lt;div role="gridcell"&gt;Saturn&lt;/div&gt;
      &lt;div role="gridcell"&gt;120,536&lt;/div&gt;
      &lt;div role="gridcell"&gt;10.7&lt;/div&gt;
      &lt;div role="gridcell"&gt;1433.5&lt;/div&gt;
      &lt;div role="gridcell"&gt;62&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h2 id="Accessibility_concerns">アクセシビリティに関する懸念</h2>

<p>グリッドセル (<code>gridcell</code>) および特定のグリッドセル (<code>gridcell</code>) 関連の ARIA のロールとプロパティのサポートは、支援技術ではサポートが不十分です。 可能であれば、代わりに<a href="/ja/docs/Web/HTML/Element/table">ネイティブな HTML の表のマークアップ</a>を利用してください。</p>

<h2 id="Best_practices">ベストプラクティス</h2>

<p>ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA のロール、ステート、プロパティを追加してアクセス可能にする代わりに、ネイティブな HTML を使用することです。 そのため、ARIA と JavaScript を使用して表の形態と機能を再作成するのではなく、<a href="/ja/docs/Web/HTML/Element/table">ネイティブな HTML の表のマークアップ</a>を利用することをお勧めします。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/Element/table">表要素</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Grid_Role">ARIA: grid ロール</a></li>
 <li><a href="http://www.maxability.co.in/wai-aria-overview/grid-role/">Grid Role - Maxability</a></li>
 <li><a href="/ja/docs/Web/HTML/Element/tr">表の行要素</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Row_Role">ARIA: row ロール</a></li>
 <li><a href="http://www.maxability.co.in/wai-aria-overview/row-role/">Row Role - Maxability</a></li>
 <li><a href="http://www.maxability.co.in/2018/09/aria-rowcount-property/">aria-rowcount - Maxability</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role">ARIA: rowgroup ロール</a></li>
 <li><a href="http://www.maxability.co.in/wai-aria-overview/rowgroup-role/">Rowgroup Role - Maxability</a></li>
 <li><a href="/ja/docs/Web/HTML/Element/th">表のヘッダー要素</a></li>
 <li><a href="http://www.maxability.co.in/wai-aria-overview/columnheader-role/">Columnheader - Maxability</a></li>
 <li><a href="http://www.maxability.co.in/2017/07/aria-colcount-property/">aria-colcount - Maxability</a></li>
 <li><a href="/ja/docs/Web/HTML/Element/td">表のデータセル要素</a></li>
 <li><a href="https://www.w3.org/TR/wai-aria-1.1/#gridcell">gridcell: Accessible Rich Internet Applications (WAI-ARIA) 1.1</a></li>
 <li><a href="http://www.maxability.co.in/wai-aria-overview/gridcell-role/">Gridcell Role - Maxability</a></li>
</ul>

<section id="Quick_links">
  <ol>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
  </ol>
</section>