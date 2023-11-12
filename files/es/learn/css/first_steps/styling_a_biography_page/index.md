---
title: Usa tu nuevo conocimiento
slug: Learn/CSS/First_steps/Styling_a_biography_page
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Con las cosas que has aprendido en las últimas lecciones, puedes darle formato a documentos de texto simple utilizando CSS para agregar tu propio estilo a ellos. Esta evaluación te da una posibilidad de hacer eso.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Antes de intentar esta evaluación, deberías haber trabajado a través del
        módulo de CSS básico, y también comprender HTML básico (estudia la
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML"
          >Introducción a HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Utilizar algún CSS y probar conocimiento recién adquirido.</td>
    </tr>
  </tbody>
</table>

## Punto de partida

Puedes trabajar en el editor en vivo más abajo, o puedes descargar el punto de partida para trabajar con tu propio editor. Esta es una página HTML, con el inicio del CSS en el `<head>` del documento. Si prefieres, puedes mover este CSS a un archivo separado cuando crees el ejemplo en tu computador. Alternativamente, puedes usar una herramienta en línea como [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), o [Glitch](https://glitch.com/) para trabajar en las tareas.

> **Nota:** Si te atascas, pide ayuda — mira la sección [Evaluación o ayuda adicional](#Evaluación_o_ayuda_adicional) al final de esta página.

## Trabajando con CSS

Los siguientes ejemplos muestran una biografía, que ha sido estilizada usando CSS. Las propiedades CSS que se han utilizado son las siguientes - cada una enlaza a su página de propiedades en MDN, que te entregará más ejemplos de su uso:

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("text-decoration")}}

Se ha usado una mezcla de selectores, elementos de estilo como `<h1>` y `<h2>`, y también una clase para el título del trabajo.

Usa CSS para cambiar el aspecto de esta biografía, cambiando los valores de las propiedades iniciales.

1. Coloca en rosado el nivel `<h1>`, usando el color CSS `hotpink`.
2. Da al encabezado un {{cssxref("border-bottom")}} de 10px con puntos (`dotted`), que use el color CSS `purple`.
3. Coloca en cursiva el `<h2>`.
4. Al `ul` utilizado para los detalles de contacto un {{cssxref("background-color")}} `#eeeeee`, y un {{cssxref("border")}} de `5px solid purple`. Usa algo de {{cssxref("padding")}} para empujar el texto lejos del borde.
5. Cambia los enlaces a verde cuando pase el cursor sobre ellos.

Deberías conseguir algo parecido a esta página:

![Captura de pantalla de cómo debería verse el ejemplo después de completar la evaluación.](learn-css-basics-assessment.png)

Posteriormente intenta buscar algunas propiedades no mencionadas en esta página en la [referencia de CSS de MDN](/es/docs/Web/CSS/Reference) y ¡arriésgate!.

Recuerda que no existen respuestas equivocadas acá - En esta etapa en tu aprendizaje puedes tener un poco de diversión.

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

## Evaluación o ayuda adicional

Si deseas que tu trabajo sea evaluado, o estás atorado y quieres solicitar ayuda:

1. Pon tu trabajo en un editor en línea con capacidad de compartir como [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), o [Glitch](https://glitch.com/).
2. Escribe una publicación solicitando evaluacion y/o ayuda en el [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Tu publicación debería incluir:

   - Un título descriptivo como "Requiero evaluacion para Primeros pasos en CSS".
   - Detalles de lo que ya has intentado, y que te gustaría que hiciéramos, por ejemplo, si estas atascado y necesitas ayuda, o quieres una evaluación.
   - Un enlace al ejemplo que quieres que sea evaluado o por el que necesitas ayuda en un editor en linea con capacidad de compartir (como se mencionó en el paso 1 más arriba). Esta es una buena práctica - Es muy dificil ayudar a alguien con un problema de codificación si no puedes ver su código.
   - Un enlace a la tarea o página de evaluacion actual, para que podamos encontrar la pregunta con la cual necesitas ayuda.

## ¿Qué sigue?

Felicitaciones por completar este primer modulo!. Deberías tener un buen entendimiento general de CSS, y ser capaz de comprender bastante de los que está sucediendo en una hoja de estilo. En el módulo siguiente, [bloques de construccion CSS](/es/docs/Learn/CSS/Building_blocks), revisaremos en profundidad algunas áreas clave.

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
