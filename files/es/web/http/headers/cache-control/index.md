---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
---

{{HTTPSidebar}}

El encabezado HTTP **`Cache-Control`** contiene _directivas_ (instrucciones) — tanto en peticiones como en respuestas — para controlar el almacenamiento temporal [(caching)](/es/docs/Web/HTTP/Caching) en navegadores y cachés compartidas (p. ej. Proxies, CDNs).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de encabezado</th>
      <td>
        {{Glossary("Request header","Encabezado de solicitud")}},
        {{Glossary("Response header","Encabezado de respuesta")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "nombre prohibido del encabezado")}}
      </th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "Respuesta del encabezado
        CORS-safelisted")}}
      </th>
      <td>sí</td>
    </tr>
  </tbody>
</table>

## Sintaxis

Las directivas para almacenamiento temporal siguen las siguientes reglas de validación:

- Insensible a mayúsculas, — pero las minúsculas son recomendadas, debido a que algunas implementaciones no reconocen las directivas en mayusculas.
- Las multipes directivas son separadas por comas.
- Algunas directivas tienen un argumento opcional.

### Directivas de cache

Las directivas `Cache-Control` estándar están definidas a continuación.

| Request          | Response                 |
| :--------------- | :----------------------- |
| `max-age`        | `max-age`                |
| `max-stale`      | -                        |
| `min-fresh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-store`       | `no-store`               |
| `no-transform`   | `no-transform`           |
| `only-if-cached` | -                        |
| -                | `must-revalidate`        |
| -                | `proxy-revalidate`       |
| -                | `must-understand`        |
| -                | `private`                |
| -                | `public`                 |
| -                | `immutable`              |
| -                | `stale-while-revalidate` |
| `stale-if-error` | `stale-if-error`         |

