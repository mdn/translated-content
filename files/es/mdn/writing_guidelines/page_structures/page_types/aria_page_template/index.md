---
title: "ARIA: Plantilla de página"
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: dad6b0e057cd37b4408cdede8b9f568c56df9a82
---

{{MDNSidebar}}

## Metadatos de la página

### Title y slug

Una página de rol de ARIA debe tener un `title` y un `slug` de `ARIA: Nombre del rol`. Por ejemplo, el [rol de botón](/es/docs/Web/Accessibility/ARIA/Roles/button_role) tiene un `title` y `slug` de `ARIA/NameOfTheRole_role` y el atributo [aria-labelledby](/es/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) tiene un `title` de `aria-labelledby`.

### Principales macros

Aparecen varias llamadas a macros en la parte superior de la sección de contenido. Debes actualizarlos o eliminarlos de acuerdo con los siguientes consejos:

- \\{{deprecated_header}}: genera un banner de **Obsoleto** que indica que la tecnología está [obsoleta](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Si no es así, puede eliminar la llamada de macro.
- \\{{ariaref}}: genera un menú lateral ARIA adecuado, dependiendo de las etiquetas que se incluyan en la página.

### Etiquetas

En las subpáginas de roles o atributos de ARIA, debes incluir las siguientes etiquetas (consulta la sección _Etiquetas_ en la parte inferior de la interfaz de usuario del editor): **ARIA**, **Reference**, **ARIA Role** o **ARIA Attribute**, _el nombre del Rol oo Atributo_ (por ejemplo **ARIA button** or **aria-labelledby**), **ARIA widget,** **Experimental** (si el atributo del rol es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)), y **Obsoleto** (si es [obsoleto](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated)).

### Especificaciones

En el valor de la clave de metadatos `spec_urls`, actualice las URL para que apunten a los ID de url para las secciones correctas de las siguientes especificaciones:

- [ARIA](https://w3c.github.io/aria/)
- [Prácticas de autoría de ARIA](https://w3c.github.io/aria-practices/)

Recursos adicionales:

- [Modelo de objetos de accesibilidad](https://wicg.github.io/aom/spec/)
- [ARIA en HTML](https://w3c.github.io/html-aria/)

## Plantilla de página

El párrafo de resumen comienza nombrando el rol o atributo y diciendo lo que hace. Idealmente, esto debería consistir en 1 o 2 oraciones cortas. Este contenido aparece como una sugerencia de herramienta en los enlaces a esta página, así que elabóralo bien.

```html
<!-- Insertar bloque de código que muestre casos de uso comunes-->
```

(Opcional) Incluya una breve descripción del ejemplo anterior.

## Descripción

Incluya una descripción completa del atributo o rol.

### Roles, estados y propiedades de ARIA asociados

- Nombre de los roles asociados
  - : Explicación de requerimientos, enlace a páginas de características.
- Nombre de los atributos asociados
  - : Explicación del requisito, enlace a las páginas del atributo, junto con el enlace a JS requerido para cambiar el valor, si corresponde.

### Interacciones con el teclado

### Funciones de JavaScript requeridas

- Manejadores de eventos requeridos
  - : Explicación de cada uno
- Cambio de valores de atributos
  - : Explicación de cada uno

> [!NOTE]
> Incluye una nota sobre alternativas semánticas al uso de este rol o atributo. La primera regla de uso de ARIA es que puedes usar una función nativa con la semántica y el comportamiento que requieres ya incorporados, en lugar de reutilizar un elemento y **agregar** un rol, estado o propiedad de ARIA para hacerlo accesible, y luego hacerlo. Luego publique todos los detalles en la sección de mejores prácticas a continuación.

## Ejemplos

Tenga en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, use el párrafo después del encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tiene algunos ejemplos en esta página y algunos ejemplos más en otra página:
>
> Incluya un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puede vincular los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Uso de la API fetch
>
> Ejemplo de Fetch
>
> ### Más ejemplos
>
> Enlaces a más ejemplos en otras páginas
> ```
>
> **Escenario 2:** Si _solo_ tienes ejemplos en otra página y ninguno en esta página:
>
> No añada ningún encabezado H3; solo añada los enlaces directamente debajo del encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ver ejemplos de esta API, consulte [la página en fetch()](https://example.org).
> ```

## Problemas de accesibilidad

Opcionalmente, advierte sobre cualquier posible problema de accesibilidad que exista con el uso de esta propiedad y cómo solucionarlos. Elimine esta sección si no hay ninguna para enumerar.

## Mejores prácticas

Opcionalmente, enumere las mejores prácticas que existen para este rol. Elimine la sección si no existe.

### Beneficios añadidos

- Rol asociado
  - : Si ese rol es un padre, hijo o hermano requerido, y lo que hace.

Cualquier beneficio adicional que esta función tenga para los usuarios no típicos de lectores de pantalla, como el reconocimiento de voz de Google o móvil.

## Especificaciones

`\{{Specifications}}`

_Recuerde eliminar las comillas invertidas y la barra invertida para usar esta macro._

## Orden de precedencia

¿Cuáles son las propiedades relacionadas y en qué orden se leerá este atributo o propiedad (qué propiedad tendrá prioridad sobre esta y qué propiedad se sobrescribirá)?

## Compatibilidad con lectores de pantalla

## Vease también

Incluya enlaces a páginas de referencia y guías relacionadas con el rol o atributo actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo_.

- link1
- link2
