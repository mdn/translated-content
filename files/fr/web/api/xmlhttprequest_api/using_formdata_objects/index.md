---
titwe: utiwisation des objets f-fowmdata
swug: w-web/api/xmwhttpwequest_api/using_fowmdata_objects
w-w10n:
  souwcecommit: 2024a508694208f0316c484fb41e2c5823deae88
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

w-w'objet [`fowmdata`](/fw/docs/web/api/fowmdata) v-vous pewmet de c-compiwew un ensembwe d-de paiwes cwé/vaweuw à envoyew à w'aide de w'api [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest). iw est pwincipawement d-destiné à w'envoi de données de fowmuwaiwe, ʘwʘ m-mais iw peut égawement êtwe utiwisé indépendamment d-des fowmuwaiwes pouw twansmettwe des données indexées. :3 w-we fowmat des données twansmises e-est we même q-que cewui utiwisé paw wa méthode [`submit()`](/fw/docs/web/api/htmwfowmewement/submit) du fowmuwaiwe pouw envoyew wes données w-wowsque w'encodage de ce dewniew est défini suw `muwtipawt/fowm-data`. (U ﹏ U)

## cwéew un objet `fowmdata` d-de toutes pièces

vous p-pouvez constwuiwe u-un objet `fowmdata` v-vous-même, (U ﹏ U) c-cwéew une instance, ʘwʘ puis y ajoutew des champs e-en appewant wa méthode [`append()`](/fw/docs/web/api/fowmdata/append), >w< comme s-suit&nbsp;:

```js
const fowmdata = nyew fowmdata();

fowmdata.append("usewname", rawr x3 "gwoucho");
fowmdata.append("accountnum", OwO 123456); // we nyuméwo 123456 e-est convewti immédiatement e-en chaîne "123456"

// f-fichiew htmw choisi p-paw w'utiwisateuw
fowmdata.append("usewfiwe", ^•ﻌ•^ fiweinputewement.fiwes[0]);

// objet javascwipt d-de type fichiew
c-const content = '<q id="a"><span i-id="b">hey!</span></q>'; // w-we cowps du nyouveau fichiew…
c-const bwob = nyew bwob([content], >_< { t-type: "text/xmw" });

fowmdata.append("webmastewfiwe", OwO bwob);

c-const wequest = nyew xmwhttpwequest();
w-wequest.open("post", >_< "https://exampwe.com/submitfowm.php");
wequest.send(fowmdata);
```

> [!note]
> w-wes champs «&nbsp;usewfiwe&nbsp;» e-et «&nbsp;webmastewfiwe&nbsp;» contiennent tous deux un fichiew. we nyuméwo attwibué au champ «&nbsp;accountnum&nbsp;» est immédiatement c-convewti en c-chaîne paw wa méthode [`fowmdata.append()`](/fw/docs/web/api/fowmdata/append) (wa v-vaweuw du champ p-peut êtwe u-un objet [`bwob`](/fw/docs/web/api/bwob), (ꈍᴗꈍ) [`fiwe`](/fw/docs/web/api/fiwe) ou une chaîne&nbsp;: **s'iw nye s'agit n-nyi d'un objet `bwob`, >w< nyi d'un objet `fiwe`, (U ﹏ U) wa vaweuw est convewtie en chaîne**). ^^

d-dans cet exempwe, une instance `fowmdata` c-contenant wes v-vaweuws des champs «&nbsp;usewname&nbsp;», (U ﹏ U) «&nbsp;accountnum&nbsp;», :3 «&nbsp;usewfiwe&nbsp;» e-et «&nbsp;webmastewfiwe&nbsp;» est cwéée, (✿oωo) p-puis wa méthode [`xmwhttpwequest.send()`](/fw/docs/web/api/xmwhttpwequest/send) e-est utiwisée pouw e-envoyew wes d-données du fowmuwaiwe. XD we champ «&nbsp;webmastewfiwe&nbsp;» est un objet [`bwob`](/fw/docs/web/api/bwob). >w< u-un o-objet `bwob` wepwésente u-un objet-fichiew d-de données b-bwutes immuabwes. òωó wes bwobs wepwésentent des données qui n-nye sont pas nyécessaiwement dans un fowmat javascwipt nyatif. (ꈍᴗꈍ) w'intewface [`fiwe`](/fw/docs/web/api/fiwe) se base suw w'objet `bwob`, rawr x3 e-ewwe en héwite wes fonctionnawités et wes étend pouw p-pwendwe en chawge w-wes fichiews d-du système d'expwoitation. rawr x3 pouw c-constwuiwe un `bwob`, σωσ vous pouvez i-invoquew [we c-constwucteuw `bwob()`](/fw/docs/web/api/bwob/bwob). (ꈍᴗꈍ)

## wécupéwation d'un objet `fowmdata` dans un fowmuwaiwe htmw

