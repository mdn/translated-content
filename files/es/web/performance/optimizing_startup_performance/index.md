---
title: Mejorando el Rendimiento Inicial
slug: Web/Performance/Optimizing_startup_performance
---

Un aspecto que a menudo se pasa por alto en el desarrollo de software de aplicaciones, incluso entre aquellos enfocados en la optimización del rendimiento, es el rendimiento inicial. ¿Cuánto tiempo demora su aplicación en iniciarse? ¿Parece que se bloquea el dispositivo o el navegador del usuario no responde mientras se carga la aplicación? Eso hace que los usuarios se preocupen de que su aplicación haya fallado, o de que algo anda mal. Siempre es una buena idea invertir tiempo para asegurarse de que la aplicación se inicie de manera correcta. Este artículo ofrece consejos y sugerencias para ayudar a lograr ese objetivo, tanto al escribir una nueva aplicación como al migrar una aplicación de otra plataforma a la Web.

## Empezando Bien

Independientemente de la plataforma, siempre es una buena idea comenzar lo **más rápido** posible. Ya que es un problema universal, no nos vamos a enfocar demasiado en esto. En su lugar, vamos a ver un problema más importante al crear aplicaciones web: comenzar de la manera más **asíncrona** posible. Eso significa no ejecutar todo el código inicial en un mismo controlador de eventos en el hilo principal de la aplicación.

En su lugar, es preferible que el código de la aplicación cree un [Web worker](/es/docs/Web/Guide/Performance/Usando_web_workers) que haga todo lo posible en un hilo de fondo (por ejemplo, para obtener y procesar datos). Luego, todo lo que debe ejecutarse en el hilo principal (como responder a los eventos del usuario o desplegar la interfaz gráfica) debe dividirse en tareas pequeñas para que el ciclo de eventos continúe mientras la aplicación inicia. Esto evitará que la aplicación, el navegador y / o el dispositivo parezcan haber fallado.

¿Por qué es importante ser asíncrono? Aparte de las razones sugeridas anteriormente, considere el impacto de una página o interfaz de usuario que no responde. El usuario no puede cerrar la aplicación si la lanzó por error. Si la aplicación se ejecuta en un navegador, es posible que el usuario obtenga una notificación diciendo "la aplicación no responde". Presentar algún tipo de interfaz, como una barra de progreso, para que el usuario sepa cuánto tiempo más tendrá que esperar mientras se inicia la aplicación es mejor que una interfaz incapaz de responder a las acciones del usuario.

## Trabajar con Rendimiento en Mente

Si está comenzando un proyecto de cero, generalmente es más sencillo escribir todo de la manera correcta, hacer que el código sea escrito para trabajar de manera asíncrona en mente. Hacer los cálculos iniciales en subprocesos en segundo plano cuando sea posible, crear tareas cortas para acelerar el tiempo de ejecución de los eventos de subprocesos importantes. Empezar a pintar en pantalla la interfaz gráfica para que el usuario sepa qué algo pasando y cuánto tiempo estará esperando. En teoría, de todos modos, debería ser bastante fácil diseñar una aplicación nueva para que inicie bien.

Por otro lado, migrar una aplicación existente a la Web puede ser una tarea más complicada. Por ejemplo, una aplicación de escritorio no necesita escribirse de forma asíncrona porque generalmente el sistema operativo se encarga de eso, o aplicación que se está ejecutando actualmente es lo único que importa, dependiendo del entorno operativo. La aplicación original puede tener un ciclo principal que puede modificarse para operar de forma asíncrona (intentando ejecutar cada iteración del ciclo principal por separado); el inicio es a menudo un procedimiento monolítico continuo que puede ir actualizando de manera periódica la interfaz gráfica para indicar progreso.

Si bien se puede usar los [Web workers](/es/docs/Web/Guide/Performance/Usando_web_workers)para ejecutar fragmentos de forma asíncrona códigos [JavaScript](/es/docs/JavaScript) muy grandes y/o lentos, hay una gran advertencia: Web workers no tienen accesso a [WebGL](/es/docs/Web/API/WebGL_API) o audio, y no pueden enviar mensajes síncronos al hilo principal, por lo que no se puede hacer un proxy de esos APIs al hilo principal. Todo esto significa que, a menos que se pueda extraer fácilmente los trozos de "cálculo puro" del proceso de inicio en Web workers, se va terminar teniendo que ejecutar la mayor parte o la totalidad del código de inicio en el hilo principal.

Sin embargo, incluso código como ese puede ser hecho asíncrono, con un poco de trabajo.

## Trabajando de Manera Asíncrona

Algunas sugerencias que se pueden aplicar para hacer que el proceso de inicio de la aplicación se lo más asíncrona posible, sin importar si la aplicación es nueva o si se está migrando una que ya existe, son las siguientes:

