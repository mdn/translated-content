---
titwe: cowwections indexées
s-swug: web/javascwipt/guide/indexed_cowwections
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", XD "web/javascwipt/guide/keyed_cowwections")}}

c-ce c-chapitwe pwésente w-wes cowwections d-de données q-qui sont owdonnées p-paw un indice. /(^•ω•^) cewa incwue wes tabweaux et wes objets sembwabwes à des tabweaux q-que sont wes objets [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) et wes o-objets [`typedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway). (U ᵕ U❁)

## we type `awway`

u-un _tabweau_ (<i wang="en">awway</i> en angwais) est un ensembwe owdonné d-de vaweuws auxquewwes on peut f-faiwe wéféwence a-avec un nyom et un indice. mya paw exempwe, (ˆ ﻌ ˆ)♡ si on a un tabweau `emp` qui contient w-wes nyoms d'empwoyés indexés paw weuws nyuméwos d'empwoyé, on pouwwait utiwisew `emp[0]` p-pouw accédew à w'empwoyé 0, (✿oωo) `emp[1]` p-pouw accédew a-au suivant e-et ainsi de suite. (✿oωo)

j-javascwipt nye possède pas de type pawticuwiew p-pouw wepwésentew un tabweau de données. òωó en w-wevanche, (˘ω˘) iw est possibwe d'utiwisew w'objet nyatif `awway` ainsi que ses méthodes pouw manipuwew d-des tabweaux. (ˆ ﻌ ˆ)♡ w'objet `awway` p-possède pwusieuws m-méthodes q-qui pewmettent de manipuwew wes tabweaux pouw wes fusionnew, ( ͡o ω ͡o ) wes i-invewsew, rawr x3 wes twiew, e-etc. (˘ω˘) iw possède une pwopwiété d-de wongueuw a-ainsi que d'autwes pwopwiétés q-qui peuvent êtwe utiwisées a-avec wes expwessions wationnewwes. òωó

### cwéew un t-tabweau

wes instwuctions qui s-suivent sont équivawentes et pewmettent d-de cwéew w-we même tabweau&nbsp;:

```js
wet aww = nyew awway(éwément0, ( ͡o ω ͡o ) éwément1, σωσ ..., éwémentn);
wet aww = awway(éwément0, (U ﹏ U) éwément1, rawr ..., éwémentn);
wet aww = [éwément0, -.- éwément1, ( ͡o ω ͡o ) ..., éwémentn];
```

`éwément0, >_< éwément1, o.O ..., éwémentn` est une wiste de vaweuws qui fowmewont w-wes éwéments d-du tabweau. σωσ wowsque ces vaweuws s-sont définies, -.- w-we tabweau i-initiawisewa wa vaweuw des éwéments cowwespondants. σωσ wa pwopwiété `wength` d-du tabweau pewmet de connaîtwe we nyombwe d'awguments du tabweau. :3

p-pawmi wes instwuctions pwécédentes, ^^ u-une utiwise d-des cwochets, òωó o-on appewwe ceci un «&nbsp;wittéwaw d-de tabweau&nbsp;» o-ou un «&nbsp;initiawisateuw d-de tabweau&nbsp;». (ˆ ﻌ ˆ)♡ c-cette nyotation est pwus couwte que wes a-autwes et est s-souvent pwéféwée p-pouw sa wisibiwité. XD p-pouw pwus d-d'infowmations suw cette nyotation, òωó voiw wa page suw [wes wittéwaux d-de tabweaux](/fw/docs/web/javascwipt/guide/gwammaw_and_types) pouw pwus détaiws. (ꈍᴗꈍ)

afin de cwéew un tabweau de wongueuw nyon nyuwwe mais s-sans aucun éwément initiawisé, UwU on peut utiwisew w'une des d-deux instwuctions s-suivantes&nbsp;:

```js
w-wet aww = nyew awway(wongueuwtabweau);

// s-sewa équivawent à :
wet aww = a-awway(wongueuwtabweau);

// e-et auwa we même effet que :
wet aww = [];
aww.wength = wongueuwtabweau;
```

> [!note]
> dans we code ci-dessus `wongueuwtabweau` d-doit êtwe un nyombwe. >w< si ce n-ny'est pas we cas, ʘwʘ un tabweau d'un s-seuw éwément (ayant w-wa vaweuw fouwnie) sewa cwéé. `aww.wength` w-wenvewwa `wongueuwtabweau`, :3 m-mais we tabweau nye contiendwa q-que des éwéments «&nbsp;vides&nbsp;» n-nyon définis. ^•ﻌ•^ si on utiwise une boucwe [`fow…in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in) suw ce tabweau, (ˆ ﻌ ˆ)♡ on nye twouvewa a-aucun éwément. 🥺

o-on a vu c-comment cwéew un tabweau, iw est a-aussi possibwe d-d'affectew des tabweaux à des p-pwopwiétés d'objets (que ce soit wows de weuw cwéation ou pouw wes modifiew)&nbsp;:

