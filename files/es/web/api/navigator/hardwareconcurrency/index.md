---
title: navigator.hardwareConcurrency
slug: Web/API/Navigator/hardwareConcurrency
---

{{APIRef("HTML DOM")}}

{{AvailableInWorkers}}

La propiedad **`navigator.hardwareConcurrency`** es de solo lectura navigator.hardwareConcurrency devuelve el número de procesadores lógicos disponibles para ejecutar subprocesos en la computadora del usuario.

## Sintaxi

```js
logicalProcessors = window.navigator.hardwareConcurrency;
```

## Valor

{{jsxref("Number")}} indica el número de núcleos de procesadores lógicos.

Las computadoras modernas tienen múltiples núcleos de procesadores físicos en su CPU (dos o cuatro núcleos son típicos), pero cada núcleo físico también puede ejecutar más de un subproceso a la vez utilizando técnicas avanzadas de programación. Por lo tanto, una CPU de cuatro núcleos puede ofrecer ocho núcleos de procesador lógico, por ejemplo. El número de núcleos de procesador lógico se puede utilizar para medir el número de subprocesos que se pueden ejecutar de manera efectiva a la vez sin que tengan que cambiar de contexto.

Sin embargo, el navegador puede optar por informar un número menor de núcleos lógicos para representar con mayor precisión el número de {{domxref("Worker")}}s que pueden ejecutarse a la vez, así que no trate esto como una medida absoluta del número de núcleos en el sistema del usuario .

## Ejemplos

En este ejemplo, se crea un {{domxref ("Worker")}} para cada procesador lógico informado por el navegador y se crea un registro que incluye una referencia al nuevo worker, así como un valor booleano que indica si nosotros ' estoy usando ese worker todavía; Estos objetos, a su vez, se almacenan en una matriz para su uso posterior. Esto crea un grupo de workers que podemos usar para procesar solicitudes más adelante.

```js
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker("cpuworker.js"),
    inUse: false,
  };
  workerList.push(newWorker);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{domxref("Navigator")}}
- {{domxref("WorkerNavigator")}}
