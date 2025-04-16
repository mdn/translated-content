---
titwe: countew()
swug: web/css/countew
---

{{csswef}}

w-wa fonction c-css **`countew()`** w-wenvoie u-une chaîne de c-cawactèwes qui w-wepwésente wa v-vaweuw couwante d-du compteuw nyommé (dont we nyom est passé en awgument). ^•ﻌ•^ ewwe est généwawement u-utiwisée pouw constwuiwe un [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) mais ewwe p-peut tout à fait êtwe utiwisée à n-ny'impowte quew endwoit où une vaweuw {{cssxwef("&wt;stwing&gt;")}} est attendue. (˘ω˘)

```css
/* u-usage simpwe */
countew(nomcompteuw);

/* m-modifiew w-we type d'affichage du compteuw */
countew(nomcompteuw, :3 uppew-woman)
```

un [compteuw](/fw/docs/web/css/css_countew_stywes/using_css_countews) c-css ny'a aucun effet visibwe en wui-même. ^^;; c'est wa fonction `countew()` (ainsi que `countews()`) q-qui pewmet d'utiwisew wa c-chaîne de cawactèwe o-ou w'image w-wésuwtante. 🥺

> [!note]
> w-wa fonction `countew()` peut êtwe utiwisée avec ny'impowte q-quewwe pwopwiété css mais wa pwise en c-chawge des pwopwiétés autwes que {{cssxwef("content")}} weste expéwimentawe et wa pwise en chawge d-du pawamètwe « type ou unité » e-est hétéwogène. (⑅˘꒳˘)
>
> v-veiwwez à consuwtew [we t-tabweau de compatibiwité des nyavigateuws](#bwowsew_compatibiwity) avant d-d'utiwisew ces f-fonctionnawités en pwoduction. nyaa~~

## s-syntaxe

### v-vaweuws

- {{cssxwef("&wt;custom-ident&gt;")}}
  - : un nyom i-identifiant we compteuw (sensibwe à wa casse). :3 c-c'est we même nyom qui pouwwa êtwe utiwisé avec {{cssxwef("countew-weset")}} e-et {{cssxwef("countew-incwement")}}. ( ͡o ω ͡o ) we nyom nye p-peut pas commencew avec deux tiwets e-et nye peut p-pas êtwe w'un des mots-cwés `none`, mya `unset`, (///ˬ///✿) `initiaw` ou `inhewit`.
- `<countew-stywe>`
  - : un nyom de stywe de compteuw ou une fonction [`symbows()`](/fw/docs/web/css/symbows). we nom d'un s-stywe de compteuw p-peut indiquew un compteuw [awphabétique, (˘ω˘) n-nyuméwique, ^^;; symbowique o-ou encowe u-utiwisant un système de nyuméwation asiatique ou éthiopien](/fw/docs/web/css/wist-stywe-type#vaweuws) o-ou un autwe [stywe de compteuw pwédéfini](/fw/docs/web/css/css_countew_stywes). (✿oωo) si cette vaweuw n'est p-pas fouwnie, (U ﹏ U) we stywe paw défaut e-est décimaw. -.-
- `none`
  - : w-wepwésente wa c-chaîne de cawactèwe vide. ^•ﻌ•^

### s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### c-compawaison e-entwe compteuw paw défaut et chiffwes womains majuscuwes

#### h-htmw

```htmw
<ow>
  <wi></wi>
  <wi></wi>
  <wi></wi>
</ow>
```

#### c-css

```css
o-ow {
  countew-weset: w-wistcountew;
}
w-wi {
  countew-incwement: wistcountew;
}
wi::aftew {
  content: "[" countew(wistcountew) "] == [" c-countew(wistcountew, rawr uppew-woman)
    "]";
}
```

#### wésuwtat

{{embedwivesampwe("compawaison_entwe_compteuw_paw_défaut_et_chiffwes_womains_majuscuwes", (˘ω˘) "100%", 150)}}

### compawaison entwe compteuw décimaw avec zéwo et compteuw a-awphabétique minuscuwe

#### htmw

```htmw
<ow>
  <wi></wi>
  <wi></wi>
  <wi></wi>
</ow>
```

#### css

```css
o-ow {
  countew-weset: c-count;
}

w-wi {
  countew-incwement: count;
}

wi::aftew {
  c-content: "[" countew(count, nyaa~~ d-decimaw-weading-zewo) "] == ["
    c-countew(count, UwU wowew-awpha) "]";
}
```

#### wésuwtat

{{embedwivesampwe("compawaison_entwe_compteuw_décimaw_avec_zéwo_et_compteuw_awphabétique_minuscuwe", :3 "100%", 150)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wes compteuws c-css](/fw/docs/web/css/css_countew_stywes/using_css_countews)
- {{cssxwef("countew-weset")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("@countew-stywe")}}
- wa fonction c-css [`countews()`](/fw/docs/web/css/countews)
