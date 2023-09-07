---
title: Cascata, especificidade e herança
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}

O objetivo desta lição é desenvolver sua compreensão de alguns dos conceitos mais fundamentais do CSS — a cascata, especificidade e herança — que controlam como o CSS é aplicado ao HTML e como os conflitos entre as declarações de estilo são resolvidos.

Embora trabalhar com esta lição possa parecer menos relevante imediatamente e um pouco mais acadêmico do que algumas outras partes do curso, a compreensão desses conceitos irá salvar-lhe de muita dor de cabeça mais tarde! Incentivamos você a estudar cuidadosamente esta seção e verificar se compreende os conceitos antes de prosseguir.

<table>
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimentos básicos em informática,
        <a
          href="/pt-BR/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >software básico instalado</a
        >, conhecimentos básicos de
        <a
          href="/pt-BR/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabalhando com arquivos</a
        >, noções básicas de HTML (estudo
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
         >), e uma ideia de como funciona o CSS (estudo
        <a href="/pt-BR/docs/Learn/CSS/First_steps">Primeiros passos do CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Para aprender sobre a cascata e a especificidade, e como a herança funciona em
        CSS.
      </td>
    </tr>
  </tbody>
</table>

## Regras conflitantes

CSS significa **Folhas de Estilo em Cascata**, e a primeira palavra _cascading_ é incrivelmente importante de se entender — a maneira como a cascata se comporta é a chave para entender o CSS.

Em algum momento, você estará trabalhando em um projeto e descobrirá que o CSS que você pensou que deveria ser aplicado a um elemento não está funcionando. Muitas vezes, o problema é que você cria duas regras que aplicam valores diferentes da mesma propriedade ao mesmo elemento. [**Cascata**](/pt-BR/docs/Web/CSS/Cascade) e o conceito intimamente relacionado de [**especificidade**](/pt-BR/docs/Web/CSS/Specificity) são mecanismos que controlam qual regra se aplica quando há tal conflito. A regra que está estilizando seu elemento pode não ser a que você espera, então você precisa entender como esses mecanismos funcionam.

Também significativo aqui é o conceito de [**herança**](/pt-BR/docs/Web/CSS/Inheritance), o que significa que algumas propriedades CSS por padrão herdam valores definidos no elemento pai do elemento atual e algumas não. Isso também pode causar algum comportamento inesperado.

Vamos começar dando uma olhada rápida nas principais coisas com as quais estamos lidando, depois veremos cada uma delas e veremos como elas interagem umas com as outras e com seu CSS. Estes podem parecer um conjunto complicado de conceitos para entender. À medida que você pratica escrever CSS a maneira como ele funciona se tornará mais óbvia para você.

### Cascata

A [**cascata**](/pt-BR/docs/Web/CSS/Cascade) nas folhas de estilo — em um nível muito simples, isso significa que a origem, a camada em cascata e a ordem das regras CSS são importantes. Quando duas regras da mesma camada em cascata se aplicam e ambas têm igual especificidade, aquela que for definida por último na folha de estilo é a que será utilizada.

No exemplo abaixo, temos duas regras que podem ser aplicadas ao {{glossary("element", "elemento")}} `<h1>`. O conteúdo `<h1>` acaba sendo colorido de azul. Isso ocorre porque ambas as regras são da mesma fonte, têm um seletor de elemento idêntico e, portanto, carregam a mesma especificidade, mas a última na ordem da fonte vence.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 500)}}

### Especificidade

[Especificidade](/pt-BR/docs/Web/CSS/Specificity) é o algoritmo que o navegador usa para decidir qual valor de propriedade é aplicado a um elemento. Se vários blocos de estilo tiverem seletores diferentes que configuram a mesma propriedade com valores diferentes e visam o mesmo elemento, a especificidade decide o valor da propriedade que será aplicado ao elemento. A especificidade é basicamente uma medida de quão específica será a seleção de um seletor:

