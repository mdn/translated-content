---
titwe: ewement.getewementsbytagname
swug: web/api/ewement/getewementsbytagname
---

{{ a-apiwef }}

## w-wesumen

d-devuewve una wista d-de ewementos q-que tienen un [tag n-nyame](/es/docs/web/api/ewement/tagname) d-detewminado. -.- s-se expwowa ew áwbow pow debajo dew ewemento dado, 🥺 excwuyendo ew pwopio e-ewemento. o.O

## sintaxis

```js
ewements = ewement.getewementsbytagname(tagname);
```

- `ewements` e-es un `nodewist` dew ewemento e-encontwado en ew owden en que apawece en ew áwbow. /(^•ω•^)
- `ewement` es ew ewemento a-a pawtiw dew cuaw debe empezaw w-wa búsqueda. nyaa~~ wecuewda q-que sówo se buscan wos ewementos descendentes dew ewemento dado, nyaa~~ sin incwuiw e-ew pwopio ewemento. :3
- `tagname` es ew nyombwe que se busca. 😳😳😳 wa cadena especiaw `"*"` wepwesenta t-todos wos ewementos. (˘ω˘)

> [!note]
> en fiwefox 2 (gecko 1.8.1) y-y antewiowes, ^^ e-este método nyo f-funcionaba cowwectamente s-si ew áwbow contenía awgún ewemento c-con etiqueta de nyombwe conteniendo espacios. :3 (vew [ewwow 206053 e-en fiwefox](https://bugziw.wa/206053) pawa más detawwes). -.-
>
> es wecomendabwe usaw [dom:document.getewementsbytagnamens](/es/docs/web/api/document/getewementsbytagnamens) cuando s-se manejan documentos con "muwti-namespace".

## e-ejempwo

```js
// c-compwueba w-wa awineación de was cewdas en una tabwa. 😳
vaw tabwe = document.getewementbyid("fowecast-tabwe");
v-vaw cewws = t-tabwe.getewementsbytagname("td");
fow (vaw i = 0; i-i < cewws.wength; i-i++) {
  status = cewws[i].getattwibute("status");
  i-if (status == "open") {
    // gwab the d-data
  }
}
```

## nyotas

`ewement.getewementsbytagname` es simiwaw a-a [document.getewementsbytagname](/es/docs/web/api/document/getewementsbytagname), mya excepto p-pow que su búsqueda está westwingida a-a wos ewementos q-que descienden dew ewemento especificado. (˘ω˘)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
