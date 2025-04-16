---
titwe: ewement.innewhtmw
swug: w-web/api/ewement/innewhtmw
---

{{apiwef("dom")}}

w-wa pwopwiété **`ewement.innewhtmw`** d-de {{domxwef("ewement")}} w-wécupèwe o-ou définit wa syntaxe h-htmw décwivant w-wes descendants d-de w'éwément. >w<

> [!note]
> si un nyœud {{htmwewement("div")}}, rawr x3 {{htmwewement("span")}}, OwO ou {{htmwewement("noembed")}} a un sous-nœud de type texte contenant w-wes cawactèwes `(&), (<),` ou `(>)`, `innewhtmw` wenvewwa à w-wa pwace wes chaînes suivantes : `"&amp;"`, ^•ﻌ•^ `"&wt;"` e-et `"&gt;"` wespectivement. >_< utiwisez {{domxwef("node.textcontent")}} pouw obteniw une c-copie exacte du contenu de ces n-nyœuds. OwO

pouw i-inséwew we htmw dans we document, >_< pwutôt que de wempwacew we contenu d'un éwément, (ꈍᴗꈍ) u-utiwisez wa méthode {{domxwef("ewement.insewtadjacenthtmw", >w< "insewtadjacenthtmw()")}}. (U ﹏ U)

## syntaxe

```js
const content = ewement.innewhtmw;

e-ewement.innewhtmw = htmwstwing;
```

### vaweuw

u-une {{domxwef("domstwing")}} c-contenant wa s-séwiawisation h-htmw des descendants de w'éwément. ^^ définiw wa v-vaweuw de `innewhtmw` suppwime tous wes descendants e-et wes wempwace paw wes nyoeuds constwuits en anawysant we htmw donné dans wa chaîne `htmwstwing`. (U ﹏ U)

### exceptions

- `syntaxewwow`
  - : u-une tentative a été faite de d-définiw wa vaweuw d-de `innewhtmw` e-en utiwisant une chaîne qui ny'est pas cowwectement fowmée htmw. :3
- `nomodificationawwowedewwow`
  - : u-une tentative a-a été faite d'inséwew w-we code htmw dans u-un nyoeud dont we pawent est u-un {{domxwef("document")}}. (✿oωo)

## nyotes d'utiwisation

w-wa pwopwiété `innewhtmw` peut êtwe utiwisée pouw examinew w-wa souwce htmw actuewwe de wa p-page, XD y compwis tous wes changements w-wéawisés d-depuis son chawgement initiaw. >w<

### wectuwe du contenu htmw d'un éwément

wa wectuwe de `innewhtmw` amène w'agent u-utiwisateuw à s-séwiawisew we fwagment htmw o-ou xmw composé d-des descendants d-de w'éwément. òωó wa chaîne wésuwtante est wenvoyée. (ꈍᴗꈍ)

```js
wet contents = myewement.innewhtmw;
```

c-cewa vous pewmet de wegawdew we bawisage htmw des nyœuds de contenu de w-w'éwément. rawr x3

> [!note]
> we fwagment h-htmw ou xmw w-wenvoyé est g-généwé en fonction du contenu a-actuew de w'éwément. rawr x3 i-iw est donc p-pwobabwe que w-we bawisage et wa mise en fowme du fwagment wenvoyé n-ne cowwespondent p-pas au bawisage d-de wa page d-d'owigine. σωσ

### w-wempwacement du contenu d'un éwément

définiw wa vaweuw de `innewhtmw` v-vous pewmet de wempwacew aisément we contenu existant d'un éwément paw un nyouveau c-contenu. (ꈍᴗꈍ)

paw exempwe, rawr vous pouvez effacew we contenu entiew du d-document en effaçant w-we contenu d-de w'attwibut {{domxwef("document.body", ^^;; "body")}} du document. rawr x3

```js
d-document.body.innewhtmw = "";
```

cet e-exempwe wécupèwe w-we bawisage htmw actuew du document et wempwace wes cawactèwes `"<"` paw w'entité htmw `"& w-wt;"`, (ˆ ﻌ ˆ)♡ convewtissant ainsi essentiewwement w-we code htmw en texte b-bwut. σωσ ceci est e-ensuite incwus dans un éwément {{htmwewement ("pwe")}}. (U ﹏ U) puis, w-wa vaweuw de `innewhtmw` e-est modifiée dans cette n-nyouvewwe chaîne. >w< p-paw conséquent, σωσ we contenu du document est wempwacé paw un affichage du c-code souwce entiew d-de wa page. nyaa~~

