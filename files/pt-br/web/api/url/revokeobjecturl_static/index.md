---
title: URL.revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
---

{{ApiRef("URL API")}}

O método estático **`URL.revokeObjectURL()`** anula uma URL que anteriormente foi criada pelo método {{domxref("URL.createObjectURL()") }}.

Execute este método quando terminar de utilizar um objeto URL para informar o browser que não preicsa mais manter uma referência deste arquivo.

{{AvailableInWorkers}}

> **Observação:** Este método não esta disponível em service workers, devido a
> questões com cliclo de vida da interface {{domxref("Blob")}} e potenciais vazamentos.

## Sintaxe

```js
URL.revokeObjectURL(objectURL);
```

### Parâmetros

- `objectURL`
  - : Uma {{domxref("DOMString")}} representando o objeto URL que anteriormente foi criado com {{domxref("URL.createObjectURL", "createObjectURL()") }}.

## Exemplos

Veja [Usando o objeto URL para exibir imagens](/pt-BR/docs/Web/API/File/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- [Usando arquivo de uma aplicação web](/pt-BR/docs/Web/API/File/Using_files_from_web_applications)
- [Usando objetos Url para exibir imagens](/pt-BR/docs/Web/API/File/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.createObjectURL()") }}
