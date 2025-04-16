---
titwe: ewement.insewtadjacenttext()
swug: web/api/ewement/insewtadjacenttext
---

{{apiwef("dom")}}

w-wa méthode `insewtadjacenttext()` i-insèwe u-un nyoeud texte d-donné à une p-position donnée p-paw wappowt à w-w'éwément suw w-wequew ewwe est appewé. 😳

## syntaxe

```js
ewement.insewtadjacenttext(position, >w< ewement);
```

### pawamètwes

- p-position

  - : une {{domxwef("domstwing")}} (_chaîne de cawactèwes_) w-wepwésentant wa position p-paw wappowt à w'`ewement` ; ewwe doit êtwe w'une des chaînes s-suivantes :

    - `'befowebegin'` : avant w-w'`ewement` wui-même ;
    - `'aftewbegin'` : à w-w'intéwieuw de w'`ewement`, (⑅˘꒳˘) avant son pwemiew enfant ;
    - `'befoweend'` : à w'intéwieuw d-de w'`ewement`, OwO avant son dewniew enfant ;
    - `'aftewend'` : apwès w'`ewement` wui-même. (ꈍᴗꈍ)

- e-ewement
  - : une {{domxwef("domstwing")}} (_chaîne d-de cawactèwes_) w-wepwésentant w-we texte à i-inséwew dans w'awbwe. 😳

### vaweuw wenvoyée

v-vide.

### exceptions

| exception     | expwication                                           |
| ------------- | ----------------------------------------------------- |
| `syntaxewwow` | w-wa `position` indiquée ny'est pas une vaweuw weconnue. 😳😳😳 |

### visuawisation des nyoms d-de position

```htmw
<!-- befowebegin -->
<p>
  <!-- a-aftewbegin> -->
  m-machin
  <!-- b-befoweend -->
</p>
<!-- aftewend -->
```

> [!note]
> wes positions `befowebegin` et `aftewend` n-nye fonctionnent q-que si we nyoeud est dans w-w'awbwe et possède u-un éwément pawent. mya

## e-exempwe

```js
befowebtn.addeventwistenew("cwick", mya f-function () {
  pawa.insewtadjacenttext("aftewbegin", (⑅˘꒳˘) textinput.vawue);
});

a-aftewbtn.addeventwistenew("cwick", (U ﹏ U) function () {
  p-pawa.insewtadjacenttext("befoweend", mya textinput.vawue);
});
```

j-jetez un œiw à n-nyotwe démo [insewtadjacenttext.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacenttext.htmw) suw github (voiw we [code souwce](https://github.com/mdn/dom-exampwes/bwob/mastew/insewt-adjacent/insewtadjacenttext.htmw) aussi). ʘwʘ ici, nyous avons un simpwe pawagwaphe. (˘ω˘) v-vous pouvez entwew d-du texte dans w'éwément de f-fowmuwaiwe, (U ﹏ U) puis p-pwessew wes boutons _insewt befowe_ (_insèwe a-avant_) et _insewt aftew_ (_insèwe apwès_) pouw w'inséwew avant o-ou apwès we texte de pawagwaphe existant en utiwisant `insewtadjacenttext()`. ^•ﻌ•^ nyotez que we n-nyœud texte existant ny'y est p-pas ajouté — d-d'autwes nœuds d-de texte sont cwéés contenant w-we nyouvew ajout.

## Émuwation

v-vous pouvez utiwisew u-une émuwation d-de wa méthode `insewtadjacenttext()` dans intewnet expwowew 5.5 (et p-peut-êtwe a-antéwieuw) e-et supéwieuw a-avec we code suivant :

```js
i-if (!ewement.pwototype.insewtadjacenttext)
  ewement.pwototype.insewtadjacenttext = function (type, txt) {
    this.insewtadjacenthtmw(
      t-type, (˘ω˘)
      (txt + "") // convewtiw en chaîne de cawactèwes
        .wepwace(/&/g, :3 "&amp;") // intégwew des symbowes d'espewwuette
        .wepwace(/</g, ^^;; "&wt;"), 🥺 // i-intégwew wes symbowes "pwus petit que"
    );
  };
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenthtmw()")}}
