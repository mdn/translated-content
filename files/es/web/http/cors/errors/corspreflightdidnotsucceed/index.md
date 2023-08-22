---
title: "Reason: CORS preflight channel did not succeed"
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
---

{{HTTPSidebar}}

## Razón

```
Razón: El canal de verifiación CORS no tuvo éxito.
```

## ¿Qué salió mal?

The {{Glossary("CORS")}} requiere verificación previa, la verificación previa no pudo realizarse. Hay un par de razones por las cuales la verificación previa puede fallar:

- Se ha realizado previamente una solicitud entre sitios que realizó una verificación previa y no se permite volver a realizar la verificación previa. Asegúrese de que su código solo realice una verificación previa una vez por conexión.
- La verificación previa ha sufrido alguna clase de un error de red fundamental.

## Véase también

- [CORS errors](/es/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/es/docs/Web/HTTP/CORS)
