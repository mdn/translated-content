---
title: 'ARIA: alert ロール'
slug: Web/Accessibility/ARIA/Roles/Alert_Role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Alert_Role
---
<p class="summary"><span class="seoSummary">アラート (<code><a href="https://www.w3.org/TR/wai-aria-1.1/#alert">alert</a></code>) ロールは、要素が動的に更新されたことをユーザーに通知するために使用できます。 ロールが追加されると、スクリーンリーダーは更新されたコンテンツの読み上げを即座に開始します。 ユーザーがアラートを閉じることを期待する場合は、代わりにアラートダイアログ (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Alertdialog_Role">alertdialog</a></code>) ロールを使用するべきです。</span></p>

<h2 id="Description" name="Description">説明</h2>

<p>5つのライブリージョンロールの1つである アラート (<code><a href="https://www.w3.org/TR/wai-aria-1.1/#alert">alert</a></code>) ロールは、重要な、通常は時間依存の情報をユーザーに提供するために使用され、要素が動的に更新されたことをユーザーに伝えることがよくあります。</p>

<p>アラート (<code>alert</code>) ロールは、アラートメッセージを含むノードに追加し、アラートをトリガーする要素には追加しません。 アラートは主張的なライブリージョンです。 <code>role="alert"</code> の設定は、<code>aria-live="assertive"</code> と <code>aria-atomic="true"</code> の設定と同じです。 それらはフォーカスを受け取らないので、フォーカスを管理する必要はなく、ユーザーインタラクションを必要とするべきではありません。</p>

<p>アラート (<code>alert</code>) ロールについて最も重要なことは、動的コンテンツ用であることです。 ユーザーがフォームに記入し、JavaScript を使用してエラーメッセージを追加すると、アラートがすぐにメッセージを読み上げるなどの状況に最適です。 ユーザーが HTML と対話していない HTML 上では使用するべきではありません。 例えば、ページ上に複数の可視のアラートが散在して読み込まれたページは、動的にトリガーされないため読み上げられません。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>アラートをトリガーする最も基本的な方法は、デフォルトで <code>display: none;</code> を持つ要素に <code>role="alert"</code> を追加することです。 CSS や JavaScript で <code><a href="/ja/docs/Web/CSS/CSS_Display">display</a></code> の値を変更すると、自動的にスクリーンリーダーがコンテンツを読み上げるようになります。</p>

<pre class="brush: html">&lt;p role="alert" style="display: none;"&gt;要素が表示されるとアラートがトリガーされます。&lt;/p&gt;</pre>

<p>CSS だけでアラートをトリガーすることは可能ですが、ブラウザやスクリーンリーダーのサポートが増え、イベントハンドラやフォームの検証などのより大きなユーザーインタラクションの一部として、より適切な場合が多いため、JavaScript を使用する方がよいでしょう。 JavaScript を使用すると、開発者はアラートの追加と削除を適切に制御できます。</p>

<pre class="brush: html">&lt;button type="button"&gt;アラートをトリガー&lt;/button&gt;
&lt;p class="alert"&gt;ボタンを押すとアラートがトリガーされます。&lt;/p&gt;
</pre>

<pre class="brush: js">const btn = document.querySelector('button');
btn.addEventListener('click', triggerAlert);

function triggerAlert() {
  var alertEl = document.querySelector('.alert');
  alertEl.setAttribute("role", "alert");
}
</pre>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティに関する懸念</h2>

<p>アラート (<code>alert</code>) ロールは、変更されたコンテンツを読み上げるべきで、直ちにユーザーの注意を引く必要があるため、静的コンテンツに使用したり、定期的に使用したりするべきではありません。 アラートは、定義上、破壊的です。 一度にたくさんのアラートがある場合や、不必要なアラートがある場合、悪いユーザーエクスペリエンスをもたらします。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#alert","Alert")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
  <tr>
   <td>{{SpecName("ARIA Authoring Practices","#alert","Alert")}}</td>
   <td>{{Spec2('ARIA Authoring Practices')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Alertdialog_Role">ARIA: alertdialog ロール</a></li>
 <li><a href="https://developer.paciellogroup.com/blog/2017/04/aria-alert-support/">ARIA alert support - The Paciello Group</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA ライブリージョン</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role">alert ロールの使用</a></li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
