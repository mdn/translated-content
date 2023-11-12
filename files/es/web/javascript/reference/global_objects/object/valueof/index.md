---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef("Global_Objects", "Object")}}

El método **`valueOf()`** retorna el valor primitivo del objeto especificado.

## Sintaxis

```
object.valueOf()
```

### Valor de retorno

El valor primitivo del objeto especificado.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## Descripción

JavaScript utiliza el método `valueOf` para convertir un objeto a un valor primitivo. Raramente usted necesitará invocar el método `valueOf` por su cuenta; JavaScript lo realizará de forma automática cuando encuentre un objeto, donde un valor primitivo es esperado.

Por defecto, el método `valueOf` es heredado por cada objeto descendiente de {{jsxref("Object")}}. Cada objeto incorporado en el núcleo del lenguaje sobreescribe este método para retornar un valor apropiado. Si un objeto no tiene un valor primitivo, `valueOf` devuelve el objeto en sí.

Puede utilizar `valueOf` dentro de su propio código para convertir un objeto incorporado en el núcleo del lenguaje en un valor primitivo. Cuando usted crea un objeto personalizado, puede sobreescribir el comportamiento de `Object.prototype.valueOf()` para invocar un método personalizado, en vez de utilizar el método por defecto {{jsxref("Object")}}.

### Sobreescribiendo `valueOf` para objetos personalizados

Puede crear una función para ser invocada en lugar de utilizar el método `valueOf` por defecto. Su función no debe contener ningún parámetro.

Suponga que tiene un objeto de tipo `myNumberType` y usted quiere crear un método `valueOf` para este. El código a continuación asigna una función personalizada al método `valueOf`:

```js
myNumberType.prototype.valueOf = function () {
  return customPrimitiveValue;
};
```

Al tener el código anterior funcionando, cada vez que un objeto de tipo `myNumberType` es utilizado en un contexto donde deba ser representado por un valor primitivo, JavaScript automáticamente invocará la función definida en el código anterior.

El método `valueOf` es invocado usualmente por JavaScript pero usted puede invocarlo directamente como sigue a continuación:

```js
myNumber.valueOf();
```

> **Nota:** Objetos en contextos de string realizan la conversión a string a través del método {{jsxref("Object.toString", "toString()")}} , el cual, es diferente de {{jsxref("String")}} para convertir objetos a primitivos string utilizando el método `valueOf`. Todos los objetos pueden ser convertidos a string, si solo "`[object _type_]`". Pero muchos objetos no se pueden convertir a number, boolean o function.

## Ejemplos

### Utilizando `valueOf`

```js
function myNumberType(n) {
  this.number = n;
}

myNumberType.prototype.valueOf = function () {
  return this.number;
};

myObj = new myNumberType(4);
myObj + 3; // 7
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
