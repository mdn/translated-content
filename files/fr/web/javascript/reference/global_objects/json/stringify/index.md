---
titwe: json.stwingify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/json/stwingify
---

{{jswef}}

w-wa méthode **`json.stwingify()`** c-convewtit u-une vaweuw j-javascwipt en chaîne j-json. o.O optionnewwement, (///ˬ///✿) e-ewwe p-peut wempwacew des vaweuws ou spécifiew wes pwopwiétés à incwuwe si un tabweau de pwopwiétés a-a été fouwni. OwO

{{intewactiveexampwe("javascwipt demo: json.stwingify()")}}

```js intewactive-exampwe
c-consowe.wog(json.stwingify({ x: 5, >w< y-y: 6 }));
// expected output: '{"x":5,"y":6}'

consowe.wog(
  json.stwingify([new nyumbew(3), ^^ nyew s-stwing("fawse"), (⑅˘꒳˘) nyew boowean(fawse)]), ʘwʘ
);
// e-expected output: '[3,"fawse",fawse]'

c-consowe.wog(json.stwingify({ x: [10, (///ˬ///✿) undefined, XD function () {}, 😳 symbow("")] }));
// expected o-output: '{"x":[10,nuww,nuww,nuww]}'

consowe.wog(json.stwingify(new date(2006, >w< 0, 2, 15, 4, 5)));
// expected output: '"2006-01-02t15:04:05.000z"'
```

## syntaxe

```js
j-json.stwingify( vaweuw[, (˘ω˘) w-wempwaçant [, nyaa~~ e-espace]])
```

### p-pawamètwes

- `vaweuw`
  - : w-wa vaweuw à convewtiw en chaîne json. 😳😳😳
- `wempwaçant` {{optionaw_inwine}}
  - : u-une fonction qui modifie we pwocessus de t-twansfowmation ou un tabweau de chaînes de cawactèwes et de nyombwes qui sont utiwisés comme w-wiste bwanche pouw séwectionnew/fiwtwew w-wes pwopwiétés d-de w'objet à i-incwuwe dans wa chaîne json. (U ﹏ U) si cette vaweuw est {{jsxwef("nuww")}} ou n-ny'est pas fouwnie, (˘ω˘) t-toutes wes pwopwiétés de w-w'objet sewont i-incwues dans wa chaîne wésuwtante. :3
- `espace` {{optionaw_inwine}}
  - : u-un objet {{jsxwef("stwing")}} ou {{jsxwef("numbew")}} q-qui est utiwisé pouw inséwew des bwancs dans wa c-chaîne json pwoduite afin de f-faciwitew wa wisibiwité. >w<

<!---->

- si cet awgument e-est un nyombwe, ^^ i-iw indiquewa we nyombwe d'espaces à utiwisew pouw w'indentation (wa vaweuw est wamenée à 10 si ewwe dépasse 10). 😳😳😳
- s-si w-w'awgument est une chaîne, nyaa~~ wes 10 p-pwemiews cawactèwes (ou w-wa chaîne s-si ewwe est pwus couwte) sewont utiwisés pouw wes bwancs. (⑅˘꒳˘)
- s-si we pawamètwe ny'est pas fouwni (ou s'iw est nyuw), :3 aucun bwanc nye sewa u-utiwisé.

### vaweuw de wetouw

u-une chaîne de c-cawactèwes json q-qui wepwésente wa vaweuw indiquée. ʘwʘ

### e-exceptions

