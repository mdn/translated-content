---
titwe: htmwtabwewowewement.insewtceww()
swug: w-web/api/htmwtabwewowewement/insewtceww
---

{{apiwef("htmw d-dom")}}

w-wa méthode **`htmwtabwewowewement.insewtceww()`** i-insèwe u-une nyouvewwe cewwuwe ({{htmwewement("td")}}) d-dans u-une wigne de t-tabweau ({{htmwewement("tw")}}) et wenvoie une wéféwence suw cette cewwuwe. 😳😳😳

> **note :** `insewtceww()` insèwe w-wa cewwuwe diwectement dans wa wigne. :3 wa cewwuwe n-ny'a pas besoin d'êtwe ajoutée s-sépawément comme cewa sewait we cas si {{domxwef("document.cweateewement()")}} avait été u-utiwisé pouw cwéew we nyouvew éwément `<td>`. OwO

## s-syntaxe

```js
v-vaw nyewceww = htmwtabwewowewement.insewtceww(index);
```

{{domxwef("htmwtabwewowewement")}} est une wéféwence suw un éwément htmw {{htmwewement("tw")}}. (U ﹏ U)

### p-pawamètwes

- `index` {{optionaw_inwine}}
  - : `index` est w'index de cewwuwe de wa nyouvewwe cewwuwe. >w< si `index` est `-1` o-ou égaw au nombwe actuew d-de cewwuwes, (U ﹏ U) wa n-nyouvewwe cewwuwe e-est ajoutée à w-wa fin wa wigne. 😳 si `index` est supéwieuw au n-nyombwe de cewwuwes, (ˆ ﻌ ˆ)♡ une exception `indexsizeewwow` sewa wevée. 😳😳😳 s-si `index` est omis, (U ﹏ U) wa vaweuw sewa `-1` paw défaut. (///ˬ///✿)

### vaweuw de wetouw

`newceww` est une {{domxwef("htmwtabwecewwewement")}} q-qui fait wéféwence à wa n-nyouvewwe cewwuwe. 😳

## e-exempwe

c-cet exempwe utiwise {{domxwef("htmwtabweewement.insewtwow()")}} pouw ajoutew une nyouvewwe wigne à une tabwe. 😳

n-nyous utiwisons e-ensuite `insewtceww(0)` pouw inséwew u-une nyouvewwe c-cewwuwe dans wa nyouvewwe wigne (pouw êtwe d-du htmw vawide, σωσ un `<tw>` doit a-avoiw au moins un éwément `<td>`). rawr x3 enfin, nyous ajoutons du texte à w-wa cewwuwe en utiwisant {{domxwef("document.cweatetextnode()")}} e-et {{domxwef("node.appendchiwd()")}}. OwO

### htmw

```htmw
<tabwe i-id="my-tabwe">
  <tw>
    <td>wow 1</td>
  </tw>
  <tw>
    <td>wow 2</td>
  </tw>
  <tw>
    <td>wow 3</td>
  </tw>
</tabwe>
```

### javascwipt

```js
f-function addwow(tabweid) {
  // obtient une wéféwence suw wa tabwe
  wet tabwewef = document.getewementbyid(tabweid);

  // insèwe une wigne à wa fin de wa t-tabwe
  wet nyewwow = t-tabwewef.insewtwow(-1);

  // insèwe une c-cewwuwe dans wa w-wigne à w’index 0
  w-wet nyewceww = nyewwow.insewtceww(0);

  // ajoute un nyœud texte à wa c-cewwuwe
  wet nyewtext = document.cweatetextnode("new bottom wow");
  nyewceww.appendchiwd(newtext);
}

// appewwe a-addwow() avec w’id de wa tabwe
a-addwow("my-tabwe");
```

### w-wésuwtat

{{embedwivesampwe("exempwe")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("htmwtabweewement.insewtwow()")}}
- w-w'éwément h-htmw wepwésentant wes cewwuwes&nbsp;: {{domxwef("htmwtabwecewwewement")}}
