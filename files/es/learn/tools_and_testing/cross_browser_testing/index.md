---
title: Cross browser testing
slug: Learn/Tools_and_testing/Cross_browser_testing
---

{{LearnSidebar}}

Este módulo se centra en probar proyectos web en diferentes navegadores. Nos fijamos en la identificación de su público objetivo (por ejemplo, qué usuarios, navegadores y dispositivos son los que más le preocupan?), cómo realizar las pruebas, los principales problemas a los que se enfrentará con los diferentes tipos de código y cómo mitigarlos, qué herramientas son las más útiles para ayudarle a probar y solucionar problemas, y cómo utilizar la automatización para acelerar las pruebas.

## Prerequisitos

Debería aprender los conceptos básicos de los lenguajes [HTML](/es/docs/Learn/HTML), [CSS](/es/docs/Learn/CSS) y [JavaScript](/es/docs/Learn/JavaScript) básicos antes de intentar utilizar las herramientas que se detallan aquí.

## Guías

- [Introducción a la prueba de navegadores cruzados](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : Este artículo comienza el módulo proporcionando una visión general del tema de la prueba de navegadores cruzados, respondiendo a preguntas como "¿qué es la prueba de navegadores cruzados? y "¿cuáles son los tipos de problemas más comunes que se encuentran?
- [Estrategias para la realización de las pruebas](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : A continuación, profundizamos en la realización de pruebas, la identificación de un público objetivo (por ejemplo, qué navegadores, dispositivos y otros segmentos deben ser probados), estrategias de pruebas de baja fiabilidad (obtenga una gama de dispositivos y algunas máquinas virtuales y realice pruebas ad-hoc cuando sea necesario), estrategias de alta tecnología (automatización, uso de aplicaciones de pruebas dedicadas), y pruebas con grupos de usuarios.
- [Manejo de problemas comunes de HTML y CSS](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : Con el conjunto de escenas, ahora veremos específicamente los problemas comunes entre navegadores que encontrará en código HTML y CSS, y qué herramientas se pueden usar para evitar que ocurran problemas o para solucionarlos. Esto incluye el código de hilado, la entrega de prefijos CSS, el uso de herramientas de desarrollo de navegadores para localizar problemas, el uso de polifiltros para añadir soporte a los navegadores, la solución de problemas de diseño con capacidad de respuesta, y mucho más.
- [Manejo de problemas comunes de JavaScript](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : Ahora veremos los problemas comunes de JavaScript en todos los navegadores y cómo solucionarlos. Esto incluye información sobre el uso de herramientas de desarrollo del navegador para localizar y solucionar problemas, el uso de polifondos y bibliotecas para solucionar los problemas, el funcionamiento de las funciones modernas de JavaScript en navegadores antiguos, y mucho más.
- [Manejo de problemas comunes de accesibilidad](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : A continuación, nos centramos en la accesibilidad, proporcionando información sobre problemas comunes, cómo realizar pruebas sencillas y cómo utilizar las herramientas de auditoría/automatización para encontrar problemas de accesibilidad.
- [Implementación de la detección de características](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : La detección de funciones implica determinar si un navegador soporta un determinado bloque de código, y ejecutar un código diferente dependiendo de si lo hace (o no), de modo que el navegador siempre puede proporcionar una experiencia de trabajo en lugar de bloquearse/error en algunos navegadores. Este artículo detalla cómo escribir su propia detección de características simples, cómo usar una biblioteca para acelerar la implementación y características nativas para la detección de características como `@supports`.
- [Introducción a las pruebas automatizadas](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : La realización manual de pruebas en varios navegadores y dispositivos, varias veces al día, puede resultar tediosa y consumir mucho tiempo. Para manejar esto eficientemente, debe familiarizarse con las herramientas de automatización. En este artículo, analizamos lo que está disponible, cómo utilizar los corredores de tareas y los conceptos básicos de cómo utilizar las aplicaciones de automatización de pruebas de navegadores comerciales, como Sauce Labs y Browser Stack.
- [Configuración de su propio entorno de automatización de pruebas](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : En este artículo, le enseñaremos cómo instalar su propio entorno de automatización y ejecutar sus propias pruebas utilizando Selenium/WebDriver y una biblioteca de pruebas como Selenium-webdriver for Node. También veremos cómo integrar su entorno de pruebas local con aplicaciones comerciales como las que se comentaron en el artículo anterior.
