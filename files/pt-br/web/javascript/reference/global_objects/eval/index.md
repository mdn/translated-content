---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
---

{{jsSidebar("Objects")}}

## Resumo

A função **`eval()`** computa um código JavaScript representado como uma string.

## Sintaxe

```js
eval(string);
```

### Parâmetros

- `string`
  - : Uma sequência de caracteres que representa uma expressão JavaScript, declaração, ou sequência de declarações. A expressão pode incluir variáveis e propriedades de objetos existentes.

### Retorno

É o valor computado do código passado para a função. Se o valor estiver vazio, retornará {{jsxref("undefined")}}.

## Descrição

`eval() é uma função de propriedade do objeto global (window)`.

O argumento da função `eval()` é uma string. Se a string representa uma expressão, `eval()` avalia a expressão. Se o argumento representa uma ou mais declarações em JavaScript, `eval()` avalia as declarações. Não chame o `eval()` para avaliar uma expressão aritmética; JavaScript avalia expressões aritméticas automaticamente.

Se você construir uma expressão aritmética como uma string, você pode usar `eval()` para calcular o resultado depois. Por exemplo, suponha que você tenha uma variável x. Você pode adiar a avaliação de uma expressão envolvendo x atribuindo o valor de string da expressão, dizer `"3 * x + 2"`, a uma variável, e, em seguida, chamando `eval()` em um ponto posterior no seu script.

Se o argumento de `eval()` não é uma string, `eval()` retorna o argumento inalterado. No exemplo a seguir, o construtor `String` é especificado, e `eval()` retorna um objeto `String` em vez de avaliar a string.

```js
eval(new String("2 + 2")); // retorna um objeto String contendo "2 + 2"
eval("2 + 2"); // retorna 4
```

Você pode contornar esta limitação de forma genérica usando `toString()`.

```js
var expression = new String("2 + 2");
eval(expression.toString()); // retorna 4
```

