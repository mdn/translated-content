---
title: URL.createObjectURL()
slug: Web/API/URL/createObjectURL_static
---

---

{{APIRef("URL API")}}

O método estático **`URL.createObjectURL()`** cria um {{domxref("DOMString")}} contendo a URL representando o objeto passado como parâmetro.

O tempo de vida da URL é vinculado ao {{domxref("document")}} da janela onde ele foi criado. O novo objeto URL represenda o objeto {{domxref("File")}} especificado ou o objeto {{domxref("Blob")}}.

Para anular um objeto URL, execute o método {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}

{{AvailableInWorkers}}

> **Nota:** Esta funcionalidade não está disponível em [Service Workers](/pt-BR/docs/Web/API/Service_Worker_API) devido ao potencial de criar vazamento de memória

## Sintaxe

```js
const objectURL = URL.createObjectURL(object);
```

### Parâmetros

- `object`
  - : Um {{domxref("File")}}, {{domxref("Blob")}}, ou objeto {{domxref("MediaSource")}} para criar um objeto URL.

### Retorno de valor

Uma {{domxref("DOMString")}} contendo o objeto URL e pode ser usado para referenciar o conteúdo especificado na origem do `object`.

## Exemplos

Veja [Usando objeto URL para exibir imagens](/pt-BR/docs/Web/API/File/Using_files_from_web_applications#example_using_object_urls_to_display_images).

## Notas de uso

### Gerenciamento de memória

Cada vez que você executa `createObjectURL()`, um novo objeto URL é criado, mesmo que você já tenha criado este objeto. Cada um desses pode ser eliminado executando o método {{domxref("URL.revokeObjectURL()")}} quando você não precisa mais dele.

Os navegadores vão limpar objetos URLs automaticamente quando o documento for descarregado; contudo, para otimizar a performace e o uso de memória, se há momentos que é seguro descarregar, você deve fazer isso.

### Usando objeto URL para media stream

Em versões antigas da especificação Media Source, anexar stream a um elemento {{HTMLElement("video")}} é obrigatório criar um objeto URL para o {{domxref("MediaStream")}}. Isto não é mais necessário, e os navegadores estão removendo o suporte para isso.

> **Warning:** Se você ainda tem código com
> {{domxref("URL.createObjectURL", "createObjectURL()")}} para anexar streams em elementos
> de media, você precisa atualizar seu código para {{domxref("HTMLMediaElement.srcObject","srcObject")}} to the `MediaStream` directly.

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- [Usando arquivos de aplicativos da web](/pt-BR/docs/Web/API/File/Using_files_from_web_applications)
- [Usando objetos URLs para exibir imagens](/pt-BR/docs/Web/API/File/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.revokeObjectURL()")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- {{domxref("FileReader.readAsDataURL()")}}
