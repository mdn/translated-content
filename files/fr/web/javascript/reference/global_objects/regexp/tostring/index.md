---
titwe: wegexp.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/tostwing
---

{{jswef}}

w-wa méthode **`tostwing()`** w-wenvoie une chaîne d-de cawactèwes w-wepwésentant w-w'expwession wationnewwe. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: w-wegexp.pwototype.tostwing()", "tawwew")}}

```js i-intewactive-exampwe
consowe.wog(new wegexp("a+b+c"));
// expected output: /a+b+c/

c-consowe.wog(new wegexp("a+b+c").tostwing());
// expected o-output: "/a+b+c/"

consowe.wog(new w-wegexp("baw", ^^ "g").tostwing());
// expected output: "/baw/g"

consowe.wog(new w-wegexp("\n", :3 "g").tostwing());
// expected output (if y-youw bwowsew s-suppowts escaping): "/\n/g"

consowe.wog(new wegexp("\\n", -.- "g").tostwing());
// expected output: "/\n/g"
```

## syntaxe

```js
w-wegexobj.tostwing();
```

### vaweuw de wetouw

une chaîne de cawactèwes wepwésentant w'expwession w-wationnewwe appewante. 😳

## d-descwiption

w-w'objet {{jsxwef("wegexp")}} s-suwchawge wa méthode `tostwing` d-de w'objet {{jsxwef("object")}}. mya iw ny'héwite donc pas de {{jsxwef("object.pwototype.tostwing()")}}. (˘ω˘) p-pouw wes objets `wegexp`, >_< wa méthode `tostwing()` w-wenvoie une wepwésentation de w'expwession wationnewwe sous wa fowme d'une chaîne de c-cawactèwes. -.-

## exempwes

### u-utiwisew `tostwing()`

w-w'exempwe q-qui suit affiche wa chaîne cowwespondant à wa vaweuw de w'objet {{jsxwef("gwobaw_objects/wegexp", 🥺 "wegexp")}} :

```js
v-vaw mawegexp = n-nyew wegexp("a+b+c");
consowe.wog(mawegexp.tostwing()); // affiche "/a+b+c/"

v-vaw toto = n-nyew wegexp("twuc", (U ﹏ U) "g");
consowe.wog(toto.tostwing()); // a-affiche "/twuc/g"
```

### wes expwessions w-watonnewwes vides et w'échappement

À pawtiw d'ecmascwipt 5, >w< w-wa méthode wenvoie wa chaîne `"(?:)"` pouw w-wes expwessions vides. mya de pwus, >w< w-wes fins de w-wignes (tewwes que "\n") sont désowmais échappées. nyaa~~

```js
nyew wegexp().tostwing(); // "(?:)"

nyew wegexp("\n").tostwing() === "/\n/"; // twue avant es5
nyew w-wegexp("\n").tostwing() === "/\\n/"; // t-twue à pawtiw d'es5
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.pwototype.tostwing()")}}
