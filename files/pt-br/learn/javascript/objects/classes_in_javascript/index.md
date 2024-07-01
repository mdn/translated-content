---
title: Herança em JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

Com a maior parte dos detalhes principais do OOJS agora explicados, este artigo mostra como criar classes de objetos "child" (construtores) que herdam recursos de suas classes "parent". Além disso, apresentamos alguns conselhos sobre quando e onde você pode usar o OOJS e veja como as classes são tratadas na sintaxe moderna do ECMAScript.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico de computação, conhecimento básico de HTML e CSS,
        familiaridade com com o básico de Javascript (veja
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps">Primeiros passos</a>
        e
        <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks"
          >Construindo blocos</a
        >) e OOJS básico (veja
        <a href="/pt-BR/docs/Learn/JavaScript/Object-oriented/Introduction"
          >Introdução a objetos</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Entender como é possível implementar a herança em Javascript.</td>
    </tr>
  </tbody>
</table>

## Herança Prototipada

Até agora vimos alguma herança em ação — vimos como funcionam as cadeias de protótipos e como os membros são herdados subindo em uma cadeia. Mas principalmente isso envolveu funções internas do navegador. Como criamos um objeto em JavaScript que herda de outro objeto?

Vamos explorar como fazer isso com um exemplo concreto.

## Começando

Primeiro de tudo, faça uma cópia local do arquivo [oojs-class-inheritance-start.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html) (veja também [ao vivo](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html)). Aqui dentro você encontrará o mesmo exemplo de construtor `Person()` que utilizamos durante todo o módulo, com uma pequena diferença — definimos apenas as propriedades dentro do construtor:

```js
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}
```

Os métodos são _todos_ definidos no protótipo do construtor. Por exemplo:

```js
Person.prototype.greeting = function () {
  alert("Hi! I'm " + this.name.first + ".");
};
```

> **Nota:** No código fonte, você também verá os métodos `bio()` e `farewell()` definidos. Depois você verá como eles podem ser herdados por outros construtores.

Digamos que quiséssemos criar uma classe `Teacher`, como a que descrevemos em nossa definição inicial orientada a objetos, que herda todos os membros de `Person`, mas também inclui:

1. Uma nova propriedade, `subject` — isso irá conter o assunto que o professor ensina.
2. Um método `greeting()` atualizado, que soa um pouco mais formal do que o método padrão `greeting()` — mais adequado para um professor que se dirige a alguns alunos da escola.

## Definindo uma função construtora Teacher()

A primeira coisa que precisamos fazer é criar um construtor `Teacher()` — adicione o seguinte abaixo do código existente:

```js
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
```

Isto parece similar ao construtor Person de várias maneiras, mas há algo estranho aqui que nós não vimos antes — a função [`call()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/call). Esta função basicamente permite chamar uma função definida em outro lugar, mas no contexto atual. O primeiro parâmetro especifica o valor `this` que você deseja usar ao executar a função, e os outros parâmetros são aqueles que devem ser passados para a função quando ela é invocada.

Nós queremos que o construtor `Teacher()` pegue os mesmos parâmetros que o construtor `Person()` de onde ele está herdando, então especificamos todos eles como parâmetros na chamada `call()`.

A última linha dentro do construtor simplesmente define a nova propriedade `subject` que os professores terão, que pessoas genéricas não possuem.

Como nota, poderíamos simplesmente ter feito isso:

```js
function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}
```

Mas isso é apenas redefinir as propriedades de novo, não herdá-las de `Person()`, de modo que ela derrota o ponto que estamos tentando fazer. Também leva mais linhas de código.

### Herdando de um construtor sem parâmetros

Observe que, se o construtor do qual você está herdando não tomar seus valores de propriedade de parâmetros, não será necessário especificá-los como argumentos adicionais em `call()`. Então, por exemplo, se você tivesse algo realmente simples assim:

```js
function Brick() {
  this.width = 10;
  this.height = 20;
}
```

Você pode herdar as propriedades `width` e `height` fazendo isso (assim como as outras etapas descritas abaixo, é claro):

```js
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = "blue";
}
```

Observe que apenas especificamos `this` dentro de `call()` — nenhum outro parâmetro é necessário, já que não estamos herdando propriedades do pai que são configuradas por meio de parâmetros.

## Definindo o protótipo e referência de construtor do Teacher()

Tudo está bem até agora, mas nós temos um problema. Nós definimos um novo construtor, e ele tem uma propriedade `prototype`, que por padrão apenas contém uma referência à própria função construtora. Ele não contém os métodos da propriedade `prototype` do construtor Person. Para ver isso, insira `Object.getOwnPropertyNames(Teacher.prototype)` no campo de entrada de texto ou no seu console JavaScript. Em seguida, insira-o novamente, substituindo `Teacher` por `Person`. O novo construtor também não herda esses métodos. Para ver isso, compare as saídas de `Person.prototype.greeting` e `Teacher.prototype.greeting`. Precisamos obter `Teacher()` para herdar os métodos definidos no protótipo `Person()`. Então, como fazemos isso?

1. Adicione a seguinte linha abaixo da sua adição anterior:

   ```js
   Teacher.prototype = Object.create(Person.prototype);
   ```

   Aqui nosso amigo [`create()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create) vem para o resgate novamente. Nesse caso, estamos usando para criar um novo objeto e torná-lo o valor de `Teacher.prototype`. O novo objeto tem `Person.prototype` como seu protótipo e, portanto, herdará, se e quando necessário, todos os métodos disponíveis no `Person.prototype`.

