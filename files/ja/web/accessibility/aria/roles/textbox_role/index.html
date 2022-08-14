---
title: 'ARIA: textbox ロール'
slug: Web/Accessibility/ARIA/Roles/textbox_role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/textbox_role
---
<p>\{{ariaref}}<span class="seoSummary"><code>textbox</code> ロールは、自由形式テキストの入力を可能にする要素を識別するために使用されます。</span> 可能であれば、このロールを使用するのではなく、単一行入力の場合は <code><a href="/ja/docs/Web/HTML/Element/input/text">type="text"</a></code> の {{HTMLElement("input")}} 要素を使用し、複数行入力の場合は {{HTMLElement("textarea")}} 要素を使用してください。</p>

<h2 id="Description" name="Description">説明</h2>

<p class="p2">要素に <code>textbox</code> ロールがある場合、ブラウザーはアクセス可能なテキストボックスイベントを支援技術に送信し、ユーザーにそのことを通知できます。</p>

<p class="p2">デフォルトは単一行入力で、<kbd>Return</kbd> や <kbd>Enter</kbd> はフォームを送信します。 この場合、 <code>type="text"</code> の HTML の {{HTMLElement("input")}} を使用することをお勧めします。 HTML の {{HTMLElement("textarea")}} のように改行をサポートする複数行のテキストボックスを作成するには、<code>aria-multiline="true"</code> を設定します。 HTML の <code>contenteditable</code> 属性を含めると、テキストノードが確実に編集可能になります。</p>

<pre class="brush: html">&lt;!-- 単純なテキスト入力フィールド --&gt;
&lt;div id="txtboxLabel"&gt;5桁の郵便番号を入力してください&lt;/div&gt;
&lt;div role="textbox" contenteditable="true" aria-placholder="5-digit zipcode" aria-labeledby="txtboxLabel"&gt;&lt;/div&gt;

&lt;!-- 複数行のテキスト領域 --&gt;
&lt;div id="txtboxMultilineLabel"&gt;記事のタグを入力してください&lt;/div&gt;
&lt;div role="textbox" contenteditable="true" aria-multiline="true"
   aria-labeledby="txtboxMultilineLabel" aria-required="true"&gt;&lt;/div&gt; </pre>

<p>意味論的な要素はより簡潔であり、テキストボックス機能をサポートするために JavaScript を必要としません。</p>

<p> </p>

<pre class="brush: html">&lt;label for="txtbox"&gt;5桁の郵便番号を入力してください&lt;/label&gt;
&lt;input type="text" placholder="5-digit zipcode" id="txtbox"/&gt;

&lt;!-- 複数行のテキスト領域 --&gt;
&lt;label for="txtboxMultiline"&gt;記事のタグを入力してください&lt;/lable&gt;
&lt;textarea id="txtboxMultiline" required&gt;&lt;/textarea&gt; </pre>

<p> </p>

<p class="p2">テキストフィールドが読み取り専用の場合、要素に対して <code>aria-readonly="true"</code> と設定することでこれを示します。</p>

<dl>
</dl>

<h3 id="Associated_ARIA_properties" name="Associated_ARIA_properties">関連する ARIA のプロパティ</h3>

