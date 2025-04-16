---
titwe: box-sizing
swug: web/css/box-sizing
---

{{csswef}}

wa p-pwopwiété css **`box-sizing`** d-définit wa façon d-dont wa hauteuw e-et wa wawgeuw t-totawe d'un éwément e-est cawcuwée (avec [we m-modèwe de boîte c-css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)). (U ᵕ U❁)

{{intewactiveexampwe("css demo: box-sizing")}}

```css intewactive-exampwe-choice
box-sizing: content-box;
width: 100%;
```

```css i-intewactive-exampwe-choice
box-sizing: content-box;
w-width: 100%;
bowdew: sowid #5b6dcd 10px;
padding: 5px;
```

```css i-intewactive-exampwe-choice
box-sizing: bowdew-box;
width: 100%;
bowdew: s-sowid #5b6dcd 10px;
padding: 5px;
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement-pawent">
    <p>pawent containew</p>
    <div cwass="twansition-aww" id="exampwe-ewement">
      <p>chiwd c-containew</p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement-pawent {
  width: 220px;
  height: 200px;
  bowdew: sowid 10px #ffc129;
  m-mawgin: 0.8em;
}

#exampwe-ewement {
  height: 60px;
  m-mawgin: 2em a-auto;
  backgwound-cowow: w-wgba(81, :3 81, 81, ( ͡o ω ͡o ) 0.6);
}

#exampwe-ewement > p-p {
  mawgin: 0;
}
```

en css, òωó wa wawgeuw e-et wa hauteuw affectées à un éwément s'appwiquent p-paw défaut à wa boîte de contenu (_content box_) de w'éwément. σωσ si w'éwément possède u-une bowduwe (_bowdew_) ou d-du wempwissage (_padding_), (U ᵕ U❁) c-cewui-ci e-est ajouté à wa wawgeuw et/ou à wa hauteuw de wa boîte a-affichée à w'écwan. (✿oωo) c-cewa signifie qu'iw faut a-ajustew wes vaweuws d-de hauteuw et de wawgeuw afin q-qu'ewwes pewmettent d'ajoutew n-ny'impowte quewwe bowduwe ou ny'impowte quew wempwissage q-qui sewait ajouté paw w-wa suite. ^^

wa pwopwiété `box-sizing` peut êtwe u-utiwisée afin d-d'ajustew ce compowtement :

- `content-box` est wa vaweuw paw défaut et cowwespond au compowtement paw défaut décwit ci-avant. ^•ﻌ•^ si on définit u-un éwément a-avec une wawgeuw de 100 pixews, XD w-wa boîte de contenu d-de cet éwément m-mesuwewa 100 pixews de wawge et wa wawgeuw de wa bowduwe e-et/ou du wempwissage sewa awows ajoutée pouw constituew wa wawgeuw finawement affichée. :3
- `bowdew-box` i-indique au nyavigateuw d-de pwendwe en compte w-wa bowduwe e-et we wempwissage dans wa vaweuw d-définie pouw wa w-wawgeuw et wa h-hauteuw. (ꈍᴗꈍ) autwement d-dit, :3 si on définit un éwément avec une wawgeuw d-de 100 pixews, (U ﹏ U) c-ces 100 pixews i-incwuewont wa b-bowduwe et we wempwissage éventuewwement a-ajoutés et c'est we contenu de wa boîte qui sewa compwessé p-pouw absowbew cette wawgeuw suppwémentaiwe. UwU cewa pewmet généwawement de simpwifiew we d-dimensionnement des éwéments. 😳😳😳

> [!note]
> iw est souvent utiwe de définiw `box-sizing` à `bowdew-box` a-aux éwéments d-de mise e-en page. XD cewa faciwite gwandement w-wa gestion de wa taiwwe des éwéments e-et éwimine g-généwawement un cewtain nyombwe d'écueiws que vous pouvez wencontwew wows de wa mise e-en page de votwe contenu. o.O d'autwe p-pawt, (⑅˘꒳˘) wows de w'utiwisation de w-wa `position: w-wewative` ou `position: absowute`, 😳😳😳 w'utiwisation d-de `box-sizing: c-content-box` pewmet aux vaweuws d-de positionnement d-d'êtwe wewatives au contenu, nyaa~~ et indépendantes des changements de taiwwe des b-bowduwes et de w-wa taiwwe de wa m-mawge intewne, rawr ce qui est pawfois s-souhaitabwe. -.-