2. Precisamos fazer mais uma coisa antes de prosseguirmos. Depois de adicionar a última linha, a propriedade `constructor` de `Teacher.prototype` agora é igual a `Person()`, porque apenas definimos `Teacher.prototype` para fazer referência a um objeto que herda suas propriedades de `Person.prototype`! Tente salvar seu código, carregar a página em um navegador e inserir `Teacher.prototype.constructor` no console para verificar.
3. Isso pode se tornar um problema, então precisamos definir isso corretamente. Você pode fazer isso voltando ao seu código-fonte e adicionando a seguinte linha na parte inferior:

   ```js
   Object.defineProperty(Teacher.prototype, "constructor", {
     value: Teacher,
     enumerable: false, // so that it does not appear in 'for in' loop
     writable: true,
   });
   ```

4. Agora, se você salvar e atualizar, entrar em `Teacher.prototype.constructor` deve retornar `Teacher()`, conforme desejado, além de estarmos herdando de `Person()`!

## Dar a Teacher() uma nova função greeting()

Para finalizar nosso código, precisamos definir uma nova função `greeting()` no construtor `Teacher()`.

A maneira mais fácil de fazer isso é defini-lo no protótipo do `Teacher()` — adicione o seguinte na parte inferior do seu código:

```js
Teacher.prototype.greeting = function () {
  var prefix;

  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
  }

  alert(
    "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      ".",
  );
};
```

Isso alerta a saudação do professor, que também usa um prefixo de nome apropriado para seu gênero, elaborado usando uma instrução condicional.

## Testando o exemplo

Agora que você digitou todo o código, tente criar uma instância de objeto do `Teacher()` colocando o seguinte na parte inferior do seu JavaScript (ou algo semelhante à sua escolha):

```js
var teacher1 = new Teacher(
  "Dave",
  "Griffiths",
  31,
  "male",
  ["football", "cookery"],
  "mathematics",
);
```

Agora salve e atualize e tente acessar as propriedades e os métodos do novo objeto `teacher1`, por exemplo:

```js
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
teacher1.farewell();
```

Tudo isso deve funcionar bem. As consultas nas linhas 1, 2, 3 e 6 acessam membros herdados do construtor genérico `Person()` (class). A consulta na linha 4 acessa um membro que está disponível somente no construtor mais especializado `Teacher()` (class). A consulta na linha 5 teria acessado um membro herdado de `Person()`, exceto pelo fato de que `Teacher()` tem seu próprio membro com o mesmo nome, portanto, a consulta acessa esse membro.

