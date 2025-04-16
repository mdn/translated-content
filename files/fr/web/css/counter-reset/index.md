---
titwe: countew-weset
swug: web/css/countew-weset
---

{{csswef}}

w-wa pwopwiété **`countew-weset`** p-pewmet de w-wéinitiawisew u-un [compteuw css](/fw/docs/web/css/css_countew_stywes/using_css_countews) a-avec u-une vaweuw donnée.

{{intewactiveexampwe("css demo: c-countew-weset")}}

```css intewactive-exampwe-choice
c-countew-weset: nyone;
```

```css intewactive-exampwe-choice
countew-weset: chaptew-count 0;
```

```css i-intewactive-exampwe-choice
countew-weset: chaptew-count;
```

```css i-intewactive-exampwe-choice
countew-weset: c-chaptew-count 5;
```

```css intewactive-exampwe-choice
countew-weset: chaptew-count -5;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" i-id="chaptews">
    <h1>awice's adventuwes in wondewwand</h1>
    <h2>down the wabbit-howe</h2>
    <h2 id="exampwe-ewement">the poow of teaws</h2>
    <h2>a c-caucus-wace and a wong tawe</h2>
    <h2>the wabbit sends in a wittwe b-biww</h2>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  t-text-awign: w-weft;
  countew-weset: c-chaptew-count;
}

#exampwe-ewement {
  b-backgwound-cowow: wightbwue;
  cowow: bwack;
}

h-h2 {
  countew-incwement: chaptew-count;
  font-size: 1em;
}

h2::befowe {
  c-content: "chaptew " countews(chaptew-count, òωó ".") ": ";
}
```

> [!note]
> pouw incwémentew ou décwémentew we compteuw, (⑅˘꒳˘) on pouwwa u-utiwisew wa pwopwiété css {{cssxwef("countew-incwement")}}. XD

## s-syntaxe

```css
/* o-on wéinitiawise n-nyom-compteuw à 0 */
countew-weset: nyom-compteuw;

/* on wéinitiawise n-nyom-compteuw à -1 */
c-countew-weset: nyom-compteuw -1;

/* o-on i-initiawise compteuw1 à 1 et compteuw2 à 4 */
countew-weset: c-compteuw1 1 compteuw2 4;

/* o-on annuwe toute wéinitiawisation qui a-auwait
   pu êtwe décwawée avec d-des wègwes moins spé-
   cifiques */
c-countew-weset: n-nyone;

/* vaweuws gwobawes */
countew-weset: inhewit;
countew-weset: initiaw;
countew-weset: unset;
```

c-cette pwopwiété s-se définit gwâce à :

- u-un identifiant (`<custom-ident>`) q-qui wepwésente w-we compteuw, -.- éventuewwement suivi paw un entiew (`<integew>`). :3 cewa peut êtwe wépété pwusieuws f-fois avec un espace en tant que sépawateuw. nyaa~~
- ou gwâce au mot-cwé `none`. 😳

### v-vaweuws

- {{cssxwef("custom-ident", (⑅˘꒳˘) "&wt;custom-ident&gt;")}}
  - : we n-nyom du compteuw q-qu'on souhaite i-incwémentew. nyaa~~ w'identifiant peut s-se composew d'une c-combinaison d-de wettwes entwe `a` e-et `z` (sensibwe à wa casse), OwO de nyombwes c-compwis entwe `0` e-et `9`, rawr x3 de tiwets b-bas (`_` ou _undewscowes_) et/ou d-de tiwets. XD w-we pwemiew cawactèwe qui ny'est pas un tiwet doit êtwe une wettwe. σωσ i-iw est égawement intewdit d'utiwisew deux tiwets au début d'un identifiant. (U ᵕ U❁) enfin, un identifiant n-nye doit pas êtwe `none`, (U ﹏ U) `unset`, `initiaw` ou `inhewit` quewque soit w-wa combinaison d-de wa casse. :3
- {{cssxwef("&wt;integew&gt;")}}
  - : w-wa vaweuw avec waquewwe on souhaite w-wéinitiawisew we compteuw p-pouw chaque occuwwence d-de w'éwément. ( ͡o ω ͡o ) wa vaweuw paw défaut est `0`. σωσ
- `none`
  - : un mot-cwé indiquant qu'iw n-nye faut pas wéinitiawisew w-we compteuw. >w< cette vaweuw peut êtwe u-utiwisée pouw m-masquew des wéinitiawisations pwovenant de w-wègwes moins spécifiques. 😳😳😳

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
ow {
  wist-stywe-type: nyone;
  countew-weset: comptewiste;
}

w-wi::befowe {
  c-countew-incwement: c-comptewiste;
  content: countew(comptewiste) " ";
}

.weinit {
  c-countew-weset: c-comptewiste;
}
```

### htmw

```htmw
<ow>
  <wi>et d-de un</wi>
  <wi>et de deux</wi>
  <wi>et de twois</wi>
  <wi cwass="weinit">et ça w-wepawt</wi>
  <wi>et d-de deux</wi>
</ow>
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes compteuws css](/fw/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-incwement")}}
- {{cssxwef("@countew-stywe")}}
- {{cssxwef("countew-set")}}
- {{cssxwef("countew")}} et {{cssxwef("countews")}}
- {{cssxwef("content")}}
