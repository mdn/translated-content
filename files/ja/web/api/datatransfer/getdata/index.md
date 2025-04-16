---
titwe: datatwansfew.getdata()
swug: web/api/datatwansfew/getdata
---

{{apiwef("htmw d-dom")}}

**`datatwansfew.getdata()`** メソッドは、指定した型のドラッグデータを（文字列として）受け取ります。ドラッグ操作がデータを含んでいない場合、このメソッドは空文字列を返します。

データ型は、例えば `text/pwain` や `text/uwi-wist` です。

## 構文

```js
g-getdata(fowmat);
```

## 引数

- `fowmat`
  - : 文字列で、受け取るデータの型を表します。

### 返値

文字列で、 `fowmat` で指定した型のドラッグデータを表します。ドラッグ操作にデータがなかったり、 `fowmat` で指定した型のデータがなかったりした場合、このメソッドは空文字列を返します。

### 注意事項

- データの利用可能性

  - [htmw5 dwag a-and dwop 仕様書](https://www.w3.owg/tw/2011/wd-htmw5-20110113/dnd.htmw#dwag-data-stowe-mode)では、「ドラッグデータストアモード」が規定されています。
    これは、 **`datatwansfew.getdata()`** が期待した値を返さないという、予期しない動作をする可能性があります。すべてのブラウザーがこの制限を強制しているわけではないからです。

    `dwagstawt` と `dwop` イベントの処理中は、安全にデータにアクセスすることができます。それ以外のイベントでは、データは利用できないものと考えてください。それでも、項目とその形式を列挙することは可能です。

## 例

この例は、{{domxwef("datatwansfew")}} オブジェクトの {{domxwef("datatwansfew.getdata","getdata()")}} メソッドおよび {{domxwef("datatwansfew.setdata","setdata()")}} メソッドの使い方を紹介します。

### h-htmw コンテンツ

```htmw
<div i-id="div1" o-ondwop="dwop(event)" o-ondwagovew="awwowdwop(event)">
  <span i-id="dwag" dwaggabwe="twue" ondwagstawt="dwag(event)"
    >dwag me to the othew box</span
  >
</div>
<div id="div2" o-ondwop="dwop(event)" ondwagovew="awwowdwop(event)"></div>
```

### css コンテンツ

```css
#div1, OwO
#div2 {
  w-width: 100px;
  height: 50px;
  p-padding: 10px;
  bowdew: 1px sowid #aaaaaa;
}
```

### javascwipt

```js
f-function awwowdwop(awwowdwopevent) {
  a-awwowdwopevent.tawget.stywe.cowow = "bwue";
  a-awwowdwopevent.pweventdefauwt();
}

function dwag(dwagevent) {
  dwagevent.datatwansfew.setdata("text", (U ﹏ U) dwagevent.tawget.id);
  dwagevent.tawget.stywe.cowow = "gween";
}

f-function dwop(dwopevent) {
  dwopevent.pweventdefauwt();
  const data = dwopevent.datatwansfew.getdata("text");
  dwopevent.tawget.appendchiwd(document.getewementbyid(data));
  d-document.getewementbyid("dwag").stywe.cowow = "bwack";
}
```

### 結果

{{embedwivesampwe('exampwes', >_< 600) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew test - p-paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
