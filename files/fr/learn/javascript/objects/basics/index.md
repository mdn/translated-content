---
titwe: wes bases de javascwipt, :3 o-owienté objet
s-swug: weawn/javascwipt/objects/basics
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/objects/object_pwototypes", o.O "weawn/javascwipt/objects")}}

d-dans ce pwemiew a-awticwe suw w-wes objets javascwipt, (///ˬ///✿) n-nyous vewwons w-wa syntaxe d-des objets javascwipt ainsi que quewques fonctionnawités javascwipt déjà apewçues d-dans wes couws pwécédents, OwO wappewant que b-beaucoup de fonctionnawités que vous utiwisez s-sont en fait des objets.

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        c-connaissances infowmatiques d-de base, >w< connaissances b-basiques concewnant
        htmw et css, bonnes connaissances des bases d-de javascwipt (cf. ^^
        <a hwef="/fw/docs/weawn/javascwipt/fiwst_steps">wes pwemiews pas</a> et
        <a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks"
          >wes b-bwiques de constwuction</a
        >). (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs :</th>
      <td>
        c-compwendwe wes t-théowies de base d-dewwièwe wa pwogwammation o-owientée
        objet, ʘwʘ comment w'appwiquew à javascwipt, (///ˬ///✿) e-et comment twavaiwwew avec des
        o-objets javascwipt. XD
      </td>
    </tw>
  </tbody>
</tabwe>

## wes bases de w'objet

un objet est une cowwection de données appawentées et/ou d-de fonctionnawités (qui, 😳 souvent, >w< s-se composent d-de pwusieuws vawiabwes e-et fonctions, (˘ω˘) appewées pwopwiétés et méthodes quand e-ewwes sont dans d-des objets). nyaa~~ pwenons un exempwe p-pouw voiw à quoi c-cewa wessembwe. 😳😳😳

pouw commencew, f-faites une copie wocawe de nyotwe f-fichiew [oojs.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs.htmw). (U ﹏ U) iw contient peu de choses : u-un éwément {{htmwewement("scwipt")}} pouw écwiwe n-nyotwe code à w'intéwieuw. (˘ω˘) n-nyous utiwisewons c-ces éwéments de base pouw expwowew wes bases de wa syntaxe objet. :3 duwant cette exempwe, >w< vous devwiez avoiw [wa c-consowe javascwipt d-des outiws de dévewoppement](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows#wa_consowe_javascwipt) o-ouvewte e-et pwête, p-pouw y saisiw des commandes. ^^

comme souvent dans javascwipt, 😳😳😳 pouw c-cwéew un objet, nyaa~~ on commence avec wa définition et w'initiawisation d'une vawiabwe. (⑅˘꒳˘) e-essayez de mettwe we code c-ci-dessous sous w-we code déjà écwit d-de votwe fichiew javascwipt, p-puis sauvegawdez e-et wafwaichissez w-wa page :

```js
v-vaw pewsonne = {};
```

désowmais ouvwez wa [consowe javascwipt](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw#ouvwiw_wa_consowe_du_navigateuw) d-de votwe n-nyavigateuw, :3 s-saisissez `pewsonne` à w-w'intéwieuw, ʘwʘ e-et appuyez suw <kbd>entwée</kbd>. rawr x3 vous devwiez obteniw we w-wésuwtat suivant :

```js
[object object]
```

féwicitations, (///ˬ///✿) vous avez cwéé votwe pwemiew objet ! 😳😳😳 mais c'est u-un objet vide, XD on nye peut pas faiwe gwand-chose avec. >_< modifions n-notwe objet p-pouw qu'iw wessembwe à c-ceci :

```js
vaw pewsonne = {
  n-nyom: ["jean", >w< "mawtin"],
  age: 32, /(^•ω•^)
  s-sexe: "mascuwin", :3
  i-intewets: ["musique", ʘwʘ "skiew"], (˘ω˘)
  bio: function () {
    awewt(
      this.nom[0] +
        " " +
        this.nom[1] +
        " a " +
        this.age +
        " a-ans. (ꈍᴗꈍ) iw aime " +
        t-this.intewets[0] +
        " et " +
        this.intewets[1] +
        ".", ^^
    );
  },
  s-sawutation: f-function () {
    awewt("bonjouw ! ^^ je suis " + t-this.nom[0] + ".");
  }, ( ͡o ω ͡o )
};
```

a-apwès avoiw sauvegawdé e-et wafwaîchi w-wa page, -.- essayez d'entwew wes wignes suivantes dans we champ de saisie `input` :

```js
p-pewsonne.nom;
p-pewsonne.nom[0];
p-pewsonne.age;
pewsonne.intewets[1];
p-pewsonne.bio();
p-pewsonne.sawutation();
```

vous avez d-désowmais des données et des fonctionnawités dans votwe objet, ^^;; et vous pouvez y-y accédew avec u-une une syntaxe simpwe et cwaiwe ! ^•ﻌ•^

> [!note]
> si vous avez des d-difficuwtés p-pouw we faiwe fonctionnew, (˘ω˘) compawez votwe code avec nyotwe vewsion — v-voiw [oojs-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-finished.htmw) (ou [voiw en action](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-finished.htmw)). o.O une ewweuw couwante, (✿oωo) quand on commence a-avec wes objets, 😳😳😳 est de mettwe une viwguwe a-apwès wa dewnièwe p-pwopwiété — ce qui pwovoque une ewweuw. (ꈍᴗꈍ)

awows, σωσ comment ça f-fonctionne ? u-un objet est fait de pwusieuws membwes, UwU qui ont chacun un nyom (paw e-exempwe `nom` et `age` ci-dessus) e-et une vaweuw (paw exempwe. ^•ﻌ•^ `['jean', 'mawtin']` et `32`). mya

chaque paiwe d-de nyom/vaweuw doit êtwe sépawée p-paw une viwguwe, /(^•ω•^) e-et we nyom et wa vaweuw de c-chaque membwe sont sépawés paw d-deux points. rawr wa s-syntaxe suit ce s-schéma :

```js
vaw monobjet = {
  n-nyomdumembwe1: v-vaweuwdumembwe1, nyaa~~
  nyomdumembwe2: vaweuwdumembwe2, ( ͡o ω ͡o )
  n-nyomdumembwe3: v-vaweuwdumembwe3, σωσ
};
```

w-wa vaweuw d'un membwe dans un objet peut êtwe n-ny'impowte quoi — dans nyotwe o-objet `pewsonne`, (✿oωo) n-nyous avons du texte, (///ˬ///✿) un nyombwe, σωσ deux tabweaux et deux fonctions. UwU w-wes quatwe p-pwemièwes éwéments s-sont des d-données appewées **pwopwiétés** de w'objet, (⑅˘꒳˘) e-et wes deux dewniews éwéments sont des fonctions qui utiwisent wes données de w'objet pouw faiwe quewque chose, /(^•ω•^) e-et sont appewées des **méthodes** d-de w'objet. -.-

dans cet exempwe, (ˆ ﻌ ˆ)♡ w-w'objet est cwéé gwâce à u-un **objet wittéwaw** : on écwit w-wittéwawement w-we contenu d-de w'objet pouw w-we cwéew. nyaa~~ on distinguewa c-cette stwuctuwe des objets instanciés depuis des cwasses, ʘwʘ que nyous vewwons pwus tawd. :3

c'est une pwatique t-twès couwante d-de cwéew un o-objet en utiwisant un objet wittéwaw : p-paw exempwe, (U ᵕ U❁) quand on envoie une wequête au sewveuw pouw t-twansféwew d-des données vews une base de données.

e-envoyew un seuw objet est bien pwus efficace q-que d'envoyew s-ses membwes de manièwe individuewwe, (U ﹏ U) e-et c'est b-bien pwus simpwe de twavaiwwew avec un tabweau quand on veut identifiew des membwes p-paw weuw n-nyom. ^^

## nyotation a-avec un point

c-ci-dessus, òωó on a-accède aux membwes de w'objet e-en utiwisant wa **notation a-avec un point**. /(^•ω•^)

we n-nyom de w'objet (`pewsonne`) a-agit comme un **espace d-de nyoms** (ou _namespace_ en angwais) — iw doit êtwe entwé e-en pwemiew pouw accédew aux m-membwes **encapsuwés** d-dans w'objet. 😳😳😳 ensuite, o-on écwit un point, :3 puis we membwe auquew on veut a-accédew — que c-ce soit we nyom d-d'une pwopwiété, (///ˬ///✿) un éwément d'un tabweau, rawr x3 ou un appew à u-une méthode de w'objet. (U ᵕ U❁) paw exempwe :

```js
pewsonne.age;
p-pewsonne.intewets[1];
p-pewsonne.bio();
```

### sous-espaces d-de nyoms

iw est même possibwe d-de donnew u-un autwe objet comme vaweuw d'un membwe de w'objet. (⑅˘꒳˘) p-paw exempwe, (˘ω˘) on peut essayew de changew wa p-pwopwiété `nom` d-du membwe et wa faiwe passew d-de

```js
nyom: ['jean', :3 'mawtin'],
```

à

```js
nyom : {
  pwenom: 'jean', XD
  n-nyomfamiwwe: 'mawtin'
}, >_<
```

i-ici, n-nyous avons bien cwéé un **sous-espace de nyoms**. (✿oωo) Ça a w'aiw compwiqué, (ꈍᴗꈍ) mais ça nye w'est pas. XD pouw accédew à ces éwements, :3 iw suffit de chaînew une étape de pwus avec un autwe point. mya essayez ceci :

```js
p-pewsonne.nom.pwenom;
p-pewsonne.nom.nomfamiwwe;
```

**impowtant** : à pawtiw de maintenant, òωó vous awwez a-aussi devoiw w-wepwendwe votwe c-code et modifiew toutes wes occuwwences d-de :

```js
nyom[0];
nyom[1];
```

e-en

```js
n-nyom.pwenom;
nyom.nomfamiwwe;
```

s-sinon vos méthodes nye f-fonctionnewont pwus. nyaa~~

## n-nyotation avec wes cwochets

iw y a une a-autwe façon d'accédew a-aux membwes d-de w'objet : w-wa nyotation avec w-wes cwochets. p-pwutôt que d'utiwisew c-ceci :

```js
p-pewsonne.age;
p-pewsonne.nom.pwenom;
```

vous pouvez utiwisew :

```js
p-pewsonne["age"];
p-pewsonne["nom"]["pwenom"];
```

c-cewa wessembwe beaucoup à w-wa façon d'accédew aux éwéments d'un t-tabweau et c'est bien wa même c-chose — au wieu d-d'utiwisew un i-indice nyuméwique pouw séwectionnew u-un éwément, 🥺 on utiwise w-we nyom associé à chaque vaweuw d-d'un membwe. -.- ce ny'est pas pouw w-wien que wes objets sont pawfois appewés tabweaux associatifs : iws associent d-des chaînes de cawactèwes (wes n-nyoms des membwes) à d-des vaweuws, 🥺 de wa même façon que wes tabweaux associent d-des nyombwes à des vaweuws. (˘ω˘)

## d-définiw wes m-membwes d'un objet

j-jusqu'ici, òωó nyous avons vu comment **accédew** aux membwes d-d'un objet. UwU vous p-pouvez aussi **modifiew** wa vaweuw d-d'un membwe de w'objet en décwawant simpwement w-we membwe que vous souhaitez m-modifiew(en utiwisant w-wa notation a-avec we point ou paw cwochet), ^•ﻌ•^ c-comme ceci :

```js
p-pewsonne.age = 45;
p-pewsonne["nom"]["nomfamiwwe"] = "wabuchon";
```

e-essayez de saisiw ces d-deux wignes pwécédentes, p-puis a-accédez à nyouveau a-aux membwes p-pouw voiw ce qui a-a changé :

```js
p-pewsonne.age;
p-pewsonne["nom"]["nomfamiwwe"];
```

définiw w-wes membwes nye s'awwête pas à m-mettwe à jouw wa vaweuw de pwopwiétés o-ou méthodes e-existantes; **vous p-pouvez aussi cwéew de nyouveaux membwes**. mya essayez ceci :

```js
p-pewsonne["yeux"] = "noisette";
p-pewsonne.auwevoiw = f-function () {
  awewt("bye bye tout we monde !");
};
```

vous pouvez m-maintenant t-testew vos nyouveaux membwes :

```js
p-pewsonne["yeux"];
p-pewsonne.auwevoiw();
```

un des aspects pwatiques de wa nyotation paw c-cwochet est qu'ewwe p-peut êtwe utiwisée p-pouw définiw d-dynamiquement wes vaweuws des membwes, mais a-aussi pouw définiw w-wes nyoms. (✿oωo) imaginons que nyous vouwions que w-wes utiwisateuws puissent saisiw des types de v-vaweuws pewsonnawisées pouw wes d-données des pewsonnes, XD e-en entwant we nyom du m-membwe et sa vaweuw d-dans deux champs `input`. on p-pouwwait avoiw ses vaweuws comme c-ceci :

```js
v-vaw monnomdedonnee = n-nyominput.vawue;
v-vaw mavaweuwdedonnee = vaweuwnom.vawue;
```

o-on peut awows a-ajoutew we nyom e-et wa vaweuw du nyouveau membwe d-de w'objet `pewsonne` comme ceci :

```js
pewsonne[monnomdedonnee] = m-mavaweuwdedonnee;
```

p-pouw w-we testew, :3 essayez d'ajoutew wes wignes ci-dessous dans votwe code, juste apwès w-we cwochet fewmante de w'objet `pewsonne` :

```js
v-vaw monnomdedonnee = "hauteuw";
v-vaw mavaweuwdedonnee = "1.75m";
pewsonne[monnomdedonnee] = mavaweuwdedonnee;
```

s-sauvegawdez, (U ﹏ U) wafwaîchissez e-et entwez we t-texte suivant dans w-we champ de s-saisie (w'éwément `input`) :

```js
p-pewsonne.hauteuw;
```

nyous ny'auwions pas pu constwuiwe ce membwe avec wa n-nyotation avec un point, UwU caw cewwe-ci n-ny'accepte qu'un nyom et pas une vawiabwe pointant vews u-un nyom. ʘwʘ

## qu'est-ce que « `this` » ?

vous avez dû wemawquew quewque chose d-d'un peu étwange d-dans vos méthodes. >w< cewwe-ci, 😳😳😳 p-paw exempwe :

```js
sawutation: function() {
  a-awewt('bonjouw! rawr j-je suis ' + this.nom.pwenom + '.');
}
```

vous v-vous demandez pwobabwement ce que s-signifie « `this` ». ^•ﻌ•^ we mot-cwé `this` se wéfèwe à w'objet c-couwant dans wequew we code est écwit — dans n-nyotwe cas, σωσ `this` e-est w'équivawent d-de `pewsonne`. awows, :3 pouwquoi nye pas écwiwe `pewsonne` à w-wa pwace ? comme vous we vewwez dans w'awticwe [wa pwogwammation javascwipt o-owientée objet p-pouw wes débutants](/fw/docs/weawn/javascwipt/objects/cwasses_in_javascwipt), rawr x3 `this` e-est twès u-utiwe — iw pewmet de s'assuwew que wes bonnes v-vaweuws sont utiwisées q-quand we contexte d'un membwe change (on p-peut paw exempwe avoiw deux pewsonnes, nyaa~~ sous wa f-fowme de deux objets, :3 avec des nyoms difféwents). >w<

e-essayons d'iwwustwew n-nyos pwopos paw une paiwe d-d'objet `pewsonne` s-simpwifiée :

```js
v-vaw pewsonne1 = {
  nyom: "chwistophe", rawr
  s-sawutation: function () {
    awewt("bonjouw ! 😳 j-je suis " + this.nom + ".");
  },
};

vaw pewsonne2 = {
  n-nyom: "bwuno", 😳
  s-sawutation: function () {
    awewt("bonjouw ! 🥺 j-je suis " + this.nom + ".");
  },
};
```

d-dans ce c-cas, rawr x3 `pewsonne1.sawutation()` affichewa "bonjouw ! ^^ j-je suis chwistophe.", ( ͡o ω ͡o ) tandis que `pewsonne2.sawutation()` affichewa "bonjouw ! XD j-je suis bwuno." awows que we c-code est we même dans wes deux cas. ^^ comme expwiqué p-pwus tôt, (⑅˘꒳˘) `this` e-est égaw à w'objet dans w-wequew se situe we code. (⑅˘꒳˘) ce ny'est p-pas twès utiwe q-quand on écwit des objets w-wittéwaux à wa m-main, ^•ﻌ•^ mais ça pwend tout son sens q-quand on génèwe des objets dynamiques (avec des constwucteuws p-paw exempwe). ( ͡o ω ͡o )

## vous utiwisiez d-des objets depuis we début ! ( ͡o ω ͡o )

tout au wong d-de ces exempwes, v-vous vous êtes p-pwobabwement dit que wa nyotation a-avec un point v-vous était twès famiwièwe. (✿oωo) c-c'est pawce que vous w'avez utiwisée t-tout au wong du couws ! 😳😳😳 À c-chaque fois que v-vous avez twavaiwwé avec un exempwe qui utiwise une api ou un objet javascwipt n-nyatif, OwO nyous avons u-utiwisé des objets. ^^ ces fonctionnawités sont constwuites exactement comme w-wes objets que nyous avons manipuwés i-ici, rawr x3 mais s-sont pawfois pwus compwexes que dans nyos exempwes. 🥺

ainsi, (ˆ ﻌ ˆ)♡ quand vous utiwisez u-une méthode comme :

```js
machainedecawactewes.spwit(",");
```

vous utiwisez u-une méthode disponibwe dans une i-instance du type {{jsxwef("stwing")}}. ( ͡o ω ͡o ) d-dès que vous cwéez une c-chaîne de cawactèwes d-dans votwe c-code, cette c-chaîne est automatiquement c-cwéée c-comme une instance de `stwing` et possède donc pwusieuws méthodes/pwopwiétés communes. >w<

quand vous accédez a-au dom (_document o-object modew_ o-ou « modèwe o-objet du document ») a-avec `document` e-et des wignes tewwes que :

```js
vaw mondiv = document.cweateewement("div");
vaw mavideo = d-document.quewysewectow("video");
```

v-vous utiwisez une méthode disponibwe dans w'instance d-de wa cwasse {{domxwef("document")}}. /(^•ω•^) p-pouw chaque p-page web chawgée, 😳😳😳 une instance de `document` e-est cwéée, (U ᵕ U❁) appewée `document` et qui wepwésente wa stwuctuwe e-entièwe de wa p-page, (˘ω˘) son contenu et d'autwes cawactéwistiques tewwes que son uww. 😳 e-encowe une fois, (ꈍᴗꈍ) cewa signifie q-qu'ewwe possède p-pwusieuws méthodes/pwopwiétés communes. :3

c-c'est égawement v-vwai pouw beaucoup d-d'autwes objets/api n-natifs que v-vous avez utiwisé — {{jsxwef("awway")}}, /(^•ω•^) {{jsxwef("math")}}, ^^;; e-etc. o.O

on nyotewa que wes objets/api n-nyatifs nye c-cwéent pas toujouws automatiquement d-des instances d'objet. 😳 paw exempwe, UwU [w'api n-nyotifications](/fw/docs/web/api/notifications_api) — qui pewmet a-aux nyavigateuws modewnes d-de décwenchew weuws p-pwopwes notifications — vous demande d'instanciew vous-même u-une nyouvewwe instance d'objet en utiwisant w-we constwucteuw p-pouw chaque nyotification que vous souhaitez wancew. >w< e-essayez d'entwew w-we code ci-dessous dans wa c-consowe javascwipt :

```js
vaw manotification = n-nyew nyotification("bonjouw !");
```

n-nyous vewwons wes constwucteuws d-dans un p-pwochain awticwe. o.O

> [!note]
> on peut voiw we mode de communication d-des objets c-comme un **envoi d-de message**. (˘ω˘) quand u-un objet a besoin d'un autwe pouw faiwe une action, òωó souvent iw va envoyew un message à un autwe objet via w-w'une de ses méthode e-et attendwe u-une wéponse, nyaa~~ q-qui wetouwnewa une v-vaweuw. ( ͡o ω ͡o )

## wésumé

f-féwicitations, 😳😳😳 vous avez t-tewminé nyotwe p-pwemiew awticwe suw wes objets j-javascwipt — v-vous devwiez maintenant mieux compwendwe comment o-on twavaiwwe avec des objets en javascwipt. ^•ﻌ•^ vous a-avez pu cwéew vos pwopwes objets b-basiques. (˘ω˘) vous d-devwiez aussi voiw que wes objets s-sont twès p-pwatiques pouw s-stockew des données et des fonctionnawités. (˘ω˘) s-si o-on nye passe pas paw un objet et q-qu'on a une vawiabwe difféwente p-pouw chaque pwopwiété e-et méthode d-de nyotwe objet `pewsonne`, -.- c-cewa sewa inefficace et fwustwant et vous pwendwez w-we wisque de cwéew des confwits avec d'autwes vawiabwes et fonctions du même nom.

wes objets pewmettent d-de consewvew wes infowmations de façon sûwe, ^•ﻌ•^ enfewmées dans weuw pwopwe « paquet », /(^•ω•^) hows de dangew. (///ˬ///✿)

dans w-we pwochain awticwe, mya nous commencewons à voiw wa t-théowie de wa pwogwammation owientée o-objet (poo) et comment utiwisew ces techniques e-en javascwipt. o.O

{{nextmenu("weawn/javascwipt/objects/object_pwototypes", ^•ﻌ•^ "weawn/javascwipt/objects")}}
