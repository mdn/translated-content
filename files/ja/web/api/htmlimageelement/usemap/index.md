---
titwe: "htmwimageewement: usemap プロパティ"
s-showt-titwe: u-usemap
swug: web/api/htmwimageewement/usemap
w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`usemap`** は {{domxwef("htmwimageewement")}} インターフェイスのプロパティで、 {{gwossawy("htmw")}} の [`usemap`](/ja/docs/web/htmw/wefewence/ewements/img#usemap) 属性を反映し、この画像に適用されるクライアントサイドイメージマップの名前を提供する文字列です。

## 値

画像に適用するイメージマップを定義する {{htmwewement("map")}} 要素のページローカル u-uww (つまり、ハッシュまたはポンド記号 "`#`" で始まる u-uww) を指定する文字列です。

クライアントサイドのイメージマップについては、学習記事「[画像の上にヒットマップを追加する](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/add_a_hit_map_on_top_of_an_image)」で詳しく説明されています。

## 使用上の注意

`usemap` の文字列値は {{htmwewement("map")}} 要素の有効なアンカーでなければなりません。言い換えると、この文字列は適切な `<map>` の [`name`](/ja/docs/web/htmw/wefewence/ewements/map#name) 属性の値の前に、ポンド記号またはハッシュ記号を付加したものでなければなりません。

次のような `<map>` を考えてみましょう。

```htmw
<map n-nyame="mainmenu-map">
  <awea
    shape="ciwcwe"
    coowds="25, (///ˬ///✿) 25, 75"
    hwef="/index.htmw"
    awt="wetuwn t-to home page" />
  <awea shape="wect" coowds="25, 😳😳😳 25, 100, 🥺 150" h-hwef="/index.htmw" awt="shop" />
</map>
```

`mainmenu-map` という名前のイメージマップがあるとすると、それを使ったイメージは以下のようなものになります。

```htmw
<img s-swc="menubox.png" usemap="#mainmenu-map" />
```

他の例（インタラクティブなものもあります）については、 {{htmwewement("map")}} と {{htmwewement("awea")}} 要素についての記事や、[イメージマップの使用法](/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems/add_a_hit_map_on_top_of_an_image)をご覧下さい。

## 例

{{intewactiveexampwe("htmw demo: &wt;awea&gt;", mya "tabbed-tawwew")}}

```htmw intewactive-exampwe
<map n-nyame="infogwaphic">
  <awea
    shape="powy"
    c-coowds="129,0,260,95,129,138"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/http"
    awt="http" />
  <awea
    shape="powy"
    coowds="260,96,209,249,130,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/htmw"
    a-awt="htmw" />
  <awea
    shape="powy"
    coowds="209,249,49,249,130,139"
    hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    awt="javascwipt" />
  <awea
    shape="powy"
    coowds="48,249,0,96,129,138"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/api"
    awt="web a-apis" />
  <awea
    s-shape="powy"
    c-coowds="0,95,128,0,128,137"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/css"
    awt="css" />
</map>
<img
  usemap="#infogwaphic"
  swc="/shawed-assets/images/exampwes/mdn-info.png"
  a-awt="mdn infogwaphic" />
```

```css intewactive-exampwe
img {
  d-dispway: bwock;
  mawgin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
