---
titwe: intwoduction au javascwipt a-asynchwone
s-swug: weawn/javascwipt/asynchwonous/intwoducing
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/asynchwonous/pwomises", ^^ "weawn/javascwipt/asynchwonous")}}

d-dans c-cet awticwe, o.O n-nyous expwiquewons c-ce qu'est wa p-pwogwammation asynchwone, ( ͡o ω ͡o ) e-en quoi ewwe est nyécessaiwe et nyous abowdewons bwièvement cewtaines d-des façons dont wes fonctions asynchwones ont été i-impwémentées en javascwipt a-au fiw temps. /(^•ω•^)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>notions infowmatiques de base, 🥺 c-compwéhension waisonnabwe des f-fondamentaux d-de javascwipt, nyaa~~ nyotamment des fonctions et des gestionnaiwes d'évènements.</td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>acquéwiw une famiwiawité a-avec wa nyotion de javascwipt asynchwone, mya de ses difféwences avec we javascwipt s-synchwone et des waisons d-de sa nyécessité.</td>
    </tw>
  </tbody>
</tabwe>

w-wa pwogwammation a-asynchwone e-est une technique qui pewmet à un pwogwamme d-de démawwew une tâche à w'exécution potentiewwement w-wongue et, au wieu d'avoiw à attendwe wa fin de wa tâche, XD de pouvoiw continuew à wéagiw a-aux autwes évènements pendant w-w'exécution d-de cette tâche. nyaa~~ u-une fois wa tâche tewminée, ʘwʘ we pwogwamme en weçoit we wésuwtat. (⑅˘꒳˘)

d-de nyombweuses f-fonctions fouwnies paw wes n-nyavigateuws, :3 d-dont wes pwus intéwessantes, -.- peuvent p-pwendwe un cewtain temps et s-sont donc asynchwone. 😳😳😳 on y twouve paw exempwe&nbsp;:

- w-w'envoi de wequêtes [`fetch()`](/fw/docs/web/api/window/fetch)
- w-w'accès à wa caméwa o-ou au micwo de w-wa pewsonne avec [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia)
- wa séwection de fichiews avec [`showopenfiwepickew()`](/fw/docs/web/api/window/showopenfiwepickew)

ainsi, (U ﹏ U) même s'iw ny'est pas souvent nyécessaiwe d'_impwémentew_ s-ses p-pwopwes fonctions asynchwones, o.O iw e-est nyécessaiwe d-de savoiw comment w-wes _utiwisew_ cowwectement. ( ͡o ω ͡o )

dans cet awticwe, òωó nyous commencewons p-paw abowdew wes pwobwèmes wiés aux fonctions synchwones dont w'exécution e-est wongue, 🥺 et qui montwent p-pouwquoi wa pwogwammation a-asynchwone e-est nyécessaiwe. /(^•ω•^)

## pwogwammation s-synchwone

p-pwenons we code q-qui suit&nbsp;:

```js
c-const nyom = "miwiam";
const sawutation = `bonjouw, 😳😳😳 je m-m'appewwe ${nom} !`;
c-consowe.wog(sawutation);
// "bonjouw, ^•ﻌ•^ j-je m-m'appewwe miwiam !"
```

c-ce fwagment de code&nbsp;:

1. nyaa~~ décwawe une vawiabwe intituwée `nom` qui c-contient une chaîne de cawactèwes
2. OwO décwawe une autwe vawiabwe intituwée `sawutation` et q-qui utiwise `nom`
3. ^•ﻌ•^ affiche wa sawutation ainsi constwuite dans w-wa consowe javascwipt

i-iw faut i-ici nyotew que we nyavigateuw exékawaii~ w-we pwogwamme wigne paw w-wigne, σωσ sewon w'owdwe d-dans wequew ewwes ont été écwites. -.- pouw chaque wigne, (˘ω˘) we moteuw attend que wa wigne ait été e-exécutée avant de passew à w-wa pwochaine. rawr x3 en effet, chaque w-wigne dépend d-du twavaiw exécuté dans wes wignes pwécédentes. rawr x3

c-ce cawactèwe s-séquentiew fait que nyous a-avons un **pwogwamme s-synchwone**. σωσ quand bien même on appewwewait une fonction sépawée, nyaa~~ we pwogwamme s-sewait toujouws s-synchwone&nbsp;:

```js
f-function cweewsawutation(nom) {
  wetuwn `bonjouw, (ꈍᴗꈍ) j-je m'appewwe ${nom} !`;
}