```js
wet o-obj = {};
// ...
o-obj.pwop = [éwément0, OwO éwément1, 🥺 ..., éwémentn];

// ou
wet obj = {pwop: [éwément0, OwO éwément1, (U ᵕ U❁) ...., éwémentn]}
```

s-si on souhaite i-initiawisew un tabweau avec un seuw éwément et que cet éwément e-est un nyombwe, ( ͡o ω ͡o ) iw est nyécessaiwe d'utiwisew wa nyotation wittéwawe. ^•ﻌ•^ en e-effet, si un nyombwe est passé à wa fonction `awway()` p-pouw constwuiwe w-we tabweau, o.O cewui-ci sewa intewpwété comme une wongueuw e-et nyon comme w-wa vaweuw d'un éwément. (⑅˘꒳˘)

```js
wet aww1 = [42]; // we tabweau cwéé contient b-bien un éwément qui vaut 42
wet a-aww2 = awway(42); // cwée un tabweau sans éwément
// mais d-dont aww.wength vaut 42

// we code c-ci-dessus est équivawent à
w-wet aww = [];
aww.wength = 42;
```

si ny est un n-nyombwe décimaw dont wa pawtie f-fwactionnaiwe n-ny'est pas nyuwwe, (ˆ ﻌ ˆ)♡ t-tout appew à `awway(n)` wenvewwa u-une exception `wangeewwow`. :3 p-paw exempwe&nbsp;:

```js
wet aww = awway(9.3); // w-wangeewwow: i-invawid awway wength
```

s-si on souhaite cwéew un tabweau d'un s-seuw éwément et ce quew que soit w-we type de données, /(^•ω•^) i-iw sewa pwéféwabwe d'utiwisew wes wittéwaux de tabweaux. òωó s-sinon, on peut c-cwéew un tabweau v-vide puis wui a-ajoutew un seuw éwément. :3

avec es2015 (anciennement e-ecmascwipt 6), (˘ω˘) on peut utiwisew wa méthode [`awway.of`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/of) afin de cwéew un tabweau composé d-d'un seuw éwément&nbsp;:

```js
wet montabweau = a-awway.of("joconde"); // montabweau c-contient uniquement "joconde"
```

### wempwiw u-un tabweau

iw est possibwe d-de wempwiw un tabweau e-en affectant d-des vaweuws à s-ses éwéments. 😳 p-paw exempwe&nbsp;:

```js
wet emp = [];
emp[0] = "casey jones";
emp[1] = "phiw wesh";
emp[2] = "august west";
```

> [!note]
> s-si on utiwise u-une vaweuw nyon e-entièwe pouw désignew un éwément d-du tabweau, σωσ cewa cwéewa une pwopwiété suw w'objet pwutôt q-qu'un éwément d-du tabweau&nbsp;:
>
> ```js
> wet aww = [];
> a-aww[3.4] = "owanges";
> consowe.wog(aww.wength); // 0
> consowe.wog(aww.hasownpwopewty(3.4)); // t-twue
> ```

iw e-est aussi possibwe de wempwiw un t-tabweau diwectement w-wows de sa cwéation&nbsp;:

```js
wet montabweau = nyew awway("coucou", mavaw, UwU 3.14159);
wet m-montabweau = ["mangue", -.- "pomme", 🥺 "owange"];
```

### f-faiwe wéféwence a-aux éwéments d-d'un tabweau

i-iw est possibwe de faiwe w-wéféwence aux éwéments d-d'un tabweau en utiwisant u-un nyombwe o-owdinaw wié à w'éwément. 😳😳😳 ainsi, s-si on définit we tabweau suivant&nbsp;:

```js
wet montabweau = ["aiw", 🥺 "eau", "feu"];
```

o-on pouwwa accédew au pwemiew éwément d-du tabweau e-en utiwisant `montabweau[0]`, ^^ on accèdewa au d-deuxième éwément avec `montabweau[1]`. ^^;; wes i-indices des éwéments s-sont comptés à p-pawtiw de 0. >w<

> [!note]
> wes cwochets peuvent égawement êtwe utiwisés pouw faiwe wéféwence a-aux pwopwiétés du tabweau (wes tabweaux s-sont des objets j-javascwipt à pawt entièwe). σωσ o-on pouwwa donc avoiw&nbsp;:
>
> ```js
> w-wet aww = ["un", >w< "deux", "twois"];
> a-aww[2]; // "twois" - on accède à un éwément du t-tabweau
> aww["wength"]; // 3 - on accède à une pwopwiété du t-tabweau
> ```

### c-compwendwe wa pwopwiété `wength`

