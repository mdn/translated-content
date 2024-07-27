---
title: Errores CORS
slug: Web/HTTP/CORS/Errors
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{HTTPSidebar}}

El [Intercambio de Recursos de Origen Cruzado](/es/docs/Web/HTTP/CORS) ({{Glossary("CORS")}}, por sus siglas en inglés) es un estándar que permite a un servidor relajar la [política del mismo origen](/es/docs/Web/Security/Same-origin_policy). Esto se usa para permitir explícitamente algunas solicitudes de origen cruzado mientras se rechazan otras. Por ejemplo, si un sitio ofrece un servicio integrable, puede ser necesario relajar ciertas restricciones. Establecer una configuración CORS de este tipo no es necesariamente fácil y puede presentar algunos desafíos. En estas páginas, veremos algunos mensajes de error comunes de CORS y cómo resolverlos.

Si CORS no está configurado correctamente, la consola del navegador presentará un error como `"Solicitud desde otro origen bloqueada: la política de mismo origen impide leer el recurso remoto en $algunsitio"`, lo que indica que la solicitud fue bloqueada debido a la violación de la Reglas de seguridad CORS. Sin embargo, esto podría no ser necesariamente un error de configuración. Es posible que, de hecho, la aplicación web del usuario y el servicio externo remoto rechacen intencionalmente la solicitud. Sin embargo, si el punto final debe estar disponible, se necesita algo de depuración para tener éxito.

## Identificando el problema

Para comprender el problema con la configuración de CORS, debe averiguar qué solicitud tiene la culpa y por qué. Estos pasos pueden ayudarlo a hacerlo:

1. Navegue hasta el sitio web o la aplicación web en cuestión y abra las [Herramientas para desarrolladores](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Ahora intente reproducir la solicitud fallida y verifique la [consola](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) si ve un mensaje de error de infracción de CORS. Probablemente se verá así:

![Consola de Firefox que muestra un error CORS](cors-error2.png)

El texto del mensaje de error será algo similar al siguiente:

```
Solicitud desde otro origen bloqueada: la política de mismo origen
impide leer el recurso remoto en https://alguna-url-aqui (razón:
información adicional aquí).
```

> [!NOTE]
> Por razones de seguridad, los detalles sobre lo que salió mal con una solicitud CORS _no están disponibles para el código JavaScript_. Todo lo que el código sabe es que ocurrió un error. La única forma de determinar qué salió mal específicamente es mirar la consola del navegador para obtener más detalles.

## Mensajes de error de CORS

La consola de Firefox muestra mensajes en su consola cuando las solicitudes fallan debido a CORS. Parte del texto de error es un mensaje de "razón" que proporciona información adicional sobre lo que salió mal. Los mensajes de motivo se enumeran a continuación; haga clic en el mensaje para abrir un artículo que explica el error con más detalle y ofrece posibles soluciones.

- [Razón: CORS desactivado](/es/docs/Web/HTTP/CORS/Errors/CORSDisabled)
- [Razón: Solicitud CORS sin éxito](/es/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed)
- [Razón: No se puede agregar el encabezado CORS 'Origin'](/es/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded)
- [Razón: Solicitud CORS de redirección externa no permitida](/es/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Razón: la solicitud CORS no es http](/es/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
- [Razón: falta la cabecera CORS 'Access-Control-Allow-Origin'](/es/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)
- [Razón: El encabezado CORS 'Access-Control-Allow-Origin' no coincide con 'xyz'](/es/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Razón: La credencial no es compatible si el encabezado CORS 'Access-Control-Allow-Origin' es '\*'](/es/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)
- [Razón: No se encontró el método en el encabezado CORS 'Access-Control-Allow-Methods'](/es/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound)
- [Razón: esperado 'true' en el encabezado CORS 'Access-Control-Allow-Credentials'](/es/docs/Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials)
- [Razón: El canal de verificación previa de CORS no tuvo éxito](/es/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed)
- [Razón: token no válido 'xyz' en el encabezado CORS 'Access-Control-Allow-Methods'](/es/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod)
- [Razón: token no válido 'xyz' en el encabezado CORS 'Access-Control-Allow-Headers'](/es/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader)
- [Razón: falta el token 'xyz' en el encabezado de CORS 'Access-Control-Allow-Headers' del canal de verificación previa de CORS](/es/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Razón: Encabezado CORS múltiple 'Access-Control-Allow-Origin' no permitido](/es/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Véase también

- Glosario: {{Glossary("CORS")}}
- [Introducción a CORS](/es/docs/Web/HTTP/CORS)
- [Configuración de CORS del lado del servidor](/es/docs/Web/HTTP/CORS)
- [Imagen habilitada para CORS](/es/docs/Web/HTML/CORS_enabled_image)
- [Atributos de configuración de CORS](/es/docs/Web/HTML/Attributes/crossorigin)
- <https://www.test-cors.org> – página para probar solicitudes CORS