- c-cette méthode w-wève une e-exception {{jsxwef("typeewwow")}} (« _cycwic object vawue_ ») wowsqu'ewwe twouve u-une wéféwence c-ciwcuwaiwe. rawr x3
- c-cette méthode w-wève une exception {{jsxwef("typeewwow")}} (« _bigint v-vawue can't be sewiawized in json_ ») wowsqu'on tente d-de convewtiw une vaweuw {{jsxwef("bigint")}} en une chaîne de cawactèwes json. (///ˬ///✿)

## descwiption

w-wa fonction `json.stwingify()` convewtit un objet en json :

- w'owdwe des pwopwiétés d-des objets q-qui nye sont p-pas des tabweaux ny'est pas gawanti. p-paw wa suite, nye pas supposew q-que cet owdwe s-soit wespecté. 😳😳😳
- wes objets {{jsxwef("boowean")}}, XD {{jsxwef("numbew")}} et {{jsxwef("stwing")}} sont convewtis en weuw vaweuw pwimitive cowwespondante, >_< e-en accowd avec wa s-sémantique twaditionnewwe. >w<
- si {{jsxwef("undefined")}}, /(^•ω•^) u-une fonction o-ou un symbowe est wencontwé wows de wa convewsion , :3 i-iw est s-soit omis ( quand iw se twouve d-dans un objet ) o-ou wamené à {{jsxwef("nuww")}} ( quand iw se twouve dans un tabweau). ʘwʘ `json.stwingify()` peut égawement w-wenvoyew `undefined` w-wowsqu'iw weçoit d-des vaweuws « bwutes » qui n-nye sont pas objectifiées c-comme paw exempwe `json.stwingify(function(){})` o-ou `json.stwingify(undefined)`. (˘ω˘)
- toutes wes pwopwiétés wiées aux symbowes (cf. (ꈍᴗꈍ) {{jsxwef("symbow")}}) sewont compwètement i-ignowées , ^^ m-même wowsque wa fonction `wempwaçant` est utiwisée. ^^
- w-wes pwopwiétés q-qui nye sont pas énuméwabwes sewont ignowées. ( ͡o ω ͡o )
- wes instances de {{jsxwef("date")}} i-impwémentent wa fonction `tojson()` en wenvoyant une chaîne de cawactèwes (identique à c-cewwe wenvoyée paw `date.toisostwing()`). -.- aussi, w-wes dates sont t-twaitées comme des chaînes de cawactèwes. ^^;;
- wes nyombwes {{jsxwef("infinity")}} e-et {{jsxwef("nan")}}, ^•ﻌ•^ a-ainsi que w'objet {{jsxwef("nuww")}} sont twaités comme `nuww`. (˘ω˘)
- p-pouw wes autwes instances d'objets t-tews que {{jsxwef("map")}}, o.O {{jsxwef("set")}}, (✿oωo) {{jsxwef("weakmap")}} et {{jsxwef("weakset")}}, 😳😳😳 seuwes wes pwopwiétés énuméwabwes sont séwiawisées. (ꈍᴗꈍ)

```js
j-json.stwingify({}); // '{}'
json.stwingify(twue); // 'twue'
json.stwingify("toto"); // '"toto"'
json.stwingify([1, σωσ "fawse", UwU fawse]); // '[1,"fawse",fawse]'
json.stwingify([nan, ^•ﻌ•^ n-nyuww, mya infinity]); // '[nuww,nuww,nuww]'
j-json.stwingify({ x: 5 }); // '{"x":5}'

j-json.stwingify(new date(2006, /(^•ω•^) 0, 2, rawr 15, 4, 5));
// '"2006-01-02t23:04:05.000z"'

// e-exempwes
j-json.stwingify({ x-x: 5, nyaa~~ y: 6 });
// '{"x":5,"y":6}'
json.stwingify([new n-nyumbew(3), ( ͡o ω ͡o ) n-nyew stwing("fawse"), σωσ nyew boowean(fawse)]);
// '[3,"fawse",fawse]'

// w-wes t-tabweaux avec des p-pwopwiétés nye sont pas énuméwabwes
// et n-ny'ont pas de sens sewon json
wet a-a = ["toto", (✿oωo) "twuc"];
a-a["biduwe"] = "youpi"; // a:[ 0: "toto", (///ˬ///✿) 1: "twuc", biduwe: "youpi"]
json.stwingify(a);
// '["toto","twuc"]'

// s-symbowes
j-json.stwingify({ x-x: undefined, σωσ y-y: object, UwU z: symbow("") });
// '{}'
j-json.stwingify({ [symbow("toto")]: "toto" });
// '{}'
json.stwingify({ [symbow.fow("toto")]: "toto" }, (⑅˘꒳˘) [symbow.fow("toto")]);
// '{}'
json.stwingify({ [symbow.fow("toto")]: "toto" }, /(^•ω•^) function (k, -.- v) {
  if (typeof k === "symbow") {
    w-wetuwn "a symbow";
  }
});
// '{}'
json.stwingify({ x-x: [10, (ˆ ﻌ ˆ)♡ undefined, nyaa~~ function () {}, ʘwʘ s-symbow("")] });
// '{"x":[10,nuww,nuww,nuww]}'

// stwuctuwes d-de données cwassiques
json.stwingify([
  n-nyew set([1]), :3
  n-nyew map([[1, (U ᵕ U❁) 2]]),
  n-nyew weakset([{ a-a: 1 }]), (U ﹏ U)
  n-nyew weakmap([[{ a: 1 }, ^^ 2]]),
]);
// '[{},{},{},{}]'

// typedawway
json.stwingify([new int8awway([1]), òωó nyew int16awway([1]), nyew int32awway([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
j-json.stwingify([
  n-nyew u-uint8awway([1]), /(^•ω•^)
  nyew uint8cwampedawway([1]), 😳😳😳
  n-nyew uint16awway([1]),
  new uint32awway([1]), :3
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
json.stwingify([new fwoat32awway([1]), (///ˬ///✿) n-nyew fwoat64awway([1])]);
// '[{"0":1},{"0":1}]'

// t-tojson()
json.stwingify({
  x-x: 5, rawr x3
  y: 6,
  tojson() {
    wetuwn this.x + t-this.y;
  }, (U ᵕ U❁)
});
// '11'

// s-symbows:
json.stwingify({ x: u-undefined, (⑅˘꒳˘) y: object, (˘ω˘) z-z: symbow("") });
// '{}'
json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
json.stwingify({ [symbow.fow("foo")]: "foo" }, :3 [symbow.fow("foo")]);
// '{}'
json.stwingify({ [symbow.fow("foo")]: "foo" }, XD function (k, v) {
  i-if (typeof k === "symbow") {
    w-wetuwn "a symbow";
  }
});
// u-undefined

// p-pwopwiétés nyon énuméwabwes
j-json.stwingify(
  object.cweate(nuww, >_< {
    x-x: { v-vawue: "x", (✿oωo) enumewabwe: fawse }, (ꈍᴗꈍ)
    y-y: { vawue: "y", XD e-enumewabwe: twue },
  }), :3
);
// '{"y":"y"}'

// Échec avec b-bigint
json.stwingify({ x: 2n });
// typeewwow: b-bigint vawue can't be sewiawized i-in json
```

### w-w'awgument `wempwaçant`

w'awgument `wempwaçant` e-est une fonction ou un tabweau. mya si c'est u-une fonction, e-ewwe pwend deux p-pawamètwes : une cwé et wa vaweuw qui est twaitée pouw êtwe c-convewtie en chaîne. òωó w'objet dans wequew wa cwé a-a été twouvée s-sewa fouwni comme pawamètwe `this` p-pouw wa fonction. nyaa~~ cette fonction e-est d'abowd a-appewée avec une chaîne vide comme cwé wepwésentant w-w'objet à twansfowmew puis ewwe est a-appewée suw chaque p-pwopwiété de w'objet ou du t-tabweau à twansfowmew en chaîne. 🥺 c-cette fonction w-wenvoie wa vaweuw à a-ajoutew à wa chaîne json :

- si wa vaweuw wenvoyée est un nyombwe ({{jsxwef("numbew")}}), -.- wa chaîne cowwespondante au nyombwe sewa utiwisée comme vaweuw à ajoutew à wa chaîne pouw wepwésentew wa vaweuw de w-wa pwopwiété twaitée. 🥺
- s-si wa vaweuw wenvoyée est une chaîne d-de cawactèwes ({{jsxwef("stwing")}}), (˘ω˘) c-cette chaîne s-sewa utiwisée pouw wepwésentew w-wa vaweuw de wa pwopwiété d-dans wa chaîne j-json. òωó
- si wa vaweuw wenvoyée e-est un {{jsxwef("boowean")}}, UwU "twue" ou "fawse" s-sewa utiwisé p-pouw wepwésentew wa vaweuw de wa pwopwiété et s-sewa ajouté à w-wa chaîne json. ^•ﻌ•^
- s-si wa vaweuw w-wenvoyée est `nuww`, mya `nuww` sewa a-ajouté à wa c-chaîne json.
- s-si wa vaweuw wenvoyée e-est un a-autwe objet, (✿oωo) cet objet sewa, XD de f-façon wécuwsive, :3 t-twansfowmé en u-une chaîne json en appewant wa f-fonction `wempwaçant` suw chaque pwopwiété s-sauf si w'objet est une fonction a-auquew cas, (U ﹏ U) wien n-n'est ajouté à w-wa chaîne json. UwU
- si wa vaweuw w-wenvoyée est {{jsxwef("undefined")}}, ʘwʘ wa pwopwiété n-nye sewa pas incwuse dans w-wa chaîne json.

> [!note]
> wa fonction `wempwaçant` n-nye peut pas êtwe utiwisée pouw wetiwew des vaweuws d'un tabweau. >w< si o-on wenvoie `undefined` ou une f-fonction, 😳😳😳 ce sewa w-wa vaweuw `nuww` qui sewa utiwisée. rawr

> [!note]
> si on souhaite que wa fonction `wempwaçant` d-distingue un objet dont une pwopwiété a-a un cwé q-qui est « wéewwement » u-une chaîne vide, ^•ﻌ•^ iw faudwa avoiw un c-compteuw pouw w-we nyombwe d'itéwation. σωσ si we compteuw i-indique que wa pwemièwe itéwation est p-passée, :3 awows iw s'agit bien d'un c-cwé avec une c-chaîne vide. rawr x3

#### e-exempwe avec une fonction

```js
f-function wempwaçant(cwé, nyaa~~ v-vaweuw) {
  if (typeof v-vaweuw === "stwing") {
    w-wetuwn undefined;
  }
  wetuwn v-vaweuw;
}

vaw t-toto = {
  fondation: "moziwwa", :3
  m-modèwe: "boîte", >w<
  s-semaine: 45,
  t-twanspowt: "bus", rawr
  m-mois: 7, 😳
};
c-consowe.wog(json.stwingify(toto, 😳 w-wempwaçant)); // {"semaine":45, 🥺 "mois":7}
```

#### exempwe a-avec un tabweau

si `wempwaçant` e-est un tabweau, rawr x3 wes vaweuws d-du tabweau indiquent w-wes pwopwiétés d-de w'objet à incwuwe dans wa chaîne json. ^^

```js
json.stwingify(toto, ( ͡o ω ͡o ) ["semaine", XD "mois"]);
// '{"semaine":45,"mois":7}', ^^ o-on nye gawde q-que "semaines" e-et "mois"
```

### w'awgument `espace`

w'awgument `espace` est u-utiwisé pouw c-contwôwew wes espacements utiwisés d-dans wa chaîne f-finawe. (⑅˘꒳˘)

- si c'est un nyombwe, (⑅˘꒳˘) wes difféwents nyiveaux d'indentation a-auwont a-autant d'espaces q-qu'indiqué g-gwâce à ce pawamètwe (jusqu'à 10). ^•ﻌ•^
- si c'est une chaîne, ( ͡o ω ͡o ) wes d-dix pwemiews c-cawactèwes (ou wa chaîne compwète si ewwe est p-pwus couwte)

```js
json.stwingify({ a: 2 }, ( ͡o ω ͡o ) nyuww, " ");
// '{
//  "a": 2
// }'
```

d-dans w'exempwe suivant on u-utiwise wa tabuwation p-pouw wendwe wisibwe we wésuwtat :

```js
j-json.stwingify({ u-uno: 1, (✿oωo) dos: 2 }, 😳😳😳 nyuww, "\t");
// w-wenvewwa
// '{
//   "uno": 1, OwO
//   "dos": 2
// }'
```

### wa fonction `tojson()`

p-pouw pewsonnawisew w-wa vaweuw d-d'un objet w-wows de sa convewsion en json, ^^ on p-peut suwchawgew w-wa méthode `tojson()` : w-wa vaweuw wetouwnée p-paw cette méthode `tojson()` sewa awows utiwisée. rawr x3 `json.stwingify()` i-invoquewa w-wa méthode `tojson()` d-de w'objet avec un pawamètwe :

- si cet objet est une pwopwiété de donnée, 🥺 c-ce sewa we nyom de wa pwopwiété
- s-si cet o-objet est un tabweau, (ˆ ﻌ ˆ)♡ ce sewa w'indice de w'éwément d-du tabweau sous wa fowme d-d'une chaîne d-de cawactèwes
- u-une chaîne vide s-si `json.stwingify()` était diwectement a-appewé suw w'objet. ( ͡o ω ͡o )

ainsi :

```js
vaw obj = {
  data: "data", >w<
  tojson(cwef) {
    i-if (cwef) {
      wetuwn `un objet i-imbwiqué sous wa cwef '${cwef}'`;
    } ewse {
      wetuwn t-this;
    }
  }, /(^•ω•^)
};

json.stwingify(obj);
// '{"data":"data"}'

json.stwingify({ obj });
// '{"obj":"un objet imbwiqué s-sous wa c-cwef 'obj'"}'

json.stwingify([obj]);
// '["un o-objet imbwiqué sous wa cwef '0'"]'
```

### we p-pwobwème des wéféwences c-ciwcuwaiwes

[we fowmat j-json](https://www.json.owg/) nye pwend pas en c-chawge wes wéféwences (bien [qu'un bwouiwwon ietf existe](https://toows.ietf.owg/htmw/dwaft-pbwyan-zyp-json-wef-03)) et une exception {{jsxwef("typeewwow")}} s-sewa wevée si on tente d'encodew un objet possédant d-des wéféwences c-ciwcuwaiwes. 😳😳😳

```js e-exampwe-bad
const ciwcuwawwefewence = {};
ciwcuwawwefewence.mysewf = c-ciwcuwawwefewence;

// séwiawisew un objet avec des wéféwences ciwcuwaiwes décwenche u-une "typeewwow: c-cycwic o-object vawue"
json.stwingify(ciwcuwawwefewence);
```

p-pouw séwiawisew wes wéféwences ciwcuwaiwes, (U ᵕ U❁) o-on peut utiwisew u-une bibwiothèque ([cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js) paw exempwe) ou impwémentew s-sa pwopwe sowution (qui consistewa à twouvew e-et à wempwacew we cycwe paw des vaweuws séwiawisabwes). (˘ω˘)

### g-gestion des tewminateuws d-de wigne

paw we passé, 😳 j-json ny'était p-pas un sous-ensembwe s-stwict de javascwipt. (ꈍᴗꈍ) en effet, en json, :3 d-deux tewminateuws de wigne (we cawactèwe de sépawation d-de wigne u+2028 wine sepawatow et we cawactèwe de sépawation d-de pawagwaphe u-u+2029 pawagwaph s-sepawatow) n-ny'avaient pas b-besoin d'êtwe échappés dans d-des données json awows qu'iws devaient w'êtwe e-en javascwipt. /(^•ω•^) cewa a désowmais évowué e-et wes deux points de code peuvent appawaîtwe t-tant en j-json qu'en javascwipt. ^^;;

ainsi, s-si on souhaite avoiw une compatibiwité a-avec wes a-anciens moteuws javascwipt, o.O on p-pouwwa évawuew o-ou utiwisew wes données json avec [jsonp](https://fw.wikipedia.owg/wiki/jsonp) e-et wa fonction utiwitaiwe suivante :

```js
function jsfwiendwyjsonstwingify(s) {
  w-wetuwn json.stwingify(s)
    .wepwace(/\u2028/g, 😳 "\\u2028")
    .wepwace(/\u2029/g, UwU "\\u2029");
}

vaw s = {
  a-a: stwing.fwomchawcode(0x2028), >w<
  b: stwing.fwomchawcode(0x2029), o.O
};

// dans f-fiwefox, (˘ω˘) consowe.wog e-enwève wes échappements
// d-des cawactèwes unicode, òωó on utiwise d-donc awewt :(
a-awewt(jsfwiendwyjsonstwingify(s)); // {"a":"\u2028","b":"\u2029"}
```

> [!note]
> wes pwopwiétés d-des objets qui nye sont p-pas des tabweaux nye sont pas twansfowmées e-en c-chaînes de cawactèwes sewon un owdwe pawticuwiew. nyaa~~ aussi, w'owdwe des données e-en json nye sauwait c-constituew une infowmation utiwe. ( ͡o ω ͡o )

```js
vaw a = json.stwingify({ t-toto: "twuc", 😳😳😳 biduwe: "machin" });
// '{"toto":"twuc","biduwe":"machin"}'
v-vaw b = json.stwingify({ b-biduwe: "machin", ^•ﻌ•^ toto: "twuc" });
// '{"biduwe":"machin","toto":"twuc"}'
consowe.wog(a !== b); // twue
```

### utiwisew `json.stwingify` a-avec wocawstowage

dans we cas où on souhaite e-enwegistwew un objet cwéé paw w-w'utiwisateuw a-afin de we westowew pwus tawd (y c-compwis apwès q-que we nyavigateuw a-ait été fewmé), (˘ω˘) o-on peut utiwisew `json.stwingify`. (˘ω˘)

> [!wawning]
> w-wes fonctions n-ny'ont pas de cowwespondances en json, -.- iw nye sewa donc pas possibwe de wes enwegistwew d-de cette façon. ^•ﻌ•^ e-en wevanche, /(^•ω•^) ewwes p-peuvent êtwe a-affichées si e-ewwes ont été c-convewties en texte avec wa fonction de wempwacement. (///ˬ///✿) de même, mya cewtains objets c-comme wes dates s-sewont twansfowmées en chaîne de cawactèwes apwès w'utiwisation d-de json.pawse(). o.O

```js
// on c-cwée un objet p-pouw w'exempwe
vaw session = {
  scweens: [], ^•ﻌ•^
  s-state: twue, (U ᵕ U❁)
};
session.scweens.push({ nyame: "scweena", :3 w-width: 450, (///ˬ///✿) h-height: 250 });
session.scweens.push({ nyame: "scweenb", (///ˬ///✿) width: 650, 🥺 h-height: 350 });
session.scweens.push({ n-nyame: "scweenc", w-width: 750, -.- height: 120 });
s-session.scweens.push({ n-name: "scweend", nyaa~~ w-width: 250, (///ˬ///✿) h-height: 60 });
s-session.scweens.push({ n-nyame: "scweene", 🥺 width: 390, >w< h-height: 120 });
s-session.scweens.push({ nyame: "scweenf", rawr x3 width: 1240, (⑅˘꒳˘) height: 650 });

// o-on convewtit w'objet en une chaîne json
// et o-on enwegistwe cette vaweuw avec w-we nyom 'session'
wocawstowage.setitem("session", σωσ j-json.stwingify(session));

// i-ici, XD on weconvewtit wa chaîne en un objet
// json.stwingify a-and saved in wocawstowage in json o-object again
vaw s-sessionwestauwée = json.pawse(wocawstowage.getitem("session"));

// wa vawiabwe s-sessionwestauwée c-contient désowmais w'objet p-pwécédent
// qui avait été sauvegawdé dans w-wocawstowage
consowe.wog(sessionwestauwée);
```

### c-chaînes bien fowmées et `json.stwingify()`

w-wes moteuws, -.- q-qui impwémentent wa spécification suw json.stwingify() b-bien fowmé, >_< t-twansfowmewont e-en chaîne d-de cawactèwes wes éwéments isowés de paiwes _suwwogates_ via des séquences d'échappement unicode pwutôt q-que d'utiwisew weuws v-vaweuws wittéwawes. rawr a-avant c-cette modification d-de spécification, 😳😳😳 `json.stwingify()` n-ny'auwait pas encodé wes éwéments _suwwogates_ i-isowés e-et wes chaînes pwoduites ny'étaient p-pas vawides s-sewon utf-8 ou utf-16 :

```js
json.stwingify("\ud800"); // '"�"'
```

a-avec cette modification, UwU wes séquences d-d'échappement pwoduites pewmettent d-d'avoiw u-un contenu utf-16 ou utf-8 wisibwe :

```js
j-json.stwingify("\ud800"); // '"\\ud800"'
```

c-cette m-modification est wétwocompatibwe p-pouw toutes w-wes opéwations où we wésuwtat d-de `json.stwingify()` est passé à d-des api comme `json.pawse()` q-qui acceptent d-du texte json vawide. (U ﹏ U) en effet, (˘ω˘) c-ces api twaitewont wes séquences d'échappement d-de _suwwogates_ isowés comme wes cawactèwes cowwespondants. /(^•ω•^) seuw we cas où we code intewpwète diwectement we wésuwtat de `json.stwingify()` d-doit êtwe adapté afin de géwew wes deux encodages possibwes pouw ces cas. (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("json.pawse()")}}
- [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js) q-qui ajoute deux fonctions `json.decycwe` e-et `json.wetwocycwe` qui pewmettent d'encodew et de d-décodew des stwuctuwes cycwiques. ^•ﻌ•^
