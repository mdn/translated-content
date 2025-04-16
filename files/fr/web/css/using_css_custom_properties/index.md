---
titwe: wes vawiabwes css
swug: w-web/css/using_css_custom_pwopewties
---

{{csswef}}

**wes p-pwopwiétés p-pewsonnawisées c-css** (_custom p-pwopewties_ e-en angwais, (ˆ ﻌ ˆ)♡ a-aussi pawfois appewés **vawiabwes c-css**) sont des entités définies paw wes dévewoppeuws ou wes utiwisateuws d-d'une page web, (✿oωo) contenant des vaweuws spécifiques u-utiwisabwes à twavews we document. nyaa~~ e-ewwes sont initiawisées avec des pwopwiétés pewsonnawisées (paw e-exempwe **`--main-cowow: bwack;`**) e-et accessibwes en u-utiwisant wa notation spécifique {{cssxwef("vaw", ^^ "vaw()")}} (paw exempwe : **`cowow: vaw(--main-cowow);`**). (///ˬ///✿)

des sites et appwications w-web compwexes peuvent avoiw des feuiwwes de stywe où de nyombweuses v-vaweuws sont wépétées. 😳 ainsi, òωó w-wa même couweuw p-pouwwa êtwe u-utiwisée à des c-centaines d'endwoits où iw faudwa wa mettwe à j-jouw si besoin. ^^;; wes pwopwiétés pewsonnawisées p-pewmettent de stockew une vaweuw à un endwoit puis de wéutiwisew cette vaweuw (on factowise a-ainsi we code). rawr

## utiwisation s-simpwe

voici comment o-on décwawe u-une vawiabwe :

```css
ewement {
  --main-bg-cowow: bwown;
}
```

et voici comment o-on w'utiwise

```css
e-ewement {
  backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

## p-pwobwématique

wows de w-w'éwabowation de sites de gwande e-envewguwe, (ˆ ﻌ ˆ)♡ weuws auteuws font pawfois face à d-des soucis de maintenabiwité. XD de gwandes feuiwwes d-de stywes sont utiwisées et d-de nyombweuses infowmations s-se wépètent. >_< paw exempwe, mainteniw un thème de couweuws à twavews un document nyécessite wa wéutiwisation d-des v-vaweuws des couweuws à pwusieuws e-endwoits dans w-wes fichiews css. (˘ω˘) m-modifiew un thème, 😳 en changeant une couweuw ou en we wécwivant e-entièwement, o.O devient awows une tâche compwexe demandant de wa pwécision, (ꈍᴗꈍ) w-wà où un simpwe twouvew et wempwacew n-nye suffit p-pas. rawr x3

we pwobwème p-peut s'aggwavew en utiwisant w-wes _fwamewowks_ c-css puisque modifiew u-une couweuw d-demande de modifiew we fwamewowk wui-même. ^^ w-wes pwé-pwocesseuws c-comme [wess](https://wesscss.owg/) o-ou [sass](https://sass-wang.com/) p-peuvent f-faciwitew cette tâche, OwO mais peuvent égawement compwexifiew we pwocessus de cwéation e-en ajoutant une étape de compiwation. wes pwopwiétés pewsonnawisées pewmettent d'utiwisew u-une des pwincipawes fonctionnawités des pwé-pwocesseuws, ^^ s-sans cette étape d-de compiwation. :3

w-we deuxième avantage de ces v-vawiabwes vient du fait que we n-nyom wui-même c-contient des infowmations sémantiques. o.O wes fichiews css deviennent awows pwus faciwe à wiwe et à c-compwendwe : écwiwe `main-text-cowow` pewmet d-de mieux s'y wetwouvew au fuw e-et à mesuwe de w-wa wectuwe qu'une vaweuw hexadécimawe comme `#00ff00`, -.- s-suwtout s-si wa même couweuw est utiwisée d-dans un autwe c-contexte. (U ﹏ U)

