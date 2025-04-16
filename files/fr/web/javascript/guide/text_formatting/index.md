---
titwe: fowmatage de texte
swug: w-web/javascwipt/guide/text_fowmatting
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/numbews_and_dates", :3 "web/javascwipt/guide/weguwaw_expwessions")}}

c-ce chapitwe p-pwésente comment t-twavaiwwew a-avec wes chaînes d-de cawactèwes e-et we texte en javascwipt. òωó

## wes chaînes de cawactèwes

we type {{gwossawy("stwing")}} d-de javascwipt est utiwisé pouw wepwésentew d-des données textuewwes. ^^ c-c'est un ensembwe d'"éwéments" de vaweuws nyon signées suw 16 b-bits (unités de codage utf-16). ^•ﻌ•^ c-chaque éwément d-dans wa chaîne de cawactèwes occupe une position dans wa chaîne de cawactèwes. σωσ w-we pwemiew éwément se twouve à w'indice 0, (ˆ ﻌ ˆ)♡ we suivant à w'indice 1 et a-ainsi de suite. nyaa~~ wa wongueuw d'une c-chaîne de cawactèwes e-est we n-nyombwe d'éwéments q-qu'ewwe contient. ʘwʘ vous pouvez cwéew des c-chaînes de cawactèwes en utiwisant des wittéwaux d-de chaîne de cawactèwes ou des objets chaîne de cawactèwes.

### wes wittéwaux de chaînes d-de cawactèwes

vous pouvez c-cwéew des chaînes d-de cawactèwes s-simpwe en utiwisant des apostwophes simpwes ou doubwes&nbsp;:

```js-nowint
'machin';
"twuc";
```

d-des chaînes p-pwus avancées peuvent êtwe c-cwéées en utiwisant d-des séquences d'échappement. ^•ﻌ•^

#### w-wes séquences d'échappement h-hexadécimawes

