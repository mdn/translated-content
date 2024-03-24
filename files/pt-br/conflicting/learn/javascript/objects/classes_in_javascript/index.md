---
title: JavaScript orientado a objetos para iniciantes
slug: conflicting/Learn/JavaScript/Objects/Classes_in_JavaScript
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

Com o básico fora do caminho, agora vamos nos concentrar no JavaScript orientado a objetos (OOJS) — Este artigo apresenta uma visão básica da teoria de programação orientada a objeto (OOP), em seguida, explora como o JavaScript emula as classes de objetos através de funções de construtor e como criar instâncias de objeto.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Alfabetização básica em informática, um entendimento básico de HTML e
        CSS, familiaridade com o básico do JavaScript (consulte
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps">Primeiros passos</a>
        e
        <a href="/pt-BR/docs/Learn/JavaScript/Building_blocks"
          >Blocos de construção</a
        >) e noções básicas do OOJS (consulte
        <a href="/pt-BR/docs/Learn/JavaScript/Object-oriented/Introduction"
          >Introdução aos objetos</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Para entender a teoria básica por trás da programação orientada a
        objetos, como isso se relaciona com JavaScript ("tudo é um objeto") e
        como criar construtores e instâncias de objetos.
      </td>
    </tr>
  </tbody>
</table>

## Programação orientada a objetos - o básico

Para começar, vamos dar uma visão simplista e de alto nível do que é programação orientada a objeto (OOP). Dizemos simplista, porque a OOP pode rapidamente se tornar muito complicada, e dar a ela um tratamento completo agora provavelmente confundiria mais do que ajuda. A idéia básica da OOP é que usamos objetos para modelar coisas do mundo real que queremos representar dentro de nossos programas, e / ou fornecer uma maneira simples de acessar funcionalidades que de outra forma seriam difíceis ou impossíveis de usar.

Os objetos podem conter dados e códigos relacionados, que representam informações sobre o que você está tentando modelar e a funcionalidade ou o comportamento que você deseja ter. Dados de objeto (e muitas vezes, funções também) podem ser armazenados ordenadamente (a palavra oficial é **encapsulados**) dentro de um pacote de objetos (que pode ser dado um nome específico para se referir, que é às vezes chamado de **namespace**), tornando fácil de estruturar e acessar; objetos também são comumente usados como armazenamentos de dados que podem ser facilmente enviados pela rede.

### Definindo um modelo de objeto

Vamos considerar um programa simples que exibe informações sobre os alunos e professores de uma escola. Aqui vamos olhar para a teoria OOP em geral, não no contexto de qualquer linguagem de programação específica.

Para começar, poderíamos retornar ao nosso tipo de objeto Person do nosso [primeiro artigo de objetos](/pt-BR/docs/Learn/JavaScript/Objects/Basics), que define os dados genéricos e a funcionalidade de uma pessoa. Há muitas coisas que você poderia saber sobre uma pessoa (endereço, altura, tamanho do sapato, perfil de DNA, número de passaporte, traços de personalidade significativos ...), mas neste caso estamos interessados apenas em mostrar seu nome, idade, sexo e interesses, e também queremos ser capazes de escrever uma breve introdução sobre eles com base nesses dados e fazê-los dizer oi. Isso é conhecido como **abstração** — criando um modelo simples de uma coisa mais complexa, que representa seus aspectos mais importantes de uma forma que é fácil trabalhar com os objetivos do nosso programa.

![](person-diagram.png)

### Criando objetos reais

De nossa classe, podemos criar **instâncias de objeto** — objetos que contêm os dados e a funcionalidade definidos na classe. Da nossa classe Person, podemos criar algumas pessoas reais:

![](mdn-graphics-instantiation-2-fixed.png)

Quando uma instância de objeto é criada a partir de uma classe, a **função construtora** da classe é executada para criá-la. Esse processo de criação de uma instância de objeto de uma classe é chamado de **instanciação** — a instância do objeto é **instanciada** a partir da classe.

### Classes especialistas

Neste caso, não queremos pessoas genéricas — queremos professores e alunos, que são tipos mais específicos de pessoas. Em OOP, podemos criar novas classes com base em outras classes — essas novas **classes filhas** podem **herdar** os recursos de dados e código de sua **classe pai**, para que você possa reutilizar a funcionalidade comum a todos os tipos de objetos em vez de duplicá-los. Onde a funcionalidade difere entre as classes, você pode definir recursos especializados diretamente sobre eles, conforme necessário.

![](mdn-graphics-inherited-3.png)

Isso é realmente útil — professores e alunos compartilham muitos recursos comuns, como nome, sexo e idade, por isso é conveniente definir apenas esses recursos uma vez. Você também pode definir o mesmo recurso separadamente em classes diferentes, já que cada definição desse recurso estará em um namespace diferente. Por exemplo, a saudação de um aluno pode estar no formato "Yo, I'm \[firstName]" (por exemplo, _Yo, I'm Sam_), enquanto um professor pode usar algo mais formal, como "Olá, meu nome é \[Prefixo \[lastName], e eu ensino \[Subject]. " (por exemplo _Olá, Meu nome é Mr Griffiths, e eu ensino Química_).

> **Nota:** A palavra chique para a capacidade de múltiplos tipos de objeto de implementar a mesma funcionalidade é o **polimorfismo**. Apenas no caso de você estar se perguntando.

Agora você pode criar instâncias de objetos de suas classes filhas. Por exemplo:

![](mdn-graphics-instantiation-teacher-3.png)

No restante do artigo, começaremos a analisar como a teoria da POO pode ser colocada em prática no JavaScript.

## Construtores e instâncias de objeto

O JavaScript usa funções especiais chamadas **funções construtoras** para definir objetos e seus recursos. Eles são úteis porque muitas vezes você encontrará situações em que não sabe quantos objetos estará criando; Os construtores fornecem os meios para criar quantos objetos forem necessários de forma eficaz, anexando dados e funções a eles, conforme necessário.

Vamos explorar a criação de classes por meio de construtores e criar instâncias de objeto a partir deles em JavaScript. Primeiro de tudo, gostaríamos que você fizesse uma nova cópia local do arquivo [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html) que vimos em nosso primeiro artigo Objetos.

### Um exemplo simples

1. Vamos começar observando como você pode definir uma pessoa com uma função normal. Adicione esta função dentro do elemento `script`:

    ```js
    function createNewPerson(name) {
      var obj = {};
      obj.name = name;
      obj.greeting = function() {
        alert('Hi! I\'m ' + obj.name + '.');
      };
      return obj;
    }
    ```

2. Agora você pode criar uma nova pessoa chamando essa função — tente as seguintes linhas no console JavaScript do seu navegador:

    ```js
    var salva = createNewPerson('Salva');
    salva.name;
    salva.greeting();
    ```

    Isso funciona bem o suficiente, mas é um pouco prolixo; Se sabemos que queremos criar um objeto, por que precisamos criar explicitamente um novo objeto vazio e devolvê-lo? Felizmente, o JavaScript nos fornece um atalho útil, na forma de funções de construtor — vamos criar um agora!

3. Substitua sua função anterior pelo seguinte:

    ```js
    function Person(name) {
      this.name = name;
      this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
      };
    }
    ```

A função de construtor é a versão do JavaScript de uma classe. Você notará que ela tem todos os recursos que você espera em uma função, embora ela não retorne nada ou crie explicitamente um objeto — ela basicamente define propriedades e métodos. Você verá a palavra-chave `this` sendo usada aqui também — é basicamente dizer que sempre que uma dessas instâncias de objeto é criada, a propriedade `name` do objeto será igual ao valor do nome passado à chamada do construtor, e o método `greeting()` usará o valor do nome passado para a chamada do construtor também.

> **Nota:** Um nome de função de construtor geralmente começa com uma letra maiúscula — essa convenção é usada para tornar as funções do construtor mais fáceis de reconhecer no código.

Então, como podemos chamar um construtor para criar alguns objetos?

1. Adicione as seguintes linhas abaixo da sua adição de código anterior:

    ```js
    var person1 = new Person('Bob');
    var person2 = new Person('Sarah');
    ```

2. Salve seu código e recarregue-o no navegador e tente inserir as seguintes linhas em seu console JS:

    ```js
    person1.name
    person1.greeting()
    person2.name
    person2.greeting()
    ```

Legal! Você verá agora que temos dois novos objetos na página, cada um deles armazenado em um namespace diferente — quando você acessa suas propriedades e métodos, é necessário iniciar chamadas com `person1` ou `person2`; a funcionalidade contida é cuidadosamente empacotada para que não entre em conflito com outras funcionalidades. Eles, no entanto, têm a mesma propriedade de `name` e o método `greeting()` disponível. Observe que eles estão usando seu próprio valor de `name` que foi atribuído a eles quando foram criados; Esta é uma razão pela qual é muito importante usar `this`, então eles usarão seus próprios valores e não algum outro valor.

Vamos ver novamente as chamadas do construtor:

```js
var person1 = new Person('Bob');
var person2 = new Person('Sarah');
```

Em cada caso, a palavra-chave `new` é usada para informar ao navegador que queremos criar uma nova instância de objeto, seguida pelo nome da função com seus parâmetros obrigatórios contidos entre parênteses, e o resultado é armazenado em uma variável — muito semelhante a como uma função padrão é chamada. Cada instância é criada de acordo com esta definição:

```js
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```

Após a criação dos novos objetos, as variáveis `person1` e `person2` contêm os seguintes objetos:

```js
{
  name: 'Bob',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

{
  name: 'Sarah',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

Note que quando estamos chamando nossa função de construtor, estamos definindo `greeting()` toda vez, o que não é ideal. Para evitar isso, podemos definir funções no protótipo, que veremos mais adiante.

### Criando nosso construtor acabado

O exemplo que vimos acima foi apenas um exemplo simples para começarmos. Vamos agora começar e criar nossa função final do construtor `Person()`.

1. Remova o código que você inseriu até agora e inclua este construtor de substituição — isso é exatamente o mesmo que o exemplo simples em princípio, com um pouco mais de complexidade:

    ```js
    function Person(first, last, age, gender, interests) {
      this.name = {
        'first': first,
        'last' : last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
      this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
      };
      this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
      };
    }
    ```

2. Agora adicione a seguinte linha abaixo, para criar uma instância de objeto a partir dela:

    ```js
    var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
    ```

Agora você verá que pode acessar as propriedades e os métodos exatamente como fizemos anteriormente — Tente isso no seu console JS:

```js
person1['age']
person1.interests[1]
person1.bio()
// etc.
```

> **Nota:** Se você está tendo problemas para fazer isso funcionar, tente comparar seu código com a nossa versão — veja o código em [oojs-class-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-finished.html) (também [você pode ve-lo sendo executado aqui](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-finished.html)).

### Exercícios adicionais

Para começar, tente adicionar mais algumas linhas de criação de objetos e tente obter e configurar os membros das instâncias de objetos resultantes.

Além disso, há alguns problemas com nosso método `bio()` — a saída sempre inclui o pronome "Ele", mesmo que sua pessoa seja do sexo feminino ou alguma outra classificação de gênero preferida. E a biografia incluirá apenas dois interesses, mesmo que mais sejam listados na matriz `interests`. Você pode descobrir como corrigir isso na definição de classe (construtor)? Você pode colocar qualquer código que você gosta dentro de um construtor (você provavelmente precisará de alguns condicionais e um loop). Pense em como as sentenças devem ser estruturadas de maneira diferente dependendo do gênero e dependendo se o número de interesses listados é 1, 2 ou mais de 2.

> **Nota:** If you get stuck, we have provided an [answer inside our GitHub repo](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html) ([see it live](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html)) — try writing it yourself first though!

## Outras maneiras de criar instâncias de objeto

Até agora, vimos duas maneiras diferentes de criar uma instância de objeto — [declarar um literal de objeto](/pt-BR/docs/Learn/JavaScript/Objects/Basics#Object_basics), e usar uma função de construtor (veja acima).

Isso faz sentido, mas existem outras maneiras — queremos familiarizá-lo com essas informações caso você as encontre em suas viagens pela Web.

### O construtor Object()

Primeiro de tudo, você pode usar o construtor [`Object()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object) para criar um novo objeto. Sim, até objetos genéricos possuem um construtor, o que gera um objeto vazio.

