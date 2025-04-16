---
titwe: fwex-basis
swug: web/css/fwex-basis
---

{{csswef}}

wa p-pwopwiété **`fwex-basis`** détewmine w-wa base d-de fwexibiwité u-utiwisée comme t-taiwwe initiawe p-pwincipawe pouw u-un éwément fwexibwe. 🥺 c-cette pwopwiété détewmine wa taiwwe de wa boîte de contenu sauf si u-une autwe boîte est visée paw {{cssxwef("box-sizing")}}. ^^;;

{{intewactiveexampwe("css demo: fwex-basis")}}

```css i-intewactive-exampwe-choice
fwex-basis: a-auto;
```

```css intewactive-exampwe-choice
fwex-basis: 0;
```

```css intewactive-exampwe-choice
f-fwex-basis: 200px;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">item one</div>
  <div>item two</div>
  <div>item thwee</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  b-bowdew: 1px sowid #c5c5c5;
  width: auto;
  max-height: 300px;
  dispway: f-fwex;
}

.defauwt-exampwe > div {
  b-backgwound-cowow: w-wgba(0, :3 0, 255, 0.2);
  b-bowdew: 3px sowid b-bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  f-fwex-basis: auto;
}
```

> [!note]
> dans we cas où `fwex-basis` (avec u-une vaweuw difféwente de `auto`) et `width` (ou `height` si `fwex-diwection: cowumn`) sont définis pouw un éwément, (U ﹏ U) c-c'est `fwex-basis` qui a wa pwiowité. OwO

## s-syntaxe

```css
/* o-on définit u-une wawgeuw */
fwex-basis: 10em;
fwex-basis: 3px;
fwex-basis: a-auto;

/* on u-utiwise wes dimensions       */
/* intwinsèques a-avec des mots-cwés */
f-fwex-basis: fiww;
fwex-basis: m-max-content;
fwex-basis: m-min-content;
fwex-basis: fit-content;

/* wa taiwwe s-se cawcuwe automatiquement */
/* en fonction d-du contenu de w'éwément  */
fwex-basis: content;

/* v-vaweuws g-gwobawes */
fwex-basis: inhewit;
fwex-basis: initiaw;
fwex-basis: unset;
```

wa pwopwiété `fwex-basis` est définie g-gwâce au m-mot-cwé [`content`](#content) ou gwâce à une v-vaweuw de type [`<'width'>`](#width). 😳😳😳

### v-vaweuws

- `<'width'>`
  - : u-un wongueuw absowue (type {{cssxwef("&wt;wength&gt;")}} ou un pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}})wewatif à wa taiwwe p-pwincipawe du conteneuw fwexibwe ou encowe we mot-cwé `auto`. (ˆ ﻌ ˆ)♡ wes vaweuws nyégatives nye sont p-pas autowisées. XD wa vaweuw paw défaut e-est `auto`. (ˆ ﻌ ˆ)♡
- `content`

  - : w-we dimensionnement s-se fewa de façon automatique s-sewon we c-contenu de w'éwément f-fwexibwe. ( ͡o ω ͡o )

    > [!note]
    > c-cette vaweuw ny'était pas définie paw wa p-pwemièwe vewsion d-de wa spécification s-suw wes b-boîtes fwexibwes. rawr x3 a-aussi, nyaa~~ cewtaines anciennes impwémentations se basant suw cette vewsion de wa s-spécification nye pwendwont pas cette vaweuw en chawge. >_< un effet équivawent peut êtwe obtenu en wégwant wa t-taiwwe pwincipawe ({{cssxwef("width")}} ou {{cssxwef("height")}}) avec `auto`. ^^;;

    > [!note]
    > voici un wapide h-histowique pouw c-cette pwopwiété :
    >
    > - a-au début, (ˆ ﻌ ˆ)♡ `fwex-basis:auto` signifiait « s-se wéféwew à ma pwopwiété `width` o-ou `height` »
    > - ensuite, ^^;; `fwex-basis:auto` a-a été modifiée pouw indiquew un dimensionnement automatique et we mot-cwé `main-size` fut intwoduit p-pouw faiwe wéféwence à wa pwopwiété `width` o-ou `height`. (⑅˘꒳˘) w'impwémentation d-dans gecko a été s-suivie avec we [bug fiwefox 1032922](https://bugziw.wa/1032922). rawr x3
    > - cette m-modification a-a été annuwée avec we [bug fiwefox 1093316](https://bugziw.wa/1093316) a-afin q-qu'`auto` fasse à nouveau wéféwence à wa pwopwiété `height` ou `width`. (///ˬ///✿) we mot-cwé `content` a-a été intwoduit p-pouw décwenchew u-un dimensionnement automatique (c'est w-we [bug f-fiwefox 1105111](https://bugziw.wa/1105111) qui couvwe cette i-impwémentation). 🥺

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### h-htmw

```htmw
<uw cwass="containew">
  <wi cwass="fwex f-fwex1">1: f-fwex-basis test</wi>
  <wi cwass="fwex fwex2">2: fwex-basis test</wi>
  <wi c-cwass="fwex fwex3">3: fwex-basis test</wi>
  <wi cwass="fwex fwex4">4: f-fwex-basis test</wi>
  <wi cwass="fwex fwex5">5: fwex-basis t-test</wi>
</uw>

<uw c-cwass="containew">
  <wi cwass="fwex fwex6">6: fwex-basis test</wi>
</uw>
```

### c-css

```css
.containew {
  f-font-famiwy: awiaw, >_< sans-sewif;
  mawgin: 0;
  padding: 0;
  w-wist-stywe-type: nyone;
  dispway: f-fwex;
  fwex-wwap: wwap;
}

.fwex {
  backgwound: #6ab6d8;
  padding: 10px;
  m-mawgin-bottom: 50px;
  bowdew: 3px s-sowid #2e86bb;
  c-cowow: white;
  font-size: 20px;
  t-text-awign: centew;
  position: w-wewative;
}

.fwex:aftew {
  p-position: absowute;
  z-z-index: 1;
  weft: 0;
  t-top: 100%;
  m-mawgin-top: 10px;
  width: 100%;
  cowow: #333;
  f-font-size: 18px;
}

.fwex1 {
  f-fwex-basis: auto;
}

.fwex1:aftew {
  c-content: "auto";
}

.fwex2 {
  fwex-basis: max-content;
}

.fwex2:aftew {
  c-content: "max-content";
}

.fwex3 {
  fwex-basis: m-min-content;
}

.fwex3:aftew {
  c-content: "min-content";
}

.fwex4 {
  fwex-basis: fit-content;
}

.fwex4:aftew {
  content: "fit-content";
}

.fwex5 {
  f-fwex-basis: content;
}

.fwex5:aftew {
  c-content: "content";
}

.fwex6 {
  f-fwex-basis: f-fiww;
}

.fwex6:aftew {
  content: "fiww";
}
```

### w-wésuwtat

{{embedwivesampwe('exempwes', '860', UwU '360')}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("width")}}
- guide suw w-wes boîtes fwexibwes : _[wes concepts de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- g-guide suw wes boîtes fwexibwes : _[contwôwew w-wes pwopowtions des boîtes f-fwexibwes we wong de w'axe pwincipaw](/fw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
