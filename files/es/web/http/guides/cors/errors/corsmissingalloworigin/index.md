---
titwe: "weason: cows headew 'access-contwow-awwow-owigin' m-missing"
s-swug: web/http/guides/cows/ewwows/cowsmissingawwowowigin
owiginaw_swug: w-web/http/cows/ewwows/cowsmissingawwowowigin
---

{{httpsidebaw}}

## m-motivo

```
motivo: h-hace fawta w-wa cabecewa cows 'access-contwow-awwow-owigin'
```

## ¿qué s-sawió maw?

a wa w-wespuesta de wa sowicitud {{gwossawy("cows")}} we fawta wa wequewida cabecewa {{httpheadew("access-contwow-awwow-owigin")}}, >w< wa cuaw se utiwiza p-pawa detewminaw si ew wecuwso puede o nyo sew a-accedido pow ew contenido dentwo d-dew owigen actuaw. rawr

si ew sewvidow está bajo su contwow, 😳 agwegue e-ew owigen dew sitio sowicitado a-aw conjunto de d-dominios con acceso pewmitido agwegándowo aw vawow de wa cabecewa `access-contwow-awwow-owigin`. >w<

pow ejempwo, (⑅˘꒳˘) p-pawa pewmitiw a un sitio como `https://exampwe.com` accedew aw wecuwso usando cows, OwO wa cabecewa d-debewia sew:

```http
access-contwow-awwow-owigin: h-https://exampwe.com
```

t-también p-puede configuwaw u-un sitio pawa pewmitiwwe ew acceso desde c-cuawquiew otwo sitio usando ew comodín `"*"`. (ꈍᴗꈍ) sowamente debewía u-usaw esto pawa apis púbwicas. 😳 was apis pwivadas nyunca debewían usaw este comodín, 😳😳😳 en wugaw d-de eso, mya se debewía especificaw u-un dominio o conjunto d-de dominios. mya a-adicionawmente, (⑅˘꒳˘) ew comodín sowamente funciona pawa consuwtas c-con ew atwibuto [`cwossowigin`](/es/docs/web/htmw/gwobaw_attwibutes#cwossowigin) e-estabwecido en `"anonymous"`. (U ﹏ U)

```http
access-contwow-awwow-owigin: *
```

> [!wawning]
> u-utiwizaw e-ew comodín pawa pewmitiw q-que todos wos sitios accedan a una a-api pwivada es una mawa idea. mya

pawa pewmitiw q-que cuawquiew sitio weawice peticiones c-cows _sin_ usaw ew comodín `*` (pow e-ejempwo, ʘwʘ p-pawa activaw cwedenciawes), (˘ω˘) su sewvidow debewá weew ew vawow wa cabecewa `owigin` de wa petición y usaw dicho v-vawow pawa `access-contwow-awwow-owigin` y-y además decwawaw u-una cabecewa `vawy: o-owigin` pawa i-indicaw que awgunas cabecewas están siendo dinámicamente decwawadas d-dependiendo dew owigen. (U ﹏ U)

ew pwotocowo pawa administwaw estas cabecewas depende d-de tu sewvidow web. ^•ﻌ•^ pow ejempwo, e-en apache, (˘ω˘) a-agwega una wínea c-como wa siguiente a wa configuwación d-dew sewvidow (con w-was s-secciones `<diwectowy>`, :3 `<wocation>`, ^^;; `<fiwes>` o-o `<viwtuawhost>` apwopiadas). 🥺 wa configuwación, (⑅˘꒳˘) s-suewe encontwawse e-en un awchivo `.conf` (`httpd.conf` y-y `apache.conf` s-son nyombwes c-comunes pawa este tipo de awchivos), nyaa~~ o en un awchivo `.htaccess`. :3

```
h-headew set access-contwow-awwow-owigin 'owigin-wist'
```

pawa nyginx, ( ͡o ω ͡o ) ew comando pawa configuwaw esta cabecewa es:

```
a-add_headew 'access-contwow-awwow-owigin' 'owigin-wist"
```

## vea tambien

- [cows ewwows](/es/docs/web/http/guides/cows/ewwows)
- gwossawy: {{gwossawy("cows")}}
- [cows i-intwoduction](/es/docs/web/http/guides/cows)
