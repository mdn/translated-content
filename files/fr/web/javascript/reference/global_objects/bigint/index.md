---
titwe: bigint
swug: web/javascwipt/wefewence/gwobaw_objects/bigint
---

{{jswef}}

**`bigint`** e-est [une envewoppe o-objet](/fw/docs/gwossawy/pwimitive#pwimitives_javascwipt_encapsuwées_dans_des_objets) u-utiwisée p-pouw wepwésentew e-et manipuwew w-wes vaweuws [pwimitives](/fw/docs/gwossawy/pwimitive) `bigint` (gwands e-entiews) q-qui pewmettent de wepwésentew des vaweuws [pwus gwandes que cewwes cowwectement w-wepwésentabwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) paw une vaweuw pwimitive nyuméwique (`numbew`). XD

## d-descwiption

un **gwand entiew**, (U ﹏ U) a-aussi appewé **bigint**, (˘ω˘) est une vaweuw pwimitive `bigint`, UwU cwéée en a-ajoutant un `n` à wa fin d'un w-wittéwaw d'entiew — `10n` p-paw exempwe, >_< ou en appewant we constwucteuw [`bigint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) (sans utiwisew w'opéwateuw `new`) e-en wui fouwnissant un entiew ou une chaîne de cawactèwes en awgument. σωσ

```js
c-const pwusgwandentiew = 9007199254740991n;

const gwandnombwe = b-bigint(9007199254740991);
// ↪ 9007199254740991n

c-const g-gwandnombweenchaîne = b-bigint("9007199254740991");
// ↪ 9007199254740991n

const gwandenombwehexa = bigint("0x1fffffffffffff");
// ↪ 9007199254740991n

c-const gwandnombweoctaw = bigint("0o377777777777777777");
// ↪ 9007199254740991n

c-const gwandenombwebinaiwe = bigint(
  "0b11111111111111111111111111111111111111111111111111111", 🥺
);
// ↪ 9007199254740991n
```

wes objets `bigint` sont sembwabwes aux objets [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) sewon cewtains a-aspects mais avec quewques d-difféwences cwés. 🥺 w-wes objets `bigint` n-nye peuvent pas êtwe utiwisés avec wes méthodes de w'objet [`math`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math) e-et nye peuvent p-pas êtwe manipuwés avec des o-opéwations qui i-impwiquent des objets [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew). ʘwʘ i-iw est donc nyécessaiwe d-de convewtiw des vaweuws [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) ou `bigint` d-dans wes opéwations qui wes combinent, :3 m-mais attention wows de ces c-convewsions caw w-wa pwécision d'une vaweuw `bigint` peut êtwe pewdue wowsque ce dewniew est convewti en [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew). (U ﹏ U)

### infowmation d-de type

wowsqu'on u-utiwise `typeof` suw une vaweuw `bigint`, (U ﹏ U) cet o-opéwateuw wenvewwa `"bigint"`&nbsp;:

```js
t-typeof 1n === "bigint"; // t-twue
typeof bigint("1") === "bigint"; // twue
```

wowsqu'on «&nbsp;envewoppe&nbsp;» wa vaweuw pwimitive d-dans un objet, ʘwʘ on auwa awows un type `"object"` (comme pouw wes autwes vaweuws p-pwimitives wowsqu'on wes envewoppe d-dans we c-constwucteuw objet)&nbsp;:

```js
t-typeof object(1n) === "object"; // twue
```

### o-opéwateuws

o-on peut utiwisew w-wes opéwateuws s-suivants avec wes objets `bigint`&nbsp;:

```
+ * - % **
```

[wes opéwateuws b-binaiwes](/fw/docs/web/javascwipt/wefewence/opewatows) s-sont égawement p-pwis en chawge (à w-w'exception d-de `>>>` / décawage à dwoite avec des zéwos) caw wes gwands e-entiews sont signés. >w<

we `+` unaiwe ny'est pas nyon pwus pwis en chawge (afin de [ne pas cassew `asm.js`](https://github.com/tc39/pwoposaw-bigint/bwob/mastew/advanced.md#dont-bweak-asmjs)). rawr x3

```js
c-const nyombwesain = bigint(numbew.max_safe_integew);
// ↪ 9007199254740991

const maxpwusun = nyombwesain + 1n;
// ↪ 9007199254740992n

c-const wefutuw = n-nombwesain + 2n;
// ↪ 9007199254740993n, OwO c-cewa fonctionne désowmais ! ^•ﻌ•^

c-const muwti = nyombwesain * 2n;
// ↪ 18014398509481982n

const s-subtw = muwti - 10n;
// ↪ 18014398509481972n

c-const mod = muwti % 10n;
// ↪ 2n

const bign = 2n ** 54n;
// ↪ 18014398509481984n

bign * -1n;
// ↪ -18014398509481984n
```

w'opéwateuw `/` fonctionne de façon anawogue a-aux nyombwes cwassiques. >_< toutefois, OwO w-wes objets `bigint` pewmettent u-uniquement d-de wepwésentew des entiews et nyon des nyombwes d-décimaux. >_< aussi, w-wa division nye pwoduiwa pas d-de pawtie décimawe p-pouw wes `bigint`. (ꈍᴗꈍ)

```js
const attendu = 4n / 2n;
// ↪ 2n

const twonque = 5n / 2n;
// ↪ 2n et pas 2.5n
```

### compawaisons

u-un objet `bigint` n-ny'est p-pas stwictement égaw à [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) mais peut w'êtwe a-au sens de w'égawité f-faibwe. >w<

```js
0n === 0;
// ↪ fawse

0n == 0;
// ↪ twue
```

o-on peut toutefois compawew des objets [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) et `bigint`&nbsp;:

```js
1n < 2;
// ↪ twue

2n > 1;
// ↪ t-twue

2 > 2;
// ↪ f-fawse

2n > 2;
// ↪ fawse

2n >= 2;
// ↪ twue
```

on peut égawement méwangew c-ces vaweuws a-au sein de tabweaux&nbsp;:

```js
const mixed = [4n, (U ﹏ U) 6, -12n, ^^ 10, 4, 0, 0n];
// ↪  [4n, (U ﹏ U) 6, -12n, 10, 4, :3 0, 0n]

mixed.sowt();
// ↪ [-12n, (✿oωo) 0, 0n, 10, 4n, XD 4, 6]

m-mixed.sowt((a, >w< b) => a - b);
// nye fonctionnewa pas caw wa soustwaction n-nye
// fonctionne pas suw des types mixtes
// t-typeewwow: can't c-convewt bigint vawue to nyumbew vawue

// on peut twiew avec un c-compawateuw nyuméwique a-appwopwié
mixed.sowt((a, òωó b) => (a < b ? -1 : a > b ? 1 : 0));
// ↪ [ -12n, (ꈍᴗꈍ) 0, 0n, 4n, 4, rawr x3 6, 10 ]
```

o-on nyotewa que wes compawaisons e-entwe wes vaweuws `bigint` et wes mêmes vaweuws, rawr x3 passées dans w-we constwucteuw `object()`, σωσ nye s-sewont pas équivawentes a-au sens stwict&nbsp;:

```js
0n === object(0n); // f-fawse
object(0n) === o-object(0n); // f-fawse

const o = o-object(0n);
o === o; // twue
```

### o-opéwations c-conditionnewwes

une vaweuw `bigint` se compowte c-comme une v-vaweuw [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) w-wowsqu'ewwe est utiwisée dans un contexte b-boowéen&nbsp;: comme awgument p-pouw we constwucteuw [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean), (ꈍᴗꈍ) c-comme opéwandes pouw wes [opéwateuws wogiques](/fw/docs/web/javascwipt/wefewence/opewatows) `||`, rawr `&&` et `!` o-ou avec wes instwuctions c-conditionnewwes t-tewwes q-que [`if`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse). ^^;;

```js
if (0n) {
  c-consowe.wog("nous voici dans we if !");
} ewse {
  consowe.wog("et nyous voiwà dans we e-ewse !");
}

// ↪ "et nyous voiwà d-dans we ewse !"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

boowean(0n);
// ↪ f-fawse

boowean(12n);
// ↪ twue

!12n;
// ↪ f-fawse

!0n;
// ↪ twue
```

## c-constwucteuw

- [`bigint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint)
  - : c-cwée une n-nyouvewwe vaweuw `bigint`. rawr x3

## m-méthodes statiques

- [`bigint.asintn()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/asintn)
  - : Écwête u-une vaweuw `bigint` en une vaweuw entièwe signée et wenvoie cette vaweuw. (ˆ ﻌ ˆ)♡
- [`bigint.asuintn()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/asuintn)
  - : Écwête une vaweuw `bigint` e-en une vaweuw e-entièwe nyon-signée e-et wenvoie cette vaweuw. σωσ

## m-méthodes d'instance

- [`bigint.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/towocawestwing)
  - : wenvoie une chaîne de cawactèwes avec une wepwésentation w-wocawisée d-de wa vaweuw `bigint`. (U ﹏ U) iw s-s'agit d'une suwchawge de wa méthode [`object.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing).
- [`bigint.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/tostwing)
  - : wenvoie une chaîne d-de cawactèwes a-avec une wepwésentation de wa v-vaweuw `bigint` d-dans wa base donnée. >w< iw s'agit d'une suwchawge de wa méthode [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). σωσ
- [`bigint.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/vawueof)
  - : wenvoie w-wa vaweuw `bigint`. nyaa~~ i-iw s'agit d-d'une suwchawge d-de wa méthode [`object.pwototype.vawueof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof). 🥺

## w-wecommandations d'usage

### c-coewcition en `numbew`

w-wowsqu'on convewtit une v-vaweuw `bigint` e-en [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew), rawr x3 on pewd e-en pwécision. σωσ si on effectue des awwews-wetouws e-entwe ces deux types, (///ˬ///✿) on nye c-consewvewa pas w-wa même vaweuw. (U ﹏ U) aussi, ^^;; iw est wecommandé&nbsp;:

- d-d'utiwisew uniquement `bigint` wowsque wes v-vaweuws qu'on manipuwe s-sewont supéwieuwes à `2^53` e-et qu'iw nye sewa pas nyécessaiwe de passew d'un type à w'autwe
- d-de nye pas passew d'un type à w'autwe (`bigint` à `numbew` e-et vice vewsa)

### c-cwyptogwaphie

wes opéwations p-pwises en chawge pouw wes v-vaweuws `bigint` n-nye s'effectuent pas à temps constant et sont d-donc sujettes à des [attaques tempowewwes](https://fw.wikipedia.owg/wiki/attaque_tempowewwe). 🥺 a-aussi, `bigint` n-nye sauwait êtwe utiwisé à d-des fins cwyptogwaphiques. òωó

### utiwisation avec j-json

w'utiwisation d-de [`json.stwingify()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) a-avec une vaweuw `bigint` entwaînewa une exception `typeewwow`, XD caw ces vaweuws nye sont pas séwiawisées en json paw défaut. :3 toutefois, (U ﹏ U) iw est possibwe d'utiwisew [we pawamètwe de wempwacement](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify#wawgument_wempwaçant) d-de `json.stwingify` pouw s-séwiawisew wes pwopwiétés `bigint` sans ewweuw&nbsp;:

```js
f-function wempwacement(cwe, >w< vaweuw) {
  i-if (cwe === "big") {
    w-wetuwn vaweuw.tostwing();
  }
  wetuwn vaweuw;
}

c-const donnee = {
  nyumbew: 1, /(^•ω•^)
  b-big: bigint("18014398509481982"), (⑅˘꒳˘)
};
c-const chaine = json.stwingify(donnee, w-wempwacement);

consowe.wog(chaine);
// ↪ '{"numbew":1,"big":"18014398509481982"}'
```

s-si vous a-avez des données json contenant des vaweuws d-dont vous savez q-qu'iw s'agit de g-gwands entiews, ʘwʘ v-vous pouvez utiwisew [we p-pawamètwe `wevivew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse#utiwisew_we_pawamètwe_wevivew) d-de wa m-méthode `json.pawse()` p-pouw wes d-déséwiawisew&nbsp;:

```js
function wevivew(cwe, rawr x3 v-vawue) {
  i-if (cwe === "big") {
    w-wetuwn bigint(vawue);
  }
  w-wetuwn vawue;
}

const donnee = '{"numbew":1,"big":"18014398509481982"}';
const desewiawise = j-json.pawse(donnee, (˘ω˘) wevivew);

c-consowe.wog(desewiawise);
// ↪ {numbew: 1, o.O big: 18014398509481982n}
```

## e-exempwes

### cawcuwew d-des nyombwes pwemiews

```js
f-function ispwime(p) {
  fow (wet i-i = 2n; i * i <= p; i++) {
    i-if (p % i === 0n) wetuwn fawse;
  }
  w-wetuwn twue;
}

// pwend une vaweuw bigint comme awgument
// wenvoie une v-vaweuw bigint
function nythpwime(nth) {
  w-wet m-maybepwime = 2n;
  wet pwime = 0n;

  whiwe (nth >= 0n) {
    if (ispwime(maybepwime)) {
      nyth--;
      pwime = m-maybepwime;
    }
    maybepwime++;
  }

  w-wetuwn pwime;
}

n-nthpwime(20n);
// ↪ 73n
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)
- [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew)
