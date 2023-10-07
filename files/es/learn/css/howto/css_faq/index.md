---
title: Preguntas frecuentes sobre CSS
slug: Learn/CSS/Howto/CSS_FAQ
---

#### Mi CSS es válida, pero no se representa correctamente

Los navegadores utilizan la declaración `DOCTYPE` para elegir entre mostrar el documento usando un modo que sea más compatible con los estándares de la Web o mostrarlo con los fallos de los navegadores antiguos. El uso de una declaración `DOCTYPE` correcta y moderna al inicio del código HTML mejorará el cumplimiento de los estándares del navegador.

Los navegadores modernos tienen fundamentalmente dos modos de renderizado:

- _Quirks mode_ (Modo no estándar): también se llama el modo de compatibilidad con versiones anteriores y permite que las páginas web heredadas se representen como sus autores habían previsto, siguiendo las normas de representación o renderizado no estándares que usan los navegadores antiguos. Los documentos con una declaración `DOCTYPE` incompleta, incorrecta o faltante o con una declaración `DOCTYPE` conocida que se usara habitualmente antes de 2001 se representarán en el Modo no estándar.
- _Standards Mode_ (Modo estándar): el navegador intenta seguir estrictamente los estándares del W3C. Se supone que las nuevas páginas HTML se diseñarán para navegadores compatibles con los estándares, y como resultado, las páginas con una declaración `DOCTYPE` moderna será renderizada con el Modo estándar.

Los navegadores basados en Gecko tienen un tercer _[Modo casi estándar](/es/docs/Mozilla/Gecko_Almost_Standards_Mode)_ que tiene solo una peculiaridades menores.

Esta es una lista de las declaraciones `DOCTYPE` más utilizadas que activarán el Modo estándar o el Modo casi estándar:

```html
<!DOCTYPE html PUBLIC "- / / W3C / / DTD HTML 4.0 Transitional / / EN" "http://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE html PUBLIC "- / / W3C / / DTD HTML 4.01 / / EN" "http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE html PUBLIC "- / / W3C / / DTD XHTML 1.0 Transitional / / EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html PUBLIC "- / / W3C / / DTD XHTML 1.0 Strict / / EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

#### Diferencia entre `id` y `class`

Los elementos HTML pueden tener un atributo `id` y / o un atributo `class`. El atributo `id` asigna un nombre a un elemento determinado y debe haber un solo elemento con ese nombre. El atributo `class` asigna un elemento a una determinada clase y en general no puede haber más de un elemento con el mismo atributo `class`. CSS te permite aplicar estilos a un atributo `id` y / o `class` concreto.

Utiliza un estilo específico de `id` cuando desees restringir las reglas de estilo a un bloque o elemento concreto. Este estilo lo usará **un solo** elemento con ese `id` concreto.

Usa un estilo específico de `class` cuando desees aplicar las reglas de estilo a una determinada clase de bloques y elementos.

Consulta [Selectores CSS](/en/CSS/Getting_Started/Selectors)

#### Restaurar el valor de la propiedad predeterminado

Debido a que CSS no proporciona una palabra clave "predeterminada", la única manera de restaurar el valor predeterminado de una propiedad es volver a declarar explícitamente dicha propiedad.

Por lo tanto, debes tener especial cuidado al escribir reglas de estilo usando selectores (por ejemplo, los selectores por nombre de etiqueta, como `p` ) que tal vez desees reemplazar con reglas más específicas (como las que usan id o selectores de clase), porque el valor predeterminado original no puede restablecerse automáticamente.

Debido a la naturaleza _en cascada_ de CSS, es una buena práctica definir reglas de estilo de una manera lo más concreta posible para evitar aplicar estilo a elementos a los que no se tenía previsto aplicar.

#### Estilos derivados

CSS no permite que se defina un estilo según los términos de otro. (Consulta la [nota de Eric Meyer acerca de la postura del Grupo de trabajo)](http://archivist.incutio.com/viewlist/css-discuss/2685). Sin embargo, la asignación de múltiples clases a un solo elemento puede proporcionar el mismo efecto.

#### Asignación de múltiples clases

A los elementos HTML se les pueden asignar varias clases listándolas en el atributo `class`, con un espacio en blanco para separarlas.

```html
<style type="text/css">
  .news {
    background: black;
    color: white;
  }
  .today {
    font-weight: bold;
  }
</style>

