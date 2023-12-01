---
title: Gerenciamento de Memória
slug: Web/JavaScript/Memory_management
---

{{JsSidebar("Advanced")}}

## Introdução

Linguagens de baixo nível, como C, tem primitivas de gerenciamento de memória de baixo nível como `malloc()` e `free()`. Em contrapartida, os valores do JavaScript são alocados quando coisas (objetos, strings, etc.) são criadas e "automaticamente" liberadas quando não são mais usadas. Este último processo se chama _garbage collection_. Facilmente se torna uma fonte de confusão e dá a impressão aos desenvolvedores JavaScript (e outras linguagens de alto nível) que eles não precisam se preocupar com o consumo de memória. Isto é um erro.

## Ciclo de vida da memória

Independentemente da linguagem de programação, o ciclo de vida da memória é praticamente sempre o mesmo:

1. Alocar a memória que você precisa
2. Utilizar a memória alocada (ler, escrever)
3. Liberar a memória alocada quando não é mais necessária

A primeira e a segunda parte são explícitas em todas as linguagens. A última parte é explicita em linguagens de baixo nível, porém implícito em linguagens de alto nível como JavaScript.

### Alocação no JavaScript

#### Inicialização de valor

A fim de não incomodar o programador com alocações, o JavaScript faz isso com os valores conforme são declarados.

```js
var n = 123; // aloca memória para um número
var s = "azerty"; // aloca memória para uma string

var o = {
  a: 1,
  b: null,
}; // aloca memória para um objeto e seus valores contidos

// (assim como o objeto) aloca memória para o vetor e
// seus valores contidos
var a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // aloca uma função (que é um objeto que pode ser chamado)

// expressões de funções também alocam um objeto
someElement.addEventListener(
  "click",
  function () {
    someElement.style.backgroundColor = "blue";
  },
  false,
);
```

#### Alocação via chamada de uma função

Algumas funções quando chamadas resultam na alocação de um objeto.

```js
var d = new Date();
// aloca um elemento do DOM
var e = document.createElement("div");
```

Alguns métodos alocam novos valores ou objetos:

```js
var s = "azerty";
var s2 = s.substr(0, 3); // s2 é uma nova string
// Como as strings são valores imutáveis,
// o JavaScript pode decidir não alocar memória,
// mas apenas armazenar o intervalo [0, 3].

var a = ["ouais ouais", "nan nan"];
var a2 = ["generation", "nan nan"];
var a3 = a.concat(a2);
// novo vetor com 4 elementos sendo
// a concatenação dos elementos a e a2
```

### Utilização de valores

A utilização de valores basicamente significa leitura e escrita em memória alocada. Isto pode ser feito ao ler ou escrever o valor de uma variável ou a propriedade de um objeto ou até mesmo ao passar um argumento para uma função.

### Libere quando a memória não for mais necessária

A maioria dos problemas relacionados ao gerenciamento de memória aparecem nesta fase. A tarefa mais complicada aqui é descobrir quando "a memória alocada não é mais necessária". Geralmente exige que o desenvolvedor determine a onde no programa tal pedaço da memória não é mais necessária e liberá-la.

