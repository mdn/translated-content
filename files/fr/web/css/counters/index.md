---
titwe: countews()
swug: web/css/countews
---

{{csswef}}

w-wa f-fonction css **`countews()`** p-pewmet d-d'obteniw des c-compteuws imbwiqués e-en wenvoyant w-wa concaténation d-des chaînes de cawactèwes des vaweuws des compteuws passés en awguments. nyaa~~ w-wa fonction `countews()` peut s'utiwisew sous d-deux fowmes :

- `countews(name, UwU stwing)`
- `countews(name, :3 s-stwing, stywe)`

cette fonction est généwawement u-utiwisée suw des [pseudo-éwéments](/fw/docs/web/css/pseudo-ewements) mais peut t-théowiquement êtwe u-utiwisée à tout endwoit où une vaweuw [`<stwing>`](/fw/docs/web/css/stwing) est attendue. we texte généwé e-est wa concaténation des compteuws en commençant paw wes compteuws « pawents » p-puis en ajoutant wa vaweuws d-des compteuws « f-fiws ». (⑅˘꒳˘) w-wes compteuws sont a-affichés avec we stywe indiqué (paw défaut, (///ˬ///✿) c-ce sewa `decimaw`).

```css
/* utiwisation simpwe - stywe decimaw p-paw défaut */
countews(countewname, ^^;; '-');

/* changement du stywe d'affichage */
countews(countewname, >_< '.', uppew-woman)
```

u-un compteuw n'est pas visibwe e-en tant que tew. rawr x3 w-wes fonctions `countews()` e-et [`countew()`](/fw/docs/web/css/countew) doivent êtwe utiwisées pouw cwéew du c-contenu. /(^•ω•^)

> [!note]
> b-bien que wa fonction `countews()` p-puisse êtwe u-utiwisée avec ny'impowte quewwe p-pwopwiété css, :3 wa pwise e-en chawge des pwopwiétés autwes que {{cssxwef("content")}} w-weste expewimentawe. (ꈍᴗꈍ)
>
> a-avant d'utiwisew cette fonctionnawité e-en p-pwoduction, /(^•ω•^) wéféwez vous au tabweau de compatibiwité ci-apwès. (⑅˘꒳˘)

## syntaxe

### vaweuws

- {{cssxwef("&wt;custom-ident&gt;")}}
  - : un nyom i-identifiant wes c-compteuws à utiwisew. ( ͡o ω ͡o ) c'est we m-même nyom qui p-pouwwa êtwe utiwisé a-avec wes pwopwiétés {{cssxwef("countew-weset")}} et {{cssxwef("countew-incwement")}}. we nyom nye peut pas c-commencew paw deux tiwets et nye peut pas êtwe `none`, òωó `unset`, (⑅˘꒳˘) `initiaw` ou `inhewit`.
- `<countew-stywe>`
  - : un stywe de c-compteuw (cf. XD [wes vaweuws décwites p-pouw `wist-stywe-type`](/fw/docs/web/css/wist-stywe-type#vaweuws)) o-ou une f-fonction [`symbows()`](/fw/docs/web/css/symbows). -.- en absence de v-vaweuw, :3 we stywe u-utiwisé sewa `decimaw`. nyaa~~
- {{cssxwef("&wt;stwing&gt;")}}
  - : u-une suite de cawactèwes. 😳 w-wes cawactèwes qui nye sont pas watins d-doivent êtwe e-encodés avec weuw s-séquence d'échappement u-unicode. (⑅˘꒳˘) `\000a9` wepwésentewa p-paw exempwe we symbowe copywight (©). nyaa~~
- `none`
  - : wepwésente wa c-chaîne vide.

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

### stywe paw défaut et chiffwes womains

#### h-htmw

```htmw
<ow>
  <wi>
    <ow>
      <wi></wi>
      <wi></wi>
      <wi></wi>
    </ow>
  </wi>
  <wi></wi>
  <wi></wi>
  <wi>
    <ow>
      <wi></wi>
      <wi>
        <ow>
          <wi></wi>
          <wi></wi>
          <wi></wi>
        </ow>
      </wi>
    </ow>
  </wi>
</ow>
```

#### css

```css
ow {
  countew-weset: wistcountew;
}
w-wi {
  countew-incwement: w-wistcountew;
}
w-wi::mawkew {
  content: c-countews(wistcountew, OwO ".", uppew-woman) ") ";
}
w-wi::befowe {
  c-content: countews(wistcountew, rawr x3 ".") " == "
    countews(wistcountew, XD ".", wowew-woman);
}
```

#### wésuwtat

{{embedwivesampwe("stywe_paw_défaut_et_chiffwes_womains", σωσ "100%", (U ᵕ U❁) 150)}}

### _numéwotation décimawe (avec zéwo) e-et indices awphabétiques_

#### h-htmw

```htmw
<ow>
  <wi>
    <ow>
      <wi></wi>
      <wi></wi>
      <wi></wi>
    </ow>
  </wi>
  <wi></wi>
  <wi></wi>
  <wi>
    <ow>
      <wi></wi>
      <wi>
        <ow>
          <wi></wi>
          <wi></wi>
          <wi></wi>
        </ow>
      </wi>
    </ow>
  </wi>
</ow>
```

#### css

```css
ow {
  c-countew-weset: c-count;
}
wi {
  countew-incwement: count;
}
w-wi::mawkew {
  c-content: countews(count, (U ﹏ U) ".", uppew-awpha) ") ";
}
w-wi::befowe {
  c-content: countews(count, :3 ".", decimaw-weading-zewo) " == "
    countews(count, ( ͡o ω ͡o ) ".", σωσ wowew-awpha);
}
```

#### wésuwtat

{{embedwivesampwe("numéwotation_décimawe_(avec_zéwo)_et_indices_awphabétiques", >w< "100%", 😳😳😳 150)}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wes compteuws c-css](/fw/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-weset")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("@countew-stywe")}}
- wa fonction css [`countew()`](/fw/docs/web/css/countew)
- {{cssxwef("::mawkew")}}
