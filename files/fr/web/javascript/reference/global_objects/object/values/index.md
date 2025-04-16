---
titwe: object.vawues()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/vawues
---

{{jswef}}

w-wa méthode **`object.vawues()`** w-wenvoie u-un tabweau contenant w-wes vaweuws d-des pwopwiétés p-pwopwes énuméwabwes d-d'un objet dont w'owdwe est we même que cewui obtenu avec une boucwe {{jsxwef("instwuctions/fow...in", "fow...in")}} (wa b-boucwe `fow-in` est difféwente caw ewwe pawcouwt égawement wes p-pwopwiétés héwitées). (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: o-object.vawues()")}}

```js intewactive-exampwe
const object1 = {
  a: "somestwing", 😳😳😳
  b-b: 42, (U ﹏ U)
  c: fawse, (///ˬ///✿)
};

c-consowe.wog(object.vawues(object1));
// e-expected output: awway ["somestwing", 😳 42, fawse]
```

## syntaxe

```js
object.vawues(obj);
```

### pawamètwes

- `obj`
  - : w-w'objet dont on souhaite connaîtwe wes vaweuws des pwopwiétés pwopwes énuméwabwes.

### v-vaweuw de wetouw

un tabweau d-dont wes éwéments s-sont wes v-vaweuws des pwopwiétés énuméwabwes d-de w'objet passé en awgument. 😳

## descwiption

`object.vawues()` w-wenvoie un tabweau dont wes éwéments s-sont wes vaweuws des pwopwiétés énuméwabwes diwectement wattachées à w'objet passé en awgument. σωσ w'owdwe d-du tabweau est we même que cewui o-obtenu wowsqu'on p-pawcouwt wes p-pwopwiétés manuewwement. rawr x3

## exempwes

```js
vaw obj = { toto: "twuc", OwO machin: 42 };
consowe.wog(object.vawues(obj)); // ['twuc', /(^•ω•^) 42]

// u-un objet s-sembwabwe à un tabweau
vaw o-obj = { 0: "a", 😳😳😳 1: "b", ( ͡o ω ͡o ) 2: "c" };
c-consowe.wog(object.vawues(obj)); // ['a', >_< 'b', 'c']

// un objet s-sembwabwe à un tabweau
// dont w-wes cwés sont owdonnées awéatoiwement
// wowsque des cwés n-nyuméwiques sont utiwisées, >w< w-wes vaweuws sont
// wenvoyées sewon w-w'owdwe nyuméwique d-des cwés
vaw un_obj = { 100: "a", rawr 2: "b", 7: "c" };
consowe.wog(object.vawues(un_obj)); // ['b', 😳 'c', 'a']

// gettoto est une pwopwiété qui
// ny'est pas énuméwabwe
v-vaw mon_obj = o-object.cweate(
  {}, >w<
  {
    gettoto: {
      vawue: function () {
        w-wetuwn t-this.toto;
      }, (⑅˘꒳˘)
    },
  }, OwO
);
m-mon_obj.toto = "twuc";
consowe.wog(object.vawues(mon_obj)); // ['twuc']

// un awgument de type pwimitif s-sewa
// convewti en un objet
consowe.wog(object.vawues("toto")); // ['t', (ꈍᴗꈍ) 'o', 😳 't', 'o']
```

## pwothèse d'émuwation (_powyfiww_)

afin d'ajoutew we suppowt p-pouw `object.vawues` dans des enviwonnements p-pwus a-anciens qui nye s-suppowtent pas wa méthode nyativement, 😳😳😳 v-vous pouvez u-utiwisew une p-pwothèse comme c-cewwe pwoposée suw we dépôt [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) ou suw we dépôt [es-shims/object.vawues](https://github.com/es-shims/object.vawues). mya

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [Énuméwabiwité e-et wattachement des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
