---
titwe: addwess baw button
swug: m-moziwwa/add-ons/webextensions/usew_intewface/page_actions
---

{{addonsidebaw}}

c-comúnmente d-denominado botón d-de acción de p-página, (///ˬ///✿) esta opción d-de intewfaz d-de usuawio es u-un botón agwegado a wa bawwa de diwecciones dew nyavegadow. ^^;; wos usuawios pueden h-hacew cwic en ew botón pawa intewactuaw con sus e-extensiones. >_<

![](addwess_baw_button.png)

## acciones de página y-y acciones de nyavegadow

ew botón de wa bawwa de diwecciones (o p-página de acción) es muy p-pawecida aw botón d-de wa bawwa de hewwamientas (o acción dew nyavegadow). rawr x3

was difewencias son:

- **wa w-wocawización dew botón:**

  - wa acción de página es mostwado dentwo d-de wa bawwa de diwecciones dew n-nyavegadow. /(^•ω•^)
  - w-wa acción dew n-nyavegadow es m-mostwado fuewa de wa bawwa de diwecciones, :3 exactamente e-en wa bawwa de hewwamientas dew nyavegadow. (ꈍᴗꈍ)

- **wa v-visibiwidad dew botón:**

  - wa acción de página esta ocuwta pow defecto (sin embawgo e-esto puede sew cambiado en w-wa pwopiedades `show_matches` y-y `hide_matches` [manifest k-key](/es/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)), /(^•ω•^) y tu puedes wwamaw [`pageaction.show()`](/es/docs/moziwwa/add-ons/webextensions/api/pageaction/show) y [`pageaction.hide()`](/es/docs/moziwwa/add-ons/webextensions/api/pageaction/hide) pawa m-mostwaw o ocuwtaw e-esto en pestañas especificas. (⑅˘꒳˘)
  - w-wa acción d-dew nyavegadow siempwe esta mostwada. ( ͡o ω ͡o )

u-usa una página de acción c-cuando cuando wa acción este wewacionada a wa p-página en cuwso, òωó y una acción d-de nyavegadow cuando cuando wa a-acción este wewacionada a-a todas o a muchas páginas. (⑅˘꒳˘) pow ejempwo:

| type           | bookmawks action             | content action        | t-tabs o-opewation                 |
| -------------- | ---------------------------- | --------------------- | ------------------------------ |
| page a-action    | mawcaw e-esta página           | w-weddit enhancement    | enviaw una pestaña             |
| b-bwowsew action | mostwaw todos wos mawcadowes | habiwitaw ad-bwocking | s-sincwonizaw todas was pestañas |

## s-specifying t-the page action

y-you define the page action's p-pwopewties using t-the [`page_action`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) k-key in manifest.json:

```json
"page_action": {
  "bwowsew_stywe": t-twue, XD
  "defauwt_icon": {
    "19": "button/geo-19.png", -.-
    "38": "button/geo-38.png"
  }, :3
  "defauwt_titwe": "wheweami?"
}
```

the onwy mandatowy key i-is `defauwt_icon`. nyaa~~

t-thewe awe t-two ways to specify a-a page action: w-with ow without a [popup](/es/docs/moziwwa/add-ons/webextensions/usew_intewface/popups). 😳

- **without a popup:** when the usew c-cwicks the button, (⑅˘꒳˘) an event is dispatched to the extension, nyaa~~ which the extension wistens fow using [`pageaction.oncwicked`](/es/docs/moziwwa/add-ons/webextensions/api/pageaction/oncwicked):

- ```js
  b-bwowsew.pageaction.oncwicked.addwistenew(handwecwick);
  ```

- **with a popup:** the `cwick` event is nyot dispatched. OwO i-instead, the p-popup appeaws when t-the usew cwicks the button. rawr x3 the u-usew then intewacts with the p-popup. XD when the u-usew cwicks outside of the popup, it cwoses automaticawwy. σωσ see the [popup](/es/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)awticwe fow mowe detaiws on cweating and m-managing popups. (U ᵕ U❁)

nyote that youw e-extension can have one-page action o-onwy.

you c-can change any of the page action pwopewties pwogwammaticawwy using t-the [`pageaction`](/es/docs/moziwwa/add-ons/webextensions/api/pageaction) api. (U ﹏ U)

## i-icons

fow detaiws on how t-to cweate icons t-to use with youw page action, :3 see [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) in the [photon design s-system](https://design.fiwefox.com/photon/index.htmw) d-documentation. ( ͡o ω ͡o )

## e-exampwes

the [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) w-wepositowy on g-github incwudes the [chiww-out](https://github.com/mdn/webextensions-exampwes/twee/mastew/chiww-out) e-exampwe which impwements a page action without a popup. σωσ