> **Nota:** If you have trouble getting this to work, compare your code to our [finished version](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-finished.html) (see it [running live](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html) also).

A técnica que abordamos aqui não é a única maneira de criar classes herdadas em JavaScript, mas funciona bem e dá uma boa idéia sobre como implementar a herança em JavaScript.

Você também pode estar interessado em conferir alguns dos novos recursos {{glossary("ECMAScript")}} que nos permitem fazer herança mais claramente em JavaScript (veja [Classes](/pt-BR/docs/Web/JavaScript/Reference/Classes)). Nós não cobrimos esses aqui, pois eles ainda não são suportados amplamente pelos navegadores. Todas as outras construções de código que discutimos neste conjunto de artigos são suportadas desde o IE9 ou anterior, e existem maneiras de obter suporte anterior a isso.

Uma maneira comum é usar uma biblioteca JavaScript — a maioria das opções populares tem um conjunto fácil de funcionalidade disponível para fazer herança com mais facilidade e rapidez. [CoffeeScript](http://coffeescript.org/#classes) por exemplo, fornece `class`, `extends`, etc.

## Um exercício adicional

Em nossa [seção de teoria OOP](/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters), incluímos também uma classe `Student` como um conceito, que herda todos os recursos de `Person`, e também tem um método `greeting()` diferente de `Person` que é muito mais informal do que a saudação do `Teacher`. Dê uma olhada na aparência da saudação do aluno nessa seção e tente implementar seu próprio construtor `Student()` que herda todos os recursos de `Person()`, e implemente a função `greeting()` diferente.

> **Nota:** If you have trouble getting this to work, have a look at our [finished version](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-student.html) (see it [running live](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-student.html) also).

## Sumário de membro do objeto

Resumindo, você basicamente tem três tipos de propriedade / método para se preocupar:

1. Aqueles definidos dentro de uma função construtora que são dadas a instâncias de objetos. Estes são bastante fáceis de detectar — em seu próprio código personalizado, eles são os membros definidos dentro de um construtor usando as linhas `this.x = x` ; no código do navegador, eles são os membros disponíveis apenas para instâncias de objetos (geralmente criados chamando um construtor usando a palavra-chave `new`, por exemplo, `var myInstance = new myConstructor()`).
2. Aqueles definidos diretamente no próprio construtor, que estão disponíveis apenas no construtor. Geralmente, eles estão disponíveis apenas em objetos de navegador internos e são reconhecidos por serem encadeados diretamente em um construtor, não em uma instância. Por exemplo, [`Object.keys()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).
3. Aqueles definidos no protótipo de um construtor, que são herdados por todas as instâncias e herdam as classes de objetos. Estes incluem qualquer membro definido na propriedade de protótipo de um Construtor, por ex. `myConstructor.prototype.x()`.

Se você não tem certeza de qual é qual, não se preocupe com isso ainda — você ainda está aprendendo e a familiaridade virá com a prática.

## Classes ECMAScript 2015

O ECMAScript 2015 introduz a [sintaxe de classe](/pt-BR/docs/Web/JavaScript/Reference/Classes) em JavaScript como uma maneira de escrever classes reutilizáveis usando uma sintaxe mais fácil e mais limpa, que é mais semelhante a classes em C ++ ou Java. Nesta seção, converteremos os exemplos Pessoa e Professor da herança protótipo para as classes, para mostrar como é feito.

> **Nota:** Essa forma moderna de escrever classes é suportada em todos os navegadores modernos, mas ainda vale a pena saber como a herança prototípica subjacente, caso você trabalhe em um projeto que exija suporte a um navegador que não suporte essa sintaxe (mais notavelmente o Internet Explorer) .

Vejamos uma versão reescrita do exemplo Person, estilo de classe:

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}
```

A declaração [class](/pt-BR/docs/Web/JavaScript/Reference/Statements/class) indica que estamos criando uma nova classe. Dentro deste bloco, definimos todos os recursos da classe:

- O método [`constructor()`](/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor) define a função construtora que representa nossa classe `Person`.
- `greeting()` e `farewell()` são métodos de classe. Quaisquer métodos que você deseja associar à classe são definidos dentro dela, após o construtor. Neste exemplo, usamos [template literals](/pt-BR/docs/Web/JavaScript/Reference/Template_literals) em vez de concatenação de string para facilitar a leitura do código.

Agora podemos instanciar instâncias de objeto usando o operador [`new`](/pt-BR/docs/Web/JavaScript/Reference/Operators/new), da mesma maneira que fizemos antes:

```js
let han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
han.greeting();
// Hi! I'm Han

let leia = new Person("Leia", "Organa", 19, "female", ["Government"]);
leia.farewell();
// Leia has left the building. Bye for now
```

> **Nota:** Sob o capô, suas classes estão sendo convertidas em modelos de herança protótipos — isso é apenas açúcar sintático. Mas tenho certeza que você concordará que é mais fácil escrever.

### Herança com sintaxe de classe

Acima nós criamos uma classe para representar uma pessoa. Eles têm uma série de atributos que são comuns a todas as pessoas; Nesta seção, criaremos nossa classe especializada `Teacher`, tornando-a herdada de `Person` usando a sintaxe de classe moderna. Isso é chamado de criação de uma subclasse ou subclasse.

Para criar uma subclasse, usamos a palavra-chave [extends](/pt-BR/docs/Web/JavaScript/Reference/Classes/extends) para informar ao JavaScript a classe na qual queremos basear nossa classe.

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    this.name = {
      first,
      last,
    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```

Podemos tornar o código mais legível definindo o operador [`super()`](/pt-BR/docs/Web/JavaScript/Reference/Operators/super) como o primeiro item dentro do `constructor()`. Isso chamará o construtor da classe pai e herdará os membros que especificarmos como parâmetros de `super()`, desde que sejam definidos lá:

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```

Quando instanciamos instâncias de objeto `Teacher` , podemos agora chamar métodos e propriedades definidos em `Teacher` e `Person`, como seria de esperar:

```js
let snape = new Teacher(
  "Severus",
  "Snape",
  58,
  "male",
  ["Potions"],
  "Dark arts",
  5,
);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age; // 58
snape.subject; // Dark arts
```

Como fizemos com Teachers, poderíamos criar outras subclasses de `Person` para torná-las mais especializadas sem modificar a classe base.

> **Nota:** You can find this example on GitHub as [es2015-class-inheritance.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-class-inheritance.html) ([see it live also](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-class-inheritance.html)).

## Getters e Setters

Pode haver momentos em que queremos alterar os valores de um atributo nas classes que criamos ou não sabemos qual será o valor final de um atributo. Usando o exemplo `Teacher`, podemos não saber o assunto que o professor ensinará antes de criá-lo, ou o assunto pode mudar entre os termos.

Podemos lidar com essas situações com getters e setters.

Vamos melhorar a classe Professor com getters e setters. A aula começa da mesma forma que foi a última vez que olhamos para ela.

Os getters e setters trabalham em pares. Um getter retorna o valor atual da variável e seu setter correspondente altera o valor da variável para o que ela define.

A classe `Teacher` modificada é assim:

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```

Em nossa classe acima, temos um getter e setter para a propriedade `subject`. Usamos **`_`** para criar um valor separado no qual armazenar nossa propriedade de nome. Sem usar essa convenção, obteríamos erros toda vez que chamássemos get ou set. Neste ponto:

- Para mostrar o valor atual da propriedade `_subject` do objeto `snape` , podemos usar o método getter `snape.subject`.
- Para atribuir um novo valor à propriedade `_subject` , podemos usar o método setter `snape.subject="new value"`.

O exemplo abaixo mostra os dois recursos em ação:

```js
// Check the default value
console.log(snape.subject); // Returns "Dark arts"

// Change the value
snape.subject = "Balloon animals"; // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject); // Returns "Balloon animals"
```

> **Nota:** You can find this example on GitHub as [es2015-getters-setters.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-getters-setters.html) ([see it live also](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-getters-setters.html)).

## Quando você usaria a herança em JavaScript?

Particularmente após este último artigo, você pode estar pensando "woo, isso é complicado". Bem, você está certo. Protótipos e herança representam alguns dos aspectos mais complexos do JavaScript, mas muito do poder e flexibilidade do JavaScript vem de sua estrutura e herança de objetos, e vale a pena entender como ele funciona.

De certa forma, você usa herança o tempo todo. Sempre que você usa vários recursos de uma API da Web ou métodos / propriedades definidos em um objeto de navegador interno que você chama em suas cadeias de caracteres, matrizes, etc., você está implicitamente usando herança.

Em termos de usar a herança em seu próprio código, você provavelmente não a usará com frequência, principalmente no começo e em pequenos projetos. É uma perda de tempo usar objetos e herança apenas por causa dela quando você não precisa deles. Mas à medida que suas bases de código aumentam, é mais provável que você encontre uma necessidade para isso. Se você estiver começando a criar vários objetos com recursos semelhantes, criar um tipo de objeto genérico para conter toda a funcionalidade compartilhada e herdar esses recursos em tipos de objetos mais especializados pode ser conveniente e útil.

> **Nota:** Por causa da maneira como o JavaScript funciona, com a cadeia de protótipos, etc., o compartilhamento de funcionalidade entre objetos é frequentemente chamado de **delegação**. Os objetos especializados delegam a funcionalidade a um tipo de objeto genérico.

Ao usar a herança, você é aconselhado a não ter muitos níveis de herança, e manter um controle cuidadoso de onde você define seus métodos e propriedades. É possível começar a escrever código que modifica temporariamente os protótipos dos objetos do navegador interno, mas você não deve fazer isso a menos que tenha um bom motivo. Demasiada herança pode levar a confusão sem fim, e dor infinita quando você tenta depurar esse código.

Em última análise, os objetos são apenas outra forma de reutilização de código, como funções ou loops, com seus próprios papéis e vantagens específicos. Se você estiver criando um monte de variáveis e funções relacionadas e quiser rastreá-las todas juntas e empacotá-las perfeitamente, um objeto é uma boa ideia. Objetos também são muito úteis quando você quer passar uma coleção de dados de um lugar para outro. Ambas as coisas podem ser alcançadas sem o uso de construtores ou herança. Se você precisa apenas de uma única instância de um objeto, provavelmente é melhor usar apenas um literal de objeto e certamente não precisa de herança.

## Alternativas para estender a cadeia de protótipos

Em JavaScript, existem várias maneiras diferentes de estender o protótipo de um objeto além do que mostramos acima. Para saber mais sobre as outras formas, visite nosso artigo [Herança e a cadeia de protótipos](/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Different_ways_to_create_objects_and_the_resulting_prototype_chain).

## Sumário

Este artigo cobriu o restante da teoria e sintaxe central do OOJS que achamos que você deveria saber agora. Neste ponto, você deve entender os princípios de objeto e OOP JavaScript, protótipos e herança prototypal, como criar classes (construtores) e instâncias de objetos, adicionar recursos a classes e criar subclasses que herdam de outras classes.

No próximo artigo, veremos como trabalhar com JavaScript Object Notation (JSON), um formato comum de troca de dados escrito usando objetos JavaScript.

## Veja também

- [ObjectPlayground.com](http://www.objectplayground.com/) — Um site de aprendizado interativo realmente útil para aprender sobre objetos.
- [Segredos Ninja de JavaScript](https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition), Capítulo 7 - Um bom livro sobre conceitos e técnicas avançadas de JavaScript, por John Resig, Bear Bibeault e Josip Maras. O Capítulo 7 aborda aspectos de protótipos e herança muito bem; Você provavelmente pode rastrear uma cópia impressa ou on-line com bastante facilidade.
- [Você não sabe JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) — Parte da excelente série de manuais de JavaScript de Kyle Simpson, o Capítulo 5, em particular, analisa os protótipos com muito mais detalhes do que fazemos aqui. Nós apresentamos uma visão simplificada nesta série de artigos destinados a iniciantes, enquanto Kyle entra em grande profundidade e fornece uma imagem mais complexa, mas mais precisa.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}
