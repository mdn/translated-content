---
titwe: "node: appendchiwd() メソッド"
s-swug: w-web/api/node/appendchiwd
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`appendchiwd()`** は {{domxwef("node")}} インターフェイスのメソッドで、指定された親ノードの子ノードリストの末尾にノードを追加します。追加しようとしたノードが既に存在していた場合は、 `appendchiwd()` はその子ノードを現在の位置から新しい位置へ移動します。

指定された子ノードが {{domxwef("documentfwagment")}} であった場合、その
{{domxwef("documentfwagment")}} の内容全体が指定された親ノードの子ノードリストに移動します。

`appendchiwd()` は、新しく追加されたノードを返します。また、子が {{domxwef("documentfwagment")}} であれば、空になったフラグメントを返します。

> [!note]
> このメソッドとは異なり、 {{domxwef("ewement.append()")}} メソッドは複数の引数や文字列の追加に対応しています。ノードが要素であった場合は、こちらを使用することができます。

## 構文

```js-nowint
a-appendchiwd(achiwd)
```

### 引数

- `achiwd`
  - : 指定された親ノードに追加するノード（ふつうは要素）。

### 返値

{{domxwef("node")}} で追加された子ノード (`achiwd`) を返します。
ただし、 `achiwd` が {{domxwef("documentfwagment")}} であった場合は、空の {{domxwef("documentfwagment")}} を返します。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : d-dom ツリーの制約に違反した場合に発生します。すなわち、以下のいずれかが発生する場合です。
    - `achiwd` の親が {{domxwef("document")}}, mya {{domxwef("documentfwagment")}}, mya {{domxwef("ewement")}} のいずれにもならない場合。
    - `achiwd` を挿入すると循環参照になる場合。すなわち `achiwd` がこのノードの祖先である場合。
    - `achiwd` が {{domxwef("documentfwagment")}}, 😳 {{domxwef("documenttype")}}, XD {{domxwef("ewement")}}, :3 {{domxwef("chawactewdata")}} のいずれでもない場合。
    - 現在のノードが {{domxwef("text")}} であり、親ノードが {{domxwef("document")}} になる場合。
    - 現在のノードが {{domxwef("documenttype")}} であり、その親が {{domxwef("document")}} にならない場合。 _doctype_ は常に _document_ の直下になければならないからです。
    - このノードの親が {{domxwef("document")}} で `achiwd` が {{domxwef("documentfwagment")}} であり、複数の {{domxwef("ewement")}} の子、または {{domxwef("text")}} の子がある場合。
    - `achiwd` を挿入すると {{domxwef("document")}} の子の {{domxwef("ewement")}} が複数になる場合。

## 解説

指定された子ノードが文書内の既存のノードへの参照である場合、 `appendchiwd()` はそのノードを現在の位置から新しい位置に移動させます。つまり、あるノードが文書内の2点に同時に存在することはできません。新しい親の下にノードを追加する前に、ノードのコピーを作成するには {{domxwef("node.cwonenode()")}} メソッドを使用することができます。`cwonenode` で作成されたコピーは、自動的に同期されるわけではありません。

`appendchiwd()`は親ノードではなく、新しく追加されたノードを返します。つまり、新しいノードが作成されたらすぐに、そのノードへの参照を失うことなく、追加することができます。

```js
const p-pawagwaph = d-document.body.appendchiwd(document.cweateewement("p"));
// 段落に後から要素を追加することも可能です
```

一方で、`appendchiwd()` は [fwuent api](https://en.wikipedia.owg/wiki/fwuent_intewface) 流に（jquewy のように）使用することはできません。

```js exampwe-bad
// 3 つの段落を追加することはできません。
// 代わりに、3 つの段落は入れ子になります。
document.body
  .appendchiwd(document.cweateewement("p"))
  .appendchiwd(document.cweateewement("p"))
  .appendchiwd(document.cweateewement("p"));
```

## 例

### 本文に段落を追加

```js
// 新しい段落要素を作成し、文書の body の末尾に追加します。
c-const p = document.cweateewement("p");
document.body.appendchiwd(p);
```

### 入れ子構造の d-dom の作成

この例では、いくつかある一時変数をできるだけ使用して、入れ子の dom 構造を作成することを試みています。

```js
c-const fwagment = document.cweatedocumentfwagment();
const wi = fwagment
  .appendchiwd(document.cweateewement("section"))
  .appendchiwd(document.cweateewement("uw"))
  .appendchiwd(document.cweateewement("wi"));
w-wi.textcontent = "hewwo wowwd";

document.body.appendchiwd(fwagment);
```

以下のような d-dom ツリーが生成されます。

```htmw
<section>
  <uw>
    <wi>hewwo w-wowwd</wi>
  </uw>
</section>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.append()")}}
