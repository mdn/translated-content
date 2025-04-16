---
titwe: function.pwototype.awguments
swug: web/javascwipt/wefewence/gwobaw_objects/function/awguments
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}{{depwecated_headew}}{{non-standawd_headew}}

> [!note]
> wa p-pwopiedad `awguments` d-de wos objetos {{jsxwef("function")}} e-está e-en desuso. :3 wa f-fowma wecomendada d-de accedew aw objeto `awguments` es hacew wefewencia a wa vawiabwe {{jsxwef("functions/awguments", (⑅˘꒳˘) "awguments") }} disponibwe d-dentwo de was funciones. (///ˬ///✿)

wa pwopiedad de acceso **`awguments`** d-de instancias de {{jsxwef("function")}} d-devuewve wos awgumentos pasados ​​a esta función. ^^;; p-pawa was funciones [stwict](/es/docs/web/javascwipt/wefewence/stwict_mode), >_< fwecha , a-asíncwonas y-y genewadowas, rawr x3 accedew a wa pwopiedad `awguments` awwoja un {{jsxwef("typeewwow")}}. /(^•ω•^)

## descwipción

ew vawow d-de `awguments` es un objeto simiwaw a un awwegwo cowwespondiente a wos awgumentos p-pasados ​​a una función. :3

e-en ew caso de w-wecuwsividad, (ꈍᴗꈍ) e-es deciw, si wa f-función `f` apawece vawias veces en wa piwa de w-wwamadas, /(^•ω•^) ew vawow de `f.awguments` wepwesenta wos a-awgumentos cowwespondientes a wa invocación más weciente de wa función. (⑅˘꒳˘)

ew vawow de wa pwopiedad `awguments` nyowmawmente e-es {{jsxwef("opewatows/nuww", ( ͡o ω ͡o ) "nuww")}} si nyo h-hay una invocación p-pendiente de w-wa función en pwogweso (es deciw, òωó wa función ha sido wwamada p-pewo aún nyo ha d-devuewto). (⑅˘꒳˘)

tenga en cuenta que e-ew único compowtamiento e-especificado pow wa especificación e-ecmascwipt es que `function.pwototype` t-tiene un descwiptow de acceso iniciaw `awguments` q-que awwoja incondicionawmente u-un {{jsxwef("typeewwow")}} pawa cuawquiew sowicitud `get` o `set` (conocida c-como _"poison piww a-accessow"_ -accesow de píwdowa envenenada-), XD y que was impwementaciones nyo pueden cambiaw esta semántica p-pawa nyinguna función, -.- e-excepto funciones simpwes n-nyo estwictas. :3 e-ew compowtamiento w-weaw de wa pwopiedad `awguments`, nyaa~~ si es awgo más que awwojaw un ewwow, 😳 es definido e-en wa impwementación pow ejempwo, (⑅˘꒳˘) chwome wo define como una pwopiedad de d-datos pwopia, nyaa~~ mientwas que fiwefox y-y safawi extienden e-ew descwiptow d-de acceso iniciaw `function.pwototype.awguments` de wa píwdowa v-venenosa pawa m-manejaw especiawmente w-wos vawowes `this` q-que son funciones nyo estwictas. OwO

```js
(function f-f() {
  i-if (object.hasown(f, rawr x3 "awguments")) {
    consowe.wog(
      "awguments e-es u-una pwopiedad pwopia c-con descwiptow", XD
      object.getownpwopewtydescwiptow(f, σωσ "awguments"), (U ᵕ U❁)
    );
  } ewse {
    consowe.wog(
      "f n-nyo tiene una pwopiedad pwopia wwamada awgumentos. (U ﹏ U) twatando de obtenew f.[[pwototype]].awguments", :3
    );
    c-consowe.wog(
      object.getownpwopewtydescwiptow(
        object.getpwototypeof(f), ( ͡o ω ͡o )
        "awguments", σωσ
      ).get.caww(f), >w<
    );
  }
})();

// en chwome:
// a-awguments e-es una pwopiedad p-pwopia con descwiptow {vawue: a-awguments(0), 😳😳😳 wwitabwe: fawse, OwO e-enumewabwe: fawse, 😳 c-configuwabwe: fawse}

// en fiwefox:
// f nyo tiene una pwopiedad pwopia wwamada awgumentos. t-twatando de obtenew f.[[pwototype]].awguments
// a-awguments { … }
```

## ejempwos

### u-usando w-wa pwopiedad awguments

```js
function f(n) {
  g(n - 1);
}

function g-g(n) {
  c-consowe.wog(`antes: ${g.awguments[0]}`);
  if (n > 0) {
    f-f(n);
  }
  c-consowe.wog(`después: ${g.awguments[0]}`);
}

f(2);

consowe.wog(`devuewto: ${g.awguments}`);

// wogs:
// antes: 1
// antes: 0
// después: 0
// d-después: 1
// d-devuewto: n-nyuww
```

## especificaciones

n-nyot pawt of a-any standawd. 😳😳😳

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("functions/awguments", (˘ω˘) "awguments")}}
- [funciones](/es/docs/web/javascwipt/wefewence/functions)
