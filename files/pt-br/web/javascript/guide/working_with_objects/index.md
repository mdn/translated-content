---
title: Trabalhando com objetos
slug: Web/JavaScript/Guide/Working_with_objects
---

**A linguagem JavaScript é projetada com base em um simples paradigma orientado a objeto. Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou _chave_) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um _método_ do objeto. Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos.**

**Este capítulo descreve como usar objetos, propriedades, funções, e métodos, e como criar seus próprios objetos.**

## Visão geral de objetos

Objetos em JavaScript, assim como em muitas outras linguagens de programação, podem ser comparados com objetos na vida real. O conceito de objetos em JavaScript pode ser entendido com objetos tangíveis da vida real.

Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

## Objetos e propriedades

Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos. As propriedades de um objeto definem as características do objeto. Você acessa as propriedades de um objeto com uma simples notação de ponto:

```js
nomeDoObjeto.nomeDaPropriedade;
```

Como as variáveis em JavaScript, o nome do objeto (que poderia ser uma variável normal) e um nome de propriedade diferem em maiúsculas/minúsculas (por exemplo, cor e Cor são propriedades diferentes). Você pode definir uma propriedade atribuindo um valor a ela. Por exemplo, vamos criar um objeto chamado `meuCarro` e dar a ele propriedades chamadas `fabricacao`, `modelo`, e `ano`, conforme mostrado a seguir:

```js
var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;
```

Propriedades não definidas de um objeto são {{jsxref("undefined")}} (e não {{jsxref("null")}}).

```js
meuCarro.semPropriedade; //undefined
```

Propriedades de objetos em JavaScript podem também ser acessadas ou alteradas usando-se notação de colchetes. Objetos são às vezes chamados de _arrays associativos_, uma vez que cada propriedade é associada com um valor de string que pode ser usado para acessá-la. Então, por exemplo, você poderia acessar as propriedades do objeto `meuCarro` como se segue:

```js
meuCarro["fabricacao"] = "Ford";
meuCarro["modelo"] = "Mustang";
meuCarro["ano"] = 1969;
```

Um nome de propriedade de um objeto pode ser qualquer string JavaScript válida, ou qualquer coisa que possa ser convertida em uma string, incluindo uma string vazia. No entanto, qualquer nome e propriedade que não é um identificador JavaScript válido (por exemplo, um nome de propriedade que tem um espaço ou um hífen, ou que começa com um número) só pode ser acessado(a) usando-se a notação de colchetes. Essa notação é também muito útil quando nomes de propriedades devem ser determinados dinamicamente (quando o nome da propriedade não é determinado até o momento de execução). Exemplos são mostrados a seguir:

```js
var meuObj = new Object(),
  str = "minhaString",
  aleat = Math.random(),
  obj = new Object();

meuObj.tipo = "Sintaxe de ponto";
meuObj["data de criacao"] = "String com espaco";
meuObj[str] = "valor de String";
meuObj[aleat] = "Numero Aleatorio";
meuObj[obj] = "Objeto";
meuObj[""] = "Mesmo uma string vazia";

console.log(meuObj);
```

Você pode também acessar propriedades usando um valor de string que está armazenado em uma variável:

```js
var nomeDaPropriedade = "fabricacao";
meuCarro[nomeDaPropriedade] = "Ford";

nomeDaPropriedade = "modelo";
meuCarro[nomeDaPropriedade] = "Mustang";
```

Você pode usar a notação de colchetes com o comando [for...in](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) para iterar por todas as propriedades enumeráveis de um objeto. Para ilustrar como isso funciona, a seguinte função mostra as propriedades de um objeto quando você passa o objeto e o nome do objeto como argumentos para a função:

```js
function mostrarProps(obj, nomeDoObj) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
    }
  }
  return resultado;
}
```

Então, a chamada de função `mostrarProps(meuCarro, "meuCarro")` retornaria o seguinte:

```
meuCarro.fabricacao = Ford
meuCarro.modelo = Mustang
meuCarro.ano = 1969
```

