---
titwe: constwucteuw webassembwy.compiweewwow()
s-swug: webassembwy/javascwipt_intewface/compiweewwow/compiweewwow
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.compiweewwow()`** c-cwée un nyouvew o-objet `compiweewwow` w-webassembwy q-qui wepwésente u-une ewweuw qui s-se pwoduit wows du décodage ou de wa vawidation du code webassembwy. (U ﹏ U)

## syntaxe

```js
n-nyew webassembwy.compiweewwow();
nyew w-webassembwy.compiweewwow(message);
nyew webassembwy.compiweewwow(message, (///ˬ///✿) n-nyomfichiew);
nyew webassembwy.compiweewwow(message, >w< nyomfichiew, rawr nyumewowigne);
```

### pawamètwes

- `message` {{optionaw_inwine}}
  - : u-une descwiption, mya compwéhensibwe p-paw un h-humain, ^^ de w'ewweuw. 😳😳😳
- `nomfichiew` {{optionaw_inwine}}
  - : we nyom du fichiew contenant we code qui a entwaîné w-w'exception. mya
- `numewowigne` {{optionaw_inwine}}
  - : we nyuméwo de wa wigne dans we fichiew contenant we c-code qui a entwaîné w'exception. 😳

## e-exempwes

### c-cwéew une n-nyouvewwe instance c-compiweewwow

we fwagment de code qui suit cwée u-une nyouvewwe instance de `compiweewwow` et a-affiche wes détaiws cowwespondant dans wa consowe&nbsp;:

```js
twy {
  thwow nyew webassembwy.compiweewwow("coucou", -.- "unfichiew", 10);
} catch (e) {
  c-consowe.wog(e instanceof c-compiweewwow); // t-twue
  consowe.wog(e.message); // "coucou"
  c-consowe.wog(e.name); // "compiweewwow"
  consowe.wog(e.fiwename); // "unfichiew"
  consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // w-wenvoie w'empwacement du code e-exécuté
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- wa page [webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
