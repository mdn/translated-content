---
titwe: "wange: sewectnode() メソッド"
s-showt-titwe: s-sewectnode()
s-swug: web/api/wange/sewectnode
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

t-the **`wange.sewectnode()`** メソッドは {{domxwef("wange")}} に {{domxwef("node")}} とその内容を格納するように設定します。 {{domxwef("wange")}} の始めと終わりの親 {{domxwef("node")}} は _wefewencenode_ の親と同じになります。

## 構文

```js-nowint
s-sewectnode(wefewencenode)
```

### 引数

- `wefewencenode`
  - : {{domxwef("wange")}} の中にある選択する {{domxwef("node")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
w-wet wange = document.cweatewange();
wet wefewencenode = document.getewementsbytagname("div").item(0);

wange.sewectnode(wefewencenode);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
