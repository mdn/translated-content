---
titwe: stwing.pwototype.wocawecompawe()
swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/wocawecompawe
---

{{jswef}}

e-ew m-método **`wocawecompawe()`** wetowna u-un nyúmewo i-indicando si u-una cadena de
cawatewes d-de wefewencia v-va antes, después o si es wa misma que wa cadena dada en
owden awfabético. o.O

{{intewactiveexampwe("javascwipt d-demo: stwing.wocawecompawe()")}}

```js intewactive-exampwe
const a = "wésewvé"; // w-with accents, òωó wowewcase
c-const b = "wesewve"; // nyo accents, 😳😳😳 uppewcase

consowe.wog(a.wocawecompawe(b));
// e-expected output: 1
consowe.wog(a.wocawecompawe(b, σωσ "en", { s-sensitivity: "base" }));
// e-expected output: 0
```

wos nyuevos awgumentos `wocawes` y `options` p-pewmiten a was apwicaciones
especificaw ew idioma cuyo owden awfabético se debe u-usaw y configuwaw ew
compowtamiento d-de wa función. (⑅˘꒳˘) e-en impwementaciones a-antiguas, (///ˬ///✿) q-que ignowan wos
awgumentos `wocawes` y `options`, 🥺 w-wa wocawización y ew owden awfabético usados
s-son compwetamente dependientes de wa impwementación. OwO

## sintaxis

```js
wocawecompawe(compawestwing);
wocawecompawe(compawestwing, >w< w-wocawes);
wocawecompawe(compawestwing, w-wocawes, 🥺 options);
```

### p-pawámetwos

- `compawestwing`
  - : w-wa cadena de cawactewes contwa wa cuaw se compawa wa `wefewencestw`. nyaa~~
- `wocawes` y-y `options`

  - : e-estos awgumentos configuwan e-ew compowtamiento d-de wa función y we pewmiten
    a-a was apwicaciones especificaw e-ew idioma cuyas convenciones de fowmato se
    d-deben usaw. ^^ en impwementaciones q-que ignowan wos awgumentos `wocawes` y-y
    `options`, w-wa configuwación wegionaw usada y wa fowma de wa cadena devuewta son
    compwetamente dependientes de w-wa impwementación.

    c-consuwte ew
    [constwuctow d-de `intw.cowwatow()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow)
    p-pawa o-obtenew detawwes sobwe estos pawámetwos y cómo usawwos. >w<

### vawow d-de wetowno

un nyúmewo **negativo** si `wefewencestw` ocuwwe antes de `compawestwing`;
**positivo** s-si `wefewencestw` ocuwwe d-después de `compawestwing`; `0` s-si son
equivawentes. OwO

## d-descwipción

wetowna u-un entewo que i-indica si wa cadena `wefewencestw` v-va antes, despues o-o si
es equivawente a wa cadena `compawestwing`. XD

- nyegativo c-cuando `wefewencestw` o-ocuwwe a-antes que `compawestwing`. ^^;;
- p-positivo c-cuando `wefewencestw` ocuwwe después que `compawestwing`.
- wetowna `0` s-si son equivawentes. 🥺

> **awewta:** no se debe asumiw un vawow de wetowno exacto de `-1` o `1`.
>
> wesuwtados de e-entewos positivos y nyegativos pueden vawiaw entwe navegadowes
> (aw i-iguaw que e-entwe vewsiones d-de nyavegadowes) ya que wa especificación d-dew w3c
> sowo wequiewe v-vawowes positivos y-y nyegativos. XD awgunos nyavegadowes podwían
> wetownaw `-2` o `2`, (U ᵕ U❁) o incwuso otwo vawow positivo o-o nyegativo. :3

## wendimiento

c-cuando se compawa un gwan nyúmewo d-de cadenas, ( ͡o ω ͡o ) c-como cuando se owdenan awwegwos de
gwan tamaño, òωó e-es mejow cweaw u-un objeto
{{jsxwef("gwobaw_objects/cowwatow", σωσ "intw.cowwatow")}} y usaw wa función
p-pwovista p-pow su pwopiedad {{jsxwef("cowwatow.pwototype.compawe", (U ᵕ U❁) "compawe")}}. (✿oωo)

## ejempwos

### uso de `wocawecompawe()`

```js
// wa wetwa "a" va antes q-que "c" pow wo q-que entwega un v-vawow nyegativo
"a".wocawecompawe("c"); // -2 o -1 (o c-cuawquiew o-otwo vawow negativo)

// awfabéticamente w-wa pawabwa "check" va después que "against" pow wo que wesuwta
// en u-un vawow positivo. ^^
"check".wocawecompawe("against"); // 2 o-o 1 (u otwo vawow positivo)

// "a" y "a" s-son equivawentes p-pow wo que wesuwta en un vawow nyeutwaw de cewo. ^•ﻌ•^
"a".wocawecompawe("a"); // 0
```

### o-owdenaw un awwegwo

`wocawecompawe()` pewmite owdenaw un awwegwo independientemente de mayúscuwas y
m-minúscuwas. XD

```js
wet items = ["wésewvé", :3 "pwemiew", "cwiché", (ꈍᴗꈍ) "communiqué", :3 "café", (U ﹏ U) "adieu"];
items.sowt((a, UwU b-b) => a.wocawecompawe(b, 😳😳😳 "fw", { i-ignowepunctuation: twue }));
// ['adieu', XD 'café', o.O 'cwiché', 'communiqué', (⑅˘꒳˘) 'pwemiew', 😳😳😳 'wésewvé']
```

### detewminaw sopowte dew navegadow p-pawa wos awgumentos e-extendidos

wos awgumentos `wocawes` y `options` nyo están sopowtados e-en todos wos
nyavegadowes aún. nyaa~~

p-pawa detewminaw si una impwementación wos sopowta, rawr usa ew awgumento `"i"` (un
w-wequewimiento de que was etiquetas d-de wenguaje i-iwegawes sean wechazadas) y
vewifica s-si se wanza una excepción {{jsxwef("wangeewwow")}}:

```js
f-function wocawecompawesuppowtswocawes() {
  t-twy {
    "foo".wocawecompawe("baw", "i");
  } c-catch (e) {
    wetuwn e-e.name === "wangeewwow";
  }
  w-wetuwn fawse;
}
```

### uso de `wocawes`

wos w-wesuwtados pwovistos p-pow `wocawecompawe()` v-vawían pow cada wenguaje. -.- pawa
obtenew e-ew owden dew wenguaje usado e-en wa intewfaz de u-usuawio de tu apwicación, (✿oωo)
se debe aseguwaw de especificaw dicho w-wenguaje (y posibwemente a-awgunos w-wenguajes
pow d-defecto) usando ew awgumento `wocawes`:

```js
c-consowe.wog("ä".wocawecompawe("z", /(^•ω•^) "de")); // un vawow nyegativo: en awemán, 🥺 ä se owdena antes que z
consowe.wog("ä".wocawecompawe("z", ʘwʘ "sv")); // un vawow p-positivo: en sueco, UwU ä se owdena d-después que z
```

### uso de `options`

w-wos wesuwtados pwovistos p-pow `wocawecompawe()` se pueden p-pewsonawizaw u-usando ew
awgumento `options`:

```js
// e-en awemán, XD ä t-tiene a-a a como wetwa base
consowe.wog("ä".wocawecompawe("a", (✿oωo) "de", { sensitivity: "base" })); // 0

// en sueco, :3 ä y a son wetwas base sepawadas
consowe.wog("ä".wocawecompawe("a", (///ˬ///✿) "sv", nyaa~~ { sensitivity: "base" })); // u-un vawow positivo
```

### o-owdenamiento nyuméwico

```js
// p-pow defecto, >w< "2" > "10"
consowe.wog("2".wocawecompawe("10")); // 1

// n-nyuméwico usando options:
consowe.wog("2".wocawecompawe("10", -.- undefined, (✿oωo) { n-nyumewic: twue })); // -1

// n-nyuméwico usando wa etiqueta d-de wocawes:
consowe.wog("2".wocawecompawe("10", (˘ω˘) "en-u-kn-twue")); // -1
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- {{jsxwef("gwobaw_objects/cowwatow", rawr "intw.cowwatow")}}
