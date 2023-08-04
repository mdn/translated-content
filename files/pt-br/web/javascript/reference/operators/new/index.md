---
title: new operator
slug: Web/JavaScript/Reference/Operators/new
---

{{jsSidebar("Operators")}}

O **operador `new`** cria uma instancia de um tipo de objeto definido pelo usuário ou de um dos tipos nativos (_built-in_) que possuem uma função construtora.

{{EmbedInteractiveExample("pages/js/expressions-newoperator.html")}} A fonte deste exemplo interativo é armazenada em um repositório do GitHub. Se você gostaria de contribuir para o projeto de exemplos interativos, clone <https://github.com/mdn/interactive-examples> e nos envie uma requisição de comando pull.

## Sintaxe

```
new construtor[([argumentos])]
```

### Parametros

- `construtor`
  - : Uma função que especifica o tipo da instância do objeto.
- `argumentos`
  - : Uma lista de valores com os quais o construtor será chamado.

## Descrição

Criar um objeto definido pelo usuário requer dois passos:

1. Definir o tipo de objeto através da escrita de uma função.
2. Criar uma instancia do objeto utilizando `new`.

Para definir um tipo de objeto, crie uma função para o tipo de objetivo que especifica seu nome e propriedades. Um objeto pode ter uma propriedade que é um outro objeto. Veja os exemplos abaixo:

Quando o código `new Foo(...)` é executado, acontece o seguinte::

1. Um novo objeto é criado, herdando de `Foo.prototype`.
2. A função construtora _F`oo`_ é chamado com os argumentos especificados, e com [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) vinculado ao novo objeto criado. `new Foo` é equivalente a `new Foo()`, ou seja, se nenhuma lista de argumentos for especificada, _Foo_ é chamado sem argumentos.
3. O objeto retornado pela função construtora é o resultado de toda expressão `new`. Se a função construtora não retornar um objeto explicitamente, o objeto criado no passo 1 é então usado. (Normalmente construtores não retornam um valor, mas eles podem escolher fazê-lo se eles quiserem sobrescrever o processo normal de criação de objeto.)

Você sempre pode adicionar uma propriedade à um objeto definido previamente. Por exemplo, `carro1.cor = "preta"` adiciona a propriedade `cor` em `carro1`, e atribui a ela o valor de "`preta`". Entretanto, isso não afeta os outros objetos. Para adicionar a nova propriedade a todos objetos do mesmo tipo, você deve adicionar a propriedade à definição do tipo de objeto `Carro`.

Você pode adicionar uma propriedade compartilhada à um tipo de objeto definido anteriormente através do uso da propriedade [`Function.prototype`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype). Isso define uma propriedade que é compartilhada por todos os objetos criados com essa função, ao invés de apenas uma instancia do tipo de objeto. O código a seguir adiciona uma propriedade cor com valor `null` à todos objetos do tipo `carro`, e então sobrescreve aquele valor com a string "`preta`" somente no objeto de instancia `carro1`. Para mais informações veja [prototype](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype).

```js
function Carro() {}
carro1 = new Carro();

console.log(carro1.cor); // undefined

Carro.prototype.cor = null;
console.log(carro1.cor); // null

carro1.cor = "preta";
console.log(carro1.cor); // preta
```

## Exemplos

### Tipo de objeto e instância de objeto

Suponha que você quer criar um tipo de objeto para carros. Você quer que esse tipo de objeto se chame `carro`, e quer que ele tenha propriedade para fabricante, modelo e ano. Para fazer isso, você escreveria a função a seguir:

```js
function Carro(fabricante, modelo, ano) {
  this.fabricante = fabricante;
  this.modelo = modelo;
  this.ano = ano;
}
```

Agora você pode criar um objeto chamado `meucarro` como a seguir:

```js
var meucarro = new Carro("Eagle", "Talon TSi", 1993);
```

Essa declaração cria `meucarro` e atribui a ele os valores especificados as suas propriedades. Então o valor de `meucarro.fabricante` é a string "Eagle", `meucarro.ano` é o inteiro 1993, e assim sucessivamente.

Você pode criar qualquer numero de objetos `carro` através de chamadas a `new`. Por exemplo:

```js
var carrodoken = new Carro("Nissan", "300ZX", 1992);
```

### Propriedade do objeto que é outro objeto

Suponha que você defina um objeto chamado `pessoa` como a seguir:

```js
function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}
```

E então instancia dois novos objetos `pessoa` como a seguir:

```js
var rand = new Pessoa("Rand McNally", 33, "M");
var ken = new Pessoa("Ken Jones", 39, "M");
```

Então você pode reescrever a definição de `carro` para incluir uma propriedade dono que aceita um objeto pessoa, como a seguir:

```js
function Carro(fabricante, modelo, ano, dono) {
  this.fabricante = fabricante;
  this.modelo = modelo;
  this.ano = ano;
  this.dono = dono;
}
```

Para instanciar os novos objetos, você então usa o seguinte:

```js
var carro1 = new Carro("Eagle", "Talon TSi", 1993, rand);
var carro2 = new Carro("Nissan", "300ZX", 1992, ken);
```

Ao invés de passar uma string ou valor inteiro quando criar os novos objetos, as definições acima passam objetos `rand` e `ken` como os parâmetros para os donos. Para descobrir o nome do dono do `carro2`, você pode acessar a seguinte propriedade:

```js
carro2.dono.nome;
```

## Especificações

| Specification                                                    | Status               | Comment                                            |
| ---------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-new-operator', 'The new Operator')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-new-operator', 'The new Operator')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-11.2.2', 'The new Operator')}}         | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES3', '#sec-11.2.2', 'The new Operator')}}           | {{Spec2('ES3')}}     |                                                    |
| {{SpecName('ES1', '#sec-11.2.2', 'The new Operator')}}           | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.0. |

## Compatibilidade com navegadores

{{Compat("javascript.operators.new")}}

## Veja também

- {{jsxref("Function")}}
- {{jsxref("Reflect.construct()")}}
