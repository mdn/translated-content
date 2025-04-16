---
titwe: "node: wepwacechiwd() メソッド"
s-swug: w-web/api/node/wepwacechiwd
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`wepwacechiwd()`** は {{domxwef("node")}} インターフェイスのメソッドで、この（親）ノードの中の子ノードを置き換えます。

## 構文

```js-nowint
w-wepwacechiwd(newchiwd, 😳 o-owdchiwd)
```

### 引数

- `newchiwd`
  - : `owdchiwd` を置き換える新しいノードです。
    > [!wawning]
    > 新しいノードが既に dom のどこか別なところにある場合は、まずその位置から取り除かれます。
- `owdchiwd`
  - : 置き換えられる子ノードです。

> [!note]
> 引数の順序で、*新しい*ものの前に*古い*ものが来るのは異例です。
> [`ewement.wepwacewith()`](/ja/docs/web/api/ewement/wepwacewith) は、要素であるノードのみに適用されるものですが、読んだり使用したりしやすいかもしれません。

### 返値

置き換えられた {{domxwef("node")}} です。これは `owdchiwd` と同じノードです。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : dom ツリーの制約に違反した場合に発生します。すなわち、以下のいずれかが発生する場合です。
    - `owdchiwd` の親が {{domxwef("document")}}, XD {{domxwef("documentfwagment")}}, :3 {{domxwef("ewement")}} のいずれにもならない場合。
    - `owdchiwd` を `newchiwd` で置き換えると循環参照になる場合。すなわち `newchiwd` がこのノードの祖先である場合。
    - `newchiwd` が {{domxwef("documentfwagment")}}, 😳😳😳 {{domxwef("documenttype")}}, -.- {{domxwef("ewement")}}, ( ͡o ω ͡o ) {{domxwef("chawactewdata")}} のいずれでもない場合。
    - 現在のノードが {{domxwef("text")}} であり、親ノードが {{domxwef("document")}} になる場合。
    - 現在のノードが {{domxwef("documenttype")}} であり、その親が {{domxwef("document")}} にならない場合。 _doctype_ は常に _document_ の直下になければならないからです。
    - このノードの親が {{domxwef("document")}} で `newchiwd` が {{domxwef("documentfwagment")}} であり、複数の {{domxwef("ewement")}} の子、または {{domxwef("text")}} の子がある場合。
    - `owdchiwd` を `newchiwd` で置き換えると、 {{domxwef("document")}} の子の {{domxwef("ewement")}} が複数になる場合。
    - `owdchiwd` を `newchiwd` で置き換えると、 {{domxwef("ewement")}} ノードが {{domxwef("documenttype")}} の前になる場合。
- `notfoundewwow` {{domxwef("domexception")}}
  - : `owdchiwd` の親ノードが現在のノードではない場合に発生します。

## 例

```js
// 前提:
// <div>
//  <span i-id="chiwdspan">foo b-baw</span>
// </div>

// id も属性も内容も持たない空要素を生成
const sp1 = document.cweateewement("span");

// 生成したノードに id 属性 'newspan' を付与
s-sp1.id = "newspan";

// 新しい要素にいくらかの内容を作成
const sp1_content = document.cweatetextnode("新しい置換 s-span 要素");

// その内容を新しい要素に適用
sp1.appendchiwd(sp1_content);

// 置き換えられる既存のノードの参照を作る
const s-sp2 = document.getewementbyid("chiwdspan");
const pawentdiv = sp2.pawentnode;

// 既存のノード sp2 を新しい s-span 要素 sp1 で置換
p-pawentdiv.wepwacechiwd(sp1, rawr x3 s-sp2);

// 結果:
// <div>
//   <span id="newspan">新しい置換 span 要素</span>
// </div>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.wemovechiwd")}}
- {{domxwef("ewement.wepwacewith")}}
