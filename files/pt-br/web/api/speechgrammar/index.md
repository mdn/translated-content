---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

A interface **`SpeechGrammar`** da [Web Speech API](/pt-BR/docs/Web/API/Web_Speech_API) representa um conjunto de palavras ou padrões de palavras, os quais, nós queremos que o serviço de reconhecimento reconheça.

A gramática é definida usando [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**.) Outros formatos podem ser suportados no futuro.

## Construtor

- {{domxref("SpeechGrammar.SpeechGrammar()")}}
  - : Cria um novo objeto `SpeechGrammar`.

## Propriedades

- {{domxref("SpeechGrammar.src")}}
  - : Define e retorna a string contendo a gramática contida na instância do objeto `SpeechGrammar`.
- {{domxref("SpeechGrammar.weight")}} {{optional_inline}}
  - : Define e retorna o peso do objeto `SpeechGrammar`.

## Exemplos

```js
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // deveria retornar o mesmo conteúdo da variável grammar
console.log(speechRecognitionList[0].weight); // deveria retornar 1 - o mesmo peso definido na linha 4.
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Web Speech API](/pt-BR/docs/Web/API/Web_Speech_API)