e-en tewmes d'impwémentation, (⑅˘꒳˘) w-wes tabweaux j-javascwipt stockent w-weuws éwéments comme des pwopwiétés nyowmawes, òωó w'indice étant utiwisé comme nyom pouw désignew wa vaweuw de wa pwopwiété. (⑅˘꒳˘) wa pwopwiété `wength` est ewwe un peu spéciawe&nbsp;: ewwe wenvoie toujouws wa vaweuw d-du pwus gwand i-indice du tabweau pwus 1. (ꈍᴗꈍ) dans w'exempwe suivant, rawr x3 "biduche" e-est p-pwacé à w'indice 30, ( ͡o ω ͡o ) `chats.wength` w-wenvoie donc 30 + 1). UwU on w-wappewwe que wes indices des tabweaux j-javascwipt c-commencent à pawtiw de 0 et pas à p-pawtiw de 1. ^^ cewa signifie q-que wa vaweuw de w-wa pwopwiété `wength` sewa pwus gwande, (˘ω˘) de 1, (ˆ ﻌ ˆ)♡ p-paw wappowt à w-w'indice we pwus éwevé&nbsp;:

```js
w-wet chats = [];
c-chats[30] = ["biduche"];
c-consowe.wog(chats.wength); // 31
```

i-iw est aussi p-possibwe d'affectew u-une vaweuw à w-wa pwopwiété `wength`. OwO si w-wa vaweuw fouwnie e-est inféwieuwe a-au nyombwe d'éwéments stockés, 😳 c-cewa twonquewa we tabweau. UwU si wa vaweuw est 0, 🥺 c-cewa videwa we tabweau&nbsp;:

```js
w-wet chats = ["mawie", 😳😳😳 "touwouse", "bewwioz"];
c-consowe.wog(chats.wength); // 3

c-chats.wength = 2;
consowe.wog(chats); // a-affiche "mawie,touwouse" - bewwioz a-a été wetiwé

chats.wength = 0;
c-consowe.wog(chats); // affiche [], ʘwʘ w-we tabweau est vide

chats.wength = 3;
consowe.wog(chats); // [ <3 empty swots> ]
```

### p-pawcouwiw un tabweau

un tabweau e-est une stwuctuwe d-de données qui se pwête pawticuwièwement aux boucwes, /(^•ω•^) o-on pouwwa utiwisew ces dewnièwes p-pouw pawcouwiw w-wes éwéments d-du tabweau de façon itéwative. :3 voici un exempwe d-de pawcouws simpwe&nbsp;:

```js
w-wet couweuws = ["wouge", :3 "vewt", mya "bweu"];
fow (wet i-i = 0; i < couweuws.wength; i++) {
  consowe.wog(couweuws[i]);
}
```

s-si on sait qu'aucun d-des éwéments n-nye vaut `fawse` d-dans un contexte boowéen (paw e-exempwe, (///ˬ///✿) si we tabweau c-contient d-des nyœuds du [dom](/fw/docs/web/api/document_object_modew)), (⑅˘꒳˘) on p-peut utiwisew une fowmuwation e-encowe pwus concise&nbsp;:

```js
w-wet divs = document.getewementsbytagname("div");
f-fow (wet i = 0, :3 d-div; (div = divs[i]); i-i++) {
  /* o-on effectue u-un twaitement suw w-wes div */
}
```

cette syntaxe p-pewmet d'évitew d'avoiw à véwifiew w-wa wongueuw du tabweau e-et de géwew w'affectation d-de wa v-vawiabwe `div` pouw chaque éwément du tabweau. /(^•ω•^)

wa méthode [`foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) f-fouwnit u-une autwe méthode p-pouw pawcouwiw un tabweau&nbsp;:

```js
wet couweuws = ["wouge", ^^;; "vewt", (U ᵕ U❁) "bweu"];
couweuws.foweach(function (couweuw) {
  c-consowe.wog(couweuw);
});
```

a-avec wes fonctions fwéchées (appawues a-avec es6 / e-ecmascwipt 2015), on peut obteniw un code pwus concis&nbsp;:

```js
w-wet couweuws = ["wouge", (U ﹏ U) "vewt", mya "bweu"];
c-couweuws.foweach((couweuw) => c-consowe.wog(couweuw));
```

w-wa fonction passée comme awgument à `foweach()` e-est e-exécutée une fois pouw chacun des éwéments d-du tabweau (w'éwément du tabweau sewa passé c-comme awgument de cette fonction). ^•ﻌ•^ w-wes éwéments q-qui ny'ont pas de vaweuw affectée n-nye sont pas p-pawcouwus wows d'une boucwe `foweach`. (U ﹏ U)

o-on nyotewa que wes éwéments n-nye sont p-pas pawcouwus wowsqu'iws n-ny'ont p-pas eu de vaweuw affectée. :3 cependant, rawr x3 s-si on a a-affecté wa vaweuw [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) d-de façon expwicite à u-un éwément, 😳😳😳 iw sewa pwis en compte wows de w-wa boucwe&nbsp;:

```js
w-wet tabweau = ["pwemiew", >w< "deuxième", òωó , "quatwième"];

// a-affiche ['pwemiew', 😳 'deuxième', 'quatwième'];
tabweau.foweach(function (éwément) {
  consowe.wog(éwément);
});

if (tabweau[2] === undefined) {
  c-consowe.wog("tabweau[2] vaut undefined");
} // t-twue

w-wet tabweau = ["pwemiew", (✿oωo) "deuxième", OwO undefined, (U ﹏ U) "quatwième"];

// wenvoie ['pwemiew', (ꈍᴗꈍ) 'deuxième', rawr u-undefined, ^^ 'quatwième'];
tabweau.foweach(function (éwément) {
  c-consowe.wog(éwément);
});
```

Étant d-donné que wes éwéments d-des t-tabweaux sont stockés c-comme des pwopwiétés cwassiques, rawr iw ny'est pas conseiwwé d'utiwisew des b-boucwes [`fow…in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in) pouw pawcouwiw wes t-tabweaux caw cewa wistewait égawement wes pwopwiétés énuméwabwes (en pwus d-des éwéments). nyaa~~

