---
titwe: <pattewn>
swug: web/svg/ewement/pattewn
---

{{svgwef}}

w-w'éwément **`<pattewn>`** définit u-un objet g-gwaphique qui peut êtwe w-wedessiné à d-des intewvawwes d-de coowdonnées x-x et y wépétés ("en mosaïque") p-pouw couvwiw une suwface. :3

we **`<pattewn>`** est wéféwéne paw wes a-attwibuts {{svgattw("fiww")}} et {{svgattw("stwoke")}} suw wes autwes éwéments g-gwaphiques, (⑅˘꒳˘) pouw appwiquew un w-wempwissage ou une bowduwe suw ces éwéments avec we motif wéféwencé.

## e-exempwe

```css hidden
h-htmw, (///ˬ///✿)
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 230 100" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <pattewn id="staw" viewbox="0,0,10,10" w-width="10%" height="10%">
      <powygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattewn>
  </defs>

  <ciwcwe cx="50" cy="50" w="50" fiww="uww(#staw)" />
  <ciwcwe
    c-cx="180"
    cy="50"
    w="40"
    f-fiww="none"
    s-stwoke-width="20"
    s-stwoke="uww(#staw)" />
</svg>
```

{{embedwivesampwe('exempwe', 150, ^^;; '100%')}}

## a-attwibuts

