---
title: ¿Qué es la accesibilidad?
slug: Learn/Accessibility/What_is_accessibility
---

{{LearnSidebar}}{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

En este artículo se inicia el módulo con una explicación ampliada sobre qué es la accesibilidad. Esta visión general incluye qué grupos de personas necesitamos tener en cuenta y por qué, qué herramientas utilizan estas personas para interactuar con la web y cómo podemos hacer que la accesibilidad sea parte de nuestro flujo de trabajo de desarrollo web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>Conocimientos básicos de informática y de lenguaje HTML y CSS.</td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Familiarizarse con la accesibilidad (qué es y cómo te afecta como
        desarrollador web).
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es la accesibilidad?

La accesibilidad hace que tus sitios web puedan ser utilizados por el mayor número de personas posible. Tradicionalmente, se ideó para las personas con discapacidad, pero la creación de sitios accesibles también beneficia a otros grupos, como los que utilizan los dispositivos móviles o los que tienen conexiones de red lentas.

También podrías pensar en la accesibilidad como una forma de tratar a todos por igual y darles las mismas oportunidades, sin importar su capacidad o circunstancias. Al igual que es injusto excluir a alguien de un edificio porque vaya en silla de ruedas (generalmente, los edificios públicos modernos tienen rampas o ascensores), tampoco es correcto excluir a alguien de un sitio web porque tenga una discapacidad visual. Todos somos diferentes, pero todos somos humanos, y por lo tanto tenemos los mismos derechos.

Por eso debemos hacer las cosas accesibles. En algunos países es obligado por ley proporcionar sitios web accesibles, lo que te puede abrir algunos mercados importantes que de otra manera no serían capaces de utilizar tus servicios o comprar tus productos.

Crear sitios web accesibles nos beneficia a todos:

- El HTML semántico, aparte de mejorar la accesibilidad, también mejora la optimización en motores de búsqueda (SEO), y la gente encuentra tu sitio web con mayor facilidad.
- Preocuparse por la accesibilidad demuestra buenos criterios éticos y morales, lo que mejora tu imagen pública.
- Mejorar la accesibilidad también hace que tu sitio sea más fácil de usar por otros grupos, como los usuarios de dispositivos móviles o los que tienen internet de baja velocidad. De hecho, todo el mundo puede beneficiarse de estas mejoras.
- ¿Hemos mencionado también que en algunos países está estipulado por ley?

## ¿Con que tipo de discapacidades nos encontraremos?

Las personas con discapacidad son tan diversas como las personas sin discapacidad, y también lo son sus discapacidades. La clave está en pensar más allá de tu ordenador y en cómo utilizas la web y empezar a aprender acerca de cómo otros la utilizan. _Tú no eres tus usuarios_. A continuación explicaremos los principales tipos de discapacidad que vamos a considerar, junto con las herramientas especiales que se utilizan para acceder al contenido web (conocidas como **tecnologías de apoyo** o **AT**, de _assistive technologies_).

> **Nota:** La hoja informativa sobre [discapacidad y salud](https://www.who.int/es/news-room/fact-sheets/detail/disability-and-health) de la Organización Mundial de la Salud establece que «Más de mil millones de personas, aproximadamente el 15% de la población mundial, tienen alguna forma de discapacidad» y «Entre 110 millones y 190 millones de adultos tienen dificultades funcionales significativas».

### Personas con discapacidad visual

Las personas con discapacidad visual son aquellas con ceguera, poca visión o daltonismo. Muchas personas con discapacidad visual utilizan amplificadores de pantalla que consisten en lupas físicas o funciones de zoom por software. La mayoría de los navegadores y sistemas operativos de hoy en día tienen instaladas funciones de zoom. Algunos usuarios confían en los lectores de pantalla, un software que lee en voz alta los textos digitales. Algunos ejemplos de lectores de pantalla incluyen:

- Productos comerciales de pago, como [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) y [Dolphin Screen Reader](https://yourdolphin.com/screenreader) (Windows).
- Productos gratuitos, como [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows y Mac OS X) y [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Productos integrados en el sistema operativo, como [VoiceOver](https://www.apple.com/accessibility/mac/vision/) (MacOS, iPadOS, IOS), [Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-narrator-get-started) (Microsoft Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (en Chrome OS) y [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Familiarizarse con los lectores de pantalla puede ser útil, así como configurar un lector de pantalla y jugar con él para aprender cómo funciona. Consulta nuestra [guía de lectores de pantalla de prueba para la navegación cruzada](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders) para obtener más detalles sobre su uso. El vídeo siguiente proporciona un breve ejemplo de cómo es esta experiencia.

{{EmbedYouTube("IK97XMibEws")}}

En términos de estadística, la Organización Mundial de la Salud estima que «Alrededor de 285 millones de personas de todo el mundo tienen discapacidad visual: 39 millones son ciegas y 246 tienen visión reducida.» (Véase [Discapacidad visual y ceguera](https://www.who.int/es/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Esa es una población grande y significativa de usuarios (casi la misma población de los Estados Unidos de América), a la que simplemente perderás porque tu sitio web no está codificado correctamente.

### Personas con discapacidades auditivas

También conocidas como personas con trastornos auditivos o personas sordas. Son un grupo de personas con niveles de audición bajos o nulos. Las personas con discapacidad auditiva usan AT (véase [Dispositivos de asistencia para personas con trastornos auditivos, de voz, del habla o del lenguaje](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), pero en realidad no hay AT específicos para el uso del ordenador/web.

Hay, sin embargo, técnicas específicas para ofrecer alternativas textuales a contenidos de audio, que van desde simples transcripciones hasta pistas de texto (es decir, subtítulos) que se pueden mostrar junto con el vídeo. Pero lo veremos más adelante.

Las personas con discapacidad auditiva también representan una importante base de usuarios: «466 millones de personas en todo el mundo tienen pérdida auditiva discapacitante», dice la hoja informativa sobre [Sordera y pérdida auditiva](https://www.who.int/es/news-room/fact-sheets/detail/deafness-and-hearing-loss) de la Organización Mundial de la Salud.

### Personas con discapacidad motriz

Estas personas tienen discapacidades relativas a la movilidad, que pueden implicar problemas puramente físicos (como la pérdida de una extremidad o la parálisis) o trastornos neurológicos/genéticos que conducen a la debilidad o pérdida de control en las extremidades. Algunas personas simplemente pueden tener dificultades a la hora de mover el ratón, mientras que otras podrían verse más gravemente afectadas, tal vez estén paralizadas y necesiten utilizar un [puntero de cabeza](https://www.performancehealth.com/baseball-cap-head-pointer) para interactuar con los ordenadores.

Este tipo de discapacidad se da principalmente por la vejez, y no por cualquier trauma o condición específica, y también podría resultar de limitaciones en el hardware (algunos usuarios podrían no tener un ratón).

La forma en que esto afecta al desarrollo web es el requisito de que los controles sean accesibles por el teclado. Hablaremos de la accesibilidad del teclado en artículos posteriores de este módulo, pero te recomendamos probar algunos sitios web utilizando solo el teclado para ver cómo funcionan. Por ejemplo, ¿se puede utilizar la tecla de tabulación para moverse entre los diferentes controles de un formulario web? Puedes encontrar más detalles sobre los controles del teclado en nuestro apartado [Accesibilidad desde el teclado](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility).

Si nos basamos en las estadísticas, vemos que un número significativo de personas tienen problemas de movilidad. Los Centros para el Control y la Prevención de Enfermedades de [Discapacidad y Funcionalidad (Adultos a partir de 18 años no registrados en una institución)](https://www.cdc.gov/nchs/fastats/disability.htm) de los Estados Unidos informan de que el porcentaje de adultos con alguna disfunción física en los EUA es del 16,1%.

### Personas con discapacidad cognitiva

La discapacidad cognitiva engloba una amplia gama de discapacidades, desde las personas que presentan las capacidades intelectuales más limitadas hasta toda la población que tiene problemas a la hora de recordar por los síntomas de la edad. Este amplio abanico incluye a las personas con enfermedades mentales como la [depresión](https://www.nimh.nih.gov/health/topics/depression/index.shtml) y la [esquizofrenia](https://www.nimh.nih.gov/health/topics/schizophrenia/index.shtml). También incluye a personas con dificultades de aprendizaje, como la [dislexia](https://www.ninds.nih.gov/Disorders/All-Disorders/Learning-Disabilities-Information-Page) y el [trastorno por déficit de atención con hiperactividad](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd/index.shtml). Es importante destacar que, aunque hay una gran diversidad dentro de las definiciones clínicas de alteraciones cognitivas, las personas que las experimentan tienen un conjunto común de problemas funcionales, que incluye dificultades a la hora de entender los contenidos, recordar cómo completar las tareas y confusión ante páginas web diseñadas de forma incoherente.

Una buena base de accesibilidad para personas con deficiencias cognitivas incluye:

- proporcionar el contenido en más de un formato, como puede ser texto-a-voz o vídeo;
- proporcionar contenidos fáciles de entender, como texto escrito con estándares de lenguaje sencillo;
- centrar la atención en el contenido importante;
- minimizar las distracciones, tales como contenidos innecesarios o anuncios;
- proporcionar un diseño coherente de la página web y del sistema de navegación;
- usar elementos ya conocidos, como los enlaces subrayados en azul cuando aún no se han visitado, y en morado cuando sí;
- dividir los procesos en pasos lógicos y esenciales con indicadores de progreso;
- ofrecer un sistema de autenticación del sitio web de la forma más fácil posible sin comprometer la seguridad; y
- diseñar formularios fáciles de completar, con mensajes de error claros y de fácil solución.

### Observaciones

- Diseñar para la [accesibilidad cognitiva](/es/docs/Web/Accessibility/Cognitive_accessibility) proporcionará buenas prácticas de diseño que beneficiarán a todo el mundo.
- Muchas personas con discapacidades cognitivas también tienen discapacidades físicas. Los sitios web deben cumplir con las directrices de accesibilidad a los contenidos web [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) de W3C, que incluyen las [directrices de accesibilidad cognitiva](/es/docs/Web/Accessibility/Cognitive_accessibility#Guidelines).
- El apartado [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) de W3C aporta pautas de accesibilidad web para personas con discapacidades cognitivas.
- WebAIM tiene una [página cognitiva](https://webaim.org/articles/cognitive/) con la información y los recursos correspondientes.
- Los Centros para el Control de Enfermedades estimaron que, en 2018, 1 de cada 4 ciudadanos de Estados Unidos presentaba alguna discapacidad y que la discapacidad cognitiva es la más común entre los jóvenes.
- En los EUA, el término «retraso mental» se ha sustituido por el de «discapacidad intelectual». En el Reino Unido, a la «discapacidad intelectual» se le llama comúnmente «discapacidades de aprendizaje» o «dificultades de aprendizaje».

## Implementa la accesibilidad en tu proyecto

Un mito común de la accesibilidad es que se trata de un «extra añadido» que encarece tu proyecto. Este mito _puede_ resultar cierto si:

- Tratas de «readaptar» la accesibilidad de un sitio web que tiene problemas de accesibilidad importantes.
- Solo has empezado a considerar la accesibilidad y temas relacionados en las últimas etapas de un proyecto.

Sin embargo, si se tiene en cuenta la accesibilidad desde el inicio de un proyecto, el coste es muy reducido.

Al planificar tu proyecto, debes tener en cuenta las pruebas de accesibilidad en la fase de pruebas, lo mismo que las pruebas para cualquier otro sector de público objetivo importante (por ejemplo, los navegadores de escritorio o los navegadores para dispositivo móvil). Somete tu proyecto a pruebas desde una etapa temprana y con frecuencia, idealmente con pruebas automatizadas para detectar carencias detectables en la programación, como la falta de [textos alternativos](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Text_alternatives) en las imágenes o textos de enlace no adecuados (consulta [Relaciones entre elementos y contexto](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Element_relationships_and_context)). Y haz algunas pruebas con grupos de usuarios con discapacidad para ver cómo se desenvuelven con las características más complejas de tu sitio web. Por ejemplo:

- ¿Las personas que utilizan lectores de pantalla tendrán problemas con mi selector de fechas?
- ¿Pueden saber las personas con discapacidad visual si el contenido se actualiza dinámicamente?
- ¿Puedo acceder a los botones de mi interfaz de usuario desde el teclado y desde las interfaces táctiles?

Puedes y debes tener en cuenta las áreas potencialmente problemáticas del contenido que habrá que modificar para proporcionarles accesibilidad, asegúrate de que se prueban a fondo y piensa en soluciones/alternativas. El contenido textual (como veremos en el próximo artículo) es fácil, pero ¿qué pasa con el contenido multimedia y con esos fantásticos gráficos 3D? Echa un ojo al presupuesto del proyecto y piensa en soluciones que estén a tu disposición para convertir tales contenidos en accesibles. Transcribir todos tus archivos multimedia es una opción posible, aunque cara.

Seamos realistas. El «100% de accesibilidad» es un ideal inalcanzable, ya que siempre te encontrarás con algún tipo de caso límite en que un determinado usuario encuentra ciertos contenidos difíciles de usar, pero debes hacer todo lo que puedas. Si planeas incluir un gráfico 3D circular creado a partir de WebGL, es posible que desees incluir una tabla de datos como una representación alternativa accesible. O bien puedes simplemente incluir la tabla y deshacerte del gráfico circular 3D (todo el mundo puede acceder a la tabla, su codificación resulta más simple, y además consume menos recursos de la CPU y es de mantenimiento más fácil.

Por otro lado, si trabajas en un sitio web de una galería que muestra obras de arte interesantes en 3D, no sería razonable esperar que cada obra de arte sea perfectamente accesible para las personas con discapacidad visual, ya que se trata de un medio completamente visual.

Para demostrar que te importa y que has pensado en la accesibilidad, publica una declaración de accesibilidad en la página web que explique tu política de accesibilidad y los pasos realizados para hacer que el sitio web sea accesible. Si alguien se queja de que tiene un problema de accesibilidad: inicia un diálogo con ellos, se empático y toma las medidas razonables para tratar de solucionar el problema.

> **Nota:** Nuestro artículo sobre [Cómo afrontar los problemas de accesibilidad más comunes](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility) expone los detalles de accesibilidad que es necesario tener más en cuenta.

En resumen:

- Considera la accesibilidad desde el inicio de un proyecto y haz pruebas con frecuencia. Al igual que cualquier otro error, un problema de accesibilidad se vuelve más caro de arreglar cuanto más tarde se descubre.
- Ten en cuenta que muchas de las buenas prácticas de accesibilidad benefician a todo el mundo, no solo a los usuarios con discapacidad. Por ejemplo, el marcado semántico no solo es bueno para los lectores de pantalla, sino que también es de carga y ejecución rápidas. Esto nos beneficia a todos, especialmente a quienes entran con dispositivos móviles y/o tienen conexión lenta.
- Publica una declaración de accesibilidad en la página web y relacionarse con la gente que tiene problemas.

## Directrices de accesibilidad y la ley

Hay numerosas listas de control y conjuntos de directrices en las cuales basar las pruebas de accesibilidad, por lo que podría parecer abrumador a primera vista. Nuestro consejo es que te familiarices con las áreas básicas en las que te interesa centrarte, así como que comprendas las estructuras de alto nivel de las directrices que son más relevantes para ti.

- Para empezar, el W3C ha publicado un documento muy extenso y detallado que incluye criterios de accesibilidad muy precisos, independientes de la tecnología. Se llaman [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG). Los criterios se dividen en cuatro categorías principales, las cuales especifican según el tipo de implementaciones: perceptibles, operables, comprensibles y robustas. El mejor lugar para adquirir una ligera introducción y comenzar el aprendizaje es [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). No es necesario que te aprendas las directrices WCAG de memoria, solo tienes que ser consciente de las áreas de preocupación principales y utilizar una variedad de técnicas y herramientas para destacar aquellas áreas que no se ajustan a los criterios WCAG (véase más abajo).
- Tu país también puede tener una legislación específica que regule la necesidad de la accesibilidad que los sitios web. Por ejemplo, la norma [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) en la UE, la [sección 508 de la Ley de Rehabilitación](https://www.section508.gov/training) en los EUA, la [Ordenanza Federal de Tecnología de la Información sin barreras](https://www.einfach-fuer-alle.de/artikel/bitv_english/) en Alemania, el [Reglamento de accesibilidad 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) en el Reino Unido, la [Accessibilità](https://www.agid.gov.it/it/design-servizi/accessibilita-siti-web) en Italia, la [Ley de Discriminación por Discapacidad](https://www.humanrights.gov.au/world-wide-web-access-disability-discrimination-act-advisory-notes-ver-41-2014) en Australia, etc. La W3C tiene una lista de [políticas y leyes de accesibilidad web](https://www.w3.org/WAI/policies/) según países.

Así, mientras que la WCAG es un conjunto de directrices, tu país probablemente tiene leyes que rigen la accesibilidad web, o al menos la accesibilidad de los servicios disponibles para el público (que incluyen sitios web, televisión, espacios físicos, etc.). Conocer estas leyes puede resultarte útil. Si no te preocupas por comprobar que tu contenido sea accesible, podrías incurrir en alguna responsabilidad legal, si la gente se queja.

Suena serio, pero en realidad solo tienes que considerar la accesibilidad como la prioridad principal a la hora de desarrollar tu web, como ya hemos dicho. En caso de duda, asesórate por un abogado cualificado. Y como nosotros no lo somos, no vamos a ofrecer más consejos sobre este tema.

## API de accesibilidad

Los navegadores web hacen uso de **API de accesibilidad** especiales (proporcionadas por el sistema operativo subyacente) que exponen información útil para las tecnologías de asistencia (AT, _assistive technologies_): la mayoría de AT tienden a utilizar información semántica, por lo que esta información no incluye información de estilo o JavaScript. Esta información se estructura en un árbol de datos, denominado **árbol de accesibilidad**.

Los diferentes sistemas operativos disponen de diferentes API de accesibilidad:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- Mac OS X: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Cuando la información semántica nativa proporcionada por los elementos HTML de tus aplicaciones web falla, puedes complementarlo con características de la [especificación WAI-ARIA](https://www.w3.org/TR/wai-aria/), que añaden información semántica al árbol para mejorar la accesibilidad. Puedes aprender más acerca de WAI-ARIA en nuestro artículo de [fundamentos WAI-ARIA](/es/docs/Learn/Accessibility/WAI-ARIA_basics).

## Resumen

Este artículo debería haber dado una descripción detallada sobre la accesibilidad, mostrar por qué es importante y enseñar cómo puede encajar en tu flujo de trabajo. Ahora también deberías tener sed de conocimientos sobre los detalles de implementación que hacen que los sitios sean accesibles. Comenzaremos con esto en la sección siguiente, observando por qué HTML es una buena base para la accesibilidad.

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

## Véase también

- [WCAG](/es/docs/Web/Accessibility/Understanding_WCAG)

  - [Perceptible](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  - [Operable](/es/docs/Web/Accessibility/Understanding_WCAG/Operable)
  - [Comprensible](/es/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  - [Robusto](/es/docs/Web/Accessibility/Understanding_WCAG/Robust)
