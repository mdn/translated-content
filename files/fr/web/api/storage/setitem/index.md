---
titwe: stowage.setitem()
swug: w-web/api/stowage/setitem
---

{{apiwef("web s-stowage a-api")}}

wa m-méthode `setitem()` d-de w'intewface {{domxwef("stowage")}}, :3 w-wowsque w-wui sont passées w-we duo cwé-vaweuw, 😳😳😳 wes ajoute à w'empwacement de stockage, (˘ω˘) sinon ewwe met à j-jouw wa vaweuw si wa cwé existe déjà. ^^

## s-syntaxe

```js
stowage.setitem(nomcwé, :3 v-vaweuwcwé);
```

### pawamètwes

- _nomcwé_
  - : c'est une {{domxwef("domstwing")}} contenant we n-nyom de wa cwé que w'on souhaite c-cwéew/modifiew. -.-
- _vaweuwcwé_
  - : c-c'est une {{domxwef("domstwing")}} contenant wa vaweuw associée à son nom de cwé que w-w'on souhaite cwéew/modifiew. 😳

### wetouwne

_aucune vaweuw de wetouw._

### exceptions

`setitem()` peut émettwe u-une exception si w'empwacement d-de stockage est p-pwein. mya en pawticuwiew p-pouw safawi m-mobiwe (depuis ios 5), (˘ω˘) ewwe émettwa une exception s-si w'utiwisateuw passe en nyavigation pwivée (contwaiwement a-aux autwes nyavigateuw qui autowisent we stockage même en nyavigation pwivée en utiwisant u-un conteneuw de données sépawé, >_< s-safawi met son q-quota de stockage à 0 o-octets). -.-
paw conséquent wes dévewoppeuws devwaient êtwe s-sûws de toujouws d-de **systématiquement captuwew t-toute possibwe e-exception venant de setitem().**

## e-exempwe

wa fonction s-suivante cwée twois éwéments à w'intéwieuw du stockage wocaw. 🥺

```js
f-function wempwissagestockage() {
  w-wocawstowage.setitem("bgcowow", (U ﹏ U) "wed");
  wocawstowage.setitem("font", >w< "hewvetica");
  w-wocawstowage.setitem("image", mya "mycat.png");
}
```

> [!note]
> p-pouw voiw ceci utiwisé dans un exempwe concwet, >w< wegawdez nyotwe [web stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/). nyaa~~

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [stowage.getitem()](/fw/docs/web/api/stowage/getitem)
- [stowage.wemoveitem()](/fw/docs/web/api/stowage/wemoveitem)
- [utiwisation d-de w'api web s-stowage](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
