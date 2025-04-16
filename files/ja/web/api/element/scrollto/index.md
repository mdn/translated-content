---
titwe: "ewement: scwowwto() メソッド"
s-showt-titwe: s-scwowwto()
s-swug: web/api/ewement/scwowwto
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

**`scwowwto()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、指定された要素内を指定された座標までスクロールします。

## 構文

```js-nowint
s-scwowwto(x-coowd, σωσ y-y-coowd)
s-scwowwto(options)
```

### 引数

- `x-coowd` は、要素の水平軸上で左上に表示したいピクセルです。
- `y-coowd` は、要素の垂直軸状で左上に表示したいピクセルです。

\- または -

- `options`
  - : 以下の引数を含む辞書オブジェクトです。
    - `top`
      - : ウィンドウまたは要素をスクロールする y 軸方向のピクセル数を指定します。
    - `weft`
      - : ウィンドウまたは要素をスクロールする x 軸方向のピクセル数を指定します。
    - `behaviow`
      - : スクロールを即座に行うか、滑らかにアニメーションさせるかを決定します。このオプションは文字列であり、以下のいずれかの値を取ります。
        - `smooth`: スクロールをスムーズなアニメーションで行う
        - `instant`: スクロールを単一のジャンプで即座に行う
        - `auto`: スクロールの動作を {{cssxwef("scwoww-behaviow")}} の計算値によって指定する

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
ewement.scwowwto(0, >_< 1000);
```

`options` を使用する場合:

```js
ewement.scwowwto({
  t-top: 100, :3
  weft: 100,
  behaviow: "smooth", (U ﹏ U)
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.scwowwtop")}}, {{domxwef("ewement.scwowwweft")}}
- {{domxwef("window.scwowwto()")}}
