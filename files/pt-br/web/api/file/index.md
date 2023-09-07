---
title: File
slug: Web/API/File
---

{{APIRef("File API")}}

## Sumário

A interface `File` provê informações sobre arquivos e permite ao JavaScript a acessar seu conteúdo.

São geralmente recuperados a partir de um objeto {{domxref("FileList")}} que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento {{ HTMLElement("input") }}, a partir do objeto {{domxref("DataTransfer")}} utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um {{ domxref("HTMLCanvasElement") }}. Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](#implementation_notes) para mais informações.)

Um objeto File é um tipo específico de {{domxref("Blob")}}, e podem ser utilizados em qualquer contexto que um Blob pode. Em particular, {{domxref("FileReader")}}, {{domxref("URL.createObjectURL()")}}, {{domxref("ImageBitmapFactories.createImageBitmap()", "createImageBitmap()")}}, e {{domxref("XMLHttpRequest", "", "send()")}} aceitam ambos, Blobs e Files.

Veja [Using files from web applications](/pt-BR/docs/Using_files_from_web_applications) (usando arquivos através de uma aplicação web) para mais informações e exemplos.

A referência ao arquivo pode ser salva quando o formulário é submetido enquanto o usuário está offline, de forma que os dados possam ser recuperados e enviados quando a conexão com a internet for reestabelecida,

**Propriedades**

- {{domxref("File.lastModifiedDate")}} {{readonlyinline}}
  - : A Data da última modificação do arquivo referenciado pelo objeto `File`.
- {{domxref("File.name")}} {{readonlyinline}}
  - : O nome do arquivo referenciado pelo objeto `File`.
- {{domxref("File.fileName")}} {{non-standard_inline}} {{readonlyinline}}
  - : O nome do arquivo referenciado pelo objeto `File`.
- {{domxref("File.fileSize")}} {{non-standard_inline}} {{readonlyinline}}
  - : O tamanho do arquivo referenciado, em bytes.

A interface `File` herda as propriedades da interface {{domxref("Blob")}}.

{{page("/pt-BR/docs/Web/API/Blob","Properties")}}

## Métodos

- {{domxref("File.getAsBinary()")}} {{non-standard_inline}}
  - : Retorna uma string contendo os dados do arquivo em formato binário.
- {{domxref("File.getAsDataURL()")}} {{non-standard_inline}}
  - : Uma string contendo os dados do arquivo codificados como `data:` URL.
- {{domxref("File.getAsText()","File.getAsText(string encoding)")}} {{non-standard_inline}}
  - : Retorna o conteúdo do arquivo como uma string em que os dados do arquivo são interpretados como texto, usando a codificação passada por parâmetro.

## Especificações

| Especificação            | Status                | Comentários        |
| ------------------------ | --------------------- | ------------------ |
| {{SpecName('File API')}} | {{Spec2('File API')}} | Definição Inicial. |

## Compatibilidade com os Navegadores

{{Compat("api.File")}}

## Veja também

- [Using files from web applications](/pt-BR/docs/Using_files_from_web_applications)
- [Using the DOM File API in chrome code](/pt-BR/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
- {{domxref("FileReader")}}
