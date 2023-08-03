---
title: Enumerabilidade e posse de propriedades
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
---

{{JsSidebar("Mais")}}
Propriedades enumeráveis são aquelas propriedades cuja flag interna \[\[Enumerable]] é verdadeira (true), que é o padrão para propriedades criadas via assinatura simples ou através de um inicializador (propriedades definidas através de [Object.defineProperty](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) e tipo padrão \[\[Enumerable]] falso (false)).Propriedades enumeráveis aparecem em [for...in](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) loops exceto se o nome da propriedade for um objeto [Symbol](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Posse de propriedades é determinada pelo fato da propriedade pertencer ao objeto diretamente e não a uma cadeira de protótipos. Propriedades de um objeto pode também ser recuperadas diretamente. Há um número de built-in de detecção, iteração/enumeração e recuperação de propriedades, com o gráfico mostrando que estão disponíveis.O código de exemplo a seguir demostra como obter as categorias que faltam.

<table>
  <caption>
    Propriedade de enumerabilidade e posse - métodos internos de detecção,
    recuperação, e iteração
  </caption>
  <tbody>
    <tr>
      <th>Funcionalidade</th>
      <th>Próprio objeto</th>
      <th><p>Próprio objeto e sua cadeia de caracteres</p></th>
      <th>Somente cadeia de protótipos</th>
    </tr>
    <tr>
      <td>Detecção</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Enumerável</th>
              <th scope="col">Não enumerável</th>
              <th scope="col">Enumerável e Não enumerável</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
                e não
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
                    >hasOwnProperty</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Não disponível sem código extra</td>
      <td>Não disponível sem código extra</td>
    </tr>
    <tr>
      <td>Recuperação</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Enumerável</th>
              <th scope="col">Não enumerável</th>
              <th scope="col">Enumerável e Não enumerável</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/keys"
                    >Object.keys</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >
                filtrou-se para incluir as propriedades quando não passado
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                    >propertyIsEnumerable</a
                  ></code
                >
              </td>
              <td>
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Não disponível sem código extra</td>
      <td>Não disponível sem código extra</td>
    </tr>
    <tr>
      <td>Iteração</td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Enumerável</th>
              <th scope="col">Não enumerável</th>
              <th scope="col">Enumerável e Não enumerável</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Iterar
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/keys"
                    >Object.keys</a
                  ></code
                >
              </td>
              <td>
                <p>
                  itera
                  <code
                    ><a
                      href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                      >getOwnPropertyNames</a
                    > </code
                  >filtrou-se para incluir as propriedades quando não passado
                  <code
                    ><a
                      href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
                      >propertyIsEnumerable</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code>iterar<a
                    href="/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
                    >getOwnPropertyNames</a
                  ></code
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>
        <table>
          <thead>
            <tr>
              <th scope="col">Enumerável</th>
              <th scope="col">Não enumerável</th>
              <th scope="col">Enumerável e Não enumerável</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code
                  ><a
                    href="/pt-BR/docs/JavaScript/Reference/Statements/for...in"
                    >for..in</a
                  ></code
                >
              </td>
              <td>Não disponível sem código extra</td>
              <td>Não disponível sem código extra</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>Não disponível sem código extra</td>
    </tr>
  </tbody>
</table>

## Obtendo propriedades por enumerabilidade/posse

Note que não é o algoritmo mais eficiente para todos os casos, mas útil para uma demonstração rápida.

- Detecção pode ocorrer por `SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) > -1`
- Iteração pode ocorrer por `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});` (ou use `filter()`, `map()`, etc.)

```js
var SimplePropertyRetriever = {
  getOwnEnumerables: function (obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // Ou poderia usar for..in filtrado com hasOwnProperty ou apenas isto: return Object.keys(obj);
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
    // Ou apenas use: return Object.getOwnPropertyNames(obj);
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
    // Ou poderia usar filtrado for..in
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
  // Private static property checker callbacks
  _enumerable: function (obj, prop) {
    return obj.propertyIsEnumerable(prop);
  },
  _notEnumerable: function (obj, prop) {
    return !obj.propertyIsEnumerable(prop);
  },
  _enumerableAndNotEnumerable: function (obj, prop) {
    return true;
  },
  // Inspirado por http://stackoverflow.com/a/8024294/271577
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

## Tabela de Detecção

|                          | `in` | `for..in` | `hasOwnProperty` | `propertyIsEnumerable` | `in Object.keys` | `in Object.getOwnPropertyNames` | in Object.getOwnPropertyDescriptors |
| ------------------------ | ---- | --------- | ---------------- | ---------------------- | ---------------- | ------------------------------- | ----------------------------------- |
| Enumerável               | true | true      | true             | true                   | true             | true                            | true                                |
| Não enumerável           | true | false     | true             | false                  | false            | true                            | true                                |
| Inherited Enumerable     | true | true      | false            | false                  | false            | false                           | false                               |
| Inherited Nonenumerable  | true | false     | false            | false                  | false            | false                           | false                               |
| Account for Symbols keys | true | false     | true             | true                   | false            | false                           | true                                |

## Veja também

- [`in`](/pt-BR/docs/JavaScript/Reference/Operators/in)
- [`for..in`](/pt-BR/docs/JavaScript/Reference/Statements/for...in)
- [`hasOwnProperty`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`propertyIsEnumerable`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [`getOwnPropertyNames`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.keys`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.getOwnPropertyDescriptors`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