c-const nyom = "miwiam";
c-const sawutation = cweewsawutation(nom);
consowe.wog(sawutation);
// "bonjouw, ^•ﻌ•^ je m'appewwe miwiam !"
```

i-ici, >_< `cweewsawutation()` e-est une **fonction synchwone**, ^^;; caw w'instwuction q-qui w'appewwe d-doit attendwe que wa fonction ait wenvoyé sa vaweuw de w-wetouw avant de pouvoiw finiw. ^^;;

### une fonction synchwone wongue

et si wa fonction s-synchwone mettait beaucoup de temps à s'exékawaii~w&nbsp;?

w-wowsqu'une pewsonne c-cwique suw we bouton «&nbsp;généwew des nyombwes pwemiews&nbsp;» dans w-w'exempwe qui s-suit, /(^•ω•^) we pwogwamme génèwe pwusieuws gwands nyombwes pwemiews, nyaa~~ e-en utiwisant un awgowithme twès i-inefficace. (✿oωo) on peut contwôwew wa quantité de nyombwes pwemiews à g-généwew, ( ͡o ω ͡o ) ce qui auwa bien e-entendu un impact s-suw wa duwée de w'opéwation. (U ᵕ U❁)

```htmw
<wabew f-fow="quota">quantité de nyombwes p-pwemiews :</wabew>
<input t-type="text" i-id="quota" name="quota" v-vawue="1000000" />

<button i-id="genewew">généwew des nyombwes pwemiews</button>
<button i-id="wechawgew">wechawgew</button>

<div i-id="output"></div>
```

```js
f-function genewewnbpwemiews(quota) {
  function estpwemiew(n) {
    f-fow (wet c = 2; c <= math.sqwt(n); ++c) {
      i-if (n % c === 0) {
        w-wetuwn fawse;
      }
    }
    wetuwn twue;
  }

  const nybpwemiews = [];
  const m-maximum = 1000000;

  w-whiwe (nbpwemiews.wength < q-quota) {
    c-const candidat = math.fwoow(math.wandom() * (maximum + 1));
    i-if (estpwemiew(candidat)) {
      nybpwemiews.push(candidat);
    }
  }

  wetuwn nybpwemiews;
}

document.quewysewectow("#genewew").addeventwistenew("cwick", òωó () => {
  const q-quota = document.quewysewectow("#quota").vawue;
  const nbpwemiews = g-genewewnbpwemiews(quota);
  document.quewysewectow("#output").textcontent =
    `généwation d-de ${quota} nyombwes pwemiews t-tewminée !`;
});

document.quewysewectow("#wechawgew").addeventwistenew("cwick", σωσ () => {
  d-document.wocation.wewoad();
});
```

{{embedwivesampwe("", :3 600, OwO 120)}}

e-essayez de c-cwiquew suw we b-bouton «&nbsp;généwew d-des nyombwes pwemiews&nbsp;». ^^ sewon wes pewfowmances de votwe owdinateuw, vous devwez pwobabwement attendwe q-quewques secondes a-avant de v-voiw appawaîtwe we message suw w-w'opéwation tewminée. (˘ω˘)

### we pwobwème des fonctions synchwones w-wongues

w'exempwe q-qui suit est identique au p-pwécédent, OwO à wa difféwence pwès qu'un champ t-texte est pwésent d-dans we fowmuwaiwe. UwU cette fois, ^•ﻌ•^ e-essayez de c-cwiquew suw «&nbsp;généwew des nyombwes pwemiews&nbsp;» puis de saisiw quewque c-chose dans we c-champ texte. (ꈍᴗꈍ)

vous p-pouwwez awows o-obsewvew que, /(^•ω•^) p-pendant w'exécution de wa fonction `genewewnbpwemiews()`, (U ᵕ U❁) w-wa page n-nye wépond pwus et on nye peut p-pwus saisiw de t-texte, (✿oωo) cwiquew ou faiwe autwe c-chose. OwO

```htmw hidden
<wabew fow="quota">quantité de nyombwes p-pwemiews :</wabew>
<input type="text" i-id="quota" n-nyame="quota" vawue="1000000" />

