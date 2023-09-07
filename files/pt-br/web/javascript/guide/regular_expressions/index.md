---
title: Expressões Regulares
slug: Web/JavaScript/Guide/Regular_expressions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos. Elas podem ser utilizadas com os métodos [`exec`](/pt-BR/docs/JavaScript/Reference/Global_Objects/RegExp/exec) e [`test`](/pt-BR/docs/JavaScript/Reference/Global_Objects/RegExp/test) do objeto [`RegExp`](/pt-BR/docs/JavaScript/Reference/Global_Objects/RegExp), e com os métodos [`match`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/match), [`replace`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/replace),[`search`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/search), e [`split`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/split) do objeto [`String`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String). Este capítulo descreve o uso de expressões regulares em JavaScript.

## Criando uma Expressão Regular

Há duas maneiras de construir uma expressão regular:

Usando uma expressão literal, que consiste em um padrão fechado entre barras, como o exemplo a seguir:

```js
const re = /ab+c/;
```

As expressões regulares na forma literal são compiladas quando o script é carregado. Esta forma de construção possui melhor performace quando a expressão regular utilizada é uma constante, ou seja, não muda durante a execução.

Ou chamando o construtor do objeto [`RegExp`](/pt-BR/docs/JavaScript/Reference/Global_Objects/RegExp):

```js
let re = new RegExp("ab+c");
```

Usando o construtor, a compilação da expressão regular é realizada em tempo de execução. Use o construtor quando souber que o padrão da expressão regular irá mudar ou quando o padrão for desconhecido, oriundo de outra fonte, uma entrada de usuário por exemplo.

> **Nota:** Nota: Se você já está familiarizado com as formas de uma expressão regular, também pode ler o [resumo](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) para uma rápida pesquisa de um padrão específico.

## Escrevendo um padrão de expressão regular