## Objetos: tudo

Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de `null` e `undefined` - são tratados como objetos. Eles podem receber propriedades (propriedades atribuídas de alguns tipos não são persistentes), e possuem todas as características de objetos.

## Enumerando todas as propriedades de um objeto

Começando com a [ECMAScript 5](/pt-BR/docs/JavaScript/ECMAScript_5_support_in_Mozilla), há três formas nativas de se listar (ou "caminhar por") as propriedades de um objeto:

- [for...in](/pt-BR/docs/JavaScript/Reference/Statements/for...in) loops
  Esse método caminha por todas as propriedades enumeráveis de um objeto e sua cadeia de protótipos
- [Object.keys(o)](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/keys)
  Esse método retorna um array com todos os nomes ("chaves") de propriedades próprios de um objeto `o` (mas não na cadeia de protótipos).
- [Object.getOwnPropertyNames(o)](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
  Esse método retorna um array contendo todos os nomes de propriedades próprios (enumeráveis ou não) de um objeto `o`.

Antes, na ECMAScript 5, não existia uma forma nativa de se listar todas as propriedades de um objeto. No entanto, isso pode ser feito com a seguinte função:

```js
function listarTodasAsPropriedades(o) {
  var objectoASerInspecionado;
  var resultado = [];

  for (
    objectoASerInspecionado = o;
    objectoASerInspecionado !== null;
    objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)
  ) {
    resultado = resultado.concat(
      Object.getOwnPropertyNames(objectoASerInspecionado),
    );
  }

  return resultado;
}
```

Isso pode ser útil para revelar propriedades "escondidadas" (propriedades na cadeia de protótipos que não são acessíveis através do objeto, porque outra propriedade possui o mesmo nome anteriormente na cadeia de protótipos). A listagem de propriedades acessíveis só pode ser facilmente feita através da remoção de valores duplicados no array.

## Criando novos objetos

JavaScript possui um número de objetos pré-definidos. Além disso, você pode criar seus próprios objetos. Você pode criar um objeto usando um [objeto inicializador](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer). Alternativamente, você pode primeiro criar uma função construtora e depois instanciar um objeto usando aquela função e o operador `new`.

### Usando inicializadores de objeto

Além de criar objetos usando uma função construtora, você pode criar objetos usando um [inicializador de objeto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer). O uso de inicializadores de objeto é às vezes conhecido como criar objetos com notação literal. O termo "inicializador de objeto" é consistente com a terminologia usada por C++.

A sintaxe para um objeto usando-se um inicializador de objeto é:

```js
var obj = {
  propriedade_1: valor_1, // propriedade_# pode ser um identificador...
  2: valor_2, // ou um numero...
  // ...,
  "propriedade n": valor_n,
}; // ou uma string
```

onde `obj` é o nome do novo objeto, cada `propriedade_i` é um identificador (um nome, um número, ou uma string literal), e cada `valor_i` é uma expressão cujo valor é atribuído à `propriedade_i`. O `obj` e a atribuição são opcionais; se você não precisa fazer referência a esse objeto em nenhum outro local, você não precisa atribuí-lo a uma variável. (Note que você pode precisar colocar o objeto literal entre parentêses se o objeto aparece onde um comando é esperado, de modo a não confundir o literal com uma declaração de bloco.)

Se um objeto é criado com um inicializador de objeto em um script de alto nível, JavaScript interpreta o objeto a cada vez que avalia uma expressão contendo o objeto literal. Além disso, um inicializador usado em uma função é criado toda vez que a função é chamada.

O seguinte comando cria um objeto e o atribui à variável `x` somente se a expressão `cond` é verdadeira.

```js
if (cond) var x = { hi: "there" };
```

O seguinte exemplo cria `minhaHonda` com três propriedades. Note que a propriedade `motor` é também um objeto com suas próprias propriedades.

```js
var minhaHonda = {
  cor: "vermelho",
  rodas: 4,
  motor: { cilindros: 4, tamanho: 2.2 },
};
```

Você pode também usar inicializadores de objeto para criar arrays. Veja [arrays literais](/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals).

### Usando uma função construtora

Alternativamente, você pode criar um objeto com estes dois passos:

1. Defina o tipo de objeto escrevendo uma função construtora. Há uma forte convenção, e com boa razão, de se usar uma letra inicial maiúscula.
2. Crie uma instância do objeto com `new`.

Para definir um tipo de objeto, crie uma função para o tipo de objeto que especifique seu nome, suas propriedades e seus métodos. Por exemplo, suponha que você queira criar um tipo objeto para carros. Você quer que esse tipo de objeto seja chamado `carro`, e você quer ele tenha propriedades de marca, modelo, e ano. Para fazer isto, você escreveria a seguinte função:

```js
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}
```

Note o uso de `this` para atribuir valores às propriedades do objeto com base nos valores passados para a função.

Agora você pode criar um objeto chamado `meucarro` como se segue:

```js
var meucarro = new Carro("Eagle", "Talon TSi", 1993);
```

Esse comando cria `meucarro` e atribui a ele valores especificados para suas propriedade. Então o valor de `meucarro.marca` é a string "Eagle", `meucarro.ano` é o inteiro 1993, e assim por diante.

Você pode criar qualquer número de objetos `carro` com o uso de `new`. Exemplo,

```js
var carroDeKen = new Carro("Nissan", "300ZX", 1992);
var carroDeVPG = new Carro("Mazda", "Miata", 1990);
```

Um objeto pode ter uma propriedade que por si só também é um objeto. Por exemplo, suponha que você define um objeto chamado `pessoa` como se segue:

```js
function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}
```

e então você instancia dois novos objetos `pessoa` da seguinte forma:

```js
var jose = new Pessoa("Jose Silva", 33, "M");
var paulo = new Pessoa("Paulo Santos", 39, "M");
```

Então, você pode reescrever a definição de `carro` de modo a incluir uma propriedade `dono` que recebe um objeto `pessoa`, como se segue:

```js
function Carro(marca, modelo, ano, dono) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.dono = dono;
}
```

Para instanciar os novos objetos, você então usa o seguinte:

```js
var carro1 = new Carro("Eagle", "Talon TSi", 1993, jose);
var carro2 = new Carro("Nissan", "300ZX", 1992, paulo);
```

Perceba que ao invés de passar uma string literal ou um valor inteiro na hora de criar os novos objetos, os comandos acima passam os objetos `jose` e `paulo` como os argumentos para os donos. Então se você quiser descobrir o nome do dono de `carro2`, você pode acessar a seguinte propriedade:

```js
carro2.dono;
```

Note que você pode sempre adicionar uma propriedade a um objeto definido anteriormente. Por exemplo, o comando

```js
carro1.cor = "preto";
```

adiciona uma propriedade `cor` ao `carro1`, e dá a ele o valor `"preto."` No entanto, isso não afeta nenhum outro objeto. Para adicionar a nova propriedade a todos os objetos do mesmo tipo, você deve adicionar a propriedade na definição do tipo de objeto `carro`.

### Usando o método Object.create

Objetos podem também ser criados usando-se o método [`Object.create()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create). Esse método pode ser muito útil, pois permite que você escolha o objeto protótipo para o objeto que você quer criar, sem a necessidade de se definir uma função construtora.

```js
// Encapsulamento das propriedades e métodos de Animal
var Animal = {
  tipo: "Invertebrados", // Propriedades de valores padrão
  qualTipo: function () {
    // Método que ira mostrar o tipo de Animal
    console.log(this.tipo);
  },
};

// Cria um novo tipo de animal chamado animal1
var animal1 = Object.create(Animal);
animal1.qualTipo(); // Saída:Invertebrados

// Cria um novo tipo de animal chamado Peixes
var peixe = Object.create(Animal);
peixe.tipo = "Peixes";
peixe.qualTipo(); // Saída: Peixes
```

### Herança

Todos os objetos em JavaScript herdam de pelo menos um outro objeto. O objeto "pai" é conhecido como o protótipo, e as propriedades herdadas podem ser encontradas no objeto `prototype` do construtor.

## Indexando Propriedades de Objetos

Você pode se referir a uma propriedade de um objeto pelo seu nome de propriedade ou pelo seu índice ordinal. Se você inicialmente definiu uma propriedade pelo nome, você deve sempre se referir a ela pelo nome, e se você inicialmente definir uma propriedade por um índice, você deve sempre se referir a ela pelo índice.

Esta restrição se aplica quando você cria um objeto e suas propriedades com uma função construtora (como fizemos anteriormente com o objeto do tipo carro) e quando você define propriedades individuais explicitamente (por exemplo, `meuCarro.cor = "vermelho"`). Se você inicialmente definir uma propriedade do objeto com um índice, tal como `meuCarro[5] = "25 mpg"`, você pode subsequentemente referir-se á propriedade somente como `meuCarro[5]`.

A exceção a esta regra é a objetos refletidos a partir do HTML, como o conjunto de formulários. Você pode sempre se referir a objetos nessas matrizes por seu número de ordem (com base em onde eles aparecem no documento) ou seu nome (se definido). Por exemplo, se a segunda tag `<FORM>` em um documento tem um atributo `NAME` de "meuFormulario", você pode se referir ao formulário como `document.forms[1]` ou `document.forms["meuFormulario"]` ou `document.meuFormulario`.

## Definindo propriedades para um tipo de objeto

Você pode adicionar uma propriedade a um tipo de objeto definido anteriormente, utilizando a propriedade prototype. Esta define uma propriedade que é partilhada por todos os objetos do tipo especificado, em vez de apenas uma instância do objeto. O código a seguir adiciona uma propriedade `cor` para todos os objetos do tipo C`arro`, em seguida adiciona um valor a propriedade `cor` do objeto `carro1`.

```js
Carro.prototype.cor = null;
carro1.cor = "preto";
```

Consulte a [propriedade](/pt-BR/docs/JavaScript/Reference/Global_Objects/Function/prototype) [`prototype`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Function/prototype) do objeto `Function` na [Referência](/pt-BR/docs/JavaScript/Reference) [JavaScript](/pt-BR/docs/JavaScript/Reference) para mais informações.

## Definindo métodos

Um _método_ é uma função associada a um objeto, ou, simplesmente, um método é uma propriedade de um objeto que é uma função. Métodos são definidos da forma que as funções normais são definidas, exceto que eles tenham que ser atribuídos como propriedade de um objeto. São exemplos:

```js
nomeDoObjeto.nomedometodo = nome_da_funcao;

var meuObjeto = {
  meuMetodo: function (parametros) {
    // ...faça algo
  },
};
```

Onde `nomeDoObjeto` é um objeto existente, `nomedometodo` é o nome que você atribuiu ao método, e `nome_da_funcao` é o nome da função.

Em seguida, você pode chamar o método no contexto do objeto da seguinte forma:

```js
objeto.nomedometodo(parametros);
```

Você pode definir métodos para um tipo de objeto incluindo uma definição de metodo na função construtora do objeto. Por exemplo, você poderia definir uma função que iria formatar e mostrar as propriedades do objeto `carro` previamente definido; por exemplo,

```js
function mostreCarro() {
  var resultado =
    "Um belo " + this.ano + " " + this.fabricacao + " " + this.modelo;
  pretty_print(resultado);
}
```

onde `pretty_print` é uma função que mostra uma linha horizontal e uma string. Observe o uso de `this` para referenciar o objeto ao qual o método pertence.

Você pode fazer desta função um método de `carro`, adicionando seu estado à definição do objeto.

```js
this.mostreCarro = mostreCarro;
```

Assim, a definição completa de `carro` seria agora, parecida com essa:

```js
function Carro(fabricacao, modelo, ano, proprietario) {
  this.fabricacao = fabricacao;
  this.modelo = modelo;
  this.ano = ano;
  this.proprietario = proprietario;
  this.mostreCarro = mostreCarro;
}
```

Então você pode chamar o método `mostreCarro` para cada objeto seguinte:

```js
carro1.mostreCarro();
carro2.mostreCarro();
```

## Usando `this` para referências de objetos

JavaScript tem uma palavra-chave especial, [this](/pt-BR/docs/Web/JavaScript/Reference/Operators/this), que você pode usar dentro de um método para referenciar o objeto corrente. Por exemplo, suponha que você tenha uma função chamada `validate` que valida o `valor` da propriedade de um objeto, dado o objeto e os valores altos e baixos:

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) alert("Valor inválido!");
}
```

Então, você poderia chamar `validate` no manipulador de evento `onchange` em cada elemento do formulário, usando `this` para passar o elemento, como no exemplo a seguir:

```html
<input type="text" name="age" size="3" onChange="validate(this, 18, 99)" />
```

No geral, `this` referencia o objeto chamando um método.

Quando combinado com a propriedade `form` , `this` pode referenciar a forma original do objeto atual. No exemplo seguinte, o formulário `myForm` contém um objeto `Text` e um botão. Quando o usuário clica no botão, o valor do objeto `Text` é definido como nome do formulário. O manipulador de eventos `onclick` do botão usa `this.form` para referenciar a forma original, `myForm`.

```html
<form name="myForm">
  <p>
    <label
      >Nome do form:<input type="text" name="text1" value="Beluga"
    /></label>
  </p>
  <p>
    <input
      name="button1"
      type="button"
      value="Mostre o Nome do Form"
      onclick="this.form.text1.value = this.form.name" />
  </p>
</form>
```

## Definindo getters e setters

Um [getter](/pt-BR/docs/Web/JavaScript/Reference/Functions/get) é um método que obtém o valor de uma propriedade específica. Um [setter](/pt-BR/docs/Web/JavaScript/Reference/Functions/set) é um método que define o valor de uma propriedade específica. Você pode definir getters e setters em qualquer objeto de núcleo pré-definido ou objeto definido pelo usuário que suporta a adição de novas propriedades. A sintaxe para definir getters e setters usa a sintaxe literal do objeto.

O código a seguir ilustra como getters e setters podem funcionar para um objeto`o`definido pelo usuário.

```js
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25
```

As propriedades do objeto `o` são:

- `o.a` — um número
- `o.b` — um getter que retorna `o.a` + 1
- `o.c` — um setter que define o valor de `o.a` pela metade do valor definindo para `o.c`

Observe que nomes de função de getters e setters definidos em um objeto literal usando "\[gs]et _property_()" (ao contrário de `__define[GS]etter__` ) não são os próprios nomes dos getters, embora a sintaxe `[gs]et propertyName(){ }` possa induzir ao erro e você pensar de outra forma. Para nomear uma função getter ou setter usando a sintaxe "\[gs]et _property_()", define explicitamente um função nomeada programaticamente usando [`Object.defineProperty`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/defineProperty "/en-US/docs/Core JavaScript 1.5 Reference/Global
Objects/Object/defineProperty") (ou o legado fallback [`Object.prototype.__defineGetter__`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/defineGetter "/en-US/docs/Core JavaScript 1.5 Reference/Global
Objects/Object/defineGetter")).

O código a seguir ilustra como getters e setters podem extender o protótipo [`Date`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) para adicionar a propriedade `ano` para todas as instâncias de classes `Date` pré-definidas. Ele usa os métodos `getFullYear` e `setFullYear` existentes da classe `Date` para suportar o getter e setter da propriedade `ano`.

Estes estados definem um getter e setter para a propriedade `ano`:

```js
var d = Date.prototype;
Object.defineProperty(d, "year", {
  get: function () {
    return this.getFullYear();
  },
  set: function (y) {
    this.setFullYear(y);
  },
});
```

Estes estados usam o getter e setter em um objeto `Date`:

```js
var now = new Date();
console.log(now.year); // 2000
now.year = 2001; // 987617605170
console.log(now);
// Wed Apr 18 11:13:25 GMT-0700 (Pacific Daylight Time) 2001
```

A principio, getters e setters podem ser ou

- definidos usando [objetos inicializadores](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers), ou
- adicionar posteriormente para qualquer objeto a qualquer tempo usando um método getter ou setter adicionado

Ao definir getters e setters usando [objetos inicializadores](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers) tudo o que você precisa fazer é prefixar um método getter com `get` e um método setter com `set`. Claro, o método getter não deve esperar um parâmetro, enquanto o método setter espera exatamente um parâmetro (novo valor para definir). Por exemplo:

```js
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};
```

Getters e setters podem também ser adicionado em um objeto a qualquer hora depois da criação usando o método `Object.defineProperties`. O primeiro parâmetro deste método é o objeto no qual você quer definir o getter ou setter. O segundo parâmetro é um objeto cujos nomes das propriedades são os nomes getter ou setter, e cujo valores das propriedades são objetos para definição de funções getter ou setter. Aqui está um exemplo que define o mesmo getter e setter usado no exemplo anterior:

```js
var o = { a: 0 };

Object.defineProperties(o, {
  b: {
    get: function () {
      return this.a + 1;
    },
  },
  c: {
    set: function (x) {
      this.a = x / 2;
    },
  },
});

o.c = 10; // Roda o setter, que associa 10 / 2 (5) para a propriedade 'a'
console.log(o.b); // Roda o getter, que yields a + 1 ou 6
```

Escolher qual das duas formas depende do seu estilo de programação e tarefa na mão. Se você já vai para o inicializador de objeto ao definir um protótipo, provavelmente a maior parte do tempo escolherá a primeira forma. Esta forma é mais compacta e natural. No entanto, se você precisar adicionar getters e setters mais tarde - porque você não escreveu o protótipo ou objeto particular - então a segunda forma é a única possível. A segunda forma provavelmente melhor representa a natureza dinâmica do JavaScript - mas pode tornar o código difícil de ler e entender.

## Removendo propriedades

Você pode remover uma propriedade não herdada usando o operador `delete`. O código a seguir mostra como remover uma propriedade.

```js
//Criando um novo objeto, myobj, com duas propriedades, a e b.
var myobj = new Object();
myobj.a = 5;
myobj.b = 12;

//Removendo a propriedade a, deixando myobj com apenas a propriedade b.
delete myobj.a;
console.log("a" in myobj); // yields "false"
```

Você também pode usar `delete` para remover uma variável global se a `var` keyword não estiver sendo usada para declarar a variável:

```js
g = 17;
delete g;
```

## Comparando Objetos

Em JavaScript, objetos são um tipo de referência. Dois objetos distintos nunca são iguais, mesmo que tenham as mesmas propriedades. Apenas comparando o mesmo objeto de referência com ele mesmo produz verdadeiro.

```js
// Duas variáveis, dois objetos distintos com as mesmas propriedades
var fruit = { name: "apple" };
var fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false
```

```js
// Duas variáveis, um único objeto
var fruit = { name: "apple" };
var fruitbear = fruit; // assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true
```

Para mais informações sobre comparaçāo de operadores, veja [Operadores de comparaçāo](/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators).

## Veja também

- Para se aprofundar, leia sobre os [detalhes do modelo de objetos javaScript](/pt-BR/docs/Web/JavaScript/Guide/Details_of_the_Object_Model).
- Para saber mais sobre classes em ECMAScript6 (uma nova forma de criar objetos), veja o capítulo [JavaScript classes](/pt-BR/docs/Web/JavaScript/Reference/Classes).

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}