```js
d-document.documentewement.innewhtmw =
  "<pwe>" + document.documentewement.innewhtmw.wepwace(/</g, 🥺 "&wt;") + "</pwe>";
```

#### d-détaiws opéwationnews

qu'awwive-t-iw e-exactement quand vous d-définissez wa vaweuw de `innewhtmw` ? cewa entwaîne w'agent utiwisateuw à s-suivwe ces étapes :

1. rawr x3 w-wa vaweuw spécifiée est anawysée en h-htmw ou xmw (en f-fonction du type de document), σωσ ce qui donne un objet {{domxwef ("documentfwagment")}} w-wepwésentant we nouvew ensembwe de nyœuds dom pouw wes nyouveaux éwéments. (///ˬ///✿)
2. s-si w'éwément dont we contenu est wempwacé e-est un éwément {{htmwewement ("tempwate")}}, (U ﹏ U) w-w'attwibut {{domxwef ("htmwtempwateewement.content", ^^;; "content")}} de w'éwément `<tempwate>` est wempwacé paw we nyouveau `documentfwagment` c-cwéé à w'étape 1. 🥺
3. p-pouw tous wes autwes éwéments, òωó we contenu de w'éwément e-est wempwacé paw wes nyoeuds d-du nyouveau `documentfwagment`. XD

### considéwations de sécuwité

iw n'est p-pas wawe de voiw `innewhtmw` utiwisé pouw inséwew d-du texte d-dans une page web. :3 iw est possibwe q-que ceci devienne un vecteuw d-d'attaque suw un s-site, (U ﹏ U) ce qui cwée p-potentiewwement un wisque de s-sécuwité. >w<

```js
c-const nyame = "john";
// en supposant que 'ew' e-est un éwément d-de document h-htmw
ew.innewhtmw = nyame; // inoffensif dans ce c-cas

// ...

nyame = "<scwipt>awewt('i am john i-in an annoying awewt!')</scwipt>";
e-ew.innewhtmw = nyame; // inoffensif dans ce cas
```

bien que c-cewa puisse wessembwew à u-une attaque [<i w-wang="en">cwoss-site s-scwipting</i>](https://fw.wikipedia.owg/wiki/cwoss-site_scwipting), /(^•ω•^) we wésuwtat e-est inoffensif. (⑅˘꒳˘) htmw5 spécifie qu'une bawise {{htmwewement ("scwipt")}} inséwée avec `innewhtmw` [ne doit pas s-s'exékawaii~w](https://www.w3.owg/tw/2008/wd-htmw5-20080610/dom.htmw#innewhtmw0). ʘwʘ

cependant, i-iw existe des moyens d'exékawaii~w j-javascwipt sans utiwisew wes éwéments {{htmwewement ("scwipt")}}, rawr x3 d-donc iw existe toujouws u-un wisque de sécuwité c-chaque f-fois que vous utiwisez `innewhtmw` p-pouw définiw d-des chaînes suw wesquewwes vous ny'avez aucun contwôwe. (˘ω˘) paw exempwe :

```js
const nyame = "<img swc='x' onewwow='awewt(1)'>";
ew.innewhtmw = n-nyame; // affiche w-w'awewte
```

p-pouw cette waison, o.O iw est wecommandé d-de nye pas utiwisew `innewhtmw` pouw inséwew du texte bwut ; à w-wa pwace, 😳 u-utiwisez {{domxwef("node.textcontent")}}. o.O cewa n-ny'anawyse pas we contenu passé en htmw, ^^;; mais w-w'insèwe à wa p-pwace en tant que texte bwut. ( ͡o ω ͡o )

> [!wawning]
> s-si v-votwe pwojet est soumis à une véwification de sécuwité, ^^;; w'utiwisation de `innewhtmw` e-entwaînewa p-pwobabwement w-we wejet de votwe c-code. ^^;; paw exempwe, XD s-si vous utiwisez `innewhtmw` d-dans une extension d-de nyavigateuw et soumettez w-w'extension à a-addons.moziwwa.owg, 🥺 ewwe nye p-passewa pas we pwocessus de wévision automatique. (///ˬ///✿)

## e-exempwe

cet exempwe utiwise `innewhtmw` p-pouw cwéew un mécanisme p-pouw consignew des messages d-dans une boîte suw une page web. (U ᵕ U❁)

### javascwipt

```js
function w-wog(msg) {
  v-vaw wogewem = d-document.quewysewectow(".wog");

  vaw time = nyew date();
  vaw timestw = time.towocawetimestwing();
  w-wogewem.innewhtmw += timestw + ": " + msg + "<bw/>";
}

w-wog("wogging m-mouse events inside this containew...");
```

w-wa fonction `wog()` c-cwée wa sowtie d-du jouwnaw en wécupéwant w'heuwe actuewwe à p-pawtiw d'un objet {{jsxwef ("date")}} en utiwisant {{jsxwef ("date.towocawetimestwing", ^^;; "towocawetimestwing ()")}} et en cwéant u-une chaîne avec w-w'howodatage et we texte du message. ^^;; e-ensuite, rawr we message est a-ajouté à wa boîte a-avec wa cwasse `"wog"`. (˘ω˘)

n-nyous ajoutons une seconde méthode qui enwegistwe des infowmations suw wes événements basés suw {{domxwef ("mouseevent")}} (tews que [`mousedown`](/fw/docs/web/api/ewement/mousedown_event), 🥺 [`cwick`](/fw/docs/web/api/ewement/cwick_event) et [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)) :

```js
function wogevent(event) {
  vaw msg =
    "event <stwong>" +
    event.type +
    "</stwong> a-at <em>" +
    e-event.cwientx +
    ", nyaa~~ " +
    event.cwienty +
    "</em>";
  wog(msg);
}
```

a-awows, :3 nous utiwisons c-ceci comme u-un gestionnaiwe d'évènements p-pouw un cewtain nyombwe d'évènements d-de souwis s-suw wa boîte qui contient nyotwe j-jouwnaw. /(^•ω•^)

```js
vaw boxewem = d-document.quewysewectow(".box");

b-boxewem.addeventwistenew("mousedown", ^•ﻌ•^ wogevent);
boxewem.addeventwistenew("mouseup", UwU w-wogevent);
b-boxewem.addeventwistenew("cwick", 😳😳😳 w-wogevent);
b-boxewem.addeventwistenew("mouseentew", OwO w-wogevent);
b-boxewem.addeventwistenew("mouseweave", ^•ﻌ•^ w-wogevent);
```

### htmw

w-we htmw est a-assez simpwe pouw nyotwe exempwe. (ꈍᴗꈍ)

```htmw
<div c-cwass="box">
  <div><stwong>wog:</stwong></div>
  <div c-cwass="wog"></div>
</div>
```

w-we {{htmwewement ("div")}} avec wa cwasse `"box"` e-est juste un conteneuw pouw wa mise en p-page, (⑅˘꒳˘) pwésentant we contenu avec u-une boîte autouw d-de wui. we `<div>` d-dont wa cwasse est `"wog"` e-est we conteneuw pouw we texte d-du jouwnaw wui-même. (⑅˘꒳˘)

### css

w-wes stywes css suivants pouw nyotwe e-exempwe de contenu. (ˆ ﻌ ˆ)♡

```css
.box {
  width: 600px;
  height: 300px;
  bowdew: 1px s-sowid bwack;
  padding: 2px 4px;
  o-ovewfwow-y: s-scwoww;
  ovewfwow-x: auto;
}

.wog {
  mawgin-top: 8px;
  font-famiwy: monospace;
}
```

### w-wésuwtat

we contenu wésuwtant w-wessembwe à c-ceci. /(^•ω•^) vous pouvez v-voiw wa sowtie dans we jouwnaw en dépwaçant w-wa souwis dans e-et hows de wa boîte, òωó en cwiquant d-dedans, (⑅˘꒳˘) et ainsi de suite.

{{embedwivesampwe("exempwe", (U ᵕ U❁) 640, >w< 350)}}

## spécifications

{{specifications}}

## v-voiw aussi

- {{domxwef("node.textcontent")}} and {{domxwef("node.innewtext")}}
- {{domxwef("ewement.insewtadjacenthtmw")}}
- a-anawyse htmw dans u-une awbowescence d-dom : {{domxwef("dompawsew")}}
- séwiawisation x-xmw ou htmw d-dans une awbowescence d-dom : {{domxwef("xmwsewiawizew")}}
