---
title: Marcando una Carta
slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

Todos aprendemos a escribir una carta más tarde o más temprano; es también práctico practicar con nuestras habilidades para dar forma a los textos. En esta prueba deberás demostrar tus habilidades para dar forma a textos, incluyendo enlaces, además pondremos a prueba tu familiaridad con algunos contenidos de encabezamiento `<head>` en HTML.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Antes de intentar este examen deberías haber trabajado los artículos
        <a href="/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Getting started with HTML</a
        >,
        <a
          href="/es/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
          >What's in the head? Metadata in HTML</a
        >,
        <a
          href="/es/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML text fundamentals</a
        >,
        <a
          href="/es/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Creating hyperlinks</a
        >, y
        <a
          href="/es/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting"
          >Advanced text formatting</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivos:</th>
      <td>
        Probar las habilidades básicas y avanzadas de formateo de texto e
        hyperlinks, y el conocimiento de los encabezamientos en HTML.
      </td>
    </tr>
  </tbody>
</table>

## Punto de partida

Para comenzar esta prueba, deberemos copiar [el texto que deberemos trabajar](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt), y el [CSS que necesitaremos incluir](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/css.txt) en nuestro HTML. Crearemos un archivo nuevo `.html` usando nuestro editor de texto (o alternativamente usaremos otros como [JSBin](http://jsbin.com/) o [Glitch](https://glitch.com/) para hacer nuestra prueba).

## Resumen del proyecto a desarrollar

En este proyecto tu tarea será publicar una carta que debe estar alojada en la intranet de una universidad. La carta es la respuesta de un compañero investigador a un posible estudiante de postgrado en relación a su deseo de trabajar en la universidad.

Semánticas de bloque/estructurales:

- Estructura el documento completo incluyendo los elementos (doctype), {{htmlelement("html")}}, {{htmlelement("head")}} y {{htmlelement("body")}}.
- Incluye los elementos correspondientes de marcado en la carta tales como párrafos y títulos, a excepción de los siguientes. Hay un título principal (la línea que comienza por "Re:") y tres títulos secundarios.
- Las fechas de comienzo de los semestres, las materias y los bailes exóticos deben ser marcados con los correspondientes tipos de lista.
- Colocar las dos direcciones dentro de elementos {{htmlelement("address")}}. Cada línea de la dirección debe comenzar en una línea nueva, pero no en un párrafo nuevo.

Semánticas intralínea:

- Los nombres de remitente y destinatario (también "Tel" e "Email") deben ser marcado con importancia (strong).
- Deberás usar los elementos apropiados en las cuatro fechas contenidas en el documento para que puedan ser leidas por los motores de lectura automática.
- La primera dirección y la primera fecha en la carta deben ser asignadas a un atributo de clase llamado "sender-column"; el código CSS lo añadirás posteriormente para que quede bien alineado, como debe ser en un formato de carta clásico.
- Deberás utilizar el elemento apropiado para los cinco acrónimos/abreviaciones contenidos en el texto principal, proporcionándoles las extensiones correspondientes.
- Marca apropiadamente los seis sub/superíndices.
- Los símbolos de los grados, los mayor que y los símbolos de multiplicar deben ser marcados usando las referencias correctas.
- Marca al menos dos palabras en el texto con fuerte importancia/énfasis.
- Hay dos lugares donde deberíamos añadir hyperlinks; añádelos con títulos. Como sitio donde apuntan simplemente usa: `http://example.com`.
- Marca con el elemento apropiado el lema de la universidad y la cita del autor.

El encabezamiento del documento:

- El juego de caracteres del documento deberá ser utf-8 usando una etiqueta meta adecuada.
- El autor de la carta debe estar especificado con la etiqueta meta correspondiente.
- El CSS proporcionado deberá estar incluido dentro de la etiqueta adecuada.

## Pistas y recomendaciones

- Utiliza el [Validador de HTML W3C HTML](https://validator.w3.org/) para validar tu HTML; recibirás puntos de bonificación si se valida.
- No necesitas conocer CSS para hacer este ejercicio; solo debes poner el CSS proporcionado en el elemento HTML adecuado.

## Ejemplo

La siguiente captura de pantalla muestra un ejemplo de cómo se vería la carta después de marcarla.

![](letter-update.png)

## Evaluación

Si estás haciendo esta prueba como parte de un curso organizado, deberías entregar tu trabajo al profesor para que lo corrija. Si estás auto-aprendiendo puedes conseguir la guía de corrección fácilmente pidiendola en el [Hilo del area de aprendizaje](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294), o en el canal IRC de [#mdn](irc://irc.mozilla.org/mdn) en [Mozilla IRC](https://wiki.mozilla.org/IRC). Intenta hacerlo primero — no ganarás nada haciendo trampas.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}