1. Tente inserir isso no console JavaScript do seu navegador:

    ```js
    var person1 = new Object();
    ```

2. Isso armazena um objeto vazio na variável `person1`. Você pode adicionar propriedades e métodos a esse objeto usando a notação de pontos ou colchetes conforme desejado; tente estes exemplos no seu console:

    ```js
    person1.name = 'Chris';
    person1['age'] = 38;
    person1.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
    ```

3. Você também pode passar um literal de objeto para o construtor `Object()` como um parâmetro, para preenchê-lo com propriedades / métodos. Tente isso no seu console JS:

    ```js
    var person1 = new Object({
      name: 'Chris',
      age: 38,
      greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
      }
    });
    ```

### Usando o método create()

Os construtores podem ajudá-lo a fornecer seu pedido de código — você pode criar construtores em um único local e, em seguida, criar instâncias conforme necessário, e fica claro de onde eles vieram.

No entanto, algumas pessoas preferem criar instâncias de objeto sem primeiro criar construtores, especialmente se estiverem criando apenas algumas instâncias de um objeto. JavaScript tem um método embutido chamado [`create()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create) que permite que você faça isso. Com ele, você pode criar um novo objeto com base em qualquer objeto existente.

1. Com o exercício concluído das seções anteriores carregadas no navegador, tente isso no seu console JavaScript:

    ```js
    var person2 = Object.create(person1);
    ```

2. Agora tente estes:

    ```js
    person2.name
    person2.greeting()
    ```

Você verá que a `person2` foi criada com base na `person1` — ela tem as mesmas propriedades e métodos disponíveis para ela.

Uma limitação do `create()` é que o IE8 não o suporta. Então os construtores são mais efetivos se você quiser que funcione em navegadores antigos.

Vamos explorar os efeitos de `create()` em mais detalhes posteriormente.

## Sumário

Este artigo forneceu uma visão simplificada da teoria orientada a objetos — isso não é toda a história, mas dá uma idéia do que estamos lidando aqui. Além disso, começamos a analisar diferentes maneiras de gerar instâncias de objetos.

No próximo artigo, vamos explorar os protótipos de objetos JavaScript.

{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

## Neste módulo

- [O básico de objetos](/pt-BR/docs/Learn/JavaScript/Objects/Basics)
- [Orientação a objetos em JavaScript para iniciantes](/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Protótipos de objetos](/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Herença em JavaScript](/pt-BR/docs/Learn/JavaScript/Objects/Inheritance)
- [Trabalhando com dados em JSON](/pt-BR/docs/Learn/JavaScript/Objects/JSON)
- [Prática de construção de objetos](/pt-BR/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Adicionando melhorias no nossa demo bolas saltitantes](/pt-BR/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
