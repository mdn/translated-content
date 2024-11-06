---
title: Location.assign()
slug: Web/API/Location/assign
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
document.location.assign(
  "https://developer.mozilla.org/pt-BR/docs/Web/API/Location.reload",
);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A interface {{domxref("Location")}}.
- Métodos Similares: {{domxref("Location.replace()")}} and {{domxref("Location.reload()")}}.
