---
title: ¿Cómo se configura un servidor de prueba local?
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
---

En este artículo explica cómo configurar un servidor de prueba local simple en su equipo y los conceptos básicos de cómo utilizarlo.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Primero debes saber
        <a href="/es/docs/Learn/How_the_Internet_works"
          >cómo funciona internet</a
        >, y
        <a href="/es/docs/Learn/What_is_a_Web_server"
          >qué es un servidor web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectivo:</th>
      <td>Aprenderás cómo configurar un servidor de pruebas local</td>
    </tr>
  </tbody>
</table>

## Archivos locales versus archivos remotos

En la mayor parte del área de aprendizaje, te decimos que abras tus ejemplos directamente en un navegador — lo que se hace con doble clic en el archivo HTML, o arrastrándolo y soltándolo en una ventana del navegador o eligiendo _Archivo_ > _Abrir..._ y navegando al archivo HTML, etc. Hay muchas maneras de lograr esto.

Sabes si estás ejecutando el ejemplo desde un archivo local porque la dirección web tendrá `archivo://` al principio, seguido de la ruta al archivo en tu disco duro local. Por el contrario, si ves uno de nuestros ejemplos alojados en GitHub (o un ejemplo en algún otro servidor remoto), la dirección web tendrá `http://` o `https://` al principio, para mostrar que el archivo ha sido recibido a través de HTTP.

## El problema de probar archivos locales

Algunos ejemplos no se ejecutarán si los abre como archivos locales. Esto puede deberse a una variedad de razones, siendo las más probables:

- **Cuentan con peticiones asincrónicas**. Algunos navegadores (incluido chrome) no ejecutarán solicitudes asíncronas (consulte [Obtención de datos desde el servidor](/es/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)) si acaba de ejecutar el ejemplo desde un archivo local. Esto se debe a las restricciones de seguridad (para obtener más información sobre la seguridad web, lee [La seguridad del sitio web](/es/docs/Learn/Server-side/First_steps/Website_security)).
- **Cuenta con un lenguaje de servidor**. Los lenguajes de servidor (como PHP o Python) requieren de un servidor especial para interpretar el código y entregar los resultados.

## Ejecutando un servidor HTTP local simple

Para evitar el problema de las solicitudes asíncronas, necesitamos probar estos ejemplos ejecutándolos a través de un servidor web local. Una de las maneras más fáciles de hacer esto para nuestros propósitos es usar el módulo `SimpleHTTPServer` de Python.

Para hacer esto:

1. Instalar Python. Si usas Linux o Mac OS X, ya debe estar disponible en tu sistema. Si eres usuario de Windows, puedes conseguir un instalador desde la página principal de Python y seguir las instrucciones para instalarlo:

   - Vé a [python.org](https://www.python.org/)
   - Debajo de la sección de Descarga, haz clic en el link para Python "3.xxx".
   - En la parte superior de la página, selecciona el _instalador ejecutable windows x86_ y descárgalo.
   - Cuando se haya descargado, córrelo.
   - En la primera página de instalación, asegúrate de marcar el checkbox "Añadir Python 3.xxx a la ruta"
   - Clic en _Instalar_, luego clic en _Cerrar_ cuando la instalación ya haya finalizado.

2. Abre la terminal (windows)/terminal (OS X/Linux). Para chequear que Python está instalado, ingrese el siguiente comando.

   ```bash
   python -V
   ```

   > **Nota:** La v del ejemplo en mayuscula (V)

3. Esto debe retornar un número de versión. Si esto esta bien, navega al directorio que contiene tu ejemplo, usando el comando `cd`.

   ```bash
   # Incluye el nombre del directorio de entrar en él,
   por ejemplo cd Escritorio

   # Use dos puntos para regresar un nivel de directorio
   si es necesario,por ejemplo cd ../
   ```

4. Ingresa el comando para iniciar el servidor en ese directorio:

   ```bash
   # En Mac y Linux
   python -m SimpleHTTPServer
   #Windows
   python -m http.server
   ```

5. Por defecto, se ejecutará el contenido del directorio en un servidor web local, en el puerto 8000. puedes ir a este servidor yendo a la URL `localhost:8000` en tu navegador web. Aquí verá el contenido del directorio listado - haga clic en el archivo HTML que desea ejecutar.

> **Nota:** si ya tienes corriendo algo en el puerto 8000, puedes escoger otro puerto corriendo el siguiente comando de servidor por un número de puerto alternativo, por ejemplo `python -m SimpleHTTPServer 7800`. Puedes acceder a tu contenido en el `localhost:7800`.

## Ejecución de lenguajes del lado del servidor localmente

El módulo `SimpleHTTPServer` de Python es útil, pero desconoce como ejecutar el código escrito en lenguajes como PHP o Python. Para resolver eso necesitarás algo más — lo que necesitarás exactamente depende del lenguaje del lado del servidor que estas intentando de ejecutar. Aquí están un par de ejemplos:

- Para ejecutar el código del lado del servidor Python, necesitrá utilizar un framework web python. Puedes averiguar cómo usar el framework Django leyendog [Django Web Framework (Python)](/es/docs/Learn/Server-side/Django). [Flask](http://flask.pocoo.org/) también es buena alternativa a Django (ligeramente menos pesado). Para ejecutar esto necesitarás [instalar Python/PIP](/es/docs/Learn/Server-side/Django/development_environment#Installing_Python_3), luego instala Flask usando `pip3 install flask`. En este punto, deberías ser capaz de ejecutar los ejemplos de Python Flask usando por ejemplo `python3 python-example.py`, luego navegar al `localhost:5000` en tu navegador.
- Para ejecutar código Node.js (JavaScript) del lado del servidor, necesitarás usar el nodo raw o un framework construido encima de él. Express es una buena opción — mira [Express Web Framework (Node.js/JavaScript)](/es/docs/Learn/Server-side/Express_Nodejs).
- Para ejecutar código PHP del lado del servidor, necesitarás una configuración de servidor que pueda interpretar PHP. Las buenas opciones para los testeos locales de PHP son [MAMP](https://www.mamp.info/en/downloads/) (Mac y Windows) t [AMPPS](http://ampps.com/download) (Mac, Windows, Linux). Estos son paquetes completos que crean configuraciones locales que permiten ejecutar servidor Apache, PHP, y base de datos MySQL.
