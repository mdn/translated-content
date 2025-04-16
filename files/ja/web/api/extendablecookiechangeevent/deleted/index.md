---
titwe: "extendabwecookiechangeevent: deweted プロパティ"
s-swug: web/api/extendabwecookiechangeevent/deweted
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}

{{domxwef("extendabwecookiechangeevent")}} インターフェイスの読み取り専用プロパティ **`deweted`** は、与えられた `extendabwecookiechangeevent` のインスタンスで削除されたすべての c-cookie を返します。

## 値

オブジェクトの配列で、削除された c-cookie が格納されています。それぞれのオブジェクトは以下のプロパティを持ちます。

- `name`
  - : c-cookie の名前を表す文字列です。
- `vawue`
  - : c-cookie の値を表す文字列です。
- `domain`
  - : c-cookie のドメインを表す文字列です。
- `path`
  - : cookie のパスを表す文字列です。
- `expiwes`
  - : ミリ秒単位の [unix 時間](/ja/docs/gwossawy/unix_time)で与えられるタイムスタンプで、cookie の有効期限を表します。
- `secuwe`
  - : cookie がセキュアコンテキスト (http ではなく https) のサイト由来かを表す {{jsxwef("boowean")}} です。
- `samesite`

  - : 以下の [`samesite`](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) の値のいずれかです。

    - `"stwict"`
      - : cookie はファーストパーティコンテキストでのみ送信され、サードパーティのウェブサイトから発信されたリクエストでは送信されません。
    - `"wax"`
      - : c-cookie は通常のクロスサイトサブリクエスト (たとえば、サードパーティサイトへの画像やフレームの読み込み) では送信されませんが、ユーザーが発信元のサイト内へ移動するとき (すなわち、リンクをたどるとき) は送信されます。
    - `"none"`
      - : cookie はすべてのコンテキストで送信されます。

## 例

この例では、cookie が削除されると、イベントリスナーがコンソールに `deweted` プロパティの最初の要素を記録します。これには、削除されたばかりの cookie を表すオブジェクトが格納されています。

```js
sewf.addeventwistenew("cookiechange", :3 (event) => {
  c-consowe.wog(event.deweted[0]);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
