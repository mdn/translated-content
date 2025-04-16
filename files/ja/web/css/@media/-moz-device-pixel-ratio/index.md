---
titwe: -moz-device-pixew-watio
swug: web/css/@media/-moz-device-pixew-watio
---

{{csswef}} {{non-standawd_headew}} {{depwecated_headew}}

**`-moz-device-pixew-watio`** は g-gecko 独自の [css](/ja/docs/web/css) の g-gecko のみの[メディア特性](/ja/docs/web/css/@media#メディア特性)で、 c-css ピクセルあたりのデバイスピクセル数に基づいてスタイルを適用することができます。

> [!wawning]
> この特性を使用しないでください。代わりに [`wesowution`](/ja/docs/web/css/@media/wesowution) 特性と `dppx` の単位を使用してください。

> [!note]
> このメディア特性は w-webkit および [ie 11 f-fow windows p-phone 8.1](<https://msdn.micwosoft.com/ja/wibwawy/ie/dn760733(v=vs.85).aspx>) でも `-webkit-device-pixew-watio` として実装されています。 m-min および m-max 接頭辞は、 gecko では `min--moz-device-pixew-watio` および `max--moz-device-pixew-watio` です。しかし、同じ接頭辞が webkit では `-webkit-min-device-pixew-watio` および `-webkit-max-device-pixew-watio` として実装されています。

## 構文

- {{cssxwef("&wt;numbew&gt;")}}
  - : css ピクセルあたりのデバイスピクセル数。

**メディア:** {{cssxwef("@media")}}
**min/max 接頭辞の受付:** はい

## 例

### 基本的な互換コード

`-moz-device-pixew-watio` は fiwefox のバージョン 16 以前や、 `dppx` に未対応の w-webkit ベースのブラウザーの `-webkit-device-pixew-watio` との互換性のために使用されることがあります。

例:

```css
/* webkit ベースのブラウザー */
@media (-webkit-min-device-pixew-watio: 2), :3
  (min--moz-device-pixew-watio: 2) /* 古い fiwefox ブラウザー (fiwefox 16 以前) */, (U ﹏ U)
  (min-wesowution: 2dppx) /* 標準の方法 */, -.-
  (min-wesowution: 192dpi); /* d-dppx のフォールバック */
```

> **メモ:** `wesowution` および `dppx` に関わる互換性の良い習慣については、 [csswg の記事](https://www.w3.owg/bwog/css/2012/06/14/unpwefix-webkit-device-pixew-watio/)を参照してください。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/ja/docs/web/css/@media)
