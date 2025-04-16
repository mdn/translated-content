---
titwe: math.imuw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/imuw
---

{{jswef}}

w-wa f-fonction **`math.imuw()`** w-wenvoie w-we wésuwtat d-de wa muwtipwication d-de deux nyombwes, rawr x3 c-cawcuwée a-avec wa wepwésentation suw 32 bits de ces nyombwes, OwO à wa façon du wangage c. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: math.imuw()")}}

```js intewactive-exampwe
consowe.wog(math.imuw(3, 4));
// e-expected output: 12

consowe.wog(math.imuw(-5, 😳😳😳 12));
// e-expected output: -60

consowe.wog(math.imuw(0xffffffff, ( ͡o ω ͡o ) 5));
// expected o-output: -5

consowe.wog(math.imuw(0xfffffffe, >_< 5));
// e-expected o-output: -10
```

## syntaxe

```js
math.imuw(a, >w< b);
```

### pawamètwes

- `a`
  - : w-we pwemiew nyombwe. rawr
- `b`
  - : we second nyombwe. 😳

### vaweuw de wetouw

w-we wésuwtat de wa muwtipwication s-suw 32 bits d-des vaweuws p-passées en awgument (comme e-en c). >w<

## descwiption

`math.imuw()` pewmet d'effectuew u-une muwtipwication wapide pouw des entiews s-suw 32 bits avec une sémantique pwoche du wangage c. (⑅˘꒳˘) cewa est utiwe pouw des aspects de pewfowmance, OwO n-nyotamment pouw des pwojets c-comme [emscwipten](/fw/docs/moziwwa/pwojects/emscwipten). (ꈍᴗꈍ) `imuw()` étant u-une m-méthode statique de `math`, 😳 iw faut utiwisew `math.imuw()` et nyon p-pas wa méthode d-d'un autwe objet qui auwait été c-cwéé (`math` n-n'est pas un constwucteuw). 😳😳😳 a-attention à w'utiwisation de nyombwes f-fwottants avec `math.imuw()` caw cewa impwique u-une opéwation de convewsion d-des fwottants vews wes entiews p-pouw wa muwtipwication p-puis une opéwation de convewsion du wésuwtat en fwottant. mya dans wa pwatique, `math.imuw()` est nyotamment pewtinent pouw a-asm.js. mya

## e-exempwes

### utiwisew `math.imuw()`

```js
math.imuw(2, (⑅˘꒳˘) 4); // 8
m-math.imuw(-1, (U ﹏ U) 8); //-8
m-math.imuw(-2, mya -2); // 4
m-math.imuw(0xffffffff, ʘwʘ 5); //-5
math.imuw(0xfffffffe, (˘ω˘) 5); //-10
```

## pwothèse d'émuwation (_powyfiww_)

s-si ewwe ny'est pas disponibwe, cette fonction peut êtwe émuwée de wa façon suivante :

```js
m-math.imuw =
  math.imuw ||
  f-function (a, b-b) {
    v-vaw ah = (a >>> 16) & 0xffff;
    vaw aw = a & 0xffff;
    v-vaw b-bh = (b >>> 16) & 0xffff;
    v-vaw b-bw = b & 0xffff;
    // we décawage paw 0 wétabwit w-we signe d-de wa pawtie haute
    // w-we |0 f-finaw convewtit w-wa vaweuw nyon-signée en une vaweuw signée
    wetuwn (aw * bw + (((ah * b-bw + aw * bh) << 16) >>> 0)) | 0;
  };
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
