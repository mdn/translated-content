---
title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
original_slug: Web/HTTP/Headers/Set-Cookie
---

La cabecera de respuesta HTTP **Set-Cookie** se usa para enviar cookies desde el servidor al agente de usuario, así el agente de usuario puede enviarlos de vuelta al servidor.Para más información, visite la [guía para cookies HTTP](/es/docs/Web/HTTP/Guides/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabecera</th>
      <td>
        {{Glossary("Response header", "Respuesta del encabezado")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "Nombre prohibido del encabezado")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None

// Es posible usar múltiples directivas, por ejemplo:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## Directivas

- Si se omite, se define el húesped como la URL del documento actual, sin incluir subdominios.
- Contrario a la especificación anterior, puntos principales en el nombre del domino (`.ejemplo.com`) son ignorados.
- Si un dominio _es_ especificado, los subdominios son también incluidos.

<!---->

- If omitted, defaults to the host of the current document URL, not including subdomains.
- Contrary to earlier specifications, leading dots in domain names (`.example.com`) are ignored.
- If a domain _is_ specified, subdomains are always included.

<!---->

- `<cookie-name>=<cookie-value>`
  - : Una cookie comienza con un par nombre-valor:
    - Un `<cookie-name>` puede ser cualquier cosa excepto caracteres de control (CTLs) o espacios y tabulaciones. Tampoco debe contener caracteres de separación como los siguientes: `( ) < > @ , ; : \ " / [ ] ? = { }`.
    - Un `<cookie-value>` opcionalmente puede ser establecido dentro de comillas dobles y se permite usar cualquier caracter US-ASCII excluyendo CTLs, espacios en blanco, comillas dobles, comas, punto y coma y la barra invertida. **Codificación:** Muchas implementaciones realizan codificación de URL sobre los valores de la cookie, aunque esto no es requerido por la especificación RFC. Esto ayuda a satisfacer los requerimientos sobre los caracteres permitidos para \<cookie-value>.
    - **`Prefijo __Secure-`**: Las cookies cuyo nombre comience por `__Secure-` (los guiones forman parte del prefijo) deben ser establecidas con la bandera `secure` y deben provenir de una página segura (HTTPS).
    - **`Prefijo __Host-`**: Las cookies cuyo nombre comience por `__Host-` deben ser establecidas con la bandera `secure`, provenir de una página segura (HTTPS), no deben tener especificado un dominio (y por tanto no son enviadas a subdominios) y la ruta debe ser "/".

- Expires=\<date> {{optional_inline}}
  - : El tiempo de vida máximo útil de una cookie como marca HTTP-date timestamp. Ver {{HTTPHeader("Date")}} para el detalle del formato.

    Si no está especificado, la cookie tendrá el tiempo de vida de una **session cookie.** Una sesión finaliza cuando el cliente lo culmina, esto quiere decir que la sesión será removida en ese punto.

    > [!WARNING]
    > Sin embargo, muchos navegadores web tiene una caracteristica llamada "restaurar" que almacenará todas tus pestañas para tenerlas lista cuando el navegador sea usado nuevamente. Las cookies de sesión tambien estarán presentes como si nunca se hubiera cerrado el navegador.

    Cuando una fecha de Expires es definida, la fecha límite es relativa al _cliente_ donde la cookie se define, no en el servidor.

- `Max-Age=<non-zero-digit>` {{optional_inline}}
  - : Número de segundos hasta que la cookie expire. Un cero o un número negativo hace expirar la cookie inmediatamente. Los navegadores antiguos (ie6, ie7, and ie8) no soportan max-age. Para otros navegadores, si ambos estan definidos (`Expires` y `Max-Age`), `Max-Age` tendrá mayor importancia.
- `Domain=<domain-value>` {{optional_inline}}
  - : Anfitriones donde la cookie será enviada.
    - Si se omite, por defecto el huésped es la URL del documento actual, sin incluir subdominios.
    - Contraria a anteriores especificaciones, los puntos principales en nombres de dominio (`.example.com`) son ignorados.
    - Si un dominio _es_ especificado, los subdominios son siempre incluídos.

- `Path=<path-value>` {{optional_inline}}
  - : Una ruta que debe existir en la URL solicitada, o el navegador no enviará el encabezado `Cookie`.
    El caracter diagonal (`/`) es interpretado como un separador de directorios y subdirectorios que serán también comparados: para `Path=/docs`, `/docs`, `/docs/Web/`, y `/docs/Web/HTTP` todos tendrán que coincidir.
- `Secure` {{optional_inline}}
  - : Una cookie segura es sólo enviada al servidor cuando una petición es enviada con el esquema `https:`. (Sin embargo, información confidencial nunca debería ser almacenada en Cookies HTTP, como todo el mecanismo es However, confidential information should never be stored in HTTP Cookies, ya que todo el mecanismo es inherentemente inseguro y no encripta ninguna información.)

    > [!NOTE]
    > Sitios inseguros (`http:`) no puenden almacenar directivas "seguras" apartir de Chrome 52+ y Firefox 52+.

- `HttpOnly` {{optional_inline}}
  - : Impide que el código JavaScript acceda a la cookie. Por ejemplo, a través de la propiedad {{domxref("Document.cookie")}}, y la API {{domxref("XMLHttpRequest")}}, o la API {{domxref("Request")}}. Esto mitiga los ataques contra scripts cross-site ({{Glossary("XSS")}}).
- `SameSite=<samesite-value>` {{optional_inline}}
  - : &#x20;
    - `Strict`
    - `Lax`
    - `None`

    Afirma que una cookie no debe ser enviada con peticiones cruzadas, proveiendo alguna protección contra ataques de falsificación de solicitudes cruzadas ({{Glossary("CSRF")}}).

    > [!NOTE]
    > Los navegadores haciendo migraciones para que el comportamiento por defecto de las cookies en lugar de [default sea `SameSite=Lax`](https://www.chromestatus.com/feature/5088147346030592). Si una cookie necesita ser enviada en peticiones cruzadas, se tiene que optar por no restringir el mismo sitio (SameSite) usando la directiva `None`. La directiva `None` requiere el atributo [`Secure`](#secure).

## Ejemplos

### Session cookie

Las **cookies de sesión** son removidas cuando el cliente se apaga. Las cookies son cookies de sesión si no se especifican las directivas `Expires` o `Max-Age`.

```
Set-Cookie: sessionId=38afes7a8
```

### Permanent cookie

En lugar de expirar cuando el cliente se cierra, las **cookies permanentes** expiran en una fecha especifica (`Expires`) o después de una longitud de tiempo determinado (`Max-Age`).

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Invalid domains

Una cookie para un dominio que no incluya el servidor que la defina [debería ser rechazada por el agente de usuario](https://tools.ietf.org/html/rfc6265#section-4.1.2.3).

La siguiente cookie sera rechazada si se define por el servidor ubicado en `originalcompany.com` como:

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

Una cookie para el subdomino del dominio actual será rechazada.

La siguiente cookie sera rechazada si el servidor anfitrión en `example.com` la define como:

```
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie prefixes

Los nombres de las cookies prefijadas con `__Secure-` o `__Host-` pueden ser solo usadas si son definidas con la directiva `secure` desde un origen (HTTPS) seguro.

Además, cookies con el prefijo `__Host-` deben tener una ruta de `/` (significando cualquier ruta del huésped) y no debe tener un atributo `Domain`.

> [!WARNING]
> Para clientes que no implementan prefijos para las cookies, no se puede contar con que estas garantías adicionales, y las cookies prefijadas sean aceptadas.

```
// Ambas aceptadas al venir de un origen seguro (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rechazada por faltar la directiva Secure
Set-Cookie: __Secure-id=1

// Rechazada por faltar la directiva Path=/
Set-Cookie: __Host-id=1; Secure

// Rechazada por definir un dominio
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Notas de compatibilidad

- Empezando con Chrome 52 y Firefox 52, sitios inseguros (`http:`) no pueden definirse cookies con la directiva 'secure'.

## Ver también

- [HTTP cookies](/es/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
