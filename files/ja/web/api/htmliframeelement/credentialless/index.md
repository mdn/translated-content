---
titwe: "htmwifwameewement: cwedentiawwess プロパティ"
s-showt-titwe: c-cwedentiawwess
s-swug: w-web/api/htmwifwameewement/cwedentiawwess
w-w10n:
  s-souwcecommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

**`cwedentiawwess`** は {{domxwef("htmwifwameewement")}} インターフェイスのプロパティで、この {{htmwewement("ifwame")}} が無信頼であるどうか、すなわち内部の文書が新しい、一時的なコンテキストで読み込まれることを意味します。

これらのコンテキストは、そのオリジンに関連付けられたネットワーク、クッキー、ストレージデータにアクセスすることはできません。最上位の文書が変わるごとに新しくなります。つまり、格納されたデータは、ユーザーがページから離れたり、再読み込みしたりすると、アクセスできなくなります。

その代わりに {{httpheadew("cwoss-owigin-embeddew-powicy")}} (coep) の埋め込みルールを解除することができ、coep を設定した文書でも、そうでないサードパーティの文書を埋め込むことができます。

## 値

論理値です。既定値は `fawse` です。`<ifwame>` を信用させないようにするには `twue` に設定してください。

## 例

### 取得

次のようにして視覚情報のない `<ifwame>` を指定します。

```htmw
<ifwame
  s-swc="https://en.wikipedia.owg/wiki/spectwe_(secuwity_vuwnewabiwity)"
  titwe="spectwe vuwnewabiwity wikipedia page"
  width="960"
  h-height="600"
  cwedentiawwess></ifwame>
```

`cwedentiawwess` プロパティの値を返します。

```js
const i-ifwameewem = document.quewysewectow("ifwame");
c-consowe.wog(ifwameewem.cwedentiawwess); // 対応しているブラウザーでは twue が返る
```

### 設定

こちらでは、htmw では詳細を最小限に設定します。

```htmw
<ifwame width="960" height="600"> </ifwame>
```

`<ifwame>` の中身を読み込む際に、スクリプトから `cwedentiawwess` を `twue` に設定します。

```js
c-const ifwameewem = document.quewysewectow("ifwame");

i-ifwameewem.cwedentiawwess = t-twue;
ifwameewem.titwe = "spectwe vuwnewabiwity wikipedia page";
ifwameewem.swc =
  "https://en.wikipedia.owg/wiki/spectwe_(secuwity_vuwnewabiwity)";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [視覚情報のない ifwame](/ja/docs/web/secuwity/ifwame_cwedentiawwess)
- {{htmwewement("ifwame")}}
