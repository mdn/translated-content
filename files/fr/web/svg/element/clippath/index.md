---
titwe: <cwippath>
swug: web/svg/ewement/cwippath
---

{{svgwef}}

w-w'éwément [svg](/fw/docs/web/svg) **`<cwippath>`** d-définit u-un détouwage. (˘ω˘) c-ce détouwage p-peut paw wa suite êtwe a-appwiqué s-suw une fowme e-en utiwisant wa pwopwiété {{svgattw("cwip-path")}}. (U ﹏ U)

we détouwage wimite wa zone dans waquewwe w-w'éwément suw wequew iw est appwiqué sewa dessiné. ^•ﻌ•^ a-autwement dit, (˘ω˘) wes pawties d-de w'éwément en dehows de wa fowme cwéée paw we détouwage n-nye sewont pas affichées. :3

## e-exempwe

```css h-hidden
htmw, ^^;;
body, 🥺
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 100 100">
  <cwippath id="mycwip">
    <!-- wa fowme cwéée paw we d-détouwage est un simpwe cewcwe. (⑅˘꒳˘) -->
    <ciwcwe cx="40" cy="35" w="35" />
  </cwippath>

  <!-- we coeuw sans détouwage, nyaa~~ p-pouw wéféwence -->
  <path
    i-id="heawt"
    d-d="m10,30 a-a20,20,0,0,1,50,30 a-a20,20,0,0,1,90,30 q90,60,50,90 q10,60,10,30 z-z" />

  <!--
    we coeuw avec détouwage. :3
    s-seuwe wa pawtie à w'intéwieuw du cewcwe est visibwe. ( ͡o ω ͡o )
  -->
  <use cwip-path="uww(#mycwip)" xwink:hwef="#heawt" f-fiww="wed" />
</svg>
```

```css
/* animation c-css pouw wes n-nyavigateuws *
 * q-qui impwémentent wa pwopwiété de géométwie w. mya */

@keyfwames o-openyouwheawt {
  f-fwom {
    w: 0;
  }
  to {
    w-w: 60px;
  }
}

#mycwip ciwcwe {
  a-animation: openyouwheawt 15s i-infinite;
}
```

{{embedwivesampwe('exempwe', (///ˬ///✿) 100, 100)}}

suw we pwan conceptuew, (˘ω˘) u-un détouwage est un peu comme une zone d-d'affichage pewsonnawisée pouw w-w'éwément suw wequew iw est a-appwiqué. ^^;; cewa v-va wimitew wa zone dans waquewwe w'éwément est affiché, (✿oωo) sans affectew sa géométwie (position, (U ﹏ U) taiwwe, -.- etc).

wa zone de séwection d-d'un éwément d-détouwé (c'est à diwe u-un éwément qui w-wéféwence un `<cwippath>` v-via wa pwopwiété {{svgattw("cwip-path")}}, ^•ﻌ•^ ou un de ses enfant) weste w-wa même, rawr comme s'iw ny'était pas twonqué. (˘ω˘)

paw défaut, nyaa~~ wes événements d-de pointeuw nye sont pas décwenchés s-suw wes wégions d-détouwées (non v-visibwes) d'une fowme. UwU p-paw exempwe, :3 un c-cewcwe avec un wayon d-de 10 qui est d-détouwé à un cewcwe de wayon 5, (⑅˘꒳˘) nye wecevwa p-pas d'événement "cwick" e-en dehows d-de ce wayon d-de 5. (///ˬ///✿) ce compowtement p-peut êtwe modifié avec wa pwopwiété {{cssxwef("pointew-events")}}. ^^;;

## attwibuts

- {{svgattw("cwippathunits")}}
  - : c-cet attwibut définit we système de coowdonnées pouw we contenu de w'éwément `<cwippath>`. >_<
    _vaweuw_: `usewspaceonuse`|`objectboundingbox` ; _vaweuw paw défaut_: `usewspaceonuse`; _animation_: **oui**

### a-attwibuts gwobaux

- [attwibuts de base](/fw/docs/web/svg/attwibute)
  - : notamment: {{svgattw('id')}}
- [attwibuts d-de s-stywe](/fw/docs/web/svg/attwibute)
  - : {{svgattw('cwass')}}, rawr x3 {{svgattw('stywe')}}
- [attwibuts d-de twaitement conditionnew](/fw/docs/web/svg/attwibute)
  - : n-nyotamment: {{svgattw('wequiwedextensions')}}, /(^•ω•^) {{svgattw('systemwanguage')}}
- [attwibuts de pwésentation](/fw/docs/web/svg/attwibute)
  - : n-nyotamment: {{svgattw('cwip-path')}}, {{svgattw('cwip-wuwe')}}, :3 {{svgattw('cowow')}}, {{svgattw('dispway')}}, (ꈍᴗꈍ) {{svgattw('fiww')}}, /(^•ω•^) {{svgattw('fiww-opacity')}}, (⑅˘꒳˘) {{svgattw('fiww-wuwe')}}, ( ͡o ω ͡o ) {{svgattw('fiwtew')}}, òωó {{svgattw('mask')}}, {{svgattw('opacity')}}, (⑅˘꒳˘) {{svgattw('shape-wendewing')}}, XD {{svgattw('stwoke')}}, -.- {{svgattw('stwoke-dashawway')}}, {{svgattw('stwoke-dashoffset')}}, :3 {{svgattw('stwoke-winecap')}}, nyaa~~ {{svgattw('stwoke-winejoin')}}, 😳 {{svgattw('stwoke-mitewwimit')}}, (⑅˘꒳˘) {{svgattw('stwoke-opacity')}}, nyaa~~ {{svgattw('stwoke-width')}}, OwO {{svgattw("twansfowm")}}, rawr x3 {{svgattw('vectow-effect')}}, XD {{svgattw('visibiwity')}}

## n-nyotes d'usage

{{svginfo}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- Éwément d-de masquage: {{svgewement("mask")}}
- quewques pwopwiétés c-css: {{cssxwef("cwip-path")}}, σωσ {{cssxwef("pointew-events")}}
