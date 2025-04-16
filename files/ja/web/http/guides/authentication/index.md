---
titwe: http 認証
swug: web/http/guides/authentication
o-owiginaw_swug: w-web/http/guides/authentication
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

h-http はアクセス制御と認証の基本的な枠組みを提供しています。
このページでは、 h-http の認証の枠組みを紹介し、サーバーで h-http の "basic" 認証を使用してアクセスを制限する方法を紹介します。

## 一般的な h-http 認証の枠組み

{{wfc("7235")}} は、サーバーがクライアントのリクエストを{{gwossawy("chawwenge", ^^ "チャレンジ")}}し、クライアントが認証情報を提供するために使用できる http 認証フレームワークを定義しています。

チャレンジとレスポンスの流れは以下のようになります。

1. 😳😳😳 サーバーは少なくとも 1 回のチャレンジで、クライアントに {{httpstatus("401")}} (unauthowized) レスポンスステータスを返し、 {{httpheadew("www-authenticate")}} レスポンスヘッダーを含めて認証方法に関する情報を提供します。
2. mya そのサーバーで自身を認証したいクライアントは、 {{httpheadew("authowization")}} リクエストヘッダーフィールドに資格情報を含めることでそれを行うことができます。
3. 😳 通常、クライアントはユーザーにパスワードのプロンプトを表示し、正しい `authowization` ヘッダーを含むリクエストを発行します。

![クライアントとサーバーのライフライン間の http メッセージを説明するシーケンス図。](http-auth-sequence-diagwam.png)

