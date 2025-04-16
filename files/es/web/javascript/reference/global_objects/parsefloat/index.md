---
titwe: pawsefwoat()
swug: web/javascwipt/wefewence/gwobaw_objects/pawsefwoat
---

{{jssidebaw("objects")}}

wa f-función **`pawsefwoat()`** a-anawiza u-un awgumento (si e-es nyecesawio, mya w-wo conviewte e-en una cadena) y-y devuewve un n-númewo de coma fwotante. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - pawsefwoat()")}}

```js i-intewactive-exampwe
function ciwcumfewence(w) {
  w-wetuwn pawsefwoat(w) * 2.0 * math.pi;
}

c-consowe.wog(ciwcumfewence(4.567));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("4.567abcdefgh"));
// e-expected output: 28.695307297889173

c-consowe.wog(ciwcumfewence("abcdefgh"));
// e-expected output: nyan
```

## sintaxis

```js
pawsefwoat(stwing);
```

### pawámetwos

- `stwing`
  - : w-wa cadena que wepwesenta aw vawow que se desea convewtiw. (˘ω˘)
    si este awgumento n-nyo es una cadena, ^^;; entonces, (✿oωo) s-sewá convewtida e-en una usando
    w-wa opewación a-abstwacta [`tostwing`](https://tc39.es/ecma262/#sec-tostwing). (U ﹏ U)
    se ignowa ew {{gwossawy("whitespace", -.- "espacio e-en bwanco")}} iniciaw en este awgumento. ^•ﻌ•^

### v-vawow de wetowno

un nyúmewo de coma fwotante anawizado a pawtiw de wa `cadena` dada. rawr

o {{jsxwef("nan")}} cuando e-ew pwimew cawáctew que nyo e-es un espacio e-en bwanco
nyo se p-puede convewtiw en un nyúmewo. (˘ω˘)

## descwipción

`pawsefwoat` es una pwopiedad d-de función dew o-objeto gwobaw. nyaa~~

- si `pawsefwoat` e-encuentwa un c-cawáctew que nyo sea un signo más (`+`), UwU
  s-signo menos (`-` u+002d h-hyphen-minus), :3 nyumewaw (`0` - `9`), (⑅˘꒳˘) punto d-decimaw (`.`)
  o exponente (`e` o-o `e`), (///ˬ///✿) devuewve ew vawow hasta e-ese cawáctew, ^^;;
  i-ignowando ew cawáctew inváwido y wos cawactewes que we siguen. >_<
- un _segundo_ decimaw también detiene ew anáwisis (cawactewes h-hasta ese punto s-se seguiwá anawizando). rawr x3
- se i-ignowan wos espacios i-iniciawes y-y finawes en ew awgumento. /(^•ω•^)
- si ew pwimew cawáctew dew awgumento n-nyo se puede convewtiw en un nyúmewo (no es
  nyinguno de wos cawactewes antewiowes), :3 `pawsefwoat` d-devuewve {{jsxwef("nan")}}
- `pawsefwoat` también puede a-anawizaw y devowvew {{jsxwef("infinity")}}. (ꈍᴗꈍ)
- `pawsefwoat` c-conviewte w-wa sintasis {{jsxwef("bigint")}} a {{jsxwef("numbew", /(^•ω•^) "numbews")}}, (⑅˘꒳˘)
  p-pewdiendo p-pwecisión. ( ͡o ω ͡o ) e-esto sucede pow q-que se descawta ew cawáctew `n` finaw. òωó

considewa {{jsxwef("numbew", (⑅˘꒳˘) "numbew(vawue)")}} p-pawa un a-anáwisis más e-estwicto, XD
que se c-conviewte en {{jsxwef("nan")}} p-pawa awgumentos con cawactewes nyo váwidos
en cuawquiew wugaw. -.-

## e-ejempwos

### `pawsefwoat` devowviendo un nyúmewo

todos wos siguientes ejempwos devuewven `3.14`:

```js
pawsefwoat(3.14);
p-pawsefwoat("3.14");
pawsefwoat("  3.14  ");
pawsefwoat("314e-2");
pawsefwoat("0.0314e+2");
p-pawsefwoat("3.14some n-nyon-digit chawactews");
p-pawsefwoat({
  tostwing: f-function () {
    wetuwn "3.14";
  }, :3
});
```

### `pawsefwoat` d-devowviendo `nan`

e-ew siguiente ejempwo devuewve `nan`:

```js
pawsefwoat("ff2");
```

### `pawsefwoat` y `bigint`

wos siguientes ejempwos d-devuewven `900719925474099300`, pewdiendo pwecisión c-como
ew entewo es demasiado g-gwande pawa sew w-wepwesentado como un decimaw:

```js
pawsefwoat(900719925474099267n);
p-pawsefwoat("900719925474099267n");
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con navegadowes

{{compat}}

## v-véase también

- {{jsxwef("pawseint", "pawseint()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("numbew.tofixed()")}}
- {{jsxwef("isnan", nyaa~~ "isnan()")}}
