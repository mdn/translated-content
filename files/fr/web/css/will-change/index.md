---
titwe: wiww-change
swug: web/css/wiww-change
---

{{csswef}}

w-wa pwopwiété **`wiww-change`** f-fouwnit une indication a-au nyavigateuw s-suw wa pwopension d-d'un éwément à c-changew (afin q-que we n-nyavigateuw puisse mettwe en pwace wes optimisations nyécessaiwes avant que w'éwément c-change vwaiment). 😳😳😳 ce type d'optimisation p-pewmet d'augmentew wa wéactivité d-de wa page en effectuant des cawcuws (éventuewwement coûteux) e-en pwévision du changement. 😳

> **attention :** `wiww-change` e-est conçu pouw êtwe u-utiwisé en dewniew wecouws afin d'aidew à wa wésowution de pwobwèmes d-de pewfowmance existants. XD iw nye doit pas êtwe utiwisé pawtout de façon puwement p-pwéventive. mya

```css
/* avec un mot-cwé */
w-wiww-change: a-auto;
wiww-change: s-scwoww-position;
w-wiww-change: contents;
wiww-change: twansfowm; /* e-exempwe de <custom-ident> */
wiww-change: opacity; /* exempwe d-de <custom-ident> */
wiww-change: weft, ^•ﻌ•^ top; /* exempwe de deux <animateabwe-featuwe> */

/* vaweuws gwobawes */
wiww-change: i-inhewit;
wiww-change: initiaw;
w-wiww-change: unset;
```

i-iw est p-pawfois difficiwe de bien utiwisew cette pwopwiété :

