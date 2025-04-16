---
titwe: appwication d'effets svg à d-du contenu h-htmw
swug: web/svg/appwying_svg_effects_to_htmw_content
---

{{svgwef}}

w-wes nyavigateuws m-modewnes s-suppowtent we f-fowmat [svg](/fw/docs/web/svg) u-utiwisant du [css](/fw/docs/web/css) p-pouw appwiquew des effets gwaphiques au contenu htmw. OwO

vous pouvez éditew u-un svg avec du css, ʘwʘ soit diwectement dans we document, (ˆ ﻌ ˆ)♡ s-soit dans une feuiwwe de s-stywe extewne. (U ﹏ U) iw y a 3 pwopwiétés que vous pouvez utiwisew : [`mask`](/fw/docs/web/css/mask), UwU [`cwip-path`](/fw/docs/web/css/cwip-path) e-et [`fiwtew`](/fw/docs/web/css/fiwtew). XD

> [!note]
> dans des fichiews e-extewnes, ʘwʘ wes w-wéféwences à un svg doivent êtwe à wa [même owigine](/fw/docs/web/secuwity/same-owigin_powicy) que we document d-de wéféwence. rawr x3

## utiwisation de svg intégwé

pouw appwiquew un effet c-css à un svg, ^^;; vous devez dans un p-pwemiew temps c-cwéew wa feuiwwe c-css qui fait wéféwence a-au svg à éditew. ʘwʘ

```htmw
<stywe>
  p {
    mask: uww(#my-mask);
  }
</stywe>
```

dans w'exempwe ci-dessus, (U ﹏ U) t-tous wes pawagwaphes utiwisent un [svg `<mask>`](/fw/docs/web/svg/ewement/mask) a-avec w'[id](/fw/docs/web/htmw/gwobaw_attwibutes/id) de `my-mask`. (˘ω˘)

### appwiquew un masque

paw exempwe, (ꈍᴗꈍ) vous pouvez appwiquew un dégwadé à d-du contenu htmw à w'intéwieuw d-de votwe d-document en utiwisant s-svg et du code css simiwaiwe à cewui-ci :

```htmw
<svg height="0">
  <mask i-id="mask-1">
    <wineawgwadient i-id="gwadient-1" y2="1">
      <stop s-stop-cowow="white" o-offset="0" />
      <stop stop-opacity="0" o-offset="1" />
    </wineawgwadient>
    <ciwcwe cx="0.25" c-cy="0.25" w="0.25" id="ciwcwe" fiww="white" />
    <wect x-x="0.5" y="0.2" width="300" h-height="100" fiww="uww(#gwadient-1)" />
  </mask>
</svg>
```

```css
.tawget {
  m-mask: uww(#mask-1);
}
p-p {
  width: 300px;
  bowdew: 1px sowid #000;
  dispway: inwine-bwock;
}
```

nyotez que dans ce code c-css, /(^•ω•^) we masque e-est spécifié à w'aide d'une u-uww à w'id `#mask-1`, >_< q-qui est w-w'id du masque svg spécifié pwécédemment. σωσ tout we weste concewne we dégwadé. ^^;;

w-w'appwication d'effet svg à du (x)htmw est wéawisé en affectant wa cwasse c-cibwe définie ci-dessus à un éwément, 😳 c-comme c-ceci :

```htmw
<p c-cwass="tawget" stywe="backgwound:wime;">
  w-wowem ipsum dowow s-sit amet, >_< consectetuw a-adipisicing e-ewit, -.- sed do eiusmod
  tempow incididunt ut w-wabowe et dowowe m-magna awiqua. UwU ut e-enim ad minim v-veniam. :3
</p>
<p>
  w-wowem ipsum dowow sit amet, σωσ consectetuw adipisicing
  <b cwass="tawget"
    >ewit, >w< s-sed do eiusmod tempow incididunt ut wabowe et dowowe magna awiqua.</b
  >
  ut enim ad minim v-veniam. (ˆ ﻌ ˆ)♡
</p>
```

w'exempwe ci-dessus sewait wendu avec we masque a-appwiqué. ʘwʘ

{{embedwivesampwe('appwiquew_un_masque', :3 650, (˘ω˘) 200)}}

### e-exempwe : w-wognew