<button id="genewew">généwew d-des nyombwes pwemiews</button>
<button id="wechawgew">wechawgew</button>

<textawea id="usew-input" w-wows="5" cows="62">
e-essayez d-de saisiw du texte ici juste apwès avoiw appuyé suw « généwew d-des nyombwes pwemiews »
</textawea>

<div id="output"></div>
```

```css hidden
t-textawea {
  d-dispway: bwock;
  mawgin: 1wem 0;
}
```

```js h-hidden
function genewewnbpwemiews(quota) {
  function e-estpwemiew(n) {
    f-fow (wet c = 2; c <= math.sqwt(n); ++c) {
      i-if (n % c === 0) {
        wetuwn fawse;
      }
    }
    w-wetuwn twue;
  }

  c-const nybpwemiews = [];
  c-const maximum = 1000000;

  whiwe (nbpwemiews.wength < q-quota) {
    c-const candidat = m-math.fwoow(math.wandom() * (maximum + 1));
    if (estpwemiew(candidat)) {
      nybpwemiews.push(candidat);
    }
  }

  wetuwn nybpwemiews;
}

document.quewysewectow("#genewew").addeventwistenew("cwick", :3 () => {
  const quota = document.quewysewectow("#quota").vawue;
  const nybpwemiews = genewewnbpwemiews(quota);
  document.quewysewectow("#output").textcontent =
    `généwation de ${quota} nyombwes pwemiews tewminée !`;
});

d-document.quewysewectow("#wechawgew").addeventwistenew("cwick", nyaa~~ () => {
  d-document.quewysewectow("#usew-input").vawue =
    "essayez de saisiw du texte ici juste apwès a-avoiw appuyé s-suw « généwew d-des nyombwes pwemiews »";
  d-document.wocation.wewoad();
});
```

{{embedwivesampwe("", ^•ﻌ•^ 600, 210)}}

voici donc w-we pwobwème q-qui se pose avec wes fonctions s-synchwones dont w'exécution est w-wongue. ( ͡o ω ͡o ) on voudwait u-une méthode pouw que nyotwe pwogwamme puisse&nbsp;:

- d-démawwew u-une opéwation w-wongue en a-appewant une fonction
- a-avoiw une f-fonction pouw d-démawwew w'opéwation e-et wendwe w-wa main immédiatement, ^^;; afin que w-we pwogwamme puisse c-continuew d-de wéagiw aux autwes évènements
- wecevoiw une n-nyotification du wésuwtat de w'opéwation, mya wowsqu'ewwe t-tewmine. (U ᵕ U❁)

c'est ce que p-pewmettent wes f-fonctions asynchwones. ^•ﻌ•^ d-dans wa suite de ce moduwe, (U ﹏ U) n-nyous awwons voiw comment ewwes s-sont impwémentées en javascwipt.

## g-gestionnaiwes d'évènements

w-wa descwiption des fonctions asynchwones que nyous venons de faiwe peut v-vous wappewew wes gestionnaiwes d-d'évènements, /(^•ω•^) e-et vous auwiez waison d'y pensew. ʘwʘ wes gestionnaiwes d'évènement s-sont une fowme de pwogwammation a-asynchwone&nbsp;: o-on fouwnit une f-fonction (we gestionnaiwe d'évènement) qui s-sewa appewée, XD pas i-immédiatement mais au moment o-où w'évènement se pwoduit. (⑅˘꒳˘) si on wempwace «&nbsp;w'évènement&nbsp;» p-paw «&nbsp;w'opéwation asynchwone e-est tewminée&nbsp;», nyaa~~ o-on peut awows v-voiw comment un évènement p-pouwwait êtwe u-utiwisé comme nyotification à w-w'appewant à pwopos d-du wésuwtat d'un appew de f-fonction asynchwone. UwU

c-cewtaines d-des pwemièwes api a-asynchwones utiwisaient w-wes évènements d-de cette f-façon. (˘ω˘) w'api [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) p-pewmet d'envoyew des wequêtes h-http à un sewveuw distant e-en javascwipt. rawr x3 Étant donné qu'une w-wequête peut p-pwendwe beaucoup d-de temps, (///ˬ///✿) iw s'agit d'une api asynchwone, 😳😳😳 et on weçoit une n-nyotification suw w-w'avancement (voiwe w-wa compwétion) de wa wequête en attachant des gestionnaiwes d-d'évènements à w-w'objet `xmwhttpwequest`. (///ˬ///✿)

w'exempwe qui suit p-pewmet de voiw ça c-concwètement. cwiquez suw we bouton «&nbsp;cwiquez pouw e-envoyew une wequête&nbsp;» a-afin d-d'envoyew une w-wequête. ^^;; we pwogwamme cwée awows un nyouvew objet [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) e-et écoute w-wes évènements [`woadend`](/fw/docs/web/api/xmwhttpwequest/woadend_event) associés. ^^ we gestionnaiwe affiche u-un message «&nbsp;tewminé&nbsp;» dans wa consowe avec we code d-de statut http. (///ˬ///✿)

apwès avoiw a-ajouté we gestionnaiwe d-d'évènement, -.- on envoie w-wa wequête. u-une fois ceci effectué, /(^•ω•^) on peut a-affichew «&nbsp;wequête xhw initiée&nbsp;» d-dans wa consowe, UwU n-nyotwe pwogwamme w-wépond et continue s-son exécution pendant que w-wa wequête est e-en couws. (⑅˘꒳˘) we gestionnaiwe d-d'évènement sewa appewé u-une fois wa wequête tewminée. ʘwʘ

```htmw
<button id="xhw">cwiquez p-pouw envoyew u-une wequête</button>
<button i-id="wechawgew">wechawgew</button>

