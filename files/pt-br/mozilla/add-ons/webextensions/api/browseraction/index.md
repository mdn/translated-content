---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
---

{{AddonSidebar}}

Adiciona um botão a barra de ferramentas do navegador.

Uma [browser action](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) é um botão na barra de ferramentas do navegador.

Você pode associar um popup junto ao botão. O popup é especificado usando HTML, CSS e JavaScript, apenas como uma página web normal. O JavaScript rodando no popup tem o mesmo acesso a API WebExtension completa, assim como seus scripts em backend, mas seu contexto global é o popup, não a página exibida no navegador atualmente. Para afetar páginas web você precisa comunicá-las via [messages](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging).

Se você especificar um popup ele está exibido — e o conteúdo será carregado — quando o usuário clicar no ícone. Você não especificar um popup, quando o usuário clicar no ícone um evento será disparado para sua extensão.

Você pode definir muitas ações de propriedades do navegador de modo declarativo usando a chave `browser_action` no arquivo manifest.json.

Com a API `browserAction você pode`:

- Usar {{WebExtAPIRef("browserAction.onClicked")}} para escutar por cliques no ícone.
- Atribuir e obter as propriedades do ícone — icone, titulo, popup, e assim por diante. Você pode obter e atribui-los globalmente para todas as abas, ou para uma aba específica informando o ID como um argumento adicional.

## Tipos

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : Um array de quatro números inteiros entre 0-55 definido uma cor RGB.
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : Dados do pixel de uma imagem. Deve ser um objeto [`ImageData`](/pt-BR/docs/Web/API/ImageData) (por exemplo, de um elemento {{htmlelement("canvas")}}).

## Funções

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : Atribui ação de título do navegador. Ele será exibido em um tooltip.
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : Obtém a ação de título do navegador.
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : Atribui a ação de ícone ao navegador.
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : Atribui o documento HTML que será aberto como um popup quando o usuário clicar na ação de ícone do navegador.
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : Obtém o documento HTML atribuido como uma ação de popup do navegador.
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : Abre a ação popup do navegador.
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : Atribui a ação do texto distintivo do navegador. O emblema é exibido acima do ícone.
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : Obtém o texto do emblema do navegador.
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : Atribui a cor de fundo do emblema.
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : Obtém a cor de fundo do emblema.
- {{WebExtAPIRef("browserAction.enable()")}}
  - : Habilita a ação do navegador para uma aba. Por padrão, ações são habilitadas para todas as abas.
- {{WebExtAPIRef("browserAction.disable()")}}
  - : Desabilita a ação para uma aba do navegador, significando que ela não pode ser clicada quando aquela aba estiver ativa.
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : Verifica se a ação do navegador está ou não habilitada.

## Eventos

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : Disparado quando uma ação do ícone do navegador é clicada. Este evento não será disparado quando a ação do navegador tiver um popup.

## Compatibilidade com navegadores

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> **Agradecimentos**Esta API é baseada na API [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction) do Chromium. Este documento é derivado do [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) no código do Chromium.Os dados de compatibilidade do Microsoft Edge são fornecidos Microsoft Corporation e estão aqui inclusos sob a Creative Commons Attribution 3.0 United States License.

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
