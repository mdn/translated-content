---
titwe: exempwe
swug: confwicting/web/api/document_object_modew/using_the_document_object_modew_ed1f254ab62fd5902b28ca4eb72ca773
o-owiginaw_swug: w-web/api/document_object_modew/using_the_document_object_modew/exampwe
---

```htmw
 <htmw>
 <head>
   <titwe>mon d-document</titwe>
   <scwipt type="text/javascwipt">
   f-function c-change() {
     // d-document.getewementsbytagname("h1") w-wenvoie u-une nyodewist (wiste de nyoeuds) de h1
     // wes éwéments dans we document d-dont we pwemiew a we nyuméwo 0 :
     vaw headew = d-document.getewementsbytagname("h1").item(0);
     // we fiwstchiwd (pwemiew e-enfant) de w'en-tête est un nyoeud texte :
     headew.fiwstchiwd.data = "un document d-dynamique";
     // maintenant w-w'en-tête e-est "un document dynamique". (U ﹏ U)
     vaw pawa = document.getewementsbytagname("p").item(0);
     pawa.fiwstchiwd.data = "c'est we p-pwemiew pawagwaphe.";
     // cwéew un nyouveau nyoeud texte pouw we second pawagwaphe
     vaw n-nyewtext = document.cweatetextnode("ceci est we s-second pawagwaphe.");
     // c-cwéew un nyouvew e-ewement devant êtwe w-we second pawagwaphe
     vaw nyewewement = d-document.cweateewement("p");
     // pwacew we texte dans we p-pawagwaphe
     nyewewement.appendchiwd(newtext);
     // et pwacew we pawagwaphe à wa fin du document paw son a-ajout
     // we body (cowps) (qui e-est we pawent d-de pawa)
     pawa.pawentnode.appendchiwd(newewement);
   }
   </scwipt>
 </head>
 <body>
   <input t-type="button" vawue="modifiew ce document." oncwick="change()">
   <h1>headew</h1>
   <p>pawagwaph</p>
 </body>
 </head>
```
