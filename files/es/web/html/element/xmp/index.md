---
title: <xmp>
slug: Web/HTML/Element/xmp
---

{{Deprecated_Header}}

## Resumen

El elemento HTML example element \<xmp> dibuja texto entre las etiquetas de inicio y fin sin interpretar el HTML que se encuentra en medio y lo muestra usando un tipo de letra monoespaciada . La especificación de HTML2 recomendaba que que esta debería de ser dibujada suficientemente amplia para permitir 80 caracteres por línea .

> **Nota:** No usar este elemento.
>
> - Ha sido declarado obsoleto desde HTML3.2 y no fue implementado en una manera consistente . Fue completamente removido del lenguaje en HTML5 .
> - Usar el elemento {{HTMLElement("pre")}} , o si es semánticamente adecuado , el elemento {{HTMLElement("code")}} en su lugar . Notar que necesitarás escapar los caracteres '<' como '\&lt' para asegurarse que no se interprete como marcado .
> - Una letra monoespaciada también puede ser obtenida en algún elemento , aplicando el estilo [CSS](/es/docs/Web/CSS) adecuado usando `monospace` como el valor genérico de la fuente para la propiedad {{cssxref("font-family")}}

## Atributos

Este elemento no tiene otros atributos que los [atributos globales](/es/docs/Web/HTML/Atributos_Globales) comunes a todos los elementos .

## Interfaz DOM

Este elemento implementa la interface {{domxref('HTMLElement')}} .

> **Nota:** hasta Gecko 1.9.2 inclusivamente , Firefox implemente la interface {{domxref('HTMLSpanElement')}} para este elemento .

## Ver también

- Los elementos {{HTMLElement("pre")}} y {{HTMLElement("code")}} que se usan en su lugar .
- Los elementos {{HTMLElement("plaintext")}} y {{HTMLElement("listing")}} , similares a {{HTMLElement("xmp")}} pero también obsoletos .

{{HTMLSidebar}}
