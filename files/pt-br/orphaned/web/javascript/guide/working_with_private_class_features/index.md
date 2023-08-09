---
title: Trabalhando com recursos de classe privada.
slug: orphaned/Web/JavaScript/Guide/Working_With_Private_Class_Features
---

{{jsSidebar("JavaScript Guide")}}

É comum querer tornar os campos ou métodos privados, mas o JavaScript não tem esse recurso desde o início. Surgiram convenções - como prefixar campos e métodos que devem ser tratados como privados com um sublinhado, como `_hidden` — mas são apenas convenções. Os recursos sublinhados ainda são totalmente públicos

Os recursos de classe privada fornecem campos e métodos verdadeiramente privados, com essa privacidade imposta pela linguagem em vez da convenção. Isso confere benefícios como evitar colisões de nomenclatura entre os recursos de classe e o restante da base de código e permitir que as classes exponham uma interface muito pequena para o restante do código.

## Campos privados

Para entender como os campos privados funcionam, vamos primeiro considerar uma classe que tem apenas campos públicos, mas usa o construtor para encapsular dados – uma técnica um tanto comum, mesmo que seja um pouco complicada. A classe a seguir cria uma contagem básica que aceita um número inicial, permite que esse número seja aumentado ou diminuído e pode ser redefinido para o valor inicial original ou qualquer outro valor.

```js example-bad
class PublicCounter {
  constructor(start = 0) {
    let _count = start;
    let _init = start;
    this.increase = (x = 1) => _count += x;
    this.decrease = (x = 1) => _count -= x;
    this.reset = (x = _init) => _count = x;
    this.getCount = () => _count;
  }
  get current() {
    return this.getCount();
  }
}
```

A ideia aqui é que uma vez que um novo contador desse tipo seja gerado, seu valor inicial e seu valor atual não estejam disponíveis para codificar fora do contador. A única maneira de modificar o valor de `_count` é por meio dos métodos definidos, como `increase()` e `reset()`. Da mesma forma, `_init` não pode ser modificado, porque não há métodos dentro da classe para fazer isso e o código externo não consegue alcançá-lo.

Aqui está a mesma ideia, só que desta vez, usaremos campos privados.

```js
class PrivateCounter {
  #count;
  #init;
  constructor(start = 0) {
    this.#init = start;
    this.reset(start);
  }
  increase(x = 1) { this.#count += x; }
  decrease(x = 1) { this.#count -= x; }
  reset(x = this.#init) { this.#count = x; }
  get current() {
    return this.#count;
  }
}

const total = new PrivateCounter(7);
console.log(total.current);  // expected output: 7
total.increase();            // #count now = 8
total.increase(5);           // #count now = 13
console.log(total.current);  // expected output: 13
total.reset();               // #count now = 7
```

A "marca de hash" (`#`) é o que marca um campo como privado. Ele também evita que campos privados e nomes de propriedades entrem em conflito: nomes privados devem começar com `#`, enquanto nomes de propriedades nunca podem começar dessa maneira.

Tendo declarado os campos privados, eles agem como vimos no exemplo público. A única maneira de alterar o valor de `#count` é por meio dos métodos disponíveis publicamente como `decrease()`, e como (neste exemplo) não há maneiras definidas de alterá-lo, o valor de `#init` é imutável. É definido quando um novo `PrivateCounter` é construído e nunca pode ser alterado depois disso.

Você **não pode** ler um valor privado diretamente do código fora do objeto de classe. Considerar:

```js example-bad
const score = new PrivateCounter(); // #count and #init are now both 0
console.log(score.#count);
  // output:
  // "Uncaught SyntaxError: Private field '#count' must be declared in an enclosing class"
```

Se você deseja ler dados privados de fora de uma classe, você deve primeiro inventar um método ou outra função para retorná-los. Já havíamos feito isso com o getter `current()` que retorna o valor atual de `#count`, mas `#init` está bloqueado. A menos que adicionemos algo como um método `getInit()` à classe, não podemos nem ver o valor inicial de fora da classe, muito menos alterá-lo, e o interpretador lançará erros se tentarmos.

Quais são as outras restrições em torno de campos privados? Por um lado, você não pode se referir a um campo privado que você não definiu anteriormente. Você pode estar acostumado a inventar novos campos em tempo real em JavaScript, mas isso não funciona com campos privados.

```js example-bad
class BadIdea {
  constructor(arg) {
    this.#init = arg;  // syntax error occurs here
    #startState = arg; // syntax error would also occur here
  }                    // because private fields weren't defined
}                      // before being referenced
```

Você não pode definir o mesmo nome duas vezes em uma única classe e não pode excluir campos privados.

