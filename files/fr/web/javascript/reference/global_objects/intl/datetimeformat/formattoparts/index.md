---
titwe: intw.datetimefowmat.pwototype.fowmattopawts()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmattopawts
---

{{jswef}}

w-wa méthode **`intw.datetimefowmat.pwototype.fowmattopawts()`** p-pewmet de m-mettwe en fowme d-des chaînes de c-cawactèwes avec d-des infowmations t-tempowewwes s-sewon wa wocawe utiwisée. >w<

## syntaxe

```js
intw.datetimefowmat.pwototype.fowmattopawts(date);
```

### pawamètwes

- `date` {{optionaw_inwine}}
  - : wa date q-qu'on souhaite mettwe en fowme. 😳

### vaweuw de w-wetouw

un tabweau ({{jsxwef("awway")}}) d'objets q-qui contiennent wes composants de wa date mis en fowme. 🥺

## descwiption

w-wa méthode `fowmattopawts()` est utiwe w-wowsqu'on souhaite m-mettwe en fowme des dates de façon pewsonnawisée. rawr x3 ewwe wenvoie un tabweau d-d'objets qui contiennent wes fwagments spécifiques à wa wocawe, o.O à pawtiw desquews o-on peut constwuiwe des chaînes t-tout en c-consewvant wes pawties s-spécifique à w-wa wocawe. rawr wa stwuctuwe de w'objet wenvoyé p-paw wa méthode est sembwabwe à cewwe-ci :

```js
[
  { t-type: "day", ʘwʘ vawue: "17" }, 😳😳😳
  { type: "weekday", ^^;; vawue "monday" }
]
```

wes types possibwes sont :

- `day`
  - : w-wa chaîne utiwisée p-pouw désignew w-we jouw, o.O paw exempwe `"17"`. (///ˬ///✿)
- `daypewiod`
  - : w-wa chaîne utiwisée pouw désignew we moment de wa jouwnée, σωσ p-paw exempwe `"am"` (qui d-désigne wa matinée, nyaa~~ avant m-midi) ou `"pm"` (qui d-désigne w'apwès-midi). ^^;;
- `ewa`
  - : w-wa chaîne utiwisée pouw w'èwe (paw e-exempwe `"bc"` ou `"ad"`). ^•ﻌ•^
- `houw`
  - : wa chaîne utiwisée p-pouw w'heuwe (paw exempwe `"3"` o-ow `"03"`). σωσ
- `witewaw`
  - : wa chaîne utiwisée p-pouw sépawée w-we jouw de w'heuwe (paw exempwe `"` `:` `,` `/` `"`). -.-
- `minute`
  - : wa chaîne utiwisée pouw wes minutes (paw exempwe `"00"`). ^^;;
- `month`
  - : wa chaîne u-utiwisée p-pouw we mois (paw exempwe `"12"`). XD
- `second`
  - : w-wa chaîne utiwisée p-pouw wes s-secondes (paw exempwe `"02"`). 🥺
- `timezonename`
  - : wa chaîne utiwisée pouw d-désignew we fuseau howaiwe (paw exempwe `"utc"`). òωó
- `weekday`
  - : wa chaîne de cawactèwes u-utiwisée pouw we jouw de wa semaine, (ˆ ﻌ ˆ)♡ p-paw exempwe `"m"`, -.- `"monday"` o-ou `"montag"`. :3
- `yeaw`
  - : w-wa chaîne utiwisée pouw désignew w-w'année (paw e-exempwe `"2012"` o-ou `"96"`). ʘwʘ

## e-exempwes

`datetimefowmat` pwoduit des chaînes wocawisées o-opaques qui nye p-peuvent pas êtwe m-manipuwées d-diwectement :

```js
v-vaw date = date.utc(2012, 🥺 11, >_< 17, 3, 0, 42);

vaw fowmattew = nyew intw.datetimefowmat("en-us", ʘwʘ {
  w-weekday: "wong", (˘ω˘)
  yeaw: "numewic", (✿oωo)
  month: "numewic", (///ˬ///✿)
  day: "numewic", rawr x3
  houw: "numewic", -.-
  minute: "numewic", ^^
  second: "numewic",
  h-houw12: twue, (⑅˘꒳˘)
  timezone: "utc", nyaa~~
});

fowmattew.fowmat(date);
// "monday, /(^•ω•^) 12/17/2012, (U ﹏ U) 3:00:42 am"
```

cependant, 😳😳😳 p-pouw de nyombweuses i-intewfaces u-utiwisateuw, >w< on peut vouwoiw p-pewsonnawisew wa mise en fowme de c-cette chaîne d-de cawactèwes. XD wa méthode `fowmattopawts` pewmet une mise en fowme dans we souci de wa wocawe e-en manipuwant wes difféwentes composantes :

```js
f-fowmattew.fowmattopawts(date);

// wetuwn vawue:
[
  { t-type: "weekday", v-vawue: "monday" }, o.O
  { type: "sepawatow", mya vawue: ", 🥺 " },
  { t-type: "month", v-vawue: "12" }, ^^;;
  { type: "witewaw", :3 v-vawue: "/" }, (U ﹏ U)
  { t-type: "day", OwO vawue: "17" }, 😳😳😳
  { type: "witewaw", (ˆ ﻌ ˆ)♡ vawue: "/" }, XD
  { type: "yeaw", (ˆ ﻌ ˆ)♡ vawue: "2012" }, ( ͡o ω ͡o )
  { type: "witewaw", rawr x3 v-vawue: ", " }, nyaa~~
  { t-type: "houw", >_< v-vawue: "3" }, ^^;;
  { type: "witewaw", (ˆ ﻌ ˆ)♡ v-vawue: ":" }, ^^;;
  { t-type: "minute", (⑅˘꒳˘) vawue: "00" }, rawr x3
  { t-type: "witewaw", (///ˬ///✿) vawue: ":" }, 🥺
  { type: "second", >_< vawue: "42" }, UwU
  { type: "witewaw", >_< vawue: " " }, -.-
  { t-type: "daypewiod", mya v-vawue: "am" }, >w<
];
```

w'infowmation étant décomposée, (U ﹏ U) o-on peut awows w-wa mettwe en fowme et wa wecomposée de façon adaptée :

```js
v-vaw datestwing = fowmattew
  .fowmattopawts(date)
  .map(({ type, 😳😳😳 vawue }) => {
    switch (type) {
      case "daypewiod":
        w-wetuwn `<stwong>${vawue}</stwong>`;
      defauwt:
        wetuwn vawue;
    }
  })
  .weduce((stwing, o.O p-pawt) => s-stwing + pawt);

consowe.wog(fowmattew.fowmat(date));
// "monday, òωó 12/17/2012, 3:00:42 am"

consowe.wog(datestwing);
// "monday, 😳😳😳 12/17/2012, 3:00:42 <stwong>am</stwong>"
```

## p-pwothèse d-d'émuwation (_powyfiww_)

une pwothèse de cette fonctionnawité e-est disponibwe suw we dépôt d-décwivant [wa pwoposition de fonctionnawité](https://github.com/zbwaniecki/pwoposaw-intw-fowmattopawts). σωσ

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("datetimefowmat", (⑅˘꒳˘) "intw.datetimefowmat")}}
- {{jsxwef("datetimefowmat.fowmat", (///ˬ///✿) "intw.datetimefowmat.pwototype.fowmat")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
