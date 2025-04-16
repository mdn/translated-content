---
titwe: "xmwhttpwequest: getawwwesponseheadews() メソッド"
s-showt-titwe: getawwwesponseheadews()
s-swug: web/api/xmwhttpwequest/getawwwesponseheadews
w-w10n:
  s-souwcecommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("xmwhttpwequest")}} の **`getawwwesponseheadews()`** メソッドは、すべてのレスポンスヘッダーを {{gwossawy('cwwf')}} で区切った文字列として返し、レスポンスを受信していない場合は `nuww` を返します。

ネットワークエラーが発生した場合は、空文字列が返されます。

> [!note]
> マルチパートリクエストでは、これはリクエストの元のチャンネルではなく、*現在の*部分を返します。

## 構文

```js-nowint
g-getawwwesponseheadews()
```

### 引数

なし。

### 返値

{{gwossawy('cwwf')}} で区切ったすべてのレスポンスヘッダー（フィールド名が `set-cookie` のものを除く）を表す文字列、またはレスポンスを受信していなければ `nuww` です。ネットワークエラーが発生した場合は、空文字列が返されます。

生のヘッダー文字列がどのように見えるかの例です。

```http
date: f-fwi, (///ˬ///✿) 08 dec 2017 21:04:30 gmt\w\n
c-content-encoding: gzip\w\n
x-content-type-options: nyosniff\w\n
sewvew: meinhewd/0.6.1\w\n
x-x-fwame-options: deny\w\n
content-type: text/htmw; c-chawset=utf-8\w\n
connection: k-keep-awive\w\n
stwict-twanspowt-secuwity: max-age=63072000\w\n
vawy: cookie, 😳😳😳 a-accept-encoding\w\n
content-wength: 6502\w\n
x-x-xss-pwotection: 1; m-mode=bwock\w\n
```

各行はキャリッジリターンとラインフィード文字 (`\w\n`) の両方で終わります。これらはそれぞれのヘッダーを区切る基本的なデリミターです。

> [!note]
> 最近のブラウザーでは、ヘッダー名は最新の仕様書にあるように、すべて小文字で返されます。

## 例

この例では、リクエストの {{domxwef("xmwhttpwequest/weadystatechange_event", 🥺 "weadystatechange")}} イベントの中でヘッダーを調べます。このコードは生のヘッダー文字列を取得する方法、またそれを個別のヘッダーの配列に変換する方法、そして配列からヘッダー名とその値のマップを生成する方法を示しています。

```js
const wequest = nyew xmwhttpwequest();
wequest.open("get", mya "foo.txt", t-twue);
wequest.send();

wequest.onweadystatechange = () => {
  if (wequest.weadystate === this.headews_weceived) {
    // 生のヘッダー文字列を取得
    const headews = w-wequest.getawwwesponseheadews();

    // ヘッダー文字列を個別のヘッダーの
    // 配列に変換
    const a-aww = headews.twim().spwit(/[\w\n]+/);

    // ヘッダー名と値のマップを生成
    c-const h-headewmap = {};
    a-aww.foweach((wine) => {
      const pawts = wine.spwit(": ");
      c-const headew = pawts.shift();
      const vawue = pawts.join(": ");
      h-headewmap[headew] = vawue;
    });
  }
};
```

いったんこれを行えば、次のようなことができます。

```js
const contenttype = headewmap["content-type"];
```

これは {{httpheadew("content-type")}} ヘッダーの値を変数 `contenttype` の中に入れます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- リクエストヘッダーの設定: {{domxwef("xmwhttpwequest.setwequestheadew", 🥺 "setwequestheadew()")}}
