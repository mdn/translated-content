---
title: Document.location
slug: Web/API/Document/location
---

{{APIRef("DOM")}}

A propriedade, de apenas leitura, **`Document.location`** retorna um objeto {{domxref("Location")}}, que contém informações sobre a URL do documento e provém métodos para mudar a URL e carregar outra URL.

Embora `Document.location` seja um objeto `Location de apenas leitura`, você pode atribuir um {{domxref("DOMString")}} para ele. Isso significa que você pode trabalhar com document.location, na maioria dos casos, como se fosse uma string: `document.location = 'http://www.example.com'` é um sinônimo de `document.location.href = 'http://www.example.com'`.

Para recuperar somente a URL como uma string, a propriedade de apenas leitura {{domxref("document.URL")}} pode ser utilizada.

Se o documento atual não estiver no contexto de navegação, o valor retornado será `null`.

## Sintaxe

```
locationObj = document.location
document.location = 'http://www.mozilla.org' // Equivalente a document.location.href = 'http://www.mozilla.org'
```

## Exemplo

```js
dump(document.location);
// Imprime uma string como
// "http://www.example.com/juicybits.html" to the console
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- O valor da interface de retorno, {{domxref("Location")}}.
- Uma informação similar, mas anexada ao {{Glossary("browsing context")}}, {{domxref("Window.location")}}.
