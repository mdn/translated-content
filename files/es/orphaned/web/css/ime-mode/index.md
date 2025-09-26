---
title: ime-mode
slug: orphaned/Web/CSS/ime-mode
original_slug: Web/CSS/ime-mode
---

{{ CSSRef() }}

### Resumen

La propiedad `ime-mode` controla el estado del método de entrada del editor para campos de texto.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("auto", "automático") }}
- Se aplica a: campos de texto.
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: N/A
- Media: {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}:

### Sintaxis

```
ime-mode: <mode>
```

### Valores

- `auto`
  - : No hay cambios en el estado actual del editor. Opción por defecto.
- `normal`
  - : El estado IME debería ser normal. Este valor puede ser usado en cualquier hoja de estilo del usuario para sobrescribir los parámetros de la página. _Este valor no es soportado por Internet Explorer_.
- `active`
  - : El editor de entradas, está inicialmente activo y usado para la entrada de datos, hasta que el usuario lo desactive específicamente. _No soportado en Linux_.
- `inactive`
  - : el editor de entradas está inicialmente inactivo, pero el usuario puede activarlo en cualquier momento. _No soportado por Linux_.
- `disabled`
  - : El editor de entradas está desactivado y no puede ser activado por el usuario.

### Ejemplos

```
<input type="text" name="name" value="initial value" style="ime-mode: disabled">
```

Este ejemplo inhabilita/desactiva el editor de entradas para este campo. Esto podría ser necesario para los campos que entran datos en una base de datos que no soporta el juego de caracteres extendido, por ejemplo.

### Notas

A diferencia de Internet Explorer, la implementación de Firefox de `ime-mode` permite aplicar esta propiedad a los campos de edición de clave de usuario (passwords). Sin embargo, no es la mejor experiencia para el usuario y los campos de clave de usuario deberían desactivar el IME. Los usuarios pueden corregir el comportamiento inapropiado de los sitios que no sigan esta recomendación poniendo la siguiente regla CSS en su archivo de reglas CSS:

```
input[type=password] {
 ime-mode: auto !important;
}
```

> [!NOTE]
> En general, no es apropiado por un sitio público la manipulación el estado del modo de IME. Esta propiedad debería usarse para aplicaciones web o similares.

La versión de Gecko 1.9 para Macintosh no es capaz de recuperar el estado previo del IME cuando el campo para el cual se ha desactivado pierde el foco, por tanto, los usuarios de Mac podrían enfadarse cuando se utiliza el valor `disabled`.

> [!NOTE]
> Desactivar el IME para prevenir la entrada de caracteres extendidos en los formularios no impide que los usuarios puedan pegar caracteres extendidos en los campos del formulario.

### Especificaciones

- [Especificaciones de Microsoft](https://msdn2.microsoft.com/en-us/library/ms533883.aspx)

### Compatibilidad entre navegadores

La propiedad `ime-mode` es soportada en Firefox 3 y posteriores, así como en Internet Explorer.

Categorías

Interwiki Languages [zh tw:CSS:ime-mode](/es/docs/orphaned/Web/CSS/ime-mode)
