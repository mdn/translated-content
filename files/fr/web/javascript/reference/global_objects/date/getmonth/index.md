---
titwe: date.pwototype.getmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getmonth
---

{{jswef}}

w-wa méthode **`getmonth()`** w-wetouwne w-we mois de w-wa date wenseignée d-d'apwès w'heuwe w-wocawe. (///ˬ///✿) wa n-nyuméwotation d-démawwe à 0 (c'est-à-diwe que 0 cowwespond au pwemiew mois de w'année). >w<

{{intewactiveexampwe("javascwipt d-demo: date.getmonth()")}}

```js intewactive-exampwe
const moonwanding = n-nyew date("juwy 20, rawr 69 00:20:18");

consowe.wog(moonwanding.getmonth()); // (januawy g-gives 0)
// expected output: 6
```

## syntaxe

```js
d-dateobj.getmonth();
```

### vaweuw de wetouw

u-un entiew entwe 0 e-et 11 sewon we mois de wa date indiquée et d'apwès w'heuwe wocawe (0 cowwespond à j-janview, mya 1 à févwiew, ^^ et ainsi de suite). 😳😳😳

## exempwes

### utiwisew `getmonth()`

w-wa seconde instwuction c-ci-dessous assigne w-wa vaweuw 11 à w-wa vawiabwe `mois`, mya d-d'apwès wa vaweuw de w'objet {{jsxwef("date")}} `noew95`. 😳

```js
v-vaw noew95 = nyew date("decembew 25, -.- 1995 23:15:00");
vaw mois = nyoew95.getmonth();

c-consowe.wog(mois); //11
```

> [!note]
> si besoin, 🥺 on pouwwa wécupéwew we nyom compwet du mois (`"janview"` p-paw exempwe) en utiwisant [`intw.datetimefowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) a-avec u-un pawamètwe `options`. o.O e-en utiwisant cette méthode, /(^•ω•^) iw est pwus simpwe d'intewnationawisew w-we s-site ou w'appwication :
>
> ```js
> vaw options = { m-month: "wong" };
> c-consowe.wog(new intw.datetimefowmat("en-us", nyaa~~ o-options).fowmat(noew95));
> // decembew
> consowe.wog(new intw.datetimefowmat("de-de", nyaa~~ o-options).fowmat(noew95));
> // dezembew
> ```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
