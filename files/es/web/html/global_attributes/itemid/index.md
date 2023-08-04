---
title: itemid
slug: Web/HTML/Global_attributes/itemid
---

{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Global_attributes) **`itemid`** proporciona microdatos en forma de un identificador global único de un elemento.

Un atributo `itemid` solo se puede especificar para un elemento que tiene atributos [`itemscope`](/es/docs/Web/HTML/Global_attributes/itemscope) e [`itemtype`](/es/docs/Web/HTML/Global_attributes/itemtype). Además, `itemid` solo se puede especificar en elementos que poseen un atributo `itemscope` cuyo `itemtype` correspondiente se refiere o define un vocabulario que admite identificadores globales.

El significado exacto de un identificador global de `itemtype` lo proporciona la definición de ese identificador dentro del vocabulario especificado. El vocabulario define si pueden coexistir varios elementos con el mismo identificador global y, de ser así, cómo se manejan los elementos con el mismo identificador.

> **Nota:** La definición {{glossary("WHATWG")}} especifica que un `itemid` debe ser una {{glossary("URL")}}. Sin embargo, el siguiente ejemplo ilustra correctamente que también se puede usar un {{glossary("URN")}}. Esta inconsistencia puede reflejar la naturaleza incompleta de la especificación de Microdata.

## Ejemplo

### Representación de datos estructurados para un libro

Este ejemplo utiliza atributos de microdatos para representar los siguientes datos estructurados:

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2">https://schema.org/Book: urn:isbn:0-374-22848-5</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>Owls of the Eastern Ice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Jonathan C Slaght</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2020-08-04</td>
    </tr>
  </tbody>
</table>

#### HTML

```html
<dl
  itemscope
  itemtype="https://schema.org/Book"
  itemid="urn:isbn:0-374-22848-5<">
  <dt>Título</dt>
  <dd itemprop="title">Owls of the Eastern Ice</dd>
  <dt>Autor</dt>
  <dd itemprop="author">Jonathan C Slaght</dd>
  <dt>Fecha de publicación</dt>
  <dd>
    <time itemprop="datePublished" datetime="2020-08-04"
      >4 de Agosto del 2020</time
    >
  </dd>
</dl>
```

#### Resultado

{{EmbedLiveSample('Representación de datos estructurados para un libro')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Todos los [atributos globales](/es/docs/Web/HTML/Global_attributes).
- Otros atributos globales relacionados con los microdatos:

  - [`itemprop`](/es/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemref`](/es/docs/Web/HTML/Global_attributes/itemref)
  - [`itemscope`](/es/docs/Web/HTML/Global_attributes/itemscope)
  - [`itemtype`](/es/docs/Web/HTML/Global_attributes/itemtype)
