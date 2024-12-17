---
title: URL.revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
---

{{ApiRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

O método estático **`URL.revokeObjectURL()`** anula uma URL que anteriormente foi criada pelo método {{domxref("URL.createObjectURL_static") }}.

Execute este método quando terminar de utilizar um objeto URL para informar o browser que não precisa mais manter a referência ao arquivo.

> [!NOTE]
> Este método _não_ esta disponível em [Service Workers](/pt-BR/docs/Web/API/Service_Worker_API), devido a
> problemas com o ciclo de vida da interface {{domxref("Blob")}} e a potencial vulnerabilidade para vazamentos.

## Sintaxe

```js
URL.revokeObjectURL(objectURL);
```

### Parâmetros

- `objectURL`
  - : Uma {{domxref("DOMString")}} representando o objeto URL que anteriormente foi criado com {{domxref("URL/createObjectURL_static", "createObjectURL()") }}.

### Valor de retorno

None ({{jsxref("undefined")}}).

## Exemplos

Veja [Usando o objeto URL para exibir imagens](/pt-BR/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- [Usando arquivo de uma aplicação web](/pt-BR/docs/Web/API/File_API/Using_files_from_web_applications)
- [Usando objetos Url para exibir imagens](/pt-BR/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.createObjectURL_static") }}
