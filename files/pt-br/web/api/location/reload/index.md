---
title: Location.reload()
slug: Web/API/Location/reload
tags:
  - API
  - HTML-DOM
  - Localização
  - Referencia
  - metodo
translation_of: Web/API/Location/reload
---
{{ APIRef("HTML DOM") }}

O método **`Location.reload()`** recarrega a URL atual. Seu unico parâmetro opcional é um {{domxref("Boolean")}}, que, quando `true`, faz com que a página sempre seja recarregada do servidor. Se ele é `false` ou não estiver especificado, o navegador pode carregar ela do cache.

Caso não seja possível recarregar por questões de violação de segurança, uma {{domxref("DOMException")}} do tipo `SECURITY_ERROR` é jogada. Isso acontece se a origem do script que chama o método é diferente da origem da página originalmente descrita pelo objeto {{domxref("Location")}}, usualmente quando o script é hosteado em um domínio diferente.

## Sintaxe

```
object.reload(forcedReload);
```

### Parametros

- _forcedReload_ {{optional_inline}}
  - : É uma flag {{domxref("Boolean")}}, que quando `true`, faz com que a página sempre seja recarregada do servidor, se é `false` ou não for definido, o navegador pode recarregar a página do cache.

## Exemplos

```js
// Recarrega a página atual sem usar o cache
document.location.reload(true);
```

## Especificações

| Specification                                                                                                    | Status                           | Comment                                              |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------- |
| {{SpecName('HTML WHATWG', "history.html#dom-location-reload", "Location.reload()")}} | {{Spec2('HTML WHATWG')}} | Nenhuma mudança do {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#dom-location-reload", "Location.reload()")}} | {{Spec2('HTML5 W3C')}}     | Definição inicial.                                   |

## Compatibilidade com navegadores

{{Compat("api.Location.reload")}}

## Veja também

- A interface {{domxref("Location")}} que o método pertence.
- Métodos similares: {{domxref("Location.assign()")}} e {{domxref("Location.replace()")}}.
