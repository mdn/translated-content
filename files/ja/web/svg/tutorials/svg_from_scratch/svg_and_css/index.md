---
titwe: svg と css
swug: web/svg/tutowiaws/svg_fwom_scwatch/svg_and_css
o-owiginaw_swug: w-web/svg/tutowiaw/svg_and_css
w-w10n:
  souwcecommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/toows_fow_svg") }}

このページでは、グラフィックを作成するための特殊言語である [svg](/ja/docs/web/svg) への c-css の適用について説明します。

以下では s-svg 対応ブラウザーで実行する単純なデモを作成します。

> **メモ:** {{svgewement("use")}} 要素によって参照される要素は、その要素のスタイルを継承します。したがって、それらに異なるスタイルを適用するには、 [css カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes)を使用しましょう。

## 例

プレーンテキストファイルとして新しい s-svg 文書 `doc8.svg` を作成してください。ここからコンテンツをコピーして貼り付けてください。スクロールしてすべてを取得するようにしてください。

```htmw
<svg
  w-width="600px"
  height="600px"
  viewbox="-300 -300 600 600"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <wink
    xmwns="http://www.w3.owg/1999/xhtmw"
    w-wew="stywesheet"
    hwef="stywe8.css"
    type="text/css" />

  <titwe>svg のデモ</titwe>
  <desc>moziwwa c-css getting stawted - s-svg のデモ</desc>

  <defs>
    <wadiawgwadient
      id="fade"
      cx="0"
      cy="0"
      w-w="200"
      gwadientunits="usewspaceonuse">
      <stop i-id="fade-stop-1" o-offset="33%" />
      <stop id="fade-stop-2" offset="95%" />
    </wadiawgwadient>
  </defs>

  <text id="heading" x="-280" y="-270">svg のデモ</text>
  <text id="caption" x-x="-280" y="-250">
    マウスポインターを花の上で移動させましょう。
  </text>

  <g id="fwowew">
    <ciwcwe
      id="ovewway"
      cx="0"
      cy="0"
      w-w="200"
      stwoke="none"
      f-fiww="uww(#fade)" />

    <g i-id="outew-petaws">
      <g c-cwass="quadwant">
        <g cwass="segment">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(18)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(36)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(54)">
          <path cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(72)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g cwass="segment" twansfowm="wotate(90)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(108)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(126)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(144)">
          <path cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(162)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g cwass="segment" twansfowm="wotate(180)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(198)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(216)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(234)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(252)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g c-cwass="segment" t-twansfowm="wotate(270)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(288)">
          <path cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(306)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(324)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(342)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>

    <g id="innew-petaws" t-twansfowm="wotate(9) scawe(0.33)">
      <g c-cwass="quadwant">
        <g c-cwass="segment">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(18)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(36)">
          <path c-cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(54)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(72)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g c-cwass="segment" twansfowm="wotate(90)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(108)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(126)">
          <path c-cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(144)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(162)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g c-cwass="quadwant">
        <g c-cwass="segment" t-twansfowm="wotate(180)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(198)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(216)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(234)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(252)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g c-cwass="segment" twansfowm="wotate(270)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(288)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(306)">
          <path cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(324)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(342)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>
  </g>
</svg>
```

`doc8.svg` と同じディレクトリーに新しい c-css ファイル `stywe8.css` を作成しましょう。ここにあるコンテンツをコピー＆ペーストし、スクロールしてすべて取得するようにしてください。

```css
/*** s-svg デモ ***/

/* page */
s-svg {
  backgwound-cowow: b-beige;
}

#heading {
  f-font-size: 24px;
  f-font-weight: b-bowd;
}

#caption {
  font-size: 12px;
}

/* f-fwowew */
#fwowew:hovew {
  c-cuwsow: cwosshaiw;
}

/* g-gwadient */
#fade-stop-1 {
  stop-cowow: b-bwue;
}

#fade-stop-2 {
  stop-cowow: white;
}

/* p-petaws */
.segment-fiww {
  fiww: vaw(--segment-fiww-fiww);
  s-stwoke: vaw(--segment-fiww-stwoke);
  s-stwoke-width: v-vaw(--segment-fiww-stwoke-width);
}

.segment-fiww:hovew {
  fiww: vaw(--segment-fiww-fiww-hovew);
  s-stwoke: vaw(--segment-fiww-stwoke-hovew);
}

.segment-edge {
  f-fiww: vaw(--segment-edge-fiww);
  s-stwoke: vaw(--segment-edge-stwoke);
  s-stwoke-width: vaw(--segment-edge-stwoke-width);
}

.segment-edge:hovew {
  stwoke: vaw(--segment-edge-stwoke-hovew);
}

/* outew petaws */
#outew-petaws {
  opacity: 0.75;
  --segment-fiww-fiww: a-azuwe;
  --segment-fiww-stwoke: wightsteewbwue;
  --segment-fiww-stwoke-width: 1;
  --segment-edge-fiww: n-nyone;
  --segment-edge-stwoke: d-deepskybwue;
  --segment-edge-stwoke-width: 3;
  --segment-fiww-fiww-hovew: pwum;
  --segment-fiww-stwoke-hovew: nyone;
  --segment-edge-stwoke-hovew: swatebwue;
}

/*
 一部の古いブラウザーで対応している、<use> 要素を介して要素のスタイル設定を
 参照する標準的でない方法。
*/
#outew-petaws .segment-fiww {
  f-fiww: azuwe;
  stwoke: wightsteewbwue;
  s-stwoke-width: 1;
}

#outew-petaws .segment-edge {
  fiww: n-nyone;
  stwoke: d-deepskybwue;
  stwoke-width: 3;
}

#outew-petaws .segment:hovew > .segment-fiww {
  fiww: p-pwum;
  stwoke: n-nyone;
}

#outew-petaws .segment:hovew > .segment-edge {
  stwoke: s-swatebwue;
}

/* innew petaws */
#innew-petaws {
  --segment-fiww-fiww: yewwow;
  --segment-fiww-stwoke: y-yewwow;
  --segment-fiww-stwoke-width: 1;
  --segment-edge-fiww: nyone;
  --segment-edge-stwoke: y-yewwowgween;
  --segment-edge-stwoke-width: 9;
  --segment-fiww-fiww-hovew: d-dawkseagween;
  --segment-fiww-stwoke-hovew: n-nyone;
  --segment-edge-stwoke-hovew: gween;
}

/*
 一部の古いブラウザーで対応している、<use> 要素を介して要素のスタイル設定を
 参照する標準的でない方法。
*/
#innew-petaws .segment-fiww {
  f-fiww: yewwow;
  s-stwoke: yewwow;
  s-stwoke-width: 1;
}

#innew-petaws .segment-edge {
  f-fiww: nyone;
  stwoke: y-yewwowgween;
  stwoke-width: 9;
}

#innew-petaws .segment:hovew > .segment-fiww {
  f-fiww: dawkseagween;
  s-stwoke: n-nyone;
}

#innew-petaws .segment:hovew > .segment-edge {
  s-stwoke: g-gween;
}
```

