---
title: フォームの自動補完を無効にするには
slug: Web/Security/Securing_your_site/Turning_off_form_autocompletion
tags:
  - Forms
  - Guide
  - Security
  - Web Development
  - ウェブ開発
  - セキュリティ
  - フォーム
translation_of: Web/Security/Securing_your_site/Turning_off_form_autocompletion
---
<p><span class="seoSummary">この記事では、フォーム入力欄の自動補完をウェブサイト側から無効にする方法を説明します。</span></p>

<p>既定では、ウェブサイト上の {{HTMLElement("input")}} 欄を通じてユーザーが送信した情報はブラウザーによって記憶されます。これよってブラウザーは、自動補完 (入力を受けた入力欄の補完候補をユーザーに提示する機能) や、オートフィル (読み込まれた入力欄をあらかじめブラウザーが補完する機能) を実現しています。</p>

<p>これらの機能は通常は既定で有効ですが、ユーザーのプライバシーにかかわる可能性があるため、ブラウザーは無効にすることができます。しかしながら、フォームで送信される情報の中には将来利用する価値のないもの (ワンタイムパスワードなど) や、機微な情報 (公的な識別番号やクレジットカード番号など) があります。ブラウザーの自動補完機能が有効であっても、ウェブサイトの作者としては、そのような入力欄の値をブラウザーに記憶させないほうが適切かもしれません。</p>

<p>自動補完を無効にすると、 <a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html">WCAG 2.1 の 1.3.5: Identify Input Purpose</a> の規則を<strong>破る</strong>ことになることを知っておくことが重要です。 WCAG に従うウェブサイトを制作するのであれば、自動的に記入する自動補完を使用するべきです。</p>

<h2 id="Disabling_autocompletion" name="Disabling_autocompletion">自動補完の無効化</h2>

<p>フォームにおける自動補完を無効にするには、 <code><a href="/ja/docs/Web/HTML/Attributes/autocomplete">autocomplete</a></code> 属性に "off" を指定することで実現できます。</p>

<pre class="brush: html notranslate">autocomplete="off"</pre>

<p>上記の設定はフォーム全体に適用することも、特定の input 要素に指定することも可能です。</p>

<pre class="brush: html notranslate">&lt;form method="post" action="/form" autocomplete="off"&gt;
[…]
&lt;/form&gt;</pre>

<pre class="brush: html notranslate">&lt;form method="post" action="/form"&gt;
  […]
  &lt;div&gt;
    &lt;label for="cc"&gt;クレジットカード番号:&lt;/label&gt;
    &lt;input type="text" id="cc" name="cc" autocomplete="off"&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<p>入力欄に <code>autocomplete="off"</code> を指定すると、以下の 2 つの効果が生じます。</p>

<ul>
 <li>ブラウザーに対して、同様のフォームで自動補完を行うために、ユーザーが入力したデータを保存しないよう指示しますが、実際の動作はブラウザーによって異なります。</li>
 <li>ブラウザーがフォームデータをセッション履歴にキャッシュしないようにします。フォームデータがセッション履歴にキャッシュされた後で、フォームの送信後に「戻る」ボタンで元のページに戻った際にユーザーの入力データが表示されます。</li>
</ul>

<p>autocomplete を off に設定してもブラウザーがサジェスト値を表示し続ける場合は、 input 要素の name 属性を変更する必要があります。</p>

<h2 id="The_autocomplete_attribute_and_login_fields" name="The_autocomplete_attribute_and_login_fields">autocomplete 属性とログイン欄</h2>

<p>現代的なブラウザーでは、パスワードを一括管理する機能が実装されています。ユーザーがウェブサイトでユーザー名とパスワードを入力した際、ブラウザーはその値を記憶するかユーザーに尋ねます。ユーザーがそのウェブサイトを再び訪れた際には、ログイン欄がブラウザーに保存された値で自動入力されます。</p>

<p>加えて、ユーザーがマスターパスワードを設定すると、ログイン情報をマスターパスワードで暗号化した状態でブラウザーに保存することができます。</p>

<p>マスターパスワードが用いられない場合でも、ブラウザーのパスワード管理機能は純粋にセキュリティの向上につながります。パスワードをブラウザーが保存すればユーザーは覚えなくてもよいため、覚えなければならない場合よりも強固なパスワードをユーザーが設定できるようになります。</p>

<p>このような理由から、現代的なブラウザーの多くはログイン欄における <code>autocomplete="off"</code> に対応していません。</p>

<ul>
 <li>ウェブサイトが <code>autocomplete="off"</code> を {{HTMLElement("form")}} に設定しており、かつそのフォーム内にユーザー名とパスワードの入力欄が含まれていた場合、ブラウザーはログイン情報を記憶するか尋ねてきて、ユーザーが同意すれば、次回の訪問時にログイン欄を自動入力します。</li>
 <li>ウェブサイトが <code>autocomplete="off"</code> をユーザー名とパスワードの {{HTMLElement("input")}} 欄に設定していた場合でも、ブラウザーはログイン情報を記憶するか尋ねてきて、ユーザーが同意すれば、次回の訪問時にログイン欄を自動入力します。</li>
</ul>

<p>この挙動は Firefox 38 以降、 Google Chrome 34 以降、 Internet Explorer 11 以降で共通です。</p>

<h3 id="autocompletenew-password_による自動入力を抑止">autocomplete="new-password" による自動入力を抑止</h3>

<p>他人のパスワードを指定するようなユーザー管理ページを定義していて、パスワード欄の自動入力を抑止したい場合は、 <code>autocomplete="new-password"</code> を使用することができます。</p>

<p>これはヒントであり、ブラウザーは守る必要はありません。しかし、最近のブラウザーは <code>&lt;input&gt;</code> 要素に <code>autocomplete="new-password"</code> を設定すると自動入力を停止します。例えば、 Firefox バージョン 67 ({{bug(1119063)}} を参照) はこの場合に自動入力を停止していましたが、 Firefox 70 ({{bug(1565407)}} を参照) は安全に生成されたパスワードを提案することができるものの、保存されたパスワードを自動入力しません。詳しくは <a href="/ja/docs/Web/HTML/Attributes/autocomplete#Browser_compatibility"><code>autocomplete</code> 互換性テーブル</a>を参照してください。</p>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}</p>
