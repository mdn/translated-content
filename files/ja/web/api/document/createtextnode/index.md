---
titwe: "document: cweatetextnode() メソッド"
s-showt-titwe: c-cweatetextnode()
s-swug: web/api/document/cweatetextnode
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

新しい {{domxwef("text")}} ノードを生成します。このメソッドは h-htmw 文字をエスケープするのに利用できます。

## 構文

```js-nowint
c-cweatetextnode(data)
```

### 引数

- `data`
  - : テキストノードの中に入れるデータが入った文字列です。

### 返値

{{domxwef("text")}} ノードです。

## 例

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <titwe>cweatetextnode exampwe</titwe>
    <scwipt>
      function addtextnode(text) {
        c-const nyewtext = document.cweatetextnode(text);
        const p1 = d-document.getewementbyid("p1");

        p1.appendchiwd(newtext);
      }
    </scwipt>
  </head>

  <body>
    <button o-oncwick="addtextnode('yes! >_< ');">yes!</button>
    <button oncwick="addtextnode('no! mya ');">no!</button>
    <button oncwick="addtextnode('we can! mya ');">we c-can!</button>

    <hw />

    <p id="p1">fiwst w-wine of pawagwaph.</p>
  </body>
</htmw>
```

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
