---
title: with
slug: Web/JavaScript/Reference/Statements/with
---

> **Aviso:** O uso da declaração `with` não é recomendado, isso porque ele pode ser a fonte de bugs confusos e problemas de compatibilidade. Veja o parágrafo "Contra de ambiguidade" na seção "Descrição" para mais detalhes.

{{jsSidebar("Statements")}}

A **declaração with** extende a cadeia de escopo para uma declaração.

## Sintaxe

```
with (expressão)
  declaração
```

- `expressão`
  - : Adiciona a dada expressão à cadeia de escopo quando estiver avaliando a declaração. O parênteses em volta da expressão é obrigatório.
- `declaração`
  - : Qualquer declaração. Para executação multiplas declarações, utilize a declaração em [bloco](/pt-BR/docs/Web/JavaScript/Reference/Statements/block) ({ ... }) para agrupar estas declarações.

## Descrição

JavaScript procura por um nome não qualificado procurando uma cadeia de escopo associada à execução do contexto do script ou função contendo um nome não qualificado. A declaração 'with' adiciona o dado objeto à frenet dessa cadeia de escopo durante a validação desse corpo de declarações. Se um nome não qualificado usado no corpo for igual ao de uma propriedade na cadeia de escopo, então o nome ficará ligado à propriedade e ao objeto contendo a propriedade. Senão, um {{jsxref("ReferenceError")}} será invocado.

> **Nota:** Usar `with` não é recomendado, e está probido no [strict mode](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) do ECMAScript 5. A alternativa recomendada é atribuir o objeto cujas propriedades você quer acessar a uma variável temporária.

### Pros & contras de perfomance

**Pro:** A declaração `with` pode ajudar o tamanho do arquivo por reduzir a necessidade de repetir a referência a um objeto longo sem penalidade na perfomance. A cadeia de escopo mudada por um 'with' não é computacionalmente cara. O uso de 'with' irá aliviar o interpretador de tratar repetidamente as referências. Note que, no entando, isso em muitos casos pode ser substituído usando uma variável temporária para armazenar a referência do objeto desejado.

**Contra:** A declaração `with` força que o objeto especifícado a ser procurado primeiro por pesquisas de nome. Assim sendo, todos os indentificadores que não são membros do objeto espeficícado vão ser encontrados mais lentamente em um bloco 'with'. Onde a perfomance é importande, 'with' deve ser usado apenas para englobar blocos de código que acessam membros de um objeto especifíco.

### Contra de ambiguidade

**Contra:** A declaração `with` faz ser difícil para um leitor humano ou compilador JavaScript decidir se um nome não qualificado var se encontrado em uma cadeia de escopo, e também, em qual objeto. Dado o exemplo seguinte:

```js
function f(x, o) {
  with (o) {
    console.log(x);
  }
}
```

Apenas quando `f` é chamado é `x` ou encontrado ou não, e se for encontrado, ou em `o` ou (se nenhuma propriedade existir) no objeto de ativação de `f`, onde o nome de `x` é o primeiro argumento formal. Se você esquecer de definir `x` no objeto que você passou como segundo argumento, ou se há algum bug similar ou confusão, você não vai receber um erro — apenas resultados inesperados.

**Contra:** Código utilizando `with` talvez não seja compatível posteriormente, especialmente quando usado com algo que não seja um objeto simples. Considere esse exemplo:

```js
function f(foo, values) {
  with (foo) {
    console.log(values);
  }
}
```

Se você chamar `f([1,2,3], obj)` em um ambiente ECMAScript 5, então a referência de `values` dentro da declaração `with` irá ser `obj`. No entando, ECMAScript 6 introduz uma propriedade `values` no [`Array.prototype`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype) (então isso estará disponível em todas as arrays). Então, em um ambiente JavaScript que suporta ECMAScript 6, a referência de `values` dentro da declaração `with` irá ser `[1,2,3].values`.

## Exemplos

### Usando `with`

A seguinte declaração `with` irá especificar que o objeto [`Math`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math) é o objeto padrão. As seguintes declarações seguindo a declaração `with` irão referir a propriedade [`PI`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) e aos métodos [`cos`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/cos) e [`sin`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sin), sem especificar um objeto. JavaScript assume o objeto `Math` para essas referências.

```js
var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

## Especificações

| Especificação                                                    | Situação             | Comentário                      |
| ---------------------------------------------------------------- | -------------------- | ------------------------------- |
| {{SpecName('ESDraft', '#sec-with-statement', 'with statement')}} | {{Spec2('ESDraft')}} |                                 |
| {{SpecName('ES6', '#sec-with-statement', 'with statement')}}     | {{Spec2('ES6')}}     |                                 |
| {{SpecName('ES5.1', '#sec-12.10', 'with statement')}}            | {{Spec2('ES5.1')}}   | Agora proibido no modo estrito. |
| {{SpecName('ES3', '#sec-12.10', 'with statement')}}              | {{Spec2('ES3')}}     |                                 |
| {{SpecName('ES1', '#sec-12.10', 'with statement')}}              | {{Spec2('ES1')}}     | Definição inicial               |

## Compatibilidade com navegadores

{{Compat("javascript.statements.with")}}

## Veja também

- {{jsxref("Statements/block", "block")}}
- [Strict mode](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
