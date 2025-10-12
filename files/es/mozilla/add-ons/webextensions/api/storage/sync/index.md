---
title: storage.sync
slug: Mozilla/Add-ons/WebExtensions/API/storage/sync
---

{{AddonSidebar}}

Representa el área de almacenamiento de sincronización. Los elementos en el almacenamiento de sincronización están sincronizados por el navegador y están disponibles en todas las instancias de ese navegador en el que el usuario está conectado (por ejemplo, a través de Firefox Sync o una cuenta de Google), en diferentes dispositivos.

Para Firefox, un usuario debe tener complementos seleccionados en las opciones de "about:preferences".

Tenga en cuenta que la implementación de storage.sync en Firefox se basa en la ID del complemento. Si usa storage.sync, debe establecer una ID para su extensión usando la clave [`applications`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json.

El principal caso de uso de esta API es almacenar las preferencias sobre su extensión y permitir que el usuario las sincronice con diferentes perfiles. Puede almacenar hasta 100 KB de datos utilizando esta API. Si intenta almacenar más que esto, la llamada fallará con un mensaje de error. La API se proporciona sin ninguna garantía sobre el tiempo de actividad o el rendimiento.

Metodos

El objeto de sincronización implementa los métodos definidos en el {{WebExtAPIRef("storage.StorageArea")}} ponga:

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : Recupera uno o más elementos del área de almacenamiento.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : Obtiene la cantidad de espacio de almacenamiento (en bytes) utilizado por uno o más elementos que se almacenan en el área de almacenamiento.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : Almacena uno o más artículos en el área de almacenamiento. Si el artículo ya existe, su valor será actualizado.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : Elimina uno o más elementos del área de almacenamiento.
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : Elimina todos los elementos del área de almacenamiento.

## Compatibilidad con navegadores

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> **Agradecimientos**
>
> Esta API está basada en la API de Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-sync) API. Esta documentación se deriva de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) en el código de Chromium.

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
