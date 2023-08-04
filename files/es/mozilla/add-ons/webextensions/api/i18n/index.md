---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
---

{{AddonSidebar}}

Funciones para internacionalizar su extensión. Es posible utilizar estas API para obtener cadenas de texto traducidas a partir de archivos de configuración regional incluidos en la extensión, conocer el idioma actual del navegador y recuperar el valor de su [cabecera Accept-Language](/es/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header).

Para obtener más información sobre el uso de i18n en su extensión, consulte:

- [Internacionalización](/es/docs/Mozilla/Add-ons/WebExtensions/Internationalization): una guía para utilizar el sistema de l18n de WebExtensions.
- [Referencia de mensajes específicos de la configuración regional](/es/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): las extensiones proporcionan cadenas específicas de la configuración regional en archivos denominados `messages.json`. Esta página describe el formato de `messages.json`.

## Tipos

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Una [etiqueta de idioma](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10) como «`en-US`» o «`fr`».

## Funciones

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Recupera los valores de [accept-language](/es/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header) del navegador. Esto es distinto de la configuración regional utilizada por el navegador. Para obtener la configuración regional, utilice {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Obtiene la cadena de texto traducida correspondiente al mensaje especificado.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Obtiene el idioma de la IU del navegador. Esto es distinto de {{WebExtAPIRef('i18n.getAcceptLanguages')}}, que devuelve los idiomas preferidos del usuario.
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Detecta el idioma del texto proporcionado a través de [Compact Language Detector](https://github.com/CLD2Owners/cld2).

<!---->

## Compatibilidad con navegadores

{{Compat}}

{{WebExtExamples("h2")}}

> **Nota:** **Reconocimientos**
>
> Esta API se basa en la API [`chrome.i18n`](https://developer.chrome.com/extensions/i18n) de Chromium. Esta documentación deriva del archivo [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json) en el código fuente de Chromium.
>
> Los datos de compatibilidad de Microsoft Edge son suministrados por Microsoft Corporation y se incluyen aquí según los términos de la licencia Creative Commons Atribución 3.0, versión estadounidense.

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
