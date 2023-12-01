---
title: Utilizando el atributo  aria-label
slug: Web/Accessibility/ARIA/Attributes/aria-label
---

El atributo [`aria-label`](https://www.w3.org/TR/wai-aria/#aria-label) se utiliza para definir una cadena que etiqueta el elemento actual. Úselo en los casos en que no haya una etiqueta de texto visible en pantalla. Si hay texto visible etiquetando el elemento, utilice [aria-labelledby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) en su lugar.

Este atributo puede ser utilizado con cualquier elemento HTML típico; no se limita a los elementos que tienen un papel ARIA asignado.

### Valor

string

### Posibles efectos sobre los agentes de usuario y la tecnología de asistencia

> **Nota:** Las opiniones pueden diferir en cómo la tecnología asistencial debe manejar esta técnica. La información proporcionada más arriba es una de esas opiniones y por lo tanto no normativa.

## Ejemplos

#### Ejemplo 1: Varias etiquetas

En el siguiente ejemplo se aplica estilo a un botón para que parezca un típico botón "cerrar", con una X en medio. Al no haber nada que indique que el propósito del botón es cerrar el diálogo, se usa el atributo `aria-label` para proporcionar una etiqueta a cualquier tecnología de asistencia.

```
<button aria-label="Close" onclick="myDialog.close()">X</button>
```

### Notas

- La API de accesibilidad más común para mapear una etiqueta es la propiedad accessible name.
- Los atributos, incluyedo las declaraciones `aria-label`, son ignoradas por la mayoría de servicios de traducción

### Used by ARIA roles

Todos los elementos del DOM

### Técnicas ARIA relacionadas

- [Usando el atributo aria-labelledby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)

### Compatibilidad

Pendiente: añadir información de soporte para combinaciones de producto comunes a UA y AT.

### Recursos adicionales

- [Especificación WAI-ARIA para aria-label](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html)