Um padrão de expressão é composto por um conjunto de caracteres simples, como `/abc/`, ou uma combinação de caracteres simples e especiais, como `/ab*c/` ou `/Capitulo (\d+)\.\d*/`. O último exemplo contém parênteses, que são usados como um mecanismo de armazenamento. A correspondência feita por essa parte da expressão é armazenada para uso posterior, como descrito em: [Using Parenthesized Substring Matches](#Using_Parenthesized_Substring_Matches).

### Uso de Padrões Simples

Padrões simples são construídos utilizando os caracteres que você deseja encontrar correspondências diretas. Por exemplo, o padrão `/abc/` encontra combinações de caracteres em strings apenas quando os caracteres 'abc' forem encontrados juntos e na ordem especificada. Esse padrão será encontrado com sucesso nas strings "Olá, você conhece o **abc**?" e "Os mais recentes aviões evoluíram do sl**abc**raft.". Em ambos os casos, a correspondência estará no subconjunto 'abc'. Porém, o padrão não será encontrado no texto "Grab crab" pois apesar de conter os mesmos caractes do padrão 'ab c', estes não aparecem na ordem especificada.

### Uso dos Caracteres Especiais

Quando for necessário buscar algo além de uma correspondência direta, como encontrar uma ou mais ocorrências da letra 'b', ou encontrar espaços em branco, será necessário adicionar caracteres especiais ao padrão. Por exemplo, para encontrar uma única correspondência de 'a' seguido de nenhum ou mais 'b's seguido de 'c', o padrão a utilizar seria `/ab*c/`. O caractere `*` seleciona zero ou mais ocorrências do item que o precede. Se aplicada ao texto 'cbb**abbbbc**debc', essa expressão regular encontraria o subconjunto grifado no texto.

A tabela abaixo fornece uma lista completa dos caracteres especiais que podem ser utilizados nas expressões regulares, com sua respectiva descrição. Para testar os exemplos de expressão regular você pode usar o [regExr](http://regexr.com/).

<table class="fullwidth-table">
  <caption>
    Caracteres especiais utilizados em expressões regulares.
  </caption>
  <thead>
    <tr>
      <th scope="col">Caractere</th>
      <th scope="col">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="#special-backslash"
          id="special-backslash"
          name="special-backslash"
          ><code>\</code></a
        >
      </td>
      <td>
        <p>Aplicado conforme as seguintes regras:</p>
        <p>
          Uma barra invertida que preceda um caractere não especial significa
          que o caractere seguinte é especial e não deve ser interpretado de
          forma literal. Por exemplo, o caractere 'b' quando não precedido de
          uma barra invertida significará uma ocorrência do próprio caractere
          'b' minúsculo, porém se precedido da barra invertida
          <code>'\b'</code> ele passará a significar a ocorrência do caractere
          especial
          [fronteira do caractere](#special-word-boundary).
        </p>
        <p>
          Quando a barra invertida preceder um caractere especial isso
          significará que o próximo caractere deve ser interpretado de forma
          literal. Por exemplo o padrão <code>/a*/</code>, que selecionará a
          ocorrência de zero ou mais caracteres 'a' quando utilizado sem a \
          para escape. Por outro lado no padrão <code>/a\*/</code> o asterisco
          deixa de ter seu significado especial, pois a '\' de escape fará com
          que o '*' seja interpretado de forma literal, passando o padrão a
          selecionar o caractere 'a' seguido do caractere '*'.
        </p>
        <p>
          Quando utilizar o construtor RegExp("padrao"), não se esqueça de fazer
          o escape do caractere \, já que esse caractere é também utilizado como
          caractere de escape em strings.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-caret" id="special-caret" name="special-caret"
          ><code>^</code></a
        >
      </td>
      <td>
        <p>
          Corresponde ao início do texto. Se a flag multilinhas é setada para
          true, também se aplica imediatamente após um caractere de quebra de
          linha.
        </p>
        <p>
          Por exemplo, <code>/^A/</code> não corresponde ao 'A' em "Um Alvo",
          mas corresponde ao 'A' em "Alvo Encontrado".
        </p>
        <p>
          <br />Este caractere tem um significado diferente quando aparece como
          o primeiro caractere em um conjunto padrão de caracteres. Veja
          <a
            href="/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-character-set"
            >conjunto de caracteres negados ou complementados</a
          >
          para detalhes e mais exemplos.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-dollar" id="special-dollar" name="special-dollar"
          ><code>$</code></a
        >
      </td>
      <td>
        <p>
          Corresponde ao final do texto. Se a flag multilinhas é setada para
          true, também se aplica imediatamente antes de um caractere de quebra
          de linha.
        </p>
        <p>
          Por exemplo, <code>/r$/</code> não corresponde ao 'r' em "corre", mas
          acha correspondência em "correr".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-asterisk"
          id="special-asterisk"
          name="special-asterisk"
          ><code>*</code></a
        >
      </td>
      <td>
        <p>
          Corresponde a expressão que o precede repetida 0 ou mais vezes.
          Equivalente a {0,}
        </p>
        <p>
          Por exemplo, <code>/bo*/</code> acha uma correspondência para 'boooo'
          em "Scoob doo" e 'b' em "A bird warbled", mas nenhuma em "A goat
          grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-plus" id="special-plus" name="special-plus"
          ><code>+</code></a
        >
      </td>
      <td>
        <p>
          Corresponde a expressão que o precede repetido 1 ou mais vezes.
          Equivalente a {1,}.
        </p>
        <p>
          Por exemplo, <code>/a+/</code> acha correspondência para o 'a' em
          "candy" e todos os "as" em "caaaaaaandy", mas nâo encontra em "cndy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-questionmark"
          id="special-questionmark"
          name="special-questionmark"
          ><code>?</code></a
        >
      </td>
      <td>
        <p>
          Corresponde a expressão que o precede repetido 0 ou 1 vez. Equivalente
          à {0,1}.
        </p>
        <p>
          Por exemplo, <code>/e?le?/</code> encontra o 'el' em "angel" e o 'le'
          em "angle" e também o 'l' em "oslo".
        </p>
        <p>
          Se usado imediatamente após qualquer um dos quantificadores
          <code>*</code>, <code>+</code>, <code>? </code>ou <code>{}</code>, faz
          o quantificador não guloso (combinando o número mínimo de vezes), como
          um oposto para o padrão que é guloso (combinar o número máximo
          possível). Por exemplo, aplicando <code>/\d+/</code> em "123abc"
          encontra "123". Mas aplicando <code>/\d+?/</code>, apenas "1" será
          encontrado.
        </p>
        <p>
          Também usado em declarações lookahead, descritas sob
          <code>x(?=y)</code> e <code>x(?!y)</code>logo abaixo na tabela.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-dot" id="special-dot" name="special-dot"
          ><code>.</code></a
        >
      </td>
      <td>
        <p>
          (O ponto decimal) corresponde com qualquer caracter, exceto o caracter
          de nova linha.
        </p>
        <p>
          Por exemplo, <code>/.n/</code> acha correspondência para o 'an' e 'on'
          em "nove dias restantes para onze de agosto.", mas não encontra 'no'
          em 'nove'.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-capturing-parentheses"
          id="special-capturing-parentheses"
          name="special-capturing-parentheses"
          ><code>(x)</code></a
        >
      </td>
      <td>
        <p>
          Pesquisa correspondência com o caractere 'x' e memoriza-o, como a o
          exemplo a seguir mostra. Os parênteses são chamados
          <em>parênteses de captura</em>.
        </p>
        <p>
          Por exemplo, o '(foo)' e '(bar)' no padrão
          <code>/(foo) (bar) \1 \2/</code> encontra e memoriza a primeira das
          duas palavras na string "foo bar foo bar". O \1 e \2 no padrão combina
          as duas últimas palavras da string. Note que \1, \2, \n são utilizados
          na parte correspondente do regex.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-capturing-parentheses"
          id="special-non-capturing-parentheses"
          name="special-non-capturing-parentheses"
          ><code>(?:x)</code></a
        >
      </td>
      <td>
        Pesquisa correspondência com o caractere 'x' porém não o memoriza. Os
        parênteses são chamados de<em> parênteses de não-captura</em> e permitem
        que você defina uma subexpressão para operadores de expressão regular
        trabalhar com eles. Considere essa expressão de exemplo
        <code>/(?:foo){1,2}/</code>. Se a expressão era <code>/foo{1,2}/</code>,
        o {1,2} poderia ser aplicado apenas para o último 'o' em 'foo'. Com os
        parênteses de não-captura, o {1,2} é aplicado para toda a palavra 'foo'.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-lookahead"
          id="special-lookahead"
          name="special-lookahead"
          ><code>x(?=y)</code></a
        >
      </td>
      <td>
        <p>
          Pesquisa correspondência em 'x' apenas se 'x' é seguido por 'y'. Isso
          é chamado de <em>lookahead</em>.
        </p>
        <p>
          Por exemplo, <code>/Jack(?=Sprat)/</code> busca 'Jack' apenas se é
          seguido por 'Sprat'. <code>/Jack(?=Sprat|Frost)/</code> busca 'Jack'
          apenas se ele é seguido por 'Sprat' ou 'Frost'. No entanto, 'Sprat'
          nem 'Frost' faz parte do resultado retornado.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-negated-look-ahead"
          id="special-negated-look-ahead"
          name="special-negated-look-ahead"
          ><code>x(?!y)</code></a
        >
      </td>
      <td>
        <p>
          Pesquisa correspondência em 'x' apenas se 'x' não é seguido por 'y'.
          Isso é chamado <em>negação lookahead</em>.
        </p>
        <p>
          Por exemplo, <code>/\d+(?!\.)/</code> encontra um número apenas se ele
          não for seguido por um ponto decimal. A expressão regular
          <code>/\d+(?!\.)/.exec("3.141")</code> encontra '141' mas não '3.141'.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-or" id="special-or" name="special-or"
          ><code>x|y</code></a
        >
      </td>
      <td>
        <p>Pesquisa correspondência em 'x' ou 'y'.</p>
        <p>
          Por exemplo, <code>/verde|vermelha/</code> encontra 'verde' em "maçã
          verde" e 'vermelha' em "maçã vermelha."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-quantifier"
          id="special-quantifier"
          name="special-quantifier"
          ><code>{n}</code></a
        >
      </td>
      <td>
        <p>
          Pesquisa n ocorrências correspondentes ao caracter precedido. Onde,
          <code>n</code> deve ser um inteiro positivo.
        </p>
        <p>
          Por exemplo, <code>/a{2}/</code> não encontra o 'a' em "candy," mas
          encontra-o se houver a quantidade de a's informarda em "caandy," e os
          dois primeiros a's em "caaandy."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-quantifier-range"
          id="special-quantifier-range"
          name="special-quantifier-range"
          ><code>{n,m}</code></a
        >
      </td>
      <td>
        <p>
          Pesquisa a n menor correspondência e a m maior correspondência do
          caractere precedido. Quando n ou m é zero, ele poderá ser omitido.
          Onde, <code>n</code> e <code>m</code> devem ser inteiros positivo.
        </p>
        <p>
          Por exemplo, <code>/a{1,3}/</code> não encontra nada em "cndy", mas
          encontra o 'a' em "candy", encontra os dois primeiros a's em "caandy,"
          e encontra os três primeiros a's em "caaaaaaandy". Observe que, ao
          fazer a correspondência de "caaaaaaandy", serão encontrados apenas os
          "aaa", mesmo que a string tenha mais a's.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-character-set"
          id="special-character-set"
          name="special-character-set"
          ><code>[xyz]</code></a
        >
      </td>
      <td>
        <p>
          Um conjunto de caracteres. Pesquisa correspondência para qualquer um
          dos caracteres entre colchetes. Você pode especificar um intervalo de
          caracteres usando hífen. Caracteres especiais (como o ponto (.) e o
          asterisco(*)) não tem significado algum quando está dentro de um
          conjunto de caracteres. Não necessita utilizar escape neles. Mas, se
          utilizar escape também irá funcionar.
        </p>
        <p>
          Por exemplo, <code>[abcd]</code> é o mesmo que <code>[a-d]</code>. Com
          a expressão será encontrado o 'b' em "beijo" e o 'c' em "chop". A
          expressão <code>/[a-z.]+/</code> e <code>/[\w.]+/</code> ambos
          encontraram as letras que formam "test.i.ng".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-negated-character-set"
          id="special-negated-character-set"
          name="special-negated-character-set"
          ><code>[^xyz]</code></a
        >
      </td>
      <td>
        <p>
          Um conjunto de caracteres negados ou complementados. Isto é, combina
          com qualquer coisa que não esteja listado entre os colchetes. Você
          pode especificar um intervalo de caracteres usando hífen. Tudo que
          funciona no conjunto de caracteres (apresentado acima) também funciona
          aqui.
        </p>
        <p>
          Por exemplo, <code>[^abc]</code> é o mesmo que <code>[^a-c]</code>.
          Com a expressão será encontrado inicialmente 'e' em "beijo" e 'h' em
          "chop."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-backspace"
          id="special-backspace"
          name="special-backspace"
          ><code>[\b]</code></a
        >
      </td>
      <td>
        Pesquisa correspondência com espaço em branco (U+0008). É preciso
        utilizar os colchetes se você quer encontrar um espaço em branco. (Não
        confunda-o com <code>\b</code>.)
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-word-boundary"
          id="special-word-boundary"
          name="special-word-boundary"
          ><code>\b</code></a
        >
      </td>
      <td>
        <p>
          Pesquisa correspondência em uma fronteira de caractere. Uma fronteira
          de caractere corresponde a posição onde um caractere/palavra não é
          seguido ou antecedido por outro caractere/palavra. Isto é, em
          fronteira de caractere não pode haver nenhum caractere ou espaço, seu
          tamanho deve ser vazio. (não confunda-o com [\b].)
        </p>
        <p>
          Exemplos:<br /><code>/\bmoo/</code> encontra a substring 'moo' em
          "moon" ;<br /><code>/oo\b/</code> não encontra o 'oo' em "moon",
          devido o 'oo' ser seguido por 'n' que é um caractere;<br /><code
            >/oon\b/</code
          >
          encontra a substring 'oon' em "moon", devido 'oon' ser o fim da
          string, ou seja, não é seguido por nenhum caractere;<br /><code
            >/\w\b\w/</code
          >
          não encontrará nada, pois o caractere nunca será seguido por um não
          caractere e um caractere.
        </p>
        <div class="note">
          <p>
            <strong>Nota:</strong> O mecanismo de expressão regular no
            JavaScript define um conjunto específico de caracteres para serem
            caracteres "palavras". Qualquer caractere que não esteja neste
            conjunto é considerado uma quebra de palavra. Este conjunto de
            caractere é bastante limitado: consiste apenas no alfabeto romano
            tanto maiúsculo como minúsculo, digítos decimais, e o caractere
            sublinhado. Caracteres acentuados, tal como "é" ou "ã" são,
            infelizmente, tratados como palavras quebradas.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-word-boundary"
          id="special-non-word-boundary"
          name="special-non-word-boundary"
          ><code>\B</code></a
        >
      </td>
      <td>
        <p>
          Pesquisa correspondência que não seja em uma fronteira de caractere.
          Para a correspondência é associada uma posição onde o caractere
          anterior e o próximo tem as mesmas características: ambos são
          caractere/palavra, ou ambos não sejam caractere/palavra. O início e o
          fim de uma string não considerados como não caractere/palavra.
        </p>
        <p>
          Por exemplo, /\B../ encontra correspondente 'oo' em "boolean", e
          /y\B./ encontra correspondente 'ye' em "possibly yesterday."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-control" id="special-control" name="special-control"
          ><code>\c<em>X</em></code></a
        >
      </td>
      <td>
        <p>
          Onde X é um caractere pertencente ao conjunto A-Z. Encontra
          correspondência de um
          <a href="https://pt.wikipedia.org/wiki/Caractere_de_controle"
            >caractere de controle</a
          >
          em uma string.
        </p>
        <p>
          Por exemplo, <code>/\cM/</code> encontra correspondente control-M
          (U+000D) em uma string.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-digit" id="special-digit" name="special-digit"
          ><code>\d</code></a
        >
      </td>
      <td>
        <p>Encontra correspondência com um número. Equivalente a [0-9].</p>
        <p>
          Por exemplo, <code>/\d/</code> ou <code>/[0-9]/</code> encontra
          correspondente '8' em "Dróide BB8".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-digit"
          id="special-non-digit"
          name="special-non-digit"
          ><code>\D</code></a
        >
      </td>
      <td>
        <p>
          Encontra correspondência com um caractere que não seja número.
          Equivalente a [^0-9].
        </p>
        <p>
          Por exemplo, <code>/\D/</code> ou <code>/[^0-9]/</code> econtra
          correspondente 'C' em "C3 está ativada."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-form-feed"
          id="special-form-feed"
          name="special-form-feed"
          ><code>\f</code></a
        >
      </td>
      <td>
        Encontra correspondência com um caractere de escape
        <em>avanço de página</em> (U+000C).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-line-feed"
          id="special-line-feed"
          name="special-line-feed"
          ><code>\n</code></a
        >
      </td>
      <td>
        Encontra correspondência com um caractere de escape
        <em>quebra de linha</em> (U+000A).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-carriage-return"
          id="special-carriage-return"
          name="special-carriage-return"
          ><code>\r</code></a
        >
      </td>
      <td>
        Encontra correspondência com um caractere de escape
        <em>retorno de carro</em> (U+000D).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-white-space"
          id="special-white-space"
          name="special-white-space"
          ><code>\s</code></a
        >
      </td>
      <td>
        <p>
          Encontra correspondência com um único caractere de espaço em branco,
          espaço, tabulação, avanço de página, quebra de linha. Equivalente a
          <code
            >[
            \f\n\r\t\v\u00A0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000]</code
          >.
        </p>
        <p>
          Por exemplo, <code>/\s\w*/</code> encontra correspondente ' bar' em
          "foo bar."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-white-space"
          id="special-non-white-space"
          name="special-non-white-space"
          ><code>\S</code></a
        >
      </td>
      <td>
        <p>
          Encontra correspondência em um único caractere que não seja espaço em
          branco. Equivalente a
          <code
            >[^
            \f\n\r\t\v\u00A0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000]</code
          >.
        </p>
        <p>
          Por exemplo, <code>/\S\w*/</code> encontra correspondente 'foo' em
          "foo bar."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-tab" id="special-tab" name="special-tab"
          ><code>\t</code></a
        >
      </td>
      <td>Encontra correspondência em uma tabulação (U+0009).</td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-vertical-tab"
          id="special-vertical-tab"
          name="special-vertical-tab"
          ><code>\v</code></a
        >
      </td>
      <td>Encontra correspondência em uma tabulação vertical (U+000B).</td>
    </tr>
    <tr>
      <td>
        <a href="#special-word" id="special-word" name="special-word"
          ><code>\w</code></a
        >
      </td>
      <td>
        <p>
          Encontra correspondência de qualquer caractere alfanumérico incluindo
          underline. Equivalente a <code>[A-Za-z0-9_]</code>.
        </p>
        <p>
          Por exemplo, <code>/\w/</code> encontra correspondente 'a' em "apple,"
          '5' em "$5.28," e '3' em "3D."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-non-word"
          id="special-non-word"
          name="special-non-word"
          ><code>\W</code></a
        >
      </td>
      <td>
        <p>
          Encontra correspondência em um não caractere. Equivalente a
          <code>[^A-Za-z0-9_]</code>.
        </p>
        <p>
          Por exemplo, <code>/\W/</code> ou
          <code>/[^A-Za-z0-9_]/</code> encontra correspondente '%' em "50%."
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-backreference"
          id="special-backreference"
          name="special-backreference"
          ><code>\<em>num</em></code></a
        >
      </td>
      <td>
        <p>
          Onde num é um inteiro positivo. Faz referência a substring pertencente
          à um grupo, um grupo é definido entre parênteses. Grupos são numerados
          de 1 até 9.
        </p>
        <p>
          Por exemplo, /(muito) (cacique) pra \2 \1/ encontra 'muito cacique pra
          cacique muito' em 'Na aldeia tem muito cacique pra cacique muito.'
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#special-null" id="special-null" name="special-null"
          ><code>\0</code></a
        >
      </td>
      <td>
        Encontra correspondência em um caractere NULL (U+0000). Não adicione
        outro número após o zero, pois
        <code>\0&#x3C;digitos> é um escape para número octal</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-hex-escape"
          id="special-hex-escape"
          name="special-hex-escape"
          ><code>\xhh</code></a
        >
      </td>
      <td>
        Encontra correspondência com o código hh (dois valores hexadecimal).
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="#special-unicode-escape"
          id="special-unicode-escape"
          name="special-unicode-escape"
          ><code>\uhhhh</code></a
        >
      </td>
      <td>
        Encontra correspondência com o código hhh (três valores hexadecimal).
      </td>
    </tr>
    <tr>
      <td>\u{hhhh}</td>
      <td>
        (funciona apenas com a flag u) Encontra correspondência com o valor
        Unicode hhhh (dígitos hexadecimais).
      </td>
    </tr>
  </tbody>
</table>

### Usando Parênteses

Usar parênteses em volta de qualquer parte de uma expressão regular faz com que essa parte seja lembrada para ser usada depois, como descrito em [Usando as Substrings entre Parênteses na Expressão Regular](#Using_Parenthesized_Substring_Matches).

Por Exemplo, a expressão `/Capitulo (\d+)\.\d*/` ilustra caracteres adicionais escapados e especiais e indica que parte do padrão deve ser lembrado. Corresponde precisamente aos caracteres 'Capitulo ' seguidos por um ou mais caracteres numéricos (`\d` significa qualquer caracter numérico e `+` significa 1 ou mais vezes), seguidos por um ponto decimal (que é um caracter especial; preceder com um \ significa que a expressão regular deve buscar pelo caracter literal '.'), seguido por qualquer caracter numérico 0 ou mais vezes (`\d` significa caracter numérico, `*` significa 0 ou mais vezes). Além disso, os parenteses são usados para relembrar os primeiros caracteres numéricos correspondentes.

Esse padrão é encontrado em "Abra o capitulo 4.3, parágrafo 6" o '4' é relembrado. O padrão não é encontrado em "Capitulo 3 e 4", porque essa string não tem um período após o '3'.

Para encontrar uma substring sem que a correspondência seja relembrada, dentro dos parênteses inicie o padrão com `?:`. Por exemplo, `(?:\d+)` corresponde a um ou mais caracteres numéricos mas não relembra os caracteres correspondentes.

## Trabalhando com expressões regulares

Expressões Regulares são usadas com os metodos `test` e `exec` do objeto `RegExp`e com os metodos `match`, `replace`, `search`, e `split` do objeto `String`. Estes metodos são explicados em detalhe em [JavaScript Reference](/pt-BR/docs/JavaScript/Reference).

| Metodo                                                                      | Descrição                                                                                                                                                      |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`exec`](/pt-BR/docs/JavaScript/Reference/Global_Objects/RegExp/exec)       | Um método `RegExp` que execute uma pesquisa por uma correspondência em uma string. Retorna um array de informações.                                            |
| [`test`](/pt-BR/docs/JavaScript/Reference/Global_Objects/RegExp/test)       | Um método `RegExp` que testa uma correspondência em uma string. Retorna true ou false.                                                                         |
| [`match`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/match)     | Um método `String` que executa uma pesquisa por uma correspondência em uma string. Retorna uma array de informações ou null caso não haja uma correspondência. |
| [`search`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/search)   | Um método `String` que testa uma correspondência em uma string. Retorna o indice da correspondência ou -1 se o teste falhar.                                   |
| [`replace`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/replace) | Um método `String` que executa uma pesquisa por uma correspondência em uma string, e substitui a substring correspondênte por uma substring de substituição.   |
| [`split`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/split)     | Um método `String` que usa uma expressão regular ou uma string fixa para quebrar uma string dentro de um array de substrings.                                  |

Quando você quer saber se um padrão é encontrado em uma string, use o método `test` ou `search`; para mais informações (mas execução mais lenta) use o método `exec` ou `match`. Se você usar `exec` ou `match` e se houver correspondência, estes métodos retornam um array e atualizam as propriedades do objeto da expressão regular associada e também do objeto da expressão regular predfinada `RegExp`. Se não houver corespondência, o método `exec` retorna `null` (convertido para `false`).

No seguinte exemplo, o script usa o método `exec` para encontrar uma correspondência em uma string.

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

Se você não precisa acessar as propriedades da expressão regular, uma alternativa de criar `myArray` é com esse script:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
```

Se você quiser construir a expressão regular a partir de uma string, outra alternativa é esse script:

```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

Com esses scripts, a correspondência é encontrada o array é retornado e são atualizadas as propriedades mostradas na tabela a seguir.

<table class="fullwidth-table">
  <caption>
    Table 4.3 Resultados da execução de expressões regulares.
  </caption>
  <thead>
    <tr>
      <th scope="col">Objeto</th>
      <th scope="col">Propriedade or indice</th>
      <th scope="col">Descrição</th>
      <th scope="col">Nesse exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>A string correspondente e todas as substrings relembradas.</td>
      <td><code>["dbbd", "bb"]</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>O índice do encontro em relação à string original.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>A string original.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Os últimos caracteres encontrados.</td>
      <td><code>"dbbd"</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>
        O índice no qual iniciar a próxima partida. (Esta propriedade é
        configurada apenas se a expressão regular usar a opção g, descrita em
        [Advanced Searching With Flags](#Advanced_Searching_With_Flags).)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        O texto da expressão regular. Atualizado quando a expressão é criada,
        não executada.
      </td>
      <td><code>"d(b+)d"</code></td>
    </tr>
  </tbody>
</table>

Como mostrado na segunda forma deste exemplo, você pode usar uma expressão regular criada com um inicializador de objeto sem atribuí-la à uma variável. Contudo, se você o fizer, toda ocorrência é uma nova expressão regular. Assim sendo, se você usar esta forma sem atribuí-la à uma variável, você não pode subsequentemente acessar as propriedades da expressão regular. Assumamos que tenha este script, por exemplo:

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("O útltimo índice é " + myRe.lastIndex);
```

Este script mostra:

```
O último índice é 5
```

Contudo, se tem este script:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("O último índice é " + /d(b+)d/g.lastIndex);
```

Ele mostra:

```
O último índice é 0
```

As ocorrências de `/d(b+)d/g` nas duas declarações são objetos expressões regulares diferentes e consequentemente têm diferentes valores para suas propriedades `lastIndex`. Se precisa acessar as propriedades de uma expressão regular criada com um inicializaor de objeto, você deve primeiro atribuí-la à uma variável.

### Usando as Substrings entre Parênteses na Expressão Regular

A inclusão de parênteses em um padrão de expressão regular faz com que a sub-correspondência correspondente seja lembrada. Por exemplo, `/a(b)c/` corresponde aos caracteres 'abc' e lembra 'b'. Para recuperar essas correspondências de substring entre parênteses, use o `Arra[1]`, ..., `[n]`.

O número de substring entre parênteses possíveis é ilimitado. A matriz retornada contém tudo o que foi encontrado. Os exemplos a seguir ilustram como usar parênteses entre parênteses.

#### Exemplo 1

O script a seguir usa o método [`replace()`](/pt-BR/docs/JavaScript/Reference/Global_Objects/String/replace) para alternar as palavras na string. Para o texto de substituição, o script usa o `$1` e `$2` na substituição para indicar a primeira e a segunda correspondências de substring entre parênteses.

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Isto imprime "Smith, John".

### Pesquisa avançada com Flags

As expressões regulares possuem quatro flags opcionais as quais se incluem a pesquisa global e case insensitive. Para realizar uma pesquisa global, utilize a flag g. Para realizar uma pesquisa sem diferenciar letras maiúsculas de minúsculas, utilize a flag i. Para realizar uma pesquisa multi-linhas, utilize a flag m. Ao realizar uma pesquisa "sticky", o ponto de partida será a posição corrente da string alvo, use com a flag y.Estas flags podem ser usadas separadamente ou juntas, em qualquer ordem, e serão inclusas como parte da expressão regular.

Para incluir um sinalizador com a expressão regular, use esta sintaxe:

```js
var re = /pattern/flags;
```

ou

```js
var re = new RegExp("pattern", "flags");
```

Observe que os sinalizadores são parte integrante de uma expressão regular. Eles não podem ser adicionados ou removidos posteriormente.

Por exemplo, `re = /\w+\s/g` cria uma expressão regular que procura um ou mais caracteres seguidos por um espaço e procura essa combinação em toda a cadeia.

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);
```

Isso exibe \["fee ", "fi ", "fo "]. Neste exemplo, você pode substituir a linha

```js
var re = /\w+\s/g;
```

por:

```js
var re = new RegExp("\\w+\\s", "g");
```

e obtenha o mesmo resultado.

O sinalizador `m` é usado para especificar que uma sequência de entrada de múltiplas linhas deve ser tratada como várias linhas. Se o sinalizador `m` for usado, `^` e `$` combinam no início ou no final de qualquer linha na sequência de entrada, em vez do início ou no final de toda a sequência.

## Exemplos

Os exemplos que se seguem mostram mais usos expressões regulares.

### Alterando o pedido em uma string de entrada

O exemplo a seguir ilustra a formação de expressões regulares e o uso de `string.split()` e `string.replace()`. Ela limpa uma string de entrada formatada com nomes (primeiro nome sobrenome) separados por espaço em branco, tabulações e exatamente um ponto e virgula. Por fim, inverte a ordem do nome (sobrenome e primeiro nome) e ordena a lista

```js
// A cadeia de nomes contém vários espaços e guias,
// e pode ter vários espaços entre o nome e o sobrenome.
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- String original\n", names + "\n"];

// Prepare dois padrões de expressão regular e armazenamento em array.
// Divide a string em elementos da matriz.

// pattern: possível espaço em branco, em seguida, ponto e vírgula, em seguida, possível espaço em branco
var pattern = /\s*;\s*/;

// Quebra string em pedaços separados pelo padrão acima e
// armazene as partes em uma matriz chamada nameList
var nameList = names.split(pattern);

// new pattern: um ou mais caracteres, espaços e caracteres.
// Use parênteses para "memorizar" partes do padrão.
// As partes memorizadas são referenciadas mais tarde.
pattern = /(\w+)\s+(\w+)/;

// Nova matriz para armazenar nomes sendo processados.
var bySurnameList = [];

// Exibe a matriz de nomes e preenche a nova matriz
// com nomes separados por vírgula, último primeiro.
//
// O método replace remove qualquer coisa que corresponda ao padrão
// e substitui-o pela sequência memorizada - segunda parte memorizada
// seguido por espaço de vírgula seguido pela primeira parte memorizada.
//
// As variáveis $ 1 e $ 2 se referem às partes
// memorizado enquanto corresponde ao padrão.

output.push("---------- Após Separar pela Expressão Regular");

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// Exibe a nova matriz.
output.push("---------- Nomes Invertidos");
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

// Classifica pelo sobrenome e exibe a matriz classificada.
bySurnameList.sort();
output.push("---------- Ordenado");
for (i = 0, len = bySurnameList.length; i < len; i++) {
  output.push(bySurnameList[i]);
}

output.push("---------- Fim");

console.log(output.join("\n"));
```

### Usando caracteres especiais para verificar entradas

No exemplo a seguir, é esperado que o usuário informe um número de telefone. Quando o usuário pressionar o botão "Check", o script verificará a validade do número. Se o número for válido (a sequência de caracteres especificada corresponderá a expressão regular), então, o script exibe uma mensagem agradecendo o usuário e confirmando o seu número. Se o número for inválido, o script informa ao usuário que o número de telefone não é válido.

A expressão regular procura por zero ou uma ocorrência de parênteses de abertura \\(?, seguido de três dígitos \d{3}, seguido de zero ou uma ocorrência de parênteses de fechamento \\)?, seguido de um hífen, barra ou ponto decimal e, quando encontrado, guarda o caractere (\[-\\/\\.]), seguido de três dígitos \d{3}, seguido por um caractere de hífen, barra ou ponto decimal que fora guardado \1, seguido por quatro dígitos \d{4}.

Com o evento Change ativo, quando o usuário pressionar Enter, o valor será capturado por RegExp.input.

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <script type="text/javascript">
      var re = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
      function testInfo(phoneInput) {
        var OK = re.exec(phoneInput.value);
        if (!OK)
          window.alert(
            RegExp.input + " Não é um número de telefone com código de área!",
          );
        else window.alert("Obrigado, o seu número de telefone é " + OK[0]);
      }
    </script>
  </head>
  <body>
    <p>
      Informe o seu número de telefone (com código de área) e então clique em
      "Check". <br />O formato esperado é ###-###-####.
    </p>
    <form action="#">
      <input id="phone" /><button
        onclick="testInfo(document.getElementById('phone'));">
        Check
      </button>
    </form>
  </body>
</html>
```

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
