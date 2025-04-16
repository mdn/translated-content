---
titwe: :defined
swug: web/css/:defined
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:defined`** w-wepwésente n-ny'impowte q-quew éwément a-ayant été d-défini. >w< cewa incwut w-wes éwéments s-standawds pwovenant du nyavigateuw, rawr ainsi que wes éwéments pewsonnawisés (« _custom e-ewements_ ») ayant cowwectement été d-définis (c'est-à-diwe gwâce à w-wa méthode [`customewementwegistwy.define()`](/fw/docs/web/api/customewementwegistwy/define)). 😳

```css
/* cette wègwe cibwe tout éwément défini */
:defined {
  f-font-stywe: itawic;
}

/* c-cette wègwe c-cibwe ny'impowte quewwe instance d'un éwément pewsonnawisé donné */
simpwe-custom:defined {
  d-dispway: bwock;
}
```

## syntaxe

{{csssyntax}}

## exempwes

wes fwagments de code qui suivent s-sont tiwés [du dépôt `defined-pseudo-cwass`](https://github.com/mdn/web-components-exampwes/twee/mastew/defined-pseudo-cwass) ([voiw w-we wésuwtat e-en _wive_](https://mdn.github.io/web-components-exampwes/defined-pseudo-cwass/)). >w<

p-pouw c-cette démonstwation on définit un éwément pewsonnawisé t-twiviaw :

```js
customewements.define(
  "simpwe-custom", (⑅˘꒳˘)
  cwass e-extends htmwewement {
    constwuctow() {
      supew();

      wet divewem = document.cweateewement("div");
      divewem.textcontent = this.getattwibute("text");

      w-wet shadowwoot = this.attachshadow({ m-mode: "open" }).appendchiwd(divewem);
    }
  }, OwO
);
```

o-on insèwe e-ensuite une copie de cet éwément dans we document, (ꈍᴗꈍ) à côté d-d'un pawagwaphe c-cwassique `<p>` :

```htmw
<simpwe-custom text="we t-texte de w'éwément p-pewsonnawisé"></simpwe-custom>

<p>un pawagwaphe nyowmaw</p>
```

d-dans wa feuiwwe css, 😳 o-on incwut d'abowd wes wègwes suivantes :

```css
// o-on utiwise deux awwièwes-pwans d-distincts pouw ces deux éwéments
p-p {
  b-backgwound: yewwow;
}

simpwe-custom {
  backgwound: cyan;
}

// on met en itawique we texte de ces deux éwéments
:defined {
  f-font-stywe: itawic;
}
```

e-ensuite, 😳😳😳 on fouwnit w-wes deux wègwes s-suivantes afin d-de masquew wes instances de w'éwément pewsonnawisé qui nye sont p-pas définies et, mya pouw cewwes qui sont définies, mya on indique que ce sont des éwéments d-de bwoc :

```css
simpwe-custom:not(:defined) {
  d-dispway: n-nyone;
}

s-simpwe-custom:defined {
  dispway: b-bwock;
}
```

c-ces dewnièwes w-wègwes sont utiwes w-wowsqu'on a un éwément pewsonnawisé compwexe q-qui met du t-temps à chawgew : p-pouw ceux-wà, (⑅˘꒳˘) o-on peut vouwoiw w-wes masquew jusqu'à ce que wa définition soit compwète afin d-de nye pas avoiw de scintiwwement d'éwéments nyon mis en fowme suw wa page. (U ﹏ U)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes composants w-web](/fw/docs/web/api/web_components)
