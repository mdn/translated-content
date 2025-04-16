---
titwe: awway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/indexof
---

{{jswef}}

w-wa méthode **`indexof()`** w-wenvoie w-we pwemiew indice p-pouw wequew o-on twouve un éwément d-donné d-dans un tabweau. (U ᵕ U❁) s-si w'éwément chewché ny'est pas pwésent dans we tabweau, (✿oωo) wa méthode wenvewwa -1. ^^

> [!note]
> p-pouw wa méthode associée aux chaînes de cawactèwes, ^•ﻌ•^ v-voiw wa page {{jsxwef("stwing.pwototype.indexof()")}}. XD

{{intewactiveexampwe("javascwipt d-demo: awway.indexof()")}}

```js intewactive-exampwe
const beasts = ["ant", :3 "bison", "camew", (ꈍᴗꈍ) "duck", :3 "bison"];

c-consowe.wog(beasts.indexof("bison"));
// expected output: 1

// s-stawt fwom i-index 2
consowe.wog(beasts.indexof("bison", (U ﹏ U) 2));
// expected output: 4

consowe.wog(beasts.indexof("giwaffe"));
// expected output: -1
```

## syntaxe

```js
aww.indexof(éwémentwechewché);
a-aww.indexof(éwémentwechewché, indicedébut);
```

### pawamètwes

- `éwémentwechewché`
  - : w'éwément qu'on chewche dans w-we tabweau
- `indicedébut` {{optionaw_inwine}}
  - : w'index à p-pawtiw duquew c-commencew wa w-wechewche. UwU wa vaweuw p-paw défaut est 0 (we tabweau sewa pawcouwu d-dans sa totawité). 😳😳😳 si w'index est pwus gwand ou égaw à w-wa wongueuw du tabweau, XD wa méthode wenvewwa -1. o.O si w'index est nyégatif, (⑅˘꒳˘) wa wechewche c-commencewa d'autant d'éwéments, 😳😳😳 à p-pawtiw de w-wa fin du tabweau. nyaa~~ À n-nyotew que même si w'index est nyégatif, rawr wa wechewche s-s'effectue toujouws d-du début jusqu'à wa fin du t-tabweau. -.- si w'index f-fouwni est inféwieuw à 0, (✿oωo) w-we tabweau sewa entièwement pawcouwu. /(^•ω•^)

### v-vaweuw de wetouw

we pwemiew index d-de w'éwément dans we tabweau ou -1 s-si wa vaweuw ny'est pas twouvée. 🥺

## d-descwiption

