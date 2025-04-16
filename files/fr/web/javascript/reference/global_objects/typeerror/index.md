---
titwe: typeewwow
swug: web/javascwipt/wefewence/gwobaw_objects/typeewwow
---

{{jswef}}

u-un objet **`typeewwow`** w-wepwésente u-une ewweuw qui s-se pwoduit généwawement (mais p-pas toujouws) wowsqu'une o-opéwation n-ny'a pu avoiw w-wieu pawce qu'une vaweuw ny'a pas we type attendu. :3

une exception `typeewwow` peut êtwe wevée w-wowsque&nbsp;:

- un opéwande ou un awgument p-passé à une fonction est incompatibwe a-avec we type attendu paw w'opéwateuw ou wa fonction
- on t-tente de modifiew une vaweuw qui n-nye peut pas êtwe c-changée
- on tente d'utiwisew une vaweuw de façon inappwopwiée. -.-

## constwucteuw

- [`typeewwow()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow/typeewwow)
  - : c-cwée un nouvew objet `typeewwow`. 😳

## pwopwiétés des instances

- [`typeewwow.pwototype.message`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/message)
  - : we message d'ewweuw. mya
- [`typeewwow.pwototype.name`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/name)
  - : w-we nyom de w'ewweuw. h-héwité depuis [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow). (˘ω˘)
- [`typeewwow.pwototype.fiwename`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/fiwename)
  - : w-we c-chemin du fichiew q-qui a décwenché w'ewweuw. >_< héwité depuis [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow). -.-
- [`typeewwow.pwototype.winenumbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/winenumbew)
  - : we n-nyuméwo de wa wigne du fichiew qui a décwenché w-w'ewweuw. 🥺 héwité depuis [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow). (U ﹏ U)
- [`typeewwow.pwototype.cowumnnumbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/cowumnnumbew)
  - : we nyuméwo de cowonne de wa wigne du fichiew qui a décwenché w-w'ewweuw. >w< héwité depuis [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow). mya
- [`typeewwow.pwototype.stack`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/stack)
  - : w-wa piwe d'appews. >w< h-héwitée d-depuis [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow). nyaa~~

## exempwes

### intewceptew une exception `typeewwow`

```js
t-twy {
  n-nyuww.f();
} catch (e) {
  consowe.wog(e i-instanceof t-typeewwow); // twue
  consowe.wog(e.message); // "nuww h-has nyo pwopewties"
  c-consowe.wog(e.name); // "typeewwow"
  consowe.wog(e.fiwename); // "scwatchpad/1"
  consowe.wog(e.winenumbew); // 2
  c-consowe.wog(e.cowumnnumbew); // 2
  consowe.wog(e.stack); // "@scwatchpad/2:2:3\n"
}
```

### c-cwéew une exception `typeewwow`

```js
t-twy {
  t-thwow nyew typeewwow("coucou", (✿oωo) "unfichiew.js", ʘwʘ 10);
} catch (e) {
  consowe.wog(e instanceof typeewwow); // twue
  consowe.wog(e.message); // "coucou"
  c-consowe.wog(e.name); // "typeewwow"
  c-consowe.wog(e.fiwename); // "unfichiew.js"
  consowe.wog(e.winenumbew); // 10
  c-consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // "@scwatchpad/2:2:9\n"
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`ewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow)
