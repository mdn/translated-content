---
title: 'ARIA: tab ロール'
slug: Web/Accessibility/ARIA/Roles/Tab_Role
tags:
  - ARIA
  - ARIA Role
  - ARIA Tab
  - ARIA widget
  - Reference
translation_of: Web/Accessibility/ARIA/Roles/Tab_Role
---
<p><span class="seoSummary">ARIA のタブ (<code>tab</code>) ロールは、タブリスト (<code>tablist</code>) 内のインタラクティブな要素を示し、アクティブ化されると、関連するタブパネル (<a href="/ja/docs/Web/Accessibility/ARIA/Roles/Tabpanel_Role"><code>tabpanel</code></a>) を表示します。</span></p>

<pre class="brush: html">&lt;button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id"&gt;Tab label&lt;/button&gt;</pre>

<h2 id="Description">説明</h2>

<p>タブ (<code>tab</code>) ロールを持つ要素は、タブパネル (<code>tabpanel</code>) ロールに関連付けられた要素の可視性を制御します。 一般的なユーザーエクスペリエンスのパターンは、コンテンツ領域の上または横にある視覚的なタブのグループであり、別のタブを選択すると、コンテンツが変更され、選択したタブが他のタブよりも目立つようになります。</p>

<p>タブ (<code>tab</code>) ロールを持つ要素は、タブリスト (<code>tablist</code>) ロールを持つ要素の子であるか、タブリスト (<code>tablist</code>) の <code>aria-owns</code> プロパティの <code>id</code> 部分を持っている<em>必要があります</em>。 この組み合わせは、要素が関連要素のグループの一部であることを支援技術に識別させます。 一部の支援技術は、タブリスト (<code>tablist</code>) 内のタブ (<code>tab</code>) ロール要素の数を数えて、現在ターゲットにしているタブ (<code>tab</code>) をユーザーに通知します。 これらには、タブパネル (<code>tabpanel</code>) ロールを持つ要素を識別する <code>aria-controls</code> プロパティが含まれている<em>べきです</em>。 タブパネル (<code>tabpanel</code>) ロールを持つ要素にフォーカスがある場合、またはその子にフォーカスがある場合、タブ (<code>tab</code>) ロールを持つ接続された要素がタブリスト (<code>tablist</code>) 内のアクティブなタブであることを示します。</p>

<p>タブ (<code>tab</code>) ロールを持つ要素を操作する場合、要素が選択されているかアクティブになっているときは、<code>aria-selected</code> 属性を <code>true</code> に設定するべきです。 それ以外の場合は、<code>false</code> に設定するべきです。 タブ (<code>tab</code>) が選択されているかアクティブになっている場合、その制御されたタブパネル (<code>tabpanel</code>) では、<code>aria-expanded</code> 属性を <code>true</code> に設定し、<code>hidden</code> 属性 を <code>false</code> に設定するべきです。 それ以外の場合は、その逆になります。</p>

<h3 id="Associated_Roles_and_Attributes">関連するロールと属性</h3>

<dl>
	<dt>aria-selected</dt>
	<dd>ブール値</dd>
	<dt>aria-controls</dt>
	<dd>タブパネル (<code>tabpanel</code>) ロールを持つ要素の <code>id</code></dd>
	<dt>id</dt>
	<dd>コンテンツ</dd>
</dl>

<h3 id="Keyboard_interaction">キーボードインタラクション</h3>

<table class="standard-table">
	<thead>
		<tr>
			<th scope="col">キー</th>
			<th scope="col">アクション</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><kbd>Tab</kbd></td>
			<td>フォーカスがタブリスト (<code>tablist</code>) の外にある場合、フォーカスをアクティブなタブに移動します。 フォーカスがアクティブなタブにある場合、フォーカスをキーボードフォーカスの順序の次の要素、理想的にはアクティブなタブに関連付けられたタブパネル (<code>tabpanel</code>) に移動します。</td>
		</tr>
		<tr>
			<td><kbd>→</kbd></td>
			<td>タブリストの次のタブにフォーカスし、任意でアクティブ化します。 現在のタブがタブリストの最後のタブである場合、最初のタブをアクティブ化します。</td>
		</tr>
		<tr>
			<td><kbd>←</kbd></td>
			<td>タブリストの前のタブにフォーカスし、任意でアクティブ化します。 現在のタブがタブリストの最初のタブである場合、最後のタブをアクティブ化します。</td>
		</tr>
		<tr>
			<td><kbd>Delete</kbd></td>
			<td>許可されている場合、現在選択されているタブをタブリストから削除します。</td>
		</tr>
	</tbody>
