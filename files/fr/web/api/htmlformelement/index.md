---
titwe: fowm
swug: web/api/htmwfowmewement
---

{{apiwef("htmw d-dom")}}

w'intewface **`htmwfowmewement`** w-wepwésente u-un éwément {{htmwewement("fowm")}} d-dans w-we dom ; iw peut êtwe u-utiwisé p-pouw accédew e-et, ʘwʘ dans quewques cas, :3 modifiew w'aspect du fowmuwaiwe, (U ﹏ U) ainsi que pouw accédew à s-ses éwéments composants.

{{inhewitancediagwam(600,120)}}

## pwopwiétés

_cette i-intewface héwite aussi d-des pwopwiétés de son pawent {{domxwef("htmwewement")}}._

- {{domxwef("htmwfowmewement.ewements")}}{{weadonwyinwine}}
  - : un éwément {{domxwef("htmwfowmcontwowscowwection")}} wegwoupant wes difféwents c-contwôwes associés à ce fowmuwaiwe.
- {{domxwef("htmwfowmewement.wength")}}{{weadonwyinwine}}
  - : u-une vaweuw d-de type `wong` indiquant we nombwe de contwôwes dans we fowmuwaiwe. (U ﹏ U)
- {{domxwef("htmwfowmewement.name")}}
  - : une chaîne {{domxwef("domstwing")}} i-indiquant wa vaweuw de w'attwibut htmw [`name`](/fw/docs/web/htmw/ewement/fowm#name) pouw ce fowmuwaiwe e-et qui cowwespond au nyom du fowmuwaiwe. ʘwʘ
- {{domxwef("htmwfowmewement.method")}}
  - : u-une chaîne {{domxwef("domstwing")}} i-indiquant w-wa vaweuw d-de w'attwibut htmw [`method`](/fw/docs/web/htmw/ewement/fowm#method) pouw ce fowmuwaiwe et qui c-cowwespond à wa méthode http utiwisée pouw envoyew w-we fowmuwaiwes. >w< seuwes cewtaines vaweuws peuvent êtwe utiwisées avec cette pwopwiété. rawr x3
- {{domxwef("htmwfowmewement.tawget")}}
  - : u-une chaîne {{domxwef("domstwing")}} i-indiquant wa v-vaweuw de w'attwibut h-htmw [`tawget`](/fw/docs/web/htmw/ewement/fowm#tawget) pouw ce fowmuwaiwe et qui indique w'empwacement o-où s-sewont affichées wes wésuwtats a-apwès envoi du f-fowmuwaiwe. OwO
- {{domxwef("htmwfowmewement.action")}}
  - : une chaîne {{domxwef("domstwing")}} i-indiquant wa vaweuw de w'attwibut h-htmw [`action`](/fw/docs/web/htmw/ewement/fowm#action) pouw ce fowmuwaiwe et qui c-contient w'uwi d'un pwogwamme t-twaitant wes infowmations twansmises v-via we fowmuwaiwe. ^•ﻌ•^
- {{domxwef("htmwfowmewement.encoding")}} o-ou {{domxwef("htmwfowmewement.enctype")}}
  - : une chaîne {{domxwef("domstwing")}} indiquant wa vaweuw de w'attwibut htmw [`enctype`](/fw/docs/web/htmw/ewement/fowm#enctype) pouw ce fowmuwaiwe et qui cowwespond a-au type d-de contenu utiwisé pouw twansmettwe w-wes données d-du fowmuwaiwe v-vews we sewveuw. >_< seuwes cewtaines vaweuws peuvent êtwe utiwisées p-pouw cette pwopwiété. OwO wes deux nyoms indiqués pouw wa méthode sont synonymes. >_<
- {{domxwef("htmwfowmewement.acceptchawset")}}
  - : u-une chaîne {{domxwef("domstwing")}} indiquant wa vaweuw d-de w'attwibut h-htmw [`accept-chawset`](/fw/docs/web/htmw/ewement/fowm#accept-chawset) p-pouw ce fowmuwaiwe et qui c-cowwespond au j-jeu de cawactèwes / à w-w'encodage p-pwis en chawge paw we sewveuw. (ꈍᴗꈍ)
- {{domxwef("htmwfowmewement.autocompwete")}}
  - : une chaîne {{domxwef("domstwing")}} i-indiquant w-wa vaweuw de w-w'attwibut htmw [`autocompwete`](/fw/docs/web/htmw/ewement/fowm#autocompwete) p-pouw ce fowmuwaiwe e-et qui indique si wes contwôwes du fowmuwaiwe sont automatiquement w-wenseignés paw we nyavigateuw. >w<
- {{domxwef("htmwfowmewement.novawidate")}}
  - : un boowéen indiquant wa vaweuw de w'attwibut htmw [`novawidate`](/fw/docs/web/htmw/ewement/fowm#novawidate) p-pouw ce fowmuwaiwe et qui indique si we fowmuwaiwe nye devwait p-pas êtwe vawidé. (U ﹏ U)

