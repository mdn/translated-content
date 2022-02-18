---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
translation_of: Web/HTTP/Headers/X-Frame-Options
tags:
  - Gecko
  - HAProxy
  - HTTP
  - Response Header
  - Security
  - nginx
browser-compat: http.headers.X-Frame-Options
---
{{HTTPSidebar}}

El encabezado de respuesta [HTTP](/es/docs/Web/HTTP) **`X-Frame-Options`** puede ser usado para indicar si debería permitírsele a un navegador renderizar una página en un {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} u {{HTMLElement("object")}}. Las páginas web pueden usarlo para evitar ataques de [click-jacking](/en-US/docs/Web/Security/Types_of_attacks#click-jacking), asegurándose de que su contenido no es embebido en otros sitios.

La seguridad añadida sólo es proporcionada si el usuario que está accediendo al documento está utilizando un navegador que soporte `X-Frame-Options`.


> **Nota:** El encabezado HTTP {{HTTPHeader("Content-Security-Policy")}} tiene una directiva {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} que deja [obsoleto](https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options) este encabezado para los navegadores compatibles. 

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de encabezado</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxis

Existen dos posibles directivas para `X-Frame-Options`:

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Directivas

Si especifica `DENY`, fallarán no sólo los intentos de cargar la página en un marco desde otros sitios, sino que fallarán cuando sea cargada desde el mismo sitio. Por otro lado, si especifica `SAMEORIGIN`, puede usar la página en un marco mientras el sitio que la incluya sea el mismo que la sirve.

- `DENY`
  - : La página no puede ser mostrada en un marco, independiente del sitio que esté intentándolo.
- `SAMEORIGIN`
  - : La página sólo puede ser mostrada en un marco del mismo origen que dicha página.   La especificación deja que los proveedores de navegadores decidan si esta opción se aplica al nivel superior, al padre o a toda la cadena, aunque se argumenta que la opción no es muy útil a menos que todos los padres también estén en el mismo origen (ver {{bug(725490)}}). Consulte también {{anch("Browser compatibility")}} para obtener detalles de soporte. 
- `ALLOW-FROM uri` {{deprecated_inline}}
  - : Esta es una directiva obsoleta que ya no funciona en navegadores modernos. No usar. En el soporte de navegadores antiguos, una página se puede mostrar en un marco solo en el origen especificado _uri_. Tenga en cuenta que en versiones anteriores de  Firefox esto todavía sufre del mismo problema que `SAMEORIGIN` — no verifica los antecesores del marco para ver si están en el mismo origen. El encabezado HTTP {{HTTPHeader("Content-Security-Policy")}} tiene una directiva  {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} que puede usar en su lugar.

## Ejemplos

> **Nota:** ¡Configurar X-Frame-Options en el tag {{HTMLElement("meta")}} es inútil!  Por ejemplo, `<meta http-equiv="X-Frame-Options" content="deny">` no tiene efecto. ¡No lo use! `X-Frame-Options` sólo funcionará configurandolo a tráves del encabezado HTTP, como en los ejemplos a continuación.

### Configurando Apache

Agregue lo siguiente a la configuración de su sitio para que Apache envíe el encabezado `X-Frame-Options` para todas las páginas:

```
Header always set X-Frame-Options "SAMEORIGIN"
```

Para que Apache envíe `X-Frame-Options` deny, agregue lo siguiente a la configuración de su sitio:

```
Header set X-Frame-Options "DENY"
```

### Configurando nginx

Para configurar nginx a que envíe el encabezado `X-Frame-Options`, agregue esto a la configuración, ya sea http, server o location:

```
add_header X-Frame-Options SAMEORIGIN always;
```

### Configurando IIS

Para hacer que IIS envíe el encabezado `X-Frame-Options`, agrege esto al archivo `Web.config` de su sitio:

```html
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

O consulte este [artículo de soporte de Microsoft sobre cómo establecer esta configuración mediante la interfaz de usuario del Administrador de IIS](https://support.office.com/en-us/article/Mitigating-framesniffing-with-the-X-Frame-Options-header-1911411b-b51e-49fd-9441-e8301dcdcd79)

### Configurando HAProxy

Para hacer que HAProxy envíe el encabezado `X-Frame-Options`, agrege lo siguiente a su configuración front-end, listen, o backend:

```
rspadd X-Frame-Options:\ SAMEORIGIN
```

Opcionalmente, en nuevas versiones:

```
http-response set-header X-Frame-Options SAMEORIGIN
```

### Configurando Express

Para hacer que Express envíe el encabezado `X-Frame-Options`, puede usar [helmet](https://helmetjs.github.io/) que utiliza [frameguard](https://helmetjs.github.io/docs/frameguard/) para establecer el encabezado. Agregue lo siguiente a la configuración de su servidor:

```js
const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
```

Opcionalmente, puede usar frameguard directamente:

```js
const frameguard = require('frameguard')
app.use(frameguard({ action: 'SAMEORIGIN' }))
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{HTTPHeader("Content-Security-Policy")}} directiva {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [HTTP Header Field X-Frame-Options - RFC 7034](https://datatracker.ietf.org/doc/html/rfc7034)
- [ClickJacking Defenses - IEBlog](https://docs.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)