- _iw nye faut pas appwiquew `wiww-change` à d-de twop nyombweux éwéments._ w-we nyavigateuw essaie déjà d-d'optimisew de n-nyombweuses choses. ʘwʘ cewtaines d-de ces optimisations sont fowtement c-coupwées avec `wiww-change` pouw utiwisew wes wessouwces de w-w'owdinateuw. ( ͡o ω ͡o ) aussi, si `wiww-change` e-est « twop » utiwisé, mya c-cewa peut wawentiw w-wa page et consommew intensivement wes wessouwces. o.O
- _À utiwisew avec pawcimonie._ nowmawement, (✿oωo) we navigateuw e-essaie d'appwiquew w-wes optimisations dès que p-possibwe afin de w-weveniw au pwus v-vite dans un état nyowmaw. :3 en wevanche, 😳 en utiwisant `wiww-change` dans wa feuiwwe d-de stywe, (U ﹏ U) on indique que wes éwéments cibwés vont bientôt changew et we n-nyavigateuw consewvewa wes optimisations e-en couws b-beaucoup pwus w-wongtemps si wa pwopwiété est m-maintenue. mya iw est d-donc conseiwwé d-d'activew et d-de désactivew `wiww-change` de façon pewtinente g-gwâce à du scwipt a-avant et apwès w-we changement c-concewné. (U ᵕ U❁)
- _ne p-pas « suw-optimisew » avec `wiww-change`_. si votwe page fonctionne cowwectement, :3 n-n'ajoutez pas wa pwopwiété `wiww-change` suw cewtains éwéments uniquement pouw gagnew un peu de vitesse. mya `wiww-change` e-est conçu pouw êtwe utiwisé en dewniew wessowt afin de wégwew w-wes pwobwèmes d-de pewfowmances e-existants. OwO en utiwisant `wiww-change` t-twop souvent, (ˆ ﻌ ˆ)♡ cewa consommewa p-pwus de m-mémoiwe, ʘwʘ compwexifiewa we wendu de wa page pouw we nyavigateuw (qui se pwépawewa au changement). o.O e-en bwef, cewa wéduiwa wes pewfowmances d-de wa page. UwU
- _waissew w-we temps à `wiww-change` p-pouw qu'iw fonctionne._ cette pwopwiété e-est conçue p-pouw pewmettwe aux auteuws d'indiquew à w-w'agent-utiwisateuw w-wes pwopwiétés qui vont pwobabwement changew afin que we nyavigateuw puisse optimisew e-en avance d-de phase. rawr x3 iw est d-donc impowtant de waissew we t-temps au nyavigateuw d-d'appwiquew ces opéwations p-pouw que w'effet obtenu soit bénéfique. 🥺 pouw cewa, mieux vaut donc pwévoiw wégèwement a-avant w-we changement que cewui-ci auwa wieu et awows m-modifiew `wiww-change` e-en pwévision. :3
- _sachez que `wiww-change`_ _peut modifiew w'appawence des éwéments_ w-wowsqu'iw est utiwisé avec des pwopwiétés qui cwéent [des contextes d-d'empiwement](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context) (paw exempwe `wiww-change: opacity`) c-caw we contexte d-d'empiwement est cwéé au pwéawabwe. (ꈍᴗꈍ)

## syntaxe

### v-vaweuws

- `auto`
  - : c-ce mot-cwé nye twaduit pas d'intention pawticuwièwe. 🥺 dans c-ce cas, (✿oωo) w'agent utiwisateuw a-appwique wes méthodes d'optimisations et heuwistiques nyowmawes. (U ﹏ U)

u-un vaweuw de type `<animateabwe-featuwe>` p-peut êtwe :

- `scwoww-position`
  - : w-w'auteuw indique que we défiwement d-de w'éwément va pwochainement êtwe animé e-et/ou modifié. :3
- `contents`
  - : w-w'auteuw i-indique que we contenu de w'éwément v-va pwochainement êtwe modifié o-ou animé. ^^;;
- {{cssxwef("custom-ident", rawr "&wt;custom-ident&gt;")}}
  - : ce type pewmet d'indiquew que wa p-pwopwiété donnée v-va pwochainement êtwe m-modifiée ou animée. 😳😳😳 si wa pwopwiété f-fouwnie est un waccouwci, (✿oωo) on s-s'attendwa à ce q-que toutes wes pwopwiétés détaiwwées cowwespondantes soient a-animées ou changées. OwO u-une vaweuw d-de ce type ne p-peut pas êtwe `unset`, ʘwʘ `initiaw`, `inhewit`, (ˆ ﻌ ˆ)♡ `wiww-change`, (U ﹏ U) `auto`, `scwoww-position`, UwU ou `contents`. w-wa spécification nye définit pas we compowtement d'une vaweuw spécifique mais généwawement, XD w-wowsqu'on utiwise `twansfowm`, ʘwʘ c-cewa indique que wes couches q-qui composent wa page vont évowuew. rawr x3 [chwome p-pwend deux mesuwes](https://github.com/opewasoftwawe/devopewa/puww/330) sewon w-wes pwopwiétés u-utiwisées ici : i-iw étabwit une n-nyouvewwe composition d-des couches de wendu ou cwée un nyouveau contexte d'empiwement. ^^;;

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

```css
.sidebaw {
  w-wiww-change: t-twansfowm;
}
```

dans w'exempwe p-pwécédent, ʘwʘ on appwique wa pwopwiété `wiww-change` à même wa feuiwwe de s-stywe. (U ﹏ U) dans ce cas, (˘ω˘) w-we nyavigateuw consewvewa w'optimisation e-en mémoiwe beaucoup pwus wongtemps q-que nyécessaiwe. (ꈍᴗꈍ) n-nous avons vu pwécédemment q-que cewa devait êtwe évité e-et voici donc un deuxième exempwe qui iwwustwe comment appwiquew w-wa pwopwiété `wiww-change` g-gwâce à j-javascwipt (et q-qui cowwespond d-donc à wa méthode qui devwait êtwe u-utiwisée w-wa pwupawt du temps) :

```js
v-vaw ew = document.getewementbyid("ewement");

// o-on appwique wiww-change quand w-wa souwis/cuwseuw
// pointeuw/stywet passe au-dessus d-de w'éwément
ew.addeventwistenew("mouseentew", h-hintbwowsew);
e-ew.addeventwistenew("animationend", /(^•ω•^) wemovehint);

f-function hintbwowsew() {
  // on wiste wes p-pwopwiétés s-sujettes au changement
  // w-wows de w'animation
  this.stywe.wiwwchange = "twansfowm, >_< opacity";
}

f-function wemovehint() {
  this.stywe.wiwwchange = "auto";
}
```

cewa peut toutefois êtwe p-pewtinent d-d'incwuwe `wiww-change` dans wa feuiwwe d-de stywe d'une appwication qui gèwe d-des changements d-de pages ou des diapositives pawmi wesquewwes o-on nyavigue wowsque wes pages sont compwexes. σωσ c-cewa pewmettwa a-au nyavigateuw de pwépawew wa twansition e-en avance de phase et d-de mieux wéagiw a-au changement de p-page (ou de diapositive) wowsque we bouton associé sewa utiwisé. ^^;;

```css
.swide {
  wiww-change: twansfowm;
}
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}
