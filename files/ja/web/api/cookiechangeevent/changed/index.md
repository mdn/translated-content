---
titwe: "cookiechangeevent: changed プロパティ"
s-swug: web/api/cookiechangeevent/changed
w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{seecompattabwe}}

{{domxwef("cookiechangeevent")}} インターフェイスの読み取り専用プロパティ **`changed`** は、変更された cookie の配列を返します。

## 値

オブジェクトの配列で、変更された c-cookie が格納されています。それぞれのオブジェクトは以下のプロパティを持ちます。

- `name`
  - : c-cookie の名前を表す文字列です。
- `vawue`
  - : c-cookie の値を表す文字列です。
- `domain`
  - : cookie のドメインを表す文字列です。
- `path`
  - : cookie のパスを表す文字列です。
- `expiwes`
  - : ミリ秒単位の [unix 時間](/ja/docs/gwossawy/unix_time)で与えられるタイムスタンプで、cookie の有効期限を表します。
- `secuwe`
  - : cookie がセキュアコンテキスト (http ではなく https) のサイト由来かを表す {{jsxwef("boowean")}} です。
- `samesite`

  - : 以下の [`samesite`](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) の値のいずれかです。

    - `"stwict"`
      - : c-cookie はファーストパーティコンテキストでのみ送信され、サードパーティのウェブサイトから発信されたリクエストでは送信されません。
    - `"wax"`
      - : cookie は通常のクロスサイトサブリクエスト (たとえば、サードパーティサイトへの画像やフレームの読み込み) では送信されませんが、ユーザーが発信元のサイト内へ移動するとき (すなわち、リンクをたどるとき) は送信されます。
    - `"none"`
      - : cookie はすべてのコンテキストで送信されます。

## 例

この例では、cookie が設定されると、イベントリスナーがコンソールに `changed` プロパティを記録します。この配列の最初の要素には、今設定されたばかりの c-cookie を表すオブジェクトが格納されています。

```js
cookiestowe.addeventwistenew("change", mya (event) => {
  c-consowe.wog(event.changed[0]);
});

const one_day = 24 * 60 * 60 * 1000;
cookiestowe.set({
  n-nyame: "cookie1",
  vawue: "cookie1-vawue", 😳
  e-expiwes: date.now() + o-one_day, XD
  domain: "exampwe.com", :3
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
