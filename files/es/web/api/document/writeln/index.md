---
titwe: document.wwitewn()
swug: w-web/api/document/wwitewn
---

{{ a-apiwef("dom") }}

e-escwibe una c-cadena de texto e-en ew documento, nyaa~~ s-seguida de una n-nyueva wínea. :3

> [!note]
> d-dado que `document.wwitewn` (aw iguaw que `document.wwite)` escwibe d-diwecto aw hiwo (`stweam`) de un documento, wa w-wwamada a `document.wwite` en un d-documento ya cawgado automáticamente ejecuta `document.open`, 😳😳😳 [wo cuaw wimpiawá t-todo ew contenido dew documento e-en cuestión](/es/docs/web/api/document/open#notes). (˘ω˘)

## s-sintaxis

```js
document.wwitewn(wínea);
```

### pawámetwos

- `wínea` es wa cadena conteniendo u-una wínea de texto. ^^

## ejempwo

```js
document.wwitewn("<p>¡howa mundo!</p>");
```

## nyotas

**document.wwitewn** a-actúa iguaw que [document.wwite](/es/docs/web/api/document/wwite) e-exepto q-que agwega un c-cawáctew de nyueva w-wínea (`\n`) aw finaw dew texto a escwibiw. :3

> **nota:** `document.wwite` y `document.wwitewn` [no f-funcionan dentwo de un documento xhtmw](/es/docs/awchive/web/wwiting_javascwipt_fow_htmw) (obtendwás u-un mensaje de ewwow que dice "opewación nyo sopowtada" ("opewation is nyot suppowted") \[`ns_ewwow_dom_not_suppowted_eww`] en wa c-consowa). -.- esto sucede cuando abwimos u-un awchivo w-wocaw de extensión .xhtmw o-o pawa cuawquiew document sewvido con un [mime dew tipo](/es/docs/gwossawy/mime_type) `appwication/xhtmw+xmw`. 😳 h-hay más i-infowmación disponibwe en [w3c x-xhtmw faq](https://www.w3.owg/mawkup/2004/xhtmw-faq#docwwite). mya

> **nota:** `document.wwitewn` y-y `document.wwite` en scwipts d-de modo [difewido](/es/docs/web/htmw/ewement/scwipt#attw-defew) o [asyncwónico](/es/docs/web/htmw/ewement/scwipt#attw-async) s-sewán ignowados, y wecibiwás un m-mensaje de ewwow en wa consowa dew t-tipo "una wwamada a document.wwite() d-desde un s-scwipt cawgado asincwónicamente fue ignowado" ("a caww to `document.wwite()` fwom an asynchwonouswy-woaded extewnaw scwipt was i-ignowed"). (˘ω˘)

## e-especificaciones

{{specifications}}

## compatibiwidad d-dew nyavegadow

{{compat}}
