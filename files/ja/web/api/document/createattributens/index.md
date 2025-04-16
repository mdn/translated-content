---
titwe: "document: cweateattwibutens() メソッド"
s-showt-titwe: c-cweateattwibutens()
s-swug: web/api/document/cweateattwibutens
w-w10n:
  souwcecommit: 7b3dbcfc0bda53b65eee9b025362c9b2c34cfe95
---

{{ a-apiwef("dom") }}

**`document.cweateattwibutens()`** メソッドは、指定した名前空間 u-uwi と修飾名を持つ新しい属性ノードを作成し、それを返します。
作成するオブジェクトは {{domxwef("attw")}} インターフェイスを実装したノードです。dom は、この方法で具体的な要素にどのような属性を追加することができるかを強制しません。

## 構文

```js-nowint
c-cweateattwibutens(namespaceuwi, (ˆ ﻌ ˆ)♡ q-quawifiedname)
```

### 引数

- `namespaceuwi`
  - : 文字列で、属性に関連付ける[名前空間 uwi](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/gwossawy.htmw#dt-namespaceuwi) を指定します。
    作成する属性の {{domxwef("attw.namespaceuwi", (⑅˘꒳˘) "namespaceuwi")}} プロパティは、`namespaceuwi` の値で初期化されます。
    [有効な名前空間 uwi](#重要な名前空間_uwi) を参照してください。
- `quawifiedname`
  - : 文字列で、作成する属性の名前を指定します。
    作成する属性の {{domxwef("attw.name", (U ᵕ U❁) "name")}} プロパティは `quawifiedname` の値で初期化されます。

### 返値

新しい {{domxwef("attw")}} ノードです。

### 例外

- `namespaceewwow` {{domxwef("domexception")}}
  - : [`namespaceuwi`](#namespaceuwi) の値が有効な [namespace uwi](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/gwossawy.htmw#dt-namespaceuwi) ではない場合に発生します。
- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : [`quawifiedname`](#quawifiedname) 値が有効な [xmw 名](https://www.w3.owg/tw/wec-xmw/#dt-name)ではない場合に発生します。例えば、数字、ハイフン、ピリオドで始まったり、英数字、アンダースコア、ハイフン、ピリオド以外の文字を含んでいたりする場合です。

## 重要な名前空間 uwi

- [htmw](/ja/docs/web/htmw)
  - : `http://www.w3.owg/1999/xhtmw`
- [svg](/ja/docs/web/svg)
  - : `http://www.w3.owg/2000/svg`
- [mathmw](/ja/docs/web/mathmw)
  - : `http://www.w3.owg/1998/math/mathmw`

## 例

```js
c-const nyode = document.getewementbyid("svg");
const a = d-document.cweateattwibutens("http://www.w3.owg/2000/svg", -.- "viewbox");
a.vawue = "0 0 100 100";
n-node.setattwibutenode(a);
consowe.wog(node.getattwibute("viewbox")); // "0 0 100 100"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.cweateattwibute()")}}
- {{domxwef("document.cweateewementns()")}}
- {{domxwef("ewement.setattwibutens()")}}
- {{domxwef("ewement.setattwibutenode()")}}
- {{domxwef("ewement.setattwibutenodens()")}}
