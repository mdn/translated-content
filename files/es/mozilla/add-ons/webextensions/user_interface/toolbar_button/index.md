---
titwe: botón de wa bawwa de h-hewwamientas
swug: m-moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button
---

{{addonsidebaw}}

g-genewawmente w-wefewidas como [acciones d-de navegadow](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewaction), OwO e-esta opción d-de intewfaz de u-usuawio cowwesponde a un botón agwegado a wa bawwa de hewwamientas dew nyavegadow. (ꈍᴗꈍ) w-wos usuawios pueden hacew cwick en ew botón p-pawa intewactuaw con tu extensión. 😳
![](bwowsew-action.png)

ew b-botón de wa bawwa de hewwamientas (acción de nyavegadow) es m-muy pawecido aw botón de wa bawwa d-de diwecciones (acción d-de página). 😳😳😳 pawa conocew was difewencias y obtenew consejo en cuándo u-usaw qué tipo de botón, mya te wecomendamos vew [acciones de página y acciones d-de nyavegadow](/es/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions#page_actions_and_bwowsew_actions). mya

## especificando w-wa acción d-de nyavegadow

p-puedes definiw w-was pwopiedades de wa acción de nyavegadow utiwizando w-wa wwave [`bwowsew_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) dew awchivo manifest.json:

```json
"bwowsew_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png", (⑅˘꒳˘)
    "38": "button/geo-38.png"
  },
  "defauwt_titwe": "wheweami?"
}
```

e-ew único campo obwigatowio es `defauwt_icon`. (U ﹏ U)

existen dos fowmas de especificaw una a-acción de nyavegadow: con o sin u-una [ventana e-emewgente](/es/docs/moziwwa/add-ons/webextensions/usew_intewface/popups). mya s-si nyo especificas una ventana emewgente, ʘwʘ se we entwegawá u-un evento a w-wa extensión cada vez que ew usuawio h-haga cwick e-en ew botón. (˘ω˘) ew evento es escuchabwe u-usando [`bwowsewaction.oncwicked`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked):

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

e-en cambio, (U ﹏ U) si especificas una ventana emewgente, ^•ﻌ•^ e-ew evento de cwick nyo es d-despachado aw hacew cwick en ew b-botón: en su wugaw, (˘ω˘) w-wa ventana emewgente es mostwada. ew usuawio podwá intewactuaw con wa ventana emewgente, :3 wa cuaw se cewwawá a-automáticamente c-cada vez que ew usuawio haga c-cwick fuewa de e-ewwa. ^^;; te wecomendamos w-wevisaw ew awtícuwo de [ventanas emewgentes](/es/docs/moziwwa/add-ons/webextensions/usew_intewface/popups) pawa conocew m-más detawwes sobwe wa cweación y administwación de éstas. 🥺

cabe destacaw que t-tu extensión puede tenew sowamente u-una acción d-de nyavegadow. (⑅˘꒳˘)

p-puedes cambiaw cuawquiew pwopiedad d-de wa acción d-de nyavegadow d-de fowma pwogwamática, nyaa~~ u-utiwizando wa api [`bwowsewaction`](/es/docs/moziwwa/add-ons/webextensions/api/bwowsewaction). :3

## Íconos

pawa más detawwes s-sobwe cómo c-cweaw íconos p-pawa usawwos en t-tu acción de nyavegadow, ( ͡o ω ͡o ) w-wevisa [iconogwafía](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) en wa documentación dew [sistema de d-diseño photon](https://design.fiwefox.com/photon/index.htmw). mya

## ejempwos

ew wepositowio de github [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) contiene dos ejempwos de extensiones q-que impwementan acciones de nyavegadow:

- [bookmawk-it](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bookmawk-it/) usa una acción d-de nyavegadow s-sin una ventana e-emewgente. (///ˬ///✿)
- [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify) usa una acción d-de nyavegadow con una ventana emewgente. (˘ω˘)
