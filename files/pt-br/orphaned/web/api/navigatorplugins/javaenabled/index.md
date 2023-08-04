---
title: NavigatorPlugins.javaEnabled()
slug: orphaned/Web/API/NavigatorPlugins/javaEnabled
---

{{ APIRef("HTML DOM") }}

Este método indica se o navegador atual tem o Java ativo ou não.

## Sintaxe

```
result = window.navigator.javaEnabled()
```

## Exemplo

```
if (window.navigator.javaEnabled()) {
   // browser has java
}
```

## Notas

O valor de retorno para este método indica se a preferência que controla o Java está ativado ou desativado - não se o navegador oferece suporte ao Java, em geral.

## Especificações

| Esécificações                                                                                                            | Estado                           | Comentário         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#dom-navigator-javaenabled', 'NavigatorPlugins.javaEnabled')}} | {{Spec2('HTML WHATWG')}} | Definição inicial. |

## Navegadores compativeis

{{Compat("api.NavigatorPlugins.javaEnabled")}}
