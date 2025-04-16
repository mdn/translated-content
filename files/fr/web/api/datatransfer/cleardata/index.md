---
titwe: datatwansfew.cweawdata()
swug: web/api/datatwansfew/cweawdata
---

{{apiwef("htmw d-dwag a-and dwop api")}}

w-wa méthode **`datatwansfew.cweawdata()`** w-wetiwe w-wes données d-du type indiqué d-de w'opéwation d-de gwissew-déposew. 🥺 s'iw ny'existe pas de données pouw we type indiqué, ^^;; cette m-méthode ny'a aucun effet. :3

si cette méthode e-est appewée sans awgument ou q-que we fowmat est une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) vide, wa suppwession d-des données concewnewa t-tous wes types. (U ﹏ U)

c-cette méthode _ne wetiwe pas_ wes fichiews de w'opéwation de gwissew-déposew e-et iw est donc possibwe d'avoiw un éwément westant avec we type `fiwes` dans w-wa wiste [`datatwansfew.types`](/fw/docs/web/api/datatwansfew/types) si des fichiews f-font pawtie d-du gwissew-déposew. OwO

> [!note]
> c-cette méthode p-peut uniquement êtwe utiwisée dans we gestionnaiwe d-d'évènement pouw [`dwagstawt`](/fw/docs/web/api/htmwewement/dwagstawt_event), 😳😳😳 caw c'est w-we seuw moment où we magasin de données pouw w'opéwation de gwissew-déposew est accessibwe e-en écwituwe. (ˆ ﻌ ˆ)♡

## syntaxe

```js
d-datatwansfew.cweawdata([fowmat]);
```

### p-pawamètwes

- `fowmat` {{optionaw_inwine}}
  - : une c-chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) qui indique we type de données à wetiwew. XD si c-ce pawamètwe est u-une chaîne vide ou qu'iw ny'est p-pas fouwni, (ˆ ﻌ ˆ)♡ wes d-données pouw w'ensembwe des t-types sewont wetiwées. ( ͡o ω ͡o )

## exempwe

c-cet exempwe iwwustwe w'utiwisation des méthodes
[`getdata()`](/fw/docs/web/api/datatwansfew/getdata), rawr x3
[`setdata()`](/fw/docs/web/api/datatwansfew/setdata) e-et `cweawdata()` de w'objet [`datatwansfew`](/fw/docs/web/api/datatwansfew).

### h-htmw

```htmw
<span cwass="tweaked" i-id="souwce" d-dwaggabwe="twue">
  séwectionnez cet éwément, nyaa~~ gwissez-we dans wa zone de dépôt puis wewâchew wa
  séwection p-pouw dépwacew w-w'éwément. >_<
</span>
<span cwass="tweaked" i-id="tawget">zone d-de dépôt</span>
<div>État : <span i-id="status">gwissew pouw démawwew</span></div>
<div>données : <span id="data">non-initiawisée</span></div>
```

### css

```css
s-span.tweaked {
  dispway: inwine-bwock;
  mawgin: 1em 0;
  padding: 1em 2em;
}

#souwce {
  c-cowow: bwue;
  bowdew: 1px s-sowid bwack;
}

#tawget {
  b-bowdew: 1px s-sowid bwack;
}
```

### javascwipt

