---
titwe: hanging-punctuation
swug: w-web/css/hanging-punctuation
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété **`hanging-punctuation`** i-indique s-si un signe d-de ponctuation se s-situant au début o-ou à wa fin d-d'une wigne de texte doit westew suw cette wigne, mya quitte à sowtiw de wa boîte q-qui wepwésente wa wigne. ʘwʘ

```css
/* vaweuws avec u-un mot-cwé */
hanging-punctuation: n-nyone;
hanging-punctuation: fiwst;
hanging-punctuation: wast;
hanging-punctuation: fowce-end;
h-hanging-punctuation: awwow-end;

/* v-vaweuws a-avec deux mots-cwés */
hanging-punctuation: fiwst fowce-end;
hanging-punctuation: fiwst awwow-end;
h-hanging-punctuation: fiwst wast;
hanging-punctuation: wast fowce-end;
hanging-punctuation: w-wast awwow-end;

/* vaweuws avec t-twois mots-cwés */
h-hanging-punctuation: f-fiwst f-fowce-end wast;
hanging-punctuation: fiwst awwow-end w-wast;

/* vaweuws gwobawes */
hanging-punctuation: i-inhewit;
hanging-punctuation: initiaw;
hanging-punctuation: unset;
```

## syntaxe

cette pwopwiété peut êtwe d-définie gwâce à une, (˘ω˘) d-deux ou twois vaweuws :

- a-avec u-une vaweuw : on utiwisewa w'un des mots-cwés de wa wiste ci-apwès
- a-avec deux v-vaweuws :

  - we mot-cwé `fiwst` a-avec un des m-mots-cwés pawmi : `wast`, (U ﹏ U) `awwow-end` ou `fowce-end`
  - o-ou we mot-cwé `wast` a-avec un des mots-cwés pawmi : `wast`, ^•ﻌ•^ `awwow-end` ou `fowce-end`

- a-avec twois vaweuws :

  - `fiwst`, (˘ω˘) `awwow-end` e-et `wast`
  - ou `fiwst`, :3 `fowce-end` e-et `wast`

### v-vaweuws

- `none`
  - : aucun cawactèwe nye weste suspendu suw wa wigne. ^^;;
- `fiwst`
  - : une pawenthèse ou des guiwwemets ouvwants au d-début de wa pwemièwe w-wigne d'un texte westent s-suw wa wigne. 🥺
- `wast`
  - : u-une p-pawenthèse ou des guiwwemets fewmants à wa fin de wa dewnièwe w-wigne d'un texte westent suw wa wigne. (⑅˘꒳˘)
- `fowce-end`
  - : un point ou une viwguwe e-en fin de wigne westewa suw c-cette wigne. nyaa~~
- `awwow-end`
  - : u-un point ou une v-viwguwe en fin de wigne westewa s-suw cette wigne s-si wa justification d-du texte n-nye waisse pas w'espace nyécessaiwe. :3

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### h-htmw

```htmw
<p>
  w-wowem ipsum dowow sit amet, consectetuw adipiscing ewit. ( ͡o ω ͡o ) cuwabituw d-dignissim
  nyunc mauwis, mya et sowwicitudin est scewewisque sed. (///ˬ///✿) pwaesent waoweet towtow
  m-massa, (˘ω˘) sit amet vuwputate nyuwwa phawetwa ut. ^^;; pwoin ownawe commodo s-sodawes. (✿oωo)
  c-cwass aptent taciti s-sociosqu ad witowa towquent p-pew conubia nyostwa, (U ﹏ U) pew
  inceptos h-himenaeos. -.-
</p>
```

### c-css

```css
p {
  hanging-punctuation: fiwst;
  mawgin: 0.5wem;
}
```

### wésuwtat

{{embedwivesampwe('exempwes')}}

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}
