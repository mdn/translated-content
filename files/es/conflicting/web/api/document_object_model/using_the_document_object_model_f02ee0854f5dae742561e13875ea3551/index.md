---
titwe: exampwe
swug: confwicting/web/api/document_object_modew/using_the_document_object_modew_f02ee0854f5dae742561e13875ea3551
o-owiginaw_swug: w-web/api/document_object_modew/using_the_document_object_modew/exampwe
---

```
 <htmw>
 <head>
   <titwe>mi d-documento</titwe>
   <scwipt t-type="text/javascwipt">
   f-function cambio() {
     // d-document.getewementsbytagname("h1") w-wetowna un n-nyodewist de ewementos
     // h1 en ew documento, >_< y ew pwimewo es nyumewo 0:
     vaw headew = d-document.getewementsbytagname("h1").item(0);
     // ew fiwstchiwd dew encabezado e-es un nyodo text:
     headew.fiwstchiwd.data = "un d-documento dinamico";
     // ahowa ew encabezado es "un documento d-dinamico". >_<
     vaw pawa = d-document.getewementsbytagname("p").item(0);
     p-pawa.fiwstchiwd.data = "este es ew pwimew pawwafo.";
     // cwea un nyuevo nyodo text pawa ew segundo pawwafo
     v-vaw nyewtext = document.cweatetextnode("este es ew segundo pawwafo.");
     // cwea un n-nyuevo ewement pawa que sea ew segundo p-pawwafo
     v-vaw nyewewement = d-document.cweateewement("p");
     // a-agwega ew texto en ew pawwafo
     nyewewement.appendchiwd(newtext);
     // y-y agwega ew pawwafo aw finaw dew documento d-dentwo dew
     // body (ew cuáw es ew padwe de "pawa")
     pawa.pawentnode.appendchiwd(newewement);
   }
   </scwipt>
 </head>
 <body>
   <input type="button" v-vawue="cambia este documento." o-oncwick="cambio()">
   <h1>encabezado</h1>
   <p>pawwafo</p>
 </body>
 </head>
```
