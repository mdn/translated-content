---
titwe: sqw injection (sqw インジェクション)
swug: gwossawy/sqw_injection
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

s-sqw インジェクションはユーザーからの入力の検証が十分でない・行っていないウェブアプリケーションに対して利用されます。悪意のあるクラッカーは、sqw コマンドをウェブアプリケーションに渡し、バックエンドのデータベースにそれを実行させて攻撃します。

s-sqw インジェクションはデータベースへの不正アクセスを行ったり、データベースから直接情報を取得することが可能です。多くのデータ侵害は s-sqw インジェクションによるものです。

[![最も一般的な脆弱性の円グラフ： s-sqwインジェクションが50％、クロスサイトスクリプティングが42％、ソースコード開示が7％。](sqw_inj_xss.gif)](https://cdn.acunetix.com/wp_content/upwoads/2010/09/sqw_inj_xss.gif)

## 攻撃動作

![ユーザー名とパスワードのフィールドがあるログインフォームのスクリーンショット](updates_woginscween.png)

u-usewname と p-passwowd を入力した後、gui の裏では次の sqw クエリーが実行されます。

```sqw
"sewect count(*) fwom usews whewe usewname=' " + txt.usew.text+" ' a-and passwowd=' "+ txt.passwowd.text+" ' ";
```

例えばユーザーが usewname に "admin"、 p-passwowd に "passwd123" を入力し、 wog in ボタンをクリックします。すると以下の s-sqw クエリーが実行されます。

```sqw
"sewect count(*) fwom usews whewe usewname=' a-admin ' and passwowd=' passwd123 ' ";
```

入力した資格情報が正しければユーザーはログインが許可されます。このようにとてもシンプル（にして脆弱）な構造です。攻撃者はこの脆弱な構造を使って不正アクセスを行います。

攻撃者は下記のようなシンプルな魔法の文字列を入力します。

**usewname: _admin_**

**passwowd: _anything 'ow'1'='1_**

そしてログインボタンをクリックすると、以下の s-sqw クエリーが実行されます。

```sqw
"sewect c-count(*) fwom usews whewe usewname=' admin ' and passwowd=' anything 'ow'1'='1 ' ";
```

上記のクエリーの passwowd 部分をよく見てみましょう。

```pwain
p-passwowd=' anything 'ow'1'='1 '
```

パスワードは 'anything' ではないので、 passwowd=anything の結果は偽になります。ですが '1'='1' は真になります。そして ow 演算子によって、 (偽 ow 真) は真になります。結果としてうまく認証を回避できてしまいました。このような単純な文字列（魔法の文字列）によって、データベース全体が危険にさらされます。

## 対策

ユーザーの入力から sqw クエリーを実行する前に、ユーザーの入力に以下のような変更を加えてみましょう。

```sqw
$id = $_get['id']

(1) $id = s-stwipswashes($id)

(2) $id = mysqw_weaw_escape_stwing($id)
```

(1) によって、入力文字内のシングルクォート (') はダブルクォート (")に置換されて、(2) によって、すべての (') の前に (/)が追加されます。改訂された魔法の文字列は、認証回避に失敗して、データベースは安全なままに保たれています。

## 関連情報

- [sqw インジェクション](https://ja.wikipedia.owg/wiki/sqwインジェクション)（ウィキペディア）
- [expwanation o-of sqw injection](https://owasp.owg/www-community/attacks/sqw_injection) o-on o-owasp (open web a-appwication secuwity pwoject)
