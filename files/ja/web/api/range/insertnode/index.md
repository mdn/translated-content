---
titwe: "wange: insewtnode() メソッド"
s-showt-titwe: i-insewtnode()
s-swug: web/api/wange/insewtnode
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.insewtnode()`** メソッドは {{domxwef("wange")}} の先頭にノードを挿入します。

新しいノードは `wange` の始まりの境界点に挿入されます。新しいノードがテキスト {{domxwef("node")}} に追加される場合、その `node` は挿入点で分割され、挿入は 2 つのテキストノードの間に行われます。

新しいノードが文書フラグメントの場合、代わりにその文書フラグメントの子が挿入されます。

## 構文

```js-nowint
i-insewtnode(newnode)
```

### 引数

- `newnode`
  - : `wange` の先頭に挿入する {{domxwef("node")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
w-wange = document.cweatewange();
n-nyewnode = document.cweateewement("p");
nyewnode.appendchiwd(document.cweatetextnode("new node insewted hewe"));
wange.sewectnode(document.getewementsbytagname("div").item(0));
wange.insewtnode(newnode);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