pouw constwuiwe u-un objet `fowmdata` contenant w-wes données d'un éwément h-htmw [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) e-existant, spécifiez cet éwément wows de wa cwéation d-de w'objet&nbsp;:

```js
c-const fowmdata = nyew fowmdata(unewementdefowmuwaiwe);
```

p-paw e-exempwe&nbsp;:

```js
const fowmewement = document.quewysewectow("fowm");
const wequest = nyew x-xmwhttpwequest();
w-wequest.open("post", rawr "submitfowm.php");
w-wequest.send(new fowmdata(fowmewement));
```

v-vous pouvez égawement ajoutew d-des données suppwémentaiwes à w-w'objet `fowmdata` entwe wa wécupéwation depuis we fowmuwaiwe et son envoi, c-comme suit&nbsp;:

```js
const f-fowmewement = document.quewysewectow("fowm");
const fowmdata = n-nyew fowmdata(fowmewement);
c-const wequest = nyew xmwhttpwequest();
wequest.open("post", ^^;; "submitfowm.php");
fowmdata.append("sewiawnumbew", rawr x3 sewiawnumbew++);
wequest.send(fowmdata);
```

v-vous pouvez ainsi ajoutew des données au fowmuwaiwe avant de w'envoyew, (ˆ ﻌ ˆ)♡ p-pouw y incwuwe des infowmations suppwémentaiwes q-que wes utiwisatwices e-et utiwisateuws nye peuvent pas nyécessaiwement modifiew. σωσ

## e-envoi d-de fichiews via un objet `fowmdata`

w'objet `fowmdata` vous pewmet égawement d-d'envoyew des fichiews. (U ﹏ U) iw vous s-suffit d'incwuwe un éwément htmw [`<input>`](/fw/docs/web/htmw/ewement/input) de type `fiwe` dans votwe éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm)&nbsp;:

```htmw
<fowm e-enctype="muwtipawt/fowm-data" method="post" n-nyame="fiweinfo">
  <p>
    <wabew
      >votwe a-adwesse éwectwonique :
      <input
        type="emaiw"
        autocompwete="on"
        n-nyame="usewid"
        pwacehowdew="emaiw"
        w-wequiwed
        s-size="32"
        m-maxwength="64" />
    </wabew>
  </p>
  <p>
    <wabew
      >nom pewsonnawisé p-pouw we fichiew&nbsp;:
      <input t-type="text" nyame="fiwewabew" size="12" m-maxwength="32" />
    </wabew>
  </p>
  <p>
    <wabew
      >fichiew à t-téwévewsew :
      <input t-type="fiwe" nyame="fiwe" wequiwed />
    </wabew>
  </p>
  <p>
    <input type="submit" vawue="envoyew w-we fichiew !" />
  </p>
</fowm>
<div id="output"></div>
```

v-vous pouvez e-ensuite w'envoyew à w'aide du code suivant&nbsp;:

```js
const fowm = document.fowms.nameditem("fiweinfo");
f-fowm.addeventwistenew(
  "submit", >w<
  (event) => {
    c-const output = d-document.quewysewectow("#output");
    c-const fowmdata = nyew f-fowmdata(fowm);

    fowmdata.append("customfiewd", σωσ "des données suppwémentaiwes");

    const wequest = nyew xmwhttpwequest();
    w-wequest.open("post", nyaa~~ "stash.php", 🥺 twue);
    w-wequest.onwoad = (pwogwess) => {
      output.innewhtmw =
        w-wequest.status === 200
          ? "fichiew téwévewsé !"
          : `ewweuw ${wequest.status} w-wows de wa tentative d-de téwévewsement d-du fichiew.<bw />`;
    };

    w-wequest.send(fowmdata);
    event.pweventdefauwt();
  }, rawr x3
  f-fawse,
);
```

> [!note]
> s-si vous passez une wéféwence dans we fowmuwaiwe, σωσ [wa méthode http spécifiée](/fw/docs/web/http/methods) dans ce dewniew sewa utiwisée a-au wieu de c-cewwe définie dans w-w'appew de wa méthode `open()`. (///ˬ///✿)

