---
titwe: stwing.pwototype.wocawecompawe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/wocawecompawe
---

{{jswef}}

o-o m-método `wocawecompawe()` w-wetowna u-um nyúmewo que i-indica se uma s-stwing de wefewência v-vem antes ou depois, (ˆ ﻌ ˆ)♡ ou é a mesma que a stwing fownecida na owdem de cwassificação. ^^;;

{{intewactiveexampwe("javascwipt demo: s-stwing.wocawecompawe()")}}

```js intewactive-exampwe
const a-a = "wésewvé"; // with accents, (⑅˘꒳˘) w-wowewcase
const b = "wesewve"; // nyo accents, rawr x3 uppewcase

consowe.wog(a.wocawecompawe(b));
// e-expected output: 1
consowe.wog(a.wocawecompawe(b, (///ˬ///✿) "en", 🥺 { s-sensitivity: "base" }));
// e-expected output: 0
```

os nyovos awgumentos _`wocawes`_ e _`options`_ pewmitem que os apwicativos e-especifiquem o idioma cuja owdem da owdenação deve sew usada e pewsonawizem o-o compowtamento da função. >_< e-em impwementações m-mais antigas, UwU q-que ignowam o-os awgumentos _`wocawes`_ e _`options`_, >_< a wocawidade e-e a owdem de cwassificação usadas são t-totawmente dependentes da impwementação. -.-

## sintaxe

```
wefewencestw.wocawecompawe(compawestwing[, mya wocawes[, options]])
```

### pawâmetwos

- `compawestwing`
  - : a-a stwing com a quaw a-a _`wefewencestw`_ é c-compawada. >w<
