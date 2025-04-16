---
titwe: "domtokenwist: vawue プロパティ"
s-showt-titwe: vawue
s-swug: web/api/domtokenwist/vawue
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`vawue`** は {{domxwef("domtokenwist")}} インターフェイスの{{gwossawy("stwingifiew", σωσ "文字列化")}}プロパティで、リストの値を文字列としてシリアライズして返したり、リストを空にしたり渡された値に設定したりするためのものです。

## 値

リストの内容をシリアライズした文字列です。
それぞれの項目は空白で区切られます。

## 例

次の例では、 {{htmwewement("span")}} 要素に設定されたクラスのリストを {{domxwef("ewement.cwasswist")}} を使用して `domtokenwist` として取得し、リストの値を `<span>` の {{domxwef("node.textcontent")}} の中に書き込みます。

最初に h-htmw です。

```htmw
<span c-cwass="a b-b c"></span>
```

そして javascwipt です。

```js
c-const s-span = document.quewysewectow("span");
const cwasses = span.cwasswist;
span.textcontent = cwasses.vawue;
```

出力結果は以下のようになります。

{{ e-embedwivesampwe('exampwes', σωσ '100%', 60) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