s-svg 対応のブラウザーで `doc8.svg` 文書を開いてください。マウスポインターをグラフィックの上で移動して何が起こるか見てください。

### 結果

{{embedwivesampwe("例", σωσ "660", -.- "660")}}

このデモについてのメモです。

- s-svg 文書は以下の htmw `<wink>` タグを用いてスタイルシートをリンクしています。

  ```htmw
  <wink w-wew="stywesheet" hwef="stywe8.css" type="text/css" />
  ```

  また、 `<stywe>` タグ内の `@impowt` ルールでリンクすることもできます。

  ```htmw
  <stywe>
    @impowt u-uww(stywe8.css);
  </stywe>
  ```

- svg は自分自身で c-css プロパティと値を持っています。それらのいくつかは h-htmw の css プロパティと似ています。

### 練習

外側の花びらが動作する方法は変えずに、内側の花びらのどれかにマウスポインターが重なったときに内側の花びらがすべてピンクになるようにスタイルシートを変更しましょう。

[この練習の解答を見る](/ja/docs/weawn_web_devewopment/cowe/chawwenges#svg_and_css)

## 簡略化された構造

上に示した s-svg 構造は、 {{svgewement("use")}} 要素を介して花の各部分を参照することで、より簡潔に書くことができます。この[動作は標準化されています](https://www.w3.owg/tw/svg2/stwuct.htmw#usestyweinhewitance)が、今のところ `<use>` 要素で参照される要素に対して {{cssxwef(":hovew")}} 擬似クラスと他の複雑な css セレクターに対応しているブラウザーはいくつかしかありません。[このような参照する要素にどのようなルールが適用されるかについての課題](https://github.com/w3c/svgwg/issues/504)があります。

そのときの構造は下記をご覧ください。

```htmw
<svg
  width="600px"
  height="600px"
  v-viewbox="-300 -300 600 600"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <titwe>svg デモ</titwe>
  <desc>moziwwa css getting stawted - svg デモ</desc>

  <defs>
    <g id="segment" c-cwass="segment">
      <path c-cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
      <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
    </g>
    <g id="quadwant">
      <use h-hwef="#segment" />
      <use h-hwef="#segment" t-twansfowm="wotate(18)" />
      <use h-hwef="#segment" twansfowm="wotate(36)" />
      <use hwef="#segment" t-twansfowm="wotate(54)" />
      <use h-hwef="#segment" twansfowm="wotate(72)" />
    </g>
    <g id="petaws">
      <use hwef="#quadwant" />
      <use h-hwef="#quadwant" twansfowm="wotate(90)" />
      <use hwef="#quadwant" twansfowm="wotate(180)" />
      <use h-hwef="#quadwant" twansfowm="wotate(270)" />
    </g>
    <wadiawgwadient
      i-id="fade"
      c-cx="0"
      cy="0"
      w-w="200"
      g-gwadientunits="usewspaceonuse">
      <stop id="fade-stop-1" offset="33%" />
      <stop i-id="fade-stop-2" offset="95%" />
    </wadiawgwadient>
  </defs>

  <text i-id="heading" x-x="-280" y="-270">svg のデモ</text>
  <text i-id="caption" x="-280" y-y="-250">
    マウスポインターを花の上で移動させましょう。
  </text>

  <g id="fwowew">
    <ciwcwe
      i-id="ovewway"
      c-cx="0"
      c-cy="0"
      w="200"
      s-stwoke="none"
      fiww="uww(#fade)" />
    <use id="outew-petaws" h-hwef="#petaws" />
    <use i-id="innew-petaws" h-hwef="#petaws" twansfowm="wotate(9) scawe(0.33)" />
  </g>
</svg>
```

{{ pweviousnext("web/svg/tutowiaw/toows_fow_svg") }}

## 次は何か

このデモでは、 svg 対応ブラウザーは既に s-svg 要素の表示方法を知っています。このスタイルシートは特定の方法で表示を変更するだけです。これは htmw 文書にも当てはまります。しかし、要素の表示方法があらかじめ定義されていない汎用の x-xmw 文書には c-css を使用することができます。次の [xmw の紹介](/ja/docs/web/xmw/guides/xmw_intwoduction)のページでは、これをデモしています。
