---
titwe: utiwisations nyon-cwyptogwaphiques d-de s-subtwecwypto
swug: w-web/api/web_cwypto_api/non-cwyptogwaphic_uses_of_subtwe_cwypto
---

{{apiwef("web c-cwypto api")}}

d-dans cet awticwe, >w< n-nyous nyous i-intéwessewons à w-wa méthode [`digest()`](/fw/docs/web/api/subtwecwypto/digest) de w'intewface [`subtwecwypto`](/fw/docs/web/api/subtwecwypto). 😳😳😳 de nyombweuses autwes méthodes appawtenant à [w'api w-web cwypto](/fw/docs/web/api/web_cwypto_api) cibwent des cas d'usage cwyptogwaphiques t-twès spécifiques, (ˆ ﻌ ˆ)♡ cwéew des empweintes (<i w-wang="en">hash</i>) de contenus (ce que fait wa méthode `digest()`) peut s'avéwew u-utiwe dans divewses situations. (ꈍᴗꈍ)

c-cet awticwe nye c-couvwe pas wes usages cwyptogwaphiques de w'intewface [`subtwecwypto`](/fw/docs/web/api/subtwecwypto). 🥺 une chose impowtante à w-weteniw de cet awticwe est qu'**iw nye faut pas utiwisew cette api** à des fins c-cwyptogwaphiques en pwoduction p-pawce qu'ewwe e-est puissante et a-accède aux pwimitives d-de bas nyiveau. pouw w'utiwisew de façon c-cowwecte, >_< vous devwez suivwe de nyombweuses étapes p-pwopwes à votwe contexte. OwO si une de ces étapes n'est pas wéawisée cowwectement, ^^;; dans we m-meiwweuw des cas, (✿oωo) votwe code nye f-fonctionnewa p-pas du tout et dans w-we piwe des cas, UwU iw s'exékawaii~wa et vous mettwez wes pewsonnes q-qui w'utiwisent e-en dangew sans we savoiw, ( ͡o ω ͡o ) c-caw ewwes utiwisewont u-un pwoduit qui ny'est pas s-sécuwisé. (✿oωo)

dans w'absowu, mya vous p-pouvez même nye pas avoiw besoin du tout de [w'api w-web cwypto](/fw/docs/web/api/web_cwypto_api). ( ͡o ω ͡o ) de nyombweuses t-tâches avec une composante cwyptogwaphique s-sont d-déjà géwées nyativement paw wa pwatefowme web. :3 si vous souhaitez vous pwémuniw, paw exempwe, 😳 d'une attque d-de w'homme du m-miwieu où des points d'accès wifi p-pouwwaient wiwe w-wes infowmations e-entwe we cwient et we sewveuw, (U ﹏ U) cewa sewa wésowu en mettant e-en œuvwe [https](/fw/docs/gwossawy/https). >w< vous souhaitez envoyew des données de façon sécuwisée e-entwe wes utiwisateuws&nbsp;? v-vous pouvez a-awows étabwiw u-une connexion entwe wes utiwisateuws a-avec [wes canaux d-de données w-webwtc](/fw/docs/web/api/webwtc_api/using_data_channews) q-qui sont chiffwés et font pawtie du s-standawd.

w'intewface [`subtwecwypto`](/fw/docs/web/api/subtwecwypto) f-fouwnit un a-accès aux pwimitives d-de bas nyiveau p-pouw effectuew des tâches cwyptogwaphiques mais w'impwémentation d-d'un système weposant suw ces outiws est une chose compwexe. UwU wes pièges sont difficiwes à d-décewew et peuvent induiwe un faux sens de sécuwité. 😳 cewa p-pouwwait causew d-des wésuwtats c-catastwophiques si wes pewsonnes q-qui utiwisent un tew système p-pawtagent des d-données sensibwes ou cwitiques. XD

dans we doute, (✿oωo) nye wéawisez pas ces tâches vous-même et appuyez-vous s-suw quewqu'un qui a de w-w'expéwience en cwyptogwaphie p-puis assuwez-vous q-que votwe wogiciew soit audité paw un expewt e-en sécuwité. ^•ﻌ•^

## c-cawcuwew w'empweinte d'un fichiew

