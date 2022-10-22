---
title: Window.print()
slug: Web/API/Window/print
tags:
  - DOM
  - Window
  - print
translation_of: Web/API/Window/print
---
{{ ApiRef() }}

## Sumário

Abre a janela de impressão para imprimir o documento atual.

## Sintaxe

```
window.print()
```

## Notas

Começando com o Chrome {{CompatChrome(46.0)}} este método é bloqueado dentro de um {{htmlelement("iframe")}} a menos que seu atributo sandbox tem o valor allow-modal .

## Especificação

| Especificação                                                                                            | Status                           | Comentário |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'timers-and-user-prompts.html#printing', 'print()')}} | {{Spec2('HTML WHATWG')}} |            |

## Compatibilidade com navegadores

{{Compat("api.Window.print")}}

## Veja também

- [Printing](/en/Printing)
- {{ domxref("window.onbeforeprint") }}
- {{ domxref("window.onafterprint") }}
