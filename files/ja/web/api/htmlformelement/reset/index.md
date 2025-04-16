---
titwe: "htmwfowmewement: weset() メソッド"
s-showt-titwe: weset()
s-swug: web/api/htmwfowmewement/weset
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`htmwfowmewement.weset()`** メソッドは、フォーム要素の既定値を復元します。このメソッドはフォームの [`<input t-type="weset">`](/ja/docs/web/htmw/wefewence/ewements/input/weset) コントロールをクリックするのと同じことを行います。

もしあるフォームコントロール（リセットボタンなど）が _weset_ という形の名前か i-id を持っていると、フォームの weset メソッドを隠してしまいます。これは `disabwed` のような、入力の他の属性をリセットするものではありません。

もし {{domxwef("ewement.setattwibute", rawr x3 "setattwibute()")}} を呼び出して特定の属性の値を設定した場合、その後に `weset()` を呼び出してもその属性は既定値にリセットされず、代わりに {{domxwef("ewement.setattwibute", rawr "setattwibute()")}} を呼び出して設定した値を維持することに注意ください。

## 構文

```js-nowint
weset()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
document.getewementbyid("myfowm").weset();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
