---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
---

{{JsSidebar("More")}}

O **strict mode** do [ECMAScript 5](https://www.ecma-international.org/publications/standards/Ecma-262.htm) é uma forma de _optar_ por uma variante restrita do JavaScript. O strict mode não é apenas um subconjunto: ele _intencionalmente_ tem semânticas diferentes do código normal. Navegadores que não suportam strict mode executarão código strict mode com um comportamento diferente dos navegadores que suportam, então não confie no strict mode sem testar o suporte a funcionalidades dos aspectos relevantes do strict mode. Código strict mode e código não-strict mode podem coexistir, então scripts podem optar pelo strict mode incrementalmente.

O strict mode faz várias mudanças nas semânticas normais do JavaScript. Primeiro, o strict mode elimina alguns erros silenciosos do JavaScript fazendo-os lançar exceções. Segundo, o strict mode evita equívocos que dificultam que motores JavaScript realizem otimizações: código strict mode pode às vezes ser feito para executar mais rápido que código idêntico não-strict mode. Terceiro, strict mode proíbe algumas sintaxes que provavelmente serão definidas em versões futuras do ECMAScript.

Veja [transitioning to strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode) se você quer mudar seu código para funcionar na variante restrita do JavaScript.

## Invocando strict mode

Strict mode se aplica a _scripts_ inteiros ou _funções individuais_. Ele não se aplica a declarações de bloco fechadas em chaves `{}`; tentar aplicá-lo a tais contextos não faz nada. Código `eval`, código `Function`, atributos _event handlers_, strings passadas para [`setTimeout`](/pt-BR/docs/Web/API/WindowTimers.setTimeout) e coisas do tipo são scripts inteiros, e invocar strict mode neles funciona como esperado.

### Strict mode para scripts

Para invocar strict mode para um script inteiro, coloque _exatamente_ a declaração `"use strict";` (ou `'use strict';`) antes de qualquer outra declaração.

```js
// Sintaxe strict mode para todo o script
"use strict";
var v = "Oi! Eu sou um script strict mode!";
```

Essa sintaxe tem uma armadilha que [já pegou](https://bugzilla.mozilla.org/show_bug.cgi?id=579119) [um site grande](https://bugzilla.mozilla.org/show_bug.cgi?id=627531): não é possível concatenar cegamente scripts não-conflitantes. Considere concatenar um script strict mode com um script não-strict mode: a concatenação inteira parece strict! O inverso também é verdade: não-strict mais strict parece não-strict. Concatenar scripts strict mode com outros é bom, e concatenar scripts não-strict mode é bom. Simplesmente concatenar scripts strict e não-strict é problemático. Portanto é recomendado que você ative strict mode função-por-função (pelo menos durante o período de transição).

Você também pode usar a abordagem de embrulhar o conteúdo inteiro de um script em uma função e fazer a função externa usar strict mode. Isto elimina o problema da concatenação, mas significa que você tem que exportar explicitamente quaisquer variáveis globais fora do escopo da função.

### Strict mode para funções

Da mesma forma, para invocar strict mode para uma função, coloque _exatamente_ a declaração `"use strict";` (ou `'use strict';`) no corpo da função antes de qualquer outra declaração.

```js
function strict() {
  // Sintaxe strict mode a nível de função
  "use strict";
  function nested() {
    return "E eu também!";
  }
  return "Oi! Eu sou uma função strict mode!  " + nested();
}
function notStrict() {
  return "Eu não sou strict.";
}
```

## Mudanças no strict mode

Strict mode muda tanto a sintaxe quando o comportamento em tempo de execução. Mudanças geralmente se encaixam em uma destas categorias: mudanças que convertem equívocos em erros (como erros de sintaxe ou em tempo de execução), mudanças que simplificam como uma variável particular para um dado uso de um nome é computada, mudanças que simplificam `eval` e `arguments`, mudanças que facilitam JavaScript "seguro", e mudanças que antecipam a evolução futura do ECMAScript.

### Convertendo equívocos em erros

Strict mode transforma em erros alguns equívocos anteriormente aceitos. O JavaScript foi projetado para ser fácil para novos desenvolvedores, e algumas vezes ele dá semânticas de não-erros a operações que deveriam ser erros. Algumas vezes isso resolve o problema pontual, mas outras vezes cria problemas piores no futuro. Strict mode trata esses equívocos como erros para que sejam descobertos e consertados prontamente.

Primeiro, o strict mode impossibilita criar variáveis globais acidentalmente. Em JavaScript normal, cometer um erro de digitação ao digitar uma variável em uma atribuição cria uma nova propriedade no objeto global e continua a "funcionar" (embora falhas futuras sejam possíveis: provavelmente, em JavaScript moderno). Atribuições que acidentalmente criariam variáveis globais lançam exceções em vez disso no strict mode:

```js
"use strict";
// Assumindo que uma variável global variavelErrada existe
variavellErrada = 17; // esta linha lança ReferenceError por conta do
// erro de digitação da variável
```

Segundo, strict mode faz com que atribuições que outrora falhariam silenciosamente lançar uma exceção. Por exemplo, `NaN` é uma variável global não-atribuível. Em código normal, atribuir a `NaN` não faz nada; o desenvolvedor não recebe qualquer resposta de falha. No strict mode, atribuir a `NaN` lança uma exceção. Qualquer atribuição que falha silenciosamente em código normal (atribuir a uma propriedade não-atribuível, atribuir a uma propriedade getter-only, atribuir a uma propriedade de um objeto [não-extensível](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)) lançarão exceções em strict mode:

```js
"use strict";

// Atribuir a uma propriedade não-atribuível
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // lança TypeError

// Atribuir a uma propriedade getter-only
var obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // lança TypeError

// Atribuir a uma nova propriedade de um objeto não-extensível
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // lança TypeError
```

Terceiro, strict mode faz com que tentativas de deletar propriedades não-deletáveis lancem exceções (onde anteriormente a tentativa simplesmente não faria efeito):

```js
"use strict";
delete Object.prototype; // lança TypeError
```

Quarto, strict mode anterior ao Gecko 34 requer que todas as propriedades nomeadas em um objeto literal sejam únicas. Código normal pode duplicar nomes de propriedades, sendo que a última ocorrência determina o valor da propriedade. Mas como apenas o último faz algo, a duplicação é meramente um vetor de bugs, se o código for modificado para mudar o valor da propriedade por outro meio que não modificando a última instância. Nomes de propriedades duplicados são erro de sintaxe em strict mode:

> **Nota:** Não é mais o caso no ECMAScript 6 ([Erro do Firefox 1041128](https://bugzil.la/1041128)).

```js
"use strict";
var o = { p: 1, p: 2 }; // !!! erro de sintaxe
```

Quinto, strict mode exige que nomes de parâmetros de função sejam únicos. Em código normal, o último argumento duplicado esconde argumentos anteriores com nome semelhante. Estes argumentos anteriores continuam disponíveis através de `arguments[i]`**,** portanto não são completamente inacessíveis. Entretanto, esta ocultação faz pouco sentido e provavelmente é indesejável (pode esconder um erro de digitação, por exemplo), então em strict mode nomes de argumentos duplicados são erro de sintaxe:

```js
function sum(a, a, c) {
  // !!! erro de sintaxe
  "use strict";
  return a + b + c; // errado se este código executasse
}
```

Sexto, strict mode em ECMAScript 5 proíbe sintaxe octal. Sintaxe ocatal não é parte do ECMAScript 5, mas é suportado em todos os navegadores prefixando o número octal com um zero: `0644 === 420` e `"\045" === "%"`. No ECMAScript 6, número octal é suportado prefixando um número com "`0o`":

```js
var a = 0o10; // ES6: Octal
```

Novos desenvolvedores algumas vezes acham que um prefixo zero não tem significado semântico, então eles o utilizam como mecanismo de alinhamento — mas isso muda o significado do número! Sintaxe octal é raramente útil e pode ser usada equivocadamente, então o strict mode torna octal erro de sintaxe:

```js
"use strict";
var sum =
  015 + // !!! erro de sintaxe
  197 +
  142;
```

Sétimo, strict mode em ECMAScript 6 proíbe definir propriedades em valores {{Glossary("Primitive", "primitivos")}}. Sem strict mode, definir uma propriedade é simplesmente ignorado; com strict mode, no entanto, um {{jsxref("TypeError")}} é lançado.

```js
(function () {
  "use strict";

  false.true = ""; // TypeError
  (14).navegandoPara = "casa"; // TypeError
  "com".voce = "distante"; // TypeError
})();
```

### Simplificando usos de variáveis

Strict mode simplifica como nomes de variáveis se mapeiam a definições de variáveis particulares no código. Muitas otimizações de compiladores dependem da habilidade de dizer que variável _X_ está guardada _naquele_ local; isto é crítico para otimizar completamente o código JavaScript. JavaScript às vezes torna este mapeamento básico de nome para definição de variável no código impossível de executar até o tempo de execução. Strict mode remove a maioria dos casos onde isso acontece, então o compilador pode otimizar melhor código strict mode.

Primeiro, strict mode proíbe `with`. O problema com `with` é que qualquer nome dentro do block pode mapear tanto para uma propriedade do objeto passado quanto para uma variável no escopo envolvente (ou até global), em tempo de execução: é impossível saber qual de antemão. Strict mode torna `with` um erro de sintaxe, então não há chance de um nome em um `with` referir-re a uma localização deconhecida em tempo de execução:

```js
"use strict";
var x = 17;
with (obj) {
  // !!! erro de sintaxe
  // Se isto não fosse strict mode, isso seria var x ou obj.x?
  // No geral, é impossível saber sem executar o código, então
  // o nome não pode ser otimizado.
  x;
}
```

A alternativa simples de atribuir o objeto a uma variável de nome curto, e então acessar a propriedade correspondente naquela variável, está pronta para substituir `with`.

Segundo, [eval de código strict mode não introduz novas variáves no escopo envolvente](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). Em código normal, `eval("var x;")` introduz uma variável `x` na função envolvente ou no escopo global. Isto significa que, no geral, em uma função que contém uma chamada para `eval`, todo nome que não se refere a um argumento ou variável local deve ser mapeado para uma definição particular em tempo de execução (porque aquele `eval` pode ter introduzido uma nova variável que esconderia a variável externa). No strict mode, `eval` cria variáveis apenas para o código sendo avaliado, portanto `eval` não pode afetar se um nome se refere a uma variável externa ou alguma variável local:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x");
console.assert(x === 17);
console.assert(evalX === 42);
```

Relacionadamente, se a função `eval` for invocada por uma expressão da forma `eval(...)` em código strict mode, o código será avaliado como código strict mode. O código pode invocar strict code explicitamente, mas não é necessário.

```js
function strict1(str) {
  "use strict";
  return eval(str); // str será tratado como código strict mode
}
function strict2(f, str) {
  "use strict";
  return f(str); // não é eval(...): str é strict se e
  // somente se invocar strict mode
}
function nonstrict(str) {
  return eval(str); // str é strict se e somente se
  // invocar strict mode
}

strict1("'Código strict mode!'");
strict1("'use strict'; 'Código strict mode!'");
strict2(eval, "'Código não-strict.'");
strict2(eval, "'use strict'; 'Código strict mode!'");
nonstrict("'Código não-strict.'");
nonstrict("'use strict'; 'Código strict mode!'");
```

Portanto nomes em código `eval` de strict mode se comportam da mesma forma que nomes em código strict mode que não estão sendo avaliados como resultado de `eval`.

Terceiro, strict mode proíbe deletar nomes simples. `delete name` em strict mode é erro de sintaxe:

```js
"use strict";

var x;
delete x; // !!! erro de sintaxe

eval("var y; delete y;"); // !!! erro de sintaxe
```

### Tornando `eval` e `arguments` mais simples

Strict mode torna `arguments` e `eval` menos estranhamente mágicos. Ambos envolvem uma quantidade considerável de comportamento mágico em código normal: `eval` para adicionar ou remover _bindings_ e para mudar valores de _bindings_, e `arguments` com suas propriedades indexadas como _alias_ de argumentos nomeados. Strict mode dá grandes passos na direção de tratar `eval` e `arguments` como palavras-chave, embora reparos completos não venham até uma futura edição do ECMAScript.

Primeiro, os nomes `eval` e `arguments` não podem ser vinculados ou atribuídos na sintaxe da linguagem. Todas as tentativas são erros de sintaxe:

```js
"use strict";
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) {} };
var eval;
try {
} catch (arguments) {}
function x(eval) {}
function arguments() {}
var y = function eval() {};
var f = new Function("arguments", "'use strict'; return 17;");
```

Segundo, código strict mode não faz _alias_ para propriedades de objetos `arguments` criados dentro de si. Em código normal dentro de uma função cujo primeiro argumento é `arg`, definir `arg` também define `arguments[0]`, e vice-versa (a menos que nenhum argumento seja fornecido ou `arguments[0]` seja deletado). Objetos `arguments` para funções strict mode armazenam os argumentos originais quando a função é invocada. `arguments[i]` não rastreia o valor do argumento nomeado correspondente, nem um argumento nomeado rastreia o valor do `arguments[i]` correspondente.

```js
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

Terceiro, `arguments.callee` não é mais suportado. Em código normal, `arguments.callee` se refere à função envolvente. Esse caso de uso é frágil: apenas nomeie a função envolvente! Além disso, `arguments.callee` prejudica substancialmente otimizações como tornar funções _inline_ porque deve ser possível fornecer uma referência à função não-_inline_ se `arguments.callee` for acessado. `arguments.callee` para funções strict mode é uma propriedade não-deletável que lança exceção quando atribuída ou recuperada:

```js
"use strict";
var f = function () {
  return arguments.callee;
};
f(); // lança TypeError
```

### Tornando JavaScript "seguro"

Strict mode torna mais fácil escrever JavaScript "seguro". Alguns websites agora oferecem formas de escrever JavaScript que será executado pelo website _em nome de outros usuários_. JavaScript nos navegadores pode acessar informações privadas do usuário, então tal JavaScript deve ser parcialmente transformado antes de executado, para barrar acesso a funcionalidades proibidas. A flexibilidade do JavaScript torna isso efetivamente impossível sem várias verificações em tempo de execução. Algumas funções da linguagem são tão pervasivas que fazer verificações em tempo de execução tem um custo de desempenho considerável. Alguns ajustes do strict mode, mais a exigência de que o JavaScript submetido por usuários seja código strict mode e invocá-lo de uma certa maneira, reduz substancialmente a necessidade de realizar verificações em tempo de execução.

Primeiro, o valor passado como `this` para uma função em strict mode não é forçado a ser um objeto (entenda-se "encaixotamento"). Para uma função normal, `this` é sempre um objeto: seja o objeto fornecido se chamado com um `this` cujo valor é um objeto; o valor, encaixotado, se chamado com um `this` Boolean, string ou número; ou o objeto global se chamado com um `this` `undefined` ou `null`. Use [`call`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), ou [`bind`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) para especificar um determinado `this`. O encaixotamento automático não apenas é um custo de desempenho, como também expor o objeto global em navegadores é um risco de segurança, porque o objeto global oferece acesso a funcionalidades que ambientes JavaScript "seguros" devem restringir. Assim, para uma função strict mode, o `this` especificado não é encaixotado em um objeto, e se não especificado, `this` será `undefined`:

```js
"use strict";
function fun() {
  return this;
}
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
```

Isso significa, além de outras coisas, que em navegadores não é mais possíveis referenciar o objeto `window` através de `this` dentro de uma função strict mode.

Segundo, em strict mode não é mais possível "caminhar" a pilha JavaScript via extensões do ECMAScript comumente implementadas. Em código normal com essas extensões, quando uma funçao `fun` está no meio de ser chamada, `fun.caller` é a função que chamou `fun` mais recentemente, e `fun.arguments` é o `arguments` para aquela invocação de `fun`. Ambas as extensões são problemáticas para JavaScript "seguro" porque permitem que código "seguro" acesse funções "privilegiadas" e seus argumentos (potencialmente inseguros). Se `fun` estiver em strict mode, tanto `fun.caller` quando `fun.arguments` são propriedades não-deletáveis que lançam exceção quando definidas ou recuperadas:

```js
function restrita() {
  "use strict";
  restrita.caller; // lança TypeError
  restrita.arguments; // lança TypeError
}
function invocadorPrivilegiado() {
  return restrita();
}
invocadorPrivilegiado();
```

Terceiro, `arguments` para funções strict mode não oferecem mais acesso às variáveis da chamada de função correspondente. Em algumas implementações antigas do ECMAScript, `arguments.caller` era um objeto cujas propriedades faziam _alias_ de variáveis naquela função. Isso é um [risco de segurança](https://stuff.mit.edu/iap/2008/facebook/) porque quebra a habilidade de esconder valores privilegiados via abstração de função; isso também exclui a maioria das otimizações. Por essas razões, nenhum navegador moderno implementa isso. Ainda assim, por causa de sua funcionalidade histórica, `arguments.caller` para uma função strict mode também é uma propriedade não-deletável que lança exceção quando definida ou recuperada:

```js
"use strict";
function fun(a, b) {
  "use strict";
  var v = 12;
  return arguments.caller; // lança TypeError
}
fun(1, 2); // não expõe v (or a or b)
```

### Pavimentando o caminho para versões futuras do ECMAScript

Versões futuras do ECMAScript provavelmente introduzirão nova sintaxe, e o strict mode no ECMAScript 5 aplica algumas restrições para facilitar essa transição. Será mais fácil fazer algumas mudanças se as fundações dessas mudanças forem proibidas no strict mode.

Primeiro, no strict mode, uma pequena lista de identificadores tornam-se palavras-chave reservadas. Estas palavras são `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` e `yield`. Em strict mode, portanto, você não pode nomear ou usar variáveis ou argumentos com esses nomes.

```js
function package(protected) {
  // !!!
  "use strict";
  var implements; // !!!

  // !!!
  interface: while (true) {
    break interface; // !!!
  }

  function private() {} // !!!
}
function fun(static) {
  "use strict";
} // !!!
```

Duas ressalvas específicas à Mozilla: primeiro, se seu código for JavaScript 1.7 ou superior (por exemplo em código chrome ou usando o `<script type="">` correto) e for strict mode, `let` e `yield` têm a funcionaldade que eles tiveram desde que essas palavras-chave foram introduzidas pela primeira vez. Mas código strict mode na web, carregado com `<script src="">` ou `<script>...</script>`, não serão capazes de usar `let`/`yield` como identificadores. Segundo, enquanto o ES5 reserva incondicionalmente as palavras `class`, `enum`, `export`, `extends`, `import` e `super`, a Mozilla reservava-as apenas em strict mode antes do Firefox 5.

Segundo, [strict mode proíbe declaração de funções fora do nível superior de um script ou função](https://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/). Em código normal em navegadores, declarações de funções são permitidas "em todo lugar". _Isso não é parte do ES5 (nem do ES3)!_ É uma extensão com semânticas incompatíveis em diferentes navegadores. Edições futuras do ECMAScript promissoramente especificarão novas semânticas para declarações de funções fora do nível superior de um script ou função. [Proibir tais declarações de funções em strict mode](https://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls) "limpa a mesa" para especificação em uma _release_ futura do ECMAScript:

```js
"use strict";
if (true) {
  function f() {} // !!! erro de sintaxe
  f();
}

for (var i = 0; i < 5; i++) {
  function f2() {} // !!! erro de sintaxe
  f2();
}

function baz() {
  // correto
  function eit() {} // erro de sintaxe
}
```

Essa proibição não é adequada ao strict mode porque tais declarações de função são uma extensão de ES5 básico. Mas é a recomendação do comitê do ECMAScript e os navegadores a implementarão.

## Strict mode em navegadores

Os principais navegadores agora implementam strict mode. Entretanto, não dependa deles cegamente já que ainda há [várias versões de navegadores utilizadas por aí que têm apenas suporte parcial ao strict mode](https://caniuse.com/use-strict) ou que não suportam de forma alguma (ex.: Internet Explorer abaixo da versão 10!). _Strict mode muda semântica_. Depender dessas mudanças causará equívocos e erros em navegadores que não implementam strict mode. Tenha cautela ao usar strict mode e gere confiança no strict mode com testes de funcionalidades que verificam se partes relevantes do strict mode estão implementadas. Finalmente, certifique-se de _testar seu código em navegadores que suportam e não suportam strict mode._ Se você testar apenas em navegadores que não suportam strict mode, você provavelmente terá problemas em navegadores que suportam e vice-versa.

## Especificações

| Especificação                                                        | Status               | Comentário                                                                                                                       |
| -------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-10.1.1', 'Strict Mode Code')}}             | {{Spec2('ES5.1')}}   | Definição inicial. Veja também: [Strict mode restriction and exceptions](https://www.ecma-international.org/ecma-262/5.1/#sec-C) |
| {{SpecName('ES6', '#sec-strict-mode-code', 'Strict Mode Code')}}     | {{Spec2('ES6')}}     | [Strict mode restriction and exceptions](https://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-of-ecmascript)         |
| {{SpecName('ESDraft', '#sec-strict-mode-code', 'Strict Mode Code')}} | {{Spec2('ESDraft')}} | [Strict mode restriction and exceptions](https://tc39.github.io/ecma262/#sec-strict-mode-of-ecmascript)                          |

## Veja também

- [Where's Walden? » New ES5 strict mode support: now with poison pills!](https://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/)
- [Where's Walden? » New ES5 strict mode requirement: function statements not at top level of a program or function are prohibited](https://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)
- [Where's Walden? » New ES5 strict mode support: new vars created by strict mode eval code are local to that code only](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/)
- [JavaScript "use strict" tutorial for beginners.](https://qnimate.com/javascript-strict-mode-in-nutshell/)
- [John Resig - ECMAScript 5 Strict Mode, JSON, and More](https://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
- [ECMA-262-5 in detail. Chapter 2. Strict Mode.](https://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
- [Strict mode compatibility table](https://kangax.github.io/compat-table/es5/#Strict_mode)
- [Transitioning to strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
