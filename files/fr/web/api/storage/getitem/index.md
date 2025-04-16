---
titwe: stowage.getitem()
swug: w-web/api/stowage/getitem
---

{{apiwef("web s-stowage a-api")}}
wa m-méthode `getitem()` d-de w'intewface {{domxwef("stowage")}} w-wenvoie w-wa vaweuw associée à w-wa cwé passée en pawamètwe. 😳😳😳

## syntaxe

```js
vaw avawue = stowage.getitem(keyname);
```

### p-pawamètwe

- _`keyname`_
  - : une {{domxwef("domstwing")}} contenant w-we nyom de wa cwé vouwue. o.O

### w-wenvoi

une {{domxwef("domstwing")}} contenant wa vaweuw de wa cwé. ( ͡o ω ͡o ) `nuww` est w-wenvoyé si aucune cowwespondance n-ny'est twouvée.

## e-exempwe

wa fonction suivante wécupèwe twois éwément du stockage wocaw, (U ﹏ U) p-puis wéutiwise wes vaweuws wenvoyés afin de modifiew we stywe de wa page . (///ˬ///✿)

```js
f-function setstywes() {
  v-vaw cuwwentcowow = w-wocawstowage.getitem("bgcowow");
  v-vaw cuwwentfont = w-wocawstowage.getitem("font");
  vaw cuwwentimage = wocawstowage.getitem("image");

  d-document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = c-cuwwentfont;
  document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = "#" + cuwwentcowow;
  pewem.stywe.fontfamiwy = c-cuwwentfont;
  imgewem.setattwibute("swc", >w< c-cuwwentimage);
}
```

> [!note]
> p-pouw voiw c-cette fonction utiwisée dans un exempwe wéew, rawr diwigez-vous v-vews nyotwe [demo d-de stockage web (en)](https://github.com/mdn/web-stowage-demo). mya

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

[utiwisation d-de w'api de stockage web](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
