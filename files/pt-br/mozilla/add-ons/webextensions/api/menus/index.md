---
title: menus
slug: Mozilla/Add-ons/WebExtensions/API/menus
---

{{AddonSidebar}}

Adicione itens ao sistema de menu do navegador.

Esta API é modelada sobre a API ["contextMenus"](https://developer.chrome.com/extensions/contextMenus) do Chrome, que permite que extensões do Chrome adicione itens para o contexto de menu do navegador. A API `browser.menus` adiciona alguns recursos à API do Chrome.

Antes do Firefox 55, esta API foi também nomeada, originalmente, de `contextMenus`, e esse nome era mantido como um alias; portanto, você pode usar o `contextMenus` para escrever um código que funcione no Firefox e também em outros navegadores.

Para usar essa API, você precisa da [permissão](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) de `menus`. Você também pode usar o alias `contextMenus` em vez de `menus`, mas se usar, a API deve ser acessada como `browser.contextMenus`.

Exceto para [`menus.getTargetElement()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement), essa API não pode ser usada de scripts de conteúdo (content scripts).

## Criando itens de menu

Para criar um item de menu, chamme o método {{WebExtAPIRef("menus.create()")}}. Você passa esse método como um objeto contendo opções para o item, incluindo o ID do item, o tipo do item, e os contextos no qual ele deve ser mostrado.

Escute os cliques no seu item de menu adicionando um ouvinte para o evento {{WebExtAPIRef("menus.onClicked")}}. Este ouvinte será passado

Listen for clicks on your menu item by adding a listener to the {{WebExtAPIRef("menus.onClicked")}} event. Este ouvinte receberá um objeto {{WebExtAPIRef("menus.OnClickData")}} que contém os detalhes do evento.

Você pode criar quatro tipos diferentes de itens de menu, com base no valor da propriedade `type` que você fornece nas opções para `create()`:

- "normal": um item de menu que apenas mostra um rótulo.
- "checkbox": um item de menu que representa um estado binário. Ele mostra uma marca de verificação próxima ao rótulo. Clicar no item ativa esta marca. O ouvinte de clique receberá duas propriedades extras: "checked", indicando que o item foi marcado agora, e "wasChecked", indicando que o item foi marcado antes do evento do clique.
- "radio": um item de menu que representa um de um grupo de escolhas. Como uma marca de verificação, isso também mostra uma marca de verificação próxima ao rótulo, e seu ouvinte de clique receberá "checked" e "wasChecked". No entanto, se você criar mais de um item de rádio, os itens funcionarão como um grupo de itens de rádio: apenas um item no grupo poderá ser verificado e clicar em um item o tornará o item marcado.
- "separator": uma linha separando um grupo de itens.

Se você criou mais de um item de menu de contexto ou mais de um item de menu de ferramentas, os itens serão colocados em um submenu. O pai do submenu será identificado com o nome da extensão. Por exemplo, aqui está uma extensão chamada "Demonstração de menu" ("Menu demo"), que adicionou dois itens de menu de contexto:

![](menus-1.png)

## Ícones

Se você especificou ícones para sua extensão usando a [chave "icons" do manifest](/pt-BR/Add-ons/WebExtensions/manifest.json/icons), o item de menu exibirá o ícone especificado ao lado do rótulo. O navegador tentará escolher um ícone de 16x16 pixels para uma exibição normal ou um ícone de 32x32 pixels para uma exibição de alta densidade:

![](menus-2.png)

Apenas para itens dentro de um submenu, você pode especificar ícones customizados passando a opção `icons` para o {{WebExtAPIRef("menus.create()")}}:

![](menus-3.png)

## Exemplo

Aqui está um menu de contexto contendo quatro itens: um item normal, dois itens de rádio com separadores em cada lado, e uma marca de seleção. Os itens de rádio receberam ícones customizados.

![](menus-4.png)Você pode criar um submenu como este usando o código abaixo:

```js
browser.menus.create(
  {
    id: "remove-me",
    title: browser.i18n.getMessage("menuItemRemoveMe"),
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-1",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "greenify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemGreenify"),
    contexts: ["all"],
    checked: true,
    icons: {
      16: "icons/paint-green-16.png",
      32: "icons/paint-green-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "bluify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemBluify"),
    contexts: ["all"],
    checked: false,
    icons: {
      16: "icons/paint-blue-16.png",
      32: "icons/paint-blue-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-2",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

var checkedState = true;

browser.menus.create(
  {
    id: "check-uncheck",
    type: "checkbox",
    title: browser.i18n.getMessage("menuItemUncheckMe"),
    contexts: ["all"],
    checked: checkedState,
  },
  onCreated,
);
```

## Tipos

- {{WebExtAPIRef("menus.ContextType")}}
  - : Os diferentes contextos em que um menu pode aparecer.
- {{WebExtAPIRef("menus.ItemType")}}
  - : O tipo de item de menu: "normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("menus.OnClickData")}}
  - : Informação enviada quando um item do menu é clicado.

## Propriedades

- {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : O número máximo de itens de extensão de nível superior que podem ser adicionados a um item de menu cujo ContextType seja "browser_action" ou "page_action".

## Funções

- {{WebExtAPIRef("menus.create()")}}
  - : Cria um novo item de menu.
- {{WebExtApiRef("menus.getTargetElement()")}}
  - : Retorna o elemento para um `info.targetElementId` determinado.
- {{WebExtApiRef("menus.overrideContext()")}}
  - : Oculta todos os itens de menu padrão do Firefox para fornecer uma interface de usuário personalizada do menu de contexto.
- {{WebExtAPIRef("menus.refresh()")}}
  - : Atualiza um menu que está sendo exibido no momento.
- {{WebExtAPIRef("menus.remove()")}}
  - : Remove um item do menu.
- {{WebExtAPIRef("menus.removeAll()")}}
  - : Remove todos os itens do menu adicionados por esta extensão.
- {{WebExtAPIRef("menus.update()")}}
  - : Atualiza um item do menu criado anteriormente.

## Eventos

- {{WebExtAPIRef("menus.onClicked")}}
  - : Ativado quando um item de menu é clicado.
- {{WebExtAPIRef("menus.onHidden")}}
  - : Ativado quando o navegador esconde um menu.
- {{WebExtAPIRef("menus.onShown")}}
  - : Ativado quando o navegador mostra um menu.

## Compatibilidade com navegadores

{{ Compat("webextensions.api.menus", 1, "true") }}

{{WebExtExamples("h2")}}

> **Nota:** **Reconhecimentos**Esta API é baseada na API [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) do Chromium. Esta documentação é derivada do [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) do código do Chromium .

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
