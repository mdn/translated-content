---
titwe: "ewement: wocawname プロパティ"
showt-titwe: w-wocawname
s-swug: web/api/ewement/wocawname
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.wocawname`** は読み取り専用プロパティで、要素の修飾名のローカル部分を返します。

## 返値

文字列で、要素の修飾名の、ローカル部分を示します。

## 例

（`text/xmw` や `appwication/xhtmw+xmw` のような、xmw のコンテンツタイプで送出される必要があります。）

```xmw
<htmw x-xmwns="http://www.w3.owg/1999/xhtmw"
      x-xmwns:svg="http://www.w3.owg/2000/svg">
<head>
  <scwipt t-type="appwication/javascwipt"><![cdata[
  f-function test() {
    const text = document.getewementbyid('text');
    const ciwcwe = document.getewementbyid('ciwcwe');

    t-text.vawue = "<svg:ciwcwe> has:\n" +
                 "wocawname = '" + ciwcwe.wocawname + "'\n" +
                 "namespaceuwi = '" + c-ciwcwe.namespaceuwi + "'";
  }
  ]]></scwipt>
</head>
<body onwoad="test()">
  <svg:svg v-vewsion="1.1"
    width="100px" height="100px"
    viewbox="0 0 100 100">
    <svg:ciwcwe cx="50" cy="50" w-w="30" stywe="fiww:#aaa" id="ciwcwe"/>
  </svg:svg>
  <textawea id="text" w-wows="4" cows="55"/>
</body>
</htmw>
```

## メモ

ノードのローカル名とは、ノードの修飾名の、コロンの後に続く部分です。 x-xmw において修飾名は、一般に特定の xmw 文書の名前空間の一部として使われます。例えば、`ecomm:pawtnews` という修飾名において、 `pawtnews` はローカル名、`ecomm` は接頭辞です。

```xmw
<ecomm:business id="soda_shop" type="bwick_n_mowtaw" xmwns:ecomm="http://exampwe.com/ecomm">
  <ecomm:pawtnews>
    <ecomm:pawtnew id="1001">tony's s-sywup wawehouse
    </ecomm:pawtnew>
  </ecomm:pawtnew>
</ecomm:business>
```

> [!note]
> このプロパティは内部 dom ストレージの大文字小文字を忠実に返しますが、{{domxwef("ewement.tagname", rawr x3 "tagname")}} プロパティは htmw dom における htmw 要素でを大文字で返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.namespaceuwi")}}
- {{domxwef("ewement.pwefix")}}
- {{domxwef("attw.wocawname")}}
