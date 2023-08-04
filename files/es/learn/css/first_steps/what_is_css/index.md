---
title: ¿Qué es el CSS?
slug: Learn/CSS/First_steps/What_is_CSS
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

Las hojas de estilo en cascada (**{{Glossary("CSS")}}**, cascading style sheets) permiten crear páginas web atractivas. Pero ¿cómo funcionan realmente? En este artículo explicaremos qué es el CSS con un ejemplo de sintaxis sencillo y describiremos algunos términos clave sobre este lenguaje.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática,
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >tener instalado el software básico</a
        >, conocimientos básicos de cómo
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >
        y nociones de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender qué es CSS.</td>
    </tr>
  </tbody>
</table>

En el módulo [Introducción al HTML](/es/docs/Learn/HTML/Introduccion_a_HTML), exponemos qué es el HTML y cómo se usa para definir documentos destinados a leerse en un navegador web. Los títulos se verán más grandes que el texto y los párrafos empezarán en una línea nueva y habrá un espacio entre ellos. Los enlaces aparecerán en un color diferente y subrayados para distinguirlos del resto del texto. Vienen predeterminados por el navegador y, en la práctica, son estilos muy básicos que el navegador aplica al HTML para asegurarse, básicamente, de que sean legibles incluso si el autor de la página no especifica un estilo explícito.

![Los estilos predeterminados utilizados por el navegador](html-example.png)

Sin embargo, Internet sería un lugar muy aburrido si todas las páginas web se vieran así. Usando CSS se pueden controlar con precisión cómo se ven los elementos HTML en el navegador, que presentará para las etiquetas de marcado el diseño que cada uno desee.

## ¿Para qué sirve el CSS?

Como hemos mencionado, el CSS es un lenguaje informático que especifica cómo se presentan los documentos a los usuarios: cómo se diseñan, compaginan, etc.

Un **documento** suele ser un archivo de texto estructurado con un lenguaje de marcado: {{Glossary("HTML")}} es el más común, pero también existen otros como {{Glossary("SVG")}} o {{Glossary("XML")}}.

**Presentar** un documento a un usuario significa convertirlo en un formulario que el público pueda utilizar. Los {{Glossary("Navegador", "navegadores")}}, como por ejemplo {{Glossary("Mozilla Firefox", "Firefox")}}, {{Glossary("Google Chrome", "Chrome")}} o {{Glossary("Microsoft Edge", "Edge")}}, están diseñados para presentar documentos visualmente en una pantalla de ordenador, un proyector o una impresora.

> **Nota:** Un navegador también recibe el nombre de {{Glossary("Agente de usuario", "agente de usuario")}}, que consiste en un programa informático que representa a una persona dentro del sistema. Los navegadores son el modelo principal de agente de usuario en el que pensamos cuando hablamos de CSS, pero no son el único. Hay otros documentos de usuario disponibles, como los que convierten documentos HTML y CSS en PDF para imprimir.

El CSS se puede usar para estilos de texto muy básicos como, por ejemplo, cambiar el [color](/es/docs/Web/CSS/color_value) y el [tamaño](/es/docs/Web/CSS/font-size) de los encabezados y los enlaces. Se puede utilizar para crear un diseño, como podría ser [convertir una columna de texto en una composición](/es/docs/Web/CSS/Layout_cookbook/Column_layouts) con un área de contenido principal y una barra lateral para información relacionada. Incluso se puede usar para crear efectos de [animación](/es/docs/Web/CSS/CSS_Animations). Echa un vistazo a los enlaces de este párrafo para ver ejemplos específicos.

## Sintaxis del CSS

El CSS es un lenguaje basado en reglas: cada usuario define las reglas que especifican los grupos de estilos que van a aplicarse a elementos particulares o grupos de elementos de la página web. Por ejemplo: «Quiero que el encabezado principal de mi página se muestre en letras grandes de color rojo».

El código siguiente muestra una regla CSS muy simple que proporcionaría el estilo descrito en el párrafo anterior:

```css
h1 {
  color: red;
  font-size: 5em;
}
```

La regla se abre con un {{Glossary("CSS Selector", "selector")}}. Este _selecciona_ el elemento HTML que vamos a diseñar. En este caso, diseñaremos encabezados de nivel uno ({{htmlelement ("h1")}}).

Luego tenemos un conjunto de llaves `{ }`. Entre estas habrá una o más **declaraciones**, que tomarán la forma de pares de **propiedad** y **valor**. Cada par especifica cada una de las propiedades de los elementos seleccionados y el valor que queremos dar a esa propiedad.

