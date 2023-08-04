---
title: Optimizar sus páginas para análisis especulativo
slug: Glossary/Speculative_parsing
---

Tradicionalmente en los navegadores el analizador de HTML corre en el hilo de ejecución principal y se queda bloqueado después de una etiqueta \</script> hasta que el código se haya recuperado y ejecutado. El analizador de HTML de Firefox 4 y posteriores soporta análisis especulativo fuera del hilo de ejecución principal. Este analiza anticipadamente mientras el codigo está siendo descargado y ejecutado. Como en Firefox 3.5 y 3.6, el analizador de HTML es el que inicia la carga especulativa de código, las hojas de estilos y las imagenes que va encontrando en el flujo de la página. Sin embargo en Firefox 4 y posteriores el analizador de HTML también ejecuta el algoritmo especulativo de la construcción del árbol HTML. La ventaja es que cuando lo especulado tiene exito, no hay necesidad de reanalizar la parte del archivo de entrada que ya fue analizada junto la descarga de código, hojas de estilo y las imágenes. La desventaja es que se ha realizado un trabajo inútil cuando la especulación fracasa.

Este documento le ayuda a evitar este tipo de situaciones que hacen que la especulación falle y ralentize la carga de la página.

## Haciendo cargas especulativas exitosas

Hay solo una regla para hacer cargas especulativas exitosas en scripts enlazados, hojas de estilo e imagenes:

- Si usted usa el elemento \<base> para anular la base URI de su pagina, ponga el elemento en la parte no-escrita de el documento. No la añada via document.write() o document.createElement().

## Evitando perder la salida del generador de arbol

La generación de árbol especulativo falla cuando `document.write()` cambia el estado del generador de árbol de tal manera que el estado especulativo después del tag `</script>` no se mantiene cuando todo el contenido es inertado por `document.write()` ha sido analizado. Sin embargo, sólo usos inusuales de `document.write()` causa problemas. Aquí están las cosas a evitar:

- No escriba árboles desbalanceados. `<script>document.write("<div>");</script>` está mal. `<script>document.write("<div></div>");</script>` es correcto.
- No escriba un token sin finalizar. `<script>document.write("<div></div");</script>` esta mal.
- No termine con un carater de retorno de carro. `<script>document.write("Hello World!\r");</script>` está mal. `<script>document.write("Hello World!\n");</script>` es correcto.
- Note que escribiendo etiquetas balanceadas pueden causarse que se creen otras etiquetas desbalanceadas. Ej. `<script>document.write("<div></div>");</script>` dentro del elemento `head` será interpretado como `<script>document.write("</head><body><div></div>");</script>` el cual está desbalanceado.
- No formatee parte de una tabla. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` está mal. Sin embargo, `<script>document.write("<table><tr><td>Hello World!</td></tr></table>");</script>` está correcto.
- HAGA: document.write dentro de otro elemento de formateo.
