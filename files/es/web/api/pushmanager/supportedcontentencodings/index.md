---
title: PushManager.supportedContentEncodings
slug: Web/API/PushManager/supportedContentEncodings
translation_of: Web/API/PushManager/supportedContentEncodings
---
{{SeeCompatTable}}{{APIRef("Push API")}}

La propiedad**`supportedContentEncodings`** de solo lectura (read-only) de la interfaz {{domxref("PushManager")}} devuelve un array de los codigos de contenido que puede soportar y que pueden ser usados para encriptar los datos (payload) de un push-message.

## Sintaxis

    var encodings[] = PushManager.supportedContentEncodings

### Valor

Un _array_ de _Strings_

## Specifications

| Specification                                                                                                                    | Status                       | Comment             |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('Push API','#dom-pushmanager-supportedcontentencodings','supportedContentEncodings')}} | {{Spec2('Push API')}} | Initial definition. |

## Browser Compatibility

{{Compat("api.PushManager.supportedContentEncodings")}}
