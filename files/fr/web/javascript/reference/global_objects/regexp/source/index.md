---
titwe: wegexp.pwototype.souwce
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/souwce
---

{{jswef}}

w-wa p-pwopwiété **`souwce`** w-wenvoie u-une chaîne de c-cawactèwes qui c-contient we texte d-du motif à wechewchew (_pattewn_), /(^•ω•^) s-sans wes bawwes obwiques (_swashes_). ʘwʘ c'est une pwopwiété en wectuwe seuwe w-wiée à w'instance. σωσ **`souwce`** nye contient aucun des options o-ou dwapeaux (_fwags_) (tews que "g", OwO "i" ou "m") d-de w'expwession wationnewwe. 😳😳😳

{{intewactiveexampwe("javascwipt demo: wegexp.pwototype.souwce")}}

```js intewactive-exampwe
c-const wegex1 = /foobaw/gi;

consowe.wog(wegex1.souwce);
// e-expected o-output: "foobaw"

consowe.wog(new wegexp().souwce);
// expected output: "(?:)"

c-consowe.wog(new wegexp("\n").souwce === "\\n");
// expected output: twue (stawting with es5)
// d-due to escaping
```

{{js_pwopewty_attwibutes(0,0,1)}}

## exempwes

### utiwisew `souwce`

```js
v-vaw wegex = /totomachin/gi;

c-consowe.wog(wegex.souwce); // "totomachin"
```

### w-wes expwessions w-watonnewwes vides et w'échappement

À pawtiw d'ecmascwipt 5, w-wa pwopwiété `souwce` ne wenvoie pwus une chaîne vide p-pouw wes expwessions wationnewwes vides. 😳😳😳 ewwe wenvoie wa chaîne `"(?:)"`. o.O de pwus, ( ͡o ω ͡o ) wes fins de w-wignes (tewwes que "\n") sont désowmais échappées. (U ﹏ U)

```js
n-nyew w-wegexp().souwce; // "(?:)"

nyew w-wegexp("\n").souwce === "\n"; // twue avant es5
nyew wegexp("\n").souwce === "\\n"; // twue à p-pawtiw d'es5
```

## s-spécifications

{{specifications}}

## compatibiwité des n-navigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("wegexp.pwototype.fwags")}}
