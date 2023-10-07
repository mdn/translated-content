---
title: Protótipos de objetos
slug: Learn/JavaScript/Objects/Object_prototypes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}

Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros. Neste artigo, explicamos como as cadeias de protótipos funcionam e observamos como a propriedade prototype pode ser usada para adicionar métodos aos construtores existentes.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Entender como funções em JavaScript funcionam, familiaridade com o
        básico de JavaScript (veja
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps">Primeiros Passos</a>
        e
        <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks"
          >Elementos Construtivos</a
        >), e o básico de Orientação a Objetos em JavaScript (veja
        <a href="/pt-BR/docs/Aprender/JavaScript/Objetos"
          >Introdução a Objetos</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender protótipos de objetos JavaScript, como a cadeia de protótipos
        funciona, e como adicionar novos métodos à propriedade
        <em>prototype.</em>
      </td>
    </tr>
  </tbody>
</table>

## Uma linguagem baseada em protótipos?

O JavaScript é frequentemente descrito como uma **linguagem baseada em protótipos** — para fornecer herança, os objetos podem ter um **objeto de protótipo**, que atua como um objeto de modelo do qual herda métodos e propriedades. O objeto de protótipo de um objeto também pode ter um objeto de protótipo, do qual herda métodos e propriedades, e assim por diante. Isso geralmente é chamado de **cadeia de protótipos** e explica por que objetos diferentes têm propriedades e métodos definidos em outros objetos disponíveis para eles.

Bem, para ser exato, as propriedades e os métodos são definidos na propriedade `prototype` nas funções construtoras dos Objetos, não nas próprias instâncias do objeto.

Em JavaScript, é feito um link entre a instância do objeto e seu protótipo (sua propriedade `__proto__`, que é derivada da propriedade `prototype` no construtor), e as propriedades e os métodos são encontrados percorrendo a cadeia de protótipos.

> **Nota:** É importante entender que há uma distinção entre o protótipo de um objeto (que está disponível por meio de [`Object.getPrototypeOf(obj)`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf), ou por meio da propriedade [`__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) ) e a propriedade `prototype` em funções construtoras. O primeiro é a propriedade em cada instância e o último é a propriedade no construtor. Ou seja, `Object.getPrototypeOf(new Foobar())` refere-se ao mesmo objeto que `Foobar.prototype`.

Vejamos um exemplo para tornar isso um pouco mais claro.

## Noções básicas sobre objetos de protótipo

Aqui voltaremos ao exemplo em que terminamos de escrever nosso construtor `Person()` — carregamos o exemplo em seu navegador. Se você ainda não o conseguiu trabalhar no último artigo, use nosso exemplo [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) (veja também o [código-fonte](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)).

Neste exemplo, definimos uma função construtora, assim:

```js
function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.first = first;
  this.last = last;
  //...
}
```

Nós criamos então uma instância de objeto como esta:

```js
var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
```

Se você digitar "`person1.`" em seu console JavaScript, você deve ver o navegador tentar concluir automaticamente isso com os nomes de membros disponíveis neste objeto:

![](object-available-members.png)

Nesta lista, você verá os membros definidos no construtor de `person1`'s constructor — `Person()` — `name`, `age`, `gender`, `interests`, `bio`, e `greeting`. No entanto, você também verá alguns outros membros — `watch`, `valueOf`, etc — estes estão definidos no objeto de protótipo do `Person()`, que é [`Object`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object).

![](mdn-graphics-person-person-object-2.png)

O que acontece se você chamar um método em `person1`, que é realmente definido em `Object`? Por exemplo:

```js
person1.valueOf();
```

Este método — [`Object.valueOf()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) é herdado por `person1` porque seu construtor é `Person()`, e o protótipo de `Person()` é `Object()`. `valueOf()` retorna o valor do objeto em que é chamado — experimente e veja! Nesse caso, o que acontece é:

- O navegador verifica inicialmente se o objeto `person1` tem um método `valueOf()` disponível nele, conforme definido em seu construtor, `Person()`.
- Se não tem, então o navegador verifica se o objeto (`Object()`) de protótipo do construtor `Person()` tem um método `valueOf()` disponível, então ele é chamado, e tudo está bem!

> **Nota:** Queremos reiterar que os métodos e as propriedades **não** são copiados de um objeto para outro na cadeia de protótipos — eles são acessados ao percorrer a cadeia como descrito acima.

> **Nota:** Não existe uma maneira oficial de acessar diretamente o objeto protótipo de um objeto — os "links" entre os itens da cadeia são definidos em uma propriedade interna, chamada de `[[prototype]]` na especificação da linguagem JavaScript (veja {{glossary("ECMAScript")}}). A maioria dos navegadores modernos, no entanto, tem uma propriedade disponível neles chamada [`__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) (que é sublinhada em ambos os lados), que contém o objeto de protótipo do construtor do objeto. Por exemplo, tente `person1.__proto__` and `person1.__proto__.__proto__` para ver como a cadeia se parece no código!
>
> Desde ECMAScript 2015 você pode acessar o objeto protótipo de um objeto indiretamente via `Object.getPrototypeOf(obj)`.

## A propriedade prototype: Onde os membros herdados são definidos

Então, onde estão as propriedades e os métodos herdados definidos? Se você observar a página de referência do [`Object`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object), verá, à esquerda, um grande número de propriedades e métodos — muito mais do que o número de membros herdados que vimos disponíveis no objeto `person1`. Alguns são herdados e outros não — por que isso acontece?

Como mencionado acima, os herdados são os definidos na propriedade `prototype` (você poderia chamá-lo de um subespaço de nomes) — ou seja, aqueles que começam com `Object.prototype`, e não os que começam com apenas `Object`. O valor da propriedade `prototype` é um objeto, que é basicamente um bucket para armazenar propriedades e métodos que queremos que sejam herdados por objetos mais abaixo na cadeia de protótipos.

Portanto, [`Object.prototype.watch()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/watch), [`Object.prototype.valueOf()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), etc., estão disponíveis para qualquer tipo de objeto que herda de `Object.prototype`, incluindo novas instâncias de objeto criadas a partir do construtor `Person()`.

[`Object.is()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/is), [`Object.keys()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), e outros membros não definidos dentro do bloco `prototype` não são herdados por instâncias de objetos ou tipos de objetos que herdam de `Object.prototype`. Eles são métodos / propriedades disponíveis apenas no próprio construtor `Object()`.

> **Nota:** Isso parece estranho — como você pode ter um método definido em um construtor, que é em si uma função? Bem, uma função também é um tipo de objeto — veja a referência do construtor [`Function()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function) se você não acredita em nós.

1. Você pode conferir as propriedades de protótipo existentes para si mesmo — volte ao nosso exemplo anterior e tente inserir o seguinte no console JavaScript:

   ```js
   Person.prototype;
   ```

2. A saída não mostrará muito porque não definimos nada no protótipo do nosso construtor personalizado! Por padrão, o `prototype` de um construtor sempre começa vazio. Agora tente o seguinte:

   ```js
   Object.prototype;
   ```

Você verá um grande número de métodos definidos na propriedade `prototype` do `Object`, que estão disponíveis em objetos que herdam `Object`, como mostrado anteriormente.

Você verá outros exemplos de herança de cadeia de protótipos em todo o JavaScript — tente procurar os métodos e propriedades definidos no protótipo dos objetos globais [`String`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String), [`Date`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date), [`Number`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number), e [`Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array), por exemplo. Estes todos têm um número de membros definidos em seu protótipo, e é por isso que, por exemplo, quando você cria uma string, como esta:

```js
var myString = "This is my string.";
```

`myString` imediatamente tem vários métodos úteis disponíveis, como [`split()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split), [`indexOf()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), [`replace()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace), etc.

> **Nota:** Vale a pena ler nosso guia mais aprofundado sobre [Como usar protótipos em JavaScript](/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Using_prototypes_in_JavaScript), uma vez que você tenha entendido esta seção e queira saber mais. Esta seção é intencionalmente simplificada para tornar esses conceitos um pouco mais fáceis de entender quando você os conhecer pela primeira vez.

> **Aviso:** **Importante**: A propriedade `prototype` é uma das partes com o nome mais confuso do JavaScript — você pode pensar que `this` aponta para o objeto de protótipo do objeto atual, mas não (esse é um objeto interno que pode ser acessado por `__proto__`, lembra?) . Em vez disso, `prototype` é uma propriedade que contém um objeto no qual você define os membros que deseja herdar.

## Revisitando create()

Anteriormente mostramos como o método [`Object.create()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create) pode ser usado para criar uma nova instância de objeto.

1. Por exemplo, tente isso no console JavaScript do seu exemplo anterior:

   ```js
   var person2 = Object.create(person1);
   ```

2. O que `create()` realmente faz é criar um novo objeto a partir de um objeto de protótipo especificado. Aqui, `person2` está sendo criado usando `person1` como um objeto de protótipo. Você pode verificar isso inserindo o seguinte no console:

   ```js
   person2.__proto__;
   ```

Isso retornará o person1.

## A propriedade do construtor

Toda função de construtor possui uma propriedade prototype cujo valor é um objeto que contém uma propriedade [`constructor`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor). Esta propriedade construtora aponta para a função construtora original. Como você verá na próxima seção, as propriedades definidas na propriedade Person.prototype (ou, em geral, na propriedade prototype de uma função construtora, que é um objeto, conforme mencionado na seção acima) tornam-se disponíveis para todos os objetos de instância criados usando Construtor Person(). Portanto, a propriedade constructor também está disponível para os objetos person1 e person2.

1. Por exemplo, tente estes comandos no console:

   ```js
   person1.constructor;
   person2.constructor;
   ```

   Estes devem retornar o construtor `Person()`, pois contém a definição original dessas instâncias.

   Um truque inteligente é que você pode colocar parênteses no final da propriedade do `constructor` (contendo quaisquer parâmetros necessários) para criar outra instância de objeto daquele construtor. O construtor é uma função depois de tudo, então pode ser chamado usando parênteses; você só precisa incluir a palavra-chave `new` para especificar que deseja usar a função como um construtor.

2. Tente isso no console:

   ```js
   var person3 = new person1.constructor("Karen", "Stephenson", 26, "female", [
     "playing drums",
     "mountain climbing",
   ]);
   ```

3. Agora tente acessar os recursos do seu novo objeto, por exemplo:

   ```js
   person3.name.first;
   person3.age;
   person3.bio();
   ```

Isso funciona bem. Você não precisará usá-lo com frequência, mas pode ser realmente útil quando você deseja criar uma nova instância e não tem uma referência ao construtor original facilmente disponível por algum motivo.

A propriedade do [`constructor`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) tem outros usos. Por exemplo, se você tiver uma instância de objeto e desejar retornar o nome do construtor do qual ela é uma instância, use o seguinte:

```js
instanceName.constructor.name;
```

Tente isso, por exemplo:

```js
person1.constructor.name;
```

> **Nota:** O valor de `constructor.name` pode mudar (devido à herança prototípica, ligação, pré-processadores, transpilers, etc.), portanto, para exemplos mais complexos, você desejará usar o operador [`instanceof`](/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof).

## Modificando Protótipos

Vamos dar uma olhada em um exemplo de modificação da propriedade `prototype` de uma função construtora — os métodos adicionados ao protótipo estão então disponíveis em todas as instâncias de objeto criadas a partir do construtor. Neste ponto, finalmente adicionaremos algo ao protótipo do nosso construtor `Person()`.

1. Volte para o nosso exemplo de [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) e faça uma cópia local do [código-fonte](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html). Abaixo do JavaScript existente, adicione o seguinte código, que adiciona um novo método à propriedade `prototype` do construtor:

   ```js
   Person.prototype.farewell = function () {
     alert(this.name.first + " has left the building. Bye for now!");
   };
   ```

2. Salve o código e carregue a página no navegador e tente inserir o seguinte na entrada de texto:

   ```js
   person1.farewell();
   ```

Você deve receber uma mensagem de alerta, mostrando o nome da pessoa, conforme definido dentro do construtor. Isso é realmente útil, mas o que é ainda mais útil é que toda a cadeia de herança foi atualizada dinamicamente, disponibilizando automaticamente esse novo método em todas as instâncias de objeto derivadas do construtor.

Pense nisso por um momento. Em nosso código, definimos o construtor, então criamos um objeto de instância a partir do construtor, então adicionamos um novo método ao protótipo do construtor:

```js
function Person(first, last, age, gender, interests) {
  // property and method definitions
}

var person1 = new Person("Tammi", "Smith", 32, "neutral", [
  "music",
  "skiing",
  "kickboxing",
]);

Person.prototype.farewell = function () {
  alert(this.name.first + " has left the building. Bye for now!");
};
```

Mas o método `farewell()` ainda está disponível na instância do objeto `person1` — seus membros foram atualizados automaticamente para incluir o método `farewell()`.

> **Nota:** Se você está tendo problemas para fazer este exemplo funcionar, dê uma olhada no nosso exemplo [oojs-class-prototype.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-prototype.html) (veja também [running live](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-prototype.html)).

Você raramente verá propriedades definidas na propriedade `prototype`, porque elas não são muito flexíveis quando definidas dessa forma. Por exemplo, você poderia adicionar uma propriedade assim:

```js
Person.prototype.fullName = "Bob Smith";
```

Isso não é muito flexível, pois a pessoa pode não ser chamada assim. Seria muito melhor construir o `fullName` fora do `name.first` e `name.last`:

```js
Person.prototype.fullName = this.name.first + " " + this.name.last;
```

No entanto, isso não funciona, pois `this` fará referência ao escopo global nesse caso, não ao escopo da função. Chamar essa propriedade retornaria `undefined undefined`. Isso funcionou bem no método que definimos anteriormente no protótipo porque ele está dentro um escopo de função, que será transferido com sucesso para o escopo da instância do objeto, portanto, você pode definir propriedades constantes no protótipo (ou seja, aquelas que nunca precisam ser alteradas), mas geralmente funciona melhor definir propriedades dentro do construtor.

Na verdade, um padrão bastante comum para mais definições de objetos é definir as propriedades dentro do construtor e os métodos no protótipo. Isso torna o código mais fácil de ler, pois o construtor contém apenas as definições de propriedade e os métodos são divididos em blocos separados. Por exemplo:

```js
// Constructor with property definitions

function Test(a, b, c, d) {
  // property definitions
}

// First method definition

Test.prototype.x = function() { ... };

// Second method definition

Test.prototype.y = function() { ... };

// etc.
```

Esse padrão pode ser visto em ação no exemplo de [aplicativo de plano escolar](https://github.com/zalun/school-plan-app/blob/master/stage9/js/index.js) de Piotr Zalewa.

## Sumário

Este artigo abrangeu protótipos de objetos JavaScript, incluindo como cadeias de objetos de protótipos permitem que objetos herdem recursos uns dos outros, a propriedade prototype e como ela pode ser usada para adicionar métodos a construtores e outros tópicos relacionados.

No próximo artigo, veremos como você pode implementar a herança de funcionalidade entre dois dos seus próprios objetos personalizados.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}