Se você usar a função `eval` _indiretamente_, invocando-a por outra referência além de `eval`, [a partir do ECMAScript 5](http://www.ecma-international.org/ecma-262/5.1/#sec-10.4.2) funciona no escopo global ao invés do escopo local. Significa que, por exemplo, aquelas declarações de funções criam funções globais e que o código que está sendo avaliado não tem acesso às variáveis locais dentro do escopo onde está sendo chamada.

```js
function test() {
  var x = 2,
    y = 4;
  console.log(eval("x + y")); // Chamada direta, usa o escopo local, resulta em 6
  var geval = eval; // equivalente a chamar eval no escopo global
  console.log(geval("x + y")); // Chamada indireta, usa o escopo global, lança uma exceção ReferenceError porque `x` não foi declarado
  (0, eval)("x + y"); // outro exemplo de chamada indireta
}
```

## Nunca use `eval`!

`eval()` é uma função perigosa, que executa o código passado com os privilégios do caller. Se você executar o `eval()` com uma sequência de caracteres que podem ser afetados por uma parte maliciosa, você pode acabar executando código malicioso na máquina do usuário com as permissões da sua página/extensão. Mais importante ainda, o código de terceiros pode ver o escopo em que `eval()` foi chamado, o que pode levar a possíveis ataques como {{jsxref("Global_Objects/Function", "Function")}} não é suscetível.

`eval()` é geralmente mais lento do que as alternativas, uma vez que tem de invocar o interpretador JS, enquanto muitos outros construtores são otimizados por _engines_ de JS modernos.

Os interpretadores modernos convertem javascript em código de máquina. Resumindo, o nome das variáveis será desmanchado. Portanto, o uso de `eval` forçará o navegador a fazer buscas caras para descobrir o endereço e seu valor no código de máquina. Além disso, novos valores podem ser introduzidos em `eval` como mudanças no tipo da variável, fazendo o navegador recalcular todo o código de máquina gerado anteriormente. Felizmente, existem alternativas mais seguras (e rápidas) ao `eval()` para usos comuns.

### Acessando propriedades dos membros

Você não deve utilizar `eval()` para converter nomes de propriedades em propriedades. Considere o seguinte exemplo onde as propriedades do objeto a ser acessado não são conhecidas até o código ser executado. Isso pode ser feito com eval:

```js
var obj = { a: 20, b: 30 };
var propname = getPropName(); //retorna "a" ou "b"

eval("var result = obj." + propname);
```

No entanto, `eval()` não é necessário aqui. De fato, sua utilização não é recomendada. Ao invés disso, utilize os [operadores de acesso](/pt-BR/docs/Web/JavaScript/Reference/Operators/Member_Operators), que são mais rápidos e seguros:

```js
var obj = { a: 20, b: 30 };
var propname = getPropName(); //retorna "a" ou "b"
var result = obj[propname]; //  obj[ "a" ] é o mesmo como obj.a
```

### Utilize funções ao invés de avaliar snippets de código

JavaScript possui [first-class functions](http://en.wikipedia.org/wiki/First-class_function), o que significa que você pode passar os argumentos para outras APIs, armazená-los em variáveis e propriedades de objeto, e assim por diante. Muitas APIs de DOM foram desenvolvidas com isso em mente, então você pode (e deve) escrever:

```js
// ao invés de setTimeout(" ... ", 1000) use:
setTimeout(function() { ... }, 1000);

// ao invés de elt.setAttribute("onclick", "...") use:
elt.addEventListener("click", function() { ... } , false);
```

[Closures](/pt-BR/docs/Web/JavaScript/Guide/Closures) são úteis como forma de criar funcções parametrizáveis sem concatenar strings.

### Analisando JSON (convertendo string para objetos JavaScript)

Se a string para a qual você está chamando o `eval()` contém dados (por exemplo, um array: `"[1, 2, 3]"`), ao invés de código, você deve considerar mudar para [JSON](/pt-BR/docs/JSON), que permite a string usar um subconjunto de sintaxe Javascript para representar dados. Veja também [Downloading JSON and JavaScript in extensions](/pt-BR/docs/Downloading_JSON_and_JavaScript_in_extensions).

Perceba que como a sintaxe JSON é limitada comparada com a sintaxe JavaScript, muitos literais JavaScript válidos não serão analisados como JSON. Por exemplo, trailing commas não são permitidas em JSON, e nomes de propriedades (keys) em literais de objetos devem ser colocados entre aspas. Certifique-se de usar um serializados JSON para gerar strings que serão analisadas como JSON mais tarde.

### Passar dados em vez de códigos

Por exemplo, uma extensão concebida para raspar conteúdos de páginas web pode ter as regras de raspagem definidas no [XPath](/pt-BR/docs/XPath) em vez de código JavaScript.

### Rodando o código com privilégios limitados

Se você precisa executar o código, considere executá-lo com privilégios limitados. Esse conselho se aplica principalmente para extensões e aplicações XUL, que podem usar [Components.utils.evalInSandbox](/pt-BR/docs/Components.utils.evalInSandbox) para obter o resultado.

## Exemplos

Os exemplos a seguir mostram o retorno do [`document.write`](/pt-BR/docs/Web/API/document.write). No JavaScript rodando no server-side, você pode obter o mesmo resultado chamando o método `write()ao invés` de usar o `document.write()`.

### Exemplo: Usando `eval`

No código a seguir, ambas as declarações contendo `eval()` retornam 42. A primeira avalia a string "`x + y + 1`"; a segunda avalia a string "`42`".

```js
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42
eval(z); // returns 42
```

### Exemplo: Using `eval` to evaluate a string of JavaScript statements

O exemplo a seguir usa `eval()` para avaliar a string `str`. Essa string consiste de instruções JavaScript que abrem uma caixa de diálogo de alerta e atribuem ao `z` o valor de 42 se `x` for cinco, e do contrário, atribui 0 a `z`. Quando a segunda instrução é executada, `eval()` fará com que essas instruções sejam executadas e também irá avaliar o conjunto de instruções e retornará o valor atribuído a z.

```js
var x = 5;
var str = "if (x == 5) {alert('z is 42'); z = 42;} else z = 0; ";

document.write("<P>z is ", eval(str));
```

### Exemplo: A última expressão é avaliada

`eval()` retorna o valor da última expressão avaliada.

```js
var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str); // returns 2

alert("b is : " + b);

a = false;
b = eval(str); // returns 3

alert("b is : " + b);
```

### Exemplo: avaliar uma string definindo a função necessária "(" and ")" como prefixo e sufixo

```js
var fctStr1 = "function a() {}";
var fctStr2 = "(function a() {})";
var fct1 = eval(fctStr1); // return undefined
var fct2 = eval(fctStr2); // return a function
```

## Especificações

| Especificação                                  | Status             | Comentário        |
| ---------------------------------------------- | ------------------ | ----------------- |
| ECMAScript 1st Edition.                        | Standard           | Definição inicial |
| {{SpecName('ES5.1', '#sec-15.1.2.1', 'eval')}} | {{Spec2('ES5.1')}} |                   |
| {{SpecName('ES6', '#sec-eval-x', 'eval')}}     | {{Spec2('ES6')}}   |                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.eval")}}

## Veja também

- {{jsxref("Global_Objects/uneval", "uneval()")}}
- [Member operators](/pt-BR/docs/Web/JavaScript/Reference/Operators/Member_Operators)
