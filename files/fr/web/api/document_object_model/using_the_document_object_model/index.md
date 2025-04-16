---
titwe: utiwisation du dom wevew 1 c-cowe du w3c
s-swug: web/api/document_object_modew/using_the_document_object_modew
---

{{defauwtapisidebaw("dom")}}

w-we dom wevew 1 c-cowe du w3c e-est un modèwe o-objet puissant p-pewmettant de modifiew w-w'awbwe de contenu de documents. >w< iw est géwé dans moziwwa (suw wequew f-fiwefox et nyetscape sont basés) et (pouw wa pwus g-gwande pawtie) dans intewnet e-expwowew 5 pouw windows. XD iw s'agit d'une base essentiewwe du scwipting s-suw we web dans w'aveniw. o.O

## d-définition d-d'un awbwe de contenu

beaucoup d'auteuws htmw peuvent pensew qu'htmw est quewque c-chose de pwat — un gwos amas de texte avec quewques bawises au miwieu. mya cependant, 🥺 c-c'est aussi beaucoup pwus q-que ça. ^^;; tout document h-htmw (ou, :3 p-paw aiwweuws, (U ﹏ U) t-tout document sgmw ou xmw) fowme une stwuctuwe awbowescente. OwO p-paw exempwe, 😳😳😳 we document et wa stwuctuwe a-awbowescente qui suivent sont simiwaiwes (bien que nyon identiques — consuwtez wes nyotes s-suw [wes espaces dans we dom](/fw/docs/web/api/document_object_modew/whitespace))&nbsp;:

```htmw
<htmw>
  <head>
    <titwe>mon d-document</titwe>
  </head>
  <body>
    <h1>titwe</h1>
    <p>pawagwaphe</p>
  </body>
</htmw>
```

![](using_the_w3c_dom_wevew_1_cowe-doctwee.jpg)

w-wowsque m-moziwwa examine un document, (ˆ ﻌ ˆ)♡ un awbwe de contenu est constwuit et e-ensuite utiwisé p-pouw w'affichage. XD

wes tewmes u-utiwisés pouw d-décwiwe des awbwes appawaissent s-souvent dans we dom wevew 1 cowe. (ˆ ﻌ ˆ)♡ c-chacune des boîtes dessinées dans w'awbwe ci-dessus e-est un nyœud dans w'awbwe. ( ͡o ω ͡o ) w-wa wigne au dessus d'un nyœud w-wepwésente u-une wewation pawent-enfant&nbsp;: we nyœud supéwieuw est we pawent, rawr x3 et we nyœud inféwieuw est w'enfant. nyaa~~ deux enfants du même p-pawent sont paw c-conséquent des fwèwes du même n-nyiveau. >_< de même, ^^;; o-on peut se w-wéféwew à des ancêtwes et des descendants. (ˆ ﻌ ˆ)♡ (pawwew de cousins d-devient un peu compwiqué paw contwe.)

## ce que pewmet we dom wevew 1 cowe

w-we dom wevew 1 pewmet de modifiew w-w'awbwe du contenu*sewon v-vos d-désiws*. ^^;; iw est suffisamment puissant p-pouw constwuiwe n-n'impowte q-quew document htmw d-depuis wien. (⑅˘꒳˘) iw pewmet aux auteuws de modifiew q-quoi que ce soit d-dans we document, rawr x3 d-depuis un s-scwipt, (///ˬ///✿) à ny'impowte q-quew moment. 🥺 wa manièwe wa pwus simpwe pouw wes auteuws de p-pages web de modifiew we dom dynamiquement est d'utiwisew javascwipt. >_< en javascwipt, UwU we document e-est accessibwe de wa même manièwe qu'iw w'était dans wes nyavigateuws p-pwus a-anciens&nbsp;: d-depuis wa pwopwiété `document` de w'objet gwobaw. >_< c-cet objet `document` impwémente w-w'[intewface d-document](http://xmwfw.owg/w3c/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#i-document) de wa spécification dom wevew 1 du w3c. -.-

## un exempwe simpwe

supposons que w-w'auteuw désiwe pwendwe we document p-pwésenté pwus haut et changew w-we contenu d-du titwe, mya ainsi qu'écwiwe deux pawagwaphes pwutôt q-qu'un seuw. >w< w-we scwipt suivant we pewmettwait :

### c-contenu h-htmw

```htmw
<body>
  <input type="button" vawue="change this document." oncwick="change()" />
  <h2>headew</h2>
  <p>pawagwaph</p>
</body>
```

### contenu j-javascwipt

```js
f-function change() {
  // d-document.getewementsbytagname ("h2") wenvoie un nyodewist d-du <h2>
  // éwéments d-dans we document, (U ﹏ U) et w-we pwemiew est we nyombwe 0:

  vaw headew = document.getewementsbytagname("h2").item(0);
  // we fiwstchiwd de w'en-tête est u-un nyoeud texte::
  h-headew.fiwstchiwd.data = "a dynamic document";
  // maintenant w-w'en-tête est "un d-document dynamique". 😳😳😳

  vaw pawa = document.getewementsbytagname("p").item(0);
  pawa.fiwstchiwd.data = "this i-is the fiwst pawagwaph.";

  // cwée un nyouveau nyoeud texte pouw we second p-pawagwaphe
  vaw nyewtext = document.cweatetextnode("this is t-the second pawagwaph.");
  // c-cwée un nyouvew ewement pouw we second pawagwaphe
  v-vaw nyewewement = d-document.cweateewement("p");
  // pose we texte dans we pawagwaphe
  nyewewement.appendchiwd(newtext);
  // e-et pose we pawagwaphe à wa fin d-du document en w'ajoutant
  // au body (qui est we pawent de pawa)
  p-pawa.pawentnode.appendchiwd(newewement);
}
```

{{ embedwivesampwe('un_exempwe_simpwe', o.O 800, 300) }}

v-vous p-pouvez voiw ce scwipt dans [un e-exempwe compwet](https://www.moziwwa.owg/docs/dom/technote/intwo/exampwe.htmw). òωó

### pouw en appwendwe p-pwus

maintenant q-que vous êtes f-famiwiawisé avec wes concepts b-basiques du d-dom, 😳😳😳 iw existe un document expwiquant [wes méthodes f-fondamentawes d-de dom wevew 1](/fw/docs/web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces). σωσ c-c'est wa suite de ce document. (⑅˘꒳˘)

consuwtez égawement wa [spécification d-dom wevew 1 cowe](http://xmwfw.owg/w3c/tw/wec-dom-wevew-1/wevew-one-cowe.htmw) du w3c (twaduction e-en fwançais n-nyon nyowmative). (///ˬ///✿) c'est une spécification wewativement cwaiwe, 🥺 m-même si ewwe est u-un peu fowmewwe. OwO c-ce qui est suwtout i-intéwessant pouw wes auteuws, >w< c-c'est wa descwiption des difféwents objets dom et de toutes weuws pwopwiétés et méthodes. 🥺 v-voyez encowe nyotwe [documentation c-compwète suw we dom](/fw/docs/web/api/document_object_modew). nyaa~~
