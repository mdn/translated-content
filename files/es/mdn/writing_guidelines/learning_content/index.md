---
title: Pautas de escritura para Aprende desarrollo web
short-title: Contenido educativo
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

La sección [Aprende desarrollo web](/es/docs/Learn_web_development) de MDN está destinada específicamente a las personas que están aprendiendo los fundamentos básicos del desarrollo web y, por lo tanto, requiere un enfoque diferente del resto del contenido de MDN. Este artículo proporciona pautas para redactar contenido didáctico.

## Público objetivo

El público al que está dirigido MDN Aprende desarrollo web (también conocido como "Aprende") son personas que no son expertas en desarrollo front-end; esto incluye a estudiantes, desarrolladores web principiantes (junior) o aprendices (trainee), aficionados y docentes que buscan orientación sobre las mejores prácticas para saber qué enseñar a sus alumnos.

## Temas tratados

"Aprende" proporciona una ruta estructurada que incluye objetivos de aprendizaje, diseñada para enseñar las habilidades y prácticas fundamentales que prepararán a los lectores para convertirse en desarrolladores front-end exitosos. Los estudiantes pueden confiar en que la información proporcionada es correcta para sus estudios, y los educadores pueden confiar en que los objetivos proporcionados son correctos para basar en ellos sus cursos y planes de estudio.

Por lo tanto, nuestro objetivo es limitar estrictamente el alcance del área de aprendizaje a:

- configuración, habilidades blandas y conocimientos previos en nuestros [módulos de introducción](/es/docs/Learn_web_development/Getting_started).
- Las tecnologías fundamentales requeridas al comienzo de la trayectoría de un desarrollador web en nuestros [módulos básicos](/es/docs/Learn_web_development/Core).
- Temas de la "segunda fase" que constituyen pasos útiles para que los principiantes avancen luego de haber dominado los módulos básicos, en nuestros [módulos de extensión](/es/docs/Learn_web_development/Extensions).

El área de aprendizaje no pretende ser el espacio de MDN dedicado a contenidos introductorios sobre _todos_ los temas. Esto significa que los temas especializados como MathML y Web Games, así como los temas avanzados o específicos, como expresiones regulares, pruebas de rendimiento, WebRTC y WebGPU, no tienen lugar en el área de aprendizaje.

