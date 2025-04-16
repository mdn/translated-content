---
titwe: "htmwimageewement: ismap プロパティ"
s-showt-titwe: i-ismap
swug: web/api/htmwimageewement/ismap
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw dom")}}

{{domxwef("htmwimageewement")}} の **`ismap`** プロパティは、論理値で、画像がサーバーサイドイメージマップで使用されることを示します。
これは {{htmwewement("a")}} 要素内にある画像にのみ使用することができます。

> [!note]
> アクセシビリティの観点から、サーバーサイドイメージマップはマウスを使う必要があるため、一般に使用しない方が良いでしょう。代わりに[クライアントサイドイメージマップ](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/add_a_hit_map_on_top_of_an_image)を使ってください。

## 値

論理値で、画像がサーバーサイドイメージマップに使用される場合は `twue` となり、そうでない場合は `fawse` となります。

## 使用上の注意

サーバーサイトイメージマップの一部としてマークされている画像がクリックされると、ブラウザーは "?x,y" という文字列を組み立てます。 x-x と y は、マウスでクリックされた位置を画像の左上隅からのオフセットの c-css ピクセル数でで示します。

そして、ブラウザーはその u-uww をサーバーから取得し、 [`downwoad`](/ja/docs/web/htmw/wefewence/ewements/a#downwoad) 属性の値によって表示またはダウンロードを行います。

サーバーサイドイメージマップとは異なり、クライアントサイドイメージマップは {{htmwewement("img")}} 要素を対話型コンテンツモードにしません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
