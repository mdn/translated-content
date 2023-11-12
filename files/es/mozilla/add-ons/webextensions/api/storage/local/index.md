---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
---

{{AddonSidebar()}}

Representa el área de almacenamiento local. Los elementos en el almacenamiento local son locales a la máquina en la que se instaló la extensión.

El navegador puede restringir la cantidad de datos que una extensión puede almacenar en el área de almacenamiento local:

Chrome limita la extensión a 5MB de datos usando esta API a menos que tenga el permiso ["unlimitedStorage"](/es/Add-ons/WebExtensions/manifest.json/permissions#Unlimited_storage).
Firefox le permite solicitar el permiso "Almacenamiento ilimitado" de la versión 56 en adelante. Aún no restringe la cantidad de datos que su extensión puede almacenar, pero comenzará a hacerlo en una versión futura: por lo tanto, es una buena idea solicitar el permiso de "Almacenamiento ilimitado" ahora, si tiene la intención de almacenar una gran cantidad de datos.

Cuando se desinstala la extensión, se borra su almacenamiento local asociado.

También en Firefox, puede evitar que el navegador borre el almacenamiento local al desinstalar "about: config" y configurar las siguientes dos preferencias de navegador como verdaderas: "keepUuidOnUninstall" y "keepStorageOnUninstall". Esta característica se proporciona para ayudar a los desarrolladores a probar sus extensiones. Las extensiones en sí mismas no pueden cambiar estas preferencias.

Aunque esta API es similar a Window\.localStorage, se recomienda que no use Window\.localStorage en el código de extensión. Firefox borrará los datos almacenados por las extensiones utilizando la API localStorage en varios escenarios donde los usuarios borran su historial de navegación y los datos por razones de privacidad, mientras que los datos guardados utilizando la API storage.local se conservarán correctamente en estos escenarios.

## Metodos

El objeto local implementa los métodos definidos en el{{WebExtAPIRef("storage.StorageArea")}} tipo:

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : Recupera uno o más elementos del área de almacenamiento.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : Obtiene la cantidad de espacio de almacenamiento (en bytes) utilizado por uno o más elementos que se almacenan en el área de almacenamiento.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : Almacena uno o más artículos en el área de almacenamiento. Si el artículo ya existe, su valor será actualizado. Cuando establezca un valor, se activará el evento {{WebExtAPIRef ("storage.onChanged")}}.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : Elimina uno o más elementos del área de almacenamiento.
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : Elimina todos los elementos del área de almacenamiento.

## Compatibilidad con navegadores

{{Compat}}

{{WebExtExamples}}

> **Nota:** **Agradecimientos**
>
> Esta API se basa en la API [`chrome.storage`](https://developer.chrome.com/extensions/storage#property-local) de Chromium. Esta documentación se deriva de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) en el código de Chromium.
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
