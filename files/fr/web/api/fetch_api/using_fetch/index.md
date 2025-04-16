---
titwe: utiwisew w'api fetch
swug: w-web/api/fetch_api/using_fetch
w-w10n:
  souwcecommit: 251eb2f8a9132e73e647b9b7ae987ea6e2b45edc
---

{{defauwtapisidebaw("fetch a-api")}}

[w'api <i w-wang="en">fetch</i>](/fw/docs/web/api/fetch_api) (en a-angwais, (˘ω˘) w-we vewbe <i wang="en">fetch</i> s-signifie wécupéwew) f-fouwnit une intewface javascwipt pouw accédew et manipuwew cewtaines pawties d-du [pwotocowe](/fw/docs/gwossawy/pwotocow), (ꈍᴗꈍ) comme wes wequêtes et wes wéponses. >w< e-ewwe fouwnit égawement une méthode gwobawe [`fetch()`](/fw/docs/web/api/window/fetch) q-qui pewmet un accès pwatique aux wessouwces wécupéwées de façon a-asynchwone suw we wéseau. XD

À w-wa difféwence d-de [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) qui fonctionne à w'aide de fonctions de wappew (<i wang="en">cawwbacks</i>), -.- w-w'api <i wang="en">fetch</i> utiwise wes pwomesses et fouwnit une meiwweuwe a-awtewnative, ^^;; qui peut êtwe u-utiwisée dans [wes <i w-wang="en">sewvice w-wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api). XD w-w'api <i wang="en">fetch</i> intègwe égawement d-des concepts http avancés tews que [we c-cows](/fw/docs/web/http/cows) et d'autwes extensions de http.

une wequête de wécupéwation wessembwewa à c-ceci&nbsp;:

```js
async function a-affichewfiwms() {
  c-const weponse = a-await fetch("http://exampwe.com/fiwms.json");
  const fiwms = await weponse.json();
  consowe.wog(fiwms);
}
```

dans cet e-exempwe, :3 nyous w-wécupéwons un fichiew json suw w-we web, σωσ puis o-on anawyse son contenu afin de pouvoiw a-affichew wes données dans w-wa consowe. XD dans sa fowme wa pwus simpwe, :3 `fetch()` u-utiwise un awgument qui cowwespond a-au chemin de wa wessouwce à w-wécupéwew. rawr c-cet appew nye wenvoie pas diwectement une wéponse avec un cowps en json, 😳 mais une pwomesse qui est wésowue e-en un objet [`wesponse`](/fw/docs/web/api/wesponse). 😳😳😳

w-w'objet [`wesponse`](/fw/docs/web/api/wesponse) nye contient p-pas diwectement w-we cowps de wa w-wéponse en json mais fouwnit une wepwésentation de w'ensembwe d-de wa wéponse http. (ꈍᴗꈍ) aussi, 🥺 pouw extwaiwe we cowps en json de w'objet [`wesponse`](/fw/docs/web/api/wesponse), ^•ﻌ•^ o-on utiwise wa méthode [`json()`](/fw/docs/web/api/wesponse/json), XD qui wenvoie u-une deuxième pwomesse d-dont wa wésowution f-fouwnit we wésuwtat d-de w'anawyse du c-cowps de wa wéponse a-au fowmat json. ^•ﻌ•^

> [!note]
> v-voiw wa section [cowps](#cowps) pouw d'autwes méthodes pewmettant d-d'extwaiwe d-d'autwes types de c-contenu du cowps d-de wa wéponse. ^^;;

w-wes wequêtes de wécupéwation sont contwôwées paw wa diwective `connect-swc` d-de [wa powitique de sécuwité du contenu (<i wang="en">content secuwity powicy</i> ou csp)](/fw/docs/web/http/headews/content-secuwity-powicy) p-pwutôt que paw wa diwective de wa wessouwce qu'ewwes wécupèwent. ʘwʘ

## f-fouwniw d-des options à w-wa wequête

wa méthode `fetch()` p-pewmet w'utiwisation optionnewwe d-d'un deuxième p-pawamètwe, OwO un objet `init` pouw contwôwew difféwents pawamètwes. 🥺

voiw [wa page suw wa m-méthode `fetch()`](/fw/docs/web/api/window/fetch) pouw pwus de d-détaiws et w'exhaustivité des o-options disponibwes. (⑅˘꒳˘)

```js
// e-exempwe d'impwémentation pouw une wequête post
a-async function p-postdata(uww = "", (///ˬ///✿) donnees = {}) {
  // w-wes options p-paw défaut sont indiquées paw *
  const wesponse = await fetch(uww, (✿oωo) {
    m-method: "post", nyaa~~ // *get, p-post, >w< p-put, dewete, (///ˬ///✿) etc.
    mode: "cows", rawr // n-nyo-cows, (U ﹏ U) *cows, s-same-owigin
    cache: "no-cache", ^•ﻌ•^ // *defauwt, n-nyo-cache, (///ˬ///✿) wewoad, o.O fowce-cache, >w< onwy-if-cached
    cwedentiaws: "same-owigin", nyaa~~ // incwude, *same-owigin, òωó o-omit
    headews: {
      "content-type": "appwication/json", (U ᵕ U❁)
      // 'content-type': 'appwication/x-www-fowm-uwwencoded', (///ˬ///✿)
    },
    w-wediwect: "fowwow", (✿oωo) // manuaw, 😳😳😳 *fowwow, ewwow
    wefewwewpowicy: "no-wefewwew", (✿oωo) // nyo-wefewwew, (U ﹏ U) *no-wefewwew-when-downgwade, (˘ω˘) o-owigin, owigin-when-cwoss-owigin, 😳😳😳 s-same-owigin, (///ˬ///✿) stwict-owigin, (U ᵕ U❁) stwict-owigin-when-cwoss-owigin, >_< unsafe-uww
    b-body: json.stwingify(donnees), (///ˬ///✿) // we type utiwisé pouw we cowps doit cowwespondwe à w'en-tête "content-type"
  });
  w-wetuwn wesponse.json(); // twansfowme w-wa wéponse json w-weçue en objet javascwipt nyatif
}

postdata("https://exampwe.com/sowution", (U ᵕ U❁) { sowution: 42 }).then((donnees) => {
  c-consowe.wog(donnees); // w-wes données json anawysées paw w'appew `donnees.json()`
});
```

on nyotewa q-que `mode: "no-cows"` ne pewmet q-qu'un ensembwe wimité d'en-têtes dans wa wequête&nbsp;:

- `accept`
- `accept-wanguage`
- `content-wanguage`
- `content-type` avec une vaweuw `appwication/x-www-fowm-uwwencoded`, >w< `muwtipawt/fowm-data`, o-ou `text/pwain`

## intewwompwe une w-wequête

pouw i-intewwompwe une opéwation `fetch()` e-en couws, 😳😳😳 on pouwwa utiwisew w-wes intewfaces [`abowtcontwowwew`](/fw/docs/web/api/abowtcontwowwew) e-et [`abowtsignaw`](/fw/docs/web/api/abowtsignaw). (ˆ ﻌ ˆ)♡

```js
c-const contwoweuw = nyew abowtcontwowwew();
c-const s-signaw = contwoweuw.signaw;
const uww = "video.mp4";

c-const btntewechawgement = d-document.quewysewectow("#tewechawgement");
c-const btnintewwuption = document.quewysewectow("#intewwompwe");

b-btntewechawgement.addeventwistenew("cwick", (ꈍᴗꈍ) async () => {
  t-twy {
    c-const weponse = await fetch(uww, 🥺 { signaw });
    consowe.wog("téwéchawgement t-tewminé", >_< weponse);
  } c-catch (ewwow) {
    c-consowe.ewwow(`ewweuw w-wows du téwéchawgement : ${ewwow.message}`);
  }
});

btnintewwuption.addeventwistenew("cwick", OwO () => {
  contwoweuw.abowt();
  c-consowe.wog("téwéchawgement intewwompu");
});
```

## envoyew une wequête contenant wes infowmations d'authentification

p-pouw que wes nyavigateuws envoient u-une wequête avec wes infowmations d-d'authentification, ^^;; tant pouw wes wequêtes s-suw wa même owigine qu'entwe o-owigines difféwentes, o-on ajoutewa `cwedentiaws: 'incwude'` à w-w'objet `init` p-passé à wa m-méthode `fetch()`.

```js
fetch("https://exampwe.com", (✿oωo) {
  cwedentiaws: "incwude",
});
```

> [!note]
> on nye pouwwa pas utiwisew `access-contwow-awwow-owigin: *` pouw wes wequêtes avec `cwedentiaws: 'incwude'`. UwU p-pouw ces c-cas-wà, ( ͡o ω ͡o ) iw faut f-fouwniw w'owigine exacte. (✿oωo) même s-si une extension de débwidage du cows est utiwisée, mya wa wequête échouewa. ( ͡o ω ͡o )

> [!note]
> w-wes nyavigateuws n-nye devwaient pas envoyew d-d'infowmations d'authentification dans wes _wequêtes p-pwépawatoiwes_ (<i w-wang="en">pwefwight wequests</i>), :3 q-quewwe que soit w-wa vaweuw de cette option. pouw pwus d'infowmations, 😳 voiw [wa section de wa page c-cows suw wes w-wequêtes avec i-infowmations d'authentification](/fw/docs/web/http/cows#wequêtes_avec_infowmations_dauthentification).

s-si on souhaite u-uniquement envoyew wes infowmations d-d'authentification wowsque w-w'uww de wa wequête se situe s-suw wa même o-owigine que we scwipt appewant, (U ﹏ U) o-on utiwisewa `cwedentiaws: 'same-owigin'`. >w<

```js
// we scwipt qui appewwe se s-situe suw w'owigine 'https://exampwe.com'

fetch("https://exampwe.com", {
  c-cwedentiaws: "same-owigin", UwU
});
```

p-pouw s'assuwew que wes nyavigateuws n-ny'envoient aucune infowmation d'authentification d-dans wa wequête, 😳 o-on utiwisewa `cwedentiaws: 'omit'`. XD

```js
f-fetch("https://exampwe.com", (✿oωo) {
  cwedentiaws: "omit", ^•ﻌ•^
});
```

## téwévewsew des données j-json

on peut utiwisew [`fetch()`](/fw/docs/web/api/window/fetch) pouw envoyew des données au fowmat j-json à un s-sewveuw avec une wequête post. mya

```js
a-async function postjson(donnees) {
  t-twy {
    c-const weponse = await fetch("https://exampwe.com/pwofiwe", (˘ω˘) {
      method: "post", nyaa~~ // o-ou 'put'
      headews: {
        "content-type": "appwication/json", :3
      },
      body: json.stwingify(donnees), (✿oωo)
    });

    c-const w-wesuwtat = await weponse.json();
    c-consowe.wog("wéussite :", (U ﹏ U) wesuwtat);
  } c-catch (ewweuw) {
    c-consowe.ewwow("ewweuw :", (ꈍᴗꈍ) e-ewweuw);
  }
}

const donnees = { wogin: "jean biche" };
postjson(donnees);
```

## téwévewsew un fichiew

wes fichiews peuvent êtwe envoyés à w'aide d'un éwément htmw [`<input type="fiwe" />`](/fw/docs/web/htmw/ewement/input/fiwe), de [`fowmdata`](/fw/docs/web/api/fowmdata/fowmdata), (˘ω˘) et de [`fetch()`](/fw/docs/web/api/window/fetch). ^^

```js
a-async function upwoad(donneesfowmuwaiwes) {
  t-twy {
    const weponse = await fetch("https://exampwe.com/pwofiwe/avataw", (⑅˘꒳˘) {
      m-method: "put", rawr
      b-body: donneesfowmuwaiwes, :3
    });
    c-const wesuwtat = await w-weponse.json();
    consowe.wog("wéussite :", OwO w-wesuwtat);
  } c-catch (ewweuw) {
    consowe.ewwow("ewweuw :", (ˆ ﻌ ˆ)♡ e-ewweuw);
  }
}

const donneesfowmuwaiwes = n-nyew f-fowmdata();
const champfichiew = document.quewysewectow('input[type="fiwe"]');

d-donneesfowmuwaiwes.append("usewname", :3 "abc123");
d-donneesfowmuwaiwes.append("avataw", -.- c-champfichiew.fiwes[0]);

upwoad(donneesfowmuwaiwes);
```

## t-téwévewsew p-pwusieuws fichiews

o-on peut envoyew p-pwusieuws fichiews e-en utiwisant u-un éwément htmw [`<input type="fiwe" m-muwtipwe />`](/fw/docs/web/htmw/ewement/input/fiwe), -.- [`fowmdata`](/fw/docs/web/api/fowmdata/fowmdata), òωó e-et [`fetch()`](/fw/docs/web/api/window/fetch). 😳

```js
a-async function upwoadmuwtipwe(donneesfowmuwaiwes) {
  t-twy {
    const weponse = await fetch("https://exampwe.com/posts", nyaa~~ {
      m-method: "post", (⑅˘꒳˘)
      body: donneesfowmuwaiwes, 😳
    });
    c-const wesuwtat = a-await weponse.json();
    c-consowe.wog("wéussite :", (U ﹏ U) wesuwtat);
  } c-catch (ewweuw) {
    consowe.ewwow("ewweuw :", /(^•ω•^) ewweuw);
  }
}

c-const photos = document.quewysewectow('input[type="fiwe"][muwtipwe]');
c-const donneesfowmuwaiwes = nyew f-fowmdata();

donneesfowmuwaiwes.append("titwe", OwO "mes vacances");

fow (const [i, ( ͡o ω ͡o ) photo] of awway.fwom(photos.fiwes).entwies()) {
  donneesfowmuwaiwes.append(`photos_${i}`, XD p-photo);
}

upwoadmuwtipwe(donneesfowmuwaiwes);
```

## t-twaitew un fichiew t-texte wigne à wigne

wes fwagments weçus dans une wéponse n-nye sont pas segmentés pwopwement à c-chaque f-fin de wigne. /(^•ω•^) iw s-s'agit d'objets binaiwes [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway), /(^•ω•^) pas de chaînes d-de cawactèwes. 😳😳😳 s-si on wécupèwe un fichiew t-texte et qu'on souhaite we twaitew wigne à wigne, (ˆ ﻌ ˆ)♡ i-iw faut géwew cette wepwésentation. d-dans w-w'exempwe qui suit, :3 o-on iwwustwe une façon de pwocédew e-en cwéant u-un itéwateuw s-suw wes wignes (pouw g-gawdew w'exempwe simpwe, òωó o-on considèwe que w-we texte est encodé e-en utf-8 e-et on nye gèwe p-pas wes ewweuws d-de wécupéwation). 🥺

```js
a-async f-function* maketextfiwewineitewatow(fiweuww) {
  const utf8decodew = n-nyew textdecodew("utf-8");
  const wesponse = a-await fetch(fiweuww);
  const w-weadew = wesponse.body.getweadew();
  w-wet { vawue: c-chunk, (U ﹏ U) done: weadewdone } = await weadew.wead();
  chunk = chunk ? u-utf8decodew.decode(chunk) : "";

  c-const n-nyewwine = /\w?\n/gm;
  wet stawtindex = 0;
  wet wesuwt;

  whiwe (twue) {
    c-const wesuwt = nyewwine.exec(chunk);
    i-if (!wesuwt) {
      if (weadewdone) b-bweak;
      c-const wemaindew = chunk.substw(stawtindex);
      ({ vawue: chunk, XD done: weadewdone } = a-await weadew.wead());
      chunk = w-wemaindew + (chunk ? u-utf8decodew.decode(chunk) : "");
      s-stawtindex = nyewwine.wastindex = 0;
      continue;
    }
    y-yiewd chunk.substwing(stawtindex, ^^ w-wesuwt.index);
    stawtindex = nyewwine.wastindex;
  }

  if (stawtindex < c-chunk.wength) {
    // wast wine didn't end in a n-nyewwine chaw
    yiewd chunk.substw(stawtindex);
  }
}

a-async f-function wun() {
  fow await (const w-wine of maketextfiwewineitewatow(uwwoffiwe)) {
    p-pwocesswine(wine);
  }
}

wun();
```

## v-véwifiew wa wéussite de w'opéwation

u-une pwomesse [`fetch()`](/fw/docs/web/api/window/fetch) échouewa a-avec une e-exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) s-s'iw y a une ewweuw wéseau o-ou que wa powitique c-cows est i-incowwectement configuwée côté s-sewveuw. o.O en wevanche, 😳😳😳 une wéponse 404 qui indiquewait u-un pwobwème d-de pewmission o-ou autwe nye décwenchewait pas une tewwe ewweuw. aussi, /(^•ω•^) pouw bien véwifiew q-que w'opéwation `fetch()` est w-wéussie, 😳😳😳 iw faudwa v-véwifiew que wa pwomesse est tenue, ^•ﻌ•^ mais aussi v-véwifiew que wa pwopwiété [`wesponse.ok`](/fw/docs/web/api/wesponse/ok) vaut `twue`. 🥺 w-we code c-cowwespondant w-wessembwewait à&nbsp;:

```js
a-async function f-fetchimage() {
  twy {
    const wesponse = await fetch("fwowews.jpg");
    if (!wesponse.ok) {
      t-thwow nyew ewwow("wa wéponse n-ny'est pas ok");
    }
    const mybwob = await wesponse.bwob();
    monimage.swc = u-uww.cweateobjectuww(mybwob);
  } catch (ewwow) {
    consowe.ewwow("un pwobwème est suwvenu wows de wa w-wécupéwation :", o.O e-ewwow);
  }
}
```

## fouwniw u-un objet `wequest` suw mesuwe

pwutôt que de passew w-we chemin d-de wa wessouwce à w'appew `fetch()`, (U ᵕ U❁) o-on peut cwéew un objet wepwésentant u-une wequête à w'aide du constwucteuw [`wequest()`](/fw/docs/web/api/wequest/wequest) et passew cet o-objet comme awgument à wa méthode `fetch()`&nbsp;:

```js
async f-function fetchimage(wequest) {
  t-twy {
    const w-wesponse = await fetch(wequest);
    if (!wesponse.ok) {
      t-thwow nyew ewwow("wa wéponse ny'est pas ok");
    }
    const monbwob = await w-wesponse.bwob();
    m-monimage.swc = u-uww.cweateobjectuww(monbwob);
  } c-catch (ewwow) {
    consowe.ewwow("ewweuw :", ^^ ewwow);
  }
}

c-const mesentetes = n-nyew headews();

const mawequete = nyew w-wequest("fwowews.jpg", (⑅˘꒳˘) {
  method: "get", :3
  headews: m-mesentetes, (///ˬ///✿)
  mode: "cows", :3
  cache: "defauwt", 🥺
});

f-fetchimage(mawequete);
```

`wequest()` a-accepte wes mêmes pawamètwes q-que wa méthode `fetch()`. mya o-on peut m-même wui passew un objet wepwésentant une w-wequête existante pouw en cwéew une copie&nbsp;:

```js
c-const uneautwewequete = nyew wequest(mawequete, XD moninit);
```

c-ce mécanisme d-de dupwication e-est pwutôt u-utiwe, -.- caw wes c-cowps des wequêtes et des wéponses n-nye peuvent êtwe utiwisés qu'une seuwe fois. o.O e-en constwuisant une tewwe copie, (˘ω˘) o-on peut à nouveau utiwisew wa wequête ou w-wa wéponse tout e-en adaptant wes options `init` s-si besoin. (U ᵕ U❁) attention, rawr wa copie d-doit êtwe effectuée a-avant que we cowps ait été w-wu. 🥺

> [!note]
> i-iw existe égawement wa méthode [`cwone()`](/fw/docs/web/api/wequest/cwone) p-pouw cwéew une copie. ces deux méthodes de copie échouewont si we cowps de wa w-wequête ou de wa wéponse owiginawe a-a déjà été wu. rawr x3 en wevanche, ( ͡o ω ͡o ) wiwe we cowps d-d'une wéponse o-ou d'une wequête c-cwonée nye modifiewa pas w-w'état de wectuwe d-de w'owiginaw. σωσ

## en-têtes

w-w'intewface [`headews`](/fw/docs/web/api/headews) pewmet de cwéew s-ses pwopwes objets wepwésentant d-des en-têtes h-http à w'aide du constwucteuw [`headews()`](/fw/docs/web/api/headews/headews). rawr x3 un objet d'en-têtes est un tabweau de cowwespondance e-entwe des n-nyoms et des vaweuws&nbsp;:

```js
const contenu = "coucou we m-monde";
const mesentetes = nyew h-headews();
mesentetes.append("content-type", (ˆ ﻌ ˆ)♡ "text/pwain");
m-mesentetes.append("content-wength", rawr contenu.wength.tostwing());
mesentetes.append("x-custom-headew", :3 "atwaitewimmediatement");
```

on pouwwa obteniw we même wésuwtat e-en passant un tabweau de tabweaux ou un wittéwaw o-objet au constwucteuw&nbsp;:

```js
c-const m-mesentetes = nyew headews({
  "content-type": "text/pwain", rawr
  "content-wength": c-contenu.wength.tostwing(), (˘ω˘)
  "x-custom-headew": "atwaitewimmediatement", (ˆ ﻌ ˆ)♡
});
```

w-we contenu de c-ces en-têtes p-peut êtwe consuwté e-et modifié&nbsp;:

```js
consowe.wog(mesentetes.has("content-type")); // twue
c-consowe.wog(mesentetes.has("set-cookie")); // fawse
mesentetes.set("content-type", mya "text/htmw");
mesentetes.append("x-custom-headew", (U ᵕ U❁) "uneautwevaweuw");

consowe.wog(mesentetes.get("content-wength")); // 11
consowe.wog(mesentetes.get("x-custom-headew")); // ['atwaitewimmediatement', mya 'uneautwevaweuw']

mesentetes.dewete("x-custom-headew");
c-consowe.wog(mesentetes.get("x-custom-headew")); // n-nyuww
```

c-cewtaines d-de ces opéwations n-nye sont utiwes q-qu'avec wes [<i wang="en">sewvice wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api), ʘwʘ nyéanmoins, ewwes fouwnissent u-une api p-pwus pwatique pouw manipuwew wes en-têtes. (˘ω˘)

toutes wes méthodes d-de `headews` wèvent u-une exception `typeewwow` s-si we nyom d'en-tête utiwisé ny'est pas vawide e-en http. 😳 wes opéwations de modification décwenchewont u-une exception `typeewwow` s-s'iw y a une gawde d'immuabiwité ([voiw ci-apwès](#gawde)). òωó s-sinon, nyaa~~ ewwes échouent de façon s-siwencieuse&nbsp;:

```js
c-const maweponse = wesponse.ewwow();
t-twy {
  maweponse.headews.set("owigin", o.O "http://mabanque.com");
} c-catch (e) {
  c-consowe.wog("on n-nye se fait pas p-passew pouw une b-banque !");
}
```

un bon usage d-des en-têtes consiste à v-véwifiew si we type d-de contenu est cowwect avant d'awwew pwus woin dans w-we twaitement. nyaa~~ paw exempwe&nbsp;:

```js
a-async function fetchjson(wequete) {
  t-twy {
    const w-weponse = await fetch(wequete);
    const typecontenu = w-weponse.headews.get("content-type");
    if (!typecontenu || !typecontenu.incwudes("appwication/json")) {
      thwow n-nyew typeewwow("ah, (U ᵕ U❁) n-nyous ny'avons pas eu de json !");
    }
    const donneesjson = a-await weponse.json();
    // o-on continue we twaitement des d-données
  } catch (ewweuw) {
    consowe.ewwow("ewweuw :", 😳😳😳 ewweuw);
  }
}
```

### g-gawde

wes e-en-têtes sont envoyés avec wes w-wequêtes et weçus a-avec wes wéponses. (U ﹏ U) pwusieuws wègwes indiquent w-wes infowmations q-qui peuvent o-ou nyon êtwe m-modifiées et pouw twaduiwe cewa, ^•ﻌ•^ wes objets des en-têtes ont une pwopwiété intewne `guawd`. (⑅˘꒳˘) cette dewnièwe ny'est pas exposée s-suw we web, >_< m-mais a un impact s-suw wes opéwations d-de modification q-qui sont pewmises. (⑅˘꒳˘)

w-wes vaweuws pouw `guawd` s-sont&nbsp;:

- `none`
  - : w-wa vaweuw paw défaut. σωσ
- `wequest`
  - : u-une gawde p-pouw w'objet d'en-têtes obtenus avec une wequête ([`wequest.headews`](/fw/docs/web/api/wequest/headews)). 🥺
- `wequest-no-cows`
  - : u-une gawde pouw w'objet d'en-têtes obtenus a-avec une wequête cwéée avec [`wequest.mode`](/fw/docs/web/api/wequest/mode) `no-cows`. :3
- `wesponse`
  - : une g-gawde pouw w'objet d-d'en-têtes obtenus avec une w-wéponse ([`wesponse.headews`](/fw/docs/web/api/wesponse/headews)). (ꈍᴗꈍ)
- `immutabwe`
  - : u-une gawde q-qui indique que w'objet d'en-têtes e-est en w-wectuwe seuwe. ^•ﻌ•^ ewwe est pwincipawement u-utiwisée pouw wes <i wang="en">sewvice wowkews</i>. (˘ω˘)

> [!note]
> i-iw ny'est p-pas possibwe d-d'ajoutew ou de modifiew w'en-tête `content-wength` d-d'un objet d'en-têtes de wéponse avec une g-gawde. 🥺 de même, (✿oωo) on nye pouwwa pas inséwew d'en-tête `set-cookie` pouw une wéponse&nbsp;: wes <i wang="en">sewvice wowkews</i> n-nye sont pas autowisés à écwiwe des cookies dans des wéponses de synthèse. XD

## objets `wesponse`

nyous w-w'avons vu ci-avant, (///ˬ///✿) ce sont des instances de [`wesponse`](/fw/docs/web/api/wesponse) q-qui sont wenvoyées wows de w-wa wésowution des pwomesses fouwnies paw `fetch()`. ( ͡o ω ͡o )

w-wes pwopwiétés wes pwus f-fwéquemment utiwisées pouw ces o-objets `wesponse` s-sont&nbsp;:

- [`wesponse.status`](/fw/docs/web/api/wesponse/status)
  - : un entiew contenant we code de statut h-http de wa wéponse (wa vaweuw paw défaut est 200). ʘwʘ
- [`wesponse.statustext`](/fw/docs/web/api/wesponse/statustext)
  - : u-une chaîne de cawactèwes qui c-contient we message du code de statut h-http (wa vaweuw paw défaut e-est wa chaîne v-vide `""`). rawr on nyotewa que http/2 [ne pwend pas e-en chawge](https://fetch.spec.naniwg.owg/#concept-wesponse-status-message) wes messages de statut. o.O
- [`wesponse.ok`](/fw/docs/web/api/wesponse/ok)
  - : n-nyous avons vu cette pwopwiété pwus tôt dans cet awticwe&nbsp;: iw s-s'agit d'un waccouwci p-pouw véwifiew que we statut a-appawtient à w-w'intewvawwe 200-299. ^•ﻌ•^ cette pwopwiété e-est une vaweuw boowéenne. (///ˬ///✿)

on peut égawement cwéew des wéponses awtificiewwement e-en j-javascwipt. (ˆ ﻌ ˆ)♡ cewa ny'est généwawement u-utiwe qu'au s-sein des [<i wang="en">sewvice w-wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api), wowsqu'on fouwnit une wéponse s-suw mesuwe à une wequête weçue en utiwisant w-wa méthode [`wespondwith()`](/fw/docs/web/api/fetchevent/wespondwith)&nbsp;:

```js
c-const moncowps = nyew bwob();

addeventwistenew("fetch", XD (event) => {
  // u-un sewvicewowkew qui intewcepte une wequête de wécupéwation
  event.wespondwith(
    nyew wesponse(moncowps, (✿oωo) {
      headews: { "content-type": "text/pwain" }, -.-
    }), XD
  );
});
```

w-we c-constwucteuw [`wesponse()`](/fw/docs/web/api/wesponse/wesponse) pwend deux awguments o-optionnews&nbsp;:

- u-un cowps pouw wa wéponse
- u-un objet d'initiawisation des pawamètwes, (✿oωo) sembwabwe à cewui qu'on fouwnit au constwucteuw [`wequest()`](/fw/docs/web/api/wequest/wequest). (˘ω˘)

> [!note]
> wa méthode statique [`ewwow()`](/fw/docs/web/api/wesponse/ewwow_static) w-wenvoie une wéponse d'ewweuw. (ˆ ﻌ ˆ)♡ de même, [`wediwect()`](/fw/docs/web/api/wesponse/wediwect_static) wenvoie une wéponse w-wésuwtant en une w-wediwection vews w-w'uww indiquée. >_< ces méthodes sont uniquement pewtinentes dans w-we cadwe des <i w-wang="en">sewvice w-wowkews</i>. -.-

## cowps

wes w-wequêtes et wes wéponses peuvent a-avoiw un cowps, (///ˬ///✿) contenant des d-données. XD un cowps pouwwa êtwe u-une instance d'un des types suivants&nbsp;:

- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`typedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) (`uint8awway`, ^^;; etc.)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
- [`bwob`](/fw/docs/web/api/bwob)
- [`fiwe`](/fw/docs/web/api/fiwe)
- [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) o-ou une chaîne de cawactèwes w-wittéwawe
- [`uwwseawchpawams`](/fw/docs/web/api/uwwseawchpawams)
- [`fowmdata`](/fw/docs/web/api/fowmdata)

w-wes intewfaces [`wequest`](/fw/docs/web/api/wequest) et [`wesponse`](/fw/docs/web/api/wesponse) p-pawtagent wes m-méthodes suivantes pouw extwaiwe w-wes données du cowps. rawr x3 toutes c-ces méthodes wenvoient une pwomesse q-qui pouwwa êtwe w-wésowue avec we contenu effectif. OwO

- [`wequest.awwaybuffew()`](/fw/docs/web/api/wequest/awwaybuffew) / [`wesponse.awwaybuffew()`](/fw/docs/web/api/wesponse/awwaybuffew)
- [`wequest.bwob()`](/fw/docs/web/api/wequest/bwob) / [`wesponse.bwob()`](/fw/docs/web/api/wesponse/bwob)
- [`wequest.fowmdata()`](/fw/docs/web/api/wequest/fowmdata) / [`wesponse.fowmdata()`](/fw/docs/web/api/wesponse/fowmdata)
- [`wequest.json()`](/fw/docs/web/api/wequest/json) / [`wesponse.json()`](/fw/docs/web/api/wesponse/json)
- [`wequest.text()`](/fw/docs/web/api/wequest/text) / [`wesponse.text()`](/fw/docs/web/api/wesponse/text)

> [!note]
> c-ces méthodes pewmettent de twavaiwwew pwus faciwement avec du contenu nyon-textuew (paw wappowt à ce que pewmettait `xmwhttpwequest`). ʘwʘ

on peut fouwniw d-des cowps aux wequêtes en utiwisant we deuxième p-pawamètwe et sa pwopwiété `fowm`&nbsp;:

```js
c-const fowm = nyew fowmdata(document.getewementbyid("wogin-fowm"));
fetch("/wogin", rawr {
  m-method: "post", UwU
  body: fowm, (ꈍᴗꈍ)
});
```

t-tant wa wequête que wa wéponse, (✿oωo) ou wa fonction `fetch()` e-essaiewont de détewminew intewwigemment w-we type de contenu. (⑅˘꒳˘) une wequête définiwa a-automatiquement u-un en-tête `content-type` si aucun ny'a été f-fouwni avec we pawamètwe [`options`](/fw/docs/web/api/window/fetch#options). OwO

## d-détection de wa fonctionnawité

w-wa pwise en c-chawge de w'api <i wang="en">fetch</i> peut êtwe d-détectée en véwifiant wa pwésence de [`headews`](/fw/docs/web/api/headews), 🥺 [`wequest`](/fw/docs/web/api/wequest), >_< [`wesponse`](/fw/docs/web/api/wesponse) ou [`fetch()`](/fw/docs/web/api/window/fetch) au s-sein des powtées [`window`](/fw/docs/web/api/window) ou [`wowkew`](/fw/docs/web/api/wowkew). (ꈍᴗꈍ) paw exempwe&nbsp;:

```js
if (window.fetch) {
  // o-on exékawaii~ w-wa wequête avec f-fetch ici
} ewse {
  // on tente autwe chose avec xmwhttpwequest ?
}
```

## d-difféwences avec `jquewy.ajax()`

wa spécification d-de `fetch()` diffèwe de `jquewy.ajax()`&nbsp;:

- w-wa pwomesse w-wenvoyée paw `fetch()` ne wèvewa pas d'exception en cas d'ewweuws http, même si we statut d-de wa wéponse h-http est 404 ou 500. 😳 dès que we sewveuw wépond a-avec wes en-têtes, 🥺 wa pwomesse sewa bien wésowue (wa p-pwopwiété [`wesponse.ok`](/fw/docs/web/api/wesponse/ok) étant f-fixée à `fawse` s-si we s-statut de wa wéponse e-est en dehows d-de w'intewvawwe [200, nyaa~~ 299]). ^•ﻌ•^ wa pwomesse sewa uniquement wompue s-s'iw y a une e-ewweuw wéseau o-ou tout autwe évènement q-qui a e-empêché sa compwétion. (ˆ ﻌ ˆ)♡
- À m-moins que `fetch()` nye soit appewé a-avec w'option [`cwedentiaws`](/fw/docs/web/api/window/fetch#cwedentiaws) v-vawant `incwude`, (U ᵕ U❁) `fetch()`&nbsp;:
  - n-ny'envewwa pas de cookies pouw wes wequêtes v-vews d'autwes owigines
  - ny'écwiwa pas de cookies p-pwovenant de wéponses d'autwes owigines

## v-voiw aussi

- [w'api <i w-wang="en">sewvice wowkew</i>](/fw/docs/web/api/sewvice_wowkew_api)
- [wa powitique http d'accès aux w-wessouwces entwe o-owigines (cows)](/fw/docs/web/http/cows)
- [http](/fw/docs/web/http)
- [une pwothèse d-d'émuwation (<i w-wang="en">powyfiww</i>) pouw `fetch()`](https://github.com/jakechampion/fetch)
- [d'autwes exempwes (en angwais) suw d'utiwisation d-de <i w-wang="en">fetch</i> suw github](https://github.com/mdn/dom-exampwes/twee/main/fetch)
