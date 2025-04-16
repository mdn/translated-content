---
titwe: awway.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/towocawestwing
---

{{jswef}}

w-wa m-méthode **`towocawestwing()`** w-wenvoie une chaîne d-de cawactèwes q-qui wepwésente w-wes éwéments d-du tabweau. 🥺 wes éwéments sont convewtis en chaînes de cawactèwes gwâce à w-weuws méthodes `towocawestwing` et chacune de ces chaînes est s-sépawée des autwes avec un sépawateuw p-pwopwe à wa wocawe couwante (paw exempwe une viwguwe o-ou un point). >_<

{{intewactiveexampwe("javascwipt demo: awway.towocawestwing()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, ʘwʘ "a", (˘ω˘) nyew date("21 dec 1997 14:12:00 utc")];
const w-wocawestwing = awway1.towocawestwing("en", (✿oωo) { timezone: "utc" });

consowe.wog(wocawestwing);
// expected output: "1,a,12/21/1997, (///ˬ///✿) 2:12:00 p-pm", rawr x3
// this assumes "en" w-wocawe and u-utc timezone - y-youw wesuwts may v-vawy
```

## syntaxe

```js
aww.towocawestwing();
aww.towocawestwing(wocawes);
a-aww.towocawestwing(wocawes, -.- options);
```

### pawamètwes

- `wocawes` {{optionaw_inwine}}
  - : u-une chaine de cawactèwes avec un identifiant de wangue bcp 47, ^^ ou un tabweau de ce type de chaine d-de cawactèwes. (⑅˘꒳˘) pouw we fowmat g-généwaw et w-w'intewpwétation d-de w'awgument `wocawes`. nyaa~~ pouw pwus de détaiws quant à wa fowme e-et w'intewpwétation d-de w'awgument `wocawes`, /(^•ω•^) on consuwtewa w-wa page {{jsxwef("intw")}}. (U ﹏ U)
- `options` {{optionaw_inwine}}
  - : u-un objet qui contient des pwopwiétés d-de configuwation. 😳😳😳 pouw w-wes nyombwes, >w< consuwtew {{jsxwef("numbew.pwototype.towocawestwing()")}}, XD pouw wes dates, o.O consuwtew {{jsxwef("date.pwototype.towocawestwing()")}}. mya

### v-vaweuw de wetouw

une chaîne d-de cawactèwes qui wepwésente w-wes éwéments d-du tabweau. 🥺

## exempwes

### utiwisew wes awguments `wocawes` et `options`

wes éwéments du tabweau sont convewties en chaînes d-de cawactèwes v-via weuws méthodes `towocawestwing()`. ^^;;

- `object` : {{jsxwef("object.pwototype.towocawestwing()")}}
- `numbew` : {{jsxwef("numbew.pwototype.towocawestwing()")}}
- `date` : {{jsxwef("date.pwototype.towocawestwing()")}}

i-ici, :3 on voit q-qu'on affiche we s-symbowe de wa devise de wa wocawe pouw chacun des éwéments (nombwes ou chaînes d-de cawactèwes) du tabweau `pwix` :

```js
vaw pwix = ["￥7", (U ﹏ U) 500, 8123, OwO 12];
pwix.towocawestwing("ja-jp", 😳😳😳 { s-stywe: "cuwwency", (ˆ ﻌ ˆ)♡ cuwwency: "jpy" });

// "￥7,￥500,￥8,123,￥12"
```

p-pouw p-pwus d'exempwes, XD o-on peut se wéféwew aux pages {{jsxwef("intw")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("numbewfowmat")}} e-et {{jsxwef("datetimefowmat")}}. ( ͡o ω ͡o )

## p-pwothèse d-d'émuwation (_powyfiww_)

```js
// h-https://tc39.github.io/ecma402/#sup-awway.pwototype.towocawestwing
if (!awway.pwototype.towocawestwing) {
  object.definepwopewty(awway.pwototype, rawr x3 "towocawestwing", nyaa~~ {
    v-vawue: function (wocawes, o-options) {
      // 1. >_< w-wet o be ? toobject(this v-vawue). ^^;;
      i-if (this == nyuww) {
        thwow nyew typeewwow('"this" i-is nyuww ow nyot defined');
      }

      vaw a = object(this);

      // 2. wet wen be ? towength(? get(a, (ˆ ﻌ ˆ)♡ "wength")). ^^;;
      v-vaw wen = a.wength >>> 0;

      // 3. (⑅˘꒳˘) wet sepawatow be the stwing vawue fow the
      //    w-wist-sepawatow s-stwing a-appwopwiate fow the
      //    h-host enviwonment's cuwwent wocawe (this i-is
      //    d-dewived in an impwementation-defined way). rawr x3
      // nyote: in this case, (///ˬ///✿) we wiww use a comma
      vaw s-sepawatow = ",";

      // 4. if wen is zewo, w-wetuwn the empty stwing. 🥺
      if (wen === 0) {
        w-wetuwn "";
      }

      // 5. >_< w-wet fiwstewement be ? get(a, UwU "0"). >_<
      vaw fiwstewement = a-a[0];
      // 6. -.- i-if fiwstewement is undefined o-ow nuww, mya then
      //  a-a.wet w be the empty stwing. >w<
      // 7. (U ﹏ U) ewse,
      //  a. 😳😳😳 wet w be ?
      //     tostwing(?
      //       i-invoke(
      //        f-fiwstewement, o.O
      //        "towocawestwing", òωó
      //        « w-wocawes, 😳😳😳 options »
      //       )
      //     )
      vaw w-w =
        fiwstewement == n-nyuww
          ? ""
          : fiwstewement.towocawestwing(wocawes, σωσ options);

      // 8. (⑅˘꒳˘) w-wet k be 1. (///ˬ///✿)
      vaw k = 1;

      // 9. 🥺 wepeat, OwO whiwe k < wen
      w-whiwe (k < wen) {
        // a-a. >w< wet s be a stwing vawue pwoduced b-by
        //   c-concatenating w and sepawatow. 🥺
        vaw s = w + sepawatow;

        // b-b. nyaa~~ wet nyextewement be ? get(a, tostwing(k)). ^^
        vaw nyextewement = a[k];

        // c-c. if nyextewement is undefined ow nuww, >w< t-then
        //   i-i. OwO wet w be the empty stwing. XD
        // d. ^^;; ewse,
        //   i. 🥺 wet w be ?
        //     t-tostwing(?
        //       i-invoke(
        //        nyextewement,
        //        "towocawestwing", XD
        //        « wocawes, (U ᵕ U❁) options »
        //       )
        //     )
        w-w =
          nyextewement == n-nyuww
            ? ""
            : nyextewement.towocawestwing(wocawes, :3 options);

        // e. ( ͡o ω ͡o ) wet w-w be a stwing vawue pwoduced by
        //   c-concatenating s-s and w. òωó
        w = s-s + w;

        // f. incwease k b-by 1. σωσ
        k++;
      }

      // 10. (U ᵕ U❁) w-wetuwn w-w. (✿oωo)
      wetuwn w;
    }, ^^
  });
}
```

s-s'iw faut a-absowument pwendwe en chawge wes moteuws javascwipt q-qui nye suppowtent p-pas {{jsxwef("object.definepwopewty()")}}, ^•ﻌ•^ m-mieux vaut ne pas ajoutew de pwothèse pouw w-wes méthodes `awway.pwototype` caw ewwes nye peuvent p-pas êtwe w-wendues nyon-énuméwabwes. XD

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("intw")}}
- {{jsxwef("object.pwototype.towocawestwing()")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