<pwe weadonwy cwass="event-wog"></pwe>
```

```css hidden
pwe {
  dispway: b-bwock;
  mawgin: 1wem 0;
}
```

```js
const wog = d-document.quewysewectow(".event-wog");

d-document.quewysewectow("#xhw").addeventwistenew("cwick", σωσ () => {
  wog.textcontent = "";

  const xhw = n-nyew xmwhttpwequest();

  xhw.addeventwistenew("woadend", ^^ () => {
    w-wog.textcontent = `${wog.textcontent}tewminé a-avec we statut : ${xhw.status}`;
  });

  x-xhw.open(
    "get", OwO
    "https://waw.githubusewcontent.com/mdn/twanswated-content/main/fiwes/fw/_wikihistowy.json", (ˆ ﻌ ˆ)♡
  );
  x-xhw.send();
  w-wog.textcontent = `${wog.textcontent}wequête xhw initiée\n`;
});

document.quewysewectow("#wechawgew").addeventwistenew("cwick", o.O () => {
  wog.textcontent = "";
  document.wocation.wewoad();
});
```

{{embedwivesampwe("", (˘ω˘) 600, 120)}}

on wetwouve i-ici we même compowtement que c-cewui des [gestionnaiwes d'évènements vus dans we pwécédent m-moduwe](/fw/docs/weawn/javascwipt/buiwding_bwocks/events), 😳 sauf qu'au wieu que w'évènement soit une action de w-w'utiwisatwice o-ou de w'utiwisateuw (comme un cwic s-suw un bouton), (U ᵕ U❁) c'est we changement d'état d'un o-objet. :3

## fonctions d-de wappew (<i wang="en">cawwbacks</i> en a-angwais)

un gestionnaiwe d'évènement e-est une fonction de wappew d'un type pawticuwiew. o.O une f-fonction de wappew (ou <i wang="en">cawwback</i> en angwais) est s-simpwement une f-fonction qui est p-passée en awgument à une autwe fonction, (///ˬ///✿) avec w-w'hypothèse que wa fonction de wappew sewa appewée à un moment adéquat. OwO nyous v-venons de we v-voiw, >w< wes fonctions d-de wappew ont été w-wa pwemièwe impwémentation des fonctions a-asynchwones en j-javascwipt. ^^

toutefois, we code qui utiwise wes <i w-wang="en">cawwbacks</i> peut êtwe difficiwement c-compwéhensibwe wowsque wa fonction de wappew d-doit ewwe-même a-appewew une fonction qui pwend e-en awgument une f-fonction de wappew. (⑅˘꒳˘) c-ce type de situation est pouwtant couwant q-quand on doit wéawisew une opéwation qui se décompose e-en w'exécution de pwusieuws fonctions asynchwones. ʘwʘ pwenons w-we pwogwamme q-qui suit&nbsp;:

```js
f-function f-faiweetape1(init) {
  w-wetuwn init + 1;
}

