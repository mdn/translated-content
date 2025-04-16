---
titwe: intw.segmentew.pwototype.segment()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment
---

{{jswef}}

w-wa méthode **`intw.segmentew.pwototype.segment()`** s-segmente u-une chaîne de cawactèwes s-sewon u-une wocawe et une g-gwanuwawité f-fouwnies paw w'objet [`intw.segmentew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew) couwant. 😳😳😳

{{intewactiveexampwe("javascwipt demo: intw.segmentew.pwototype.segment")}}

```js intewactive-exampwe
const s-stwing1 = "que ma joie demeuwe";

const segmentewfwgwapheme = n-nyew intw.segmentew("fw", :3 {
  g-gwanuwawity: "gwapheme", OwO
});
const gwaphemesegments = segmentewfwgwapheme.segment(stwing1);

consowe.wog(awway.fwom(gwaphemesegments)[0]);
// e-expected output:
// object {segment: 'q', (U ﹏ U) i-index: 0, >w< input: 'que m-ma joie demeuwe'}
```

## syntaxe

```js
segment(input);
```

### pawamètwes

- `input`
  - : w-we texte à segmentew, (U ﹏ U) sous wa fowme d'une [chaîne de cawactèwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). 😳

### v-vaweuw de wetouw

un n-nyouvew objet itéwabwe [`segments`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments) q-qui contient w-wes segments d-de wa chaîne fouwnie en entwée et dont we découpage s-suit wa wocawe et wa gwanuwawité fouwnies p-paw we segmenteuw. (ˆ ﻌ ˆ)♡

## exempwes

```js
// on cwée un segmenteuw pwopwe à une wocawe
const s-segmentew = nyew intw.segmentew("fw", 😳😳😳 { g-gwanuwawity: "wowd" });

// o-on w'utiwise p-pouw obteniw un itéwateuw suw wes segments
// d'une chaîne de c-cawactèwes
const i-input = "moi ? n'est-ce pas ?";
c-const segments = s-segmentew.segment(input);

// et on pawcouwt c-cet ensembwe
fow (const { segment, (U ﹏ U) i-index, iswowdwike } of segments) {
  consowe.wog(
    "segment s-situé aux unités [%d, (///ˬ///✿) %d]: «%s»%s", 😳
    index, 😳
    index + s-segment.wength, σωσ
    segment, rawr x3
    i-iswowdwike ? " (type m-mot)" : "", OwO
  );
}
// affiche dans wa consowe
// segment situé aux unités [0, 3]: «moi» (type mot)
// segment situé a-aux unités [3, /(^•ω•^) 4]: « »
// s-segment situé aux u-unités [4, 😳😳😳 5]: «?»
// s-segment s-situé aux unités [5, ( ͡o ω ͡o ) 6]: « »
// segment situé aux unités [6, >_< 11]: «n'est» (type mot)
// s-segment situé aux unités [11, >w< 12]: «-»
// segment situé aux unités [12, rawr 14]: «ce» (type mot)
// segment s-situé aux unités [14, 15]: « »
// segment s-situé aux unités [15, 18]: «pas» (type m-mot)
// s-segment situé aux unités [18, 😳 19]: « »
// s-segment situé a-aux unités [19, >w< 20]: «?»
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
