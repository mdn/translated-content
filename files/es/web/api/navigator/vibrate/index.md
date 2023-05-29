---
title: window.navigator.vibrate
slug: Web/API/Navigator/vibrate
---

{{ApiRef}}{{SeeCompatTable}}

## Resumen

Ejecuta la vibración por hardware en el dispositivo, si existe dicho hardware. Si el dispositivo no soporta vibración, este método no tendrá efecto. Si un patrón de vibración ya estaba en progreso cuando este método es ejecutado, el patrón anterior se detiene y en su lugar se iniciará el último patrón ejecutado.

## Sintaxis

```
window.navigator.vibrate(pattern);
```

- `pattern` proporciona un patrón de intervalos de vibración y pausas, como se describe a continuación.

<!---->

- pattern
  - : Proporciona un patrón de intervalos de vibraciones y pausas. Cada valor indica el número de milisegundos que durará la vibración y la pausa, respectivamente. Se puede porporcionar un valor único (en cuyo caso la vibración se ejecutará una vez, con la duración especificada en milisegundos) o un arreglo de valores (array) para alternar vibraciones y pausas. Ver [Vibration API](/es/docs/WebAPI/Vibration) para más detalles.

Si se especifica el valor 0, un array vacío o un array que contenga todos los valores en 0, se cancelarán todos los patrones de vibración que se estén ejecutando.

## Excepciones

Podrá producirse una excepción si el patrón de vibración especificado es demasiado largo o si cualquiera de sus elementos son demasiado grandes.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Vibration API](/es/docs/WebAPI/Vibration)
