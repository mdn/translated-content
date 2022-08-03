---
title: Agente de Usuario
slug: Web/HTTP/Headers/User-Agent
tags:
  - HTTP
  - Cabecera HTTP
  - Referencia
  - Agente de Usuario
translation_of: Web/HTTP/Headers/User-Agent
---
{{HTTPSidebar}}

El encabezado de solicitud del **Agente de Usuario** es una cadena característica que permite a los servidores y redes identificar la aplicación, sistema operativo, proveedor del software y/o la versión del software de la petición del agente de usuario.

> **Advertencia:** Por favor lea [Detección de navegador usando el agente de usuario](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent) y vea porque utilizar diferentes páginas web o servicios en diferentes navegadores es normalmente una mala idea.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabecera</th>
      <td>Encabezado de la solicitud</td>
    </tr>
    <tr>
      <th scope="row">Nombre de encabezado prohibido</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxis

```
User-Agent: <product> / <product-version> <comment>
```

Formato común para navegadores web:

```
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### Directivas

- \<product>
    - : Identificador del producto - su nombre o código de desarrollo.
- \<product-version>
    - : Número de versión del producto.
- \<comment>
    - : Ninguno o varios comentarios que contienen más detalles. Por ejemplo, información del subproducto.

## Cadena del Agente de usuario de Firefox

Para más información sobre las cadenas de Agentes de usuarios basadas en Firefox y Gecko, lea [Referencia de cadena de Agente de usuario de Firefox](es/docs/Web/HTTP/Headers/User-Agent/Firefox). La cadena de Agente de usuario de Firefox esta dividida en 4 componentes:

```
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` es el token general que indica que el navegador es compatible con Mozilla, es el más común en la mayoría de los navegadores actuales.
2. **_platform_** describe la plataforma nativa en la que el navegador se ejecuta (Windows, Mac, Linux, Android, etc.) y si se trata de un teléfono móvil. Los teléfonos con Sistema Operativo Firefox muestran `Mobile` ya que la plataforma es la web. Tenga en cuenta que **_platform_** puede constar de varios tokens separados por "`;`". Consulte a continuación para obtener más detalles y ejemplos.
3. **rv:_geckoversion_** indica la versión de lanzamiento de Gecko (por ejemplo "_17.0_"). En los navegadores más recientes la versión de **gecko** es la misma que la versión de **firefox**.
4. **_Gecko/geckotrail_** indica que el navegador está basado en Gecko. (En el escritorio, **_geckotrail_** siempre es la cadena fija `20100101`).
5. **_Firefox/firefoxversion_** indica que el navegador es Firefox y proporciona la versión (por ejemplo "_17.0"_).

### Ejemplo

```
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Cadena del Agente de usuario de Chrome

La cadena de agente de usuario de Chrome (o motores basados en Chromium/Blink) es similar a la de Firefox. Por compatibilidad, agrega cadenas como `KHTML, like Gecko` y `Safari`.

### Ejemplo

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Cadena del Agente de usuario de Opera

El navegador Opera también se basa en el motor Blink, por lo que casi se parece a la cadena de Chrome, con la excepción de que este añade `"OPR/<version>"`.

### Ejemplo

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Utilizando versiones anteriores de Opera basadas en Presto:

```
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Cadena del Agente de usuario de Microsoft Edge

El navegador Edge también se basa en el motor Blink. Añade `"Edg/<version>"`.

### Ejemplo

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Cadena del Agente de usuario de Safari

En el ejemplo, la cadena del Agente de usuario toma la versión móvil de Safari. Esta contiene la palabra `"Mobile"`.

### Ejemplo

```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Cadena del Agente de usuario de Internet Explorer

### Ejemplo

```
Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
```

## Cadena del Agente de usuario de Crawler y Bot

### Ejemplos

```
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Cadena del Agente de usuario de Librerías y Herramientas de Red

### Ejemplos

```
curl/7.64.1
```

```
PostmanRuntime/7.26.5
```

## Especificaciones

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificaciones</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "User-Agent", "5.5.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

## Compatibilidad entre navegadores

<p>{{Compat("http.headers.User-Agent")}}</p>

## Vea también

- [Detección de Agentes de usuario, historial y lista de verificación](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Referencia de cadena de Agente de usuario de Firefox](/es/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Detección de navegador usando el agente de usuario](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Consejos para el cliente](/en-US/docs/Web/HTTP/Client_hints)
