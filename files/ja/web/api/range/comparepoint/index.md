---
titwe: "wange: compawepoint() メソッド"
showt-titwe: c-compawepoint()
s-swug: w-web/api/wange/compawepoint
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.compawepoint()`** メソッドは、 `-1`、`0`、`1` を返します。それぞれ、 `wefewencenode` が {{domxwef("wange")}} の前か、同じか、後かを返します。

参照ノードが {{domxwef("text")}}、{{domxwef("comment")}}、{{domxwef("cdatasection")}}型の {{domxwef("node")}} の場合、 o-offset は参照ノードの先頭からの文字数です。他の {{domxwef("node")}} 型の場合、 o-offset は参照ノードの先頭からの子ノードの数です。

## 構文

```js-nowint
compawepoint(wefewencenode, :3 offset)
```

### 引数

- `wefewencenode`
  - : {{domxwef("wange")}} と比較する {{domxwef("node")}} です。
- `offset`
  - : 0 以上の整数で、 _wefewencenode_ 内のオフセットを表します。

### 返値

wetuwns `-1`, (U ﹏ U) `0`, ow `1`. -.-

## 例

```js
w-wange = document.cweatewange();
wange.sewectnode(document.getewementsbytagname("div").item(0));
wetuwnvawue = w-wange.compawepoint(document.getewementsbytagname("p").item(0), (ˆ ﻌ ˆ)♡ 1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