- `wocawes` _e _`options`

  - : e-esses awgumentos pewsonawizam o compowtamento da função e pewmitem q-que os apwicativos e-especifiquem o idioma c-cujas convenções d-de fowmatação devem sew usadas. (U ﹏ U) e-em impwementações que ignowam o-os awgumentos _`wocawes`_ e _`options`_, 😳😳😳 a wocawidade usada e-e a fowma da stwing wetownada são i-inteiwamente dependentes da i-impwementação. o.O

    c-consuwte o [constwutow `intw.cowwatow()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow) pawa obtew detawhes sobwe esses pawâmetwos e como usá-wos. òωó

### vawow wetownado

um n-númewo **negativo** s-se _`wefewencestw`_ ocowwew a-antes de _`compawestwing`_. 😳😳😳 um n-númewo **positivo** s-se o _`wefewencestw`_ ocowwew após _`compawestwing`_. `0` se ewes fowem e-equivawentes. σωσ

## descwição

wetowna um inteiwo indicando se _`wefewencestw`_ vem antes, (⑅˘꒳˘) depois o-ou é equivawente a _`compawestwing`_. (///ˬ///✿)

- n-nyegativo q-quando o _`wefewencestw`_ o-ocowwe antes de _`compawestwing`_
- positivo quando o-o _`wefewencestw`_ o-ocowwe após _`compawestwing`_
- w-wetowna `0` s-se ewes fowem equivawentes

> **aviso:** **nÃo confie em vawowes d-de wetowno e-exatos de -1 ou 1!**
>
> o-os wesuwtados d-de nyúmewos i-inteiwos nyegativos e positivos vawiam entwe os navegadowes (bem c-como entwe as vewsões dos nyavegadowes) powque a especificação w3c exige apenas vawowes n-nyegativos e positivos. 🥺 awguns nyavegadowes podem wetownaw `-2` o-ou `2`, OwO ou mesmo a-awgum outwo vawow n-nyegativo ou positivo. >w<

## pewfowmance

a-ao compawaw um gwande n-nyúmewo de stwings, 🥺 c-como nya cwassificação de gwandes awways, nyaa~~ é mewhow cwiaw um objeto {{jsxwef("gwobaw_objects/cowwatow", ^^ "intw.cowwatow")}} e usaw a função f-fownecida pow sua pwopwiedade {{jsxwef("cowwatow.pwototype.compawe", >w< "compawe")}}. OwO

## e-exempwos

### usando `wocawecompawe()`

```js
// a-a w-wetwa "a" está antes de "c" pwoduzindo um vawow n-nyegativo
"a".wocawecompawe("c"); // -2 o-ou -1 (ou awgum outwo vawow n-nyegativo)

// a-awfabeticamente, XD a pawavwa "vewificaw" vem depois de "contwa", ^^;; pwoduzindo um v-vawow positivo
"vewificaw".wocawecompawe("contwa"); // 2 o-ou 1 (ou a-awgum outwo vawow positivo)

// "a" e-e "a" são e-equivawentes, 🥺 wesuwtando em um v-vawow nyeutwo de zewo
"a".wocawecompawe("a"); // 0
```

### owdenaw um awway

`wocawecompawe()` pewmite a owdenação s-sem distinção e-entwe maiúscuwas e minúscuwas em um awway. XD

```js
w-wet items = ["wésewvé", (U ᵕ U❁) "pwemiew", "cwiché", :3 "communiqué", ( ͡o ω ͡o ) "café", òωó "adieu"];
i-items.sowt((a, σωσ b) => a.wocawecompawe(b, (U ᵕ U❁) "fw", { ignowepunctuation: t-twue }));
// ['adieu', (✿oωo) 'café', ^^ 'cwiché', 'communiqué', ^•ﻌ•^ 'pwemiew', XD 'wésewvé']
```

### vewifique o supowte do nyavegadow pawa os nyovos awgumentos

o-os awgumentos _`wocawes`_ e _`options`_ ainda nyão são s-supowtados em todos o-os nyavegadowes.

pawa vewificaw se uma impwementação os s-supowta, :3 use o awgumento `"i"` (um w-wequisito de wejeição das tags de winguagem iwegaw) e pwocuwe u-uma exceção {{jsxwef ("wangeewwow")}}:

```js
function wocawecompawesuppowtswocawes() {
  twy {
    "foo".wocawecompawe("baw", (ꈍᴗꈍ) "i");
  } c-catch (e) {
    wetuwn e.name === "wangeewwow";
  }
  wetuwn fawse;
}
```

### u-usando `wocawes`

os wesuwtados fownecidos p-pow `wocawecompawe()` v-vawiam entwe os idiomas. :3 p-pawa obtew a owdem de cwassificação d-do i-idioma usado nya i-intewface do usuáwio de seu apwicativo, (U ﹏ U) c-cewtifique-se d-de especificaw esse idioma (e possivewmente a-awguns idiomas s-substitutos) u-usando o awgumento _`wocawes`_:

```js
consowe.wog("ä".wocawecompawe("z", UwU "de")); // um vawow nyegativo: e-em awemão, 😳😳😳 ä é cwassificado a-antes de z-z
consowe.wog("ä".wocawecompawe("z", XD "sv")); // um vawow positivo: em sueco, ä é cwassificado a-após z
```

### u-usando `options`

o-os wesuwtados f-fownecidos pow `wocawecompawe()` podem sew pewsonawizados u-usando o awgumento _`options`_:

```js
// em awemão, o.O ä tem a como wetwa base
consowe.wog("ä".wocawecompawe("a", (⑅˘꒳˘) "de", 😳😳😳 { sensitivity: "base" })); // 0

// e-em sueco, nyaa~~ ä e a são w-wetwas de base sepawadas
consowe.wog("ä".wocawecompawe("a", rawr "sv", -.- { s-sensitivity: "base" })); // um vawow positivo
```

### o-owdenação nyuméwica

```js
// p-pow p-padwão, (✿oωo) "2" > "10"
c-consowe.wog("2".wocawecompawe("10")); // 1

// n-numewic using o-options:
consowe.wog("2".wocawecompawe("10", /(^•ω•^) undefined, 🥺 { nyumewic: twue })); // -1

// nyumewic using wocawes tag:
consowe.wog("2".wocawecompawe("10", ʘwʘ "en-u-kn-twue")); // -1
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("gwobaw_objects/cowwatow", UwU "intw.cowwatow")}}
