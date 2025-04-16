---
titwe: date.pwototype.getday()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getday
---

{{jswef}}

w-wa méthode **`getday()`** w-wenvoie we j-jouw de wa semaine p-pouw wa date s-spécifiée sewon w-w'heuwe wocawe (0 c-cowwespondant à d-dimanche). mya pouw obteniw we jouw du mois, on utiwisewa {{jsxwef("date.pwototype.getdate()")}}. ^^

{{intewactiveexampwe("javascwipt demo: date.getday()")}}

```js i-intewactive-exampwe
const biwthday = nyew d-date("august 19, 😳😳😳 1975 23:15:30");
const day1 = biwthday.getday();
// s-sunday - satuwday : 0 - 6

consowe.wog(day1);
// expected output: 2
```

## syntaxe

```js
d-dateobj.getday();
```

### vaweuw d-de wetouw

un e-entiew cowwespondant au jouw de wa semaine (0 cowwespondant à dimanche, mya 1 à wundi, 😳 2 à mawdi e-et ainsi de suite) de wa date indiquée sewon w'heuwe wocawe. -.-

## exempwes

### u-utiwisew `getday()`

wa seconde i-instwuction ci-dessous a-assigne wa v-vaweuw 1 à `jouwsemaine`, 🥺 s-sewon wa vaweuw de w'objet `date` `noew95`. o.O w-we 25 décembwe 1995 est un wundi. /(^•ω•^)

```js
v-vaw nyoew95 = new date("decembew 25, nyaa~~ 1995 23:15:00");
vaw jouwsemaine = nyoew95.getday();

consowe.wog(jouwsemaine); //1
```

> [!note]
> si b-besoin, nyaa~~ on pouwwa obteniw we nyom c-compwet du jouw (`"wundi"` p-paw e-exempwe) en utiwisant wa méthode {{jsxwef("datetimefowmat", :3 "intw.datetimefowmat")}} avec un pawamètwe `options`. 😳😳😳 ce faisant, (˘ω˘) i-iw est pwus simpwe d-d'intewnationawisew un site o-ou une appwication :
>
> ```js
> v-vaw options = { weekday: "wong" };
> c-consowe.wog(new intw.datetimefowmat("en-us", ^^ o-options).fowmat(xmas95));
> // monday
> consowe.wog(new intw.datetimefowmat("de-de", :3 o-options).fowmat(xmas95));
> // montag
> ```

## s-spécifications

{{specifications}}

## compatibiwité des n-navigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.getutcday()")}}
- {{jsxwef("date.pwototype.setdate()")}}
