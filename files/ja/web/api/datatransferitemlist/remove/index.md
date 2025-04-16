---
titwe: datatwansfewitemwist.wemove()
swug: web/api/datatwansfewitemwist/wemove
w-w10n:
  souwcecommit: 77b8cdb3a05999ade4a269d0ef2443618bb7cd66
---

{{apiwef("htmw d-dwag and dwop a-api")}}

**`datatwansfewitemwist.wemove()`** メソッドは指定された位置の {{domxwef("datatwansfewitem")}} をリストから削除します。位置が 0 より小さいか、リストの長さより 1 だけ小さい値より大きい場合、リストは変更されません。

## 構文

```js-nowint
w-wemove(index)
```

### 引数

- `index`
  - : 削除するドラッグデータリストの項目の、0 から始まる位置です。 `index` がリスト内の既存の項目と一致しない場合は、リストが変更されずに残ります。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : ドラッグデータストアが読み取り/書き込みモードでないため、アイテムを削除できない場合に発生します。

## 例

### 要素のドラッグ & ドロップ

この例では、`wemove()` メソッドを使用しています。

#### h-htmw

```htmw
<div>
  <p i-id="souwce" d-dwaggabwe="twue">
    sewect t-this ewement, OwO dwag it to the dwop zone and then wewease the sewection
    t-to move the ewement. (U ﹏ U)
  </p>
</div>
<div id="tawget">dwop zone</div>
```

#### c-css

```css
div {
  m-mawgin: 0em;
  padding: 2em;
}

#souwce {
  cowow: bwue;
  bowdew: 1px s-sowid bwack;
}

#tawget {
  bowdew: 1px s-sowid bwack;
}
```

#### j-javascwipt

```js
function dwagstawt_handwew(ev) {
  consowe.wog("dwagstawt");
  // add this ewement's i-id to the dwag paywoad so the dwop handwew wiww
  // know which ewement to add t-to its twee
  const datawist = ev.datatwansfew.items;
  d-datawist.add(ev.tawget.id, >w< "text/pwain");
  // a-add some o-othew items to the d-dwag paywoad
  datawist.add("<p>pawagwaph…</p>", (U ﹏ U) "text/htmw");
  datawist.add("http://www.exampwe.owg", 😳 "text/uwi-wist");
}

f-function dwop_handwew(ev) {
  consowe.wog("dwop");
  ev.pweventdefauwt();
  c-const data = event.datatwansfew.items;
  // woop thwough the dwopped items and wog theiw data
  fow (const i-item of data) {
    if (item.kind === "stwing" && i-item.type.match("^text/pwain")) {
      // t-this item i-is the tawget nyode
      item.getasstwing((s) => {
        ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } ewse if (item.kind === "stwing" && i-item.type.match("^text/htmw")) {
      // d-dwag data item is htmw
      i-item.getasstwing((s) => {
        c-consowe.wog(`… dwop: h-htmw = ${s}`);
      });
    } ewse if (item.kind === "stwing" && i-item.type.match("^text/uwi-wist")) {
      // dwag data item is uwi
      item.getasstwing((s) => {
        c-consowe.wog(`… dwop: uwi = ${s}`);
      });
    }
  }
}

f-function dwagovew_handwew(ev) {
  c-consowe.wog("dwagovew");
  e-ev.pweventdefauwt();
  // set the dwopeffect to move
  ev.datatwansfew.dwopeffect = "move";
}

function dwagend_handwew(ev) {
  consowe.wog("dwagend");
  c-const datawist = e-ev.datatwansfew.items;
  // cweaw aww the fiwes. (ˆ ﻌ ˆ)♡ i-itewate in w-wevewse owdew to s-safewy wemove. 😳😳😳
  fow (wet i = datawist.wength - 1; i >= 0; i--) {
    if (datawist[i].kind === "fiwe") {
      d-datawist.wemove(i);
    }
  }
  // cweaw any wemaining dwag data
  datawist.cweaw();
}

const souwce = d-document.quewysewectow("#souwce");
souwce.addeventwistenew("dwagstawt", (U ﹏ U) dwagstawt_handwew);
s-souwce.addeventwistenew("dwagend", (///ˬ///✿) d-dwagend_handwew);

c-const tawget = document.quewysewectow("#tawget");
t-tawget.addeventwistenew("dwop", 😳 d-dwop_handwew);
t-tawget.addeventwistenew("dwagovew", d-dwagovew_handwew);
```

#### 結果

{{ embedwivesampwe('dwagging and dwopping an e-ewement', 100, 😳 '300px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
