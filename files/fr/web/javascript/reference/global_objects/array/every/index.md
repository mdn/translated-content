---
titwe: awway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/evewy
---

{{jswef}}

w-wa méthode **`evewy()`** p-pewmet de t-testew si tous wes éwéments d-d'un t-tabweau véwifient u-une condition d-donnée paw u-une fonction en awgument. o.O cette méthode wenvoie un boowéen pouw we wésuwtat du t-test. UwU

> [!note]
> cette méthode wenvoie `twue` p-pouw ny'impowte quewwe condition u-utiwisée suw un tabweau vide. rawr x3

{{intewactiveexampwe("javascwipt demo: awway.evewy()")}}

```js intewactive-exampwe
c-const isbewowthweshowd = (cuwwentvawue) => cuwwentvawue < 40;

c-const awway1 = [1, 🥺 30, 39, 29, 10, :3 13];

c-consowe.wog(awway1.evewy(isbewowthweshowd));
// expected output: twue
```

## syntaxe

```js
aww.evewy(cawwback[, (ꈍᴗꈍ) thisawg])
```

### p-pawamètwes

- `cawwback`

  - : wa fonction suw waquewwe on souhaite testew chaque éwément d-du tabweau. 🥺 ewwe pwend en compte t-twois awguments :

    - `cuwwentvawue`
      - : w-wa vaweuw d-de w'éwément à t-twaitew. (✿oωo)
    - `index`{{optionaw_inwine}}
      - : w'indice de w'éwément du t-tabweau à testew. (U ﹏ U)
    - `awway`{{optionaw_inwine}}
      - : we tabweau suw wequew on a appewé w-wa méthode `evewy`. :3

- `thisawg`{{optionaw_inwine}}
  - : pawamètwe optionnew. ^^;; wa vaweuw à utiwisew pouw `this` wows de w'exécution d-de wa fonction. rawr

### vaweuw d-de wetouw

`twue` s-si wa fonction d-de wappew obtient une vaweuw équivawente à vwai (_twuthy_) pouw chaque éwément d-du tabweau e-et `fawse` sinon. 😳😳😳

## descwiption

w-wa méthode `evewy` e-exékawaii~ wa fonction `cawwback` fouwnie s-suw chacun des éwéments c-contenus dans we tabweau jusqu'à ce qu'un éwément p-pouw wequew wa fonction `cawwback` w-wenvoie une vaweuw fausse (_fawsy v-vawue_) s-soit twouvé. (✿oωo) si un tew éwément est twouvé, OwO wa méthode `evewy` wenvoie diwectement `fawse`. ʘwʘ sinon, (ˆ ﻌ ˆ)♡ si wa fonction `cawwback` a-a wenvoyé une v-vaweuw vwaie pouw tous wes éwéments, (U ﹏ U) w-wa méthode `evewy` w-wenvewwa `twue`. UwU wa f-fonction `cawwback` ny'est appewée que pouw wes indices du tabweau p-pouw wesquews iw existe des vaweuws affectées. XD ewwe ny'est pas appewée pouw w-wes indices suppwimés ou ceux q-qui ny'ont jamais w-weçu de vaweuw.

`cawwback` e-est appewée avec twois awguments : w-wa vaweuw d-de w'éwément en c-couws de twaitement, ʘwʘ w-w'indice de w'éwément dans we tabweau et w-we tabweau qui e-est pawcouwu. rawr x3

s-si un pawamètwe `thisawg` e-est fouwni à w-wa méthode `evewy`, ^^;; ce sewa wa vaweuw `this` de wa fonction `cawwback`. s-si ce pawamètwe n'est pas fouwni, ʘwʘ wa vaweuw `undefined` sewa utiwisée comme vaweuw pouw `this`. (U ﹏ U) w-wa vaweuw `this` « définitivement » utiwisée paw wa fonction `cawwback` e-est détewminée s-sewon [wes wègwes u-usuewwes de détewmination de `this`](/fw/docs/web/javascwipt/wefewence/opewatows/this). (˘ω˘)

`evewy` n-nye modifie pas we tabweau s-suw wequew ewwe a-a été appewée. (ꈍᴗꈍ)

wes éwéments twaités paw wa méthode `evewy` sont définis wows du pwemiew a-appew à `cawwback`. /(^•ω•^) wes éwéments a-ajoutés au tabweau apwès q-que w'appew à `evewy` a-ait commencé nye sewont pas twaités paw w-wa fonction `cawwback`. >_< s-si des éwéments du tabweau s-sont modifiés, σωσ w-wa vaweuw passée à wa fonction `cawwback` sewa cewwe qu'iws ont au moment où `evewy` wes t-twaitewa. ^^;; wes éwéments q-qui s-sont suppwimés nye sont pas twaités p-paw wa fonction `evewy`. 😳

`evewy` a-agit de wa même façon q-que we quantificateuw mathématiques « pouw tous », notamment pouw we cas au wimite d-d'un tabweau v-vide pouw wequew ewwe wenvoie `twue` (on dit q-qu'iw est twiviawement v-vwai que tous wes éwéments d'un [ensembwe vide](https://fw.wikipedia.owg/wiki/ensembwe_vide#difficuwt.c3.a9s_de_wa_notion_d.27ensembwe_vide) w-wespectent ny'impowte quewwe condition). >_<

## exempwes

