---
title: URI オーソリティ
short-title: オーソリティ
slug: Web/URI/Reference/Authority
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**オーソリティ**は URI の部分で、[スキーム](/ja/docs/Web/URI/Reference/Schemes)の後でパスより前に来る部分です。 最大 3 つの部分、すなわちユーザー情報、ホスト、ポート番号を持つことがあります。

## 構文

```url
host
host:port
user@host
user@host:port
```

- `host`
  - : 通常、_host_ はリソースをホスティングするサーバーのドメイン名または IP アドレスです。ドメイン名は、DNS （ドメインネームシステム）を使用して IP アドレスに解決されます。
- `port` {{optional_inline}}
  - : _port_ は、サーバーがリクエストを待ち受けするポート番号を示す数字です。これはオプションであり、HTTP の場合は既定で 80、HTTPS の場合は 443 です。他にも、自分自身で既定値を定義したり、必須にしたりするスキームがあります。
- `user` {{optional_inline}}
  - : ユーザーはオプションであり、認証目的で使用します。ウェブの URI では一般的に使用されません。

    > [!WARNING]
    > HTTP の URL にユーザー情報を直接記載することは、機密情報が公開される可能性があるため推奨されません。代わりに、 HTTP 認証やセッション Cookie などの他の方法を使用することができます。フィッシングサイトでは、ユーザーをだますために、あたかもドメイン名であるかのように「ユーザー」部分が表示される、誤解を招く URL を表示することがあります。これは[セマンティック URL 攻撃](https://en.wikipedia.org/wiki/Semantic_URL_attack)という名前で知られています。

## 解説

次の URL を考えてみましょう。

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

この場合のオーソリティは、ホスト名（仕様上はドメイン名）とポートで構成される`www.example.com:80`です。

![ドメイン名](mdn-url-domain@x2.png)

`www.example.com` は URI のホスト名で、リクエストされているウェブサーバーを示します。ここではドメイン名を使用していますが、ホストの {{Glossary("IP address", "IP アドレス")}}を使用することも可能です。
IP アドレスは覚えにくく不便であるため、サーバーにドメイン名が登録されていない場合を除き、ドメイン名を使用するのが一般的です。

![ポート番号](mdn-url-port@x2.png)

`:80` は URL のポート番号で、ウェブサーバー上のリソースにアクセスするために使用される技術的な「門」を示します。ウェブサーバーが、そのリソースへのアクセスを許可するために HTTP プロトコルの標準ポート（HTTP には 80、HTTPS には 443）を使用している場合、通常は省略されます。それ以外の場合は、必須です。

## 例

- `https://developer.mozilla.org`
  - : ホストは `developer.mozilla.org` です。ポート番号は指定されていませんが、`https:` 経由でアクセスされた場合は既定で 443 になります。
- `http://localhost:8080`
  - : ホストは `localhost`、ポートは `8080` です。 `localhost` は特別なホスト名で、ブラウザーがローカルアドレス `127.0.0.1` に解決します。
- `postgresql://postgres:admin123@db:5432`
  - : ホストは `db`、ポートは `5432` です。また、ユーザー `postgres` とパスワード `admin123` を指定します。これは、PostgreSQL データベースに接続する際に使用することができます。
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : 信頼できるウェブサイトを指しているように見える、誤解を招く URL。しかし、ホスト名は `10.0.0.1` であり、`cnn.example.com&story=breaking_news` の部分は「ユーザー」です。

## 仕様書

{{Specifications}}

## 関連情報

- [URI](/ja/docs/Web/URI)
- [www 付きと www なしの URL の選択](/ja/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
