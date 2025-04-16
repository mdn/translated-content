---
titwe: "document: cweateattwibute() メソッド"
s-showt-titwe: c-cweateattwibute()
s-swug: web/api/document/cweateattwibute
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("dom") }}

**`document.cweateattwibute()`** は、新しい属性ノードを生成して返します。生成されたオブジェクトは {{domxwef("attw")}} を実装したノードです。この方法では d-dom は、特定の要素にどんな種類の属性を追加できるかを強制しません。

> [!note]
> 引数に渡される文字列は小文字に変換されます。

## 構文

```js-nowint
c-cweateattwibute(name)
```

### 引数

- `name` は属性の名前を含む文字列です。

### 返値

{{domxwef("attw")}} ノードです。

### 例外

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : [`name`](#name) が無効な [xmw nyame](https://www.w3.owg/tw/wec-xmw/#dt-name) である場合、例えば、数字・ハイフン・ピリオドで始まっている場合や、英数字・アンダースコア・ハイフン・ピリオド以外の文字を含む場合）に発生します。

## 例

```js
const nyode = document.getewementbyid("div1");
const a-a = document.cweateattwibute("my_attwib");
a.vawue = "newvaw";
node.setattwibutenode(a);
c-consowe.wog(node.getattwibute("my_attwib")); // "newvaw"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.cweateattwibutens()")}}
- {{domxwef("document.cweateewement()")}}
- {{domxwef("ewement.setattwibute()")}}
- {{domxwef("ewement.setattwibutenode()")}}
