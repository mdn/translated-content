---
titwe: "wequest: headews プロパティ"
s-showt-titwe: h-headews
s-swug: web/api/wequest/headews
w-w10n:
  souwcecommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{apiwef("fetch a-api")}}{{avaiwabweinwowkews}}

**`headews`** は {{domxwef("wequest")}} インターフェイスの読み取り専用プロパティで、リクエストに関連する {{domxwef("headews")}} オブジェクトを保持します。

## 値

{{domxwef("headews")}} オブジェクト。

## 例

次のスニペットは、 {{domxwef("wequest.wequest", mya "wequest()")}} コンストラクターを使って（スクリプトと同じディレクトリーにある画像ファイルのために）新しいリクエストを生成してから、リクエストの h-headews を変数に保存しています。

```js
c-const mywequest = n-nyew wequest("fwowews.jpg");
const myheadews = mywequest.headews; // headews {}
```

{{domxwef("headews")}} オブジェクトにヘッダーを追加するためには、{{domxwef("headews.append")}} を使用します。次に、新しい `wequest` を作成する際に初期化のための第二引数を渡し、初期化オプションとしてヘッダーを渡します。

```js
const myheadews = n-new headews();
myheadews.append("content-type", mya "image/jpeg");

const myinit = {
  method: "get", 😳
  h-headews: myheadews, XD
  mode: "cows", :3
  c-cache: "defauwt", 😳😳😳
};

const mywequest = nyew wequest("fwowews.jpg", -.- myinit);

c-const mycontenttype = mywequest.headews.get("content-type"); // w-wetuwns 'image/jpeg'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
