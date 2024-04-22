---
title: URL.createObjectURL()
slug: Web/API/URL/createObjectURL_static
---

{{ApiRef("URL")}}{{SeeCompatTable}}

El método estático **`URL.createObjectURL()`** crea un {{domxref("DOMString")}} que contiene una URL que representa al objeto pasado como parámetro. La vida de la URL está ligado al {{domxref("document")}} de la ventana en la que fue creada. El nuevo objeto URL representa al objeto {{domxref("File")}} especificado o al objeto {{domxref("Blob")}}.

> **Nota:** El uso de un objeto {{domxref("MediaStream")}} como entrada a este método está en proceso de ser obsoleto. Las discusiones están en curso sobre si o no debe ser quitado totalmente. Como tal, _se debe de evitar usar este método con {{domxref("MediaStream")}}s, y se debería usar {{domxref("HTMLMediaElement.srcObject", "HTMLMediaElement.srcObject()")}}_.

{{AvailableInWorkers}}

## Sintaxis

```
objectURL = URL.createObjectURL(object);
```

## Parámetros

- `object`
  - : Un objeto {{domxref("File")}} o un objeto {{domxref("Blob")}} para el que se creará la URL.

<!---->

## Ejemplo

Ver [Usando objetos URL para representar imágenes](/es/docs/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images).

## Notas

Cada vez que se llama a `createObjectURL()`, un nuevo objeto URL es creado, incluso si ya creaste uno para el mismo objeto. Cada uno de estos objetos puede ser liberado usando {{domxref("URL.revokeObjectURL()")}} cuándo ya no lo necesitas. Los navegadores liberan estos objetos cuando el documento es cerrado; de todas formas, para obtener un rendimiento óptimo y un óptimo uso de memoria, si hay momentos seguros en los que puedes liberar estos objetos deberías hacerlo. Por ejemplo: No liberar los recursos cuando se ha creado una URL a partir de un {{domxref('MediaStream')}} puede dejar la luz de la cámara del navegador encendida más tiempo del necesario.

> **Nota:** Notese que no es necesario crear URLs a partir de un {{domxref('MediaStream')}}, ya que los objetos de streams deberían asignarse directamente a elementos de reproducción con {{domxref("HTMLMediaElement.srcObject")}}. La posibilidad de usar un `MediaStream` como valor de un objeto está obsoleta.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mirar también

- {{domxref("URL.revokeObjectURL()")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- [Usando archivos desde aplicaciones web](/es/docs/Using_files_from_web_applications)
