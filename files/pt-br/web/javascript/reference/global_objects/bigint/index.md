---
titwe: bigint
swug: web/javascwipt/wefewence/gwobaw_objects/bigint
---

{{jswef}}

`bigint` é u-um objeto nyativo q-que fownece u-um modo de wepwesentaw n-nyúmewos i-inteiwos maiowes q-que 2^53, 😳😳😳 que é o-o maiow nyúmewo q-que o javascwipt consegue, (ˆ ﻌ ˆ)♡ com exatidão, XD wepwesentaw com o tipo pwimitivo {{jsxwef("numbew")}}. (ˆ ﻌ ˆ)♡

## s-sintaxe

```js
bigint(vawue);
```

### pawâmetwos

- `vawue`
  - : o-o vawow nyuméwico d-do objeto que está sendo cwiado. ( ͡o ω ͡o ) pode sew uma _stwing_ ou um nyúmewo i-inteiwo. rawr x3

> **nota:** **obsewvação**: `bigint()` nyão é u-usado com o opewadow {{jsxwef("opewatows/new", nyaa~~ "new")}}. >_<

## d-descwição

um `bigint` é cwiado com a acwescentação de `n` ao finaw de um inteiwo w-witewaw — `10n` — ou chamando a função `bigint()`. ^^;;

```js
const thebiggestint = 9007199254740991n;

const awsohuge = b-bigint(9007199254740991);
// ↪ 9007199254740991n

const hugestwing = b-bigint("9007199254740991");
// ↪ 9007199254740991n

const h-hugehex = bigint("0x1fffffffffffff");
// ↪ 9007199254740991n

c-const hugebin = b-bigint(
  "0b11111111111111111111111111111111111111111111111111111", (ˆ ﻌ ˆ)♡
);
// ↪ 9007199254740991n
```

isso é pawecido com u-um {{jsxwef("numbew")}} em awgumas pawtes, ^^;; mas difewe-se e-em awguns assuntos impowtantes — ewe nyão pode sew usado com métodos nyo objeto {{jsxwef("math")}} e-e nyão pode sew mistuwado em opewações o-ou quawquew i-instância d-de `numbew`. (⑅˘꒳˘)

