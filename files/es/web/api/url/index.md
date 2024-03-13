---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("URL API")}}

La interfaz **`URL`** se usa para analizar, construir, normalizar y codificar las {{glossary("URL")}}. Funciona proporcionando propiedades que le permiten leer y modificar fácilmente los componentes de una URL.

Normalmente creas un nuevo objeto `URL` especificando la URL como una cadena cuando llamas a su constructor, o proporcionando una URL relativa y una URL base. A continuación, puede leer fácilmente los componentes analizados de la URL o realizar cambios en la URL.

Si un navegador aún no es compatible con el constructor {{domxref("URL.URL", "URL()")}}, puede acceder a un objeto de URL usando la propiedad domxref("URL")}} de la interfaz {{domxref("Window")}}. Asegúrese de verificar si alguno de sus navegadores de destino requiere que esto tenga un prefijo.

{{AvailableInWorkers}}

## Constructor

- {{domxref("URL.URL", "URL()")}}
  - : Crea y devuelve un objeto `URL` que hace referencia a la URL especificada utilizando una cadena de URL absoluta o una cadena de URL relativa y una cadena de URL base.

## Propiedades de instancia

- {{domxref("URL.hash", "hash")}}
  - : Una cadena que contiene un `'#'` seguido del identificador de fragmento de la URL.
- {{domxref("URL.host", "host")}}
  - : Una cadena que contiene el dominio (que es el _hostname_) seguido de (si se especificó un puerto) un `':'` y el _puerto_ de la URL.
- {{domxref("URL.hostname", "hostname")}}
  - : Una cadena que contiene el dominio de la URL.
- {{domxref("URL.href", "href")}}
  - : Un {{Glossary("stringifier")}} que devuelve una cadena que contiene la URL completa.
- {{domxref("URL.origin", "origin")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que contiene el origen de la URL, es decir, su esquema, su dominio y su puerto.
- {{domxref("URL.password", "password")}}
  - : Una cadena que contiene la contraseña especificada antes del nombre de dominio.
- {{domxref("URL.pathname", "pathname")}}
  - : Una cadena que contiene un `'/'` inicial seguido de la ruta de la URL, sin incluir la cadena de consulta o el fragmento.
- {{domxref("URL.port", "port")}}
  - : Una cadena que contiene el número de puerto de la URL.
- {{domxref("URL.protocol", "protocol")}}
  - : Una cadena que contiene el esquema de protocolo de la URL, incluido el `':'` final.
- {{domxref("URL.search", "search")}}
  - : Una cadena que indica la cadena de parámetros de la URL; si se proporciona algún parámetro, esta cadena los incluye a todos, comenzando con el carácter `?` inicial.
- {{domxref("URL.searchParams", "searchParams")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("URLSearchParams")}} que se puede usar para acceder a los parámetros de consulta individuales que se encuentran en la `búsqueda`.
- {{domxref("URL.username","username")}}
  - : Una cadena que contiene el nombre de usuario especificado antes del nombre de dominio.

## Métodos estáticos

- [`canParse()`](/es/docs/Web/API/URL/canParse_static)
  - : Devuelve un valor booleano que indica si una URL definida a partir de una cadena de URL y una cadena de URL base opcional es analizable y válida.
- {{domxref("URL.createObjectURL", "createObjectURL()")}}
  - : Devuelve una cadena que contiene una URL de un [blob](/es/docs/Web/API/Blob) única, es decir, una URL con `blob:` como esquema, seguida de una cadena opaca que identifica de forma única el objeto en el navegador.
- {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}
  - : Revoca una URL de objeto creada previamente usando {{domxref("URL.createObjectURL()")}}.

## Métodos de instancia

- {{domxref("URL.toString", "toString()")}}
  - : Devuelve una cadena que contiene la URL completa. Es un sinónimo de {{domxref("URL.href")}}, aunque no se puede usar para modificar el valor.
- {{domxref("URL.toJSON", "toJSON()")}}
  - : Devuelve una cadena que contiene la URL completa. Devuelve la misma cadena que la propiedad `href`.

## Notas de uso

El constructor toma un parámetro `url` y un parámetro `base` opcional para usar como base si el parámetro `url` es una URL relativa:

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

El constructor generará una excepción si la URL no se puede analizar como una URL válida.
Puede llamar al código anterior en un bloque [`try...catch`](/es/docs/Web/JavaScript/Reference/Statements/try...catch) o usar el método estático [`canParse()`](/es/docs/Web/API/URL/canParse_static) para comprobar primero que la URL es válida:

```js
if (URL.canParse("../cats", "http://www.example.com/dogs")) {
  const url = new URL("../cats", "http://www.example.com/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/cats"
} else {
  console.log("URL invalida"); //URL invalida
}
```

Las propiedades de URL se pueden configurar para construir la URL:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/cats#tabby"
```

Las URL se codifican de acuerdo con las reglas que se encuentran en el {{RFC(3986)}}. Por ejemplo:

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

La interfaz {{domxref("URLSearchParams")}} se puede utilizar para crear y manipular la cadena de consulta de URL.

Para obtener los parámetros de búsqueda de la URL de la ventana actual, puede hacer esto:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

El método {{domxref("URL.toString", "toString()")}} de `URL` solo devuelve el valor de la propiedad {{domxref("URL.href", "href")}}, por lo que El constructor se puede usar para normalizar y codificar una URL directamente.

```js
const response = await fetch(
  new URL("http://www.example.com/démonstration.html"),
);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `URL` en `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [API de URL](/es/docs/Web/API/URL_API)
- [¿Qué es una URL?](/es/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- Propiedad para obtener un objeto `URL`: {{domxref("URL")}}.
- {{domxref("URLSearchParams")}}.
