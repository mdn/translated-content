---
title: El modelo de los estándares web
slug: Learn_web_development/Getting_started/Web_standards/The_web_standards_model
l10n:
  sourceCommit: 077d3774b2de6f345b8552fe59ff9deb8b67ebd5
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}

Este artículo ofrece algunos antecedentes útiles sobre la web y los estándares web: cómo surgieron, qué son las tecnologías de los estándares web y cómo funcionan juntas.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora, los navegadores web y las tecnologías web.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Los estándares web y los principios clave en los que se basan.</li>
          <li>Cómo funcionan los organismos de estándares (por ejemplo, el <a href="https://www.w3.org/">W3C</a>, el <a href="https://whatwg.org/">WHATWG</a>, el <a href="https://tc39.es/">TC39</a> y el <a href="https://www.khronos.org/">Khronos Group</a>) y el proceso de creación de estándares.</li>
          <li>Las principales tecnologías de los estándares web y cómo funcionan juntas.</li>
          <li>Archivos del lado del servidor (dinámicos) frente a archivos del lado del cliente (estáticos).</li>
          <li>Buenas prácticas web.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Breve historia de la web

A finales de la década de 1960, el ejército de Estados Unidos desarrolló una red de comunicaciones llamada [ARPANET](/es/docs/Glossary/Arpanet). Se puede considerar precursora de **internet**, ya que funcionaba con [conmutación de paquetes](https://es.wikipedia.org/wiki/Conmutación_de_paquetes) y tuvo la primera implementación de la familia de protocolos [TCP/IP](https://es.wikipedia.org/wiki/Familia_de_protocolos_de_internet). Estas dos tecnologías son la base de la infraestructura sobre la que se construye internet.

En 1980, [Tim Berners-Lee](https://es.wikipedia.org/wiki/Tim_Berners-Lee) (a menudo llamado TimBL) escribió un programa de cuaderno de notas llamado ENQUIRE, que incluía el concepto de enlaces entre distintos nodos. ¿Te suena?

Avancemos hasta 1989: TimBL escribió [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) y HyperText at CERN; estas dos publicaciones sentaron juntas las bases de cómo funcionaría la web. Despertaron bastante interés, el suficiente para convencer a los jefes de TimBL de que le permitieran seguir adelante y crear un sistema global de hipertexto.

Para 1990-91, TimBL había creado todo lo necesario para hacer funcionar la primera versión de la **World Wide Web** (normalmente llamada simplemente **web**): [HTTP](/es/docs/Web/HTTP), [HTML](/es/docs/Web/HTML), el primer navegador web, llamado [WorldWideWeb](https://es.wikipedia.org/wiki/WorldWideWeb), un servidor web y algunas páginas web para ver.

> [!NOTE]
> A veces se usan «la web» e «internet» como sinónimos, pero son cosas distintas. Internet es la infraestructura que permite transportar información por todo el mundo entre distintos servidores y clientes, mientras que la web es un sistema construido sobre internet. La web define los tipos de información (contenido y código) que se transportan a través de internet y los protocolos de comunicación que gestionan ese transporte.

En 1994, TimBL fundó el [World Wide Web Consortium](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), una organización que reúne a representantes de muchas empresas distintas para trabajar juntos en la creación de tecnologías web. El W3C trabajó en estandarizar y mejorar las tecnologías web existentes, como HTML y HTTP, y en crear tecnologías nuevas, como [CSS](/es/docs/Web/CSS) y [JavaScript](/es/docs/Web/JavaScript). CSS y JavaScript en particular fueron vitales para dar a la web estilo e interactividad, y hacer que se pareciera más a la web que conocemos hoy.

En los años siguientes, la web explotó: se lanzaron varios navegadores, se instalaron miles de servidores web y se crearon millones de páginas web. También aparecieron otras organizaciones de estándares para ayudar a estandarizar distintos aspectos de las tecnologías web.

> [!NOTE]
> Si te interesa leer un relato más detallado de la historia de la web, prueba a buscar «historia de la web» en tu [motor de búsqueda](/es/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#motor_de_búsqueda) favorito y mira lo que encuentras.

## Estándares web

Los **estándares web** son las tecnologías que usamos para construir sitios web. Estos estándares existen en forma de largos documentos técnicos llamados especificaciones, que detallan exactamente cómo debe funcionar la tecnología. Estos documentos no son muy útiles para aprender a usar las tecnologías que describen (por eso existen sitios como MDN Web Docs). En cambio, están pensados para que los ingenieros de software implementen estas tecnologías (normalmente en los navegadores web).

### Organismos y procesos de estándares

Los estándares web los crean los organismos de estándares: instituciones que invitan a grupos de personas de distintas empresas tecnológicas a reunirse y acordar cómo deben funcionar las tecnologías de la mejor forma para cubrir todos sus casos de uso.

El W3C es el organismo de estándares web más conocido, pero hay otros. Por ejemplo:

- El [WHATWG](https://whatwg.org/) mantiene el [HTML Living Standard](https://html.spec.whatwg.org/multipage/), que describe exactamente cómo debe implementarse HTML (todos los elementos HTML, sus API asociadas y otras tecnologías relacionadas).
- El [TC39](https://tc39.es/) y [ECMA](https://ecma-international.org/) especifican y publican el estándar de ECMAScript, en el que se basa el JavaScript moderno.
- [Khronos](https://www.khronos.org/) publica tecnologías para gráficos 3D, como WebGL.

Los procesos completos de creación de estándares pueden ser profundos y complejos. Sin embargo, a menos que quieras crear tus propias características de tecnologías web, no necesitas entender la mayor parte. Si quieres contribuir a la discusión sobre tecnologías nuevas y dar tu opinión, normalmente basta con unirte a la lista de correo correspondiente o a otro mecanismo de discusión. Las discusiones sobre estándares se hacen en público, de ahí el término [estándares "abiertos"](#estándares_abiertos).

Por ahora, te daremos una idea general de cómo funcionan los procesos de estándares:

1. Alguien detecta la necesidad de una nueva característica en un estándar web que facilitará la vida de los desarrolladores. Por ejemplo, quizá haya un patrón muy usado en las interfaces de usuario web que resulta engorroso de implementar. Una característica de CSS dedicada lo haría mucho más fácil. Ese alguien podría ser cualquiera: un desarrollador individual o un ingeniero que trabaja para una gran empresa tecnológica.
2. Esa persona habla de la característica con otros desarrolladores, ingenieros de navegadores, etc., y empieza a generar interés en implementarla. Normalmente escribe un documento explicativo (un _explainer_) que expone por qué hace falta la característica y cómo funcionará, y una demostración de código que muestra cómo se vería en acción.
3. Si hay suficiente interés en la característica, se discute formalmente en el grupo de trabajo correspondiente del organismo de estándares. Por ejemplo, las características de CSS suelen discutirse en el [CSS Working Group](https://www.w3.org/groups/wg/css/) (WG) (consulta también la [página de Wikipedia del CSS Working Group](https://en.wikipedia.org/wiki/CSS_Working_Group) para ver algo más de descripción e historia). Antes de aceptar una nueva tecnología web, hay que evaluarla rigurosamente para asegurarse de que es buena para la web; por ejemplo, que no introduce problemas de seguridad, que es [accesible y compatible](#accesibles_e_interoperables) con otras tecnologías web y que no depende de patentes.
4. Para validar la característica, ocurren varias cosas. Todos estos puntos pueden ocurrir más o menos al mismo tiempo que el punto 3, o incluso antes (a veces los fabricantes de navegadores implementan características propietarias o no estándar e intentan estandarizarlas después):
   1. Uno o más fabricantes de navegadores implementarán una versión experimental de la nueva característica, a menudo desactivada de forma predeterminada, pero que pueden activar quienes quieran probarla y dar su opinión.
   2. Un miembro del grupo de trabajo también la añadirá a una especificación de la tecnología para que los fabricantes de navegadores puedan implementarla de forma coherente.
   3. También pedirán la opinión de otros fabricantes de navegadores para ver qué problemas tienen con la propuesta y qué probabilidad hay de que la implementen. Esto se llama posiciones sobre estándares. Consulta, por ejemplo, [Mozilla Standards Positions](https://mozilla.github.io/standards-positions/).
   4. Las personas implicadas también escribirán un amplio conjunto de pruebas para demostrar que la característica funciona como se describe.

5. Al final, si todo va bien, la característica se implementará en todos los navegadores y se podrá empezar a usar al crear sitios web.

> [!NOTE]
> Es perfectamente posible que quienes proponen la característica, la implementan en un navegador, crean la especificación, escriben las pruebas y recogen opiniones sobre ella sean la misma persona o las mismas personas.

Puedes encontrar más información sobre los procesos de organismos de estándares concretos. Consulta, por ejemplo:

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG — Working Mode](https://whatwg.org/working-mode)
- [The TC39 Process](https://tc39.es/process-document/)

## Principios clave de los estándares web

Los principios clave de la web, que hacen de ella un sector único y apasionante en el que participar, son los siguientes:

- Abiertos a la contribución y al uso, y por lo tanto no sujetos a patentes ni controlados por una única entidad privada.
- Accesibles e interoperables.
- No rompen la web.

Veamos cada uno con un poco más de detalle.

### Estándares "abiertos"

Uno de los aspectos clave de los estándares web, en el que TimBL y el W3C estuvieron de acuerdo desde el principio, es que la web (y las tecnologías web) deben ser **abiertas**. Esto significa que se puede contribuir a ellas y usarlas libremente, sin trabas de patentes o licencias. Esto es importante: si una tecnología web depende de tecnologías patentadas o con licencia para funcionar, el titular de la patente puede cobrar a los fabricantes de navegadores que la implementen cantidades de dinero potencialmente grandes, y esos costes acabarían repercutiendo en los usuarios de los navegadores.

Además, como las tecnologías web se crean de forma abierta, en colaboración entre muchas empresas distintas, ninguna empresa llega a controlarlas, lo cual es algo muy bueno. No querrías que una sola empresa decidiera de repente poner toda la web detrás de un muro de pago, o lanzar una nueva versión de HTML que todo el mundo tuviera que comprar para seguir creando sitios web o, peor aún, decidir que ya no le interesa y simplemente apagarla.

Los estándares abiertos permiten que la web siga siendo un recurso público y libremente disponible, donde cualquiera puede escribir gratis el código para construir un sitio web y cualquiera puede contribuir al proceso de creación de estándares.

### Accesibles e interoperables

La web y los navegadores web están diseñados fundamentalmente para que el contenido web sea **accesible** para las personas con discapacidad. Se concibió originalmente como un gran igualador, que permitiera a la gente acceder a la información independientemente de sus circunstancias. Esto significa, por ejemplo, que:

- Las personas que no pueden usar un ratón u otro dispositivo señalador pueden usar el teclado para navegar por la web.
- Las personas con discapacidad visual pueden ampliar el contenido o usar un programa llamado **lector de pantalla** que les lea el contenido en voz alta y describa los controles de forma comprensible.

> [!NOTE]
> Aprenderás más sobre [accesibilidad](/es/docs/Learn_web_development/Core/Accessibility) más adelante en el itinerario de aprendizaje.

Además, las tecnologías web están pensadas para ser **interoperables**. Como las tecnologías web se implementan según estándares publicados, los navegadores deberían producir el mismo resultado representado para una misma entrada (por ejemplo, código HTML, CSS o JS); en otras palabras, un sitio web debería funcionar de forma coherente en varios navegadores.

### No romper la web

Otra frase que oirás en torno a los estándares web abiertos es «no romper la web». La idea es que cualquier tecnología web nueva debe ser compatible con lo anterior, para que los sitios web existentes sigan funcionando igual que antes.

Los fabricantes de navegadores web deberían poder implementar tecnologías web nuevas sin provocar diferencias de representación o de funcionalidad que hagan pensar a sus usuarios que un sitio web está roto y que, por eso, prueben otro navegador.

## Panorama de las tecnologías web modernas

Hay varias tecnologías que aprender si quieres ser desarrollador web front-end. En esta sección las describiremos brevemente.

### HTML, CSS y JavaScript

[HTML](/es/docs/Web/HTML), [CSS](/es/docs/Web/CSS) y [JavaScript](/es/docs/Web/JavaScript) son las tres tecnologías principales que usarás para construir un sitio web. Ya las conociste en el [módulo anterior](/es/docs/Learn_web_development/Getting_started/Your_first_website), pero, a modo de repaso:

- El lenguaje de marcado de hipertexto, o **HTML** (HyperText Markup Language), es un lenguaje de marcado formado por distintos elementos con los que puedes envolver (marcar) el contenido para darle significado (semántica) y estructura. Si usáramos la analogía de construir una casa, HTML serían los cimientos y las paredes de la casa, que le dan estructura y la mantienen en pie.
- Las hojas de estilo en cascada (**CSS**, Cascading Style Sheets) son un lenguaje basado en reglas que se usa para aplicar estilos a tu HTML; por ejemplo, para establecer los colores del texto y del fondo, añadir bordes, animar cosas o maquetar una página de cierta manera. En la analogía de la casa, CSS es como la pintura, el papel pintado, las alfombras y los cuadros que usarías para que la casa se vea bonita.
- **JavaScript** es el lenguaje de programación que usamos para añadir interactividad a los sitios web, desde cambiar estilos de forma dinámica hasta obtener actualizaciones del servidor o crear complejos gráficos 3D.
  - También oirás el término **API** junto a JavaScript, que significa **interfaz de programación de aplicaciones** (Application Programming Interface). Una API de JavaScript es una funcionalidad construida sobre JavaScript que te permite controlar de forma manejable otros fragmentos de código más complejos u otras funcionalidades de tu computadora (como dispositivos de hardware, por ejemplo, tu cámara web o tu micrófono).
  - En la analogía de la casa, JavaScript es como la cocina, la televisión, el microondas o el secador de pelo: las cosas que dan a tu casa una funcionalidad útil.

### Otras tecnologías web

Hay otras tecnologías que se usan en la web, por ejemplo:

- [HTTP](/es/docs/Web/HTTP), para la comunicación entre clientes y servidores, como mencionamos antes.
- [SVG](/es/docs/Web/SVG), para crear y manipular gráficos vectoriales.
- [MathML](/es/docs/Web/MathML), para describir fórmulas matemáticas.

Sin embargo, HTML, CSS y JavaScript son, con diferencia, las tecnologías más importantes que aprender, así que nos centraremos principalmente en ellas en nuestro itinerario de aprendizaje.

## Herramientas

Cuando hayas aprendido las tecnologías estándar y fundamentales que se usan para construir páginas web (como HTML, CSS y JavaScript), pronto empezarás a encontrarte con distintas herramientas que pueden hacer tu trabajo más fácil o más eficiente. Por ejemplo:

- Las [herramientas para desarrolladores](/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) de los navegadores modernos, que se pueden usar para depurar el código.
- Las [herramientas de pruebas](/es/docs/Learn_web_development/Extensions/Testing), que se pueden usar para ejecutar pruebas que muestren si tu código se comporta como pretendías.
- Los [frameworks y bibliotecas](/es/docs/Learn_web_development/Core/Frameworks_libraries) construidos sobre JavaScript, que te permiten crear ciertos tipos de sitios web de forma mucho más rápida y eficaz.
- Los llamados **linters** y **formateadores**, que toman un conjunto de reglas de estilo de código, revisan tu código y lo actualizan para que siga esas reglas. Prettier, que [conociste antes en el curso](/es/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#mejorar_tu_editor_de_código_con_extensiones), es un ejemplo de formateador.

## Lenguajes y frameworks del lado del servidor

HTML, CSS y JavaScript son lenguajes de front-end (o del lado del cliente), lo que significa que los ejecuta el navegador para producir el front-end de un sitio web que tus usuarios pueden usar.

Hay otra clase de lenguajes llamados de back-end (o del lado del servidor), lo que significa que se ejecutan en el servidor antes de enviar el resultado al navegador para que lo muestre. Un uso típico de un lenguaje del lado del servidor es obtener algunos datos de una base de datos, generar algo de HTML que los contenga y después enviar ese HTML al navegador para mostrárselo al usuario.

Algunos ejemplos de frameworks y lenguajes del lado del servidor son ASP.NET (C#), Django (Python), Laravel (PHP) y Next.js (JavaScript).

Estas tecnologías no se consideran «estándares web»: las desarrollan organizaciones ajenas a los procesos de estándares web de organizaciones como el W3C y el WHATWG, aunque algunas tienen procesos igual de abiertos.

### Estático frente a dinámico

Otra forma habitual de describir los lenguajes del lado del cliente y del lado del servidor es como **estáticos** y **dinámicos**:

- Un archivo HTML simple se almacena en el servidor. Cuando se solicita, se entrega al cliente sin cambios y el navegador lo representa. Como no cambia, se le llama «estático».
- El código del lado del servidor (como un script de Python o una página ASP.NET) genera contenido HTML que varía según los datos que recibe, y después devuelve ese HTML al cliente. Por eso se le llama «dinámico». Por ejemplo, la misma página de pronóstico del tiempo puede mostrar datos distintos según si hace sol o llueve, en qué lugar está el usuario y cuáles son sus preferencias (algunos usuarios quizá quieran ver el nivel de polen y la humedad, mientras que a otros quizá no les importen esos datos y elijan ocultarlos en sus preferencias).

A menudo los conceptos de código estático y dinámico se solapan un poco. Los lenguajes del lado del servidor suelen definir las estructuras HTML dentro de un archivo de plantilla, que suele ser sobre todo HTML estático con algunas secciones dinámicas especiales que cambian según los datos que haya que insertar.

## Buenas prácticas web

Hemos hablado brevemente de las tecnologías que usarás para construir sitios web. Ahora hablemos de las buenas prácticas que suelen seguir los desarrolladores web para asegurarse de que sus sitios web puedan usarlos el mayor número de personas posible.

Al hacer desarrollo web, la principal causa de incertidumbre es que no sabes qué combinación de tecnologías usará cada usuario para ver tu sitio web:

- El usuario 1 podría verlo en un iPhone, con una pantalla pequeña y estrecha.
- El usuario 2 podría verlo en un portátil con Windows conectado a un monitor panorámico.
- El usuario 3 podría tener una discapacidad visual y usar un lector de pantalla para leer la página web e interactuar con ella.
- El usuario 4 podría usar un equipo de escritorio muy antiguo que no puede ejecutar navegadores modernos.

Como no sabes exactamente qué usarán tus usuarios, tienes que diseñar de forma defensiva: haz que tu sitio web sea lo más flexible posible, para que todos los usuarios anteriores puedan usarlo, aunque no todos tengan la misma experiencia.

En algún momento de tus estudios te encontrarás con los conceptos de abajo, que representan buenas prácticas que lo ideal es que sigan tus sitios web. Por ahora no te preocupes demasiado por ellos. Durante la mayor parte del curso intentamos enseñarlos de forma implícita, es decir, cuando te enseñemos HTML, CSS y JavaScript, nuestros ejemplos seguirán las buenas prácticas siempre que sea posible. Más adelante en tu aprendizaje probablemente explores estas áreas de forma explícita.

- **Mejora progresiva**
  - : Crear una experiencia mínima que ofrezca la funcionalidad esencial a todos los usuarios, y añadir encima una experiencia mejor y otras mejoras en los navegadores que puedan admitirlas. La mejora progresiva a menudo se considera poco importante, porque hoy en día los navegadores suelen admitir las características nuevas de forma más coherente y la gente suele tener conexiones a internet más rápidas y con límites de datos más altos. Sin embargo, piensa en ejemplos como reducir la decoración para que la experiencia móvil sea más fluida y ahorre datos, u ofrecer una experiencia más ligera y de bajo consumo de ancho de banda para los usuarios que pagan por megabyte o tienen conexiones medidas.
- **Compatibilidad entre navegadores**
  - : Intentar que tu página web funcione en el mayor número posible de dispositivos. Esto incluye usar tecnologías que admitan todos los navegadores, ofrecer mejores experiencias a los navegadores que puedan manejarlas (mejora progresiva) o escribir el código de forma que recurra a una experiencia más sencilla, pero todavía usable, en los navegadores antiguos (lo que se llama **degradación elegante**). También exige hacer pruebas para ver si algo falla en ciertos navegadores, y después más trabajo para corregir esos fallos.
- **Separar las capas**
  - : Poner el contenido (HTML), el estilo (CSS) y el comportamiento (JavaScript) en archivos de código distintos, en lugar de mezclarlos todos en el mismo sitio. Es una buena idea por muchas razones, como la gestión y la comprensión del código y el trabajo en equipo o la separación de roles. En la práctica, la separación no siempre está clara. Es un ideal al que aspirar cuando sea posible, más que algo absoluto.
- **Diseño web adaptable**
  - : Hacer que la funcionalidad y los diseños sean flexibles para que se adapten automáticamente a distintos navegadores. Un ejemplo obvio es un sitio web que se maqueta de una forma en un navegador panorámico de escritorio, pero que se muestra con un diseño más compacto de una sola columna en los navegadores de los teléfonos móviles. Prueba ahora a cambiar el ancho de la ventana de tu navegador y mira qué le pasa al diseño del sitio.
- **Rendimiento**
  - : Conseguir que los sitios web carguen lo más rápido posible, pero también que sean intuitivos y fáciles de usar, para que los usuarios no se frustren y se vayan a otra parte.
- **Internacionalización**
  - : Hacer que los sitios web puedan usarlos personas de culturas distintas que hablan idiomas diferentes al tuyo. Aquí hay consideraciones técnicas (como modificar el diseño para que siga funcionando bien con idiomas que se escriben de derecha a izquierda o de arriba abajo) y humanas (como usar un lenguaje sencillo y sin jerga, para que sea más probable que culturas diversas entiendan tu texto).
- **Privacidad** y **seguridad**
  - : Estos dos conceptos están relacionados, pero son distintos. La privacidad consiste en permitir que la gente haga sus cosas en privado, sin espiarla ni recopilar más datos suyos de los estrictamente necesarios. La seguridad consiste en construir tu sitio web de forma segura para que los usuarios malintencionados no puedan robarte a ti o a tus usuarios la información que contiene.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/How_the_web_works", "Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites", "Learn_web_development/Getting_started/Web_standards")}}
