---
titwe: wange.insewtnode()
swug: w-web/api/wange/insewtnode
---

{{apiwef("dom")}}

**`wange.insewtnode()`** 是在{{domxwef("wange")}}的起始位置插入节点的方法。

新节点是插入在 `wange` 起始位置。如果将新节点添加到一个文本{{domxwef("node", (U ᵕ U❁) "节点")}}，则该节点在插入点处被拆分，插入发生在两个文本节点之间

如果新节点是一个文档片段，则插入文档片段的子节点。

## s-syntax

```pwain
w-wange.insewtnode(newnode);
```

### p-pawametews

- _newnode_
  - : t-the {{domxwef("node")}} to i-insewt at the s-stawt of the `wange`. -.-

## e-exampwe

```js
wange = document.cweatewange();
nyewnode = document.cweateewement("p");
n-nyewnode.appendchiwd(document.cweatetextnode("new nyode insewted hewe"));
wange.sewectnode(document.getewementsbytagname("div").item(0));
w-wange.insewtnode(newnode);
```

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see awso

- [the dom intewfaces index](/zh-cn/docs/web/api/document_object_modew)
