---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
---

{{AddonSidebar}}

Permite que las extensiones almacenen y recuperen datos, y escuchen los cambios realizados en los elementos almacenados.

El sistema de almacenamiento se basa en [Web Storage API](/es/docs/Web/API/Web_Storage_API), con algunas diferencias. Entre otras diferencias, éstas incluyen:

- Es asíncrono.
- Los valores se aplican a la extensión, no a un dominio específico (es decir, el mismo conjunto de pares clave / valor está disponible para todos los scripts de tipo background y los scripts de contenido o content).
- Los valores almacenados pueden ser cualquier valor JSON, no solo [`String`](/es/docs/Web/JavaScript/Reference/Global_Objects/String). Entre otras cosas, esto incluye: [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) y [`Object`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object), pero solo cuando sus contenidos se pueden representar como JSON, que no incluye nodos DOM. No es necesario convertir sus valores en cadenas JSON antes de almacenarlos, pero se representan como JSON internamente, por lo tanto, el requisito de que sean responsables de JSON.
- Se pueden establecer o recuperar múltiples pares de clave / valor en la misma llamada a la API.

Para usar esta API, debe incluir el [permiso](/es/docs/) de "storage" en su archivo [manifest.json](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Cada extensión tiene su propia área de almacenamiento, que se puede dividir en diferentes tipos de almacenamiento.

Aunque esta API es similar a {{domxref ("Window.localStorage")}}, se recomienda que no use Window\.localStorage en el código de extensión para almacenar datos relacionados con la extensión. Firefox borrará los datos almacenados por las extensiones utilizando la API localStorage en varios escenarios donde los usuarios borran su historial de navegación y los datos por razones de privacidad, mientras que los datos guardados utilizando la API [`storage.local`](/es/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) se conservarán correctamente en estos escenarios.

> **Nota:** El área de almacenamiento no está encriptada y no debe utilizarse para almacenar información confidencial del usuario, como claves.

## Tipos

- {{WebExtAPIRef("storage.StorageArea")}}
  - : Un objeto que representa un área de almacenamiento.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : Un objeto que representa un cambio en un área de almacenamiento.

## Propiedades

El almacenamiento tiene tres propiedades, que representan los diferentes tipos de área de almacenamiento disponible.

- {{WebExtAPIRef("storage.sync")}}
  - : Representa el área de almacenamiento de sincronización. Los elementos en el almacenamiento de sincronización están sincronizados por el navegador y están disponibles en todas las instancias de ese navegador en el que el usuario ha iniciado sesión, en diferentes dispositivos.
- {{WebExtAPIRef("storage.local")}}
  - : Representa el área de almacenamiento local. Los elementos en el almacenamiento local son locales a la máquina en la que se instaló la extensión.
- {{WebExtAPIRef("storage.managed")}}
  - : Representa el área de almacenamiento gestionado. Los elementos en el almacenamiento gestionado los establece el administrador del dominio y son de sólo lectura para la extensión. Intentar modificar este espacio de nombres da como resultado un error.

## Eventos

- {{WebExtAPIRef("storage.onChanged")}}
  - : Se dispara cuando uno o más elementos cambian en un área de almacenamiento.

## Compatibilidad con navegadores

{{Compat}}

{{WebExtExamples("h2")}}

> **Nota:** **Agradecimientos**
>
> Esta API se basa en la API [`chrome.storage`](https://developer.chrome.com/extensions/storage) de Chromium. Esta documentación se deriva de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) en el código de Chromium.
>
> Los datos de compatibilidad de Microsoft Edge son proporcionados por Microsoft Corporation y se incluyen aquí bajo la Licencia de Estados Unidos Creative Commons Attribution 3.0.

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
