---
title: 'ARIA: dialog ロール'
slug: Web/Accessibility/ARIA/Roles/dialog_role
tags:
  - ARIA
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/dialog_role
---
<p><span class="seoSummary">ダイアログ (<code><a href="https://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#dialog">dialog</a></code>) ロールは、ウェブアプリケーションやウェブページの残りの部分からコンテンツや UI を分離する HTML ベースのアプリケーションのダイアログやウィンドウをマークアップするために使用します。 ダイアログは通常、オーバーレイを使用して残りのページコンテンツの上に配置されます。 ダイアログはノンモーダル (ダイアログ外のコンテンツともやりとり可能) またはモーダル (ダイアログ内のコンテンツのみとやりとり可能) のいずれかになります。</span></p>

<pre class="brush: html">&lt;div <strong>role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc"</strong>&gt;
  &lt;h2 <strong>id="dialog1Title"</strong>&gt;あなたの個人情報が更新されました&lt;/h2&gt;
  &lt;p <strong>id="dialog1Desc"</strong>&gt;情報は、ユーザーアカウントのセクションでいつでも変更できます。&lt;/p&gt;
  &lt;button&gt;閉じる&lt;/button&gt;
&lt;/div&gt;</pre>

<h2 id="Description" name="Description">説明</h2>

<p>ダイアログ要素をダイアログ (<code>dialog</code>) ロールでマークアップすると、支援技術がダイアログのコンテンツをページコンテンツの残りの部分からグループ化して分離されたものとして識別するのに役立ちます。 ただし、<code>role="dialog"</code> だけを追加するだけでは、ダイアログをアクセス可能にするには不十分です。 さらに、次のことを行う必要があります。</p>

<ul>
 <li>ダイアログには適切なラベルを付ける必要があります。</li>
 <li>キーボードのフォーカスを正しく管理する必要があります。</li>
</ul>

<p>以下のセクションでは、これら2つの要件をどのように満たすことができるかについて説明します。</p>

<h4 id="Labeling" name="Labeling">ラベル付け</h4>

<p>ダイアログ自体がフォーカスを受け取れる必要はありませんが、それでもラベルを付ける必要があります。 ダイアログに与えられたラベルは、ダイアログ内のインタラクティブコントロールのコンテキスト情報を提供します。 つまり、ダイアログのラベルは、その内部のコントロールのグループ化ラベルのように機能します (<code>&lt;legend&gt;</code> 要素が <code>&lt;fieldset&gt;</code> 要素内のコントロールのグループ化ラベルを提供する方法と同様です)。</p>

<p>ダイアログにすでに表示されているタイトルバーがある場合、そのバーの中のテキストを使用してダイアログ自体にラベルを付けることができます。 これを達成する最善の方法は、<code>role="dialog"</code> 要素に <code>aria-labelledby</code> 属性を使用することです。 さらに、ダイアログがダイアログタイトル以外に追加の説明テキストを含んでいる場合、このテキストは <code>aria-describedby</code> 属性を使用してダイアログに関連付けることができます。 このアプローチは、次のコードスニペットに示されています。</p>

<pre class="brush: html">&lt;div <strong>role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc"</strong>&gt;
  &lt;h2 <strong>id="dialog1Title"</strong>&gt;あなたの個人情報が更新されました&lt;/h2&gt;
  &lt;p <strong>id="dialog1Desc"</strong>&gt;情報は、ユーザーアカウントのセクションでいつでも変更できます。&lt;/p&gt;
  &lt;button&gt;閉じる&lt;/button&gt;
&lt;/div&gt;</pre>

<p> </p>

<div class="note">なお、非仮想モードで動作するスクリーンリーダーが認識するために、ダイアログのタイトルと説明のテキストがフォーカス可能である必要はありません。 ARIA のダイアログロールとラベル付けの手法を組み合わせることで、スクリーンリーダーは、フォーカスがダイアログに移動したときにダイアログの情報をアナウンスするべきです。</div>

<p> </p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<p> </p>

<h4 id="Focus_management" name="Focus_management">フォーカス管理 </h4>

<p>ダイアログには、キーボードフォーカスをどのように管理するべきかについて、次のような特有の要件があります。</p>