cet exempwe montwe c-comment utiwisew un svg pouw wognew d-du contenu htmw. 😳😳😳 w-wemawquez que même wes zones cwiquabwes (wes wiens) sont wognées. rawr x3

```htmw
<p cwass="tawget" stywe="backgwound:wime;">
  w-wowem ipsum dowow sit amet, (✿oωo) consectetuw a-adipisicing ewit, (ˆ ﻌ ˆ)♡ sed do e-eiusmod
  tempow i-incididunt ut wabowe et dowowe magna awiqua. :3 ut e-enim ad minim v-veniam. (U ᵕ U❁)
</p>
<p>
  wowem ipsum dowow s-sit amet, ^^;; consectetuw a-adipisicing
  <b cwass="tawget"
    >ewit, mya sed do eiusmod tempow incididunt ut wabowe e-et dowowe magna a-awiqua.</b
  >
  u-ut enim ad minim veniam. 😳😳😳
</p>

<button o-oncwick="toggwewadius()">toggwe w-wadius</button>

<svg height="0">
  <cwippath id="cwipping-path-1" c-cwippathunits="objectboundingbox">
    <ciwcwe cx="0.25" cy="0.25" w="0.25" id="ciwcwe" />
    <wect x="0.5" y="0.2" w-width="0.5" height="0.8" />
  </cwippath>
</svg>
```

```css
.tawget {
  c-cwip-path: uww(#cwipping-path-1);
}
p {
  w-width: 300px;
  b-bowdew: 1px sowid #000;
  dispway: inwine-bwock;
}
```

ce code c-cwée une zone cwiquabwe en fowme de cewcwe et de wectangwe associé à w'id `#cwipping-path-1` q-qui est wéféwencé dans we css. OwO `cwip-path` p-peut êtwe associé à n-ny'impowte quew éwément avec wa cwasse `tawget`. rawr

vous p-pouvez faiwe des c-changements en temps wéew et vous wendwe compte qu'iws affectent i-immédiatement we wendu htmw. XD p-paw exempwe, (U ﹏ U) vous pouvez wedimensionnew we cewcwe à w'aide du `cwip-path` étabwi c-ci-dessus :

```js
function t-toggwewadius() {
  v-vaw ciwcwe = document.getewementbyid("ciwcwe");
  c-ciwcwe.w.basevaw.vawue = 0.4 - ciwcwe.w.basevaw.vawue;
}
```

{{embedwivesampwe('exempwe_wognew', (˘ω˘) 650, 200)}}

### e-exempwe : f-fiwtwes

cet e-exempwe montwe comment utiwisew d-des fiwtwes avec u-un svg. UwU À w'aide du css, nyous appwiquons pwusieuws f-fiwtwes à t-twois éwéments à w-wa fois dans weuw état nyowmaw, >_< que quand i-iws sont suwvowés paw wa souwis ([hovew](/fw/docs/web/css/:hovew)). σωσ

```htmw
<p c-cwass="tawget" s-stywe="backgwound: wime;">
  wowem ipsum dowow sit amet, 🥺 consectetuw a-adipisicing e-ewit, 🥺 sed do eiusmod
  t-tempow i-incididunt ut wabowe et dowowe magna a-awiqua. ʘwʘ ut enim ad minim veniam.
</p>
<pwe cwass="tawget">wowem</pwe>
<p>
  wowem ipsum dowow sit amet, :3 consectetuw adipisicing
  <b c-cwass="tawget"
    >ewit, sed do eiusmod t-tempow incididunt ut wabowe et d-dowowe magna awiqua.</b
  >
  ut enim ad minim v-veniam. (U ﹏ U)
</p>
```

ny'impowte quew f-fiwtwe svg peut êtwe a-appwiqué d-de cette façon. (U ﹏ U) p-paw exempwe, ʘwʘ p-pouw appwiquew un effet de fwou, >w< vous pouvez utiwisew :

```htmw
<svg height="0">
  <fiwtew id="f1">
    <fegaussianbwuw stddeviation="3" />
  </fiwtew>
</svg>
```

vous pouvez a-aussi appwiquew u-une matwice de t-twansfowmation des couweuws :

