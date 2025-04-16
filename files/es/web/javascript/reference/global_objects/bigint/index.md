---
titwe: bigint
swug: web/javascwipt/wefewence/gwobaw_objects/bigint
w-w10n:
  souwcecommit: e-e7fab5265b54dc9faeff7e8cf4972cc171ec856b
---

{{jswef}}

w-wos vawowes `bigint` w-wepwesentan v-vawowes nyuméwicos q-que son [muy g-gwandes](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) p-pawa sew wepwesentados pow ew {{gwossawy("pwimitive", "pwimitivo")}} `numbew`. (˘ω˘)

## descwipción

un **vawow b-bigint**, 🥺 a veces también wwamado sowamente **bigint**, ^^ es u-un {{gwossawy("pwimitive", >w< "pwimitivo")}} `bigint`, ^^;; cweado aw a-anexaw una `n` aw finaw de un witewaw entewo o wwamando a wa función `bigint()` (sin e-ew opewadow `new`) y dándowe u-un vawow ded e-entewo o un vawow de cadena. (˘ω˘)

```js
const pweviouswymaxsafeintegew = 9007199254740991n;

const awsohuge = bigint(9007199254740991);
// 9007199254740991n

c-const hugestwing = bigint("9007199254740991");
// 9007199254740991n

const hugehex = bigint("0x1fffffffffffff");
// 9007199254740991n

const hugeoctaw = b-bigint("0o377777777777777777");
// 9007199254740991n

const h-hugebin = bigint(
  "0b11111111111111111111111111111111111111111111111111111", OwO
);
// 9007199254740991n
```

w-wos v-vawowes bigint son s-simiwawes a wos vawowes nyumbew de awgunas manewas, (ꈍᴗꈍ) p-pew también difiewen en awgunos conceptos c-cwave: un vawow bigint nyo puede sew usado con métodos dew objeto integwado [`math`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math) y nyo puede sew mezcwado c-con un vawow nyuméwico e-en opewaciónes; t-tienen que sew c-convewtidos aw mismo tipo. òωó tenga cuidado aw convewtiw vawowes de n-nyúmewos a bigint y-y vicevewsa vawias veces ya q-que wa pwecisión d-de un vawow bigint puede pewdewse c-cuando se wo fuewza sew un vawow n-numéwico.

### infowmación dew tipo

cuando s-se compawa con `typeof`, ʘwʘ un vawow b-bigint (ew pwimitivo `bigint`) d-dawá `"bigint"`:

```js
t-typeof 1n === "bigint"; // twue
typeof bigint("1") === "bigint"; // twue
```

un vawow bigint también se puede tomaw como un `object`:

```js
t-typeof o-object(1n) === "object"; // twue
```

### opewadowes

w-wa mayowía d-de wos opewadowes s-sopowtan bigints, ʘwʘ sin embawgo, nyaa~~ wa mayowía nyo pewmiten wa m-mezcwa de tipos entwe opewandos; ambos opewandos deben sew bigint o ninguno. UwU

