---
title: Usando a API JavaScript WebAssembly
slug: WebAssembly/Using_the_JavaScript_API
---

{{WebAssemblySidebar}}

Se você já [compilou um módulo de outra linguagem usando ferramentas como Emscripten](/pt-BR/docs/WebAssembly/C_to_Wasm) ou [carregou e executou o código você mesmo](/pt-BR/docs/WebAssembly/Loading_and_running), a próxima etapa é aprender mais sobre como usar os outros recursos da API JavaScript WebAssembly. Este artigo ensina o que você precisa saber.

> **Nota:** Se você não estiver familiarizado com os conceitos básicos mencionados neste artigo e precisar de mais explicações, leia [Conceitos do WebAssembly](/pt-BR/docs/WebAssembly/Concepts) primeiro e depois volte.

## Alguns exemplos simples

Vamos percorrer alguns exemplos que explicam como usar a API WebAssembly JavaScript e como usá-la para carregar um módulo Wasm em uma página da web.

> **Nota:** você pode encontrar o código de exemplo em nosso [webassembly-examples](https://github.com/mdn/webassembly-examples) repositório do GitHub.

### Preparando o exemplo

1. Primeiro precisamos de um módulo Wasm! Pegue nosso arquivo [`simple.wasm`](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) e salve uma cópia em um novo diretório em seu local máquina.
2. Em seguida, vamos criar um arquivo HTML simples chamado `index.html` no mesmo diretório do seu arquivo Wasm (pode usar nosso [modelo simples](https://github.com/mdn/webassembly-examples/blob/master/template/template.html) se você não tiver um facilmente disponível).
3. Agora, para nos ajudar a entender o que está acontecendo aqui, vamos ver a representação de texto do nosso módulo Wasm (que também encontramos em [Converting WebAssembly format to Wasm](/pt-BR/docs/WebAssembly/Text_format_to_Wasm#a_first_look_at_the_text_format)):

   ```wasm
   (module
     (func $i (import "imports" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. Na segunda linha, você verá que a importação tem um namespace de dois níveis — a função interna `$i` é importada de `imports.imported_func`. Precisamos refletir esse namespace de dois níveis em JavaScript ao escrever o objeto a ser importado para o módulo Wasm. Crie um elemento `<script></script>` em seu arquivo HTML e adicione o seguinte código a ele:

   ```js
   const importObject = {
     imports: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Transmitindo o módulo WebAssembly

Uma novidade no Firefox 58 é a capacidade de compilar e instanciar módulos WebAssembly diretamente de fontes subjacentes. Isso é obtido usando [`WebAssembly.compileStreaming()`](/pt-BR/docs/WebAssembly/JavaScript_interface/compileStreaming) e [`WebAssembly.instantiateStreaming()`](/pt-BR/docs/WebAssembly/JavaScript_interface/instantiateStreaming). Esses métodos são mais fáceis do que suas contrapartes sem streaming, porque eles podem transformar o código de byte diretamente em instâncias `Module`/`Instance`, eliminando a necessidade de colocar separadamente o {{domxref("Response")}} em um {{jsxref("ArrayBuffer")}}.

Este exemplo (consulte nossa demonstração [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) no GitHub e [visualize it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) também) mostra como usar `instantiateStreaming()` para buscar um módulo Wasm, importar uma função JavaScript nele, compilá-lo e instanciá-lo e acessar sua função exportada - tudo em uma única etapa.

Adicione o seguinte ao seu script, abaixo do primeiro bloco:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

O resultado disso é que chamamos nossa função WebAssembly exportada `exported_func`, que por sua vez chama nossa função JavaScript importada `imported_func`, que registra o valor fornecido dentro da instância WebAssembly (42) no console. Se você salvar seu código de exemplo agora e carregá-lo em um navegador compatível com WebAssembly, verá isso em ação!

> **Nota:** Este é um exemplo complicado e prolixo que alcança muito pouco, mas serve para ilustrar o que é possível — usar código WebAssembly juntamente com JavaScript em seus aplicativos da web. Como dissemos em outro lugar, o WebAssembly não pretende substituir o JavaScript; os dois, em vez disso, podem trabalhar juntos aproveitando os pontos fortes um do outro.

### Carregando nosso módulo Wasm sem streaming

Se você não pode ou não quer usar os métodos de streaming descritos acima, você pode usar os métodos sem streaming [`WebAssembly.compile()`](/pt-BR/docs/WebAssembly/JavaScript_interface/compile) / [`WebAssembly.instantiate()`](/pt-BR/docs/WebAssembly/JavaScript_interface/instantiate) em vez disso.

Esses métodos não acessam diretamente o código de byte, então requerem uma etapa extra para transformar a resposta em um {{jsxref("ArrayBuffer")}} antes de compilar/instanciar o módulo Wasm.

O código equivalente ficaria assim:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Como visualizar o Wasm nas ferramentas do desenvolvedor

No Firefox 54+, o painel do depurador da ferramenta do desenvolvedor tem funcionalidade para expor a representação de texto de qualquer código Wasm incluído em uma página da web. Para visualizá-lo, você pode ir ao Painel do Depurador e clicar na entrada "wasm://".

![Painel do depurador de ferramentas do desenvolvedor destacando um módulo.](wasm-debug.png)

Além de visualizar o WebAssembly como texto, os desenvolvedores podem depurar (colocar pontos de interrupção, inspecionar a pilha de chamadas, passo único, etc.) WebAssembly usando o formato de texto.

## Memória

No modelo de memória de baixo nível do WebAssembly, a memória é representada como um intervalo contíguo de bytes não digitados chamados [Linear Memory](https://webassembly.github.io/spec/core/exec/index.html) que são lidos e escrito por [instruções de carregamento e armazenamento](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) dentro do módulo. Nesse modelo de memória, qualquer load ou store pode acessar qualquer byte em toda a memória linear, o que é necessário para representar fielmente conceitos C/C++ como ponteiros.

Ao contrário de um programa C/C++ nativo, no entanto, onde o intervalo de memória disponível abrange todo o processo, a memória acessível por uma Instância WebAssembly específica é confinada a um intervalo específico — potencialmente muito pequeno — contido por um objeto WebAssembly Memory. Isso permite que um único aplicativo da Web use várias bibliotecas independentes — cada uma delas usando o WebAssembly internamente — para ter memórias separadas totalmente isoladas umas das outras. Além disso, implementações mais recentes também podem criar [memórias compartilhadas](/pt-BR/docs/WebAssembly/Understanding_the_text_format#shared_memories), que podem ser transferidas entre os contextos Window e Worker usando [`postMessage()`](/pt-BR/docs/Web/API/Window/postMessage) e usadas em vários lugares.

Em JavaScript, uma instância de Memory pode ser considerada como um [`ArrayBuffer`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) redimensionável (ou [`SharedArrayBuffer`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), no caso de memórias compartilhadas) e, assim como com `ArrayBuffers`, um único aplicativo da web pode criar muitos objetos Memory independentes. Você pode criar um usando o construtor [`WebAssembly.Memory()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory), que recebe como argumentos um tamanho inicial e (opcionalmente) um tamanho máximo e um `shared` propriedade que informa se é uma memória compartilhada ou não.

Vamos começar a explorar isso observando um exemplo rápido.

1. Crie outra nova página HTML simples (copie nosso [modelo simples](https://github.com/mdn/webassembly-examples/blob/master/template/template.html)) e chame-a de `memory.html`. Adicione um elemento `<script></script>` à página.
2. Agora adicione a seguinte linha ao topo do seu script, para criar uma instância de memória:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   A unidade de `initial` e `maximum` são as páginas WebAssembly — elas são fixadas em 64KB de tamanho. Isso significa que a instância de memória acima tem um tamanho inicial de 640 KB e um tamanho máximo de 6,4 MB.

   A memória WebAssembly expõe seus bytes fornecendo um getter/setter de buffer que retorna um ArrayBuffer. Por exemplo, para escrever 42 diretamente na primeira palavra da memória linear, você pode fazer isso:

   ```js
   new Uint32Array(memory.buffer)[0] = 42;
   ```

   Você pode retornar o mesmo valor usando:

   ```js
   new Uint32Array(memory.buffer)[0];
   ```

3. Tente isso agora em sua demonstração — salve o que você adicionou até agora, carregue-o em seu navegador e tente inserir as duas linhas acima em seu console JavaScript.

### Aumentando a memória

Uma instância de memória pode ser aumentada por chamadas para [`Memory.prototype.grow()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory/grow), onde novamente o argumento é especificado em unidades de páginas WebAssembly:

```js
memory.grow(1);
```

Se um valor máximo foi fornecido na criação da instância de memória, as tentativas de ultrapassar esse máximo gerarão uma exceção {{jsxref("RangeError")}}. O mecanismo aproveita esses limites superiores fornecidos para reservar memória antecipadamente, o que pode tornar o redimensionamento mais eficiente.

Nota: Como o byteLength de um {{jsxref("ArrayBuffer")}} é imutável, após um [`Memory.prototype.grow()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory/grow) bem-sucedido operação, o buffer getter retornará um novo objeto ArrayBuffer (com o novo byteLength) e quaisquer objetos ArrayBuffer anteriores serão "desconectados" ou desconectados da memória subjacente para a qual apontaram anteriormente.

Assim como as funções, as memórias lineares podem ser definidas dentro de um módulo ou importadas. Da mesma forma, um módulo também pode, opcionalmente, exportar sua memória. Isso significa que o JavaScript pode obter acesso à memória de uma instância do WebAssembly criando um novo `WebAssembly.Memory` e transmitindo-o como uma importação ou recebendo uma exportação de memória (através de [`Instance.prototype.exports`](/pt-BR/docs/WebAssembly/JavaScript_interface/Instance/exports)).

### Exemplo de memória mais envolvida

Vamos tornar as afirmações acima mais claras observando um exemplo de memória mais envolvido — um módulo WebAssembly que importa a instância de memória que definimos anteriormente, a preenche com uma matriz de inteiros e os soma. Você pode encontrar isso em [memory.wasm.](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm)

1. faça uma cópia local de `memory.wasm` no mesmo diretório de antes.

   > **Nota:** você pode ver a representação de texto do módulo em [memory.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.wat).

2. Volte para seu arquivo de exemplo `memory.html` e busque, compile e instancie seu módulo Wasm como antes — adicione o seguinte ao final de seu script:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // adicione o código aqui
   });
   ```

3. Como este módulo exporta sua memória, dada uma instância deste módulo chamada instance podemos usar uma função exportada `accumulate()` para criar e preencher um array de entrada diretamente na memória linear da instância do módulo (`mem`). Adicione o seguinte em seu código, onde indicado:

   ```js
   const i32 = new Uint32Array(memory.buffer);

   for (let i = 0; i < 10; i++) {
     i32[i] = i;
   }

   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Observe como criamos a visualização {{jsxref("Uint32Array")}} no buffer do objeto Memory ([`Memory.prototype.buffer`](/pt-BR/docs/WebAssembly/JavaScript_interface/Memory/buffer)), não na própria Memória.

As importações de memória funcionam exatamente como as importações de função, apenas objetos de memória são passados como valores em vez de funções JavaScript. As importações de memória são úteis por dois motivos:

- Eles permitem que o JavaScript busque e crie o conteúdo inicial da memória antes ou simultaneamente com a compilação do módulo.
- Eles permitem que um único objeto de memória seja importado por várias instâncias de módulo, o que é um bloco de construção crítico para implementar a vinculação dinâmica no WebAssembly.

> **Nota:** Você pode encontrar nossa demonstração completa em [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) ([veja ao vivo também](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) .

## Tabelas

Uma tabela WebAssembly é uma matriz redimensionável de [referências](<https://en.wikipedia.org/wiki/Reference_(computer_science)>) que pode ser acessada por código JavaScript e WebAssembly. Embora a memória forneça uma matriz digitada redimensionável de bytes brutos, não é seguro que as referências sejam armazenadas em uma memória, pois uma referência é um valor confiável do mecanismo cujos bytes não devem ser lidos ou gravados diretamente pelo conteúdo por motivos de segurança, portabilidade e estabilidade .

As tabelas possuem um tipo de elemento, que limita os tipos de referência que podem ser armazenados na tabela. Na iteração atual do WebAssembly, há apenas um tipo de referência necessária para o código do WebAssembly — funções — e, portanto, apenas um tipo de elemento válido. Em iterações futuras, mais tipos de elementos serão adicionados.

Referências de função são necessárias para compilar linguagens como C/C++ que possuem ponteiros de função. Em uma implementação nativa de C/C++, um ponteiro de função é representado pelo endereço bruto do código da função no espaço de endereço virtual do processo e, portanto, pelas razões de segurança mencionadas acima, não pode ser armazenado diretamente na memória linear. Em vez disso, as referências de função são armazenadas em uma tabela e seus índices, que são inteiros e podem ser armazenados na memória linear, são passados.

Quando chega a hora de chamar um ponteiro de função, o chamador do WebAssembly fornece o índice, que pode então ter limites de segurança verificados na tabela antes de indexar e chamar a referência de função indexada. Assim, as tabelas são atualmente um primitivo de baixo nível usado para compilar recursos de linguagem de programação de baixo nível com segurança e portabilidade.

Tabelas podem ser modificadas via [`Table.prototype.set()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Table/set), que atualiza um dos valores em uma tabela, e [`Table.prototype.grow()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Table/grow), que aumenta o número de valores que podem ser armazenados em uma tabela. Isso permite que o conjunto de funções que podem ser chamadas indiretamente mude com o tempo, o que é necessário para [técnicas de vinculação dinâmica](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md). As mutações são imediatamente acessíveis via [`Table.prototype.get()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Table/get) em JavaScript e para módulos Wasm.

### Um exemplo de tabela

Vejamos um exemplo de tabela simples — um módulo WebAssembly que cria e exporta uma tabela com dois elementos: o elemento 0 retorna 13 e o elemento 1 retorna 42. Você pode encontrar isso em [table.wasm](https://raw.githubusercontent. com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Faça uma cópia local de `table.wasm` em um novo diretório.

   > **Nota:** você pode ver a representação de texto do módulo em [table.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat).

2. Crie uma nova cópia do nosso [modelo HTML](https://github.com/mdn/webassembly-examples/blob/master/template/template.html) no mesmo diretório e chame-o de `table.html`.
3. Como antes, busque, compile e instancie seu módulo Wasm — adicione o seguinte a um elemento {{htmlelement("script")}} na parte inferior do corpo do HTML:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // adicione o código aqui
   });
   ```

4. Agora vamos acessar os dados nas tabelas — adicione as seguintes linhas ao seu código no local indicado:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Este código acessa cada referência de função armazenada na tabela por sua vez e as instâncias para imprimir os valores que contêm no console — observe como cada referência de função é recuperada com um [`Table.prototype.get()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Table/get), adicionamos um conjunto extra de parênteses no final para realmente invocar a função.

> **Nota:** você pode encontrar nossa demonstração completa em [table.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html) ([veja ao vivo também](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globais

O WebAssembly tem a capacidade de criar instâncias de variáveis globais, acessíveis a partir de JavaScript e importáveis/exportáveis em uma ou mais instâncias [`WebAssembly.Module`](/pt-BR/docs/WebAssembly/JavaScript_interface/Module). Isso é muito útil, pois permite a vinculação dinâmica de vários módulos.

Para criar uma instância global WebAssembly de dentro do seu JavaScript, você usa o construtor [`WebAssembly.Global()`](/pt-BR/docs/WebAssembly/JavaScript_interface/Global), que se parece com isto:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Você pode ver que isso requer dois parâmetros:

- Um objeto que contém duas propriedades que descrevem a variável global:

  - `value`: seu tipo de dados, que pode ser qualquer tipo de dados aceito nos módulos WebAssembly — `i32`, `i64`, `f32` ou `f64`.
  - `mutável`: um booleano que define se o valor é mutável ou não.

- Um valor contendo o valor real da variável. Pode ser qualquer valor, desde que seu tipo corresponda ao tipo de dados especificado.

Então, como usamos isso? No exemplo a seguir, definimos um global como um tipo `i32` mutável, com valor 0.

O valor do global é então alterado, primeiro para `42` usando a propriedade `Global.value`, e então para 43 usando a função `incGlobal()` exportada do módulo `global.wasm` (isso adiciona 1 a qualquer valor que lhe for atribuído e, em seguida, retorna o novo valor).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCESSO! Obteve: ${got}<br>`
      : `FALHA!<br>Obteve: ${got}<br>Esperado: ${expected}<br>`;
  output.innerHTML += `Testando ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq("obtendo valor inicial de wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq(
      "obtendo valor atualizado por JS do wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("obtendo valor atualizado de JS", global.value, 43);
  },
);
```

> **Nota:** Você pode ver o exemplo [executando ao vivo no GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); consulte também o [código-fonte](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html).

## Multiplicidade

Agora que demonstramos o uso dos principais blocos de construção do WebAssembly, este é um bom lugar para mencionar o conceito de multiplicidade. Isso fornece ao WebAssembly uma infinidade de avanços em termos de eficiência arquitetônica:

- Um módulo pode ter N instâncias, da mesma forma que um literal de função pode produzir N valores de fechamento.
- Uma instância de módulo pode usar instâncias de memória 0–1, que fornecem o "espaço de endereço" da instância. Versões futuras do WebAssembly podem permitir instâncias de memória 0–N por instância de módulo (consulte [Múltiplas memórias](https://webassembly.org/roadmap/)).
- Uma instância de módulo pode usar instâncias de tabela 0–1 — este é o "espaço de endereço de função" da instância, usado para implementar ponteiros de função C. Versões futuras do WebAssembly podem permitir 0–N instâncias de tabela por instância de módulo.
- Uma instância de memória ou tabela pode ser usada por instâncias de módulo 0–N — todas essas instâncias compartilham o mesmo espaço de endereço, permitindo [vinculação dinâmica](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md).

Você pode ver a multiplicidade em ação em nosso artigo Compreendendo o formato de texto — consulte a [seção Tabelas mutantes e vinculação dinâmica](/pt-BR/docs/WebAssembly/Understanding_the_text_format#mutating_tables_and_dynamic_linking).

## Resumo

Este artigo apresentou os fundamentos do uso da API WebAssembly JavaScript para incluir um módulo WebAssembly em um contexto JavaScript e fazer uso de suas funções e como usar a memória e as tabelas do WebAssembly em JavaScript. Também tocamos no conceito de multiplicidade.

## Veja também

- [webassembly.org](https://webassembly.org/)
- [Conceitos do WebAssembly](/pt-BR/docs/WebAssembly/Concepts)
- [WebAssembly no Mozilla Research](https://research.mozilla.org/)
