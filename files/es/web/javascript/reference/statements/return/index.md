---
title: return
slug: Web/JavaScript/Reference/Statements/return
---

{{jsSidebar("Statements")}}

## Resumen

La sentencia `return` finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.

## Sintaxis

```
return [[ expresion ]];
```

- expresion
  - : La expresión a retornar. Si se omite, `undefined` es retornado en su lugar.

## Description

Cuando una instrucción de retorno se llama en una función, se detiene la ejecución de esta. Si se especifica un valor dado, este se devuelve a quien llama a la función. Si se omite la expresión, `undefined` se devuelve en su lugar. Todas las siguientes sentencias de retorno rompen la ejecución de la función:

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

## <br>La inserción automática Punto y coma

La instrucción de retorno se ve afectada por la inserción automática de punto y coma (ASI). No se permite el terminador de línea entre la palabra clave de retorno y la expresión.

```js
return;
a + b;
```

se transforma por ASI en:

```html
return; a + b;
```

La consola le advertirá "código inalcanzable después de la declaración de retorno".

> **Nota:** A partir de Gecko 40 (Firefox 40 / Thunderbird 40 / SeaMonkey 2.37), una advertencia es mostrada en la consola si se encuentra código inalcanzable despues de una instrucción return.

## Ejemplos

### Ejemplo: Usando `return`

La siguiente función devuelve el cuadrado de su argumento, `x`, donde `x` es un número.

```js
function cuadrado(x) {
  return x * x;
}
```

## Vea También

- [Funciones](/es/docs/Web/JavaScript/Referencia/Funciones)
