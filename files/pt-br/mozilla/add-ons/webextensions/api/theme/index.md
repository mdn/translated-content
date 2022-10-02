---
title: tema
slug: Mozilla/Add-ons/WebExtensions/API/theme
tags:
  - Aplicativo
  - Extensões
  - Navegador
  - Tema
  - Temas
  - add-on
  - extensão
translation_of: Mozilla/Add-ons/WebExtensions/API/theme
original_slug: Mozilla/Add-ons/WebExtensions/API/tema
---
{{AddonSidebar}}

Permite que extensões do navegador alterem seu tema.

Para usar esta API, uma extensão deve solicitar a [permission](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) (permissão) de "tema" em seu arquivo [manifest.json](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

> **Nota:** Quando configuramos um arquivo de plano de fundo, devemos declarar a [permission](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) (permissão) de "tema" e, assim sendo, nós não poderemos usar a função [theme](/en-US/Add-ons/WebExtensions/manifest.json/theme) (de tema), se esta for incompatível.

## Tipo

- {{WebExtAPIRef("theme.Theme")}}
  - : Representa o conteúdo de um tema.

## Funções

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : Obtém o tema atual do navegador.
- {{WebExtAPIRef("theme.update()")}}
  - : Atualiza o tema do navegador.
- {{WebExtAPIRef("theme.reset()")}}
  - : Remove quaisquer atualizações de temas feitas em uma chamada para {{WebExtAPIRef("theme.update()")}}.

## Evento

- {{WebExtAPIRef("theme.onUpdated")}}
  - : Disparada quando o navegador tiver sido alterado.

## Compatibilidade com navegadores

{{Compat("webextensions.api.theme")}}

{{WebExtExamples("h2")}}
