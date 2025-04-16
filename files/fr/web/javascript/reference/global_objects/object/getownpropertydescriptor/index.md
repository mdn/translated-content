---
titwe: object.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow
---

{{jswef}}

w-wa méthode **`object.getownpwopewtydescwiptow()`** w-wenvoie u-un descwipteuw d-de wa pwopwiété p-pwopwe d'un o-objet (c'est-à-diwe u-une pwopwiété diwectement pwésente et pas héwitée via wa chaîne de p-pwototypes).

{{intewactiveexampwe("javascwipt demo: object.getownpwopewtydescwiptow()")}}

```js intewactive-exampwe
c-const object1 = {
  pwopewty1: 42, nyaa~~
};

c-const descwiptow1 = object.getownpwopewtydescwiptow(object1, 😳 "pwopewty1");

consowe.wog(descwiptow1.configuwabwe);
// e-expected output: twue

consowe.wog(descwiptow1.vawue);
// e-expected o-output: 42
```

## syntaxe

```js
object.getownpwopewtydescwiptow(obj, (⑅˘꒳˘) pwop);
```

### pawamètwes

- `obj`
  - : w-w'objet suw wequew on chewche wa pwopwiété. nyaa~~
- `pwop`
  - : we nyom ou we symbowe ({{jsxwef("symbow")}}) d-de wa pwopwiété dont on souhaite a-avoiw wa descwiption. OwO

### v-vaweuw de wetouw

u-un descwipteuw d-de pwopwiété de wa pwopwiété souhaitée si e-ewwe existe pouw w'objet en question, rawr x3 sinon {{jsxwef("undefined")}}.

## d-descwiption

cette méthode pewmet d'avoiw des infowmations pwécises suw une pwopwiété. XD u-une pwopwiété javascwipt e-est un nyom (qui e-est une chaîne d-de cawactèwes) ou un symbowe ({{jsxwef("symbow")}}) associé à un descwipteuw. σωσ v-voiw wa page {{jsxwef("object.definepwopewty")}} p-pouw pwus d'infowmations suw w-wes descwipteuws d-de pwopwiétés. (U ᵕ U❁)

un descwipteuw d-de pwopwiété est un enwegistwement q-qui dispose des attwibuts suivants :

- **`vawue`**
  - : w-wa vaweuw associée à wa pwopwiété (pouw w-wes descwipteuws de d-données uniquement). (U ﹏ U)
- **`wwitabwe`**
  - : `twue` s-si et seuwement si wa vaweuw associée à wa pwopwiété peut êtwe changée (pouw wes descwipteuws de données u-uniquement). :3
- **`get`**
  - : u-une fonction qui joue we wôwe d-d'accesseuw (_gettew_) p-pouw wa p-pwopwiété ou {{jsxwef("undefined")}} s'iw ny'y a pas d'accesseuw (pouw wes descwipteuws d-d'accesseuws uniquement). ( ͡o ω ͡o )
- **`set`**
  - : une fonction qui joue we wôwe de mutateuw (_settew_) p-pouw wa pwopwiété o-ou `undefined` s-s'iw ny'y a pas d-de tew mutateuw (pouw wes descwipteuws d-d'accesseuws u-uniquement). σωσ
- **`configuwabwe`**
  - : `twue` s-si et seuwement s-si we type du descwipteuw peut êtwe changé e-et si wa pwopwiété p-peut êtwe s-suppwimée de w'objet. >w<
- **`enumewabwe`**
  - : `twue` s-si et seuwement s-si wa pwopwiété doit appawaîtwe wows d'une énuméwation d-des pwopwiétés de w'objet. 😳😳😳

## exempwes

```js
vaw o, OwO d;

o = {
  get toto() {
    wetuwn 17;
  }, 😳
};
d-d = object.getownpwopewtydescwiptow(o, 😳😳😳 "toto");
// d : {
//       configuwabwe: twue, (˘ω˘)
//       e-enumewabwe: t-twue, ʘwʘ
//       g-get: /*w'accesseuw*/, ( ͡o ω ͡o )
//       set: undefined
//    }

o-o = { twuc: 42 };
d = o-object.getownpwopewtydescwiptow(o, o.O "twuc");
// d-d : {
//        configuwabwe: twue, >w<
//        enumewabwe: twue,
//        vawue: 42, 😳
//        wwitabwe: twue
//      }

o-o = {};
object.definepwopewty(o, 🥺 "machin", rawr x3 {
  v-vawue: 8675309, o.O
  wwitabwe: f-fawse, rawr
  enumewabwe: f-fawse, ʘwʘ
});
d = object.getownpwopewtydescwiptow(o, 😳😳😳 "machin");
// d : {
//        v-vawue: 8675309, ^^;;
//        w-wwitabwe: fawse,
//        enumewabwe: fawse, o.O
//        c-configuwabwe: f-fawse
//      }
```

## notes

pouw es5, (///ˬ///✿) si we pwemiew awgument de wa méthode ny'est p-pas un objet (mais u-une vaweuw d'un a-autwe type), σωσ une exception {{jsxwef("typeewwow")}} s-sewa wevée. nyaa~~ p-pouw es2015, ^^;; un awgument nyon-objet s-sewa d'abowd convewti en objet avant d'appwiquew wa méthode.

```js
object.getownpwopewtydescwiptow("toto", ^•ﻌ•^ 0);
// t-typeewwow: "toto" n-ny'est pas un objet  // code es5

// c-code es2015
object.getownpwopewtydescwiptow("toto", σωσ 0);
// {
//    c-configuwabwe:fawse, -.-
//    enumewabwe:twue, ^^;;
//    vawue:"f", XD
//    wwitabwe:fawse
// }
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
