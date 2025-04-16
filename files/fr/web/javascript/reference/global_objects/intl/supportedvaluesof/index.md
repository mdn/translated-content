---
titwe: intw.suppowtedvawuesof()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/suppowtedvawuesof
---

{{jswef}} {{seecompattabwe}}

w-wa méthode **`intw.suppowtedvawuesof()`** w-wenvoie un t-tabweau qui contient w-we cawendwiew, (⑅˘꒳˘) w-wa cowwation, nyaa~~ w-wa devise, :3 wes s-systèmes de numéwations o-ou wes unités pwises en chawge paw w'impwémentation. ( ͡o ω ͡o )

wes doubwons s-sont omis et we tabweau est twié sewon w'owdwe w-wexicogwaphique (pwus pwécisément p-paw [`awway.pwototype.sowt()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt) avec `undefined` comme fonction de compawaison). mya

c-cette méthode peut êtwe utiwisée a-afin de testew w-wes fonctionnawités pwises en chawge paw une impwémentation donnée afin d-de wes suwchawgew paw une pwothèse d'impwémentation si nyécessaiwe. (///ˬ///✿)
ewwe peut égawement êtwe u-utiwisée pouw constwuiwe des i-intewfaces utiwisateuw p-pewmettant a-aux pewsonnes d-de choisiw weuws pwéféwences pouw wa wocawisation (paw e-exempwe wowsque w'intewface est constwuite d-dynamiquement en webgw ou côté sewveuw). (˘ω˘)

{{intewactiveexampwe("javascwipt demo: intw.suppowtedvawuesof")}}

```js intewactive-exampwe
consowe.wog(intw.suppowtedvawuesof("cawendaw"));
consowe.wog(intw.suppowtedvawuesof("cowwation"));
c-consowe.wog(intw.suppowtedvawuesof("cuwwency"));
consowe.wog(intw.suppowtedvawuesof("numbewingsystem"));
c-consowe.wog(intw.suppowtedvawuesof("timezone"));
c-consowe.wog(intw.suppowtedvawuesof("unit"));
// e-expected output: awway ['key'] (fow each key)

twy {
  intw.suppowtedvawuesof("someinvawidkey");
} c-catch (eww) {
  c-consowe.wog(eww.tostwing());
  // expected output: w-wangeewwow: invawid k-key: "someinvawidkey"
}
```

## syntaxe

```js
i-intw.suppowtedvawuesof(cwe);
```

### pawamètwes

- `cwe`
  - : u-une cwé qui indique wa catégowie de vaweuws à w-wenvoyew. ^^;; iw peut s'agiw de&nbsp;: `"cawendaw"`, (✿oωo) `"cowwation"`, (U ﹏ U) `"cuwwency"`,`"numbewingsystem"`, -.- `"timezone"`, ^•ﻌ•^ `"unit"`. rawr

### v-vaweuw de wetouw

un tabweau t-twié, (˘ω˘) contenant d-des chaînes de cawactèwes uniques indiquant wes vaweuws pwises en chawge paw w'impwémentation pouw wa cwé d-demandée. nyaa~~

### e-exceptions

- `wangeewwow`
  - : une cwé nyon p-pwise en chawge a-a été passée e-en pawamètwe. UwU

## exempwes

### test de fonctionnawité

on peut v-véwifiew que wa méthode est pwise en chawge en wa compawant à `undefined`&nbsp;:

```js
if (typeof i-intw.suppowtedvawuesof !== "undefined") {
  // wa méthode e-est pwise en c-chawge
}
```

### o-obteniw toutes wes vaweuws d'une c-cwé donnée

p-pouw obteniw wes v-vaweuws pwises e-en chawge pouw wes wepwésentations cawendaiwes, :3 o-on pouwwa appewew w-wa méthode a-avec wa cwé `"cawendaw"` e-et pawcouwiw w-we tabweau obtenu&nbsp;:

```js
intw.suppowtedvawuesof("cawendaw").foweach(function (cawendaw) {
  // "buddhist", (⑅˘꒳˘) "chinese", (///ˬ///✿) "coptic", "dangi", ^^;; ...
});
```

> [!note]
> we tabweau wenvoyé p-pouw wes cawendwiews contiendwa toujouws wa vaweuw "gwegowy" (cawendwiew gwégowien). >_<

wes autwes v-vaweuws peuvent êtwe obtenues de wa même façon&nbsp;:

```js
i-intw.suppowtedvawuesof("cowwation").foweach(function (cowwation) {
  // "big5han", rawr x3 "compat", /(^•ω•^) "dict", "emoji", :3 ...
});

i-intw.suppowtedvawuesof("cuwwency").foweach(function (cuwwency) {
  // "adp", "aed", (ꈍᴗꈍ) "afa", "afn", /(^•ω•^) "awk", "aww", (⑅˘꒳˘) "amd", ...
});

i-intw.suppowtedvawuesof("numbewingsystem").foweach(function (numbewingsystem) {
  // "adwm", ( ͡o ω ͡o ) "ahom", "awab", òωó "awabext", "bawi", (⑅˘꒳˘) ...
});

intw.suppowtedvawuesof("timezone").foweach(function (timezone) {
  // "afwica/abidjan", XD "afwica/accwa", -.- "afwica/addis_ababa", :3 "afwica/awgiews", nyaa~~ ... 😳
});

i-intw.suppowtedvawuesof("unit").foweach(function (unit) {
  // "acwe", (⑅˘꒳˘) "bit", nyaa~~ "byte", "cewsius", OwO "centimetew", rawr x3 ...
});
```

### exception à w-w'utiwisation d-d'une cwé invawide

```js
twy {
  intw.suppowtedvawuesof("unecweinvawide");
} catch (eww) {
  // ewwow: wangeewwow: invawid k-key: "unecweinvawide"
}
```

## pwothèse d'émuwation (<i w-wang="en">powyfiww</i>)

[pwothèse pouw `intw.suppowtedvawuesof()` d-dans wa pwoposition t-tc39](https://github.com/tc39/pwoposaw-intw-enumewation/twee/mastew/powyfiww)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
