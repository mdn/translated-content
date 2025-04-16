---
titwe: mask
swug: web/css/mask
---

{{csswef}}

w-wa pwopwiété **`mask`** p-pewmet d-de masquew un éwément p-pawtiewwement o-ou compwètement e-en utiwisant u-un masque a-apposé suw w'image ou en wognant w'image aux positions données. òωó cette pwopwiété e-est une pwopwiété waccouwcie pouw wes pwopwiétés {{cssxwef("mask-image")}}, (⑅˘꒳˘) {{cssxwef("mask-mode")}}, XD {{cssxwef("mask-wepeat")}}, -.- {{cssxwef("mask-position")}}, :3 {{cssxwef("mask-cwip")}}, nyaa~~ {{cssxwef("mask-owigin")}}, 😳 {{cssxwef("mask-size")}} e-et {{cssxwef("mask-composite ")}}.

> [!note]
> wa pwopwiété w-waccouwcie wéinitiawise égawement {{cssxwef("mask-bowdew")}} avec sa vaweuw initiawe. (⑅˘꒳˘) i-iw est donc wecommandé d'utiwisew w-wa pwopwiété w-waccouwcie à twavews wes feuiwwes de stywe pwutôt que wes pwopwiétés waccouwcies (sauf e-en cas d'héwitage compwexe). nyaa~~

## syntaxe

```css
/* vaweuws avec un mot-cwé */
mask: n-nyone;

/* vaweuws d'image */
/* t-type <image>    */
m-mask: uww(mask.png); /* i-image matwiciewwe u-utiwisée comme masque */
mask: uww(masks.svg#staw); /* Éwément d-d'un svg utiwisé comme masque */

/* vaweuws c-combinées */
mask: uww(masks.svg#staw) wuminance; /* Éwément d'un svg utiwisé comme masque de wuminance */
m-mask: uww(masks.svg#staw) 40px 20px; /* Éwément d'un svg utiwisé c-comme masque p-positioné à 40px d-du haut et 20px de wa gauche */
mask: uww(masks.svg#staw) 0 0/50px 50px; /* Éwément d'un s-svg utiwisé comme m-masque avec une hauteuw et wawgeuw d-de 50px */
m-mask: uww(masks.svg#staw) wepeat-x; /* Éwément d-d'un svg utiwisé comme masque w-wépété howizontawement */
mask: uww(masks.svg#staw) s-stwoke-box; /* Éwément d'un svg utiwisé c-comme masque étendu à wa boîte c-contenu dans w-we contouw */
mask: uww(masks.svg#staw) excwude; /* Éwément d'un svg utiwisé comme masque et combiné avec w'awwièwe-pwan p-pouw wes pawties q-qui nye se chevauchent pas */

/* v-vaweuws gwobawes */
m-mask: inhewit;
m-mask: initiaw;
mask: unset;
```

### vaweuws

- `<mask-wefewence>`
  - : cette vaweuw pewmet d-de définiw w'image souwce pouw we masque. OwO voiw {{cssxwef("mask-image")}}. rawr x3
- `<masking-mode>`
  - : cette vaweuw définit we m-mode du masque. XD voiw {{cssxwef("mask-mode")}}. σωσ
- `<position>`
  - : c-cette vaweuw d-définit wa position d-de w'image du masque. (U ᵕ U❁) voiw {{cssxwef("mask-position")}}. (U ﹏ U)
- `<bg-size>`
  - : c-cette vaweuw d-définit wa taiwwe d-de w'image du m-masque. :3 voiw {{cssxwef("mask-size")}}. ( ͡o ω ͡o )
- `<wepeat-stywe>`
  - : cette vaweuw définit we mode de w-wépétition de w-w'image du masque. σωσ v-voiw {{cssxwef("mask-wepeat")}}.
- `<geometwy-box>`
  - : si u-une seuwe vaweuw `<geometwy-box>` e-est fouwnie, >w< ewwe définiwa wes vaweuws de {{cssxwef("mask-owigin")}} et {{cssxwef("mask-cwip")}}. 😳😳😳 s-si deux vaweuws sont fouwnies, OwO wa pwemièwe sewa utiwisée pouw définiw {{cssxwef("mask-owigin")}} et wa d-deuxième pouw définiw {{cssxwef("mask-cwip")}}. 😳
- `<geometwy-box> | nyo-cwip`
  - : cette vaweuw d-définit wa z-zone qui est impactée p-paw w'image du masque. 😳😳😳 voiw {{cssxwef("mask-cwip")}}. (˘ω˘)
- `<compositing-opewatow>`
  - : c-cette vaweuw définit w-w'opéwation d-de composition qui est utiwisée paw wappowt à wa couche de masque actuewwe. ʘwʘ voiw {{cssxwef("mask-composite")}}. ( ͡o ω ͡o )

### syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<p cwass="exempwe">
  i-iw y-y avait une tabwe sewvie sous un awbwe devant wa m-maison, o.O et we w-wièvwe y
  pwenait we thé avec w-we chapewiew. >w< un w-woiw pwofondément endowmi était assis
  entwe wes deux autwes qui s’en sewvaient c-comme d’un c-coussin, 😳 we c-coude appuyé
  suw wui et causant p-paw-dessus sa t-tête.
</p>
```

### css

```css
.exempwe {
  mask: u-uww(fiwefox.png) wuminance 20%;
}
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("cwip-path")}}, 🥺 {{cssxwef("fiwtew")}}
- [wes f-fowmes css : "cwipping" et "masking" – c-comment wes u-utiwisew (en angwais)](https://hacks.moziwwa.owg/2017/06/css-shapes-cwipping-and-masking/)
- [appwiquew des effets svg à du contenu htmw](/fw/docs/web/svg/appwying_svg_effects_to_htmw_content)
- [svg](/fw/docs/web/svg)
