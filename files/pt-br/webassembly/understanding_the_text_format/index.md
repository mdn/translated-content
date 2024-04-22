---
title: Entendendo o formato textual do WebAssembly
slug: WebAssembly/Understanding_the_text_format
---

{{WebAssemblySidebar}}

Para permitir que o WebAssembly seja lido e editado por humanos, existe uma representação textual do formato binário Wasm. Este é um formulário intermediário projetado para ser exposto em editores de texto, ferramentas de desenvolvedor de navegador etc. Este artigo explica como esse formato de texto funciona, em termos de sintaxe bruta, e como ele está relacionado ao bytecode subjacente que ele representa — e os objetos wrapper que representam Wasm em JavaScript.

> **Nota:** Isso pode ser um exagero se você for um desenvolvedor da Web que deseja apenas carregar um módulo Wasm em uma página e usá-lo em seu código (consulte [Usando a API JavaScript WebAssembly](/pt-BR/docs/WebAssembly/Using_the_JavaScript_API)), mas é mais útil se, por exemplo, você deseja escrever módulos Wasm para otimizar o desempenho de sua biblioteca JavaScript ou criar seu próprio compilador WebAssembly.

## S-expressions

Nos formatos binário e textual, a unidade fundamental de código no WebAssembly é um módulo. No formato de texto, um módulo é representado como uma grande S-expression. As S-expressions são um formato textual muito antigo e muito simples para representar árvores e, portanto, podemos pensar em um módulo como uma árvore de nós que descreve a estrutura do módulo e seu código. Ao contrário da Abstract Syntax Tree de uma linguagem de programação, porém, a árvore do WebAssembly é bastante plana, consistindo principalmente em listas de instruções.

Primeiro, vamos ver como é uma S-expression. Cada nó na árvore vai dentro de um par de parênteses — `( ... )`. O primeiro rótulo dentro dos parênteses informa que tipo de nó é e, depois disso, há uma lista separada por espaços de atributos ou nós filhos. Isso significa a S-expression do WebAssembly:

```wasm
(module (memory 1) (func))
```

representa uma árvore com o nó raiz "module" e dois nós filhos, um nó "memory" com o atributo "1" e um nó "func". Veremos em breve o que esses nós realmente significam.

### O módulo mais simples

Vamos começar com o módulo Wasm mais simples e mais curto possível.

```wasm
(module)
```

Este módulo está totalmente vazio, mas ainda é um módulo válido.

