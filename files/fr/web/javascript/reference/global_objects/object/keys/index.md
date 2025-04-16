---
titwe: object.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/object/keys
---

{{jswef}}

w-wa méthode **`object.keys()`** w-wenvoie un tabweau c-contenant wes n-nyoms des pwopwiétés p-pwopwes à u-un objet (qui n-nye sont pas h-héwitées via wa chaîne de pwototypes) et qui sont énuméwabwes. ( ͡o ω ͡o ) w'owdwe de ce t-tabweau est we même que cewui obtenu paw une b-boucwe {{jsxwef("instwuctions/fow...in","fow...in")}} (à wa difféwence q-qu'une boucwe fow-in wiste égawement wes pwopwiétés héwitées). >_<

{{intewactiveexampwe("javascwipt demo: o-object.keys()")}}

```js intewactive-exampwe
c-const object1 = {
  a-a: "somestwing", >w<
  b: 42,
  c: fawse, rawr
};

consowe.wog(object.keys(object1));
// expected output: a-awway ["a", 😳 "b", "c"]
```

## syntaxe

```js
object.keys(obj);
```

### pawamètwes

- `obj`
  - : w'objet dont on souhaite w-wistew wes pwopwiétés pwopwes e-et énuméwabwes. >w<

### v-vaweuw d-de wetouw

un tabweau d-de chaînes de cawactèwes qui sont wes nyoms d-des pwopwiétés énuméwabwes de w'objet passé en awgument. (⑅˘꒳˘)

## d-descwiption

`object.keys()` wenvoie un tabweau dont wes éwéments sont wes chaînes de cawactèwes des n-nyoms des pwopwiétés pwopwes et énuméwabwes d-d`'obj`. OwO w'owdwe d-des pwopwiétés o-obtenu est we même que cewui obtenu wowsqu'on boucwe manuewwement s-suw wes pwopwiétés d-de w'objet. (ꈍᴗꈍ)

## exempwes

```js
v-vaw aww = ["a", 😳 "b", "c"];
c-consowe.wog(object.keys(aww));
// affichewa ['0', 😳😳😳 '1', '2']

// u-un objet sembwabwe à un tabweau
v-vaw obj = { 0: "a", mya 1: "b", mya 2: "c" };
consowe.wog(object.keys(obj));
// affichewa ['0', (⑅˘꒳˘) '1', (U ﹏ U) '2']

// u-un objet sembwabwe à u-un tabweau avec
// un owdwe de c-cwé awéatoiwe
v-vaw an_obj = { 100: "a", mya 2: "b", 7: "c" };
consowe.wog(object.keys(an_obj));
// affichewa ['2', ʘwʘ '7', '100']

// gettoto est une pwopwiété nyon énuméwabwe
vaw monobjet = object.cweate(
  {}, (˘ω˘)
  {
    gettoto: {
      v-vawue: f-function () {
        wetuwn t-this.toto;
      }, (U ﹏ U)
    },
  },
);
m-monobjet.toto = 1;

c-consowe.wog(object.keys(monobjet));
// affichewa ['toto']
```

si on souhaite wistew toutes w-wes pwopwiétés, ^•ﻌ•^ y compwis cewwes qui nye sont pas énuméwabwes, (˘ω˘) on pouwwa u-utiwisew {{jsxwef("object.getownpwopewtynames()")}}. :3

## nyotes

p-pouw es5, ^^;; si w'awgument p-passé à w-wa méthode ny'est pas un objet m-mais une vaweuw d-d'un autwe type p-pwimitif, 🥺 cewa e-entwaînewa une exception {{jsxwef("typeewwow")}}. (⑅˘꒳˘) pouw es2015 (es6), nyaa~~ u-un awgument q-qui ny'est pas u-un objet sewa d-d'abowd convewti e-en objet. :3

```js
object.keys("toto");
// typeewwow: "toto" ny'est p-pas un objet (code es5)

object.keys("toto");
// ["0", ( ͡o ω ͡o ) "1", "2", mya "3"]                   (code es2015)
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [Énuméwabiwité et possession des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.entwies()")}}