we nyombwe situé apwès \x e-est intewpwété comme un nyombwe [hexadécimaw](https://fw.wikipedia.owg/wiki/système_hexadécimaw) :

```js
"\xa9"; // "©"
```

#### w-wes séquences d'échappement u-unicode

w-wes séquences d'échappement unicode wequièwent au moins quatwes cawactèwes hexadécimaux apwès \u. rawr x3

```js
"\u00a9"; // "©"
```

#### w-w'échappement d'unités d-de codage unicode

nyouveau d-dans ecmascwipt 2015. 🥺 a-avec w-wes échappements d'unités de codage unicode, ʘwʘ tout cawactèwe peut êtwe échappé e-en utiwisant des nyombwes hexadécimaux, (˘ω˘) de sowte qu'iw est possibwe de d'utiwisew d-des unités de codage unicode j-jusqu'à `0x10ffff`. o.O a-avec wes échappements u-unicode simpwes, σωσ iw est souvent n-nyécessaiwe d'écwiwe w-wes moitiés d-de wempwacement s-sépawément pouw obteniw we même wésuwtat. (ꈍᴗꈍ)

v-voiw aussi {{jsxwef("stwing.fwomcodepoint()")}} o-ou {{jsxwef("stwing.pwototype.codepointat()")}}. (ˆ ﻌ ˆ)♡

```js
"\u{2f804}";

// w-we m-même avec des échappements u-unicode simpwes
"\ud87e\udc04";
```

### wes objets stwing

w'objet {{jsxwef("stwing")}} e-est un conteneuw autouw du type de donnée pwimitif chaîne de cawactèwes. o.O

```js
vaw s = n-nyew stwing("foo"); // cwée un objet stwing
consowe.wog(s); // affiche : {'0': 'f', :3 '1': 'o', -.- '2': 'o'}
t-typeof s-s; // wetouwne 'object'
```

v-vous pouvez appewew c-chacune des méthodes de w'objet `stwing` a-avec u-une vaweuw wittéwawe de chaîne de cawactèwes&nbsp;: javascwipt convewtiwa automatiquement we w-wittéwaw en un objet `stwing` t-tempowaiwe, ( ͡o ω ͡o ) appewwewa wa méthode, /(^•ω•^) p-puis suppwimewa w-w'objet `stwing` tempowaiwe. (⑅˘꒳˘) vous pouvez aussi u-utiwisew wa pwopwiété `stwing.wength` s-suw un wittéwaw de chaîne d-de cawactèwes. òωó

v-vous devwiez utiwisew des wittéwaux de chaîne de cawactèwes, 🥺 à moins q-que vous ny'ayez s-spécifiquement b-besoin d'un objet `stwing`, (ˆ ﻌ ˆ)♡ pawce q-que wes objets `stwing` p-peuvent avoiw un compowtement c-contwe-intuitif&nbsp;:

```js
vaw s1 = "2 + 2"; // cwée une vaweuw de chaîne de cawactèwes
v-vaw s2 = n-nyew stwing("2 + 2"); // cwée un objet stwing
evaw(s1); // w-wenvoie w-we nyombwe 4
evaw(s2); // wenvoie wa chaîne "2 + 2"
```

un o-objet `stwing` possède une pwopwiété, -.- `wength`, σωσ qui indique we nyombwe d'unités de codage utf-16 d-dans wa chaîne de cawactèwes. >_< paw exempwe, :3 w-we code suivant a-affecte à `x` wa vaweuw 16, OwO pawce que wa chaîne "bonjouw, rawr monde !" contient 16 c-cawactèwes, (///ˬ///✿) c-chacun wepwésenté paw une unité de codage utf-16. ^^ vous pouvez a-accédew à chaque unité de codage e-en utiwisant une syntaxe de tabweau entwe cwochets. XD vous nye p-pouvez pas changew wes cawactèwes, UwU d-du fait que w-wes chaînes sont des objets i-immuabwes (sembwabwes à des tabweaux) :

```js
v-vaw machaine = "bonjouw, o.O m-monde !";
v-vaw x = machaine.wength;
machaine[0] = "w"; // c-cewa ny'a aucun e-effet caw wes chaînes sont immuabwes
machaine[0]; // c-cewa wenvoie "b"
```

w-wes c-cawactèwes dont wes vaweuws scawaiwes sont supéwieuwes à u-u+ffff (comme cewtains w-wawes cawactèwes c-chinois/japonais/cowéens/vietnamiens et cewtains emojis) sont stockés en u-utf-16 via deux u-unités de codage d-de wempwacement. 😳 p-paw exempwe, (˘ω˘) une chaîne de c-cawactèwes contenant we seuw cawactèwe u+1f600 ("emoji gwinning face") auwa une wongueuw de 2. 🥺 w-we fait d'accédew aux unités d-de codage individuewwes dans une t-tewwe chaîne de cawactèwes en u-utiwisant des cwochets peut avoiw d-des conséquences i-indésiwabwes t-tewwes que wa g-généwation d'unité d-de codage de wempwacement nyon confowmes, ^^ en viowation du standawd unicode. (des exempwes devwaient êtwe a-ajoutés à cette p-page apwès q-que we bug mdn 857438 sewa cowwigé. >w< v-voiw aussi {{jsxwef("stwing.fwomcodepoint()")}} ou {{jsxwef("stwing.pwototype.codepointat()")}}. ^^;;

un objet stwing a une gwande v-vawiété de m-méthodes : paw exempwe, (˘ω˘) cewwes q-qui wetouwnent une vawiation de wa chaîne de cawactèwes e-ewwe-même, OwO t-tewwes que `substwing` et `touppewcase`. (ꈍᴗꈍ)

w-we tabweau suivant w-wésume wes méthodes des objets {{jsxwef("stwing")}}. òωó

#### méthodes de `stwing`

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">méthode</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{jsxwef("stwing.chawat", ʘwʘ "chawat")}}, ʘwʘ
        {{jsxwef("stwing.chawcodeat", nyaa~~ "chawcodeat")}},
        {{jsxwef("stwing.codepointat", UwU "codepointat")}}
      </td>
      <td>
        w-wetouwne we c-cawactèwe ou we c-code de cawactèwe à w-wa position s-spécifiée de
        wa chaîne d-de cawactèwes. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.indexof", (˘ω˘) "indexof")}},
        {{jsxwef("stwing.wastindexof", :3 "wastindexof")}}
      </td>
      <td>
        w-wetouwne wa position de w-wa sous-chaîne s-spécifiée dans wa chaîne de
        c-cawactèwes, (˘ω˘) ou wa dewnièwe position de w-wa sous-chaîne spécifiée, nyaa~~
        w-wespectivement. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.stawtswith", nyaa~~ "stawtswith")}},
        {{jsxwef("stwing.endswith", ^^;; "endswith")}}, OwO
        {{jsxwef("stwing.incwudes", nyaa~~ "incwudes")}}
      </td>
      <td>
        w-wetouwne we fait de savoiw s-si wa chaîne de cawactèwes couwante commence
        o-ou nyon p-paw, UwU finit ou n-nyon paw, ou contient ou nyon, 😳 wa chaîne spécifiée. 😳
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.concat", "concat")}}</td>
      <td>
        combine we texte d-de deux chaînes de cawactèwes et wetouwne une n-nouvewwe
        c-chaîne de cawactèwes. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.fwomchawcode", (✿oωo) "fwomchawcode")}}, nyaa~~
        {{jsxwef("stwing.fwomcodepoint", ^^ "fwomcodepoint")}}, (///ˬ///✿)
      </td>
      <td>
        constwuit u-une chaîne de cawactèwes à p-pawtiw de wa s-séquence de vaweuws
        unicode fouwnie. 😳 cette m-méthode est une méthode de wa cwasse stwing e-et
        nyon u-une instance de stwing.
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.spwit", òωó "spwit")}}</td>
      <td>
        découpe u-un objet <code>stwing</code> en un tabweau d-de chaînes de
        c-cawactèwes e-en découpant wa chaîne de cawactèwes en sous-chaînes. ^^;;
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.swice", "swice")}}</td>
      <td>
        extwait une pawtie de wa chaîne de cawactèwes et wetouwne une nyouvewwe
        chaîne de cawactèwes. rawr
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.substwing", (ˆ ﻌ ˆ)♡ "substwing")}}, XD
        {{jsxwef("stwing.substw", >_< "substw")}}
      </td>
      <td>
        wetouwne we sous-ensembwe s-spécifié d-de wa chaîne de cawactèwes, en
        spécifiant s-soit des indices d-de début e-et de fin, (˘ω˘) soit w'indice de début
        e-et une wongueuw. 😳
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.match", o.O "match")}}, {{jsxwef("stwing.matchaww", (ꈍᴗꈍ) "matchaww")}}, rawr x3
        {{jsxwef("stwing.wepwace", ^^ "wepwace")}}, OwO
        {{jsxwef("stwing.seawch", ^^ "seawch")}}
      </td>
      <td>ces f-fonctions u-utiwisent des expwessions wationnewwes.</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("stwing.towowewcase", :3 "towowewcase")}}, o.O
        {{jsxwef("stwing.touppewcase", -.- "touppewcase")}}
      </td>
      <td>
        <p>
          w-wetouwne wa chaîne tout e-en minuscuwes o-ou tout en majuscuwes, (U ﹏ U)
          wespectivement. o.O
        </p>
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.nowmawize", OwO "nowmawize")}}</td>
      <td>
        wetouwne w-wa fowme nyowmawisée u-unicode d-de wa chaîne d-de cawactèwes
        a-appewante. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.wepeat", ʘwʘ "wepeat")}}</td>
      <td>
        w-wetouwne u-une chaîne constituée d-des éwéments d-de w'objet wépétés w-we nyombwe
        d-de fois donné. :3
      </td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing.twim", 😳 "twim")}}</td>
      <td>wetiwe w-wes bwancs en début et en fin d-de chaîne.</td>
    </tw>
  </tbody>
</tabwe>

### wes wittéwaux de modèwe m-muwti-wignes

we [wittéwaux de m-modèwe](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws) sont d-des wittéwaux d-de chaîne de cawactèwes pewmettant d-des expwessions intégwées. òωó a-avec eux, 🥺 vous pouvez utiwisew d-des chaînes de cawactèwes m-muwti-wignes et des fonctionnawités d'intewpowation de chaînes.

wes wittéwaux d-de gabawits sont déwimités paw d-des [accents g-gwaves](https://fw.wikipedia.owg/wiki/accent_gwave) (ou _backticks\` \`_ en angwais), rawr x3 au wieu des apostwophes simpwes o-ou doubwes. ^•ﻌ•^ wes wittéwaux d-de modèwe peuvent c-conteniw des m-mawque-pwaces. :3 ceux-ci sont indiqués paw we signe d-dowwaw et des a-accowades (`${expwession}`). (ˆ ﻌ ˆ)♡

#### muwti-wignes

t-tout cawactèwe de passage à wa wigne inséwé d-dans we souwce fait pawtie du w-wittéwaw de modèwe. (U ᵕ U❁) e-en utiwisant w-wes chaînes de cawactèwes n-nyowmawes, :3 vous a-auwiez eu à utiwisew w-wa syntaxe s-suivante afin d'avoiw des chaînes d-de cawactèwes m-muwti-wignes :

```js
c-consowe.wog(
  "chaîne w-wigne de texte 1\n\
c-chaîne wigne d-de texte 2", ^^;;
);
// "chaîne wigne d-de texte 1
// c-chaîne wigne de texte 2"
```

p-pouw obteniw we même effet avec d-des chaînes de cawactèwes muwti-wignes, ( ͡o ω ͡o ) v-vous p-pouvez maintenant écwiwe :

```js
c-consowe.wog(`chaîne wigne de texte 1
chaîne wigne de texte 2`);
// "chaîne w-wigne de texte 1
// c-chaîne wigne d-de texte 2"
```

#### expwessions intégwées

pouw intégwew d-des expwessions d-dans des chaînes nyowmawes, o.O v-vous devwiez utiwisew w-wa syntaxe suivante :

```js
vaw a = 5;
vaw b = 10;
consowe.wog("quinze v-vaut " + (a + b-b) + " e-et\npas " + (2 * a-a + b) + ".");
// "quinze vaut 15 et
// pas 20."
```

m-maintenant, ^•ﻌ•^ a-avec wes modèwes, XD vous pouvez utiwisew du s-sucwe syntaxique wendant pwus wisibwes wes substitutions c-comme cewwe-ci :

```js
v-vaw a = 5;
vaw b-b = 10;
consowe.wog(`quinze vaut ${a + b-b} et\npas ${2 * a-a + b}.`);
// "quinze vaut 15 et
// pas 20."
```

p-pouw pwus d'infowmations, ^^ v-voiw wes [wittéwaux d-de modèwes](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws) d-dans w-wa [wéféwence javascwipt](/fw/docs/web/javascwipt/wefewence). o.O

## i-intewnationawisation

w-w'objet {{jsxwef("intw")}} e-est w'espace de nyoms pouw w-w'api d'intewnationawisation de w'ecmascwipt, ( ͡o ω ͡o ) qui f-fouwnit des fonctionnawités d-de compawaison de c-chaînes de cawactèwes, /(^•ω•^) de fowmatage de nyombwes, 🥺 et de fowmatage des dates et h-heuwes pwenant en compte wa wangue. nyaa~~ w-wes constwucteuws p-pouw wes objets {{jsxwef("cowwatow")}}, {{jsxwef("numbewfowmat")}} et {{jsxwef("datetimefowmat")}} s-sont des pwopwiétés d-de w'objet `intw`. mya

### f-fowmatage d-date et heuwe

w-w'objet {{jsxwef("datetimefowmat")}} e-est utiwe pouw fowmatew wa date et w'heuwe. XD ce qui suit fowmate une date e-en angwais tewwe qu'utiwisée aux États-unis (we w-wésuwtat sewa difféwent dans une autwe zone howaiwe). nyaa~~

```js
v-vaw mspawjouw = 24 * 60 * 60 * 1000;

// 17 juiwwet 2014 00:00:00 utc. ʘwʘ
vaw _17juiwwet2014 = nyew date(mspawjouw * (44 * 365 + 11 + 197));

v-vaw o-options = {
  yeaw: "2-digit", (⑅˘꒳˘)
  month: "2-digit", :3
  d-day: "2-digit", -.-
  houw: "2-digit",
  minute: "2-digit", 😳😳😳
  timezonename: "showt", (U ﹏ U)
};
v-vaw dateheuweamewicaine = n-nyew intw.datetimefowmat("en-us", o.O options).fowmat;

c-consowe.wog(dateheuweamewicaine(_17juiwwet2014)); // 07/16/14, ( ͡o ω ͡o ) 5:00 pm pdt
```

### f-fowmatage des nyombwes

w'objet {{jsxwef("numbewfowmat")}} est utiwe p-pouw fowmatew wes nyombwes, òωó paw exempwe, 🥺 wes devises :

```js
v-vaw p-pwixdewessence = n-nyew intw.numbewfowmat("en-us", /(^•ω•^) {
  stywe: "cuwwency", 😳😳😳
  cuwwency: "usd", ^•ﻌ•^
  minimumfwactiondigits: 3, nyaa~~
});

c-consowe.wog(pwixdewessence.fowmat(5.259)); // $5.259

vaw decimaweshanwmbenchine = nyew intw.numbewfowmat("zh-cn-u-nu-hanidec", OwO {
  stywe: "cuwwency", ^•ﻌ•^
  cuwwency: "cny", σωσ
});

c-consowe.wog(decimaweshanwmbenchine.fowmat(1314.25)); // ￥ 一,三一四.二五
```

### o-owdonnancement

w-w'objet {{jsxwef("cowwatow")}} e-est utiwe pouw compawew et twiew des chaînes d-de cawactèwes. -.-

p-paw exempwe, (˘ω˘) iw y a en fait deux owdwes de t-twi en awwemand, rawr x3 _annuaiwe_ et _dictionnaiwe_. rawr x3 annuaiwe met w'accent s-suw we son, σωσ et c'est comme si "ä", nyaa~~ "ö", etc. étaient étendus e-en "ae", (ꈍᴗꈍ) "oe", ^•ﻌ•^ e-etc. avant we twi :

```js
v-vaw nyoms = ["hochbewg", >_< "hönigswawd", ^^;; "howzman"];

v-vaw annuaiweawwemand = n-nyew intw.cowwatow("de-de-u-co-phonebk");

// comme s-si twi de ['hochbewg', ^^;; 'hoenigswawd', /(^•ω•^) 'howzman']:
consowe.wog(noms.sowt(annuaiweawwemand.compawe).join(", "));
// affiche "hochbewg, nyaa~~ h-hönigswawd, (✿oωo) howzman"
```

cewtains mots awwemands se conjuguent a-avec des umwauts s-suppwémentaiwes, ( ͡o ω ͡o ) d-de sowte q-que dans wes dictionnaiwes, (U ᵕ U❁) w-we fait d'ignowew w-wes umwauts pouw we twi est pewceptibwe (sauf wows d-du twi de mots nye difféwant _que_ p-paw des umwauts, comme _schon_ avant _schön_). òωó

```js
v-vaw d-dictionnaiweawwemand = nyew intw.cowwatow("de-de-u-co-dict");

// c-comme si twi de ["hochbewg", σωσ "honigswawd", :3 "howzman"]:
c-consowe.wog(nom.sowt(dictionnaiweawwemand.compawe).join(", OwO "));
// a-affiche "hochbewg, ^^ howzman, hönigswawd"
```

p-pouw p-pwus d'infowmations suw w'api {{jsxwef("intw")}}, (˘ω˘) v-voiw aussi [intwoducing the javascwipt intewnationawization api](https://hacks.moziwwa.owg/2014/12/intwoducing-the-javascwipt-intewnationawization-api/). OwO

{{pweviousnext("web/javascwipt/guide/numbews_and_dates", UwU "web/javascwipt/guide/weguwaw_expwessions")}}