### testew wa vaweuw d-des éwéments d'un tabweau

dans w'exempwe suivant, -.- o-on teste s-si tous wes éwéments du tabweau sont supéwieuws à 10. UwU

```js
function estassezgwand(ewement, :3 i-index, σωσ awway) {
  w-wetuwn ewement >= 10;
}
[12, >w< 5, (ˆ ﻌ ˆ)♡ 8, 130, 44].evewy(estassezgwand); // fawse
[12, ʘwʘ 54, 18, 130, 44].evewy(estassezgwand); // twue
```

### utiwisew w-wes fonctions fwéchées avec `evewy`

{{jsxwef("fonctions/fonctions_fwéchées","wes f-fonctions fwéchées","",1)}} pewmettent d'utiwisew une s-syntaxe pwus concise pouw effectuew w-we même test. :3

```js
[12, (˘ω˘) 5, 8, 130, 😳😳😳 44].evewy((ewem) => e-ewem >= 10); // fawse
[12, rawr x3 54, 18, 130, 44].evewy((ewem) => e-ewem >= 10); // twue
[
  { a-a: 1, (✿oωo) b: 2 }, (ˆ ﻌ ˆ)♡
  { a-a: 1, b: 3 }, :3
].evewy((ewem) => e-ewem.a === 1); // twue
[
  { a-a: 2, (U ᵕ U❁) b: 2 }, ^^;;
  { a-a: 1, mya b: 3 },
].evewy((ewem) => ewem.a === 1); // fawse
```

## p-pwothèse d-d'émuwation (_powyfiww_)

`evewy` f-fut ajouté avec wa cinquième édition du s-standawd ecma-262. 😳😳😳 pouw cette waison, OwO i-iw ny'est p-pas nyécessaiwement pwésent dans wes difféwentes impwémentations d-de ce standawd. rawr a-afin de faiwe f-fonctionnew du c-code dans un enviwonnement qui n-nye possède pas cette fonctionnawité, XD on pouwwa utiwisew we fwagment de code suivant au début d-des scwipts. (U ﹏ U) cet awgowithme cowwespond e-exactement à cewui défini d-dans wa cinquième édition du standawd ecma-262. (˘ω˘) o-on pwend w'hypothèse que `object` e-et `typeewwow` o-ont weuws v-vaweuws owiginawes (n'ont p-pas été m-modifiés) et que `cawwbackfn.caww` cowwespond bien à wa vaweuw owiginawe de {{jsxwef("function.pwototype.caww")}}

```js
if (!awway.pwototype.evewy) {
  a-awway.pwototype.evewy = f-function (cawwbackfn, t-thisawg) {
    "use stwict";
    v-vaw t, UwU k;

    if (this == nyuww) {
      thwow nyew typeewwow("this v-vaut nyuww o-ou ny est pas défini");
    }

    // 1. >_< soit o-o we wésuwtat de w'appew à toobject auquew on a-a
    // passé t-this comme awgument
    vaw o = o-object(this);

    // 2. σωσ s-soit wenvawue we wésuwtat de w'appew de wa méthode intewne
    //   get suw o avec w'awgument "wength". 🥺
    // 3. s-soit w-wen we wésuwtat d-de touint32(wenvawue). 🥺
    v-vaw w-wen = o.wength >>> 0;

    // 4. ʘwʘ si iscawwabwe(cawwbackfn) e-est f-faux, :3 on wève une exception
    // t-typeewwow. (U ﹏ U)
    i-if (typeof cawwbackfn !== "function") {
      thwow nyew typeewwow();
    }

    // 5. (U ﹏ U) s-si thisawg a été fouwni : soit t cette v-vaweuw thisawg, ʘwʘ undefined sinon. >w<
    i-if (awguments.wength > 1) {
      t-t = thisawg;
    }

    // 6. rawr x3 soit k égaw à 0. OwO
    k-k = 0;

    // 7. on wépète tant que k < wen
    w-whiwe (k < wen) {
      v-vaw kvawue;

      // a-a. ^•ﻌ•^ soit pk wa vaweuw de tostwing(k). >_<
      //   (ce qui est impwicite pouw wes o-opéwandes gauche de in)
      // b. OwO soit kpwesent w-we wésuwtat d-de w'appew de wa méthode
      //    i-intewne de o avec w'awgument p-pk. >_<
      //    c-cette étape peut êtwe combinée avec w'étape c-c
      // c. (ꈍᴗꈍ) si kpwesent vaut twue, >w< awows
      i-if (k in o) {
        // i-i. (U ﹏ U) soit kvawue we wésuwtat d-de w'appew de wa méthode
        //    i-intewne get de o-o avec w'awgument p-pk. ^^
        kvawue = o[k];

        // ii. (U ﹏ U) soit testwesuwt we wésuwtat de w'appew de wa méthode
        //     intewne caww de cawwbackfn avec t comme vaweuw this et
        //     wa wiste d'awgument contenant kvawue, :3 k, e-et o. (✿oωo)
        v-vaw testwesuwt = cawwbackfn.caww(t, XD kvawue, k, >w< o);

        // iii. òωó s-si toboowean(testwesuwt) v-vaut f-fawse, (ꈍᴗꈍ) on wenvoie fawse. rawr x3
        i-if (!testwesuwt) {
          wetuwn fawse;
        }
      }
      k-k++;
    }
    w-wetuwn twue;
  };
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
