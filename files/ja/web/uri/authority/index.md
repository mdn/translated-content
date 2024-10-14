---
title: URI オーソリティ
slug: Web/URI/Authority
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/ja/docs/Web/URI")}}

**オーソリティ**は URI の部分で、[スキーム](/ja/docs/Web/URI/Schemes)の後でパスより前に来る部分です。 最大 3 つの部分、すなわちユーザー情報、ホスト、ポート番号を持つことがあります。

## 構文

```url
host
host:port
user@host
user@host:port
```

- host
  - : 通常、_host_ はリソースをホストするサーバーのドメイン名または IP アドレスです。ドメイン名は、DNS（ドメインネームシステム）を使用して IP アドレスに解決されます。
- port {{optional_inline}}
  - : _port_ は、サーバーがリクエストを待ち受けするポート番号を示す数字です。これはオプションであり、HTTP の場合は既定で 80、HTTPS の場合は 443 です。他にも、自分自身で既定値を定義したり、必須にしたりするスキームがあります。
- user {{optional_inline}}

  - : ユーザーはオプションであり、認証目的で使用します。ウェブの URI では一般的に使用されません。

    > [!WARNING]
    > HTTP の URL にユーザー情報を直接記載することは、機密情報が公開される可能性があるため推奨されません。代わりに、HTTP 認証やセッション Cookie などの他の方法を使用することができます。フィッシングサイトでは、ユーザーをだますために、あたかもドメイン名であるかのように「ユーザー」部分が表示される、誤解を招く URL を表示することがあります。これは[セマンティック URL 攻撃](https://en.wikipedia.org/wiki/Semantic_URL_attack)という名前で知られています。

## 例

- `https://developer.mozilla.org`
  - : ホストは `developer.mozilla.org` です。ポート番号は指定されていませんが、`https:` 経由でアクセスされた場合は既定で 443 になります。
- `http://localhost:8080`
  - : ホストは `localhost`、ポートは `8080` です。 `localhost` は特別なホスト名で、ブラウザーがローカルアドレス `127.0.0.1` に解決します。
- `postgresql://postgres:admin123@db:5432`
  - : ホストは `db`、ポートは `5432` です。また、ユーザー `postgres` とパスワード `admin123` を指定します。これは、PostgreSQL データベースに接続する際に使用することができます。
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : 信頼できるウェブサイトを指しているように見える、誤解を招く URL。しかし、ホスト名は `10.0.0.1` であり、`cnn.example.com&story=breaking_news` の部分は「ユーザー」です。

## 関連情報

- [URI](/ja/docs/Web/URI)
- [www 付きと www なしの URL の選択](/ja/docs/Web/URI/Authority/Choosing_between_www_and_non-www_URLs)
