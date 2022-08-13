---
title: Control flow (制御フロー)
slug: Glossary/Control_flow
tags:
  - CodingScripting
  - Glossary
  - JavaScript
translation_of: Glossary/Control_flow
---
<p><em>制御フロー</em>（制御の流れ）は、コンピューターがスクリプト内の文を実行する順序です。</p>

<p>条件やループなどの（非常によく出てくる）制御フローを変更する構造にコンピューターが出合わない限り、コードはファイルの最初の行から順に最後の行まで実行します。</p>

<p>たとえば、ウェブページのフォームからのユーザーのデータを検証するために使用されるスクリプトを想像してみてください。 スクリプトは有効なデータを送信しますが、ユーザーが必要なフィールドを空のままにしておくと、スクリプトはそれを入力するように要求します。 これを行うには、スクリプトは{{Glossary("Conditional", "条件付き")}}構造または <code>if...else</code> を使用し、フォームが完全であるかどうかによって異なるコードを実行します。</p>

<pre>if (field==empty) {
    promptUser();
} else {
    submitForm();
}
</pre>

<p>{{glossary("JavaScript")}} や {{glossary("PHP")}} などの一般的なスクリプトには、条件付き、{{Glossary("Loop", "ループ")}}、{{Glossary("Function", "関数")}}などの多くの制御構造が含まれています。 スクリプトの一部は、{{Glossary("Event", "イベント")}}が発生したときに実行するように設定することもできます。</p>

<p>たとえば、上記の抜粋は、ユーザーがフォームの [送信] ボタンをクリックしたときに実行される関数内にある可能性があります。 この関数にはループを含めることもできます。 ループは、フォーム内のすべてのフィールドを反復し、それぞれを順にチェックします。 <code>if</code> と <code>else</code> のセクションのコードを振り返ってみると、<code>promptUser</code> と <code>submitForm</code> という行はスクリプト内の他の関数を呼び出すこともできます。 ご覧のように、制御構造はわずか数行のコードでも複雑な処理フローを指示することがあります。</p>

<p>制御フローとは、スクリプトを読むときに、最初から最後まで読むだけでなく、プログラムの構造や実行順序にどのように影響するかを調べる必要があることを意味します。</p>

<h2 id="Learn_more" name="Learn_more">より詳しく知る</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia 上の {{Interwiki("wikipedia", "制御構造")}}</li>
</ul>

<h3 id="Technical_reference" name="Technical_reference">技術文書</h3>

<ul>
 <li>MDN の <a href="/ja/docs/Web/JavaScript/Reference#Control_flow">JavaScript リファレンス - 制御フロー</a></li>
</ul>

<h3 id="Learn_about_it" name="Learn_about_it">それについて学ぶ</h3>

<ul>
 <li>MDN の <a href="/ja/docs/Web/JavaScript/Guide/Statements">文（制御フロー）</a></li>
</ul>
