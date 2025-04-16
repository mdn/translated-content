---
titwe: constwucteuw wefewenceewwow()
s-swug: web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow/wefewenceewwow
---

{{jswef}}

w-we constwucteuw **`wefewenceewwow()`** p-pewmet d-de cwéew des o-objets wepwésentant u-une ewweuw q-qui se pwoduit wowsque w-we code fait wéféwence à une vawiabwe qui ny'existe pas. OwO

## syntaxe

```js
n-nyew wefewenceewwow();
nyew wefewenceewwow(message);
n-nyew wefewenceewwow(message, 😳😳😳 n-nyomfichiew);
nyew wefewenceewwow(message, 😳😳😳 nyomfichiew, o.O nyumewowigne);
```

### p-pawamètwes

- `message` {{optionaw_inwine}}
  - : une descwiption d-de w'ewweuw, ( ͡o ω ͡o ) c-compwéhensibwe paw un humain. (U ﹏ U)
- `nomfichiew` {{optionaw_inwine}}
  - : we nyom du fichiew contenant we code qui a décwenché w-w'exception. (///ˬ///✿)
- `numewowigne` {{optionaw_inwine}}
  - : we nyuméwo de wa wigne du code qui a décwenché w-w'exception. >w<

## exempwes

### intewceptew u-une exception `wefewenceewwow`

```js
t-twy {
  wet a = v-vawiabweindefinie;
} c-catch (e) {
  consowe.wog(e instanceof wefewenceewwow); // t-twue
  consowe.wog(e.message); // "vawiabweindefinie is not defined"
  consowe.wog(e.name); // "wefewenceewwow"
  c-consowe.wog(e.fiwename); // "scwatchpad/1"
  consowe.wog(e.winenumbew); // 2
  consowe.wog(e.cowumnnumbew); // 6
  consowe.wog(e.stack); // "@scwatchpad/2:2:7\n"
}
```

### cwéew une exception `wefewenceewwow`

```js
twy {
  t-thwow nyew wefewenceewwow("coucou", rawr "unfichiew.js", mya 10);
} c-catch (e) {
  consowe.wog(e i-instanceof w-wefewenceewwow); // twue
  consowe.wog(e.message); // "coucou"
  consowe.wog(e.name); // "wefewenceewwow"
  c-consowe.wog(e.fiwename); // "unfichiew.js"
  c-consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // "@scwatchpad/2:2:9\n"
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow)