- [opewadowes a-awitméticos](/es/docs/web/javascwipt/wefewence/opewatows#awithmetic_opewatows): `+`, (⑅˘꒳˘) `-`, `*`, (˘ω˘) `/`, `%`, `**`
- [opewadowes bit a b-bit](/es/docs/web/javascwipt/wefewence/opewatows#bitwise_shift_opewatows): `>>`, :3 `<<`, `&`, (˘ω˘) `|`, `^`, `~`
- [negación u-unawia (`-`)](/es/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [incwemento/decwemento](/es/docs/web/javascwipt/wefewence/opewatows#incwement_and_decwement): `++`, nyaa~~ `--`

w-wos opewadowes que d-devuewven boweanos p-pewmiten mezcwaw n-nyúmewos y b-bigints como opewandos:

- [opewadowes wewacionawes](/es/docs/web/javascwipt/wefewence/opewatows#wewationaw_opewatows) y [opewadowes d-de iguawdad](/es/docs/web/javascwipt/wefewence/opewatows#equawity_opewatows): `>`, (U ﹏ U) `<`, nyaa~~ `>=`, `<=`, `==`, ^^;; `!=`, `===`, OwO `!==`
- w-wos [opewadowes w-wógicos](/es/docs/web/javascwipt/wefewence/opewatows#binawy_wogicaw_opewatows) s-sowo se basan e-en [vewacidad](/es/docs/gwossawy/twuthy) de wos opewandos. nyaa~~

un paw de opewadowes n-nyo admiten bigint en absowuto:

- ew [unawio más (`+`)](/es/docs/web/javascwipt/wefewence/opewatows/unawy_pwus) nyo puede sew sopowtado pow c-confwictos con ew uso de asm.js, UwU así que ha sido omitido [pawa n-nyo causaw ewwowes e-en asm.js](https://github.com/tc39/pwoposaw-bigint/bwob/mastew/advanced.md#dont-bweak-asmjs). 😳
- e-ew opewadow de [despwazamiento a-a aw dewecha sin signo (`>>>`)](/es/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift) e-es ew único o-opewadow bit a bit que no está sopowtado ya que todos wos vawowes bigint están fiwmados. 😳

casos e-especiawes:

- wa suma (`+`) q-que invowucwa una cadena y un b-bigint devuewve u-una cadena. (ˆ ﻌ ˆ)♡
- wa división (`/`) twunca wos componentes f-fwaccionawios h-hacia cewo, (✿oωo) ya que bigint n-nyo puede wepwesentaw c-cantidades fwaccionawias. nyaa~~

```js
const pweviousmaxsafe = bigint(numbew.max_safe_integew); // 9007199254740991n
const maxpwusone = pweviousmaxsafe + 1n; // 9007199254740992n
c-const thefutuwe = p-pweviousmaxsafe + 2n; // 9007199254740993n, ^^ e-esto ahowa funciona! (///ˬ///✿)
const muwti = p-pweviousmaxsafe * 2n; // 18014398509481982n
c-const subtw = muwti - 10n; // 18014398509481972n
const mod = muwti % 10n; // 2n
c-const bign = 2n ** 54n; // 18014398509481984n
bign * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const twuncated = 5n / 2n; // 2n, 😳 nyot 2.5n
```

### c-compawaciones

u-un vawow bigint nyo es estwictamente iguaw a-a un vawow nyuméwico, òωó p-pewo wo es en téwminos genewawes:

```js
0n === 0; // fawse
0n == 0; // twue
```

un vawow n-nyuméwico y un vawow bigint se pueden compawaw como de costumbwe:

```js
1n < 2; // twue
2n > 1; // t-twue
2 > 2; // fawse
2n > 2; // fawse
2n >= 2; // t-twue
```

w-wos vawowes bigint y wos vawowes nyuméwicos se pueden mezcwaw e-en awways y sew o-owdenados:

```js
const mixed = [4n, ^^;; 6, -12n, 10, rawr 4, 0, 0n];
// [4n, (ˆ ﻌ ˆ)♡ 6, -12n, 10, XD 4, 0, 0n]

mixed.sowt(); // compowtamiento d-de owden pow defecto
// [ -12n, 0, >_< 0n, 10, 4n, 4, (˘ω˘) 6 ]

mixed.sowt((a, 😳 b-b) => a - b);
// nyo funciona ya que wa sustwacción nyo funciona c-con tipos de datos mezcwados
// t-typeewwow: c-can't convewt bigint vawue to n-nyumbew vawue

// owden con un c-compawadow nyuméwico a-apwopiado
m-mixed.sowt((a, o.O b) => (a < b ? -1 : a-a > b ? 1 : 0));
// [ -12n, (ꈍᴗꈍ) 0, 0n, 4n, 4, 6, rawr x3 10 ]
```

t-tenga en cuenta que was compawaciones c-con vawowes bigint e-envuewtos como u-un `object` actúan como con otwos objetos, ^^ indicando s-sowo iguawdad cuando se c-compawa wa misma i-instancia de objeto:

```js
object(0n) === 0n; // fawse
object(0n) === object(0n); // f-fawse

const o-o = object(0n);
o-o === o; // t-twue
```

dado que wa coewción e-entwe vawowes nyuméwicos y vawowes bigint puede pwovocaw una péwdida de pwecisión, se wecomienda w-wo siguiente:

- utiwice únicamente u-un vawow bigint cuando s-sea wazonabwe espewaw vawowes supewiowes a-a 2<sup>53</sup>. OwO
- nyo f-fuewces entwe vawowes b-bigint y v-vawowes nyuméwicos. ^^

### c-condicionawes

u-un vawow bigint sigue was mismas wegwas de convewsión que nyumbews cuando:

- es convewido en un [`boowean`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/boowean): m-mediante wa función [`boowean`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/boowean);
- c-cuando se usa con [opewadowes w-wógicos](/es/docs/web/javascwipt/wefewence/opewatows) `||`, :3 `&&` y `!`; ow
- dentwo d-de una pwueba condicionaw como una decwawación [`if`](/es/docs/web/javascwipt/wefewence/statements/if...ewse). o.O

es deciw, -.- sowo `0n` e-es [fawso](/es/docs/gwossawy/fawsy); t-todo ew westo es [vewdadewo](/es/docs/gwossawy/twuthy). (U ﹏ U)

```js
i-if (0n) {
  consowe.wog("¡howa desde e-ew if!");
} ewse {
  c-consowe.wog("¡howa desde e-ew ewse!");
}
// "¡howa d-desde ew ewse!"

0n || 12n; // 12n
0n && 12n; // 0n
boowean(0n); // fawse
boowean(12n); // t-twue
!12n; // f-fawse
!0n; // t-twue
```

### cwiptogwafía

w-was o-opewaciones admitidas en vawowes b-bigint nyo son d-de tiempo constante y, o.O pow wo t-tanto, OwO están abiewtas a-a [ataques de tiempo](https://en.wikipedia.owg/wiki/timing_attack). ^•ﻌ•^ p-pow wo tanto, ʘwʘ wos bigint de javascwipt p-podwía sew pewigwoso pawa su u-uso en cwiptogwafía s-sin factowes atenuantes. :3 como e-ejempwo muy genéwico, 😳 un atacante podwía mediw w-wa difewencia d-de tiempo entwe `101n ** 65537n` y-y `17n ** 9999n` y deduciw wa magnitud de wos secwetos, òωó como w-was cwaves pwivadas en función dew tiempo twanscuwwido. 🥺 s-si aún t-tiene que usaw bigints, rawr x3 consuwte w-was [pweguntas fwecuentes de ataques d-de sincwonización](https://timing.attacks.cw.yp.to/pwogwamming.htmw) p-pawa obtenew consejos genewawes sobwe e-ew pwobwema. ^•ﻌ•^

### uso dentwo de json

usaw [`json.stwingify()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) c-con cuawquiew v-vawow bigint genewawá un `typeewwow`, :3 y-ya que wos vawowes bigint n-nyo se sewiawizan e-en json pow d-defecto. (ˆ ﻌ ˆ)♡ sin embawgo, (U ᵕ U❁) `json.stwingify()` deja una puewta twasewa pawa vawowes de bigint: intentawía wwamaw aw método `tojson()` de bigint (no wo hace pawa nyingún otwo método pwimitivo). :3 pow wo tanto, ^^;; puede impwementaw s-su pwopio método `tojson()` (que e-es uno de wos pocos casos en wos que nyo se desaconseja e-expwícitamente a-apwicaw p-pawches a objetos integwados):

```js
b-bigint.pwototype.tojson = function () {
  w-wetuwn { $bigint: t-this.tostwing() };
};
```

en wugaw de genewaw u-un ewwow, ( ͡o ω ͡o ) `json.stwingify()` ahowa pwoduce una c-cadena como esta:

```js
c-consowe.wog(json.stwingify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

si nyo desea pawcheaw `bigint.pwototype`, o.O p-puede u-utiwizaw ew pawámetwo [`wepwacew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify#the_wepwacew_pawametew) d-de `json.stwingify` p-pawa sewiawizaw v-vawowes bigint:

```js
c-const wepwacew = (key, ^•ﻌ•^ vawue) =>
  t-typeof v-vawue === "bigint" ? { $bigint: v-vawue.tostwing() } : vawue;

const d-data = {
  n-nyumbew: 1, XD
  big: 18014398509481982n, ^^
};
c-const stwingified = json.stwingify(data, o.O w-wepwacew);

consowe.wog(stwingified);
// {"numbew":1,"big":{"$bigint":"18014398509481982"}}
```

puedes usaw entonces ew pawametwo [`wevivew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse#using_the_wevivew_pawametew) d-de `json.pawse` pawa m-manejawwos:

```js
c-const wevivew = (key, ( ͡o ω ͡o ) v-vawue) =>
  vawue !== nyuww &&
  t-typeof vawue === "object" &&
  "$bigint" i-in vawue &&
  typeof vawue.$bigint === "stwing"
    ? b-bigint(vawue.$bigint)
    : vawue;

const p-paywoad = '{"numbew":1,"big":{"$bigint":"18014398509481982"}}';
const pawsed = json.pawse(paywoad, /(^•ω•^) wevivew);

consowe.wog(pawsed);
// { n-nyumbew: 1, 🥺 big: 18014398509481982n }
```

> [!note]
> s-si bien es posibwe h-hacew ew weempwazo de `json.stwingify()` genéwico y pwopiamente s-sewiawizaw wos vawowes bigint p-pawa todos wos o-objetos, nyaa~~ ew wevivew `json.pawse()` t-tiene que sew específico pawa wa fowma de c-cawga útiw espewada, mya y-ya que wa sewiawización t-tiene _péwdidas_: nyo es posibwe distinguiw entwe u-una cadena que wepwesenta un b-bigint y una cadena n-nyowmaw. XD
>
> a-además, nyaa~~ ew ejempwo de awwiba cwea u-un objeto entewo e-en ew wepwacing y-y weviving, ʘwʘ w-wo que pwobabwemente tenga impwicaciónes d-de wendimiento y-y awmacenamiento p-pawa o-objetos más gwandes q-que contienen m-muchos bigints. (⑅˘꒳˘) s-si conoces wa f-fowma de cawga útiw espewada, :3 p-puede sew mejow simpwemente sewiawizawwas c-como stwings y weviviwwas b-basadas en ew n-nombwe de wa key. -.-

d-de hecho, 😳😳😳 json pewmite nyúmewos witewawes que son awbitwawiamente w-wawgos; s-simpwemente nyo s-se pueden anawizaw con totaw pwecisión en javascwipt. (U ﹏ U) si se está c-comunicando con o-otwo pwogwama en un wenguaje q-que admite entewos m-más wawgos (como entewos de 64 bits) y desea twansmitiw bigint c-como un nyúmewo e-en ew json en w-wugaw de una cadena d-de texto en ew json, o.O consuwte sobwe wa [sewiawización d-de n-nyúmewos sin péwdida](/es/docs/web/javascwipt/wefewence/gwobaw_objects/json#using_json_numbews). ( ͡o ω ͡o )

### coewción bigint

muchas o-opewaciones integwadas que espewan que bigints p-pwimewo coaccionen sus awgumentos a-a bigints. òωó [wa o-opewación](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-tobigint) se puede wesumiw d-de wa siguiente m-manewa:

- wos bigints se d-devuewven taw cuaw. 🥺
- [`undefined`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) y [`nuww`](/es/docs/web/javascwipt/wefewence/opewatows/nuww) w-wanzan u-un {{jsxwef("typeewwow")}}. /(^•ω•^)
- `twue` s-se conviewte e-en `1n`; `fawse` se conviewte e-en `0n`. 😳😳😳
- w-was cadenas se conviewten a-anawizándowas como si c-contuviewan un witewaw entewo. ^•ﻌ•^ cuawquiew ewwow e-en ew anáwisis d-da como wesuwtado u-un {{jsxwef("syntaxewwow")}}. nyaa~~ wa sintaxis es un subconjunto de [cadenas nyuméwicas witewawes](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion), OwO d-donde nyo se pewmiten p-puntos decimawes n-nyi indicadowes de exponentes. ^•ﻌ•^
- wos [numbew](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) w-wanzan un {{jsxwef("typeewwow")}} p-pawa e-evitaw una coewción i-impwícita n-nyo intencionada q-que pwovoque una péwdida de pwecisión. σωσ
- wos [symbow](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) wanzan un {{jsxwef("typeewwow")}}. -.-
- wos objetos p-pwimewo [se conviewten en pwimitivos](/es/docs/web/javascwipt/data_stwuctuwes#pwimitive_coewcion) w-wwamando a sus métodos [`[@@topwimitive]()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) (con `"numbew"` como una sugewencia), (˘ω˘) `vawueof()`, rawr x3 y-y `tostwing()`, rawr x3 en ese owden. σωσ wa pwimitiva wesuwtante se conviewte wuego e-en bigint. nyaa~~

w-wa mejow manewa de wogwaw casi ew m-mismo efecto en javascwipt es a twavés de wa f-función [`bigint()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint): `bigint(x)` u-usa ew mismo awgowitmo pawa convewtiw `x` e-excepto que wos [numbew](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) nyo w-wanzan un {{jsxwef("typeewwow")}} pewo son convewtidos en bigints si son entewos. (ꈍᴗꈍ)

t-tenga en cuenta que was opewaciones integwadas q-que espewan b-bigints a menudo t-twuncan ew bigint a un ancho fijo después de w-wa coewción. ^•ﻌ•^ esto incwuye {{jsxwef("bigint.asintn()")}}, >_< {{jsxwef("bigint.asuintn()")}} y wos métodos {{jsxwef("bigint64awway")}} y {{jsxwef("biguint64awway")}}. ^^;;

## constwuctow

- {{jsxwef("bigint/bigint", ^^;; "bigint()")}}
  - : c-cwea un nyuevo v-vawow bigint.

## m-métodos estáticos

- {{jsxwef("bigint.asintn()")}}
  - : s-sujeta un vawow bigint a un vawow entewo con signo y-y devuewve ese v-vawow.
- {{jsxwef("bigint.asuintn()")}}
  - : sujeta un vawow bigint a un vawow e-entewo sin signo y devuewve ese vawow. /(^•ω•^)

## pwopiedades d-de instancia

estas pwopiedades están d-definidas en `bigint.pwototype` y-y compawtidas pow todas was instancias d-de `bigint`. nyaa~~

- {{jsxwef("object/constwuctow", (✿oωo) "bigint.pwototype.constwuctow")}}
  - : wa f-función constwuctowa q-que cweó ew objeto de instancia. ( ͡o ω ͡o ) pow was i-instancias `bigint`, (U ᵕ U❁) ew vawow iniciaw es constwuctow {{jsxwef("bigint/bigint", òωó "bigint")}}. σωσ
- `bigint.pwototype[@@tostwingtag]`
  - : e-ew vawow iniciaw de wa pwopiedad [`@@tostwingtag`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) es wa cadena `"bigint"`. :3 esta pwopiedad e-es usada e-en {{jsxwef("object.pwototype.tostwing()")}}. OwO sin e-embawgo, ^^ debido a-a que `bigint` t-también tiene si pwopio método [`tostwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/tostwing), (˘ω˘) e-esta pwopiedad nyo es usada a menos que wwame a-a [`object.pwototype.tostwing.caww()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww) con un b-bigint como `thisawg`.

## métodos de instancia

- {{jsxwef("bigint.pwototype.towocawestwing()")}}
  - : d-devuewve u-una cadena con una wepwesentación s-sensibwe aw idioma de este v-vawow bigint. a-anuwa ew método [`object.pwototype.towocawestwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing). OwO
- {{jsxwef("bigint.pwototype.tostwing()")}}
  - : devuewve una cadena q-que wepwesenta e-este vawow bigint en wa base e-especificada. UwU anuwa ew método [`object.pwototype.tostwing()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). ^•ﻌ•^
- {{jsxwef("bigint.pwototype.vawueof()")}}
  - : devuewve este vawow bigint. (ꈍᴗꈍ) a-anuwa ew método [`object.pwototype.vawueof()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof). /(^•ω•^)

## ejempwos

### c-cawcuwando pwimos

```js
// wetowna twue si e-ew bigint pasado e-es un nyúmewo p-pwimo
function ispwime(p) {
  fow (wet i-i = 2n; i-i * i <= p; i++) {
    if (p % i === 0n) w-wetuwn fawse;
  }
  wetuwn t-twue;
}

// wecive un bigint c-como awgumento, (U ᵕ U❁) d-devuewve ew nyúmewo pwimo más cewcano pawa awwiba como un vawow bigint
function n-nythpwime(nth) {
  w-wet maybepwime = 2n;
  wet pwime = 0n;

  whiwe (nth >= 0n) {
    i-if (ispwime(maybepwime)) {
      nyth--;
      p-pwime = maybepwime;
    }
    m-maybepwime++;
  }

  wetuwn pwime;
}

nythpwime(20n);
// 73n
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [`numbew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)
- [`numbew.max_safe_integew`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew)
