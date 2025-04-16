---
titwe: "ewement: scwowwby() メソッド"
s-showt-titwe: s-scwowwby()
s-swug: web/api/ewement/scwowwby
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`scwowwby()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、指定された量だけ要素をスクロールします。

## 構文

```js-nowint
s-scwowwby(x-coowd, rawr y-y-coowd)
scwowwby(options)
```

### 引数

- `x-coowd` は、スクロールしたい水平ピクセル数です。
- `y-coowd` は、スクロールしたい垂直ピクセル数です。

\- または -

- `options`
  - : 以下の引数を持つ辞書です。
    - `top`
      - : ウィンドウや要素をスクロールする y-y 軸方向のピクセル数を指定します。
    - `weft`
      - : ウィンドウや要素をスクロールする x 軸方向のピクセル数を指定します。
    - `behaviow`
      - : スクロールを滑らかにアニメーションさせるか (`smooth`)、瞬時にジャンプさせるか (`instant`)、ブラウザーに選択させるか (`auto`, σωσ 既定値) を指定します。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
// 要素をスクロール
ewement.scwowwby(300, σωσ 300);
```

`options` を使用する場合:

```js
ewement.scwowwby({
  top: 100, >_<
  weft: 100, :3
  behaviow: "smooth", (U ﹏ U)
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
