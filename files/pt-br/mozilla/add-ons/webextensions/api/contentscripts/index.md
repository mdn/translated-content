---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
---

{{AddonSidebar}}

Use esta API para registrar o conteúdo de scripts. Registrando um conteúdo de scripts instrui o navegador para inserir conteúdo de script fornecido em páginas que batem com um padrão de URL fornecida.

Esta API é muito similar a chave do [`"content_scripts"`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) no manifest.json key, exceto pelo `"content_scripts"`, o conjunto de conteúdo de scripts a padrões associados são fixados no momento da instalação. Com a API `contentScripts`, uma extensão pode registrar e desregistrar scripts em tempo de execução.

Para usar a API, invoque {{WebExtAPIRef("contentScripts.register()")}} passando um objeto definido para registrar os scripts, os padrões de URL e outras opções. Ele retorna uma [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) que é resolvida com o objeto {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}.

O objeto `RegisteredContentScript` represente os scripts que foram registrados com a chamada `register()`. Ele define um método `unregister()` que você pode usar para desregistrar o conteúdo de scripts. O conteúdo de scripts também são desregistrados automaticamente quando a página que os criou é destruida. Por exemplo, se estão registrados para uma página em segundo plano serão desregistrados automaticamente quando esta página for destruida, e se eles estão registrados para uma barra lateral ou popup, também serão desregistrados automaticamente quando essas forem fechadas.

Não há permissão para a API `contentScripts`, mas uma extensão pode ter a [permissão de host](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) apropriada para algum padrão passado para o `register()`.

## Tipos

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : Um objeto deste tipo é retornado pela função {{WebExtAPIRef("contentScripts.register()")}} . Ele representa o conteúdo dos scripts que foram registrados por aquela chamada, e podem ser usados para desregistrar o conteúdo do script.

## Funções

- {{WebExtAPIRef("contentScripts.register()")}}
  - : Registra o conteúdo dos scripts fornecidos.

## Compatibilidade com navegadores

{{Compat}}

{{WebExtExamples("h2")}}