- Um seletor de elemento é menos específico; ele selecionará todos os elementos desse tipo que aparecem em uma página, por isso tem menos peso. Os seletores de pseudoelementos têm a mesma especificidade que os seletores de elementos regulares.
- Um seletor de classe é mais específico; ele selecionará apenas os elementos em uma página que tenham um valor de atributo `class` específico, portanto, terá mais peso. Seletores de atributo e pseudoclasses têm o mesmo peso que uma classe.

Abaixo, temos novamente duas regras que podem ser aplicadas ao elemento `<h1>`. O conteúdo `<h1>` abaixo acaba sendo colorido de vermelho porque o seletor de classe `main-heading` dá à sua regra uma especificidade maior. Portanto, mesmo que a regra com o seletor de elemento `<h1>` apareça mais abaixo na ordem de origem, aquela com maior especificidade, definida usando o seletor de classe, será aplicada.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 600)}}

Explicaremos o algoritmo de especificidade mais adiante.

### Herança

A herança também precisa ser entendida neste contexto — alguns valores de propriedade CSS definidos em elementos pais são herdados por seus elementos filhos, e alguns não.

Por exemplo, se você definir `color` e `font-family` em um elemento, todos os elementos dentro dele também serão estilizados com essa cor e fonte, a menos que você tenha aplicado valores diferentes de cor e fonte diretamente a eles.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 650)}}

Algumas propriedades não herdam — por exemplo, se você definir um {{cssxref("width")}} de 50% em um elemento, todos os seus descendentes não obterão uma largura de 50% da largura de seu pai. Se fosse esse o caso, seria muito frustrante usar CSS!

> **Nota:** Nas páginas de referência de propriedade MDN CSS, você pode encontrar uma caixa de informações técnicas chamada "Definição formal", que lista vários pontos de dados sobre essa propriedade, incluindo se ela é herdada ou não. Consulte a [seção de definição formal da propriedade de cores](/pt-BR/docs/Web/CSS/color#formal_definition) como exemplo.

## Compreender como os conceitos funcionam juntos

Esses três conceitos (cascata, especificidade e herança) juntos controlam qual CSS se aplica a qual elemento. Nas seções abaixo, veremos como eles funcionam juntos. Às vezes pode parecer um pouco complicado, mas você começará a se lembrar deles à medida que adquirir mais experiência com CSS e sempre poderá procurar os detalhes se esquecer! Mesmo desenvolvedores experientes não se lembram de todos os detalhes.

O vídeo a seguir mostra como você pode usar o Firefox DevTools para inspecionar a cascata, a especificidade e mais de uma página:

{{EmbedYouTube("Sp9ZfSvpf7A")}}

## Compreendendo a herança

Começaremos pela herança. No exemplo abaixo, temos um elemento {{HTMLElement("ul")}} com dois níveis de listas não ordenadas aninhadas dentro dele. Demos ao `<ul>` externo uma borda, preenchimento e cor de fonte.

A propriedade `color` é uma propriedade herdada. Assim, o valor da propriedade `color` é aplicado aos filhos diretos e também aos filhos indiretos — os filhos imediatos `<li>`s e aqueles dentro da primeira lista aninhada. Em seguida, adicionamos a classe `special` à segunda lista aninhada e aplicamos uma cor diferente a ela. Isso então herda através de seus filhos.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 1100)}}

Propriedades como `width` (como mencionado anteriormente), `margin`, `padding` e `border` não são propriedades herdadas. Se uma borda fosse herdada pelos filhos neste exemplo de lista, todas as listas e itens de lista ganhariam uma borda - provavelmente não é um efeito que desejaríamos!

Embora cada página de propriedade CSS liste se a propriedade é herdada ou não, muitas vezes você pode adivinhar o mesmo intuitivamente se souber qual aspecto o valor da propriedade estilizará.

### Controlando a herança

