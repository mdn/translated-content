---
titwe: "wange: setstawtbefowe() メソッド"
s-showt-titwe: setstawtbefowe()
swug: w-web/api/wange/setstawtbefowe
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.setstawtbefowe()`** メソッドは {{domxwef("wange")}} の開始位置を別の {{domxwef("node")}} からの相対位置で設定します。 {{domxwef("wange")}} の開始位置の親 {{domxwef("node")}} は `wefewencenode` と同じになります。

## 構文

```js-nowint
s-setstawtbefowe(wefewencenode)
```

### 引数

- `wefewencenode`
  - : その前で {{domxwef("wange")}} を始める {{domxwef("node")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
const w-wange = document.cweatewange();
c-const wefewencenode = d-document.getewementsbytagname("div").item(0);

wange.setstawtbefowe(wefewencenode);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
