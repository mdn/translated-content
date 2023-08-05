---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
---

{{JSRef}}

O método **`toString()`** retorna uma string representando o código fonte da função.

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## Sintaxe

```
function.toString()
```

### Valor de retorno

Uma string representando o código fonte da função.

## Descrição

O objeto da {{jsxref("Function")}} substitui o método {{jsxref("Object.prototype.toString", "toString")}} herdado de {{jsxref("Object")}}; ele não herda {{jsxref("Object.prototype.toString")}}. Para objetos {{jsxref("Function")}} definidos pelo usuário, o método `toString` retorna uma string contendo o seguimento de texto de origem que foi usado para definir a função

O JavaScript chama o método `toString` automaticamente quando uma {{jsxref("Function")}} pode ser representada como um valor de texto. e.x. quando uma função é concatenada com uma string.

O método `toString()` lançará uma exceção do tipo {{jsxref("TypeError")}} ("Function.prototype.toString called on incompatible object") se o valor `this` do objeto não é um objeto do tipo `Function.`

```js example-bad
Function.prototype.toString.call("foo"); // TypeError
```

Se o método `toString()` é chamado por objetos de funções embutidas ou por uma função criada por `Function.prototype.bind`, `toString()` retorna uma string de uma função nativa que parece

```js
"function () {\n    [native code]\n}";
```

Se o método `toString()` é chamado por uma função criada pelo contrutor de `Function`, `toString()` retorna o código fonte de uma declaração de função sintetizada chamada "anonymous" usando os parâmetros passados e o corpo da função.

## Exemplos

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Função</th>
      <th scope="col">Function.prototype.toString resultado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><pre class="notranslate">function f(){}</pre></td>
      <td><pre class="notranslate">"function f(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">class A { a(){} }</pre></td>
      <td><pre class="notranslate">"class A { a(){} }"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">function* g(){}</pre></td>
      <td><pre class="notranslate">"function* g(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">a => a</pre></td>
      <td><pre class="notranslate">"a => a"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">({ a(){} }.a)</pre></td>
      <td><pre class="notranslate">"a(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">({ *a(){} }.a)</pre></td>
      <td><pre class="notranslate">"*a(){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">({ [0](){} }[0])</pre></td>
      <td><pre class="notranslate">"[0](){}"</pre></td>
    </tr>
    <tr>
      <td>
        <pre class="notranslate">
Object.getOwnPropertyDescriptor({
    get a(){}
}, "a").get</pre
        >
      </td>
      <td><pre class="notranslate">"get a(){}"</pre></td>
    </tr>
    <tr>
      <td>
        <pre class="notranslate">
Object.getOwnPropertyDescriptor({
    set a(x){}
}, "a").set</pre
        >
      </td>
      <td><pre class="notranslate">"set a(x){}"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">Function.prototype.toString</pre></td>
      <td>
        <pre class="notranslate">"function toString() { [native code] }"</pre>
      </td>
    </tr>
    <tr>
      <td><pre class="notranslate">(function f(){}.bind(0))</pre></td>
      <td><pre class="notranslate">"function () { [native code] }"</pre></td>
    </tr>
    <tr>
      <td><pre class="notranslate">Function("a", "b")</pre></td>
      <td><pre class="notranslate">"function anonymous(a\n) {\nb\n}"</pre></td>
    </tr>
  </tbody>
</table>

## Especificações

| Especificação                                                                                                                     | Status               | Comentário                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                               | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.1.                        |
| {{SpecName('ES6', '#sec-function.prototype.tostring', 'Function.prototype.toString')}}                                            | {{Spec2('ES6')}}     | Mais requisitos específicos foram incluídos para representação de string. |
| [`Function.prototype.toString` revisions proposal](https://tc39.github.io/Function-prototype-toString-revision/#sec-introduction) | Rascunho             | Padroniza a função de string navida e fins de linha.                      |
| {{SpecName('ESDraft', '#sec-function.prototype.tostring', 'Function.prototype.toString')}}                                        | {{Spec2('ESDraft')}} |                                                                           |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Function.toString")}}

## Notas específicas do Firefox

- Desde o Firefox 17 a função `Function.prototype.toString()` tem sido implementada salvando o fonte da função. O descompilador foi removido o que torna o parâmetro `indentation` desnecessário. Veja [Erro do Firefox 761723](https://bugzil.la/761723) para mais detalhes.
- Do Firefox 38 para o 63 a função `Function.prototype.toString()` lançava exceções para objetos {{jsxref("Proxy")}} ([Erro do Firefox 1100936](https://bugzil.la/1100936) e [Erro do Firefox 1440468](https://bugzil.la/1440468)).

## Veja também

- {{jsxref("Object.prototype.toString()")}}