</table>

<h3 id="Required_JavaScript_features">必要な JavaScript 機能</h3>

<div class="note">
<p>JavaScript を使用せずにタブのような機能を構築する方法はありますが、コンテンツを含むアクセス可能なタブに上記で必要とされるのと同じ機能のセットを提供する HTML と CSS のみの代替の組み合わせはありません。</p>
</div>

<h2 id="Example">例</h2>

<p>この例では、タブ (<code>tab</code>) ロールとタブリスト (<code>tablist</code>) 、そして要素とタブパネル (<code>tabpanel</code>) を組み合わせて、タブ付きコンテンツのインタラクティブなグループを作成します。 ここでは、コンテンツのグループを <code>div</code> で囲んでいます。 タブリスト (<code>tablist</code>) には、支援技術用にラベルを付けるための <code>aria-label</code> があります。 各タブ (<code>tab</code>) は、前述の属性を持つボタン (<code>button</code>) です。 最初のタブ (<code>tab</code>) には <code>tabindex=0</code> があり、後で <code>aria-selected=true</code> のタブに変更します。 すべてのタブパネル (<code>tabpanel</code>) 要素には Tab 可能にするために <code>tabindex=0</code> があり、現在アクティブな要素を除くすべてに <code>hidden</code> 属性があって、これは JavaScript で変更されます。 ボタンのスタイルを変更し、タブ (<code>tab</code>) 要素の <code><a href="/ja/docs/Web/CSS/z-index">z-index</a></code> を変更して、アクティブな要素のタブパネル (<code>tabpanel</code>) に接続しているように見せたり、非アクティブな要素がアクティブなタブパネル (<code>tabpanel</code>) の後ろにあるように見せたりする基本的なスタイルが適用されます。</p>

<pre class="brush: html">&lt;div class="tabs"&gt;
  &lt;div role="tablist" aria-label="Sample Tabs"&gt;
    &lt;button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0"&gt;
          First Tab
        &lt;/button&gt;
    &lt;button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1"&gt;
          Second Tab
        &lt;/button&gt;
    &lt;button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1"&gt;
          Third Tab
        &lt;/button&gt;
  &lt;/div&gt;
  &lt;div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1"&gt;
    &lt;p&gt;Content for the first panel&lt;/p&gt;
  &lt;/div&gt;
  &lt;div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden&gt;
    &lt;p&gt;Content for the second panel&lt;/p&gt;
  &lt;/div&gt;
  &lt;div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden&gt;
    &lt;p&gt;Content for the third panel&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<div class="hidden">
<pre class="brush: css">.tabs {
  padding: 1em;
}

[role="tablist"] {
  margin-bottom: -1px;
}

[role="tab"] {
  position: relative;
  z-index: 1;
  background: white;
  border-radius: 5px 5px 0 0;
  border: 1px solid grey;
  border-bottom: 0;
  padding: 0.2em;
}

[role="tab"][aria-selected="true"] {
  z-index: 3;
}

[role="tabpanel"] {
  position: relative;
  padding: 0 0.5em 0.5em 0.7em;
  border: 1px solid grey;
  border-radius: 0 0 5px 5px;
  background: white;
  z-index: 2;
}

[role="tabpanel"]:focus {
  border-color: orange;
  outline: 1px solid orange;
}</pre>
</div>

<p>JavaScript でやるべきことは2つあります。 右矢印と左矢印を使用してタブ (<code>tab</code>) 要素のフォーカスとタブインデックスを変更する必要があります。 また、タブ (<code>tab</code>) をクリックしたときにアクティブなタブ (<code>tab</code>) とタブパネル (<code>tabpanel</code>) を変更する必要があります。</p>

