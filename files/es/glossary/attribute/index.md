---
title: Atributo
slug: Glossary/Attribute
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **atributo** amplía un {{Glossary("element", "elemento")}} {{Glossary("HTML")}} o {{Glossary("XML")}}, y modifica su comportamiento o aporta metadatos.

Un atributo siempre tiene la forma `name="value"` (el identificador del atributo seguido de su valor asociado). Es posible que veas atributos sin signo igual ni valor; es una forma abreviada de indicar la cadena vacía en HTML. Sin embargo, esto no es válido en XML: XML exige que todos los atributos tengan un valor explícito.

Algunos atributos HTML son {{Glossary("Boolean/HTML", "atributos booleanos")}}. El valor de estos atributos depende únicamente de si el atributo está presente o ausente. Consulta {{Glossary("Boolean/HTML", "atributos booleanos")}} para obtener más información.

## Reflejo de un atributo

Los atributos pueden _reflejarse_ en una propiedad determinada de una interfaz específica.

Esto significa que el valor del atributo puede leerse o escribirse directamente en JavaScript mediante una propiedad de la interfaz correspondiente, y viceversa.
Las propiedades reflejadas ofrecen un enfoque de programación más natural que obtener y establecer atributos con los métodos {{domxref("Element.getAttribute()","getAttribute()")}} y {{domxref("Element.setAttribute()","setAttribute()")}} de la interfaz {{domxref("Element")}}.

Para más información, consulta [Reflejo de atributos](/es/docs/Web/API/Document_Object_Model/Reflected_attributes).

## Véase también

- [Referencia de atributos HTML](/es/docs/Web/HTML/Reference/Attributes)
- [Reflejo de atributos](/es/docs/Web/API/Document_Object_Model/Reflected_attributes)
- Información sobre los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes) de HTML
- Recomendación sobre los atributos de StartTag de XML, en la [Recomendación XML del W3C](https://www.w3.org/TR/xml/#sec-starttags)
- Términos relacionados del glosario:
  - {{Glossary("Element", "Elemento")}}
  - {{Glossary("Tag", "Etiqueta")}}
  - {{Glossary("HTML")}}
  - {{Glossary("XML")}}
  - {{Glossary("Boolean/HTML", "Atributos booleanos")}}
  - {{Glossary("Enumerated", "Atributos enumerados")}}
