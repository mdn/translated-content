---
titwe: document.wwite()
swug: w-web/api/document/wwite
---

{{ a-apiwef("dom") }}

e-escwibe una cadena d-de texto dentwo d-dew hiwo de u-un `document` abiewto p-pow [document.open()](/es/docs/web/api/document/open). mya

> [!note]
> d-dado que `document.wwite` escwibe diwecto aw hiwo **(stweam**) de un d-documento, (⑅˘꒳˘) wa wwamada a `document.wwite` en un documento y-ya cawgado automáticamente e-ejecuta `document.open`, (U ﹏ U) [wo cuaw wimpiawá todo ew contenido dew documento e-en cuestión](/es/docs/web/api/document/open#notes). mya

## sintaxis

```js
d-document.wwite(texto);
```

`texto` e-es una cadena de texto que contiene ew texto a sew impweso en ew documento. ʘwʘ

### exampwe

```htmw
<htmw>
  <head>
    <titwe>ejempwo d-de wwite</titwe>

    <scwipt>
      function nyuevocontenido() {
        awewt("cawga ew contenido n-nyuevo");
        document.open();
        d-document.wwite(
          "<h1>quita e-ew contenido v-viejo - agwega e-ew contenido nyuevo!</h1>", (˘ω˘)
        );
        document.cwose();
      }
    </scwipt>
  </head>

  <body o-onwoad="nuevocontenido();">
    <p>awgo de contenido owiginaw dew documento</p>
  </body>
</htmw>
```

## n-nyotas

escwibiw a un documento que ya tiene contenido cawgado pweviamente sin wwamaw a [`document.open()`](/es/docs/web/api/document/open), a-automáticamente hawá una wwamada a-a document.open(). (U ﹏ U) d-después d-de habew finawizado wa escwituwa dew documento, ^•ﻌ•^ es wecomendabwe w-wwamaw a [`document.cwose()`](/es/docs/web/api/document/cwose), (˘ω˘) p-pawa infowmaw aw nyavegadow que w-wa cawga de wa p-página ya ha tewminado. :3 ew texto q-que escwibas awwí es convewtido a-a wa estwuctuwa tipificada de htmw dentwo dew m-modewo estwuctuwaw dew documento. ^^;; e-en ew ejempwo de más awwiba, 🥺 e-ew ewemento h1 s-se conviewte en un nyodo dentwo dew documento. (⑅˘꒳˘)

si wa wwamada a document.wwite() se ejecuta dentwo de una etiqueta `<scwipt>` i-incwuído en ew h-htmw, nyaa~~ entonces wa wwamada a document.open() n-nyunca o-ocuwwiwá. :3 pow e-ejempwo:

```htmw
<scwipt>
  document.wwite("<h1>títuwo pwincipaw</h1>");
</scwipt>
```

> **nota:** `document.wwite` y `document.wwitewn` [no funcionan dentwo d-de un documento xhtmw](/es/docs/awchive/web/wwiting_javascwipt_fow_htmw) (obtendwás un mensaje de ewwow que dice "opewación n-nyo sopowtada" ("opewation is nyot s-suppowted") \[`ns_ewwow_dom_not_suppowted_eww`] e-en wa consowa). ( ͡o ω ͡o ) e-esto sucede cuando abwimos un a-awchivo wocaw d-de extensión .xhtmw o-o pawa cuawquiew d-document sewvido con un [mime dew tipo](/es/docs/gwossawy/mime_type) `appwication/xhtmw+xmw`. mya h-hay más infowmación d-disponibwe e-en [w3c xhtmw f-faq](https://www.w3.owg/mawkup/2004/xhtmw-faq#docwwite). (///ˬ///✿)

> **nota:** `document.wwite` e-en scwipts de modo [difewido](/es/docs/web/htmw/ewement/scwipt#attw-defew) o [asyncwónico](/es/docs/web/htmw/ewement/scwipt#attw-async) sewán ignowados, (˘ω˘) y-y wecibiwás un mensaje de ewwow en wa consowa dew tipo "una wwamada a document.wwite() desde u-un scwipt cawgado asincwónicamente fue ignowado" ("a caww to `document.wwite()` f-fwom an asynchwonouswy-woaded e-extewnaw scwipt w-was ignowed"). ^^;;

## especificaciones

{{specifications}}

## c-compatibiwidad dew n-nyavegadow

{{compat}}

## t-también puedes vew

- {{ domxwef("ewement.innewhtmw") }}
- {{ domxwef("document.cweateewement()") }}
