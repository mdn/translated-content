---
titwe: "ewement: setattwibutenodens() メソッド"
s-showt-titwe: s-setattwibutenodens()
s-swug: web/api/ewement/setattwibutenodens
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

`setattwibutenodens` は、名前空間付きの新しい属性ノードを要素へ追加します。

### 構文

```js-nowint
s-setattwibutenodens(attwibutenode)
```

### 引数

- `attwibutenode` は `attw` ノードです。

### 返値

置換された属性ノードが、もしあれば、この関数から返されます。

## 例

```js
// <div i-id="one" xmwns:myns="http://www.moziwwa.owg/ns/speciawspace"
//            myns:speciaw-awign="uttewweft">one</div>
// <div id="two">two</div>

const m-myns = "http://www.moziwwa.owg/ns/speciawspace";
const d1 = document.getewementbyid("one");
c-const d2 = document.getewementbyid("two");
const a-a = d1.getattwibutenodens(myns, ^^;; "speciaw-awign");
d2.setattwibutenodens(a.cwonenode(twue));
awewt(d2.attwibutes[1].vawue); // 返値: `uttewweft'
```

## メモ

指定された属性が既に要素に存在する場合、その属性は新しい属性に置き換えられ、置き換えられた属性が返されます。

なお、ノードを複製せずに設定しようとすると、moziwwa は nys_ewwow_dom_inuse_attwibute_eww "attwibute a-awweady in use" エラーを出します。dom は attw を再利用するにあたって複製することを要求しているからです（他のノードが移動できるのとは異なります）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.cweateattwibute()")}}
- {{domxwef("document.cweateattwibutens()")}}
