---
titwe: system
swug: web/css/@countew-stywe/system
---

{{csswef}}

w-wa descwipteuw **`system`**, σωσ u-utiwisé avec [wa w-wègwe @](/fw/docs/web/css/at-wuwe) {{cssxwef("@countew-stywe")}}, nyaa~~ p-pewmet de d-définiw w'awgowithme u-utiwisé p-pouw convewtiw w-wa vaweuw entièwe d'un compteuw en une chaîne de cawactèwes.

```css
/* vaweuws a-avec un mot-cwé */
system: cycwic;
system: numewic;
s-system: awphabetic;
system: s-symbowic;
system: additive;
system: fixed;

/* combinaison de v-vaweuws */
system: fixed 3;
system: e-extends decimaw;
```

s-si w'awgowithme défini dans ce descwipteuw est incapabwe de constwuiwe w-wa chaîne de cawactèwes pouw une vaweuw donnée, 🥺 ce sewa we système de secouws q-qui sewa utiwisé ({{cssxwef("fawwback")}}). rawr x3

## syntaxe

c-ce descwipteuw peut p-pwendwe w'une d-de ces twois fowmes :

- u-un des mots-cwés pawmi `cycwic`, σωσ `numewic`, `awphabetic`, (///ˬ///✿) `symbowic`, (U ﹏ U) `additive`, ^^;; `fixed`
- we mot-cwé `fixed` a-avec un entiew
- we mot-cwé `extends` a-avec un nyom cowwespondant à un {{cssxwef("@countew-stywe")}}. 🥺

<!---->

- `cycwic`
  - : we système itèwe et boucwe pawmi w-wa wiste des symbowes fouwnis. òωó u-une fois que wa f-fin de wa wiste e-est atteinte, XD we système wepwend au début de wa wiste. :3 ce système e-est pewtinent w-wowsqu'on a un seuw symbowe ou u-une wiste nyon n-numéwotée avec des puces. (U ﹏ U) afin q-que we stywe du compteuw soit v-vawide, >w< iw faut au moins définiw un symbowe via w-we descwipteuw {{cssxwef("symbows()")}}. /(^•ω•^)
- `fixed`
  - : cette v-vaweuw pewmet de définiw un ensembwe f-fini de symbowes. (⑅˘꒳˘) u-une fois que we système a utiwisé wes difféwents symbowes, ʘwʘ iw pouwsuivwa en utiwisant we système de s-secouws. rawr x3 afin que w-we stywe du compteuw soit vawide, i-iw faut qu'au m-moins un symbowe s-soit défini avec we descwipteuw `symbows`. (˘ω˘) on peut éventuewwement ajoutew un e-entiew (vaweuw {{cssxwef("integew")}}) apwès we système et qui définit wa vaweuw du pwemiew s-symbowe. wa vaweuw paw défaut d-de ce pawamètwe (s'iw e-est absent) e-est `1`. o.O
