---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

La interfaz **`CSSStyleSheet`** representa una sola hoja de estilo [CSS](/es/docs/Web/CSS), y le permite inspeccionar y modificar la lista de reglas contenidas en la hoja de estilo. Hereda propiedades y métodos de su padre, {{domxref("StyleSheet")}}.

{{InheritanceDiagram}}

Una hoja de estilo consta de una colección de objetos {{domxref("CSSRule")}} que representan cada una de las reglas de la hoja de estilo. Las reglas están contenidas en un {{domxref("CSSRuleList")}}, que se puede obtener de la propiedad {{domxref("CSSStyleSheet.cssRules", "cssRules")}} de la hoja de estilo.

Por ejemplo, una regla podría ser un objeto {{domxref("CSSStyleRule")}} que contenga un estilo como:

```css
h1,
h2 {
  font-size: 16pt;
}
```

Otra regla podría ser una _regla de arroba_ como {{cssxref("@import")}} o {{cssxref("@media")}}, y así sucesivamente.

Consulte la sección [Obtención de una hoja de estilo](#obtención_de_una_hoja_de_estilo) para conocer las diversas formas en que se puede obtener un objeto `CSSStyleSheet`. Un objeto `CSSStyleSheet` también se puede construir directamente. El constructor y los métodos {{domxref("CSSStyleSheet.replace()")}} y {{domxref("CSSStyleSheet.replaceSync()")}} son adiciones más recientes a la especificación, que permiten _hojas de estilo construibles_.

## Constructor

- {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}}
  - : Crea un nuevo objeto `CSSStyleSheet`.

## Propiedades de instancia

_Hereda las propiedades de su padre, {{domxref("StyleSheet")}}._

- {{domxref("CSSStyleSheet.cssRules")}} {{ReadOnlyInline}}

  - : Devuelve un {{domxref("CSSRuleList")}} activo que mantiene una lista actualizada de los objetos {{domxref("CSSRuleList")}} que componen la hoja de estilo.

    > **Nota:** En algunos navegadores, si se carga una hoja de estilo desde un dominio diferente, acceder a `cssRules` genera un `SecurityError`.

- {{domxref("CSSStyleSheet.ownerRule")}} {{ReadOnlyInline}}
  - : Si esta hoja de estilo se importa al documento mediante una regla {{cssxref("@import")}}, la propiedad `ownerRule` devuelve la correspondiente {{domxref("CSSImportRule")}}; de lo contrario, el valor de esta propiedad es `null`.

## Métodos de instancia

_Hereda métodos de su padre, {{domxref("StyleSheet")}}._

- {{domxref("CSSStyleSheet.deleteRule()")}}
  - : Elimina la regla en el índice especificado en la lista de reglas de la hoja de estilo.
- {{domxref("CSSStyleSheet.insertRule()")}}
  - : Inserta una nueva regla en la posición especificada en la hoja de estilo, dada la representación textual de la regla.
- {{domxref("CSSStyleSheet.replace()")}}
  - : Reemplaza de forma asíncrona el contenido de la hoja de estilo y devuelve un {{jsxref("Promise")}} que se resuelve con la `CSSStyleSheet` actualizada.
- {{domxref("CSSStyleSheet.replaceSync()")}}
  - : Reemplaza sincrónicamente el contenido de la hoja de estilo.

## Propiedades heredadas

_Estas propiedades son propiedades heredadas introducidas por Microsoft; estos se mantienen para la compatibilidad con los sitios existentes._

- {{domxref("CSSStyleSheet.rules", "rules")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : La propiedad `rules` es funcionalmente idéntica a la propiedad estándar {{domxref("CSSStyleSheet.cssRules", "cssRules")}}; devuelve un {{domxref("CSSRuleList")}} en vivo que mantiene una lista actualizada de todas las reglas en la hoja de estilo.

## Métodos heredados

_Estos métodos son métodos heredados introducidos por Microsoft; estos se mantienen para la compatibilidad con los sitios existentes._

- {{domxref("CSSStyleSheet.addRule", "addRule()")}} {{Deprecated_Inline}}

  - : Agrega una nueva regla a la hoja de estilo dado el selector al que se aplica el estilo y el bloque de estilo para aplicar a los elementos coincidentes.

    Esto difiere de {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}, que toma la representación textual de la regla completa como una sola cadena.

- {{domxref("CSSStyleSheet.removeRule", "removeRule()")}} {{Deprecated_Inline}}
  - : Funcionalmente idéntico a {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}; elimina la regla en el índice especificado de la lista de reglas de la hoja de estilo.

## Obtención de una hoja de estilo

Una hoja de estilo está asociada como máximo con un {{domxref("Document")}}, al que se aplica (a menos que este {{domxref("StyleSheet.disabled", "desactivada", "", 1)}}). Se puede obtener una lista de objetos `CSSStyleSheet` para un documento dado usando la propiedad {{domxref("Document.styleSheets")}}. También se puede acceder a una hoja de estilo específica desde su objeto _propietario_ (`Node` o `CSSImportRule`), si lo hay.

Un objeto `CSSStyleSheet` se crea y se inserta en la lista {{domxref("Document.styleSheets")}} del documento automáticamente por el navegador, cuando se carga una hoja de estilo para un documento.

A continuación se muestra una lista (posiblemente incompleta) de las formas en que una hoja de estilo se puede asociar con un documento:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        Motivo por el cual la hoja de estilo se asocia con el documento
      </th>
      <th scope="col">
        Aparece en la lista <code>document.<br />styleSheets</code>
      </th>
      <th scope="col">
        Obtener el elemento/regla propietario dado el objeto de hoja de estilo
      </th>
      <th scope="col">La interfaz para el objeto propietario.</th>
      <th scope="col">Obtención del objeto CSSStyleSheet del propietario</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Elementos {{HTMLElement("style")}} y {{HTMLElement("link")}}
        en el documento
      </td>
      <td>Sí</td>
      <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
      <td>
        {{domxref("HTMLLinkElement")}},<br />{{domxref("HTMLStyleElement")}},<br />o
        {{domxref("SVGStyleElement")}}
      </td>
      <td>
        {{domxref("HTMLLinkElement.sheet")}},<br />{{domxref("HTMLStyleElement.sheet")}},<br />o
        {{domxref("SVGStyleElement.sheet")}}
      </td>
    </tr>
    <tr>
      <td>
        Regla CSS {{cssxref("@import")}} en otras hojas de estilo aplicadas al documento
      </td>
      <td>Sí</td>
      <td>
        {{domxref("CSSStyleSheet.ownerRule", ".ownerRule")}}
      </td>
      <td>{{domxref("CSSImportRule")}}</td>
      <td>
        {{domxref("CSSImportRule.styleSheet", ".styleSheet")}}
      </td>
    </tr>
    <tr>
      <td>
        Instrucción <code>&#x3C;?xml-stylesheet ?></code> de procesamiento en
        el documento (no HTML)
      </td>
      <td>Sí</td>
      <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
      <td>{{domxref("ProcessingInstruction")}}</td>
      <td>
        {{domxref("ProcessingInstruction.sheet", ".sheet")}}
      </td>
    </tr>
    <tr>
      <td>Cabecera de enlace HTTP</td>
      <td>Sí</td>
      <td><em>N/A</em></td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>Hojas de estilo del navegador (predeterminado)</td>
      <td>No</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Modelo de objetos CSS](/es/docs/Web/API/CSS_Object_Model)
- [Uso de información de estilo dinámico](/es/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
