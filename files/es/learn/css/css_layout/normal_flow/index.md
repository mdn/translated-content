---
title: Flujo normal
slug: Learn/CSS/CSS_layout/Normal_Flow
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

Este artículo explica el flujo normal, o la forma en que se presentan los elementos de la página web si no cambias su compaginación.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Conceptos básicos de HTML (véase
        <a href="/es/docs/Learn/HTML/Introduccion_a_HTML"
          >Introducción al HTML</a
        >) y nociones de cómo funciona el CSS (véase
        <a href="/es/docs/Learn/CSS/First_steps">Introducción al CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Conocer cómo los navegadores presentan de forma predeterminada las
        páginas web antes de comenzar a hacer cambios.
      </td>
    </tr>
  </tbody>
</table>

Como se detalla en el último artículo de introducción al diseño, los elementos en una página web se distribuyen según el flujo normal si no se aplica ningún CSS que cambie la forma en la que se comportan. Y, como comenzamos a descubrir, puedes cambiar el comportamiento de los elementos, ya sea ajustando su posición en este flujo normal o eliminándolos de este por completo. Comenzar con un documento coherente y bien estructurado que sea legible en el flujo normal es la mejor manera de comenzar cualquier página web. Asegura que tu contenido sea legible, incluso si el usuario usa un navegador muy limitado o un dispositivo como un lector de pantalla que lee el contenido de la página. Además, como el flujo normal está diseñado para que un documento sea legible, al comenzar de esta manera, trabajas en el documento en lugar de luchar contra él a medida que haces cambios en su diseño.

Antes de profundizar en los diferentes métodos de diseño, vale la pena revisar algunas de las cosas que ya debes haber estudiado en artículos anteriores con respecto al flujo normal de los documentos.

## ¿Cómo se presentan por defecto los elementos?

En primer lugar, se toma de las cajas de cada uno de los elementos el contenido, luego se añade cualquier área de relleno, borde y margen alrededor de ellas; es el modelo de cajas que hemos visto antes.

De manera predeterminada, el contenido de un [elemento de nivel de bloque](/es/docs/Web/HTML/Block-level_elements) es el 100% del ancho de su elemento padre y su altura viene determinada por su contenido. Los [elementos en línea](/es/docs/Web/HTML/Elementos_en_línea) tienen su altura y anchura determinados por su contenido. No puedes establecer el ancho o la altura de los elementos en línea, simplemente se ubican dentro del contenido de los elementos de nivel de bloque. Si deseas controlar el tamaño de un elemento en línea de esta manera, debes configurarlo para que se comporte como un elemento de nivel de bloque con `display: block;` (o incluso, `display: inline-block;`, que combina características de ambos).

Esto explica los elementos individuales, pero ¿qué hay del modo como los elementos interactúan entre sí? El flujo de diseño normal (mencionado en el artículo de introducción al diseño) es el sistema mediante el cual los elementos se colocan en la ventana gráfica del navegador. De manera predeterminada, los elementos de nivel de bloque se presentan en la _dirección del flujo del bloque_, en función del [modo de escritura](/es/docs/Web/CSS/writing-mode) de los padres (_initial_: horizontal-tb): cada uno aparecerá en una línea nueva debajo de la última, y estarán separados por cualquier margen que se establezca en ellos. Por lo tanto, en inglés, o en cualquier otro modo de escritura horizontal y de arriba a abajo, los elementos de nivel de bloque se disponen verticalmente.

Los elementos en línea se comportan de manera diferente: no aparecen en líneas nuevas; en su lugar, se asientan en la misma línea entre sí y con cualquier contenido de texto adyacente (o envuelto), siempre que tengan espacio dentro del ancho del elemento de nivel de bloque primario. Si no hay espacio, el texto o los elementos que desborden bajarán a la línea siguiente.

Si dos elementos adyacentes tienen algún margen configurado y los dos márgenes se tocan, se mantiene el mayor de los dos y el menor desaparece; esto se llama colapso del margen, y ya lo hemos visto antes.

Echemos un vistazo a un ejemplo sencillo que explica todo esto:

```html
<h1>Flujo de los documentos básicos</h1>

<p>
  Soy un elemento básico de nivel de bloque. Mis elementos de nivel de bloque
  adyacentes se encuentran en líneas nuevas debajo de mí.
</p>

<p>
  Cubrimos por defecto el 100% del ancho de nuestro elemento principal, y somos
  tan altos como nuestro contenido secundario. Nuestro ancho y alto total es
  nuestro contenido + área de relleno + ancho/alto del borde.
</p>

<p>
  Estamos separados por nuestros márgenes. Debido al colapso del margen, estamos
  separados por el ancho de uno de nuestros márgenes, no por ambos.
</p>

<p>
  Los elementos en línea <span>como este</span> y <span>este otro</span> se
  ubican en la misma y la de los nodos de texto adyacentes, mientras hay espacio
  en la misma línea. Si un elemento en línea desborda,
  <span
    >sigue por la línea siguiente, si es posible (como la que contiene este
    texto)</span
  >, o simplemente pasa a una línea nueva, como hace esta imagen:
  <img src="long.jpg" />
</p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}
```

{{ EmbedLiveSample('Normal_Flow', '100%', 500) }}

## Resumen

Ahora que comprendes el flujo normal y cómo el navegador presenta las cosas por defecto, continúa para comprender cómo cambiar esta pantalla predeterminada para crear el diseño que necesitas.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}
