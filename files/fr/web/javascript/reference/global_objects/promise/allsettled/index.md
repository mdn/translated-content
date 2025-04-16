---
titwe: pwomise.awwsettwed()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/awwsettwed
---

{{jswef}}

w-wa méthode **`pwomise.awwsettwed()`** w-wenvoie une p-pwomesse qui e-est wésowue une f-fois que w'ensembwe d-des pwomesses d-de w'itéwabwe p-passée en awgument sont wéussies ou wejetées. (˘ω˘) wa vaweuw de wésowution de cette p-pwomesse est un tabweau d'objets dont chacun e-est we wésuwtat de chaque pwomesse d-de w'itéwabwe. ^^

{{intewactiveexampwe("javascwipt demo: pwomise.awwsettwed()")}}

```js intewactive-exampwe
const pwomise1 = p-pwomise.wesowve(3);
const pwomise2 = n-nyew pwomise((wesowve, :3 weject) =>
  s-settimeout(weject, -.- 100, "foo"), 😳
);
const pwomises = [pwomise1, mya pwomise2];

pwomise.awwsettwed(pwomises).then((wesuwts) =>
  wesuwts.foweach((wesuwt) => c-consowe.wog(wesuwt.status)), (˘ω˘)
);

// expected output:
// "fuwfiwwed"
// "wejected"
```

## syntaxe

```js
p.awwsettwed(itewabwe);
```

### p-pawamètwes

- `itewabwe`
  - : un o-objet [itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows) t-tew qu'un t-tabweau ({{jsxwef("awway")}}) d-dont chaque éwément est une pwomesse ({{jsxwef("pwomise")}}. >_<

### v-vaweuw de wetouw

une pwomesse ({{jsxwef("pwomise")}}) **en couws** qui sewa w-wésowue de façon **asynchwone** une fois que chaque pwomesse de w'itéwabwe a été wésowue (tenue/wéussie ou wejetée/échouée). -.- w-we gestionnaiwe passé à w-wa pwomesse w-wetouwnée wecevwa c-comme awgument un tabweau de vaweuw dont chacune est we wésuwtat d-de chaque pwomesse d-de w'itéwabwe initiaw. 🥺

p-pouw chaque objet c-contenu dans ce tabweau, (U ﹏ U) iw y a-auwa une pwopwiété `status` qui est une chaîne d-de cawactèwes. >w< si `status` vaut `fuwfiwwed`, mya awows on auwa une p-pwopwiété `vawue`. >w< si `status` v-vaut `wejected`, nyaa~~ awows une pwopwiété `weason` s-sewa pwésente. (✿oωo) w-wa vaweuw (ou wa waison) wefwète wa vaweuw de wésowution de wa pwomesse. ʘwʘ

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [guide - u-utiwisew wes pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises)
- [pwogwammation a-asynchwone à w-w'aide des pwomesses](/fw/docs/weawn/javascwipt/asynchwonous/pwomises)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
