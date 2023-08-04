---
title: Instruções e declarações
slug: Web/JavaScript/Reference/Statements
---

{{jsSidebar("Instruções")}}

Aplicações em JavaScript são realizadas através de instruções com uma sintaxe apropriada. Uma única instrução pode abranger multiplas linhas. Multiplas instruções podem estar contidas em uma única linha se cada instrução estiver separada por ponto e vírgula ( ; ).

## Instruções e declarações por categoria

Para visualizar em ordem alfabética use a barra de rolagem à esquerda.

### Control flow

- {{jsxref("Statements/block", "Block")}}
  - : Uma instrução de bloqueio é usada para um grupo de zero ou mais instruções. O bloqueio é delimitado por um par de chaves.
- {{jsxref("Statements/break", "break")}}
  - : Termina o atual loop, troca, ou nomeia instruções e transfere o controle do programa para a próxima instrução após a que foi terminada agora.
- {{jsxref("Statements/continue", "continue")}}
  - : Termina a execução das instruções na atual iteração do atual loop, e continua a execução do loop com a seguinte iteração.
- {{jsxref("Statements/Empty", "Empty")}}
  - : Uma instrução vazia é usada para gerar uma "não-instrução", ainda que o JavaScrpit espere uma.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Executa uma instrução se a condição especificada é verdadeira. Se a condição é falsa, outra instrução pode ser executada.
- {{jsxref("Statements/switch", "switch")}}
  - : Retorna uma expressão, combinando o valor da expressão a condição do caso, e executa a condição associada a este caso.
- {{jsxref("Statements/throw", "throw")}}
  - : Aplica uma exceção definida pelo usuário.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Marca um bloco de instruções para tentar, e especifica a resposta, uma exceção deve ser retornada.

### Declarações

- {{jsxref("Statements/var", "var")}}
  - : Declara uma variável, opcionalmente inicializando com um valor.
- {{experimental_inline}} {{jsxref("Statements/let", "let")}}
  - : Declara acesso ao local da variável, opcionalmente inicializando com um valor.
- {{experimental_inline}} {{jsxref("Statements/const", "const")}}
  - : Declara uma constante de apenas leitura.

### Funções e classes

- {{jsxref("Statements/function", "function")}}
  - : Declara uma função com os parâmetros especificos.
- {{experimental_inline}} {{jsxref("Statements/function*", "function*")}}
  - : Gera funções habilitando iteradores de escrita mais facilmente.
- {{jsxref("Statements/return", "return")}}
  - : Especifica o valor a ser retornado por uma função.
- {{experimental_inline}} {{jsxref("Statements/class", "class")}}
  - : Declara uma classe.

### Iterações

- {{jsxref("Statements/do...while", "do...while")}}
  - : Cria um loop que executa uma especifica instrução até que a condição de teste seja falsa. A condição é retornada depois da execução da instrução, resultando na instrução especificada executando ao menos uma vez.
- {{jsxref("Statements/for", "for")}}
  - : Cria um loop que consiste em três opções de expressões, entre parenteses e separado por ponto e vírgula, seguido pela instrução executada no loop.
- {{deprecated_inline}} {{non-standard_inline()}} {{jsxref("Statements/for_each...in", "for each...in")}}
  - : Itera uma variável especificada sobre todos os valores das propriedades do objeto. Para cada propriedade distinta, uma instrução especificada é executada.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Itera através de enumeráveis propriedades de um objeto, em ordem arbitrária. Para cada propriedade distinta, instruções podem ser executadas.
- {{experimental_inline}} {{jsxref("Statements/for...of", "for...of")}}
  - : Itera através de objetos iteráveis (incluindo [arrays](/pt-BR/docs/Core_JavaScript_1.5_Reference/Global_Objects/Array), array-like objects, [iterators and generators](/pt-BR/docs/JavaScript/Guide/Iterators_and_Generators)), invocando uma iteração personalizada com instruções para serem executadas pelo valor de cada propriedade.
- {{jsxref("Statements/while", "while")}}
  - : Cria um loop que executa uma especifica instrução enquanto o teste da condição for positivo. A condição é retornada antes de executar a instrução.

### Outros

- {{jsxref("Statements/debugger", "debugger")}}
  - : Invoca qualquer funcionalidade de depuração disponível. Se não há funcionabilidade disponível, a instrução não tem efeito.
- {{experimental_inline}} {{jsxref("Statements/export", "export")}}
  - : Usado para exportar funções que os deixa disponível para importação em módulos externos, outros scripts.
- {{experimental_inline}} {{jsxref("Statements/import", "import")}}
  - : Usado para importar funções exportadas de um módulo externo, outro script.
- {{jsxref("Statements/label", "label")}}
  - : Fornece uma instrução com um identificador que pode ser referido usando `break` ou `continue` instruções.
- {{deprecated_inline}} {{jsxref("Statements/with", "with")}}
  - : Extende o alcance de uma instrução.

## Especificações

| Specification                                                                                                                   | Status             | Comment                                      |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------- |
| ECMAScript 1st Edition.                                                                                                         | Standard           | Initial definition.                          |
| {{SpecName('ES5.1', '#sec-12', 'Statements')}}                                                                                  | {{Spec2('ES5.1')}} |                                              |
| {{SpecName('ES6', '#sec-ecmascript-language-statements-and-declarations', 'ECMAScript Language: Statements and Declarations')}} | {{Spec2('ES6')}}   | New: function\*, let, for...of, yield, class |

## Veja também

- [Operators](/pt-BR/docs/Web/JavaScript/Reference/Operators)
