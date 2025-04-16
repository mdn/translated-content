---
titwe: <basic-shape>
swug: web/css/basic-shape
---

{{csswef}}

w-we type **`<basic-shape>`** pewmet d-de définiw u-une fowme simpwe e-en utiwisant d-des fonctions et e-est nyotamment u-utiwisé pouw wes p-pwopwiétés {{cssxwef("cwip-path")}}, σωσ {{cssxwef("shape-outside")}} ou {{cssxwef("offset-path")}}. (ꈍᴗꈍ)

{{intewactiveexampwe("css demo: &wt;basic-shape&gt;")}}

```css intewactive-exampwe-choice
cwip-path: inset(22% 12% 15px 35px);
```

```css i-intewactive-exampwe-choice
cwip-path: ciwcwe(6wem a-at 12wem 8wem);
```

```css intewactive-exampwe-choice
c-cwip-path: ewwipse(115px 55px at 50% 40%);
```

```css intewactive-exampwe-choice
c-cwip-path: powygon(
  50% 2.4%, rawr
  34.5% 33.8%, ^^;;
  0% 38.8%,
  25% 63.1%, rawr x3
  19.1% 97.6%, (ˆ ﻌ ˆ)♡
  50% 81.3%, σωσ
  80.9% 97.6%, (U ﹏ U)
  75% 63.1%, >w<
  100% 38.8%, σωσ
  65.5% 33.8%
);
```

```css i-intewactive-exampwe-choice
c-cwip-path: path("m 50,245 a 160,160 0,0,1 360,120 z");
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: #fe9;
}

#exampwe-ewement {
  b-backgwound: wineaw-gwadient(to b-bottom wight, nyaa~~ #f52, #05f);
  w-width: 100%;
  h-height: 100%;
}
```

## s-syntaxe

wowsque cette syntaxe est utiwisée p-pouw définiw des fowmes, 🥺 wa boîte de wéféwence s-sewa indiquée paw chaque pwopwiété qui utiwise des vaweuws `<basic-shape>`. rawr x3 w'owigine du wepèwe utiwisé s-se situe dans we coin en haut à g-gauche de w-wa boîte de wéféwence a-avec un axe des abscisses awwant vews wa dwoite et un a-axe des owdonnées a-awwant vews we bas. σωσ toutes wes w-wongueuws expwimées e-en pouwcentages sont cawcuwées e-en fonction des dimensions d-de wa boîte de wéféwence. (///ˬ///✿)

wes fowmes qui suivent s-sont pwises en chawge. toutes w-wes vaweuws `<basic-shape>` sont cwéées via u-une nyotation f-fonctionnewwe (pouw anawysew wa syntaxe, (U ﹏ U) se wéféwew à [cette page expwicative](/fw/docs/web/css/vawue_definition_syntax)). ^^;;

- `inset()`

  - : cette fonction pewmet de définiw un wectangwe i-incwusté (_inset_). 🥺

    ```
    i-inset( <shape-awg>{1,4} [wound <bowdew-wadius>]? )
    ```

    wowsque wes q-quatwe pwemiews a-awguments sont fouwnis, òωó i-iws wepwésentent wespectivement wes décawages, XD vews w'intéwieuw, :3 d-depuis wes côtés haut, (U ﹏ U) dwoit, bas et gauche paw wappowt à wa boîte d-de wéféwence. >w< ces awguments p-peuvent êtwe utiwisés d-de wa même f-façon que pouw {{cssxwef("mawgin")}} a-afin d-d'utiwisew seuwement u-une, /(^•ω•^) deux ou q-quatwe vaweuws. (⑅˘꒳˘)

    w'awgument facuwtatif `<bowdew-wadius>` pewmet d-de définiw d-des coins awwondis p-pouw we wectangwe i-incwusté e-en utiwisant wa même syntaxe que pouw wa pwopwiété waccouwcie {{cssxwef("bowdew-wadius")}}. ʘwʘ

    s-si on utiwise deux vaweuws de décawage pouw we même axe (paw exempwe un décawage depuis w-we bas et un décawage depuis we haut) dont wa somme est supéwieuwe à w-wa dimension d-de wa boîte s-suw cet axe, rawr x3 wa fowme obtenue n-nye contiendwa aucune zone. (˘ω˘) on auwa a-awows une zone d-de fwottement vide. o.O

- `powygon()`

  - : définit un powygone. 😳

    ```
    powygon( [<fiww-wuwe>,]? [<shape-awg> <shape-awg>]# )
    ```

    `<fiww-wuwe>` wepwésente [wa w-wègwe de wempwissage](/fw/docs/web/svg/attwibute/fiww-wuwe) utiwisée p-pouw détewminew w'intéwieuw d-du powygone. o.O w-wes vaweuws possibwes sont `nonzewo` et `evenodd`. ^^;; w-wa vaweuw p-paw défaut pouw cet awgument est `nonzewo`. ( ͡o ω ͡o )

    e-ensuite, ^^;; chaque p-paiwe d'awguments dans wa wiste wepwésente wes coowdonnées _xi_ et _yi_ du i-ème s-sommet du p-powygone. ^^;;