O {{glossary("CSS")}} fornece cinco valores de propriedades universais especiais para controlar a herança. Cada propriedade CSS aceita esses valores.

- {{cssxref("inherit")}}
  - : define o valor da propriedade aplicada a um elemento selecionado para ser igual ao de seu elemento pai. Efetivamente, isso "ativa a herança".
- {{cssxref("initial")}}
  - : define o valor da propriedade aplicada a um elemento selecionado para o [valor inicial](/pt-BR/docs/Web/CSS/initial_value) dessa propriedade.
- {{cssxref("revert")}}
  - : redefine o valor da propriedade aplicado a um elemento selecionado para o estilo padrão do navegador, em vez dos padrões aplicados a essa propriedade. Esse valor age como {{cssxref("unset")}} em muitos casos.
- {{cssxref("revert-layer")}}
  - : Redefine o valor da propriedade aplicada a um elemento selecionado para o valor estabelecido em uma [camada em cascata](/pt-BR/docs/Web/CSS/@layer) anterior.
- {{cssxref("unset")}}
  - : Redefine a propriedade para seu valor natural, o que significa que, se a propriedade for herdada naturalmente, ela agirá como `herdar`, caso contrário, agirá como `inicial`.

> **Nota:** Consulte [Tipos de origem](/pt-BR/docs/Web/CSS/Cascade#origin_types) para obter mais informações sobre cada um deles e como eles funcionam.

Podemos olhar para uma lista de links e explorar como funcionam os valores universais. O exemplo ao vivo abaixo permite que você jogue com o CSS e veja o que acontece quando você faz alterações. Brincar com código é realmente a melhor maneira de entender melhor HTML e CSS.

Por exemplo:

1. O segundo item da lista tem a classe `my-class-1` aplicada. Isso define a cor do elemento `<a>` aninhado dentro dele como `inherit`. Se você remover a regra, como ela altera a cor do link?
2. Você entende por que o terceiro e o quarto elos são da cor que são? O terceiro link é definido como `initial`, o que significa que ele usa o valor inicial da propriedade (neste caso preto) e não o padrão do navegador para links, que é azul. O quarto é definido como `unset`, o que significa que o texto do link usa a cor do elemento pai, verde.
3. Qual dos links mudará de cor se você definir uma nova cor para o elemento `<a>` — por exemplo `a { color: red; }`?
4. Depois de ler a próxima seção sobre como redefinir todas as propriedades, volte e altere a propriedade `color` para `all`. Observe como o segundo link está em uma nova linha e tem um marcador. Que propriedades você acha que foram herdadas?

{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 800)}}

### Redefinindo todos os valores de propriedade

A propriedade abreviada CSS [`all`](/pt-BR/docs/Web/CSS/all) pode ser usada para aplicar um desses valores de herança a (quase) todas as propriedades de uma vez. Seu valor pode ser qualquer um dos valores de herança (`inherit`, `initial`, `revert`, `revert-layer` ou `unset`). É uma maneira conveniente de desfazer alterações feitas em estilos para que você possa voltar a um ponto de partida conhecido antes de iniciar novas alterações.

No exemplo abaixo, temos dois blockquotes. O primeiro tem um estilo aplicado ao próprio elemento blockquote. O segundo tem uma classe aplicada ao blockquote, que define o valor de `all` como `unset`.

{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 800)}}

Tente definir o valor de `all` para alguns dos outros valores disponíveis e observe qual é a diferença.

## Entendendo a cascata

Agora entendemos que a herança é o motivo pelo qual um parágrafo aninhado profundamente na estrutura do seu HTML tem a mesma cor do CSS aplicado ao corpo. A partir das lições introdutórias, entendemos como alterar o CSS aplicado a algo em qualquer ponto do documento — seja atribuindo CSS a um elemento ou criando uma classe. Veremos agora como cascata define quais regras CSS se aplicam quando mais de um bloco de estilo aplica a mesma propriedade, mas com valores diferentes, ao mesmo elemento.

