---
title: Diseño de caja flexible CSS
slug: Web/CSS/CSS_flexible_box_layout
---

El diseño **CSS Flexbox** es un módulo de CSS que define un modelo de caja, optimizado para el diseño de interfaces de usuario. En el diseño flex, los nodos hijo se pueden distribuir en dirección vertical u horizontal y se pueden "flexibilizar" sus tamaños, bien sea rellenando el espacio disponible o encogiéndose para evitar salirse del contorno del nodo padre. Se puede manipular fácilmente tanto la alineación horizontal como la vertical, de los nodos hijo. La anidación de estas cajas (horizontal dentro de vertical o vertical dentro de horizontal) se puede usar para construir diseños en dos dimensiones.

## Ejemplo Básico

En el siguiente ejemplo, se ha definido un contenedor como `display: flex`, lo que significa que los tres elementos hijo se convierten en elementos flexibles. El valor de `justify-content` se ha establecido en `space-between` para espaciar los elementos de manera uniforme en el eje principal. Se ha colocado una cantidad igual de espacio entre cada elemento, con los elementos izquierdo y derecho alineados con los bordes del contenedor flexible. También puede ver que los elementos se estiran en el eje transversal, debido a que el valor predeterminado de `align-items` es `stretch`. Los elementos se extienden hasta la altura del contenedor flexible, por lo que cada uno de ellos tiene tanta altura como el elemento más alto.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 500)}}

## Referencia

### Propiedades CSS

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}
- {{cssxref("order")}}

### Propiedades de alineación

Las propiedades `align-content`, `align-self`, `align-items` y `justify-content` aparecieron inicialmente en la especificación de Flexbox, pero ahora están definidas en Alineación de cuadro y la especificación de Flexbox las refiere a la Especificación de alineación de cuadro para definiciones actualizadas. Las propiedades de alineación adicionales también se definen en Alineación de cuadro.

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("justify-content")}}
- {{cssxref("place-content")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Entradas del glosario

- [Flexbox](/es/docs/Glossary/Flexbox)
- [Flex Container](/es/docs/Glossary/Flex_Container)
- [Flex Item](/es/docs/Glossary/Flex_Item)
- [Main Axis](/es/docs/Glossary/Main_Axis)
- [Cross Axis](/es/docs/Glossary/Cross_Axis)
- [Flex](/es/docs/Glossary/Flex)

## Guías

- [Conceptos básicos de Flexbox](/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - : Una visión general de las características de flexbox
- [Relación de flexbox con otros métodos de diseño.](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
  - : Cómo flexbox se relaciona con otros métodos de diseño y otras especificaciones de CSS
- [Alinear elementos en un contenedor flexible](/es/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - : Cómo funcionan las propiedades de Alineación de cuadro con flexbox.
- [Ordenando elementos flex](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
  - : Explicando las diferentes formas de cambiar el orden y la dirección de los elementos, y cubriendo los problemas potenciales al hacerlo.
- [Control de proporción de elementos flex a lo largo del eje principal](/es/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Este artículo explica las propiedades de flex-grow, flex-shrink y flex-basis.
- [Dominar el envoltorio de elementos flex](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
  - : Cómo crear contenedores flex con múltiples líneas y controlar la visualización de los elementos en esas líneas.
- [Casos de uso típicos de flexbox](/es/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : Patrones de diseño comunes que son los típicos casos de uso de flexbox.
- [Compatibilidad con versiones anteriores de Flexbox](/es/docs/conflicting/Glossary/Flexbox)
  - : Estado del navegador de flexbox, problemas de interoperabilidad y compatibilidad con navegadores antiguos y versiones de la especificación

## Especificaciones

{{Specifications}}

## Ver también

- [Flexbugs](https://github.com/philipwalton/flexbugs)
  - : una lista comisariada por la comunidad de errores y soluciones del navegador Flexbox
- [Combinaciones (Mixins) Flexbox para varios navegadores](/es/docs/Glossary/Flexbox)
  - : Este artículo proporciona un conjunto de combinaciones(mixins)para aquellos que desean crear experiencias de flexbox en varios navegadores que incluso funcionan en navegadores antiguos que no admiten la sintaxis moderna de flexbox.
