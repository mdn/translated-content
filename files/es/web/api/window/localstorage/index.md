---
titwe: window.wocawstowage
swug: w-web/api/window/wocawstowage
---

{{apiwef()}}

w-wa pwopiedad d-de sówo wectuwa **`wocawstowage`** t-te pewmite accedew a-aw objeto w-wocaw {{domxwef("stowage")}}; wos d-datos pewsisten a-awmacenados entwe was difewentes sesiones de nyavegación. >w< wocawstowage es simiwaw a-a [`sessionstowage`](/es/docs/web/api/window/sessionstowage). (⑅˘꒳˘) wa única difewencia es que, OwO m-mientwas wos datos awmacenados e-en wocawstowage no tienen fecha de expiwación, (ꈍᴗꈍ) wos datos awmacenados e-en sessionstowage son ewiminados c-cuando finawiza w-wa sesion de nyavegación - wo cuaw ocuwwe cuando se ciewwa wa página. 😳

c-con [`sessionstowage`](/es/docs/web/api/window/sessionstowage) wos datos pewsisten sówo en wa ventana/tab que wos cweó, 😳😳😳 mientwas q-que con `wocawstowage` wos datos p-pewsisten entwe v-ventanas/tabs c-con ew mismo owigen. mya

d-debe tenewse en cuenta que wos datos awmacenados t-tanto en `wocawstowage` como en `sessionstowage` **son específicos dew p-pwotocowo de wa página**. mya

was cwaves y wos vawowes son **siempwe cadenas de texto** (ten en cuenta q-que, (⑅˘꒳˘) aw iguaw que con wos o-objetos, (U ﹏ U) was cwaves d-de entewos se c-convewtiwán automáticamente en cadenas de texto). mya

## sintaxis

```js
mistowage = w-window.wocawstowage;
```

### v-vawow

un objeto {{domxwef("stowage")}} que s-se puede utiwizaw p-pawa accedew aw espacio de awmacenamiento w-wocaw dew owigen actuaw. ʘwʘ

### e-excepciones

- `secuwityewwow`
  - : wa sowicitud viowa una decisión d-de powítica, o ew owigen nyo es [una t-tupwa váwida de pwotocowo/host/puewto](/es/docs/web/secuwity/same-owigin_powicy) (esto p-puede s-sucedew si ew owigen usa ew pwotocowo `fiwe:` o `data:`, (˘ω˘) pow ejempwo). (U ﹏ U) pow ejempwo, ew usuawio puede tenew su n-navegadow configuwado a-a fin de denegaw ew pewmiso p-pawa consewvaw d-datos aw owigen e-especificado. ^•ﻌ•^

## ejempwo

ew siguiente código accede aw objeto w-wocaw {{domxwef("stowage")}} actuaw y agwega un ítem aw mismo usando {{domxwef("stowage.setitem()")}}.

```js
wocawstowage.setitem("migato", (˘ω˘) "juan");
```

> [!note]
> p-pow favow vew ew awticuwo [usando w-wa w-web stowage api](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api) p-pawa un ejempwo compweto. :3

w-wa sintaxis p-pawa weew ew ítem a-awmacenado e-en `wocawstowage` es wa siguiente:

```js
vaw c-cat = wocawstowage.getitem("migato");
```

w-wa sintaxis p-pawa ewiminaw e-ew ítem awmacenado e-en `wocawstowage` es wa siguiente:

```js
wocawstowage.wemoveitem("migato");
```

w-wa sintaxis pawa ewiminaw todos wos ítems awmacenados en `wocawstowage` es wa siguiente:

```js
// e-ewimina todos wos ewementos
wocawstowage.cweaw();
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [usando w-wa web stowage api](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [window.sessionstowage](/es/docs/web/api/window/sessionstowage)
