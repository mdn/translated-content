---
title: Enumerabilidad y posesión de propiedades
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
---

{{JsSidebar("Más")}}

Las propiedades enumerables son aquellas propiedades cuyo indicador enumerable interno se establece en `true`, que es el valor predeterminado para las propiedades creadas mediante una asignación simple o mediante un iniciador de propiedad (propiedades definidas mediante {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty")}} y tal valor enumerable predeterminado a `false`). Se muestran numerosas propiedades en bucles {{jsref("Statements/for...in", "for...in")}} a menos que la clave de la propiedad sea {{jsxref("Global_Objects/Symbol", "Symbol")}}. La posesión de las propiedades está determinada por si la propiedad pertenece directamente al objeto y no a su cadena prototipo. Las propiedades de un objeto también se pueden recuperar en total. Hay varios medios incorporados para detectar, iterar/enumerar y recuperar propiedades de objetos, y el gráfico que se muestra a continuación está disponible. A continuación, se muestra un código de muestra que demuestra cómo obtener las categorías faltantes.

**Propiedad, enumerabilidad y posesión — métodos integrados de detección, recuperación e iteración**

- Funcionalidad

  - : &#x20;

    - Detección

      - : **Propia del Objeto**

        | Enumerable                                                                                                                                           | No enumerable                                                                                                                                                                                      | Enumerable y no enumerable                                           |
        | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
        | {{jsxref("Global_Objects/Object/propertyIsEnumerable", "propertyIsEnumerable")}}{{jsxref("Global_Objects/Object/hasOwnProperty", "hasOwnProperty")}} | {{jsxref("Global_Objects/Object/hasOwnProperty", "hasOwnProperty")}} — filtrado para excluir enumerables mediante {{jsxref("Global_Objects/Object/propertyIsEnumerable", "propertyIsEnumerable")}} | {{jsxref("Global_Objects/Object/hasOwnProperty", "hasOwnProperty")}} |

        **Propia del Objeto y su cadena prototipo**

        | Enumerable                         | No enumerable                      | Enumerable y no enumerable       |
        | ---------------------------------- | ---------------------------------- | -------------------------------- |
        | No disponible sin código adicional | No disponible sin código adicional | {{jsxref("Operators/in", "in")}} |

        **Solo en cadena prototipo**

        No disponible sin código adicional

    - Recuperación

      - : **Propia del Objeto**

        | Enumerable                                                                                                                                                                                                              | No enumerable                                                                                                                                                                                                                                                                                  | Enumerable y no enumerable                                                                                                                                       |
        | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | {{jsxref("Global_Objects/Object/keys", "Object.keys")}}{{jsxref("Global_Objects/Object/getOwnPropertyNames", "getOwnPropertyNames")}}{{jsxref("Global_Objects/Object/getOwnPropertySymbols", "getOwnPropertySymbols")}} | {{jsxref("Global_Objects/Object/getOwnPropertyNames", "getOwnPropertyNames")}}, {{jsxref("Global_Objects/Object/getOwnPropertySymbols", "getOwnPropertySymbols")}} — filtrado para excluir enumerables usando {{jsxref("Global_Objects/Object/propertyIsEnumerable", "propertyIsEnumerable")}} | {{jsxref("Global_Objects/Object/getOwnPropertyNames", "getOwnPropertyNames")}}{{jsxref("Global_Objects/Object/getOwnPropertySymbols", "getOwnPropertySymbols")}} |

        **Propia del Objeto y su cadena prototipo**

        No disponible sin código adicional

        **Solo en cadena prototipo**

        No disponible sin código adicional

    - Iterable

      - : **Propia del Objeto**

        | Enumerable                                                                                                                                                                                                              | No enumerable                                                                                                                                                                                                                                                                                  | Enumerable y no enumerable                                                                                                                                       |
        | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | {{jsxref("Global_Objects/Object/keys", "Object.keys")}}{{jsxref("Global_Objects/Object/getOwnPropertyNames", "getOwnPropertyNames")}}{{jsxref("Global_Objects/Object/getOwnPropertySymbols", "getOwnPropertySymbols")}} | {{jsxref("Global_Objects/Object/getOwnPropertyNames", "getOwnPropertyNames")}}, {{jsxref("Global_Objects/Object/getOwnPropertySymbols", "getOwnPropertySymbols")}} — filtrado para excluir enumerables usando {{jsxref("Global_Objects/Object/propertyIsEnumerable", "propertyIsEnumerable")}} | {{jsxref("Global_Objects/Object/getOwnPropertyNames", "getOwnPropertyNames")}}{{jsxref("Global_Objects/Object/getOwnPropertySymbols", "getOwnPropertySymbols")}} |

        **Propia del Objeto y su cadena prototipo**

        | Enumerable                                                        | No enumerable                      | Enumerable y no enumerable         |
        | ----------------------------------------------------------------- | ---------------------------------- | ---------------------------------- |
        | {{jsxref("Statements/for...in", "for..in")}}(no incluye símbolos) | No disponible sin código adicional | No disponible sin código adicional |

        **Solo en cadena prototipo**

        No disponible sin código adicional

## Obtención de propiedades por enumerabilidad/posesión

Ten en cuenta que este no es el algoritmo más eficiente para todos los casos, pero es útil para una demostración rápida.

- La detección puede ocurrir por `SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) > -1`
- La iteración puede ocurrir por `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});` (o usa `filter()`, `map()`, etc.)

```js
var SimplePropertyRetriever = {
  getOwnEnumerables: function (obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // O podrías usar for..in filtrado con hasOwnProperty o simplemente esto: return Object.keys(obj);
  },
  getOwnNonenumerables: function (obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable,
    );
    // O simplemente usa: return Object.getOwnPropertyNames(obj);
  },
  getPrototypeEnumerables: function (obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonenumerables: function (obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  getOwnAndPrototypeEnumerables: function (obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // O podrías usar "for..in" sin filtrar
  },
  getOwnAndPrototypeNonenumerables: function (obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumerablesAndNonenumerables: function (obj) {
    return this._getPropertyNames(
      obj,
      true,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  // Retrollamada del supervisor de propiedad estática privada
  _enumerable: function (obj, prop) {
    return obj.propertyIsEnumerable(prop);
  },
  _notEnumerable: function (obj, prop) {
    return !obj.propertyIsEnumerable(prop);
  },
  _enumerableAndNotEnumerable: function (obj, prop) {
    return true;
  },
  // Inspirado en http://stackoverflow.com/a/8024294/271577
  _getPropertyNames: function getAllPropertyNames(
    obj,
    iterateSelfBool,
    iteratePrototypeBool,
    includePropCb,
  ) {
    var props = [];

    do {
      if (iterateSelfBool) {
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
          if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
            props.push(prop);
          }
        });
      }
      if (!iteratePrototypeBool) {
        break;
      }
      iterateSelfBool = true;
    } while ((obj = Object.getPrototypeOf(obj)));

    return props;
  },
};
```

## Tabla de detección

|                          | `in` | `for..in` | `obj.hasOwnProperty` | `obj.propertyIsEnumerable` | `Object.keys` | `Object.getOwnPropertyNames` | `Object.getOwnPropertyDescriptors` | `Reflect.ownKeys()` |
| ------------------------ | ---- | --------- | -------------------- | -------------------------- | ------------- | ---------------------------- | ---------------------------------- | ------------------- |
| Enumerable               | true | true      | true                 | true                       | true          | true                         | true                               | true                |
| No enumerable            | true | false     | true                 | false                      | false         | true                         | true                               | true                |
| Símbolos clave           | true | false     | true                 | true                       | false         | false                        | true                               | true                |
| Enumerable heredado      | true | true      | false                | false                      | false         | false                        | false                              | false               |
| Heredado no enumerable   | true | false     | false                | false                      | false         | false                        | false                              | false               |
| Símbolos clave heredados | true | false     | false                | false                      | false         | false                        | false                              | false               |

## Ve también

- {{jsxref("Operators/in", "in")}}
- {{jsxref("Statements/for...in", "for..in")}}
- {{jsxref("Object.hasOwnProperty()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