Se convertermos nosso módulo para binário agora (consulte [Convertendo o formato de texto WebAssembly para Wasm](/pt-BR/docs/WebAssembly/Text_format_to_Wasm)), veremos apenas o cabeçalho do módulo de 8 bytes descrito no [formato binário](https://webassembly.github.io/spec/core/binary/index.html#high-level-structure):

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### Adicionando funcionalidade ao seu módulo

Ok, isso não é muito interessante, vamos adicionar algum código executável a este módulo.

Todo o código em um módulo webassembly é agrupado em funções, que possuem a seguinte estrutura de pseudocódigo:

```wasm
( func <assinatura> <locais> <corpo> )
```

- A **assinatura** declara o que a função recebe (parâmetros) e retorna (valores de retorno).
- Os **locais** são como variáveis em JavaScript, mas com tipos explícitos declarados.
- O **corpo** é apenas uma lista linear de instruções de baixo nível.

Portanto, isso é semelhante a funções em outras linguagens, mesmo que pareça diferente porque é uma S-expression.

## Assinaturas e parâmetros

A assinatura é uma sequência de declarações de tipo de parâmetro seguida por uma lista de declarações de tipo de retorno. Vale ressaltar aqui que:

- A ausência de um `(result)` significa que a função não retorna nada.
- Na iteração atual, pode haver no máximo 1 tipo de retorno, mas [posteriormente isso será flexibilizado](https://webassembly.org/docs/future-features#multiple-return) para qualquer número.

Cada parâmetro tem um tipo explicitamente declarado; Wasm [Tipos de número](#number_types), [Tipos de referência](#reference_types), [Tipos de vetor](#vector_types).
Os tipos de números são:

- `i32`: inteiro de 32 bits
- `i64`: inteiro de 64 bits
- `f32`: flutuante de 32 bits
- `f64`: flutuante de 64 bits

Um único parâmetro é escrito `(param i32)` e o tipo de retorno é escrito `(result i32)`, portanto, uma função binária que recebe dois inteiros de 32 bits e retorna um float de 64 bits seria escrita assim:

```wasm
(func (param i32) (param i32) (result f64) ...)
```

Após a assinatura, os locais são listados com seu tipo, por exemplo `(local i32)`. Parâmetros são basicamente apenas locais que são inicializados com o valor do argumento correspondente passado pelo chamador.

## Obtendo e configurando locais e parâmetros

Locais/parâmetros podem ser lidos e escritos pelo corpo da função com as instruções `local.get` e `local.set`.

Os comandos `local.get`/`local.set` referem-se ao item a ser obtido/definido por seu índice numérico: os parâmetros são referidos primeiro, na ordem de sua declaração, seguidos pelos locais na ordem de sua declaração. Assim, dada a seguinte função:

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

A instrução `local.get 0` obteria o parâmetro i32, `local.get 1` obteria o parâmetro f32 e `local.get 2` obteria o f64 local.

Há outro problema aqui - usar índices numéricos para se referir a itens pode ser confuso e irritante, então o formato de texto permite que você nomeie parâmetros, locais e a maioria dos outros itens simplesmente incluindo um nome prefixado por um cifrão (`$`) logo antes da declaração de tipo.

Assim, você poderia reescrever nossa assinatura anterior assim:

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

E então poderia escrever `local.get $p1` em vez de `local.get 0`, etc. (Observe que, quando este texto for convertido em binário, o binário conterá apenas o número inteiro).

## Máquinas de pilha

Antes de podermos escrever um corpo de função, temos que falar sobre mais uma coisa: **máquinas de pilha**. Embora o navegador o compile para algo mais eficiente, a execução do Wasm é definida em termos de uma máquina de pilha onde a ideia básica é que todo tipo de instrução empurra e/ou retira um certo número de valores `i32`/`i64`/`f32`/`f64` para/de uma pilha.

Por exemplo, `local.get` é definido para colocar o valor do local lido na pilha e `i32.add` empurra dois valores `i32` (ele implicitamente pega os dois valores anteriores colocados na pilha), calcula sua soma (módulo 2^32) e empurra o valor `i32` resultante.

Quando uma função é chamada, ela começa com uma pilha vazia que é gradualmente preenchida e esvaziada conforme as instruções do corpo são executadas. Por exemplo, depois de executar a seguinte função:

```wasm
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

A pilha contém exatamente um valor `i32` — o resultado da expressão (`$p + $p`), que é tratado por `i32.add`. O valor de retorno de uma função é apenas o valor final deixado na pilha.

As regras de validação do WebAssembly garantem que a pilha corresponda exatamente: se você declarar um `(result f32)`, a pilha deve conter exatamente um `f32` no final. Se não houver nenhum tipo de resultado, a pilha deverá estar vazia.

## Nosso primeiro corpo funcional

Como mencionado anteriormente, o corpo da função é uma lista de instruções que são seguidas conforme a função é chamada. Juntando isso com o que já aprendemos, podemos finalmente definir um módulo contendo nossa própria função simples:

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

Esta função obtém dois parâmetros, soma-os e retorna o resultado.

Há muito mais coisas que podem ser colocadas dentro dos corpos das funções, mas começaremos simples por enquanto, e você verá muito mais exemplos à medida que avança. Para obter uma lista completa dos opcodes disponíveis, consulte a [referência de semântica webassembly.org](https://webassembly.github.io/spec/core/exec/index.html).

### Chamando a função

Nossa função não fará muito sozinha — agora precisamos chamá-la. Como fazemos isso? Como em um módulo ES, as funções Wasm devem ser explicitamente exportadas por uma instrução `export` dentro do módulo.

Como os locais, as funções são identificadas por um índice por padrão, mas por conveniência, elas podem ser nomeadas. Vamos começar fazendo isso — primeiro, adicionaremos um nome precedido por um cifrão, logo após a palavra-chave `func`:

```wasm
(func $add …)
```

Agora precisamos adicionar uma declaração de exportação — fica assim:

```wasm
(export "add" (func $add))
```

Aqui, `add` é o nome pelo qual a função será identificada em JavaScript, enquanto `$add` seleciona qual função WebAssembly dentro do módulo está sendo exportada.

Portanto, nosso módulo final (por enquanto) fica assim:

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

Se você quiser seguir o exemplo, salve nosso módulo acima em um arquivo chamado `add.wat`, então converta-o em um arquivo binário chamado `add.wasm` usando wabt (consulte [Convertendo o formato de texto WebAssembly para Wasm](/pt-BR/docs/WebAssembly/Text_format_to_Wasm) para detalhes).

Em seguida, instanciaremos nosso binário de forma assíncrona (consulte [Carregando e executando o código WebAssembly](/pt-BR/docs/WebAssembly/Loading_and_running)) e executaremos nossa função `add` em JavaScript (agora podemos encontrar `add()` na propriedade [`exports`](/pt-BR/docs/WebAssembly/JavaScript_interface/Instance/exports) da instância):

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> **Nota:** Você pode encontrar este exemplo no GitHub como [add.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/add.html) ([veja ao vivo também](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)). Consulte também [`WebAssembly.instantiateStreaming()`](/pt-BR/docs/WebAssembly/JavaScript_interface/instantiateStreaming) para obter mais detalhes sobre a função instanciar.

## Explorando fundamentos

Agora que cobrimos o básico real, vamos ver alguns recursos mais avançados.

### Chamando funções de outras funções no mesmo módulo

A instrução `call` chama uma única função, dado seu índice ou nome. Por exemplo, o seguinte módulo contém duas funções — uma apenas retorna o valor 42, a outra retorna o resultado da chamada do primeiro mais um:

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Nota:** `i32.const` apenas define um inteiro de 32 bits e o coloca na pilha. Você pode trocar o `i32` por qualquer um dos outros tipos disponíveis e alterar o valor do const para o que quiser (aqui definimos o valor para `42`).

Neste exemplo, você notará uma seção `(export "getAnswerPlus1")`, declarada logo após a instrução `func` na segunda função — esta é uma forma abreviada de declarar que queremos exportar esta função e definir o nome como queremos exportá-la.

Isso é funcionalmente equivalente a incluir uma instrução de função separada fora da função, em outro lugar no módulo da mesma maneira que fizemos antes, por exemplo:

```wasm
(export "getAnswerPlus1" (func $functionName))
```

O código JavaScript para chamar nosso módulo acima se parece com:

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### Importando funções do JavaScript

Já vimos JavaScript chamando funções WebAssembly, mas e o WebAssembly chamando funções JavaScript? O WebAssembly não possui nenhum conhecimento interno de JavaScript, mas possui uma maneira geral de importar funções que podem aceitar funções JavaScript ou Wasm. Vejamos um exemplo:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly tem um namespace de dois níveis, então a declaração de importação aqui está dizendo que estamos pedindo para importar a função `log` do módulo `console`. Você também pode ver que a função `logIt` exportada chama a função importada usando a instrução `call` que introduzimos acima.

As funções importadas são como funções normais: elas têm uma assinatura que a validação do WebAssembly verifica estaticamente e recebem um índice e podem ser nomeadas e chamadas.

As funções JavaScript não têm noção de assinatura, portanto qualquer função JavaScript pode ser passada, independentemente da assinatura declarada na importação. Depois que um módulo declara uma importação, o chamador de [`WebAssembly.instantiate()`](/pt-BR/docs/WebAssembly/JavaScript_interface/instantiate) deve passar um objeto de importação que tenha as propriedades correspondentes.

Para o exposto acima, precisamos de um objeto (vamos chamá-lo de `importObject`) de modo que `importObject.console.log` seja uma função JavaScript.

Isso ficaria parecido com o seguinte:

```js
const importObject = {
  console: {
    log(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("logger.wasm"), importObject).then(
  (obj) => {
    obj.instance.exports.logIt();
  },
);
```

> **Nota:** Você pode encontrar este exemplo no GitHub como [logger.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger.html) ([veja ao vivo também](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)).

### Declarando globais no WebAssembly

O WebAssembly tem a capacidade de criar instâncias de variáveis globais, acessíveis a partir de JavaScript e importáveis/exportáveis em uma ou mais instâncias [`WebAssembly.Module`](/pt-BR/docs/WebAssembly/JavaScript_interface/Module). Isso é muito útil, pois permite a vinculação dinâmica de vários módulos.

No formato de texto WebAssembly, é mais ou menos assim (consulte [global.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.wat) em nosso repositório GitHub; consulte também [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) para uma transmissão ao vivo Exemplo de JavaScript):

```wasm
(module
   (global $g (import "js" "global") (mut i32))
   (func (export "getGlobal") (result i32)
        (global.get $g))
   (func (export "incGlobal")
        (global.set $g
            (i32.add (global.get $g) (i32.const 1))))
)
```

Isso é semelhante ao que vimos antes, exceto que especificamos um valor global usando a palavra-chave `global` e também especificamos a palavra-chave `mut` junto com o tipo de dados do valor, se quisermos que ele seja mutável.

Para criar um valor equivalente usando JavaScript, você usaria o construtor [`WebAssembly.Global()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Global):

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### Memória WebAssembly

O exemplo acima é uma função de registro terrível: ela imprime apenas um único inteiro! E se quiséssemos registrar uma string de texto? Para lidar com strings e outros tipos de dados mais complexos, o WebAssembly fornece **memory** (embora também tenhamos [tipos de referência](#reference_types) na implementação mais recente do WebAssembly). De acordo com o WebAssembly, a memória é apenas uma grande matriz de bytes que pode crescer com o tempo. O WebAssembly contém instruções como `i32.load` e `i32.store` para leitura e gravação de [memória linear](https://webassembly.github.io/spec/core/exec/index.html#linear-memory).

Do ponto de vista do JavaScript, é como se a memória estivesse toda dentro de um grande {{jsxref("ArrayBuffer")}} (redimensionável). Isso é literalmente tudo o que o asm.js tem para brincar (exceto que não é redimensionável; veja o asm.js [modelo de programação](http://asmjs.org/spec/latest/#programming-model)).

Portanto, uma string é apenas uma sequência de bytes em algum lugar dentro dessa memória linear. Vamos supor que escrevemos uma string adequada de bytes na memória; como passamos essa string para JavaScript?

A chave é que o JavaScript pode criar instâncias de memória linear WebAssembly por meio da interface [`WebAssembly.Memory()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory) e acessar uma instância de memória existente (atualmente, você só pode ter uma por instância de módulo) usando os métodos de instância associados. As instâncias de memória têm um getter [`buffer`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory/buffer), que retorna um `ArrayBuffer` que aponta para toda a memória linear.

As instâncias de memória também podem aumentar, por exemplo, por meio do método [`Memory.grow()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory/grow) em JavaScript. Quando o crescimento ocorre, já que `ArrayBuffer`s não podem mudar de tamanho, o `ArrayBuffer` atual é separado e um novo `ArrayBuffer` é criado para apontar para a memória maior e mais nova. Isso significa que tudo o que precisamos fazer para passar uma string para JavaScript é passar o deslocamento da string na memória linear junto com alguma forma de indicar o comprimento.

Embora existam muitas maneiras de codificar o comprimento de uma string na própria string (por exemplo, strings C); para simplificar aqui, apenas passamos o deslocamento e o comprimento como parâmetros:

```wasm
(import "console" "log" (func $log (param i32) (param i32)))
```

No lado do JavaScript, podemos usar a [API TextDecoder](/pt-BR/docs/Web/API/TextDecoder) para decodificar facilmente nossos bytes em uma string JavaScript. (Especificamos `utf8` aqui, mas muitas outras codificações são suportadas.)

```js
function consoleLogString(offset, length) {
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const string = new TextDecoder("utf8").decode(bytes);
  console.log(string);
}
```

A última peça que falta do quebra-cabeça é onde `consoleLogString` obtém acesso à `memory` do WebAssembly. WebAssembly nos dá muita flexibilidade aqui: podemos criar um objeto [`Memory`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory) em JavaScript e fazer com que o módulo WebAssembly importe a memória, ou podemos fazer com que o módulo WebAssembly crie a memória e exporte-a para JavaScript.

Para simplificar, vamos criá-lo em JavaScript e depois importá-lo para o WebAssembly. Nossa instrução `import` é escrita da seguinte forma:

```wasm
(import "js" "mem" (memory 1))
```

O `1` indica que a memória importada deve ter pelo menos 1 página de memória (o WebAssembly define uma página como 64KB).

Então vamos ver um módulo completo que imprime a string "Hi". Em um programa C compilado normal, você chamaria uma função para alocar um pouco de memória para a string, mas como estamos apenas escrevendo nosso próprio assembly aqui e possuímos toda a memória linear, podemos apenas escrever o conteúdo da string na memória global usando uma seção `data`. As seções de dados permitem que uma sequência de bytes seja escrita em um determinado deslocamento no tempo de instanciação e são semelhantes às seções `.data` em formatos executáveis nativos.

Nosso módulo Wasm final se parece com isso:

```wasm
(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hi")
  (func (export "writeHi")
    i32.const 0  ;; pass offset 0 to log
    i32.const 2  ;; pass length 2 to log
    call $log))
```

> **Nota:** Acima, observe a sintaxe de ponto e vírgula dupla (`;;`) para permitir comentários em arquivos WebAssembly.

Agora, a partir do JavaScript, podemos criar uma memória com 1 página e passá-la. Isso resulta em "Hi" sendo impresso no console:

```js
const memory = new WebAssembly.Memory({ initial: 1 });

const importObject = {
  console: { log: consoleLogString },
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(fetch("logger2.wasm"), importObject).then(
  (obj) => {
    obj.instance.exports.writeHi();
  },
);
```

> **Nota:** Você pode encontrar a fonte completa no GitHub como [logger2.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger2.html) ([também veja ao vivo](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)).

### Tabelas WebAssembly

Para terminar este tour pelo formato de texto do WebAssembly, vamos dar uma olhada na parte mais complexa e muitas vezes confusa do WebAssembly: **tables**. As tabelas são basicamente matrizes redimensionáveis de referências que podem ser acessadas por índice do código WebAssembly.

Para ver por que as tabelas são necessárias, precisamos primeiro observar que a instrução `call` que vimos anteriormente (consulte [Chamando funções de outras funções no mesmo módulo](#calling_functions_from_other_functions_in_the_same_module)) usa um índice de função estático e, portanto, só pode chamar uma função - mas e se o callee for um valor de tempo de execução?

- Em JavaScript, vemos isso o tempo todo: funções são valores de primeira classe.
- Em C/C++, vemos isso com ponteiros de função.
- Em C++, vemos isso com funções virtuais.

O WebAssembly precisava de um tipo de instrução de chamada para conseguir isso, então demos a ela `call_indirect`, que recebe um operando de função dinâmica. O problema é que os únicos tipos que temos para dar operandos no WebAssembly são (atualmente) `i32`/`i64`/`f32`/`f64`.

WebAssembly poderia adicionar um tipo `anyfunc` ("qualquer" porque o tipo poderia conter funções de qualquer assinatura), mas infelizmente este tipo `anyfunc` não poderia ser armazenado na memória linear por razões de segurança. A memória linear expõe o conteúdo bruto de valores armazenados como bytes e isso permitiria que o conteúdo do Wasm observasse e corrompesse arbitrariamente os endereços de funções brutas, algo que não pode ser permitido na web.

A solução foi armazenar as referências de função em uma tabela e, em vez disso, passar os índices da tabela, que são apenas valores i32. O operando de `call_indirect` pode, portanto, ser um valor de índice i32.

#### Definindo uma tabela no Wasm

Então, como colocamos as funções Wasm em nossa tabela? Assim como as seções `data` podem ser usadas para inicializar regiões de memória linear com bytes, as seções `elem` podem ser usadas para inicializar regiões de tabelas com funções:

```wasm
(module
  (table 2 funcref)
  (elem (i32.const 0) $f1 $f2)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  ...
)
```

- Em `(table 2 funcref)`, o 2 é o tamanho inicial da tabela (ou seja, irá armazenar duas referências) e `funcref` declara que o tipo de elemento dessas referências é referência de função.
- As seções de funções (`func`) são como quaisquer outras funções declaradas do Wasm. Estas são as funções às quais vamos nos referir em nossa tabela (por exemplo, cada uma apenas retorna um valor constante). Observe que a ordem em que as seções são declaradas não importa aqui — você pode declarar suas funções em qualquer lugar e ainda se referir a elas em sua seção `elem`.
- A seção `elem` pode listar qualquer subconjunto das funções em um módulo, em qualquer ordem, permitindo duplicatas. Esta é uma lista das funções que devem ser referenciadas pela tabela, na ordem em que devem ser referenciadas.
- O valor `(i32.const 0)` dentro da seção `elem` é um deslocamento — isso precisa ser declarado no início da seção e especifica em qual índice na tabela as referências de função começam a ser preenchidas. Aqui especificamos 0 e um tamanho de 2 (veja acima), para que possamos preencher duas referências nos índices 0 e 1. Se quiséssemos começar a escrever nossas referências no deslocamento 1, teríamos que escrever `(i32.const 1)`, e o tamanho da tabela teria que ser 3.

> **Nota:** Os elementos não inicializados recebem um valor padrão de ativação.

Em JavaScript, as chamadas equivalentes para criar tal instância de tabela seriam mais ou menos assim:

```js
function () {
  // seção da tabela
  const tbl = new WebAssembly.Table({initial: 2, element: "anyfunc"});

  // seções de função:
  const f1 = ... /* alguma função WebAssembly importada */
  const f2 = ... /* alguma função WebAssembly importada */

  // seção de elementos
  tbl.set(0, f1);
  tbl.set(1, f2);
};
```

#### Usando a tabela

Seguindo em frente, agora que definimos a tabela, precisamos usá-la de alguma forma. Vamos usar esta seção de código para fazer isso:

```wasm
(type $return_i32 (func (result i32))) ;; se fosse f32, a verificação de tipo falharia
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- O bloco `(type $return_i32 (func (result i32)))` especifica um tipo, com um nome de referência. Esse tipo é usado ao executar a verificação de tipo das chamadas de referência de função de tabela posteriormente. Aqui estamos dizendo que as referências precisam ser funções que retornam um `i32` como resultado.
- Em seguida, definimos uma função que será exportada com o nome `callByIndex`. Isso levará um `i32` como parâmetro, que recebe o nome de argumento `$i`.
- Dentro da função, adicionamos um valor à pilha — qualquer valor que seja passado como parâmetro `$i`.
- Por fim, usamos `call_indirect` para chamar uma função da tabela — ela extrai implicitamente o valor de `$i` da pilha. O resultado líquido disso é que a função `callByIndex` invoca a função `$i`'th na tabela.

Você também pode declarar o parâmetro `call_indirect` explicitamente durante a chamada do comando em vez de antes dele, assim:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

Em uma linguagem mais expressiva e de nível superior, como JavaScript, você pode imaginar fazer a mesma coisa com uma matriz (ou provavelmente, mais provavelmente, um objeto) contendo funções. O pseudocódigo seria algo como `tbl[i]()`.

Então, de volta à verificação de tipos. Como o WebAssembly é verificado quanto ao tipo e o `funcref` pode ser potencialmente qualquer assinatura de função, temos que fornecer a assinatura presumida do callee no callsite, portanto, incluímos o tipo `$return_i32`, para informar ao programa que uma função que retorna um `i32` é esperada. Se o receptor não tiver uma assinatura correspondente (digamos que um `f32` seja retornado), um [`WebAssembly.RuntimeError`](/pt-BR/docs/WebAssembly/JavaScript_interface/RuntimeError) será lançado.

Então, o que liga `call_indirect` à tabela que estamos chamando? A resposta é que há apenas uma tabela permitida agora por instância do módulo, e é isso que `call_indirect` está chamando implicitamente. No futuro, quando várias tabelas forem permitidas, também precisaremos especificar um identificador de tabela de algum tipo, nos moldes de

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

O módulo completo se parece com isso e pode ser encontrado em nosso arquivo de exemplo [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.wat):

```wasm
(module
  (table 2 funcref)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  (elem (i32.const 0) $f1 $f2)
  (type $return_i32 (func (result i32)))
  (func (export "callByIndex") (param $i i32) (result i32)
    local.get $i
    call_indirect (type $return_i32))
)
```

Nós o carregamos em uma página da Web usando o seguinte JavaScript:

```js
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // retorna 42
  console.log(obj.instance.exports.callByIndex(1)); // retorna 13
  console.log(obj.instance.exports.callByIndex(2)); // retorna um erro, porque não há posição de índice 2 na tabela
});
```

> **Nota:** Você pode encontrar este exemplo no GitHub como [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.html) ([veja ao vivo também](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)).

> **Nota:** Assim como a memória, as tabelas também podem ser criadas a partir de JavaScript (consulte [`WebAssembly.Table()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Table)) bem como importadas de/para outro módulo Wasm.

### Tabelas mutantes e links dinâmicos

Como o JavaScript tem acesso total às referências de função, o objeto Tabela pode sofrer mutação do JavaScript usando os métodos [`grow()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Table/grow), [`get()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Table/get) e [`set()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Table/set). E o próprio código WebAssembly é capaz de manipular tabelas usando instruções adicionadas como parte de [Tipos de referência](#reference_types), como `table.get` e `table.set`.

Como as tabelas são mutáveis, elas podem ser usadas para implementar [esquemas de vinculação dinâmica] sofisticados de tempo de carregamento e tempo de execução (https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md). Quando um programa é vinculado dinamicamente, várias instâncias compartilham a mesma memória e tabela. Isso é simétrico para um aplicativo nativo onde vários `.dll`s compilados compartilham o espaço de endereço de um único processo.

Para ver isso em ação, criaremos um único objeto de importação contendo um objeto de memória e um objeto de tabela e passaremos esse mesmo objeto de importação para várias chamadas [`instantiate()`](/pt-BR/docs/WebAssembly/JavaScript_interface/instantiate).

Nossos exemplos de `.wat` são assim:

`shared0.wat`:

```wasm
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (elem (i32.const 0) $shared0func)
  (func $shared0func (result i32)
   i32.const 0
   i32.load)
)
```

`shared1.wat`:

```wasm
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (type $void_to_i32 (func (result i32)))
  (func (export "doIt") (result i32)
   i32.const 0
   i32.const 42
   i32.store  ;; store 42 at address 0
   i32.const 0
   call_indirect (type $void_to_i32))
)
```

Estes funcionam da seguinte forma:

1. A função `shared0func` é definida em `shared0.wat` e armazenada em nossa tabela importada.
2. Esta função cria uma constante contendo o valor `0`, e então usa o comando `i32.load` para carregar o valor contido no índice de memória fornecido. O índice fornecido é `0` — novamente, ele extrai implicitamente o valor anterior da pilha. Então `shared0func` carrega e retorna o valor armazenado no índice de memória `0`.
3. Em `shared1.wat`, exportamos uma função chamada `doIt` — esta função cria duas constantes contendo os valores `0` e `42`, então chama `i32.store` para armazenar um valor fornecido em um índice fornecido da memória importada. Novamente, ele extrai implicitamente esses valores da pilha, então o resultado é que ele armazena o valor `42` no índice de memória `0`,
4. Na última parte da função, criamos uma constante com valor `0`, então chamamos a função neste índice 0 da tabela, que é `shared0func`, armazenado lá anteriormente pelo bloco `elem` em `shared0.wat`.
5. Quando chamado, `shared0func` carrega o `42` que armazenamos na memória usando o comando `i32.store` em `shared1.wat`.

> **Nota:** As expressões acima novamente extraem valores da pilha implicitamente, mas você pode declará-los explicitamente dentro das chamadas de comando, por exemplo:
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

Depois de converter para assembly, usamos `shared0.wasm` e `shared1.wasm` em JavaScript por meio do seguinte código:

```js
const importObj = {
  js: {
    memory: new WebAssembly.Memory({ initial: 1 }),
    table: new WebAssembly.Table({ initial: 1, element: "anyfunc" }),
  },
};

Promise.all([
  WebAssembly.instantiateStreaming(fetch("shared0.wasm"), importObj),
  WebAssembly.instantiateStreaming(fetch("shared1.wasm"), importObj),
]).then((results) => {
  console.log(results[1].instance.exports.doIt()); // prints 42
});
```

Cada um dos módulos que está sendo compilado pode importar a mesma memória e objetos de tabela e, assim, compartilhar a mesma memória linear e "espaço de endereçamento" de tabela.

> **Nota:** Você pode encontrar este exemplo no GitHub como [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/shared-address-space.html) ([veja ao vivo também](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)).

## Operações de memória em massa

As operações de memória em massa são uma adição mais recente à linguagem (por exemplo, no [Firefox 79](/pt-BR/docs/Mozilla/Firefox/Releases/79)) — sete novas operações incorporadas são fornecidas para operações de memória em massa, como cópia e inicialização, para permitir que o WebAssembly modele funções nativas como `memcpy` e `memmove` de maneira mais eficiente e com melhor desempenho.

As novas operações são:

- `data.drop`: Descarta os dados em um segmento de dados.
- `elem.drop`: Descarta os dados em um segmento de elemento.
- `memory.copy`: Copia de uma região da memória linear para outra.
- `memory.fill`: Preenche uma região de memória linear com um determinado valor de byte.
- `memory.init`: Copia uma região de um segmento de dados.
- `table.copy`: Copia de uma região de uma tabela para outra.
- `table.init`: Copia uma região de um segmento de elemento.

> **Nota:** você pode encontrar mais informações na proposta [Operações de memória em massa e inicialização de segmento condicional](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md).

## Tipos

### Tipos de números

Atualmente, o WebAssembly tem quatro _number types_ disponíveis:

- `i32`: inteiro de 32 bits
- `i64`: inteiro de 64 bits
- `f32`: flutuante de 32 bits
- `f64`: flutuante de 64 bits

### Tipos de vetores

- `v128`: vetor de 128 bits de inteiro compactado, dados de ponto flutuante ou um único tipo de 128 bits.

### Tipos de referência

A [proposta de tipos de referência](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) (compatível com [Firefox 79](/pt-BR/docs/Mozilla/Firefox/Releases/79)) fornece dois recursos principais:

- Um novo tipo, `externref`, que pode conter _qualquer_ valor JavaScript, por exemplo, strings, referências DOM, objetos, etc. `externref` é opaco do ponto de vista do WebAssembly — um módulo Wasm não pode acessar e manipular esses valores e, em vez disso, pode apenas recebê-los e passá-los de volta. Mas isso é muito útil para permitir que os módulos Wasm chamem funções JavaScript, APIs DOM, etc., e geralmente para preparar o caminho para uma interoperabilidade mais fácil com o ambiente host. `externref` pode ser usado para tipos de valor e elementos de tabela.
- Uma série de novas instruções que permitem aos módulos Wasm manipular diretamente [tabelas WebAssembly](#webassembly_tables), em vez de ter que fazer isso por meio da API JavaScript.

> **Nota:** A documentação [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) contém algumas informações úteis sobre como aproveitar `externref` do Rust.

## WebAssembly de vários valores

Outra adição mais recente à linguagem (por exemplo, no [Firefox 78](/pt-BR/docs/Mozilla/Firefox/Releases/78)) é o valor múltiplo do WebAssembly, o que significa que as funções do WebAssembly agora podem retornar vários valores e as sequências de instruções podem consumir e produzir vários valores de pilha.

No momento da redação deste artigo (junho de 2020), isso está em um estágio inicial e as únicas instruções de vários valores disponíveis são chamadas para funções que retornam vários valores. Por exemplo:

```wasm
(module
  (func $get_two_numbers (result i32 i32)
    i32.const 1
    i32.const 2
  )
  (func (export "add_two_numbers") (result i32)
    call $get_two_numbers
    i32.add
  )
)
```

Mas isso abrirá caminho para tipos de instruções mais úteis e outras coisas além. Para uma descrição útil do progresso até agora e como isso funciona, consulte [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) por Nick Fitzgerald.

## Threads WebAssembly

WebAssembly Threads (compatível com [Firefox 79](/pt-BR/docs/Mozilla/Firefox/Releases/79) em diante) permite que objetos WebAssembly Memory sejam compartilhados entre várias instâncias WebAssembly em execução em Web Workers separados, da mesma forma que [`SharedArrayBuffer`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)s em JavaScript. Isso permite uma comunicação muito rápida entre os trabalhadores e ganhos significativos de desempenho em aplicativos da web.

A proposta de threads tem duas partes, memórias compartilhadas e acessos à memória atômica.

### Memórias compartilhadas

Conforme descrito acima, você pode criar objetos WebAssembly [`Memory`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory) compartilhados, que podem ser transferidos entre os contextos Window e Worker usando [`postMessage()`](/pt-BR/docs/Web/API/Window/postMessage), da mesma forma que um [`SharedArrayBuffer`](/pt-BR/docs/Web/JavaScript/ Referência/Global_Objects/SharedArrayBuffer).

No lado da API JavaScript, o objeto de inicialização do construtor [`WebAssembly.Memory()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory/Memory) agora tem uma propriedade `shared`, que quando definida como `true` criará uma memória compartilhada:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

a propriedade [`buffer`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory/buffer) da memória agora retornará um `SharedArrayBuffer`, em vez do `ArrayBuffer` usual:

```js
memory.buffer; // retorna SharedArrayBuffer
```

No formato de texto, você pode criar uma memória compartilhada usando a palavra-chave `shared`, assim:

```wasm
(memory 1 2 shared)
```

Ao contrário das memórias não compartilhadas, as memórias compartilhadas devem especificar um tamanho "máximo", tanto no construtor da API JavaScript quanto no formato de texto Wasm.

> **Nota:** Você pode encontrar muito mais detalhes na [Proposta de encadeamento para WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md).

### Acessos à memória atômica

Várias novas instruções Wasm foram adicionadas e podem ser usadas para implementar recursos de nível superior, como mutexes, variáveis de condição etc. Estas instruções são permitidas em memórias não compartilhadas a partir do Firefox 80.

> **Nota:** A [página de suporte do Emscripten Pthreads](https://emscripten.org/docs/porting/pthreads.html) mostra como aproveitar essa nova funcionalidade do Emscripten.

## Resumo

Isso encerra nosso tour de alto nível pelos principais componentes do formato de texto WebAssembly e como eles são refletidos na API WebAssembly JS.

## Veja também

- A principal coisa que não foi incluída é uma lista abrangente de todas as instruções que podem ocorrer em corpos de função. Veja a [semântica do WebAssembly](https://webassembly.github.io/spec/core/exec/index.html) para um tratamento de cada instrução.
- Veja também a [gramática do formato de texto](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax) que é implementada pelo interpretador de especificações.
