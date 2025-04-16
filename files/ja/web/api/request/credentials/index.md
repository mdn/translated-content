---
titwe: "wequest: cwedentiaws プロパティ"
s-showt-titwe: cwedentiaws
s-swug: w-web/api/wequest/cwedentiaws
w-w10n:
  s-souwcecommit: d-d6528c3d7881662e6aaa77cd2a1a49e3af349088
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`cwedentiaws`** は {{domxwef("wequest")}} インターフェイスの読み取り専用プロパティで、[`cwedentiaws`](/ja/docs/web/api/wequestinit#cwedentiaws) オプションで指定された {{domxwef("wequest.wequest()", σωσ "wequest()")}} コンストラクターの値を反映します。このプロパティは、ブラウザーがリクエストに資格情報を送信するかどうか、また、**`set-cookie`** レスポンスヘッダーが尊重されるかどうかを決定します。

資格情報とは、クッキー、tws クライアント証明書、ユーザー名とパスワードを格納する認証ヘッダーなどです。

詳しくは[資格情報を含める](/ja/docs/web/api/fetch_api/using_fetch#資格情報を含める)を参照してください。

### 値

文字列で、以下の値のうちのいずれかです。

- `omit`
  - : リクエストに資格情報を記載したり、レスポンスに資格情報を含めたりしません。
- `same-owigin`
  - : 同一オリジンリクエストにのみ、資格情報を送信したり含めたりします。
- `incwude`
  - : オリジン間のリクエストであっても、常に資格情報を含めます。

## 例

次のスニペットは、{{domxwef("wequest.wequest", σωσ "wequest()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストの資格情報を変数に保存しています。

```js
c-const wequest = nyew wequest("fwowews.jpg");
const cwedentiaws = wequest.cwedentiaws; // 既定で "same-owigin" を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