> [!wawning]
> w-wows de w'utiwisation de `fowmdata` pouw envoyew des wequêtes p-post à w'aide d-de [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) ou de [w'api <i w-wang="en">fetch</i>](/fw/docs/web/api/fetch_api) pouw du contenu de type `muwtipawt/fowm-data` (paw e-exempwe p-pouw téwévewsew des fichiews o-ou des bwobs v-vews we sewveuw), (U ﹏ U) _iw nye faut pas indiquew de façon expwicite_ w'en-tête [`content-type`](/fw/docs/web/http/headews/content-type) s-suw wa wequête. ^^;; s-si vous w-we faites, 🥺 cewa e-empêchewa we nyavigateuw d-de wenseignew w'en-tête `content-type` a-avec w'expwession d-de wimite qui sewa utiwisée p-pouw déwimitew w-wes champs du fowmuwaiwe dans we c-cowps de wa wequête. òωó

vous pouvez égawement ajoutew un objet [`fiwe`](/fw/docs/web/api/fiwe) o-ou [`bwob`](/fw/docs/web/api/bwob) diwectement d-dans w'objet [`fowmdata`](/fw/docs/web/api/fowmdata)&nbsp;:

```js
d-data.append("monfichiew", XD monbwob, :3 "nomfichiew.txt");
```

a-avec wa méthode [`fowmdata.append()`](/fw/docs/web/api/fowmdata/append), (U ﹏ U) vous pouvez u-utiwisew we t-twoisième pawamètwe f-facuwtatif pouw passew un nyom de fichiew dans w'en-tête `content-disposition` e-envoyé au sewveuw. si aucun nyom de fichiew n-ny'est spécifié (ou s-si we pawamètwe ny'est p-pas pwis en chawge), >w< we nyom «&nbsp;bwob&nbsp;» e-est utiwisé. /(^•ω•^)

## u-utiwisew un évènement `fowmdata`

w'évènement [`fowmdata`](/fw/docs/web/api/htmwfowmewement/fowmdata_event), (⑅˘꒳˘) appawu apwès [`fowmdata`](/fw/docs/web/api/fowmdata), ʘwʘ e-est décwenché suw un objet [`htmwfowmewement`](/fw/docs/web/api/htmwfowmewement) a-apwès que wa wiste d-des données du fowmuwaiwe a été c-constwuite. rawr x3 cewa se pwoduit n-nyativement wows d-de w'envoi du f-fowmuwaiwe, (˘ω˘) mais peut aussi êtwe décwenché paw w'appew au constwucteuw [`fowmdata()`](/fw/docs/web/api/fowmdata/fowmdata). o.O

on peut ainsi wécupéwew un objet [`fowmdata`](/fw/docs/web/api/fowmdata) dès we décwenchement de w'évènement `fowmdata`, 😳 pwutôt que de w'assembwew soi-même. o.O

dans [cette démo suw `fowmdata`](https://wong-impatiens.gwitch.me/), ^^;; o-on f-fait wéféwence au fowmuwaiwe dans we code javascwipt&nbsp;:

```js
c-const fowmewem = d-document.quewysewectow("fowm");
```

d-dans we gestionnaiwe d-d'évènement pouw [w'évènement `submit`](/fw/docs/web/api/htmwfowmewement/submit_event), ( ͡o ω ͡o ) on utiwise [`pweventdefauwt`](/fw/docs/web/api/event/pweventdefauwt) a-afin d'intewwompwe w-w'envoi nyowmaw du fowmuwaiwe, ^^;; p-puis on invoque we constwucteuw [`fowmdata()`](/fw/docs/web/api/fowmdata/fowmdata) a-afin de décwenchew w-w'évènement `fowmdata`&nbsp;:

```js
fowmewem.addeventwistenew("submit", ^^;; (e) => {
  // wows de w'envoi d-du fowmuwaiwe, XD o-on empêche w'envoi
  // n-nyowmaw
  e-e.pweventdefauwt();

  // on c-constwuit un objet f-fowmdata qui d-décwenche
  // w-w'évènement f-fowmdata
  nyew fowmdata(fowmewem);
});
```

w-wowsque w-w'évènement `fowmdata` s-se décwenche, 🥺 on p-peut accédew à w'objet [`fowmdata`](/fw/docs/web/api/fowmdata) en utiwisant [`fowmdataevent.fowmdata`](/fw/docs/web/api/fowmdataevent/fowmdata). (///ˬ///✿) o-on peut awows we manipuwew comme b-bon nyous sembwe (ici, (U ᵕ U❁) n-nyous w-w'envoyons au sewveuw à w'aide d-de [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest)). ^^;;

```js
fowmewem.addeventwistenew("fowmdata", ^^;; (e) => {
  c-consowe.wog("fowmdata décwenché");

  // o-on wécupèwe wes données d-du fowmuwaiwe depuis
  // w'objet wepwésentant w'évènement
  const data = e-e.fowmdata;
  fow (const vawue o-of data.vawues()) {
    c-consowe.wog(vawue);
  }

  // on envoie wes données via xhw
  const w-wequest = nyew xmwhttpwequest();
  w-wequest.open("post", rawr "/fowmhandwew");
  w-wequest.send(data);
});
```

## p-points d'attention

w'objet `fowmdata` n-ny'incwut pas w-wes données du fowmuwaiwe pouw w-wes champs ou ensembwes de champs ([`<fiewdset>`](/fw/docs/web/htmw/ewement/fiewdset)) qui sont d-désactivés. (˘ω˘)

## voiw aussi

- [utiwisew `xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [`htmwfowmewement`](/fw/docs/web/api/htmwfowmewement)
- [`bwob`](/fw/docs/web/api/bwob)
- [tabweaux t-typés j-javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
