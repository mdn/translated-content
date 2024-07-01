---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
---

{{AddonSidebar}}

Trabalhar com identidades contextuais: listar, criar, remover e atualizar identidades contextuais.

"Identidades conceituais", também conhecido como "containers", consiste em uma funcionalidade do navegador cuja premissa é que usuários assumem multiplas identidades quando navegam na internet, e desejam manter alguma separação entre tais identidades. Por exemplo, um usuário pode considerar sua "identidade de trabalho" separada de sua "identidade pessoal", e não desejar compartilhar cookies entre esses dois contextos.

Com a funcionalidade de identidades contextuais, cada uma possui um nome, cor e um ícone. Novas abas são atribuidas a uma identidade, e o nome, ícone e cor aparecerão na barra de endereço. Internamente, cada identidade guarda seu próprio cookie e não os compartilha entre outras abas.

![](containers.png)Identidade contextual é uma funcionalidade experimental no Firefox e está habilitado apenas no Firefox Nightly. Para habilitá-lo em outras versões do Firefox, atribua true as seguintes preferências: `privacy.userContext.enabled`. Observe que embora identidades contextuais estejam disponíveis no Firefox para Android, não há uma interface gráfica funcionando com ela para esta versão de navegador.

Antes do Firefox 57, a API `contextualIdentities` é disponível apenas se a funcionalidade de identidade contextual está habilitada por si mesma. Se uma extensão tentou usar a API `contextualIdentities` API sem a funcionalidade estar habilitada, então as chamadas do método deveria resolver suas promises com `false`.

Para o Firefox 57 em diante, se uma extensão que usa a API `contextualIdentities` está instalada, então a funcionalidade de identidade contextual será habilitada automaticamente. Observe que embora ainda é possível para o usuário desabilitar a funcionalidade usando a preferência "privacy.userContext.enabled". Isse isso ocorrer, então a chamada do método `contextualIdentities` rejeitará suas promises com uma mensagem de erro.

Para mais informações sobre identidade contextual no Firefox veja [este guia](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers).

Identidades contextuais atualmente não são suportadas em outros navegadores.

Para usar esta API você precisará incluir a [permissão](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "contextualIdentities" em seu arquivo [manifest.json](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

## Tipos

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : Contém informações sobre uma identidade contextual.

## Funções

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : Cria uma nova identidade contextual.
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : Recupera uma única identidade contextual, dado o ID do cookie que armazena.
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : Recupera todas identidades contextuais, ou todas com um nome em particular.
- {{WebExtAPIRef("contextualIdentities.update()")}}
  - : Atualiza as propriedades existentes de uma identidade contextual.
- {{WebExtAPIRef("contextualIdentities.remove()")}}
  - : Exclui uma identidade contextual.

## Eventos

- {{WebExtAPIRef("contextualIdentities.onCreated")}}
  - : Disparado quando uma identidade contextual é criada.
- {{WebExtAPIRef("contextualIdentities.onRemoved")}}
  - : Disparado quando uma identidade contextual é removida.
- {{WebExtAPIRef("contextualIdentities.onUpdated")}}
  - : Disparado quando uma ou mais propriedades de uma identidade contextual é atualizada.

## Compatibilidade com navegadores

{{Compat}} {{WebExtExamples("h2")}}