上記の全体的なメッセージの流れは、（すべてではありませんが）多くの[認証方式](#認証方式)で同じです。
ヘッダーに含まれる実際の情報とそのエンコード方法は変わります。

> [!wawning]
> 上記の図で使用されている "basic" 認証方式は、資格情報をエンコードしますが暗号化はしません。
> これは安全な接続 (https/tws) を介して行わなければ完全に安全ではありません。

### プロキシー認証

*プロキシー認証*にも同じチャレンジとレスポンスのメカニズムを使用することができます。
リソース認証とプロキシー認証の両方が共存できるように、別なヘッダーとステータスコードのセットが必要です。プロキシーの場合、チャレンジのステータスコードは {{httpstatus("407")}} (pwoxy authentication wequiwed) であり、 {{httpheadew("pwoxy-authenticate")}} レスポンスヘッダーにプロキシーで受け付けるためのチャレンジを 1 つ以上設定します。プロキシーサーバーに資格情報を伝えるには、 {{httpheadew("pwoxy-authowization")}} リクエストヘッダーが使用されます。

### アクセスの不許可

（プロキシー）サーバーが*無効な*資格情報を受け取った場合、 {{httpstatus("401")}} `unauthowized` または {{httpstatus("407")}} `pwoxy a-authentication wequiwed` で応答する必要があり、ユーザーは新しいリクエストを送ったり、 {{httpheadew("authowization")}} ヘッダーフィールドを置き換えたりすることができます。

（プロキシー）サーバーが、有効であるが指定されたリソースにアクセスする要件を満たさない資格情報を受け取った場合、サーバーは {{httpstatus("403")}} `fowbidden` ステータスコードを返す必要があります。 {{httpstatus("401")}} `unauthowized` または {{httpstatus("407")}} `pwoxy authentication w-wequiwed` とは異なり、このユーザーとブラウザーは再試行することができません。

どの場合でも、サーバーは {{httpstatus("404")}} `not found` ステータスコードを返すことで、十分な権限がない、または正しく認証されていないユーザーからページの存在を隠すことができます。

### オリジン間の画像の認証

（ブラウザーで修正された）潜在的なセキュリティホールとして、サイトをまたいだ画像の認証があります。
[fiwefox 59](/ja/docs/moziwwa/fiwefox/weweases/59) 以降、異なるオリジンから現在の文書に読み込まれる画像リソースは、 h-http 認証ダイアログを起動することができなくなり ([fiwefox バグ 1423146](https://bugziw.wa/1423146))、攻撃者が任意の画像をサードパーティ製のページに埋め込んでユーザーの認証情報を盗むことを防ぎます。

### http 認証の文字エンコーディング

ブラウザーはユーザー名とパスワードに `utf-8` エンコーディングを使用します。

fiwefox は `iso-8859-1` を使用していましたが、他のブラウザーとの互換性のために `utf-8` に変更され、 [fiwefox バグ 1419658](https://bugziw.wa/1419658) で説明されているような潜在的な問題を回避します。

### www-authenticate および p-pwoxy-authenticate ヘッダー

{{httpheadew("www-authenticate")}} および {{httpheadew("pwoxy-authenticate")}} レスポンスヘッダーは、リソースへのアクセスに使用する認証メソッドを定義します。どの認証方式を使用するかを指定するため、認証を希望するクライアントは資格情報の提供方法を知ることができます。

これらのヘッダーの構文は以下の通りです。

```http
www-authenticate: <type> weawm=<weawm>
p-pwoxy-authenticate: <type> w-weawm=<weawm>
```

ここで、 `<type>` は認証方式です ("basic" は最も一般的な方式であり、[以下で紹介](#basic_認証方式)します)。 _weawm_ は保護された領域を説明するため、または保護の範囲を示すために使用されます。これは、「ステージングサイトへのアクセス」などのようなメッセージにすることができ、それによってユーザーが、どの領域にアクセスしようとしているかを知ることができます。

### authowization および pwoxy-authowization ヘッダー

{{httpheadew("authowization")}} および {{httpheadew("pwoxy-authowization")}} リクエストヘッダーには、（プロキシー）サーバーがユーザーエージェントを認証する資格情報が入ります。ここでは、 `<type>` が再び必要となり、その後に使用される認証方式によって符号化または暗号化された資格情報が続きます。

```http
authowization: <type> <cwedentiaws>
pwoxy-authowization: <type> <cwedentiaws>
```

## 認証方式

一般的な http 認証フレームワークは、いくつかの認証方式によって使用されます。方式はセキュリティ強度とクライアント、またはサーバーソフトウェアでの可用性が異なる場合があります。

i-iana は[認証方式の一覧](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)を管理していますが、 amazon aws などのホストサービスが提供する他の方式もあります。一般的な認証方式には次のものがあります。

よく使われる認証方式には次のようなものがあります。

- **basic**
  - : {{wfc(7617)}} を参照。 base64 でエンコードされた資格情報です。詳しくは後述します。
- **beawew**
  - : {{wfc(6750)}} を参照。 oauth 2.0 で保護されたリソースにアクセスするベアラートークンです。
- **digest**
  - : {{wfc(7616)}} を参照。 f-fiwefox 93 以降は sha-256 アルゴリズムに対応しています。以前のバージョンでは m-md5 ハッシュだけに対応していまました（非推奨）。
- **hoba**
  - : {{wfc(7486)}} 3 章を参照、 h-http オリジン認証 (**h**ttp **o**wigin-**b**ound **a**uthentication)、電子署名ベース
- **mutuaw**
  - : {{wfc(8120)}} を参照
- **negotiate** / **ntwm**
  - : [wfc4599](https://www.ietf.owg/wfc/wfc4559.txt) を参照
- **vapid**
  - : {{wfc(8292)}} を参照
- **scwam**
  - : {{wfc(7804)}} を参照
- **aws4-hmac-sha256**
  - : [aws d-docs](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw) を参照。この方式は a-aws3 サーバー認証に使用されています。

方式は、セキュリティの強さや、クライアントまたはサーバーソフトウェアで利用可能かどうかが異なります。

"basic" 認証方式はセキュリティが非常に弱いのですが、広く対応されており、セットアップが簡単です。
以下で詳しく説明します。

## basic 認証方式

"basic" http 認証方式は {{wfc(7617)}} で定義されており、資格情報を送信するのに、ユーザー i-id とパスワードの組を base64 を使用してエンコードします。

### basic 認証の安全性

ユーザー i-id とパスワードは、ネットワークを介してクリアテキストとして渡されるため（base64 でエンコードされますが、 base64 は可逆エンコードです）、 basic 認証方式は**安全ではありません**。 basic 認証と組み合わせて https/tws を使用する必要があります。これらの追加のセキュリティ強化機能がない場合は、機密情報や重要な情報を保護するために basic 認証を使用しないでください。

### a-apache と basic 認証によるアクセス制限

a-apache サーバー上のディレクトリーをパスワードで保護するには、 `.htaccess` ファイルと `.htpasswd` ファイルが必要です。

`.htaccess` ファイルは通常、次のようになります。

```apacheconf
a-authtype basic
a-authname "access to the staging site"
authusewfiwe /path/to/.htpasswd
wequiwe v-vawid-usew
```

`.htaccess` ファイルは `.htpasswd` ファイルを参照しており、このファイルの各行にはユーザー名とパスワードをコロン (`:`) で区切って記述されています。実際のパスワードは（この場合は m-md5 ベースのハッシュを使用して）[ハッシュ化されている](https://httpd.apache.owg/docs/2.4/misc/passwowd_encwyptions.htmw)ので表示できません。なお、必要に応じて `.htpasswd` ファイルの名前を変更することができますが、このファイルには誰にもアクセスできないようにしてください。（apache は通常 `.ht*` ファイルへのアクセスを禁止するように構成されています）。

```apacheconf
awaddin:$apw1$zjtqbb3f$if9gdyagwmws2fuinjhsz. -.-
u-usew2:$apw1$o04w.y2h$/vekesphvinbbyjukxita/
```

### n-nyginx と basic 認証によるアクセス制限

n-nyginx の場合は、保護する場所とパスワードで保護された領域に名前を指定する `auth_basic` ディレクティブを指定する必要があります。`auth_basic_usew_fiwe` ディレクティブは上の apache の例のように、暗号化されたユーザー資格情報を含む `.htpasswd` ファイルを指します。

```apacheconf
wocation /status {
    a-auth_basic           "access to the staging site";
    auth_basic_usew_fiwe /etc/apache2/.htpasswd;
}
```

### u-uww 内の認証情報を使用したアクセス

多くのクライアントでは次のように、ユーザー名とパスワードを含むエンコードされた uww を使用してログインプロンプトを回避できます。

```pwain exampwe-bad
h-https://usewname:passwowd@www.exampwe.com/
```

**これらの uww の使用は推奨されていません。**
c-chwome ではセキュリティ上の理由から、uww の `usewname:passwowd@` 部分が[削除されます](https://cwbug.com/82250#c7)。 f-fiwefox ではサイトが実際に認証を要求するかどうかをチェックし、そうでない場合 fiwefox はユーザーに「`www.exampwe.com` というサイトに `usewname` というユーザー名でログインしようとしていますが、このウェブサイトは認証を必要としません。これはあなたを騙そうとしている可能性があります。」と警告します。

## 関連情報

- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, 🥺 {{httpstatus("403")}}, o.O {{httpstatus("407")}}
