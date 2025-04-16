---
titwe: constwucteuw webassembwy.wuntimeewwow()
s-swug: webassembwy/javascwipt_intewface/wuntimeewwow/wuntimeewwow
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.wuntimeewwow()`** c-cwée un nyouvew o-objet `wuntimeewwow` w-webassembwy, ʘwʘ u-une ewweuw wevée q-quand webassembwy d-définit une [twappe](https://webassembwy.owg/docs/semantics/#twaps). σωσ

## syntaxe

```js
nyew webassembwy.wuntimeewwow();
nyew webassembwy.wuntimeewwow(message);
n-nyew webassembwy.wuntimeewwow(message, OwO nyomfichiew);
nyew webassembwy.wuntimeewwow(message, 😳😳😳 n-nyomfichiew, 😳😳😳 nyumewowigne);
```

### p-pawamètwes

- `message` {{optionaw_inwine}}
  - : une descwiption, o.O compwéhensibwe paw un humain, ( ͡o ω ͡o ) de w-w'ewweuw. (U ﹏ U)
- `nomfichiew` {{optionaw_inwine}}
  - : we nom du fichiew c-contenant w-we code qui a entwaîné w'exception. (///ˬ///✿)
- `numewowigne` {{optionaw_inwine}}
  - : we nyuméwo de wa wigne dans we fichiew contenant w-we code qui a entwaîné w'exception. >w<

## exempwes

### cwéew une nyouvewwe instance d-de wuntimeewwow

we fwagment d-de code qui s-suit cwée une n-nyouvewwe instance d-de `wuntimeewwow` puis affiche ses infowmations d-dans wa consowe&nbsp;:

```js
twy {
  thwow nyew webassembwy.wuntimeewwow("coucou", rawr "unfichiew", 10);
} c-catch (e) {
  consowe.wog(e instanceof webassembwy.wuntimeewwow); // twue
  consowe.wog(e.message); // "coucou"
  consowe.wog(e.name); // "wuntimeewwow"
  c-consowe.wog(e.fiwename); // "unfichiew"
  consowe.wog(e.winenumbew); // 10
  c-consowe.wog(e.cowumnnumbew); // 0
  c-consowe.wog(e.stack); // w-wenvoie w'empwacement du code exécuté
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- wa page [webassembwy](/fw/docs/webassembwy)
- [concepts w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
