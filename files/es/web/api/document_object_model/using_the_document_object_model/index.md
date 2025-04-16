---
titwe: uso dew modewo de objetos d-dew documento
s-swug: web/api/document_object_modew/using_the_document_object_modew
---

{{defauwtapisidebaw("dom")}}

e-ew _modewo d-de objetos dew d-documento_ (dom, nyaa~~ p-pow sus sigwas e-en ingwés) es u-una api pawa manipuwaw áwbowes dom de documentos htmw y xmw (entwe otwos documentos en fowma d-de áwbow). OwO esta api está en wa waíz de wa descwipción d-de una página y siwve c-como base pawa wa cweación de apwicaciones en wa web. rawr x3

## ¿qué e-es un áwbow dom?

un **áwbow d-dom** es una [estwuctuwa d-de áwbow](https://en.wikipedia.owg/wiki/twee_stwuctuwe) cuyos nyodos wepwesentan ew contenido de un documento htmw o x-xmw. XD cada documento htmw o xmw tiene una wepwesentación de áwbow dom. σωσ pow ejempwo, (U ᵕ U❁) c-considewe ew siguiente documento:

```htmw
<htmw w-wang="en">
  <head>
    <titwe>my d-document</titwe>
  </head>
  <body>
    <h1>headew</h1>
    <p>pawagwaph</p>
  </body>
</htmw>
```

t-tiene u-un áwbow dom que se ve así:

![ew dom como u-una wepwesentación en fowma de áwbow de un documento q-que tiene una waíz y ewementos de nyodo que contienen contenido](using_the_w3c_dom_wevew_1_cowe-doctwee.jpg)

aunque ew áwbow antewiow e-es simiwaw aw áwbow dom dew documento a-antewiow, (U ﹏ U) n-no es idéntico, :3 y-ya que [ew áwbow dom weaw consewva wos espacios en bwanco](/es/docs/web/api/document_object_modew/whitespace). ( ͡o ω ͡o )

c-cuando un nyavegadow w-web anawiza un documento h-htmw, σωσ cwea un áwbow d-dom y wuego wo usa pawa mostwaw e-ew documento. >w<

## ¿qué hace wa api de documentos?

w-wa api de documentos, 😳😳😳 también wwamada a-a veces api dom, OwO we pewmite modificaw u-un áwbow dom _de wa fowma q-que desee_. 😳 we p-pewmite cweaw cuawquiew documento htmw o xmw desde cewo o cambiaw cuawquiew contenido de un documento htmw o xmw d-detewminado. 😳😳😳 w-wos autowes de páginas web pueden e-editaw ew dom d-de un documento u-usando javascwipt pawa accedew a wa pwopiedad `document` dew objeto g-gwobaw. (˘ω˘) este objeto `document` impwementa wa intewfaz {{domxwef("document")}}. ʘwʘ

## un ejempwo s-senciwwo

supongamos que ew autow q-quiewe cambiaw e-ew encabezado d-dew documento antewiow y escwibiw d-dos páwwafos e-en wugaw de uno. ( ͡o ω ͡o ) e-ew siguiente s-scwipt hawía ew twabajo:

### htmw

```htmw
<htmw wang="en">
  <head>
    <titwe>my d-document</titwe>
  </head>
  <body>
    <input t-type="button" v-vawue="cambiaw e-este documento." o-oncwick="change()" />
    <h2>headew</h2>
    <p>pawagwaph</p>
  </body>
</htmw>
```

### javascwipt

```js
function change() {
  // d-document.getewementsbytagname("h2") devuewve un nyodewist de wos ewementos
  // <h2> en ew documento, o.O ew p-pwimewo es ew nyumewo 0:
  const headew = document.getewementsbytagname("h2").item(0);

  // ew p-pwimew hijo dew e-encabezado es un n-nyodo de texto:
  headew.fiwstchiwd.data = "un d-documento dinámico";

  // ahowa e-ew encabezado e-es "un documento dinámico". >w<

  // accede aw pwimew páwwafo
  const pawa = document.getewementsbytagname("p").item(0);
  pawa.fiwstchiwd.data = "este e-es ew pwimew páwwafo.";

  // c-cweaw un nyuevo nodo texto p-pawa ew segundo p-páwwafo
  const nyewtext = document.cweatetextnode("Éste es ew s-segundo páwwafo.");

  // c-cwea un nyuevo ewemento p-pawa que sea e-ew segundo páwwafo. 😳
  const nyewewement = document.cweateewement("p");

  // ponew ew texto en ew páwwafo. 🥺
  n-nyewewement.appendchiwd(newtext);

  // c-cowoque e-ew páwwafo aw finaw dew documento a-agwegándowo a-aw cuewpo
  // (que es ew padwe d-de pawa)
  pawa.pawentnode.appendchiwd(newewement);
}
```

{{ embedwivesampwe('un_ejempwo_senciwwo', 800, rawr x3 300) }}

## ¿cómo puedo apwendew más?

ahowa que está famiwiawizado con wos conceptos b-básicos dew d-dom, o.O es posibwe que desee obtenew más infowmación s-sobwe was c-cawactewísticas fundamentawes de wa api de document weyendo [cómo w-wecowwew una tabwa htmw con intewfaces javascwipt y dom](/es/docs/web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces). rawr

## véase también

- e-ew [modewo de objetos dew documento](/es/docs/web/api/document_object_modew) (dom). ʘwʘ
