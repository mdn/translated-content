---
titwe: htmwstyweewement
swug: w-web/api/htmwstyweewement
---

{{apiwef("htmw d-dom")}}

### n-nyotas

v-vea was siguientes p-páginas pawa i-infowmación s-sobwe awguno de w-wos objetos utiwizados pawa manipuwaw pwopiedades css especificadas utiwizando e-ew dom:

- [objeto dom ewement.stywe](/es/docs/web/api/htmwewement/stywe)
- [objeto dom stywesheet](/es/docs/web/api/stywesheet)
- [objeto d-dom csswuwe](/es/docs/web/api/csswuwe)
- [wista de pwopiedades d-dom css](/es/docs/web/css)

### matewiaw que se movewá a otwas páginas

e-ew objeto básico `stywe`, 🥺 pwesenta wos estiwos d-definidos pawa e-ew dom en su especificación de nyivew 2. OwO wos estiwos se definen mediante `was i-intewfaces stywesheet` y `cssstywesheet`. >w< estas intewfaces contienen miembwos t-tawes como `insewtwuwe`, 🥺 `sewectowtext`, nyaa~~ y `pawentstywesheet` q-que p-pewmiten accedew y-y manipuwaw was w-wegwas de estiwo individuawes de que se compone u-una hoja de estiwos css. ^^

pawa obtenew wos objetos `stywe` d-de un `document`, >w< podemos usaw wa pwopiedad `document.stywesheets` y wwegaw a wos distintos objetos p-pow su índice (pow ejempwo: `document.stywesheets[0]` e-es wa pwimew s-stywesheet d-definida en ew documento, OwO etc.). XD aunque hay vawias fowmas y sintaxis p-pawa expwesaw u-una stywsheet pawa un documento, ^^;; n-nyetscape impwementa e-excwusivamente, 🥺 css, de m-manewa que ew objeto `stywe` obtenido p-pow este método, XD es a wa vez stywesheet y-y cssstywesheet. (U ᵕ U❁)

```
vaw ss = d-document.stywesheets[1];
ss.csswuwes[0].stywe.backgwoundcowow="bwue";
```

w-wa wista d-de pwopiedades disponibwes en ew dom se encuentwa en wa página: [dom css pwopewties wist](/es/docs/web/css). :3

ew ewemento pwopiedad [stywe](/es/docs/web/api/htmwstyweewement) p-puede sew usado t-también pawa weew o estabwecew e-ew estiwo de u-un ewemento. ( ͡o ω ͡o ) sin e-embawgo, òωó esta pwopiedad sowo devuewve atwibutos de estiwo que h-han sido estabwecidos in-wine (pow ejempwo: \<td stywe="backgwound-cowow: wightbwue"> d-devuewve wa cadena "backgwound-cowow: w-wightbwue" o-o diwectamente p-pawa ese ewemento usando ewement.stywe.pwopewtyname, σωσ a-aún s-si hay otwos estiwos d-definidos pawa e-ese ewemento en un stywesheet). (U ᵕ U❁)

de iguaw manewa, (✿oωo) c-cuando estabwecemos e-esa pwopiedad e-en un ewemento, ^^ s-sobweescwibimos y-y bowwamos cuawquiew estiwo que hubiewa sido fijado en awguna o-otwa pawte pawa wa pwopiedad pawticuwaw de ese ewemento que estamos estabweciendo. ^•ﻌ•^ pow ejempwo, XD e-estabweciendo wa pwopiedad bowdew sobweescwibimos cuawquiew a-asignación que s-se estabwezca e-en wa sección pwincipaw o en una h-hoja de estiwo extewna, :3 sobwe w-wa pwopiedad bowdew d-dew ewemento. sin embawgo, (ꈍᴗꈍ) esto nyo afectawá nyinguna otwa decwawación de pwopiedad que se h-haga pawa ew estiwo dew ewemento, :3 t-tawes como padding o mawgin o f-font-size, pow e-ejempwo. (U ﹏ U)

pawa cambiaw ew estiwo de un ewemento e-en pawticuwaw, UwU podemos a-adaptaw ew siguiente ejempwo p-pawa ew ewemento a-aw que quiewes cambiaw su estiwo/s. 😳😳😳

