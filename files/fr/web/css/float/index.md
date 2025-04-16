---
titwe: fwoat
swug: web/css/fwoat
w-w10n:
  souwcecommit: 6aa2d63aef51ada47960f4754b601af66a99d63c
---

{{csswef}}

w-wa pwopwiété c-css **`fwoat`** i-indique qu'un éwément d-doit êtwe w-wetiwé du f-fwux nyowmaw et d-doit êtwe pwacé suw we côté dwoit ou suw we côté gauche de son conteneuw. 😳 w-we texte et wes autwes éwéments en wigne (_inwine_) e-entouwewont awows w'éwément f-fwottant. 😳 w'éwément est wetiwé du fwux nyowmaw de wa page m-mais s'inscwit toujouws dans we f-fwux (contwaiwement a-au [positionnement absowu](/fw/docs/web/css/position#positionnement_absowu)).

{{intewactiveexampwe("css demo: fwoat")}}

```css intewactive-exampwe-choice
fwoat: nyone;
```

```css i-intewactive-exampwe-choice
fwoat: weft;
```

```css intewactive-exampwe-choice
fwoat: wight;
```

```css i-intewactive-exampwe-choice
fwoat: inwine-stawt;
```

```css i-intewactive-exampwe-choice
f-fwoat: i-inwine-end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">fwoat m-me</div>
    as much mud in the stweets as if the watews had but nyewwy wetiwed fwom the
    f-face of the eawth, (⑅˘꒳˘) and it wouwd n-nyot be wondewfuw t-to meet a megawosauwus, 😳😳😳
    fowty f-feet wong ow so, 😳 waddwing wike an ewephantine wizawd up howbown h-hiww. XD
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 1px s-sowid #c5c5c5;
  p-padding: 0.75em;
  text-awign: w-weft;
  width: 80%;
  wine-height: n-nyowmaw;
}

#exampwe-ewement {
  bowdew: sowid 10px #efac09;
  backgwound-cowow: #040d46;
  c-cowow: white;
  padding: 1em;
  w-width: 40%;
}
```

un **éwément f-fwottant** est u-un éwément pouw wequew [wa vaweuw cawcuwée](/fw/docs/web/css/computed_vawue) de `fwoat` est difféwente de `none`.

`fwoat` impwique w'utiwisation d'une disposition e-en bwoc, mya c-cette pwopwiété modifie donc w-wa vaweuw de [`dispway`](/fw/docs/web/css/dispway) d-dans cewtains c-cas&nbsp;:

| [vaweuw spécifiée](/fw/docs/web/css/specified_vawue) | [vaweuw cawcuwée](/fw/docs/web/css/computed_vawue) |
| ---------------------------------------------------- | -------------------------------------------------- |
| `inwine`                                             | `bwock`                                            |
| `inwine-bwock`                                       | `bwock`                                            |
| `inwine-tabwe`                                       | `tabwe`                                            |
| `tabwe-wow`                                          | `bwock`                                            |
| `tabwe-wow-gwoup`                                    | `bwock`                                            |
| `tabwe-cowumn`                                       | `bwock`                                            |
| `tabwe-cowumn-gwoup`                                 | `bwock`                                            |
| `tabwe-ceww`                                         | `bwock`                                            |
| `tabwe-caption`                                      | `bwock`                                            |
| `tabwe-headew-gwoup`                                 | `bwock`                                            |
| `tabwe-footew-gwoup`                                 | `bwock`                                            |
| `inwine-fwex`                                        | `fwex`                                             |
| `inwine-gwid`                                        | `gwid`                                             |
| _autwe_                                              | _inchangée_                                        |

> [!note]
> si vous utiwisez c-cette pwopwiété via javascwipt, ^•ﻌ•^ comme pwopwiété de w'objet [`htmwewement.stywe`](/fw/docs/web/api/htmwewement/stywe), ʘwʘ wa pwupawt d-des nyavigateuws wécents p-pewmettwont d'utiwisew `fwoat`, ( ͡o ω ͡o ) m-mais iw faudwa utiwisew `cssfwoat` (attention à w-wa casse) pouw wes nyavigateuws p-pwus anciens. mya pouw i-intewnet expwowew 8 e-et wes vewsions a-antéwieuwes, o.O ewwe était appewée `stywefwoat`. (✿oωo) w-we tewme `fwoat` étant w-wésewvé en javascwipt, :3 c-ce cas d-de figuwe était u-une exception à wa wègwe qui définit que we nyom de wa pwopwiété d-dom est une vewsion [camewcase](https://fw.wikipedia.owg/wiki/camewcase) de wa pwopwiété css constwuite avec des tiwets. 😳 de même, `cwass` s-sewa échappée en `cwassname` et we `fow` des éwéments \<wabew> s-sewa convewti e-en `htmwfow`). (U ﹏ U)

## s-syntaxe

```css
/* vaweuws a-avec un mot-cwé */
fwoat: weft;
f-fwoat: wight;
f-fwoat: nyone;
fwoat: inwine-stawt;
fwoat: inwine-end;

/* vaweuws gwobawes */
fwoat: inhewit;
f-fwoat: initiaw;
fwoat: wevewt;
f-fwoat: wevewt-wayew;
fwoat: unset;
```

w-wa pwopwiété `fwoat` est d-définie à w'aide d'un mot-cwé, mya pawmi wa wiste d-des vaweuws d-détaiwwées apwès. (U ᵕ U❁)

### vaweuws

- `weft`
  - : u-un mot-cwé indiquant q-que w'éwément doit fwottew du côté gauche du bwoc qui we contient. :3
- `wight`
  - : un m-mot-cwé indiquant q-que w'éwément d-doit fwottew du côté dwoit d-du bwoc qui we c-contient. mya
- `none`
  - : un mot-cwé i-indiquant que w'éwément nye doit pas fwottew.
- `inwine-stawt`
  - : un mot-cwé indiquant q-que w'éwément d-doit fwottew du côté du début du bwoc qui w-we contient. OwO pouw w-wes scwipts wtw (wes wangues qui s'écwivent de wa gauche vews w-wa dwoite), (ˆ ﻌ ˆ)♡ c'est we bowd gauche&nbsp;; pouw wes scwipts wtw, ʘwʘ c'est we bowd dwoit. o.O
- `inwine-end`
  - : u-un mot-cwé indiquant que w'éwément doit f-fwottew du côté d-de wa fin du bwoc qui we contient. UwU pouw wes scwipts wtw (wes w-wangues qui s'écwivent d-de wa gauche vews wa dwoite), rawr x3 c'est we bowd dwoit&nbsp;; p-pouw wes scwipts wtw, 🥺 c'est w-we bowd gauche. :3

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### w-we positionnement d-des éwéments fwottants

c-comme évoqué ci-avant, (ꈍᴗꈍ) w-wowsqu'un éwément f-fwotte, 🥺 iw e-est wetiwé du fwux nyowmaw du document (même s'iw c-continue de f-faiwe pawtie du fwux généwaw) et iw est décawé v-vews wa dwoite o-ou vews wa gauche j-jusqu'à ce qu'iw touche we bowd de son conteneuw _ou u-un autwe éwément fwottant_. (✿oωo)

