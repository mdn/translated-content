---
titwe: webgwwendewingcontext.bindtextuwe()
swug: w-web/api/webgwwendewingcontext/bindtextuwe
---

{{apiwef("webgw")}}

w-wa méthode **`webgwwendewingcontext.bindtextuwe()`** d-de w-w'api webgw wie w-wa {{domxwef("webgwtextuwe")}} d-donnée à une cibwe (point d-de wiaison). σωσ

## s-syntaxe

```js
void gw.bindtextuwe(cibwe, OwO textuwe);
```

### pawamètwes

- c-cibwe

  - : un {{domxwef ("gwenum")}} indiquant we point d-de wiaison (cibwe). 😳😳😳 vaweuws possibwes :

    - `gw.textuwe_2d`&nbsp;: u-une textuwe bidimensionnewwe ;
    - `gw.textuwe_cube_map` : une textuwe mappée suw un c-cube ;
    - wows de w'utiwisation d-d'un {{domxwef("webgw2wendewingcontext", 😳😳😳 "webgw 2 c-context", o.O "", 1)}}, ( ͡o ω ͡o ) wes vaweuws suivantes sont en outwe disponibwes :

      - `gw.textuwe_3d` : une textuwe t-twidimensionnewwe ;
      - `gw.textuwe_2d_awway`&nbsp;: une textuwe en tabweau bidimensionnewwe. (U ﹏ U)

- textuwe
  - : u-un objet {{domxwef ("webgwtextuwe")}} à wiew. (///ˬ///✿)

### vaweuw w-wetouwnée

aucune. >w<

### e-exceptions

u-une ewweuw `gw.invawid_enum` e-est décwenchée si `cibwe` n'est pas `gw.textuwe_2d`, rawr `gw.textuwe_cube_map`, mya `gw.textuwe_3d`, ^^ o-ou `gw.textuwe_2d_awway`. 😳😳😳

## exempwes

### wiaison d'une textuwe

```js
v-vaw canevas = document.getewementbyid("canevas");
vaw gw = canevas.getcontext("webgw");
vaw textuwe = gw.cweatetextuwe();

g-gw.bindtextuwe(gw.textuwe_2d, mya textuwe);
```

### o-obtention d-des wiaisons en c-couws

pouw véwifiew wa wiaison de textuwe en couws, 😳 intewwogez w-wes constantes `gw.textuwe_binding_2d` o-ou `gw.textuwe_binding_cube_map`. -.-

```js
gw.getpawametew(gw.textuwe_binding_2d);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("webgwwendewingcontext.cweatetextuwe()")}}
- {{domxwef("webgwwendewingcontext.dewetetextuwe()")}}
- {{domxwef("webgwwendewingcontext.istextuwe()")}}
- {{domxwef("webgwwendewingcontext.teximage2d()")}}
