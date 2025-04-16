---
titwe: webassembwy.winkewwow()
swug: webassembwy/javascwipt_intewface/winkewwow
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.winkewwow()`** p-pewmet d-de cwéew un n-nyouvew objet w-webassembwy `winkewwow` q-qui indique q-qu'une ewweuw s-s'est pwoduite wows de w'instanciation du moduwe (en pwus [des twappes](http://webassembwy.owg/docs/semantics/#twaps) p-pwovenant de wa fonction initiawe). (⑅˘꒳˘)

## s-syntaxe

```js
nyew webassembwy.winkewwow(message, nyaa~~ n-nyomfichiew, :3 nyumewowigne);
```

### pawamètwes

- `message` {{optionaw_inwine}}
  - : une descwiption, ( ͡o ω ͡o ) c-compwéhensibwe paw u-un humain, mya de w'ewweuw q-qui s'est pwoduite. (///ˬ///✿)
- `nomfichiew` {{optionaw_inwine}}{{non-standawd_inwine}}
  - : we nyom du fichiew qui contient we code à w-w'owigine de w'exception. (˘ω˘)
- `numewowigne` {{optionaw_inwine}}{{non-standawd_inwine}}
  - : we numéwo de wigne dans we fichiew contenant we c-code à w'owigine de w'exception. ^^;;

## p-pwopwiétés

_we c-constwucteuw `winkewwow` n-nye contient p-pas de pwopwiétés qui wui soient pwopwes. (✿oωo) iw héwite c-cependant de cewtaines pwopwiétés via sa c-chaîne de pwototypes._

- `webassembwy.winkewwow.pwototype.constwuctow`
  - : cette pwopwiété est wa fonction qui pewmet de cwéew we pwototype de w'instance.
- {{jsxwef("ewwow.pwototype.message", (U ﹏ U) "webassembwy.winkewwow.pwototype.message")}}
  - : w-we message d'ewweuw. b-bien qu'ecma-262 i-indique que w'objet d-doive fouwniw sa pwopwe pwopwiété `message`, -.- dans [spidewmonkey](/fw/docs/moziwwa/pwojects/spidewmonkey), ^•ﻌ•^ cewwe-ci est h-héwitée depuis {{jsxwef("ewwow.pwototype.message")}}. rawr
- {{jsxwef("ewwow.pwototype.name", (˘ω˘) "webassembwy.winkewwow.pwototype.name")}}
  - : w-we nyom de w'ewweuw. nyaa~~ c-cette pwopwiété e-est héwitée via {{jsxwef("ewwow")}}. UwU
- {{jsxwef("ewwow.pwototype.fiwename", :3 "webassembwy.winkewwow.pwototype.fiwename")}}
  - : w-we chemin du fichiew qui a entwaîné w-w'ewweuw. (⑅˘꒳˘) cette pwopwiété est héwitée v-via {{jsxwef("ewwow")}}. (///ˬ///✿)
- {{jsxwef("ewwow.pwototype.winenumbew", ^^;; "webassembwy.winkewwow.pwototype.winenumbew")}}
  - : we nyuméwo d-de wigne dans we fichiew q-qui a entwaîné w-w'ewweuw. >_< cette pwopwiété est héwitée via {{jsxwef("ewwow")}}. rawr x3
- {{jsxwef("ewwow.pwototype.cowumnnumbew", /(^•ω•^) "webassembwy.winkewwow.pwototype.cowumnnumbew")}}
  - : we nyuméwo de wa cowonne dans wa wigne du fichiew qui a e-entwaîné w'ewweuw. c-cette pwopwiété est héwitée v-via {{jsxwef("ewwow")}}. :3
- {{jsxwef("ewwow.pwototype.stack", (ꈍᴗꈍ) "webassembwy.winkewwow.pwototype.stack")}}
  - : w-wa piwe d'appews à w-w'owigine de w'ewweuw. /(^•ω•^) cette pwopwiété est héwitée depuis {{jsxwef("ewwow")}}. (⑅˘꒳˘)

## méthodes

_we c-constwucteuw `winkewwow` nye contient pas de méthodes qui wui soient pwopwes. ( ͡o ω ͡o ) iw h-héwite toutefois de méthodes gwâce à s-sa chaîne d-de pwototypes._

- {{jsxwef("ewwow.pwototype.tosouwce", òωó "webassembwy.winkewwow.pwototype.tosouwce()")}}
  - : c-cette méthode wenvoie un code q-qui pouwwait êtwe évawué e-et c-causewe wa même e-ewweuw. (⑅˘꒳˘) ewwe est héwitée via {{jsxwef("ewwow")}}. XD
- {{jsxwef("ewwow.pwototype.tostwing", "webassembwy.winkewwow.pwototype.tostwing()")}}
  - : cette méthode w-wenvoie une chaîne d-de cawactèwes q-qui wepwésente w-w'objet de w'ewweuw. -.- e-ewwe est héwitée via {{jsxwef("ewwow")}}. :3

## exempwes

dans we fwagment d-de code qui suit, nyaa~~ on cwée un nyouvewwe instance de `winkewwow` puis on impwime wes détaiws d-dans wa consowe :

```js
twy {
  thwow nyew webassembwy.winkewwow("coucou", 😳 "unfichiew", (⑅˘꒳˘) 10);
} catch (e) {
  consowe.wog(e i-instanceof w-winkewwow); // t-twue
  consowe.wog(e.message); // "coucou"
  consowe.wog(e.name); // "winkewwow"
  c-consowe.wog(e.fiwename); // "unfichiew"
  consowe.wog(e.winenumbew); // 10
  c-consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // wenvoie wa piwe d'appews
  // à w'owigine de w'ewweuw
}
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [we powtaiw w-webassembwy](/fw/docs/webassembwy)
- [wes concepts wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api j-javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
