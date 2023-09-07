---
title: HTTP 認証
slug: Web/HTTP/Authentication
---

{{HTTPSidebar}}

HTTP はアクセス制御と認証の基本的な枠組みを提供しています。
このページでは、 HTTP の認証の枠組みを紹介し、サーバーで HTTP の "Basic" 認証を使用してアクセスを制限する方法を紹介します。

## 一般的な HTTP 認証の枠組み

{{RFC("7235")}} は、サーバーがクライアントのリクエストを{{glossary("challenge", "チャレンジ")}}し、クライアントが認証情報を提供するために使用できる HTTP 認証フレームワークを定義しています。

チャレンジとレスポンスの流れは以下のようになります。

1. サーバーは少なくとも 1 回のチャレンジで、クライアントに {{HTTPStatus("401")}} (Unauthorized) レスポンスステータスを返し、 {{HTTPHeader("WWW-Authenticate")}} レスポンスヘッダーを含めて認証方法に関する情報を提供します。
2. そのサーバーで自身を認証したいクライアントは、 {{HTTPHeader("Authorization")}} リクエストヘッダーフィールドに資格情報を含めることでそれを行うことができます。
3. 通常、クライアントはユーザーにパスワードのプロンプトを表示し、正しい `Authorization` ヘッダーを含むリクエストを発行します。

![クライアントとサーバーのライフライン間の HTTP メッセージを説明するシーケンス図。](http-auth-sequence-diagram.png)

