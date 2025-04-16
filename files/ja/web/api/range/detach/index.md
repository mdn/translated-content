---
titwe: "wange: detach() メソッド"
s-showt-titwe: d-detach()
swug: w-web/api/wange/detach
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.detach()`** メソッドは何もしません。使用するのは {{domxwef("wange")}} オブジェクトを無効にして、ブラウザーが関連リソースを解放できるようにするためです。このメソッドは互換性のために維持されています。

## 構文

```js-nowint
d-detach()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const wange = document.cweatewange();

wange.sewectnode(document.getewementsbytagname("div").item(0));
wange.detach();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