Há três fatores a serem considerados, listados aqui em ordem crescente de importância. Os posteriores anulam os anteriores:

1. **Ordem de origem**
2. **Especificidade**
3. **Importância**

Vamos examiná-los para ver como os navegadores descobrem exatamente qual CSS deve ser aplicado.

### Ordem de origem

Já vimos como a ordem de origem é importante para a cascata. Se você tiver mais de uma regra, todas com exatamente o mesmo peso, a que vier por último no CSS vencerá. Você pode pensar nisso como: a regra que está mais próxima do próprio elemento sobrescreve as anteriores até que a última vença e estilize o elemento.

A ordem da origem só importa quando o peso da especificidade das regras é o mesmo, então vamos ver a especificidade:

### Especificidade

Muitas vezes, você se deparará com uma situação em que sabe que uma regra vem depois na folha de estilo, mas uma regra conflitante anterior é aplicada. Isso acontece porque a regra anterior tem uma **especificidade maior** — ela é mais específica e, portanto, está sendo escolhida pelo navegador como aquela que deve estilizar o elemento.

Como vimos anteriormente nesta lição, um seletor de classe tem mais peso do que um seletor de elemento, portanto, as propriedades definidas no bloco de estilo de classe substituirão aquelas definidas no bloco de estilo de elemento.

Algo a observar aqui é que, embora estejamos pensando em seletores e nas regras que são aplicadas ao texto ou componente que eles selecionam, não é toda a regra que é substituída, apenas as propriedades que são declaradas em vários lugares.

Esse comportamento ajuda a evitar a repetição em seu CSS. Uma prática comum é definir estilos genéricos para os elementos básicos e, a seguir, criar classes para os diferentes. Por exemplo, na folha de estilo abaixo, definimos estilos genéricos para cabeçalhos de nível 2 e, em seguida, criamos algumas classes que alteram apenas algumas das propriedades e valores. Os valores definidos inicialmente são aplicados a todos os cabeçalhos, depois os valores mais específicos são aplicados aos cabeçalhos com as classes.

{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 1000)}}

Vamos agora dar uma olhada em como o navegador calculará a especificidade. Já sabemos que um seletor de elemento tem baixa especificidade e pode ser sobrescrito por uma classe. Essencialmente, um valor em pontos é concedido a diferentes tipos de seletores, e somando-os fornece o peso desse seletor específico, que pode ser avaliado em relação a outras correspondências em potencial.

A quantidade de especificidade que um seletor tem é medida usando três valores diferentes (ou componentes), que podem ser pensados como colunas ID, CLASS e ELEMENT nas centenas, dezenas e unidades:

- **Identificadores**: Pontue um nesta coluna para cada seletor de ID contido no seletor geral.
- **Classes**: pontue um nesta coluna para cada seletor de classe, seletor de atributo ou pseudoclasse contido no seletor geral.
- **Elementos**: Pontue um nesta coluna para cada seletor de elemento ou pseudoelemento contido no seletor geral.

> **Nota:** O seletor universal ([`*`](/pt-BR/docs/Web/CSS/Universal_selectors)), [combinators](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Combinators) (`+`, `>`, `~`, ' ') e seletor de ajuste de especificidade ([`:where()`](/pt-BR/docs/Web/CSS/:where)) juntamente com seus parâmetros, não têm efeito na especificidade.

A negação ([`:not()`](/pt-BR/docs/Web/CSS/:not)), seletor relacional ([`:has()`](/pt-BR/docs/Web/CSS /:has)), e as pseudoclasses matches-any ([`:is()`](/pt-BR/docs/Web/CSS/:is)) não têm efeito na especificidade, mas suas parâmetros fazem. A especificidade que cada um contribui para o algoritmo de especificidade é a especificidade do seletor no parâmetro que tem maior peso.

