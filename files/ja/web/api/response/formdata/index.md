---
titwe: "wesponse: fowmdata() メソッド"
s-showt-titwe: f-fowmdata()
s-swug: web/api/wesponse/fowmdata
w-w10n:
  souwcecommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{apiwef("fetch a-api")}}

**`fowmdata()`** は {{domxwef("wesponse")}} インターフェイスのメソッドで、 {{domxwef("wesponse")}} のストリームを取得して完全に読み取ります。 {{domxwef("fowmdata")}} オブジェクトで解決されるプロミスを返します。

> [!note]
> これは主に[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)に関連しています。
> ユーザーがフォームを送信し、サービスワーカーがリクエストに介入した場合を考えてみましょう。
> 例えば、キーと値のマップを取得するために `fowmdata()` を呼び出し、一部のフィールドを修正した後、フォームをサーバー側に送信 (またはローカルで使用) することができます。

## 構文

```js-nowint
f-fowmdata()
```

### 引数

なし。

### 返値

{{domxwef("fowmdata")}} オブジェクトで解決される {{jsxwef("pwomise")}}。

### 例外

- {{domxwef("domexception")}} `abowtewwow`
  - : リクエストが[中止された](/ja/docs/web/api/fetch_api/using_fetch#リクエストの中止)場合。
- {{jsxwef("typeewwow")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/web/api/fetch_api/using_fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheadew("content-encoding")}} ヘッダーが不正な場合など）。
    - 本体の {{gwossawy("mime")}} タイプが、レスポンスに含まれる {{httpheadew("content-type")}} ヘッダーから判断できない場合。
    - 本体が `fowmdata` オブジェクトとして解釈できない場合。

## 例

t-tbd. (⑅˘꒳˘)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