- Usar los atributos [`defer`](/es/docs/Web/HTML/Global_attributes#defer) o [`async`](/es/docs/Web/HTML/Global_attributes#async) en los tag de script que la aplicación Web necesita. Esto permite que el interpretador de HTML no se vea forzado a esperar a que el código se haya descargado y ejecutado para continuar.
- Si se necesita descodificar archivos de recurso (por ejemplo, descodificar archivos JPEG files y convertirlos en datos de textura para ser usados luegos en WebGL), este es un buen caso de uso para Web workers.
- When dealing with data supported by the browser (por ejemplo, descodificar images), es mejor utilizar los descodificadores includos en el navegador o el dispositivo en lugar de utilizar un propio migrado del código existente. El descodificador incluído en el navegador es muy probablemente más rápido, y reduce la cantidad de código que se va a necesitar para iniciar la aplicación. Además, es posible que el navegador automáticamente pueda ejecutar en paralelo estos descodificadores.
- Cualquier procesamiento de información que puede ejecutarse en paralelo debe ser ejecutada en paralelo. No trabaje con porciones de información de manera sequencial; es mejor ejecutarlas en paralelo, siempre que sea posible.
- No incluya archivos de JavaScript o CSS que no son necesarios para la ruta crítica de iniciar la aplicación web. Cargue los recursos adicionales cuando sean necesarios.
- Reduzca el tamaño de sus archivos JavaScript. Intente enviar la versión minificada de sus archivos a los navegadores y utilice mecanismos de compresión de recursos como Gzip o Brotli.
- Utilice directivas (como preload, prefetch, preconnect) para ayudar al navegador a optimizar la carga de los recursos.

A mayor trabajo que se pueda realizar de manera asíncrona, la aplicación va a obtener mayor ventaja de procesadores multinúcleos.

### Problemas de Migración

Una vez que se realiza la carga inicial y el código principal de la aplicación comienza a ejecutarse, es posible que su aplicación esté programada para trabajar en un solo hilo, especialmente cuando es una migración. Lo más importante que se puede hacer para tratar de ayudar con el proceso de inicio del código principal es refactorizar el código en partes pequeñas que se pueden ejecutrar en trozos intercalados en múltiples llamadas del ciclo principal de su aplicación, para que el hilo principal pueda manejar las interacciones del usuario y similares.

Emscripten proporciona una API para ayudar con esta refactorización; por ejemplo, puede usar emscripten_push_main_loop_blocker () para establecer una función que se ejecutará antes de que se permita que el hilo principal continúe. Al establecer una cola de funciones a ser llamadas en secuencia, puede administrar más fácilmente los bits de código en ejecución sin bloquear el hilo principal.

Eso deja, sin embargo, el problema de tener que refactorizar su código existente para que realmente funcione de esa manera. Eso puede llevar algún tiempo.

### ¿Que tan asíncrono debo ser?

Vale la pena tener en cuenta que la mayoría de los navegadores suelen comenzar a quejarse de que un script está bloqueando el hilo principal aproximadamente a los 10 segundos. Idealmente, la aplicación no debería bloquear esa cantidad de tiempo, pero mientras se mantenga debajo de eso, debería estar bien. Sin embargo, tenga en cuenta que si alguien tiene una computadora más antigua y más lenta que la suya, ¡puede experimentar retrasos más prolongados que usted!

## Otras Sugerencias

Hay otras cosas además de ir asíncrono, que pueden ayudarlo a mejorar el tiempo de inicio de su aplicación. Estas son algunos de ellos:

- Tiempo de Descarga
  - : Tenga en cuenta cuánto tiempo le llevará al usuario descargar los datos de su juego. Si su juego es realmente grande, muy popular o si tiene que volver a descargar contenido con frecuencia, debe intentar tener un servidor de alojamiento lo más rápido posible. También debe considerar utilizar mecanismos de compresión como Gzip o Brotli para que sean lo más pequeños posible.
- Uso del GPU
  - : La compilación de sombras y la carga de texturas en el GPU pueden llevar tiempo, especialmente para los juegos realmente complejos. Si bien esto también ocurre con los juegos nativos (que no son de la Web), todavía puede ser bastante molesto. Evita hacer esto sin mantener informado al usuario de que el juego, de hecho, todavía se está iniciando.
- Tamaño de los Datos
  - : Haz tu mejor esfuerzo para optimizar el tamaño de tus datos de juego; los archivos de menor nivel se descargarán y procesarán más rápido que los más grandes.
- Factores Subjetivos
  - : Cualquier cosa que pueda hacer para ayudar a mantener al usuario involucrado durante el proceso de inicio ayudará a que el tiempo parezca más rápido. Para los juegos, considere la posibilidad de reproducir música de fondo o mostrar una bonita pantalla de bienvenida. Entre cada cálculo, actualice su indicador de progreso, realice cambios en la pantalla o cualquier otra cosa que pueda hacer para ayudar al usuario a sentir que su aplicación está haciendo algo en lugar de quedarse sentado tranquilamente.

## También Podría Interesarte

- [Apps](/es/docs/Web/Progressive_web_apps)
- [Games](/es/docs/Games)

## Información del Documento Original

- Autor(s): Alon Zakai
- Fuente: [BananaBread (or any compiled codebase) Startup Experience](http://mozakai.blogspot.com/2012/07/bananabread-or-any-compiled-codebase.html)