<dl>
 <dt><code>aria-activedescendent</code> 属性</dt>
 <dd>その値として、ID は DOM のフォーカスを持つ要素の子孫であるか、または <code>aria-owns</code> 属性で指定された論理的子孫であり、<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/combobox">combobox</a></code> などの複合ウィジェットの一部であるときに、その要素にフォーカスがあるときを示します。 たとえば、コンボボックスでは、テキストボックスにフォーカスが残ることがありますが、<code>textbox</code> 要素の <code>aria-activedescendant</code> の値は、テキストボックスによって制御されるポップアップリストボックスの子孫を参照します。 この属性は、フォーカスが変更されるとプログラムで更新する必要があります。</dd>
 <dt><code>aria-autocomplete</code> 属性</dt>
 <dd>フィールドへのユーザーの入力が、意図した値の予測の表示をトリガーできるかどうか、およびその方法を示します。 これは以下の値をサポートしています。
 <ul>
  <li><code>inline</code>: 予測されたテキストがキャレットの後に挿入されます。</li>
  <li><code>list</code>: 予測されたテキストは、値の集まりとして提示されます。</li>
  <li><code>both</code>: 予測されたテキストは、値の集まりとして提示され、補完に必要なテキストの1つの値がキャレットの後に挿入されます。</li>
  <li><code>none</code>（デフォルト）: 予測されたテキストは提供されません。</li>
 </ul>

 <p><code>list</code> または <code>both</code> が設定されている場合は、<code>aria-controls</code> 属性と<code> aria-haspopup</code> 属性も含める必要があります。 <code>aria-controls</code> の値は、提案値のリストを含む要素の ID です。 さらに、テキストボックスまたは <code>combobox</code> ロールを含む包含要素のいずれかに、提案値のリストを含む要素のロールに一致する <code>aria-haspopup</code> の値を持ちます。</p>
 </dd>
 <dt><code>aria-multiline</code> 属性</dt>
 <dd><code>aria-multiline="true"</code> が設定されている場合、支援技術は、テキストボックスが複数行入力をサポートしていることをユーザーに知らせます。 <kbd>Enter</kbd> や <kbd>Return</kbd> はフォームを送信するのではなく改行を作成します。 ARIA は要素の動作を変更しません。 むしろ、この機能は開発者によって制御されなければなりません。 <code>false</code> が設定されている場合、または属性が省略されていて <code>false</code> がデフォルトの場合、ユーザーはコントロールが単一行のテキストボックスであり、<kbd>Enter</kbd> や <kbd>Return</kbd> がフォームを送信することを期待しています。</dd>
 <dt><code>aria-placeholder</code> 属性</dt>
 <dd>テキストフィールドに何を入力するかについてのヒント（単語またはフレーズ）をユーザーに示します。 ヒントは、サンプル値または期待されるフォーマットの簡単な説明であるべきです。 この情報は、ラベルの代用として使用するべきではありません。 ラベルはフォーカス可能で永続的で、どのような情報が期待されているかを示し、プレースホルダーのテキストは期待値を一時的に示唆しているだけで、誤って実装するとアクセシビリティが低下する可能性があります。 プレースホルダーは、コントロールが最初にフォーカスを受け取ったときやユーザーが以前に入力した値を削除したときなど、コントロールの値が空の文字列のときに表示するべきです。 <code>aria-placeholder</code> を使用する代わりに、意味論的な <code>&lt;input type="text"&gt;</code> や <code>&lt;textarea&gt;</code> に <code>placeholder</code> 属性を使用します。</dd>
 <dt><code>aria-readonly</code> 属性</dt>
 <dd>ユーザーがテキストフィールドの値を変更できないことを示します。 <code>aria-readonly</code> を使用する代わりに、意味論的な <code>&lt;input type="text"&gt;</code> や <code>&lt;textarea&gt;</code> に <code>readonly</code> 属性を使用します。</dd>
 <dt><code>aria-required</code> 属性</dt>
 <dd>フィールドが送信される前にフィールドに値を指定する必要があることを示します。 <code>aria-required</code> を使用する代わりに、意味論的な <code>&lt;input type="text"&gt;</code> や <code>&lt;textarea&gt;</code> に <code>required</code> 属性を使用します。</dd>
</dl>

<h3 id="Keyboard_interactions" name="Keyboard_interactions">キーボードインタラクション</h3>

<p>単一行での使用（<code>aria-multiline</code> が <code>false</code> または使用されていない場合）では、<kbd>Return</kbd> キーや <kbd>Enter</kbd> キーがフォームを送信します。 複数行での使用（<code>aria-multiline</code> が <code>true</code> の場合）では、<kbd>Return</kbd> キーや <kbd>Enter</kbd> キーを押すと改行が挿入されます。</p>

<h3 id="JavaScript_features" name="JavaScript_features">必要な JavaScript 機能</h3>