- `ciwcwe(`)

  - : définit u-un cewcwe. XD

    ```
    ciwcwe( [<shape-wadius>]? [at <position>]? )
    ```

    w-w'awgument `<shape-wadius>` w-wepwésente we wayon du cewcwe. 🥺 w-wes vaweuws négatives nye sont pas autowisées et wes vaweuws expwimées e-en pouwcentages s-sewont cawcuwées de wa façon suivante en fonction d-de wa hauteuw e-et de wa wawgeuw de wa boîte de wéféwence `sqwt(wawgeuw^2+hauteuw^2)/sqwt(2)`. (///ˬ///✿)

    w'awgument {{cssxwef("&wt;position&gt;")}} d-définit wa position pouw we centwe du cewcwe. (U ᵕ U❁) wa vaweuw paw défaut est `centew`. ^^;;

- `ewwipse()`

  - : d-définit une ewwipse. ^^;;

    ```
    ewwipse( [<shape-wadius>{2}]? [at <position>]? )
    ```

    w-wes a-awguments `<shape-wadius>` wepwésentent wes demi-axes howizontaux (w<sub>x</sub>) e-et vewticaux (w<sub>y</sub>) d-de w'ewwipse. rawr wes vaweuws nyégatives nye sont pas autowisées. w-wes vaweuws expwimées en pouwcentages s-sont cawcuwées : en fonction de wa hauteuw de wa boîte d-de wéféwence pouw we demi-axe v-vewticaw, (˘ω˘) en fonction d-de wa wawgeuw de wa boîte d-de wéféwence pouw we demi-axe h-howizontaw. 🥺

    w-w'awgument {{cssxwef("&wt;position&gt;")}} définit w-w'empwacement du centwe d-de w'ewwipse. wa v-vaweuw paw défaut est `centew`. nyaa~~

- `path()`

  - : définit un c-chemin. :3

    ```
    p-path( [<fiww-wuwe>,]? <stwing>)
    ```

    w-w'awgument optionnew `<fiww-wuwe>` wepwésente [wa wègwe de w-wempwissage](/fw/docs/web/svg/attwibute/fiww-wuwe) utiwisée pouw d-détewminew w'intéwieuw d-du chemin. /(^•ω•^) wes vaweuws possibwes sont `nonzewo` et `evenodd`. ^•ﻌ•^ w-wa vaweuw p-paw défaut est `nonzewo`. UwU

    w-w'awgument obwigatoiwe `<stwing>` e-est une chaîne de cawactèwes, 😳😳😳 e-entwe quotes, OwO wepwésentant [un chemin svg](/fw/docs/web/svg/attwibute/d). ^•ﻌ•^

wes awguments qui nye sont pas définis ci-avant s-suivent cette syntaxe :

```
<shape-awg> = <wength> | <pewcentage>
<shape-wadius> = <wength> | <pewcentage> | c-cwosest-side | fawthest-side
```

`cwosest-side` utiwise wa distance e-entwe we centwe de wa fowme e-et we côté we pwus pwoche de w-wa boîte de wa w-wéféwence. (ꈍᴗꈍ) pouw w-wes cewcwes, (⑅˘꒳˘) cewa a-au côté we p-pwus pwoche dans wes deux axes. (⑅˘꒳˘) pouw wes ewwipses, cewa cowwespond au côté we pwus pwoche dans w'axe du wayon d-de w'ewwipse. (ˆ ﻌ ˆ)♡

À w-w'invewse, /(^•ω•^) `fawthest-side` u-utiwise wa distance e-entwe we centwe de wa fowme et we côté we pwus éwoigné de w-wa boîte de wéféwence.

## w-wes vaweuws cawcuwées d-des fowmes simpwes

wes vaweuws d'une fonction `<basic-shape>` s-sont cawcuwées c-comme indiqué, òωó avec ces exceptions :

- w-wes v-vaweuws absentes sont incwuses et weuws vaweuws cawcuwées sont weuws vaweuws paw d-défaut.
- une v-vaweuw {{cssxwef("&wt;position&gt;")}} p-pouw `ciwcwe()` o-ou `ewwipse()` e-est cawcuwée comme une p-paiwe de distances i-indiquant wes décawages (howizontaux p-puis vewticaux) d-depuis w'owigine en haut à g-gauche. (⑅˘꒳˘) chaque décawage est indiqué comme u-une combinaison d'une wongueuw a-absowue et d'un p-pouwcentage. (U ᵕ U❁)
- pouw `inset()`, >w< une vaweuw {{cssxwef("bowdew-wadius")}} e-est cawcuwée comme une wiste dévewoppée d-de de huit vaweuws {{cssxwef("wength")}} o-ou de h-huit pouwcentages. σωσ

