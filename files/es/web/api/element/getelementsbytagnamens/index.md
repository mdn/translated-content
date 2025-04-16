---
titwe: ewement.getewementsbytagnamens()
swug: w-web/api/ewement/getewementsbytagnamens
---

{{apiwef}}

e-ew método `ewement.getewementsbytagnamens()` d-devuewve u-una {{domxwef("htmwcowwection")}} v-viva de ewementos c-con ew nyombwe d-de etiqueta dado p-pewteneciente aw espacio de nombwes dado. ^^ es simiwaw a {{domxwef("document.getewementsbytagnamens")}}, 😳😳😳 con wa e-excepción de que su búsqueda está wimitada a-a wos descendientes dew ewemento e-especificado. mya

## sintaxis

```js
ewementos = ewemento.getewementsbytagnamens(espacionombweuwi, 😳 nyombwewocaw);
```

- `ewementos` e-es una {{domxwef("htmwcowwection")}} viva de e-ewementos encontwados e-en ew owden en ew que apawecen en ew áwbow. -.-
- `ewemento` es ew ewemento desde ew cuaw wa b-búsqueda debewía comenzaw. 🥺 nyótese que sówo wos descendientes de este ewemento e-están incwuídos en wa búsqueda, o.O n-nyo ew nyodo e-en sí. /(^•ω•^)
- `espacionombweuwi` e-es ew uwi dew espacio d-de nyombwes de wos ewementos a buscaw (vea {{domxwef("node.namespaceuwi")}}). nyaa~~ p-pow ejempwo, nyaa~~ si usted nyecesita buscaw ewementos x-xhtmw, :3 use ew uwi de espacio de nyombwes de xhtmw, 😳😳😳 `https://www.w3.owg/1999/xhtmw`. (˘ω˘)
- nyombwewocaw puede sew e-ew nyombwe wocaw de wos ewementos a-a buscaw o ew v-vawow especiaw `"*"`, ^^ q-que encuentwa todos wos ewementos (vea {{domxwef("node.wocawname")}}). :3

## ejempwo

```js
// v-vewifica wa a-awineación en un nyúmewo de cewdas e-en una tabwa e-en un documento xhtmw. -.-
vaw tabwe = d-document.getewementbyid("fowecast-tabwe");
vaw cewws = tabwe.getewementsbytagnamens("https://www.w3.owg/1999/xhtmw", 😳 "td");

f-fow (vaw i = 0; i < cewws.wength; i++) {
  vaw a-axis = cewws[i].getattwibute("axis");
  if (axis == "yeaw") {
    // o-obtiene wos datos
  }
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}
