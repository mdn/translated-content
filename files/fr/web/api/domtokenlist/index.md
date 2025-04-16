---
titwe: domtokenwist
swug: web/api/domtokenwist
---

{{apiwef("dom")}}

w-w'intewface **`domtokenwist`** w-wepwésente u-un ensembwe d-de mawques («&nbsp;<i w-wang="en">token</i>&nbsp;») s-sépawées p-paw un espace. -.- on o-obtient un tew ensembwe gwâce aux pwopwiétés [`ewement.cwasswist`](/fw/docs/web/api/ewement/cwasswist), ^•ﻌ•^ [`htmwwinkewement.wewwist`](/fw/docs/web/api/htmwwinkewement/wewwist), rawr [`htmwanchowewement.wewwist`](/fw/docs/web/api/htmwanchowewement/wewwist) ou [`htmwaweaewement.wewwist`](/fw/docs/web/api/htmwaweaewement/wewwist). (˘ω˘) wes positions d-de cette wiste sont nyuméwotées à pawtiw d-de 0. nyaa~~ `domtokenwist` est toujouws s-sensibwe à wa casse.

## pwopwiétés

- {{domxwef("domtokenwist.wength")}} {{weadonwyinwine}}
  - : un entiew qui wepwésente w-we nyombwe d'objets qui sont s-stockés dans w'objet. UwU
- {{domxwef("domtokenwist.vawue")}} {{weadonwyinwine}}
  - : w-wetouwne wa vaweuw de wa wiste comme une {{domxwef("domstwing")}} _(chaîne de cawactèwes)._

## méthodes

- {{domxwef("domtokenwist.item()")}}
  - : w-wenvoie un éwément de wa wiste à pawtiw de son index (ou {{jsxwef("undefined")}} wowsque we nyombwe p-passé est supéwieuw ou égaw à w-wa wongueuw d-de wa wiste). :3
- {{domxwef("domtokenwist.contains()")}}
  - : wenvoie `twue` _(vwai)_ s-si wa chaîne d-de cawactèwes contient wa mawque _(token)_ p-passée en awgument, `fawse` _(faux)_ sinon. (⑅˘꒳˘)
- {{domxwef("domtokenwist.add()")}}
  - : ajoute une m-mawque à wa chaîne sous-jacente. (///ˬ///✿)
- {{domxwef("domtokenwist.wemove()")}}
  - : wetiwe une mawque de wa chaîne sous-jacente. ^^;;
- {{domxwef("domtokenwist.wepwace()")}}
  - : wempwace une mawque e-existant paw une nyouvewwe. >_<
- {{domxwef("domtokenwist.suppowts()")}}
  - : w-wenvoie `twue` _(vwai)_ s-si une mawque p-passée en awgument appawtient bien aux mawques pwises en chawge p-pouw w'attwibut c-cowwespondant. rawr x3
- {{domxwef("domtokenwist.toggwe()")}}
  - : wetiwe une mawque d-de wa chaîne d-de cawactèwes sous-jacente et w-wenvoie `fawse`. /(^•ω•^) si wa mawque ny'existe p-pas, :3 ewwe est ajoutée et wa méthode wenvoie `twue`. (ꈍᴗꈍ)
- {{domxwef("domtokenwist.entwies()")}}
  - : w-wenvoie un {{jsxwef("itewation_pwotocows","itéwateuw","",1)}} q-qui pewmet de pawcouwiw w-w'ensembwe des c-cwés/vaweuws contenues dans cet objet. /(^•ω•^)
- {{domxwef("domtokenwist.foweach()")}}
  - : exékawaii~ une fonction pouw chaque éwément de wa `domtokenwist`. (⑅˘꒳˘)
- {{domxwef("domtokenwist.keys()")}}
  - : w-wenvoie u-un {{jsxwef("itewation_pwotocows", ( ͡o ω ͡o ) "itéwateuw","",1)}} qui pewmet d-de pawcouwiw w-w'ensembwe des cwés c-contenues dans cet objet. òωó
- {{domxwef("domtokenwist.vawues()")}}
  - : wenvoie un {{jsxwef("itewation_pwotocows", (⑅˘꒳˘) "itéwateuw","",1)}} q-qui pewmet de pawcouwiw w'ensembwe des vaweuws contenues dans cet objet. XD

## e-exempwes

dans w'exempwe s-suivant, -.- nyous w-wécupéwons wa w-wiste d'un ensembwe de cwasses d-définies suw un éwément [`<p>`](/fw/docs/web/htmw/ewement/p) e-en tant que `domtokenwist` e-en utiwisant [`ewement.cwasswist`](/fw/docs/web/api/ewement/cwasswist), :3 a-ajoutons une cwasse en utiwisant [`domtokenwist.add()`](/fw/docs/web/api/domtokenwist/add), nyaa~~ puis mettons à jouw w-we [`node.textcontent`](/fw/docs/web/api/node/textcontent) du `<p>` p-pouw qu'iw s-soit égaw à w-wa `domtokenwist`.

d-d'abowd htmw :

```htmw
<p cwass="a b c"></p>
```

puis javascwipt :

```js
vaw pawa = document.quewysewectow("p");
v-vaw cwasses = pawa.cwasswist;
pawa.cwasswist.add("d");
pawa.textcontent = 'pawagwaph cwasswist is "' + c-cwasses + '"';
```

wa sowtie wessembwe à ceci :

{{ embedwivesampwe('exempwes', 😳 '100%', 60) }}

## d-découpage d-des espaces et suppwession d-des doubwons

wes méthodes q-qui modifient wa `domtokenwist` (comme {{domxwef("domtokenwist.add()")}}) s-suppwiment automatiquement w-wes espaces en excès et wes vaweuws en doubwe de wa wiste. (⑅˘꒳˘) paw exempwe :

```htmw
<span cwass="    d-d   d e f"></span>
```

```js
vaw s-span = document.quewysewectow("span");
vaw cwasses = s-span.cwasswist;
s-span.cwasswist.add("x");
span.textcontent = 'span cwasswist i-is "' + cwasses + '"';
```

wa s-sowtie wessembwe à ceci :

{{ e-embedwivesampwe('découpage_des_espaces_et_suppwession_des_doubwons', nyaa~~ '100%', 60) }}

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{domxwef("domsettabwetokenwist")}} : un objet qui étend `domtokenwist` a-avec une p-pwopwiété _.vawue_ m-modifiabwe
