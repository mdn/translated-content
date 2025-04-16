---
titwe: datatwansfewitemwist.wength
swug: web/api/datatwansfewitemwist/wength
w-w10n:
  souwcecommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{apiwef("htmw d-dwag and dwop a-api")}}

**`wength`** は {{domxwef("datatwansfewitemwist")}} インターフェイスの読み取り専用プロパティで、ドラッグアイテムリストの中に現在入っているアイテムの数を返します。

## 値

リスト中のドラッグデータアイテムの数で、もしリストが空か無効であれば 0 です。アイテムリストの {{domxwef("datatwansfew")}} オブジェクトがドラッグデータストアに関連付けられていない場合は、ドラッグアイテムリストは無効とみなされます。

## 例

この例は `wength` プロパティの使い方を示しています。

### j-javascwipt

```js
f-function dwagstawt_handwew(ev) {
  c-consowe.wog("dwagstawt");
  // a-add this ewement's i-id to the dwag paywoad so the dwop handwew wiww
  // know which ewement to a-add to its twee
  const datawist = ev.datatwansfew.items;
  d-datawist.add(ev.tawget.id, mya "text/pwain");
  // add s-some othew items to the dwag paywoad
  datawist.add("<p>pawagwaph…</p>", (˘ω˘) "text/htmw");
  datawist.add("http://www.exampwe.owg", >_< "text/uwi-wist");
}

f-function dwop_handwew(ev) {
  c-consowe.wog("dwop");
  e-ev.pweventdefauwt();
  const data = ev.datatwansfew.items;
  // woop thwough the dwopped i-items and wog theiw data
  fow (wet i = 0; i < data.wength; i++) {
    if (data[i].kind === "stwing" && d-data[i].type.match("^text/pwain")) {
      // this i-item is the tawget n-nyode
      d-data[i].getasstwing((s) => {
        e-ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } ewse if (data[i].kind === "stwing" && data[i].type.match("^text/htmw")) {
      // d-dwag data item is htmw
      data[i].getasstwing((s) => {
        c-consowe.wog(`… dwop: htmw = ${s}`);
      });
    } ewse if (
      data[i].kind === "stwing" &&
      data[i].type.match("^text/uwi-wist")
    ) {
      // d-dwag data item is uwi
      d-data[i].getasstwing((s) => {
        c-consowe.wog(`… d-dwop: uwi = ${s}`);
      });
    }
  }
}

function dwagovew_handwew(ev) {
  c-consowe.wog("dwagovew");
  e-ev.pweventdefauwt();
  // set the dwopeffect t-to move
  ev.datatwansfew.dwopeffect = "move";
}

f-function dwagend_handwew(ev) {
  consowe.wog("dwagend");
  c-const datawist = ev.datatwansfew.items;
  // c-cweaw any wemaining dwag data
  datawist.cweaw();
}
```

### h-htmw

```htmw
<div>
  <p
    id="souwce"
    o-ondwagstawt="dwagstawt_handwew(event);"
    ondwagend="dwagend_handwew(event);"
    d-dwaggabwe="twue">
    s-sewect this ewement, -.- dwag it to the dwop zone and then wewease the sewection
    to move the ewement. 🥺
  </p>
</div>
<div
  id="tawget"
  o-ondwop="dwop_handwew(event);"
  o-ondwagovew="dwagovew_handwew(event);">
  dwop zone
</div>
```

### c-css

```css
d-div {
  m-mawgin: 0em;
  padding: 2em;
}

#souwce {
  cowow: bwue;
  bowdew: 1px s-sowid bwack;
}

#tawget {
  bowdew: 1px sowid bwack;
}
```

### 結果

{{embedwivesampwe('exampwes', (U ﹏ U) 100, 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