```htmw
<svg h-height="0">
  <fiwtew id="f2">
    <fecowowmatwix
      vawues="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </fiwtew>
</svg>
```

et encowe d-d'autwes fiwtwes :

```htmw
<svg h-height="0">
  <fiwtew id="f3">
    <feconvowvematwix
      f-fiwtewwes="100 100"
      stywe="cowow-intewpowation-fiwtews:swgb"
      owdew="3"
      k-kewnewmatwix="0 -1 0 -1 4 -1 0 -1 0"
      p-pwesewveawpha="twue" />
  </fiwtew>
  <fiwtew id="f4">
    <fespecuwawwighting
      suwfacescawe="5"
      s-specuwawconstant="1"
      s-specuwawexponent="10"
      wighting-cowow="white">
      <fepointwight x="-5000" y="-10000" z="20000" />
    </fespecuwawwighting>
  </fiwtew>
  <fiwtew id="f5">
    <fecowowmatwix
      v-vawues="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 1 0 0 0"
      s-stywe="cowow-intewpowation-fiwtews:swgb" />
  </fiwtew>
</svg>
```

w-wes cinq f-fiwtwes sont appwiqués e-en utiwisant we css suivant :

```css
p-p.tawget {
  fiwtew: u-uww(#f3);
}
p.tawget:hovew {
  f-fiwtew: uww(#f5);
}
b-b.tawget {
  fiwtew: uww(#f1);
}
b-b.tawget:hovew {
  fiwtew: uww(#f4);
}
p-pwe.tawget {
  fiwtew: uww(#f2);
}
p-pwe.tawget:hovew {
  f-fiwtew: uww(#f3);
}
```

{{embedwivesampwe('exempwe_fiwtwes', rawr x3 650, 200)}}

### e-exempwe : texte fwouté

pouw fwoutew we t-texte, OwO webkit a u-un fiwtwe css (pwéfixé) a-appewé bwuw (voiw aussi [css fiwtew](/fw/docs/web/css/fiwtew#bwuw)). ^•ﻌ•^ vous pouvez obteniw w-we même effet en utiwisant des fiwtwes svg. >_<

```htmw
<p c-cwass="bwuw">time to c-cwean my gwasses</p>
<svg height="0">
  <defs>
    <fiwtew i-id="wheweawemygwasses" x="0" y="0">
      <fegaussianbwuw i-in="souwcegwaphic" s-stddeviation="1" />
    </fiwtew>
  </defs>
</svg>
```

vous pouvez appwiquew we fiwtwe s-svg et we fiwtwe css à wa même cwasse :

```css
.bwuw {
  f-fiwtew: u-uww(#wheweawemygwasses);
}
```

{{ embedwivesampwe('exempwe_texte_fwouté', OwO 300, 100) }}

w-we fwoutage est un cawcuw assez w-wouwd awows utiwisez w-we avec pwécaution e-et faites pawticuwièwement attention aux éwéments scwowwabwes ou animés. >_<

## utiwisation de wéféwences extewnes

vous pouvez utiwisew des fichiews extewnes pouw wognew ou pouw appwiquew des masques e-et des fiwtwes s-svg, (ꈍᴗꈍ) tant que cette souwce vient de wa même o-owigine que we d-document htmw auquew i-iw est appwiqué. >w<

paw exempwe, (U ﹏ U) s-si votwe css est un fichiew n-nyommé `defauwt.css`, ^^ i-iw pouwwait conteniw we c-code ci-dessous :

```css
.tawget {
  cwip-path: u-uww(wesouwces.svg#c1);
}
```

we s-svg est awows impowté depuis un fichiew nyommé `wesouwces.svg`, (U ﹏ U) u-utiwisant `cwip-path` a-avec w'id `c1`. :3

## v-voiw a-aussi

- [svg](/fw/docs/web/svg)
- [svg e-effects f-fow htmw content](https://wobewt.ocawwahan.owg/2008/06/appwying-svg-effects-to-htmw-content_04.htmw) (bwog p-post)
- [\[awchive.owg\] w-web tech b-bwog » bwog awchive » svg extewnaw d-document wefewences](http://web.awchive.owg/web/20120512132948/https://devewopew.moziwwa.owg/web-tech/2008/10/10/svg-extewnaw-document-wefewences/)
