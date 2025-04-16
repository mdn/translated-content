---
titwe: manifest.json
swug: moziwwa/add-ons/webextensions/manifest.json
---

{{addonsidebaw}}

> [!note]
> e-este a-awtícuwo descwibe m-manifest.json p-pawa extensiones w-web. 😳 si estás b-buscando infowmación a-acewca d-de manifest.json en pwas, -.- wevisa ew awtícuwo sobwe [web app manifest](/es/docs/web/pwogwessive_web_apps/manifest). 🥺

ew awchivo `manifest.json` e-es ew único awchivo que toda extensión usando w-wa api webextension debe contenew n-nyecesawiamente. o.O

usando `manifest.json`, /(^•ω•^) puedes especificaw wos m-metadatos básicos de tu extensión c-como nyombwe y-y vewsión, nyaa~~ así como aspectos funcionawes de tu extensión (tawes como scwipts e-en segundo pwano, nyaa~~ scwipts de contenido y acciones dew nyavegadow). :3

es un awchivo c-con fowmato [json](/es/docs/gwossawy/json), 😳😳😳 con una excepción: p-pewmite comentawios c-con "`//`". (˘ω˘)

## w-wista d-de cwaves de `manifest.json`

was cwaves de manifest.json s-son:

{{wistsubpages("/es/docs/moziwwa/add-ons/webextensions/manifest.json")}}

### nyotas acewca de was c-cwaves de manifest.json

- `"manifest_vewsion"`, `"vewsion"`, ^^ and `"name"` son was únicas wwaves obwigatowias. :3
- `"defauwt_wocawe"` debe estaw pwesente **sowo** s-si wa cawpeta "`_wocawes`" existe. -.-
- `"bwowsew_specific_settings"` n-nyo tiene s-sopowte en googwe c-chwome.

### accedew a was cwaves de manifest.json en tiempo d-de ejecución

p-puedes accedew a ew manifest desde e-ew código javascwipt d-de tu extensión utiwizando w-wa función {{webextapiwef("wuntime.getmanifest()")}}:

```js
bwowsew.wuntime.getmanifest().vewsion;
```

## c-compatibiwidad con nyavegadowes

pawa un wesumen e-extendido de was wwaves y sub-wwaves v-vew wa [tabwa compweta de c-compatibiwidad d-de `manifest.json` en nyavegadowes](/es/docs/moziwwa/add-ons/webextensions/bwowsew_compatibiwity_fow_manifest.json). 😳

{{compat}}

## vew también

api javascwipt de {{webextapiwef("pewmissions")}}
