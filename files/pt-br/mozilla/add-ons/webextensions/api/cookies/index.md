---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
---

{{AddonSidebar}}

Habilita extensões a obter e atribuir cookies, e ser notificado quando eles mudam.

Para usar esta API, você precisa incluir a [API permission](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) "cookies" em seu arquivo [manifest.json](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json), bem como a [host permissions](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) para os sites cujos cookies você precisa acessar. Veja [cookie Permissions](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions).

## Permissões

Para usar esta API, uma extensão especificar a "cookies" [API permission](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) em seu arquivo manifest, junto com a [host permissions](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) para qualquer site que deseja acessar os cookies. O add-on pode ler ou escrever qualquer cookie no qual poderia ser lido ou escrito pela URL correspondente nas permissões de host, por exemplo:

- `http://*.example.com/`

  - : Uma extensão com esta permissão de host pode:

    - Ler um cookie inseguro para `www.example.com`, com qualquer caminho.
    - Escrever um cookie seguro ou inseguro para `www.example.com`, com qualquer caminho.

    _não_ pode:

    - Ler um cookie seguro de `www.example.com`.

- `http://www.example.com/`

  - : Uma extensão com esta permissão de host pode:

    - Ler um cookie não seguro para `www.example.com`, com qualquer caminho.
    - Ler um cookie não seguro para `.example.com`, com qualquer caminho.
    - Escrever um cookie seguro ou não seguro para `www.example.com` com qualquer caminho.
    - Escrever um cookie seguro ou não seguro para `.example.com` com qualquer caminho.

    _não_ pode:

    - Ler ou escrever um cookie para `foo.example.com`.
    - Ler ou escrever um cookie para `foo.www.example.com`.

- `*://*.example.com/`

  - : Uma extensão com esta permissão de host pode:

    - Ler ou escrever um cookie seguro ou inseguro para `www.example.com` com qualquer caminho.

## Isolamento de primera parte

Cookies de terceiros são aquleles enviados por sites em que você está num dado momento, por exemplo:

1. Você acessa [bbc.com](http://bbc.com). Ele contém uma publicidade do [tracker.com](http://tracker.com) que atribui um cookie associado com o domínio "[tracker.com](http://tracker.com)".
2. Você acessa [cnn.com](http://cnn.com). Ele também contém uma publicidade do [tracker.com](http://tracker.com) que atribui um cookie associado ao domínio "[tracker.com](http://tracker.com)".
3. Eventualmente ambos os cookies podem ser enviados para [tracker.com](http://tracker.com). Quem então pode descobrir que o mesmo usuário visitou ambos os sites.

Quando um isolamento de primeira parte está ativo, cookies são ainda qualificados pelo domínio da página original visitada pelo usuário (essencialmente, o domínio exibe o usuário na barra da URL, também conhecido como "domínio de primeira parte). Isto significa que não é possivel para um rastreador correlacionar o cookie da [bbc.com](http://bbc.com) com o cookie da [cnn.com](http://cnn.com), então o rastreador não pode monitorar um simples usuários através de ambos os sites.

Isolamento de primera parte pode ser habilitado diretamente pelo usuário ajustando a configuração do navegador , e pode ser atribuia do extensões usando a configuração [`firstPartyIsolate`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites#properties) atribuida a API [`privacy`](/pt-BR/docs/Mozilla/Add-ons/WebExtensions/API/privacy). Observe que este isolamento de primeira parte está habilitado por padrão no navegador [Tor](https://www.torproject.org/).

Na API `cookies`, o domínio de primeira parte é representado usando o atributo `firstPartyDomain`. Todos os cookies atribuidos enquanto o isolamento de primeira parte está habilitado terá este atributo atribuito para o domínio da página original. No exemplo acima, deveria ser "[bbc.com](http://bbc.com)" para um cookie e "[cnn.com](http://cnn.com)" para outro. Todos os cookies atribuidos pelos websites enquanto o isolamento de primeira parte estiver desabilitado terão sua propriedade atribuida a uma string vazia.

As APIs {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} and {{WebExtAPIRef("cookies.remove()")}} aceitam a opção `firstPartyDomain`.

Quando o isolamento de primeira parte está habilitado, você deve informar esta opção ou a chamada da API irá falhar e retornar uma promise rejeitada. For `get()`, `set()`, and `remove()` you must pass a string value. Para um `getAll()`, você pode passar `null`, e irá obter todos os cookies que possuem ou não um valor não vazio para o `firstPartyDomain`.

Quando o isolamento de primeira parte está desabilitado, o parâmetro `firstPartyDomain` é opcional por padrão é uma string vazia. Uma string não vazia pode ser utilizada para recuperar ou podificar cookies de isolamento de primeira parte. Da mesma forma, passando `null` como `firstPartyDomain` para o `getAll()` retornará todos os cookies.

## Tipos

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Representa a informação sobre um cookie HTTP.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Representa um cookie armazenado no navegador.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Representa o motivo da mudança de um cookie.

## Métodos

- {{WebExtAPIRef("cookies.get()")}}
  - : Recupera informações sobre um único cookie.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Recupera todos os cookies com o padrão de um conjunto de filtros fornecido.
- {{WebExtAPIRef("cookies.set()")}}
  - : Atribui um cookie com um dado fornecido; pode sobrescrever cookies equivalentes caso existam.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Remove um cookie pelo nome.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Lista todos os cookies armazenados.

## Manipulador de eventos

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Disparado quando um cookie é criado ou removido.

## Compatibilidade com navegadores

{{Compat}}

{{WebExtExamples("h2")}}

> **Nota:** **Agradecimentos**Esta API é baseada na API [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) do Chromium. Esta documentação é derivada do [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) no código do Chromium.

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
