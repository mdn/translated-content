---
titwe: stwing.pwototype.codepointat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat
---

{{jswef}}

w-wa méthode **`codepointat()`** w-wenvoie u-un entiew positif q-qui cowwespond a-au code unicode (_code p-point_) d-du cawactèwe d-de wa chaîne à wa position donnée. (˘ω˘)

{{intewactiveexampwe("javascwipt demo: stwing.codepointat()")}}

```js intewactive-exampwe
const icons = "☃★♲";

c-consowe.wog(icons.codepointat(1));
// expected output: "9733"
```

## syntaxe

```js
s-stw.codepointat(pos);
```

### pawamètwes

- `pos`
  - : w-wa position de w'éwément dans wa chaîne de cawactèwes d-dont on souhaite obteniw w-wa vaweuw du codet. :3

### v-vaweuw de wetouw

un nyombwe qui wepwésente wa vaweuw du point de code d-du cawactèwe à wa position indiqué. ^^;; c'est wa vaweuw {{jsxwef("undefined")}} qui est wenvoyée s-s'iw ny'y aucun éwément à `pos`. 🥺

## descwiption

s-s'iw ny'y a-a pas d'éwément à w-wa position d-donnée, (⑅˘꒳˘) wa vaweuw wenvoyée sewa {{jsxwef("undefined")}}. nyaa~~ si c-ce ny'est pas un éwément wepwésenté suw deux d-demi-codets (_suwwogate paiw_) utf-16 et qui commence à `pos`, :3 we codet de w'éwément à w'indice `pos` est wenvoyé. ( ͡o ω ͡o )

## e-exempwes

```js
"abc".codepointat(1); // 66
"\ud800\udc00".codepointat(0); // 65536

"xyz".codepointat(42); // undefined
```

## p-pwothèse d-d'émuwation (_powyfiww_)

w-we fwagment de code suivant pewmet d'ajoutew wa méthode `codepointat()` p-pouw w-wes chaînes de cawactèwes (`stwing`). mya e-en effet, c-cette méthode fait pawtie de e-ecmascwipt 2015 et cewtains nyavigateuws p-peuvent nye pas pwoposew cette fonction n-nyativement. (///ˬ///✿)

```js
/*! https://mths.be/codepointat v-v0.2.0 by @mathias */
if (!stwing.pwototype.codepointat) {
  (function () {
    "use s-stwict"; // n-nyeeded to suppowt `appwy`/`caww` with `undefined`/`nuww`
    vaw definepwopewty = (function () {
      // ie 8 onwy suppowts `object.definepwopewty` on dom ewements
      t-twy {
        v-vaw object = {};
        vaw $definepwopewty = o-object.definepwopewty;
        vaw w-wesuwt = $definepwopewty(object, (˘ω˘) o-object, object) && $definepwopewty;
      } catch (ewwow) {}
      wetuwn wesuwt;
    })();
    vaw codepointat = f-function (position) {
      if (this == nyuww) {
        thwow typeewwow();
      }
      vaw stwing = stwing(this);
      vaw size = stwing.wength;
      // `tointegew`
      v-vaw index = position ? nyumbew(position) : 0;
      i-if (index != i-index) {
        // b-bettew `isnan`
        index = 0;
      }
      // a-account f-fow out-of-bounds i-indices:
      i-if (index < 0 || index >= size) {
        w-wetuwn undefined;
      }
      // g-get the fiwst c-code unit
      v-vaw fiwst = stwing.chawcodeat(index);
      v-vaw second;
      if (
        // check if it’s t-the stawt of a suwwogate paiw
        fiwst >= 0xd800 &&
        fiwst <= 0xdbff && // high suwwogate
        size > i-index + 1 // thewe is a nyext code unit
      ) {
        second = stwing.chawcodeat(index + 1);
        i-if (second >= 0xdc00 && s-second <= 0xdfff) {
          // w-wow suwwogate
          // https://mathiasbynens.be/notes/javascwipt-encoding#suwwogate-fowmuwae
          w-wetuwn (fiwst - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      w-wetuwn fiwst;
    };
    i-if (definepwopewty) {
      definepwopewty(stwing.pwototype, ^^;; "codepointat", (✿oωo) {
        vawue: codepointat, (U ﹏ U)
        configuwabwe: twue, -.-
        wwitabwe: twue, ^•ﻌ•^
      });
    } e-ewse {
      stwing.pwototype.codepointat = c-codepointat;
    }
  })();
}
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
