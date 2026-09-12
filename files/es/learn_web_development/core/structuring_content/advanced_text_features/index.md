---
title: Características de texto avanzadas
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}

Hay muchos otros elementos en HTML para definir la semántica del texto, que no llegamos a ver en el artículo [Énfasis e importancia](/es/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance). Los elementos descritos en este artículo son menos conocidos, pero aun así es muy útil conocerlos (y esto sigue sin ser una lista completa de ninguna manera). Aquí aprenderás a marcar citas, código informático y otro texto relacionado, subíndices y superíndices, información de contacto y mucho más.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Familiaridad básica con HTML, tal como se explica en
        <a href="/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Primeros pasos con HTML</a
        >. Semántica a nivel de texto, como <a href="/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >encabezados y párrafos</a
        > y <a href="/es/docs/Learn_web_development/Core/Structuring_content/Lists"
          >listas</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Citas.</li>
          <li>Abreviaturas y acrónimos.</li>
          <li>Direcciones.</li>
          <li>Horas y fechas.</li>
          <li>Superíndice y subíndice.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Citas

HTML contiene características disponibles para marcar citas; el elemento que utilices depende de si estás marcando una cita en bloque o en línea.

### Cita en bloque independiente

Si una sección de contenido a nivel de bloque (ya sea un párrafo, varios párrafos, una lista, etc.) se cita desde otro lugar, debes envolverla dentro de un elemento {{htmlelement("blockquote")}} para indicarlo, e incluir una URL que apunte a la fuente de la cita dentro de un atributo [`cite`](/es/docs/Web/HTML/Reference/Elements/blockquote#cite). Por ejemplo, el siguiente marcado está tomado de la página del elemento `<blockquote>` de MDN:

```html
<p>
  El <strong>elemento HTML <code>&lt;blockquote&gt;</code></strong> (o
  <em>elemento de cita en bloque de HTML</em>) indica que el texto contenido es
  una cita extensa.
</p>
```

Para convertir esto en una cita en bloque, simplemente haríamos lo siguiente:

```html
<p>Aquí hay una cita en bloque:</p>
<blockquote
  cite="https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    El <strong>elemento HTML <code>&lt;blockquote&gt;</code></strong> (o
    <em>elemento de cita en bloque de HTML</em>) indica que el texto contenido
    es una cita extensa.
  </p>
</blockquote>
```

El estilo predeterminado del navegador mostrará esto como un párrafo con sangría, como indicador de que se trata de una cita; el párrafo situado encima de la cita está ahí para demostrarlo.

{{EmbedLiveSample('Cita_en_bloque_independiente', '100%', '200px')}}

### Citas en línea

Las citas en línea funcionan exactamente de la misma manera, excepto que usan el elemento {{htmlelement("q")}}. Por ejemplo, el siguiente fragmento de marcado contiene una cita de la página `<q>` de MDN:

```html
<p>
  El elemento de cita — <code>&lt;q&gt;</code> — se
  <q cite="https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/q">
    utiliza para citas breves que no requieren saltos de párrafo.
  </q>
</p>
```

El estilo predeterminado del navegador mostrará esto como texto normal entre comillas para indicar una cita, de la siguiente manera:

{{EmbedLiveSample('Citas_en_línea', '100%', '78px')}}

### Citas

El contenido del atributo [`cite`](/es/docs/Web/HTML/Reference/Elements/blockquote#cite) suena útil, pero desafortunadamente los navegadores, lectores de pantalla, etc. no hacen mucho con él. No hay forma de que el navegador muestre el contenido de `cite` sin escribir tu propia solución usando JavaScript o CSS. Si quieres que la fuente de la cita esté disponible en la página, debes hacerla disponible en el texto mediante un enlace o alguna otra forma apropiada.

Existe un elemento {{htmlelement("cite")}}, pero está pensado para contener el título del recurso que se cita, p. ej., el nombre del libro. Sin embargo, no hay razón por la que no puedas enlazar de alguna manera el texto dentro de `<cite>` a la fuente de la cita:

```html-nolint
<p>
  De acuerdo con la
  <a href="/es/docs/Web/HTML/Reference/Elements/blockquote">
    <cite>página blockquote de MDN</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    El <strong>elemento HTML <code>&lt;blockquote&gt;</code></strong> (o
    <em>elemento de cita en bloque de HTML</em>) indica que el texto contenido
    es una cita extensa.
  </p>
</blockquote>

<p>
  El elemento de cita — <code>&lt;q&gt;</code> — se
  <q cite="https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/q">
    utiliza para citas breves que no requieren saltos de párrafo.
  </q>
  — <a href="/es/docs/Web/HTML/Reference/Elements/q"><cite>página q de MDN</cite></a>.
</p>
```

Las citas se muestran en cursiva de forma predeterminada.

{{EmbedLiveSample('Citas_2', '100%', '179px')}}

### ¿Quién dijo eso? Práctica de citas en bloque

¡Es hora de otra tarea! En este ejemplo nos gustaría que:

1. Hagas clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Conviertas el párrafo del medio en una cita en bloque, que incluya un atributo `cite`.
3. Conviertas "La necesidad de eliminar el diálogo interno negativo" en el tercer párrafo en una cita en línea, e incluyas un atributo `cite`.
4. Envuelvas el título de cada fuente en etiquetas `<cite>` y conviertas cada una en un enlace a esa fuente.

Las fuentes de citación que necesitas son:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` para la cita de Confucio
- `http://example.com/affirmationsforpositivethinking` para "La necesidad de eliminar el diálogo interno negativo".

Si cometes un error, puedes limpiar tu trabajo con el botón _Reset_ del MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del bloque de código.

```html live-sample___advanced-text-1
<p>
  Hola y bienvenido a mi página de motivación. Como dice el sitio de citas de
  Confucio:
</p>
<p>No importa qué tan lento vayas, siempre que no te detengas.</p>
<p>
  También me encanta el concepto de pensamiento positivo, y La necesidad de
  eliminar el diálogo interno negativo (como se menciona en Afirmaciones para el
  pensamiento positivo.)
</p>
```

{{ EmbedLiveSample('advanced-text-1', "100%", 200) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu HTML terminado debería verse así:

```html
<p>
  Hola y bienvenido a mi página de motivación. Como dice el
  <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"
    ><cite>sitio de citas de Confucio</cite></a
  >:
</p>

<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">
  <p>No importa qué tan lento vayas, siempre que no te detengas.</p>
</blockquote>

<p>
  También me encanta el concepto de pensamiento positivo, y
  <q cite="http://example.com/affirmationsforpositivethinking"
    >La necesidad de eliminar el diálogo interno negativo</q
  >
  (como se menciona en
  <a href="http://example.com/affirmationsforpositivethinking"
    ><cite>Afirmaciones para el pensamiento positivo</cite></a
  >.)
</p>
```

</details>

## Abreviaturas

Otro elemento bastante común que encontrarás mientras exploras la Web es {{htmlelement("abbr")}} — se usa para envolver una abreviatura o un acrónimo. Cuando incluyas cualquiera de los dos, proporciona la expansión completa del término en texto plano la primera vez que lo uses, junto con `<abbr>` para marcar la abreviatura. Esto ofrece una pista a los agentes de usuario sobre cómo anunciar o mostrar el contenido, a la vez que informa a todos los usuarios qué significa la abreviatura.

Si proporcionar la expansión además de la abreviatura tiene poco sentido, y la abreviatura o el acrónimo es un término bastante reducido, proporciona la expansión completa del término como el valor del atributo [`title`](/es/docs/Web/HTML/Reference/Global_attributes/title):

### Ejemplo de abreviatura

Veamos un ejemplo.

```html
<p>
  Usamos <abbr>HTML</abbr> (Hypertext Markup Language) para estructurar nuestros
  documentos web.
</p>

<p>
  Creo que el <abbr title="Reverendo">Rev.</abbr> Green lo hizo en la cocina con
  la motosierra.
</p>
```

Estos se representan de la siguiente manera:

{{EmbedLiveSample('Ejemplo_de_abreviatura', '100%', '90')}}

> [!NOTE]
> Versiones anteriores de HTML también incluían soporte para el elemento {{htmlelement("acronym")}}, pero se eliminó de la especificación de HTML en favor de usar `<abbr>` para representar tanto abreviaturas como acrónimos. No se debe usar `<acronym>`.

### Marquemos una abreviatura

Para esta tarea de aprendizaje, nos gustaría que marques una abreviatura.

1. Haz clic en **"Play"** en el bloque de código de abajo para editar el ejemplo en el MDN Playground.
2. Marca las abreviaturas incluidas usando el HTML apropiado. Siéntete libre también de reemplazarlas por una propia e intenta marcarla en su lugar.

Si cometes un error, puedes limpiar tu trabajo con el botón _Reset_ del MDN Playground. Si te quedas realmente atascado, puedes ver la solución debajo del bloque de código.

```html-nolint live-sample___advanced-text-2
<p>La NASA sin duda hace un trabajo interesante.</p>

<p>¡El nuevo diseño de la interfaz de usuario es LGTM!</p>
```

{{ EmbedLiveSample('advanced-text-2', "100%", 90) }}

<details>
<summary>Haz clic aquí para mostrar la solución</summary>

Tu HTML terminado debería verse algo como el siguiente fragmento de código:

```html
<p>
  <abbr>NASA</abbr> (la Administración Nacional de Aeronáutica y del Espacio)
  sin duda hace un trabajo interesante.
</p>

<p>
  ¡El nuevo diseño de la interfaz de usuario es
  <abbr title="Se ve bien para mí">LGTM</abbr>!
</p>
```

- Podría decirse que NASA debería expandirse en el texto la primera vez que se menciona, ya que es un dato útil para que todos lo tengan disponible en el texto.
- Los acrónimos como "LGTM", por otro lado, se escriben únicamente para ahorrar espacio y tiempo, así que no tendría sentido escribirlo también completo; de ahí que la expansión se ponga en el atributo `title`. En una aplicación real, probablemente no harías esto a mano — usarías algún tipo de script para agregarlo automáticamente a los términos conocidos.

</details>

## Marcar la información de contacto

HTML tiene un elemento para marcar la información de contacto — {{htmlelement("address")}}. Este envuelve tu información de contacto, por ejemplo:

```html
<address>Chris Mills, Manchester, The Grim North, Reino Unido</address>
```

También podría incluir un marcado más complejo, y otras formas de información de contacto, por ejemplo:

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    Reino Unido
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

Ten en cuenta que algo como esto también estaría bien, si la página enlazada contuviera la información de contacto:

```html
<address>
  Página escrita por <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> El elemento {{htmlelement("address")}} solo debe usarse para proporcionar información de contacto del documento contenido por el elemento {{htmlelement("article")}} o {{htmlelement("body")}} más cercano. Sería correcto usarlo en el pie de página de un sitio para incluir la información de contacto de todo el sitio, o dentro de un artículo para los datos de contacto del autor, pero no para marcar una lista de direcciones sin relación con el contenido de esa página.

## Superíndice y subíndice

En ocasiones necesitarás usar superíndice y subíndice al marcar elementos como fechas, fórmulas químicas y ecuaciones matemáticas para que tengan el significado correcto. Los elementos {{htmlelement("sup")}} y {{htmlelement("sub")}} se encargan de esta tarea. Por ejemplo:

```html
<p>Mi cumpleaños es el 25.<sup>º</sup> de mayo de 2001.</p>
<p>
  La fórmula química de la cafeína es
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>Si x<sup>2</sup> es 9, x debe ser igual a 3 o -3.</p>
```

La salida de este código se ve así:

{{ EmbedLiveSample('Superíndice_y_subíndice', '100%', 160) }}

## Representación del código informático

Hay varios elementos disponibles para marcar código informático usando HTML:

- {{htmlelement("code")}}: para marcar fragmentos genéricos de código informático.
- {{htmlelement("pre")}}: para conservar los espacios en blanco (generalmente en bloques de código) — si usas sangría o espacios en blanco adicionales dentro de tu texto, los navegadores los ignorarán y no los verás en tu página renderizada. Sin embargo, si envuelves el texto en etiquetas `<pre></pre>`, tus espacios en blanco se representarán de forma idéntica a como los ves en tu editor de texto.
- {{htmlelement("var")}}: para marcar específicamente nombres de variables.
- {{htmlelement("kbd")}}: para marcar entradas de teclado (y de otros tipos) introducidas en el ordenador.
- {{htmlelement("samp")}}: para marcar la salida de un programa de ordenador.

Veamos algunos ejemplos de estos elementos y cómo se usan para representar código informático:

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('¡Auch, deja de molestarme!');
}</code></pre>

<p>
  No deberías usar elementos de presentación como <code>&lt;font&gt;</code> y
  <code>&lt;center&gt;</code>.
</p>

<p>
  En el ejemplo de JavaScript anterior, <var>para</var> representa un elemento
  de párrafo.
</p>

<p>
  Selecciona todo el texto con <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.
</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 bytes de datos
64 bytes de 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

El código anterior se representa así:

{{ EmbedLiveSample('Representación_del_código_informático','100%',350) }}

## Marcar horas y fechas

HTML también proporciona el elemento {{htmlelement("time")}} para marcar horas y fechas en un formato legible por la máquina. Por ejemplo:

```html
<time datetime="2016-01-20">20 de enero de 2016</time>
```

¿Por qué es esto útil? Bueno, hay muchas formas diferentes en que los humanos escriben las fechas. La fecha anterior se podría escribir como:

<!-- markdownlint-disable MD033 -->

- 20 de enero de 2016
- 20th January 2016
- Ene 20 2016
- 20/01/16
- 01/20/16
- El 20 del mes que viene
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- Y así sucesivamente.

<!-- markdownlint-enable MD033 -->

Pero estas diferentes formas no las pueden reconocer fácilmente las computadoras — ¿qué pasaría si quisieras tomar automáticamente las fechas de todos los eventos de una página e insertarlas en un calendario? El elemento {{htmlelement("time")}} te permite adjuntar una fecha/hora inequívoca y legible por la máquina para este propósito.

El ejemplo básico anterior solo proporciona una fecha simple legible por la máquina, pero hay muchas otras opciones posibles, por ejemplo:

```html
<!-- Fecha simple estándar -->
<time datetime="2016-01-20">20 de enero de 2016</time>
<!-- Solo año y mes -->
<time datetime="2016-01">Enero de 2016</time>
<!-- Solo mes y día -->
<time datetime="01-20">20 de enero</time>
<!-- Solo hora, horas y minutos -->
<time datetime="19:30">19:30</time>
<!-- ¡También puedes hacer segundos y milisegundos! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Fecha y hora -->
<time datetime="2016-01-20T19:30">7.30pm, 20 de enero de 2016</time>
<!-- Fecha y hora con desplazamiento de zona horaria -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 de enero de 2016 son las 8.30pm en Francia
</time>
<!-- Llamar a un número de semana específico -->
<time datetime="2016-W04">La cuarta semana de 2016</time>
```

## Resumen

Esto marca el final de nuestro estudio de la semántica de texto HTML menos conocida. Lo que has visto durante este curso no es una lista exhaustiva de elementos de texto HTML — quisimos tratar de cubrir los aspectos esenciales, y algunos de los más comunes que verás en la naturaleza.

A continuación, te daremos algunas pruebas que puedes usar para comprobar qué tan bien has entendido y retenido la información que te hemos proporcionado sobre las características de texto HTML menos conocidas.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}
