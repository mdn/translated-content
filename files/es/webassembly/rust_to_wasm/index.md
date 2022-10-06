---
title: Compilar de Rust a WebAssembly
slug: WebAssembly/Rust_to_wasm
tags:
  - Compiling
  - Compilar
  - WebAssembly
  - rust
  - wasm
---

{{WebAssemblySidebar}}

Si tienes código Rust, lo puedes compilar en [WebAssembly](/es/docs/WebAssembly) (wasm). Este tutorial te enseña todo lo que necesitas saber para compilar un proyecto de Rust a `.wasm` y usarlo en una aplicación web existente.

## Casos de uso de Rust y WebAssembly

Hay dos casos de uso principales para Rust y WebAssembly:

- Crea una aplicación completa: una aplicación web completa basada en Rust.
- Crea una parte de una aplicación: usa Rust en una interfaz de JavaScript existente.

Por ahora, el equipo de Rust se está enfocando en el último caso, y eso es lo que cubrimos aquí. Para el primer caso, consulta proyectos como [`yew`](https://github.com/yewstack/yew).

En este tutorial, construimos un paquete usando `wasm-pack`, una herramienta para construir paquetes de JavaScript en Rust. Este paquete solo contendrá código WebAssembly y JavaScript, por lo que los usuarios del paquete no necesitarán que Rust esté instalado. Es posible que ni siquiera se den cuenta de que está escrito en Rust.

## Configurar el entorno Rust

Repasemos todos los pasos necesarios para configurar nuestro entorno.

### Instalar Rust

Instala Rust yendo a la página [Instalar Rust](https://www.rust-lang.org/tools/install) y sigue las instrucciones. Esto instala una herramienta llamada "rustup", que te permite administrar varias versiones de Rust. De forma predeterminada, instala la última versión estable de Rust, que puedes usar para el desarrollo general de Rust. Rustup instala `rustc`, el compilador de Rust, así como `cargo`, el administrador de paquetes de Rust, `rust-std`, las bibliotecas estándar de Rust y algunos documentos útiles: `rust-docs`.

> **Nota:** Presta atención a la nota posterior a la instalación sobre la necesidad del directorio `bin` de cargo en la variable `PATH` de tu sistema. Esto se agrega automáticamente, pero debes reiniciar tu terminal para que surta efecto.

### wasm-pack

Para construir el paquete, necesitamos una herramienta adicional, `wasm-pack`. Esto ayuda a compilar el código en WebAssembly, así como a producir el paquete correcto para usar en el navegador. Para descargarlo e instalarlo, ingresa el siguiente comando en tu terminal:

```bash
cargo install wasm-pack
```

## Construir nuestro paquete WebAssembly

Suficiente configuración; vamos a crear un nuevo paquete en Rust. Navega hasta donde guardes tus proyectos personales y escribe esto:

```bash
$ cargo new --lib hello-wasm
     Created library `hello-wasm` project
```

Esto crea una nueva biblioteca en un subdirectorio llamado `hello-wasm` con todo lo que necesitas para empezar:

```plain
+-- Cargo.toml
+-- src
    +-- lib.rs
```

Primero, tenemos `Cargo.toml`; este es el archivo que usamos para configurar nuestra compilación. Si has utilizado `Gemfile` de Bundler o `package.json` de npm, es probable que te resulte familiar; Cargo funciona de manera similar a ambos.

A continuación, Cargo ha generado código Rust para nosotros en `src/lib.rs`:

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

No usaremos este código de prueba en absoluto, así que adelante, elimínalo.

### Escribamos algo de Rust

Pongamos este código en `src/lib.rs` en su lugar:

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Este es el contenido de nuestro proyecto Rust. Tiene tres partes principales; hablaremos de cada uno de ellos a su vez. Damos una explicación de alto nivel aquí y pasamos por alto algunos detalles; para obtener más información sobre Rust, consulta el libro en línea gratuito [El lenguaje de programación Rust](https://doc.rust-lang.org/book/).

#### Usar `wasm-bindgen` para comunicarse entre Rust y JavaScript

La primera parte se ve así:

```rust
use wasm_bindgen::prelude::*;
```

Las bibliotecas se llaman "cajas" —`crates`— en Rust.

¿Lo tienes? _Cargo_ viene con _crates_.

La primera línea contiene un comando `use`, que importa código de una biblioteca a tu código. En este caso, estamos importando todo en el módulo `wasm_bindgen::prelude`. Utilizaremos estas características en la siguiente sección.

Antes de pasar a la siguiente sección, deberíamos hablar un poco más sobre `wasm-bindgen`.

`wasm-pack` usa `wasm-bindgen`, otra herramienta, para proporcionar un puente entre los tipos de JavaScript y Rust. Permite que JavaScript llame a una API de Rust con una cadena o una función de Rust para detectar una excepción de JavaScript.

Usamos la funcionalidad `wasm-bindgen` en nuestro paquete. De hecho, esa es la siguiente sección.

#### Llamar a funciones externas en JavaScript desde Rust

La siguiente parte se ve así:

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

El bit dentro de `#[ ]` se llama "atributo", y modifica la siguiente declaración de alguna manera. En este caso, esa declaración es una `extern`, que le dice a Rust que queremos llamar a algunas funciones definidas externamente. El atributo dice "wasm-bindgen sabe cómo encontrar estas funciones".

La tercera línea es una firma de función, escrita en Rust. Dice que "la función `alert` toma un argumento, una cadena llamada `s`".

Como puedes sospechar, esta es [la función `alert` proporcionada por JavaScript](/es/docs/Web/API/Window/alert). Llamaremos a esta función en la siguiente sección.

Siempre que desees llamar a las funciones de JavaScript, las puedes agregar a este archivo y `wasm-bindgen` se encarga de configurar todo. Todavía no todo es compatible, pero estamos trabajando en ello. Por favor, ve el [archivo bugs](https://github.com/rustwasm/wasm-bindgen/issues/new) si falta algo.

#### Producir funciones Rust que JavaScript puede llamar

La parte final es esta:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Una vez más, vemos el atributo `#[wasm_bindgen]`. En este caso, no está modificando un bloque `extern`, sino una `fn`; esto significa que queremos que JavaScript pueda llamar a esta función Rust. Es lo contrario de `extern`: estas no son las funciones que necesitamos, sino las funciones que le estamos dando al mundo.

Esta función se llama `greet` y toma un argumento, una cadena (escrita `&str`), `name`. Luego llama a la función `alert` que solicitamos en el bloque `extern` anterior. Pasa una llamada a la macro `format!`, que nos permite concatenar cadenas.

La macro `format!` toma dos argumentos en este caso, una cadena de formato y una variable para ponerla. La cadena de formato es el bit `"¡Hola, {}!"`. Contiene `{}`s, donde se interpolarán las variables. La variable que estamos pasando es `name`, el argumento de la función, por lo que si llamamos a `greet("Steve")` deberíamos ver `"¡Hola, Steve!".`

Esto se pasa a `alert()`, por lo que cuando llamemos a esta función veremos un cuadro de alerta con "¡Hola, Steve!".

Ahora que nuestra biblioteca está escrita, vamos a construirla.

### Compilar nuestro código a WebAssembly

Para compilar correctamente nuestro código, primero lo debemos configurar con `Cargo.toml`. Abre este archivo y cambie su contenido para que se vea así:

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Completa tu propio repositorio y usa la misma información que usa `git` para el campo `authors`.

La gran parte a agregar es el `[package]`. La parte `[lib]` le dice a Rust que construya una versión `cdylib` de nuestro paquete; no entraremos en lo que eso significa en este tutorial. Para obtener más información, consulta la  documentación de [Cargo](https://doc.rust-lang.org/cargo/guide/) y [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html).

La última sección es la sección `[dependencies]`. Aquí es donde le decimos a Cargo de qué versión de `wasm-bindgen` queremos depender; en este caso, es cualquier versión `0.2.z` (pero no `0.3.0` o superior).

### Construir el paquete

Ahora que tenemos todo configurado, construyamos el paquete. Escribe esto en tu terminal:

```bash
wasm-pack build --target web
```

Esto hace varias cosas (y toman mucho tiempo, especialmente la primera vez que ejecutas `wasm-pack`). Para conocerlos en detalle, consulta [esta publicación del blog sobre Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). En resumen, `wasm-pack build`:

1. Compila tu código Rust a WebAssembly.
2. Ejecuta `wasm-bindgen` en ese WebAssembly, generando un archivo JavaScript que envuelve ese archivo WebAssembly en un módulo que el navegador puede entender.
3. Crea un directorio `pkg` y mueve ese archivo JavaScript y tu código WebAssembly a él.
4. Lee tu `Cargo.toml` y produce un `package.json` equivalente.
5. Copia tu `README.md` (si tienes uno) en el paquete.

¿El resultado final? Tienes un paquete dentro del directorio `pkg`.

#### Una digresión sobre el tamaño del código

Si verificas el tamaño del código WebAssembly generado, puede ser de unos pocos cientos de kilobytes. No le hemos indicado a Rust que optimice el tamaño en absoluto, y al hacerlo reduce _mucho_ el tamaño. Esto va más allá del alcance de este tutorial, pero si deseas obtener más información, consulta la documentación del grupo de trabajo de Rust WebAssembly sobre [Reducción del tamaño de .wasm](https://rustwasm.github.io/book/game-of -life/code-size.html#shrinking-wasm-size).

## Usando el paquete en la web

Ahora que tenemos un módulo `wasm` compilado, ejecútalo en el navegador.

Comencemos por crear un archivo llamado `index.html` en la raíz del proyecto y le daremos el siguiente contenido:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Ejemplo hello-wasm</title>
  </head>
  <body>
    <script type="module">
      import init, { greet } from "./pkg/hello_wasm.js";
      init().then(() => {
        greet("WebAssembly");
      });
    </script>
  </body>
</html>
```

El script en este archivo importará el código "pegamento" js, inicializará el módulo `wasm` y llamará a la función `greet` que escribimos en Rust.

Sirve el directorio raíz del proyecto con un servidor web local (por ejemplo, `python3 -m http.server`). Si no estás seguro de cómo hacerlo, consulta [Ejecutar un servidor HTTP local simple](/es/docs/Learn/Common_questions/set_up_a_local_testing_server#ejecutando_un_servidor_http_local_simple).

> **Nota:** Asegúrate de utilizar un servidor web actualizado que admita el tipo MIME `application/wasm`. Es posible que los servidores web más antiguos aún no lo admitan.

Carga `index.html` desde el servidor web (si usaste el ejemplo de Python3: `http://localhost:8000`). Aparece un cuadro de alerta en la pantalla con `¡Hola, WebAssembly!`. Hemos llamado con éxito desde JavaScript a Rust y de Rust a JavaScript.

## Hacer que nuestro paquete esté disponible para npm

Si deseas utilizar el módulo WebAssembly con npm, deberemos realizar algunos cambios.

Comencemos por volver a compilar Rust con la opción del paquete destino:

```bash
wasm-pack build --target bundler
```

### Instala Node.js y npm

Estamos creando un paquete npm, por lo que debes tener instalados Node.js y npm.

Para obtener Node.js y npm, ve a la página [¡Obtener npm!](https://docs.npmjs.com/getting-started/) y sigue las instrucciones. Cuando se trata de elegir una versión, elige la que desees; este tutorial no es específico de la versión.

A continuación, usemos \`npm link\` para que este paquete esté disponible para otros paquetes de JavaScript instalados

```bash
cd pkg
npm link
```

Ahora tenemos un paquete npm, escrito en Rust, pero compilado en WebAssembly. Está listo para usarlo desde JavaScript y no requiere que el usuario tenga Rust instalado; el código incluido era el código WebAssembly, no la fuente de Rust.

### Usar el paquete npm en la web

Construyamos un sitio web que usa nuestro nuevo paquete npm. Mucha gente usa paquetes npm a través de varias herramientas de agrupación, y usaremos una de ellas, `webpack`, en este tutorial. Es solo un poco complejo y muestra un caso de uso realista.

Salgamos del directorio `pkg` y hagamos un nuevo directorio, `site`, para probar esto en:

```bash
cd ..
mkdir site
cd site
npm link hello-wasm
```

Crea un nuevo archivo, `package.json`, y coloca el siguiente código en él:

```json
{
  "scripts": {
    "serve": "webpack-dev-server"
  },
  "dependencies": {
    "hello-wasm": "^0.1.0"
  },
  "devDependencies": {
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}
```

A continuación, debemos configurar Webpack. Crea `webpack.config.js` y coloca lo siguiente en él:

```js
const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
};
```

Luego, crea un archivo llamado `index.js` y dale este contenido:

```js
import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {
  js.greet("WebAssembly with npm");
});
```

Esto importa el nuevo módulo desde el directorio `node_modules`. Esto no se considera una práctica recomendada, pero es una demostración, por lo que está bien por ahora. Una vez cargado, llama a la función `greet` desde ese módulo, pasando `"WebAssembly"` como una cadena. Ten en cuenta que no hay nada especial aquí, pero estamos llamando al código Rust. Por lo que el código JavaScript puede decir, este es solo un módulo normal.

Finalmente, necesitamos modificar el archivo HTML; abre el archivo `index.html` y reemplaza el contenido actual con lo siguiente:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Ejemplo hello-wasm</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

Hemos terminado de crear archivos. Vamos a darle una oportunidad a esto:

```bash
npm install
npm run serve
```

Esto inicia un servidor web. Carga `http://localhost:8080` y aparecerá un cuadro de alerta en la pantalla, con `Hola, WebAssembly with npm!`. Hemos utilizado con éxito el módulo Rust con npm.

## Conclusión

Este es el final de nuestro tutorial; esperamos que lo hayas encontrado útil.

Hay mucho trabajo emocionante en este espacio; si deseas ayudar a mejorarlo aún más, consulta el [Grupo de trabajo de Rust WebAssembly](https://fitzgeraldnick.com/2018/02/27/wasm-domain-working-group.html).