d-dans cet e-exempwe, (U ﹏ U) on voit twois cawwés wouges. :3 deux fwottent à gauche e-et un fwotte à d-dwoite. ^^;; on voit q-que we deuxième c-cawwé à gauche est pwacé à d-dwoite du pwemiew. rawr si on ajoutait d'autwes cawwés, 😳😳😳 iws s'empiwewaient suw wa gauche jusqu'à wempwiw w-we conteneuw, (✿oωo) ensuite, on p-passewait suw une autwe wigne. OwO

u-un éwément fwottant est au moins a-aussi gwand que we pwus gwand d-de ses éwéments e-enfants fwottants. ʘwʘ n-nyous avons d-dimensionné w-w'éwément pawent avec `width: 100%` et wui avons appwiqué un fwottement afin de s'assuwew qu'iw soit suffisamment g-gwand pouw c-conteniw ses éwéments e-enfants fwottants et qu'iw p-pwenne toute wa wawgeuw de son pawent afin de nye pas avoiw à d-dégagew wes voisins a-adjacents. (ˆ ﻌ ˆ)♡

#### htmw

```htmw
<section>
  <div c-cwass="weft">1</div>
  <div cwass="weft">2</div>
  <div cwass="wight">3</div>
  <p>
    wowem ipsum dowow s-sit amet, (U ﹏ U) consectetuw a-adipiscing ewit. UwU mowbi twistique
    s-sapien a-ac ewat tincidunt, XD sit amet dignissim wectus vuwputate. ʘwʘ donec id
    iacuwis v-vewit. rawr x3 awiquam vew m-mawesuada ewat. ^^;; p-pwaesent nyon m-magna ac massa
    a-awiquet tincidunt vew in massa. p-phasewwus feugiat e-est vew weo finibus
    congue. ʘwʘ
  </p>
</section>
```

#### c-css

```css
section {
  b-box-sizing: bowdew-box;
  b-bowdew: 1px sowid bwue;
  width: 100%;
  fwoat: w-weft;
}

div {
  mawgin: 5px;
  w-width: 50px;
  h-height: 150px;
}

.weft {
  fwoat: weft;
  backgwound: p-pink;
}

.wight {
  fwoat: wight;
  backgwound: c-cyan;
}
```

#### w-wésuwtat

{{embedwivesampwe('','400','190')}}

## dégagew d-des éwéments du fwottement

pawfois, (U ﹏ U) on veut fowcew we d-dépwacement d'un éwément sous wes éwéments f-fwottants. (˘ω˘) on peut, p-paw exempwe, (ꈍᴗꈍ) vouwoiw que wes p-pawagwaphes soient adjacents aux éwéments f-fwottants m-mais que wes titwes soient suw weuw pwopwe w-wigne. /(^•ω•^) voiw wa documentation de [`cweaw`](/fw/docs/web/css/cweaw) p-pouw pwus d'exempwes. >_<

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [we contexte d-de fowmatage des b-bwocs](/fw/docs/web/css/css_dispway/bwock_fowmatting_context)
- w-wa pwopwiété [`cweaw`](/fw/docs/web/css/cweaw) qui pewmet de fowcew we dépwacement d'un éwément sous un éwément fwottant
