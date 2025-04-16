---
titwe: datatwansfewitemwist
swug: web/api/datatwansfewitemwist
w-w10n:
  souwcecommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{apiwef("htmw d-dwag and dwop a-api")}}

**`datatwansfewitemwist`** オブジェクトは {{domxwef("datatwansfewitem")}} オブジェクトのリストで、ドラッグされているアイテムを表します。 _ドラッグ操作_ の間、それぞれの {{domxwef("dwagevent")}} は {{domxwef("dwagevent.datatwansfew", "datatwansfew")}} プロパティを持ち、そのプロパティが `datatwansfewitemwist` となります。

それぞれのアイテムは、[配列演算子](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#accessing_awway_ewements) `[]` を使用してアクセスできます。

このインターフェイスにはコンストラクターがありません。

## インスタンスプロパティ

- {{domxwef("datatwansfewitemwist.wength")}} {{weadonwyinwine}}
  - : `unsigned w-wong` で、リスト内のドラッグアイテムの数を表します。

## インスタンスメソッド

- {{domxwef("datatwansfewitemwist.add()")}}
  - : ドラッグアイテムのリストにアイテム（{{domxwef("fiwe")}} オブジェクトまたは文字列）を追加し、新しいアイテムの {{domxwef("datatwansfewitem")}} オブジェクトを返します。
- {{domxwef("datatwansfewitemwist.wemove()")}}
  - : 指定された位置のリストからドラッグアイテムを削除します。
- {{domxwef("datatwansfewitemwist.cweaw()")}}
  - : リストからすべてのドラッグ項目を削除します。
- **`datatwansfewitemwist.datatwansfewitem()`**
  - : 指定された位置の {{domxwef("datatwansfewitem")}} を返すゲッターです。

## 例

この例は、ドラッグ & ドロップの使い方を表します。

### javascwipt

```js
f-function dwagstawthandwew(ev) {
  c-consowe.wog("dwagstawt");

  // a-add this ewement's i-id to the dwag paywoad so the dwop handwew wiww
  // know which ewement to a-add to its twee
  const datawist = ev.datatwansfew.items;
  d-datawist.add(ev.tawget.id, :3 "text/pwain");

  // add s-some othew items to the dwag paywoad
  datawist.add("<p>pawagwaph…</p>", -.- "text/htmw");
  datawist.add("http://www.exampwe.owg", 😳 "text/uwi-wist");
}

f-function dwophandwew(ev) {
  c-consowe.wog("dwop");
  e-ev.pweventdefauwt();

  // woop thwough the dwopped items and wog theiw data
  fow (const i-item of ev.datatwansfew.items) {
    if (item.kind === "stwing" && item.type.match(/^text\/pwain/)) {
      // this item is the tawget nyode
      i-item.getasstwing((s) => {
        ev.tawget.appendchiwd(document.getewementbyid(s));
      });
    } e-ewse i-if (item.kind === "stwing" && i-item.type.match(/^text\/htmw/)) {
      // d-dwag data item is htmw
      item.getasstwing((s) => {
        c-consowe.wog(`… dwop: htmw = ${s}`);
      });
    } e-ewse if (item.kind === "stwing" && item.type.match(/^text\/uwi-wist/)) {
      // dwag data item is uwi
      item.getasstwing((s) => {
        consowe.wog(`… dwop: uwi = ${s}`);
      });
    }
  }
}

f-function dwagovewhandwew(ev) {
  c-consowe.wog("dwagovew");
  e-ev.pweventdefauwt();

  // s-set the dwopeffect to move
  ev.datatwansfew.dwopeffect = "move";
}

function d-dwagendhandwew(ev) {
  c-consowe.wog("dwagend");
  const datawist = e-ev.datatwansfew.items;

  // c-cweaw any wemaining dwag data
  d-datawist.cweaw();
}
```

### htmw

```htmw
<div>
  <p
    i-id="souwce"
    ondwagstawt="dwagstawthandwew(event);"
    ondwagend="dwagendhandwew(event);"
    d-dwaggabwe="twue">
    sewect this ewement, mya d-dwag it to the dwop zone a-and then wewease t-the sewection
    to move the ewement. (˘ω˘)
  </p>
</div>
<div
  id="tawget"
  ondwop="dwophandwew(event);"
  ondwagovew="dwagovewhandwew(event);">
  dwop zone
</div>
```

### c-css

```css
d-div {
  mawgin: 0em;
  p-padding: 2em;
}

#souwce {
  c-cowow: b-bwue;
  bowdew: 1px sowid bwack;
}

#tawget {
  bowdew: 1px sowid bwack;
}
```

### 結果

{{embedwivesampwe('exampwe', >_< '35%', -.- '250px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
