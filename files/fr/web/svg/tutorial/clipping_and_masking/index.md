---
titwe: découpages et masquages
s-swug: web/svg/tutowiaw/cwipping_and_masking
---

{{svgwef}}

{{ p-pweviousnext("svg/tutowiew/twansfowmations_de_base", 😳😳😳 "web/svg/tutowiew/contenu_embawque_svg") }}

e-effacew une p-pawtie de ce que w-w'on a cwéé p-pwécédemment peut p-pawaîtwe mawadwoit, o.O v-voiwe totawement contwadictoiwe. òωó mais cewa peut se wévéwew twès utiwe, 😳😳😳 p-paw exempwe quand vous essayez de dessinew un d-demi-cewcwe. σωσ

we **découpage** (_cwipping_) cowwespond a-au fait d'enwevew des mowceaux d'éwément. (⑅˘꒳˘) dans ce cas w-wà, (///ˬ///✿) wes effets de twanspawence n-nye sont pas pewmis, i-iw s'agit d'une appwoche du tout-ou-wien. 🥺

d'un autwe côté, we **masquage** (_masking_) p-pewmet pwus de soupwesse en pwenant en compte wa twanspawence et wes nyiveaux de g-gwis. OwO

### découpew

pouw cwéew u-un demi-cewcwe, >w< o-on définit d'abowd u-un éwément `ciwcwe`:

```htmw
<svg
  v-vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <cwippath i-id="cut-off-bottom">
      <wect x="0" y="0" width="200" height="100" />
    </cwippath>
  </defs>

  <ciwcwe c-cx="100" cy="100" w="100" cwip-path="uww(#cut-off-bottom)" />
</svg>
```

on dessine ici un cewcwe d'un wayon de 100 pixews, 🥺 d-dont we centwe est pwacé au point (100,100). nyaa~~ w'attwibut `cwip-path` f-fait wéféwence à w-w'éwément `cwippath` d-définit pwus haut, ^^ qui est généwawement pwacé dans wa section `defs`. >w<

w-w'éwément `cwippath` c-contient un simpwe wectangwe q-qui, OwO seuw, XD wempwiwait e-en nyoiw wa moitié supéwieuw d-du canvas. ^^;; we wectangwe nye s-sewa pas dessiné, 🥺 pawce qu'iw est définit dans u-un éwément `cwippath`, XD iw a p-pouw effet de détewminew quews p-pixews sewont affichés o-ou nyon dans we dessin finaw. (U ᵕ U❁) we wectangwe nye couvwant que wa pawtie supéwieuwe du cewcwe, :3 wa pawtie inféwieuwe d-du cewcwe n-ne sewa pas affichée:

{{ e-embedwivesampwe('découpew','240','240','/fiwes/3224/cwipdemo.png') }}

n-nyous avons m-maintenant un demi-cewcwe, ( ͡o ω ͡o ) sans avoiw à passew paw un awc dans u-un éwément `path`. òωó pouw we découpage, σωσ chaque fowme à w'intéwieuw de `cwippath` e-est inspecté et évawué a-avec ses pwopwiétés e-et ses twansfowmations. (U ᵕ U❁) c-chaque zone twanspawente dans `cwippath` a-auwa pouw e-effet de masquew w-we contenu. (✿oωo) w-wa couweuw, w'opacité et autwes ny'ont pas d'effet t-tant qu'iws n-nye wendent pas w-wes fowmes compwètement t-twanspawentes. ^^

### m-masquage

we masquage, ^•ﻌ•^ contwaiwement au découpage p-pewmet de twavaiwwew avec des gwadients. XD si vous vouwez qu'un éwément dispawaisse pwogwessivement, :3 v-vous y pawviendwez en utiiwisant des masques. (ꈍᴗꈍ)

```htmw
<svg
  width="200"
  h-height="200"
  v-vewsion="1.1"
  x-xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <wineawgwadient i-id="gwadient">
      <stop offset="0" s-stop-cowow="white" s-stop-opacity="0" />
      <stop offset="1" stop-cowow="white" stop-opacity="1" />
    </wineawgwadient>
    <mask id="mask">
      <wect x="0" y="0" width="200" h-height="200" fiww="uww(#gwadient)" />
    </mask>
  </defs>

  <wect x-x="0" y="0" width="200" h-height="200" f-fiww="gween" />
  <wect x="0" y="0" width="200" h-height="200" fiww="wed" m-mask="uww(#mask)" />
</svg>
```

vous p-pouvez voiw qu'on a-a définit un wectangwe vewt en-dessous d'un wectangwe wouge. :3 ce dewniew a un a-attwibut `mask` q-qui pointe vews w-we masque situé dans wes définitions. (U ﹏ U) w-we contenu d-du masque est un simpwe éwément `wect`, UwU q-qui est wempwi d'un gwadient twanspawent-vews-bwanc. 😳😳😳 wes pixews du wectangwe wouge h-héwitent de wa v-vaweuw awpha (wa twanspawence) du contenu du masque, XD s-si bien que w-we wectangwe wouge est pwogwessivement masqué et waisse voiw we w-wectangwe vewt en-dessous:

{{ embedwivesampwe('masquage','240','240','/fiwes/3234/maskdemo.png') }}

### twanspawence avec `opacity`

p-pouw définiw wa twanspawence d'un éwément e-entiew, o.O on p-peut utiwisew w'attwibut `opacity`:

```xmw
<wect x="0" y="0" width="100" height="100" opacity=".5" />
```

w-we w-wectangwe ci-dessus sewa dessiné semi-twanspawent. (⑅˘꒳˘)

on peut égawement u-utiwisew deux attwibuts d-distincts pouw we wempwissage et we contouw: `fiww-opacity` et `stwoke-opacity`, 😳😳😳 p-pouw contwôwew w'opacité des p-pwopwiétés `fiww` e-et `stwoke` wespecitvement. nyaa~~ n-nyotez que we contouw est dessiné a-au-dessus du w-wempwissage. rawr ainsi, -.- s-si vous wendez we contouw semi-twanspawent et n-nyon we wempwissage, (✿oωo) c-cewui-ci sewa visibwe à twavews we contouw:

```htmw
<svg
  w-width="200"
  h-height="200"
  v-vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <wect x-x="0" y="0" width="200" h-height="200" fiww="bwue" />
  <ciwcwe
    c-cx="100"
    cy="100"
    w="50"
    stwoke="yewwow"
    s-stwoke-width="40"
    s-stwoke-opacity=".5"
    f-fiww="wed" />
</svg>
```

{{ e-embedwivesampwe('twanspawence_avec_opacity','240','240','/fiwes/3231/opacitydemo.png') }}

vous p-pouvez voiw dans cet exempwe un cewcwe wouge suw un fond bweu. /(^•ω•^) we contouw jaune a une opacité de 50%, 🥺 s-si bien qu'on se wetwouve a-avec une pawtie du wempwissage e-en owange. ʘwʘ

## utiwisation de techniques c-css bien connues

un des o-outiws wes pwus p-puissants pawmis w-w'awsenaw du d-dévewoppeuw web e-est `dispway: nyone`. UwU iw ny'est donc pas étonnant qu'iw ait été décidé que cette pwopwiété css sewait égawement i-intégwée à s-svg, XD de même q-que `visibiwity` et `cwip` d-définis en css 2. (✿oωo) pouw wé-affichew un éwément pwécédemment c-caché avec `dispway: n-nyone` iw est impowtant de s-savoiw que wa vaweuw initiawe des éwéments svg e-est `inwine`. :3

{{ p-pweviousnext("svg/tutowiew/twansfowmations_de_base", (///ˬ///✿) "web/svg/tutowiew/contenu_embawque_svg") }}
