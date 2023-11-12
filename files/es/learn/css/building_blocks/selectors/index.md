---
title: Selectores CSS
slug: Learn/CSS/Building_blocks/Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

En {{Glossary( "CSS")}} los selectores se utilizan para delimitar los elementos {{glossary("HTML")}} de nuestra página web a los que queremos aplicar estilo. Hay una amplia variedad de selectores CSS, lo que permite una gran precisión a la hora de seleccionar elementos a los que aplicar estilo. En este artículo y sus subartículos veremos con detalle todos los tipos y el modo como funcionan.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Nociones básicas de informática, tener el
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico instalado</a
        >, conocimientos básicos de
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >, conocimientos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">Introducción a HTML</a
        >) y una idea de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender con detalle cómo funcionan los selectores CSS.</td>
    </tr>
  </tbody>
</table>

## ¿Qué es un selector?

En un artículo anterior explicamos qué son los selectores. Un selector CSS es la primera parte de una regla CSS. Es un patrón de elementos y otros términos que indican al navegador qué elementos HTML se seleccionan para aplicarles una regla que incluye los valores de las propiedades CSS. El elemento o los elementos seleccionados por el selector se denominan _sujeto del selector_.

![Fragmento de código con el elemento h1 resaltado.](selector.png)

En artículos anteriores ya has visto algunos selectores y has aprendido que hay diversas maneras de organizar el documento. Por ejemplo, seleccionando un elemento, como `h1`, o seleccionando una clase, como `.special`.

En CSS, los selectores se definen en la especificación de selectores de CSS correspondiente; al igual que cualquier otro elemento de CSS, es necesario que los navegadores los admitan para que funcionen. La mayoría de los selectores que encontrarás se definen en [especificación de nivel 3 de selectores](https://www.w3.org/TR/selectors-3/), que es una especificación consolidada y, por lo tanto, la mayoría de navegadores admitirán esos selectores.

## Listas de selectores

Si más de un elemento utiliza el mismo CSS, puedes combinar los selectores en una _lista de selectores_ para que la regla se aplique a cada uno de los selectores individuales. Por ejemplo, si tengo el mismo CSS para un `h1` y para una clase `.special`, los puedo escribir como dos reglas separadas.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

También los podrías combinar en una lista de selectores, separándolos con una coma.

```css
h1,
.special {
  color: blue;
}
```

Es posible dejar un espacio en blanco tanto antes como después de la coma. Incluso puede resultar más legible si cada selector se encuentra en una línea distinta.

```css
h1,
.special {
  color: blue;
}
```

En el ejemplo siguiente, intenta combinar los dos selectores de modo que tengan la misma declaración. El aspecto visual debe permanecer igual tras la combinación.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}

Cuando agrupas los selectores de esta manera, si alguno de los selectores no es válido, el navegador sencillamente ignora toda la regla.

En el ejemplo siguiente, la regla que corresponde al selector de clase que no es válido se ignora, mientras que el estilo se aplica al elemento `h1`.