A tabela a seguir mostra alguns exemplos isolados para você entrar no clima. Tente passar por eles e certifique-se de entender por que eles têm a especificidade que lhes demos. Ainda não abordamos os seletores em detalhes, mas você pode encontrar detalhes de cada seletor no MDN [referência de seletores](/pt-BR/docs/Web/CSS/CSS_Selectors).

| Seletor                                   | Identificadores | Classes | Elementos | Especificidade total |
| ----------------------------------------- | --------------- | ------- | --------- | -------------------- |
| `h1`                                      | 0               | 0       | 1         | 0-0-1                |
| `h1 + p::first-letter`                    | 0               | 0       | 3         | 0-0-3                |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2         | 0-2-2                |
| `#identifier`                             | 1               | 0       | 0         | 1-0-0                |
| `button:not(#mainBtn, .cta`)              | 1               | 0       | 1         | 1-0-1                |

Antes de prosseguirmos, vamos ver um exemplo em ação.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 800)}}

Então, o que está acontecendo aqui? Em primeiro lugar, estamos interessados apenas nas sete primeiras regras deste exemplo e, como você notará, incluímos seus valores de especificidade em um comentário antes de cada uma.

- Os dois primeiros seletores estão competindo pelo estilo da cor de fundo do link. O segundo ganha e torna o fundo azul porque tem um seletor de ID extra na cadeia: sua especificidade é 2-0-1 vs. 1-0-1.
- Os seletores 3 e 4 estão competindo pelo estilo da cor do texto do link. O segundo ganha e torna o texto branco porque, embora tenha um seletor de elemento a menos, o seletor ausente é trocado por um seletor de classe, que tem mais peso do que os seletores de elemento infinito. A especificidade vencedora é 1-1-3 vs. 1-0-4.
- Os seletores de 5 a 7 estão competindo pelo estilo da borda do link ao passar o mouse. O seletor 6 claramente perde para o seletor 5 com uma especificidade de 0-2-3 vs. 0-2-4; ele tem um seletor de elemento a menos na cadeia. O seletor 7, no entanto, supera os seletores 5 e 6 porque tem o mesmo número de subseletores na cadeia que o seletor 5, mas um elemento foi trocado por um seletor de classe. Assim, a especificidade vencedora é 0-3-3 vs. 0-2-3 e 0-2-4.

> **Nota:** Cada tipo de seletor tem seu próprio nível de especificidade que não pode ser substituído por seletores com um nível de especificidade inferior. Por exemplo, um seletor _million_ **class** combinado não seria capaz de sobrescrever a especificidade do seletor _one_ **id**.
>
> A melhor forma de avaliar a especificidade é pontuar os níveis de especificidade individualmente começando do mais alto e passando para o mais baixo quando necessário. Somente quando há um empate entre as pontuações do seletor dentro de uma coluna de especificidade, você precisa avaliar a próxima coluna abaixo; caso contrário, você pode desconsiderar os seletores de especificidade mais baixa, pois eles nunca podem sobrescrever os seletores de especificidade mais alta.

### Estilos Embutidos

Os estilos embutidos, ou seja, a declaração de estilo dentro de um atributo [`style`](/pt-BR/docs/Web/HTML/Global_attributes#style), têm precedência sobre todos os estilos normais, independentemente da especificidade. Tais declarações não possuem seletores, mas sua especificidade pode ser interpretada como 1-0-0-0; sempre mais do que qualquer outro peso de especificidade, não importa quantos IDs estejam nos seletores.

### !important

Há um pedaço especial de CSS que você pode usar para anular todos os cálculos acima, até mesmo estilos embutidos - o sinalizador `!important`. No entanto, você deve ter muito cuidado ao usá-lo. Este sinalizador é usado para tornar uma propriedade individual e um par de valores a regra mais específica, substituindo assim as regras normais da cascata, incluindo estilos embutidos normais.

> **Nota:** É útil saber que o sinalizador `!important` existe para que você saiba o que é quando o encontrar no código de outras pessoas. **Entretanto, nós recomendamos fortemente que você nunca o use, a menos que seja absolutamente necessário.** O sinalizador `!important` muda a maneira como a cascata normalmente funciona, então pode tornar os problemas de depuração de CSS muito difíceis de resolver, especialmente em um grande folha de estilo.

Dê uma olhada neste exemplo onde temos dois parágrafos, um dos quais tem um ID.

{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 800)}}

