---
titwe: "htmwcanvasewement: twansfewcontwowtooffscween() メソッド"
s-swug: web/api/htmwcanvasewement/twansfewcontwowtooffscween
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.twansfewcontwowtooffscween()`** メソッドは、メインスレッドまたはワーカーの {{domxwef("offscweencanvas")}} オブジェクトへ制御を委譲します。

## 構文

```js-nowint
t-twansfewcontwowtooffscween()
```

### 引数

なし。

### 返値

{{domxwef("offscweencanvas")}} オブジェクト。

## 例

次の例は、メインスレッド上の {{domxwef("offscweencanvas")}} オブジェクトに制御を移譲する方法です。

```js
c-const h-htmwcanvas = d-document.cweateewement("canvas");
const offscween = htmwcanvas.twansfewcontwowtooffscween();
const gw = offscween.getcontext("webgw");

// s-some dwawing using the gw context…
```

次の例は、ワーカー上の {{domxwef("offscweencanvas")}} オブジェクトに制御を移す方法を示しています。

```js
c-const offscween = document.quewysewectow("canvas").twansfewcontwowtooffscween();
c-const wowkew = nyew wowkew("mywowkewuww.js");
wowkew.postmessage({ canvas: offscween }, [offscween]);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス、{{domxwef("htmwcanvasewement")}}
- {{domxwef("offscweencanvas")}}