```css
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Sin embargo, si se combinan, toda la regla se considera no válida y no se aplicará estilo ni a `h1` ni a la clase.

```css
h1,
..special {
  color: blue;
}
```

## Tipos de selectores

Hay diferentes agrupaciones de selectores, y conocer qué tipo de selector necesitas te ayudará a encontrar la herramienta adecuada para tu trabajo. En estos subartículos vamos a ver los diferentes grupos de selectores con más detalle.

### Selectores de tipo, de clase y de ID

Este grupo incluye selectores que delimitan un elemento HTML, como por ejemplo un `<h1>`.

```css
h1 {
}
```

También incluye selectores que delimitan una clase:

```css
.box {
}
```

o un ID:

```css
#unique {
}
```

### Selectores de atributo

Este grupo de selectores te proporciona diferentes formas de seleccionar elementos según la presencia de un atributo determinado en un elemento:

```css
a[title] {
}
```

O incluso hacer una selección basada en la presencia de un atributo que tiene un valor particular asignado:

```css
a[href="https://example.com"]
{
}
```

### Las pseudoclases y los pseudoelementos

Este grupo de selectores incluye pseudoclases, que aplican estilo a ciertos estados de un elemento. La pseudoclase `:hover`, por ejemplo, selecciona un elemento solo cuando se le pasa el ratón por encima.

```css
a: hover {
}
```

También incluye pseudoelementos, que seleccionan una parte determinada de un elemento en vez del elemento en sí. Por ejemplo, `::first-line` siempre selecciona la primera línea del texto que se encuentra dentro de un elemento (`<p>`, en el ejemplo siguiente), y actúa como si un elemento `<span>` hubiera delimitado la primera línea, seleccionado y aplicado estilo.

```css
p::first-line {
}
```

### Combinadores

El último grupo de selectores combina otros selectores con el fin de delimitar elementos de nuestros documentos. El ejemplo siguiente selecciona los párrafos que son hijos directos del elemento `<article>` utilizando el operador de combinación hijo (`>`):

```css
article > p {
}
```

## Próximos pasos

Echa un vistazo a esta tabla de referencia de selectores que contiene enlaces directos a los distintos tipos de selectores que se explican en nuestra sección de aprendizaje o en MDN, o bien sigue adelante e inicia tu viaje para averiguar cómo funcionan en [Selectores de tipo, de clase y de ID](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Selectores_de_tipo_clase_e_ID).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

## Tabla de referencia de selectores

La tabla que te mostramos a continuación proporciona una descripción general de los selectores que puedes utilizar junto con enlaces a diversas páginas de esta guía que te mostrarán cómo utilizar cada tipo de selector. También hemos incluido un enlace a la página MDN de cada selector para poder comprobar la información sobre los navegadores que lo admiten. Puedes utilizarlo como referencia para volver cuando necesites buscar los selectores a medida que avanzas con la materia o mientras experimentas con CSS por tu cuenta.

| Selector                                                                                                    | Ejemplo             | Tutorial de aprendizaje de CSS                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Selector de tipo](/es/docs/Web/CSS/Type_selectors)                                                         | `h1 { }`            | [Los tipos de selectores](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Selectores_de_tipo_clase_e_ID#Tipos_de_selectores)                               |
| [Selector universal](/es/docs/Web/CSS/Universal_selectors)                                                  | `* { }`             | [El selector universal](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Selectores_de_tipo_clase_e_ID#El_selector_universal)                               |
| [Selector de clase](/es/docs/Web/CSS/Class_selectors)                                                       | `.box { }`          | [Los selectores de clase](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Selectores_de_tipo_clase_e_ID#Selectores_de_clase)                               |
| [Selector de ID](/es/docs/Web/CSS/ID_selectors)                                                             | `#unique { }`       | [Los selectores de ID](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Selectores_de_tipo_clase_e_ID#Selectores_de_ID)                                     |
| [Selector de atributo](/es/docs/Web/CSS/Selectores_atributo)                                                | `a[title] { }`      | [Los selectores de atributo](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Selectores_de_atributos)                                                      |
| [Pseudoclase](/es/docs/Web/CSS/Pseudo-classes)                                                              | `p:first-child { }` | [Las pseudoclases](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Pseudo-clases_y_pseudo-elementos#%C2%BFQu%C3%A9_es_una_pseudoclase)                     |
| [Pseudoelemento](/es/docs/Web/CSS/Pseudoelementos)                                                          | `p::first-line { }` | [Los pseudoelementos](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Pseudo-clases_y_pseudo-elementos#%C2%BFQu%C3%A9_es_un_pseudoelemento)                |
| [Operadores de combinación descendentes](/es/docs/Web/CSS/Descendant_combinator)                            | `article p`         | [Operadores de combinación descendentes](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Combinadores#Selector_de_descendientes)                           |
| [Operador de combinación de elementos hijo](/es/docs/Web/CSS/Child_combinator)                              | `article > p`       | [Operadores de combinación de elementos hijo](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Combinadores#Selector_de_combinaci%C3%B3n_de_elementos_hijo) |
| [Operador de combinación de elementos hermanos adyacentes](/es/docs/Web/CSS/Selectores_hermanos_adyacentes) | `h1 + p`            | [Hermanos adyacentes](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Combinadores#Hermanos_adyacentes)                                                    |
| [Operador de combinación general de elementos hermanos](/es/docs/Web/CSS/Selectores_hermanos_generales)     | `h1 ~ p`            | [Hermanos generales](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Combinadores#Hermanos_generales)                                                      |
