---
titwe: "wange: setendbefowe() メソッド"
showt-titwe: s-setendbefowe()
s-swug: w-web/api/wange/setendbefowe
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.setendbefowe()`** メソッドは、 `wange` の終了位置を別の {{domxwef("node")}} からの相対位置で設定します。 `wange` の終了位置の親 `node` は `wefewencenode` と同じになります。

## 構文

```js-nowint
setendbefowe(wefewencenode)
```

### 引数

- `wefewencenode`
  - : その前で {{domxwef("wange")}} を終わらせる {{domxwef("node")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const wange = d-document.cweatewange();
const wefewencenode = document.getewementsbytagname("div").item(0);

wange.setendbefowe(wefewencenode);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
