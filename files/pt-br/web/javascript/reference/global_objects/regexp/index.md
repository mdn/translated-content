---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
---

{{JSRef("Global_Objects", "RegExp")}}

## Sumário

O construtor **`RegExp`** cria um objeto de expressão regular para realizar uma correspondência de texto com um padrão.

Para uma introdução à expressões regulares, leia o [capítulo de Expressões Regulares](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) no [Guia de JavaScript](/pt-BR/docs/Web/JavaScript/Guide).

## Construtor

Notações literais e de construtores são possíveis:

```
/padrão/flags
new RegExp(padrão[, flags])
RegExp(padrão[, flags])
```

### Parâmetros

- `padrão`
  - : O texto da expressão regular, ou como em ES5, outro objeto RegExp. Os padrões podem incluir caracteres especiais para correspondencia em um intervalo maior de valores do que uma string literal.
- `flags`

  - : Se especificado, <kbd>flags</kbd>indica os marcadores que podem ser adicionados, ou se um objeto é suficiente para o padrão, os valores de flags serão substituidos por qualquer uma das flags de objetos. O valor de <kbd>flags</kbd>é uma string contendo qualquer combinação dos seguintes valores:

    - `g`
      - : corresponder globalmente; acha **todas** as correspondências em vez de parar após achar a primeira
    - `i`
      - : ignorar maiúsc./minúsc.; Se a _flag <kbd>u</kbd>_ estiver ativa, deve ser utilizado o _Unicode case folding_
    - `m`
      - : multilinha; trata caracteres de início e fim (^ e $) ao operar sobre múltiplas linhas (ou seja, corresponder o início ou fim de _cada_ linha (delimitado por \n ou \r), e não apenas o começo ou fim de toda a string de entrada)
    - `u` {{experimental_inline}}
      - : unicode; trata o padrão como uma sequência de código unicode
    - `y` {{experimental_inline}}
      - : aderente; corresponde apenas pelo index indicado pela propriedade `lastIndex` dessa expressão regular na string alvo (e não tenta corresponder de qualquer indexes posteriores).

## Descrição

Há dois modos de criar um objeto `RegExp`: uma notação literal e um construtor. Para indicar strings, os parâmetros para a notação literal não usam aspas, enquanto os parâmetros para a função do construtor usam. Então, as seguintes expressões criam a mesma expressão regular:

```js
/ab+c/i;
new RegExp("ab+c", "i");
```

A notação literal compila a expressão regular em tempo de execução. Use a notação literal quando a expressão regular permanecerá constante. Por exemplo, se você usar a notação literal para construir a expressão regular usada em um _loop_, a expressão regular não será recompilada a cada iteração

O construtor do objeto da expressão regular, por exemplo, `new RegExp('ab+c')`, fornece uma compilação em tempo de execução da expressão regular. Use a função construtora quando você sabe que o padrão da expressão regular será mudado, ou você não sabe o padrão e o está recebendo de outra fonte, como uma entrada do usuário.

Começando com ECMAScript 6, `new RegExp(/ab+c/, 'i')`, deixou de lançar um {{jsxref("TypeError")}} ("can't supply flags quando constructing one RegExp from another") quando o primeiro argumento é um `RegExp` e o segundo argumento `flags` está presente. Uma nova `RegExp` dos argumentos é criada ao invés disso.

Quando se usa a função construtora, as regras de escapar em uma string (preceder caracteres especiais com \ quando incluídos na string) são necessárias. Por exemplo, as declarações a seguir são equivalentes:

```js
var re = /\w+/;
var re = new RegExp("\\w+");
```

## Significado dos caracteres especiais nas expressões regulares

