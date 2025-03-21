---
title: Editores de código
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: f12c4c8c5128f0e84d1167f8a6285fc68c1eb8e2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Anteriormente, te dijimos que instalaras un editor de código, ya que necesitarás uno para trabajar en esta ruta de aprendizaje. En este artículo, analizaremos los editores de código con más detalle, dándote una idea de lo que pueden hacer por ti.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo de tu computadora.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados del aprendizaje:</th>
      <td>
        <ul>
          <li>Qué editores de código están disponibles y cuál es el adecuado para tus propósitos.</li>
          <li>Qué puede hacer un editor de código básico.</li>
          <li>Qué pueden hacer las extensiones del editor de código y cómo instalar una.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué editores de código están disponibles?

Antes de comenzar a codificar, es posible que hayas tenido alguna experiencia trabajando en documentos de texto en un programa como Microsoft Word. También te estarás preguntando si puedes trabajar con código en estos mismos programas. Desafortunadamente, la respuesta es "no realmente":

- Los programas como Microsoft Word son editores de **archivos binarios**; sus archivos contienen un formato no textual que solo puede ser comprendido por esos programas. El código fuente del sitio web, por otro lado, se almacena como texto sin formato.
- Word _puede_ abrir y editar archivos de texto sin formato, pero no los maneja muy bien. No tiene un conjunto de características diseñadas para trabajar con código, es para escribir documentos como cartas e informes. Necesitas un programa que esté diseñado para manejar y generar texto sin formato de manera limpia, y para trabajar con código.

