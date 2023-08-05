---
title: Seguro
slug: Glossary/Safe
---

Un método HTTP es **seguro** cuando no altera el estado del servidor. En otras palabras, un método HTTP es seguro solo cuando ejecuta una operación de lectura. Todos los métodos seguros también son {{glossary("idempotent")}} así como algunos, pero no todos, métodos inseguros como {{HTTPMethod("PUT")}}, o {{HTTPMethod("DELETE")}}.

Incluso si los métodos seguros tienen una semántica de solo lectura, los servidores pueden alterar su estado: por ejemplo, pueden registrar o mantener estadísticas. Lo importante aquí es que al llamar a un método seguro, el cliente no solicita ningún cambio en el servidor y, por lo tanto, no creará una carga o carga innecesaria para el servidor. Los navegadores pueden llamar a métodos seguros sin temor a causar ningún daño al servidor: esto les permite realizar actividades como la búsqueda previa sin riesgos. Los rastreadores web también confían en llamar a métodos seguros.

Los métodos seguros no solo sirven archivos estáticos; un servidor puede generar una respuesta a un método seguro sobre la marcha, siempre que el script de generación garantice la seguridad: no debe desencadenar efectos externos, como desencadenar un pedido en un sitio web de comercio electrónico.

Es responsabilidad de la aplicación en el servidor implementar la semántica segura correctamente, el propio servidor web, ya sea Apache, nginx o IIS, no puede imponerlo por sí mismo. En particular, una aplicación no debe permitir que {{HTTPMethod("GET")}} solicite alterar su estado.

Una petición de un método seguro, no cambia ningún estado en el servidor:

```
GET /pageX.html HTTP/1.1
```

Una petición de un método inseguro, puede cambiar el estado en el servidor:

```
POST /pageX.html HTTP/1.1
```

Una petición de un método idempotente pero no seguro:

```
DELETE /idX/delete HTTP/1.1
```

## Vea también

### Conocimientos generales

- Definición de [seguro](https://tools.ietf.org/html/rfc7231#section-4.2.1) en la especificación HTTP.

### Conocimientos técnicos

- Descripción de los metodos seguros: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Descripción de los métodos inseguros: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
