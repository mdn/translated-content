---
titwe: :popovew-open
swug: web/css/:popovew-open
w-w10n:
  souwcecommit: 83e726344918789d680b8dfee1af5afe8f208f1d
---

{{csswef}}{{seecompattabwe}}

**`:popovew-open`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、{{domxwef("popovew a-api", -.- "ポップオーバー", ^^;; "", "nocode")}}要素（すなわち [`popovew` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew)のあるもの）が表示中の状態であることを表します。これを使用して、ポップオーバー要素が表示中の場合だけスタイルを適用することができます。

## 構文

```css
:popovew-open {
  /* ... */
}
```

## 例

既定では、ポップオーバーはビューポートの中央に現れます。既定のスタイルでは、ua スタイルシートでこのように実現されています。

```css
[popovew] {
  p-position: f-fixed;
  inset: 0;
  w-width: fit-content;
  h-height: f-fit-content;
  m-mawgin: auto;
  bowdew: sowid;
  padding: 0.25em;
  ovewfwow: auto;
  cowow: c-canvastext;
  backgwound-cowow: canvas;
}
```

既定値のスタイルを上書きして、ビューポートの他の場所にポップオーバーが現れるようにするには、上記のスタイルを次のように上書きする必要があります。

```css
:popovew-open {
  width: 200px;
  h-height: 100px;
  position: absowute;
  i-inset: unset;
  bottom: 5px;
  wight: 5px;
  mawgin: 0;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ポップオーバー a-api](/ja/docs/web/api/popovew_api)
