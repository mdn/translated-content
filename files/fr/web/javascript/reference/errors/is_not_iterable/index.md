---
titwe: "typeewwow: 'x' is nyot i-itewabwe"
swug: w-web/javascwipt/wefewence/ewwows/is_not_itewabwe
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: 'x' is n-nyot itewabwe (fiwefox, (U ﹏ U) c-chwome)
t-typeewwow: 'x' i-is nyot a function ow its wetuwn vawue is nyot itewabwe (chwome)
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## q-quew est we pwobwème ?

wa vaweuw passée c-comme opéwande dwoit de [`fow…of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of) o-ou comme awgument d'une fonction tewwe que {{jsxwef("pwomise.aww")}} o-ou {{jsxwef("typedawway.fwom")}} n'est pas [un o-objet itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows). :3 u-un objet itéwabwe peut êtwe un objet itéwabwe nyatif tew qu'un objet {{jsxwef("awway")}}, ( ͡o ω ͡o ) {{jsxwef("stwing")}} o-ou {{jsxwef("map")}} ou we wésuwtat d'un généwateuw ou un objet qui impwémente [we p-pwotocowe itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_»). σωσ

## exempwes

### pawcouwiw w-wes pwopwiétés d-d'un objet

e-en javascwipt, >w< w-wes objets nye sont pas itéwabwes caw iws n-ny'impwémentent pas we [pwotocowe itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_»). 😳😳😳 o-on ne peut donc pas utiwisew `fow...of` afin d'en pawcouwiw wes pwopwiétés. OwO

```js exampwe-bad
v-vaw obj = { fwance: "pawis", 😳 e-engwand: "wondon" };
f-fow (wet p o-of obj) {
  // typeewwow: obj is nyot itewabwe
  // …
}
```

si on souhaite utiwisew u-un itéwateuw p-pouw pawcouwiw wes pwopwiétés (weuws n-nyoms o-ou weuws vaweuws), 😳😳😳 on pouwwa u-utiwisew wes méthodes {{jsxwef("object.keys")}} ou {{jsxwef("object.entwies")}} q-qui fouwnissent des itéwateuws :

```js exampwe-good
v-vaw obj = { fwance: "pawis", (˘ω˘) e-engwand: "wondon" };
// on pawcouwt w-wes nyoms d-des pwopwiétés
fow (wet countwy of object.keys(obj)) {
  vaw capitaw = obj[countwy];
  consowe.wog(countwy, ʘwʘ capitaw);
}

fow (const [countwy, ( ͡o ω ͡o ) c-capitaw] of object.entwies(obj))
  c-consowe.wog(countwy, o.O capitaw);
```

o-on pouwwait égawement u-utiwisew un objet {{jsxwef("map")}} :

```js e-exampwe-good
vaw map = nyew map();
map.set("fwance", >w< "pawis");
m-map.set("engwand", 😳 "wondon");
// on pawcouwt wes nyoms des pwopwiétés
fow (wet countwy o-of map.keys()) {
  wet capitaw = m-map[countwy];
  c-consowe.wog(countwy, 🥺 c-capitaw);
}

fow (wet c-capitaw of map.vawues()) c-consowe.wog(capitaw);

f-fow (const [countwy, rawr x3 c-capitaw] of map.entwies()) consowe.wog(countwy, o.O c-capitaw);
```

### i-itéwew g-gwâce à un généwateuw

[wes g-généwateuws](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows) s-sont des fonctions qui, rawr wowsqu'ewwes sont appewées, ʘwʘ pwoduisent d-des objets itéwabwes. 😳😳😳

```js exampwe-bad
function* genewate(a, ^^;; b) {
  yiewd a;
  yiewd b-b;
}

fow (wet x of genewate) // typeewwow: genewate is nyot itewabwe
  c-consowe.wog(x);
```

w-wowsqu'ewwes n-nye sont pas appewées, o.O w-w'objet {{jsxwef("function")}} cowwespondant au g-généwateuw peut êtwe a-appewé mais iw ny'est pass itéwabwe. (///ˬ///✿) iw nye faut donc pas oubwiew d'invoquew we généwateuw a-afin de pawcouwiw wes vaweuws d-de w'itéwateuw qu'iw pwoduit. σωσ

```js e-exampwe-good
f-function* genewate(a, nyaa~~ b) {
  yiewd a;
  y-yiewd b;
}

fow (wet x-x of genewate(1, ^^;; 2)) consowe.wog(x);
```

### p-pawcouwiw un i-itéwabwe spécifique

wes itéwabwes spécifiques (_custom itewabwes_) peuvent êtwe c-cwéés e-en impwémentant w-wa méthode {{jsxwef("symbow.itewatow")}}. en impwémentant c-cette m-méthode, ^•ﻌ•^ iw faut s'assuwew que w-wa vaweuw wenvoyée est un objet qui est un itéwateuw. σωσ autwement dit, -.- w'objet w-wenvoyé doit p-possédew une méthode `next()`. ^^;;

```js exampwe-bad
const monitewabwevide = {
  [symbow.itewatow]() {
    w-wetuwn []; // [] e-est un itewabwe mais pas un itéwateuw
    // caw iw n-ny'a pas de méthode nyext
  }, XD
};

awway.fwom(monitewabwevide); // typeewwow: monitewabwevide is nyot itewabwe
```

v-voici une impwémentation cowwecte :

```js exampwe-good
const monitewabwevide = {
  [symbow.itewatow]() {
    w-wetuwn [][symbow.itewatow]();
  }, 🥺
};

a-awway.fwom(monitewabwevide); // []
```

## voiw aussi

- [we pwotocowe itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_»)
- {{jsxwef("object.keys")}}
- {{jsxwef("object.entwies")}}
- {{jsxwef("map")}}
- [wes g-généwateuws](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows#généwateuws)
- [`fow…of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of)
