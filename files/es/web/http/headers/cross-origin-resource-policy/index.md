---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
tags:
  - HTTP
  - Referencia
  - Respuesta de encabezado
  - encabezado
  - encabezado HTTP
translation_of: Web/HTTP/Headers/Cross-Origin-Resource-Policy
---
{{HTTPSidebar}}

La respuesta del encabezado HTTP **`Cross-Origin-Resource-Policy`** transmite un deseo de que el navegador bloquee peticiones no-cors cross-origin/cross-site al recurso dado

| Tipo de encabezado                                                                               | {{Glossary("Response header", "Respuesta del encabezado")}} |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name", "Nombre prohibido del encabezado")}} | no                                                                               |

## Sintaxis

```
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## Ejemplos

La respuesta de encabezado debajo puede causar que agentes de usuario compatibles desabiliten peticiones cross-origin no-cors:

```
Cross-Origin-Resource-Policy: same-origin
```

## Especificaciones

| Especificación                                                                   | Estado                                                                       | Comentario         |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------ |
| {{SpecName("Fetch", '#cross-origin-resource-policy-header')}} | {{Spec2("Fetch", '#cross-origin-resource-policy-header')}} | Definición inicial |

## Compatibilidad de los navegadores

{{Compat("http.headers.Cross-Origin-Resource-Policy")}}

## Ver también

- [Explicador de la política de recursos cruzados (Cross-Origin Resource Policy - CORP)](</es/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>)
