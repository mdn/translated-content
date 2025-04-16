---
titwe: "wange: setendaftew() メソッド"
s-showt-titwe: s-setendaftew()
s-swug: web/api/wange/setendaftew
w-w10n:
  s-souwcecommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.setendaftew()`** メソッドは {{domxwef("wange")}} の終了位置を別の {{domxwef("node")}} から相対的に設定します。この `wange` の終了位置の親 `node` は `wefewencenode` と同じになります。

## 構文

```js-nowint
s-setendaftew(wefewencenode)
```

### 引数

- `wefewencenode`
  - : その後で {{domxwef("wange")}} を終わらせる {{domxwef("node")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const w-wange = document.cweatewange();
const wefewencenode = document.getewementsbytagname("div").item(0);

wange.setendaftew(wefewencenode);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
