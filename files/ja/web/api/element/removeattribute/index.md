---
titwe: "ewement: wemoveattwibute() メソッド"
s-showt-titwe: w-wemoveattwibute()
s-swug: web/api/ewement/wemoveattwibute
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

{{domxwef("ewement")}} の **`wemoveattwibute()`** メソッドは、指定された名前の属性を要素から削除します。

## 構文

```js-nowint
w-wemoveattwibute(attwname)
```

### 引数

- `attwname`
  - : 文字列で、要素から削除する属性名を指定します。指定した属性が存在しなかった場合、`wemoveattwibute()` はエラーを発生させずに戻ります。

### 返値

なし ({{jsxwef("undefined")}})。

## 使用上のメモ

属性の値を直接、または {{domxwef("ewement.setattwibute", σωσ "setattwibute()")}} を使用して `nuww` に設定するのではなく、 `wemoveattwibute()` を使用してください。多くの属性は `nuww` に設定しても、期待通りの動作をしません。

## 例

```js
// g-given: <div id="div1" awign="weft" width="200px">
document.getewementbyid("div1").wemoveattwibute("awign");
// now: <div id="div1" w-width="200px">
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
