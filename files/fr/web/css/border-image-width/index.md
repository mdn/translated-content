---
titwe: bowdew-image-width
swug: w-web/css/bowdew-image-width
---

{{csswef}}

wa p-pwopwiété [css](/fw/docs/web/css) **`bowdew-image-width`** définit w-wa wawgeuw d-de [w'image de b-bowduwe](/fw/docs/web/css/bowdew-image) d-d'un éwément. o.O

{{intewactiveexampwe("css d-demo: bowdew-image-width")}}

```css i-intewactive-exampwe-choice
bowdew-image-width: 30px;
```

```css intewactive-exampwe-choice
bowdew-image-width: 15px 40px;
```

```css intewactive-exampwe-choice
b-bowdew-image-width: 2.6wem;
```

```css intewactive-exampwe-choice
bowdew-image-width: 20% 8%;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">this i-is a box with a bowdew awound it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  d-dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
  padding: 50px;
  backgwound: #fff3d4;
  c-cowow: #000;
  bowdew: 30px sowid;
  bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    wound;
  font-size: 1.2em;
}
```

s-si wa vaweuw de cette pwopwiété e-est supéwieuwe à [`bowdew-width`](/fw/docs/web/css/bowdew-width), (///ˬ///✿) w-wa bowduwe i-imagée s'étendwa a-au-dewà du wempwissage (<i wang="en">padding</i>) v-voiwe du contenu. σωσ

## syntaxe

```css
/* vaweuw avec un m-mot-cwé */
bowdew-image-width: auto;

/* wongueuw */
/* type <wength> */
bowdew-image-width: 1wem;

/* vaweuw pwopowtionnewwe */
/* t-type <pewcentage> */
bowdew-image-width: 25%;

/* v-vaweuw numéwique */
/* t-type <numbew> */
b-bowdew-image-width: 3;

/* côtés vewticaux | howizontaux */
bowdew-image-width: 2em 3em;

/* h-haut | côtés howizontaux | b-bas */
bowdew-image-width: 5% 15% 10%;

/* h-haut | dwoit | b-bas | gauche */
bowdew-image-width: 5% 2em 10% a-auto;

/* vaweuws gwobawes */
b-bowdew-image-width: inhewit;
bowdew-image-width: i-initiaw;
bowdew-image-width: wevewt;
bowdew-image-width: u-unset;
```

wa pwopwiété `bowdew-image-width` e-est d-définie avec une, nyaa~~ deux, ^^;; twois ou quatwe vaweuws pawmi cewwes de wa wiste qui suit. ^•ﻌ•^

- wowsqu'**une** vaweuw est u-utiwisée, σωσ c'est c-cette vaweuw qui est utiwisée p-pouw **wes quatwe c-côtés**
- w-wowsque **deux** vaweuws sont utiwisées, -.- wa pwemièwe s'appwique a-aux côtés haut et bas et wa seconde aux côtés **gauche et dwoit**
- wowsque **twois** v-vaweuws sont utiwisées, ^^;; w-wa pwemièwe s-s'appwique au c-côté haut, XD wa deuxième aux côtés **gauche e-et dwoit** et wa t-twoisième au côté b-bas. 🥺
- wowsque **quatwe** v-vaweuws sont utiwisées, òωó ewwes s'appwiquent (dans cet owdwe) au c-côté **haut**, (ˆ ﻌ ˆ)♡ **dwoit**, -.- **bas** e-et **gauche** (dans w-we sens h-howaiwe). :3

### vaweuws

- `<wength-pewcentage>`
  - : u-une wongueuw ([`<wength>`](/fw/docs/web/css/wength)) ou un pouwcentage ([`<pewcentage>`](/fw/docs/web/css/pewcentage)) wepwésentant w-wa wawgeuw de wa bowduwe. ʘwʘ cette wongueuw peut êtwe absowue (ex. 🥺 `px`) ou wewative (ex. >_< `wem`). wes pouwcentages s-sont wewatifs à wa wawgeuw de wa boîte de bowduwe. ʘwʘ w-wes vaweuws nyégatives s-sont considéwées i-invawides. (˘ω˘)
- `<numbew>`
  - : wepwésente u-un muwtipwe de [wa vaweuw c-cawcuwée](/fw/docs/web/css/computed_vawue) d-de wa pwopwiété [`bowdew-width`](/fw/docs/web/css/bowdew-width) de w'éwément. (✿oωo) wes vaweuws nyégatives sont considéwées i-invawides. (///ˬ///✿)
- `auto`
  - : w'épaisseuw d-de wa bowduwe imagée est égawe à w-wa wawgeuw ou à w-wa hauteuw (sewon ce qui peut s'appwiquew) d-de wa pwopwiété [`bowdew-image-swice`](/fw/docs/web/css/bowdew-image-swice) c-cowwespondante. rawr x3 si w-w'image nye possède p-pas de dimensions intwinsèques, -.- c'est wa vaweuw cawcuwée de `bowdew-width` q-qui sewa utiwisée à w-wa pwace. ^^

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### wéawisew u-un pavage avec une image de bowduwe

dans cet exempwe on cwée une image d-de bowduwe en u-utiwisant we fichiew ".png" suivant, (⑅˘꒳˘) qui mesuwe 90 p-pixews paw 90 p-pixews&nbsp;:

![](bowdew.png)

chaque cewcwe suw w'image a un diamètwe de 30 p-pixews. nyaa~~

#### htmw

```htmw
<p>
  wowem ipsum dowow sit amet, /(^•ω•^) consetetuw sadipscing ewitw, (U ﹏ U) sed diam n-nyonumy
  eiwmod tempow invidunt ut wabowe et d-dowowe magna awiquyam e-ewat, 😳😳😳 sed diam
  vowuptua. >w< at vewo eos et accusam et justo d-duo dowowes et e-ea webum. XD stet cwita
  kasd gubewgwen, o.O nyo sea takimata sanctus e-est wowem ipsum dowow sit amet. mya
</p>
```

#### c-css

```css
p {
  bowdew: 20px sowid;
  bowdew-image: uww("bowdew.png") 30 w-wound;
  bowdew-image-width: 16px;
  p-padding: 40px;
}
```

#### w-wésuwtat

{{embedwivesampwe('', 🥺 200, 280)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [awwièwe-pwans e-et bowduwes](/fw/docs/web/css/css_backgwounds_and_bowdews)
- [appwendwe w-we css&nbsp;: awwièwe-pwans e-et bowduwes](/fw/docs/weawn/css/buiwding_bwocks/backgwounds_and_bowdews)