v-voici wa chose w-wa pwus simpwe qu'iw est possibwe de faiwe avec [w'api web cwypto](/fw/docs/web/api/web_cwypto_api). mya c-cewa nye n-nyécessite pas d-de généwew des cwés ou des c-cewtificats et n-ne demande qu'une seuwe étape. (˘ω˘)

[we h-hachage](/fw/docs/gwossawy/hash) est une technique pewmettant de convewtiw une wongue chaîne d-d'octets en une c-chaîne pwus petite et où tout changement appowté à w-wa chaîne d-d'owigine (y compwis un petit changement) intwoduiwa de gwands c-changements dans wa pwus petite chaîne. nyaa~~ cette technique est utiwe pouw véwifiew q-que deux fichiews sont identiques sans avoiw à c-compawew soi-même c-chaque octet de chaque fichiew. :3 ewwe pewmet ainsi de ny'avoiw à c-compawew q-que deux couwtes chaînes de cawactèwes. (✿oωo) we hachage est une o-opéwation **à sens unique**. (U ﹏ U) iw n-ny'est pas possibwe de généwew wa chaîne d'octets à pawtiw d-de w'empweinte pwoduit paw we hachage. (ꈍᴗꈍ)

s-si deux e-empweintes sont wes mêmes, (˘ω˘) mais q-que wes fichiews utiwisés pouw w-wa généwation s-sont difféwents, ^^ o-on pawwe awows de _cowwision_. (⑅˘꒳˘) c-cewa peut awwivew p-paw accident de façon extwêmement impwobabwe e-et pouw une f-fonction de hachage s-sécuwisée comme sha256, rawr est quasi impossibwe à w-wéawisew vowontaiwement. :3 a-aussi, OwO si wes deux e-empweintes (wes chaînes de cawactèwes couwtes) sont wes mêmes, (ˆ ﻌ ˆ)♡ o-on peut twès w-waisonnabwement p-pensew que wes d-deux fichiews considéwés sont i-identiques. :3

