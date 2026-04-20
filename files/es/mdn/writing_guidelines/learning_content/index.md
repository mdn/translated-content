---
title: Directrices de escritura para aprender desarrollo web
short-title: Contenido de aprendizaje
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

La sección [Aprender desarrollo web](/es/docs/Learn_web_development) de MDN está dirigida específicamente a personas que están aprendiendo los conceptos básicos fundamentales del desarrollo web y, por lo tanto, requiere un enfoque diferente al resto del contenido de MDN. Este artículo proporciona directrices para escribir contenido de aprendizaje.

## Audiencia objetivo

La audiencia objetivo de MDN Learn Web Development (también conocido como Learn) son personas que no son desarrolladoras front-end expertas; esto incluye a estudiantes, desarrolladoras web junior o en formación, aficionadas y profesores que buscan orientación sobre las mejores prácticas para enseñar a sus estudiantes.

## Cobertura de temas

Learn proporciona una ruta estructurada que contiene resultados de aprendizaje, diseñada para enseñar las habilidades y prácticas fundamentales que prepararán a los lectores para ser desarrolladoras front-end exitosas. Las personas que aprenden pueden confiar en ella para proporcionar la información correcta para sus estudios, y las educadoras pueden confiar en ella para proporcionar los resultados correctos para basar sus cursos y planes de estudio en ellos.

Como resultado, tenemos como objetivo limitar estrictamente el alcance de Learn a:

- Configuración, habilidades blandas y conocimientos de fondo en nuestros [módulos de introducción](/es/docs/Learn_web_development/Getting_started).
- Las tecnologías fundamentales necesarias al comienzo del viaje de una desarrolladora web en nuestros [módulos principales](/es/docs/Learn_web_development/Core).
- Temas de "segunda ola" que representan los siguientes pasos útiles para las relativas principiantes para avanzar una vez que hayan dominado los módulos principales, en nuestros [módulos de extensiones](/es/docs/Learn_web_development/Extensions).

Learn no está destinado a ser el lugar en MDN para contenido introductorio sobre _todos_ los temas. Esto significa que temas especializados como MathML y Web Games, y temas avanzados o especializados como expresiones regulares, pruebas de rendimiento, WebRTC y WebGPU, no pertenecen a Learn.

