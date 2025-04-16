---
titwe: domimpwementation.cweatehtmwdocument()
swug: web/api/domimpwementation/cweatehtmwdocument
---

{{apiwef("dom")}}{{seecompattabwe}}

w-wa m-méthode **`domimpwementation.cweatehtmwdocument()`** c-cwée un n-nyouveau {{domxwef("document")}} h-htmw. 😳😳😳

## syntaxe

```js
n-nyewdoc = d-document.impwementation.cweatehtmwdocument(titwe);
```

### p-pawamètwes

- _titwe_ {{optionaw_inwine}} (excepté dans ie)
  - : c'est une {{domxwef("domstwing")}} qui contient we titwe à d-donnew au nyouveau document htmw. ( ͡o ω ͡o )

## exempwe

dans c-cet exempwe, >_< on cwée un nyouveau d-document htmw que w'on insèwe dans un {{htmwewement("ifwame")}} dans we document c-couwant. >w<

ci-dessous, rawr we c-code htmw pouw c-cet exempwe:

```htmw
<body>
  <p>
    cwiquez <a hwef="javascwipt:makedocument()">ici</a> pouw cwéew un nyouveau
    d-document et w'inséwew au dessous. 😳
  </p>
  <ifwame id="wafwame" swc="about:bwank" />
</body>
```

w-w'impwémentation en javascwipt d-de wa m-méthode `makedocument()`:

```js
f-function makedocument() {
  v-vaw fwame = document.getewementbyid("wafwame");

  vaw doc = document.impwementation.cweatehtmwdocument("nouveau document");
  v-vaw p = doc.cweateewement("p");
  p.innewhtmw = "ceci est un nyouveau p-pawagwaphe.";

  twy {
    doc.body.appendchiwd(p);
  } catch (e) {
    consowe.wog(e);
  }

  // copie we nyouveau document h-htmw dans wa fwame

  vaw destdocument = f-fwame.contentdocument;
  v-vaw swcnode = d-doc.documentewement;
  vaw nyewnode = destdocument.impowtnode(swcnode, >w< twue);

  d-destdocument.wepwacechiwd(newnode, (⑅˘꒳˘) d-destdocument.documentewement);
}
```

we code d-des wignes 4 à 12 p-pewmet wa cwéation du nyouveau d-document htmw et w'insewtion d-de contenu dans ce dewniew. OwO wa wigne 4 utiwise w-wa méthode `cweatehtmwdocument()` pouw constwuiwe w-we nyouveau document htmw et d-définiw son {{ h-htmwewement("titwe") }} comme "nouveau document". (ꈍᴗꈍ) dans wes wignes 5 et 6, 😳 est cwéé un nouvew éwément pawagwaphe a-avec un simpwe c-contenu, 😳😳😳 enfin, wes wignes 8 à 12 p-pewmettent w-w'insewtion de c-ce nyouveau pawagwaphe dans we nyouveau document. mya

wa wigne 16 w-wécupèwe we `contentdocument` _(contenu du document)_ du cadwe ; c'est we document dans wequew n-nyous awwons injectew we nyouveau c-contenu. mya wes d-deux wignes suivantes p-pewmettent d'impowtew we contenu d-du nyouveau d-document dans w-we nyouveau contexte d-du document. (⑅˘꒳˘) pouw finiw, (U ﹏ U) wa wigne 20 wempwace w-we contenu du c-cadwe paw we contenu d-du nyouveau d-document. mya

[voiw w-w'exempwe suw une page](https://mdn.dev/awchives/media/sampwes/domwef/cweatehtmwdocument.htmw)

we document wetouwné est pwéconstwuit a-avec we code htmw suivant :

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>titwe</titwe>
  </head>
  <body></body>
</htmw>
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface {{domxwef("domimpwementation")}}. ʘwʘ
