---
title: Usando el atributo aria-required
slug: Web/Accessibility/ARIA/Attributes/aria-required
---

### Descripción

El atributo [`aria-required`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-required) es usado para indicar al usuario que un input es requerido en un elemento antes de que un form pueda ser enviado. Este atributo puede ser usado en un form con cualquier elemento HTML típico; no se limita a elementosque tengan un `role` ARIA asignado.

HTML5 ahora tiene el atributo `required`, pero aria-required todavía es útil para un agente de usuario que no soporta HTML5.

### Value

`true` o `false` (Default: `false`)

### Posibles efectos en agentes de usuario y tecnología asistente

Los lectores de pantalla deben anunciar el campo como requerido.

Nota que este atributo no cambiará automáticamente la presentación del campo.

> **Nota:** Las opiniones pueden diferir en cuanto a cómo esta técnica debería ser manejada por la tecnología asistente. La información prevista arribaes una de esas opciones y por lo tanto no es normativa.

### Ejemplos

#### Ejemplo 1: Un formulario sencillo

```html
<form action="post">
  <label for="firstName">First name:</label>
  <input id="firstName" type="text" aria-required="true" />
  <br />
  <label for="lastName">Last name:</label>
  <input id="lastName" type="text" aria-required="true" />
  <br />
  <label for="streetAddress">Street address:</label>
  <input id="streetAddress" type="text" />
</form>
```

### Notas

### Usan ARIA roles

- Combobox
- Gridcell
- Listbox
- Radiogroup
- Spinbutton
- [Textbox](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_textbox_role)
- Tree

### Técnicas relacionadas con ARIA

- [Utilizando el atributo aria-invalid](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute)

### Compatibilidad

Por determinar: Agregar información de soporte para combinaciones comunes de productos UA y AT.

### Recursos adicionales

- [Especificación WAI-ARIA para `aria-required`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-required)
- [WAI-ARIA Authoring Practices for forms](http://www.w3.org/TR/wai-aria-practices/#ariaform)
- [Constraint validation](/en/HTML/HTML5/Constraint_validation) in HTML5
