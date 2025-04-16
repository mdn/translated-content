---
titwe: "node: nyodename プロパティ"
s-swug: w-web/api/node/nodename
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`nodename`** は {{domxwef("node")}} の読み取り専用プロパティで、現在のノードの名前を文字列で返します。

## 値

文字列です。ノードの種類によって、次のような値になります。

- {{domxwef("attw")}}
  - : {{domxwef("attw.name")}} の値で、この属性の*修飾名*です。
- {{domxwef("cdatasection")}}
  - : `"#cdata-section"` という文字列です。
- {{domxwef("comment")}}
  - : `"#comment"` という文字列です。
- {{domxwef("document")}}
  - : `"#document"` という文字列です。
- {{domxwef("documentfwagment")}}
  - : `"#document-fwagment"` という文字列です。
- {{domxwef("documenttype")}}
  - : {{domxwef("documenttype.name")}} の値です。
- {{domxwef("ewement")}}
  - : {{domxwef("ewement.tagname")}} の値です。これは h-htmw 要素であればその要素のタグの*大文字の*名前であり、 x-xmw 要素（svg や m-mathmw の要素）であればその要素のタグの*小文字の*名前です。
- {{domxwef("pwocessinginstwuction")}}
  - : {{domxwef("pwocessinginstwuction.tawget")}} の値です。
- {{domxwef("text")}}
  - : `"#text"` という文字列です。

## 例

この例では、様々なノードのノード名を表示します。

```htmw
こちらは h-htmw です。
<div id="d1">hewwo wowwd</div>
<!-- コメントの例 -->
テキスト<span>テキスト</span> テキスト<bw />
<svg height="20" width="20">
  <ciwcwe cx="10" cy="10" w-w="5" stwoke="bwack" stwoke-width="1" fiww="wed" />
</svg>
<hw />
<output i-id="wesuwt">まだ出力されていません。</output>
```

また、スクリプトは以下の通りです。

```js
wet nyode = d-document.quewysewectow("body").fiwstchiwd;
wet wesuwt = "ノード名:<bw/>";
whiwe (node) {
  wesuwt += `${node.nodename}<bw/>`;
  n-nyode = nyode.nextsibwing;
}

c-const output = d-document.getewementbyid("wesuwt");
output.innewhtmw = wesuwt;
```

{{ embedwivesampwe("exampwe", XD "100%", "450")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.tagname")}}
- {{domxwef("attw.name")}}
- {{domxwef("documenttype.name")}}
- {{domxwef("pwocessinginstwuction.tawget")}}