Linguagens de alto nível vêm com um pedaço de software chamado "garbage collector" (coletor de sujeira), cujo trabalho é monitorar a alocação de memória a fim de descobrir quando um pedaço de código não é mais necessário e neste caso, automaticamente liberá-lo. Este processo é algo aproximado já que, em geral, saber se um pedaço de memória é necessário é algo [indecidível](http://pt.wikipedia.org/wiki/Decidibilidade) (que não pode ser resolvido através de um algoritmo).

## Garbage collection

Como foi mencionado acima, em geral o problema de automaticamente descobrir se a memória "não é mais necessária" é indecidível. Como consequência, os _garbage collections_ implementam uma limitação de uma solução ao problema em geral. Esta seção irá explicar os conceitos necessários para entender os principais algoritmos de garbage collection e suas limitações.

### Referências

O principal conceito de algoritmos do garbage collection depende do conceito de _referência_. Dentro do contexto de gerenciamento de memória, é dito que um objeto faz referência a outro, caso o primeiro tenha acesso a este último (de maneira implícita ou explícita). Por exemplo, um objeto JavaScript tem uma referência ao seu [prototype](/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (referência implícita) e para os valores de suas propriedades (referência explícita).

Neste contexto, o conceito de "objeto" se extende para algo mais abrangente do que os objetos comuns do JavaScript, e também contém escopos de função (ou o escopo lexical global).

### Referência de contagem do garbage collection

Este é o algoritmo mais ingênuo de garbage collection. este algoritmo reduz a definição de "um objeto não mais necessário" para "um objeto não tem outro objeto referenciando ele". Um objeto pode ser coletado pelo garbage collector se não existir referência apontando para este objeto.

#### Exemplo

```js
var o = {
  a: {
    b: 2,
  },
};
// 2 objetos são criados. Um é referenciado pelo outro como uma de suas propriedades.
// O outro é referenciado pelo fato de ser atribuído à variável 'o'.
// Obviamente, nenhum pode ser coletado pelo garbage collector

var o2 = o; // a varável 'o2' é a segunda coisa que tem
// uma referência ao objeto
o = 1; // agora, o objeto que estava originalmente no 'o'
// tem uma referência única
// encorporada pela variável 'o2'

var oa = o2.a; // Referência para a propriedade 'a' do objeto.
// Este objeto agora tem 2 referências: uma como uma propriedade,
// a outra como a variável 'oa'

o2 = "yo"; // O objeto que estava originalmente em 'o' agora não tem
// nenhuma referência para ele.
// Ele poderia ser coletado pelo garbage collector.
// Entretanto o que era sua propriedade 'a' continua sendo referenciada
// pela variável 'oa', então ele não pode ser coletado.

oa = null; // O que era a propriedade 'a' do objeto original em 'o'
// não tem mais refêrencia para ele. Então pode ser coletado.
```

#### Limitação : ciclos

Esse algoritmo ingênuo tem a limitação de que objetos que referenciam um ao outro (e formam um ciclo), podem ser "não mais necessários" e ainda assim não serem coletados.

```js
function f() {
  var o = {};
  var o2 = {};
  o.a = o2; // o referencia o2
  o2.a = o; // o2 referencia o

  return "azerty";
}

f();
// Dois objetos são criados e referenciam um ao outro criando assim um ciclo.
// Eles não vão sair do escopo da função depois dela ser chamada, então eles
// são efetivamente inúteis e podem ser liberados.
// Entretanto, o algoritmo contador de referências considera que desde que ambos
// os objetos sejam referenciados pelo menos uma vez,
// nenhum deles podem ser coletados.
```

#### Exemplo da vida real

Internet Explorer 6 e 7 são conhecidos por terem um coletor com contador de referências para os objetos do DOM. Ciclos são um erro comum que podem gerar erros na memória:

```js
var div;
window.onload = function () {
  div = document.getElementById("minhaDiv");
  div.referenciaCircular = div;
  div.muitosDados = new Array(10000).join("*");
};
```

No exemplo acima, o elemento do DOM "minhaDiv" tem uma referência circular para ela mesma na propriedade "referenciaCircular". Se a propriedade não for removida ou anulada explicitamente, o contador de referências do coletor sempre terá pelo menos uma referência intacta e irá manter o elemento do DOM na memória mesmo se ele for removido da árvore do DOM. Se o elemento do DOM retém muitos dados (ilustrado no exemplo acima com a propriedade "muitosDados"), a memória consumida por esses dados não será liberada.

### Algoritmo de varredura e rotulação

Esse algoritmo reduz a definição de "um objeto não é mais necessário" para "um objeto é inacessível".

Esse algoritmo assume o conhecimento de uma lista de objetos chamada _roots_ (raízes) (no JavaScript, o root é o objeto global). Periodicamente, o coletor iniciará por esses roots, encontrando todos os objetos que são referenciados por esses roots, então todos os objetos referenciados por eles, etc. Começando pelos roots, o coletor encontrará todos os objetos acessíveis e coletará todos os objetos inacessíveis.

Esse algoritmo é melhor que o anterior pois "um objeto que não tem referência" leva a esse objeto inacessível. O oposto não é verdadeiro como nós vimos com os ciclos.

A partir de 2012, todos os navegadores modernos vem com um coletor com varredura e rotulação. Todas as melhorias feitas nessa área do coletor do JavaScript (geracional/incremental/concorrência/coletor paralelo) nos últimos anos são implementações melhoradas deste algoritmo, mas não melhorias para o coletor propriamente nem a redução da definição de quando "um objeto não é mais necessário".

#### Ciclos não são mais um problema

No primeiro exemplo, depois do retorno da chamada da função, os 2 objetos não são mais referenciados por algo acessível pelo objeto global. Consequentemente, eles não serão acessíveis pelo coletor.

A mesma coisa acontece com o segundo exemplo. Uma vez que o div e o seu gerenciador de eventos se tornem inacessíveis pelos roots, ambos podem ser coletados, apesar de referenciar um ao outro.

#### Limitação: objetos devem ser feitos explicitamente inacessíveis

Apesar disso ser marcado como uma limitação, isso é algo raro na prática e é por isso que ninguém se importa muito sobre o coletor.

## Veja também

- [IBM article on "Memory leak patterns in JavaScript" (2007)](http://www.ibm.com/developerworks/web/library/wa-memleak/)
- [Kangax article on how to register event handler and avoid memory leaks (2010)](http://msdn.microsoft.com/en-us/magazine/ff728624.aspx)
- [Performance](/pt-BR/docs/Mozilla/Performance)
