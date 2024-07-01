---
title: SQL Injection (SQL インジェクション)
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

SQL インジェクションはユーザーからの入力の検証が十分でない・行っていないウェブアプリケーションに対して利用されます。悪意のあるクラッカーは、SQL コマンドをウェブアプリケーションに渡し、バックエンドのデータベースにそれを実行させて攻撃します。

SQL インジェクションはデータベースへの不正アクセスを行ったり、データベースから直接情報を取得することが可能です。多くのデータ侵害は SQL インジェクションによるものです。

[![最も一般的な脆弱性の円グラフ： SQLインジェクションが50％、クロスサイトスクリプティングが42％、ソースコード開示が7％。](sql_inj_xss.gif)](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## 攻撃動作

![ユーザー名とパスワードのフィールドがあるログインフォームのスクリーンショット](updates_loginscreen.png)

Username と Password を入力した後、GUI の裏では次の SQL クエリーが実行されます。

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

例えばユーザーが Username に "admin"、 Password に "passwd123" を入力し、 Log in ボタンをクリックします。すると以下の SQL クエリーが実行されます。

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

入力した資格情報が正しければユーザーはログインが許可されます。このようにとてもシンプル（にして脆弱）な構造です。攻撃者はこの脆弱な構造を使って不正アクセスを行います。

攻撃者は下記のようなシンプルな魔法の文字列を入力します。

**Username: _admin_**

**Password: _anything 'or'1'='1_**

そしてログインボタンをクリックすると、以下の SQL クエリーが実行されます。

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

上記のクエリーの Password 部分をよく見てみましょう。

```plain
Password=' anything 'or'1'='1 '
```

パスワードは 'anything' ではないので、 password=anything の結果は偽になります。ですが '1'='1' は真になります。そして OR 演算子によって、 (偽 OR 真) は真になります。結果としてうまく認証を回避できてしまいました。このような単純な文字列（魔法の文字列）によって、データベース全体が危険にさらされます。

## 対策

ユーザーの入力から SQL クエリーを実行する前に、ユーザーの入力に以下のような変更を加えてみましょう。

```sql
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

(1) によって、入力文字内のシングルクォート (') はダブルクォート (")に置換されて、(2) によって、すべての (') の前に (/)が追加されます。改訂された魔法の文字列は、認証回避に失敗して、データベースは安全なままに保たれています。

## 関連情報

- [SQL インジェクション](https://ja.wikipedia.org/wiki/SQLインジェクション)（ウィキペディア）
- [Explanation of SQL injection](https://owasp.org/www-community/attacks/SQL_Injection) on OWASP (Open Web Application Security Project)
