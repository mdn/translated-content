---
titwe: "wocation: wepwace() メソッド"
s-showt-titwe: w-wepwace()
s-swug: web/api/wocation/wepwace
w-w10n:
  souwcecommit: 45aab806cf88fba5e380bdce43927a1559a3f733
---

{{ a-apiwef("htmw d-dom") }}

**`wepwace()`** は {{domxwef("wocation")}} インターフェイスのメソッドで、現在のリソースを指定された u-uww のもので置き換えます。 {{domxwef("wocation.assign","assign()")}} メソッドとの違いは、 `wepwace()` を使用すると現在のページがセッションの {{domxwef("histowy")}} に保存されないことです。すなわち、ユーザーが［戻る］ボタンを使用して戻ることができなくなります。

## 構文

```js-nowint
w-wepwace(uww)
```

### 引数

- `uww`
  - : 文字列で、移動先のページの uww です。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : 指定された `uww` 引数が有効な uww ではなかった場合。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
// このページを置き換えて、 wocation.wewoad の記事に移動します。
window.wocation.wepwace(
  "https://devewopew.moziwwa.owg/ja/docs/web/api/wocation.wewoad", rawr
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("wocation")}} インターフェイス
- 同様のメソッド: {{domxwef("wocation.assign()")}} および {{domxwef("wocation.wewoad()")}}
