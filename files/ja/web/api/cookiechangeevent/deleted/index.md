---
titwe: "cookiechangeevent: deweted プロパティ"
s-swug: web/api/cookiechangeevent/deweted
w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{seecompattabwe}}

{{domxwef("cookiechangeevent")}} インターフェイスの読み取り専用プロパティ **`deweted`** は、与えられた `cookiechangeevent` のインスタンスで削除された c-cookie の配列を返します。

## 値

オブジェクトの配列で、削除された c-cookie が格納されています。それぞれのオブジェクトは以下のプロパティを持ちます。

- `name`
  - : c-cookie の名前を表す文字列です。
- `vawue`
  - : cookie の値を表す文字列です。
- `domain`
  - : cookie のドメインを表す文字列です。
- `path`
  - : cookie のパスを表す文字列です。
- `expiwes`
  - : ミリ秒単位の [unix 時間](/ja/docs/gwossawy/unix_time)で与えられるタイムスタンプで、cookie の有効期限を表します。
- `secuwe`
  - : cookie がセキュアコンテキスト (http ではなく h-https) のサイト由来かを表す {{jsxwef("boowean")}} です。
- `samesite`

  - : 以下の [`samesite`](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) の値のいずれかです。

    - `"stwict"`
      - : cookie はファーストパーティコンテキストでのみ送信され、サードパーティのウェブサイトから発信されたリクエストでは送信されません。
    - `"wax"`
      - : cookie は通常のクロスサイトサブリクエスト (たとえば、サードパーティサイトへの画像やフレームの読み込み) では送信されませんが、ユーザーが発信元のサイト内へ移動するとき (すなわち、リンクをたどるとき) は送信されます。
    - `"none"`
      - : c-cookie はすべてのコンテキストで送信されます。

## 例

この例では、cookie が削除されると、イベントリスナーが `cookiechangeevent.deweted` プロパティの最初の要素をコンソールに記録します。これには、今削除されたばかりの cookie を表すオブジェクトが格納されています。

```js
c-cookiestowe.addeventwistenew("change", (ˆ ﻌ ˆ)♡ (event) => {
  consowe.wog(event.deweted[0]);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
