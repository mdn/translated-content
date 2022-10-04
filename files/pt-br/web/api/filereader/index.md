---
title: FileReader
slug: Web/API/FileReader
translation_of: Web/API/FileReader
---
{{ APIRef("File API")}}

## Resumo

O objeto `FileReader` permite aplicações web ler assincronamente o conteúdo dos arquivos (ou buffers de dados puros) do computador do usuário, utilizando o objeto {{ domxref("File") }} ou {{ domxref("Blob") }} para especificar o arquivo ou os dados a serem lidos.

Objetos File podem ser obtidos a partir de um objeto {{ domxref("FileList") }} retornado como resultado da seleção de um usuário utilizando um elemento {{ HTMLElement("input") }}, a partir de uma operação de drag and drop [`DataTransfer`](/En/DragDrop/DataTransfer), ou a partir de um `mozGetAsFile()` da api {{ domxref("HTMLCanvasElement") }}.

## Construtor

```
FileReader FileReader();
```

Veja [Using files from web applications](/en/Using_files_from_web_applications) para detalhes e exemplos.

## Propriedades

- {{domxref("FileReader.error")}} {{readonlyinline}}
  - : Um {{domxref("DOMError")}} representa o erro que ocorreu durante a leitura do arquivo.
- {{domxref("FileReader.readyState")}} {{readonlyinline}}
  - : Um número indicando o estado do `FileReader`. Este poderá ser um dos seguintes estados [State constants](#state_constants).
- {{domxref("FileReader.result")}} {{readonlyinline}}
  - : O conteúdo do arquivo. Esta propriedade é válida apenas após a operação de leitura estar completa, e o formato dos dados dependem de qual método foi usado para iniciar a operação de leitura.

### Manipuladores de eventos

- {{domxref("FileReader.onabort")}}
  - : Um manipulador para o evento {{event("abort")}}. Este evento é chamado cada vez que a operação de leitura é abortada.
- {{domxref("FileReader.onerror")}}
  - : Um manipulador para o evento {{event("error")}}. Este evento é chamado cada vez que a operação de leitura encontra um erro.
- {{domxref("FileReader.onload")}}
  - : Um manipulador para o evento {{event("load")}}. Este evento é chamado cada vez que a operação de leitura é completada com sucesso.
- {{domxref("FileReader.onloadstart")}}
  - : Um manipulador para o evento {{event("loadstart")}}. Este evento é chamado cada vez que a leitura começa.
- {{domxref("FileReader.onloadend")}}
  - : Um manipulador para o evento {{event("loadend")}}. Este evento é chamado cada vez que a operação de leitura é completada (tanto em caso de sucesso quanto de erro).
- {{domxref("FileReader.onprogress")}}
  - : Um manipulador para o evento {{event("progress")}}. Este evento é chamado durante a leitura do conteúdo de {{domxref("Blob")}}.

> **Nota:** Nota: O `FileReader` herda de {{domxref("EventTarget")}}, todos estes eventos podem ser listados usando o método {{domxref("EventTarget.addEventListener()","addEventListener")}}.

### Constantes de estado

- `EMPTY`: `0` : Nenhum dado foi carregado ainda.
- `LOADING`: `1` : Os dados estão sendo carregados.
- `DONE`: `2` : Toda a requisição de leitura foi completada.

## Métodos

- {{domxref("FileReader.abort()")}}
  - : Aborta a operação de leitura. O retorno, no `readyState` será `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}} {{ gecko_minversion_inline("7.0") }}
  - : Inicia a leitura do conteúdo do {{ domxref("Blob") }} espeficado, uma vez finalizado, o atributo `result` conterá um {{domxref("ArrayBuffer")}} representando os dados do arquivo.
- {{domxref("FileReader.readAsBinaryString()")}}
  - : Inicia a leitura do conteúdo do {{ domxref("Blob") }} especificado, uma vez finalizado, o atributo `result` conterá os dados raw binários do arquivo como string.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Inicia a leitura do conteúdo do {{ domxref("Blob") }} especificado, uma vez finalizado, o atributo `result` conterá um `data:` URL representando os dados do arquivo.
- {{domxref("FileReader.readAsText()")}}
  - : Inicia a leitura do conteúdo do {{ domxref("Blob") }} especificado, uma vez finalizado, o atributo `result` conterá o conteúdo do arquivo como string de texto.

## Especificações

| Especificação                                                                    | Status                       | Comentário         |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('File API','#FileReader-interface','FileReader')}} | {{Spec2('File API')}} | Definição inicial. |

## Compatibilidade

{{Compat("api.FileReader")}}

## Veja também

- [Using files from web applications](/en/Using_files_from_web_applications)
- {{ domxref("File") }}
- {{ domxref("Blob") }}
