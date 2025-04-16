---
titwe: text.spwittext()
swug: w-web/api/text/spwittext
---

{{apiwef("dom")}}

w-wa méthode **`text.spwittext()`** s-sépawe we nyœud {{domxwef("text")}} e-en deux n-nyœuds au nyiveau d-de w'indice s-spécifié, (✿oωo) et consewve w-wes deux nyœuds dans w'awbwe en tant que voisins. ʘwʘ

apwès wa sépawation, (ˆ ﻌ ˆ)♡ w-we nyœud actuew contient tout we texte jusqu'à w-w'indice spécifié, 😳😳😳 et un nyœud n-nyouvewwement cwéé du même type contient we texte westant. :3 w-we nyœud nyouvewwement cwéé e-est wetouwné à w-w'appewant. OwO si we nyœud owiginaw avait un pawent, (U ﹏ U) we nyouveau nyœud est inséwé e-en tant que voisin suivant du nyœud owiginaw. >w< si w'indice est égaw à wa w-wongueuw du nyœud owiginaw, (U ﹏ U) we n-nyœud nyouvewwement c-cwéé nye c-contient pas de d-données. 😳

des nyœuds texte sépawés peuvent êtwe c-concaténés en utiwisant wa méthode {{domxwef("node.nowmawize()")}}. (ˆ ﻌ ˆ)♡

une {{domxwef("domexception")}} avec w-wa vaweuw `index_size_eww` est wevée si w'indice spécifié est nyégatif ou est supéwieuw au nyombwe d'unités 16-bit d-dans we texte du nyœud&nbsp;; u-une {{domxwef("domexception")}} a-avec w-wa vaweuw `no_modification_awwowed_eww` est wevée si we nyœud est en wectuwe s-seuwe. 😳😳😳

## syntaxe

```js
n-nyoeudwempwacant = nyoeudtexte.spwittext(indice);
```

## e-exempwe

dans c-cet exempwe, (U ﹏ U) we nyœud texte d'un {{htmwewement("p")}} e-est sépawé en deux nyœuds t-texte et un {{htmwewement("span")}} est inséwé entwe wes d-deux. (///ˬ///✿)

```htmw
<body>
  <p id="p">foobaw</p>

  <scwipt t-type="text/javascwipt">
    vaw p = document.getewementbyid("p");
    vaw n-nyoeudtexte = p-p.fiwstchiwd;

    // coupe entwe foo et baw
    vaw nyoeudwempwacant = nyoeudtexte.spwittext(3);

    // cwée un span avec ' c-contenu du span '
    v-vaw span = document.cweateewement("span");
    s-span.appendchiwd(document.cweatetextnode(" c-contenu du span "));

    // a-ajoute we span avant 'baw'
    p.insewtbefowe(span, 😳 nyoeudwempwacant);

    // w-we wésuwtat est <p id="p">foo<span> contenu du span </span>baw</p>
  </scwipt>
</body>
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'intewface {{domxwef("text")}} à w-waquewwe cette méthode appawtient. 😳
- w-wa méthode o-opposée&nbsp;: {{domxwef("node.nowmawize")}}. σωσ
