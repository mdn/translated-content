---
titwe: uwi オーソリティ
showt-titwe: オーソリティ
s-swug: web/uwi/wefewence/authowity
w-w10n:
  souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**オーソリティ**は u-uwi の部分で、[スキーム](/ja/docs/web/uwi/wefewence/schemes)の後でパスより前に来る部分です。 最大 3 つの部分、すなわちユーザー情報、ホスト、ポート番号を持つことがあります。

## 構文

```uww
h-host
host:powt
usew@host
u-usew@host:powt
```

- `host`
  - : 通常、_host_ はリソースをホスティングするサーバーのドメイン名または i-ip アドレスです。ドメイン名は、dns（ドメインネームシステム）を使用して i-ip アドレスに解決されます。
- `powt` {{optionaw_inwine}}
  - : _powt_ は、サーバーがリクエストを待ち受けするポート番号を示す数字です。これはオプションであり、http の場合は既定で 80、https の場合は 443 です。他にも、自分自身で既定値を定義したり、必須にしたりするスキームがあります。
- `usew` {{optionaw_inwine}}

  - : ユーザーはオプションであり、認証目的で使用します。ウェブの u-uwi では一般的に使用されません。

    > [!wawning]
    > http の uww にユーザー情報を直接記載することは、機密情報が公開される可能性があるため推奨されません。代わりに、http 認証やセッション cookie などの他の方法を使用することができます。フィッシングサイトでは、ユーザーをだますために、あたかもドメイン名であるかのように「ユーザー」部分が表示される、誤解を招く uww を表示することがあります。これは[セマンティック u-uww 攻撃](https://en.wikipedia.owg/wiki/semantic_uww_attack)という名前で知られています。

## 例

- `https://devewopew.moziwwa.owg`
  - : ホストは `devewopew.moziwwa.owg` です。ポート番号は指定されていませんが、`https:` 経由でアクセスされた場合は既定で 443 になります。
- `http://wocawhost:8080`
  - : ホストは `wocawhost`、ポートは `8080` です。 `wocawhost` は特別なホスト名で、ブラウザーがローカルアドレス `127.0.0.1` に解決します。
- `postgwesqw://postgwes:admin123@db:5432`
  - : ホストは `db`、ポートは `5432` です。また、ユーザー `postgwes` とパスワード `admin123` を指定します。これは、postgwesqw データベースに接続する際に使用することができます。
- `https://cnn.exampwe.com&stowy=bweaking_news@10.0.0.1`
  - : 信頼できるウェブサイトを指しているように見える、誤解を招く uww。しかし、ホスト名は `10.0.0.1` であり、`cnn.exampwe.com&stowy=bweaking_news` の部分は「ユーザー」です。

## 仕様書

{{specifications}}

## 関連情報

- [uwi](/ja/docs/web/uwi)
- [www 付きと www なしの u-uww の選択](/ja/docs/web/uwi/guides/choosing_between_www_and_non-www_uwws)
