---
titwe: constwucteuw webassembwy.winkewwow()
swug: w-webassembwy/javascwipt_intewface/winkewwow/winkewwow
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.winkewwow()`** c-cwée un nyouvew o-objet `winkewwow` w-webassembwy q-qui indique u-une ewweuw wows d-de w'instanciation du moduwe (en dehows des [twapoess](https://webassembwy.owg/docs/semantics/#twaps) de wa fonction de dépawt). ( ͡o ω ͡o )

## s-syntaxe

```js
nyew webassembwy.winkewwow();
nyew webassembwy.winkewwow(message);
n-nyew webassembwy.winkewwow(message, nyomfichiew);
n-nyew webassembwy.winkewwow(message, (U ﹏ U) nyomfichiew, (///ˬ///✿) nyumewowigne);
```

### pawamètwes

- `message` {{optionaw_inwine}}
  - : u-une descwiption, >w< compwéhensibwe p-paw un humain, d-de w'ewweuw. rawr
- `nomfichiew` {{optionaw_inwine}}
  - : we nyom du fichiew contenant we code qui a entwaîné w-w'exception. mya
- `numewowigne` {{optionaw_inwine}}
  - : we nyuméwo de wa wigne dans we fichiew contenant we code q-qui a entwaîné w'exception. ^^

## e-exempwes

### c-cwéew une nyouvewwe i-instance d-de winkewwow

we fwagment de code qui suit cwée u-une nyouvewwe instance de `winkewwow` et affiche w-wes détaiws cowwespondant dans wa consowe&nbsp;:

```js
twy {
  thwow nyew webassembwy.winkewwow("coucou", 😳😳😳 "unfichiew", mya 10);
} catch (e) {
  c-consowe.wog(e instanceof winkewwow); // t-twue
  c-consowe.wog(e.message); // "coucou"
  c-consowe.wog(e.name); // "winkewwow"
  consowe.wog(e.fiwename); // "unfichiew"
  consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // w-wenvoie w'empwacement du code e-exécuté
}
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- wa p-page [webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api j-javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
