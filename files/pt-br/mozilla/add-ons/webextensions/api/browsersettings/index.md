---
title: browserSettings
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings
---

{{AddonSidebar}}Habilita uma extensão para modificar certas configurações globais do navegador. Cada propriedade desta API é um objeto {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}, provendo a capacidade de modificar uma configuração particular.Devido estas serem configurações globais, é possível haver conflito entre extensões. Veja a documentação [`BrowserSetting.set()`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) para detalhes de como ligar com conflitos .

Para usar esta API você precisa ter a [permissão](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "browserSettings".

## Propriedades

- {{WebExtAPIRef("browserSettings.allowPopupsForUserEvents")}}
  - : Determina se o código em execução nas páginas podem mostrar popups em resposta a eventos do usuário.
- {{WebExtAPIRef("browserSettings.cacheEnabled")}}
  - : Determina se o cache do navegador está ou não habilitado.
- {{WebExtAPIRef("browserSettings.closeTabsByDoubleClick")}}
  - : Determina se a aba selecionada pode ser fechada com um duplo click.
- {{WebExtAPIRef("browserSettings.contextMenuShowEvent")}}
  - : Determina o evento do mouse que dispara um menu de contexto de popup.
- {{WebExtAPIRef("browserSettings.homepageOverride")}}
  - : Lê o valor da página inicial do navegador.
- {{WebExtAPIRef("browserSettings.imageAnimationBehavior")}}
  - : Determina como o navegador trata imagens animadas.
- {{WebExtAPIRef("browserSettings.newTabPageOverride")}}
  - : Lê o valor da nova aba do navegador.
- {{WebExtAPIRef("browserSettings.newTabPosition")}}
  - : Controla a posição de abas recentemente abertas relativa as abas já presentes.
- {{WebExtAPIRef("browserSettings.openBookmarksInNewTabs")}}
  - : Determina se os favoritos são abertos na aba atual ou em uma nova aba.
- {{WebExtAPIRef("browserSettings.openSearchResultsInNewTabs")}}
  - : Determina se a busca de resultados é aberta na aba atual ou em uma nova.
- {{WebExtAPIRef("browserSettings.openUrlbarResultsInNewTabs")}}
  - : Determina se as sugestões do autocompletar da barra de endereços são abertas na aba atual ou em uma nova.
- {{WebExtAPIRef("browserSettings.overrideDocumentColors")}}
  - : Controla se as cores de escolha do usuário sobrescreverão as cores das páginas.
- {{WebExtAPIRef("browserSettings.useDocumentFonts")}}
  - : Controle se o navegador usará as fontes especificadas pela página web ou somente fontes embutidas.
- {{WebExtAPIRef("browserSettings.webNotificationsDisabled")}}
  - : Previne que os sites exibam notificações usando a API Web [`Notification`](/pt-BR/docs/Web/API/Notification).

## Compatibilidade com navegadores

{{Compat}}

{{WebExtExamples("h2")}}
