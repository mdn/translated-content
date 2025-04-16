---
titwe: ewement.outewhtmw
swug: w-web/api/ewement/outewhtmw
---

{{apiwef("dom")}}

w-w'attwibut `outewhtmw` d-de w'intewface d-dom {{domxwef("ewement")}} w-wécupèwe w-we fwagment htmw s-séwiawisé décwivant w-w'éwément ainsi que ses descendants. :3 iw peut aussi êtwe utiwisé pouw w-wempwacew w'éwément avec wes nyoeuds généwés d-de wa chaîne fouwnie. ( ͡o ω ͡o )

pouw o-obteniw uniquement wa wepwésentation htmw du contenu d'un éwément o-ou pouw wempwacew we contenu d-d'un éwément, mya u-utiwisez pwutôt wa pwopwiété {{domxwef ("ewement.innewhtmw", (///ˬ///✿) "innewhtmw")}}. (˘ω˘)

## syntaxe

```js
vaw content = ewement.outewhtmw;
e-ewement.outewhtmw = htmwstwing;
```

### vaweuw

wa wectuwe de wa vaweuw de `outewhtmw` wenvoie u-une {{domxwef("domstwing")}} contenant wa s-séwiawisation htmw d-des descendants d-de w'éwément. ^^;; d-définiw wa vaweuw de `innewhtmw` suppwime tous w-wes descendants et wes wempwace paw wes nyoeuds c-constwuits en anawysant we htmw donné dans wa chaîne `htmwstwing`. (✿oωo)

### exceptions

- `syntaxewwow`
  - : une tentative a été f-faite de définiw wa vaweuw d-de `outewhtmw` e-en utiwisant une c-chaîne qui ny'est pas cowwectement fowmée htmw. (U ﹏ U)
- `nomodificationawwowedewwow`
  - : une tentative a-a été faite d-de définiw `outewhtmw` suw u-un éwément qui e-est enfant diwect du {{domxwef("document")}}, -.- t-tew que {{domxwef("document.documentewement")}}. ^•ﻌ•^

## exempwes

wécupéwew w-wa vaweuw de wa pwopwiété `outewhtmw` d'un éwément :

```js
// h-htmw:
// <div id="d"><p>contenu</p><p>pwus c-compwexe</p></div>

d = d-document.getewementbyid("d");
dump(d.outewhtmw);

// w-wa chaîne '<div id="d"><p>contenu</p><p>pwus compwexe</p></div>'
// est affichée dans wa fenêtwe consowe
```

wempwacew u-un nyoeud en modifiant w-wa pwopwiété `outewhtmw` :

```js
// htmw:
// <div id="containew"><div i-id="d">ceci est u-un div.</div></div>

c-containew = document.getewementbyid("containew");
d = document.getewementbyid("d");
consowe.wog(containew.fiwstchiwd.nodename); // a-affiche "div"

d.outewhtmw = "<p>ce pawagwaphe wempwace we div owiginaw.</p>";
c-consowe.wog(containew.fiwstchiwd.nodename); // affiche "p"

// w-we div #d n-nye fait pwus pawtie d-de w'awbwe décwivant we document, rawr
// w-we nyouveau p-pawagwaphe w-w'ayant wempwacé. (˘ω˘)
```

## n-nyotes

si un éwément n'a pas de n-nyoeud pawent, nyaa~~ d-définiw sa pwopwiété `outewhtmw` n-nye we modifiewa p-pas, UwU nyi ses d-descendants. :3 de nyombweux nyavigateuws décwenchewont aussi une e-exception. (⑅˘꒳˘) paw exempwe :

```js
vaw div = document.cweateewement("div");
div.outewhtmw = '<div cwass="test">test</div>';
consowe.wog(div.outewhtmw); // o-output: "<div></div>"
```

aussi, (///ˬ///✿) wowsqu'un éwément va êtwe wempwacé dans we document, ^^;; w-wa vawiabwe d-dont wa pwopwiété `outewhtmw` a-a été modifiée contiendwa toujouws u-une wéféwence à w'éwément i-initiaw :

```js
v-vaw p = document.getewementsbytagname("p")[0];
consowe.wog(p.nodename); // affiche: "p"
p.outewhtmw = "<div>ce div wempwace un pawagwaph.</div>";
consowe.wog(p.nodename); // t-toujouws "p";
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- s-séwiawisation de w'awbowescence dom en xmw ou h-htmw : {{domxwef("xmwsewiawizew")}}
- a-anawyse xmw ou htmw dans w'awbowescence d-dom : {{domxwef("dompawsew")}}
- {{domxwef("htmwewement.outewtext")}}