- [Classes de Caracteres](#character-classes)
- [Conjuntos de Caracteres](#character-sets)
- [Limites](#boundaries)
- [Agrupamentos e back references](#grouping-back-references)
- [Quantificadores](#quantifiers)

<table class="fullwidth-table">
  <tbody>
    <tr id="character-classes">
      <th colspan="2">Classes de Caracteres</th>
    </tr>
    <tr>
      <th>Caractere</th>
      <th>Significado</th>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          (O ponto) corresponde um único caracter qualquer <em>exceto</em> os
          caracteres de nova linha: <code>\n</code>, <code>\r</code>,
          <code>\u2028</code> ou <code>\u2029</code>.
        </p>
        <p>
          Note que a flag multilinha <code>m</code> não muda o comportamento do
          ponto. Então para corresponder um padrão por múltiplas linhas, o
          conjunto de caracteres <code>[^]</code> pode ser usado, que
          corresponderá qualquer caractere, incluindo novas linhas.
        </p>
        <p>
          Por exemplo, <code>/.y/</code> corresponde "my" e "ay", mas não "yes",
          em "yes make my day".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          Corresponde um caractere de dígito no alfabeto basic Latin.
          Equivalente <code>a [0-9]</code>.
        </p>
        <p>
          Por exemplo, <code>/\d/</code> ou <code>/[0-9]/</code> corresponde "2"
          em "B2 é o número da suíte".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          Corresponde qualquer caractere que não é um dígito no alfabeto basic
          Latin. Equivalente a <code>[^0-9]</code>.
        </p>
        <p>
          Por exemplo, <code>/\D/</code> ou <code>/[^0-9]/</code> corresponde
          "B" em "B2 é o suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          Corresponde qualquer caractere alfanumérico do alfabeto basic Latin,
          incluindo o underline. Equivalente a <code>[A-Za-z0-9_]</code>.
        </p>
        <p>
          Por exemplo, <code>/\w/</code> corresponde "a" em "apple", "5" em
          "$5.28", e "3" em "3D".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          Corresponde qualquer caractere que não é um alfanumérico do alfabeto
          basic Latin. Equivalente a <code>[^A-Za-z0-9_]</code>.
        </p>
        <p>
          Por exemplo, <code>/\W/</code> ou
          <code>/[^A-Za-z0-9_]/</code> corresponde "%" em "50%".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          Corresponde um único caractere de espaço em branco, incluindo espaço,
          tabulação (tab), quebra de página, nova linha (LF) e outros espaços
          Unicode. Equivalente a
          <code
            >[
            \f\n\r\t\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]</code
          >.
        </p>
        <p>
          Por exemplo, <code>/\s\w*/</code> corresponde " bar" em "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          Corresponde um único caractere que não seja um espaço em branco.
          Equivalente a
          <code
            >[^
            \f\n\r\t\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]</code
          >.
        </p>
        <p>Por exemplo, <code>/\S\w*/</code> corresponde "foo" em "foo bar".</p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Corresponde uma tabulação.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Corresponde uma quebra de linha.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Corresponde uma nova linha.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Corresponde uma tabulação vertical.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Corresponde uma quebra de página.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Corresponde um caracter backspace. (Não confundir com <code>\b</code>)
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>
        Corresponde um caractere NUL. Não coloque outro dígito seguinte a esse.
      </td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Onde <code><em>X</em></code> é uma letra de A - Z. Corresponde um
          caractere de controle em uma string.
        </p>
        <p>
          Por exemplo, <code>/\cM/</code> corresponde control-M em uma string.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Corresponde o caractere com o código <code><em>hh</em></code> (dois
        dígitos hexadecimais).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Corresponde o caractere com o valor Unicode
        <code><em>hhhh</em></code> (quatro dígitos hexadecimais).
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Para caracteres que são geralmente tratados literalmente, indica que o
          próximo caractere é especial e não deve ser interpretado literalmente.
        </p>
        <p>
          Por exemplo, <code>/b/</code> corresponde o caractere "b". Colocando
          uma barra invertida antes do "b", ou seja, usando <code>/\b/</code>, o
          caractere se torna especial, significando corresponder o limite de uma
          palavra.
        </p>
        <p><em>ou</em></p>
        <p>
          Para caracteres que são geralmente tratados especialmente, indica que
          o próximo caractere não é especial e deve ser interpretado
          literalmente.
        </p>
        <p>
          Por exemplo, "*" é um caractere especial que significa 0 ou mais
          ocorrências do caractere precedente devem ser correspondidas; por
          exemplo, <code>/a*/</code> significa corresponder 0 ou mais "a"s. Para
          corresponder <code>*</code> literalmente, preceda-o com uma barra
          invertida; por exemplo, <code>/a\*/</code> corresponde "a*".
        </p>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr id="character-sets">
      <th colspan="2">Conjuntos de Caracteres</th>
    </tr>
    <tr>
      <th>Caractere</th>
      <th>Significado</th>
    </tr>
    <tr>
      <td><code>[xyz]</code></td>
      <td>
        <p>
          Um conjunto de caracteres. Corresponde qualquer um dos caracteres
          cercados. Você pode especificar uma extensão de caracteres usando um
          hífen.
        </p>
        <p>
          Por exemplo, <code>[abcd]</code> é o mesmo que <code>[a-d]</code>.
          Eles correspondem o "b" em "banco" e o "c" em "cortar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[^xyz]</code></td>
      <td>
        <p>
          Um conjunto de caracteres negativo ou complementado. Isto é,
          corresponde qualquer coisa que não esteja cercada nos colchetes. Você
          pode especificar uma extensão de caracteres usando um hífen.
        </p>
        <p>
          Por exemplo, <code>[^abc]</code> é o mesmo que <code>[^a-c]</code>.
          Eles inicialmente correspondem "n" em "banco" e "o" em "cortar".
        </p>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr id="boundaries">
      <th colspan="2">Limites</th>
    </tr>
    <tr>
      <th>Caractere</th>
      <th>Significado</th>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          Corresponde o início de uma entrada. Se a flag multilinha é utilizada,
          também corresponde imediatamente após um caractere de quebra de linha.
        </p>
        <p>
          Por exemplo, <code>/^A/</code> não corresponde o "A" em "an A", mas
          corresponde o primeiro "A" em "An A".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          Corresponde o fim de uma entrada. Se a flag multilinha é utilizada,
          também corresponde imediatamente antes de um caractere de quebra de
          linha.
        </p>
        <p>
          Por exemplo, <code>/o$/</code> não corresponde o "o" em "cantor", mas
          corresponde em "canto".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          Corresponde um limite de palavra de largura zero, como entre uma letra
          e um espaço. (Não confundir com <code>[\b]</code>)
        </p>
        <p>
          Por exemplo, <code>/\bno/</code> corresponde o "no" em "de noite";
          <code>/ly\b/</code> corresponde o "ly" em "possibly yesterday".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          Corresponde um limite de uma não palavra de largura zero, como entre
          duas letras ou entre dois espaços.
        </p>
        <p>
          Por exemplo, <code>/\Bte/</code> corresponde "te" em "de noite", e
          <code>/on\B/</code> corresponde "on" em "possivelmente ontem".
        </p>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr id="grouping-back-references">
      <th colspan="2">Agrupamentos e back references</th>
    </tr>
    <tr>
      <th>Caractere</th>
      <th>Significado</th>
    </tr>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          Corresponde <code><em>x</em></code> e memoriza a correspondência.
          Esses são chamados parênteses de captura.
        </p>
        <p>
          Por exemplo, <code>/(foo)/</code> corresponde e memoriza "foo" em "foo
          bar". A substring correspondida pode ser chamada novamente dos
          elementos do array resultante <code>[1], ..., [n]</code> ou das
          propriedades predefinidas do objeto <code>RegExp</code>
          <code>$1, ..., $9</code>.
        </p>
        <p>
          Grupos de captura têm uma falta na performance. Se você não necessita
          que a substring correspondida seja chamada novamente, prefira
          parênteses de não-captura (veja mais abaixo).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          Onde <code><em>n</em></code> é um inteiro positivo. A back reference
          to o last substring matching o n parenthetical no expressão regular
          (counting left parentheses).
        </p>
        <p>
          Por exemplo, <code>/apple(,)\sorange\1/</code> corresponde "apple,
          orange," em "apple, orange, cherry, peach". Um exemplo mais completo
          está a seguir nesta tabela.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        Corresponde <code><em>x</em></code> mas não memoriza a correspondência.
        Esses são chamados parênteses de não-captura. A substring correspondida
        não pode ser chamada novamente dos elementos do array resultante
        <code>[1], ..., [n]</code> ou das propriedades predefinidas do objeto
        <code>RegExp</code> <code>$1, ..., $9</code>.
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr id="quantifiers">
      <th colspan="2">Quantificadores</th>
    </tr>
    <tr>
      <th>Caractere</th>
      <th>Significado</th>
    </tr>
    <tr>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>Corresponde o item precedente <em>x</em> zero ou mais vezes.</p>
        <p>
          Por exemplo, <code>/assusto*/</code> corresponde "assustoooo" em "Um
          fantasma assustoooou" e "assust" em "Não me assustei", mas nada em "Um
          bode grunhiu".
        </p>
        <p>
          Note que no caso acima, o único caractere a ser selecionado é "o",
          pois ele é o caractere imediatamente anterior ao asterisco e não há
          qualquer operador de agrupamento que indique que mais caracteres
          deveriam ser submetidos à repetição. Se quiséssemos selecionar a
          ocorrência sequencial da palavra completa "blah", por exemplo,
          poderíamos utilizar algum agrupamento como <code>/(blah)*/</code> o
          que geraria a seleção de "blahblahblah" na frase "blahblahblah ração
          para gatos" ou de "blah" na frase "algoritmo blahut-arimoto".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Corresponde o item precedente <em>x</em> uma ou mais vezes.
          Equivalente a <code>{1,}</code>.
        </p>
        <p>
          Por exemplo, <code>/a+/</code> corresponde o "o" em "doce" e todos os
          "o"s em "doooooooce".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>Corresponde o item precedente <em>x</em> nenhuma ou uma vez.</p>
        <p>
          Por exemplo, <code>/e?le?/</code> corresponde o "el" em "angel" e o
          "le" em "angle."
        </p>
        <p>
          If used imediatamente after qualquer dos quantifiers <code>*</code>,
          <code>+</code>, <code>?</code>, ou <code>{}</code>, makes o quantifier
          non-greedy (matching o minimum number of vezes), como opposed to o
          default, which é greedy (matching o maximum number of vezes).
        </p>
        <p>
          Also used em lookahead assertions, described under <code>(?=)</code>,
          <code>(?!)</code>, e <code>(?:)</code> em this table.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>(?=<em>y</em>)</code>
      </td>
      <td>
        Corresponde <code><em>x</em></code> apenas se <code><em>x</em></code> é
        seguido por <code><em>y</em></code
        >. Por exemplo, <code>/Jack(?=Sprat)/</code> corresponde "Jack" apenas
        se for seguido por "Sprat".
        <code>/Jack(?=Sprat|Frost)/</code> corresponde "Jack" apenas se for
        seguido por "Sprat" ou "Frost". Porém, nem "Sprat" nem "Frost" são
        partes do resultado da correspondência.
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>(?!<em>y</em>)</code>
      </td>
      <td>
        <p>
          Corresponde <code><em>x</em></code> apenas se
          <code><em>x</em></code> não é seguido por <code><em>y</em></code
          >. Por exemplo, <code>/\d+(?!\.)/</code> corresponde um número apenas
          se não for seguido por um ponto.
        </p>
        <p>
          <code>/\d+(?!\.)/.exec('3.141')</code> corresponde "141", mas não
          "3.141".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          Corresponde <code><em>x</em></code
          ><em> </em>ou <code><em>y</em></code
          ><em>.</em>
        </p>
        <p>
          Por exemplo, <code>/verde|vermelha/</code> corresponde "verde" em
          "maçã verde" e "vermelha" em "maçã vermelha".
        </p>
        <p>
          Entretanto, a primeira expressão tem preferência. Se uma string fosse
          corresponder às duas expressões, ela vai corresponder à que aparece do
          lado esquerdo do operador <code>|</code>. Por exemplo,
          <code>/maçãs|maçã/</code> corresponde "maçãs" na frase "<em>maçãs</em>
          vermelhas" e "maçã" na frase "<em>maçã</em> verde".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Onde <code><em>n</em></code> é um número inteiro positivo. Corresponde
          exatamente <code><em>n</em></code> ocorrências do item precedente
          <em>x</em>.
        </p>
        <p>
          Por exemplo, <code>/o{2}/</code> não corresponde o "o" em
          "brigadeiro", mas corresponde todos os dois "o"s em
          "brigadeir<em>oo</em>", e o dois primeiros "o"s em
          "brigadeir<em>oo</em>o".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Onde <code><em>n</em></code> é um número inteiro positivo. Corresponde
          <em>pelo menos</em> <code><em>n</em></code> ocorrências do item
          precedente <em>x </em>(sem que haja um limite superior).
        </p>
        <p>
          Por exemplo, <code>/o{2,}/</code> não corresponde o "o" em
          "brigadeiro", mas corresponde todos os "o"s em "brigadeir<em>oo</em>" e
          em "brigadeir<em>ooooooooo</em>".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          Onde <code><em>n</em></code> e <code><em>m</em></code> são números
          inteiros positivos. Corresponde pelo menos <code><em>n</em></code> e
          no máximo <code><em>m</em></code> ocorrências do item precedente
          <em>x</em>.
        </p>
        <p>
          Por exemplo, <code>/o{2,4}/</code> corresponde nada em "brigadeiro",
          os dois "o"s em "brigadeir<em>oo</em>", os três "o"s em
          "brigadeir<em>ooo</em>", e os primeiros quatro "o"s em
          "brigadeir<em>oooo</em>o".
        </p>
        <p>
          É importante perceber que no último caso a correspondência não inclui
          o último "o" de "brigadeirooooo". Isso se deve ao fato do operador
          quantificador ter definido o número máximo de ocorrências como 4,
          ignorando a quinta repetição do caractere.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code><em>x</em>*?</code><br /><code
            ><em>x</em>+?<br /><em>x??</em><br /><em>x{n,}?</em><br /><em
              >x{n,m}?</em
            ></code
          >
        </p>
      </td>
      <td>
        <p>
          <strong
            >Operadores <em>non-greedy </em>ou<em> lazy</em> (não-gulosos ou
            preguiçosos)</strong
          ><br />Esses operadores com a <code>?</code> no final, operam de
          maneira semelhante aos seus análogos sem <code>?</code> mostrados
          acima, correspondendo múltiplas ocorrências do item precedente
          <em>x.</em> Entretanto, desta vez a ocorrência selecionada será a
          mínima possível.
        </p>
        <p>
          No exemplo <code>/(blah)*?/</code>, diante da frase "blahblahblah
          ração para gatos", nada seria selecionado, pois a ocorrência mínima
          aceita pelo operador <code>*?</code> seria ocorrência de 0 (zero)
          vezes da <em>string</em> "blah", o que resulta no nada.
        </p>
        <p>
          Já a expressão regular <code>/(blah)+?/</code>, diante da mesma frase,
          corresponderia a "blah", que é a ocorrência mínima aceita pelo
          operador <code>+?</code><em>, </em>ou seja, 1 (uma) repetição da
          sequência "blah".
        </p>
        <p>
          Em outro exemplo com mais aplicação prática, digamos que se quer
          corresponder todos os termos que ficam entre aspas em um texto. Se
          fizéssemos simplesmente a <em>regex</em> <code>/".*"/</code>, diante
          de um texto com múltiplas ocorrências de termos entre aspas, como:
          <em>'Eu "gosto" muito de "estudar" regex'</em>, a nossa expressão
          regular seria gulosa e selecionaria o maior texto possível que
          correspondesse à definição, nesse caso, selecionando '<em
            >"gosto" muito de "estudar"</em
          >', pois todo esse texto está compreendido entre a primeira aspa
          (antes de <em>'gosto'</em>) e a última aspa (após <em>'estudar'</em>),
          o que é um resultado talvez indesejado.<br />Se usarmos a regex
          <code>/".*?"/</code>, com o operador não-guloso, as correspondências
          para a mesma frase seriam '<em>"gosto"</em>' e '<em>"estudar"</em>'
          separadamente, conforme era a intenção inicial.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Propriedades

- {{jsxref("RegExp.prototype")}}
  - : Permite a adição de propriedades a todos os objetos.
- `RegExp.length`
  - : O valor of `RegExp.length` é 2.

## Métodos

O objeto global `RegExp não possui métodos próprios, no entanto, herda alguns métodos através da cadeia de prototype.`

## Objetos e instancias

### Propriedades

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype', 'Properties')}}

### Métodos

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype', 'Methods')}}

## Exemplos

### Exemplo: Usando uma expressão regular para mudar o fomato dos dados

O seguinte script usa o método {{jsxref("String.prototype.replace()", "replace()")}} da instância de {{jsxref("Global_Objects/String", "String")}} para casar o nome no format _nome sobrenome_ e produzir no formato _sobrenome, nome_. No texto substituto, o script usa `$1` e `$2` para indicar os respectivos parênteses de casamento no padrão da expressão regular.

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Isto retornará "Smith, John".

### Exemplo: Usando expressões regulares para quebrar linhas com diferentes **fins de linha**/**quebras de linha**

O final de linha padrão depende da plataforma utilizada (Unix, Windows, etc.). A divisão(_split_) de linha fornecida neste exemplo funciona com todas as plataformas.

```js
var text = "Um texto\nE mais um pouco\r\nE ainda mais\rEsse é o fim";
var lines = text.split(/\r\n|\r|\n/);
console.log(lines); // prints [ 'Um texto', 'E mais um pouco', 'E ainda mais', 'Esse é o fim' ]
```

Note que a ordem dos padrões na expressão regular importa.

### Exemplo: Usando expressão regular sobre múltiplas linhas

```js
var s = "Please yes\nmake my day!";
s.match(/yes.*day/);
// Retorna null
s.match(/yes[^]*day/);
// Retorna'yes\nmake my day'
```

### Exemplo: Using a expressão regular com o "sticky" flag

Este exemplo mostra como utilizar a sticky flag em expressões regulares.

```js
var text = "First line\nSecond line";
var regex = /(\S+) line\n?/y;

var match = regex.exec(text);
console.log(match[1]); // prints 'First'
console.log(regex.lastIndex); // prints '11'

var match2 = regex.exec(text);
console.log(match2[1]); // prints 'Second'
console.log(regex.lastIndex); // prints '22'

var match3 = regex.exec(text);
console.log(match3 === null); // prints 'true'
```

One can test at run-time whether o sticky flag é supported, using `try { … } catch { … }`. Para this, either an `eval(…)` expression ou o `RegExp(regex-string, flags-string)` syntax must be used (since o `/regex/flags` notation é processed at compile-time, so throws an exception before o `catch` block é encountered). Por exemplo:

```js
var supports_sticky;
try {
  RegExp("", "y");
  supports_sticky = true;
} catch (e) {
  supports_sticky = false;
}
console.log(supports_sticky); // prints 'true'
```

### Exemplo: Expressão regular e Unicode caracteres

As mentioned above, `\w` ou `\W` only corresponde ASCII based caracteres; por exemplo, "a" to "z", "A" to "Z", "0" to "9" e "\_". To match caracteres from other languages such como Cyrillic ou Hebrew, use `\uhhhh`, onde "hhhh" é o caractere's Unicode valor em hexadecimal. This exemplo demonstrates how one can separate out Unicode caracteres from uma palavra.

```js
var text = "Образец text на русском языке";
var regex = /[\u0400-\u04FF]+/g;

var match = regex.exec(text);
console.log(match[0]); // prints 'Образец'
console.log(regex.lastIndex); // prints '7'

var match2 = regex.exec(text);
console.log(match2[0]); // prints 'на' [não print 'text']
console.log(regex.lastIndex); // prints '15'

// e assim vai
```

Here's an external resource para getting o complete Unicode block range para different scripts: [Regexp-unicode-block](http://kourge.net/projects/regexp-unicode-block).

### Exemplo: Extracting subdomain name from URL

```js
var url = "http://xxx.domain.com";
console.log(/[^.]+/.exec(url)[0].substr(7)); // prints 'xxx'
```

## Especificações

| Specification                                                           | Status             | Comment                                            |
| ----------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition.                                                 | Standard           | Initial definition. Implemented em JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.10', 'RegExp')}}                           | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-regexp-regular-expression-objects', 'RegExp')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.RegExp")}}

## Veja também

- [Regular Expressions](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) chapter no [JavaScript Guide](/pt-BR/docs/Web/JavaScript/Guide)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
