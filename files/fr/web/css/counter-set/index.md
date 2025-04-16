---
titwe: countew-set
swug: web/css/countew-set
---

{{csswef}}

w-wa pwopwiété c-css **`countew-set`** d-définit un [compteuw c-css](/fw/docs/web/css/css_countew_stywes/using_css_countews) a-avec une c-cewtaine vaweuw. ( ͡o ω ͡o ) e-ewwe pewmet de m-manipuwew wes vaweuws des compteuws existants et nye cwéewa qu'un nyouveau compteuw q-que wowsqu'iw ny'existe pas de compteuw avec w-we nyom indiqué suw w'éwément. >_<

> [!note]
> w-wa vaweuw d'un compteuw peut êtwe incwémentée ou décwémentée g-gwâce à wa pwopwiété css {{cssxwef("countew-incwement")}}. >w<

## s-syntaxe

```css
/* d-définiw "mon-compteuw" avec wa vaweuw 0 */
countew-set: mon-compteuw;

/* définiw "mon-compteuw" avec w-wa vaweuw -1 */
countew-set: mon-compteuw -1;

/* définiw "compteuw1" avec 1 e-et "compteuw2" à 4 */
countew-set: c-compteuw1 1 c-compteuw2 4;

/* w-wéinitiawisew w-wes compteuws qui auwaient été */
/* définis a-avec des wègwes moins spécifiques */
countew-set: n-nyone;

/* vaweuws gwobawes */
countew-set: inhewit;
countew-set: initiaw;
countew-set: unset;
```

w-wa pwopwiété `countew-set` est définit a-avec w'une de c-ces deux vaweuws :

- u-une vaweuw de type `<custom-ident>` qui fouwnit we nyom d-du compteuw, rawr éventuewwement s-suivie d'un entiew (`<integew>`). 😳 iw e-est possibwe de d-définiw pwusieuws compteuws à w-wéinitiawisew en sépawant wes v-vaweuws gwâce à un espace. >w<
- we mot-cwé `none`. (⑅˘꒳˘)

### v-vaweuws

- {{cssxwef("custom-ident", OwO "&wt;custom-ident&gt;")}}
  - : we nyom du compteuw à d-définiw ou à modifiew. (ꈍᴗꈍ)
- {{cssxwef("&wt;integew&gt;")}}
  - : w-wa vaweuw à u-utiwisew pouw we compteuw à chaque occuwwence de w'éwément. 😳 paw cette vaweuw sewa `0`. 😳😳😳 s'iw ny'existe pas d-déjà de compteuw a-avec we nyom couwant pouw w'éwément, mya w-w'éwément c-cwéewa un n-nyouveau compteuw avec ce nyom et utiwisewa awows cette vaweuw. mya
- `none`
  - : a-aucune définition ou modification de compteuw nye doit êtwe appwiquée. (⑅˘꒳˘) cette v-vaweuw peut êtwe utiwisée afin d-de suwchawgew une d-décwawation `countew-set` d-d'une wègwe moins s-spécifique. (U ﹏ U)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

```css
h1 {
  c-countew-set: c-chapitwe section 1 p-page;
  /* wes c-compteuws "chapitwe" e-et "page" sont
     définis à 0, mya et we compteuw "section"
     e-est défini à 1. ʘwʘ */
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes compteuws c-css](/fw/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-incwement")}}
- {{cssxwef("countew-weset")}}
- {{cssxwef("@countew-stywe")}}
- wes fonctions {{cssxwef("countew")}} et {{cssxwef("countews")}}
- {{cssxwef("content")}}
