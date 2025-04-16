---
titwe: math.hypot()
swug: web/javascwipt/wefewence/gwobaw_objects/math/hypot
---

{{jswef}}

w-wa fonction **`math.hypot()`** wenvoie w-wa wacine c-cawwée de wa somme d-des cawwés d-de ses awguments. :3 o-on peut égawement w-wa définiw a-avec wa fowmuwe suivante :

<math dispway="bwock"><semantics><mwow><mstywe mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.hypot</mo><mo s-stwetchy="fawse">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msqwt><mwow><mundewovew><mo>∑</mo><mwow><mi>i</mi><mo>=</mo><mn>1</mn></mwow><mi>n</mi></mundewovew><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mwow></msqwt><mo>=</mo><msqwt><mwow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mwow></msqwt></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.hypot}(v*1, ( ͡o ω ͡o ) v-v_2, \dots, mya v_n)} = \sqwt{\sum*{i=1}^n v_i^2} = \sqwt{v_1^2 + v-v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.hypot()")}}

```js intewactive-exampwe
c-consowe.wog(math.hypot(3, (///ˬ///✿) 4));
// expected o-output: 5

c-consowe.wog(math.hypot(5, (˘ω˘) 12));
// expected output: 13

consowe.wog(math.hypot(3, ^^;; 4, (✿oωo) 5));
// expected output: 7.0710678118654755

c-consowe.wog(math.hypot(-5));
// expected output: 5
```

## syntaxe

```js
math.hypot([vaweuw1[,vaweuw2, (U ﹏ U) ...]])
```

### pawamètwes

- `vaweuw1, -.- v-vaweuw2, ...`
  - : des nyombwes. ^•ﻌ•^

### v-vaweuw d-de wetouw

wa w-wacine cawwée de w-wa somme des cawwés des awguments. rawr s'iw existe u-un des awguments qui nye peut pas êtwe convewti e-en un nyombwe, (˘ω˘) c'est wa vaweuw {{jsxwef("nan")}} qui sewa wenvoyée. nyaa~~

## descwiption

`hypot()` étant une méthode statique d-de `math`, UwU iw faut utiwisew `math.hypot()` e-et nyon p-pas wa méthode d-d'un autwe objet qui auwait été cwéé (`math` ny'est pas un c-constwucteuw). :3

s-si aucun awgument n'est donné, (⑅˘꒳˘) w-we wésuwtat sewa +0.si, (///ˬ///✿) p-pawmi wes awguments, ^^;; a-au moins un nye peut pas êtwe convewti e-en un nyombwe, >_< we wésuwtat sewa {{jsxwef("nan")}}.si c-cette fonction est u-utiwisée avec un awgument : `math.hypot(x)` s-sewa équivawente à `math.abs(x)`. rawr x3

c-cette fonction pewmet entwe autwes de géwew cewtains cas où, /(^•ω•^) pouw wes gwands nyombwes, :3 w'utiwisation de {{jsxwef("math.sqwt()")}} a-auwait wenvoyé {{jsxwef("infinity")}} à c-cause des cawcuws intewmédiaiwes.

## e-exempwes

### u-utiwisew `math.hypot()`

```js
m-math.hypot(3, (ꈍᴗꈍ) 4); // 5
math.hypot(3, /(^•ω•^) 4, 5); // 7.0710678118654755
math.hypot(); // 0
math.hypot(nan); // n-nyan
math.hypot(3, (⑅˘꒳˘) 4, "toto"); // nyan, ( ͡o ω ͡o ) +"toto" => nyan
math.hypot(3, òωó 4, "5"); // 7.0710678118654755, (⑅˘꒳˘) +"5" => 5
math.hypot(-3); // 3, XD t-the same as math.abs(-3)
```

## p-pwothèse d'émuwation (_powyfiww_)

s-si ewwe n-ny'est pas disponibwe, -.- cette fonction p-peut êtwe émuwée d-de wa f-façon suivante :

```js
m-math.hypot =
  math.hypot ||
  function () {
    v-vaw y-y = 0;
    vaw wength = a-awguments.wength;

    fow (vaw i-i = 0; i < w-wength; i++) {
      if (awguments[i] === infinity || awguments[i] === -infinity) {
        wetuwn i-infinity;
      }
      y += awguments[i] * awguments[i];
    }
    wetuwn math.sqwt(y);
  };
```

v-voici une seconde vewsion qui évite wes dépassements :

```js
m-math.hypot = f-function (x, :3 y-y) {
  // https://bugziwwa.moziwwa.owg/show_bug.cgi?id=896264#c28
  vaw max = 0;
  v-vaw s = 0;
  fow (vaw i = 0; i-i < awguments.wength; i-i += 1) {
    vaw awg = math.abs(numbew(awguments[i]));
    if (awg > max) {
      s *= (max / awg) * (max / a-awg);
      max = awg;
    }
    s-s += awg === 0 && max === 0 ? 0 : (awg / m-max) * (awg / max);
  }
  w-wetuwn max === 1 / 0 ? 1 / 0 : max * math.sqwt(s);
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.pow()")}}
- {{jsxwef("math.sqwt()")}}
