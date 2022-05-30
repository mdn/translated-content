---
title: alerts
slug: Web/Accessibility/ARIA/forms/alerts
tags:
  - ARIA
  - Accessibility
  - Forms
  - Web
translation_of: Web/Accessibility/ARIA/forms/alerts
---
<h2 id="The_problem" name="The_problem">問題点</h2>

<p>アクセシブルなエラーチェックを組み入れたいフォーム、例えば問い合わせフォームがあります。よくある問題点は電子メールアドレスが有効ではない、あるいは名前欄に姓も名も含まれていないことです。</p>

<h2 id="The_form" name="The_form">フォーム</h2>

<p>始めに、<a href="/ja/docs/Web/Accessibility/ARIA/forms/Basic_form_hints" title="Web/Accessibility/ARIA/forms/Basic_form_hints"><code>aria-required</code> の手法に関する記事</a>を読んでいないのでしたら、まずはそちらをお読みください。ここでは、その手法を拡張します。</p>

<p>こちらがシンプルなフォームです:</p>

<pre class="brush: html"> &lt;form method="post" action="post.php"&gt;
   &lt;fieldset&gt;
     &lt;legend&gt;Please enter your contact details&lt;/legend&gt;
     &lt;label for="name"&gt;Your name (required):&lt;/label&gt;
     &lt;input name="name" id="name" aria-required="true"/&gt;
     &lt;br /&gt;
     &lt;label for="email"&gt;E-Mail address (required):&lt;/label&gt;
     &lt;input name="email" id="email" aria-required="true"/&gt;
     &lt;br /&gt;
     &lt;label for="website"&gt;Website (optional):&lt;/label&gt;
     &lt;input name="website" id="website"/&gt;
   &lt;/fieldset&gt;
   &lt;label for="message"&gt;Please enter your message (required):&lt;/label&gt;
   &lt;br /&gt;
   &lt;textarea name="message" id="message" rows="5" cols="80"
             aria-required="true"&gt;&lt;/textarea&gt;
   &lt;br /&gt;
   &lt;input type="submit" name="submit" value="Send message"/&gt;
   &lt;input type="reset" name="reset" value="Reset form"/&gt;
 &lt;/form&gt;
</pre>

<p>ストレートでシンプルですが、この時点では美しさの賞は与えられないでしょう。:-)</p>

<h2 id="Checking_for_validity_and_notifying_the_user" name="Checking_for_validity_and_notifying_the_user">有効性の確認とユーザへの通知</h2>

<p>有効性の確認とユーザへの通知は、いくつかのステップで構成されます:</p>

<ol>
 <li>電子メールアドレスや入力された名前が有効かを確認します。シンプルにするため、電子メールアドレスは “@” 記号を含んでいるか、名前は空白 ” “ を少なくとも 1 文字含んでいるかを確認します。</li>
 <li>フィールドの <code>aria-invalid</code> 属性を設定して、値を “<code>true</code>” にします。</li>
 <li>alert を通して、入力した値が間違っていることをユーザに通知します。それには JavaScript の ‘<code>alert</code>’ 関数を使用した押しつけがましいダイアログボックスではなく、シンプルな WAI-ARIA のウィジェットを使用します。これはユーザに通知を行いますが、ユーザは割り込まれることなくフォームとの対話を続けられます。</li>
</ol>

<p>これらのすべては <code>input</code> がフォーカスを失ったとき、つまり “<code>onblur</code>” ハンドラの状況で発生します。</p>

<p>私が作成した JavaScript コードは以下のとおりであり、“<code>head</code>” の終了タグの前に挿入しました:</p>

<pre class="brush: js"> &lt;script type="application/javascript"&gt;
 function removeOldAlert()
 {
   var oldAlert = document.getElementById("alert");
   if (oldAlert)
     document.body.removeChild(oldAlert);
 }

 function addAlert(aMsg)
 {
   removeOldAlert();
   var newAlert = document.createElement("div");
   newAlert.setAttribute("role", "alert");
   newAlert.setAttribute("id", "alert");
   var msg = document.createTextNode(aMsg);
   newAlert.appendChild(msg);
   document.body.appendChild(newAlert);
 }

 function checkValidity(aID, aSearchTerm, aMsg)
 {
   var elem = document.getElementById(aID);
   var invalid = (elem.value.indexOf(aSearchTerm) &lt; 0);
   if (invalid) {
     elem.setAttribute("aria-invalid", "true");
     addAlert(aMsg);
   } else {
     elem.setAttribute("aria-invalid", "false");
     removeOldAlert();
   }
 }
 &lt;/script&gt;
</pre>

<h2 id="The_checkValidity_function" name="The_checkValidity_function"><code>checkValidity</code> 関数</h2>

<p>中核をなすのが <code>checkValidity</code> 関数です。これは 3 つの引数をとります: 検証を行う <code>input</code> の ID、有効性を確かめるために検索する語句、alert に挿入するエラーメッセージです。</p>

<p>値が有効かを調べるため、この関数は <code>input</code> の値 <code>indexOf</code> が -1 より大きいかを確認します。検索語句が値の中で見つからないときに、<code>-1</code> 以下の値が返ります。</p>

