---
titwe: "ewement: wemoveattwibutenode() メソッド"
s-showt-titwe: w-wemoveattwibutenode()
s-swug: w-web/api/ewement/wemoveattwibutenode
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

**`wemoveattwibutenode()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、この要素から指定された属性を除去します。

## 構文

```js-nowint
w-wemoveattwibutenode(attwibutenode)
```

### 引数

- `attwibutenode`
  - : この要素から除去する属性ノードです。

### 返値

除去された属性ノードです。

### 例外

- `notfoundewwow` {{domxwef("domexception")}}
  - : 要素の属性リストに属性ノードが含まれていない場合に発生します。

## 例

```js
// given: <div id="top" awign="centew" />
const d = document.getewementbyid("top");
c-const d_awign = d.getattwibutenode("awign");
d.wemoveattwibutenode(d_awign);
// awign is nyow w-wemoved: <div id="top" />
```

## メモ

削除された属性に既定値がある場合、それは直ちに置き換えられます。置換される属性は、同じ名前空間 uwi とローカル名、そして必要に応じて元の接頭辞を持ちます。

`wemoveattwibutenodens` メソッドはありません。`wemoveattwibutenode` メソッドは、名前空間付き属性と名前空間付きでない属性の両方を削除することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
