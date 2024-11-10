---
title: Meta programação
slug: Web/JavaScript/Guide/Meta_programming
---

{{jsSidebar("JavaScript Guide")}} {{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}

Começando com ECMAScript 6, o JavaScript ganha suporte para os objetos {{jsxref("Proxy")}} e {{jsxref("Reflect")}}, permitindo você interceptar e definir o comportamento personalizado para operações fundamentais da linguagem (por exemplo, pesquisa de propriedade, atribuição, enumeração, invocação de função, etc). Com a ajuda destes dois objetos você será capaz de programar a nível [meta](https://pt.wikipedia.org/wiki/Metaprograma%C3%A7%C3%A3o) em JavaScript.

## Proxies

Introduzido em ECMAScript 6, objetos {{jsxref("Proxy")}} permitem que você intercepte determinadas operações e implementar comportamentos personalizados. Por exemplo, receber uma propriedade em um objeto:

```js
var handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42;
  },
};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

O objeto Proxy define um `target` (um objeto vazio aqui) e um objeto `handler` em que um `get` _trap_ é implementado. Aqui, um objeto que está em proxy não retornará indefinido quando receber propriedades indefinidas, mas, ao contrário, retornar o número 42.

Exemplos adicionais estão disponíveis na página de referência de {{jsxref("Proxy")}} .

### Terminologia

Os seguintes termos são usados quando se fala sobre a funcionalidade de proxies.

- {{jsxref("Global_Objects/Proxy/handler","handler","",1)}}
  - : Espaço reservado de objeto que contenha traps.
- traps
  - : Os métodos que fornecem acesso de propriedade. Isto é análogo ao conceito de traps em sistemas operacionais.
- target
  - : Objeto que o proxy está virtualizando. Ele é frequentemente usado como backend de armazenamento para o proxy. Invariantes (semânticas que permanecem inalteradas) relativas a objetos que não podem ser extendidos ou propriedades que não podem ser configuradas são comparadas com o target.
- invariantes
  - : Semânticas que permanecem inalteradas na execução de operações personalizadas são chamados de _invariantes_. Se você violar as invariantes de um manipulador, um {{jsxref("TypeError")}} será lançado.

## Handlers e traps

A tabela a seguir resume as traps disponíveis aos objetos do tipo Proxy. Veja as [páginas de referência](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler) para explicações detalhadas e exemplos.

<table class="standard-table">
  <thead>
    <tr>
      <th>Handler / trap</th>
      <th>Interceptions</th>
      <th>Invariants</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
      <td>
        <ul style="padding-left: 20px; margin: 5px">
          <li>
            O método <code>getPrototypeOf</code> deve retornar um object ou
            <code>null</code>.
          </li>
          <li>
            Se <code>target</code> não puder ser extendido, o método
            <code>Object.getPrototypeOf(proxy)</code> deve retornar o mesmo
            valor que <code>Object.getPrototypeOf(target)</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
      <td>
        <p>
          Se <code>target </code>não puder ser extendido, o parâmetro
          <code>prototype </code>dever ter o mesmo valor que
          <code>Object.getPrototypeOf(target)</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
      <td>
        <code>Object.isExtensible(proxy)</code> deve retornar o mesmo valor que
        <code>Object.isExtensible(target)</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
      <td>
        <code>Object.preventExtensions(proxy)</code> retorna
        <code>true</code> somente se
        <code>Object.isExtensible(proxy)</code> retornar <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        <ul style="padding-left: 20px; margin: 5px">
          <li>
            <code>getOwnPropertyDescriptor</code> deve retornar um object ou
            <code>undefined</code>.
          </li>
          <li>
            Uma propriedade não pode ser descrita como não existente se ela
            existir como uma propriedade própria e não configurável do objeto
            alvo.
          </li>
          <li>
            Uma propriedade não pode ser relatada como inexistente, se existir
            como uma propriedade própria do objeto de destino e o objeto de
            destino não for extensível.
          </li>
          <li>
            Uma propriedade não pode ser relatada como existente, se não existir
            como uma propriedade própria do objeto de destino e o objeto de
            destino não for extensível.
          </li>
          <li>
            Uma propriedade não pode ser relatada como não configurável, se não
            existir como uma propriedade própria do objeto de destino ou se
            existir como uma propriedade própria configurável do objeto de
            destino.
          </li>
          <li>
            O resultado de
            <code>Object.getOwnPropertyDescriptor(target)</code> pode ser
            aplicado ao objeto de destino usando
            <code>Object.defineProperty</code> e não emitirá uma exceção.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
      <td>
        <ul style="padding-left: 20px; margin: 5px">
          <li>
            Uma propriedade não pode ser adicionada se o objeto de destino não
            for extensível.
          </li>
          <li>
            Uma propriedade não pode ser adicionada como ou modificada para não
            ser configurável, se não existir como uma propriedade própria não
            configurável do objeto de destino.
          </li>
          <li>
            Uma propriedade pode não ser não configurável, se existir uma
            propriedade configurável correspondente do objeto de destino.
          </li>
          <li>
            Se uma propriedade tiver uma propriedade de objeto de destino
            correspondente
            <code>Object.defineProperty(target, prop, descriptor)</code> não
            lançará uma exceção.
          </li>
          <li>
            No modo estrito, um valor de retorno <code>false</code> do
            manipulador <code>defineProperty</code> manipulador lançará um
            {{jsxref("TypeError")}} exceção.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}
      </td>
      <td>
        Property query: <code>foo in proxy</code><br />Inherited property query:
        <code>foo in Object.create(proxy)</code
        ><br />{{jsxref("Reflect.has()")}}
      </td>
      <td>
        <ul style="padding-left: 20px; margin: 5px">
          <li>
            Uma propriedade não pode ser relatada como inexistente, se existir
            como uma propriedade própria não configurável do objeto de destino.
          </li>
          <li>
            Uma propriedade não pode ser relatada como inexistente, se existir
            como uma propriedade própria do objeto de destino e o objeto de
            destino não for extensível.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}
      </td>
      <td>
        <!-- markdownlint-disable MD011 -->1
        Property access: <code>proxy[foo]</code>and <code>proxy.bar</code
        ><br />Inherited property access: <code>Object.create(proxy)[foo]</code
        ><br />{{jsxref("Reflect.get()")}}
      </td>
      <td>
        <ul style="padding-left: 20px; margin: 5px">
          <li>
            O valor relatado para uma propriedade deve ser igual ao valor da
            propriedade do objeto de destino correspondente se a propriedade do
            objeto de destino for uma propriedade de dados não gravável e não
            configurável.
          </li>
          <li>
            O valor relatado para uma propriedade deve ser indefinido se a
            propriedade do objeto de destino correspondente for uma propriedade
            acessora não configurável que tenha sido indefinida como seu
            atributo [[Get]].
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}
      </td>
      <td>
        Property assignment: <code>proxy[foo] = bar</code> and
        <code>proxy.foo = bar</code><br />Inherited property assignment:
        <code>Object.create(proxy)[foo] = bar</code
        ><br />{{jsxref("Reflect.set()")}}
      </td>
      <td>
        <ul style="padding-left: 20px; margin: 5px">
          <li>
            Não é possível alterar o valor de uma propriedade para ser diferente
            do valor da propriedade do objeto de destino correspondente se a
            propriedade do objeto de destino correspondente for uma propriedade
            de dados não gravável e não configurável.
          </li>
          <li>
            Não é possível definir o valor de uma propriedade se a propriedade
            do objeto de destino correspondente for uma propriedade acessadora
            não configurável que tenha <code>undefined</code> como seu atributo
            [[Set]].
          </li>
          <li>
            No modo estrito, um valor de retorno <code>false</code> do
            manipulador <code>set</code> lançará uma exceção
            {{jsxref ("TypeError")}}.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        Property deletion: <code>delete proxy[foo]</code> and
        <code>delete proxy.foo</code
        ><br />{{jsxref("Reflect.deleteProperty()")}}
      </td>
      <td>
        Uma propriedade não pode ser excluída, se existir como uma propriedade
        própria não configurável do objeto de destino.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/enumerate", "handler.enumerate()")}}
      </td>
      <td>
        Property enumeration / for...in:
        <code>for (var name in proxy) {...}</code
        ><br />{{jsxref("Reflect.enumerate()")}}
      </td>
      <td>
        <p>O método <code>enumerate</code> deve retornar um objeto.</p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
      <td>
        <ul style="padding-left: 20px; margin: 5px">
          <li>O resultado de <code>ownKeys</code> é uma lista.</li>
          <li>
            O tipo de cada elemento da lista de resultados é
            {{jsxref ("String")}} ou {{jsxref ("Symbol")}}.
          </li>
          <li>
            A lista de resultados deve conter as chaves de todas as propriedades
            próprias não configuráveis do objeto de destino.
          </li>
          <li>
            Se o objeto de destino não for extensível, a Lista de resultados
            deverá conter todas as chaves das próprias propriedades do objeto de
            destino e nenhum outro valor.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} and
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
      <td>
        <p>Não há invariantes para o método <code>handler.apply</code></p>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
      <td>O resultado deve ser um <code>Object</code>.</td>
    </tr>
  </tbody>
</table>

## Proxy Revogável

O método {{jsxref("Proxy.revocable()")}} é utilizado para criar um objeto Proxy revogável. Isso significa que o proxy pode ser revogado através da função `revoke`, desligando-o. Depois disso, qualquer operação com o proxy lançará um {{jsxref("TypeError")}}.

```js
var revocable = Proxy.revocable(
  {},
  {
    get: function (target, name) {
      return "[[" + name + "]]";
    },
  },
);
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError é lançado
proxy.foo = 1; // TypeError novamente
delete proxy.foo; // ainda um TypeError
typeof proxy; // "object", typeof não desencadeia nenhuma trap
```

## Reflexão

{{jsxref("Reflect")}} é um objeto embutido que contém métodos que permitem a criação de operações interceptáveis em JavaScript. Os métodos são iguais àqueles de {{jsxref("Global_Objects/Proxy/handler","proxy handlers","",1)}}. `Reflect` não é um objeto do tipo function.

`Reflect` auxilia no encaminhamento de operações padrão do handler para o target.

{{jsxref("Reflect.has()")}}, por exemplo, tem o mesmo efeito prático que o operador in, com a facilidade de ser utilizado como uma função:

```js
Reflect.has(Object, "assign"); // true
```

### Uma função `apply` melhorada

Em ES5, você normalmente utiliza o método {{jsxref("Function.prototype.apply()")}} para invocar uma função com um dado valor para `this` e `arguments` fornecido como um array (ou um [objeto parecido com um array](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

Com {{jsxref("Reflect.apply")}} essa operação se torna menos verbosa e mais fácil de compreender:

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### Verificando se a definição da propriedade obteve sucesso

Com {{jsxref("Object.defineProperty")}}, a qual retorna um `object` em caso de sucesso ou lança um {{jsxref("TypeError")}} em caso contrário, você utilizaria um bloco {{jsxref("Statements/try...catch","try...catch")}} para capturar qualquer erro que tenha ocorrido ao definir uma propriedade. Devido ao fato de {{jsxref("Reflect.defineProperty")}} retornar um status do tipo `Boolean`, você pode simplesmente utilizar aqui um bloco {{jsxref("Statements/if...else","if...else")}}:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

{{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}