<p>値が無効であるとき、この関数は 2 つのことを行います:</p>

<ol>
 <li>要素の <code>aria-invalid</code> 属性を “<code>true</code>” に設定します。これは、そこに無効な内容物があることをスクリーンリーダーに示します。</li>
 <li>示されたエラーメッセージを持つ alert を追加するため、<code>addAlert</code> 関数を呼び出します。</li>
</ol>

<p>検索語句が見つかった場合は <code>aria-invalid</code> 属性を “<code>false</code>” にリセットします。加えて、まだ残っているかもしれない alert を削除します。</p>

<h2 id="The_addAlert_function" name="The_addAlert_function"><code>addAlert</code> 関数</h2>

<p>この関数は始めに、古い alert を削除します。この機能はシンプルです: id が “<code>alert</code>” である要素を探して、発見した場合はその要素を Document Object Model から削除します。</p>

<p>次にこの関数は、alert のテキストを保持する <code>div</code> 要素を作成します。これは “<code>alert</code>” という ID を持ちます。また、“alert” が設定された role を持ちます。これは属性名に “aria” がついていませんが、実は ARIA から生まれたものです。その理由は role が、簡素化のため単純に HTML へ移植された、<a class="external text" href="http://www.w3.org/TR/xhtml-role/" title="XHTML Role Attribute Module">XHTML Role Attribute Module</a> に基づいているためです。</p>

<p>テキストは <code>div</code> 要素に追加され、また <code>div</code> 要素はドキュメントに追加されます。</p>

<p>これが発生したとき、その <code>div</code> が現れるとすぐに Firefox は支援技術に対して “alert”イベントを発生させます。ほとんどのスクリーンリーダーは自動的にその div 要素を拾い上げて、読み上げるでしょう。これはパスワードを保存したいかを尋ねる、Firefox の通知バーに似ています。ここで作成した alert はボタンを持たず、何が誤っているかを伝えるのみです。</p>

<h2 id="Adding_the_magic_to_the_“onblur”_event" name="Adding_the_magic_to_the_“onblur”_event">“<code>onblur</code>” イベントのマジックを加える</h2>

<p>あとはイベントハンドラの追加が残っています。以下のように電子メールアドレスと名前の入力欄の変更が必要です:</p>

<pre class="brush: html"> &lt;input name="name" id="name" aria-required="true"
        onblur="checkValidity('name', ' ', 'Invalid name entered!');"/&gt;
 &lt;br /&gt;
 &lt;input name="email" id="email" aria-required="true"
        onblur="checkValidity('email', '@', 'Invalid e-mail address');"/&gt;
</pre>

<p><strong>サンプルのテスト</strong></p>

<p>Firefox 3 およびサポート済みのスクリーンリーダーを使用している場合は、以下を試してみましょう:</p>

<ol>
 <li>名前欄に (姓を除く) 名だけを入力してください。Tab キーを押すと、無効な名前を入力したことを伝える警告が聞こえるでしょう。Shift-Tab を押して戻り、エラーを修正できます。</li>
 <li>“@” 記号がない電子メールアドレスを入力してください。Tab を押してフィールドを離れると、有効な電子メールアドレスを入力していないことを伝える警告が聞こえるでしょう。</li>
</ol>

<p>どちらのケースでも問題のフィールドへフォーカスを戻すと、スクリーンリーダーはそのフィールドのデータが無効であることを伝えるでしょう。JAWS 9 はこれをサポートしていますが JAWS 8 は未サポートであり、サポートしているスクリーンリーダーの前バージョンで動作するわけではありません。</p>

<h2 id="A_few_questions_that_you_might_have" name="A_few_questions_that_you_might_have">よくある質問</h2>

<dl>
 <dt>Q. いくつかの input で、ラベルテキストの “<code>(required)</code>” と <code>aria-required</code> 属性の両方を置いている理由は?</dt>
 <dd>A. これが実際のフォームで、またサイトを ARIA 未サポートのブラウザでアクセスされた場合でも、入力必須のフィールドであることを示したいと考えているためです。</dd>
 <dt>Q. 無効なデータのフィールドへ自動的にフォーカスを戻さない理由は?</dt>
 <dd>A. これは少なくとも Windows API の仕様で許可されていないなどの理由があります。また、実際のユーザとの対話なしにフォーカスを飛ばせるようにすることは、一般的によいことではありません。</dd>
</dl>

<div class="warning">TBD: これは再考しましょう -- 個人的には、キーボードトラップを発生させずに行えるのであれば、フォーカスの設定はよいであろうと考えます。</div>

<h2 id="In_conclusion" name="In_conclusion">おわりに</h2>

<p>Web サイトのアクセシビリティは、クライアントサイドの検証向けにアクセシブルな alert を提供することで大きく向上します。ユーザにとっては、20 個ほどのフィールドを埋めて送信するとフィールド 3 のデータが無効であるとわかるだけで、すべてのフィールドで値が残っているかを見直さなければならなかったりいくつかの情報を余計に入力したりすることより失望させられることはありません。</p>
