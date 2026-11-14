---
title: Elemento a alinear
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

En la [alineación de cajas CSS](/es/docs/Web/CSS/Guides/Box_alignment), el **elemento a alinear** es aquello (una o varias cosas) que la propiedad alinea dentro del {{glossary("alignment container", "contenedor de alineación")}}.

Para {{cssxref("justify-self")}} y {{cssxref("align-self")}}, el elemento a alinear es la caja de margen de la caja en la que se define la propiedad, según el modo de escritura de esa caja. Para {{cssxref("justify-content")}} y {{cssxref("align-content")}}, también se tiene en cuenta el modo de escritura de la caja.

La definición del elemento a alinear depende del modo de diseño que se use.

- Contenedores de bloque (incluidas las celdas de tabla)
  - : Todo el contenido del bloque como una sola unidad.
- Contenedores multicolumna
  - : Las cajas de columna, con el espacio que se inserte entre ellas añadido a los espacios correspondientes entre columnas.
- Contenedores flex
  - : Para {{cssxref("justify-content")}}, los elementos flex de cada línea flex. Para {{cssxref("align-content")}}, las líneas flex. Ten en cuenta que esto solo tiene efecto en contenedores flex de varias líneas.
- Contenedores de cuadrícula
  - : Las pistas de la cuadrícula en el eje correspondiente; cualquier espacio insertado entre ellas se añade a los gutters pertinentes. Los gutters colapsados se tratan como un único punto donde es posible insertar espacio.

## Véase también

- Módulo [Alineación de cajas CSS](/es/docs/Web/CSS/Guides/Box_alignment)
- Términos del glosario relacionados:
  - {{Glossary("alignment container", "Contenedor de alineación")}}
