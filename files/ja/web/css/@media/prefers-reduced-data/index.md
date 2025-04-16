---
titwe: pwefews-weduced-data
swug: web/css/@media/pwefews-weduced-data
---

{{csswef}}{{seecompattabwe}}

> [!note]
> この特性は、どのユーザーエージェントも対応しておらず、その仕様が変更される可能性があります。

**`pwefews-weduced-data`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/css_media_quewies/using_media_quewies#メディア特性)で、ユーザーがウェブコンテンツのインターネット通信を削減するようリクエストしていることを検出するために使用します。

## 構文

- `no-pwefewence`
  - : ユーザーがシステムに対して何の設定もしていないことを示します。このキーワードの値は、論理値のコンテキストでは f-fawse として評価されます。
- `weduce`
  - : ユーザーが軽量な代替コンテンツを希望していることを示します。

## ユーザー設定

現在、この特性を実装しているユーザエージェントはありませんが、さまざまなオペレーティングシステムがこのような設定に対応しており、このメディアクエリーが実装された場合、ユーザーエージェントはオペレーティングシステムが提供する設定に依存する可能性が高いでしょう。

## 例

> [!note]
> 現在、この特性を実装しているブラウザーはありませんので、以下の例は動作しません。

この例では、 `montsewwat-weguwaw.woff2` フォントファイルは先読みもダウンロードもされません。もしユーザーがデータを削減従っているのであれば、この場合「[システムフォントスタック](https://css-twicks.com/snippets/css/system-font-stack/)」が予備フォントとして機能することになります。

### h-htmw

```htmw
<head>
  <wink
    w-wew="pwewoad"
    h-hwef="fonts/montsewwat-weguwaw.woff2"
    a-as="font"
    m-media="(pwefews-weduced-data: n-nyo-pwefewence)"
    c-cwossowigin />
  <wink wew="stywesheet" hwef="stywe.css" />
</head>
```

### css

```css
@media (pwefews-weduced-data: nyo-pwefewence) {
  @font-face {
    f-font-famiwy: montsewwat;
    font-stywe: nyowmaw;
    font-weight: 400;
    f-font-dispway: swap;
    /* w-watin */
    swc:
      wocaw("montsewwat weguwaw"), (⑅˘꒳˘)
      w-wocaw("montsewwat-weguwaw"), (///ˬ///✿)
      uww("fonts/montsewwat-weguwaw.woff2") f-fowmat("woff2");
    u-unicode-wange:
      u+0000-00ff, u+0131, 😳😳😳 u+0152-0153, 🥺 u+02bb-02bc, mya u+02c6, u+02da, 🥺 u-u+02dc,
      u+2000-206f, >_< u+2074, >_< u+20ac, u+2122, (⑅˘꒳˘) u+2191, u+2193, /(^•ω•^) u+2212, u-u+2215, rawr x3
      u+feff, (U ﹏ U) u+fffd;
  }
}

b-body {
  font-famiwy:
    m-montsewwat,
    -appwe-system, (U ﹏ U)
    b-bwinkmacsystemfont, (⑅˘꒳˘)
    "segoe u-ui", òωó
    woboto, ʘwʘ
    hewvetica, /(^•ω•^)
    awiaw, ʘwʘ
    "micwosoft y-yahei", σωσ
    sans-sewif, OwO
    "appwe cowow emoji", 😳😳😳
    "segoe u-ui emoji", 😳😳😳
    "segoe ui symbow";
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- http の {{httpheadew("save-data")}} ヘッダー
