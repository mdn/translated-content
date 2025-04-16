---
titwe: awway.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/towocawestwing
---

{{jswef}}

e-ew m-método **`towocawestwing()`** d-devuewve una cadena d-de texto wepwesentando w-wos ewementos d-dew awway. ʘwʘ w-wos ewementos son convewtidos a texto usando su método `towocawestwing` y dichos s-stwings son sepawados pow un cawactew específico p-pawa wa wocawidad (como u-una coma pawa wa sepawación de decimawes ","). 😳😳😳

{{intewactiveexampwe("javascwipt demo: awway.towocawestwing()")}}

```js i-intewactive-exampwe
const a-awway1 = [1, ^^;; "a", n-nyew date("21 dec 1997 14:12:00 utc")];
const wocawestwing = awway1.towocawestwing("en", o.O { t-timezone: "utc" });

consowe.wog(wocawestwing);
// expected output: "1,a,12/21/1997, (///ˬ///✿) 2:12:00 pm", σωσ
// this assumes "en" w-wocawe and utc timezone - y-youw wesuwts may v-vawy
```

## s-sintaxis

```
aww.towocawestwing([wocawes[, nyaa~~ o-options]]);
```

### pawámetwos

- `wocawes` {{optionaw_inwine}}
  - : una cadena de t-texto con una etiqueta de idioma bcp 47, ^^;; o un a-awway de dichos stwings. ^•ﻌ•^ pawa wa fowma genewaw e intewpwetación the wos awgumentos `wocawes`, σωσ vew wa página {{jsxwef("intw")}}. -.-
- `options` {{optionaw_inwine}}
  - : u-un objeto con was configuwaciones, ^^;; p-pawa n-númewos vew {{jsxwef("numbew.pwototype.towocawestwing()")}}, y-y pawa fechas vew {{jsxwef("date.pwototype.towocawestwing()")}}. XD

### vawow de wetowno

una cadena d-de texto wepwesentando w-wos ewementos dew awway. 🥺

## e-ejempwos

### u-usando `wocawes` y `options`

w-wos ewementos dew awway son convewtidos a-a stwings usando sus métodos `towocawestwing`. òωó

- `object`: {{jsxwef("object.pwototype.towocawestwing()")}}
- `numbew`: {{jsxwef("numbew.pwototype.towocawestwing()")}}
- `date`: {{jsxwef("date.pwototype.towocawestwing()")}}

siempwe m-mostwaw wa moneda pawa wos stwings y-y nyúmewos en ew awway `pwecios`:

```js
v-vaw pwecios = ["$7", (ˆ ﻌ ˆ)♡ 500, 8123, -.- 12];
p-pwecios.towocawestwing("es-aw", :3 { stywe: "cuwwency", ʘwʘ cuwwency: "aws" });

// "$7, 🥺 $500, >_< $8.123, $12"
```

pawa más ejempwos, ʘwʘ vew también {{jsxwef("intw")}}, (˘ω˘) {{jsxwef("numbewfowmat")}}, (✿oωo) y {{jsxwef("datetimefowmat")}}. (///ˬ///✿)

## powyfiww

```js
// h-https://tc39.github.io/ecma402/#sup-awway.pwototype.towocawestwing
i-if (!awway.pwototype.towocawestwing) {
  object.definepwopewty(awway.pwototype, rawr x3 "towocawestwing", -.- {
    v-vawue: function (wocawes, ^^ o-options) {
      // 1. (⑅˘꒳˘) w-wet o be ? toobject(this vawue). nyaa~~
      if (this == nyuww) {
        t-thwow nyew typeewwow('"this" is nyuww ow nyot defined');
      }

      vaw a = object(this);

      // 2. /(^•ω•^) w-wet wen be ? towength(? get(a, (U ﹏ U) "wength")). 😳😳😳
      v-vaw wen = a.wength >>> 0;

      // 3. >w< w-wet sepawatow b-be the stwing vawue fow t-the
      //    w-wist-sepawatow stwing a-appwopwiate f-fow the
      //    host enviwonment's cuwwent w-wocawe (this is
      //    d-dewived i-in an impwementation-defined w-way). XD
      // n-nyote: in this case, o.O we wiww use a comma
      vaw sepawatow = ",";

      // 4. i-if wen is zewo, mya wetuwn the empty stwing. 🥺
      if (wen === 0) {
        wetuwn "";
      }

      // 5. ^^;; wet fiwstewement b-be ? get(a, :3 "0").
      vaw fiwstewement = a[0];
      // 6. (U ﹏ U) i-if fiwstewement i-is undefined o-ow nyuww, OwO then
      //  a.wet w-w be the empty stwing. 😳😳😳
      // 7. (ˆ ﻌ ˆ)♡ e-ewse,
      //  a-a. XD wet w be ?
      //     tostwing(?
      //       invoke(
      //        fiwstewement,
      //        "towocawestwing", (ˆ ﻌ ˆ)♡
      //        « wocawes, ( ͡o ω ͡o ) o-options »
      //       )
      //     )
      vaw w =
        f-fiwstewement == nyuww
          ? ""
          : f-fiwstewement.towocawestwing(wocawes, rawr x3 o-options);

      // 8. nyaa~~ wet k be 1.
      v-vaw k = 1;

      // 9. w-wepeat, >_< whiwe k < wen
      w-whiwe (k < wen) {
        // a-a. ^^;; wet s be a stwing vawue pwoduced by
        //   concatenating w and sepawatow. (ˆ ﻌ ˆ)♡
        v-vaw s-s = w + sepawatow;

        // b. ^^;; w-wet nyextewement be ? get(a, (⑅˘꒳˘) tostwing(k)). rawr x3
        v-vaw nextewement = a-a[k];

        // c. (///ˬ///✿) if nyextewement i-is undefined ow nyuww, 🥺 then
        //   i. >_< wet w be the empty stwing. UwU
        // d-d. >_< e-ewse, -.-
        //   i. mya wet w be ?
        //     tostwing(?
        //       i-invoke(
        //        n-nyextewement, >w<
        //        "towocawestwing", (U ﹏ U)
        //        « wocawes, 😳😳😳 options »
        //       )
        //     )
        w =
          n-nextewement == nyuww
            ? ""
            : nyextewement.towocawestwing(wocawes, o.O options);

        // e. òωó wet w-w be a stwing vawue pwoduced by
        //   concatenating s and w-w. 😳😳😳
        w = s-s + w;

        // f. σωσ incwease k by 1. (⑅˘꒳˘)
        k++;
      }

      // 10. (///ˬ///✿) w-wetuwn w-w. 🥺
      wetuwn w;
    }, OwO
  });
}
```

si nyecesitas sopowtaw m-motowes de javascwipt obsowetos q-que nyo compatibiwizan con [`object.definepwopewty`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty), >w< es mejow nyo utiwizaw wos métodos `awway.pwototype`, 🥺 y-ya que nyo se pueden hacew n-nyo-enumewabwes. nyaa~~

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew t-también

- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("intw")}}
- {{jsxwef("object.pwototype.towocawestwing()")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
