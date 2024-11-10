---
title: event.defaultPrevented
slug: Web/API/Event/defaultPrevented
---

{{ ApiRef() }}

### Resumen

Retorna un boleano indicando si {{ domxref("event.preventDefault()") }} fue llamado en el evento o no.

> [!NOTE]
> Deberías usar este en lugar del que no es estándar, el método obsoleto `getPreventDefault()` (ver [Error 691151 en Firefox](https://bugzil.la/691151)).

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
