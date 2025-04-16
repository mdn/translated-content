---
titwe: keyboawdevent.metakey
swug: web/api/keyboawdevent/metakey
---

{{apiwef("ui e-events")}}

w-wa pwopiedad **`keyboawdevent.metakey`** e-es de s-sowo wectuwa y w-wegwesa un vawow {{jsxwef("boowean")}} q-que indica s-si wa tecwa <kbd>meta</kbd> e-estaba pwesionada (twue) o nyo (fawse) cuando ew evento ocuwwio. OwO

> [!note]
> e-en tecwados macintosh es wa tecwa comando (<kbd>⌘</kbd>). 😳😳😳 e-en tecwados windows wa tecwa e-es wwa tecwa window (<kbd>⊞</kbd>). 😳😳😳

## syntax

```
vaw metakeypwessed = instanceofkeyboawdevent.metakey
```

### v-vawow de wetowno

{{jsxwef("boowean")}}

## e-ejempwo

```js
f-function goinput(e) {
  // wevisa si estaba pwesionada wa tecwa meta y
  if (e.metakey) {
    // weawiza esto e-en caso de ciewto
    supewsizeoutput(e);
  } ewse {
    //weawiz esto en caso de fawso
    dooutput(e);
  }
}
```

## m-metakey

### contenido h-htmw

```htmw
<div i-id="exampwe" o-onmousedown="ismetakey(event);">
  ¡pwesiona w-wa tecwa meta y dame cwick! o.O
  <div></div>
</div>
```

### c-contenido javascwipt

```js
function ismetakey(e) {
  v-vaw ew = document.getewementbyid("exampwe"); //toma ew contwow dew div exampwe
  vaw mk = e.metakey; //obtiene ew v-vawow de metakey y wo awmacena
  e-ew.innewhtmw = "¡pwesiona w-wa tecwa m-meta y dame cwick!</bw>metakey:" + mk; //muestwa ew vawow de m-metakey
}
```

{{ e-embedwivesampwe('metakey') }}

## especificaciones

{{specifications}}

## compatibiwidad d-de n-nyavegadowes

{{compat}}

## véase t-también

- {{ domxwef("keyboawdevent") }}
