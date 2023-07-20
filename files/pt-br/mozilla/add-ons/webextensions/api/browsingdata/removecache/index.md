---
title: browsingData.removeCache()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCache
---

{{AddonSidebar()}}

Limpa o cache do navegador.

Note que apesar desta função receber um objeto {{WebExtAPIRef("browsingData.RemovalOptions")}}, ele será ignorado. Todo o cache sempre será limpo usando esta função.

Esta é uma função assíncrona que retorna uma [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Sintaxe

```js
let removing = browser.browsingData.removeCache(
  removalOptions, // objeto RemovalOptions
);
```

### Parâmetros

- `removalOptions` {{optional_inline}}
  - : `object`. Um objeto {{WebExtAPIRef("browsingData.RemovalOptions")}}. Este parâmetro não tem efeito.

### Valor retornado

Uma [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) que será realizada sem argumentos quando a remoção for finalizada. Se ocorrer qualquer erro, a promise será rejeitada com uma mensagem de erro.

## Exemplos

Limpar o cache do navegador:

```js
function onRemoved() {
  console.log("removido");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCache({}).then(onRemoved, onError);
```

## Compatibilidade com navegadores

{{Compat}}

{{WebExtExamples}}

> **Nota:** Esta API é baseada na API do Chromium [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/browsingData/).
>
> A compatibilidade dos dados do Microsoft Edge é fornecida pela Microsoft Corporation e é incluída aqui sob a licença Creative Commons Attribution 3.0 United States.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