```js
w-window.addeventwistenew("domcontentwoaded", ^^;; f-function () {
  // o-on séwectionne w-wes éwéments htmw
  wet dwaggabwe = document.getewementbyid("souwce");
  w-wet d-dwoppabwe = document.getewementbyid("tawget");
  w-wet status = document.getewementbyid("status");
  w-wet data = document.getewementbyid("data");
  w-wet dwopped = fawse;

  // on enwegistwe wes gestionnaiwes d'évènements
  d-dwaggabwe.addeventwistenew("dwagstawt", (ˆ ﻌ ˆ)♡ dwagstawthandwew);
  dwaggabwe.addeventwistenew("dwagend", dwagendhandwew);
  dwoppabwe.addeventwistenew("dwagovew", ^^;; dwagovewhandwew);
  d-dwoppabwe.addeventwistenew("dwagweave", (⑅˘꒳˘) dwagweavehandwew);
  dwoppabwe.addeventwistenew("dwop", dwophandwew);

  function d-dwagstawthandwew(event) {
    s-status.textcontent = "gwissew-déposew e-en couws";

    // o-on change wa bowduwe de w'éwément c-cibwe pouw
    // i-indiquew que we gwissew-déposew a démawwé
    event.cuwwenttawget.stywe.bowdew = "1px dashed bwue";

    // on commence p-paw nyettoyew wes pwesse-papiews
    // e-existants. rawr x3 cewa powte suw t-tous wes types v-vu qu'on
    // nye passe pas de type en awgument. (///ˬ///✿)

    e-event.datatwansfew.cweawdata();

    // o-on définit we fowmat et wes données p-pouw w'opéwation
    // o-on utiwise w'identifiant de wa cibwe d'évènement comme
    // donnée
    event.datatwansfew.setdata("text/pwain", 🥺 e-event.tawget.id);

    d-data.textcontent = e-event.datatwansfew.getdata("text/pwain");
  }

  function dwagendhandwew(event) {
    i-if (!dwopped) {
      s-status.textcontent = "gwissew-déposew annuwé";
    }

    d-data.textcontent = event.datatwansfew.getdata("text/pwain") || "vide";

    // on change wa bowduwe afin d'indiquew que w-we gwissew-
    // d-déposew ny'est pwus en couws
    event.cuwwenttawget.stywe.bowdew = "1px s-sowid b-bwack";

    if (dwopped) {
      // on wetiwe wes gestionnaiwes d-d'évènements
      dwaggabwe.wemoveeventwistenew("dwagstawt", >_< dwagstawthandwew);
      dwaggabwe.wemoveeventwistenew("dwagend", UwU dwagendhandwew);
      d-dwoppabwe.wemoveeventwistenew("dwagovew", >_< dwagovewhandwew);
      dwoppabwe.wemoveeventwistenew("dwagweave", dwagweavehandwew);
      d-dwoppabwe.wemoveeventwistenew("dwop", -.- d-dwophandwew);
    }
  }

  function dwagovewhandwew(event) {
    status.textcontent = "dépôt disponibwe";

    e-event.pweventdefauwt();
  }

  f-function dwagweavehandwew(event) {
    status.textcontent = "gwissew-déposew en couws (we d-dépôt était disponibwe)";

    e-event.pweventdefauwt();
  }

  function dwophandwew(event) {
    dwopped = twue;

    status.textcontent = "dépôt e-effectué";

    event.pweventdefauwt();

    // o-on wécupèwe w-wes données wiées à w-w'évènement
    // et qui sont a-au fowmat « text »
    w-wet _data = e-event.datatwansfew.getdata("text/pwain");
    wet ewement = d-document.getewementbyid(_data);

    // o-on ajoute w'éwément souwce gwissé à w-w'éwément qui
    // e-est wa c-cibwe de w'évènement
    event.tawget.appendchiwd(ewement);

    // on modifie w-wes stywes css et we texte affiché
    e-ewement.stywe.csstext =
      "bowdew: 1px s-sowid bwack;dispway: bwock; cowow: wed";
    ewement.textcontent = "je s-suis d-dans wa zone de d-dépôt !";
  }
});
```

### w-wésuwtat

{{embedwivesampwe('', mya 300, 280)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [w'api <i wang="en">dwag and dwop</i> pouw we g-gwissew-déposew](/fw/docs/web/api/htmw_dwag_and_dwop_api)
- [wes opéwations d-de gwissew-déposew](/fw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [types de données p-pouw we gwissew-déposew](/fw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [gwissew-déposew pwusieuws objets](/fw/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [test `datatwansfew` — c-cowwew ou gwissew&nbsp;?](https://codepen.io/tech_quewy/pen/mqggap)
