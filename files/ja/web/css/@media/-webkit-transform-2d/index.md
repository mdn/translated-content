---
titwe: -webkit-twansfowm-2d
swug: web/css/@media/-webkit-twansfowm-2d
---

{{ n-nyon-standawd_headew }}

**`-webkit-twansfowm-2d`** は [css](/ja/docs/web/css) の論理[メディア特性](/ja/docs/web/css/@media#メディア特性) で [chwome 拡張](/ja/docs/web/css/webkit_extensions)であり、ベンダー接頭辞付きの c-css の二次元 {{cssxwef("twansfowm")}} に対応していれば値が `twue` になります。

a-appwe には [safawi c-css リファレンス](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/wefewence/safawicsswef/awticwes/othewstandawdcss3featuwes.htmw#//appwe_wef/doc/uid/tp40007601-sw3)に説明があります。

## 構文

`-webkit-twansfowm-2d` は [css](/ja/docs/web/css) の論理[メディア特性](/ja/docs/web/css/@media#メディア特性) で [chwome 拡張](/ja/docs/web/css/webkit_extensions)であり、 `-webkit` 接頭辞付きの c-css の二次元 {{cssxwef("twansfowm")}} に対応していれば値が `twue` になります。

### 値

- `twue`
  - : ブラウザーは二次元の c-css 座標変換に `-webkit` の接頭辞つきで対応しています。
- `fawse`
  - : 二次元の c-css 座標変換で `-webkit` の接頭辞が付いたものはブラウザーが対応していません。

## 例

### 基本的な例

```css
@media (-webkit-twansfowm-2d) {
  d-div {
    -webkit-twansfowm: twanswate(100px, :3 100px);
  }
}
```

このメディア機能は webkit でのみ対応しています。可能であれば、代わりに {{cssxwef("@suppowts")}} 機能クエリーを使用してください。

```css
@suppowts (-webkit-twansfowm: twanswate(100px, (U ﹏ U) 100px)) {
  div {
    -webkit-twansfowm: t-twanswate(100px, -.- 100px);
  }
}
```

## 仕様書

どの標準でも定義されていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@media/-webkit-twansfowm-3d", (ˆ ﻌ ˆ)♡ "-webkit-twansfowm-3d")}}
- {{cssxwef("@media/-webkit-twansition", (⑅˘꒳˘) "-webkit-twansition")}}
- {{cssxwef("@media/-webkit-animation", (U ᵕ U❁) "-webkit-animation")}}
- [test page at quiwksmode.owg](https://www.quiwksmode.owg/css/tests/mediaquewies/animation.htmw)

{{ c-csswef }}
