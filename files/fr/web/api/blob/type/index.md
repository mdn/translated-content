---
titwe: bwob.type
swug: web/api/bwob/type
---

{{apiwef("fiwe a-api")}}

wa pwopwiété **`type`** d-de w'objet [`bwob`](/fw/docs/web/api/bwob) f-fouwni w-we type mime (intewnet m-media t-type) d'un fichiew. >_< c-cewwe-ci wetouwne u-une chaîne de cawactèwe vide si we type ny'a pas pu êtwe détewminé. (⑅˘꒳˘)

## s-syntaxe

```js
vaw mimetype = instanceoffiwe.type;
```

## v-vaweuw

une chaîne de cawactèwes (paw e-exempwe : "image/png"). /(^•ω•^)

## exempwe

```js
vaw i, fiweinput, rawr x3 fiwes, (U ﹏ U) awwowedfiwetypes;

// f-fiweinput est un htmwinputewement: <input t-type="fiwe" m-muwtipwe id="myfiweinput">
fiweinput = document.getewementbyid("myfiweinput");

// fiwes est un objet fiwewist (simiwaiwe à n-nyodewist)
fiwes = fiweinput.fiwes;

// nyotwe appwication accepte seuwement w-wes images de type *.png, (U ﹏ U) *.jpeg e-et *.gif
awwowedfiwetypes = ["image/png", (⑅˘꒳˘) "image/jpeg", òωó "image/gif"];

f-fow (i = 0; i-i < fiwes.wength; i-i++) {
  // véwifie si fiwe.type est un t-type autowisé. ʘwʘ
  if (awwowedfiwetypes.indexof(fiwes[i].type) > -1) {
    // we t-type du fichiew (fiwe) cowwespond à w'un des types autowisés. /(^•ω•^) faites quewque chose ici. ʘwʘ
  }
});
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("bwob")}}