<p>最初のことを達成するために、タブリスト (<code>tablist</code>) でキーダウン (<code><a href="/ja/docs/Web/API/Element/keydown_event">keydown</a></code>) イベントをリッスンします。 イベントの <code><a href="/ja/docs/Web/API/KeyboardEvent/keyCode">keyCode</a></code> が右矢印の 39 や左矢印の 37 の場合、イベントに反応します。 まず、現在のタブ (<code>tab</code>) 要素の <code>tabindex</code> を -1 に設定して、Tab 不可能にします。 次に、右矢印が押されている場合は、タブフォーカスカウンターを 1 つ増やします。 カウンターがタブ (<code>tab</code>) 要素の数よりも大きい場合は、そのカウンターを 0 に設定して、最初のタブに戻ります。 左矢印が押されている場合は、タブフォーカスカウンターを 1 つ減らし、0 未満の場合、タブ (<code>tab</code>) 要素の数から 1 を引いた数に設定します（最後の要素に到達するため）。 最後に、タブフォーカスカウンターと等しいインデックスのタブ (<code>tab</code>) 要素にフォーカスを設定し、 <code>tabindex</code> を 0 に設定して Tab 可能にします。
</p>

<p>アクティブなタブ (<code>tab</code>) とタブパネル (<code>tabpanel</code>) の変更を処理するために、イベントを受け取り、イベントをトリガーした要素、トリガーした要素の親要素、およびその祖父母要素を取得する関数があります。 次に、親要素内で <code>aria-selected=true</code> を持つすべてのタブを検索し、それを <code>false</code> に設定してから、トリガーした要素の <code>aria-selected</code> を <code>true</code> に設定します。 その後、祖父母要素内のすべてのタブパネル (<code>tabpanel</code>) 要素を見つけてすべて <code>hidden</code> にし、最後に、トリガーしたタブ (<code>tab</code>) の <code>aria-controls</code> と等しい <code>id</code> の要素を選択して、<code>hidden</code> 属性を削除して表示します。</p>

<pre class="brush: js">window.addEventListener("DOMContentLoaded", () =&gt; {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // 各タブに click イベントハンドラーを追加します
  tabs.forEach(tab =&gt; {
    tab.addEventListener("click", changeTabs);
  });

  // タブリストのタブ間の矢印ナビゲーションを有効にします
  let tabFocus = 0;

  tabList.addEventListener("keydown", e =&gt; {
    // 右に移動
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // 最後にいる場合は、最初に移動します
        if (tabFocus &gt;= tabs.length) {
          tabFocus = 0;
        }
        // 左に移動
      } else if (e.keyCode === 37) {
        tabFocus--;
        // 最初にいる場合は、最後に移動します
        if (tabFocus &lt; 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // タブから現在すべての選択状態を取り除きます
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t =&gt; t.setAttribute("aria-selected", false));

  // このタブを選択されたタブとして設定します
  target.setAttribute("aria-selected", true);

  // すべてのタブパネルを非表示にします
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p =&gt; p.setAttribute("hidden", true));

  // 選択されたパネルを表示します
  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}</pre>

<p>{{EmbedLiveSample("Example", 600, 130)}}</p>

<h2 id="Best_practices">ベストプラクティス</h2>

<p>自分で追加する必要はなく、代わりに、組み込みの機能的でアクセス可能な機能のために、ボタン (<code>button</code>) 要素をタブ (<code>tab</code>) ロールと一緒に使用することをお勧めします。 タブ (<code>tab</code>) ロールを持つ要素の Tab キー機能を制御するには、すべての非アクティブ要素を <code>tabindex=-1</code> に設定し、アクティブ要素を <code>tabindex=0</code> に設定することをお勧めします。
</p>

<h2 id="Specifications">仕様</h2>

<table class="standard-table">
	<tbody>
		<tr>
			<th scope="col">仕様</th>
			<th scope="col">状態</th>
		</tr>
		<tr>
			<td>{{SpecName("ARIA","#tab","tab")}}</td>
			<td>{{Spec2('ARIA')}}</td>
		</tr>
		<tr>
			<td>{{SpecName("ARIA Authoring Practices","#tabpanel","tabs")}}</td>
			<td>{{Spec2('ARIA Authoring Practices')}}</td>
		</tr>
	</tbody>
</table>

<h2 id="Precedence_order">優先順位</h2>

<p>関連するプロパティは何ですか。 また、この属性やプロパティはどのような順序で読み取られますか（どのプロパティがこのプロパティよりも優先され、どのプロパティが上書きされますか）。</p>

<h2 id="Screen_reader_support">スクリーンリーダーのサポート</h2>

<p>TBD</p>


<section id="Quick_links">
	<ol>
	  <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
	</ol>
</section>