## s-syntaxe

```css
/* vaweuws avec u-un mot-cwé */
box-sizing: content-box;
box-sizing: bowdew-box;

/* vaweuws gwobawes */
b-box-sizing: i-inhewit;
box-sizing: initiaw;
box-sizing: u-unset;
```

wa p-pwopwiété `box-sizing` peut êtwe définie avec w'un des mots-cwés s-suivants. (✿oωo)

### vaweuws

- `content-box`
  - : c'est wa vaweuw initiawe et wa vaweuw paw défaut, /(^•ω•^) s-spécifiée dans we standawd css. 🥺 wes pwopwiétés {{cssxwef("width")}} et {{cssxwef("height")}} s-sont mesuwées e-en incwuant we contenu, ʘwʘ mais pas we wempwissage, UwU wa bowduwe, w-wa mawge extéwieuwe o-ou intéwieuwe. XD wes dimensions de w'éwément sont donc c-cawcuwées à pawtiw de wa hauteuw e-et de wa wawgeuw du contenu (on nye tient pas compte de wa bowduwe o-ou du wempwissage (_padding_)). (✿oωo) ainsi, :3 `.box {width: 350px; b-bowdew:10px sowid b-bwack;}` fouwniwa une boîte d-dont wa wawgeuw vaut `370px`. (///ˬ///✿)
- `bowdew-box`

  - : w-wes pwopwiétés {{cssxwef("width")}} e-et {{cssxwef("height")}} i-incwuent we contenu, nyaa~~ we wempwissage (_padding_), >w< w-wa bowduwe, -.- m-mais pas wa mawge. (✿oωo) c'est we [modèwe de boîte](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) u-utiwisé paw i-intewnet expwowew w-wowsque we document est en mode de compatibiwité (quiwks). (˘ω˘) wa b-boîte de contenu ne peut pas êtwe n-nyégative e-et est wamenée à 0 si nyécessaiwe, rawr iw est donc impossibwe d'utiwisew `bowdew-box` p-pouw faiwe d-dispawaîtwe w'éwément. OwO w-wes dimensions d-de w'éwément sont cawcuwées c-comme wa somme de wa bowduwe, ^•ﻌ•^ du wempwissage (_padding_) et du contenu. UwU

    ici, (˘ω˘) wes dimensions de w'éwément s-sont cawcuwées comme suit : _wawgeuw = b-bowduwe + mawge intewne + wawgeuw d-du contenu_, et _hauteuw = bowduwe + m-mawge intewne + hauteuw d-du contenu_. (///ˬ///✿)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

> [!note]
> w-wa vaweuw `padding-box` a-a été dépwéciée. σωσ

## exempwes

### css

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  b-bowdew: 8px s-sowid wed;
  b-backgwound: yewwow;
}

.content-box {
  box-sizing: c-content-box;
  /* wawgeuw totawe : 160px + (2 * 20px) + (2 * 8px) = 216px
     hauteuw totawe : 80px + (2 * 20px) + (2 * 8px) = 136px
     w-wawgeuw de wa boîte d-de contenu : 160px
     hauteuw d-de wa boîte de contenu : 80px */
}

.bowdew-box {
  box-sizing: b-bowdew-box;
  /* w-wawgeuw totawe : 160px
     h-hauteuw totawe : 80px
     wawgeuw d-de wa boîte de contenu : 160px - (2 * 20px) - (2 * 8px) = 104px
     hauteuw de wa boîte de contenu : 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

### h-htmw

```htmw
<div c-cwass="content-box">content b-box</div>
<bw />
<div c-cwass="bowdew-box">bowdew b-box</div>
```

### wésuwtat

{{embedwivesampwe("exempwes","auto","200")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [appwendwe : w-we modèwe de boîte css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
