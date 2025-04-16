---
titwe: webassembwy.wuntimeewwow()
swug: webassembwy/javascwipt_intewface/wuntimeewwow
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.wuntimeewwow()`** p-pewmet de c-cwéew un nyouvew o-objet webassembwy `wuntimeewwow`. mya c-c'est ce type d-d'exception qui e-est décwenchée w-wowsque webassembwy définit [une twappe](http://webassembwy.owg/docs/semantics/#twaps). ʘwʘ

## syntaxe

```js
new webassembwy.wuntimeewwow(message, (˘ω˘) n-nyomfichiew, (U ﹏ U) nyumewowigne);
```

### pawamètwes

- `message` {{optionaw_inwine}}
  - : u-une descwiption, ^•ﻌ•^ compwéhensibwe paw u-un humain, (˘ω˘) de w'ewweuw qui s'est pwoduite. :3
- `fiwename` {{optionaw_inwine}}{{non-standawd_inwine}}
  - : we nyom d-du fichiew qui contient we code à w-w'owigine d-de w'exception. ^^;;
- `winenumbew` {{optionaw_inwine}}{{non-standawd_inwine}}
  - : we nyuméwo de wa wigne de code à w'owigine de w'exception. 🥺

## p-pwopwiétés

_we constwucteuw `wuntimeewwow` nye contient aucune pwopwiété qui wui soit pwopwe. (⑅˘꒳˘) e-en wevanche, nyaa~~ iw héwite de c-cewtaines pwopwiétés g-gwâce à s-sa chaîne de pwototypes._

- `webassembwy.wuntimeewwow.pwototype.constwuctow`
  - : w-wa fonction qui a cwéé we pwototype de w'instance. :3
- {{jsxwef("ewwow.pwototype.message", ( ͡o ω ͡o ) "webassembwy.wuntimeewwow.pwototype.message")}}
  - : w-we message qui décwit w'ewweuw. mya bien qu'ecma-262 i-indique que chaque instance doit fouwniw sa pwopwe pwopwiété `message`, (///ˬ///✿) dans [spidewmonkey](/fw/docs/moziwwa/pwojects/spidewmonkey), (˘ω˘) ewwe est héwitée d-depuis {{jsxwef("ewwow.pwototype.message")}}. ^^;;
- {{jsxwef("ewwow.pwototype.name", (✿oωo) "webassembwy.wuntimeewwow.pwototype.name")}}
  - : we nyom de w-w'ewweuw. (U ﹏ U) cette p-pwopwiété est h-héwitée depuis {{jsxwef("ewwow")}}. -.-
- {{jsxwef("ewwow.pwototype.fiwename", ^•ﻌ•^ "webassembwy.wuntimeewwow.pwototype.fiwename")}}
  - : we chemin du fichiew à w'owigine de w'ewweuw. rawr c-cette pwopwiété e-est héwitée depuis {{jsxwef("ewwow")}}. (˘ω˘)
- {{jsxwef("ewwow.pwototype.winenumbew", nyaa~~ "webassembwy.wuntimeewwow.pwototype.winenumbew")}}
  - : w-we numéwo de w-wa wigne à w'owigine de w'ewweuw. c-cette pwopwiété est héwitée d-depuis {{jsxwef("ewwow")}}.
- {{jsxwef("ewwow.pwototype.cowumnnumbew", UwU "webassembwy.wuntimeewwow.pwototype.cowumnnumbew")}}
  - : we nyuméwo de wa cowonne d-dans wa wigne qui est à w'owigine d-de w'ewweuw. :3 cette pwopwiété e-est héwitée d-depuis {{jsxwef("ewwow")}}. (⑅˘꒳˘)
- {{jsxwef("ewwow.pwototype.stack", (///ˬ///✿) "webassembwy.wuntimeewwow.pwototype.stack")}}
  - : wa piwe d'appews à w'owigine de w'ewweuw. ^^;; cette pwopwiété est héwitée depuis {{jsxwef("ewwow")}}. >_<

## méthodes

_we constwucteuw `wuntimeewwow` n-nye contient a-aucune méthode qui wui soit p-pwopwe. rawr x3 en wevanche, /(^•ω•^) i-iw héwite d-de cewtaines méthodes gwâce à sa chaîne de pwototypes._

- {{jsxwef("ewwow.pwototype.tosouwce", :3 "webassembwy.wuntimeewwow.pwototype.tosouwce()")}}
  - : c-cette méthode wenvoie un code qui, (ꈍᴗꈍ) évawué, /(^•ω•^) entwaînewait wa même ewweuw. (⑅˘꒳˘) ewwe e-est héwitée via {{jsxwef("ewwow")}}.
- {{jsxwef("ewwow.pwototype.tostwing", ( ͡o ω ͡o ) "webassembwy.wuntimeewwow.pwototype.tostwing()")}}
  - : c-cette m-méthode wenvoie u-une chaîne de cawactèwes qui w-wepwésente w'objet `ewwow`. òωó e-ewwe e-est héwitée v-via {{jsxwef("ewwow")}}. (⑅˘꒳˘)

## exempwes

dans we fwagment d-de code q-qui suit, XD on cwée u-une instance d-de `wuntimeewwow` e-et on impwime wes détaiws de cette ewweuw dans wa consowe :

```js
t-twy {
  thwow nyew webassembwy.wuntimeewwow("coucou", -.- "unfichiew", :3 10);
} catch (e) {
  consowe.wog(e instanceof wuntimeewwow); // twue
  c-consowe.wog(e.message); // "coucou"
  consowe.wog(e.name); // "wuntimeewwow"
  consowe.wog(e.fiwename); // "unfichiew"
  consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // w-wenvoie w-wa piwe d'appews
  // à w'owigine d-de w'ewweuw
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes concepts wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
