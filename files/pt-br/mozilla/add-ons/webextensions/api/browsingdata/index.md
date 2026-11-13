---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
---

{{AddonSidebar}}

Habilita extensões a limpar os dados que estão acumulados enquando o usuário navega.

Na API `browsingData`, os dados de navegação são divididos em tipos:

- cache do browser
- cookies
- downloads
- histórico
- armazenamento local
- dados de plugin
- dados de formulários salvos
- senhas salvas

Você pode usar a função {{WebExtAPIRef("browsingData.remove()")}} para remover qualquer combinação desses tipos. Há também funções específicas para remover cada tipo de data em particular, como por exemplo {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} e assim por diante.

Todas funções `browsingData.remove[X]()` pegam o objeto {{WebExtAPIRef("browsingData.RemovalOptions")}} que você usa para controlar outros dois aspectos da remoção de dados:

- quão antigos são os dados para a remoção
- se é para remover dados de páginas normais, ou também para hospedar aplicativos web ou add-ons. Observe que esta opção ainda não é suportada no Firefox.

Finalmente, a API {{WebExtAPIRef("browsingData.settings()")}} fornece uma função que retorna o atual valor das configurações da funcionalidade "Limpar Histórico".

Para usar esta API você deve ter a [permissão de API](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) "browsingData".

## Tipos

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : Objeto usado para especificar o tipo de dado para remoção: por exemplo, histórico, downloads, senhas e assim por diante.
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : Objeto usado para especificar o quanto tempo para remoção de dados, e se remover dados adicionados em uma navegação web normal, por aplicativos hospedados ou por add-ons.

## Methods

- {{WebExtAPIRef("browsingData.remove()")}}
  - : Remove os dados de navegação especificado pelo seu tipo.
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : Limpa o cache do navegador.
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : Remove os cookies.
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : Remove a lista de arquivos baixados.
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : Limpa os dados de um formulário salvo.
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : Limpa o histórico do navegador.
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : Limpa qualquer [local storage](/pt-BR/docs/Web/API/Window/localStorage) criado por websites.
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : Limpa passwords salvos.
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : Limpa os dados associados com plugins.
- {{WebExtAPIRef("browsingData.settings()")}}
  - : Obtém o valor atual de configuração da funcionalidade "Limpar Histórico" do navegador.

## Compatibilidade com navegadores

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> **Agradecimentos**Esta API é baseada na API [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) do Chromium.Os dados de compatibilidade do Microsoft Edge compatibility são fornecidos pela Microsoft Corporation e aqui estão inclusos sob a Creative Commons Attribution 3.0 United States License.

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
