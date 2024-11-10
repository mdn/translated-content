---
title: FileReader
slug: Web/API/FileReader
---

{{APIRef("File API")}}

O objeto **`FileReader`** permite que aplicativos da web leiam de forma assíncrona o conteúdo de arquivos (ou buffers de dados brutos) armazenados no computador do usuário, usando {{domxref("File")}} ou {{domxref("Blob") }} objetos para especificar o arquivo ou dados a serem lidos.

Objetos de arquivo podem ser obtidos de um objeto {{domxref("FileList")}} retornado como resultado de um usuário selecionar arquivos usando o elemento {{HTMLElement("input")}} ou de uma operação de arrastar e soltar {{ domxref("DataTransfer")}} objeto.

O `FileReader` só pode acessar o conteúdo dos arquivos que o usuário selecionou explicitamente, usando um elemento HTML `<input type="file">` ou arrastando e soltando. Ele não pode ser usado para ler um arquivo por nome de caminho do sistema de arquivos do usuário. Para ler arquivos no sistema de arquivos do cliente por nome de caminho, use a [API de acesso ao sistema de arquivos](/pt-BR/docs/Web/API/File_System_Access_API). Para ler arquivos do lado do servidor, use soluções Ajax padrão, com permissão CORS se estiver lendo entre domínios.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Construtor

- {{domxref("FileReader.FileReader", "FileReader()")}}
  - : Retorna um `FileReader` recém-construído.

Consulte [Usando arquivos de aplicativos da Web](/pt-BR/docs/Web/API/File_API/Using_files_from_web_applications) para obter detalhes e exemplos.

## Propriedades da instância

- {{domxref("FileReader.error")}} {{ReadOnlyInline}}
  - : Um {{domxref("DOMException")}} representando o erro que ocorreu durante a leitura do arquivo.
- {{domxref("FileReader.readyState")}} {{ReadOnlyInline}}

  - : Um número que indica o estado do `FileReader`. Este é um dos seguintes:

    | Nome      | Valor | Descrição                                    |
    | --------- | ----- | -------------------------------------------- |
    | `EMPTY`   | `0`   | Nenhum dado foi carregado ainda.             |
    | `LOADING` | `1`   | Os dados estão sendo carregados no momento.  |
    | 'DONE'    | `2`   | Toda a solicitação de leitura foi concluída. |

- {{domxref("FileReader.result")}} {{ReadOnlyInline}}
  - : o conteúdo do arquivo. Esta propriedade só é válida após a conclusão da operação de leitura, e o formato dos dados depende de qual dos métodos foi utilizado para iniciar a operação de leitura.

## Métodos de instância

- {{domxref("FileReader.abort()")}}
  - : Aborta a operação de leitura. Ao retornar, o `readyState` será `DONE`.
- {{domxref("FileReader.readAsArrayBuffer()")}}
  - : Inicia a leitura do conteúdo do {{domxref("Blob")}} especificado, uma vez finalizado, o atributo `result` contém um {{jsxref("ArrayBuffer")}} representando os dados do arquivo.
- {{domxref("FileReader.readAsBinaryString()")}}
  - : Inicia a leitura do conteúdo do {{domxref("Blob")}} especificado, uma vez concluído, o atributo `result` contém os dados binários brutos do arquivo como uma string.
- {{domxref("FileReader.readAsDataURL()")}}
  - : Inicia a leitura do conteúdo do {{domxref("Blob")}} especificado, uma vez finalizado, o atributo `result` contém uma URL `data:` representando os dados do arquivo.
- {{domxref("FileReader.readAsText()")}}
  - : Inicia a leitura do conteúdo do {{domxref("Blob")}} especificado, uma vez terminado, o atributo `result` contém o conteúdo do arquivo como uma string de texto. Um nome de codificação opcional pode ser especificado.

## Eventos

Ouça esses eventos usando {{domxref("EventTarget/addEventListener", "addEventListener()")}} ou atribuindo um ouvinte de eventos à propriedade `oneventname` desta interface. Remova os ouvintes de eventos com {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}, uma vez que `FileReader` não seja mais usado, para evitar vazamentos de memória.

- {{domxref("FileReader/abort_event", "abort")}}
  - : Acionado quando uma leitura foi abortada, por exemplo, porque o programa chamou {{domxref("FileReader.abort()")}}.
- {{domxref("FileReader/error_event", "error")}}
  - : Acionado quando a leitura falhou devido a um erro.
- {{domxref("FileReader/load_event", "load")}}
  - : Disparado quando uma leitura foi concluída com sucesso.
- {{domxref("FileReader/loadend_event", "loadend")}}
  - : Acionado quando uma leitura foi concluída, com sucesso ou não.
- {{domxref("FileReader/loadstart_event", "loadstart")}}
  - : Disparado quando uma leitura é iniciada.
- {{domxref("FileReader/progress_event", "progress")}}
  - : Acionado periodicamente à medida que os dados são lidos.

## Especificações

{{Specifications}}

## Compatibilidade do navegador

{{Compat}}

## Veja também

- [Usando arquivos de aplicativos da web](/pt-BR/docs/Web/API/File_API/Using_files_from_web_applications)
- {{domxref("File")}}
- {{domxref("Blob")}}
- {{domxref("FileReaderSync")}}{ APIRef("File API")}}
