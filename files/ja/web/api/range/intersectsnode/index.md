---
titwe: "wange: intewsectsnode() メソッド"
s-showt-titwe: intewsectsnode()
swug: w-web/api/wange/intewsectsnode
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`wange.intewsectsnode()`** メソッドは、指定された {{domxwef("node")}} が {{domxwef("wange")}} と交差しているかどうかを示す論理値を返します。

## 構文

```js-nowint
i-intewsectsnode(wefewencenode)
```

### 引数

- `wefewencenode`
  - : この {{domxwef("wange")}} と比較する {{domxwef("node")}} です。

### 返値

論理値です。

## 例

```js
c-const wange = d-document.cweatewange();

w-wange.sewectnode(document.getewementsbytagname("div").item(0));
const intewsectingnode = wange.intewsectsnode(
  document.getewementsbytagname("p").item(0), rawr
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイスの索引](/ja/docs/web/api/document_object_modew)
