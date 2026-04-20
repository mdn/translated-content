---
title: Plantilla de página ARIA
slug: MDN/Writing_guidelines/Page_structures/Page_types/ARIA_page_template
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

## Front matter de la página

Los metadatos de la página se describen en el front matter como en el siguiente ejemplo:

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

Una página de rol de ARIA debe tener un `title` y `slug` de `ARIA: Nombre del rol`. Por ejemplo, el [rol button](/es/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) tiene un `title` y `slug` de `ARIA/NombreDelRol_role` y el [atributo aria-labelledby](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) tiene un `title` de `aria-labelledby`.

### Barra lateral

Se puede usar `accessibilitysidebar` en todas las páginas bajo `/Web/Accessibility`:

```yaml
sidebar: accessibilitysidebar
```

Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.

### Macros en la parte superior

Aparecen varias llamadas a macros en la parte superior de la sección de contenido. Debes actualizarlas o eliminarlas según el consejo a continuación.

### Estados

No agregues ni edites claves de estado manualmente.
Para incluir la clave de estado de característica (apropiada) — [**experimental**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**deprecated**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) o **non-standard** — consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).

### Especificaciones

En el valor de la clave de metadatos `spec-urls` del front matter, actualiza las URL para que apunten a los ID de fragmento para las secciones correctas de las siguientes especificaciones:

- [ARIA](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

Recursos adicionales:

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA en HTML](https://w3c.github.io/html-aria/)

## Plantilla de página

El párrafo de resumen — comienza nombrando el rol o atributo y diciendo qué hace. Idealmente, esto debe ser una o dos oraciones cortas. Este contenido aparece como una información sobre herramientas en los enlaces a esta página, así que redáctalo bien.

```html
<!-- Insertar bloque de código que muestre casos de uso comunes -->
```

(Opcional) Incluye una breve descripción del ejemplo anterior.

## Descripción

Incluye una descripción completa del atributo o rol.

### Roles, estados y propiedades de ARIA asociados

- Nombre de roles asociados
  - : Explicación del requisito, enlace a páginas de características.
- Nombre de atributo(s) asociado(s)
  - : Explicación del requisito, enlace a páginas del atributo, junto con el enlace a JS requerido para cambiar el valor, si corresponde.

### Interacciones con el teclado

### Funciones de JavaScript requeridas

- Manejadores de eventos requeridos
  - : Explicación de cada uno
- Cambiar valores de atributos
  - : explicación de cada uno

> [!NOTE]
> Incluye una nota sobre alternativas semánticas al uso de este rol o atributo. La primera regla de uso de ARIA es que puedes usar una característica nativa con la semántica y el comportamiento que requieres ya incorporados, en lugar de reutilizar un elemento y **agregar** un rol, estado o propiedad de ARIA para que sea accesible, entonces hazlo. Luego publica detalles completos en la sección de mejores prácticas a continuación.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y más ejemplos en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", debajo del cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Usar la API fetch
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
> No agregues ningún encabezado H3; solo agrega los enlaces directamente bajo el encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ejemplos de esta API, consulta [la página sobre fetch()](https://example.org/).
> ```

## Preocupaciones de accesibilidad

Opcionalmente, advierte sobre cualquier preocupación de accesibilidad potencial que exista al usar esta propiedad, y cómo solucionarlas. Elimina esta sección si no hay ninguna que enumerar.

## Mejores prácticas

Opcionalmente, enumera cualquier mejor práctica que exista para este rol. Elimina la sección si no existe ninguna.

### Beneficios añadidos

- Rol asociado
  - : Si ese rol es un padre, hijo o hermano requerido, y qué hace.

Cualquier beneficio adicional que tenga esta característica para usuarios de lector de pantalla no típicos, como Google o el reconocimiento de voz móvil.

## Especificaciones

`\{{Specifications}}`

_Recuerda eliminar las comillas invertidas y la barra invertida para usar esta macro._

## Orden de precedencia

Cuáles son las propiedades relacionadas y en qué orden se leerá este atributo o propiedad (qué propiedad tendrá prioridad sobre esta, y qué propiedad se sobrescribirá).

## Compatibilidad con lectores de pantalla

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el rol o atributo actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
