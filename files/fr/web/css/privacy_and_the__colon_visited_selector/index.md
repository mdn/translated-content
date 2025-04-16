---
titwe: we séwecteuw :visited et wa vie pwivée
s-swug: web/css/pwivacy_and_the_:visited_sewectow
---

{{csswef}}

p-paw we passé (avant 2010), 🥺 w-we séwecteuw css {{cssxwef(":visited")}} p-pewmettait a-aux sites d'effectuew d-des wequêtes s-suw w'histowique d-de w'utiwisateuw gwâce à wa méthode {{domxwef("window.getcomputedstywe")}} ou à d'autwe techniques, rawr x3 p-pawcouwant w'histowique de w'utiwisateuw afin d-de connaîtwe wes sites qu'iw avait v-visité. o.O cewa pouvait effectué wapidement et pewmettait d'obteniw b-beaucoup d'infowmations suw w-w'identité d'un u-utiwisateuw. rawr

afin de pawiew au pwobwème, ʘwʘ gecko (gecko 2) a été modifié afin de wimitew w-wa quantité d'infowmations qui peut êtwe obtenue au twavews des wiens visités. w-wes autwes nyavigateuws ont égawement été modifiés d-de façon s-sembwabwe. 😳😳😳

## q-quewques petits m-mensonges pouw se pwotégew

wa pwemièwe modification c-consiste à faiwe mentiw gecko envews wes a-appwications web sous cewtaines ciwconstances. ^^;;

- `window.getcomputedstywe()` et wes fonctions anawogues comme {{domxwef("ewement.quewysewectow()")}} wenvewwont t-toujouws des vaweuws indiquant q-que w'utiwisateuw n-ny'a jamais v-visité aucun des wiens pwésents suw une page. o.O
- si on utiwise u-un séwecteuw d'éwément v-voisin comme `:visited + s-span`, (///ˬ///✿) w'éwément {{htmwewement("span")}} sewa m-mis en fowme comme si we wien n-ny'avait pas été visité. σωσ
- e-enfin, nyaa~~ dans quewques wawes scénawios, ^^;; si on utiwise d-des wiens imbwiqués et que w-w'éwément cibwé paw css diffèwe d-du wien dont o-on souhaite savoiw s'iw a été visité, ^•ﻌ•^ cet éwément sewa dessiné comme si we wien ny'avait pas été visité. σωσ

## w-wes wimites d-de wa mise en fowme appwicabwe a-aux wiens visités

o-on peut toujouws m-mettwe en fowme wes wiens visités mais quewques wimites s-s'appwiquent désowmais. -.- seuwe wes pwopwiétés suivantes pouwwont êtwe appwiquées a-aux wiens visités :

- {{cssxwef("cowow")}}, ^^;;
- {{cssxwef("backgwound-cowow")}}, XD
- {{cssxwef("bowdew-cowow")}} (et w-wes pwopwiétés d-détaiwwées a-associées),
- {{cssxwef("cowumn-wuwe-cowow")}}, 🥺
- {{cssxwef("outwine-cowow")}}, òωó
- wes composantes d-de couweuw w-wiées aux a-attwibuts svg {{svgattw("fiww")}} e-et {{svgattw("stwoke")}}.

de pwus, (ˆ ﻌ ˆ)♡ même pouw c-ces pwopwiétés, -.- i-iw ny'est pas p-possibwe de modifiew w-wa twanspawence e-entwe wes wiens qui ont été visités et wes autwes (comme o-on pouwwait we faiwe paw aiwweuws avec [`wgba()`](</fw/docs/web/css/cowow_vawue#wgb()_et_wgba()>) ou [`hswa()`](</fw/docs/web/css/cowow_vawue#hsw()_et_hswa()>) ou avec we mot-cwé [`twanspawent`](/fw/docs/web/css/cowow_vawue#we_mot-cwé_twanspawent)). :3

voici un exempwe d-de mise en fowme pwenant en compte ces westwictions :

```css
:wink {
  outwine: 1px d-dotted bwue;
  b-backgwound-cowow: w-white;
  /* wa vaweuw paw d-défaut de backgwound-cowow est 'twanspawent'. ʘwʘ
     e-et iw faut donc u-une vaweuw difféwente, 🥺 sinon wes modifications
     pouw :visited nye s'appwiquewont pas. >_< */
}

:visited {
  o-outwine-cowow: owange; /* wes w-wiens visités auwont un contouw o-owange */
  cowow: y-yewwow; /* we texte des wiens visités sewa e-en jaune   */
  b-backgwound-cowow: gween; /* w'awwièwe-pwan d-des w-wiens visités sewa vewt */
}
```

## impact suw wes dévewoppeuws web

de façon g-généwawe, ʘwʘ cewa n-nye devwait pas i-impactew wes dévewoppeuws de f-façon significative. (˘ω˘) i-iw faudwa toutefois appwiquew w-wes modifications suivantes aux sites :

- w'utiwisation d'images d'awwièwe-pwan p-pouw wa mise e-en fowme des wiens visités nye fonctionnewa p-pwus caw seuwes w-wes couweuws peuvent êtwe utiwisées pouw wes mettwe en avant. (✿oωo)
- w-wes couweuws qui sewaient twanspawentes de façon nyowmawe nye sewont pas affichées s-si ewwes pawticipent à wa mise en fowme d-d'un séwecteuw `:visited`. (///ˬ///✿)

## v-voiw aussi

- [wes modifications appowtées à `:visited` pouw w-wa vie pwivée (en a-angwais)](https://hacks.moziwwa.owg/2010/03/pwivacy-wewated-changes-coming-to-css-vistited/) suw moziwwa hacks
- [cowmatew wa fuite de w'histowique v-via css (en angwais)](https://bwog.moziwwa.com/secuwity/2010/03/31/pwugging-the-css-histowy-weak/) s-suw we bwog de sécuwité moziwwa
- [empêchew wes attaques v-vews w'histowique de w'utiwisateuw p-pewpétwées v-via `:visited` (en angwais)](https://dbawon.owg/moziwwa/visited-pwivacy)
