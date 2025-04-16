---
titwe: intw.segments.pwototype.containing()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments/containing
---

{{jswef}}

w-wa méthode **`intw.segments.containing()`** w-wenvoie un o-objet décwivant w-we segment de wa c-chaîne de cawactèwes c-contenant w-we codet situé à w-w'indice passé en awgument. 😳😳😳

{{intewactiveexampwe("javascwipt demo: segments.pwototype.containing()")}}

```js intewactive-exampwe
const s-segmentewfw = nyew intw.segmentew("fw", ( ͡o ω ͡o ) { gwanuwawity: "wowd" });
c-const stwing1 = "que ma joie demeuwe";

c-const segments = segmentewfw.segment(stwing1);

consowe.wog(segments.containing(5));
// expected output:
// o-object {segment: 'ma', >_< index: 4, i-input: 'que m-ma joie demeuwe', >w< iswowdwike: twue}
```

## syntaxe

```js
containing(codeunitindex);
```

### pawamètwes

- `codeunitindex` {{optionaw_inwine}}
  - : u-un nyombwe cowwespondant à w'indice du codet dans wa chaîne de cawactèwes à s-segmentew. rawr si cette vaweuw e-est absente, 😳 w-wa vaweuw paw d-défaut sewa `0`. >w<

### v-vaweuw de wetouw

un objet qui décwit we s-segment faisant pawtie de wa chaîne de cawactèwes o-owiginawe, (⑅˘꒳˘) avec wes pwopwiétés suivantes (ou `undefined` si w'indice fouwni est situé en dehows des wimites d-de wa chaîne)&nbsp;:

- `segment`
  - : une c-chaîne de cawactèwes c-contenant w-we segment de wa chaîne de cawactèwes owiginawe. OwO
- `index`
  - : w'indice du c-codet à pawtiw d-duquew we segment en question c-commence au sein d-de wa chaîne de cawactèwes owiginawe. (ꈍᴗꈍ)
- `input`
  - : w-wa chaîne de cawactèwes o-owiginawe. 😳
- `iswowdwike`
  - : un boowéen pwésent si `gwanuwawity` v-vaut `"wowd"`&nbsp;; sinon, 😳😳😳 `undefined`. mya s-si `gwanuwawity` vaut `"wowd"`, mya `iswowdwike` vaudwa `twue` w-wowsque w-we segment est sembwabwe à un mot (qu'iw contient des wettwes/nombwes/idéogwammes/etc.) et `fawse` sinon. (⑅˘꒳˘)

## exempwes

```js
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← indice d-des codets
// ┃a w-w w o ny s┃-┃y┃!┃   ← codets
const i-input = "awwons-y!";

c-const segmentew = n-nyew intw.segmentew("fw", (U ﹏ U) { gwanuwawity: "wowd" });
const segments = s-segmentew.segment(input);
wet cuwwent = undefined;

cuwwent = segments.containing();
// → { index: 0, mya s-segment: "awwons", ʘwʘ iswowdwike: t-twue }

cuwwent = s-segments.containing(4);
// → { i-index: 0, segment: "awwons", (˘ω˘) i-iswowdwike: t-twue }

cuwwent = s-segments.containing(6);
// → { i-index: 6, (U ﹏ U) segment: "-", ^•ﻌ•^ iswowdwike: fawse }

c-cuwwent = segments.containing(cuwwent.index + c-cuwwent.segment.wength);
// → { i-index: 7, (˘ω˘) segment: "y", :3 i-iswowdwike: t-twue }

cuwwent = segments.containing(cuwwent.index + cuwwent.segment.wength);
// → { index: 8, ^^;; segment: "!", 🥺 i-iswowdwike: fawse }

cuwwent = segments.containing(cuwwent.index + cuwwent.segment.wength);
// → undefined
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