Si no ve un tema cubierto en Learn y cree que debería estar cubierto, no intente simplemente agregarlo; discútalo con nosotros primero (consulte [Sugerir contenido](/es/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Enfoque

Para crear y actualizar contenido de desarrollo web de MDN Learn, debe seguir el mismo enfoque que para el resto de MDN, en muchos aspectos. Debe seguir la misma [guía de estilo de escritura](/es/docs/MDN/Writing_guidelines/Writing_style_guide), [estilo de código](/es/docs/MDN/Writing_guidelines/Code_style_guide) y [técnicas](/es/docs/MDN/Writing_guidelines/Howto) generales.

Sin embargo, hay algunas diferencias:

- **Estilo de tutorial**: La mayor parte del contenido de MDN es una mezcla de material de referencia y guías; Learn, por otro lado, está destinado a proporcionar tutoriales prácticos. No tenemos una plantilla estricta para cada página, pero deben escribirse de una manera que guíe al lector de la mano, a través de una combinación de secciones paso a paso y secciones "Pruébelo". Estas deben instruir a los lectores a sumergirse, probar cosas y comenzar a escribir código. Vea la sección "Pruébelo" en la parte inferior de nuestra información del [motor de búsqueda](/es/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#motor_de_búsqueda), por ejemplo. Estos se crean usando el siguiente markdown:

  ```md
  > [!CALLOUT]
  >
  > **Pruébelo**
  >
  > Pruebe esto...
  ```

- **Desafíos**: El contenido de Learn incluye desafíos periódicamente para probar que el lector comprende los temas que ha aprendido antes de pasar al siguiente artículo. Actualmente, estos se escriben en algunos estilos diferentes, por ejemplo, consulte [Desafío: Estructurar una página de contenido](/es/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) y [Pon a prueba tus habilidades: Imágenes HTML](/es/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images), pero tenemos la intención de mejorar la consistencia y la experiencia de estos en el futuro.
- **Densidad y exhaustividad**: El contenido de MDN generalmente se conoce por su exhaustividad. El contenido de Learn específicamente no es tan exhaustivamente completo como el resto del contenido de MDN. Es menos denso y más suave en su enfoque, para permitir que las personas que aprendan adquieran habilidades útiles y progresen regularmente, sin sentirse abrumadas. Pueden profundizar más adelante. El contenido de Learn puede omitir detalles para proporcionar una experiencia de aprendizaje más cómoda, siempre que no enseñe al lector nada engañoso o una mala práctica.
- **Resultados de aprendizaje estables**: Los resultados de aprendizaje en la parte superior de cada tutorial proporcionan un resumen de lo que enseña cada tutorial, y juntos proporcionan un plan de estudios estructurado para el desarrollo web front-end. Es vital que los resultados de aprendizaje y lo que se enseña sigan siendo estables y sincronizados; de lo contrario, el contenido no puede confiable como base para el aprendizaje formal (por ejemplo, cursos educativos o certificaciones). Como tal, los cambios en los resultados de aprendizaje deben ocurrir lentamente y no sin una buena razón. Si intenta agregar contenido que no está cubierto en los resultados de aprendizaje asociados (o viceversa), su solicitud de extracción se cerrará. [Haga una sugerencia](/es/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) primero.

> [!NOTE]
> Mantenemos un [registro de cambios](/es/docs/Learn_web_development/Changelog) que detalla cualquier cambio significativo realizado en los resultados de aprendizaje, para que las educadoras puedan mantener cualquier recurso basado en MDN Learn.

## Enlaces de socios y elementos integrados

Como se describe en nuestras directrices de [Enlaces externos](/es/docs/MDN/Writing_guidelines/Writing_style_guide#external_links), MDN generalmente no permite enlaces externos (o elementos integrados) que parezcan respaldar productos o servicios comerciales o apunten a contenido con pago. Esto es para mitigar el riesgo de que el contenido de MDN pierda confianza y sea menos útil debido a la inundación de enlaces spam.

El contenido de Learn de MDN tiene algunas excepciones a esto. Permitimos enlaces a contenido externo (que puede tener pago) de sitios de socios de confianza específicos. Estos son sitios con los que MDN ha construido una relación de confianza, examinando a fondo su calidad, ética y compromiso con los estándares web y las mejores prácticas, y ayudándoles a actualizar su contenido cuando no cumple con nuestros estándares. Confiamos en que no cambiarán sus enlaces sin previo aviso y confiamos en que su contenido es seguro para vincular.

El propósito de estos enlaces de socios es el siguiente:

- Proporcionar acceso a contenido de apoyo que se basa en lo que se enseña en nuestras páginas.
- Proporcionar acceso a experiencias de aprendizaje multimedia (videos, presentaciones, otro contenido interactivo) que los equipos de contenido de MDN no tienen los recursos para producir. Nos centramos en el texto en MDN, pero las personas a menudo quieren diferentes enfoques de aprendizaje.
- Generar ingresos a través de enlaces de afiliados a opciones de contenido pago, que podemos invertir para hacer que MDN sea aún mejor.

Sin embargo, nosotros:

- No agregaremos estos enlaces de una manera que comprometa la integridad del contenido de MDN y sea abiertamente spam; solo donde sentimos que son genuinamente útiles.
- Siempre nos aseguraremos de que haya una opción gratuita disponible junto a cualquier cosa que tenga pago. En muchos casos, hemos logrado convencer a nuestros socios de que pongan el contenido disponible gratuitamente que antes tenía pago.
- Marcaremos claramente el contenido de los socios con una etiqueta "socio de aprendizaje de MDN", para que pueda distinguirlos claramente de otros enlaces.

### Orden de enlaces "Véase también"

En las páginas de contenido de Learn, los enlaces "Véase también" que aparecen en la parte inferior deben aparecer en el siguiente orden:

1. Enlaces internos.
2. Enlaces a contenido gratuito.
3. Enlaces a contenido mixto gratuito/con pago.

### Socios educativos actuales

- [Scrimba](https://scrimba.com/home)
