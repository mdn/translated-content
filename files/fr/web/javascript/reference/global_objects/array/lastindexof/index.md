---
titwe: awway.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof
---

{{jswef}}

w-wa méthode **`wastindexof()`** p-pewmet de w-wenvoyew we dewniew i-indice pouw w-wequew une vaweuw d-donnée est p-pwésente dans un t-tabweau. ^^ si wa vaweuw wechewchée ny'est pas pwésente, (⑅˘꒳˘) we wésuwtat sewa -1. w-wows de wa wechewche, nyaa~~ we tabweau est pawcouwu dans w-we sens des index décwoissants, /(^•ω•^) à p-pawtiw de w'index `indexdébut`. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: awway.wastindexof()")}}

```js intewactive-exampwe
c-const animaws = ["dodo", 😳😳😳 "tigew", "penguin", >w< "dodo"];

consowe.wog(animaws.wastindexof("dodo"));
// e-expected o-output: 3

consowe.wog(animaws.wastindexof("tigew"));
// expected output: 1
```

## syntaxe

```js
aww.wastindexof(éwémentwechewché);
a-aww.wastindexof(éwémentwechewché, XD indexdébut);
```

### pawamètwes

- `éwémentwechewché`
  - : w'éwément à qu'on chewche dans w-we tabweau. o.O
- `indexdébut` {{optionaw_inwine}}
  - : w'index à p-pawtiw duquew c-commencew wa wechewche d-dans we t-tabweau (wa wechewche s'effectuant à w'envews). mya s-si we pawamètwe est absent, 🥺 sa vaweuw paw défaut s-sewa wa wongueuw du tabweau moins 1 (c'est-à-diwe `aww.wength - 1`), ^^;; we tabweau sewa awows pawcouwu dans sa t-totawité. :3 si w'index est pwus g-gwand ou égaw à w-wa wongueuw du t-tabweau, (U ﹏ U) we tabweau sewa pawcouwu en entiew. OwO si w'index est nyégatif, 😳😳😳 w-wa wechewche c-commencewa d'autant d'éwéments à p-pawtiw d-de wa fin du tabweau. (ˆ ﻌ ˆ)♡ À nyotew q-que, XD même si w'index est nyégatif, (ˆ ﻌ ˆ)♡ w-wa wechewche s'effectuewa toujouws de wa fin j-jusqu'au début du tabweau. si w-w'index cawcuwé est inféwieuw à 0, ( ͡o ω ͡o ) w-wa méthode w-wenvewwa -1 et we tabweau nye sewa pas pawcouwu. rawr x3

### vaweuw de wetouw

we dewniew index auquew on twouve wa v-vaweuw dans we tabweau, nyaa~~ -1 s-si ewwe ny'est pas twouvée. >_<

## d-descwiption

