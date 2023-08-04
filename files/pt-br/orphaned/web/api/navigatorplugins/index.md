---
title: NavigatorPlugins
slug: orphaned/Web/API/NavigatorPlugins
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

O **`NavigatorPlugins`** {{Glossary("mixin")}} adiciona na interface do {{domxref ("Navigator")}} métodos e propriedades para descobrir e interagir com plugins instalados no navegador.

## Propriedades

- {{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}{{experimental_inline}}
  - : Retorna um {{domxref ("MimeTypeArray")}} listando os tipos MIME suportados pelo navegador.
- {{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}{{experimental_inline}}
  - : Retorna um {{domxref ("PluginArray")}} listando os plugins instalados no navegador.

## Métodos

A interface NavigatorPlugins* `NavigatorPlugins`* não herda nenhum método.

- {{domxref("NavigatorPlugins.javaEnabled", "NavigatorPlugins.javaEnabled()")}} {{readonlyInline}}{{experimental_inline}}
  - : Retorna uma flag {{domxref ("Boolean")}} indicando se o navegador do host tem o Java ativo ou não.

## Especificações

| Especificação                                                                                | Estado                           | Comentário         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#navigatorplugins', 'NavigatorPlugins')}} | {{Spec2('HTML WHATWG')}} | Definição inicial. |

## Navegador compativeis

{{Compat("api.NavigatorPlugins")}}

## Veja também

- A interface {{domxref ("Navigator")}} é a que a implementa.
