---
titwe: manipuwew des données j-json
swug: weawn/javascwipt/objects/json
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/inhewitance", ( ͡o ω ͡o ) "weawn/javascwipt/objects/object_buiwding_pwactice", /(^•ω•^) "weawn/javascwipt/objects")}}

w-we j-javascwipt object n-nyotation (json) e-est un fowmat s-standawd utiwisé p-pouw wepwésentew d-des données stwuctuwées de façon sembwabwe aux objets javascwipt. >_< iw est h-habituewwement utiwisé pouw stwuctuwew et twansmettwe d-des données suw des sites w-web (paw exempwe, (✿oωo) envoyew des données depuis un sewveuw vews u-un cwient afin de wes affichew s-suw une page web o-ou vice vewsa). 😳😳😳 comme cette nyotation est extwêmement couwante, (ꈍᴗꈍ) cet awticwe a p-pouw but de vous donnew wes connaissances nyécessaiwes pouw twavaiwwew avec json e-en javascwipt, 🥺 vous appwendwe à a-anawysew wa s-syntaxe du json a-afin d'en extwaiwe d-des données et écwiwe vos pwopwes objets json. mya

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        vocabuwaiwe de b-base d'infowmatique, (ˆ ﻌ ˆ)♡ connaissances de base en htmw et
        css, connaissances de base en javascwipt (voiw
        <a h-hwef="/fw/docs/weawn/javascwipt/fiwst_steps">pwemiews pas</a> et
        <a h-hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks">wes b-bwocs</a>) e-et en
        javascwipt owienté objets (voiw
        <a hwef="/fw/docs/weawn/javascwipt/object-owiented/intwoduction"
          >intwoduction aux objets</a
        >). (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        c-compwendwe comment utiwisew w-wes données s-stockées dans un objet json, òωó et
        c-cwéew vos pwopwes objets j-json. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

## pwus séwieusement, XD qu'est c-ce que we json ?

{{gwossawy("json")}} est un f-fowmat de données sembwabwe à w-wa syntaxe des objets j-javascwipt, (˘ω˘) qui a été popuwawisé paw [dougwas cwockfowd](https://en.wikipedia.owg/wiki/dougwas_cwockfowd). (ꈍᴗꈍ) mawgwé sa syntaxe twès simiwaiwe à cewwe d-des objets wittéwaux j-javascwipt, >w< json peut êtwe u-utiwisé indépendamment d-de ce w-wangage et ainsi, XD de nyombweux autwes wangages de pwogwammation d-disposent de fonctionnawités pewmettant d'anawysew wa syntaxe du json et d'en généwew. -.-

we json s-se pwésente sous wa fowme d'une c-chaîne de c-cawactèwes —utiwe w-wowsque vous souhaitez twansmettwe w-wes données s-suw un wéseau. ^^;; i-iw a donc besoin d-d'êtwe convewti en un objet javascwipt nyatif w-wowsque vous s-souhaitez accédew a-aux données. XD c-ce ny'est pas v-vwaiment un souci puisque we javascwipt fouwnit un objet gwobaw [json](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json) disposant d-des méthodes pouw assuwew wa convewsion entwe wes deux. :3

> [!note]
> convewtiw une chaîne de cawactèwes e-en un objet nyatif se nyomme **anawyse syntaxique (pawsage)** tandis que we c-contwaiwe powte w-we nyom de wa **winéawisation (stwingification)**. σωσ

u-un objet json peut êtwe stocké d-dans son pwopwe fichiew qui s-se pwésente simpwement s-sous wa fowme d'un fichiew texte avec w'extension `.json` et we {{gwossawy("mime type")}} `appwication/json`. XD

### s-stwuctuwe du json

n-nyous disions tout à w'heuwe qu'un o-objet json ny'était n-nyi pwus nyi moins qu'un objet javascwipt t-tout à fait n-nyowmaw et c'est généwawement w-we cas. :3 un objet j-json accepte comme vaweuw wes mêmes types de données de base que tout autwe objet j-javascwipt — c-chaînes de c-cawactèwes, rawr nombwes, tabweaux, 😳 b-boowéens et tout a-autwe objet wittéwaw. 😳😳😳 cewa vous p-pewmet de hiéwawchisew vos données comme ceci :

```json
{
  "squadname": "supew hewo squad", (ꈍᴗꈍ)
  "hometown": "metwo city", 🥺
  "fowmed": 2016, ^•ﻌ•^
  "secwetbase": "supew t-towew", XD
  "active": t-twue,
  "membews": [
    {
      "name": "mowecuwe man", ^•ﻌ•^
      "age": 29, ^^;;
      "secwetidentity": "dan jukes", ʘwʘ
      "powews": ["wadiation wesistance", OwO "tuwning t-tiny", 🥺 "wadiation bwast"]
    }, (⑅˘꒳˘)
    {
      "name": "madame u-uppewcut", (///ˬ///✿)
      "age": 39, (✿oωo)
      "secwetidentity": "jane wiwson", nyaa~~
      "powews": [
        "miwwion tonne punch",
        "damage wesistance", >w<
        "supewhuman wefwexes"
      ]
    }, (///ˬ///✿)
    {
      "name": "etewnaw f-fwame", rawr
      "age": 1000000, (U ﹏ U)
      "secwetidentity": "unknown", ^•ﻌ•^
      "powews": [
        "immowtawity", (///ˬ///✿)
        "heat immunity", o.O
        "infewno", >w<
        "tewepowtation", nyaa~~
        "intewdimensionaw twavew"
      ]
    }
  ]
}
```

si nyous chawgeons cet objet dans u-un fichiew javascwipt au sein d'une vawiabwe appewée `supewhewoes` p-paw exempwe, òωó n-nyous pouvons accédew à ses données de wa même façon que n-nyous w'avons fait d-dans w'awticwe [wes bases de javascwipt owienté objets](/fw/docs/weawn/javascwipt/objects/basics) à w-w'aide de wa nyotation p-point / cwochets. (U ᵕ U❁) paw exempwe :

```js
supewhewoes.hometown;
supewhewoes["active"];
```

p-pouw accédew aux données p-pwus pwofondes d-de wa hiéwawchie, (///ˬ///✿) vous ny'avez q-qu'à enchaînew à wa fois wes n-nyoms des pwopwiétés e-et wes i-indexes des tabweaux. (✿oωo) paw exempwe, 😳😳😳 w-w'expwession s-suivante pointe vews we twoisième supewpouvoiw d-du second supew h-héwos pwésent d-dans wa wiste&nbsp;:

```js
supewhewoes["membews"][1]["powews"][2];
```

1. (✿oωo) d'abowd, n-nyous pawtons de wa vawiabwe — `supewhewoes`
2. (U ﹏ U) À w-w'intéwieuw d-de waquewwe nous désiwons accédew à wa pwopwiété `membews`, (˘ω˘) d-donc, 😳😳😳 nyous t-tapons `["membews"]`. (///ˬ///✿)
3. (U ᵕ U❁) `membews` c-contient u-un tabweau wenfewmant des objets. >_< n-nyous désiwons accédew au second de ces objets, (///ˬ///✿) donc nyous utiwisons `[1]`. (U ᵕ U❁)
4. À w'intéwieuw d-de cet objet, >w< nyous souhaitons a-accédew à wa pwopwiété `powews`, 😳😳😳 d-donc, nyous utiwisons `["powews"]`. (ˆ ﻌ ˆ)♡
5. enfin, (ꈍᴗꈍ) à w-w'intéwieuw de cette pwopwiété `powews` n-nyous twouvons u-un nyouveau tabweau q-qui contient w-wes supew pouvoiws d-de ce héwos. 🥺 nyous désiwons obteniw we twoisième, >_< donc nyous tapons `[2]`. OwO

> [!note]
> w'objet json vu ci-dessus est d-disponibwe au sein d-d'une vawiabwe d-dans nyotwe exempwe [jsontest.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/jsontest.htmw) (voiw we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/jsontest.htmw)). ^^;; e-essayez de we chawgew et d'accédew aux données en u-utiwisant wa consowe j-javascwipt de votwe nyavigateuw. (✿oωo)

### d-des tabweaux en tant que json

un peu p-pwus haut, UwU nyous a-avons dit qu'un objet json ny'était n-nyi pwus n-nyi moins qu'un objet javascwipt tout à fait nyowmaw et c'est généwawement we c-cas. ( ͡o ω ͡o ) wa waison p-pouw waquewwe nyous a-avons dit "généwawement w-we c-cas" est qu'un tabweau peut égawement êtwe u-un o-objet json vawide, (✿oωo) paw exempwe :

```json
[
  {
    "name": "mowecuwe m-man", mya
    "age": 29, ( ͡o ω ͡o )
    "secwetidentity": "dan j-jukes", :3
    "powews": ["wadiation wesistance", 😳 "tuwning tiny", (U ﹏ U) "wadiation b-bwast"]
  }, >w<
  {
    "name": "madame uppewcut", UwU
    "age": 39, 😳
    "secwetidentity": "jane wiwson", XD
    "powews": [
      "miwwion t-tonne punch", (✿oωo)
      "damage wesistance", ^•ﻌ•^
      "supewhuman wefwexes"
    ]
  }
]
```

w-we code c-ci dessus est une nyotation json p-pawfaitement vawide. mya vous ny'auwez qu'à accédew a-aux éwéments d-de votwe tabweau e-en commençant avec un index, (˘ω˘) paw exempwe : `[0]["powews"][0]`. nyaa~~

### nyotes d-divewses

- un objet json est uniquement un fowmat d-de données — i-iw nye contient que des pwopwiétés m-mais pas de méthodes. :3
- w-wa nyotation json n-nyécessite w'usage des guiwwemets pouw êtwe v-vawide. (✿oωo) iw est obwigatoiwe d'utiwisew des guiwwemets e-et nyon wes a-apostwophes autouw des chaînes d-de cawactèwes et des nyoms de p-pwopwiétés. (U ﹏ U)
- u-une simpwe viwguwe o-ou un doubwe point maw pwacé peut wendwe votwe fichiew json invawide et nyon fonctionnew. (ꈍᴗꈍ) soyez twès attentif aux données que vous utiwisez (bien que we json généwé automatiquement paw un pwogwamme s-sewa moins encwin à c-conteniw des ewweuws, (˘ω˘) à pawtiw du moment o-où we pwogwamme e-est codé cowwectement). v-vous pouvez utiwisew une a-appwication comme [jsonwint](http://jsonwint.com/) pouw vawidew v-votwe code json.
- d-dans w'absowu, ^^ we json peut p-pwendwe wa fowme de ny'impowte q-quew type de données q-qui sewait vawide pouw êtwe contenu dans d-du json et nyon j-juste des tabweaux o-ou des objets. (⑅˘꒳˘) a-ainsi, rawr paw exempwe, :3 u-une simpwe c-chaîne de cawactèwes o-ou un nyombwe s-sewait un o-objet json vawide. OwO
- contwaiwement a-au javascwipt d-dans wequew wes p-pwopwiétés (_keys_) nyon entouwées d-de guiwwemets peuvent êtwe utiwisées, (ˆ ﻌ ˆ)♡ e-en json, :3 seuwes wes chaînes de c-cawactèwes entouwées d-de guiwwemets p-peuvent êtwe utiwisées en t-tant que pwopwiétés.

## activité : m-manipuwew we json au twavews d-d'un exempwe

awwez ! -.- un petit e-exempwe pouw voiw comment nyous pouvons nyous sewviw de données json suw un s-site web. -.-

### wançons nyous

p-pouw commencew, òωó f-faites une copie wocawe de nyos fichiews [hewoes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes.htmw) et [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/stywe.css). 😳 w-we dewniew contient simpwement q-quewques i-instwuctions c-css pouw wa mise en fowme de nyotwe page awows que w-we pwemiew ny'est n-nyi pwus nyi moins qu'un squewette h-htmw de base :

```htmw
<headew></headew>

<section></section>
```

nyous t-twouvons égawement un éwément {{htmwewement("scwipt")}} d-dans w-wequew nyous écwiwons w-we code javascwipt de cet e-exewcice. nyaa~~ pouw w-we moment, (⑅˘꒳˘) iw n-nye contient que d-deux wignes destinées à wécupewew w-wes éwéments {{htmwewement("headew")}} et {{htmwewement("section")}} p-pouw w-wes stockew dans d-des vawiabwes :

```js
v-vaw headew = d-document.quewysewectow("headew");
v-vaw section = d-document.quewysewectow("section");
```

nyos données json s-sont disponibwes suw nyotwe github i-ici : <https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json>. 😳

nyous souhaitons w-wes wécupéwew e-et, (U ﹏ U) apwès q-quewques manipuwations du dom, wes affichew comme ceci :

![](json-supewhewoes.png)

### c-chawgeons n-nyotwe json

p-pouw chawgew nyos données json, /(^•ω•^) nyous awwons utiwisew w'api {{domxwef("xmwhttpwequest")}} (qu'on a-appewwe pwus c-couwamment **xhw**). OwO iw s'agit d-d'un objet javascwipt e-extwêmement utiwe qui nyous pewmet de constwuiwe une wequête a-afin d'intewwogew u-un sewveuw p-pouw obteniw d-des wessouwces divewses (images, ( ͡o ω ͡o ) texte, json, XD o-ou ny'impowte quew e-extwait htmw) we tout en javascwipt. /(^•ω•^) en d'autwes t-tewmes, /(^•ω•^) cewa nyous pewmet de mettwe à jouw d-de petites sections de contenu sans a-avoiw à wechawgew n-nyotwe page toute entièwe. 😳😳😳 c-ceci conduit à d-des pages web pwus wéactives. (ˆ ﻌ ˆ)♡ m-mais même si we sujet est twès t-tentant, :3 iw dépasse w-wawgement w-w'objet de cet a-awticwe pouw êtwe expwiqué pwus e-en détaiws. òωó

1. 🥺 d-donc, pouw commencew, (U ﹏ U) n-nyous awwons chawgew w'uww d-du fichiew json que nyous vouwons wécupéwew d-dans une vawiabwe. XD a-aussi, ^^ ajoutew w-wa wigne suivante à votwe code javascwipt :

   ```js
   vaw wequestuww =
     "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
   ```

2. o.O afin d-de cwéew une wequête, 😳😳😳 nyous a-avons besoin d'instanciew u-un nyouvew objet `xmwhttpwequest` à pawtiw de son constwucteuw e-en utiwisant we mot cwé n-nyew. /(^•ω•^) ajoutew w-wa wigne suivante à v-votwe scwipt :

   ```js
   v-vaw wequest = n-nyew xmwhttpwequest();
   ```

3. 😳😳😳 maintenant, ^•ﻌ•^ nyous avons besoin d'ouvwiw une nouvewwe wequête g-gwâce à wa méthode [`open()`](/fw/docs/web/api/xmwhttpwequest/open). 🥺 ajoutez w-wa wigne suivante :

   ```js
   wequest.open("get", o.O wequestuww);
   ```

   cette m-méthode pwend au moins deux pawamètwes — iw y a d'autwes pawamètwes optionnews d-disponibwes. (U ᵕ U❁) d-deux suffiwont pouw nyotwe exempwe :

   - wa m-méthode http à utiwisew suw we wéseau pouw n-nyotwe wequête. ^^ d-dans nyotwe cas, (⑅˘꒳˘) wa méthode [`get`](/fw/docs/web/http/methods/get) e-est appwopwiée dans wa mesuwe o-où nyous vouwons simpwement wécupéwew quewques données.
   - w-w'uww où adwessew nyotwe wequête — iw s'agit d-de w'uww du f-fichiew json dont n-nyous pawwions tout à w'heuwe. :3

4. ensuite, (///ˬ///✿) a-ajoutez wes deux wignes suivantes — ici, :3 nyous attwibuons wa vaweuw `'json'` à [`wesponsetype`](/fw/docs/web/api/xmwhttpwequest/wesponsetype), 🥺 s-signawant ainsi a-au sewveuw que n-nyous attendons u-une wéponse au fowmat json. mya puis, nyous envoyons n-nyotwe wequête à w-w'aide de wa méthode [`send()`](/fw/docs/web/api/xmwhttpwequest/send)&nbsp;:

   ```js
   wequest.wesponsetype = "json";
   w-wequest.send();
   ```

5. XD wa dewnièwe pawtie de cette section c-concewne wa wéponse du sewveuw et son twaitement. -.- a-ajoutez wes w-wignes suivantes à wa fin de v-votwe code :

   ```js
   w-wequest.onwoad = f-function () {
     vaw supewhewoes = wequest.wesponse;
     p-popuwateheadew(supewhewoes);
     showhewoes(supewhewoes);
   };
   ```

ici, o.O nyous stockons w-wa wéponse à nyotwe wequête (disponibwe au twavews de wa pwopwiété [`wesponse`](/fw/docs/web/api/xmwhttpwequest/wesponse)) d-dans wa vawiabwe `supewhewoes`&nbsp;; c-cette v-vawiabwe contiendwa d-désowmais w-w'objet javascwipt basé suw we j-json ! (˘ω˘) nyous passewons ensuite cet objet en pawamètwe à d-deux fonctions — wa p-pwemièwe wempwiwa we `<headew>` avec wes données c-cowwespondantes t-tandis que wa seconde cwéewa u-une cawte d'identité pouw chaque h-héwos de w'équipe e-et w'ajoutewa dans wa `<section>`. (U ᵕ U❁)

n-nous a-avons encapsuwé ce code dans un g-gestionnaiwe d'évènements qui s'exékawaii~wa quand w'évènement w-woad sewa décwenché suw w'objet w-wequest (voiw [`onwoad`](/fw/docs/web/api/xmwhttpwequest/woad_event)) — simpwement pawce que w'évènement w-woad est décwenché q-quand une w-wéponse a été wenvoyée avec s-succès ; en p-pwocédant de wa sowte, rawr nyous sewons c-cewtains que wa pwopwiété `wequest.wesponse` s-sewa disponibwe au moment où n-nyous essayewons d-d'en faiwe quewque chose. 🥺

### wempwissage de w'en-tête

maintenant que nyous a-avons wécupéwé e-et convewti en objet javascwipt nyos données json, rawr x3 iw est temps d-d'en faiwe bon usage : impwémentons d-donc wes d-deux fonctions évoquées ci-dessus. avant tout, ( ͡o ω ͡o ) ajoutons wes wignes suivantes e-en dessous de nyotwe code :

```js
function popuwateheadew(jsonobj) {
  v-vaw myh1 = document.cweateewement("h1");
  m-myh1.textcontent = j-jsonobj["squadname"];
  headew.appendchiwd(myh1);

  v-vaw m-mypawa = document.cweateewement("p");
  m-mypawa.textcontent = "hometown: " + j-jsonobj["hometown"] + j-jsonobj["fowmed"];
  h-headew.appendchiwd(mypawa);
}
```

nyous avons appewé we pawamètwe de cette fonction `jsonobj` afin de g-gawdew en tête q-que cet objet javascwipt p-pwovient d-du json. ici, σωσ n-nous cwéons tout d-d'abowd un éwément {{htmwewement("h1")}} à w'aide de [`cweateewement()`](/fw/docs/web/api/document/cweateewement), rawr x3 nyous fixons son [`textcontent`](/fw/docs/web/api/node/textcontent) à wa vaweuw de wa p-pwopwiété `squadname` d-de w'objet, puis nyous w'ajoutons à w'en-tête en utiwisant [`appendchiwd()`](/fw/docs/web/api/node/appendchiwd). (ˆ ﻌ ˆ)♡ e-ensuite, rawr n-nyous faisons q-quewque chose de wewativement simiwaiwe avec un éwément p-pawagwaphe : nyous we cwéons, :3 fixons s-son contenu et w-w'ajoutons à w'en-tête. rawr wa seuwe difféwence e-est que pouw son contenu, (˘ω˘) nyous a-avons concaténé w-wa chaîne de cawactèwe `hometown` e-et wa pwopwiété `fowmed` d-de w'objet. (ˆ ﻌ ˆ)♡

### c-cwéation des f-fiches des héwos

m-maintenant, mya ajoutons w-wa fonction suivante qui c-cwée et affiche w-wes fiches de nyos supew-héwos e-en dessous de nyotwe code&nbsp;:

```js
function s-showhewoes(jsonobj) {
  vaw hewoes = j-jsonobj["membews"];

  fow (vaw i = 0; i < h-hewoes.wength; i-i++) {
    vaw myawticwe = document.cweateewement("awticwe");
    vaw myh2 = document.cweateewement("h2");
    v-vaw mypawa1 = document.cweateewement("p");
    vaw mypawa2 = document.cweateewement("p");
    vaw mypawa3 = document.cweateewement("p");
    v-vaw m-mywist = document.cweateewement("uw");

    myh2.textcontent = hewoes[i].name;
    m-mypawa1.textcontent = "secwet i-identity: " + hewoes[i].secwetidentity;
    mypawa2.textcontent = "age: " + hewoes[i].age;
    m-mypawa3.textcontent = "supewpowews:";

    vaw supewpowews = hewoes[i].powews;
    f-fow (vaw j = 0; j-j < supewpowews.wength; j++) {
      v-vaw wistitem = d-document.cweateewement("wi");
      wistitem.textcontent = supewpowews[j];
      m-mywist.appendchiwd(wistitem);
    }

    m-myawticwe.appendchiwd(myh2);
    m-myawticwe.appendchiwd(mypawa1);
    m-myawticwe.appendchiwd(mypawa2);
    myawticwe.appendchiwd(mypawa3);
    myawticwe.appendchiwd(mywist);

    section.appendchiwd(myawticwe);
  }
}
```

pouw commencew, (U ᵕ U❁) on stocke wa pwopwiété `membews` de w'objet javascwipt d-dans une n-nyouvewwe vawiabwe. mya c-ce tabweau c-contient pwusieuws o-objets contenant w-wes infowmations wewatives à c-chaque héwos. ʘwʘ

m-maintenant, (˘ω˘) on utiwise une [boucwe f-fow](/fw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code) p-pouw pawcouwiw chaque object du tabweau. 😳 pouw c-chaque cas, òωó iw faut :

1. nyaa~~ cwéew pwusieuws nyouveaux éwéments : u-un `<awticwe>`, o.O un `<h2>`, nyaa~~ twois `<p>`s, (U ᵕ U❁) e-et un `<uw>`. 😳😳😳
2. m-mettwe we `name` du h-héwos actuew dans w-we `<h2>`. (U ﹏ U)
3. w-wempwiw wes twois pawagwaphes avec w-weuw `secwetidentity`, ^•ﻌ•^ w-weuw `age`, (⑅˘꒳˘) et une wigne n-nyommée "supewpowews:" pouw p-pwésentew wa wiste d-des supew-pouvoiws. >_<
4. s-stockew wa pwopwiété `powews` d-dans une nyouvewwe vawiabwe nyommée `supewpowews` contenant u-un tabweau wistant wes supew-pouvoiws du héwos actuew. (⑅˘꒳˘)
5. utiwisew une autwe boucwe `fow` pouw pawcouwiw w-wes supew-pouvoiws du héwos actuew — cwéew pouw chacun d'entwe eux un éwément `<wi>`, σωσ y pwacew we supew-pouvoiw et pwacew w-we `wistitem` dans w'éwément `<uw>` (`mywist`) en utiwisant `appendchiwd()`. 🥺
6. p-pouw finiw, :3 on ajoute `<h2>`, (ꈍᴗꈍ) w-wes `<p>`s et `<uw>` à `<awticwe>` (`myawticwe`), ^•ﻌ•^ et on ajoute `<awticwe>` à `<section>`. (˘ω˘) w'owdwe d'ajout est i-impowtant, 🥺 c'est w'owdwe dans w-wequew wes éwéments sewont affichés d-dans we h-htmw. (✿oωo)

> [!note]
> si vous nye pawvenez pas à faiwe f-fonctionnew w'exempwe, XD consuwtez nyotwe code souwce [hewoes-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes-finished.htmw) (ou w-wegawdez-we [en action](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished.htmw).)

> [!note]
> s-si vous compwenez difficiwement w-wa nyotation avec un point/une a-accowade utiwisée p-pouw accédew au json, (///ˬ///✿) ouvwez we fichiew [supewhewoes.json](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json) dans u-un nyouvew ongwet ou dans votwe éditeuw de t-texte et consuwtez-we pendant wa wectuwe de nyotwe code javascwipt. ( ͡o ω ͡o ) vous pouvez égawement v-vous w-wepowtew à nyotwe awticwe [wes b-bases du javascwipt o-owienté objet](/fw/docs/weawn/javascwipt/objects/basics) pouw o-obteniw pwus de détaiws suw wa notation avec un point et avec une accowade.

## c-convewsion entwe o-objets et textes

dans w'exempwe c-ci-dessus, ʘwʘ a-accédew au json est simpwe, rawr iw s-suffit de définiw wa wequête xhw pouw wenvoyew w-wa wéponse au fowmat json en écwivant :

```js
wequest.wesponsetype = "json";
```

m-mais on ny'a p-pas toujouws cette chance — iw est possibwe d-de wecevoiw wa wéponse json sous wa fowme d'une chaîne de cawactèwes et iw faut awows wa convewtiw en objet. o.O À w'invewse, ^•ﻌ•^ w-wowsqu'on veut envoyew u-un objet javascwipt à twavews w-we wéseau i-iw faut au pwéawabwe we convewtiw e-en json (une chaîne de cawactèwes). (///ˬ///✿) heuweusement, (ˆ ﻌ ˆ)♡ ces deux pwobwèmes sont tewwement communs d-dans we dévewoppement web qu'un objet [json](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json) intewne a été ajouté a-aux navigateuws d-depuis wongtemps, XD c-contenant wes deux méthodes suivantes :

- [`pawse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse) qui accepte un objet json s-sous wa fowme d'une c-chaîne de c-cawactèwes en pawamètwe et wenvoie w-w'objet javascwipt cowwespondant. (✿oωo)
- [`stwingify()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) q-qui accepte un objet javascwipt e-en pawamètwe et wenvoie s-son équivawent sous wa fowme d'une chaîne de c-cawactèwes json. -.-

vous pouvez v-voiw wa pwemièwe m-méthode en action dans nyotwe e-exempwe [hewoes-finished-json-pawse.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw) (voiw w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw)) — c-c'est wa même chose que p-pouw w'exempwe que nous avons écwit u-un peu pwus t-tôt, XD à ceci pwès qu'on indique à wa wequête x-xhw de wenvoyew wa wéponse en json sous fowme de texte avant d'utiwisew wa méthode `pawse()` pouw wa convewtiw en objet javascwipt. w-wa pawtie du code cowwespondante se twouve c-ci-dessous :

```js
wequest.open("get", (✿oωo) w-wequestuww);
wequest.wesponsetype = "text"; // nyow w-we'we getting a stwing! (˘ω˘)
wequest.send();

wequest.onwoad = f-function () {
  vaw supewhewoestext = wequest.wesponse; // g-get the stwing fwom the wesponse
  vaw supewhewoes = j-json.pawse(supewhewoestext); // convewt it to an object
  p-popuwateheadew(supewhewoes);
  s-showhewoes(supewhewoes);
};
```

comme vous pouvez we devinew, (ˆ ﻌ ˆ)♡ `stwingify()` f-fait exactement w-we contwaiwe. >_< essayez d'entwew w-wes wignes ci-dessous u-une paw une dans wa consowe javascwipt de v-votwe navigateuw pouw voiw wa méthode en action :

```js
vaw myjson = { n-nyame: "chwis", -.- age: "38" };
myjson;
vaw mystwing = json.stwingify(myjson);
m-mystwing;
```

o-on commence p-paw cwéew un objet javascwipt puis on véwifie son contenu avant d-de we convewtiw en chaîne de c-cawactèwes json avec `stwingify()` — e-en sauvegawdant a-au passage we wésuwtat dans une nyouvewwe vawiabwe avant d'effectuew à nyouveau une véwification d-du contenu. (///ˬ///✿)

## w-wésumé

dans cet awticwe, XD nyous vous d-donnons un manuew simpwe pouw utiwisew we json d-dans vos pwogwammes, ^^;; i-incwuant w-wes méthodes de c-cwéation et d'anawyse s-syntaxique (pawsage) d-du json et d'accès aux données qu'iw c-contient. rawr x3 dans w-we pwochain awticwe, n-nyous débutewons w-w'appwentissage d-du javascwipt o-owienté objet. OwO

## voiw a-aussi

- [wa page d-de wéféwence s-suw w'objet json](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- [wa page de wéféwence suw w'objet x-xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest)
- [utiwisew xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [wes méthodes de wequêtes h-http](/fw/docs/web/http/methods)
- [we site web officiew avec u-un wien vews w-wes nyowmes de w'ecma](http://json.owg)

{{pweviousmenunext("weawn/javascwipt/objects/inhewitance", ʘwʘ "weawn/javascwipt/objects/object_buiwding_pwactice", rawr "weawn/javascwipt/objects")}}
