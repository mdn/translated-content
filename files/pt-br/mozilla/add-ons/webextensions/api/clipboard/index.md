---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
---

{{AddonSidebar}}

A API de área de transferência habilita uma extensão para copiar itens para a área de transferência do sistema. Atualmente a API suporta apenas a cópia de imagens, mas é pretendido suportar a cópia de texto e HTML no futuro.

Esta API WebExtension existe primariamente por causa que o padrão da API web para área de transferência [não suporta escrita de imagens](https://w3c.github.io/clipboard-apis/#writing-to-clipboard). Se e quando esta funcionalidade for adicionada na API wb padrão, esta API pode ser depreciada.

Leitura da área de transfência não é suportada por esta API, devido esta já poder ser lida usando as APIs padrão da plataforma web. Veja [interagindo com a área de transferência](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#reading_from_the_clipboard).

Esta API é baseada na API [`clipboard`](https://developer.chrome.com/apps/clipboard) do Chrome's API, mas esta API está disponível somente para o Chrome.

Para utilizar esta API voce precisa ter a [permissão](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "clipboardWrite".

## Funções

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : Copia uma imagem para a área de transferência.

## Compatibilidade com navegadores

{{Compat}} {{WebExtExamples("h2")}}

> [!NOTE]
> **Agradecimentos**Esta API é baseada na API Chromium [`chrome.clipboard`](https://developer.chrome.com/apps/clipboard).
