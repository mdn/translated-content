---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("Clipboard API")}}

La interfaz **`ClipboardEvent`** representa eventos que brindan información relacionada con la modificación del portapapeles, es decir, eventos {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}} y {{domxref("Element/paste_event", "paste")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : Crea un evento `ClipboardEvent` con los parámetros proporcionados.

## Propiedades de instancia

_También hereda propiedades de su padre {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("DataTransfer")}} que contiene los datos afectados por el evento {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, o {{domxref("Element/paste_event", "paste")}} iniciado por el usuario, junto con su tipo MIME.

## Métodos de instancia

_Sin métodos específicos; hereda métodos de su padre {{domxref("Event")}}_.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Eventos relacionados con copiar: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- [API del portapapeles](/es/docs/Web/API/Clipboard_API)
- [Demostración de la API del portapapeles asíncrono en Glitch](https://async-clipboard-api.glitch.me/)
- [Compatibilidad con imágenes para el artículo Portapapeles asíncrono](https://web.dev/async-clipboard/)