Vamos examinar isso para ver o que está acontecendo - tente remover algumas das propriedades para ver o que acontece se você achar difícil de entender:

1. Você verá que os valores {{cssxref("color")}} e {{cssxref("padding")}} da terceira regra foram aplicados, mas os valores {{cssxref("background-color")}} não tem. Por que? Realmente, todos os três certamente devem ser aplicados porque as regras posteriores na ordem de origem geralmente substituem as regras anteriores.
2. No entanto, as regras acima vencem porque os seletores de classe têm maior especificidade do que os seletores de elemento.
3. Ambos os elementos têm um [`class`](/pt-BR/docs/Web/HTML/Global_attributes#class) de `better`, mas o segundo tem um [`id`](/pt-BR/docs /Web/HTML/Global*attributes#id) de `vencedor` também. Como os IDs têm uma especificidade \_ainda maior* do que as classes (você só pode ter um elemento com cada ID exclusivo em uma página, mas muitos elementos com a mesma classe — os seletores de ID são _muito específicos_ no que visam), a cor de fundo vermelha e o 1px a borda preta deve ser aplicada ao 2º elemento, com o primeiro elemento obtendo a cor de fundo cinza e sem borda, conforme especificado pela classe.
4. O segundo elemento _fica_ com a cor de fundo vermelha, mas sem borda. Por que? Por causa do sinalizador `!important` na segunda regra. Adicionar o sinalizador `!important` depois de `border: none` significa que esta declaração prevalecerá sobre o valor `border` na regra anterior, mesmo que o seletor de ID tenha maior especificidade.

> **Nota:** A única maneira de substituir uma declaração importante é incluir outra declaração importante com a _mesma especificidade_ posteriormente na ordem de origem, ou uma com maior especificidade, ou incluir uma declaração importante em uma camada em cascata anterior (nós ainda não cobrimos as camadas em cascata).

Uma situação em que você pode ter que usar o sinalizador `!important` é quando você está trabalhando em um CMS onde você não pode editar os módulos CSS principais, e você realmente quer sobrescrever um estilo embutido ou uma declaração importante que não pode ser substituído de qualquer outra forma. Mas realmente, não use se puder evitá-lo.

## O efeito da localização do CSS

Por fim, é importante observar que a precedência de uma declaração CSS depende de qual folha de estilo e camada em cascata ela é especificada.

É possível que os usuários definam folhas de estilo personalizadas para substituir os estilos do desenvolvedor. Por exemplo, um usuário com deficiência visual pode querer definir o tamanho da fonte em todas as páginas da web que visita para ter o dobro do tamanho normal para permitir uma leitura mais fácil.

Também é possível declarar estilos de desenvolvedor em camadas em cascata: você pode fazer com que estilos sem camadas substituam estilos declarados em camadas ou você pode fazer com que estilos declarados em camadas posteriores substituam estilos de camadas declaradas anteriormente. Por exemplo, como desenvolvedor, talvez você não consiga editar uma folha de estilo de terceiros, mas pode importar a folha de estilo externa para uma camada em cascata para que todos os seus estilos substituam facilmente os estilos importados sem se preocupar com a especificidade do seletor de terceiros.

### Ordem das declarações de substituição

Declarações conflitantes serão aplicadas na seguinte ordem, com as posteriores substituindo as anteriores:

1. Declarações nas folhas de estilo do agente do usuário (por exemplo, os estilos padrão do navegador, usados quando nenhum outro estilo é definido).
2. Declarações normais em folhas de estilo do usuário (estilos personalizados definidos por um usuário).
3. Declarações normais em folhas de estilo de autor (esses são os estilos definidos por nós, os desenvolvedores da web).
4. Declarações importantes nas folhas de estilo do autor.
5. Declarações importantes nas folhas de estilo do usuário.
6. Declarações importantes nas folhas de estilo do agente do usuário.

> **Nota:** A ordem de precedência é invertida para estilos sinalizados com `!important`. Faz sentido que as folhas de estilo dos desenvolvedores da Web substituam as folhas de estilo do usuário, para que o design possa ser mantido como pretendido; no entanto, às vezes os usuários têm boas razões para substituir os estilos de desenvolvedor da Web, como mencionado acima, e isso pode ser feito usando `!important` em suas regras.

### Ordem das camadas em cascata

Mesmo que [camadas em cascata](/pt-BR/docs/Web/CSS/@layer) seja um tópico avançado e você não possa usar esse recurso imediatamente, é importante entender como as camadas são colocadas em cascata.

Quando você declara CSS em camadas em cascata, a ordem de precedência é determinada pela ordem em que as camadas são declaradas. Os estilos CSS declarados fora de qualquer camada são combinados, na ordem em que esses estilos são declarados, em uma camada sem nome, como se fosse a última camada declarada. Com estilos concorrentes normais (não importantes), as camadas posteriores têm precedência sobre as camadas definidas anteriormente. No entanto, para estilos sinalizados com `!important`, a ordem é inversa, com estilos importantes em camadas anteriores tendo precedência sobre estilos importantes declarados em camadas subsequentes ou fora de qualquer camada. Os estilos embutidos têm precedência sobre todos os estilos de autor, independentemente da camada.

Quando você tem vários blocos de estilo em diferentes camadas fornecendo valores concorrentes para uma propriedade em um único elemento, a ordem na qual as camadas são declaradas determina a precedência. A especificidade entre as camadas não importa, mas a especificidade dentro de uma única camada ainda importa.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-layers.html", '100%', 800)}}

Vamos discutir algumas coisas do exemplo acima para entender o que está acontecendo. Duas camadas foram declaradas, `firstLayer` e `secondLayer`, nessa ordem. Mesmo que a especificidade em `secondLayer` seja a mais alta, nenhuma propriedade dessa declaração é usada. Por que? Como os estilos normais sem camadas têm precedência sobre os estilos normais com camadas, independentemente da especificidade, e os estilos com camadas importantes têm precedência sobre os estilos importantes declarados em camadas posteriores, novamente, independentemente da especificidade.

Se você alterar a primeira linha do CSS neste exemplo para ler `@layer secondLayer, firstLayer;`, você alterará a ordem de declaração da camada e todos os estilos importantes de `firstLayer` serão alterados para seus respectivos valores em `secondLayer` .

## Teste suas habilidades!

Você chegou ao final deste artigo, mas consegue se lembrar das informações mais importantes? Você pode encontrar alguns testes adicionais para verificar se reteve essas informações antes de prosseguir — consulte [Teste suas habilidades: The Cascade](/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_tasks).

## Resumo

Se você entendeu a maior parte deste artigo, então muito bem — você começou a se familiarizar com a mecânica fundamental do CSS. A seguir, examinaremos mais profundamente as [Camadas em cascata](/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_layers).

Se você não entendeu totalmente a cascata, a especificidade e a herança, não se preocupe! Esta é definitivamente a coisa mais complicada que abordamos até agora no curso e é algo que mesmo os desenvolvedores web profissionais às vezes acham complicado. Aconselhamos que você retorne a este artigo algumas vezes ao longo do curso e continue pensando sobre isso.

Volte aqui se você começar a encontrar problemas estranhos com estilos que não se aplicam conforme o esperado. Pode ser um problema de especificidade.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}
