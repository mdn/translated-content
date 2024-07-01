---
title: Itens do menu de contexto
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
---

{{AddonSidebar}}

Esta opção da interface de usuário adiciona um ou mais itens para o menu de contexto do navegador.Este é o menu de contexto disponível quando um usuário clica com o botão direito numa página web. As guias também podem ter menus de contexto, disponível através da API [browser.menus](/pt-BR/Add-ons/WebExtensions/API/menus).

![Example of content menu items added by a WebExtension, from the context-menu-demo example](context_menu_example.png)

Você usaria essa opção para expor recursos relevantes para contextos específicos de navegadores ou páginas da web. Por exemplo, você poderia mostrar recursos para abrir um editor gráfico quando o usuário clica em uma imagem ou pode oferecer um recurso para salvar o conteúdo da página quando uma parte da página é selecionada. Você pode adicionar itens planos de menu, caixas de seleção, grupos de botões de rádio, e separadores para os menus. Quando um item de menu de contexto for adicionado usando {{WebExtAPIRef("contextMenus.create")}}, é mostrado em todas as guias do navegador, mas você pode escondê-lo usando {{WebExtAPIRef("contextMenus.remove")}}.

A lista inteira dos contextos suportados está disponível em {{WebExtAPIRef("menus.ContextType")}} e inclui contextos de fora de uma página web, como itens de favoritos na interface do navegador. Por exemplo, a extensão "[Open bookmark in Container Tab](https://github.com/Rob--W/bookmark-container-tab)" adiciona um item de menu que permite que o usuário abra a URL dos favoritos em uma nova guia de container:

![](extension_context_menu.png)

## Especificando itens do menu de contexto

Você controla os itens do menu de contexto programaticamente, usando a API {{WebExtAPIRef("contextMenus")}}. No entanto, você precisa requisitar a permissão `contextMenus` em seu manifest.json para poder tomar vantagem desta API.

```json
"permissions": ["contextMenus"]
```

Você pode então adicionar (e atualizar ou apagar) os itens do menu de contexto em seu script de "background" (segundo plano) da sua extensão. Para criar um item de menu, você especifica um id, seu título, e os menus de contexto em que ele deve aparecer:

```js
browser.contextMenus.create(
  {
    id: "log-selection",
    title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["selection"],
  },
  onCreated,
);
```

Sua extensão então escuta os cliques nos itens do menu. As informações passadas sobre o item clicado, o contexto em que o clique ocorreu e os detalhes da guia em que o clique ocorreu podem ser usadas para chamar a funcionalidade de extensão apropriada.

```js
browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    ...
  }
})
```

## Ícones

Para mais detalhes sobre como criar ícones para usar no seu menu de contexto, veja [Iconography](https://design.firefox.com/photon/visuals/iconography.html) na documentação [Photon Design System](https://design.firefox.com/photon/index.html).

## Exemplos

O repositório [webextensions-examples](https://github.com/mdn/webextensions-examples) no GitHub contém dois exemplos de extensões que implementam itens do menu de contexto:

- [menu-demo](https://github.com/mdn/webextensions-examples/tree/master/menu-demo) adiciona muitos itens para o menu de contexto do navegador.
- [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types) adiciona um item de menu de contexto aos links que copiam o URL do link para a área de transferência, como texto sem formatação e HTML avançado.