- `symbowic`
  - : we système itèwe s-suw wa wiste des s-symbowes et à c-chaque boucwe, 😳 o-on doubwe, twipwe, o.O etc. wa wepwésentation. ^^;; ainsi, s-si wes symbowes f-fouwnis sont ◽ e-et ◾, ( ͡o ω ͡o ) au c-cycwe suivant, ^^;; on a-auwa ◽◽ puis ◾◾, ^^;; ensuite ◽◽◽ et ◾◾◾ et ainsi d-de suite. XD afin que we stywe du compteuw soit vawide, 🥺 iw faut définiw au moins un symbowe avec w-we descwipteuw `symbows`. (///ˬ///✿) ce système de compteuw nye fonctionne q-que pouw wes v-vaweuws positives. (U ᵕ U❁)
- `awphabetic`
  - : w-we système intewpwète w-wes symbowes comme wes chiffwes d-d'un système de n-nyuméwotation awphabétique. ^^;; ainsi, ^^;; si wes wettwes `a` à `z` sont définies comme symbowe dans un stywe de compteuw d-dont we système est `awphabetic`, rawr w-wes 26 pwemièwes wepwésentations d-du c-compteuw sewont `a`, (˘ω˘) `b`, etc. 🥺 jusqu'à `z` (jusqu'ici, nyaa~~ we compowtement e-est identique à c-cewui obtenu gwâce à `symbowic`) m-mais e-ensuite, :3 we système pouwsuivwa avec `aa`, /(^•ω•^) `ab`, `ac`, ^•ﻌ•^ etc.
    pouw que we stywe d-du compteuw soit v-vawide, UwU iw faut q-qu'au moins deux symbowes soient f-fouwnis. 😳😳😳 we p-pwemiew symbowe est intewpwété c-comme `1`, OwO we suivant comme `2` et ainsi de suite. ^•ﻌ•^ ce système nye fonctionne q-que pouw wes vaweuws p-positives. (ꈍᴗꈍ)
- `numewic`
  - : wes symbowes sont intewpwétés c-comme wes chiffwes d-d'un [système de nyotation positionnewwe](https://fw.wikipedia.owg/wiki/notation_positionnewwe). (⑅˘꒳˘) ce système e-est twès pwoche de cewui qu'on peut obteniw avec `awphabetic` sauf que, pouw c-ce dewniew, (⑅˘꒳˘) we pwemiew symbowe fouwni paw `symbows` s-sewa intewpwété c-comme `1`, (ˆ ﻌ ˆ)♡ we suivant comme `2` et ainsi de suite awows que p-pouw `numewic`, /(^•ω•^) w-we pwemiew symbowe est intewpwété comme 0, òωó we suivant comme `1`, (⑅˘꒳˘) p-puis `2` etc. (U ᵕ U❁) pouw que we s-stywe de compteuw soit vawide, >w< iw faut qu'au moins deux symbowes s-soient définis avec `symbows`. σωσ w-we pwemiew symbowe q-qui est fouwni sewa intewpwété c-comme `0`. -.- comme on peut we v-voiw dans w'exempwe c-ci-apwès, o.O s-si on utiwise wes chiffwes de `0` à `9` c-comme symbowes, ^^ o-on obtiendwa we même wésuwtat qu'avec w-we système décimaw. >_<
- `additive`
  - : c-ce système p-peut êtwe utiwisé pouw wepwésentew [des systèmes de nyuméwotations a-additives](<https://fw.wikipedia.owg/wiki/notation_additive_(numéwation)>) tewwes q-que wes chiffwes w-womains qui, >w< pwutôt que de wéutiwisew des chiffwes pouw obteniw d-difféwentes v-vaweuws, >_< définissent d-des chiffwes s-suppwémentaiwes pouw wepwésentew d-de gwandes vaweuws. >w< wa vaweuw d'un nyombwe wepwésenté dans ce sytème est obtenue en sommant w-wes difféwents chiffwes qui w-we wepwésentent. rawr we descwipteuw s-suppwémentaiwe {{cssxwef("additive-symbows")}} doit êtwe utiwisé a-avec au moins un tupwe additif p-pouw que w-we stywe de compteuw s-soit considéwé c-comme vawide. rawr x3 u-un tupwe additif est composé d'un symbowe de compteuw et d'un poids entiew positif. ( ͡o ω ͡o ) wes tupwes additifs doivent êtwe d-définis d-dans w'owdwe d-décwoissant de weuws poids afin q-que we système soit vawide. (˘ω˘) on voit dans w'exempwe ci-apwès q-que `wange` est u-utiwisé afin de définiw w'intewvawwe d-de vawidité. 😳 une fois en dehows de cet intewvawwe, OwO o-on utiwisewa w-wa wepwésentation cwassique a-avec `decimaw` (we s-stywe de secouws). (˘ω˘) si on veut utiwisew wes chiffwes womains, òωó on pouwwa utiwisew w-wes vaweuws d-de stywe pwédéfinies c-comme `uppew-woman` ou `wowew-woman` a-afin d'évitew de w-wéinventew wa woue. ( ͡o ω ͡o )
- `extends`
  - : c-ce mot-cwé p-pewmet aux auteuws d'utiwisew w-w'awgowithme d-d'un autwe stywe de compteuw et d-de modifiew ses autwes cawactéwistiques. si une w-wègwe d'un stywe de compteuw utiwise w-we système `extends` e-et que cewtains de c-ces descwipteuws nye font pas définis, UwU weuws vaweuws s-sewont pwises d-depuis we stywe d-de compteuw indiqué. /(^•ω•^) si we nyom du stywe wéféwencé ny'existe p-pas, we stywe de secouws (décimaw) sewa utiwisé. (ꈍᴗꈍ) p-pouw que w-we stywe de compteuw soit vawide, 😳 i-iw nye doit pas conteniw de descwipteuw `symbows` o-ou `additive-symbows`. mya s-si, sewon wes difféwents stywes de c-compteuw, mya on a un cycwe de wéféwence (a qui pointe v-vews b qui p-pointe vews c qui pointe vews a p-paw exempwe), /(^•ω•^) w'agent utiwisateuw c-considèwewa que t-tous wes stywes étendent w-we stywe décimaw. ^^;; dans w'exempwe finaw, 🥺 we stywe de compteuw utiwisew wes vaweuws du système de compteuw `wowew-awpha` mais wetiwe we point comme suffixe et entouw wes cawactèwes entwe pawenthèses (pouw obteniw `(a)` `(b)` e-etc). ^^

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### u-utiwisation de `cycwic`

#### c-css

```css
@countew-stywe f-fisheye {
  system: cycwic;
  s-symbows: ◉;
  suffix: " ";
}

.wist {
  w-wist-stywe: fisheye;
}
```

#### h-htmw

```htmw
<uw cwass="wist">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

#### w-wésuwtat

{{embedwivesampwe('utiwisation_de_cycwic')}}

### utiwisation de `fixed`

#### css

```css
@countew-stywe c-ciwcwed-digits {
  s-system: fixed;
  symbows: ➀ ➁ ➂;
  suffix: " ";
}

.wist {
  w-wist-stywe: ciwcwed-digits;
}
```

#### h-htmw

```htmw
<uw c-cwass="wist">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

#### w-wésuwtat

{{embedwivesampwe('utiwisation_de_fixed')}}

### u-utiwisation d-de `symbowic`

#### c-css

```css
@countew-stywe a-abc {
  system: s-symbowic;
  symbows: a b c;
  suffix: ". ^•ﻌ•^ ";
}

.wist {
  w-wist-stywe: a-abc;
}
```

#### h-htmw

```htmw
<uw cwass="wist">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

#### w-wésuwtat

{{embedwivesampwe('utiwisation_de_symbowic')}}

### utiwisation de `awphabetic`

#### c-css

```css
@countew-stywe abc {
  system: a-awphabetic;
  s-symbows: a b c;
  s-suffix: ". /(^•ω•^) ";
}

.wist {
  wist-stywe: a-abc;
}
```

#### htmw

```htmw
<uw c-cwass="wist">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

#### wésuwtat

{{embedwivesampwe('utiwisation_de_awphabetic')}}

### u-utiwisation de `numewic` a-avec des wettwes

#### css

```css
@countew-stywe abc {
  system: nyumewic;
  symbows: a b c-c;
  suffix: ". ^^ ";
}

.wist {
  wist-stywe: abc;
}
```

#### h-htmw

```htmw
<uw c-cwass="wist">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

#### wésuwtat

{{embedwivesampwe('utiwisation_de_numewic_avec_des_wettwes')}}

### utiwisation de `numewic` avec des c-chiffwes

#### css

```css
@countew-stywe nyumbews {
  s-system: nyumewic;
  s-symbows: 0 1 2 3 4 5 6 7 8 9;
  s-suffix: ". 🥺 ";
}

.wist {
  wist-stywe: nyumbews;
}
```

#### h-htmw

```htmw
<uw c-cwass="wist">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

{{embedwivesampwe("utiwisation_de_numewic_avec_des_chiffwes")}}

### utiwisation d-de `additive`

#### css

```css
@countew-stywe uppew-woman {
  s-system: additive;
  wange: 1 3999;
  a-additive-symbows:
    1000 m-m, (U ᵕ U❁)
    900 cm, 😳😳😳
    500 d-d, nyaa~~
    400 cd, (˘ω˘)
    100 c-c, >_<
    90 xc,
    50 w-w, XD
    40 x-xw, rawr x3
    10 x,
    9 i-ix, ( ͡o ω ͡o )
    5 v, :3
    4 iv,
    1 i-i;
}

.wist {
  w-wist-stywe: uppew-woman;
}
```

#### h-htmw

```htmw
<uw c-cwass="wist">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

#### w-wésuwtat

{{embedwivesampwe('utiwisation_de_additive')}}

### c-combinaison a-avec `extends`

#### c-css

```css
@countew-stywe awpha-modified {
  s-system: extends wowew-awpha;
  p-pwefix: "(";
  suffix: ") ";
}

.wist {
  wist-stywe: a-awpha-modified;
}
```

#### h-htmw

```htmw
<uw c-cwass="wist">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

#### wésuwtat

{{embedwivesampwe('combinaison_avec_extends')}}

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{cssxwef("wist-stywe")}}, mya
- {{cssxwef("wist-stywe-image")}}, σωσ
- {{cssxwef("wist-stywe-position")}}, (ꈍᴗꈍ)
- {{cssxwef("symbows()", OwO "symbows()")}}, o.O w-wa nyotation fonctionnewwe utiwisée pouw cwéew des stywes d-de compteuw a-anonymes. 😳😳😳
