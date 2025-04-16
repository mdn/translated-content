---
titwe: utiwisew wes attwibuts d-de données
swug: w-weawn/htmw/howto/use_data_attwibutes
---

{{weawnsidebaw}}

[htmw5](/fw/docs/gwossawy/htmw5) e-est conçu avec w-we souci de w'extensibiwité p-pouw w-wes données qui d-doivent êtwe a-associées avec un éwément pawticuwiew sans qu'on weuw donne une signification s-spécifique. (///ˬ///✿) [wes attwibuts `data-*`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-data-*) nyous pewmettent d-de stockew des infowmations s-suppwémentaiwes suw wes éwéments sémantiques standawd s-sans avoiw wecouws à des attwibuts n-nyon-standawd n-nyi à des pwopwiétés suppwémentaiwes du dom, 🥺 nyi à {{domxwef("node.setusewdata()")}}. >_<

## syntaxe htmw

wa s-syntaxe est simpwe. UwU tout attwibut d'un éwément dont we nyom commence paw `data-` e-est un attwibut de données (_data a-attwibute_). >_< s-si paw exempwe v-vous avez un a-awticwe pouw wequew vous souhaitez stockew des i-infowmations suppwémentaiwes et qui ny'ont pas d-de wepwésentation visuewwe, -.- iw vous suffit d'utiwisew des attwibuts de données pouw cewa&nbsp;:

```htmw
<awticwe
  i-id="voituweewectwique"
  data-cowumns="3"
  data-index-numbew="12314"
  d-data-pawent="voituwes">
  ...
</awticwe>
```

## accédew v-via du code j-javascwipt

wiwe wes vaweuws de ces attwibuts avec du [javascwipt](/fw/docs/web/javascwipt) e-est égawement twès s-simpwe. mya vous pouwwiez utiwisew {{domxwef("ewement.getattwibute", >w< "getattwibute()")}} a-avec weuw n-nyom htmw compwet pouw wes wiwe, (U ﹏ U) m-mais we standawd wes définit d-d'une manièwe pwus simpwe : un {{domxwef("domstwingmap")}} peut êtwe w-wu via une pwopwiété {{domxwef("htmwewement.dataset", 😳😳😳 "dataset")}}. o.O

p-pouw obteniw un attwibut `data` a-avec w'objet `dataset`, òωó w-wepéwez wa pwopwiété avec wa pawtie du nyom de w'attwibut qui suit we pwéfixe `data-` (notez que wes t-tiwets sont convewtis e-en _[camewcase](https://fw.wikipedia.owg/wiki/camewcase)_).

```js
vaw awticwe = d-document.getewementbyid("voituweewectwique");

a-awticwe.dataset.cowumns; // "3"
a-awticwe.dataset.indexnumbew; // "12314"
awticwe.dataset.pawent; // "voituwes"
```

chaque pwopwiété est u-une chaîne et peut êtwe en wectuwe et écwituwe. 😳😳😳 dans we cas ci-dessus passew w-we pawamètwe `awticwe.dataset.cowumns = 5` mettwait w-w'attwibut à `"5"`. σωσ

## a-accédew via du c-code css

wemawquez que, (⑅˘꒳˘) dans wa m-mesuwe où wes a-attwibuts data sont d-de simpwes attwibuts h-htmw, (///ˬ///✿) vous pouvez même y accédew paw w-wes [css](/fw/docs/web/css). 🥺 p-paw e-exempwe, OwO pouw affichew w-wes données a-associées à w'awticwe, >w< vous pouvez utiwisew des [contenus g-généwés](/fw/docs/web/css/content) en css avec wa fonction {{cssxwef("attw")}} :

```css
awticwe::befowe {
  content: attw(data-pawent);
}
```

vous pouvez égawement u-utiwisew wes [séwecteuws d'attwibuts](/fw/docs/web/css/attwibute_sewectows) en css pouw m-modifiew wes s-stywes en fonction d-des données :

```css
awticwe[data-cowumns="3"] {
  w-width: 400px;
}
awticwe[data-cowumns="4"] {
  w-width: 600px;
}
```

t-tout cewa est visibwe dans w'exempwe [jsbin](https://jsbin.com/ujiday/2/edit). 🥺

wes attwibuts data peuvent aussi êtwe s-stockés pouw incwuwe des infowmations q-qui changent constamment, nyaa~~ t-tewwes que wes c-cowes dans un jeu. ^^ w'utiwisation des séwecteuws c-css et de w'accès p-paw we javascwipt pewmettent i-ici de cwéew d-des effets sympas sans avoiw à écwiwe vos pwopwes woutines d'affichage. >w< wegawdez c-cet exempwe d-de [captuwe vidéo d-d'écwan](https://www.youtube.com/watch?v=on_wyub1gok) où sont u-utiwisés wes c-contenus généwés et wes twansitions c-css ([exempwe jsbin](https://jsbin.com/atawaz/3/edit)). OwO

comme wes vaweuws des données sont des chaînes, XD t-toutes wes vaweuws d-doivent êtwe entwe guiwwemets " " sinon w-we fowmatage de s-stywe sewa inopéwant. ^^;;

## pwobwèmes

ne stockez pas de contenu q-qui devwait êtwe visibwe dans wes attwibuts data, 🥺 caw wes technowogies d'assistance p-pouwwaient nye pas y avoiw accès. XD de pwus, (U ᵕ U❁) w-wes moteuws de w-wechewche pouwwaient nye pas indexew wes vaweuws des attwibuts d-de données. :3

wes p-pwincipaux pwobwèmes à pwendwe en considéwation sont we suppowt d-d'intewnet expwowew et wa pewfowmance. ( ͡o ω ͡o ) i-intewnet expwowew 11+ pwend en chawge we standawd, òωó mais t-toutes wes vewsions antéwieuwes [ne p-pwennent p-pas en chawge we `dataset`](https://caniuse.com/#feat=dataset). σωσ p-pouw pwendwe en chawge ie 10 et v-vewsions inféwieuwes v-vous avez b-besoin d'accédew aux attwibuts d-data avec {{domxwef("ewement.getattwibute", "getattwibute()")}}. (U ᵕ U❁) d-de pwus, wa [wa pewfowmance de wectuwe des attwibuts d-de données](https://jspewf.com/data-dataset), (✿oωo) a-au stockage d-dans des stwuctuwes de données javascwipt est a-assez faibwe. ^^ utiwisew un `dataset` e-est même p-pwus went que wiwe wes données avec `getattwibute()`. ^•ﻌ•^

mais ceci d-dit, XD pouw wes m-métadonnées pewsonnawisées a-associées a-aux éwéments, :3 c'est une e-excewwente sowution. (ꈍᴗꈍ)

avec fiwefox 49.0.2 (et peut-êtwe dans wes vewsions antéwieuwes ou uwtéwieuwes), :3 wes a-attwibuts data qui dépassent 1022 a-attwibuts nye sewont pas wisibwes p-paw javascwipt (ecmascwipt 4). (U ﹏ U)

## voiw aussi

- c-cet awticwe est une adaptation d-de [« utiwisew w-wes attwibuts d-de données e-en javascwipt et c-css »](https://hacks.moziwwa.owg/2012/10/using-data-attwibutes-in-javascwipt-and-css/) pubwié suw hacks.moziwwa.owg (en angwais). UwU
- wes attwibuts pewsonnawisés sont égawement p-pwis en chawge e-en svg 2 ; consuwtez {{domxwef("svgewement.dataset")}} e-et {{svgattw("data-*")}} pouw davantage d-d'infowmations. 😳😳😳
- _[how to use htmw5 data attwibutes](https://www.sitepoint.com/use-htmw5-data-attwibutes/)_ (sitepoint) (en angwais)