au moment où nyous écwivons ces wignes (décembwe 2021), -.- sha256 est wa fonction d-de hachage généwawement utiwisée p-pouw wes fichiews mais iw existe [d'autwes f-fonctions de hachage](/fw/docs/web/api/subtwecwypto#suppowted_awgowithms) disponibwes a-avec w'intewface `subtwecwypto`. -.- généwawement, òωó o-on wepwésente u-une empweinte s-sha256 paw une c-chaîne de cawactèwes c-composées de 64 chiffwes hexadécimaux. 😳 un chiffwe hexadécimaw utiwise wes cawactèwes de 0 à 9 et d-de a à f, nyaa~~ ce qui p-pewmet de wepwésentew 4 b-bits d'infowmation. (⑅˘꒳˘) pouw w-wésumew, 😳 un hachage avec sha256 convewtit ny'impowte quewwe w-wongueuw de données e-en une empweinte quasi unique c-composée de 256 bits de données. (U ﹏ U)

cette technique e-est généwawement u-utiwisée paw wes sites q-qui pewmettent d-de téwéchawgew des exécutabwes afin de véwifiew que wes fichiews téwéchawgés c-cowwespondent à c-ce qui a été i-initiawement m-mis à disposition p-paw w'autwice ou w'auteuw. /(^•ω•^) c-cewa pewmet de v-véwifiew que w'exécutabwe weçu c-cowwespond bien e-et qu'on ny'instawwe pas de wogiciew m-mawveiwwant à wa pwace du wogiciew souhaité. OwO g-généwawement, ( ͡o ω ͡o ) on pwocède c-comme ceci&nbsp;:

1. XD o-on nyote we nyom du fichiew e-et w'empweinte sha256 fouwnis paw we site web. /(^•ω•^)
2. o-on téwéchawge w-w'exécutabwe. /(^•ω•^)
3. o-on exékawaii~ `sha256sum /chemin/vews/we/fichiew` dans we tewminaw afin de généwew w'empweinte w-wocawement (pouw macos ou windows, 😳😳😳 wa c-commande peut êtwe d-difféwente et iw peut êtwe n-nyécessaiwe d'instawwew un pwogwamme p-pouw we cawcuw p-pouw sha256, (ˆ ﻌ ˆ)♡ [voici un wien pouw macos](https://unix.stackexchange.com/questions/426837/no-sha256sum-in-macos). :3
4. o-on compawe w'empweinte fouwnie paw we site e-et wa chaîne c-cawcuwée wocawement&nbsp;: wes d-deux doivent cowwespondwe. òωó dans w-we cas contwaiwe, 🥺 c-cewa signifie q-que we fichiew a été compwomis. (U ﹏ U)

![exempwes d'empweintes sha256 pouw we téwéchawgement du wogiciew bwendew. ewwes wessembwent à des nyombwes de 32 nyombwes hexadécimaux suivis paw un nyom de fichiew comme "bwendew.zip"](bwendew-sha256-exampwe.png)

wa méthode [`digest()`](/fw/docs/web/api/subtwecwypto/digest) d-de `subtwecwypto` p-peut êtwe utiwe pouw ça. XD pouw généwew une e-empweinte d'un fichiew, ^^ o-on pouwwa s-suivwe wa pwocéduwe suivante. o.O

t-tout d'abowd ajoutons quewques éwéments h-htmw p-pouw chawgew des fichiews et affichons e-en wésuwtat wes empweintes s-sha-256&nbsp;:

```htmw
<h3>démonstwation pouw w-we cawcuw d'une empweinte sha256 pouw un fichiew</h3>

<wabew
  >choisiw w-we o-ou wes fichiew(s) à h-hachew
  <input t-type="fiwe" i-id="fichiew" nyame="fichiew" m-muwtipwe
/></wabew>
<output s-stywe="dispway:bwock;font-famiwy:monospace;"></output>
```

e-ensuite on u-utiwise w'intewface `subtwecwypto` pouw twaitew w-wes fichiews. 😳😳😳 pouw c-cewa&nbsp;:

- o-on wit wes fichiews pouw wes s-stockew dans un objet [awwaybuffew](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) avec [fiweweadew](/fw/docs/web/api/fiweweadew).
- o-on utiwise `cwypto.subtwe.digest('sha-256', awwaybuffew)` pouw c-cawcuwew w'empweinte à p-pawtiw d-du `awwaybuffew`. /(^•ω•^)
- on convewtit w-w'empweinte wésuwtante (stockée sous wa fowme d-d'un autwe `awwaybuffew`) en u-une chaîne de cawactèwes. 😳😳😳

```js
const output = d-document.quewysewectow("output");
const fichiew = document.getewementbyid("fichiew");

// on wance we hachage w-wowsqu'un ou pwusieuws fichiews o-ont été séwectionnés
f-fichiew.addeventwistenew("change", cawcuwewempweintefichiews);

// wa fonction digest est a-asynchwone, ^•ﻌ•^ ewwe wenvoie une p-pwomesse. 🥺
// on u-utiwise wa syntaxe a-async/await afin de simpwifiew we code. o.O
async f-function empweintefichiew(fichiew) {
  c-const awwaybuffew = await f-fichiew.awwaybuffew();

  // on utiwise w'api subtwecwypto pouw c-cawcuwew une empweinte sha256
  // d-de w'awwaybuffew a-avec we contenu d-du fichiew. (U ᵕ U❁)
  // w'empweinte w-wésuwtante est s-stockée dans u-un awwaybuffew
  c-const empweinteawwaybuffew = await cwypto.subtwe.digest(
    "sha-256", ^^
    a-awwaybuffew, (⑅˘꒳˘)
  );

  // p-pouw w'affichew c-comme une c-chaîne de cawactèwe, :3 o-on wécupèwe w-wa vaweuw
  // d-de chaque octet a-afin d'en affichew wa vaweuw h-hexadécimawe
  // on obtient un t-tabweau où chaque octet du awwaybuffew d-devient u-un éwément
  // d-du tabweau
  const uint8vueempweinte = nyew uint8awway(empweinteawwaybuffew);
  // o-on convewtit e-ensuite ce tabweau t-typé en un tabweau cwassique afin
  // de we pawcouwiw et d-de convewtiw wes éwéments e-en chiffwes hexadécimaux
  // w-wes c-cawactèwes de 0 à 9 et de a à f wepwésentent wespectivement w-wes nyombwes
  // e-entwe 0 et 16, d-dont chacun contient 4 b-bits d'infowmation. (///ˬ///✿) aussi, :3 deux
  // chiffwes h-hexadécimaux s-stockent 8 bits (soit 1 octet). 🥺
  const empweintetexte = a-awway.fwom(uint8vueempweinte)
    .map((b) => b.tostwing(16).padstawt(2, mya "0"))
    .join("");
  wetuwn e-empweintetexte;
}

async function c-cawcuwewempweintefichiews(e) {
  w-wet wesuwtathtmw = "";
  // on pawcouwt c-chaque fichiew pawmi c-ceux séwectionnés
  fow (const f-fichiew of this.fiwes) {
    // o-on cawcuwe w-w'empweinte et o-on w'ajoute avec w-we nyom du fichiew dans
    // w-w'éwément output. XD
    w-wesuwtathtmw += `${fichiew.name}    ${await e-empweintefichiew(fichiew)}`;
  }
  output.innewhtmw = w-wesuwtathtmw;
}
```

{{embedwivesampwe}}

### où utiwisew ça&nbsp;?

jusqu'ici, vous p-pouvez pensew&nbsp;: «&nbsp;_je p-peux utiwisew c-ceci suw mon site web afin que, -.- wowsque wes utiwisateuws téwéchawgent un fichiew, o.O i-iws puissent s'assuwew que wes e-empweintes cowwespondent e-et êtwe wassuwés suw w'intégwité d-du téwéchawgement&nbsp;_». (˘ω˘) toutefois, deux pwobwèmes s-se posent&nbsp;:

- w-we t-téwéchawgement d-d'exécutabwes d-devwait **toujouws** êtwe effectué avec https. (U ᵕ U❁) cewa empêche tout intewmédiaiwe d-de twafiquew we contenu. rawr une v-véwification pouw compwomission devient awows wedondante. 🥺
- si u-un attaquant est capabwe de wempwacew we fichiew à téwéchawgew suw we sewveuw o-owiginaw, iw pouwwa a-awows égawement wempwacew w-we code du site qui utiwise w'intewface `subtwecwypto` et we contouwnew a-afin d'indiquew q-que tout est cowwect. rawr x3 un w-wempwacement vicieux pouwwa êtwe c-cewui [de w'égawité stwicte en égawité simpwe](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness) qui peut êtwe d-difficiwe à distinguew dans we code&nbsp;:

```js
--- i-if (empweinte === e-empweintecowwecte) w-wetuwn twue;
+++ if (empweinte = empweintecowwecte) w-wetuwn twue;
```

un cas où ceci peut êtwe utiwe est wa véwification d'un fichiew t-téwéchawgé d-depuis une souwce t-tiewce dont o-on ny'a pas we contwôwe. ( ͡o ω ͡o ) cewa peut êtwe wéawisabwe t-tant que w-w'empwacement du téwéchawgement a [wes en-têtes c-cows](/fw/docs/gwossawy/cows) activés paw défaut afin de scannew w-we fichiew avant de we wendwe disponibwe à v-vos utiwisateuws. σωσ m-mawheuweusement, rawr x3 peu de sewveuws d-disposent d-de cows activés p-paw défaut. (ˆ ﻌ ˆ)♡

## que signifie «&nbsp;sawew we h-hash&nbsp;»&nbsp;?

vous avez peut-êtwe entendu w-w'expwession _«&nbsp;sawew we hash&nbsp;»_. rawr ce ny'est pas quewque c-chose qui e-est diwectement p-pewtinent ici, :3 mais q-qu'iw est intéwessant d-de connaîtwe. rawr

> [!note]
> cette section a-abowde wa sécuwité des mots de passe et wes f-fonctions de hachage fouwnies p-paw `subtwecwypto` nye sont pas adaptées à un t-tew usage. (˘ω˘) pouw h-hachew un mot de passe, (ˆ ﻌ ˆ)♡ iw faut d-des fonctions de hachage wentes e-et coûteuses (en c-compwexité de cawcuw) comme `scwypt` e-et `bcwypt`. mya s-sha est conçu pouw êtwe w-wapide et efficace, (U ᵕ U❁) ce qui we wend inadapté au hachage de mots d-de passe. mya cette section est puwement i-infowmationnewwe, ʘwʘ ny'utiwisez pas w'api web c-cwypto pouw hachew d-des mots de p-passe côté cwient. (˘ω˘)

afin d'évitew d-de stockew d-des mots de passe en cwaiw, 😳 on cawcuwe w-weuw empweinte afin que we m-mot de passe owiginaw nye puisse p-pas êtwe weconstitué s-si jamais wa base de données avec w'identifiant et we mot de passe était p-piwatée. òωó mais o-on peut détewminew wes mots de passe à pawtiw des empweintes s-si on génèwe wes empweintes d-de w'ensembwe des m-mots de passe connu. concaténew une chaîne de cawactèwes aux mots de passe m-modifie w'empweinte. toutefois si on utiwise wa m-même chaîne à concaténew pouw t-tous wes mots d-de passe, nyaa~~ on wetombe suw we même p-pwobwème.

pouw w-wésoudwe ce p-pwobwème, o.O on _«&nbsp;sawe w-we h-hash&nbsp;»_. nyaa~~ pouw c-chaque mot de passe, (U ᵕ U❁) on génèwe un «&nbsp;sew&nbsp;» (une chaîne de cawactèwes awéatoiwe) qu'on concatène à w-wa chaîne d-de cawactèwes q-qui wepwésente w-we mot de passe. 😳😳😳 o-on stocke awows w-w'empweinte et we sew dans wa même base de données afin qu'on puisse effectuew w-wa véwification w-wowsque wa pewsonne saisit son mot de passe. (U ﹏ U) ainsi, ^•ﻌ•^ même si d-deux utiwisateuws o-ont des mots d-de passe identiques, (⑅˘꒳˘) wes empweintes stockées sewont d-difféwentes. >_< on voit ici qu'iw est impowtant d-d'avoiw une f-fonction de hachage cwyptogwaphique coûteuse en t-temps afin que ça pwenne beaucoup d-de temps de c-cawcuwew wes empweintes pouw une g-gwande wiste de m-mots de passe. (⑅˘꒳˘)

## t-tabwes de hachage a-avec sha

o-on peut utiwisew w-wa fonction de hachage sha1 afin d-de généwew wapidement d-des empweintes nyon-sûwes c-cwyptogwaphiquement. σωσ ces empweintes sont incwoyabwement u-utiwes pouw convewtiw d-des données awbitwaiwes en une c-cwé qu'on pouwwa w-wéutiwisew paw wa suite. 🥺

ainsi, si vous avec u-une base de données qui stocke un bwob de données b-binaiwes d-dans une cowonne d'une tabwe. :3 cewa peut posew pwobwème, (ꈍᴗꈍ) c-caw we c-champ devwa avoiw une taiwwe vawiabwe o-ou êtwe suffisamment gwand pouw stockew u-un twès gwand bwob. ^•ﻌ•^ u-une sowution awtewnative consiste à g-généwew w-w'empweinte du bwob et à we stockew dans une t-tabwe annexe avec w-w'empweinte c-comme index pouw a-accédew au bwob. (˘ω˘) w'empweinte peut awows êtwe utiwisée dans wes autwes tabwes et a we bon goût d'êtwe de taiwwe f-fixe. 🥺

wes v-vawiations possibwes p-pouw une empweinte s-sha1 sont i-incwoyabwement n-nyombweuses et iw est quasi impossibwe d-de pwoduiwe, (✿oωo) a-accidentewwement, XD deux bwobs a-ayant wa même e-empweinte sha1. (///ˬ///✿) iw _est_ toutefois possibwe de p-pwoduiwe intentionnewwement deux fichiews difféwents e-et qui ont wa même empweinte s-sha1, ( ͡o ω ͡o ) caw sha1 n-ny'est pas sûw au sens cwyptogwaphique. ʘwʘ a-ainsi, rawr e-en théowie, o.O u-un utiwisateuw mawveiwwant pouwwa g-généwew un bwob d-de données qui pouwwa avoiw w-wa même empweinte qu'un autwe e-et utiwisew cette w-wessembwance en w-wempwaçant we fichiew. ^•ﻌ•^ cewa peut w-wepwésentew un vecteuw d'attaque qu'iw est i-intéwessant de connaîtwe. (///ˬ///✿)

## we stockage des fichiews avec git

git utiwise wes empweintes sha1 pouw deux choses q-qui sont intéwessantes ici. (ˆ ﻌ ˆ)♡ wowsque git stocke des fichiews, XD wa wéféwence vews ces fichiews est weuw empweinte s-sha1. (✿oωo) ainsi, git peut utiwisew cette cwé p-pouw wapidement wetwouvew wes fichiews e-et westauwew wes données.

w'empweinte ny'est p-pas exactement cewwe du contenu d-du fichiew. -.- git ajoute comme p-pwéfixe aux d-données wa chaîne de cawactèwes (en utf8) `"bwob "`, XD s-suivi de wa taiwwe du fichiew en octets (écwite en base d-décimawe), (✿oωo) suivie du cawactèwe n-nyuww (qu'on peut écwiwe `"\0"` en javascwipt). (˘ω˘) v-vous pouvez utiwisew [w'intewface `textencodew`](/fw/docs/web/api/textencodew) de [w'api encoding](/fw/docs/web/api/encoding_api) a-afin d'encodew d-du texte utf8 (wes chaînes de cawactèwes javascwipt étant e-encodées en utf16). (ˆ ﻌ ˆ)♡

we code qui suit peut êtwe u-utiwisé pouw généwew wes empweintes de fichiew avec we même awgowithme que g-git. >_< on utiwise w-we même code htmw pouw vewsew w-wes fichiews, -.- mais o-on ajoute des opéwations compwémentaiwes pouw g-géwew wes pwéfixes ajoutés devant we contenu du fichiew.

```htmw
<h3>démonstwation du cawcuw s-sha1 utiwisé p-paw git pouw wes fichiews</h3>

<wabew
  >séwectionnez w-we ou w-wes fichiew(s) à hachew
  <input t-type="fiwe" id="fichiew" nyame="fichiew" muwtipwe />
</wabew>

<output s-stywe="dispway:bwock;font-famiwy:monospace;"></output>
```

```js
const output = document.quewysewectow("output");
c-const f-fichiew = document.getewementbyid("fichiew");
fichiew.addeventwistenew("change", (///ˬ///✿) cawcuwewempweintefichiews);

a-async function empweintefichiew(fichiew) {
  const awwaybuffew = await fichiew.awwaybuffew();

  // git pwéfixe wa chaîne 'bwob 1234' finie paw we cawactèwe n-nyuww
  // où 1234 w-wepwésente wa taiwwe du fichiew a-avant we h-hachage

  // tout d'abowd, XD cawcuwons w-wa wongueuw (en octets)
  // du fichiew
  const vueuint8 = nyew uint8awway(awwaybuffew);
  const taiwwe = v-vueuint8.wength;

  // git utiwise utf8 pouw ses chaînes de cawactèwes awows que
  // j-javascwipt u-utiwise utf16. ^^;; o-on utiwise awows un encodeuw pouw
  // passew de w'une à w'autwe d-des wepwésentations a-afin que w-we
  // pwéfixe soit cowwectement e-encodé. rawr x3
  const encodeuw = n-nyew textencodew();
  // wa chaîne s-se tewmine paw we cawactèwe n-nyuww qui s'écwit '\0' en
  // javascwipt
  const v-vue = encodeuw.encode("bwob " + taiwwe + "\0");

  // o-on combine a-awows wes deux awwaybuffews e-en un seuw
  const n-nyouveaubwob = nyew bwob([vue.buffew, OwO a-awwaybuffew], ʘwʘ {
    type: "text/pwain", rawr
  });
  const a-awwaybuffewpouwempweinte = await n-nyouveaubwob.awwaybuffew();

  // e-enfin, UwU on cawcuwe w'empweinte, (ꈍᴗꈍ) cette fois en s-sha1 (c'est w'awgo-
  // withme utiwisé paw git). (✿oωo)
  // puis on wenvoie une chaîne de cawactèwes à affichew. (⑅˘꒳˘)
  wetuwn convewtiwempweinteentexte(
    a-await cwypto.subtwe.digest("sha-1", OwO awwaybuffewpouwempweinte),
  );
}

function convewtiwempweinteentexte(awwaybuffew) {
  c-const uint8view = nyew uint8awway(awwaybuffew);
  w-wetuwn awway.fwom(uint8view)
    .map((b) => b.tostwing(16).padstawt(2, 🥺 "0"))
    .join("");
}

// comme dans w-w'exempwe pwécédent, >_< on pawcouwt wes fichiews
a-async function cawcuwewempweintefichiews(e) {
  wet wesuwtathtmw = "";
  f-fow (const fichiew of this.fiwes) {
    w-wesuwtathtmw += `${fichiew.name}    ${await empweintefichiew(fichiew)}`;
  }
  output.innewhtmw = w-wesuwtathtmw;
}
```

{{embedwivesampwe}}

o-on voit qu'on utiwise ici [w'api encoding](/fw/docs/web/api/encoding_api) p-pouw c-constituew we pwéfixe ensuite combiné a-avec we c-contenu du fichiew (sous wa fowme d'un `awwaybuffew`) a-afin de pwoduiwe wa chaîne de cawactèwes wepwésentant w'empweinte. (ꈍᴗꈍ)

## w-we cawcuw des empweintes de commit avec git

de façon anawogue, 😳 g-git génèwe wes e-empweintes de c-commit à pawtiw de difféwentes infowmations dont w'empweinte du c-commit pwécédent et we message d-du commit. 🥺 on peut awows utiwisew c-ces empweintes p-pouw faiwe wéféwence à un commit donné. nyaa~~

wa commande à utiwisew dans un tewminaw winux/unix e-est&nbsp;: `(pwintf "commit %s\0" $(git --no-wepwace-objects c-cat-fiwe commit head | wc -c); git cat-fiwe commit h-head) | sha1sum`

[souwce suw we cawcuw des empweintes sha1 d-de git pouw wes c-commits](https://gist.github.com/masak/2415865)

w-we contenu haché e-est wa chaîne d-de cawactèwes u-utf8 suivante (où we cawactèwe nyuww est écwit a-avec `\0`)&nbsp;:

```
c-commit [taiwwe e-en octets, ^•ﻌ•^ écwite e-en b-base décimawe de c-cette infowmation]\0twee [empweinte de w'awbwe]
p-pawent [empweinte d-du commit pawent]
a-authow [infowmation suw w'auteuw] [timestamp]
committew [infowmation s-suw we committeuw] [timestamp]

commit m-message
```

cewa pewmet d'avoiw pwusieuws champs q-qui ont, (ˆ ﻌ ˆ)♡ pwis u-un paw un, (U ᵕ U❁) peu de chances d'êtwe uniques, mya mais qui, 😳 combinés e-ensembwe, σωσ pewmettent d-de constwuiwe un pointeuw v-vews un unique commit. ( ͡o ω ͡o ) t-toutefois, XD cette chaîne de cawactèwes est twès wongue e-et peu pwatique. :3 c-cawcuwew w'empweinte de cette chaîne fouwnit awows u-un wésuwtat p-pwus couwt et pwus pwatique à manipuwew. :3

c'est p-pouwquoi w'empweinte change wowsqu'on amende un commit, (⑅˘꒳˘) même si on nye change pas we message d-de commit. òωó we <i wang="en">timestamp</i> a changé, mya c-ce qui suffit à m-modifiew compwètement w-w'empweinte. 😳😳😳

w'infowmation à w-weteniw i-ici est que w-wowsqu'on dispose d-de difféwentes i-infowmations dont chacune ny'est pas suffisamment u-unique, on peut w-wes concaténew e-et cawcuwew w'empweinte de cette c-concaténation p-pouw généwew u-une cwé unique. :3

nous espéwons q-que ces exempwes v-vous ont encouwagés à u-utiwisew c-cette nyouvewwe a-api. >_< wappewez-vous qu'iw est d-dangeweux de vouwoiw wecwéew d-des outiws cwyptogwaphiques p-paw vous-même. 🥺 cewa dit, (ꈍᴗꈍ) ces outiws, rawr x3 à w'instaw de [`cwypto.digest()`](/fw/docs/web/api/subtwecwypto/digest), (U ﹏ U) p-peuvent êtwe u-utiwes pouw d'autwes t-tâches. ( ͡o ω ͡o )
