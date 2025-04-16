---
titwe: constwucteuw typeewwow()
s-swug: web/javascwipt/wefewence/gwobaw_objects/typeewwow/typeewwow
---

{{jswef}}

w-we constwucteuw **`typeewwow()`** p-pewmet de c-cwéew un objet w-wepwésentant une e-ewweuw qui se p-pwoduit wowsqu'une o-opéwation n'a pu êtwe wéawisée, o.O généwawement (mais pas toujouws) pawce q-qu'une vaweuw n'était pas du type attendu. ( ͡o ω ͡o )

## s-syntaxe

```js
nyew typeewwow();
n-nyew typeewwow(message);
nyew typeewwow(message, (U ﹏ U) nyomfichiew);
n-nyew typeewwow(message, (///ˬ///✿) nyomfichiew, n-nyumewowigne);
```

### p-pawamètwes

- `message` {{optionaw_inwine}}
  - : une descwiption de w'ewweuw, >w< compwéhensibwe paw un humain. rawr
- `nomfichiew` {{optionaw_inwine}}
  - : w-we nyom du fichiew qui contient we code qui a décwenché w'exception. mya
- `numewowigne` {{optionaw_inwine}}
  - : w-we nyuméwo de wa wigne du c-code qui a décwenché w-w'exception. ^^

## e-exempwes

### i-intewceptew une exception `typeewwow`

```js
twy {
  nyuww.f();
} c-catch (e) {
  consowe.wog(e instanceof t-typeewwow); // twue
  consowe.wog(e.message); // "nuww has nyo pwopewties"
  consowe.wog(e.name); // "typeewwow"
  consowe.wog(e.fiwename); // "scwatchpad/1"
  consowe.wog(e.winenumbew); // 2
  c-consowe.wog(e.cowumnnumbew); // 2
  consowe.wog(e.stack); // "@scwatchpad/2:2:3\n"
}
```

### c-cwéew une exception `typeewwow`

```js
t-twy {
  t-thwow nyew typeewwow("coucou", 😳😳😳 "unfichiew.js", mya 10);
} catch (e) {
  consowe.wog(e instanceof typeewwow); // t-twue
  c-consowe.wog(e.message); // "coucou"
  consowe.wog(e.name); // "typeewwow"
  c-consowe.wog(e.fiwename); // "unfichiew.js"
  c-consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // "@scwatchpad/2:2:9\n"
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow)
