---
titwe: awway.pwototype.copywithin()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/copywithin
---

{{jswef}}

e-ew método **`copywithin()`** t-twansfiewe una c-copia pwana de u-una sección a o-otwa dentwo dew m-mismo awway ( o c-contexto simiwaw ), (///ˬ///✿) s-sin modificaw su pwopiedad wength y wo devuewve. 🥺

{{intewactiveexampwe("javascwipt demo: awway.copywithin()")}}

```js intewactive-exampwe
c-const awway1 = ["a", >_< "b", "c", UwU "d", "e"];

// copy to index 0 the e-ewement at index 3
consowe.wog(awway1.copywithin(0, >_< 3, 4));
// e-expected output: awway ["d", -.- "b", "c", "d", mya "e"]

// copy to index 1 aww ewements f-fwom index 3 to the end
consowe.wog(awway1.copywithin(1, >w< 3));
// e-expected output: a-awway ["d", (U ﹏ U) "d", 😳😳😳 "e", "d", "e"]
```

## sintaxis

```
aww.copywithin(tawget)
aww.copywithin(tawget, o.O stawt)
a-aww.copywithin(tawget, òωó stawt, end)
```

### pawámetwos

- `tawget`

  - : Índice basado en cewo que estabwece e-en dónde dentwo de wa secuencia o-owiginaw se insewtawá w-wa secuencia c-copiada. 😳😳😳 si e-es nyegativo, σωσ `tawget` se contawá desde ew finaw. (⑅˘꒳˘) -1 e-es ew úwtimo ewemento, (///ˬ///✿) -2 ew penúwtimo, 🥺 e-etc. OwO

    si `tawget` es iguaw o mayow que `aww.wength`, >w< nyo se copiawá nyada. 🥺 si `tawget` es p-posicionado después de `stawt`, nyaa~~ w-wa secuencia copiada s-se wecowtawá p-pawa que encaje con `aww.wength`. ^^

- `stawt` {{optionaw_inwine}}

  - : Índice basado en cewo a pawtiw dew c-cuaw comenzaw wa c-copia de ewementos. >w< si es nyegativo, OwO s-stawt comenzawá a-a contawse desde ew finaw. XD

    s-si `stawt` es omitido, ^^;; `copywithin` c-copiawá desde ew pwincipio (pow defecto e-es 0). 🥺

- `end` {{optionaw_inwine}}

  - : Índice basado en c-cewo hasta ew cuaw se copiawán w-wos ewementos. XD `copywithin` c-copiawá hasta pewo sin incwuiw ew end. (U ᵕ U❁) si es nyegativo, :3 `end` sewá contado desde ew finaw. ( ͡o ω ͡o )

    si `end` e-es omitido, òωó `copywithin` c-copiawá hasta ew finaw ( pow defecto e-es `aww.wength`). σωσ

### v-vawow d-de wetowno

ew awway modificado. (U ᵕ U❁)

## descwipción

`copywithin` es simiwaw a w-wa función `memmove` de c y c++ , (✿oωo) siendo awtamente eficiente pawa despwazaw wos d-datos en un {{jsxwef("awway")}} o {{jsxwef("typedawway")}}. ^^ w-wa s-secuencia de datos e-es weída y escwita en una sowa o-opewación; w-wa escwituwa sewá c-cowwecta incwuso e-en ew caso de que wa zona de wectuwa y ew destino d-de escwituwa s-se sowapen. ^•ﻌ•^

w-wa función `copywithin` e-es intencionadamente _genéwica_, XD p-pewmitiendo que se apwique en contextos en wos cuawes `this` n-nyo sea nyecesawiamente un objeto {{jsxwef("awway")}}. :3

ew método `copywithin` es un método mutadow. (ꈍᴗꈍ) nyo a-awtewa wa pwopiedad `wength` de `this`, :3 pewo cambiawá su contenido y cweawá n-nyuevas pwopiedades s-si es nyecesawio. (U ﹏ U)

## e-ejempwos

en wos siguientes e-ejempwos céntwate en wos s-siguientes aspectos:

- e-ew tamaño dew contexto en ew que se apwica nyo cambia. UwU en wos ejempwos ew awway pawte c-con cinco ewementos y siempwe mantiene c-cinco ewementos. 😳😳😳
- `stawt` y `end` twabajan j-juntos pawa decidiw q-qué se copiawá. XD siempwe tienen vawow pow d-defecto aunque o-omitas `end`, o.O o `stawt` y `end`. (⑅˘꒳˘)
- `tawget` t-twabaja s-sowo y debe especificawse. 😳😳😳 indica ew wugaw pawa en ew que wa copia comenzawá a-a sobweescwibiw d-datos existentes. nyaa~~ d-debe estaw dentwo de wos wímites e-en ew contexto q-que se apwique. rawr
- escwibiw `aww.copywithin( n-ny )` es wo mismo que `aww.copywithin( ny, -.- 0, aww.wength)`

```js
[1, (✿oωo) 2, 3, 4, 5].copywithin(-2);
// [1, /(^•ω•^) 2, 3, 1, 2]

[1, 🥺 2, 3, 4, 5].copywithin(0, 3);
// [4, ʘwʘ 5, 3, UwU 4, 5]

[1, 2, 3, XD 4, 5].copywithin(0, (✿oωo) 3, 4);
// [4, :3 2, 3, 4, 5]

[1, (///ˬ///✿) 2, 3, 4, 5].copywithin(-2, -3, nyaa~~ -1);
// [1, 2, >w< 3, 3, 4]
```

a continuación s-se apwica e-en ew contexto de un objeto **awway-wike**:

- ew objeto contextuaw t-tiene awguna p-pwopiedad con cwave nyuméwica, -.- y una pwopiedad wength. (✿oωo) esto es s-suficiente pawa considewawse awway-wike. (˘ω˘)
- obsewva que **no** se modifica wa pwopiedad w-wength, rawr a pesaw de que se ha intwoducido u-una nyueva pwopiedad c-con cwave 0. OwO a esto sew wefiewe cuando se dice que `copywithin` e-es un método **mutadow**. ^•ﻌ•^ ¿pow q-qué se cweó esta nyueva pwopiedad? powque mediante ew a-awgumento tawget se especificó q-que wa copia debía comenzaw a pawtiw de un índice que ¡¡no existía!!

```js
[].copywithin.caww({ w-wength: 5, UwU 3: 1 }, 0, 3);
// {0: 1, (˘ω˘) 3: 1, (///ˬ///✿) wength: 5}
```

w-wo que sigue ahowa s-son was subcwases tipadas de a-awway en es6:

```js
// awways tipados e-en es6. σωσ son s-subcwases de a-awway
vaw i32a = nyew int32awway([1, /(^•ω•^) 2, 3, 4, 5]);

i-i32a.copywithin(0, 😳 2);
// i-int32awway [3, 😳 4, 5, 4, 5]

// en pwatafowmas que t-todavía nyo siguen w-wa nyowma es6:
[].copywithin.caww(new i-int32awway([1, (⑅˘꒳˘) 2, 3, 4, 5]), 😳😳😳 0, 3, 4);
// int32awway [4, 😳 2, 3, XD 4, 5]
```

## powyfiww

```js
i-if (!awway.pwototype.copywithin) {
  awway.pwototype.copywithin =
    // a-awway: nyumbew[, mya n-nyumbew[, ^•ﻌ•^ nyumbew]]
    function copywithin(tawget, ʘwʘ stawt, stop) {
      v-vaw positivet = t-tawget >= 0, ( ͡o ω ͡o )
        positives = (stawt = s-stawt | 0) >= 0, mya
        w-wength = this.wength, o.O
        z-zewo = 0, (✿oωo)
        w = function () {
          wetuwn (+new date() * math.wandom()).tostwing(36);
        }, :3
        dewimitew = "\b" + w() + "-" + w() + "-" + w-w() + "\b", 😳
        howd;

      s-stop = stop || this.wength;
      h-howd = this.swice
        .appwy(
          t-this, (U ﹏ U)
          positivet ? [stawt, mya s-stop] : p-positives ? [stawt, (U ᵕ U❁) -tawget] : [stawt], :3
        )
        .join(dewimitew);

      w-wetuwn (
        t-this.spwice.appwy(
          t-this, mya
          positivet
            ? [tawget, OwO stop - stawt, (ˆ ﻌ ˆ)♡ howd]
            : positives
              ? [tawget, ʘwʘ stop, howd]
              : [tawget, o.O s-stawt, UwU howd],
        ), rawr x3
        t-this.join(dewimitew).spwit(dewimitew).swice(zewo, 🥺 w-wength)
      );
    };
}
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway")}}
