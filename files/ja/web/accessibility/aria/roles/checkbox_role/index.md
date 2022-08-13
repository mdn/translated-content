---
title: 'ARIA: checkbox ロール'
slug: Web/Accessibility/ARIA/Roles/checkbox_role
tags:
  - ARIA
  - Accessibility
  - NeedsContent
  - Role
translation_of: Web/Accessibility/ARIA/Roles/checkbox_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_checkbox_role
---
<p><span class="seoSummary">チェックボックス (<a href="https://www.w3.org/TR/wai-aria-1.1/#checkbox">checkbox</a>) ロールは、チェック可能なインタラクティブなコントロールに使用します。 <code>role="checkbox"</code> を含む要素には、チェックボックスの状態を支援技術に公開するための <code>aria-checked</code> 属性も含める必要があります。</span></p>

<pre class="brush: html">&lt;span role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk1-label"&gt;
&lt;/span&gt; &lt;label id="chk1-label"&gt;Remember my preferences&lt;/label&gt;</pre>

<p>ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA を追加する代わりにネイティブなものを使用することです。 次のように、代わりに <code><a href="/ja/docs/Web/HTML/Element/input/checkbox">&lt;input type="checkbox"&gt;</a></code> のネイティブな <a href="/ja/docs/Web/HTML/Element/input/checkbox">HTML チェックボックス</a>を使用してください。 これは、必要なすべての機能をネイティブに提供します。</p>

<pre class="brush: html">&lt;input type="checkbox" id="chk1-label"&gt;
&lt;label for="chk1-label"&gt;Remember my preferences&lt;/label&gt;</pre>

<h2 id="Description">説明</h2>

<p>ネイティブな <a href="/ja/docs/Web/HTML/Element/input/checkbox">HTML チェックボックス</a>のフォームコントロールは、2つのチェックされた (checked) 状態（「チェックされた」または「チェックされていない」）のみを持つことができ、不確定な (<a href="/ja/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes">indeterminate</a>) 状態は JavaScript を介して設定可能です。 同様に、<code>role="checkbox"</code> を持つ要素は、<code>aria-checked</code> 属性を介して、<code>true</code>、<code>false</code>、または <code>mixed</code> の3つの状態を公開できます。</p>

<p>チェックボックスはインタラクティブなコントロールであるため、フォーカス可能でキーボードからアクセスできる必要があります。 ロールがフォーカス不可能な要素に適用される場合は、<code>tabindex</code> 属性を使用してこれを変更します。 チェックボックスをアクティブ化するために必要なキーボードショートカットは、<kbd>Space</kbd> キーです。</p>

<p>開発者は、チェックボックスがアクティブ化されたときに、<code>aria-checked</code> 属性の値を動的に変更する必要があります。</p>

<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt>aria-checked</dt>
 <dd>
 <p><code>aria-checked</code> の値は、チェックボックスの状態を定義します。 この属性には、次の3つの値のいずれかがあります。</p>

 <p><code>true</code><br>
      チェックボックスがチェックされています<br>
  <code>false</code><br>
      チェックボックスがチェックされていません<br>
  <code>mixed</code><br>
      チェックボックスが部分的にチェックされているか、不確定です</p>
 </dd>
 <dt>tabindex="0"</dt>
 <dd>支援技術のユーザーが Tab で移動してすぐに読み始めることができるように、フォーカス可能にするために使用します。</dd>
</dl>

<h3 id="Keyboard_interactions">キーボードインタラクション</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">キー</th>
   <th scope="col">機能</th>
  </tr>
  <tr>
   <td><kbd>Space</kbd></td>
   <td>チェックボックスをアクティブ化します</td>
  </tr>
 </tbody>
</table>

<h3 id="Required_JavaScript">必要な JavaScript</h3>

<h4 id="Required_event_handlers">必要なイベントハンドラー</h4>

<dl>
 <dt>onclick</dt>
 <dd>マウスクリックを処理して、<code>aria-checked</code> 属性の値を変更することでチェックボックスの状態を変更し、チェックボックスの外観を変更することで、視力のあるユーザーにチェックされているかどうかを見せます。</dd>
 <dt>onKeyPress</dt>
 <dd>ユーザーが <kbd>Space</kbd> キーを押した場合を処理して、<code>aria-checked</code> 属性の値を変更することでチェックボックスの状態を変更し、チェックボックスの外観を変更することで、視力のあるユーザーにチェックされているかどうかを見せます。</dd>
</dl>

<h3 id="Examples">例</h3>

<p>次の例では、CSS と JavaScript を使用して単純なチェックボックス要素を作成し、要素がチェックされているかどうかの状態を処理します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;span role="checkbox" id="chkPref" aria-checked="false" onclick="changeCheckbox()" onKeyPress="changeCheckbox()"
   tabindex="0" aria-labelledby="chk1-label"&gt;&lt;/span&gt;
&lt;label id="chk1-label" onclick="changeCheckbox()" onKeyPress="changeCheckbox()"&gt;Remember my preferences&lt;/label&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">[role="checkbox"] {
    padding:5px;
}

[aria-checked="true"]::before {
    content: "[x]";
}

[aria-checked="false"]::before {
    content: "[ ]";
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">function changeCheckbox(event) {
    let item = document.getElementById('chkPref');
    switch(item.getAttribute('aria-checked')) {
        case "true":
            item.setAttribute('aria-checked', "false");
            break;
        case "false":
            item.setAttribute('aria-checked', "true");
            break;
    }
}</pre>

<p>{{EmbedLiveSample("Examples", 230, 250)}}</p>

<h2 id="Accessibility_concerns">アクセシビリティの懸念</h2>

<p>チェックボックス (<code>checkbox</code>) ロールが要素に追加された場合、ユーザーエージェントは次のことを行う必要があります。</p>

<ul>
 <li>オペレーティングシステムのアクセシビリティ API でチェックボックスロールを持つものとして要素を公開します。</li>
 <li><code>aria-checked</code> 値が変更されたら、アクセス可能な状態変更イベントを送信します。</li>
</ul>

<p>支援技術製品は次のことを行う必要があります。</p>

<ul>
 <li>スクリーンリーダーは、要素をチェックボックスとしてアナウンスし、任意でアクティブ化する方法を説明する必要があります。</li>
</ul>

<div class="note"><strong>注:</strong> 支援技術がこの手法をどのように扱うべきかについては、意見が異なる場合があります。 上記の情報はそれらの意見の1つであり、したがって規範的ではありません。</div>

<h2 id="Best_practices">ベストプラクティス</h2>

<p>ARIA の第一のルールは、ネイティブな HTML の要素や属性に必要としている意味論と振る舞いがある場合、要素を転用して ARIA のロール、ステート、またはプロパティを追加してアクセス可能にする代わりに、ネイティブなものを使用することです。 そのため、JavaScript と ARIA でチェックボックスの機能を再作成するのではなく、フォームコントロールを使用してネイティブな <a href="/ja/docs/Web/HTML/Element/input/checkbox">HTML チェックボックス</a>を使用することをお勧めします。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/HTML/Element/input/checkbox">&lt;input type="checkbox"&gt;</a></code></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Radio_Role">ARIA: radio ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Menuitem_Role">ARIA: menuitem ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_Role">ARIA: menuitemcheckbox ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Menuitemradio_Role">ARIA: menuitemradio ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Switch_role">ARIA: switch ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Option_role">ARIA: option ロール</a></li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>