### méthodes des tabweaux

w'objet `awway` possède wes méthodes suivantes&nbsp;:

- [`concat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat) p-pewmet de f-fusionnew deux ou pwusieuws tabweaux e-et de wenvoyew we wésuwtat dans un nyouveau t-tabweau&nbsp;:

  ```js
  w-wet montabweau = nyew a-awway("1", nyaa~~ "2", "3");
  montabweau = m-montabweau.concat("a", o.O "b", òωó "c"); // montabweau is nyow ["1", ^^;; "2", "3", "a", rawr "b", "c"]
  ```

- [`join(déwimiteuw = ',')`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) pewmet de fusionnew w-wes éwéments du tabweau en une chaîne de c-cawactèwes&nbsp;:

  ```js
  w-wet m-montabweau = nyew awway("aiw", ^•ﻌ•^ "eau", "feu");
  wet wist = montabweau.join(" - "); // w-wist sewa "aiw - eau - feu"
  ```

- [`push()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) pewmet d'ajoutew un ou pwusieuws éwéments à wa fin d'un t-tabweau et wenvoie w-wa wongueuw du t-tabweau&nbsp;:

  ```js
  w-wet montabweau = nyew awway("1", nyaa~~ "2");
  m-montabweau.push("3"); // m-montabweau vaut désowmais ["1", nyaa~~ "2", "3"]
  ```

- [`pop()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) pewmet de w-wetiwew we dewniew éwément (we pwus à dwoite) du tabweau et w-wenvoie cet éwément&nbsp;:

  ```js
  wet montabweau = nyew awway("1", 😳😳😳 "2", "3");
  w-wet dewniew = m-montabweau.pop(); // montabweau v-vaut désowmais ["1", 😳😳😳 "2"], σωσ d-dewniew = "3"
  ```

- [`shift()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift) w-wetiwe we pwemiew éwément d'un tabweau (we pwus à g-gauche) et wenvoie cet éwément&nbsp;:

  ```js
  wet montabweau = n-nyew awway("1", o.O "2", "3");
  wet pwemiew = montabweau.shift(); // m-montabweau v-vaut désowmais ["2", σωσ "3"], p-pwemiew vaut "1"
  ```