Si no ves un tema tratado en el área de aprendizaje y piensas que debería cubrirse, no intentes simplemente añadirlo; coméntalo primero con nosotros (consulta [Sugerir contenido](/es/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Enfoque

Para crear y actualizar contenido en el área de aprendizaje de desarrollo web de MDN debes seguir el mismo enfoque que para el resto de MDN, en todos los aspectos. Debes seguir la misma [guía de estilo de redacción](/es/docs/MDN/Writing_guidelines/Writing_style_guide), el mismo [estilo de código](/es/docs/MDN/Writing_guidelines/Code_style_guide) y las mismas [técnicas](/es/docs/MDN/Writing_guidelines/Howto).

Sin embargo, hay algunas diferencias:

- **Estilo de los tutoriales**: La mayor parte del contenido de MDN es una combinación de material de referencia y guías; por otro lado, el área de aprendizaje tiene como objetivo proporcionar tutoriales prácticos. No tenemos una plantilla estricta para cada página, pero deben estar redactadas de manera que guíen al lector paso a paso, mediante una combinación de secciones detalladas y secciones del tipo "probalo tú mismo". Estas instrucciones deberían animar a los lectores a lanzarse, probar cosas nuevas y empezar a escribir código. Consulte la sección "probalo tú mismo" al final de nuestra información sobre [motores de búsqueda](/es/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine). Estos se crean usando el siguiente formato Markdown:

  ```md
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Desafíos**: El contenido del área de aprendizaje incluye desafíos periódicos para comprobar que el lector ha comprendido los temas que ha estudiado antes de pasar al siguiente artículo. Actualmente están redactados en varios estilos diferentes, por ejemplo, consulta [Desafío: Estructurar una página de contenido](/es/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) y [Pon a prueba tus habilidades: Imágenes HTML](/es/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images), pero tenemos la intención de mejorar la coherencia y la experiencia de estos en el futuro.
- **Densidad y exhaustividad**: El contenido de MDN es conocido, generalmente, por su exhaustividad. El contenido del área de aprendizaje, en cambio, no es completamente exhaustivo como el resto del contenido de MDN. Es menos denso y tiene un enfoque más accesible, que permite a los estudiantes adquirir habilidades útiles y avanzar de forma constante, sin sentirse abrumados. Más adelante podrán profundizar en el tema. El contenido del área de aprendizaje puede omitir detalles para proporcionar una experiencia de aprendizaje más confortable, siempre y cuando no enseñe al lector nada que pueda llevar a malentendidos o constituya una mala práctica.
- **Resultados de aprendizaje estables**: Los resultados de aprendizaje que aparecen al inicio de cada tutorial ofrecen un resumen de lo que enseña en cada uno de ellos y, en conjunto, conforman un plan para el desarrollo web front-end. Es fundamental que los resultados de aprendizaje y los contenidos impartidos se mantengan estables y sincronizados; de lo contrario, el contenido no podrá considerarse una base fiable para el aprendizaje formal (por ejemplo, cursos educativos o certificaciones). Por ello, los cambios en los resultados de aprendizaje deben realizarse de forma gradual y solo cuando exista una razón de peso. Si intentas agregar contenido que no está cubierto en los resultados de aprendizaje asociados (o viceversa), tu solicitud de incorporación de cambios será rechazada. [Haz una sugerencia primero](/es/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)

> [!NOTE]
> Mantenemos un [registro de cambios](/es/docs/Learn_web_development/Changelog) que detalla cualquier cambio significativo realizado en los resultados de aprendizaje, para que los educadores puedan actualizar cualquier recurso basado en MDN Aprende.

## Enlaces externos o embebidos

Tal y como se describe en nuestras pautas sobre [enlaces externos](/es/docs/MDN/Writing_guidelines/Writing_style_guide#external_links), MDN generalmente no permite enlaces externos (o embebidos) que parezcan respaldar productos o servicios comerciales o que apunten a contenido pago. Esto es para disminuir el riesgo de que el contenido de MDN pierda confianza y se vuelva menos útil debido al exceso de enlaces de spam.

El contenido del área de aprendizaje de MDN presenta algunas exepciones a la regla. Permitimos enlaces a contenido externo (que pueden ser pagos) procedentes de sitios web específicos de socios de confianza. Se trata de sitios con los que MDN ha establecido relación de confianza, mediante un análisis exhaustivo de su calidad, ética y compromiso con los estándares web, buenas prácticas y ayudándolos a actualizar su contenido cuando no cumpla con nuestros estándares. Confiamos en que no cambiarán los enlaces sin avisarnos y que su contenido es seguro.

El propósito de los enlaces de los socios es el siguiente:

- Proporcionan acceso a contenidos complementarios que amplíen lo que se enseña en nuestras páginas.
- Proporciona acceso a experiencias de aprendizaje multimedia ( videos, diapositivas y otros contenidos interactivos ) que los equipos de contenido de MDN no tienen los recursos para producir. En MDN nos centramos principalmente en el texto, pero a menudo la gente busca diferentes formas de aprender.
- Generar ingresos mediante enlaces afiliados a opciones de contenido pago, que podemos invertir para mejorar aún más MDN.

Sin embargo, nosotros:

- No añadiremos estos enlaces de una forma que comprometa la integridad del contenido de MDN y que sea claramente spam; sólo cuando consideremos que son realmente útiles.
- Siempre nos aseguraremos de que haya una opción gratuita disponible junto a cualquier contenido de pago. En muchos casos, hemos logrado convencer a nuestros socios para que pongan a disposición de forma gratuita contenidos que antes eran pagos.
- El contenido de los socios se identificará claramente con la etiqueta "Socio de aprendizaje de MDN", para que puedas distinguirlo fácilmente de otros enlaces.

### Orden de los enlaces "Véase también"

En las páginas de contenido del área de aprendizaje, los enlaces de "Véase también" que aparecen al final del contenido deben aparecer en el siguiente orden:

1. Enlaces internos.
2. Enlaces a contenido gratuito.
3. Combinación de enlaces de contenido gratuitos/pagos.

### Socios actuales en el ámbito de la educación

- [Scrimba](https://scrimba.com/home)
