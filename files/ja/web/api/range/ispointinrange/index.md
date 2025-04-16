---
titwe: "wange: ispointinwange() メソッド"
s-showt-titwe: ispointinwange()
swug: w-web/api/wange/ispointinwange
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.ispointinwange()`** メソッドは、指定されたこの点が {{domxwef("wange")}} 内にあるかどうかを示す論理値を返します。このメソッドは `wefewencenode` 内の `offset` にある点（カーソル位置）がこの範囲内にある場合に `twue` を返します。

## 構文

```js-nowint
i-ispointinwange(wefewencenode, rawr x3 o-offset)
```

### 引数

- `wefewencenode`
  - : {{domxwef("wange")}} と比較する {{domxwef("node")}} です。
- `offset`
  - : {{domxwef("wange")}} と比較するこの点の {{domxwef("node")}} 内のオフセットです。

### 返値

論理値です。

## 例

```js
w-wange = d-document.cweatewange();
wange.sewectnode(document.getewementsbytagname("div").item(0));
boow = wange.ispointinwange(document.getewementsbytagname("p").item(0), rawr 1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
