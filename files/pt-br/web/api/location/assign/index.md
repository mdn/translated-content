---
title: Location.assign()
slug: Web/API/Location/assign
tags:
  - API
  - HTML-DOM
  - Location
  - Referencia
  - metodo
translation_of: Web/API/Location/assign
---
{{ APIRef("HTML DOM") }}

O método **`Location.assign()`** faz com que o navegador carregue o documento na URL especificada e a exiba na janela atual.

Se a tatefa não poder ser executada por alguma violação de segurança, uma {{domxref("DOMException")}} do tipo `SECURITY_ERROR` será lançada. Isso acontece se a origem do script chamador do método for diferente da origem da página originalmente descrita no objeto {{domxref("Location")}}, geralmente quando o script está hospedado em um dominio diferente.

Se a URL especificada for inválida, uma {{domxref("DOMException")}} do tipo `SYNTAX_ERROR` será lançada.

## Sintaxe

```
location.assign(url);
```

### Parâmetros

- _url_
  - : É uma {{domxref("DOMString")}} contendo a URL da página destino.

## Exemplos

```js
// Navega para a página do artigo Location.reload
document.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload');
```

## Especificações

| Especificação                                                                                                    | Status                           | Comentários                                         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------- |
| {{SpecName('HTML WHATWG', "history.html#dom-location-assign", "Location.assign()")}} | {{Spec2('HTML WHATWG')}} | Sem alterações no {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#dom-location-assign", "Location.assign()")}} | {{Spec2('HTML5 W3C')}}     | Definição inicial.                                  |

## Compatibilidade com navegadores

{{Compat("api.Location.assign")}}

## Veja também

- A interface {{domxref("Location")}}.
- Métodos Similares: {{domxref("Location.replace()")}} and {{domxref("Location.reload()")}}.
