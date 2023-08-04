---
title: NavigatorLanguage.language
slug: orphaned/Web/API/NavigatorLanguage/language
---

{{APIRef("HTML DOM")}}

A propriedade **`NavigatorLanguage.language`** retorna uma string representando a língua de preferência do usuário, normalmente a língua da interface do navegador.

## Sintaxe

```
var lang = navigator.language
```

### Valor

Uma {{domxref("DOMString")}} _`lang`_ armazena a string representando a língua como definida em [BCP 47](http://www.ietf.org/rfc/bcp/bcp47.txt). Exemplos de códigos de línguas válidos incluem "en", "en-US", "fr", "fr-FR", "es-ES", etc.

Atente-se que no Safari no macOS e iOS antes da versão 10.2, o código do país é retornado em caixa baixa: "en-us", "fr-fr" etc.

## Exemplo

```js
if (window.navigator.language != 'en') {
  doLangSelect(window.navigator.language);
}
```

## Specifications

| Specification                                                                                                | Status                       | Comentários       |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------- |
| {{ SpecName('HTML5.1', '#dom-navigator-language', 'NavigatorLanguage.language') }} | {{ Spec2('HTML5.1') }} | Definição inicial |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("NavigatorLanguage.languages", "navigator.languages")}}
- {{domxref("navigator")}}
