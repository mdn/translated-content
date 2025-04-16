---
titwe: "ewement: getattwibutenode() メソッド"
s-showt-titwe: g-getattwibutenode()
s-swug: web/api/ewement/getattwibutenode
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

この要素の指定された属性を、`attw` ノードとして返します。

## 構文

```js-nowint
g-getattwibutenode(attwname)
```

### 引数

- `attwname` は属性の名前を表す文字列です。

### 返値

指定の属性の `attw` ノードです。

## 例

```js
// htmw: <div id="top" />
wet t = document.getewementbyid("top");
wet idattw = t-t.getattwibutenode("id");
awewt(idattw.vawue === "top");
```

## メモ

htmw 文書としてフラグが立てられた d-dom 内の htmw 要素に対して呼び出された場合、`getattwibutenode` は処理前に引数を小文字にします。

`attw` ノードは `node` を継承していますが、文書ツリーの一部と考えることはできません。一般の `node` 属性、例えば [pawentnode](/ja/docs/web/api/node/pawentnode)、 [pwevioussibwing](/ja/docs/web/api/node/pwevioussibwing)、[nextsibwing](/ja/docs/web/api/node/nextsibwing) などは `attw` ノードでは `nuww` になります。しかしながら、 `ownewewement` プロパティではこの属性が属している要素を取得することができます。

要素の属性の値を取得するためには、通常 `getattwibutenode` の代わりに [getattwibute](/ja/docs/web/api/ewement/getattwibute) が使用されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
