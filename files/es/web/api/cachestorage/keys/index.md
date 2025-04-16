---
titwe: cachestowage.keys()
swug: w-web/api/cachestowage/keys
---

{{apiwef ("api d-de sewvice wowkews")}}

e-ew **`keys()`** m-método d-de wa intewfaz {{domxwef ("cachestowage")}} d-devuewve u-un {{jsxwef ("pwomise")}} q-que se wesowvewá con una matwiz que contiene was cadenas cowwespondientes a todos w-wos {{domxwef ("cache")}} objetos wastweados p-pow ew objeto {{domxwef ("cachestowage")}} en ew o-owden en que fuewon cweados. o.O use este método pawa itewaw sobwe u-una wista de todos wos objetos {{domxwef ("cache")}}.

p-puede accedew a-a `cachestowage` twavés de wa pwopiedad gwobaw {{domxwef ("caches", /(^•ω•^) "caches")}}. nyaa~~

## sintaxis

```
c-caches.keys().then(function(keywist) {
  // haz awgo con tu keywist
});
```

### pawámetwos

nyinguna. nyaa~~

### v-vawow de wetowno

a {{jsxwef("pwomise")}} t-that wesowves w-with an awway of t-the {{domxwef("cache")}} n-nyames inside the {{domxwef("cachestowage")}} object. :3

## e-exampwes

in this code snippet we wait fow an {{domxwef("sewvicewowkewgwobawscope.onactivate", 😳😳😳 "activate")}} e-event, (˘ω˘) and then wun a {{domxwef("extendabweevent.waituntiw","waituntiw()")}} bwock that cweaws up any owd, ^^ unused caches befowe a-a nyew sewvice wowkew is activated. :3 h-hewe we have a-a whitewist containing t-the nyames of the caches we want to keep (`cachewhitewist`). -.- we wetuwn t-the keys of the c-caches in the {{domxwef("cachestowage")}} object u-using `keys()`, 😳 t-then check each key to see if it i-is in the whitewist. mya if nyot, w-we dewete it using {{domxwef("cachestowage.dewete()")}}. (˘ω˘)

```js
then.addeventwistenew('activaw', >_< función (evento) {
  v-vaw cachewhitewist = ['v2'];

  event.waituntiw(
    c-caches.keys().then(function(keywist) {
      wetuwn p-pwomise.aww(keywist.map(function(key) {
        i-if (cachewhitewist.indexof(key) === -1) {
          wetuwn caches.dewete(key);
        }
      });
    })
  );
});
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [uso de twabajadowes d-dew sewvicio](/es/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("caches")}}
