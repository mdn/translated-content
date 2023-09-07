---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
---

{{HTTPSidebar}}

La cabecera **`Referrer-Policy`** de HTTP determina qué datos de referente, de entre los que se envían con la cabecera {{HTTPHeader("Referer")}}, deben incluirse con las solicitudes realizadas.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabecera</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxis

Observe que {{HTTPHeader("Referer")}} es una falta de ortografía; en inglés, la palabra correcta es _referrer_. La cabecera `Referrer-Policy` no contiene esta falta.

```
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

## Directivas

- no-referrer
  - : La cabecera {{HTTPHeader("Referer")}} se omitirá en su totalidad. No se enviará ningún dato de referente junto con las solicitudes.
- no-referrer-when-downgrade (predeterminado)
  - : Este es el comportamiento predeterminado del agente de usuario si no se especifica ninguna directiva. El origen se enviará como referente cuando el nivel de seguridad del protocolo permanece igual (HTTPS → HTTPS), pero no se enviará a destinos menos seguros (HTTPS → HTTP).
- origin
  - : Se enviará únicamente el origen del documento como referente en todos los casos. El documento `https://ejemplo.com/pagina.html` enviará el referente `https://ejemplo.com/`.
- origin-when-cross-origin
  - : Se enviará un URL completo al realizarse una solicitud de origen equivalente, pero únicamente el origen para otros casos.
- same-origin
  - : Se enviará un referente para [orígenes de sitio equivalente](/es/docs/Web/Security/Same-origin_policy), pero las solicitudes de origen transversal no contendrán ningún dato de referente.
- strict-origin
  - : Solo se enviará el origen del documento como referente a destinos que _a priori_ son igual de seguros (HTTPS → HTTPS), pero no lo recibirán destinos menos seguros (HTTPS → HTTP).
- strict-origin-when-cross-origin
  - : Se enviará un URL completo al realizarse una solicitud de origen equivalente, se enviará únicamente el origen del documento a destinos igual de seguros _a priori_ (HTTPS → HTTPS) y no se enviará ninguna cabecera a destinos menos seguros (HTTPS → HTTP).
- unsafe-url

  - : Se enviará un URL completo al realizarse una solicitud de origen equivalente o de origen transversal.

    > **Nota:** Esta directiva filtrará los orígenes y las rutas de acceso de recursos protegidos por TLS a orígenes inseguros. Estudie atentamente el impacto resultante de esta configuración.

## Ejemplos

| Directiva                             | Documento                               | Navegación a                          | Referente                               |
| ------------------------------------- | --------------------------------------- | ------------------------------------- | --------------------------------------- |
| **`no-referrer`**                     | <https://ejemplo.com/pagina.html>       | cualquier dominio o ruta de acceso    | ningún referente                        |
| **`no-referrer-when-downgrade`**      | <https://ejemplo.com/pagina.html>       | <https://ejemplo.com/otrapagina.html> | <https://ejemplo.com/pagina.html>       |
| **`no-referrer-when-downgrade`**      | <https://ejemplo.com/pagina.html>       | <https://mozilla.org>                 | <https://ejemplo.com/pagina.html>       |
| **`no-referrer-when-downgrade`**      | <https://ejemplo.com/pagina.html>       | <http://ejemplo.org>                  | ningún referente                        |
| **`origin`**                          | <https://ejemplo.com/pagina.html>       | cualquier dominio o ruta de acceso    | <https://ejemplo.com/>                  |
| **`origin-when-cross-origin`**        | <https://ejemplo.com/pagina.html>       | <https://ejemplo.com/otrapagina.html> | <https://ejemplo.com/pagina.html>       |
| **`origin-when-cross-origin`**        | <https://ejemplo.com/pagina.html>       | <https://mozilla.org>                 | <https://ejemplo.com/>                  |
| **`origin-when-cross-origin`**        | <https://ejemplo.com/pagina.html>       | <http://ejemplo.com/pagina.html>      | <https://ejemplo.com/>                  |
| **`same-origin`**                     | <https://ejemplo.com/pagina.html>       | <https://ejemplo.com/otrapagina.html> | <https://ejemplo.com/pagina.html>       |
| **`same-origin`**                     | <https://ejemplo.com/pagina.html>       | <https://mozilla.org>                 | ningún referente                        |
| **`strict-origin`**                   | <https://ejemplo.com/pagina.html>       | <https://mozilla.org>                 | <https://ejemplo.com/>                  |
| **`strict-origin`**                   | <https://ejemplo.com/pagina.html>       | <http://ejemplo.org>                  | ningún referente                        |
| **`strict-origin`**                   | <http://ejemplo.com/pagina.html>        | cualquier dominio o ruta de acceso    | <http://ejemplo.com/>                   |
| **`strict-origin-when-cross-origin`** | <https://ejemplo.com/pagina.html>       | <https://ejemplo.com/otrapagina.html> | <https://ejemplo.com/pagina.html>       |
| **`strict-origin-when-cross-origin`** | <https://ejemplo.com/pagina.html>       | <https://mozilla.org>                 | <https://ejemplo.com/>                  |
| **`strict-origin-when-cross-origin`** | <https://ejemplo.com/pagina.html>       | <http://example.org>                  | ningún referente                        |
| **`unsafe-url`**                      | <https://ejemplo.com/pagina.html?q=123> | cualquier dominio o ruta de acceso    | <https://ejemplo.com/pagina.html?q=123> |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Referente HTTP en Wikipedia](https://es.wikipedia.org/wiki/HTTP_referer)
- Otras maneras de definir una directiva de referentes:

  - Un elemento {{HTMLElement("meta")}} con un [nombre de `referrer`](/es/docs/Web/HTML/Element/meta#attr-name).
  - Un atributo `referrerpolicy` en un elemento {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}} o {{HTMLElement("link")}}.
  - La [relación de enlace](/es/docs/Web/HTML/Link_types) `noreferrer` en un elemento a, area o link (`rel="noreferrer"`).
  - Al utilizar [Fetch](/es/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}

- [Directiva de origen equivalente](/es/docs/Web/Security/Same-origin_policy)
- [«Un mayor control sobre sus referentes» en el blog de seguridad de Mozilla](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
