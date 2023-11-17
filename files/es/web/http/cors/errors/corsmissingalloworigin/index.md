---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---

{{HTTPSidebar}}

## Motivo

```
Motivo: Hace falta la cabecera CORS 'Access-Control-Allow-Origin'
```

## ¿Qué salió mal?

A la respuesta de la solicitud {{Glossary("CORS")}} le falta la requerida cabecera {{HTTPHeader("Access-Control-Allow-Origin")}}, la cual se utiliza para determinar si el recurso puede o no ser accedido por el contenido dentro del origen actual.

Si el servidor está bajo su control, agregue el origen del sitio solicitado al conjunto de dominios con acceso permitido agregándolo al valor de la cabecera `Access-Control-Allow-Origin`.

Por ejemplo, para permitir a un sitio como `https://amazing.site` acceder al recurso usando CORS, la cabecera deberia ser:

```
Access-Control-Allow-Origin: https://amazing.site
```

También puede configurar un sitio para permitirle el acceso desde cualquier otro sitio usando el comodín `"*"`. Solamente debería usar esto para APIs públicas. Las APIs privadas nunca deberían usar este comodín, en lugar de eso, se debería especificar un dominio o conjunto de dominios. Adicionalmente, el comodín solamente funciona para consultas con el atributo [`crossorigin`](/es/docs/Web/HTML/Global_attributes#crossorigin) establecido en `"anonymous"`.

```
Access-Control-Allow-Origin: *
```

> **Advertencia:** Utilizar el comodín para permitir que todos los sitios accedan a una API privada es una mala idea.

Para permitir que cualquier sitio realice peticiones CORS _sin_ usar el comodín `*` (por ejemplo, para activar credenciales), su servidor deberá leer el valor la cabecera `Origin` de la petición y usar dicho valor para `Access-Control-Allow-Origin` y además declarar una cabecera `Vary: Origin` para indicar que algunas cabeceras están siendo dinámicamente declaradas dependiendo del origen.

El protocolo para administrar estas cabeceras depende de tu servidor web. Por ejemplo, en Apache, agrega una línea como la siguiente a la configuración del servidor (Con las secciones `<Directory>`, `<Location>`, `<Files>` o `<VirtualHost>` apropiadas). La configuración, suele encontrarse en un archivo `.conf` (`httpd.conf` y `apache.conf` son nombres comunes para este tipo de archivos), o en un archivo `.htaccess`.

```
Header set Access-Control-Allow-Origin 'origin-list'
```

Para Nginx, el comando para configurar esta cabecera es:

```
add_header 'Access-Control-Allow-Origin' 'origin-list"
```

## Vea tambien

- [CORS errors](/es/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/es/docs/Web/HTTP/CORS)
