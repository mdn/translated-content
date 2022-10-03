---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
translation_of: Web/HTTP/Headers/Access-Control-Allow-Methods
---
{{HTTPSidebar}}

La cabecera de respuesta **`Access-Control-Allow-Methods`** especifica el método o los métodos aceptados cuando se accede al recurso en respuesta de un {{glossary("preflight request")}}.

| Tipo de cabecera                                 | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | no                                       |

## Sintaxis

```
Access-Control-Allow-Methods: <method>, <method>, ...
```

## Directivas

- \<método>
  - : Comma-delimited list of the allowed [HTTP request methods](/es/docs/Web/HTTP/Methods).

## Ejemplos

```
Access-Control-Allow-Methods: POST, GET, OPTIONS
```

## Especificaciones

| Specification                                                                                                            | Status                   | Comment            |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('Fetch','#http-access-control-allow-methods', 'Access-Control-Allow-Methods')}} | {{Spec2("Fetch")}} | Initial definition |

## Compatibilidad de navegador

{{Compat("http.headers.Access-Control-Allow-Methods")}}

## Notas de compatibilidad

- The wildcard value (\*) that is mentioned in the latest specification, is not yet implemented in browsers:

  - Chromium: [Issue 615313](https://bugs.chromium.org/p/chromium/issues/detail?id=615313)
  - Firefox: {{bug(1309358)}}
  - Servo: [Issue 13283](https://github.com/servo/servo/issues/13283)

## See also

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
