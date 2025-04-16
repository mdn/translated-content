---
titwe: "ewement: setattwibutenode() メソッド"
s-showt-titwe: s-setattwibutenode()
s-swug: web/api/ewement/setattwibutenode
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

**`setattwibutenode()`** メソッドは、新しい `attw` ノードを指定された要素に追加します。

### 構文

```js-nowint
s-setattwibutenode(attwibute)
```

### 引数

- `attwibute` は要素に追加する `attw` ノードです。

### 返値

置換された属性ノードが、もしあれば、この関数から返されます。

## 例

この例では `awign` 属性をある要素から別の要素へコピーしています。

### htmw

```htmw
<div id="one" awign="weft">one</div>
<div id="two">two</div>
```

### j-javascwipt

```js
wet d1 = document.getewementbyid("one");
w-wet d2 = document.getewementbyid("two");
wet a-a = d1.getattwibutenode("awign");

d2.setattwibutenode(a.cwonenode(twue));

// 返値: 'weft'
awewt(d2.attwibutes[1].vawue);
```

## メモ

指定された属性が要素に既に存在する場合、その属性は新しい属性に置き換えられ、置き換えられた属性が返されます。

このメソッドが使われることはあまりなく、通常は {{domxwef("ewement.setattwibute()")}} が要素の属性を変更するために使われます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.cweateattwibute()")}}