<ul>
 <li>ダイアログは常に少なくとも1つのフォーカス可能なコントロールを持つべきです。 多くのダイアログでは、[閉じる]、[OK]、[キャンセル] などのボタンがあります。 ダイアログには、必要なコントロールに加えて、フォーカス可能な要素をいくつでも含めることができ、フォーム全体やタブのような他のコンテナーウィジェットさえも含めることができます。</li>
 <li>ダイアログが画面に表示されたら、キーボードのフォーカスを、(そのコントロールはダイアログの目的に依存する) ダイアログ内のデフォルトのフォーカス可能なコントロールに移動するべきです。 基本的なメッセージのみを提供するダイアログでは、たぶん [OK] ボタンになります。 フォームを含むダイアログでは、たぶんフォームの最初のフィールドになります。</li>
 <li>ダイアログが閉じられた後、キーボードフォーカスは、ダイアログに移動する前の位置に戻すべきです。 それ以外の場合は、フォーカスをページの先頭に落とすことができます。</li>
 <li>ほとんどのダイアログでは、ダイアログのタブ順序が折り返されることが求められる振る舞いです。 つまり、ユーザーがダイアログ内のフォーカス可能な要素をタブで移動していくと、最後のものに達した後、最初のフォーカス可能な要素にフォーカスが移ります。 言い換えれば、タブ順序は、ダイアログによってダイアログ内に含まれているべきです。</li>
 <li>ダイアログを移動やサイズ変更できる場合、マウスユーザーだけでなくキーボードユーザーもこれらの操作を実行できる必要があります。 同様に、ダイアログがツールバーやコンテキストメニューのような特別な機能を提供する場合、これらはキーボードユーザーも到達可能で操作可能である必要があります。</li>
 <li>ダイアログはモーダル (modal) またはノンモーダル (non-modal、モードレス (modeless) とも) にすることができます。 モーダルダイアログが画面に表示されている時、ダイアログ外にあるページコンテンツとやりとりすることはできません。 つまり、モーダルダイアログが表示されている限り、メインアプリケーションの UI やページコンテンツは一時的に無効になっているとみなされます。 ノンモーダルダイアログでは、ダイアログが表示されている間もダイアログ外のコンテンツとやりとりすることが可能です。 ノンモーダルダイアログでは、開いているダイアログとメインページの間でフォーカスを移動できるグローバルなキーボードショートカットが必要なことに注意してください。</li>
</ul>

<h3 id="Associated_ARIA_roles_states_and_properties" name="Associated_ARIA_roles_states_and_properties">関連する ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt><code><span class="highlight-span">aria-labelledby</span></code></dt>
 <dd>ダイアログにラベルを付けるには、この属性を使用します。 多くの場合、<code>aria-labelledby</code> 属性の値は、ダイアログのタイトルに使用される要素の id になります。</dd>
 <dt><code>aria-describedby</code></dt>
 <dd>この属性を使用して、ダイアログの内容を説明します。</dd>
</dl>

<h3 id="Possible_effects_on_user_agents_and_assistive_technology" name="Possible_effects_on_user_agents_and_assistive_technology">ユーザーエージェントと支援技術への影響</h3>

<p>ダイアログ (<code>dialog</code>) ロールが使用されるとき、ユーザーエージェントは以下を行うべきです。</p>

<ul>
 <li>オペレーティングシステムのアクセシビリティ API でダイアログとして要素を公開します。</li>
</ul>

<p>ダイアログが正しくラベル付けされ、フォーカスがダイアログ内の要素 (多くの場合、ボタンなどのインタラクティブな要素) に移動された時、スクリーンリーダーは、フォーカスされた要素をアナウンスするとともに、ダイアログのアクセス可能なロール、名前、および任意で説明をアナウンスするべきです。</p>

<div class="note"><strong>注</strong>: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があり、アナウンスの順序は使用する支援技術によって異なる場合があります。 上記の情報はこれらの意見の1つであり、したがって規範的ではありません。</div>

<h2 id="Examples" name="Examples">例</h2>

<h4 id="A_dialog_containing_a_form" name="A_dialog_containing_a_form">フォームを含むダイアログ</h4>

<pre class="brush: html"> &lt;div role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc"&gt;
   &lt;h2 id="dialog1Title"&gt;加入申込書&lt;/h2&gt;
   &lt;p id="dialog1Desc"&gt;私たちは、この情報を第三者と共有することはありません。&lt;/p&gt;
   &lt;form&gt;
     &lt;p&gt;
       &lt;label for="firstName"&gt;名&lt;/label&gt;
       &lt;input id="firstName" type="text" /&gt;
     &lt;/p&gt;
     &lt;p&gt;
       &lt;label for="lastName"&gt;姓&lt;/label&gt;
       &lt;input id="lastName" type="text"/&gt;
     &lt;/p&gt;
     &lt;p&gt;
       &lt;label for="interests"&gt;興味&lt;/label&gt;
       &lt;textarea id="interests"&gt;&lt;/textarea&gt;
     &lt;/p&gt;
     &lt;p&gt;
       &lt;input type="checkbox" id="autoLogin"/&gt;
       &lt;label for="autoLogin"&gt;自動ログイン？&lt;/label&gt;
     &lt;/p&gt;
     &lt;p&gt;
         &lt;input type="submit" value="情報を保存する"/&gt;
     &lt;/p&gt;
   &lt;/form&gt;
 &lt;/div&gt;</pre>

<h4 id="Working_Examples" name="Working_Examples">動作する例</h4>

<ul>
 <li><a href="http://jqueryui.com/demos/dialog/">jQuery-UI ダイアログ</a></li>
</ul>

<h3 id="Notes" name="Notes">注</h3>

<div class="note"><strong>注</strong>: キーボードユーザーがダイアログ外の要素にフォーカスを移動するのを防ぐことは可能ですが、スクリーンリーダーのユーザーは、スクリーンリーダーの仮想カーソルを使用してそのコンテンツにナビゲートできるかもしれません。 開発者は、モーダルダイアログがアクティブな間、モーダルダイアログ外のコンテンツに全てのユーザーがアクセスできないようにすることが重要です。</div>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#dialog","dialog")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Screen_reader_support" name="Screen_reader_support">スクリーンリーダーのサポート</h2>

<p>近日公開</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Alertdiialog_Role">ARIA: alertdialog ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role">alertdialog ロールの使用</a></li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