Antes de los dos puntos, tenemos la propiedad; y después, el valor. Las {{Glossary("property/CSS", "propiedades")}} CSS admiten diferentes valores, dependiendo de qué propiedad se esté especificando. En el ejemplo anterior, tenemos la propiedad `color`, que puede tomar varios [valores de color](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS#Color). También tenemos la propiedad de `font-size`, que puede tomar varias [unidades de tamaño](/es/docs/Learn/CSS/Building_blocks/Valores_y_unidades_CSS#N%C3%BAmeros_longitudes_y_porcentajes) como valor.

Una hoja de estilo CSS contendrá muchas de estas reglas, escritas una tras otra.

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

Algunos valores se aprenden rápidamente, mientras que otros deberán buscarse. Las páginas de propiedades individuales que hay en el proyecto MDN proporcionan una forma rápida de buscar propiedades y sus valores en caso de olvidarlos o desear saber qué más se puede usar como valor.

> **Nota:** Puedes encontrar enlaces a todas las páginas de las propiedades CSS (junto con otras características CSS) enumeradas en la [referencia CSS](/es/docs/Web/CSS/Referencia_CSS) del proyecto MDN. Alternativamente, deberías acostumbrarte a buscar «mdn _css-feature-name_» en tu motor de búsqueda favorito siempre que necesites obtener más información sobre una función CSS. Por ejemplo, intenta buscar «mdn color» y «mdn font-size».

## Módulos CSS

Como hay tantas cosas que se podrían diseñar usando CSS, el lenguaje se divide en _módulos_. Verás referencias a estos módulos a medida que explores en MDN y observarás que muchas de las páginas de documentación están organizadas en torno a un módulo en particular. Por ejemplo, puedes echar un vistazo a la referencia MDN del módulo [Fondos y bordes](/es/docs/Web/CSS/CSS_Backgrounds_and_Borders) para averiguar cuál es su propósito, qué otras propiedades y características diferentes contiene. También encontrarás enlaces a la _especificación CSS_ que define la tecnología (ver más abajo).

En esta fase, no debes preocuparte demasiado sobre cómo se estructura el CSS, sin embargo, puede facilitarte la búsqueda de información si, por ejemplo, sabes que es probable que cierta propiedad se encuentre entre otras similares y, por lo tanto, en la misma especificación.

Volvamos al módulo de Fondos y bordes para un ejemplo específico: puedes pensar que tiene lógica que las propiedades [`background-color`](/es/docs/Web/CSS/background-color) y [`border-color`](/es/docs/Web/CSS/border-color) se definan en este módulo. Y llevas toda la razón.

### Especificaciones CSS

Todas las tecnologías de estándares web (HTML, CSS, JavaScript, etc.) se definen en extensos documentos denominados especificaciones, publicados por organizaciones de estándares (como {{glossary("W3C")}}, {{glossary("WHATWG")}}, {{glossary("ECMA")}} o {{glossary("Khronos")}}) que definen con precisión cómo se supone que deben comportarse esas tecnologías.

El caso de CSS no es diferente: lo desarrolla un grupo del W3C llamado [CSS Working Group](https://www.w3.org/Style/CSS/). Este grupo está compuesto por representantes de proveedores de navegadores y otras compañías interesadas en CSS. También hay otras personas, conocidas como _expertos invitados_, que actúan como voces independientes y no están vinculados a ninguna organización.

El CSS Working Group desarrolla o especifica características nuevas del CSS. Algunas veces lo hacen porque un navegador en particular está interesado en alguna capacidad, otras porque los diseñadores y desarrolladores web piden una característica, y otras porque el grupo ha identificado un requisito. El CSS está en desarrollo constante y todos los días presenta nuevas características disponibles. Sin embargo, un elemento clave sobre el CSS es que toda la comunidad se esfuerza mucho en no cambiar nunca nada que pueda perjudicar los sitios web antiguos. ¡Un sitio web creado en el año 2000, que utiliza el poco CSS disponible que había en ese momento, aún debería poder utilizarse hoy en día!

Como recién llegado al CSS, es probable que encuentres las especificaciones abrumadoras: están destinadas a que los ingenieros las utilicen para implementar soporte de sus características en los agentes de usuario en que trabajan, no para que lo lean los desarrolladores web para comprender el CSS. Muchos desarrolladores experimentados preferirán consultar la documentación disponible en MDN u otros tutoriales. Sin embargo, vale la pena saber que existen y comprender la relación que hay entre el CSS que estás utilizando, el soporte del navegador (ver más abajo) y las especificaciones.

## Compatibilidad con navegadores

Una vez se ha especificado el CSS, solo es útil en el desarrollo de páginas web si uno o más navegadores lo han implementado. Esto significa que el código se ha escrito para convertir las instrucciones que se especifican en nuestro archivo CSS en algo que se pueda mostrar en pantalla. Veremos este proceso más en profundidad en el artículo [Cómo funciona el CSS](/es/docs/Learn/CSS/First_steps/Como_funciona_CSS). Es inusual que todos los navegadores puedan implementar una misma característica al mismo tiempo, por lo que suele haber una brecha en la que se pueden usar algunas partes del CSS en algunos navegadores pero no en otros. Por este motivo, es útil poder verificar el estado de implementación. En cada una de las páginas de propiedades que hay en la MDN se puede ver el estado de la propiedad de interés, por lo que se puede saber si será posible utilizarla en un sitio web.

Lo que sigue es el gráfico de datos de compatibilidad para la propiedad CSS [`font-family`](/es/docs/Web/CSS/font-family).

## ¿Qué viene ahora?

Ahora que comprendes mínimamente qué es el CSS, pasemos a [Comenzar con CSS](/es/docs/Learn/CSS/First_steps/Comenzando_CSS), donde puedes empezar a escribir algo de CSS tú mismo.

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}
