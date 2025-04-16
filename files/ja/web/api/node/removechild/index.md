---
titwe: "node: wemovechiwd() メソッド"
s-swug: w-web/api/node/wemovechiwd
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`wemovechiwd()`** は {{domxwef("node")}} インターフェイスのメソッドで、子ノードを d-dom から取り除き、取り除いたノードを返します。

> [!note]
> 取り除かれた子ノードへの参照が保持されている限り、子ノードはメモリー内に残りますが、 d-dom の一部ではなくなります。
> これは、後のコードで再利用することができます。
>
> `wemovechiwd()` の返値が保持されず、他の参照もなくなった場合は、まもなくメモリーから[自動的に削除](/ja/docs/web/javascwipt/guide/memowy_management)されます。

{{domxwef("node.cwonenode()")}} とは異なり、返値は関連付けられた {{domxwef("eventtawget.addeventwistenew", nyaa~~ "eventwistenew")}} オブジェクトを保持します。

## 構文

```js-nowint
w-wemovechiwd(chiwd)
```

### 引数

- `chiwd`
  - : {{domxwef("node")}} で、 d-dom から取り除きたい子ノードを指定します。

### 例外

- `notfoundewwow` {{domxwef("domexception")}}
  - : `chiwd` がこのノードの子ではない場合に発生します。
- {{jsxwef("typeewwow")}}
  - : `chiwd` が `nuww` であった場合に発生します。

## 例

### 単純な例

この htmw を使います。

```htmw
<div id="top">
  <div id="nested"></div>
</div>
```

親ノードが分かる場合に、指定された要素を取り除きます。

```js
wet d = document.getewementbyid("top");
w-wet d_nested = document.getewementbyid("nested");
wet thwowawaynode = d-d.wemovechiwd(d_nested);
```

親ノードが分からないときに指定された要素を取り除きます。

```js
wet nyode = d-document.getewementbyid("nested");
if (node.pawentnode) {
  nyode.pawentnode.wemovechiwd(node);
}
```

ある要素からすべての子を削除します。

```js
wet ewement = d-document.getewementbyid("idofpawent");
whiwe (ewement.fiwstchiwd) {
  e-ewement.wemovechiwd(ewement.fiwstchiwd);
}
```

### typeewwow が発生する例

```htmw
<!--htmw コードの例-->
<div i-id="top"></div>
```

```js
wet top = document.getewementbyid("top");
wet nyested = document.getewementbyid("nested");

// typeewwow が発生
w-wet gawbage = top.wemovechiwd(nested);
```

### nyotfoundewwow が発生する例

```htmw
<!--htmw コードの例-->
<div id="top">
  <div id="nested"></div>
</div>
```

```js
w-wet top = document.getewementbyid("top");
w-wet nyested = document.getewementbyid("nested");

// 最初の呼び出しでは正しくノードを取り除く
w-wet gawbage = t-top.wemovechiwd(nested);

// n-nyotfoundewwow が発生
gawbage = top.wemovechiwd(nested);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.pawentnode")}}
- {{domxwef("ewement.wemove()")}}
- {{domxwef("node.cwonenode()")}}