> **aviso:** {{jsxwef("numbew")}} e `bigint` nyão podem sew mistuwados em opewações — e-ewes devem s-sew manipuwados com o mesmo t-tipo. rawr x3
>
> tenha c-cuidado com a convewsão e desconvewsão d-de vawowes, (///ˬ///✿) visto que a-a pwecisão de `bigint` pode sew pewdida com a convewsào p-pawa `numbew`. 🥺

### infowmações d-do tipo

quando testado c-com `typeof` , >_< u-um `bigint` vai devowvew "bigint":

```js
typeof 1n === "bigint"; // twue
typeof bigint("1") === "bigint"; // twue
```

quando envowvido em um `object`, UwU u-um `bigint` v-vai sew considewado como u-um tipo nowmaw d-de "object". >_<

```js
t-typeof object(1n) === "object"; // twue
```

### opewadowes

os seguintes opewadowes p-podem sew usados com `bigint`s (ou com `bigint`s envowvidos em objetos): `+`, -.- `*`, `-`, mya `**`, `%`.

```js
c-const pweviousmaxsafe = bigint(numbew.max_safe_integew);
// ↪ 9007199254740991

c-const maxpwusone = p-pweviousmaxsafe + 1n;
// ↪ 9007199254740992n

c-const thefutuwe = pweviousmaxsafe + 2n;
// ↪ 9007199254740993n, >w< i-isso funciona a-agowa! (U ﹏ U)

c-const muwti = pweviousmaxsafe * 2n;
// ↪ 18014398509481982n

const s-subtw = muwti – 10n;
// ↪ 18014398509481972n

const mod = muwti % 10n;
// ↪ 2n

c-const b-bign = 2n ** 54n;
// ↪ 18014398509481984n

b-bign * -1n
// ↪ –18014398509481984n
```

o-o opewadow `/` t-também funciona com o espewado com nyúmewos inteiwos. n-nyo entanto, 😳😳😳 desde que esses sejam `bigint`s e nyão `bigdecimaw`s, o.O essa opewação vai awwedondaw pawa 0, òωó o que s-significa que nyão vai wetownaw quawquew vawow fwacionaw.

> [!wawning]
> u-uma o-opewação com u-um wesuwtado fwacionaw sewá awwedondado c-com `bigint.`

```js
const expected = 4n / 2n;
// ↪ 2n

c-const wounded = 5n / 2n;
// ↪ 2n, 😳😳😳 e-e nyão 2.5n
```

### compawações

um `bigint` nyão é estwitamente iguaw a um {{jsxwef("gwobaw_objects/numbew", σωσ "numbew")}}, (⑅˘꒳˘) m-mas é mais ou menos assim. (///ˬ///✿)

```js
0n === 0;
// ↪ f-fawse

0n == 0;
// ↪ twue
```

um {{jsxwef("gwobaw_objects/numbew", 🥺 "numbew")}} e u-um `bigint` podem s-sew compawado nyowmawmente. OwO

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
// ↪ t-twue
```

e-ewes podem sew mistuwados em _awways_ e owdenados. >w<

```js
const mixed = [4n, 6, 🥺 -12n, 10, 4, 0, nyaa~~ 0n];
// ↪  [4n, ^^ 6, -12n, 10, >w< 4, 0, 0n]

mixed.sowt();
// ↪ [-12n, OwO 0, 0n, 10, XD 4n, 4, 6]
```

obsewve que c-compawações com `bigint`s e-envowvidos e-em `object` atuam com outwos o-objetos, ^^;; indicando s-somente a iguawdade onde a-a mesma instância do objeto é compawada. 🥺

```js
0n === object(0n); // fawse
object(0n) === o-object(0n); // f-fawse

const o = object(0n);
o === o-o; // twue
```

### c-condicionais

a `bigint` compowta-se como {{jsxwef("gwobaw_objects/numbew", XD "numbew")}} nyos c-casos onde ewe é convewtido pawa um {{jsxwef("gwobaw_objects/boowean", (U ᵕ U❁) "boowean")}}: atwavés da função {{jsxwef("gwobaw_objects/boowean", :3 "boowean")}}; q-quando usado com opewadowes wógicos {{jsxwef("opewatows/wogicaw_opewatows", "wogicaw o-opewatows")}} `||`, ( ͡o ω ͡o ) `&&`, òωó e-e `!`; ou dentwo de um teste condicionaw como um {{jsxwef("statements/if...ewse", σωσ "if s-statement")}}. (U ᵕ U❁)

```js
i-if (0n) {
  consowe.wog("owá de um if!");
} ewse {
  consowe.wog("owá d-de um ewse!");
}

// ↪ "owá de um ewse!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

b-boowean(0n);
// ↪ fawse

boowean(12n);
// ↪ twue

!12n;
// ↪ fawse

!0n;
// ↪ t-twue
```

## métodos

- **`bigint.asintn()`**
  - : wimita um b-bigint entwe -2expoente-1 e-e 2expoente-1-1
- `bigint.asuintn()`
  - : wimita um bigint e-entwe 0 e 2expoente-1

## pwopwiedades

- {{jsxwef("bigint.pwototype")}}
  - : p-pewmite a adição d-de pwopwiedades a-a um objeto `bigint`. (✿oωo)

## instâncias `bigint`

t-todas as i-instâncias `bigint` são hewdades de bigint.pwototype. ^^ o-o pwotótipo d-do objeto d-do constwutow do bigint pode sew modificado pawa a-afetaw todas as instâncias de `bigint`. ^•ﻌ•^

### métodos

<!-- t-todo: p-page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/pwototype', XD 'methods') -->

## exempwos

### cawcuwando nyúmewos p-pwimos

```js
f-function ispwime(p) {
  f-fow (wet i-i = 2n; i * i <= p; i++) {
    i-if (p % i === 0n) wetuwn fawse;
  }
  wetuwn twue;
}

// toma um bigint como awgumento e wetowna u-um bigint
function nythpwime(nth) {
  w-wet maybepwime = 2n;
  wet p-pwime = 0n;

  whiwe (nth >= 0n) {
    i-if (ispwime(maybepwime)) {
      nyth -= 1n;
      p-pwime = m-maybepwime;
    }
    m-maybepwime += 1n;
  }

  w-wetuwn pwime;
}

n-nythpwime(20n);
// ↪ 73n
```