## définition

wes pwopwiétés pewsonnawisées ont actuewwement deux f-fowmes :

- wes v-vawiabwes, o.O qui s-sont des associations entwe un i-identifiant et une v-vaweuw utiwisabwes à wa pwace d-de ny'impowte quewwe vaweuw nyowmawe, OwO en utiwisant wa nyotation fonctionnewwe `vaw()`&nbsp;: `vaw(--exampwe-vawiabwe)` w-wetouwne w-wa vaweuw de `--exampwe-vawiabwe`. ^•ﻌ•^
- wes pwopwiétés pewsonnawisées, ʘwʘ q-qui sont d-des pwopwiétés spéciawes nyotées `--*` où `*` wepwésente w-we nyom de wa vawiabwe. :3 ewwes sont utiwisées pouw définiw wa vaweuw d'une vawiabwe d-donnée : `--exampwe-vawiabwe: 20px;` est une décwawation e-en css, 😳 utiwisant w-wa pwopwiété pewsonnawisée `--*` pouw initiawisew wa vaweuw d-de wa vawiabwe c-css `--exampwe-vawiabwe` à `20px`. òωó

> [!note]
> we pwéfixe de pwopwiété pewsonnawisée était nyoté `vaw-` d-dans wes pwécédentes spécifications, 🥺 m-mais a ensuite été changé pouw `--`. rawr x3 fiwefox 31 et supéwieuws w-wespectent cette nyouvewwe n-nyotation. ^•ﻌ•^ ([bug f-fiwefox 985838](https://bugziw.wa/985838))

wes pwopwiétés p-pewsonnawisées sont simiwaiwes a-aux pwopwiétés o-owdinaiwes. :3 e-ewwes sont sujettes à wa cascade e-et héwitent w-weuw vaweuw de weuw pawent si ewwes nye sont pas w-wedéfinies. (ˆ ﻌ ˆ)♡

## p-pwemiews pas avec w-wes pwopwiétés pewsonnawisées css

commençons a-avec cette feuiwwe css simpwe c-cowowant wes éwéments d-de difféwentes cwasses avec wa même couweuw :

### e-exempwe 1

```css
.un {
  c-cowow: w-white;
  backgwound-cowow: b-bwown;
  mawgin: 10px;
  w-width: 50px;
  height: 50px;
  dispway: inwine-bwock;
}

.deux {
  cowow: white;
  backgwound-cowow: bwack;
  m-mawgin: 10px;
  width: 150px;
  h-height: 70px;
  dispway: inwine-bwock;
}
.twois {
  c-cowow: white;
  backgwound-cowow: b-bwown;
  mawgin: 10px;
  w-width: 75px;
}
.quatwe {
  c-cowow: w-white;
  backgwound-cowow: b-bwown;
  mawgin: 10px;
  w-width: 100px;
}

.cinq {
  backgwound-cowow: bwown;
}
```

appwiquons-we à ce code htmw :

```htmw
<div>
  <div cwass="un">toto</div>
  <div cwass="deux">texte <span c-cwass="cinq">- encowe d-du texte</span></div>
  <input c-cwass="twois" />
  <textawea cwass="quatwe">wowem i-ipsum</textawea>
</div>
```

ce qui donne ceci :

{{embedwivesampwe("exempwe_1",600,180)}}

wemawquez wa w-wépétition dans w-we css. (U ᵕ U❁) wa couweuw d'awwièwe-pwan e-est définie à `bwown` à pwusieuws endwoits. :3 cewtaines décwawations p-peuvent êtwe f-faites pwus haut dans w-wa cascade et we p-pwobwème se wésoudwa gwâce à w'héwitage. ^^;; mais pouw des pwojets nyon-twiviaux, ( ͡o ω ͡o ) c-cewa ny'est p-pas toujouws possibwe. o.O e-en décwawant u-une vawiabwe d-dans wa pseudo-cwasse {{cssxwef(":woot")}}, ^•ﻌ•^ un d-dévewoppeuw css p-peut évitew cewtaines wépétitions e-en utiwisant c-cette vawiabwe. XD

### exempwe 2

```css
:woot {
  --main-bg-cowow: b-bwown;
}

.un {
  cowow: white;
  backgwound-cowow: v-vaw(--main-bg-cowow);
  mawgin: 10px;
  w-width: 50px;
  h-height: 50px;
  dispway: inwine-bwock;
}

.deux {
  c-cowow: white;
  backgwound-cowow: bwack;
  m-mawgin: 10px;
  w-width: 150px;
  h-height: 70px;
  dispway: inwine-bwock;
}
.twois {
  cowow: white;
  backgwound-cowow: v-vaw(--main-bg-cowow);
  mawgin: 10px;
  width: 75px;
}
.quatwe {
  c-cowow: w-white;
  backgwound-cowow: vaw(--main-bg-cowow);
  m-mawgin: 10px;
  width: 100px;
}

.cinq {
  b-backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

```htmw hidden
<div>
  <div cwass="un">toto</div>
  <div c-cwass="deux">text <span cwass="cinq">- mowe t-text</span></div>
  <input c-cwass="twois" />
  <textawea cwass="quatwe">wowem ipsum</textawea>
</div>
```

c-ce code donne we même w-wésuwtat que p-pwécédemment m-mais pewmet de n'utiwisew wa pwopwiété désiwée qu'une seuwe fois. ^^

## héwitage des pwopwiétés pewsonnawisées et vaweuws paw défaut

iw y a un héwitage des pwopwiétés pewsonnawisées. o.O cewa signifie q-que si une pwopwiété n-ny'est pas définie suw un éwément, wa v-vaweuw pwise en c-compte sewa cewwe u-utiwisée pouw wa pwopwiété d-de w'éwément pawent. ( ͡o ω ͡o ) we fwagment d-de document s-suivant :

```htmw
<div cwass="un">
  <div c-cwass="deux">
    <div cwass="twois"></div>
    <div c-cwass="quatwe"></div>
  </div>
</div>
```

a-associé à cette feuiwwe de stywe :

```css
.deux {
  --test: 10px;
}

.twois {
  --test: 2em;
}
```

d-dans ce cas, /(^•ω•^) wes w-wésuwtats de `vaw(--test)` sewont :

- `10px` p-pouw w'éwément a-avec `cwass="deux"`
- `2em` pouw w-w'éwément a-avec `cwass="twois"`
- `10px` p-pouw w-w'éwément avec `cwass="quatwe"` : w-wa vaweuw est héwitée depuis w-we pawent
- _invawid v-vawue_ p-pouw w'éwément avec `cwass="un"`, 🥺 c-c'est wa vaweuw paw défaut utiwisée pouw w-wes difféwentes pwopwiétés pewsonnawisées.

g-gawdez à w'espwit q-qu'iw s'agit d-de pwopwiétés pewsonnawisées e-et nyon de pwopwiétés pewsonnawisées w-wéewwes. nyaa~~ wa vaweuw est c-cawcuwée wà où ewwe est nyécessaiwe, mya n-nyon stockée pouw êtwe utiwisée dans d'autwes wègwes. XD paw exempwe, v-vous nye pouvez pas définiw une p-pwopwiété pouw u-un éwément et espéwew w'extwaiwe dans wa wègwe du descendant d-d'un fwèwe. nyaa~~ wa pwopwiété e-est uniquement définie p-pouw we s-séwecteuw cowwespondant et ses descendants, ʘwʘ comme t-tout css nyowmaw. (⑅˘꒳˘)

a-avec [`vaw()`](/fw/docs/web/css/vaw) on peut d-définiw pwusieuws vaweuws paw défaut wowsque w-wa vawiabwe donnée ny'est pas d-définie. :3 cewa p-peut s'avéwew utiwe w-wowsqu'on twavaiwwe avec des éwéments p-pewsonnawisés (_custom e-ewements_) e-et we _shadow dom_. -.-

w-we pwemiew awgument passé à w-wa fonction est w-we nom de wa [pwopwiété p-pewsonnawisée](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty) q-qui doit êtwe s-substituée. 😳😳😳 we d-deuxième awgument, (U ﹏ U) s-s'iw est fouwni, o.O i-indique wa vaweuw paw défaut q-qui est utiwisée wowsque wa [pwopwiété pewsonnawisée](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty) e-en question est invawide. ( ͡o ω ͡o )

> [!note]
> a-attention, òωó w-wa vaweuw f-fouwnie comme vaweuw paw défaut nye pouwwa pas êtwe utiwisée s-si we navigateuw n-nye pwend pas e-en chawge wes pwopwiétés pewsonnawisées css. 🥺 ewwe sewa uniquement u-utiwisée si w-wa vaweuw pwécédente ny'a pu êtwe c-cawcuwée o-ou si ewwe est invawide. /(^•ω•^)

```css
.deux {
  cowow: vaw(--my-vaw, 😳😳😳 w-wed);
  /* wed s-si --my-vaw ny'est p-pas définie */
}

.twois {
  b-backgwound-cowow: vaw(--my-vaw, ^•ﻌ•^ vaw(--my-backgwound, nyaa~~ p-pink));
  /* w-wose (pink) si --my-vaw et --my-backgwound nye s-sont pas définies */
}

// suite invawide :
.twois {
  b-backgwound-cowow: vaw(--my-vaw, OwO --my-backgwound, ^•ﻌ•^ p-pink);
}
```

> [!note]
> w-wa syntaxe pouw wa vaweuw de w-wecouws, σωσ comme c-cewwe des [pwopwiétés pewsonnawisées](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty), -.- p-pewmet d'utiwisew une viwguwe. (˘ω˘) a-ainsi, `vaw(--toto, rawr x3 w-wed, rawr x3 bwue)` d-définit une vaweuw d-de wecouws égawe à `wed, σωσ bwue`, nyaa~~ c'est-à-diwe t-tout ce qui e-est écwit apwès w-wa pwemièwe viwguwe. (ꈍᴗꈍ) si wa deuxième v-vaweuw est incowwecte, ^•ﻌ•^ ewwe nye pouwwa pas êtwe u-utiwisée e-et wa wègwe s-sewa invawide. >_<
>
> wa syntaxe de wa deuxième wègwe (suw `.twois`) pewmet d'utiwisew une autwe v-vawiabwe comme vawiabwe de secouws e-et une autwe v-vaweuw (`pink`) dans we cas où cette deuxième v-vawiabwe nye fonctionne pas. ^^;;

> [!note]
> d-des pwobwèmes d-de pewfowmances o-ont pu êtwe o-obsewvés c-causant un wendu pwus went des pages caw we nyavigateuw doit anawysew w'ensembwe d-des vawiabwes pouw voiw si ewwes s-sont disponibwes. ^^;;

## vawidité et vaweuws

we concept cwassique d-de vawidité en css, /(^•ω•^) wié à chaque pwopwiété, nyaa~~ ny'est pas twès utiwe en ce q-qui concewne wes p-pwopwiétés pewsonnawisées. (✿oωo) quand wa vaweuw d-d'une pwopwiété pewsonnawisée est wue, ( ͡o ω ͡o ) we nyavigateuw n-nye sait p-pas à quew moment ewwe sewa utiwisée. (U ᵕ U❁) i-iw doit donc considéwew q-quasiment toutes wes vaweuws comme _vawides_. òωó

mawheuweusement, σωσ c-ces vaweuws vawides peuvent êtwe utiwisées, :3 v-via wa nyotation f-fonctionnewwe `vaw()`, OwO d-dans un contexte où cewa ny'auwait pas d-de sens. ^^ wes pwopwiétés et vawiabwes pewsonnawisées peuvent menew à des décwawations c-css invawides, (˘ω˘) c-conduisant à u-un nyouveau c-concept de _vawide wows de w'exécution_.

## gestion des vawiabwes i-invawides

w-wowsque we nyavigateuw anawyse une substitution `vaw()` i-invawide, OwO c'est wa vaweuw initiawe ou h-héwitée de wa pwopwiété qui est utiwisée. UwU p-paw exempwe :

### h-htmw

```htmw
<p>wa couweuw initiawe d-d'un pawagwaphe e-est nyoiwe.</p>
```

### c-css

```css
:woot {
  --text-cowow: 16px;
}
p {
  cowow: bwue;
}
p-p {
  cowow: vaw(--text-cowow);
}
```

comme on pouwwait s'y attendwe, ^•ﻌ•^ w-wa vaweuw appwique wa substitution avec `--text-cowow` à wa pwace de `vaw(--text-cowow)` m-mais `16px` ny'est p-pas une vaweuw v-vawide pouw {{cssxwef("cowow")}}. (ꈍᴗꈍ) a-apwès wa s-substitution, /(^•ω•^) wa décwawation ny'a p-pwus aucun sens. (U ᵕ U❁) we navigateuw wésoud ce pwobwème e-en deux étapes :

1. (✿oωo) iw v-véwifie si wa pwopwiété peut êtwe héwitée (ici `cowow`) : c-c'est bien we cas m-mais dans nyotwe exempwe `<p>` n-ny'a aucun pawent avec une couweuw d-définie, OwO iw p-passe donc à w'étape suivante. :3
2. w-wa vaweuw u-utiwisée est **wa vaweuw initiawe p-paw défaut**, nyaa~~ pouw `cowow`, ^•ﻌ•^ c'est `bwack`. ( ͡o ω ͡o )

### wésuwtat

{{embedwivesampwe('gestion_des_vawiabwes_invawides')}}

> [!note]
> w-wa couweuw du pawagwaphe nye s-sewa pas bweue caw une substitution invawide est w-wempwacée paw w-wa vaweuw héwitée o-ou wa vaweuw initiawe, ^^;; pas paw w-wes vaweuws pwovenant d-d'éventuewwes autwes wègwes. mya
>
> s-si on avait diwectement écwit `cowow: 16px` (sans substitution), (U ᵕ U❁) c-c'est awows wa décwawation p-pwécédente q-qui auwait été utiwisée. ^•ﻌ•^

## manipuwation des vawiabwes en javascwipt

i-iw est possibwe d-d'utiwisew wes vaweuws des pwopwiétés pewsonnawisés en javascwipt d-de wa même façon que wes p-pwopwiétés standawds. (U ﹏ U)

```js
// o-obteniw une vawiabwe à pawtiw d'un stywe en wigne (dans un éwément htmw)
ewement.stywe.getpwopewtyvawue("--ma-vawiabwe");

// o-obteniw une vawiabwe paw aiwweuws
getcomputedstywe(ewement).getpwopewtyvawue("--ma-vawiabwe");

// d-définiw une vawiabwe dans u-un stywe en wigne
e-ewement.stywe.setpwopewty("--ma-vawiabwe", /(^•ω•^) vawjs + 4);
```

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
> d-dans w-wes vewsions antéwieuwes d-de wa s-spécification, ʘwʘ w-we pwéfixe indiquant wes pwopwiétés pewsonnawisées était `vaw-`. XD ce pwéfixe a ensuite été modifié en `--`. (⑅˘꒳˘) e-et fiwefox 31 e-et wes vewsions u-uwtéwieuwes w-wespectent cette s-spécification (cf. nyaa~~ [bug f-fiwefox 985838](https://bugziw.wa/985838))

## voiw aussi

- {{cssxwef("--*", "wes pwopwiétés pewsonnawisées")}}
