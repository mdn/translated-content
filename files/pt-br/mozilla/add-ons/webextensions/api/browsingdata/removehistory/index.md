---
title: browsingData.removeHistory()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeHistory
---

{{AddonSidebar}}

Limpa o histórico de páginas web que o usuário vistou (histórico de navegação)

Você pode usar o parâmetro `removalOptions`, em que é um objeto {{WebExtAPIRef("browsingData.RemovalOptions")}}, para:

- limpar apenas os registros de páginas visitadas em determinado período.
- controlar se limpa os registros apenas de uma página web normal ou se limpa os registros de um app e extensões hospedados.

Esta é uma função assíncrona que retorna uma [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Sintaxe

```js-nolint
let removing = browser.browsingData.removeHistory(
  removalOptions            // objeto RemovalOptions
)
```

### Parâmetros

- `removalOptions`
  - : `object`. Um objeto {{WebExtAPIRef("browsingData.RemovalOptions")}}, que pode ser usado para limpar apenas os registros de páginas web visitadas após determinado tempo, e limpa os registros apenas de uma página web normal ou limpa os registros de apps e extensões hospedados.

### Valor retornado

Uma [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) que será realizada sem argumentos quando a remoção for finalizada. Se ocorrer qualquer erro, a promise será rejeitada com uma mensagem de erro.

## Exemplos

Remove registros de páginas visitadas na última semana:

```js
function onRemoved() {
  console.log("removido");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

let oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .removeHistory({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Remove todos os registos de páginas visitadas:

```js
function onRemoved() {
  console.log("removido");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeHistory({}).then(onRemoved, onError);
```

## Compatibilidade entre navegadores

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Esta API é baseada na API do Chromium [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData).

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
