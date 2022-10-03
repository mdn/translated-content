---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
tags:
  - HTTP
  - Método de petición
translation_of: Web/HTTP/Methods/CONNECT
---
{{HTTPSidebar}}

El método **HTTP `CONNECT` **inicia la comunicación en dos caminos con la fuente del recurso solicitado. Puede ser usado para abrir una comunicación tunel.

Por ejemplo, el método `CONNECT` puede ser usado para acceder a sitios web que usan {{Glossary("SSL")}} ({{Glossary("HTTPS")}}). El cliente realiza la petición al Servidor Proxy HTTP para establecer una conexión tunel hacia un destino deseado. Entonces el servidor Proxy procede a realizar la conexión en nombre del cliente, una vez establecida la conexión con el servidor deseado, el servidor Proxy envía los datos desde y hacia el cliente.

El método `CONNECT` es un método de salto entre servidores.

| Contiene cuerpo la petición                               | No  |
| --------------------------------------------------------- | --- |
| La respuesta exitosa contiene cuerpo                      | Si  |
| {{Glossary("Safe")}}                              | No  |
| {{Glossary("Idempotent")}}                      | No  |
| {{Glossary("Cacheable")}}                          | No  |
| Permitido en [formas HTML](/es/docs/Web/Guide/HTML/Forms) | No  |

## Sintaxis

```
CONNECT www.example.com:443 HTTP/1.1
```

## Ejemplo

Algunos servidores proxy pueden necesitar autorización para crear tuneles. Consulta el encabezado {{HTTPHeader("Proxy-Authorization")}} .

```html
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Especificaciones

| Specificación                                    | Título                                                        |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "CONNECT", "4.3.6")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidad entre navegadores

{{Compat("http.methods.CONNECT")}}

## Ver también

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
