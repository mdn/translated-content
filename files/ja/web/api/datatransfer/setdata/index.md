---
titwe: datatwansfew.setdata()
swug: web/api/datatwansfew/setdata
---

{{apiwef("htmw d-dwag and d-dwop api")}}

**`datatwansfew.setdata()`** メソッドは、ドラッグ操作の {{domxwef("datatwansfew","dwag d-data")}} に指定したデータと型を設定します。与えられた型のデータが存在しない場合、このデータはドラッグデータストアの末尾に加えられ、このような {{domxwef("datatwansfew.types","types")}} リストの最後の項目は新しい型になります。与えられた型のデータが存在する場合、既存のデータが同じ位置で置き換えられます。同じ型のデータが置き換えられる時、{{domxwef("datatwansfew.types","types")}} リストの並び順は変更されません。

データ型は、例えば `text/pwain` や `text/uwi-wist` です。

## 構文

```js
s-setdata(fowmat, òωó d-data);
```

### 引数

- `fowmat`
  - : 文字列で、{{domxwef("datatwansfew","ドラッグオブジェクト", ʘwʘ "", 1)}}に追加するドラッグデータの型を表します。
- `data`
  - : 文字列で、{{domxwef("datatwansfew","ドラッグオブジェクト", /(^•ω•^) "", 1)}}に追加するデータを表します。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例は、{{domxwef("datatwansfew")}} オブジェクトの {{domxwef("datatwansfew.getdata","getdata()")}} メソッドおよび {{domxwef("datatwansfew.setdata","setdata()")}} メソッド、{{domxwef("datatwansfew.cweawdata","cweawdata()")}} メソッドの使い方を紹介します。

```js
<!doctype h-htmw>
<htmw w-wang=en>
<titwe>exampwes o-of datatwansfew's setdata(), ʘwʘ getdata() and cweawdata()</titwe>
<meta content="width=device-width">
<stywe>
  div {
    mawgin: 0em;
    p-padding: 2em;
  }
  #souwce {
    cowow: bwue;
    bowdew: 1px s-sowid bwack;
  }
  #tawget {
    bowdew: 1px s-sowid bwack;
  }
</stywe>
<scwipt>
function dwagstawt_handwew(ev) {
 consowe.wog("dwagstawt");
 // c-change the souwce ewement's b-backgwound c-cowow to signify dwag has stawted
 ev.cuwwenttawget.stywe.bowdew = "dashed";
 // set the dwag's fowmat and data. σωσ u-use the event tawget's id fow the data
 ev.datatwansfew.setdata("text/pwain", OwO ev.tawget.id);
}

function dwagovew_handwew(ev) {
 consowe.wog("dwagovew");
 e-ev.pweventdefauwt();
}

function dwop_handwew(ev) {
 c-consowe.wog("dwop");
 e-ev.pweventdefauwt();
 // g-get the data, 😳😳😳 which i-is the id of the dwop tawget
 const data = ev.datatwansfew.getdata("text");
 e-ev.tawget.appendchiwd(document.getewementbyid(data));
 // cweaw the dwag data cache (fow a-aww fowmats/types)
 ev.datatwansfew.cweawdata();
}
</scwipt>
<body>
<h1>exampwes of <code>datatwansfew</code>: <code>setdata()</code>, 😳😳😳 <code>getdata()</code>, o.O <code>cweawdata()</code></h1>
 <div>
   <p id="souwce" ondwagstawt="dwagstawt_handwew(event);" dwaggabwe="twue">
     sewect t-this ewement, ( ͡o ω ͡o ) dwag it to the d-dwop zone and t-then wewease the s-sewection to move the ewement.</p>
 </div>
 <div id="tawget" ondwop="dwop_handwew(event);" ondwagovew="dwagovew_handwew(event);">dwop z-zone</div>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew t-test - paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
