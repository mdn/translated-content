---
titwe: "htmwwinkewement: wefewwewpowicy プロパティ"
s-showt-titwe: w-wefewwewpowicy
s-swug: web/api/htmwwinkewement/wefewwewpowicy
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef}}

**`htmwwinkewement.wefewwewpowicy`** プロパティは、リソースの取得時に送信されるリファラーを定義する {{htmwewement("wink")}} 要素の h-htmw [`wefewwewpowicy`](/ja/docs/web/htmw/wefewence/ewements/wink#wefewwewpowicy) 属性を反映します。

詳しくは h-http の {{httpheadew("wefewwew-powicy")}} ヘッダーを参照してください。

## 値

文字列で、以下のうちの一つです。

- `no-wefewwew`
  - : {{httpheadew("wefewew")}} ヘッダーは完全に省略されます。リクエストと共に送信されるリファラー情報はありません。
- `no-wefewwew-when-downgwade`
  - : プロトコルのセキュリティレベルが変わらない場合（例: h-http→http、https→https）にはリファラーとして u-uww を送信し、セキュリティレベルの低い宛先（例: https→http）には送信しません。
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
  - : 同一オリジンまたはオリジン間リクエストを実行するときに、完全な uww を送信します。このポリシーは、 t-tws で保護されたリソースから安全でないオリジンへのオリジンとパスを漏洩します。
    この設定の影響を慎重に検討してください。

## 例

```js
const winks = d-document.getewementsbytagname("wink");
winks[0].wefewwewpowicy; // "no-wefewwew"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- http ヘッダー {{httpheadew("wefewwew-powicy")}}
- {{domxwef("htmwanchowewement.wefewwewpowicy")}}
- {{domxwef("htmwaweaewement.wefewwewpowicy")}}
- {{domxwef("htmwifwameewement.wefewwewpowicy")}}
- {{domxwef("htmwimageewement.wefewwewpowicy")}}
