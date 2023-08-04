---
title: Selectores de atributo
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

Como ya explicamos en los artículos de HTML, los elementos pueden tener atributos que proporcionan un nivel de detalle mayor sobre el elemento que delimitan. En el CSS puedes utilizar selectores de atributo para seleccionar elementos definidos con unos atributos determinados. En este artículo veremos cómo utilizar estos selectores tan útiles.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conocimientos básicos de informática, tener el
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Instalacion_de_software_basico"
          >software básico instalado</a
        >, conocimientos básicos de
        <a
          href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/Manejando_los_archivos"
          >trabajar con archivos</a
        >, HTML básico (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML">Introducción a HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Primeros pasos con CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender a identificar y utilizar selectores de atributo.</td>
    </tr>
  </tbody>
</table>

## Selectores de presencia y valor

Estos selectores permiten seleccionar un elemento solo a partir de la presencia de un atributo (por ejemplo `href`) o a partir de varias coincidencias diferentes con respecto al valor del atributo.

| Selector         | Ejemplo                         | Descripción                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[attr]`         | `a[title]`                      | Relaciona elementos con un mismo nombre de atributo, _attr_ (el valor que se indica entre corchetes).                                                                                                                                                                                                                                                   |
| `[attr=value]`   | `a[href="https://example.com"]` | Relaciona elementos con un mismo nombre de atributo, _attr_, cuyo valor es exactamente el mismo, _value_ (la cadena de caracteres que se indica entre corchetes).                                                                                                                                                                                       |
| `[attr~=value]`  | `p[class~="special"]`           | Relaciona los elementos con un mismo nombre de atributo, _attr_, cuyo valor es exactamente _value_, o los elementos con un mismo atributo _attr_ que contiene uno o más valores de los cuales, al menos uno, coincide con _value_.<br><br> Ten en cuenta que en una lista que incluya más de un valor, los distintos valores se separan con un espacio. |
| `[attr\|=value]` | `div[lang\|="zh"]`              | Relaciona los elementos con un mismo nombre de atributo, _attr_, cuyo valor puede ser exactamente _value_ o puede comenzar con _value_ seguido inmediatamente por un guion.                                                                                                                                                                             |

En el ejemplo siguiente puedes observar cómo se utilizan estos selectores.

- Mediante el uso de `li[class]` podemos relacionar cualquier selector con un atributo de clase. Los relaciona todos menos el primer elemento de la lista.
- `li[class="a"]` relaciona un selector con una clase de `a`, pero no un selector con una clase de `a` con otra clase separada por un espacio como parte del valor. Selecciona el segundo elemento de la lista.
- `li[class~="a"]` coincidirá con una clase `a` pero también con un valor que contenga la clase de `a` como parte de una lista de elementos separados por un espacio. Selecciona el segundo y el tercer elemento de la lista.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## Selectores coincidentes con subcadenas

Estos selectores permiten un tipo más avanzado de relación entre las subcadenas de caracteres que constituyen el valor del atributo. Por ejemplo, si tienes las clases `box-warning` y `box-error` y quieres encontrar todos los elementos que empiezan con la cadena de caracteres "box-", puedes seleccionarlas ambas con `[class^="box-"]`.

| Selector        | Ejemplo             | Descripción                                                                                                                                                  |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `[attr^=value]` | `li[class^="box-"]` | Relaciona elementos con un mismo nombre de atributo, _attr_, cuyo valor empieza exactamente con la subcadena de caracteres _value_.                          |
| `[attr$=value]` | `li[class$="-box"]` | Relaciona elementos con un mismo nombre de atributo, _attr_, cuyo valor termina exactamente con la subcadena de caracteres _value_.                          |
| `[attr*= ]`     | `li[class*="box"]`  | Relaciona elementos con un mismo nombre de atributo, _attr_, cuyo valor incluye al menos una ocurrencia de la subcadena _value_ en algún punto de la cadena. |

El ejemplo siguiente muestra cómo se usan estos selectores:

- `li[class^="a"]` relaciona cualquier valor de atributo que empieza con `a`; luego, relaciona los dos primeros elementos de la lista se verán iguales.
- `li[class$="a"]` relaciona cualquier valor de atributo que termina con `a`; luego, relaciona el primer y el tercer elemento de la lista.
- `li[class*="a"]` relaciona cualquier valor de atributo que contiene `a` en cualquier posición; luego, relaciona todos los elementos de la lista.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## Mayúsculas y minúsculas

Si quieres relacionar los valores de atributo tanto si están escritos en mayúsculas como en minúsculas, puedes utilizar el valor `i` antes del paréntesis de cierre. Este indicador informa al navegador de que debe relacionar todos los caracteres ASCII independientemente de si las letras son mayúsculas o minúsculas. Sin este indicador, los valores se relacionarán según las directrices del lenguaje del documento con respecto a la distinción entre mayúsculas y minúsculas; en el caso del HTML, se distinguirá entre mayúsculas y minúsculas.

En el ejemplo siguiente, el primer selector relaciona valores que empiezan con `a`; luego, solo coincide el primer elemento de la lista porque los otros dos comienzan con una A mayúscula. El segundo selector utiliza el indicador de no distinción entre mayúsculas y minúsculas, así que relaciona todos los elementos de la lista.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> **Nota:** Recientemente se ha creado un valor `s`, que obliga a establecer la distinción de mayúsculas y minúsculas en contextos en que no se suele establecer esta distinción. Sin embargo, pocos navegadores lo utilizan y no resulta demasiado útil en un contexto HTML.

## Próximos pasos

Ahora que hemos terminado con los selectores de atributo, puedes avanzar al artículo siguiente y leer acerca de los [selectores de pseudoclases y pseudoelementos](/es/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}
