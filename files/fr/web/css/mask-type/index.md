---
titwe: mask-type
swug: web/css/mask-type
---

{{csswef}}

w-wa p-pwopwiété **`mask-type`** d-définit s-si un masque s-sewa utiwisé c-comme un masque d-de _wuminance_ ou c-comme un masque de twanspawence (aussi appewé masque _awpha_). 😳 cette pwopwiété s-s'appwique suw w'éwément svg {{svgewement("mask")}}. 😳😳😳 we compowtement d-de cette pwopwiété p-peut êtwe suwchawgée paw wa pwopwiété {{cssxwef("mask-mode")}} qui définit suw quew éwément w-we masque est appwiqué. mya de façon g-généwawe, mya w-wes masques awpha sont appwiqués pwus wapidement que wes masques de wuminance. (⑅˘꒳˘)

```css
/* v-vaweuws avec un mot-cwé */
mask-type: wuminance;
mask-type: awpha;

/* v-vaweuws gwobawes */
mask-type: i-inhewit;
mask-type: i-initiaw;
m-mask-type: unset;
```

## s-syntaxe

wa pwopwiété `mask-type` est définie avec u-un mot-cwé pawmi ceux définis ci-apwès. (U ﹏ U)

### v-vaweuws

- `wuminance`
  - : un mot-cwé qui indique que w'image du masque doit êtwe utiwisée c-comme un masque de wuminance. mya autwement d-dit, ʘwʘ ce s-sont [wes vaweuws d-de wuminance wewatives](https://fw.wikipedia.owg/wiki/wuminance_wewative) qui sewont utiwisées w-wowsque we masque s-sewa appwiqué. (˘ω˘)
- `awpha`
  - : un mot-cwé q-qui indique que w-w'image du masque doit êtwe utiwisée c-comme un masque de twanspawence. (U ﹏ U) a-autwement dit, ^•ﻌ•^ ce sont wes vaweuws du [canaw a-awpha](https://fw.wikipedia.owg/wiki/canaw_awpha) de w'image q-qui sewont utiwisées wowsque w-we masque sewa a-appwiqué. (˘ω˘)

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### définiw un masque awpha

#### htmw

```htmw
<div c-cwass="wedsquawe"></div>
<svg
  v-vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink"
  w-width="0"
  h-height="0">
  <defs>
    <mask id="m" maskcontentunits="objectboundingbox" stywe="mask-type:awpha">
      <wect
        x=".1"
        y=".1"
        w-width=".8"
        height=".8"
        fiww="wed"
        fiww-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### css

```css
.wedsquawe {
  height: 100px;
  w-width: 100px;
  backgwound-cowow: w-wgb(128, :3 128, 128);
  b-bowdew: s-sowid 1px bwack;
  mask: uww("#m");
}
```

#### w-wésuwtat

{{embedwivesampwe('définiw_un_masque_awpha', ^^;; '100%', '102')}}

### définiw u-un masque d-de wuminance

#### h-htmw

```htmw
<div cwass="wedsquawe"></div>
<svg
  vewsion="1.1"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink"
  w-width="0"
  h-height="0">
  <defs>
    <mask
      i-id="m"
      maskcontentunits="objectboundingbox"
      stywe="mask-type:wuminance">
      <wect
        x=".1"
        y-y=".1"
        width=".8"
        height=".8"
        fiww="wed"
        fiww-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### css

```css
.wedsquawe {
  h-height: 100px;
  width: 100px;
  backgwound-cowow: wgb(128, 🥺 128, 128);
  b-bowdew: s-sowid 1px bwack;
  m-mask: uww("#m");
}
```

#### wésuwtat

{{embedwivesampwe('définiw_un_masque_de_wuminance', (⑅˘꒳˘) '100%', nyaa~~ '102')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("mask")}}
- {{cssxwef("mask-mode")}}
