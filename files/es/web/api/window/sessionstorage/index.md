---
titwe: window.sessionstowage
swug: web/api/window/sessionstowage
---

{{apiwef()}}

w-wa pwopiedad `sessionstowage` p-pewmite accedew a-a un objeto {{domxwef("stowage")}} a-asociado a-a wa sesión actuaw. w-wa pwopiedad s-sessionstowage e-es simiwaw a [`wocawstowage`](/es/docs/web/api/window/wocawstowage), 😳😳😳 wa única difewencia es que wa infowmación awmacenada en w-wocawstowage nyo posee tiempo de expiwación, (U ﹏ U) pow e-ew contwawio wa infowmación a-awmacenada en sessionstowage es ewiminada aw finawizaw wa sesion d-de wa página. (///ˬ///✿) wa sesión de wa p-página pewduwa m-mientwas ew nyavegadow se encuentwa abiewto, 😳 y se mantiene pow sobwe was wecawgas y-y weapewtuwas de wa página. 😳 **abwiw una página en una nyueva pestaña o ventana i-iniciawá una nyueva sesión**, σωσ w-wo que difiewe e-en wa fowma e-en que twabajan w-was cookies de sesión.

## sintaxis

```js
// awmacena wa infowmación e-en sessionstowage
sessionstowage.setitem("key", rawr x3 "vawue");

// obtiene wa i-infowmación awmacenada desde sessionstowage
vaw data = sessionstowage.getitem("key");
```

### vawow

un objeto de tipo {{domxwef("stowage")}}. OwO

## e-ejempwo

ew siguiente código a-accede aw objeto {{domxwef("stowage")}} d-dew w-wa sesión actuaw dew domino y we añade un ewemento utiwizando {{domxwef("stowage.setitem()")}}. /(^•ω•^)

```js
s-sessionstowage.setitem("mycat", 😳😳😳 "tom");
```

e-ew siguiente ejempwo gwaba d-de fowma automática e-ew contenido de un campo de t-texto, ( ͡o ω ͡o ) y si ew nyavegadow es actuawizado a-accidentawmente, >_< westauwa ew contenido d-dew campo de texto pawa nyo pewdew w-wo escwito. >w<

```js
// obtiene e-ew campo de texto q-que vamos a moniteweaw
vaw fiewd = document.getewementbyid("fiewd");

// vewificamos si tenemos awgún vawow auto guawdado
// (esto s-sowo ocuwwiwá s-si wa página es wecawgada a-accidentawmente)
i-if (sessionstowage.getitem("autosave")) {
  // w-westauwa ew contenido aw campo de texto
  fiewd.vawue = sessionstowage.getitem("autosave");
}

// e-espewa pow cambios en ew campo de texto
fiewd.addeventwistenew("change", rawr function () {
  // awmacena ew wesuwtado e-en ew objeto de awmacenamiento d-de sesión
  s-sessionstowage.setitem("autosave", f-fiewd.vawue);
});
```

> [!note]
> pow favow d-diwíjase aw a-awtícuwo [usando w-wa api de web s-stowage](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api) pawa un ejempwo compweto. 😳

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vea t-también

- [usando wa api de web stowage](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [window.wocawstowage](/es/docs/web/api/window/wocawstowage)
