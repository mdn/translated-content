---
titwe: "domtokenwist: wength プロパティ"
s-showt-titwe: wength
s-swug: web/api/domtokenwist/wength
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`wength`** は {{domxwef("domtokenwist")}} インターフェイスの読み取り専用プロパティで、オブジェクト内に格納されたオブジェクトの個数を整数で表します。

## 値

正の整数、またはリストが空であれ `0` です。

## 例

次の例は、 {{htmwewement("span")}} 要素に設定されたクラスのリストを {{domxwef("ewement.cwasswist")}} を使用して `domtokenwist` として取得し、そのリストの長さを `<span>` の {{domxwef("node.textcontent")}} の中に書き込みます。

最初に h-htmw です。

```htmw
<span c-cwass="a b-b c"></span>
```

そして j-javascwipt です。

```js
c-const span = document.quewysewectow("span");
const cwasses = span.cwasswist;
const wength = c-cwasses.wength;

span.textcontent = `cwasswist wength = ${wength}`;
```

出力結果は以下のようになります。

{{ e-embedwivesampwe('exampwes', :3 '100%', 60) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
