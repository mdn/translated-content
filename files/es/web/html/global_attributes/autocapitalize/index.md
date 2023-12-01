---
title: autocapitalización
slug: Web/HTML/Global_attributes/autocapitalize
---

{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Global_attributes) [`autocapitalize`](/es/docs/Web/HTML/Element/input#autocapitalize) es un atributo enumerado que controla si la entrada de texto se escribe en mayúsculas automáticamente a medida que el usuario la introduce/edita. El atributo debe tomar uno de los siguientes valores:

- `off` o `none`, no se aplica capitalización automática (todas las letras están predeterminadas en minúsculas)
- `on` o `sentences`, la primera letra de cada oración de manera predeterminada tiene una letra mayúscula; todas las demás letras están predeterminadas en minúsculas
- `words`, la primera letra de cada palabra de manera predeterminada tiene una letra mayúscula; todas las demás letras están predeterminadas en minúsculas
- `characters`, todas las letras de manera predeterminada deben estar en mayúsculas

El atributo `autocapitalize` no afecta el comportamiento al escribir en un teclado físico. En cambio, afecta el comportamiento de otros mecanismos de entrada, como teclados virtuales en dispositivos móviles y entrada de voz. El comportamiento de tales mecanismos es que a menudo ayudan a los usuarios escribiendo en mayúscula automáticamente la primera letra de las oraciones. El atributo `autocapitalize` permite a los autores redefinir ese comportamiento por elemento.

El atributo `autocapitalize` nunca hace que se habilite la autocapitalización para un elemento {{HTMLElement("input")}} con un atributo [`type`](/es/docs/Web/HTML/Element/input#type) cuyo valor es `url`, `email` o `password`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