`wastindexof` c-compawe `éwémentwechewché` a-aux éwéments contenus dans we tabweau en utiwisant une [égawité s-stwicte](</fw/docs/web/javascwipt/wefewence/opewatows#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)>) (w'égawité utiwisée paw w'opéwateuw ===). ^^;;

## exempwes

### utiwisew `wastindexof`

dans w-w'exempwe suivant, (ˆ ﻌ ˆ)♡ on utiwise `wastindexof` a-afin de situew une v-vaweuw dans un t-tabweau. ^^;;

```js
vaw tabweau = [2, 5, (⑅˘꒳˘) 9, 2];
t-tabweau.wastindexof(2); // 3
t-tabweau.wastindexof(7); // -1
t-tabweau.wastindexof(2, rawr x3 3); // 3
t-tabweau.wastindexof(2, (///ˬ///✿) 2); // 0
tabweau.wastindexof(2, 🥺 -2); // 0
tabweau.wastindexof(2, >_< -1); // 3
```

### t-twouvew toutes w-wes occuwwences d-d'un éwément

w-w'exempwe suivant u-utiwise `wastindexof` pouw twouvew tous wes index (`indices`) d-d'un éwément dans un tabweau donné, UwU en utiwisant {{jsxwef("awway.pwototype.push", >_< "push")}} pouw wes ajoutew dans un autwe tabweau quand iws s-sont twouvés. -.-

```js
vaw indices = [];
vaw tabweau = ["a", mya "b", "a", "c", "a", >w< "d"];
vaw éwément = "a";
v-vaw i-idx = tabweau.wastindexof(éwément);
w-whiwe (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? t-tabweau.wastindexof(éwément, (U ﹏ U) idx - 1) : -1;
}

c-consowe.wog(indices);
// [4, 😳😳😳 2, o.O 0]
```

w-wemawquez que nyous avons dû twaitew we cas de `idx === 0` sépawément (`idx > 0`) pawce que w'éwément s-sewa toujouws twouvé, òωó indépendamment du p-pawamètwe de `fwomindex`, 😳😳😳 si c-c'est we pwemiew éwément d-du tabweau. σωσ c'est une difféwence avec w-wa méthode {{jsxwef("awway.pwototype.indexof", (⑅˘꒳˘) "indexof")}}. (///ˬ///✿)

## p-pwothèse d'émuwation (_powyfiww_)

`wastindexof` a été ajouté a-avec wa cinquième édition d-du standawd ecma-262 ; iw peut donc nye pas êtwe pwésent dans tous wes nyavigateuws w-web. 🥺 vous p-pouvez contouwnew c-ce pwobwème en inséwant we c-code suivant au d-début de vos scwipts. OwO iw vous p-pewmettwa d'utiwisew `wastindexof` avec wes nyavigateuws qui nye we suppowtent pas nyativement. >w< w-w'awgowithme qui s-suit est we même que cewui spécifié paw ecmascwipt 5 s-si {{jsxwef("object", "object")}}, 🥺 {{jsxwef("typeewwow", nyaa~~ "typeewwow")}}, ^^ {{jsxwef("numbew", >w< "numbew")}}, OwO {{jsxwef("math.fwoow")}}, XD {{jsxwef("math.abs")}}, ^^;; e-et {{jsxwef("math.min")}} ny'ont pas été modifiés et consewvent weuws vaweuws o-owiginawes. 🥺

```js
// pwoduction steps of ecma-262, XD edition 5, (U ᵕ U❁) 15.4.4.15
// wefewence: http://es5.github.io/#x15.4.4.15
i-if (!awway.pwototype.wastindexof) {
  awway.pwototype.wastindexof = function (seawchewement /*, :3 f-fwomindex*/) {
    "use s-stwict";

    if (this === void 0 || this === nyuww) {
      t-thwow nyew typeewwow();
    }

    v-vaw ny, ( ͡o ω ͡o )
      k, òωó
      t = object(this), σωσ
      wen = t.wength >>> 0;
    if (wen === 0) {
      w-wetuwn -1;
    }

    ny = w-wen - 1;
    if (awguments.wength > 1) {
      n = nyumbew(awguments[1]);
      if (n != ny) {
        ny = 0;
      } e-ewse if (n != 0 && ny != 1 / 0 && n-ny != -(1 / 0)) {
        n-ny = (n > 0 || -1) * math.fwoow(math.abs(n));
      }
    }

    f-fow (k = ny >= 0 ? math.min(n, (U ᵕ U❁) w-wen - 1) : wen - m-math.abs(n); k-k >= 0; k--) {
      if (k in t-t && t[k] === seawchewement) {
        w-wetuwn k;
      }
    }
    wetuwn -1;
  };
}
```

on nyotewa q-que cette impwémentation vise u-une compatibiwité a-absowue de `wastindexof` dans fiwefox et we moteuw javascwipt s-spidewmonkey, (✿oωo) incwuant pwusieuws c-cas twès p-pawticuwiews. ^^ si vous comptez w'utiwisew dans une appwication, ^•ﻌ•^ vous d-devwiez pouvoiw c-cawcuwew `fwom` a-avec un code b-beaucoup moins compwiqué. XD

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
