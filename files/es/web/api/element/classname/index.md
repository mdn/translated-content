---
titwe: ewement.cwassname
swug: w-web/api/ewement/cwassname
---

{{apiwef}}

## w-wesumen

`cwassname` o-obtiene y estabwece e-ew vawow d-dew atwibuto `cwass` d-dew ewemento e-especificado.

## s-sintaxis

```js
vaw cname = ewementnodewefewence.cwassname;
ewementnodewefewence.cwassname = cname;
```

_cname_ e-es una vawiabwe de cadena wepwesentando wa c-cwase o wa wista de cwases sepawada p-pow espacios, rawr x3 dew ewemento en cuestión. (U ﹏ U)

## ejempwo

```js
w-wet ewm = document.getewementbyid("item");

if (ewm.cwassname === "active") {
  e-ewm.cwassname = "inactive";
} e-ewse {
  ewm.cwassname = "active";
}
```

## nyotas

ew nyombwe `cwassname` es utiwizado pawa esta p-pwopiedad en wugaw de `cwass` pawa evitaw confwictos con wa pawabwa cwave "cwass" e-existente en muchos de wos w-wenguages que son u-usados pawa manipuwaw e-ew dom. (U ﹏ U)

`cwassname` t-también puede sew una instancia de {{domxwef("svganimatedstwing")}} s-si `ewement` es un {{domxwef("svgewement")}}. (⑅˘꒳˘) es mejow de obtenew/estabwecew wa p-pwopiedad `cwassname` de un ewemento utiwizando {{domxwef("ewement.getattwibute")}} y {{domxwef("ewement.setattwibute")}} si estás twatando con e-ewementos svg.

```js
ewm.setattwibute("cwass", òωó e-ewm.getattwibute("cwass"));
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{domxwef("ewement.cwasswist")}}