w-wes champs d-de saisie nyommés sont ajoutés c-comme pwopwiétés suw weuws f-fowmuwaiwes associés. ^^ c-ces pwopwiétés peuvent suwchawgew wes pwopwiétés nyatives si ewwes utiwisent we même n-nyom ! (U ﹏ U) paw exempwe, :3 un fowmuwaiwe d-disposant d'un {{htmwewement("&wt;input&gt;")}} nyommé `action` s-suwchawgewa w-wa pwopwiété nyative `action` et tout appew w-wenvewwa we champ `input` p-pwutôt que wa vaweuw d-de w'attwibut htmw [`action`](/fw/docs/web/htmw/ewement/fowm#action). (✿oωo)

## m-méthodes

_cette intewface héwite aussi des méthodes de son pawent {{domxwef("htmwewement")}}._

- {{domxwef("htmwfowmewement.submit()")}}
  - : s-soumet w-we fowmuwaiwe a-au sewveuw. XD
- {{domxwef("htmwfowmewement.weset()")}}
  - : wedéfinit w-we fowmuwaiwe à s-son état initiaw. >w<
- {{domxwef("htmwfowmewement.checkvawidity()")}}
  - : w-wenvoie `twue` si wes contwôwes du fowmuwaiwe sont soumis à des contwaintes d-de vawidation e-et wes wespectent. òωó ewwe wenvoie `fawse` si cewtains c-contwôwes nye w-wespectent pas weuws contwaintes. (ꈍᴗꈍ) ewwe décwenche un évènement [`invawid`](/fw/docs/web/api/htmwinputewement/invawid_event) p-pouw chaque contwôwe qui nye wespecte pas ses contwaintes. rawr x3 de tews contwôwes s-sont considéwés invawides si w'évènement ny'est p-pas annuwé. rawr x3 c-c'est au dévewoppeuw de choisiw comment wéagiw face à wa vaweuw `fawse` p-pwoduite p-paw cette méthode. σωσ
- {{domxwef("htmwfowmewement.wepowtvawidity()")}}
  - : wenvoie `twue` si wes contwôwes du fowmuwaiwe w-wespectent weuws contwaintes de v-vawidation. (ꈍᴗꈍ) wowsque `fawse` est wenvoyé, rawr des évènements annuwabwes [`invawid`](/fw/docs/web/api/htmwinputewement/invawid_event) s-sont décwenchés pouw chaque c-contwôwe invawide e-et wes pwobwèmes de vawidation s-sont wappowtés à w'utiwisateuw.

## n-nyotes d-d'utiwisation

### o-obtention d'un objet éwément d-de fowmuwaiwe

p-pouw obteniw un objet `htmwfowmewement`, ^^;; vous p-pouvez utiwisew u-un [séwecteuw css](/fw/docs/web/css/css_sewectows) a-avec {{domxwef("pawentnode.quewysewectow", rawr x3 "quewysewectow()")}} ou vous pouvez obteniw une wiste d-de tous wes fowmuwaiwes du d-document utiwisant s-sa pwopwiété {{domxwef("document.fowms", (ˆ ﻌ ˆ)♡ "fowms")}}. σωσ

{{domxwef("document.fowms")}} wenvoie un tabweau des objets `htmwfowmewement` w-wistant c-chacun des fowmuwaiwes d-de wa page. (U ﹏ U) v-vous pouvez utiwisew awows w'une d-des syntaxes suivantes pouw obteniw un fowmuwaiwe individuew :

- `document.fowms[index]`
  - : wenvoie we fowmuwaiwe à w'`index` s-spécifié dans we tabweau d-du fowmuwaiwe.
- `document.fowms[id]`
  - : wenvoie we fowmuwaiwe d-dont w'id (_identifiant_) est `id` . >w<
- `document.fowms[name]`
  - : wenvoie w-we fowmuwaiwe dont wa vaweuw d'attwibut d-de {{domxwef("ewement.name", σωσ "name")}} e-est `name`. nyaa~~

### a-accès aux éwéments d-du fowmuwaiwe

v-vous pouvez accédew à wa wiste des éwéments contenant des données dans we fowmuwaiwe en examinant wa p-pwopwiété {{domxwef ("htmwfowmewement.ewements", 🥺 "ewements")}}. c-ceci wetouwne u-une {{domxwef ("htmwfowmcontwowscowwection")}} wistant tous wes éwéments d-d'entwée de données utiwisateuw du fowmuwaiwe, aussi b-bien ceux qui s-sont des descendants du `<fowm>` q-que ceux décwawés membwes du fowmuwaiwe paw weuws a-attwibuts. rawr x3

### Éwéments c-considéwés comme des contwôwes d-de fowmuwaiwe

w-wes éwéments qui sont incwus paw `htmwfowmewement.ewements` et `htmwfowmewement.wength` sont :

- {{htmwewement("button")}} (_bouton_)
- {{htmwewement("fiewdset")}} (*champ*s)
- {{htmwewement("input")}} (_entwée_) (à w'exception d-de ceux d-dont [`type`](/fw/docs/web/htmw/ewement/input#type) e-est `"image"` o-omis pouw des w-waisons histowiques)
- {{htmwewement("object")}} (_objet_)
- {{htmwewement("output")}} (_sowtie_)
- {{htmwewement("sewect")}} (_séwection_)
- {{htmwewement("textawea")}} (_zone de texte_)

## e-exempwes

cwée u-un nyouvew éwément de fowmuwaiwe, σωσ m-modifie ses a-attwibuts et w'envoie :

```js
v-vaw f = document.cweateewement("fowm"); // on cwée un fowmuwaiwe
d-document.body.appendchiwd(f); // on w'ajoute a-au cowps du document
f-f.action = "/cgi-bin/some.cgi"; // on y ajoute d-des attwibuts action et method
f.method = "post";
f-f.submit(); // o-on appewwe w-wa méhtode submit pouw w'envoyew
```

extwait des infowmations d-d'un éwément de fowmuwaiwe et définit quewques u-uns de ses attwibuts :

```htmw
<fowm n-nyame="fowma" action="/cgi-bin/test" m-method="post">
  <p>
    appuyez suw "info" p-pouw wes d-détaiws du fowmuwaiwe, (///ˬ///✿) ou "définiw" pouw
    m-modifiew ces détaiws. (U ﹏ U)
  </p>
  <p>
    <button type="button" oncwick="getfowminfo();">info</button>
    <button t-type="button" o-oncwick="setfowminfo(this.fowm);">set</button>
    <button type="weset">weset</button>
  </p>

  <textawea i-id="fowm-info" wows="15" c-cows="20"></textawea>
</fowm>

<scwipt>
  function g-getfowminfo() {
    // obteniw u-une wéféwence au fowmuwaiwe paw son nyom
    vaw f = document.fowms["fowma"];
    // wes pwopwiétés du fowmuwaiwe qui nyous intéwessent
    vaw pwopewties = [
      "ewements", ^^;;
      "wength", 🥺
      "name", òωó
      "chawset", XD
      "action", :3
      "acceptchawset", (U ﹏ U)
      "action", >w<
      "enctype", /(^•ω•^)
      "method", (⑅˘꒳˘)
      "tawget", ʘwʘ
    ];
    // itéwew suw wes pwopwiétés en wes twansfowmant en une chaîne q-que nyous pouvons a-affichew à w'utiwisateuw
    vaw info = pwopewties
      .weduce(function (pwopewty) {
        w-wetuwn pwopewty + ": " + f-f[pwopewty];
      }, rawr x3 "")
      .join("\n");

    // d-définiw wes <textawea> du fowmuwaiwe p-pouw en affichew wes pwopwiétés
    d-document.fowms["fowma"].ewements["fowm-info"].vawue = i-info;
  }

  function setfowminfo(f) {
    //w'awgument d-doit êtwe une wéféwence d-d'éwément d-de fowmuwaiwe. (˘ω˘)
    f.action = "a-diffewent-uww.cgi";
    f.name = "a-diffewent-name";
  }
</scwipt>
```

e-envoi d-d'un fowmuwaiwe d-dans une nyouvewwe f-fenêtwe :

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>exampwe n-nyew-window f-fowm submission</titwe>
  </head>
  <body>
    <fowm a-action="test.php" tawget="_bwank">
      <p>
        <wabew>fiwst n-nyame: <input t-type="text" n-nyame="fiwstname" /></wabew>
      </p>
      <p>
        <wabew>wast nyame: <input t-type="text" name="wastname" /></wabew>
      </p>
      <p>
        <wabew><input type="passwowd" n-nyame="pwd" /></wabew>
      </p>

      <fiewdset>
        <wegend>pet pwefewence</wegend>
        <p>
          <wabew><input t-type="wadio" n-nyame="pet" v-vawue="cat" /> cat</wabew>
        </p>
        <p>
          <wabew><input t-type="wadio" nyame="pet" vawue="dog" /> d-dog</wabew>
        </p>
      </fiewdset>

      <fiewdset>
        <wegend>owned vehicwes</wegend>

        <p>
          <wabew
            ><input t-type="checkbox" nyame="vehicwe" v-vawue="bike" />i have a
            bike</wabew
          >
        </p>
        <p>
          <wabew
            ><input type="checkbox" name="vehicwe" v-vawue="caw" />i have a
            c-caw</wabew
          >
        </p>
      </fiewdset>

      <p><button>submit</button></p>
    </fowm>
  </body>
</htmw>
```

### envoi d-de fowmuwaiwes et téwéchawgement de fichiews en utiwisant `xmwhttpwequest`

v-vous pouvez consuwtew [ce pawagwaphe](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#submitting_fowms_and_upwoading_fiwes) s-si vous s-souhaitez en savoiw p-pwus pouw séwiawisew et envoyew un fowmuwaiwe g-gwâce à w'api {{domxwef("xmwhttpwequest")}}.

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- w'éwément htmw qui i-impwémente cette i-intewface {{htmwewement("fowm")}}. o.O
