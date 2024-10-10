---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
---

{{AddonSidebar}}

A API [WebExtensions](/pt-BR/docs/Mozilla/Add-ons/WebExtensions) {{WebExtAPIRef("bookmarks")}} permite uma extensão interagir e manipular o sistema de favoritos do navegador. Você pode pode usá-lo para favoritar páginas, obter favoritos existentes e, editar, remover ou organizar os favoritos.

Para utilizar esta API, uma extensão deve ser requisitada para o "bookmarks" [permission](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) em seu arquivo [`manifest.json`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json) .

## Tipos

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : Representa um favorito ou um diretório de favoritos como árvore.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : O enum {{jsxref("String")}} o qual descreve se um nó na árvore é ou não um favorito, uma pasta ou um separador.
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : O enum {{jsxref("String")}} o qual especifica porque um favorito ou uma pasta não pode ser modificado.
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : Contém informações ao qual é passada para a função {{WebExtAPIRef("bookmarks.create()")}} quando um novo favorito é criado.

## Funções

- {{WebExtAPIRef("bookmarks.create()")}}
  - : Cria um favorito ou uma pasta.
- {{WebExtAPIRef("bookmarks.get()")}}
  - : Retrieves one or more {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s, given a bookmark's ID or an array of bookmark IDs.
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : Recupera os filhos especificados {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}.
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : Recupera um número requisitado de favoritos adicionados recentemente.
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : Recupera uma parte da árvore de favoritos, iniciando por um nó previamente especificado.
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : Recupera a árvore de favoritos inteira em um array de objetos {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}.
- {{WebExtAPIRef("bookmarks.move()")}}
  - : Move o especificado {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} para um novo local dentro da árvore de favoritos.
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : Remove um favorito ou uma pasta de favoritos vazia dado o ID do nó.
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : Remove recursivamente uma pasta de favoritos; isto é; dado o ID do nó da pasta e todos seus descendentes.
- {{WebExtAPIRef("bookmarks.search()")}}
  - : Procura por {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s que batam com o conjunto de critérios especificados.
- {{WebExtAPIRef("bookmarks.update()")}}
  - : Atualiza o título e/ou autor do favorito de uma URL, ou o nome de uma pasta de favoritos dado o ID do favorito.

## Eventos

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : Disparado quando um favorito ou uma pasta é criado.
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : Disparado quando um favorito ou uma pasta é removido. Quando uma pasta é removida recursivamente, uma simples notificação é disparada para o diretório, e nenhum para seu conteúdo.
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : Disparado quando um favorito ou pasta é modificado. Atualmente, somente mudanças no `title` e `url` o disparam.
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : Disparado quando um favorito ou pasta é movido para uma pasta pai diferente ou para um novo local dentro deste pasta.
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : Fired when the user has sorted the children of a folder in the browser's UI. This is not called as a result of a {{WebExtAPIRef("bookmarks.move", "move()")}}.
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : Disparado quando uma sessão de importação de favoritos começa. Custosos observers {{WebExtAPIRef("bookmarks.onCreated")}} atualizam até o {{WebExtAPIRef("bookmarks.onImportEnded")}} ser disparado. Observers deveriam ainda manipular outras notificações imediatamente.
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : Disparado quando uma sessão de importação de favoritos é finalizada.

## Compatibilidade com navegadores

{{Compat}}

{{WebExtExamples("h2")}}

> **Nota:** **Agradecimentos**Esta API é baseada na API Chromium [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks) . Esta documentação é derivada do [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) no código do Chromium.Os dados de compatibilidade do Microsoft Edge são fornecidos pela Microsoft Corporation e aqui estão sob a Creative Commons Attribution 3.0 United States License.

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