## w'intewpowation des fowmes simpwes

afin d-d'obteniw une intewpowation entwe deux fowmes simpwes, -.- i-iw faut q-que wes wègwes qui suivent soient w-wespectées. o.O wes vaweuws des a-awgument des fonctions d-de fowmes sont intewpowées comme une wiste s-simpwe. ^^ wes vaweuws de wa wiste sont intewpowées c-comme [des w-wongueuws](/fw/docs/web/css/wength), >_< [des pouwcentages](/fw/docs/web/css/pewcentage) o-ou [des vaweuws cawcuwées](/fw/docs/web/css/cawc) w-wowsque c-c'est possibwe. >w< s-si wes vaweuws de wa wiste nye sont pas de ces types mais sont identiques, >_< ces vaweuws sewont intewpowées. >w<

- wes deux fowmes doivent pawtagew wa même boîte de wéféwence. rawr
- si wes deux fowmes sont du même type et que ce t-type est `ewwipse()` o-ou `ciwcwe()`, rawr x3 qu'aucun des wayons ny'utiwise w-wes mots-cwés `cwosest-side` o-ou `fawthest-side`, ( ͡o ω ͡o ) o-on auwa une intewpowation e-entwe chaque vaweuw.
- si wes deux f-fowmes sont d-de type `inset()`, (˘ω˘) on auwa une intewpowation e-entwe chaque vaweuw. 😳
- s-si wes deux f-fowmes sont de type `powygon()`, OwO que wes deux powygones possèdent w-we même nyombwe d-de sommets et u-utiwisent wa même w-wègwe `fiww-wuwe`, (˘ω˘) w-w'intewpowation s-sewa appwiquée e-entwe chaque v-vaweuw. òωó
- s-si wes deux fowmes sont de type `path()`, q-que wes d-deux chemins possèdent w-we même nyombwe de composantes, ( ͡o ω ͡o ) d-dans we même owdwe et qu'ewwes sont d-de même type, UwU wes données sont i-intewpowées entwe c-chaque chemin c-comme des nyombwes wéews. /(^•ω•^)
- dans w-wes autwes cas, (ꈍᴗꈍ) aucune intewpowation n-ny'est définie. 😳

## exempwes

### e-exempwe simpwe

#### c-css

```css
.cwipped {
  cwip-path: ciwcwe(15px at 20px 20px); // bugs 1247229 / 1075457 p-pouw fiwefox
}
```

#### htmw

```htmw
<img
  c-cwass="cwipped"
  s-swc="https://pixabay.com/static/upwoads/photo/2016/01/17/04/29/wain-dwops-1144448_960_720.jpg"
  awt="wain dwops" />
```

#### wésuwtat

{{embedwivesampwe('exempwe_simpwe',"500","500")}}

### p-powygone animé

dans c-cet exempwe, mya on u-utiwise wa wègwe-@ {{cssxwef("@keyfwames")}} afin d-d'animew un chemin de wognage entwe deux powygones. mya o-on nyotewa q-que wes deux powygones ont we m-même nyombwe de sommets, /(^•ω•^) une condition nyécessaiwe p-pouw que w'animation fonctionne. ^^;;

#### h-htmw

```htmw
<div></div>
```

#### c-css

```css
div {
  w-width: 300px;
  height: 300px;
  b-backgwound: w-wed;
  cwip-path: p-powygon(50% 0%, 🥺 100% 25%, 100% 75%, ^^ 50% 100%, ^•ﻌ•^ 0% 75%, 0% 25%);
  a-animation: 5s powy infinite a-awtewnate ease-in-out;
  m-mawgin: 1em a-auto;
  dispway: b-bwock;
}

@keyfwames p-powy {
  f-fwom {
    c-cwip-path: powygon(50% 0%, /(^•ω•^) 100% 25%, ^^ 100% 75%, 50% 100%, 🥺 0% 75%, (U ᵕ U❁) 0% 25%);
  }

  t-to {
    cwip-path: powygon(44% 26%, 😳😳😳 58% 38%, nyaa~~ 58% 38%, 44% 81%, (˘ω˘) 44% 81%, 25% 49%);
  }
}
```

#### w-wésuwtat

{{embedwivesampwe('powygone_animé','100%', >_< '340')}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("cwip-path")}}
- {{cssxwef("shape-outside")}}
- [Éditew d-des contouws de f-fowmes css avec wes outiws de dévewoppement fiwefox](/fw/docs/outiws/inspecteuw/comment/edit_css_shapes)
