---
title: 'ServiceWorkerContainer: Evento controllerchange'
slug: Web/API/ServiceWorkerContainer/controllerchange_event
page-type: web-api-event
tags:
  - API
  - Interfaz
  - Interface
  - Event
  - Evento
  - Referencia
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
  - controllerchange
browser-compat: api.ServiceWorkerContainer.controllerchange_event
---

{{APIRef("Service Workers API")}}

El evento **`controllerchange`** de la
interfaz {{domxref("ServiceWorkerContainer")}} se activa cuando el documento asociado
{{domxref("ServiceWorkerRegistration")}} adquiere un nuevo *worker*
{{domxref("ServiceWorkerRegistration.active","active")}}.

## Sintaxis

Utiliza el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establece una propiedad de controlador de eventos.

```js
addEventListener('controllerchange', (event) => { });

oncontrollerchange = (event) => { };
```

## Tipo Event

Un {{domxref("Event")}} genérico.

## Ejemplo

```js
// TBD
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}
