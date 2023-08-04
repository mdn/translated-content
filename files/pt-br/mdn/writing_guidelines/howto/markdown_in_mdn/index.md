---
title: Como escrever em Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
---

{{MDNSidebar}}

Esta página descreve como usamos Markdown para escrever documentação sobre MDN Web Docs. Escolhemos o GitHub-Flavored Markdown (GFM) como linha de base e adicionamos algumas extensões para oferecer suporte a algumas das coisas que precisamos fazer no MDN que não são prontamente suportadas no GFM.

## Linha de base: Markdown GitHub-Flavored

A linha de base para o MDN Markdown é GitHub-Flavored Markdown (GFM): <https://github.github.com/gfm/>. Isso significa que você pode consultar a especificação GFM para qualquer coisa não especificada explicitamente nesta página. O GFM, por sua vez, é um superconjunto do CommonMark ([https://spec.commonmark.org/](https://spec.commonmark.org/)).

## Links

A especificação GFM define dois tipos básicos de liks:

- [links inline](https://github.github.com/gfm/#inline-link), em que o destino é dado imediatamente após o texto do link
- [links de referência](https://github.github.com/gfm/#reference-link), em que o destino é definido em outra parte do documento.

No MDN, permitimos apenas links embutidos.

Esta é a maneira correta de escrever links GFM no MDN:

```md example-good
[Macarons](https://en.wikipedia.org/wiki/Macaron) são deliciosos, mas difíceis de fazer.
```

Esta é uma maneira incorreta de escrever links no MDN:

```md example-bad
[Macarons][macaron] são deliciosos, mas difíceis de fazer.

[macarrão]: https://en.wikipedia.org/wiki/Macaron
```

## Blocos de código de exemplo

No GFM e no CommonMark, os autores podem usar "cercas de código" para demarcar blocos `<pré>`. A cerca de código de abertura pode ser seguida por algum texto chamado "string de informações". A especificação afirma o seguinte:

> A primeira palavra da string de informações é normalmente usada para especificar o idioma do exemplo de código e renderizada no atributo class da tag de código.

É permitido que a string de informações contenha várias palavras, como:

````plain
```fee fi fo fum
// algum código de exemplo
```
````

No MDN, os escritores usarão cercas de código, por exemplo, blocos de código. Eles devem especificar o idioma do exemplo de código usando a primeira palavra da string de informações e isso será usado para fornecer realce de sintaxe para o bloco. As seguintes palavras são suportadas:

- Linguagens de programação
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C-like
    - `c` - C
    - `cpp` - C++
    - `cs` - C#
    - `java` - Java
    - `clike` - C-like (para qualquer linguagem C-like não definida)
  - Outras
    - `python` - Python
    - `php` - PHP
    - `rust` - Rust
    - `glsl` - GLSL (OpenGL Shaders)
    - `wasm` - WebAssembly
- Estilo
  - `css` - CSS
  - `scss` - Sass (SCSS)
  - `less` - Less
- Marcação
  - `html` - HTML
  - `svg` - SVG
  - `xml` - XML
  - `mathml` - MathML
  - `md` - Markdown
- Prompts de comando
  - `sh` - Bash/Shell
  - `batch` - Lote (Windows Shell)
  - `powershell` - PowerShell
- Arquivos de configuração/dados
  - `json` - JSON
  - `ini` - INI
  - `yaml` - YAML
  - `toml` - TOML
  - `sql` - Banco de Dados SQL
  - `diff` - arquivo de diferenças
  - `ignore` - arquivo Gitignore
- Outro
  - `http` - cabeçalhos HTTP
  - `pug` - [modelos Pug](https://pugjs.org/api/getting-started.html) (que pode ser usado por [Express](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer))
  - `regex` - Regex
  - `uri` - URIs e URLs

Por exemplo:

````plain
```js
const greeting = 'Receberei realce de sintaxe JavaScript';
```
````

Se o realce que você deseja usar não estiver listado acima, você deve marcar o bloco de código como `plain`.
Idiomas adicionais podem ser solicitados no processo [discutido no GitHub](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366).

### Supressão de regras de lint

Os escritores podem adicionar um sufixo `-nolint` a qualquer um dos identificadores de idioma:

````plain
```html-nolint
<p>
Eu não estou sujeito às regras de lint.
</p>
```
````

Blocos de código como este obterão realce de sintaxe apropriado e serão reconhecidos pelo sistema de amostra ao vivo, mas serão ignorados por linters ou formatadores automáticos como o Prettier. Os autores devem usar este sufixo para mostrar código inválido ou formatação alternativa que linters ou formatadores não devem corrigir.

### Palavras adicionais

Os escritores poderão fornecer qualquer uma das seguintes palavras adicionais, que devem vir após a palavra do idioma:

- `example-good`: estilize este exemplo como um bom exemplo (um a seguir)
- `example-bad`: estilize este exemplo como um exemplo ruim (a ser evitado)
- `hidden`: não renderiza este bloco de código na página. Isso é para uso em amostras ao vivo.

Por exemplo:

````plain
```js example-good
const greeting = "Sou um bom exemplo";
```

```js example-bad
const greeting ="Eu sou um mau exemplo";
```
````

Estes serão renderizados como:

```js example-good
const greeting = "Sou um bom exemplo";
```

```js example-bad
const greeting = "Eu sou um mau exemplo";
```

### Referência de discussão

Este problema foi resolvido em:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Notas, avisos e textos explicativos

Às vezes, os escritores querem chamar atenção especial para um conteúdo. Para fazer isso, eles usarão um GFM blockquote com um primeiro parágrafo especial. Existem três tipos deles: notas, avisos e textos explicativos.

- Para adicionar uma nota, crie um blockquote GFM cujo primeiro parágrafo comece com `**Nota:**`.
- Para adicionar um aviso, crie um blockquote GFM cujo primeiro parágrafo comece com `**Aviso:**`.
- Para adicionar um texto explicativo, crie um blockquote GFM cujo primeiro parágrafo comece com `**Observação:**`.

Notas e avisos renderizarão o texto **Nota:** ou **Aviso:** na saída, enquanto as chamadas não. Isso torna as chamadas uma boa opção quando um autor deseja fornecer um título personalizado.

O processamento da marcação funciona no AST que ela produz, não nos caracteres exatos fornecidos. Isso significa que fornecer `<strong>Nota:</strong>` também gerará uma nota. No entanto, a sintaxe Markdown é necessária por uma questão de estilo.

Múltiplas linhas são produzidas por uma linha de citação de bloco vazia da mesma forma que parágrafos normais. Além disso, várias linhas sem espaço também são tratadas como linhas Markdown normais e concatenadas.

O blockquote pode conter blocos de código ou outros elementos de bloco.

Como o texto "Nota:" ou "Aviso:" também aparece na saída renderizada, ele deve ser sensível às traduções. Na prática, isso significa que cada localidade suportada pelo MDN deve fornecer sua própria tradução dessas strings, e a plataforma deve reconhecê-las como indicando que a construção precisa de tratamento especial.

### Exemplos

#### Observação

```plain
> **Nota:** é assim que você escreve uma nota.
>
> Pode ter várias linhas.
```

Isso produzirá o seguinte HTML:

```html
<div class="notecard note">
  <p><strong>Nota:</strong> é assim que você escreve uma nota.</p>
  <p>Pode ter várias linhas.</p>
</div>
```

Este HTML será renderizado como uma caixa destacada:

> **Nota:** é assim que você escreve uma nota.
>
> Pode ter várias linhas.

#### Avisos

```plain
> **Aviso:** é assim que você escreve um aviso.
>
> Pode ter vários parágrafos.
```

Isso produzirá o seguinte HTML:

```html
<div class="notecard warning">
  <p><strong>Aviso:</strong> é assim que você escreve um aviso.</p>
  <p>Pode ter vários parágrafos.</p>
</div>
```

Este HTML será renderizado como uma caixa destacada:

> **Aviso:** é assim que você escreve um aviso.
>
> Pode ter vários parágrafos.

#### Chamadas

```plain
> **Observação:** **É assim que você escreve uma chamada.**
>
> Pode ter vários parágrafos.
```

Isso produzirá o seguinte HTML:

```html
<div class="callout">
  <p><strong>É assim que você escreve uma frase de destaque.</strong></p>
  <p>Pode ter vários parágrafos.</p>
</div>
```

Este HTML será renderizado como uma caixa destacada:

> **Observação:**
>
> **É assim que você escreve uma frase de destaque.**
>
> Pode ter vários parágrafos.

#### Aviso traduzido

Por exemplo, se quisermos usar "Warnung" para "Warning" em alemão, nas páginas em alemão, escreveríamos:

```plain
> **Warnung:** So schreibt man eine Warnung.
```

E isso produzirá:

```html
<div class="notecard warning">
  <p><strong>Warnung:</strong> So schreibt man eine Warnung.</p>
</div>
```

#### Nota contendo um bloco de código

Este exemplo contém um bloco de código.

````plain
> **Nota:** é assim que você escreve uma nota.
>
> Pode conter blocos de código.
>
> ```js
> const s = "Estou em um bloco de código";
> ```
> Assim.
````

Isso produzirá o seguinte HTML:

```html
<div class="notecard note">
  <p><strong>Nota:</strong> é assim que você escreve uma nota.</p>
  <p>Pode conter blocos de código.</p>
  <pre class="brush: js">const s = "Estou em um bloco de código";</pre>
  <p>Assim.</p>
</div>
```

Este HTML será renderizado como um bloco de código:

> **Nota:** é assim que você escreve uma nota.
>
> Pode conter blocos de código.
>
> ```js
> const s = "Estou em um bloco de código";
> ```
>
> Assim.

### Referência de discussão

Este problema foi resolvido em <https://github.com/mdn/content/issues/3483>.

## Listas de definição

Para criar listas de definição em MDN, os autores escrevem uma forma modificada de uma lista não ordenada GFM ({{HTMLElement("ul")}}). Nesta forma:

- O GFM `<ul>` contém qualquer número de elementos GFM `<li>` de nível superior.
- Cada um desses elementos GFM `<li>` de nível superior deve conter, como seu elemento final, um elemento GFM `<ul>`.
- Este `<ul>` aninhado final deve conter um único elemento GFM `<li>`, cujo conteúdo de texto deve começar com ": " (dois pontos seguido por um espaço). Este elemento pode conter elementos de bloco, incluindo parágrafos, blocos de código, listas incorporadas e notas.

Cada um desses elementos GFM `<li>` de nível superior será transformado em um par `<dt>`/`<dd>`, como segue:

- O elemento GFM `<li>` de nível superior será analisado como um elemento GFM `<li>` e seu conteúdo interno incluirá o conteúdo do `<dt>`, exceto para o `<ul>` aninhado final , que não será incluído no `<dt>`.
- O elemento `<li>` no aninhado final `<ul>` será analisado como um elemento GFM `<li>` e seu conteúdo interno incluirá o conteúdo do `<dd>`, exceto para o " : ", que será descartado.

Por exemplo, este é um `<dl>`:

````plain
- term1
    - : Minha descriçãodo termo1

- `termo2`
    - : Minha descrição do term2

      Pode ter vários parágrafos e blocos de código também:

      ```js
      const coisa = 1;
      ```
````

No GFM/CommonMark, isso produziria o seguinte HTML:

```html
<ul>
  <li>
    <p>term1</p>
    <ul>
      <li>: Minha descrição do term1</li>
    </ul>
  </li>
  <li>
    <p><code>termo2</code></p>
    <ul>
      <li>
        <p>: Minha descrição do term2</p>
        <p>Ele pode ter vários parágrafos e blocos de código também:</p>
        <pré>
          <code class="brush: js">coisa const = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

No MDN, isso produziria o seguinte HTML:

```html
<dl>
  <dt>
    <p>term1</p>
  </dt>
  <dd>Minha descrição do term1</dd>
  <dt>
    <p><code>termo2</code></p>
  </dt>
  <dd>
    <p>Minha descrição do term2</p>
    <p>Ele pode ter vários parágrafos e blocos de código também:</p>
    <pré>
       <code class="brush: js">coisa const = 1;</code>
    </pre>
  </dd>
</dl>
```

As listas de definição escritas usando esta sintaxe devem consistir em pares de elementos `<dt>`/`<dd>`. Usando esta sintaxe, não é possível escrever uma lista com mais de um elemento `<dt>` consecutivo ou mais de um elemento `<dd>` consecutivo: o parser tratará isso como um erro. Esperamos que quase todas as listas de definição no MDN funcionem com essa limitação e, para aquelas que não funcionam, os autores podem recorrer ao HTML bruto.

Como solução alternativa para os casos em que um autor precisa associar vários itens `<dt>` a um único `<dd>`, considere fornecê-los como um único `<dt>` que contém vários termos, separados por vírgulas, como este:

```plain
- `param1`, `param2`, `param3`
    - : Minha descrição dos parâmetros 1, 2 e 3
```

A justificativa para a sintaxe descrita aqui é que ela funciona bem o suficiente com ferramentas que esperam CommonMark (por exemplo, visualizações Prettier ou GitHub) enquanto é razoavelmente fácil de escrever e analisar.

### Referência de discussão

Este problema foi resolvido em <https://github.com/mdn/content/issues/4367>.

## Tabelas

No GFM (mas não no CommonMark), há uma sintaxe para tabelas: <https://github.github.com/gfm/#tables-extension->. Faremos uso disso, mas:

- A sintaxe GFM suporta apenas um subconjunto dos recursos disponíveis em HTML. Se você precisar usar recursos de tabela que não são suportados no GFM, use HTML para a tabela.
- Se a representação GFM da tabela tiver mais de 150 caracteres de largura, use HTML para a tabela.
- Oferecemos suporte a um tipo especial de tabela chamada "tabela de propriedades", que possui sua própria classe CSS e, portanto, é sempre HTML.

Portanto, o princípio geral é que os autores devem usar a sintaxe GFM Markdown quando puderem e recorrer ao HTML bruto quando necessário ou quando o HTML for mais legível. Para obter mais informações, consulte [Quando usar tabelas HTML](#when_to_use_html_tables).

### Estilo de sintaxe da tabela GFM

Na sintaxe da tabela GFM, os autores podem omitir os tubos iniciais e finais das linhas. Os autores de MDN devem incluir esses pipes, para fins de legibilidade.

Ou seja, os autores MDN devem usar este estilo:

```plain
| Título 1 | Título 2 | Título 3 |
|----------|----------|----------|
| célula 1 | célula 2 | célula 3 |
| célula 4 | célula 5 | célula 6 |
```

e não este estilo:

```plain
Título 1 | Título 2 | Título 3
 ------- | -------- | --------
célula 1 | célula 2 | célula 3
célula 4 | célula 5 | célula 6
```

### Quando usar tabelas HTML

Existem três circunstâncias principais nas quais os autores devem usar tabelas HTML em vez da sintaxe GFM:

1. A tabela usa recursos que não são suportados no GFM.
2. A tabela GFM seria muito larga para ser legível.
3. O autor deseja um tipo especial de tabela chamada "tabela de propriedades".

#### Recursos de tabela que não são suportados no GFM

As principais limitações da sintaxe da tabela GFM são:

- As tabelas GFM devem ter uma linha de cabeçalho.
- As tabelas GFM podem não ter uma coluna de cabeçalho.
- O GFM não analisará os elementos do bloco GFM nas células da tabela. Por exemplo, você não pode ter uma lista em uma célula de tabela.
- O GFM não oferece suporte a nenhum elemento de tabela além de `<table>`, `<tr>` e `<th>` e `<td>`.
- O GFM não suporta nenhum atributo de elemento de tabela como `colspan`, `rowspan` ou `scope`.

Se um autor precisar usar qualquer um dos recursos não suportados, ele deve escrever a tabela em HTML.

Observe que não recomendamos o uso geral de elementos `<caption>` em tabelas, pois isso também descartaria a sintaxe GFM.

#### Largura máxima da tabela GFM

Mesmo quando uma tabela pode ser escrita em GFM, às vezes é melhor usar HTML, porque o GFM usa uma abordagem de "arte ASCII" para tabelas que não são legíveis quando as linhas da tabela ficam longas. Considere a seguinte tabela:

```html
<tabela>
  <tr>
    <th>Um título 1</th>
    <th>Um título 2</th>
    <th>Um título 3</th>
    <th>Um título 4</th>
    <th>Um título 5</th>
    <th>Um título 6</th>
  </tr>
  <tr>
    <td>Algo curto</td>
    <td>
      Algo muito mais longo que realmente entra em muitos detalhes sobre
      alguma coisa, tanto que a formatação da tabela começa a ficar ruim no GFM
      formato.
    </td>
    <td>Alguma coisaortish</td>
    <td>
      Outra célula com muito texto, que também entra em muitos
      detalhes sobre algo, tanto que a formatação da tabela começa a
      parece ruim no formato GFM.
    </td>
    <td>Algo curto</td>
    <td>Algo curto</td>
  </tr>
</table>
```

No GFM, isso ficará assim:

```plain
  | A título 1 | A rubrica 2 | A rubrica 3 | A rubrica 4 | A rubrica 5 | A rubrica 6 |
  | ------------------ | -------------------------------------------------- -------------------------------------------------- ----------------------------------------------- | ------------------ | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------ | ------------------ | ------------------ |
  | Algo curto | Algo muito mais longo que realmente entra em muitos detalhes sobre algo, tanto que a formatação da tabela começa a ficar ruim no formato GFM. | Algo curto | Outra célula com muito texto, que também entra em muitos detalhes sobre algo, tanto que a formatação da tabela começa a ficar ruim no formato GFM. | Algo curto | Algo curto |
```

Em um caso como este seria melhor usar HTML.

Isso nos leva à seguinte diretriz: _se a representação Markdown da tabela tiver mais de 150 caracteres de largura, use HTML para a tabela_.

#### Tabelas de propriedades

Tabelas de propriedades são um tipo específico de tabela usado para exibir conteúdo de valor de propriedade estruturado em um conjunto de páginas de um tipo específico. Essas tabelas têm duas colunas: a primeira coluna é a coluna de cabeçalho e lista as propriedades, e a segunda coluna lista seus valores para esse item específico. Por exemplo, aqui está a tabela de propriedades para a interface {{domxref("PannerNode")}}:

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Número de entradas</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Número de saídas</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Modo de contagem de canais</th>
      <td><code>"explícito"</code></td>
    </tr>
    <tr>
      <th scope="row">Contagem de canais</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Interpretação do canal</th>
      <td><code>"alto-falantes"</code></td>
    </tr>
  </tbody>
</table>

Essas páginas não podem ser representadas no GFM porque possuem uma coluna de cabeçalho, portanto, os escritores devem usar HTML nesse caso.
Para obter o estilo especial, os escritores devem aplicar a classe `"propriedades"` à tabela:

```html-nolint
<table class="properties">
```

### Referência de discussão

Este problema foi resolvido em <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> e <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Sobrescrito e subscrito

Os escritores poderão usar os elementos HTML {{HTMLElement("sup")}} e {{HTMLElement("sub")}} se necessário, mas devem usar alternativas se possível. Em particular:

- Para exponenciação, use o cursor: `2^53`.
- Para expressões ordinais como 1<sup>st</sup>, prefira palavras como "first".
- Para notas de rodapé, não marque as referências das notas de rodapé, por exemplo, `<sup>[1]</sup>`.

### Referência de discussão

Este problema foi resolvido em <https://github.com/mdn/content/issues/4578>.

## Resumo da página

O _resumo da página_ é o primeiro parágrafo de "conteúdo" em uma página - o primeiro texto que aparece após o assunto inicial da página e qualquer [macros da barra lateral ou do banner da página](#kumascript).

Este resumo é usado para otimização de mecanismo de pesquisa (SEO) e também incluído automaticamente junto com as listagens de página por algumas macros.
O primeiro parágrafo deve, portanto, ser sucinto e informativo.

### Referência de discussão

Este problema foi resolvido em <https://github.com/mdn/content/issues/3923>.

## KumaScript

Os escritores poderão incluir chamadas de macro KumaScript em conteúdo em prosa:

```plain
A propriedade **`margin`** [CSS](/pt-BR/docs/Web/CSS)
define a área de margem em todos os quatro lados de um elemento. É uma abreviação para
\{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}},
e \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

As margens superior e inferior não têm efeito sobre os elementos inline substituídos, como
\{{HTMLElement("span")}} ou \{{HTMLElement("código")}}.
```
