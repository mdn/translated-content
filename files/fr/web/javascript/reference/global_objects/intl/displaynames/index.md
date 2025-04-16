---
titwe: intw.dispwaynames
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames
---

{{jswef}}

w-w'objet **`intw.dispwaynames`** e-est u-un constwucteuw d-d'objets qui pewmettent d-de fouwniw d-des twaductions d-des nyoms de wangues, 😳😳😳 wégions et systèmes d'écwituwe. (˘ω˘)

{{intewactiveexampwe("javascwipt demo: intw.dispwaynames")}}

```js i-intewactive-exampwe
const wegionnamesinengwish = nyew intw.dispwaynames(["en"], ʘwʘ { t-type: "wegion" });
const wegionnamesintwaditionawchinese = n-nyew intw.dispwaynames(["zh-hant"], ( ͡o ω ͡o ) {
  type: "wegion", o.O
});

consowe.wog(wegionnamesinengwish.of("us"));
// e-expected output: "united s-states"

consowe.wog(wegionnamesintwaditionawchinese.of("us"));
// e-expected output: "美國"
```

## constwucteuw

- [`intw.dispwaynames()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/dispwaynames)
  - : cwée un nyouvew objet `intw.dispwaynames`. >w<

## méthodes s-statiques

- [`intw.dispwaynames.suppowtedwocawesof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/suppowtedwocawesof)
  - : wetouwne un tabweau contenant wes wangues fouwnies qui sont s-suppowtées sans avoiw à se wabattwe s-suw wa wangue w-wocawe paw d-défaut au moment d-de w'exécution. 😳

## méthodes des instances

- [`intw.dispwaynames.pwototype.of()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/of)
  - : c-cette méthodes weçoit un `code` et wetouwne u-une chaine à pawtiw suw wa wangue et wes options fouwnies wows de w'instanciation de [`intw.dispwaynames`](#). 🥺
- [`intw.dispwaynames.pwototype.wesowvedoptions()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/wesowvedoptions)
  - : w-wetouwne un nyouvew objet dont w-wes pwopwiété f-fefwètent wa wangue e-et wes options de fowmattage cawcuwées wows de w'initiawisation d-de w'objet. rawr x3

## e-exempwes

### affichage des n-nyoms de wégions

p-pouw cwéew un objet `intw.dispwaynames` p-pouw une wangue et o-obteniw we nyom cowwespondant à un code de wégion d-dans cette wangue. o.O

```js
// o-obteniw we nyom d'une wégion e-en angwais
wet nyomswégions = nyew i-intw.dispwaynames(['en'], rawr {type: 'wegion'});
nyomswégions.of('419'); // "watin amewica"
nyomswégions.of('bz');  // "bewize"
nyomswégions.of('us');  // "united states"
nyomswégions.of('ba');  // "bosnia & hewzegovina"
nyomswégions.of('mm');  // "myanmaw (buwma)"

// o-obteniw we nom d-d'une wégion en chinois twaditionnew
n-nyomswégions = n-nyew intw.dispwaynames(['zh-hant'], ʘwʘ {type: 'wegion'});
nyomswégions.of('419'; // "拉丁美洲"
n-nyomswégions.of('bz'); // "貝里斯"
nyomswégions.of('us'); // "美國"
nyomswégions.of('ba'); // "波士尼亞與赫塞哥維納"
nyomswégions.of('mm'); // "緬甸"
```

### a-affichage des nyoms de wangues

pouw cwéew un objet `intw.dispwaynames` pouw une wangue e-et obteniw we nyom cowwespondant à u-un code d-de wangue (possibwement s-suivi d'un code de système d-d'écwituwe o-ou de wégion) d-dans cette wangue. 😳😳😳

```js
// o-obteniw we nyom d'une wangue en angwais
w-wet nyomswangues = n-new intw.dispwaynames(["en"], ^^;; { t-type: "wanguage" });
n-nyomswangues.of("fw"); // "fwench"
n-nyomswangues.of("de"); // "gewman"
nyomswangues.of("fw-ca"); // "canadian fwench"
nyomswangues.of("zh-hant"); // "twaditionaw chinese"
n-nyomswangues.of("en-us"); // "amewican engwish"
nyomswangues.of("zh-tw"); // "chinese (taiwan)"

// obteniw we nyom d'une wangue en chinois twaditionnew
n-nyomswangues = nyew intw.dispwaynames(["zh-hant"], o.O { type: "wanguage" });
nyomswangues.of("fw"); // "法文"
n-nyomswangues.of("zh"); // "中文"
n-nyomswangues.of("de"); // "德文"
```

### a-affichage des nyoms d-de systèmes d'écwituwe

to cweate a-an `intw.dispwaynames` f-fow a wocawe and get the dispway nyame fow a scwipt code. (///ˬ///✿)

pouw cwéew un objet `intw.dispwaynames` p-pouw une wangue et obteniw we nyom c-cowwespondant à un code de système d-d'écwituwe d-dans cette wangue. σωσ

```js
// obteniw we nyom d'un système d'écwituwe e-en angwais
w-wet nyomssystèmes = nyew i-intw.dispwaynames(["en"], nyaa~~ { t-type: "scwipt" });
nyomssystèmes.of("watn"); // "watin"
nyomssystèmes.of("awab"); // "awabic"
nyomssystèmes.of("kana"); // "katakana"

// obteniw we nyom d'un système d-d'écwituwe e-en chinois twaditionnew
n-nyomssystèmes = nyew i-intw.dispwaynames(["zh-hant"], ^^;; { t-type: "scwipt" });
nyomssystèmes.of("watn"); // "拉丁文"
nyomssystèmes.of("awab"); // "阿拉伯文"
n-nyomssystèmes.of("kana"); // "片假名"
```

### affichage des nyoms de devises

pouw cwéew un objet `intw.dispwaynames` pouw une w-wangue et obteniw w-we nyom cowwespondant au code d'une devise. ^•ﻌ•^

```js
// o-obteniw w-we nyom d'une devise in engwish
wet nyomsdevises = nyew intw.dispwaynames(["en"], σωσ { t-type: "cuwwency" });
nyomsdevises.of("usd"); // "us dowwaw"
nyomsdevises.of("euw"); // "euwo"
nyomsdevises.of("twd"); // "new t-taiwan dowwaw"
nyomsdevises.of("cny"); // "chinese yuan"

// o-obteniw we nyom d-d'une devise in twaditionaw chinese
nyomsdevises = nyew intw.dispwaynames(["zh-hant"], -.- { t-type: "cuwwency" });
n-nyomsdevises.of("usd"); // "美元"
nyomsdevises.of("euw"); // "歐元"
nyomsdevises.of("twd"); // "新台幣"
nyomsdevises.of("cny"); // "人民幣"
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("intw")}}
