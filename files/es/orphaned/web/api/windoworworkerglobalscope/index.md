---
title: WindowOrWorkerGlobalScope
slug: orphaned/Web/API/WindowOrWorkerGlobalScope
tags:
  - API
  - DOM
  - DOM API
  - NeedsTranslation
  - Service Worker
  - TopicStub
  - Window
  - WindowOrWorkerGlobalScope
  - Worker
  - WorkerGlobalScope
translation_of: Web/API/WindowOrWorkerGlobalScope
original_slug: Web/API/WindowOrWorkerGlobalScope
---
{{ApiRef()}}

El mixin **`WindowOrWorkerGlobalScope`** describe diversas características comunes a las interfaces {{domxref("Window")}} y {{domxref("WorkerGlobalScope")}}. Cada una de estas interfaces pueden, por supuesto, añadir más funcionalidades sobre las listadas a continuación.

> **Nota:** `WindowOrWorkerGlobalScope` es un mixin y no una interface; no se puede crear un objeto de tipo `WindowOrWorkerGlobalScope`.

## Propiedades

Estas propiedades se definen en el mixin {{domxref("WindowOrWorkerGlobalScope")}}, y son implementadas por {{domxref("Window")}} y {{domxref("WorkerGlobalScope")}}.

- {{domxref("WindowOrWorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : Devuelve el objeto {{domxref("CacheStorage")}}, asociado al contexto actual. Este objeto habilita funcionalidades como guardar assets para su utilización _offline_, y generar respuestas personalizadas a las peticiones.
- {{domxref("WindowOrWorkerGlobalScope.indexedDB")}} {{readonlyInline}}
  - : Proporciona un mecanismo para que las aplicaciones puedan acceder asíncronamente a las capacidades de las bases de datos indexadas.; devuelve un objeto {{domxref("IDBFactory")}}.
- {{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} {{readOnlyinline}}
  - : Devuelve un booleano indicando si el contexto actual es seguro (`true`) o no (`false`).
- {{domxref("WindowOrWorkerGlobalScope.origin")}} {{readOnlyinline}}
  - : Devuelve el origen del objeto global, serializado como un string. (Esto no parece estar implementado todavía en ningun navegador).

## Métodos

Estas propiedades se definen en el mixin {{domxref("WindowOrWorkerGlobalScope")}}, y son implementadas por {{domxref("Window")}} y {{domxref("WorkerGlobalScope")}}.

- {{domxref("WindowOrWorkerGlobalScope.atob()")}}
  - : Decodifica un string de datos que ha sido codificado utlizando codificación en base-64.
- {{domxref("WindowOrWorkerGlobalScope.btoa()")}}
  - : Crea un string ASCII codificado en base-64 desde un string de datos binarios.
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
  - : Procesa el set de ejecución repetida utilizando {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}.
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout()")}}
  - : Cancela el retraso del set de ejecuión utilizando {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}.
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap()")}}
  - : Acepta variedad de recursos de imagen, y devuelve una {{domxref("Promise")}} que se resuelve como un {{domxref("ImageBitmap")}}. Opcionalmente, la fuente se recorta como un rectángulo de pixels con origen en (sx, sy) con ancho sw, y altura sh.
- {{domxref("WindowOrWorkerGlobalScope.fetch()")}}
  - : Comienza el proceso de búsqueda de un recurso desde la red.
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
  - : Programa la repetición de la ejecución de una función dado un número de lapsos en milisegundos.
- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
  - : Programa la ejecución de una función dada una cantidad de tiempo.

## Especificaciones

| Especificación                                                                                                                                                           | Estado                               | Comentario                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------------- |
| {{SpecName("HTML WHATWG",'webappapis.html#windoworworkerglobalscope-mixin', '<code>WindowOrWorkerGlobalScope</code> mixin')}} | {{Spec2('HTML WHATWG')}}     | Aquí es donde se define el mixin principal.   |
| {{SpecName('Fetch','#fetch-method','fetch()')}}                                                                                                         | {{Spec2('Fetch')}}             | Definición del método `fetch().`              |
| {{SpecName('Service Workers', '#self-caches', 'caches')}}                                                                                             | {{Spec2('Service Workers')}} | Definición de la propiedad `caches`.          |
| {{SpecName('IndexedDB 2', '#dom-windoworworkerglobalscope-indexeddb', 'indexedDB')}}                                                         | {{Spec2('IndexedDB 2')}}     | Definición de la propiedad `indexedDB`.       |
| {{SpecName('Secure Contexts', 'webappapis.html#dom-origin', 'isSecureContext')}}                                                             | {{Spec2('Secure Contexts')}} | Definición de la propiedad `isSecureContext.` |

## Ver también

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
