---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
translation_of: Web/API/WorkerNavigator
browser-compat: api.WorkerNavigator
---
{{APIRef("Web Workers API")}}

Una interfaz **`WorkerNavigator`** representa un subconjunto de la interfaz {{DOMxRef("Navigator")}}, que puede ser accedida desde un {{DOMxRef("Worker")}}. Un objeto así es inicializado para cada worker y está disponible a través de la propiedad {{DOMxRef("WorkerGlobalScope.navigator", "self.navigator")}}.

## Propiedades

_La interfaz `WorkerNavigator` no hereda ninguna propiedad._

- {{DOMxRef("WorkerNavigator.appCodeName")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Retorna siempre `'Mozilla'`, en cualquier navegador. Esta propiedad se mantiene únicamente por motivos de compatibilidad.
- {{DOMxRef("WorkerNavigator.appName")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Retorna el nombre oficial del navegador. No confiar en esta propiedad para retornar el valor correcto.
- {{DOMxRef("WorkerNavigator.appVersion")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Retorna la versión del navegador como un `string`. No confiar en esta propiedad para retornar el valor correcto.
- {{DOMxRef("WorkerNavigator.connection")}}{{ReadOnlyInline}}
  - : Provee un objeto {{DOMxRef("NetworkInformation")}} conteniendo información acerca de la conexión a internet del dispositivo.
- {{DOMxRef("WorkerNavigator.hardwareConcurrency")}}{{ReadOnlyInline}}
  - : Retorna el número de núcleos lógicos de procesador disponibles.
- {{DOMxRef("WorkerNavigator.language")}} {{readonlyInline}}
  - : Retorna un {{domxref("DOMString")}} representando el idioma preferido del usuario, usualmente el idioma de la interfaz de usuario del navegador. El valor `null` se retorna cuando es desconocido.
- {{DOMxRef("WorkerNavigator.languages")}} {{readonlyInline}} {{experimental_inline}}
  - : Retorna un arreglo de {{domxref("DOMString")}} representando los idiomas conocidos por el usuario, en orden de preferencia.
- {{DOMxRef("WorkerNavigator.locks")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Retorna un objeto {{DOMxRef("LockManager")}} que provee métodos para solicitar un nuevo objeto {{DOMxRef('Lock')}} y para consultar por un objeto `Lock` existente.
- {{DOMxRef("WorkerNavigator.onLine")}}{{ReadOnlyInline}}
  - : Retorna un valor booleano indicando si el navegador está en línea.
- {{DOMxRef("WorkerNavigator.permissions")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Retorna un objeto {{DOMxRef("Permissions")}} que puede ser usado para consultar y actualizar el estado de permisos de las APIs que soportan la [Permissions API](/en-US/docs/Web/API/Permissions_API).
- {{DOMxRef("WorkerNavigator.platform")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Retorna un `string` representando la plataforma del navegador. No confiar en esta propiedad para retornar el valor correcto.
- {{DOMxRef("WorkerNavigator.product")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Retorna siempre `'Gecko'`, en cualquier navegador. Esta propiedad se mantiene únicamente por motivos de compatibilidad.
- {{domxref("WorkerNavigator.serial")}} {{readonlyInline}}
  - : Retorna un objeto {{domxref("Serial")}}, que representa un punto de entrada a la {{domxref("Web Serial API")}} para permitir el control de puertos series.
- {{DOMxRef("WorkerNavigator.storage")}}{{ReadOnlyInline}} {{experimental_inline}}
  - : Retorna una interfaz {{DOMxRef('StorageManager')}} para administrar permisos de persistencia y estimar el espacio libre.
- {{DOMxRef("WorkerNavigator.userAgent")}}{{ReadOnlyInline}}
  - : Retorna el `string` de agente de usuario para el navegador actual.
- {{domxref("WorkerNavigator.userAgentData")}} {{readonlyInline}}
  - : Retorna un objeto {{domxref("NavigatorUAData")}}, que da acceso a información acerca del navegador y el sistema operativo del usuario.

## Métodos

_La interfaz `WorkerNavigator` no hereda ni implementa ningún método._

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otras interfaces relacionadas con Worker: {{DOMxRef("Worker")}}, {{DOMxRef("WorkerLocation")}}, and {{DOMxRef("WorkerGlobalScope")}}.
- [Usando `web workers`.](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
