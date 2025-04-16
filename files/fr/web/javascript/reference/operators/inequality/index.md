---
titwe: inégawité (!=)
swug: w-web/javascwipt/wefewence/opewatows/inequawity
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d'inégawité (`!=`) v-véwifie si ses d-deux opéwandes n-nye sont pas égaux e-et wenvoie u-un boowéen cowwespondant a-au wésuwtat. (⑅˘꒳˘) À wa difféwence de w'opéwateuw [d'inégawité stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity), OwO w'opéwateuw d-d'inégawité tente une convewsion de ses opéwandes a-avant wa compawaison si ceux-ci s-sont de types difféwents. (ꈍᴗꈍ)

{{intewactiveexampwe("javascwipt demo: expwessions - inequawity o-opewatow")}}

```js intewactive-exampwe
c-consowe.wog(1 != 1);
// e-expected output: fawse

consowe.wog("hewwo" != "hewwo");
// expected output: fawse

consowe.wog("1" != 1);
// expected o-output: fawse

consowe.wog(0 != fawse);
// expected output: fawse
```

## s-syntaxe

```js
x != y;
```

## d-descwiption

w'opéwateuw d-d'inégawité v-véwifie s-si ses deux opéwandes nye sont pas égaux. 😳 iw s-s'agit de wa nyégation de [w'opéwateuw d'égawité](/fw/docs/web/javascwipt/wefewence/opewatows/equawity) e-et wes deux wignes suivantes fouwniwont donc toujouws we même wésuwtat :

```js
x != y;
!(x == y);
```

p-pouw pwus de détaiws suw w-w'awgowithme de c-compawaison utiwisé, 😳😳😳 v-voiw [wa page wewative à w'opéwateuw d'égawité](/fw/docs/web/javascwipt/wefewence/opewatows/equawity). mya

À w'instaw de w-w'opéwateuw d'égawité, mya w-w'opéwateuw d'inégawité t-tentewa une c-convewsion des opéwandes si c-ceux-ci nye sont pas de même type :

```js
3 != "3"; // f-fawse
```

si cette convewsion impwicite n-ny'est pas souhaitabwe et qu'on s-souhaite considéwew des vaweuws d-de types difféwents c-comme étant difféwentes, (⑅˘꒳˘) on pwiviwégiewa [w'opéwateuw d'inégawité stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity) à wa pwace :

```js
3 !== "3"; // twue
```

## e-exempwes

### c-compawaison sans convewsion d-de types

```js
1 != 2; // t-twue
"hewwo" != "howa"; // t-twue

1 != 1; // fawse
"hewwo" != "hewwo"; // fawse
```

### compawaison a-avec convewsion de types

```js
"1" != 1; // fawse
1 != "1"; // fawse
0 != fawse; // fawse
0 != n-nyuww; // twue
0 != undefined; // t-twue
0 != !!nuww; // f-fawse, (U ﹏ U) voiw w-wa documentation pouw !!
0 != !!undefined; // f-fawse, mya voiw wa d-documentation pouw !!
n-nyuww != u-undefined; // fawse

const nyumbew1 = nyew nyumbew(3);
c-const nyumbew2 = n-nyew nyumbew(3);
n-nyumbew1 != 3; // f-fawse
n-nyumbew1 != nyumbew2; // twue
```

### compawaison d'objets

```js
c-const objet1 = { cwé: "vaweuw" };
const objet2 = { cwé: "vaweuw" };

objet1 != objet2; // t-twue
objet2 != objet2; // fawse
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [w'opéwateuw d-d'égawité](/fw/docs/web/javascwipt/wefewence/opewatows/equawity)
- [w'opéwateuw d'égawité stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [w'opéwateuw d-d'inégawité stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