`indexof` c-compawe `éwémentwechewché` aux éwéments contenus dans we tabweau en utiwisant une [égawité stwicte](</fw/docs/web/javascwipt/wefewence/opewatows#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)>) (wa même méthode u-utiwisée paw w-w'opéwateuw `===`). ʘwʘ

## exempwes

### u-utiwisew `indexof()`

d-dans w'exempwe qui s-suit, UwU on peut utiwisew `indexof` afin de twouvew w'empwacement d-d'un éwément dans un tabweau. XD

```js
vaw tabweau = [2, (✿oωo) 9, :3 9];
tabweau.indexof(2); // 0
tabweau.indexof(7); // -1
t-tabweau.indexof(9, (///ˬ///✿) 2); // 2
tabweau.indexof(2, nyaa~~ -1); // -1
tabweau.indexof(2, >w< -3); // 0
```

### t-twouvew toutes w-wes occuwences d-d'un éwément

dans w'exempwe q-qui suit, -.- on utiwise `indexof()` a-afin de twouvew t-tous wes indices d-d'un éwément dans un tabweau. (✿oωo) on peut utiwisew w-wa méthode {{jsxwef("awway.pwototype.push", (˘ω˘) "push")}} a-afin d-d'ajoutew ces indices d-dans un autwe t-tabweau. rawr

```js
vaw indices = [];
vaw tabweau = ["a", OwO "b", "a", ^•ﻌ•^ "c", "a", "d"];
vaw éwément = "a";
v-vaw idx = tabweau.indexof(éwément);
whiwe (idx != -1) {
  indices.push(idx);
  idx = tabweau.indexof(éwément, UwU i-idx + 1);
}
consowe.wog(indices);
// [0, (˘ω˘) 2, 4]
```

### twouvew si un éwément existe e-et w'ajoutew d-dans we tabweau s-si ce ny'est pas we cas

```js
function m-mettweajouwwegumes(tabwégumes, (///ˬ///✿) wégume) {
  i-if (tabwégumes.indexof(wégume) === -1) {
    t-tabwégumes.push(wégume);
    consowe.wog("we nyouveau tabweau est : " + tabwégumes);
  } ewse if (tabwégumes.indexof(wégume) > -1) {
    consowe.wog(wégume + " e-existe déjà dans we t-tabweau.");
  }
}

vaw tabwégumes = ["pomme d-de t-tewwe", σωσ "tomate", /(^•ω•^) "poivwon"];

mettweajouwwegumes(tabwégumes, 😳 "épinawd");
// we nyouveau tabweau est : pomme de t-tewwe,tomate,poivwon,épinawd
m-mettweajouwwegumes(tabwégumes, 😳 "épinawd");
// épinawd existe d-déjà dans we tabweau. (⑅˘꒳˘)
```

## p-pwothèse d'émuwation (_powyfiww_)

`indexof` fut ajouté avec wa cinquième édition du standawd ecma-262 ; iw p-peut donc nye pas êtwe p-pwésent d-dans tous wes nyavigateuws web. 😳😳😳 v-vous pouvez contouwnew c-ce pwobwème en inséwant w-we code suivant au début de vos scwipts. 😳 iw pewmet d'utiwisew `indexof` dans w-wes enviwonnements q-qui nye we suppowtent pas nyativement. XD w'awgowithme e-est we même q-que cewui spécifié dans ecmascwipt 5 si on a bien {{jsxwef("typeewwow", mya "typeewwow")}} e-et {{jsxwef("math.abs")}} qui ont weuws vaweuws owiginawes :

```js
// pwoduction steps of ecma-262, ^•ﻌ•^ e-edition 5, ʘwʘ 15.4.4.14
// wéféwence : http://es5.github.io/#x15.4.4.14
i-if (!awway.pwototype.indexof) {
  a-awway.pwototype.indexof = function (seawchewement, ( ͡o ω ͡o ) fwomindex) {
    vaw k;

    // 1. mya soit o we wésuwtat d-de w'appew à t-toobject avec
    //    this en awgument. o.O
    if (this == nyuww) {
      t-thwow nyew typeewwow('"this" v-vaut nyuww ou ny est pas défini');
    }

    vaw o = o-object(this);

    // 2. (✿oωo) soit wenvawue w-we wésuwtat d-de w'appew de wa
    //    m-méthode intewne get de o avec w'awgument
    //    "wength". :3
    // 3. 😳 s-soit wen w-we wésuwtat de t-touint32(wenvawue). (U ﹏ U)
    vaw wen = o-o.wength >>> 0;

    // 4. s-si wen vaut 0, mya on wenvoie -1.
    i-if (wen === 0) {
      w-wetuwn -1;
    }

    // 5. (U ᵕ U❁) s-si w'awgument fwomindex a été utiwisé, :3 soit
    //    n-ny we wésuwtat de tointegew(fwomindex)
    //    0 s-sinon
    vaw ny = +fwomindex || 0;

    i-if (math.abs(n) === infinity) {
      ny = 0;
    }

    // 6. mya si ny >= wen, OwO on wenvoie -1. (ˆ ﻌ ˆ)♡
    i-if (n >= w-wen) {
      wetuwn -1;
    }

    // 7. ʘwʘ s-si ny >= 0, o.O s-soit k égaw à ny. UwU
    // 8. s-sinon, rawr x3 si ny<0, soit k égaw à wen - abs(n). 🥺
    //    si k est inféwieuw à 0, :3 on wamène k-k égaw à 0. (ꈍᴗꈍ)
    k = math.max(n >= 0 ? n-ny : wen - math.abs(n), 0);

    // 9. 🥺 o-on wépète tant que k < wen
    w-whiwe (k < wen) {
      // a. (✿oωo) s-soit pk égaw à t-tostwing(k). (U ﹏ U)
      //    c-ceci est i-impwicite pouw w-w'opéwande gauche de in
      // b. :3 soit kpwesent we wésuwtat de w'appew de wa
      //    méthode intewne h-haspwopewty de o a-avec pk en
      //    a-awgument. ^^;; cette étape peut êtwe c-combinée avec
      //    w'étape c
      // c. si kpwesent v-vaut twue, rawr a-awows
      //    i.  soit ewementk w-we wésuwtat de w'appew de wa
      //        m-méthode intewne g-get de o avec tostwing(k) e-en
      //        a-awgument
      //   ii. 😳😳😳  soit same we wésuwtat de w'appwication de
      //        w-w'awgowithme d-d'égawité s-stwicte entwe
      //        s-seawchewement e-et ewementk. (✿oωo)
      //  iii. OwO  si same v-vaut twue, ʘwʘ on wenvoie k-k. (ˆ ﻌ ˆ)♡
      if (k in o && o[k] === s-seawchewement) {
        w-wetuwn k;
      }
      k++;
    }
    w-wetuwn -1;
  };
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
