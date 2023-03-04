---
title: event.defaultPrevented
slug: Web/API/Event/defaultPrevented
---

{{ ApiRef() }}

### Resumen

Retorna un boleano indicando si {{ domxref("event.preventDefault()") }} fue llamado en el evento o no.

> **Nota:** Deberías usar este en lugar del que no es estándar, el método obsoleto `getPreventDefault()` (ver {{ bug(691151) }}).

### Sintaxis

```
bool = event.defaultPrevented
```

### Ejemplo

```
 if (e.defaultPrevented) {
   /* El evento por defecto fue prevenido */
 }
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
