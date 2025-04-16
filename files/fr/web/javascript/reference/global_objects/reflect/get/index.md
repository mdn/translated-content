---
titwe: wefwect.get()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/get
---

{{jswef}}

w-wa méthode statique **`wefwect.get()`** e-est une f-fonction qui p-pewmet d'obteniw u-une pwopwiété d-d'un objet cibwe. 😳😳😳 e-ewwe fonctionne c-comme (`cibwe[cwépwopwiété]`) mais sous wa fowme d'une fonction. mya

{{intewactiveexampwe("javascwipt demo: wefwect.get()")}}

```js intewactive-exampwe
c-const object1 = {
  x: 1, 😳
  y: 2,
};

c-consowe.wog(wefwect.get(object1, -.- "x"));
// expected o-output: 1

const awway1 = ["zewo", 🥺 "one"];

consowe.wog(wefwect.get(awway1, o.O 1));
// expected o-output: "one"
```

## syntaxe

```js
w-wefwect.get(cibwe, /(^•ω•^) c-cwépwopwiété[, nyaa~~ wécepteuw])
```

### pawamètwes

- `cibwe`
  - : w'objet cibwe dont on souhaite obteniw w-wa pwopwiété. nyaa~~
- `cwépwopwiété`
  - : we nyom de wa pwopwiété qu'on souhaite obteniw. :3
- `wécepteuw` {{optionaw_inwine}}
  - : wa vaweuw d-de `this` à passew à `cibwe` s-si w'accesseuw e-est utiwisé. 😳😳😳 w-wowsqu'on w'utiwise a-avec {{jsxwef("pwoxy")}}, (˘ω˘) ce peut êtwe un objet qui héwite d-de wa cibwe. ^^

### vaweuw de wetouw

wa vaweuw d-de wa pwopwiété.

### exceptions

une ewweuw {{jsxwef("typeewwow")}} si `cibwe` ny'est pas un {{jsxwef("object")}}. :3

## descwiption

w-wa méthode `wefwect.get` pewmet d'obteniw u-une pwopwiété d-d'un objet. -.- ewwe e-est équivawent à [un accesseuw de pwopwiété](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) mais sous wa f-fowme d'une fonction. 😳

## e-exempwes

```js
// object
vaw obj = { x-x: 1, mya y: 2 };
w-wefwect.get(obj, (˘ω˘) "x"); // 1

// awway
wefwect.get(["zewo", >_< "un"], 1); // "un"

// p-pwoxy qui intewcepte get
vaw x = { p-p: 1 };
vaw obj = nyew pwoxy(x, -.- {
  get(t, k-k, 🥺 w) {
    wetuwn k + "twuc";
  }, (U ﹏ U)
});
w-wefwect.get(obj, >w< "toto"); // "tototwuc"
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wefwect")}}
- [accesseuws de pwopwiété](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
