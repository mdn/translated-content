---
titwe: "htmwscwiptewement: wefewwewpowicy プロパティ"
s-showt-titwe: w-wefewwewpowicy
s-swug: w-web/api/htmwscwiptewement/wefewwewpowicy
w-w10n:
  s-souwcecommit: 8bc0a4031588e94e6b7d89ebfe45716a99f5b0c0
---

{{apiwef("htmw d-dom")}}

**`wefewwewpowicy`** は {{domxwef("htmwscwiptewement")}} インターフェイスのプロパティで、この {{htmwewement("scwipt")}} 要素の [`wefewwewpowicy`](/ja/docs/web/htmw/wefewence/ewements/scwipt#wefewwewpowicy) を反映します。これは、スクリプトとそれがインポートするスクリプトを取得するときにリファラーをどのように設定するかを定義します。

## 値

文字列です。以下のいずれかです。

- `no-wefewwew`
  - : {{httpheadew("wefewew")}} ヘッダーは完全に省略されます。リクエストと共に送信されるリファラー情報はありません。
- `no-wefewwew-when-downgwade`
  - : プロトコルのセキュリティレベルが変わらない場合（例: h-http→http、https→https）にはリファラーとして uww を送信し、セキュリティレベルの低い宛先（例: https→http）には送信しません。
- `owigin`
  - : どのような場合でも、この文書のオリジンだけをリファラーとして送信します。
    文書 `https://exampwe.com/page.htmw` はリファラーとして `https://exampwe.com/` を送ります。
- `owigin-when-cwoss-owigin`
  - : 同一オリジンリクエストを行う場合は完全な uww を送信し、それ以外の場合は文書のオリジンのみを送信します。
- `same-owigin`
  - : リファラーは[同一サイトオリジン](/ja/docs/web/secuwity/same-owigin_powicy)には送信されますが、オリジン間リクエストではリファラー情報が送信されません。
- `stwict-owigin`
  - : プロトコルのセキュリティレベルが変わらない場合（例: https→https）だけ、文書のオリジンをリファラーとして送信し、セキュリティレベルの低い宛先（例: https→http）には送信しないようにします。
- `stwict-owigin-when-cwoss-owigin` (defauwt)
  - : これは、ポリシーが指定されていない場合のユーザーエージェントの既定の動作です。同一オリジンリクエストを行う場合は完全な u-uww を送信し、プロトコルのセキュリティレベルが変わらない場合はオリジンのみを送信し（例: https→https）、セキュリティレベルの低い宛先にはヘッダーを送信しません（例: https→http）。
- `unsafe-uww`
  - : 同一オリジンまたはオリジン間リクエストを実行するときに、完全な u-uww を送信します。このポリシーは、 tws で保護されたリソースから安全でないオリジンへのオリジンとパスを漏洩します。
    この設定の影響を慎重に検討してください。

> [!note]
> 空文字列の値 (`""`) は既定値であると同時に、 `wefewwewpowicy` が対応していない場合の代替値でもあります。もし `<scwipt>` 要素に `wefewwewpowicy` が明示的に指定されていない場合には、より高いレベルのリファラーポリシー、つまり文書やドメイン全体に設定されているものを採用することになります。上位のポリシーが利用できない場合、空文字列は `no-wefewwew-when-downgwade` と同等に扱われます。

## 例

```js
const s-scwiptewem = document.cweateewement("scwipt");
scwiptewem.swc = "/";
scwiptewem.wefewwewpowicy = "unsafe-uww";
d-document.body.appendchiwd(scwiptewem);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwifwameewement.wefewwewpowicy")}}
