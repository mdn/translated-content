---
title: browsingData.removeCookies()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies
---

{{AddonSidebar()}}

Limpa os cookies do navegador.

Você pode usar o parâmetro `removalOptions`, em que é um objeto {{WebExtAPIRef("browsingData.RemovalOptions")}}, para:

- limpar apenas os cookies criados em determinado tempo.
- controlar se limpar os cookies apenas de uma página web normal ou limpa os cookies de um app e extensões hospedados.

Esta é uma função assíncrona que retorna uma [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Sintaxe

```js
let removing = browser.browsingData.removeCookies(
  removalOptions, // objeto RemovalOptions
);
```

### Parâmetros

- `removalOptions`
  - : `object`. Um objeto {{WebExtAPIRef("browsingData.RemovalOptions")}}, que pode ser usado para limpar apenas cookies criados depois de determinado tempo, e limpa os cookies apenas de uma página web normal ou limpa os cookies de apps e extensões hospedados.

### Valor retornado

Uma [`Promise`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) que será realizada sem argumentos quando a remoção for finalizada. Se ocorrer qualquer erro, a promise será rejeitada com uma mensagem de erro.

## Exemplos

Remove cookies criados na última semana:

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
  .removeCookies({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Remove todos os cookies:

> **Warning:** Usar a API para remover todos os cookies irá, simultâneamente, limpar todos os objetos local storage (incluindo aqueles de outras extensões)
>
> Se você quer limpar todos os cookies sem alterar as informações do local storage, use [browser.cookies](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/cookies) para percorrer and remover os conteúdos de todos os cookies armazenados

```js
function onRemoved() {
  console.log("removido");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCookies({}).then(onRemoved, onError);
```

## Compatibilidade com navegadores

{{Compat}}

{{WebExtExamples}}

> **Note:** Esta API é baseada na API do Chromium [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/browsingData/).
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
