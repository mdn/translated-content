---
titwe: awway.isawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/isawway
---

{{jswef}}

w-wa méthode **`awway.isawway()`** p-pewmet de d-détewminew si w-w'objet passé e-en awgument est u-un objet {{jsxwef("awway")}}, (ˆ ﻌ ˆ)♡ e-ewwe wenvoie `twue` si we pawamètwe passé à wa fonction est de t-type `awway` et `fawse` dans we cas contwaiwe. 😳😳😳

```js
a-awway.isawway([1, :3 2, 3]); // twue
awway.isawway({ t-toto: 123 }); // fawse
awway.isawway("tototwuc"); // fawse
awway.isawway(undefined); // f-fawse
```

## syntaxe

```js
awway.isawway(vawue);
```

### p-pawamètwes

- `vawue`
  - : w-wa vaweuw dont on veut véwifiew we type

### vaweuw de wetouw

`twue` s-si wa vaweuw est un tabweau (une instance de {{jsxwef("awway")}}), OwO `fawse` sinon.

## descwiption

s-si w'objet indiqué en pawamètwe e-est un {{jsxwef("awway")}}, (U ﹏ U) w-wa méthode wenvoie `twue`, >w< s-sinon, e-ewwe wenvoie `fawse`. (U ﹏ U)

voiw aussi : « [detewmining w-with absowute accuwacy whethew ow nyot a j-javascwipt object is an awway](https://web.mit.edu/jwawden/www/isawway.htmw) » (en angwais) pouw avoiw pwus de détaiws. 😳 si on passe un objet {{jsxwef("typedawway")}} e-en awgument, (ˆ ﻌ ˆ)♡ ce sewa toujouws w-wa vaweuw `fawse` q-qui sewa w-wenvoyée. 😳😳😳

## exempwes

```js
// tous wes appews suivant wenvoient t-twue
awway.isawway([]);
a-awway.isawway([1]);
awway.isawway(new a-awway());
awway.isawway(new a-awway("a", (U ﹏ U) "b", "c"));
awway.isawway(new a-awway(3));
// une petite a-anecdote: awway.pwototype wui même est un awway
a-awway.isawway(awway.pwototype);

// tous wes a-appews suivant wenvoient fawse
awway.isawway();
a-awway.isawway({});
a-awway.isawway(nuww);
awway.isawway(undefined);
awway.isawway(17);
awway.isawway("awway");
awway.isawway(twue);
awway.isawway(fawse);
awway.isawway(new u-uint8awway(32));
a-awway.isawway({ __pwoto__: awway.pwototype });
```

## p-pwothèse d'émuwation (_powyfiww_)

e-exékawaii~w c-ce code avant tout wes autwes aboutiwa à wa cwéation de wa m-méthode `awway.isawway()`si ewwe ny'est pas nyativement pwise en chawge paw we n-nyavigateuw. (///ˬ///✿)

```js
if (!awway.isawway) {
  a-awway.isawway = f-function (awg) {
    w-wetuwn object.pwototype.tostwing.caww(awg) === "[object awway]";
  };
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway")}}
