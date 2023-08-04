---
title: document.cookie
slug: Web/API/Document/cookie
---

{{ApiRef("DOM")}}

### Resumen

Con `document.cookie` se obtienen y definen las `cookies` asociadas con el documento.

## Sintaxis

### Leer todas las cookies accesibles desde una localización

```js
todasLasCookies = document.cookie;
```

En el código anterior _`todasLasCookies`_ es una cadena que contiene una lista de todas las cookies separadas por punto y coma (en pares _`clave=valor`_). Tenga en cuenta que _clave_ y _valor_ pueden estar rodeadas por espacios en blanco (caracteres espacio y tabulación): de hecho [RFC 6265](https://tools.ietf.org/html/rfc6265) especifica que debe haber un espacio en blanco después de cada punto y coma (;), pero algunos agentes de usuario no son muy estrictos con esto.

### Escribir una nueva cookie

```js
document.cookie = nuevaCookie;
```

En el código anterior, _`nuevacookie`_ es una cadena de la forma _`clave=valor`_. Tenga en cuenta que solo se puede crear o actualizar una cookie de cada vez mediante este método. Considere también que:

- Cualquiera de los siguientes atributos opcionales se puede escribir después del par clave-valor, especificando la cookie que se va a crear o actualizar, precedidos de un punto y coma.

  - `;path=path` (p. ej.: '/'. '/midir'). Si no se especifica, por defecto corresponde a la ruta del documento actual.
    La ruta debe ser **absoluta** (ver [RFC 6265](https://tools.ietf.org/html/rfc6265)). Para más información sobre cómo utilizar rutas relativas, ir a [este párrafo](/es/docs/DOM/document.cookie#Using_relative_URLs_in_the_path_parameter).
  - `;domain=domain` (p. ej. 'example.com', 'subdomain.example.com'). Si no se especifica, su valor por defecto es la porción de la dirección web de la ubicación actual del archivo. A diferencia de lo que ocurría en las primeras especificaciones, los puntos iniciales de los nombre de dominio se ignoran, pero los navegadores pueden impedir crear cookies que contengan dichos puntos. Si se especifica un dominio, los subdominios siempre son incluidos.
  - `;max-age=duración-máxima-en-segundos` Por ejemplo: 60\*60\*24\*365 para un año.
  - `;expires=fecha-en-formato-GMTString` Si no se especifica `max-age` ni `expires`, la cookie expirará al terminar la sesión actual.
  - `;secure` La cookie sólo será transmitida en un protocolo seguro (HTTPS, SSL). Antes de Chrmoe 52, este atributo podía aparecer con cookes de dominios http.
  - `;samesite` Este atributo impide al navegador enviar esta cookie a través de peticiones cross-site. Los valores posibles son lax o strict. El soporte de este atributo se añadió en Chrome 51.

    - El valor _`strict`_ impide que la cookie sea enviada por el navegador al sitio destino en contexto de navegador cross-site, incluso cuando sigue un enlace regular.
    - El valor _`lax`_ sólo envía cookies a las peticiones de GET de ALTO NIVEL. Es suficiente para seguir al usuario, pero evitará muchos ataques CSRF.

- El valor de la cookie puede ser evaluado mediante [encodeURIComponent()](/es/Referencia_de_JavaScript_1.5/Funciones_globales/encodeURIComponent) para asegurarse de que dicha cadena no incluya comas, punto y coma, ni espacios en blanco (lo cual no está permitido en el valor de una cookie).
- Algunas implementaciones de agente de usuario soporta los siguientes prefijos de cookie:

  - `__Secure-` Señales para el navegador que solo deben incluirse en las perticiones de cookie transmitidas por un canal seguro.
  - `__Host-` Señales del navegador que además de la restricción de uso de cookies que provienen de un origen serugo, el ámbito de la cookie está limitado a un atributo path que proporciona el servidor. Si el servidor omite el atributo path, el directorio de las petición URI está en uso. Tabién las señales del atributo dominio no deben estar presentes, lo cual previene que la cookie sea usada en otros dominis. Para Chrome, el atributo path debe tener el mismo origen.

> **Nota:** Nótese que previamente a Gecko 6.0 (Firefox 6.0 / Thunderbird 6.0 / SeaMonkey 2.3), rutas que contenían comillas eran tratadas como si las comillas fueran parte de la cadena, en lugar de considerarse como un delimitador de la ruta actual. Esto ya ha sido arreglado.

## Ejemplos

### Ejemplo 1: Uso sencillo

```js
document.cookie = "nombre=oeschger";
document.cookie = "comida_preferida=tripa";
function alertCookie() {
  alert(document.cookie); // visualizar: nombre=oeschger;comida favorita=tripa
}
```

```html
<button onclick="alertCookie()">Mostrar cookies</button>
```

{{EmbedLiveSample('Example_1_Simple_usage', 200, 36)}}

### Ejemplo 2: Obtener una cookie de ejemplo llamada test2

```js
document.cookie = "test1=Hola";
document.cookie = "test2=Mundo";

var cookieValor = document.cookie.replace(
  /(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);

function alertCookieValue() {
  alert(cookieValor);
}
```

```html
<button onclick="alertCookieValue()">Mostrar valor de cookie</button>
```

{{EmbedLiveSample('Example_2_Get_a_sample_cookie_named_test2', 200, 36)}}

### Ejemplo 3: Hacer algo una sola vez

De manera a usar el siguiente código, favor remplace todas las veces la palabra `hacerAlgoUnaSolaVez` (el nombre de la cookie) con un nombre personalizado.

```js
function hazUnaVez() {
  if (
    document.cookie.replace(
      /(?:(?:^|.*;\s*)hacerAlgoUnaSolaVez\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    ) !== "true"
  ) {
    alert("Hacer algo aquí!");
    document.cookie =
      "hacerAlgoUnaSolaVez=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}
```

```html
<button onclick="dhacerUnaVez()">Solo hacer algo una vez</button>
```

{{EmbedLiveSample('Example_3_Do_something_only_once', 200, 36)}}

### Seguridad

Es importante mencionar que la restricción path no protege contra la lectura no autorizada de cookies de una ruta distinta. Puede ser fácilmente resuelto mediante DOM (por ejemplo creando un [iframe](/en/HTML/Element/iframe) oculto con la ruta de la cookie y accediendo a la propiedad contentDocument.cookie del iframe). La única manera de proteger el acceso a cookies es ocupando un dominio o subdominio diferente, debido a la [política de mismo origen](/en/Same_origin_policy_for_JavaScript).

### Notas

- Empezando con Firefox 2, está disponible un mejor mecanismo de almacenamiento en cliente - [WHATWG DOM Storage](/es/DOM/Storage).
- Puedes eliminar una cookie simplemente estableciendo su fecha de expiración a cero.
- Cabe mencionar que entre más cookies se tengan, mayor cantidad de datos serán transferidos entre el servidor y el cliente en cada solicitud. Esto reducirá el tiempo entre cada solicitud. Es altamente recomendado que se utilice [WHATWG DOM Storage](/es/DOM/Storage) si se van a mantener los datos solamente en el cliente.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