Probablemente ya tengas un editor de texto sin formato en tu computadora. De forma predeterminada, Windows incluye [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) y macOS viene con [TextEdit](https://en.wikipedia.org/wiki/TextEdit). Las distribuciones de Linux varían; la versión Ubuntu 22.04 LTS viene con [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor) de forma predeterminada. Los editores de texto sin formato predeterminados del sistema operativo pueden estar bien, pero también tienen un conjunto de características limitado.

Es mejor que uses un editor de código completo como [Visual Studio Code](https://code.visualstudio.com/) (multiplataforma, gratuito), [Sublime Text](https://www.sublimetext.com/) (multiplataforma, no gratuito) o [Notepad++](https://notepad-plus-plus.org/) (Windows, gratuito).

Recomendamos Visual Studio Code (VS Code), ya que es el editor que más usamos. Si aún no tienes VS Code (u otro editor de código) instalado, debes [instalarlo antes de continuar](https://code.visualstudio.com/).

> [!NOTE]
> Los Entornos de Desarrollo Integrados (IDEs) como [NetBeans](https://netbeans.apache.org/front/main/index.html) (multiplataforma, gratuito) y [WebStorm](https://www.jetbrains.com/webstorm/) (multiplataforma, no gratuito) tienden a tener más características que los editores de código simples, pero tienden a ser más complejos de lo que necesitas en esta etapa de tu viaje de aprendizaje.

## Funcionalidad básica del editor de código

En esta sección, analizaremos algunas de las funcionalidades más importantes que encontrarás en los editores de código, describiendo cómo pueden ayudarte con tu trabajo de codificación.

> [!NOTE]
> Las secciones a continuación solo tocan la superficie de lo que puede hacer un editor de código. Para obtener una lista de características más completa, consulta la [documentación de Visual Studio Code](https://code.visualstudio.com/docs) (o busca en la web la documentación del editor de código elegido si estás usando algo diferente).

> [!NOTE]
> Si eres un usuario que solo usa el teclado, ten en cuenta que VS Code tiene un conjunto potente de atajos de teclado. Consulta la [referencia de atajos de teclado predeterminados](https://code.visualstudio.com/docs/reference/default-keybindings) de VS Code.

### Abrir y editar archivos

Esto puede parecer un punto obvio, pero instalar un editor de código es útil porque te dará una sola aplicación que abrirá todos los archivos de código que puedas querer usar a través de tu trabajo de desarrollo. No hay nada más molesto que hacer doble clic en un archivo en tu computadora y que se abra en una aplicación aleatoria no relacionada, o que tu sistema operativo te diga que no reconoce ese archivo.

Todo esto debería suceder automáticamente al instalar VS Code, pero si aún tienes problemas con ciertos tipos de archivo, puedes configurarlos manualmente para que se abran a través de esa aplicación. Esto puede variar según tu sistema operativo, así que para averiguarlo, ve a tu motor de búsqueda favorito y busca "elegir qué aplicación abre un tipo de archivo &lt;nombre-y-número-del-sistema-operativo>" — por ejemplo, "elegir qué aplicación abre un tipo de archivo windows 11" si estás en Windows 11.

Puedes encontrar mucha más información sobre cómo abrir y editar archivos y carpetas en nuestro próximo artículo.

### Resaltado de sintaxis

Los editores de código como VS Code proporcionan resaltado de sintaxis, es decir, las características de código reconocidas tienen diferentes partes que se muestran en diferentes colores. Esto hace que el código sea mucho más fácil de leer que colorearlo todo en un solo color. Usemos la siguiente función de JavaScript como ejemplo:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

No necesitas entender lo que está haciendo este código por ahora, pero ya puedes ver cómo se ve el resaltado de sintaxis arriba. ¡Sí, también proporcionamos resaltado de sintaxis en MDN!

Probemos un ejercicio en VS Code:

1. Copia el ejemplo de código anterior en tu portapapeles (los bloques de código de MDN tienen un icono de copiar en la esquina superior derecha que puedes presionar para hacer esto).
2. Abre VS Code y crea un nuevo archivo eligiendo _Archivo_ > _Nuevo Archivo..._
3. Dentro del nuevo archivo, haz clic en el texto _Seleccionar un lenguaje_, luego elige _JavaScript_ del menú desplegable que se abre.
4. Pega el código en el nuevo archivo para ver cómo se ve el resaltado de sintaxis de JavaScript de VS Code.

VS Code también proporciona otras características de sintaxis. Por ejemplo:

- Verás una delgada línea vertical que viaja hacia abajo desde la palabra clave `function` hasta la llave de cierre (`}`) — estas líneas se utilizan para marcar diferentes niveles de [indentación](https://en.wikipedia.org/wiki/Indentation_style) en el código, lo que facilita la identificación de dónde comienzan y terminan los bloques.
- También intenta mover el cursor de texto parpadeante sobre la llave de apertura o cierre (`{` o `}`) — verás que ambos se resaltan. Esto también ayuda a identificar el inicio y el final de los bloques, y es útil cuando estás tratando de encontrar dónde te falta un carácter cuando tienes una estructura más complicada con muchos bloques anidados. Este resaltado también funciona con otros delimitadores como paréntesis (`(` y `)`) y corchetes (`[` y `]`).

### Autocompletado/sugerencia de código

Cuando escribes código en un editor de código, a menudo podrá sugerirte qué debes escribir a continuación y completar algo de código estándar por ti (lo que significa código estándar que siempre será el mismo).

Pruébalo ahora en VS Code:

1. Regresa al archivo JavaScript que creaste en la sección anterior.
2. Ve a la parte inferior del archivo y presiona <kbd>Enter</kbd>/<kbd>Return</kbd> un par de veces para asegurarte de que estás en una nueva línea.
3. Comienza a escribir "function" — debería aparecer una lista de opciones en una lista a la derecha de tu texto.
4. Selecciona la opción _function_ con _Declaración de función_ escrito a la derecha. Completará el siguiente código para ti:

   ```js-nolint
   function name(params) {

   }
   ```

5. Haz clic dentro de la función, en la línea en blanco entre las dos llaves. Comienza a escribir "document" y nuevamente se te dará una lista de opciones. Selecciona la primera. Esta es una referencia al objeto {{domxref("Document")}} (nuevamente, no te preocupes por lo que esto significa por ahora).
6. Justo después de `document`, escribe un punto (`.`) — ¡nuevamente obtendrás una lista de opciones, esta vez que contiene todas las propiedades y métodos disponibles en el objeto `document`!

Eso es suficiente por ahora. Sigamos adelante.

### Ayuda para la depuración

Los editores de código no pueden solucionar automáticamente todos los problemas de tu código, pero ciertamente pueden ayudarte a encontrar errores tipográficos y otros errores simples. Veamos un par de ejemplos.

1. Regresa a tu archivo JavaScript y elimina todo el código que tienes actualmente allí. Reemplázalo con lo siguiente:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. El pequeño icono de cruz a la derecha del listado de código anterior es la forma en que MDN indica un mal ejemplo de código, y con razón, ¡hay tres errores en el código anterior! Echa un vistazo al resaltado de VS Code para ver si puedes detectar cómo ha resaltado los errores, luego los recorreremos y los corregiremos juntos.
3. El primer error es que hemos usado `name` en la primera línea, pero `Name` en la segunda línea para referirnos a la misma variable. Este es un problema porque JavaScript distingue entre mayúsculas y minúsculas y, por lo tanto, considera que estos son dos nombres diferentes. VS Code ha resaltado esto de dos maneras diferentes: coloreando `name` de gris oscuro para indicar que el valor se declara pero nunca se usa (a menudo es una buena indicación de que has cometido un error tipográfico en alguna parte) y colocando tres puntos debajo de `Name` para indicar que tiene una sugerencia sobre cómo mejorar el código (en este caso, preguntando si querías escribir `name`). Para solucionar este error, cambia `Name` a `name`.
   > [!NOTE]
   > Puedes pasar el puntero del mouse sobre cada uno de los resaltados indicados para obtener más información.
4. El segundo error está en la sexta línea, donde escribimos `"Chris`. En JavaScript, un trozo de texto (conocido como **cadena**) debe estar envuelto en dos comillas, pero falta la segunda. VS Code ha resaltado esto subrayando el texto donde se nota el error por primera vez (puede que no sea el lugar exacto donde realmente está el error) con una línea roja ondulada, muy parecida a la que se usa en Microsoft Word para resaltar los errores de ortografía. Para solucionar esto, actualiza `"Chris` a `"Chris"`.
5. En la última línea, una pequeña parte del subrayado rojo ondulado permanece cerca del final, incluso después de que hayamos corregido el error anterior. Esto se debe al tercer error: en JavaScript, un corchete de apertura siempre necesita un corchete de cierre que lo acompañe. Corrige esto actualizando `(helloChris` a `(helloChris)`.

### Buscar y reemplazar

Todo editor de código que valga la pena tiene una función robusta de buscar y reemplazar. Esto es útil, por ejemplo, si descubres que se está produciendo un error en una función específica y quieres encontrarla en tu código, o si decides cambiar el nombre de una variable y necesitas asegurarte de que se cambie en todos los lugares que la referencian.

El concepto de buscar y reemplazar debería ser bastante familiar si has usado una computadora anteriormente, pero vamos a explorarlo rápidamente para completarlo:

1. Regresa a tu archivo JavaScript en VS Code y abre el panel de buscar y reemplazar en modo de búsqueda eligiendo _Editar_ > _Buscar_ del menú.
2. Escribe `createGreeting` en el cuadro _Buscar_, verás que ambas instancias están resaltadas y puedes moverte entre ellas con las flechas hacia arriba y hacia abajo en el panel. La instancia resaltada activamente actual tiene el resaltado más brillante.
3. Ahora abre el panel de buscar y reemplazar en modo de reemplazo eligiendo _Editar_ > _Reemplazar_ del menú, o haciendo clic en la flecha a la izquierda del cuadro _Buscar_.
4. Escribe `sayHello` en el cuadro _Reemplazar_ que ahora debería estar visible.
5. Ahora puedes reemplazar todas las instancias de `createGreeting` en el código con `sayHello` usando los dos botones a la derecha del cuadro _Reemplazar_. El botón de la izquierda se mueve a la siguiente instancia de la cadena de búsqueda con un solo clic y la reemplaza con un segundo clic. El botón de la derecha reemplaza todas las instancias con un solo clic.

VS Code tiene muchas características poderosas de buscar y reemplazar, consulta [Buscar y reemplazar](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace).

## Mejorar tu editor de código con extensiones

La mayoría de los editores de código tienen un sistema de extensión o plugin para permitirte agregar funcionalidad al programa que no está disponible de forma predeterminada. Estos pueden realizar una variedad de tareas, como:

- Habilitar la funcionalidad de autocompletado de código, análisis de código o depuración para lenguajes no admitidos de forma predeterminada, o proporcionar funcionalidad adicional para aquellos que sí lo son.
- Permitirte usar la funcionalidad de otras herramientas desde dentro del editor de código, como herramientas de control de versiones o servidores de prueba locales.
- Proporcionar interfaz de usuario adicional o temas de resaltado de código/esquemas de color.
- Sugerir fragmentos de código para cumplir con los requisitos. Estos se pueden generar a partir de plantillas estáticas o a través de herramientas de IA. El uso de IA para generar fragmentos de código tiene muchas de las mismas ventajas y advertencias que usarlo para generar resultados de búsqueda (consulta [Búsqueda de información > Uso de la IA](/es/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) para obtener más información).

Las extensiones de VS Code se administran a través del panel del Mercado de extensiones (Marketplace) en VS Code, al que se accede a través del menú _Ver_ > _Extensiones_. Exploremoslo ahora.

1. Abre el panel de extensiones.
2. En el cuadro _Buscar..._ en la parte superior del panel, escribe "JavaScript" para ver qué extensiones relacionadas con JavaScript están disponibles. Intenta hacer clic en algunos de los resultados de búsqueda que aparecen para ver qué tipo de cosas hacen. No instales ninguno de ellos por ahora.
3. En cambio, instalemos una extensión que sea fácil de entender y que sea útil para casi cualquier archivo de código en el que trabajes en este conjunto de módulos. Escribe "Prettier" en el cuadro _Buscar..._ y haz clic en el resultado _Prettier - code formatter_. Cuando la extensión [Prettier](https://prettier.io/) está instalada, se puede usar para formatear tu código cada vez que guardas un archivo, lo que hace que tu código sea mucho más fácil de leer como resultado.
4. Haz clic en el botón _Instalar_ en la pestaña _Extensión_. Cierra la pestaña cuando finalice la instalación.
5. Para que Prettier funcione, debes actualizar un par de configuraciones. Abre la pestaña de Configuración de VS Code (_Code_ > _Settings..._ > _Settings_ en macOS, _File_ > _Preferences_ > _Settings_ en Windows).
6. En el cuadro _Buscar configuración_ en la parte superior, escribe "formatter" para filtrar la lista de configuraciones y mostrar solo las que contienen "formatter".
7. Encuentra la opción _Editor: Default Formatter_ y selecciona la opción _Prettier - Code formatter_ del menú desplegable asociado.
8. Busca la opción _Editor: Format On Save_ y actívala haciendo clic en su casilla de verificación.
9. Cierra la pestaña _Configuración_.

Eso es toda la configuración realizada; veamos Prettier en acción.

1. Regresa a la pestaña de tu archivo JavaScript y guárdalo (_Archivo_ > _Guardar_). El archivo debe guardarse para que Prettier funcione. Llama a`test.js`. La ubicación en la que lo guardas realmente no importa.
2. Reemplaza el contenido actual con el siguiente código:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Guarda el archivo nuevamente; en este punto, Prettier debería reformatear el código de manera agradable, así:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
