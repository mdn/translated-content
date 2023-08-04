---
title: Streams API
slug: Web/API/Streams_API
---

{{SeeCompatTable}}{{APIRef("Streams")}}A API Streams permite que o JavaScript acesse programaticamente fluxos de dados recebidos pela rede e os processe conforme desejado pelo desenvolvedor.

## Conceitos e Uso

O streaming envolve a divisão de um recurso que você deseja receber pela rede em pequenos blocos e, em seguida, processa esses blocos aos poucos. Isso é algo que os navegadores fazem de qualquer maneira ao receber recursos para serem exibidos em páginas da web — o buffer de vídeos e mais está gradualmente disponível para reprodução, e às vezes você verá imagens sendo exibidas gradualmente conforme mais é carregado.

Mas isto nunca esteve disponível para JavaScript antes. Anteriormente, se quiséssemos processar um recurso de algum tipo (seja ele um vídeo, ou um arquivo de texto, etc.), Teríamos que baixar o arquivo inteiro, espera até que seja desserializado em um formato adequado, então processa todo o lote após ser totalmente recebido.

Com o Streams disponível para JavaScript, tudo isso muda - agora você pode começar a processar dados brutos com JavaScript bit a bit assim que estiverem disponíveis no lado do cliente, sem a necessidade de gerar um buffer, string ou blob.

![](concept.png)

Também há mais vantagens - você pode detectar quando os fluxos começam ou terminam, encadeia os fluxos juntos, trata os erros e cancela os fluxos quando necessário e reage à velocidade em que o fluxo está sendo lido.

O uso básico de Streams gira em torno de tornar as respostas disponíveis como streams. Por exemplo, a resposta {{domxref("Body")}} retornada com sucesso de uma [fetch request](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/fetch) pode ser exposta como um {{domxref("ReadableStream")}}, e você pode lê-lo usando um leitor criado com {{domxref("ReadableStream.getReader()")}}, cancela-lo com {{domxref("ReadableStream.cancel()")}}, etc.

Usos mais complicados envolvem a criação de seu próprio fluxo usando o contrutor {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}, por exemplo para processar dados dentro de um [service worker](/pt-BR/docs/Web/API/Service_Worker_API).

Você também pode gravar dados em streams usando {{domxref("WritableStream")}}.

> **Nota:** Você pode encontrar muito mais detalhes sobre a teoria e prática de streams em nossos artigos — [Streams API concepts](/pt-BR/docs/Web/API/Streams_API/Concepts), [Using readable streams](/pt-BR/docs/Web/API/Streams_API/Using_readable_streams), e [Using writable streams](/pt-BR/docs/Web/API/Streams_API/Using_writable_streams).

## Stream interfaces

### Readable streams

- {{domxref("ReadableStream")}}
  - : Represents a readable stream of data. It can be used to handle response streams of the [Fetch API](/pt-BR/docs/Web/API/Fetch_API), or developer-defined streams (e.g. a custom {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} constructor).
- {{domxref("ReadableStreamDefaultReader")}}
  - : Represents a default reader that can be used to read stream data supplied from a network (e.g. a fetch request).
- {{domxref("ReadableStreamDefaultController")}}
  - : Represents a controller allowing control of a {{domxref("ReadableStream")}}'s state and internal queue. Default controllers are for streams that are not byte streams.

### Writable streams

- {{domxref("WritableStream")}}
  - : Provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing.
- {{domxref("WritableStreamDefaultWriter")}}
  - : Represents a default writable stream writer that can be used to write chunks of data to a writable stream.
- {{domxref("WritableStreamDefaultController")}}
  - : Represents a controller allowing control of a {{domxref("WritableStream")}}'s state. When constructing a `WritableStream`, the underlying sink is given a corresponding `WritableStreamDefaultController` instance to manipulate.

### Related stream APIs and operations

- {{domxref("ByteLengthQueuingStrategy")}}
  - : Provides a built-in byte length queuing strategy that can be used when constructing streams.
- {{domxref("CountQueuingStrategy")}}
  - : Provides a built-in chunk counting queuing strategy that can be used when constructing streams.

### Extensions to other APIs

- {{domxref("Request")}}
  - : When a new `Request` object is constructed, you can pass it a {{domxref("ReadableStream")}} in the `body` property of its `RequestInit` dictionary. This `Request` could then be passed to a {{domxref("WindowOrWorkerGlobalScope.fetch()")}} to commence fetching the stream.
- {{domxref("Body")}}
  - : The response {{domxref("Body")}} returned by a successful [fetch request](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/fetch) is exposed by default as a {{domxref("ReadableStream")}}, and can have a reader attached to it, etc.

### ByteStream-related interfaces

> **Aviso:** **Important**: these are not implemented anywhere as yet, and questions have been raised as to whether the spec details are in a finished enough state for them to be implemented. This may change over time.

- {{domxref("ReadableStreamBYOBReader")}}
  - : Represents a BYOB ("bring your own buffer") reader that can be used to read stream data supplied by the developer (e.g. a custom {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} constructor).
- {{domxref("ReadableByteStreamController")}}
  - : Represents a controller allowing control of a {{domxref("ReadableStream")}}'s state and internal queue. Byte stream controllers are for byte streams.
- {{domxref("ReadableStreamBYOBRequest")}}
  - : Represents a pull into request in a {{domxref("ReadableByteStreamController")}}.

## Examples

We have created a directory of examples to go along with the Streams API documentation — see [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams). The examples are as follows:

- [Simple stream pump](http://mdn.github.io/dom-examples/streams/simple-pump/): This example shows how to consume a ReadableStream and pass its data to another.
- [Grayscale a PNG](http://mdn.github.io/dom-examples/streams/grayscale-png/): This example shows how a ReadableStream of a PNG can be turned into grayscale.
- [Simple random stream](http://mdn.github.io/dom-examples/streams/simple-random-stream/): This example shows how to use a custom stream to generate random strings, enqueue them as chunks, and then read them back out again.
- [Simple tee example](http://mdn.github.io/dom-examples/streams/simple-tee-example/): This example extends the Simple random stream example, showing how a stream can be teed and both resulting streams can be read independently.
- [Simple writer](http://mdn.github.io/dom-examples/streams/simple-writer/): This example shows how to to write to a writable stream, then decode the stream and write the contents to the UI.
- [Unpack chunks of a PNG](http://mdn.github.io/dom-examples/streams/png-transform-stream/): This example shows how [`pipeThrough()`](/pt-BR/docs/Web/API/ReadableStream/pipeThrough) can be used to transform a ReadableStream into a stream of other data types by transforming a data of a PNG file into a stream of PNG chunks.

Examples from other developers:

- [Progress Indicators with Streams, Service Workers, & Fetch](https://fetch-progress.anthum.com/).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Streams API concepts](/pt-BR/docs/Web/API/Streams_API/Concepts)
- [Using readable streams](/pt-BR/docs/Web/API/Streams_API/Using_readable_streams)
- [Using writable streams](/pt-BR/docs/Web/API/Streams_API/Using_writable_streams)
