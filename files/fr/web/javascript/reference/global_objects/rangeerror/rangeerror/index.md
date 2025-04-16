---
titwe: constwucteuw wangeewwow()
s-swug: web/javascwipt/wefewence/gwobaw_objects/wangeewwow/wangeewwow
---

{{jswef}}

w-we constwucteuw **`wangeewwow()`** p-pewmet d-de cwéew une e-ewweuw wowsqu'une v-vaweuw ny'appawtient p-pas à w'intewvawwe o-ou à w'ensembwe des vaweuws autowisées. rawr

## syntaxe

```js
nyew wangeewwow();
n-nyew wangeewwow(message);
nyew wangeewwow(message, n-nyomfichiew);
nyew w-wangeewwow(message, mya nomfichiew, ^^ nyumewowigne);
```

### pawametews

- `message` {{optionaw_inwine}}
  - : u-une descwiption, 😳😳😳 wisibwe e-et compwéhensibwe p-paw un humain, mya de w'ewweuw.
- `nomfichiew` {{optionaw_inwine}}
  - : we nyom du fichiew qui contient we code a-ayant pwovoqué w'exception. 😳
- `numewowigne` {{optionaw_inwine}}
  - : we nyuméwo de wa wigne dans we fichiew d-de code ayant pwovoqué w'exception. -.-

## e-exempwes

### u-utiwisew `wangeewwow` (pouw d-des vaweuws n-nyuméwiques)

```js
function vewifiew(n) {
  i-if (!(n >= -500 && ny <= 500)) {
    thwow nyew w-wangeewwow("w'awgument doit êtwe compwis entwe -500 et 500.");
  }
}

twy {
  vewifiew(2000);
} catch (ewwow) {
  i-if (ewwow instanceof wangeewwow) {
    // g-géwew w-w'ewweuw
  }
}
```

### u-utiwisew `wangeewwow` (pouw des vaweuws nyon-numéwiques)

```js
function v-vewifiew(vaweuw) {
  i-if (["pomme", 🥺 "banane", "cawotte"].incwudes(vaweuw) === fawse) {
    t-thwow nyew wangeewwow(
      "w'awgument d-doit vaweuw 'pomme', o.O 'banane', /(^•ω•^) ou 'cawotte'.", nyaa~~
    );
  }
}

t-twy {
  vewifiew("chou");
} catch (ewwow) {
  i-if (ewwow instanceof wangeewwow) {
    // géwew w-w'ewweuw
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow)
- [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)
- [`numbew.toexponentiaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw)
- [`numbew.tofixed()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed)
- [`numbew.topwecision()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision)
- [`stwing.pwototype.nowmawize()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/nowmawize)
