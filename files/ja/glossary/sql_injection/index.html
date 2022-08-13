---
title: SQL Injection (SQLインジェクション)
slug: Glossary/SQL_Injection
tags:
  - Glossary
  - Security
  - Sql
  - Sql Injection
  - Webapp
translation_of: Glossary/SQL_Injection
---
<p>SQL インジェクションはユーザーからの入力の検証が十分でない・行っていないウェブアプリケーションに対して利用されます。悪意のあるクラッカーは、SQL コマンドをウェブアプリケーションに渡し、バックエンドのデータベースにそれを実行させて攻撃します。</p>

<p>SQL インジェクションはデータベースへの不正アクセスを行ったり、データベースから直接情報を取得することが可能です。多くのデータ侵害は SQL インジェクションによるものです。</p>

<p><a href="http://www.acunetix.com/wp-content/uploads/2010/09/sql_inj_xss.gif"><img alt="" src="sql_inj_xss.gif"></a></p>

<h2 id="How_It_Works" name="How_It_Works">攻撃動作</h2>

<p><img alt="" src="updates_loginscreen.png"></p>

<p>Username と Password を入力した後、GUI の裏では次の SQL クエリが実行されます。</p>

<pre style="margin-left: 0px;"><strong><span style="color: #0000cd;">"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";</span></strong></pre>

<p>例えばユーザーが Username に"admin"、Password に"passwd123"を入力し、Log in ボタンをクリックします。すると以下の SQL クエリが実行されます。</p>

<pre><strong><span style="color: #0000cd;">"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";</span>
</strong></pre>

<p>入力した認証情報が正しければユーザーはログインが許可されます。このようにとてもシンプル(にして脆弱)な構造です。攻撃者はこの脆弱な構造を使って不正アクセスを行います。</p>

<p>攻撃者は下記のようなシンプルな魔法の文字列を入力します。</p>

<p><strong>Username: <em>admin</em></strong></p>

<p><strong>Password: <em>anything 'or'1'='1</em></strong></p>

<p>そして log in ボタンをクリックすると、以下の SQL クエリが実行されます。</p>

<pre><strong><span style="color: #0000cd;">"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";</span>
</strong></pre>

<p>上記のクエリの Password部分をよく見てみましょう。</p>

<pre><strong>Password=' anything 'or'1'='1 '</strong></pre>



<p>パスワードは"anything"ではないので、Password='anything'の結果は偽になります。ですが'1'='1'は真になります。そして OR演算子によって、(偽 OR 真)は真になります。結果としてうまく認証を回避できてしまいました。このような単純な文字列(魔法の文字列)によって、データベース全体が危険にさらされます。</p>

<h2 id="How_To_Prevent" name="How_To_Prevent">対策</h2>

<p style="margin-left: 40px;">ユーザーの入力から SQL クエリを実行する前に、ユーザーの入力に以下のような変更を加えてみましょう。</p>

<pre><span style="color: #0000ff;">$id = $_GET['id'] </span>

<span style="color: #0000ff;">(1) $id = stripslashes($id)</span>

<span style="color: #0000ff;">(2) $id = mysql_real_escape_string($id)</span></pre>

<p>(1) によって、入力文字内のシングルクォート (') はダブルクォート (")に置換されて、(2) によって、すべての (') の前に (/)が追加されます。改訂された魔法の文字列は、認証回避に失敗して、データベースは安全なままに保たれています。</p>

<h2 id="Learn_more" name="Learn_more">関連項目</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia の {{interwiki("wikipedia", "SQL injection")}}</li>
 <li><a href="https://www.owasp.org/index.php/SQL_Injection">Explanation of SQL injection </a>on OWASP (Open Web Application Security Project)</li>
</ul>
