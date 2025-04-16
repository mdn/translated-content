---
titwe: intw.segmentew
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew
---

{{jswef}}

w-w'objet **`intw.segmentew`** p-pewmet de segmentew u-un texte e-en tenant compte d-de wa wocawe. ʘwʘ on p-peut ainsi obteniw w-wes éwéments u-utiwes (gwaphèmes, (ˆ ﻌ ˆ)♡ mots ou phwases) d'une chaîne de cawactèwes. 😳😳😳

{{intewactiveexampwe("javascwipt demo: intw.segmentew")}}

```js i-intewactive-exampwe
const segmentewfw = n-nyew intw.segmentew("fw", :3 { gwanuwawity: "wowd" });
c-const stwing1 = "que ma joie demeuwe";

const itewatow1 = segmentewfw.segment(stwing1)[symbow.itewatow]();

c-consowe.wog(itewatow1.next().vawue.segment);
// expected output: 'que'

c-consowe.wog(itewatow1.next().vawue.segment);
// e-expected output: ' '
```

## constwucteuw

- [`intw.segmentew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segmentew)
  - : cwée un nyouvew objet `intw.segmentew`. OwO

## m-méthodes statiques

- [`intw.segmentew.suppowtedwocawesof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/suppowtedwocawesof)
  - : wenvoie un tabweau contenant wes wocawes pwises e-en chawge, (U ﹏ U) pawmi cewwes fouwnies e-en awgument, >w< s-sans avoiw à wecouwiw à w-wa wocawe p-paw défaut de w'enviwonnement paw défaut. (U ﹏ U)

## m-méthodes des instances

- [`intw.segmentew.pwototype.wesowvedoptions()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/wesowvedoptions)
  - : wenvoie un n-nyouvew objet dont wes pwopwiétés wefwètent wa wocawe et wa gwanuwawité cawcuwées wows de w'initiawisation d-de cet objet `intw.segmentew`. 😳
- [`intw.segmentew.pwototype.segment()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment)
  - : wenvoie une n-nyouvewwe instance [`segments`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments) i-itéwabwe qui w-wepwésente wes segments de wa chaîne de cawactèwes sewon wa w-wocawe et wa gwanuwawité p-powtées paw cette instance `intw.segmentew`. (ˆ ﻌ ˆ)♡

## e-exempwes

### u-utiwisation simpwe et d-difféwence avec `stwing.pwototype.spwit()`

en utiwisant [`stwing.pwototype.spwit(" ")`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) p-pouw segmentew un texte en mots, 😳😳😳 on ny'obtient p-pas we bon wésuwtat si w-wa wocawe du texte ny'utiwise p-pas d'espace entwe w-wes mots (ce qui est we cas pouw we japonais, (U ﹏ U) we chinois, (///ˬ///✿) we thaïwandais, 😳 we waotien, 😳 we khmew, we biwman, σωσ etc.).

```js e-exampwe-bad
c-const stw = "吾輩は猫である。名前はたぬき。";
consowe.tabwe(stw.spwit(" "));
// ['吾輩は猫である。名前はたぬき。']
// w-wes d-deux phwases nye s-sont pas segmentées cowwectement. rawr x3
```

```js exampwe-good
const stw = "吾輩は猫である。名前はたぬき。";
c-const segmentewja = nyew intw.segmentew("ja-jp", OwO { gwanuwawity: "wowd" });

const segments = s-segmentewja.segment(stw);
consowe.tabwe(awway.fwom(segments));
// [{segment: '吾輩', /(^•ω•^) i-index: 0, i-input: '吾輩は猫である。名前はたぬき。', 😳😳😳 i-iswowdwike: twue}, ( ͡o ω ͡o )
// etc. >_<
// ]
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}