```js example-bad
class BadIdeas {
  #firstName;
  #firstName; // syntax error occurs here
  #lastName;
  constructor() {
    delete this.#lastName; // also a syntax error
  }
}
```

Há outra limitação: você não pode declarar campos ou métodos privados por meio de [literais de objeto](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#using_object_initializers). Você pode estar acostumado com algo assim:

```js
const planet = {
  name: 'Terra',
  radiusKm: 6371,
  radiusMiles: 3959,
};
```

Se você tentar incluir um recurso de classe privada ao fazer isso, um erro será gerado.

```js example-bad
const planet = {
  name: 'Terra',
  radiusKm: 6371,
  radiusMiles: 3959,
  #secret: 'central inner core',
};
// result:
// "Uncaught SyntaxError: Unexpected identifier"
```

Por outro lado, você _pode_  ter campos privados estáticos, para coisas que você quer que sejam privadas e firmes na construção.

```js
class colorMixer {
  static #red   = "rgba(1,0,0,1)";
  static #green = "rgba(0,1,0,1)";
  static #blue  = "rgba(0,0,1,1)";
  #mixedColor;
  constructor() {
    // …
  }
}
```

## Métodos privados

Assim como os campos privados, os métodos privados são marcados com uma entrelinha `#` e não podem ser acessados de fora de sua classe. Eles são úteis quando você tem algo complexo que a classe precisa fazer internamente, mas é algo que nenhuma outra parte do código deve ter permissão para chamar.

Por exemplo, imagine criar [elementos HTML personalizados](/pt-BR/docs/Web/Web_Components/Using_custom_elements) que devem fazer algo um pouco complicado quando clicados/tocados/ativados de outra forma. Além disso, as coisas um pouco complicadas que acontecem quando o elemento é clicado devem ser restritas a esta classe, porque nenhuma outra parte do JavaScript irá (ou deve) acessá-lo. Portanto, algo como:

```js
class CustomClick extends HTMLElement {
  #handleClicked() {
    // do complicated stuff in here
  }
  constructor() {
    super();
    this.#handleClicked();
  }
  connectedCallback() {
    this.addEventListener('click', this.#handleClicked)
  }
}

customElements.define('chci-interactive', CustomClick);
```

Isso também pode ser feito para getters e setters, o que é útil em qualquer situação em que você queira apenas obter ou definir coisas dentro da mesma classe. Assim como com campos e métodos, prefixe o nome do getter/setter com `#`.

```js
class Counter extends HTMLElement {
  #xValue = 0;
  get #x() { return this.#xValue; }
  set #x(value) {
    this.#xValue = value;
    window.requestAnimationFrame(this.#render.bind(this));
  }
  #clicked() {
    this.#x++;
  }
  constructor() {
    super();
    this.onclick = this.#clicked.bind(this);
  }
  connectedCallback() { this.#render(); }
  #render() {
    this.textContent = this.#x.toString();
  }
}

customElements.define('num-counter', Counter);
```

Nesse caso, praticamente todos os campos e métodos são privados da classe. Assim, ele apresenta uma interface para o resto do código que é essencialmente como um elemento HTML embutido. Nenhuma outra parte do JavaScript tem o poder de afetar qualquer uma de suas partes internas.

## Verificando se existe um campo/método privado

O código JavaScript irá `throw` se você tentar acessar um método ou campo privado que não existe (isso difere de um método normal/público, que retornará `undefined`). Se você precisar escrever código para testar se um recurso privado foi definido, você pode usar `try`/`catch` , mas é mais compacto usar o operador [`in`](/pt-BR/docs/Web/JavaScript/Reference/Operators/in). Isso retorna `true` ou `false` dependendo se a propriedade está definida ou não.

O código abaixo demonstra a abordagem usando o exemplo de uma classe `Scalar` para adicionar valores. A classe usa o operador `in` para verificar se os objetos adicionados têm o campo `#total` de classe privada e lança uma mensagem de exceção informativa se um tipo diferente de objeto for passado.

```js
class Scalar {
  #total = 0;
  constructor(value) {
    this.#total = value || this.#total;
  }

  add(s) {
    // check the passed object defines #total
    if (!(#total in s)) {
      throw new TypeError("Expected an instance of Scalar");
    }
    this.#total += s.#total;
  }
}

const scalar1 = new Scalar(1);
scalar1.add(scalar1)
scalar1.add({}) // throws informative exception
```

## Veja também

- [Recursos de Classe  privada](/pt-BR/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [FAQ sobre sintaxe de Classes privadas](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md)
- [A semântica de todos os elementos de Class JS](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)

## Compatibilidade de navegadores

{{Compat}}