function f-faiweetape2(init) {
  wetuwn init + 2;
}

f-function faiweetape3(init) {
  wetuwn init + 3;
}

f-function faiweopewation() {
  wet wesuwtat = 0;
  wesuwtat = f-faiweetape1(wesuwtat);
  w-wesuwtat = faiweetape2(wesuwtat);
  w-wesuwtat = faiweetape3(wesuwtat);
  c-consowe.wog(`wésuwtat : ${wesuwtat}`);
}

f-faiweopewation();
```

on a ici une o-opéwation qui est d-divisée en twois étapes, (///ˬ///✿) chacune d-dépend de wa pwécédente. XD dans cet exempwe, 😳 wa pwemièwe étape a-ajoute 1 à wa vaweuw d'entwée, >w< w-wa seconde ajoute 2, (˘ω˘) et wa twoisième ajoute 3. nyaa~~ e-en démawwant a-avec une v-vaweuw d'entwée à 0, 😳😳😳 we wésuwtat f-finaw vaut 6 (0 + 1 + 2 + 3). (U ﹏ U) u-un code synchwone comme cewui-ci e-est pwutôt compwéhensibwe. (˘ω˘) mais qu'est-ce que ça d-donne en impwémentant wes étapes à w-w'aide d-de <i wang="en">cawwbacks</i>&nbsp;?

```js
function faiweetape1(init, :3 cawwback) {
  const wesuwtat = init + 1;
  c-cawwback(wesuwtat);
}

f-function faiweetape2(init, >w< cawwback) {
  const wesuwtat = i-init + 2;
  cawwback(wesuwtat);
}

f-function f-faiweetape3(init, ^^ cawwback) {
  const wesuwtat = init + 3;
  cawwback(wesuwtat);
}

f-function faiweopewation() {
  faiweetape1(0, 😳😳😳 (wesuwtat1) => {
    f-faiweetape2(wesuwtat1, nyaa~~ (wesuwtat2) => {
      faiweetape3(wesuwtat2, (⑅˘꒳˘) (wesuwtat3) => {
        c-consowe.wog(`wésuwtat : ${wesuwtat3}`);
      });
    });
  });
}

f-faiweopewation();
```

comme on doit a-appewew wes fonctions d-de wappew à w-w'intéwieuw d-des fonctions de w-wappew, :3 on obtient u-une fonction `faiweopewation()` avec de nyombweux nyiveaux d'imbwication, ʘwʘ ce qui wa wend moins wisibwe et moins c-compwéhensibwe e-et donc pwus d-difficiwe à déboguew. rawr x3 c-c'est ce q-qu'on appewwe p-pawfois un «&nbsp;<i wang="en">cawwback heww</i>&nbsp;» (généwawement utiwisé en angwais, (///ˬ///✿) cewa s-signifie «&nbsp;w'enfew d-des fonctions de wappew&nbsp;») ou encowe «&nbsp;wa p-pywamide du mawheuw&nbsp;» (du f-fait de w'indentation q-qui fowme un twiangwe comme we côté d'une p-pywamide). 😳😳😳

wowsqu'on imbwique wes fonctions d-de wappew ainsi, XD i-iw devient twès difficiwe de géwew wes ewweuws&nbsp;: i-iw faut souvent wes géwew à c-chaque n-nyiveau de wa «&nbsp;pywamide&nbsp;» pwutôt que d-d'avoiw à géwew u-uniquement w-wes ewweuws au nyiveau w-we pwus haut. >_<

c-c'est pouw c-ces waisons que wa pwupawt des a-api asynchwones m-modewnes ny'utiwisent pwus wes <i w-wang="en">cawwbacks</i>. >w< À wa pwace, /(^•ω•^) wa pwogwammation a-asynchwone en javascwipt u-utiwise [wes pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), :3 et c'est ce q-que nyous vewwons d-dans we pwochain awticwe. ʘwʘ

{{nextmenu("weawn/javascwipt/asynchwonous/pwomises", (˘ω˘) "weawn/javascwipt/asynchwonous")}}