上記の全体的なメッセージの流れは、（すべてではありませんが）多くの[認証方式](#認証方式)で同じです。
ヘッダーに含まれる実際の情報とそのエンコード方法は変わります。

> **警告:** 上記の図で使用されている "Basic" 認証方式は、資格情報をエンコードしますが暗号化はしません。
> これは安全な接続 (HTTPS/TLS) を介して行わなければ完全に安全ではありません。

### プロキシー認証

*プロキシー認証*にも同じチャレンジとレスポンスのメカニズムを使用することができます。
リソース認証とプロキシー認証の両方が共存できるように、別なヘッダーとステータスコードのセットが必要です。プロキシーの場合、チャレンジのステータスコードは {{HTTPStatus("407")}} (Proxy Authentication Required) であり、 {{HTTPHeader("Proxy-Authenticate")}} レスポンスヘッダーにプロキシーで受け付けるためのチャレンジを 1 つ以上設定します。プロキシーサーバーに資格情報を伝えるには、 {{HTTPHeader("Proxy-Authorization")}} リクエストヘッダーが使用されます。

### アクセスの不許可

（プロキシー）サーバーが*無効な*資格情報を受け取った場合、 {{HTTPStatus("401")}} `Unauthorized` または {{HTTPStatus("407")}} `Proxy Authentication Required` で応答する必要があり、ユーザーは新しいリクエストを送ったり、 {{HTTPHeader("Authorization")}} ヘッダーフィールドを置き換えたりすることができます。

（プロキシー）サーバーが、有効であるが指定されたリソースにアクセスする要件を満たさない資格情報を受け取った場合、サーバーは {{HTTPStatus("403")}} `Forbidden` ステータスコードを返す必要があります。 {{HTTPStatus("401")}} `Unauthorized` または {{HTTPStatus("407")}} `Proxy Authentication Required` とは異なり、このユーザーとブラウザーは再試行することができません。

どの場合でも、サーバーは {{HTTPStatus("404")}} `Not Found` ステータスコードを返すことで、十分な権限がない、または正しく認証されていないユーザーからページの存在を隠すことができます。

### オリジン間の画像の認証

（ブラウザーで修正された）潜在的なセキュリティホールとして、サイトをまたいだ画像の認証があります。
[Firefox 59](/ja/docs/Mozilla/Firefox/Releases/59) 以降、異なるオリジンから現在の文書に読み込まれる画像リソースは、 HTTP 認証ダイアログを起動することができなくなり ([Firefox バグ 1423146](https://bugzil.la/1423146))、攻撃者が任意の画像をサードパーティ製のページに埋め込んでユーザーの認証情報を盗むことを防ぎます。

### HTTP 認証の文字エンコーディング

ブラウザーはユーザー名とパスワードに `utf-8` エンコーディングを使用します。

Firefox は `ISO-8859-1` を使用していましたが、他のブラウザーとの互換性のために `utf-8` に変更され、 [Firefox バグ 1419658](https://bugzil.la/1419658) で説明されているような潜在的な問題を回避します。

### WWW-Authenticate および Proxy-Authenticate ヘッダー

{{HTTPHeader("WWW-Authenticate")}} および {{HTTPHeader("Proxy-Authenticate")}} レスポンスヘッダーは、リソースへのアクセスに使用する認証メソッドを定義します。どの認証方式を使用するかを指定するため、認証を希望するクライアントは資格情報の提供方法を知ることができます。

これらのヘッダーの構文は以下の通りです。

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

ここで、 `<type>` は認証方式です ("Basic" は最も一般的な方式であり、[以下で紹介](#basic_認証方式)します)。 _realm_ は保護された領域を説明するため、または保護の範囲を示すために使用されます。これは、「ステージングサイトへのアクセス」などのようなメッセージにすることができ、それによってユーザーが、どの領域にアクセスしようとしているかを知ることができます。

### Authorization および Proxy-Authorization ヘッダー

{{HTTPHeader("Authorization")}} および {{HTTPHeader("Proxy-Authorization")}} リクエストヘッダーには、（プロキシー）サーバーがユーザーエージェントを認証する資格情報が入ります。ここでは、 `<type>` が再び必要となり、その後に使用される認証方式によって符号化または暗号化された資格情報が続きます。

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

## 認証方式

一般的な HTTP 認証フレームワークは、いくつかの認証方式によって使用されます。方式はセキュリティ強度とクライアント、またはサーバーソフトウェアでの可用性が異なる場合があります。

IANA は[認証方式の一覧](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)を管理していますが、 Amazon AWS などのホストサービスが提供する他の方式もあります。一般的な認証方式には次のものがあります。

よく使われる認証方式には次のようなものがあります。

- **Basic**
  - : {{rfc(7617)}} を参照。 base64 でエンコードされた資格情報です。詳しくは後述します。
- **Bearer**
  - : {{rfc(6750)}} を参照。 OAuth 2.0 で保護されたリソースにアクセスするベアラートークンです。
- **Digest**
  - : {{rfc(7616)}} を参照。 Firefox 93 以降は SHA-256 暗号化に対応しています。以前のバージョンでは MD5 ハッシュだけに対応していまました（非推奨）。
- **HOBA**
  - : {{rfc(7486)}} 3 章を参照、 HTTP オリジン認証 (**H**TTP **O**rigin-**B**ound **A**uthentication)、電子署名ベース
- **Mutual**
  - : {{rfc(8120)}} を参照
- **Negotiate** / **NTLM**
  - : [RFC4599](https://www.ietf.org/rfc/rfc4559.txt) を参照
- **VAPID**
  - : {{rfc(8292)}} を参照
- **SCRAM**
  - : {{rfc(7804)}} を参照
- **AWS4-HMAC-SHA256**
  - : [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html) を参照。この方式は AWS3 サーバー認証に使用されています。

方式は、セキュリティの強さや、クライアントまたはサーバーソフトウェアで利用可能かどうかが異なります。

"Basic" 認証方式はセキュリティが非常に弱いのですが、広く対応されており、セットアップが簡単です。
以下で詳しく説明します。

## Basic 認証方式

"Basic" HTTP 認証方式は {{rfc(7617)}} で定義されており、資格情報を送信するのに、ユーザー ID とパスワードの組を base64 を使用してエンコードします。

### Basic 認証の安全性

ユーザー ID とパスワードは、ネットワークを介してクリアテキストとして渡されるため（base64 でエンコードされますが、 base64 は可逆エンコードです）、 Basic 認証方式は**安全ではありません**。 Basic 認証と組み合わせて HTTPS/TLS を使用する必要があります。これらの追加のセキュリティ強化機能がない場合は、機密情報や重要な情報を保護するために Basic 認証を使用しないでください。

### Apache と Basic 認証によるアクセス制限

Apache サーバー上のディレクトリをパスワードで保護するには、 `.htaccess` ファイルと `.htpasswd` ファイルが必要です。

`.htaccess` ファイルは通常、次のようになります。

```
AuthType Basic
AuthName "Access to the staging site"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

`.htaccess` ファイルは `.htpasswd` ファイルを参照しており、このファイルの各行にはユーザー名とパスワードをコロン (`:`) で区切って記述されています。実際のパスワードは（この場合は MD5 ベースのハッシュを使用して）[ハッシュ化されている](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html)ので表示できません。なお、必要に応じて `.htpasswd` ファイルの名前を変更することができますが、このファイルには誰にもアクセスできないようにしてください。（Apache は通常 `.ht*` ファイルへのアクセスを禁止するように構成されています）。

```
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### nginx と Basic 認証によるアクセス制限

nginx の場合は、保護する場所とパスワードで保護された領域に名前を指定する `auth_basic` ディレクティブを指定する必要があります。`auth_basic_user_file` ディレクティブは上の Apache の例のように、暗号化されたユーザー資格情報を含む `.htpasswd` ファイルを指します。

```
location /status {
    auth_basic           "Access to the staging site";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### URL 内の認証情報を使用したアクセス

多くのクライアントでは次のように、ユーザー名とパスワードを含むエンコードされた URL を使用してログインプロンプトを回避できます。

```http example-bad
https://username:password@www.example.com/
```

**これらの URL の使用は推奨されていません。**
Chrome ではセキュリティ上の理由から、URL の `username:password@` 部分が[削除されます](https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7)。 Firefox ではサイトが実際に認証を要求するかどうかをチェックし、そうでない場合 Firefox はユーザーに「"www\.example\.com" というサイトに "username" というユーザー名でログインしようとしていますが、このウェブサイトは認証を必要としません。これはあなたを騙そうとしている可能性があります。」と警告します。

## 関連情報

- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
