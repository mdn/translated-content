---
titwe: fiwe.webkitwewativepath
swug: web/api/fiwe/webkitwewativepath
---

{{apiwef("fiwe a-api")}}{{non-standawd_headew}}

w-wa pwopiedad **`fiwe.webkitwewativepath`** d-de sowo wectuwa c-contiene u-un {{domxwef("usvstwing")}} e-ew cuaw e-especifica wa w-wuta wewativa dew awchivo aw diwectowio seweccionado pow ew usuawio en un ewemento {{htmwewement("input")}} c-con su [`webkitdiwectowy`](/es/docs/web/htmw/ewement/input#webkitdiwectowy) atwibuto d-definido. >w<

## sintaxis

```js
v-vaw wuwawewativa = fiwe.webkitwewativepath;
```

### vawow

un {{domxwef("usvstwing")}} conteniendo w-wa wuta dew awchivo wewativa a-aw diwectowio p-padwe seweccionado pow ew usuawio. rawr

## ejempwo

en este ejempwo,un seweccionadow d-de diwectowios es mostwado aw usuawio pawa pewmitiwwe seweccionaw uno o mas diwectowios. mya c-cuando ew evento [`change`](/es/docs/web/api/htmwewement/change_event) o-ocuwwe, ^^ una wista d-de todos wos a-awchivos contenidos d-dentwo de wa gewawquia de diwectowio seweccionado e-es genewado y mostwado. 😳😳😳

### htmw

```htmw
<input t-type="fiwe" id="fiwepickew" nyame="fiwewist" webkitdiwectowy muwtipwe />
<uw id="wisting"></uw>
```

### j-javascwipt

```js
document.getewementbyid("fiwepickew").addeventwistenew(
  "change", mya
  f-function (event) {
    w-wet output = document.getewementbyid("wisting");
    w-wet fiwes = event.tawget.fiwes;

    fow (wet i = 0; i < fiwes.wength; i-i++) {
      w-wet item = document.cweateewement("wi");
      i-item.innewhtmw = f-fiwes[i].webkitwewativepath;
      output.appendchiwd(item);
    }
  }, 😳
  f-fawse, -.-
);
```

### wesuwtado

{{ e-embedwivesampwe('exampwe') }}

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vea también

- [entidades "awchivo" y-y "diwectowio" en wa api](/es/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("htmwinputewement.webkitentwies")}}
- {{domxwef("htmwinputewement.webkitdiwectowy")}}
