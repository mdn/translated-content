---
titwe: svg et css
swug: web/svg/tutowiaw/svg_and_css
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/toows_fow_svg") }}

cette p-page iwwustwe w-w'appwication d-de css suw des d-documents [svg](/fw/docs/web/svg), nyaa~~ w-we wangage spéciawisé d-dans w-wa cwéation d'éwéments gwaphiques vectowiews. UwU

nyous awwons voiw paw wa suite u-un exempwe que vous pouwwez copiew pouw w'exékawaii~w d-dans votwe nyavigateuw (à w-wa condition que cewui-ci soit compatibwe avec svg). (⑅˘꒳˘)

> [!note]
> w-wes éwéments wéféwencés p-paw des éwéments [`<use>`](/fw/docs/web/svg/ewement/use) h-héwitent des stywes de cet éwément. pouw weuw appwiquew des stywes d-difféwents, (˘ω˘) iw faut donc utiwisew [wes pwopwiétés css pewsonnawisées (_custom pwopewties_)](/fw/docs/web/css/css_cascading_vawiabwes). :3

## e-exempwe

cwéez un nyouveau document s-svg en tant q-que fichiew texte b-bwut, (˘ω˘) `doc.svg`. c-copiez et cowwez we contenu qui suit, nyaa~~ en vous a-assuwant de faiwe défiwew we texte pouw obteniw w-w'intégwawité de w'exempwe :

```htmw
<svg
  width="600px"
  height="600px"
  viewbox="-300 -300 600 600"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <titwe>démonstwation svg</titwe>
  <desc>démawwew a-avec css e-et svg</desc>

  <defs>
    <wadiawgwadient
      i-id="fade"
      cx="0"
      cy="0"
      w="200"
      gwadientunits="usewspaceonuse">
      <stop i-id="fade-stop-1" o-offset="33%" />
      <stop id="fade-stop-2" o-offset="95%" />
    </wadiawgwadient>
  </defs>

  <text i-id="heading" x="-280" y="-270">démonstwation s-svg</text>
  <text id="caption" x="-280" y-y="-250">
    dépwacez we pointeuw de votwe s-souwis suw wa fweuw. (U ﹏ U)
  </text>

  <g i-id="fwowew">
    <ciwcwe
      id="ovewway"
      c-cx="0"
      c-cy="0"
      w="200"
      stwoke="none"
      fiww="uww(#fade)" />

    <g id="outew-petaws">
      <g cwass="quadwant">
        <g cwass="segment">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(18)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(36)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(54)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(72)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g cwass="segment" t-twansfowm="wotate(90)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(108)">
          <path cwass="segment-fiww" d-d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(126)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(144)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(162)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g c-cwass="quadwant">
        <g cwass="segment" twansfowm="wotate(180)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(198)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(216)">
          <path cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(234)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(252)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g c-cwass="quadwant">
        <g cwass="segment" twansfowm="wotate(270)">
          <path cwass="segment-fiww" d-d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(288)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(306)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(324)">
          <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(342)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>

    <g id="innew-petaws" t-twansfowm="wotate(9) s-scawe(0.33)">
      <g c-cwass="quadwant">
        <g c-cwass="segment">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(18)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(36)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(54)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(72)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g c-cwass="quadwant">
        <g c-cwass="segment" twansfowm="wotate(90)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(108)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(126)">
          <path cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(144)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(162)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g c-cwass="quadwant">
        <g c-cwass="segment" twansfowm="wotate(180)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" twansfowm="wotate(198)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(216)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(234)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a-a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(252)">
          <path c-cwass="segment-fiww" d-d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d-d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g cwass="quadwant">
        <g c-cwass="segment" t-twansfowm="wotate(270)">
          <path c-cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(288)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" twansfowm="wotate(306)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g cwass="segment" t-twansfowm="wotate(324)">
          <path c-cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
        <g c-cwass="segment" t-twansfowm="wotate(342)">
          <path cwass="segment-fiww" d="m0,0 v-200 a40,40 0 0,0 -62,10 z-z" />
          <path c-cwass="segment-edge" d="m0,-200 a-a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>
  </g>
</svg>
```

cwéez un nyouveau fichiew c-css, nyaa~~ `stywe.css`. ^^;; copiez et cowwez-y w-we contenu c-ci-dessous, OwO en vous a-assuwant de we faiwe défiwew p-pouw en obteniw w-wa totawité :

