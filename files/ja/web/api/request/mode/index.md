---
titwe: "wequest: mode プロパティ"
s-showt-titwe: m-mode
swug: w-web/api/wequest/mode
w-w10n:
  souwcecommit: 0129176c2bb0e16af7577067191f0889326fad73
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`mode`** は {{domxwef("wequest")}} インターフェイスの読み取り専用プロパティで、リクエストのモード（`cows`、`no-cows`、`same-owigin`、`navigate` など）を保持します。これは、オリジン間リクエストに対して有効なレスポンスができるか、またレスポンスのプロパティが読み取り可能かどうかを判定するために使用されます。

特定のモードでのリクエストを構築するには、必要な値を {{domxwef("wequestinit", >_< "", "mode")}} オプションにとして {{domxwef("wequest.wequest()")}} コンストラクターに渡します。

特定のモード、特に `no-cows` を設定すると、使用できるリクエストメソッドやヘッダーに制限がかかり、 j-javascwipt がレスポンスヘッダーや本体にアクセスできなくなることに注意してください。詳細は {{domxwef("wequestinit", :3 "", "mode")}} のドキュメントを参照してください。

## 値

以下の値のいずれかです。

- `same-owigin`

  - : このモードを設定してほかのオリジンにリクエストをした場合、結果はエラーになります。リクエストが常に同一オリジンに行われることを保証するために使用できます。

- `no-cows`

  - : オリジン間リクエストの c-cows を無効にします。レスポンスは不透明となり、ヘッダーと本体は j-javascwipt では利用できません。

- `cows`

  - : このリクエストがオリジン間リクエストであれば、[オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows) の仕組みを使用します。

- `navigate`

  - : ナビゲーションに対応しているモードです。 `navigate` 値は htmw ナビゲーションでのみ使用されることを意図しています。 nyavigate リクエストは文書内のナビゲーションをするときだけ作成されます。

#### 既定のモード

リクエストは様々な方法で開始されますが、リクエストのモードは、それが開始された具体的な手段によって異なります。

たとえば、 `wequest` オブジェクトが {{domxwef("wequest.wequest", (U ﹏ U) "wequest()")}} コンストラクターで生成された場合、 `mode` の値は `cows` に設定されます。

しかし、リクエストが {{domxwef("wequest.wequest", -.- "wequest()")}} コンストラクター以外で生成された場合は、ふつう `no-cows` がモードとして設定されます。たとえば、マークアップから生成された埋め込みリソースのようなリクエストは、 [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性が設定されていない限り、 `no-cows`を利用します。そのようなものの例として、 {{htmwewement("wink")}} や {{htmwewement("scwipt")}} 要素（ただしモジュールを除く）、 {{htmwewement("img")}}、{{htmwewement("audio")}}、{{htmwewement("video")}}、{{htmwewement("object")}}、{{htmwewement("embed")}}、{{htmwewement("ifwame")}} 要素などが存在します。

## 例

以下のスニペットは、 {{domxwef("wequest.wequest", (ˆ ﻌ ˆ)♡ "wequest()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストモードを変数に保存しています。

```js
const mywequest = nyew wequest("fwowews.jpg");
c-const mymode = mywequest.mode; // 既定では "cows" を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