<p>すべてのプロパティとステートに関連するすべての機能を維持する必要があります。 また、単一行のテキストボックスにおいて <kbd>Enter</kbd> や <kbd>Return</kbd> でフォームを送信する必要があります。</p>

<dl>
 <dt>フォーカスイベントハンドラと aria-activedescendent 属性</dt>
 <dd>テキストボックスとリストボックスで構成されるコンボボックスなどの複合ウィジェットを実装する場合は、ハンドラを使用して <code>aria-activedescendent</code> 属性を管理する必要があります。 この手法を使用する前に、ターゲットとするブラウザーが現在サポートしていることを確認してください。 詳細については、<a href="https://www.w3.org/TR/wai-aria/#aria-activedescendant">aria-descendent の仕様</a>（英語）を参照してください。</dd>
</dl>

<div class="note">
<p>ARIA の <code>textbox</code> ロールの代わりに <code>type="text"</code> の {{HTMLElement("input")}} 要素、または {{HTMLElement("textarea")}} 要素を使用する方が良い方法です。 どちらの意味論的な要素を使用する場合でも、ARIA の <code>textbox</code> ロールは必要ありません。 <a href="https://www.w3.org/TR/aria-in-html/">HTML で ARIA を使用する場合の注意</a>（英語）を参照してください。</p>
</div>

<h2 id="Possible_effects_on_user_agents_and_assistive_technology" name="Possible_effects_on_user_agents_and_assistive_technology">ユーザーエージェントと支援技術への影響</h2>

<p class="p1"><code>textbox</code> ロールが要素に追加されるか、そのような要素が可視になると、ユーザーエージェントは以下を行うべきです。</p>

<ul class="ul1">
 <li class="li2">オペレーティングシステムのアクセシビリティ API で <code>textbox</code> ロールを持つものとして要素を公開します。</li>
 <li class="li2">オペレーティングシステムのアクセシビリティ API をサポートしている場合は、アクセシビリティ API を使用してアクセス可能なテキストボックスイベントを発生させます。</li>
</ul>

<p class="p1">支援技術製品は、そのようなイベントをリスンし、それに応じてユーザーに以下を通知するするべきです。</p>

<ul class="ul1">
 <li class="li2">スクリーンリーダーは、フォーカスが最初にテキストボックスに着くと、そのラベルとロールをアナウンスするべきです。 コンテンツも含まれている場合は、これを通常のテキストボックスの場合と同様にアナウンスするべきです。</li>
 <li class="li2">スクリーン拡大鏡でテキストボックスが拡大されることがあります。</li>
</ul>

<div class="note"><strong>注</strong>: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の1つで、したがって規範的ではありません。</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Example_1_Adding_the_role_in_the_HTML_code_for_single_line_input" name="Example_1_Adding_the_role_in_the_HTML_code_for_single_line_input">例 1: 単一行入力の HTML コードにロールを追加する</h3>

<p class="p2">以下のスニペットは、<code>textbox</code> ロールが HTML ソースコードにどのように直接追加されるかを示しています。</p>

<pre class="brush: html">&lt;div role="textbox" contenteditable="true"&gt;&lt;/div&gt;</pre>

<h3 class="p1" id="Example_2_Adding_the_role_in_the_HTML_code_for_multi-line_input" name="Example_2_Adding_the_role_in_the_HTML_code_for_multi-line_input">例 2: 複数行入力の HTML コードにロールを追加する</h3>

<p class="p2">以下のスニペットは、<code>textbox</code> ロールが HTML ソースコードにどのように直接追加されるかを示しています。</p>

<pre class="brush: html">&lt;div role="textbox" contenteditable="true" aria-multiline="true"&gt;&lt;/div&gt;</pre>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<ul>
 <li class="li1"> このロールが適用される HTML 要素に <code>contenteditable="true"</code> 属性を必ず追加してください。 <code>aria-readonly</code> を <code>true</code> に設定した場合でもそうします。 このようにして、読み取り専用でない場合は、コンテンツを編集可能にすることを通知します。</li>
</ul>

<h2 id="See_Also" name="See_Also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/searchbox">ARIA: search ロール</a></li>
</ul>