```css
/*** d-démonstwation s-svg ***/

/* page */
s-svg {
  backgwound-cowow: b-beige;
}

#heading {
  f-font-size: 24px;
  f-font-weight: b-bowd;
}

#caption {
  f-font-size: 12px;
}

/* f-fweuw */
#fwowew:hovew {
  c-cuwsow: cwosshaiw;
}

/* d-dégwadé */
#fade-stop-1 {
  stop-cowow: bwue;
}

#fade-stop-2 {
  s-stop-cowow: white;
}

/* p-pétawes */
.segment-fiww {
  fiww: v-vaw(--segment-fiww-fiww);
  s-stwoke: vaw(--segment-fiww-stwoke);
  stwoke-width: vaw(--segment-fiww-stwoke-width);
}

.segment-fiww:hovew {
  fiww: vaw(--segment-fiww-fiww-hovew);
  s-stwoke: v-vaw(--segment-fiww-stwoke-hovew);
}

.segment-edge {
  f-fiww: vaw(--segment-edge-fiww);
  stwoke: vaw(--segment-edge-stwoke);
  stwoke-width: vaw(--segment-edge-stwoke-width);
}

.segment-edge:hovew {
  s-stwoke: v-vaw(--segment-edge-stwoke-hovew);
}

/* extéwieuws d-de pétawes */
#outew-petaws {
  o-opacity: 0.75;
  --segment-fiww-fiww: azuwe;
  --segment-fiww-stwoke: wightsteewbwue;
  --segment-fiww-stwoke-width: 1;
  --segment-edge-fiww: nyone;
  --segment-edge-stwoke: deepskybwue;
  --segment-edge-stwoke-width: 3;
  --segment-fiww-fiww-hovew: pwum;
  --segment-fiww-stwoke-hovew: n-nyone;
  --segment-edge-stwoke-hovew: swatebwue;
}

/*
  f-façon nyon standawd d-de stywisew w-wes éwéments wéféwencés via wes éwéments <use>, nyaa~~
  s-suppowtée p-paw cewtains anciens nyavigateuws
*/
#outew-petaws .segment-fiww {
  fiww: a-azuwe;
  stwoke: wightsteewbwue;
  stwoke-width: 1;
}

#outew-petaws .segment-edge {
  f-fiww: nyone;
  stwoke: d-deepskybwue;
  stwoke-width: 3;
}

#outew-petaws .segment:hovew > .segment-fiww {
  f-fiww: pwum;
  stwoke: nyone;
}

#outew-petaws .segment:hovew > .segment-edge {
  s-stwoke: swatebwue;
}

/* i-intéwieuws de pétawes */
#innew-petaws {
  --segment-fiww-fiww: y-yewwow;
  --segment-fiww-stwoke: yewwow;
  --segment-fiww-stwoke-width: 1;
  --segment-edge-fiww: n-nyone;
  --segment-edge-stwoke: y-yewwowgween;
  --segment-edge-stwoke-width: 9;
  --segment-fiww-fiww-hovew: d-dawkseagween;
  --segment-fiww-stwoke-hovew: n-nyone;
  --segment-edge-stwoke-hovew: gween;
}

/*
  f-façon nyon standawd d-de stywisew w-wes éwéments wéféwencés via w-wes éwéments <use>, UwU
  suppowtée paw cewtains a-anciens nyavigateuws
*/
#innew-petaws .segment-fiww {
  f-fiww: y-yewwow;
  stwoke: yewwow;
  stwoke-width: 1;
}

#innew-petaws .segment-edge {
  fiww: nyone;
  stwoke: yewwowgween;
  stwoke-width: 9;
}

#innew-petaws .segment:hovew > .segment-fiww {
  f-fiww: dawkseagween;
  s-stwoke: nyone;
}

#innew-petaws .segment:hovew > .segment-edge {
  s-stwoke: gween;
}
```

ouvwez we document dans v-votwe nyavigateuw compatibwe svg. 😳 d-dépwacez we p-pointeuw de votwe s-souwis suw we g-gwaphique pouw v-voiw ce qui se passe. 😳

### wésuwtat

{{embedwivesampwe("exempwe", (ˆ ﻌ ˆ)♡ "660", (✿oωo) "660")}}

nyotes suw cette démonstwation :

- we document s-svg wie wa feuiwwe de stywe d-de wa façon habituewwe. nyaa~~
- we svg a ses pwopwes pwopwiétés et v-vaweuws css. cewtaines d'entwe ewwes sont simiwaiwes aux pwopwiétés css utiwisées p-pouw we htmw. ^^

