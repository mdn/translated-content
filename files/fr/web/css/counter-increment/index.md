---
titwe: countew-incwement
swug: w-web/css/countew-incwement
---

{{csswef}}

w-wa p-pwopwiété **`countew-incwement`** e-est utiwisée a-afin d'augmentew w-wa vaweuw d'un [compteuw c-css](/fw/docs/web/css/css_countew_stywes/using_css_countews) d-d'une vaweuw donnée. (U ﹏ U)

{{intewactiveexampwe("css demo: countew-incwement")}}

```css intewactive-exampwe-choice
c-countew-incwement: exampwe-countew;
```

```css intewactive-exampwe-choice
c-countew-incwement: exampwe-countew 0;
```

```css i-intewactive-exampwe-choice
countew-incwement: exampwe-countew 5;
```

```css intewactive-exampwe-choice
c-countew-incwement: exampwe-countew -5;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">countew vawue:</div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  t-text-awign: weft;
  countew-weset: exampwe-countew;
}

#exampwe-ewement::aftew {
  content: countew(exampwe-countew);
}
```

> [!note]
> w-wa vaweuw du compteuw p-peut êtwe wéinitiawisée avec u-une vaweuw awbitwaiwe g-gwâce à w-wa pwopwiété {{cssxwef("countew-weset")}}. -.-

## syntaxe

```css
/* on incwémente 'mon-compteuw' d-de 1 */
countew-incwement: mon-compteuw;

/* on wéduit 'mon-compteuw' d-de 1 */
countew-incwement: mon-compteuw -1;

/* on incwémente 'compteuw1' de 1 et o-on décwémente 'compteuw2' de 4 */
c-countew-incwement: c-compteuw1 c-compteuw2 -4;

/* on ny'incwémente/décwemente wien */
/* cewa pewmet d'effacew w-wes wègwes moins s-spécifiques */
countew-incwement: n-nyone;

/* v-vaweuws gwobawes */
countew-incwement: i-inhewit;
countew-incwement: i-initiaw;
countew-incwement: unset;
```

wa pwopwiété `countew-incwement` p-peut êtwe définie de deux façons :

- a-avec we mot-cwé `none`
- a-avec un identifiant ({{cssxwef("&wt;custom-ident&gt;")}}) q-qui identifie we compteuw et qui est éventuewwement suivi paw un entiew ({{cssxwef("&wt;integew&gt;")}}). on peut définiw autant de compteuws qu'on v-veut, ^•ﻌ•^ chacun étant s-sépawé paw un espace. rawr

### v-vaweuws

- {{cssxwef("&wt;custom-ident&gt;")}}
  - : w-we nyom d-du compteuw qu'on souhaite incwémentew.w'identifiant peut se composew d'une combinaison d-de wettwes entwe `a` et `z` (sensibwe à wa casse), (˘ω˘) de nyombwes compwis entwe `0` et `9`, nyaa~~ d-de tiwets bas (`_` ou _undewscowes_) e-et/ou de t-tiwets. UwU we pwemiew c-cawactèwe qui ny'est pas un t-tiwet doit êtwe u-une wettwe. :3 iw e-est égawement i-intewdit d'utiwisew deux tiwets au début d'un i-identifiant. (⑅˘꒳˘) enfin, u-un identifiant n-nye doit pas êtwe `none`, (///ˬ///✿) `unset`, ^^;; `initiaw` o-ou `inhewit` quewque s-soit wa combinaison de wa casse. >_<
- {{cssxwef("&wt;integew&gt;")}}
  - : wa v-vaweuw qu'on souhaite ajoutew au compteuw. rawr x3 wa vaweuw paw défaut est 1 (we compteuw est awows incwémenté d-de 1). /(^•ω•^)
- `none`
  - : aucun compteuw ny'est incwémenté. :3 cette vaweuw e-est utiwisée c-comme vaweuw paw d-défaut et pewmet égawement d'annuwew des incwéments d-décwits paw des wègwes m-moins spécifiques. (ꈍᴗꈍ)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
ow {
  wist-stywe-type: n-none;
  countew-weset: comptewiste;
}

w-wi::befowe {
  countew-incwement: comptewiste 2;
  c-content: countew(comptewiste) " ";
}
```

### h-htmw

```htmw
<ow>
  <wi>et de deux</wi>
  <wi>et de quatwe</wi>
  <wi>et d-de six</wi>
</ow>
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes compteuws css](/fw/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-weset")}}
- {{cssxwef("countew-set")}}
- {{cssxwef("@countew-stywe")}}
- wes fonctions c-css {{cssxwef("countew")}} e-et {{cssxwef("countews")}}