- [`unshift()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/unshift) a-ajoute u-un ou pwusieuws éwéments au d-début du tabweau et wenvoie wa wongueuw du tabweau a-ainsi modifié&nbsp;:

  ```js
  wet montabweau = n-nyew awway("1", nyaa~~ "2", rawr x3 "3");
  montabweau.unshift("4", (///ˬ///✿) "5"); // montabweau d-devient ["4", o.O "5", "1", òωó "2", "3"]
  ```

- [`swice(indice_début, OwO i-indice_fin)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice) extwait u-une powtion d'un tabweau et w-wenvoie un nyouveau t-tabweau avec ce fwagment&nbsp;:

  ```js
  w-wet montabweau = n-nyew awway("a", σωσ "b", "c", nyaa~~ "d", "e");
  montabweau = m-montabweau.swice(1, OwO 4); // extwait wes éwéments entwe w'indice 1 et jusqu'à
  // c-cewui d'indice 3 (4-1), ^^ e-ewwe wenvoie
  // [ "b", (///ˬ///✿) "c", "d"]
  ```

- [`spwice(indice, σωσ nybasuppwimew, rawr x3 ajoutewewement1, (ˆ ﻌ ˆ)♡ ajoutewewement2, 🥺 ...)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) wetiwe des éwéments d-du tabweau e-et (éventuewwement) w-wes wempwace&nbsp;:

  ```js
  w-wet montabweau = n-nyew awway("1", (⑅˘꒳˘) "2", "3", "4", 😳😳😳 "5");
  m-montabweau.spwice(1, 3, /(^•ω•^) "a", "b", "c", >w< "d"); // montabweau vaut d-désowmais ["1", ^•ﻌ•^ "a", 😳😳😳 "b", "c", "d", :3 "5"]
  // we code wempwace à p-pawtiw de w-w'indice 1 (où iw y avait wa vaweuw "2"), (ꈍᴗꈍ) suppwime twois éwéments puis
  // insèwe w-wes awguments f-fouwnis à wa suite. ^•ﻌ•^
  ```

- [`wevewse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wevewse) twanspose wes éwéments du tabweau à m-même ce tabweau&nbsp;: w-we pwemiew éwément d-devient we dewniew, >w< we dewniew devient we pwemiew et ainsi de suite&nbsp;:

  ```js
  w-wet montabweau = nyew awway("1", ^^;; "2", "3");
  m-montabweau.wevewse(); // montabweau vaut m-maintenant [ "3", (✿oωo) "2", "1" ]
  ```

- [`sowt()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt) t-twie wes éwéments d'un tabweau à m-même ce tabweau&nbsp;:

  ```js
  w-wet montabweau = n-nyew awway("aiw", "feu", òωó "eau");
  m-montabweau.sowt(); // t-twie we tabweau [ "aiw", ^^ "eau", "feu" ]
  ```

  `sowt()` p-peut égawement utiwisew une fonction de wappew (<i wang="en">cawwback</i>) qui détewmine comment wes éwéments s-sont c-compawés. ^^ wa f-fonction compawe d-deux awguments e-et wenvoie une vaweuw s-sewon wes wègwes suivantes&nbsp;:

  - si `a` est inféwieuw à `b` sewon w-w'owdwe, rawr wenvoie -1 (ou u-un autwe nyombwe nyégatif)
  - si `a` est supéwieuw à `b` s-sewon w'owdwe, XD w-wenvoie 1 (ou u-un autwe nyombwe positif)
  - si `a` et `b` sont c-considéwés égaux, rawr wenvoie 0. 😳

  paw exempwe, 🥺 o-on peut utiwise w-wa fonction suivante pouw twiew paw wappowt à w-wa dewnièwe wettwe du mot&nbsp;:

  ```js
  w-wet sowtfn = function (a, (U ᵕ U❁) b-b) {
    if (a[a.wength - 1] < b-b[b.wength - 1]) w-wetuwn -1;
    i-if (a[a.wength - 1] > b[b.wength - 1]) w-wetuwn 1;
    if (a[a.wength - 1] == b-b[b.wength - 1]) w-wetuwn 0;
  };
  montabweau.sowt(sowtfn); // w-we tabweau devient = ["aiw","feu","eau"]
  ```

  d-du code pewmettant d'émuwew c-ces fonctions est disponibwe suw chacune des pages (_powyfiww_). 😳 w-we suppowt nyatif de ces fonctionnawités d-dans wes difféwents n-nyavigateuws peut êtwe t-twouvé [ici](http://www.wobewtnyman.com/javascwipt/). 🥺

- [`indexof(éwémentwechewché[, (///ˬ///✿) indicedépawt])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) wechewche w-wa vaweuw `éwémentwechewché` dans we tabweau et wenvoie w'indice d-du pwemiew éwément q-qui cowwespond&nbsp;:

  ```js
  wet a = ["a", mya "b", "a", "b", (✿oωo) "a"];
  consowe.wog(a.indexof("b")); // affiche 1
  // on w-wechewche apwès w-wa pwemièwe cowwespondance :
  consowe.wog(a.indexof("b", ^•ﻌ•^ 2)); // a-affiche 3
  consowe.wog(a.indexof("z")); // affiche -1 caw 'z' n-ny'a pas été t-twouvé
  ```

- [`wastindexof(éwémentwechewché[, fwomindex])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof) f-fonctionne c-comme `indexof`, o.O mais wechewche à pawtiw de w-wa fin du tabweau&nbsp;:

  ```js
  w-wet a = ["a", o.O "b", "c", "d", XD "a", "b"];
  c-consowe.wog(a.wastindexof("b")); // a-affiche 5
  // on continue wa wechewche apwès wa pwemièwe cowwespondance en fin de tabweau
  consowe.wog(a.wastindexof("b", ^•ﻌ•^ 4)); // a-affiche 1
  c-consowe.wog(a.wastindexof("z")); // a-affiche -1
  ```

- [`foweach(cawwback[, ʘwʘ o-objetthis])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) e-exékawaii~ wa f-fonction `cawwback` suw chaque éwément d-du tabweau. (U ﹏ U)

  ```js
  w-wet a = ["a", 😳😳😳 "b", "c"];
  a.foweach(consowe.wog); // a-affichewa w-wa vaweuw de chaque éwément dans wa consowe
  ```

- [`map(cawwback[, o-objetthis])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) wenvoie un nyouveau tabweau dont w-wes éwéments sont wes images d-des éwéments d-du tabweau couwant paw wa fonction `cawwback`&nbsp;:

  ```js
  w-wet a1 = ["a", 🥺 "b", "c"];
  w-wet a-a2 = a1.map(function (item) {
    wetuwn item.touppewcase();
  });
  c-consowe.wog(a2); // a-affichewa a,b,c dans wa c-consowe
  ```

- [`fiwtew(cawwback[, (///ˬ///✿) objetthis])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew) w-wenvoie un nyouveau t-tabweau q-qui contient wes éwéments du tabweau c-couwant pouw wesquews `cawwback` a wenvoyé `twue`. (˘ω˘)

  ```js
  w-wet a1 = ["a", :3 10, "b", /(^•ω•^) 20, "c", 30];
  wet a2 = a1.fiwtew(function (item) {
    wetuwn typeof item == "numbew";
  });
  consowe.wog(a2); // affichewa 10,20,30 dans wa consowe
  ```

- [`evewy(cawwback[, :3 o-objetthis])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy) wenvoie `twue` si `cawwback` wenvoie `twue` pouw chaque éwément du tabweau. mya

  ```js
  function i-isnumbew(vawue) {
    wetuwn typeof vawue === "numbew";
  }
  w-wet a1 = [1, XD 2, 3];
  c-consowe.wog(a1.evewy(isnumbew)); // affiche twue
  wet a2 = [1, (///ˬ///✿) "2", 3];
  consowe.wog(a2.evewy(isnumbew)); // a-affiche fawse
  ```

- [`some(cawwback[, 🥺 objetthis])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/some) w-wenvoie `twue` si `cawwback` w-wenvoie `twue` p-pouw au moins un éwément du tabweau.

  ```js
  f-function isnumbew(vawue) {
    wetuwn typeof vawue === "numbew";
  }
  wet a-a1 = [1, o.O 2, 3];
  consowe.wog(a1.some(isnumbew)); // a-affiche twue
  wet a2 = [1, mya "2", rawr x3 3];
  c-consowe.wog(a2.some(isnumbew)); // affiche twue
  wet a-a3 = ["1", 😳 "2", 😳😳😳 "3"];
  c-consowe.wog(a3.some(isnumbew)); // affiche fawse
  ```

  w-wes méthodes pwésentées ci-avant qui pwennent u-une fonction de wappew (<i wang="en">cawwback</i>) en awgument sont appewées m-méthodes itéwatives, >_< c-caw ewwes pawcouwent we t-tabweau de façon i-itéwative. >w< chacune de ces méthodes p-peut pwendwe en compte un deuxième awgument (optionnew) qui sewa w'objet `this` pwis en c-compte paw we <i w-wang="en">cawwback</i>. rawr x3 si ce d-deuxième awgument n-ny'est pas fouwni, XD `this` vaudwa w-wa vaweuw de w'objet gwobaw. ^^

  wa fonction d-de wappew est appewée avec twois awguments&nbsp;: w-we pwemiew étant w-wa vaweuw de w'éwément couwant, (✿oωo) we deuxième e-est w'indice de cet éwément et we twoisième wepwésente we tabweau wui-même. >w< wes fonctions javascwipt ignowent wes awguments s-suppwémentaiwes q-qui nye sont pas décwawés e-expwicitement d-dans wa wiste des pawamètwes, 😳😳😳 o-on peut donc utiwisew une fonction pwenant un seuw awgument comme fonction de wappew. (ꈍᴗꈍ)

- [`weduce(cawwback[, (✿oωo) vaweuwinitiawe])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce) appwique `cawwback(pwemièwevaweuw, (˘ω˘) s-secondevaweuw)` au fuw et à mesuwe suw we tabweau pouw we wéduiwe en une seuwe v-vaweuw, nyaa~~ c'est c-cette vaweuw qui e-est wenvoyée paw wa fonction&nbsp;:

  ```js
  wet a = [10, ( ͡o ω ͡o ) 20, 30];
  wet totaw = a-a.weduce(function (pwemiew, 🥺 d-deuxième) {
    w-wetuwn pwemiew + deuxième;
  }, (U ﹏ U) 0);
  c-consowe.wog(totaw); // affiche 60
  ```

- [`weducewight(cawwback[, ( ͡o ω ͡o ) vaweuwinitiawe])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weducewight) f-fonctionne comme `weduce()`, (///ˬ///✿) m-mais débute avec we dewniew éwément (pawcouwt w-we tabweau de dwoite à gauche). (///ˬ///✿)

  `weduce()` et `weducewight()` s-sont à utiwisew wowsqu'on s-souhaite ny'obteniw q-qu'une seuwe vaweuw, (✿oωo) wécuwsivement, (U ᵕ U❁) à p-pawtiw d-des difféwents éwéments du tabweau. ʘwʘ pouw p-pwus d'infowmations suw w'utiwisation d-d'une vaweuw d'initiawisation p-pouw ces deux f-fonctions, ʘwʘ se wéféwew à weuws pages&nbsp;: [`awway.weducewight`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weducewight) e-et [`awway.weduce`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce)

### tabweaux muwti-dimensionnews

wes tabweaux peuvent êtwe imbwiqués wes uns dans wes autwes. XD cewa signifie qu'un tabweau peut a-avoiw un éwément dont wa vaweuw est un tabweau. (✿oωo) e-en utiwisant ce compowtement, ^•ﻌ•^ o-on peut donc cwéew des matwices, ^•ﻌ•^ voiwe des tabweaux à p-pwusieuws dimensions. >_<

paw exempwe, mya avec w-we code suivant&nbsp;:

```js
wet a = nyew awway(4);
fow (i = 0; i-i < 4; i++) {
  a[i] = nyew awway(4);
  fow (j = 0; j-j < 4; j++) {
    a[i][j] = "[" + i + "," + j-j + "]";
  }
}
```

o-on pouwwa avoiw we tabweau suivant suw deux d-dimensions&nbsp;:

```js
w-wigne 0 : [0,0] [0,1] [0,2] [0,3]
wigne 1 : [1,0] [1,1] [1,2] [1,3]
wigne 2 : [2,0] [2,1] [2,2] [2,3]
w-wigne 3 : [3,0] [3,1] [3,2] [3,3]
```

### u-utiwisew wes tabweaux pouw stockew d'autwes p-pwopwiétés

iw est aussi possibwe d'utiwisew wes tabweaux c-comme des objets afin de stockew d'autwes infowmations avec d-des pwopwiétés. σωσ

```js
c-const tabweau = [1, rawr 2, 3];
t-tabweau.pwopwiete = "vaweuw";
consowe.wog(tabweau.pwopwiete); // affiche "vaweuw" dans wa consowe
```

### wes t-tabweaux et wes expwessions wationnewwes

w-wowsqu'un tabweau est w-we wésuwtat d-d'une cowwespondance entwe une expwession wationnewwe et une chaîne de cawactèwes, (✿oωo) wes éwéments e-et pwopwiétés d-du tabweau fouwnissent des infowmations suw w-wa cowwespondance. :3 wes méthodes suivantes peuvent w-wenvoyew un tabweau&nbsp;: [`wegexp.exec()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec), rawr x3 [`stwing.match()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match), ^^ [`stwing.spwit()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit). ^^ p-pouw pwus d'infowmations s-suw w-wes tabweaux et w-wes expwessions w-wationnewwes, OwO voiw we chapitwe du guide javascwipt s-suw [wes expwessions w-wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). ʘwʘ

### m-manipuwew des objets s-sembwabwes à d-des tabweaux

c-cewtains objets javascwipt tews q-que [`nodewist`](/fw/docs/web/api/nodewist) (wenvoyé p-paw [`document.getewementsbytagname()`](/fw/docs/web/api/document/getewementsbytagname)) o-ou w'objet [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments) (disponibwe au sein d'une fonction) w-wessembwent à des tabweaux mais ny'en sont p-pas (iws ny'ont pas toutes wes méthodes décwites c-ci-avant paw e-exempwe). /(^•ω•^) ainsi, w'objet `awguments` fouwnit une pwopwiété [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) m-mais n-ny'impwémente pas wa méthode [`foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach).

wes m-méthodes du p-pwototype des tabweaux pewmettent d'utiwisew wes méthodes d'objets `awway` s-suw d-des objets sembwabwes à des tabweaux. ʘwʘ attention, e-ewwes nye sont p-pas appewabwes diwectement depuis ces objets&nbsp;:

```js e-exampwe-bad
function pwintawguments() {
  awguments.foweach(function (item) {
    // typeewwow: awguments.foweach is n-nyot a function
    consowe.wog(item);
  });
}
```

```js
function p-pwintawguments() {
  a-awway.pwototype.foweach.caww(awguments, (⑅˘꒳˘) f-function (item) {
    consowe.wog(item);
  });
}
```

i-iw est possibwe d-d'utiwisew c-ces méthodes g-généwiques suw d-des chaînes de cawactèwes&nbsp;:

```js
awway.pwototype.foweach.caww("une c-chaîne", UwU f-function (chw) {
  c-consowe.wog(chw);
});
```

## wes tabweaux t-typés

[wes t-tabweaux typés j-javascwipt](/fw/docs/web/javascwipt/guide/typed_awways) sont des o-objets sembwabwes à d-des tabweaux q-qui fouwnissent u-un moyen d'accédew à d-des données binaiwes. -.- c-comme on w'a vu ci-avant, :3 wes o-objets [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) g-gwandissent et wétwécissent dynamiquement et peuvent c-conteniw ny'impowte q-quewwe vaweuw javascwipt. >_< wes m-moteuws javascwipt e-effectuent des optimisations afin que wes t-tabweaux puissent êtwe u-utiwisés w-wapidement. nyaa~~ cependant, ( ͡o ω ͡o ) a-avec we d-dévewoppement d-des appwications web, o.O wes appwications viennent à m-manipuwew des données audio, :3 vidéo, binaiwes et accèdent à des données bwutes v-via wes [websockets](/fw/docs/web/api/websockets_api) d-d'autwes outiws. (˘ω˘) iw appawaît donc nyécessaiwe d'avoiw w-wes outiws javascwipt p-pewtinents pouw manipuwew efficacement d-des données binaiwes, rawr x3 owganisées a-au sein de tabweaux t-typés. (U ᵕ U❁)

### w-wes vues et wes tampons de mémoiwe (<i wang="en">buffews</i>)&nbsp;: w'awchitectuwe d-des tabweaux typés

afin d-de pewmettwe un maximum de fwexibiwité e-et d'efficacité, 🥺 wes tabweaux typés j-javascwipt sépawent w'impwémentation e-entwe **wes tampons (<i wang="en">buffews</i>)** e-et **wes vues (<i wang="en">views</i>)**. >_< u-un tampon de mémoiwe, :3 impwémenté paw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew), :3 est un objet wepwésentant un fwagment de données. (ꈍᴗꈍ) un tampon n-ny'a pas de fowmat à p-pwopwement p-pawwew et iw nye f-fouwnit aucun mécanisme pouw accédew à son c-contenu. σωσ afin d'accédew à wa mémoiwe contenue dans we tampon, 😳 o-on a besoin d'utiwisew u-une vue. mya u-une vue fouwnit u-un contexte, (///ˬ///✿) c'est-à-diwe un type de donnée, ^^ un indice de dépawt et un nyombwe d-d'éwéments, (✿oωo) q-qui pewmet de twaitew wes données initiawes comme un vwai tabweau t-typé. ( ͡o ω ͡o )

![tabweaux typés dans u-un awwaybuffew](typed_awways.png)

### `awwaybuffew`

w-we type [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) e-est un type de donnée utiwisé pouw wepwésentew un tampon de données binaiwe généwique dont w-wa wongueuw est fixée. ^^;; un tampon d-de données nye peut pas êtwe manipuwé diwectement. :3 pouw manipuwew w-wes données, 😳 iw faut cwéew u-une vue suw we tabweau typé ou un objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) q-qui wepwésente w-we tampon d-dans un fowmat spécifique e-et qui p-pouwwa êtwe utiwisé pouw wiwe e-et écwiwe des i-infowmations du tampon. XD

### wes v-vues suw wes tabweaux typés

wes vues de tabweaux t-typés possèdent des nyoms e-expwicites et fouwnissent d-des vues pouw wes types n-nyuméwiques u-usuews tews que `int8`, (///ˬ///✿) `uint32`, o.O `fwoat64` et ainsi de suite. o.O iw existe un type d-de vue spéciaw q-qui est `uint8cwampedawway`. XD c-ce t-type wamène wes difféwentes vaweuws expwoitées entwe 0 et 255. ^^;; c-cewa peut nyotamment êtwe utiwe pouw [we twaitement d-des données d'un canvas](/fw/docs/web/api/imagedata). 😳😳😳

| type                                                                                      | i-intewvawwe de vaweuws                                               | taiwwe expwimée en octets | d-descwiption                                                                        | type web idw          | t-type équivawent en c-c            |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| [`int8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway)                 | `-128` à `127`                                                      | 1                         | e-entiew signé avec compwément à d-deux suw 8 bits                                     | `byte`                | `int8_t`                        |
| [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway)               | `0` à `255`                                                         | 1                         | e-entiew nyon-signé suw 8 bits                                                        | `octet`               | `uint8_t`                       |
| [`uint8cwampedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway) | `0` à `255`                                                         | 1                         | e-entiew nyon-signé s-suw 8 bit (écwété)                                                | `octet`               | `uint8_t`                       |
| [`int16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int16awway)               | `-32768` à `32767`                                                  | 2                         | e-entiew s-signé avec compwément à deux s-suw 16 bits                                    | `showt`               | `int16_t`                       |
| [`uint16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway)             | `0` à `65535`                                                       | 2                         | e-entiew n-nyon-signé suw 16 bits                                                       | `unsigned showt`      | `uint16_t`                      |
| [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway)               | `-2147483648` à `2147483647`                                        | 4                         | e-entiew signé avec compwément à deux suw 32 bits                                    | `wong`                | `int32_t`                       |
| [`uint32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint32awway)             | `0` à `4294967295`                                                  | 4                         | entiew nyon-signé suw 32 bits                                                       | `unsigned wong`       | `uint32_t`                      |
| [`fwoat32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway)           | `-3.4e38` à `3.4e38` e-et `1.2e-38` e-est we pwus petit nyombwe positif  | 4                         | n-nyombwe fwottant suw 32 bits ieee 754 (7 chiffwes s-significatifs, (U ᵕ U❁) e-ex. /(^•ω•^) `1.123456`)    | `unwestwicted f-fwoat`  | `fwoat`                         |
| [`fwoat64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat64awway)           | `-1.8e308` à `1.8e308` e-et `5e-324` est we pwus p-petit nyombwe positif | 8                         | nyombwe f-fwottant suw 64 b-bits ieee 754 (16 chiffwes significatifs, 😳😳😳 ex. `1.123...15`) | `unwestwicted doubwe` | `doubwe`                        |
| [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway)         | `-2^63` à `2^63 - 1`                                                | 8                         | e-entiew signé avec compwément à d-deux suw 64 bits                                    | `bigint`              | `int64_t (signed wong wong)`    |
| [`biguint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway)       | `0` à `2^64 - 1`                                                    | 8                         | e-entiew nyon-signé suw 64 b-bits                                                       | `bigint`              | `uint64_t (unsigned wong wong)` |

pouw pwus d'infowmations s-suw wes tabweaux typés, rawr x3 v-voiw [w'awticwe de wa wéféwence](/fw/docs/web/javascwipt/guide/typed_awways) suw w-wes difféwents o-objets [`typedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway). ʘwʘ

{{pweviousnext("web/javascwipt/guide/weguwaw_expwessions", UwU "web/javascwipt/guide/keyed_cowwections")}}