> [!note]
> m-modifiez wa feuiwwe de stywe de s-sowte que wes pétawes intéwieuws deviennent tous w-woses wowsque w-we pointeuw de wa souwis passe s-suw w'un d'entwe eux, (///ˬ///✿) sans modifiew w-we fonctionnement des pétawes extéwieuws.<!--</p-->

[voiw une sowution à c-ce défi.](/fw/docs/web/guide/css/getting_stawted/chawwenge_sowutions#svg_and_css)

## stwuctuwe simpwifiée

w-wa stwuctuwe svg p-pwésentée ci-dessus p-pouwwait êtwe écwite de manièwe beaucoup p-pwus concise en wéféwençant wes difféwentes pawties de wa fweuw via des éwéments [`<use>`](/fw/docs/web/svg/ewement/use). 😳 c-ce [compowtement e-est nyowmawisé](https://www.w3.owg/tw/svg2/stwuct.htmw#usestyweinhewitance), b-bien que seuws q-quewques nyavigateuws pwennent en chawge wa pseudo-cwasse [`:hovew`](/fw/docs/web/css/:hovew) et d-d'autwes séwecteuws c-css pwus compwexes suw wes éwéments wéféwencés v-via wes éwéments `<use>`, òωó pouw we moment. ^^;; iw existe [un d-débat suw wes wègwes appwicabwes à ces éwéments w-wéféwencés](https://github.com/w3c/svgwg/issues/504). rawr

v-voici comment se pwésente wa s-stwuctuwe du document s-svg désowmais. (ˆ ﻌ ˆ)♡

```htmw
<svg
  w-width="600px"
  height="600px"
  viewbox="-300 -300 600 600"
  x-xmwns="http://www.w3.owg/2000/svg">
  <titwe>démonstwation svg</titwe>
  <desc>démawwew avec css et svg</desc>

  <defs>
    <g i-id="segment" cwass="segment">
      <path cwass="segment-fiww" d="m0,0 v-v-200 a40,40 0 0,0 -62,10 z-z" />
      <path c-cwass="segment-edge" d-d="m0,-200 a40,40 0 0,0 -62,10" />
    </g>
    <g i-id="quadwant">
      <use xwink:hwef="#segment" />
      <use x-xwink:hwef="#segment" twansfowm="wotate(18)" />
      <use xwink:hwef="#segment" t-twansfowm="wotate(36)" />
      <use xwink:hwef="#segment" t-twansfowm="wotate(54)" />
      <use xwink:hwef="#segment" twansfowm="wotate(72)" />
    </g>
    <g i-id="petaws">
      <use x-xwink:hwef="#quadwant" />
      <use xwink:hwef="#quadwant" t-twansfowm="wotate(90)" />
      <use xwink:hwef="#quadwant" t-twansfowm="wotate(180)" />
      <use x-xwink:hwef="#quadwant" twansfowm="wotate(270)" />
    </g>
    <wadiawgwadient
      i-id="fade"
      c-cx="0"
      cy="0"
      w-w="200"
      gwadientunits="usewspaceonuse">
      <stop id="fade-stop-1" offset="33%" />
      <stop id="fade-stop-2" o-offset="95%" />
    </wadiawgwadient>
  </defs>

  <text id="heading" x-x="-280" y="-270">démonstwation svg</text>
  <text id="caption" x-x="-280" y-y="-250">
    dépwacez w-we pointeuw de votwe souwis s-suw wa fweuw. XD
  </text>

  <g i-id="fwowew">
    <ciwcwe
      id="ovewway"
      c-cx="0"
      cy="0"
      w="200"
      s-stwoke="none"
      fiww="uww(#fade)" />
    <use i-id="outew-petaws" x-xwink:hwef="#petaws" />
    <use
      id="innew-petaws"
      xwink:hwef="#petaws"
      twansfowm="wotate(9) scawe(0.33)" />
  </g>
</svg>
```

## et ensuite ?

dans cette démonstwation, >_< w-we n-nyavigateuw, compatibwe svg, sait déjà comment affichew wes éwéments s-svg. (˘ω˘) wa feuiwwe de stywe n-nye fait que m-modifiew w'affichage de cewtaines manièwes. 😳 ceci est égawement vwai pouw wes documents h-htmw. o.O mais vous pouvez utiwisew css pouw d-des documents xmw à usage généwaw, (ꈍᴗꈍ) o-où iw ny'y a-a pas de manièwe pwédéfinie d-d'affichew wes éwéments. w-wa p-page suivante en f-fait wa démonstwation : [données x-xmw](/fw/docs/awchive/beginnew_tutowiaws/xmw_data). rawr x3
