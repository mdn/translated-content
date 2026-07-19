---
title: Plantilla de página ARIA
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

## Front matter de la página

Los metadatos de la página se describen en el front matter, como en el siguiente ejemplo:

```md
---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-labelledby
sidebar: accessibilitysidebar
---
```

### Título y slug

Una página de rol ARIA debe tener un `title` y un `slug` de `ARIA: Nombre del rol`. Por ejemplo, el [rol de botón](/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) tiene un `title` y un `slug` de `ARIA/NameOfTheRole_role`, y el atributo [aria-labelledby](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) tiene un `title` de `aria-labelledby`.

### Barra lateral

El valor `accessibilitysidebar` puede usarse en todas las páginas bajo `/Web/Accessibility`:

```yaml
sidebar: accessibilitysidebar
```

Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para más información.

### Macros principales

En la parte superior de la sección de contenido aparecen varias llamadas a macros. Debes actualizarlas o eliminarlas según las indicaciones detalladas a continuación.

### Estados

No añadas ni edites las claves de estado manualmente.
Para incluir la clave de estado de la característica que corresponda —[**experimental**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**obsoleto**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) o **no estándar**—, consulta la sección ["Cómo se añaden o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

### Especificaciones

En el valor de la clave de metadatos del front matter `spec-urls`, actualiza las URL para que apunten a los ID de fragmento de las secciones correctas de las siguientes especificaciones:

- [ARIA](https://w3c.github.io/aria/)
- [Prácticas de autoría de ARIA](https://www.w3.org/WAI/ARIA/apg/)

Recursos adicionales:

- [Modelo de objetos de accesibilidad](https://wicg.github.io/aom/spec/)
- [ARIA en HTML](https://w3c.github.io/html-aria/)

## Plantilla de página

Comienza el párrafo de resumen nombrando el rol o atributo y describiendo qué hace. Idealmente, debería constar de una o dos frases cortas. Este contenido aparece como información emergente (tooltip) en los enlaces a esta página, así que redáctalo con cuidado.

```html
<!-- Insertar bloque de código que muestre casos de uso comunes -->
```

(Opcional) Incluye una breve descripción del ejemplo anterior.

## Descripción

Incluye una descripción completa del atributo o rol.

### Roles, estados y propiedades de ARIA asociados

- Nombre de los roles asociados
  - : Explicación del requisito, enlace a las páginas de características.
- Nombre de los atributos asociados
  - : Explicación del requisito, enlace a las páginas del atributo, junto con el enlace a JS requerido para cambiar el valor, si corresponde.

### Interacciones con el teclado

### Características de JavaScript requeridas

- Manejadores de eventos requeridos
  - : Explicación de cada uno
- Cambio de valores de atributos
  - : Explicación de cada uno

> [!NOTE]
> Incluye una nota sobre alternativas semánticas al uso de este rol o atributo. La primera regla de uso de ARIA es que, si puedes usar una característica nativa que ya incorpora la semántica y el comportamiento que necesitas, en lugar de reutilizar un elemento y **añadir** un rol, estado o propiedad de ARIA para hacerlo accesible, hazlo. Luego publica todos los detalles en la sección de mejores prácticas más abajo.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe describir lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo que sigue al encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos que aparecen en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y otros más en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo de esta página y, después, un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puedes enlazar los ejemplos de otras páginas. Por ejemplo:
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
> No añadas ningún encabezado H3; simplemente añade los enlaces directamente debajo del encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ver ejemplos de esta API, consulta [la página en fetch()](https://example.org/).
> ```

## Problemas de accesibilidad

Opcionalmente, advierte sobre cualquier posibles problemas de accesibilidad que existan con el uso de esta propiedad, y cómo solucionarlos. Elimina esta sección si no hay ninguno que enumerar.

## Mejores prácticas

Opcionalmente, enumera las mejores prácticas que existan para este rol. Elimina la sección si no existe ninguna.

### Beneficios añadidos

- Rol asociado
  - : Si ese rol es un padre, hijo o hermano requerido, y qué hace.

Cualquier beneficio adicional que esta característica aporte a usuarios de lectores de pantalla no habituales, como el reconocimiento de voz de Google o el de dispositivos móviles.

## Especificaciones

`\{{Specifications}}`

_Recuerda eliminar las comillas invertidas y la barra invertida para usar esta macro._

## Orden de precedencia

¿Cuáles son las propiedades relacionadas y en qué orden se leerá este atributo o propiedad (qué propiedad tendrá prioridad sobre esta y qué propiedad se sobrescribirá)?

## Compatibilidad con lectores de pantalla

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el rol o atributo actual. Para más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo_.

- link1
- link2
