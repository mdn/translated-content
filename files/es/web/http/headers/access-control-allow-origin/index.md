---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
---

{{HTTPSidebar}}

El encabezado de respuesta **`Access-Control-Allow-Origin`** indica si los recursos de la respuesta pueden ser compartidos con el {{glossary("origin", "origen")}} dado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de encabezado</th>
      <td>
        {{Glossary("Response header", "Encabezado de respuesta")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "Nombre de encabezado prohibido")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origen>
Access-Control-Allow-Origin: null
```

## Directivas

- `*`
  - : Para las peticiones _sin credenciales_, el servidor puede especificar el caracter "\*" como un comodín, permitiendo a cualquier origen acceder al recurso. El acceso será permitido solamente para las peticiones hechas con el atributo {{htmlattrxref("crossorigin")}} definido como `"anonymous"`. Intentar usar el comodín con credenciales [resultará en un error](/es/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origen>`
  - : Especifica que origen puede acceder al recurso. Sólo se puede especificar un origen.

## Ejemplos

Para permitir a cualquier origen el acceso a tus recursos, puedes especificar:

```
Access-Control-Allow-Origin: *
```

Una respuesta que le dice al navegador que permita la petición de código del origen `https://developer.mozilla.org` para acceder a los recursos que incluyan lo siguiente:

```
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Limitando los posibles valores `Access-Control-Allow-Origin` de un conjunto de orígenes permitidos requiere código del lado del servidor para revisar el valor de la encabezado de petición {{HTTPHeader("Origin")}}, comparan con la lista de valores permitidos, y entonces si el valor {{HTTPHeader("Origin")}} se encuentra en la lista, para definir el valor de `Access-Control-Allow-Origin` al mismo valor que {{HTTPHeader("Origin")}}.

### CORS y caché

Si el servidor envía una respuesta con un valor `Access-Control-Allow-Origin` que es un origen explícito (en lugar del comodín "`*`"), entonces a respuesta debería incluir también el encabezado de respuesta {{HTTPHeader("Vary")}} con el valor `origin` - para indicar a los navegadores que las respuestas del servidor pueden diferir basadas en el valor del encabezado de respueta `Origin`.

```
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Veáse también

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
- [Cross-Origin Resource Sharing (CORS)](/es/docs/Web/HTTP/CORS)
