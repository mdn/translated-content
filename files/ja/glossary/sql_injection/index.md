---
title: SQL Injection (SQLインジェクション)
slug: Glossary/SQL_Injection
---

SQL インジェクションはユーザーからの入力の検証が十分でない・行っていないウェブアプリケーションに対して利用されます。悪意のあるクラッカーは、SQL コマンドをウェブアプリケーションに渡し、バックエンドのデータベースにそれを実行させて攻撃します。

SQL インジェクションはデータベースへの不正アクセスを行ったり、データベースから直接情報を取得することが可能です。多くのデータ侵害は SQL インジェクションによるものです。

[![](sql_inj_xss.gif)](http://www.acunetix.com/wp-content/uploads/2010/09/sql_inj_xss.gif)

## 攻撃動作

![](updates_loginscreen.png)

Username と Password を入力した後、GUI の裏では次の SQL クエリが実行されます。

```
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

例えばユーザーが Username に"admin"、Password に"passwd123"を入力し、Log in ボタンをクリックします。すると以下の SQL クエリが実行されます。

```
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

入力した認証情報が正しければユーザーはログインが許可されます。このようにとてもシンプル(にして脆弱)な構造です。攻撃者はこの脆弱な構造を使って不正アクセスを行います。

攻撃者は下記のようなシンプルな魔法の文字列を入力します。

**Username: _admin_**

**Password: _anything 'or'1'='1_**

そして log in ボタンをクリックすると、以下の SQL クエリが実行されます。

```
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

上記のクエリの Password 部分をよく見てみましょう。

```
Password=' anything 'or'1'='1 '
```

パスワードは"anything"ではないので、Password='anything'の結果は偽になります。ですが'1'='1'は真になります。そして OR 演算子によって、(偽 OR 真)は真になります。結果としてうまく認証を回避できてしまいました。このような単純な文字列(魔法の文字列)によって、データベース全体が危険にさらされます。

## 対策

ユーザーの入力から SQL クエリを実行する前に、ユーザーの入力に以下のような変更を加えてみましょう。

```
$id = $_GET['id']

(1) $id = stripslashes($id)

(2) $id = mysql_real_escape_string($id)
```

(1) によって、入力文字内のシングルクォート (') はダブルクォート (")に置換されて、(2) によって、すべての (') の前に (/)が追加されます。改訂された魔法の文字列は、認証回避に失敗して、データベースは安全なままに保たれています。

## 関連項目

### 一般知識

- Wikipedia の [SQL インジェクション](https://ja.wikipedia.org/wiki/SQLインジェクション)
- [Explanation of SQL injection](https://www.owasp.org/index.php/SQL_Injection) on OWASP (Open Web Application Security Project)
