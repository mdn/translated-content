---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: 281e3b21178946c8301232a8eb50d11770ee8450
---

{{HTTPSidebar}}

El **User-Agent** {{Glossary("request header")}} es una cadena característica que le permite a los servidores y servicios de red identificar la aplicación, sistema operativo, compañía, y/o la versión del {{Glossary("user agent")}} que hace la petición.

> [!WARNING]
> Por favor lee [Detección de navegadores usando el agente de usuario](/es/docs/Web/HTTP/Browser_detection_using_the_user_agent) para entender por qué generalmente es una mala idea servir diferentes páginas Web o servicios dependiendo del navegador.

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

## Sintaxis

```
User-Agent: <producto> / <producto-version> <comentario>
```

Formato común para navegadores Web:

```
User-Agent: Mozilla/5.0 (<información-de-sistema>) <plataforma> (<platforma-detalles>) <extensiones>
```

### Directivas

- \<producto>
  - : Un identificador de producto — su nombre o nombre clave de desarrollo.
- \<producto-version>
  - : Número de versión de producto.
- \<comentario>
  - : Cero o más comentarios conteniendo más detalles. Por ejemplo, información del subproducto.

## Cadena UA de Firefox

Para más información sobre cadenas de agente de usuarios basadas en Firefox y Gecko, visita [Referencia de la cadena del agente de usuario de Firefox](/es/docs/Web/HTTP/Headers/User-Agent/Firefox). La cadena del UA (user agent) de Firefox se divide en 4 componentes:

```
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` es el token general que indica que el navegador es compatible con Mozilla. Por razones históricas, prácticamente todos los navegadores actuales lo envían.
2. **_platform_** describe la plataforma nativa en la que está corriendo el navegador (Windows, Mac, Linux, Android, etc.) y si es un teléfono móvil. Los teléfonos con {{Glossary("Firefox OS")}} dicen `Mobile` — la web es la plataforma. Nótese que **_platform_** puede consistir de múltiples tokens separados por "`;`". Léase debajo para más detalles y ejemplos.
3. **rv:_geckoversion_** indica la versión de Gecko (como "_17.0_"). En navegadores recientes, **_geckoversion_** es lo mismo que **_firefoxversion_**.
4. **_Gecko/geckotrail_** indica que el navegador está basado en Gecko. (En el escritorio, **_geckotrail_** siempre es la cadena fija `20100101`.)
5. **_Firefox/firefoxversion_** indica que el navegador es Firefox y provee la versión (como "_17.0"_).

### Ejemplos

```
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Cadena UA de Chrome

La cadena de agente de usuario para Chrome (o motores basados en Chromium/Blink) es similar a la de Firefox. Por compatibilidad, añade cadenas como `KHTML, like Gecko` y `Safari`.

### Ejemplos

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Cadena UA de Opera

El navegador Opera también está basado en el motor Blink, que es la razón por la cual luce exactamente como la cadena UA de Chrome, pero añade `"OPR/<version>"`.

### Ejemplos

```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Versiones de Opera basadas en Presto, más antiguas, utilizaban:

```
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Cadena UA de Microsoft Edge

El navegador Edge también está basado en el motor Blink. Añade `"Edg/<version>"`.

### Ejemplos

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Cadena UA de Safari

En este ejemplo, la cadena de agente de usuario es la versión móvil de Safari. Contiene la palabra `"Mobile"`.

### Ejemplos

```
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## Cadena UA de Internet Explorer

### Ejemplos

```
Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
```

## Cadena UA de Crawlers y bots

### Ejemplos

```
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Cadenas UA de librerías y herramientas de red

### Ejemplos

```
curl/7.64.1
```

```
PostmanRuntime/7.26.5
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Detección del agente de usuario, historia y lista de verificación](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Cadenas del agente de usuario de Firefox](/es/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Detección de navegador utilizando el agente de usuario](/es/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Sugerencias del cliente](/es/docs/Web/HTTP/Client_hints)
