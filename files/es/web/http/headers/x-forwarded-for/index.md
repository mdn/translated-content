---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
---

{{HTTPSidebar}}

La cabecera **`X-Forwarded-For`** (XFF) es un estándar de facto para identificar el origen de la dirección IP de un cliente conectado a un servidor web a través de un proxy HTTP o un balanceador de carga. Cuando se intercepta el tráfico entre cliente y servidores, los registros de los servidores de acceso contienen sólo la dirección IP del proxy o del balanceador de carga. Para ver la dirección IP original del cliente, se utiliza la cabecera `X-Forwarded-For`.

Esta cabecera se usa para la depuración, estadísticas, y la generación de contenido dependiente de la ubicación. De forma deliberada, expone información privada sensible como la dirección IP del cliente. Por lo tanto, debe tenerse en cuenta la privacidad del usuario a la hora de publicar esta cabecera.

Una versión estandarizada de esta cabecera es la cabecera HTTP {{HTTPHeader("Forwarded")}}.

`X-Forwarded-For` es también una cabecera de correo electrónico que indica que el mismo fue reenviado desde otra cuenta.

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## Sintaxis

```
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

## Directivas

- \<cliente>
  - : La dirección IP del cliente
- \<proxy1>, \<proxy2>
  - : Si una solicitud pasa por varios proxies, las direcciones IP de cada proxy se listan en forma sucesiva. Esto significa que la IP de más a la derecha es la IP del proxy más reciente, y la IP de más a la izquierda es la IP del cliente originador.

## Ejemplos

```
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
```

Otras formas no estándar:

```
# Usado para algunos servicios de Google
X-ProxyUser-Ip: 203.0.113.19
```

## Especificaciones

No es parte de especificación actual alguna. La versión estandarizada de este cabezal es {{HTTPHeader("Forwarded")}}.

## See also

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
