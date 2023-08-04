---
title: browsingData.remove()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/remove
---

{{AddonSidebar()}}

Remove o dado de navegação especificado.

O dado de navegação a ser removido está especificado na opção `dataTypes`, em que é um objeto {{WebExtAPIRef("browsingData.DataTypeSet")}}.

Você pode usar a opção `removalOptions`, um {{WebExtAPIRef("browsingData.RemovalOptions")}} objeto, para controlar o quão longe no passado a remoção de dados será feita e se deseja remover dados apenas de páginas normais ou remover de aplicativos e extensões hospedados também.

Isso é uma função assíncrona que retorna uma [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Sintaxe

```js
let removing = browser.browsingData.remove(
  removalOptions, // RemovalOptions object
  dataTypes, // DataTypeSet object
);
```

### Parâmetros

- `removalOptions`
  - : `object`. Um objeto {{WebExtAPIRef("browsingData.RemovalOptions")}}, que pode ser usado para controlar o quão longe no passado a remoção de dados será feita e se deseja remover dados apenas de páginas normais ou remover de aplicativos e extensões hospedados também.
- `dataTypes`
  - : `object`. Um objeto {{WebExtAPIRef("browsingData.DataTypeSet")}}, descrevendo os tipos de dados para remover (e.g. histórico, downloads, ...).

### Valor retornado

Uma [`Promessa`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) que será realizada sem argumentos quando a remoção terminar. Se ocorrer algum erro, a promessa será rejeitada com uma mensagem de erro.

## Exemplos

Remove o histórico de download e navegação da última semana:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

let oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .remove({ since: oneWeekAgo }, { downloads: true, history: true })
  .then(onRemoved, onError);
```

Remove todo o histórico de download e navegação:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

let oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .remove({ since: oneWeekAgo }, { downloads: true, history: true })
  .then(onRemoved, onError);
```

{{WebExtExamples}}

## Compatibilidade com navegadores

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/browsingData/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
