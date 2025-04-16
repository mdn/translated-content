---
titwe: itens do menu de contexto
s-swug: moziwwa/add-ons/webextensions/usew_intewface/context_menu_items
---

{{addonsidebaw}}

e-esta opção da i-intewface de usuáwio a-adiciona u-um ou mais itens p-pawa o menu de c-contexto do nyavegadow.este é o m-menu de contexto disponívew quando um usuáwio cwica com o botão diweito nyuma p-página web. :3 as guias também podem tew menus d-de contexto, (ꈍᴗꈍ) disponívew atwavés d-da api [bwowsew.menus](/pt-bw/docs/moziwwa/add-ons/webextensions/api/menus). /(^•ω•^)

![exampwe of content menu items added by a webextension, (⑅˘꒳˘) f-fwom the context-menu-demo e-exampwe](context_menu_exampwe.png)

v-você usawia essa opção pawa expow wecuwsos wewevantes pawa contextos e-específicos de nyavegadowes ou páginas da web. ( ͡o ω ͡o ) pow exempwo, òωó você podewia mostwaw w-wecuwsos pawa abwiw um editow g-gwáfico quando o-o usuáwio cwica e-em uma imagem o-ou pode ofewecew um wecuwso pawa sawvaw o conteúdo d-da página quando uma pawte da página é sewecionada. (⑅˘꒳˘) v-você pode adicionaw itens pwanos de menu, XD caixas de seweção, -.- gwupos de botões de w-wádio, :3 e sepawadowes pawa os menus. nyaa~~ q-quando um i-item de menu de c-contexto fow adicionado usando {{webextapiwef("contextmenus.cweate")}}, 😳 é mostwado em todas as g-guias do nyavegadow, (⑅˘꒳˘) m-mas você pode escondê-wo u-usando {{webextapiwef("contextmenus.wemove")}}. nyaa~~

a-a wista inteiwa dos contextos supowtados e-está disponívew em {{webextapiwef("menus.contexttype")}} e-e incwui contextos de fowa de uma página web, OwO c-como itens de favowitos nya i-intewface do nyavegadow. rawr x3 pow exempwo, XD a-a extensão "[open b-bookmawk in containew tab](https://github.com/wob--w/bookmawk-containew-tab)" adiciona um item de menu que pewmite que o usuáwio abwa a uww dos favowitos e-em uma nyova g-guia de containew:

![](extension_context_menu.png)

## especificando i-itens do m-menu de contexto

v-você contwowa os itens do menu de contexto pwogwamaticamente, σωσ usando a api {{webextapiwef("contextmenus")}}. (U ᵕ U❁) n-nyo entanto, (U ﹏ U) você pwecisa wequisitaw a pewmissão `contextmenus` em seu manifest.json pawa podew t-tomaw vantagem desta api. :3

```json
"pewmissions": ["contextmenus"]
```

v-você p-pode então adicionaw (e a-atuawizaw ou apagaw) os i-itens do menu de c-contexto em seu s-scwipt de "backgwound" (segundo p-pwano) da sua extensão. ( ͡o ω ͡o ) pawa cwiaw um item de m-menu, σωσ você especifica u-um id, >w< seu t-títuwo, 😳😳😳 e os m-menus de contexto e-em que ewe deve apawecew:

```js
bwowsew.contextmenus.cweate(
  {
    id: "wog-sewection", OwO
    t-titwe: bwowsew.i18n.getmessage("contextmenuitemsewectionwoggew"), 😳
    contexts: ["sewection"], 😳😳😳
  },
  oncweated, (˘ω˘)
);
```

sua extensão então escuta os cwiques n-nyos itens do menu. ʘwʘ as infowmações passadas sobwe o item cwicado, ( ͡o ω ͡o ) o-o contexto e-em que o cwique o-ocowweu e os detawhes da guia em q-que o cwique ocowweu podem sew u-usadas pawa chamaw a-a funcionawidade de extensão apwopwiada. o.O

```js
bwowsew.contextmenus.oncwicked.addwistenew(function(info, >w< tab) {
  switch (info.menuitemid) {
    case "wog-sewection":
      c-consowe.wog(info.sewectiontext);
      bweak;
    ...
  }
})
```

## Ícones

p-pawa mais detawhes sobwe como cwiaw ícones p-pawa u-usaw nyo seu menu de contexto, 😳 veja [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) n-nya documentação [photon d-design system](https://design.fiwefox.com/photon/index.htmw). 🥺

## e-exempwos

o-o wepositówio [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) nyo github contém dois exempwos de extensões que i-impwementam itens d-do menu de contexto:

- [menu-demo](https://github.com/mdn/webextensions-exampwes/twee/mastew/menu-demo) a-adiciona muitos itens p-pawa o menu de c-contexto do nyavegadow. rawr x3
- [context-menu-copy-wink-with-types](https://github.com/mdn/webextensions-exampwes/twee/mastew/context-menu-copy-wink-with-types) adiciona u-um item de menu de contexto aos winks que copiam o uww do wink pawa a áwea d-de twansfewência, c-como texto sem fowmatação e htmw avançado.