<div class="news today">... contenido de las noticias de hoy ...</div>
```

Si la misma propiedad se declara en ambas reglas, el conflicto se resuelve primero a través de la especificidad, a continuación, según el orden de las declaraciones CSS. El orden de las clases en el atributo `class` no es relevante.

#### Normas de estilo que no funcionan

Las reglas de estilo que son sintácticamente correctas pueden no aplicarse en determinadas situaciones. Puedes utilizar las _Reglas de estilo de CSS_ del [Inspector DOM](/en/DOM_Inspector) para depurar los problemas de este tipo, pero los casos más frecuentes en los que se ignoran las reglas de estilo se enumeran a continuación.

##### Jerarquía de los elementos HTML

La forma en que se aplican los estilos CSS a los elementos HTML depende también de la jerarquía de los elementos. Es importante recordar que una regla que se aplica a un descendiente reemplaza el estilo del padre, a pesar de la especificidad o la prioridad de las reglas CSS.

```
.news { color: black; }
. corpName {font-weight: bold; color: red;}

<!-- el texto de la noticia es negro, pero el nombre de la empresa va en rojo y negrita -->
<div class="news">
   (Reuters) <span class="corpName"> General Electric </span> (GE.NYS) anunció el jueves ...
</div>
```

En el caso de jerarquías HTML complejas, si parece que se ignora una regla, comprueba si el elemento está dentro de otro elemento con un estilo diferente.

##### Regla de estilo explícitamente redefinida

En las hojas de estilo CSS el orden **es** importante. Si defines una regla y luego vuelves a definirla, se usará la última definición.

```
#stockTicker { font-weight: bold; }
.stockSymbol { color: red; }
/*  otras reglas             */
/*  otras reglas             */
/*  otras reglas             */
.stockSymbol { font-weight: normal; }

<!-- la mayor parte del texto va en negrita, con excepción de "GE", que va en rojo y no en negrita -->
<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

Para evitar este tipo de errores, intenta definir las reglas solo una vez para un selector determinado y agrupa todas las reglas que pertenecen a ese selector.

##### Uso de una propiedad abreviada

Está bien usar las propiedades abreviadas para la definición de reglas de estilo, ya que utiliza una sintaxis muy compacta. Usar la abreviatura con sólo algunos atributos es posible y correcto, pero hay que recordar que los atributos no declarados se restablecen a los valores predeterminados automáticamente. Esto significa que una norma anterior para un solo atributo podría ser reemplazada implícitamente.

```
#stockTicker { font-size: 12px; font-family: Verdana; font-weight: bold; }
.stockSymbol { font: 14px Arial; color: red; }

<div id="stockTicker">
   NYS: <span class="stockSymbol">GE</span> +1.0 ...
</div>
```

En el ejemplo anterior el problema se produjo en las reglas que pertencían a distintos elementos, pero puede ocurrir también para el mismo elemento, porque el orden de las reglas **es** importante.

```css
#stockTicker {
   font-weight: bold;
   font: 12px Verdana; / * font-weight es ahora normal * /
}
```

##### Uso del selector `*`

El selector `*` se refiere a cualquier elemento y tiene que utilizarse con especial cuidado.

```
body * { font-weight: normal; }
#stockTicker { font: 12px Verdana; }
.corpName { font-weight: bold; }
.stockUp { color: red; }

<div id="section">
   NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0 ...
</div>
```

En este ejemplo, el selector `body *` aplica la regla a todos los elementos dentro del cuerpo (_body_), en cualquier nivel de jerarquía, incluyendo _redtext._ Así `font-weight: bold;` aplicada a la clase _boldtext_ se reemplaza por `font-weight: normal;` aplicada a _redtext._

##### Especificidad en CSS

Cuando se aplican múltiples reglas a un determinado elemento, la norma escogida depende de su especificidad de estilo. El estilo en línea (en los atributos HTML `style`) es lo primero, seguido por los selectores id, a continuación, los selectores class y, finalmente, los selectores element-name.

```
div { color: black; }
#orange { color: orange; }
.green { color: green; }

<div id="orange" class="green" style="color: red;">This is red</div>
```

Las reglas son más complicadas cuando el selector tiene varias partes. Se puede encontrar más información detallada acerca de cómo se calcula la especificidad del selector en el [capítulo 6.4.3 de la Especificación CSS 2.1](http://www.w3.org/TR/CSS21/cascade.html#specificity)

#### ¿Qué hacen las propiedades -moz-\*?

Por favor, consulta la página [Extensiones CSS de Mozilla](/en/CSS_Reference/Mozilla_Extensions).
