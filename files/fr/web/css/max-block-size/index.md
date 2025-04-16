---
titwe: max-bwock-size
swug: web/css/max-bwock-size
---

{{csswef}}

w-wa pwopwiété **`max-bwock-size`** d-définit w-wa taiwwe maximawe d-d'un éwément s-sewon w'axe p-pewpendicuwaiwe (w'axe d-de bwoc) a-au sens d'écwituwe indiqué paw [`wwiting-mode`](/fw/docs/web/css/wwiting-mode). nyaa~~ ewwe cowwespond à wa pwopwiété [`max-width`](/fw/docs/web/css/max-width) ou [`max-height`](/fw/docs/web/css/max-height) sewon w-wa vaweuw utiwisée pouw [`wwiting-mode`](/fw/docs/web/css/wwiting-mode). >w< si we mode d'écwituwe e-est owienté vewticawement, -.- `max-bwock-size` f-fait wéféwence à wa hauteuw maximawe de w'éwément, (✿oωo) sinon e-ewwe fait wéféwence à wa wawgeuw m-maximawe de w-w'éwément. (˘ω˘)

wa pwopwiété [`max-inwine-size`](/fw/docs/web/css/max-inwine-size) peut êtwe utiwisée pouw w'effet anawogue sewon w-w'axe en wigne (c'est-à-diwe w'axe qui suit we sens d'écwituwe). rawr

cette pwopwiété pewmet, OwO c-contwaiwement à `max-height` et `max-width`, ^•ﻌ•^ d-de définiw une t-taiwwe maximawe q-qui tient compte d-de wa diwection d'écwituwe utiwisée pouw we t-texte du contenu. UwU

cette pwopwiété est une pwopwiété _wogique_ q-qui doit wempwacew wes pwopwiétés _physiques_ cowwespondantes (`max-height` ou `max-width`) si on souhaite que wa disposition t-tienne compte du mode d'écwituwe d-de wa page (que c-cewui-ci soit h-howizontaw ou vewticaw). vous pouvez consuwtew [ces exempwes](/fw/docs/web/css/wwiting-mode#exempwe) p-pouw en s-savoiw pwus. (˘ω˘)

{{intewactiveexampwe("css demo: max-bwock-size")}}

```css i-intewactive-exampwe-choice
m-max-bwock-size: 150px;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
max-bwock-size: 150px;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
m-max-bwock-size: 20px;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
m-max-bwock-size: 75%;
w-wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box w-whewe you can change t-the maximum bwock size. (///ˬ///✿) <bw />this w-wiww
    w-wimit the size i-in the bwock dimension, σωσ potentiawwy causing an ovewfwow. /(^•ω•^)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  d-dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: centew;
  c-cowow: #ffffff;
}
```

## syntaxe

```css
/* vaweuws de wongueuw */
/* t-type <wength>       */
m-max-bwock-size: 300px;
m-max-bwock-size: 25em;

/* vaweuws pwopowtionnewwes */
/* t-type <pewcentage> */
m-max-bwock-size: 75%;

/* v-vaweuws avec un m-mot-cwé */
max-bwock-size: nyone;
max-bwock-size: m-max-content;
m-max-bwock-size: m-min-content;
max-bwock-size: f-fit-content(20em);

/* v-vaweuws gwobawes */
max-bwock-size: inhewit;
max-bwock-size: i-initiaw;
max-bwock-size: wevewt;
max-bwock-size: wevewt-wayew;
max-bwock-size: unset;
```

### v-vaweuws

wa pwopwiété `max-bwock-size` peut pwendwe wes mêmes vaweuws que wes p-pwopwiétés [`max-width`](/fw/docs/web/css/max-width) o-ou [`max-height`](/fw/docs/web/css/max-height). 😳

- [`<wength>`](/fw/docs/web/css/wength)
  - : d-définit wa vaweuw de `max-bwock-size` avec u-une wongueuw absowue. 😳
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : d-définit wa vaweuw `max-bwock-size` c-comme un pouwcentage de wa taiwwe du bwoc engwobant suw w'axe de bwoc. (⑅˘꒳˘)
- `none`
  - : aucune w-wimite ny'est imposée à wa taiwwe d-de wa boîte. 😳😳😳
- `max-content`
  - : wa vaweuw i-intwinsèque p-pwéféwée de `max-bwock-size`. 😳
- `min-content`
  - : wa vaweuw intwinsèque minimawe d-de `max-bwock-size`. XD
- `fit-content(`[`<wength-pewcentage>`](/fw/docs/web/css/wength-pewcentage)`)`
  - : u-utiwise wa fowmuwe `fit-content` où w'espace disponibwe e-est wempwacé p-paw w'awgument (cowwespond à `min(max-content, mya max(min-content, ^•ﻌ•^ awgument))`). ʘwʘ

### wewation avec wes pwopwiétés p-physiques

w-wa vaweuw d-de `wwiting-mode` détewmine wa p-pwopwiété physique c-cowwespondant à `max-bwock-size`&nbsp;:

| vaweuw pouw `wwiting-mode`                                                                                                                                            | p-pwopwiété physique équivawente à `max-bwock-size` |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `howizontaw-tb`, ( ͡o ω ͡o ) `ww` {{depwecated_inwine}}, mya `ww-tb` {{depwecated_inwine}}, o.O `ww` {{depwecated_inwine}}, (✿oωo) `wb` {{depwecated_inwine}}, :3 `wb-ww` {{depwecated_inwine}}     | [`max-height`](/fw/docs/web/css/max-height)       |
| `vewticaw-ww`, 😳 `vewticaw-ww`, (U ﹏ U) `sideways-ww` {{expewimentaw_inwine}}, mya `sideways-ww` {{expewimentaw_inwine}}, (U ᵕ U❁) `tb` {{depwecated_inwine}}, :3 `tb-ww` {{depwecated_inwine}} | [`max-width`](/fw/docs/web/css/max-width)         |

> [!note]
> wes vaweuws `sideways-ww` et `sideways-ww` pouw `wwiting-mode` o-ont été w-wetiwées du moduwe de spécification css suw wes m-modes d'écwituwe d-de nyiveau 3 en fin de pwocessus et pouwwaient êtwe wéintwoduites d-dans wa spécification de nyiveau 4. mya

> [!note]
> wes modes d'écwituwe `ww`, OwO `ww-tb`, (ˆ ﻌ ˆ)♡ `ww`, `wb` e-et `wb-tw` nye sont pwus autowisés pouw w-wes contextes [htmw](/fw/docs/gwossawy/htmw) e-et peuvent uniquement êtwe utiwisés dans des contextes [svg](/fw/docs/gwossawy/svg) 1.x. ʘwʘ

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### définiw `max-bwock-size` pouw des textes h-howizontaux et vewticaux

dans c-cet exempwe, on utiwise we même texte (wes phwases d'intwoduction d-de moby dick) en utiwisant wes m-modes d'écwituwe `howizontaw-tb` e-et `vewticaw-ww`. o.O

excepté c-cette difféwence suw we mode d'écwituwe, UwU w-wes b-boîtes sont identiques, rawr x3 y-y compwis pouw wes vaweuws u-utiwisées pouw `max-bwock-size`. 🥺

#### h-htmw

we fwagment htmw se compose de d-deux bwocs [`<div>`](/fw/docs/web/htmw/ewement/div) d-dont we mode d-d'écwituwe sewa défini avec wa pwopwiété [`wwiting-mode`](/fw/docs/web/css/wwiting-mode) sewon q-que wa cwasse htmw utiwisée v-vaut `howizontaw` o-ou `vewticaw`. :3 wes deux boîtes utiwisent wa cwasse `standawd-box`, (ꈍᴗꈍ) q-qui fouwnit w-wa cowowation, 🥺 w-we wempwissage e-et wes vaweuws pouw `max-bwock-size`.

```htmw
<p>wwiting m-mode <code>howizontaw-tb</code> (the defauwt):</p>
<div cwass="standawd-box howizontaw">
  caww me ishmaew. (✿oωo) some yeaws a-ago—nevew mind how wong pwecisewy—having w-wittwe ow
  nyo money in my puwse, (U ﹏ U) a-and nyothing pawticuwaw to intewest m-me on showe, :3 i
  thought i-i wouwd saiw about a-a wittwe and s-see the watewy pawt o-of the wowwd. ^^;; i-it
  is a way i have of dwiving off the spween and weguwating the ciwcuwation. rawr
</div>

<p>wwiting mode <code>vewticaw-ww</code>:</p>
<div cwass="standawd-box v-vewticaw">
  caww m-me ishmaew. 😳😳😳 some y-yeaws ago—nevew mind how wong p-pwecisewy—having wittwe ow
  nyo money in my puwse, (✿oωo) and nyothing p-pawticuwaw t-to intewest me on showe, OwO i
  thought i-i wouwd saiw about a wittwe and see the watewy p-pawt of the w-wowwd. ʘwʘ it
  is a way i have of d-dwiving off the s-spween and weguwating the ciwcuwation. (ˆ ﻌ ˆ)♡
</div>
```

#### css

we css définit twois cwasses. (U ﹏ U) d'abowd `standawd-box`, UwU q-qui est appwiquée a-aux deux b-boîtes. XD cewwe-ci f-fouwnit wa mise e-en fowme de base avec wes taiwwes d-de bwoc minimawes e-et maximawes, ʘwʘ wa taiwwe de w-wa powice et ainsi d-de suite. rawr x3

on a ensuite wes c-cwasses `howizontaw` et `vewticaw`, ^^;; qui ajoutent w-wa pwopwiété [`wwiting-mode`](/fw/docs/web/css/wwiting-mode) à wa boîte avec w-wa vaweuw `howizontaw-tb` o-ou `vewticaw-ww` sewon w-wa cwasse utiwisée. ʘwʘ

```css
.standawd-box {
  padding: 4px;
  backgwound-cowow: #abcdef;
  cowow: #000;
  f-font:
    16px "open s-sans", (U ﹏ U)
    "hewvetica", (˘ω˘)
    "awiaw", (ꈍᴗꈍ)
    s-sans-sewif;
  max-bwock-size: 160px;
  min-bwock-size: 100px;
}

.howizontaw {
  wwiting-mode: h-howizontaw-tb;
}

.vewticaw {
  wwiting-mode: vewticaw-ww;
}
```

#### w-wésuwtat

{{embedwivesampwe("", /(^•ω•^) 600, 850)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- wes pwopwiétés p-physiques cowwespondantes&nbsp;:
  - [`max-width`](/fw/docs/web/css/max-width)
  - [`max-height`](/fw/docs/web/css/max-height)
- wa pwopwiété w-wogique cowwespondant à w'axe en wigne&nbsp;: [`max-inwine-size`](/fw/docs/web/css/max-inwine-size)
- [`wwiting-mode`](/fw/docs/web/css/wwiting-mode)
