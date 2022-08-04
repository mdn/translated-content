---
title: アラート
slug: conflicting/Web/Accessibility/ARIA
tags:
  - ARIA
  - アクセシビリティ
  - フォーム
  - ウェブ
translation_of: Web/Accessibility/ARIA/forms/alerts
original_slug: Web/Accessibility/ARIA/forms/alerts
---
## 問題点

アクセシブルなエラーチェックを組み入れたいフォーム、例えば問い合わせフォームがあるとします。よくある問題点は電子メールアドレスが有効ではない、あるいは名前欄に姓も名も含まれていないことです。

## フォーム

始めに、[`aria-required` の手法に関する記事](/ja/docs/Web/Accessibility/ARIA/forms/Basic_form_hints)を読んでいないのでしたら、まずはそちらをお読みください。ここでは、その手法を拡張します。

こちらがシンプルなフォームです。

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

## 有効性の確認とユーザーへの通知

有効性の確認とユーザーへの通知は、いくつかのステップで構成されます。

1. 電子メールアドレスや入力された名前が有効かを確認します。シンプルにするため、電子メールアドレスは "@" 記号を含んでいるか、名前は 1 文字以上であるかを確認します。
2. 上記の条件に合わない場合、フィールドの `aria-invalid` 属性が "`true`" の値になります。
3. 条件に合わなかった場合、アラートを通じてユーザーに通知します。 JavaScript の '`alert`' 関数を使用する代わりに、シンプルな WAI-ARIA のウィジェットを使用します。これはユーザーにエラーを通知しますが、（JavaScript の既定の '`alert`' 関数の "`onblur`" ハンドラーによって）フォーカスを失うことなくフォームの変更を続けることができます。

私が作成した JavaScript コードは以下のとおりであり、 "`head`" の終了タグの前に挿入しました。

<pre class="brush: js"> &lt;script type="application/javascript"&gt;
 function removeOldAlert()
 {
   var oldAlert = document.getElementById("alert");
   if (oldAlert){
     document.body.removeChild(oldAlert);
   }
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

## `checkValidity` 関数

中核をなすのが `checkValidity` 関数です。これは 3 つの引数をとります。検証を行う `input` の ID、有効性を確かめるために検索する語句、アラートに挿入するエラーメッセージです。

値が有効かを調べるため、この関数は `input` の値 `indexOf` が -1 より大きいかを確認します。検索語句が値の中で見つからないときに、`-1` 以下の値が返ります。

値が無効であるとき、この関数は 2 つのことを行います。

1. 要素の `aria-invalid` 属性を “`true`” に設定します。これは、そこに無効な内容物があることを画面リーダーに示します。
2. 示されたエラーメッセージを持つアラートを追加するため、`addAlert` 関数を呼び出します。

検索語句が見つかった場合は `aria-invalid` 属性を “`false`” にリセットします。加えて、まだ残っているかもしれないアラートを削除します。

## `addAlert` 関数

この関数は始めに、古いアラートを削除します。この機能はシンプルです: id が “`alert`” である要素を探して、発見した場合はその要素を Document Object Model から削除します。

次にこの関数は、アラートのテキストを保持する `div` 要素を作成します。これは “`alert`” という ID を持ちます。また、“alert” が設定されたロールを持ちます。これは属性名に “aria” がついていませんが、実は ARIA から生まれたものです。その理由はロールが、簡素化のため単純に HTML へ移植された、<a class="external text" href="http://www.w3.org/TR/xhtml-role/">XHTML Role Attribute Module</a> に基づいているためです。

テキストは `div` 要素に追加され、また `div` 要素はドキュメントに追加されます。

これが発生したとき、その `div` が現れるとすぐに Firefox は支援技術に対して “alert”イベントを発生させます。ほとんどの画面リーダーは自動的にその div 要素を拾い上げて、読み上げるでしょう。これはパスワードを保存したいかを尋ねる、Firefox の通知バーに似ています。ここで作成した alert はボタンを持たず、何が誤っているかを伝えるのみです。

## "`onblur`" イベントのマジックを加える

あとはイベントハンドラのー追加が残っています。以下のように電子メールアドレスと名前の入力欄の変更が必要です。

<pre class="brush: html"> &lt;input name="name" id="name" aria-required="true"
        onblur="checkValidity('name', ' ', 'Invalid name entered!');"/&gt;
 &lt;br /&gt;
 &lt;input name="email" id="email" aria-required="true"
        onblur="checkValidity('email', '@', 'Invalid e-mail address');"/&gt;
</pre>

**サンプルのテスト**

Firefox 3 および対応済みの画面リーダーを使用している場合は、以下を試してみましょう。

1. 名前欄に (姓を除く) 名だけを入力してください。Tab キーを押すと、無効な名前を入力したことを伝える警告が聞こえるでしょう。Shift-Tab を押して戻り、エラーを修正できます。
2. "@" 記号がない電子メールアドレスを入力してください。Tab を押してフィールドを離れると、有効な電子メールアドレスを入力していないことを伝える警告が聞こえるでしょう。

どちらのケースでも問題のフィールドへフォーカスを戻すと、画面リーダーはそのフィールドのデータが無効であることを伝えるでしょう。 JAWS 9 はこれに対応していますが JAWS 8 は未対応であり、対応している画面リーダーの前バージョンで動作するわけではありません。

## よくある質問

- Q. いくつかの input で、ラベルテキストの “`(required)`” と `aria-required` 属性の両方を置いている理由は?
  - : A. これが実際のフォームで、またサイトを ARIA 未対応のブラウザでアクセスされた場合でも、入力必須のフィールドであることを示したいと考えているためです。
- Q. 無効なデータのフィールドへ自動的にフォーカスを戻さない理由は?
  - : A. これは少なくとも Windows API の仕様で許可されていないなどの理由があります。また、実際のユーザーとの対話なしにフォーカスを飛ばせるようにすることは、一般的によいことではありません。

<div class="warning">TBD: これは再考しましょう -- 個人的には、キーボードトラップを発生させずに行えるのであれば、フォーカスの設定はよいであろうと考えます。</div>
