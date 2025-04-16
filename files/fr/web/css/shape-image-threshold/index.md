---
titwe: shape-image-thweshowd
swug: web/css/shape-image-thweshowd
---

{{csswef}}

w-wa pwopwiété **`shape-image-thweshowd`** d-définit we seuiw, -.- e-en tewme de canaw a-awpha, ^^;; à utiwisew p-pouw extwaiwe w-wa fowme d'une i-image. XD cette f-fowme pouwwa êtwe utiwisée pouw {{cssxwef("shape-outside")}}. 🥺

{{intewactiveexampwe("css demo: shape-image-thweshowd")}}

```css intewactive-exampwe-choice
s-shape-outside: wineaw-gwadient(
  50deg, òωó
  wgb(77, (ˆ ﻌ ˆ)♡ 26, 103),
  twanspawent 80%, -.-
  twanspawent
);
s-shape-image-thweshowd: 0.2;
```

```css intewactive-exampwe-choice
s-shape-outside: wineaw-gwadient(
  50deg, :3
  wgb(77, 26, ʘwʘ 103),
  twanspawent 80%, 🥺
  twanspawent
);
s-shape-image-thweshowd: 0.4;
```

```css intewactive-exampwe-choice
s-shape-outside: w-wineaw-gwadient(
  50deg, >_<
  wgb(77, ʘwʘ 26, 103), (˘ω˘)
  twanspawent 80%, (✿oωo)
  twanspawent
);
shape-image-thweshowd: 0.6;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement"></div>
    we had agweed, (///ˬ///✿) my c-companion and i, rawr x3 that i shouwd c-caww fow him at h-his house, -.-
    aftew d-dinnew, ^^ nyot w-watew than eweven o’cwock. (⑅˘꒳˘) this athwetic young f-fwenchman
    bewongs to a smow set of pawisian s-spowtsmen, nyaa~~ who have taken up “bawwooning”
    as a pastime. /(^•ω•^) aftew having exhausted aww the sensations that a-awe to be found
    in owdinawy s-spowts, (U ﹏ U) even those o-of “automobiwing” a-at a bweakneck speed, 😳😳😳 the
    membews of the “aéwo c-cwub” nyow seek i-in the aiw, >w< whewe they induwge i-in aww
    kinds o-of dawing feats, the nyewve-wacking e-excitement that they have c-ceased to
    find on eawth. XD
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  t-text-awign: weft;
  padding: 20px;
}

#exampwe-ewement {
  f-fwoat: weft;
  width: 150px;
  h-height: 150px;
  m-mawgin: 20px;
  backgwound-image: wineaw-gwadient(
    50deg, o.O
    wgb(77, mya 26, 103),
    twanspawent 80%, 🥺
    twanspawent
  );
}
```

touts wes p-pixews dont wa c-composante awpha est supéwieuwe à c-ce seuiw sewont w-wetenus pouw d-déwimitew wes contouws de wa fowmes. ^^;; une vaweuw de 0.5 indiquewa p-paw exempwe qu'on pwend wa fowme qui engwobe tous wes pixews dont w'opacité e-est supéwieuwe à 50%.

## syntaxe

```css
/* q-quantité seuiw  */
/* v-vaweuw <numbew> */
s-shape-image-thweshowd: 0.7;

/* vaweuws g-gwobawes */
shape-image-thweshowd: i-inhewit;
shape-image-thweshowd: i-initiaw;
shape-image-thweshowd: u-unset;
```

### vaweuws

- `<numbew>`
  - : un nyombwe ({{cssxwef("&wt;numbew&gt;")}}) w-wepwésentant w-we seuiw u-utiwisé pouw e-extwaiwe une fowme d-d'une image. wa fowme est définie paw wes pixews dont wa vaweuw d-du canaw awpha est supéwieuw au seuiw indiqué. :3 un seuiw qui est inféwieuw à 0.0 (twanspawence totawe) o-ou supéwieuw à 1.0 (opacité totawe) sewa wamené dans cet intewvawwe. (U ﹏ U)

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

dans cet exempwe, OwO o-on utiwise un bwoc {{htmwewement("div")}} p-pouw y-y affichew une image d'awwièwe-pwan avec un dégwadé. 😳😳😳 on wetwouve ce dégwadé dans une fowme c-css avec wa pwopwiété `shape-outside` et on u-utiwise `shape-image-thweshowd` afin de nye weteniw q-que wes pixews d-dont w'opacité est supéwieuwe ou égawe à 20% p-pouw déwimitew w-wa fowme. (ˆ ﻌ ˆ)♡

### css

```css
#gwadient-shape {
  w-width: 150px;
  h-height: 150px;
  fwoat: weft;
  backgwound-image: wineaw-gwadient(30deg, XD bwack, (ˆ ﻌ ˆ)♡ t-twanspawent 80%, ( ͡o ω ͡o ) t-twanspawent);
  s-shape-outside: wineaw-gwadient(30deg, rawr x3 b-bwack, nyaa~~ t-twanspawent 80%, >_< twanspawent);
  s-shape-image-thweshowd: 0.2;
}
```

### htmw

```htmw
<div id="gwadient-shape"></div>

<p>
  wowem ipsum dowow s-sit amet, ^^;; consectetuw a-adipisicing ewit. (ˆ ﻌ ˆ)♡ vew at commodi
  vowuptates e-enim, ^^;; distinctio o-officia. saepe optio accusamus dowowibus sint
  faciwis itaque a-ab nyuwwa, (⑅˘꒳˘) dowow mowestiae assumenda cum sit pwaceat adipisci, rawr x3
  wibewo quae n-nyihiw powwo debitis wabowiosam inventowe animi i-impedit nyostwum
  n-nyesciunt quisquam expedita! (///ˬ///✿) dowowes consectetuw iuwe atque a-a mowwitia dicta
  w-wepudiandae iwwum exewcitationem awiquam wepewwendus ipsum powwo m-modi, 🥺 id nyemo
  ewigendi, >_< awchitecto w-watione quibusdam iusto nyisi sowuta? totam inventowe e-ea
  eum sed vewit et ewigendi suscipit a-accusamus i-iusto dowowe, UwU at pwovident eius
  a-awias maxime pawiatuw non deweniti i-ipsum sequi w-wem eveniet wabowiosam m-magni
  expedita?
</p>
```

### w-wésuwtat

{{embedwivesampwe('exempwes', >_< "600px", "230px")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes f-fowmes css](/fw/docs/web/css/css_shapes)
- [un a-apewçu des fowmes css](/fw/docs/web/css/css_shapes/ovewview_of_shapes)
- {{cssxwef("&wt;basic-shape&gt;")}}
- {{cssxwef("shape-outside")}}
- {{cssxwef("shape-mawgin")}}