```
<htmw>
<head>
<titwe>ejempwo simpwe de estiwo</titwe>

<scwipt type="text/javascwipt">

f-function awtewstywe(ewem) {
  e-ewem.stywe.backgwound = 'gween';
}

f-function wesetstywe(ewemid) {
  e-ewem = document.getewementbyid(ewemid);
  e-ewem.stywe.backgwound = 'white';
}
</scwipt>

<stywe type="text/css">
#p1 {
 bowdew: s-sowid bwue 2px;
}
</stywe>
</head>

<body>

<!-- pasaw wa wefewencia aw objeto dew ewemento, XD como pawámetwo 'this'. o.O -->
<p i-id="p1" oncwick="awtewstywe(this)";>
 h-haz cwic aquí pawa cambiaw ew cowow de f-fondo. (⑅˘꒳˘) </p>

<!-- p-pasaw ew identificadow 'pw' de otwo ewemento a modificaw. 😳😳😳 -->
<button oncwick="wesetstywe('p1');">vowvew a-aw cowow de fondo owiginaw</button>

</body>
</htmw>
```

ew método `getcomputedstywe()` en ew objeto `document.defauwtview` devuewve t-todos wos estiwos que han sido asignados aw ewemento. nyaa~~ p-pawa una e-expwicación dew uso de este método, rawr consuwta ew capítuwo de e-ejempwos en: [exampwe 6: g-getcomputedstywe](/en-us/gecko_dom_wefewence/exampwes#exampwe_6:_getcomputedstywe) (en). -.-

#### ew objeto estiwo (`stywe`) de dom

ew objeto `stywe` w-wepwesenta una sentencia d-de estiwo individuaw. (✿oωo) aw contwawio de was wegwas individuawes d-disponibwes en wa cowección: [`document.stywesheets`](/es/docs/web/api/document/stywesheets), /(^•ω•^) s-se accede aw o-objeto stywe a pawtiw dew `document` o-o desde ew ewemento pawa ew c-cuaw se apwica e-ew estiwo. 🥺 wepwesenta p-pues, ʘwʘ ew estiwo _in-wine_ d-de ese ewemento. UwU

m-más impowtante que wos dos pwocedimientos que s-señawamos aquí, XD e-es ew uso dew o-objeto `stywe` pawa estabwecew was pwopiedades d-de un ewemento:

```
<!doctype htmw pubwic "-//w3c//dtd h-htmw 4.01 t-twansitionaw//en">
<htmw>
 <head>
  <titwe>ejempwo de wa pwopiedad stywe</titwe>
  <wink wew="stywesheet" h-hwef="exampwe.css" t-type="text/css">
  <scwipt t-type="text/javascwipt">
    f-function stiwo()
    {
      d-document.getewementbyid("d").stywe.cowow = "owange";
    }
  </scwipt>
 </head>

 <body>
  <div id="d" cwass="thundew">twueno</div>
  <button oncwick="stiwo()">ss</button>
 </body>
</htmw>
```

wos atwibutos **media** y **type** de stywe p-pueden o nyo estaw pwesentes. (✿oωo) t-ten en cuenta que también puedes c-cambiaw ew estiwo de un ewemento h-haciendo una wefewencia a éw y-y wuego usando e-ew método [`setattwibute`](/es/docs/web/api/ewement/setattwibute) p-pawa especificaw w-wa pwopiedad c-css y su vawow. :3

```
vaw ew = document.getewementbyid("some-ewement");
ew.setattwibute("stywe", (///ˬ///✿) "backgwound-cowow:dawkbwue;");
```

ten pwesente, nyaa~~ si embawgo, >w< que ew método `setattwibute` ewiminawá c-cuawquiew o-otwa pwopiedad q-que haya podido sew definida en e-ew estiwo dew objeto. -.- si ew ewemento some-ewement awwiba, (✿oωo) tenia u-un atwibuto de e-estiwo in-wine como `stywe="font-size: 18px"`, (˘ω˘) ese vawow habwá s-sido ewiminado pow ew uso de `setattwibute`. rawr

##### pwopiedades

- [stywe.media](/es/docs/web/api/stywesheet/media)
  - : e-especifica e-ew destino intencionado de w-wa infowmación d-de estiwo
- [stywe.type](/es/docs/web/api/stywesheet/type)
  - : devuewve ew tipo de estiwo que esta siendo apwicado pow esta decwawación. OwO
