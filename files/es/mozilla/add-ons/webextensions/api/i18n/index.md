---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
tags:
  - API
  - Complementos
  - Interfaz
  - No estandar
  - Reference
  - WebExtensions
  - extensiones
  - i18n
translation_of: Mozilla/Add-ons/WebExtensions/API/i18n
---
<div>{{AddonSidebar}}</div>

<p>Funciones para internacionalizar su extensión. Es posible utilizar estas API para obtener cadenas de texto traducidas a partir de archivos de configuración regional incluidos en la extensión, conocer el idioma actual del navegador y recuperar el valor de su <a href="/en-US/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header">cabecera Accept-Language</a>.</p>

<p id="See_also">Para obtener más información sobre el uso de i18n en su extensión, consulte:</p>

<ul>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization">Internacionalización</a>: una guía para utilizar el sistema de l18n de WebExtensions.</li>
 <li><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference">Referencia de mensajes específicos de la configuración regional</a>: las extensiones proporcionan cadenas específicas de la configuración regional en archivos denominados <code>messages.json</code>. Esta página describe el formato de <code>messages.json</code>.</li>
</ul>

<h2 id="Tipos">Tipos</h2>

<dl>
 <dt>{{WebExtAPIRef("i18n.LanguageCode")}}</dt>
 <dd>Una <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.10">etiqueta de idioma</a> como «<code>en-US</code>» o «<code>fr</code>».</dd>
</dl>

<h2 id="Funciones">Funciones</h2>

<dl>
 <dt>{{WebExtAPIRef("i18n.getAcceptLanguages()")}}</dt>
 <dd>Recupera los valores de <a href="/en-US/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header">accept-language</a> del navegador. Esto es distinto de la configuración regional utilizada por el navegador. Para obtener la configuración regional, utilice {{WebExtAPIRef('i18n.getUILanguage')}}.</dd>
 <dt>{{WebExtAPIRef("i18n.getMessage()")}}</dt>
 <dd>Obtiene la cadena de texto traducida correspondiente al mensaje especificado.</dd>
 <dt>{{WebExtAPIRef("i18n.getUILanguage()")}}</dt>
 <dd>Obtiene el idioma de la IU del navegador. Esto es distinto de {{WebExtAPIRef('i18n.getAcceptLanguages')}}, que devuelve los idiomas preferidos del usuario.</dd>
 <dt>{{WebExtAPIRef("i18n.detectLanguage()")}}</dt>
 <dd>Detecta el idioma del texto proporcionado a través de <a href="https://github.com/CLD2Owners/cld2">Compact Language Detector</a>.</dd>
</dl>

<dl>
</dl>

<h2 id="Compatibilidad_entre_navegadores">Compatibilidad entre navegadores</h2>

<p>{{Compat("webextensions.api.i18n")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<dl>
</dl>

<div class="note"><strong>Reconocimientos</strong>

<p>Esta API se basa en la API <a href="https://developer.chrome.com/extensions/i18n"><code>chrome.i18n</code></a> de Chromium. Esta documentación deriva del archivo <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json"><code>i18n.json</code></a> en el código fuente de Chromium.</p>

<p>Los datos de compatibilidad de Microsoft Edge son suministrados por Microsoft Corporation y se incluyen aquí según los términos de la licencia Creative Commons Atribución 3.0, versión estadounidense.</p>
</div>

<div>
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
</div>
