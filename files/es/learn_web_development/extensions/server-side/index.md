---
title: Programación lado servidor
slug: Learn_web_development/Extensions/Server-side
original_slug: Learn/Server-side
---

{{LearnSidebar}}

El tema **_Páginas Dinámicas – Programación lado servidor_** contiene una serie de módulos en los que se enseña como crear sitios web dinámicos, sitios que entregan información personalizada como respuesta a las peticiones HTTP. El modulo ofrece una introducción generica a la programación de lado servidor además de guías para principiantes sobre como usar frameworks como Django (Python) y Express(Node.js/JavaScript) para crear aplicaciones web basicas.

La mayoría de los principales sitios web utilizan alguna forma de tecnología de lado servidor para presentar dinámicamente datos cuando sean requeridos. Por ejemplo, imagina cuántos productos están disponibles en Amazon e imagina cuántas entradas han sido escritas en Facebook. Presentar todo esto usando páginas estáticas completamente diferentes sería completamente ineficiente, por lo que estos sitios en lugar de ello presentan plantillas estáticas (construidas usando [HTML](/es/docs/Learn_web_development/Core/Structuring_content), [CSS](/es/docs/conflicting/Learn_web_development/Core/Styling_basics_b957eec7deaf1ea2b20721d6838ea6e1), y [JavaScript](/es/docs/conflicting/Learn_web_development/Core/Scripting_41cf930b8cfd2b83c76f8086a5e24792)), y actualizan dinámicamente los datos presentados dentro de esas plantillas cuando se necesiten, ej. cuando quieres ver un producto diferente en Amazon.

En el mundo moderno del desarrollo web, el aprendizaje del desarrollo de lado servidor es altamente recomendado.

## Itinerario de aprendizaje

Empezar con la programación lado servidor es normalmente más fácil que con el desarrollo del lado cliente, ya que los sitios web dinámicos tienden a efectuar un montón de operaciones muy similares (recuperar datos de una base y presentarlos en una página, validar datos introducidos por los usuarios y guardarlos en la base, comprobar los permisos e inicios de sesión de los usuarios, etc.), y se construyen usando web frameworks que hacen muy facilmente éstas y otras operaciones comunes en un servidor web.

Un conocimiento básico de conceptos de programación (o de un lenguaje de programación en particular) es útil, pero no imprescindible. Igualmente, no hace falta ser un experto en codificación lado cliente, pero un conocimiento básico te ayudará a trabajar mejor con los desarrolladores creando tu "front-end" de web lado cliente.

Necesitarás entender "cómo tabaja la web". Te recomendamos que leas primero los siguientes temas:

- [¿Qué es un servidor web?](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [¿Qué software necesito para construir un sitio web?](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- [¿Cómo subo ficheros a un servidor web?](/es/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server)

Con ese conocimiento básico estarás preparado para recorrer el camino a través de los módulos de esta sección.

## Módulos

Este tema contiene los siguientes módulos. Deberías comenzar por el primer módulo y a continuación ir a uno de los módulos siguientes, que muestran cómo trabajar con dos lenguajes muy populares de lado servidor usando los web frameworks adecuados.

- [Primeros pasos en la programación lado servidor de sitios web](/es/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : Este módulo proporciona información acerca de la programación lado servidor de sitios web sin adentrarse en la tecnología de los servidores, incluyendo respuestas a las preguntas a cuestiones fundamentales acerca de la programación de lado servidor — "¿qué es?", "¿en qué se diferencia de la programación de lado cliente?" y "¿porqué es tan útil?" — y una visión general de algunos de los web frameworks de lado servidor más populares e indicaciones de cómo seleccionar el más adecuado para tu sitio. Finalmente proporcionaremos una sección de introducción a la seguridad en servidores web.
- [Django Web Framework (Python)](/es/docs/Learn_web_development/Extensions/Server-side/Django)
  - : Django es un web framework extremadamete popular y con funcionalidad completa, escrito en Python. El módulo explica porqué Django es tan buen framework de servidor web, cómo configurar un entorno de desarrollo y cómo realizar tareas comunes con él.
- [Express Web Framework (Node.js/JavaScript)](/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : Express es un web framework popular, escrito en JavaScript y hospedado dentro del entorno de ejecución en tiempo real "node.js". El módulo explica algunos de los beneficios clave de este framework, cómo configurar tu entorno de desarrollo y cómo realizar tareas comunes de desarrollo y despliegue web.

## Ver también

- [Node servidor sin framework](/es/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)
  - : Este artículo proporciona un servidor de ficheros estático, construido con Node.js puro, para aquellos de vosotros que no os apetezca usar un framework.
