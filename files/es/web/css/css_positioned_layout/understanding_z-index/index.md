---
title: Entendiendo la propiedad CSS z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
---

Usualmente se puede considerar que las páginas HTML tienen dos dimensiones, porque el texto, las imágenes y otros elementos son organizados en la página sin superponerse. Hay un solo flujo de renderizado, y todos los elementos son concientes del espacio ocupado por otros. El atributo {{cssxref("z-index")}} te permite ajustar el orden de las capas de los objetos cuando el contenido está siendo renderizado.

> En CSS 2.1, cada caja tiene una posición en tres dimensiones. Adicionalmente a sus posiciones horizontales y verticales, las cajas caen a lo largo de un "eje-z" y son formadas una encima de la otra. Las posiciones eje-Z son particularmente relevantes cuando las cajas se superponen visualmente.

(de [CSS 2.1 Section 9.9.1 - Layered presentation](http://www.w3.org/TR/CSS21/visuren.html#z-index))

Eso significa que las reglas de estilo CSS te permiten posicionar cajas en capas adicionales a la capa normal de renderizado (capa 0). La posición Z de cada capa es expresada como un entero que representa el orden de apilamiento durante el proceso de renderizado. Números más grandes significan mayor cercanía al observador. La posición Z puede ser controlada con la propiedad CSS {{ cssxref("z-index") }}.

Usar z-index parece extremadamente fácil: una sola propiedad, asigna un número entero, con un comportamiento fácil de entender. Sin embargo, cuando z-index es aplicada a jerarquías complejas de elementos HTML, su comportamiento puede ser difícil de entender o incluso impredecible. Esto es debido a reglas complejas de apilamiento. De hecho una sección dedicada ha sido reservada en la especificación CSS [CSS-2.1 Appendix E](http://www.w3.org/TR/CSS21/zindex.html) para explicar mejor estas reglas.

Este artículo va a intentar explicar esas reglas, de una forma más simple y con varios ejemplos.

1. [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index) : Reglas de apilamiento por defecto
2. [Apilamiento y float](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float) : Cómo son manejados los elementos flotantes
3. [Agregando z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index) : Usando z-index para cambiar el apilamiento por defecto
4. [El contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento) : Notas sobre el contexto de apilamiento
5. [Ejemplo 1 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en el último nivel
6. [Ejemplo 2 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en todos los niveles
7. [Ejemplo 3 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento) : Jerarquía HTML de 3 niveles, z-index en el segundo nivel

_Nota del autor: Gracias a Wladimir Palant y Rod Whiteley por la revisión._

### Información del documento original

- Autor(es): Paolo Lombardi
- Este artículo es una traducción al inglés de un artículo que escribí en italiano para [YappY](http://www.yappy.it). He dado el derecho de compartir el contenido bajo [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Fecha de última actualización: 9 de Julio del 2005