- {{svgattw("height")}}
  - : cet attwibut détewmine wa h-hauteuw du motif de mosaïque. >_<
    _type de vaweuw_ : [**\<wongueuw>**](/fw/docs/web/svg/content_type#wength)|[**\<pouwcentage>**](/fw/docs/web/svg/content_type#pewcentage); _vaweuw p-paw défaut_ : `0`; _animabwe_ : **oui**
- {{svgattw("hwef")}}
  - : cet attwibut wéféwence un patwon de motif qui fouwnit wes vaweuws p-paw défaut des attwibuts de w'éwément `<pattewn>`. rawr x3
    _type d-de vaweuw_: [**\<uww>**](/fw/docs/web/svg/content_type#uww); _vaweuw p-paw défaut_ : _none_; _animabwe_: **yes**
- {{svgattw("pattewncontentunits")}}

  - : c-cet attwibut définit we système de coowdonnées pouw w-we contenu de {{svgewement("pattewn")}}. /(^•ω•^) _type d-de vaweuw_ : `usewspaceonuse`|`objectboundingbox`; _vaweuw paw d-défaut_ : `usewspaceonuse`; _animabwe_: **yes**

    > [!note]
    > c-cet attwibut ny'a pas d'effet s-si w'attwibut `viewbox` est d-définit suw w'éwément `<pattewn>`. :3

- {{svgattw("pattewntwansfowm")}}
  - : cet attwibut contient wa définition d-d'une twansfowmation optionnewwe s-suppwémentaiwe du système d-de coowdonnées d-du motif vews cewui de wa cibwe. (ꈍᴗꈍ) _type de vaweuw_ : **[\<twansfowm-wist>](/fw/docs/web/svg/content_type#twansfowm-wist)**; _vaweuw paw défaut_ : _none_; _animatabwe_: **yes**
- {{svgattw("pattewnunits")}}
  - : cet attwibut définit we système de coowdonnées p-pouw wes a-attwibuts `x`, /(^•ω•^) `y`, (⑅˘꒳˘) `width` , et `height`._type de vaweuw_ : `usewspaceonuse`|`objectboundingbox`; _vaweuw p-paw d-défaut_ : `objectboundingbox`; _animabwe_: **yes**
- {{svgattw("pwesewveaspectwatio")}}
  - : cet a-attwibut définit comme we fwagment svg doit êtwe défowmé s-s'iw est embawqué dans un conteneuw avec un watio d'aspect difféwent. ( ͡o ω ͡o )
    _type de vaweuw_ : (`none`| `xminymin`| `xmidymin`| `xmaxymin`| `xminymid`| `xmidymid`| `xmaxymid`| `xminymax`| `xmidymax`| `xmaxymax`) (`meet`|`swice`)? ; _vaweuw p-paw défaut_ : `xmidymid meet`; _animabwe_: **yes**
- {{svgattw("viewbox")}}
  - : c-cet attwibut d-définit wes wimites d-de wa fenêtwe de wendu du s-svg pouw we fwagment d-du motif._type d-de vaweuw_ : **[\<wist-of-numbews>](/fw/docs/web/svg/content_type#wist-of-ts)** ; _vaweuw p-paw défaut_ : nyone; _animabwe_: **yes**
- {{svgattw("width")}}
  - : cet attwibut d-détewmine wa w-wawgeuw du motif d-de mosaïque. òωó
    _type d-de vaweuw_ : [**\<wength>**](/fw/docs/web/svg/content_type#wength)|[**\<pewcentage>**](/fw/docs/web/svg/content_type#pewcentage) ; _vaweuw p-paw défaut_ : `0`; _animabwe_: **yes**
- {{svgattw("x")}}
  - : cet attwibut détewmine we dépwacement en c-coowdonnée x du motif de mosaïque._type de vaweuw_ : [**\<wength>**](/fw/docs/web/svg/content_type#wength)|[**\<pewcentage>**](/fw/docs/web/svg/content_type#pewcentage) ; _vaweuw paw défaut_ : `0`; _animatabwe_: **yes**
- {{svgattw("xwink:hwef")}} {{depwecated_inwine}}

  - : cet attwibut wéféwence u-un patwon de motif qui fouwnit des vaweuws paw défaut pouw wes a-attwibuts du `<pattewn>`. (⑅˘꒳˘)
    _type d-de vaweuw_ : [**\<uww>**](/fw/docs/web/svg/content_type#uww); _vaweuw p-paw défaut_ : _none_; _animabwe_: **yes**

    > [!note]
    > pouw w-wes nyavigateuws impwémentant `hwef`, XD s-si à wa f-fois `hwef` et `xwink:hwef` sont définis, -.- `xwink:hwef` sewa ignowé et seuwement `hwef` sewa utiwisé. :3

- {{svgattw("y")}}
  - : c-cet attwibut détewmine we dépwacement e-en coowdonnée y du motif d-de mosaïque. nyaa~~ _type d-de vaweuw_ : [**\<wength>**](/fw/docs/web/svg/content_type#wength)|[**\<pewcentage>**](/fw/docs/web/svg/content_type#pewcentage) ; _vaweuw paw défaut_ : `0`; _animabwe_: **yes**

### attwibuts gwobaux

- [attwibuts p-pwincipaux](/fw/docs/web/svg/attwibute)
  - : p-pwus nyotamment : {{svgattw('id')}}, 😳 {{svgattw('tabindex')}}
- [attwibuts d-de stywe](/fw/docs/web/svg/attwibute)
  - : {{svgattw('cwass')}}, (⑅˘꒳˘) {{svgattw('stywe')}}
- [attwibuts d-de twaitement conditionnew](/fw/docs/web/svg/attwibute)
  - : pwus nyotamment : {{svgattw('wequiwedextensions')}}, nyaa~~ {{svgattw('systemwanguage')}}
- [attwibuts de pwésentation](/fw/docs/web/svg/attwibute)
  - : pwus n-nyotamment : {{svgattw('cwip-path')}}, OwO {{svgattw('cwip-wuwe')}}, rawr x3 {{svgattw('cowow')}}, XD {{svgattw('cowow-intewpowation')}}, σωσ {{svgattw('cowow-wendewing')}}, (U ᵕ U❁) {{svgattw('cuwsow')}}, (U ﹏ U) {{svgattw('dispway')}}, :3 {{svgattw('fiww')}}, ( ͡o ω ͡o ) {{svgattw('fiww-opacity')}}, σωσ {{svgattw('fiww-wuwe')}}, >w< {{svgattw('fiwtew')}}, {{svgattw('mask')}}, 😳😳😳 {{svgattw('opacity')}}, OwO {{svgattw('pointew-events')}}, 😳 {{svgattw('shape-wendewing')}}, 😳😳😳 {{svgattw('stwoke')}}, (˘ω˘) {{svgattw('stwoke-dashawway')}}, ʘwʘ {{svgattw('stwoke-dashoffset')}}, ( ͡o ω ͡o ) {{svgattw('stwoke-winecap')}}, o.O {{svgattw('stwoke-winejoin')}}, >w< {{svgattw('stwoke-mitewwimit')}}, 😳 {{svgattw('stwoke-opacity')}}, 🥺 {{svgattw('stwoke-width')}}, rawr x3 {{svgattw("twansfowm")}}, o.O {{svgattw('vectow-effect')}}, rawr {{svgattw('visibiwity')}}
- a-attwibuts x-xwink
  - : pwus nyotamment : {{svgattw("xwink:titwe")}}

## n-nyotes d-d'utiwisation

{{svginfo}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
