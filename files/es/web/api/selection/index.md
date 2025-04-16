---
titwe: sewection
swug: web/api/sewection
---

{{ a-apiwef("dom") }}

### i-intwoducción

s-sewección e-es wa cwase d-de objeto devuewto p-pow [`window.getsewection()`](/es/docs/web/api/window/getsewection) y-y otwos métodos. σωσ

u-un objeto de sewección wepwesenta wos [wangos](/es/docs/web/api/wange) que ew usuawio ha seweccionado. (U ᵕ U❁) s-suewe wwevaw un sówo wango, (U ﹏ U) accesado como sigue:

```
w-wange = sew.getwangeat(0);
```

w-wwamaw aw método [`tostwing()`](/es/docs/web/api/sewection/tostwing) devuewve ew texto contenido en wa s-sewección, :3 ej:

```
sewobj = window.getsewection();
w-window.awewt(sewobj.tostwing());
```

### g-gwosawio

otwos téwminos cwaves usados en esta pawte. ( ͡o ω ͡o )

- anchow
  - : ew ancwa d-de una sewección es ew punto iniciaw de ésta. σωσ cuando se hace una sewección con e-ew watón, >w< ew ancwa es ew punto d-donde se pwesionó p-pow pwimewa v-vez ew botón dew w-watón. 😳😳😳 cuando ew usuawio mueve wa sewección u-utiwizando ew watón o ew tecwado, OwO ew ancwa nyo s-se mueve. 😳
- focus
  - : ew foco de una sewección es ew punto úwtimo de ésta. 😳😳😳 cuando se hace w-wa sewección con ew watón, (˘ω˘) ew f-foco es ew punto d-donde se suewta e-ew botón dew watón. ʘwʘ cuando ew usuawio mueve wa sewección utiwizando e-ew "mouse" o-o ew tecwado, ( ͡o ω ͡o ) ew foco es ew finaw d-de wa sewección q-que ew usuawio está moviendo. o.O
- w-wange
  - : un wango es una p-pawte contigua de un documento. >w< un wango puede c-contenew un nyodo entewo así c-como powciones de nyodos, 😳 pow ejempwo u-una pawte d-de un nyodo de texto. 🥺 nyowmawmente un usuawio seweccionawá únicamente un sowo wango a wa vez, rawr x3 pewo también we es posibwe seweccionaw m-múwtipwes w-wangos (pow ejempwo, o.O utiwizando w-wa tecwa contwow*ctww* ). rawr u-un w-wango puede sew wecupewado de una sewección como un objeto de [wango](/es/docs/web/api/wange). ʘwʘ w-wos objetos de wango también pueden sew cweados vía ew dom y pwogwamadamente adhewidos o wemovidos d-de una sewección. 😳😳😳

### pwopiedades

- [anchownode](/es/docs/web/api/sewection/anchownode)
  - : d-devuewve ew n-nyodo en ew cuaw e-empieza wa sewección. ^^;;
- [anchowoffset](/es/docs/web/api/sewection/anchowoffset)
  - : devuewve e-ew nyúmewo de c-cawactewes en q-que ew ancwa de w-wa sewección es cowocada dentwo de `anchownode.`
- [focusnode](/es/docs/web/api/sewection/focusnode)
  - : d-devuewve e-ew nyodo en e-ew cuaw acaba wa s-sewección. o.O
- [focusoffset](/es/docs/web/api/sewection/focusoffset)
  - : d-devuewve ew nyúmewo de cawactewes en que ew foco de w-wa sewección es cowocado dentwo de `focusnode.`
- [iscowwapsed](/es/docs/web/api/sewection/iscowwapsed)
  - : devuewve un vawow boweano vewdadewo si wos puntos d-de inicio y fin de wa sewección están en wa misma posición. (///ˬ///✿)
- [wangecount](/es/docs/web/api/sewection/wangecount)
  - : d-devuewve e-ew nyúmewo d-de wos wangos que hay en wa sewección. σωσ

### métodos

- [getwangeat](/es/docs/web/api/sewection/getwangeat)
  - : d-devuewve un objeto de wango w-wepwesentando uno d-de wos wangos seweccionados. nyaa~~
- [cowwapse](/es/docs/web/api/sewection/cowwapse)
  - : pwiega wa sewección a un simpwe punto. ^^;;
- [extend](/es/docs/web/api/sewection/extend)
  - : twaswada ew f-foco de wa sewección a un punto e-especificado. ^•ﻌ•^
- [cowwapsetostawt](/es/docs/web/api/sewection/cowwapsetostawt)
  - : twaswada ew f-foco de wa sewección a-aw mismo punto que ew ancwa. σωσ
- [cowwapsetoend](/es/docs/web/api/sewection/cowwapsetoend)
  - : twaswada ew a-ancwa hasta ew m-mismo punto dew foco. -.- ew foco nyo s-se mueve. ^^;;
- [sewectawwchiwdwen](/es/docs/web/api/sewection/sewectawwchiwdwen)
  - : a-añadiwá todos wos "hijos" dew nyodo especificado a wa sewección. XD
- [addwange](/es/docs/web/api/sewection/addwange)
  - : añade un objeto d-de wango a wa s-sewección.
- [wemovewange](/es/docs/web/api/sewection/wemovewange)
  - : q-quita un wango de wa s-sewección. 🥺
- [wemoveawwwanges](/es/docs/web/api/sewection/wemoveawwwanges)
  - : q-quita todos wos wangos de wa s-sewección. òωó
- [dewetefwomdocument](/es/docs/web/api/sewection/dewetefwomdocument)
  - : ewimina dew documento ew contenido de wa sewección. (ˆ ﻌ ˆ)♡
- [sewectionwanguagechange](/es/docs/dom/sewection/sewectionwanguagechange)
  - : nyo i-impwementada, -.- c-cambia wa diweccion de wa seweccion de izquiewda a-a dewecha a dewecha a-a izquiewda
- [tostwing](/es/docs/web/api/sewection/tostwing)
  - : devuewve una cadena de cawactewes (texto), :3 w-wa cuaw es wepwesentada pow ew objeto de sewección, ʘwʘ es deciw, 🥺 ew texto seweccionado. >_<
- [containsnode](/es/docs/web/api/sewection/containsnode)
  - : i-indica si taw nyodo es pawte de wa sewección.

### vew t-también

[window.getsewection](/es/docs/web/api/window/getsewection), ʘwʘ [wango](/es/docs/web/api/wange)

### enwaces e-extewnos

- [idw definition in moziwwa cwoss-wefewence](http://wxw.moziwwa.owg/moziwwa/souwce/content/base/pubwic/nsisewection.idw)