Nota: Comprueba la [tabla de compatibilidad](#browser_compatibility) para su soporte; los agentes de usuario que no las reconozcan deberían ignorarlas.

## Vocabulario

Los siguientes términos son usados en este documento; algunos provienen de la especificación.

- `Caché (HTTP)`
  - : Implementación que mantiene peticiones y respuestas para reusarlas en peticiones posteriores. Puede ser tanto una cache privada como una compartida.
- `Caché compartida`
  - : Caché existente entre el servidor de origen y los clientes (p. ej. Proxy, CDN). Almacena una sola respuesta para reutilizarla en multiples usuarios — por tanto los desarrolladores deberían evitar que el almacenamiento de contenidos personalizados sea cacheado en la caché compartida.
- `Caché privada`
  - : Caché existente en el cliente. También conocida como _caché local_, o _caché del navegador_. Puede almacenar y reutilizar contenido personalizado para un único usuario.
- `Respuesta almacenada`
  - : Almacena una respuesta en caches cuando es _cacheable_. Pero no siempre es reutilizada tal cual. (Normalmente "caché" significa almacenar una respuesta).
- `Respuesta reutilizada`
  - : Reutiliza respuestas cacheadas para las subsiguientes peticiones.
- `Revalidar respuesta`
  - : Pregunta al servidor de origen si una respuesta almacenada sigue siendo reciente o no ([fresh o stale](/es/docs/Web/HTTP/Caching#estados_fresh_y_stale_según_la_edad)). Normalmente se realiza a través de una petición condicionada.
- `Respuesta reciente`
  - : Indica que una respuesa es reciente ([fresh](/es/docs/Web/HTTP/Caching#estados_fresh_y_stale_según_la_edad)). Esto normalmente significa que la respuesta puede ser reutilizada para las subsiguientes peticiones, dependiendo de las directivas de petición.
- `Respuesta obsoleta`
  - : Indica que la respuestá está obsoleta ([stale](/es/docs/Web/HTTP/Caching#estados_fresh_y_stale_según_la_edad)). Normalmente significa que la respuesta ya no puede ser reutilizada. El almacenamiento caché no requiere que las respuestas obsoletas sean eliminadas inmediatamente, por que la revalidación puede cambiar la respuesta de obsoleta a reciente de nuevo.
- `Edad`
  - : El tiempo desde que una respuesta fue generada. Es un criterio para ver si una respuesta es reciente u obsoleta ([fresh o stale](/es/docs/Web/HTTP/Caching#estados_fresh_y_stale_según_la_edad)).

## Directivas

Esta sección lista directivas que afectan al almacenamiento caché — directivas de respuestas y directivas de peticiones.

### Directivas de Respuesta

#### `max-age`

La directiva de respuesta `max-age=N` indica que la respuesta es reciente hasta los _N_ segundos posteriores a su generación.

```http
Cache-Control: max-age=604800
```

Indica que las cachés pueden almacenar esta respuesta y reutilizarla para las peticiones subsecuentes mientras estas son recientes.

Ten en cuenta que `max-age` no es el tiempo pasado desde que la respuesta fue recibida, sino el tiempo desde que la respuesta fue generada en el servidor de origen.
Por tanto si otra(s) caché(s) — en la ruta de red de la respuesta — la almacenan por 100 segundos (indicado usando el campo de la cabecera `Age` en la respuesta), el navegador descontará 100 segundos del periodo de validez de la caché de respuesta.

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

La directiva de respuesta `s-maxage` también indica por cuánto tiempo la respuesta es reciente (similar a `max-age`) — pero es específica para cachés compartidas, e ignorarán `max-age` cuando está presente.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

La driectiva de respuesta `no-cache` indica que la respuesta puede ser almacenada en cachés, pero debe ser validada con el servidor de origen antes de cada reutilización — incluso cuando la caché está desconectada del servidor de origen.

```http
Cache-Control: no-cache
```

Si quieres que las cachés siempre comprueben la actualización de contenido cuando reúsen el contenido almacenado, `no-cache` es la directiva a usar. Esta obliga a la cache a revalidarla con cada petición al servidor de origen.

Ten en cuenta que `no-cache` no significa "no almacenar". `no-cache` permite almacenar una respuesta, pero les obliga a revalidarla antes de reusarla. En caso de que "no almacenar" sea lo que estabas buscando, entonces `no-store` es la directiva a usar.

#### `must-revalidate`

La directiva `must-revalidate` indica que la respuesta puede ser usada mientras sea reciente, pero que una vez el recurso se vuelve obsoleto, la cache no debe usar su copia obsoleta sin correctamente validar en el servidor de origen.

Tipicamente, `must-revalidate` es usada con `max-age`

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP permite a las caches reutilizar respuesteas obsoletas cuando están desconectados del servidor de origen. `must-revalidate` es una forma de prevenirlo, o la cache revalida la respuesta almacenada con el servidor de origen, o si no es posible genera una respuesta 504 (Gateway Timeout).

#### `proxy-revalidate`

`proxy-revalidate` es similar a `must-revalidate`, pero es especifico para caches compartidos.

#### `no-store`

La directiva de respuesta `no-store` indica que cualquier caché de cualquier tipo (privado o compartido) no debe almacenar esta respuesta.

```http
Cache-Control: no-store
```

#### `private`

La directiva de respuesta `private` indica que la respuesta solo puede ser almacenada por cachés privadas (p. ej. cachés locales en navegadores).

```http
Cache-Control: private
```

Deberías añadir la directiva `private` para el contenido personalizado de usuario — en particular, respuestas recibidas después del login, y sesiones administradas via cookies.

Si olvidas añadir `private` a una respuesta con contenido personalizado, entonces esa respuesta puede ser almacenada en una caché compartida y terminar siendo reutilizada por multiples usuarios, lo cual puede causar una fuga de información personal.

#### `public`

La directiva `public` indica que la respuesta puede ser almacenada en un cache compartido. Las respuestas para peticiones con el campo de la cabecera `Authorization` no debe ser almacenadas en cache compartida, pero la directiva `public` causará que dichas respuestas se almacenen en la caché compartida.

```http
Cache-Control: public
```

En general, cuando las paginas estan bajo Basic Auth o Digest Auth, el navegador enviará peticiones con la cabecera `Authorization`. Esto significa que la respuesta es de acceso-controlado para usuarios restringidos (quienes tienen cuenta), y esto es no compartidamente almacenado, incluso si tiene `max-age`.

Puedes usar la directiva `public` para desbloquear esa restricción.

```http
Cache-Control: public, max-age=604800
```

Ten en cuenta que, `s-maxage` o `must-revalidate` también desbloquean esa restricción.

Si una petición no tiene la cabecera `Authorization`, o si ya estás usando `s-maxage` o `must-revalidate` en la respuesta, entonces no necesitas usar `public`.

#### `must-understand`

La directiva de respuesta `must-understand` indica que una caché debería de almacenar la respuesta solo si entiende los requisitos de almacenamiento basado en el codigo de estado.

`must-understand` debe ir emparejada con `no-store`, para un comportamiento como solución alternativa.

```http
Cache-Control: must-understand, no-store
```

Si una caché no soporta `must-understand`, será ignorada. Si `no-store` está también presente, la respuesta no es almacenada.

Si una caché soporta `must-understand`, almacena la respuesta de acuerdo con los requisitos de cache basados en su código de estado.

#### `no-transform`

Algunos intermediarios transforman el contenido por diversas razones. Por ejemplo, algunos convierten las imagenes para reducir el tamaño de transferencia. En algunos casos, esto no es deseable para el proveedor de contenidos.

`no-transform` indica que cualquier intermediario (sin importar si implementa cache) no debería transformar los contenidos de la respuesta.

Nota: [Web Light de Google](https://support.google.com/webmasters/answer/6211428) es un intermediario de este tipo. Convirte las imagenes para minimizar los datos para almacenar en cache o para conexiones lentas, y soporta `no-transform` como una opción para evitar dicha función.

#### `immutable`

La directiva de respuesta `immutable` indica que la respuesta no será actualizada mientras sea reciente.

```http
Cache-Control: public, max-age=604800, immutable
```

Una buena practica moderna para contenidos estáticos es incluir versión/hashes en sus URLs, mientras nunca se modifiquen los contenidos — pero en su lugar, cuando es necesario, _actualizar_ las fuentes con nuevas versiones que tienen nuevos números de versión/hashes, de forma que las URLs son diferentes.
Esto es conocido como el patrón **cache-busting**.

```html
<script src=https://example.com/react.0.0.0.js></script>
```

Cuando un usuario recarga el navegador, el navegador le mandará una petición condicional para validar el servidor de origen. Pero no es necesario revalidar estos tipos de fuentes estáticas incluso cuando un usuario recarga el navegador, porque nunca son modificados.
`immutable` indica a una cache que una respuesta es inmutable mientras es reciente, y evita ese tipo de peticiones condicionales innecesarias al servidor.

Cuando usas un patrón de cache-busting para fuentes y les aplicas un largo `max-age`, puedes también añadir `immutable` para evitar la revalidación.

#### `stale-while-revalidate`

La directiva de respuesta `stale-while-revalidate` indica que la cache puede reusar una respuesta antigua mientras se revalida en una caché.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

En el ejemplo anterior, la respuesta está actualizada durante 7 días (604800s). Después de 7 días se vuelve obsoleto, pero la caché puede reutilizarla para cualquier solicitud que se realice al día siguiente (86400s) — siempre que revalide la respuesta en segundo plano.

La revalidación hará que la memoria caché vuelva a estar actualizada, de modo que a los clientes les parezca que siempre estuvo actualizada durante ese período — Ocultando de forma efectiva la penalización por latencia de la revalidación.

Si no se produjo ninguna petición durante ese período, la caché se vuelve obsoleta y la próxima solicitud se revalidará normalmente.

#### `stale-if-error`

La directiva de respuesta `stale-if-error` indica que la memoria caché puede reutilizar una respuesta obsoleta cuando un servidor de origen responde con un error, o el error es generado localmente. Un error es cualquier respuesta con código de estado 500, 502, 503 o 504.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

En el ejemplo anterior, la respuesta está actualizada durante 7 días (604800s). Después de 7 días, se vuelve obsoleta, pero se puede usar durante 1 día adicional (86400s) si el servidor responde con un error.

Después del período de tiempo de stale-if-error, la respuesta almacenada se vuelve obsoleta. Eso significa que el cliente recibirá una respuesta de error tal como el servidor de origen la envía.

### Directivas de Peticiones

#### `no-cache`

La directiva de petición `no-cache` pide a las cachés que validen la respuesta con el servidor de origen antes de volver a usarla.

```http
Cache-Control: no-cache
```

`no-cache` permite a los clientes solicitar la respuesta más actualizada incluso si la caché tiene una respuesta reciente.

Los navegadores generalmente agregan `no-cache` a las solicitudes cuando los usuarios **fuerzan la recarga** de una página.

#### `no-store`

La directiva de petición `no-store` permite a un cliente solicitar que las cachés se abstengan de almacenar la petición y la respuesta correspondiente, incluso si la respuesta del servidor de origen pudiera almacenarse.

```http
Cache-Control: no-store
```

Tenga en cuenta que los principales navegadores no admiten peticiones con `no-store`.

#### `max-age`

La directiva de petición `max-age=N` indica que el cliente permite una respuesta almacenada que es generada en el servidor de origen dentro de _N_ segundos, donde _N_ puede ser cualquier número entero positivo (incluyendo el `0`).

```http
Cache-Control: max-age = 3600
```

En el caso anterior, si la respuesta con `Cache-Control: max-age=604800` se almacenó en las cachés hace 3 horas, la caché no podría reutilizar esa respuesta.

Muchos navegadores usan esta directiva para **recargar**, como se explica a continuación.

```http
Cache-Control: max-age=0
```

`max-age=0` es una solución alternativa para `no-cache`, porque muchas implementaciones de caché antiguas (HTTP/1.0) no son compatibles con `no-cache`. Los navegadores más recientes siguen usando `max-age=0` en "recargas" (por compatibilidad con versiones anteriores) y, alternativamente, usan `no-cache` para provocar una "recarga forzada".

Si el valor de `max-age` no es positivo (por ejemplo, `-1`) o no es entero (por ejemplo, `3599.99`), el comportamiento del cache es indefinido. Sin embargo, la sección [Calculating Freshness Lifetime](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) de las especificaciones HTTP establece:

> Caches are encouraged to consider responses that have invalid freshness information to be stale.

Traducción: Se recomienda a las caches considerar una respuesta como antigua si la información de edad es inválida.

En otras palabras, para cualquier valor de `max-age` que no es un entero positivo, el comportamiento de cache recomendado es de tratar el valor como si fuera `0`.

#### `max-stale`

La directiva de solicitud `max-stale=N` indica que el cliente permite una respuesta almacenada que está obsoleta hasta _N_ segundos.

```http
Cache-Control: max-stale=3600
```

En el ejemplo anterior, si la respuesta con `Cache-Control: max-age=604800` se almacenó en caché hace 3 horas, la caché no podría reutilizar esa respuesta.

Los clientes pueden usar este encabezado cuando el servidor de origen está inactivo o es demasiado lento y pueden aceptar respuestas almacenadas en caché incluso si son un poco antiguas.

Tenga en cuenta que los principales navegadores no admiten solicitudes con `max-stale`.

#### `min-fresh`

La directiva de petición `min-fresh=N` indica que el cliente permite una respuesta almacenada que está actualizada durante al menos _N_ segundos.

```http
Cache-Control: min-fresh=600
```

En el caso anterior, si la respuesta con `Cache-Control: max-age=3600` se almacenó en las cachés hace 51 minutos, la caché no podría reutilizar esa respuesta.

Los clientes pueden usar este encabezado cuando el usuario requiere que la respuesta no solo sea actualizada, sino que también requiere que no se actualice durante un período de tiempo.

Tenga en cuenta que los principales navegadores no admiten peticiones con `min-fresh`.

#### `no-transform`

El mismo significado que `no-transform` tiene para una respuesta, pero para una petición en su lugar.

#### `only-if-cached`

El cliente indica que la caché debe obtener una respuesta ya almacenada en caché. Si una caché ha almacenado una respuesta, se reutiliza.

## Casos de uso

### Prevención del almacenamiento

Si no desea que una respuesta se almacene en las cachés, use la directiva `no-store`.

```http
Cache-Control: no-store
```

Tenga en cuenta que `no-cache` significa "se puede almacenar pero no reutilizar antes de validar" — por lo que no es para evitar que se almacene una respuesta.

```http example-bad
Cache-Control: no-cache
```

En teoría, si las directivas están en conflicto, se debe respetar la directiva más restrictiva. Así que el siguiente ejemplo básicamente no tiene sentido, porque `private`, `no-cache`, `max-age=0` y `must-revalidate` entran en conflicto con `no-store`.

```http example-bad
# conflicto
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalete a
Cache-Control: no-store
```

### Almacenamiento en caché de activos estáticos con "cache busting"

Cuando crea activos estáticos con mecanismos de control de versiones/hashing, agregar una versión/hash al nombre de archivo o cadena de consulta es una buena manera de administrar el almacenamiento en caché.

Por ejemplo:

```html
<!-- index.html -->
<script src="/activos/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

La versión de la biblioteca de React cambiará cuando actualices la biblioteca, y `hero.png` también cambiará cuando edites la imagen. Por lo tanto, son difíciles de almacenar en un caché con `max-age`.

En tal caso, podría abordar las necesidades de almacenamiento en caché utilizando una versión numerada específica de la biblioteca e incluyendo el hash de la imagen en su URL.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Puede agregar un valor grande de `max-age` e `immutable`, porque el contenido nunca cambiará.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Cuando actualiza la biblioteca o edita la imagen, el nuevo contenido debe tener una nueva URL y los cachés no se reutilizan. Eso se llama el patrón "cache busting".

Utilice `no-cache` para asegurarse de que la respuesta HTML en sí misma no se almacene en caché. `no-cache` puede causar la revalidación y el cliente recibirá correctamente una nueva versión de la respuesta HTML y los activos estáticos.

```http
# /index.html
Cache-Control: no-cache
```

Nota: si `index.html` se accede mediante Basic Authentication o Digest Authentication, los archivos bajo `/assets` no se almacenarán en la memoria caché compartida. Si los archivos `/assets/` son adecuados para almacenar en un caché compartido, también necesita uno de `public`, `s-maxage` o `must-revalidate`.

### Contenidos siempre actualizados

Para los contenidos que se generan dinámicamente, o que son estáticos pero se actualizan con frecuencia, deseas que un usuario reciba siempre la versión más actualizada.

Si no agrega un encabezado `Cache-Control` porque la respuesta no está destinada para almacenarse en caché, podría causar un resultado inesperado. El almacenamiento en caché puede almacenarlo heurísticamente — por lo que si tienes algún requisito para el almacenamiento en caché, siempre debes indicarlo explícitamente en el encabezado `Cache-Control`.

Agregar `no-cache` a la respuesta provoca la revalidación en el servidor, por lo que puede entregar una respuesta nueva cada vez — o si el cliente ya tiene una nueva, simplemente responda `304 Not Modified`.

```http
Cache-Control: no-cache
```

La mayoría de las cachés HTTP/1.0 no son compatibles con las directivas `no-cache`, por lo que históricamente se usaba `max-age=0` como solución alternativa. Pero usar solo `max-age=0` podría hacer que se reutilice una respuesta obsoleta cuando los cachés se desconecten del servidor de origen. `must-revalidate` aborda eso. Es por eso que el siguiente ejemplo es equivalente a `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Pero hoy en día, puedes simplemente usar `no-cache` en su lugar.

### Borrar un caché ya almacenado

Desafortunadamente, no hay directivas de caché para borrar las respuestas ya almacenadas de las cachés.

Imagine que los clientes/cachés almacenan una respuesta nueva para una ruta, sin solicitud de vuelo al servidor. No hay nada que un servidor pueda hacer en esa ruta.

Alternativamente, `Clear-Site-Data` puede borrar la memoria caché del navegador para un sitio. Pero tenga cuidado: eso borra todas las respuestas almacenadas para un sitio — y solo en los navegadores, no para un caché compartido.

## Especificaciones

{{Specifications}}

## Compatibilidad en navegadores

{{Compat}}

## Véase también

- [Caché en HTTP](/es/docs/Web/HTTP/Caching)
- [Tutorial de almacenamiento en caché para autores web y webmasters](https://www.mnot.net/cache_docs/)
- [Prácticas recomendadas de almacenamiento en caché y trucos de edad máxima](https://jakearchibald.com/2016/caching-best-practices/)
- [Control de caché para civiles](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – Caché en HTTP](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – Extensiones de control de caché HTTP para contenido obsoleto](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – Respuestas HTTP inmutables](https://httpwg.org/specs/rfc8246.html)
