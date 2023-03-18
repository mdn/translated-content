---
title: Cascade and inheritance
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
original_slug: Aprender/CSS/Construindo_blocos/Cascade_and_inheritance
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}

O objetivo desta lição é desenvolver sua compreensão para alguns dos conceitos mais fundamentais de CSS - cascata, especificidade e herança - que controlam como o CSS é aplicado ao HTML e como os conflitos são resolvidos.

Embora esta lição possa parecer menos pouco relevante e mais acadêmico do que algumas outras partes do curso, a compreensão desses itens (cascata, especificidade e herança), poupará muito tempo no futuro! Recomendamos que você trabalhe nesta seção com cuidado e verifique se entendeu os conceitos antes de prosseguir.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Basic computer literacy,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, basic knowledge of
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >, HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), and an idea of how CSS works (study
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectivo:</th>
      <td>
        Aprender sobre cascata e especificidade, e como funciona a herança em
        CSS.
      </td>
    </tr>
  </tbody>
</table>

## Regras de Conflitos

CSS - **Cascading Style Sheets**, _cascata_ (a primeira palavra) é muito importante compreender - a maneira como a _cascata_ se comporta é a chave para entender **CSS**.

Em algum momento, você estará trabalhando em um projeto e descobrirá que o CSS que você pensou que deveria ser aplicado a um elemento não está funcionando. Normalmente, o problema é que você criou duas regras que poderiam se aplicar ao mesmo elemento. A cascata e o conceito intimamente relacionado com especificidade que são mecanismos que controlam qual regra se aplica quando existe tal conflito. A regra que define o estilo do seu elemento pode não ser a esperada, portanto, você precisa entender como esses mecanismos funcionam.

Também é importante aqui é o conceito de **herança**, o que significa que algumas propriedades CSS por padrão herdam os valores definidos no elemento pai do elemento atual, e outras não. Isso também pode causar algum comportamento que você não esperava.

Vamos começar dando uma olhada rápida nas nestes itens com os quais estamos lidando (cascata, especificidade e herança), então vamos ver como elas interagem entre si e com o CSS. Isso pode parecer um conjunto de conceitos difíceis de entender, mas a medida que você pratica mais a escrita de CSS, o funcionamento vai se tornando mais óbvio para você.

### The cascade - A Cascata

Stylesheets **cascade (Cascata)** — em um nível muito simples, significa que a ordem das regras CSS é importante; quando se aplicam duas regras com especificidade igual, a que vier por último no CSS é a que será usada.

No exemplo abaixo, temos duas regras que podem ser aplicadas ao h1. O h1 acaba tendo a cor azul - essas regras têm um seletor idêntico e, portanto, carregam a mesma especificidade, portanto, o último na ordem de origem vence.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 400)}}

### Specificity - Especificidade

A especificidade é como o navegador decide/verifica qual regra se aplica se várias regras têm seletores diferentes, que poderiam ser aplicadas ao mesmo elemento. É basicamente uma medição de qual das regras/caracteristicas específica será a mais indicada/específica de um seletor:

- Um seletor de elemento é menos específico - ele selecionará todos os elementos daquele tipo que aparecem em uma página - portanto, obterá uma pontuação mais baixa.
- Um seletor de classe é mais específico - ele selecionará apenas os elementos em uma página que possuem um valor de atributo de classe específico - portanto, obterá uma pontuação mais alta.

Hora do exemplo! Abaixo, temos novamente duas regras que podem ser aplicadas ao h1. O h1 abaixo acaba sendo colorido em vermelho - o seletor de classe dá a sua regra uma especificidade mais alta e, portanto, será aplicada mesmo que a regra com o seletor de elemento apareça mais abaixo na ordem de origem.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 500)}}

Explicaremos a pontuação de especificidade mais tarde.

### Inheritance - Herança

A herança também precisa ser entendida neste contexto - alguns valores de propriedade CSS definidos em elementos pais são herdados por seus elementos filhos e outros não.

Por exemplo, se você definir uma cor e uma família de fontes em um elemento, todos os elementos dentro dele também serão estilizados com essa cor e fonte, a menos que você tenha aplicado cores e valores de fonte diferentes diretamente a eles.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 550)}}

Algumas propriedades não herdam - por exemplo, se você definir um {{cssxref ("width")}} de 50% em um elemento, todos os seus descendentes não terão uma largura de 50% da largura de seus pais. Se fosse esse o caso, CSS seria muito frustrante de usar!

> **Nota:** Nas páginas de referência de propriedade CSS do MDN, você pode encontrar uma caixa de informações técnicas, geralmente na parte inferior da seção de especificações, que lista uma série de pontos de dados sobre essa propriedade, incluindo se ela é herdada ou não. Veja o [color property Specifications section](/pt-BR/docs/Web/CSS/color#Specifications) (seção de especificações de propriedade de cor) , por exemplo.

## Entendendo como os conceitos funcionam juntos

Esses três conceitos juntos controlam que caractersticas CSS se aplicam a qual elemento; nas seções a seguir, veremos como eles funcionam juntos. Às vezes pode parecer um pouco complicado, mas você começará a entende-los conforme for ficando mais experiente com CSS, e você sempre poderá consultar os detalhes se esquecer! Mesmo os desenvolvedores experientes não se lembram de todos os detalhes.

O vídeo a seguir mostra como você pode usar o Firefox DevTools para inspecionar a cascata, a especificidade de uma página e muito mais:

{{EmbedYouTube("Sp9ZfSvpf7A")}}

## Entendendo Herança

Começaremos com herança. No exemplo abaixo, temos um {{HTMLElement ("ul")}}, com dois níveis de listas não ordenadas aninhadas dentro dele. Demos ao \<ul> externo uma borda, preenchimento e uma cor de fonte.

A cor foi aplicada aos filhos diretos, mas também aos filhos indiretos - os filhos imediatos \<li> são aqueles dentro da primeira lista aninhada. Em seguida, adicionamos uma classe especial à segunda lista aninhada e aplicamos uma cor diferente a ela. Isso então é herdado por meio de seus filhos.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 700)}}

Coisas como larguras (conforme mencionado acima), margens, preenchimento e bordas não são herdadas. Se uma borda fosse herdada pelos filhos de nossa lista, cada lista e cada item da lista ganhariam uma borda - provavelmente não é um efeito que desejaríamos!

Quais propriedades são herdadas por padrão e quais não são, depende do bom senso.

### Controlando Herança

CSS fornece quatro valores especiais de propriedades universais para controlar a herança. Cada propriedade CSS aceita esses valores.

- {{cssxref("inherit")}}
  - : Define o valor da propriedade aplicada a um elemento selecionado para ser o mesmo de seu elemento pai. Efetivamente, isso "ativa a herança".
- {{cssxref("initial")}}
  - : Define o valor da propriedade aplicada a um elemento selecionado para o valor inicial dessa propriedade.
- {{cssxref("unset")}}
  - : Restaura a propriedade com seu valor natural, o que significa que se a propriedade é herdada naturalmente, ela age como herdada, caso contrário, ela age como inicial.

> **Nota:** Temos um comando mais recente, {{cssxref("revert")}}, mas nem todos os navegadores suportam

> **Nota:** veja {{SectionOnPage("/en-US/docs/Web/CSS/Cascade", "Origin of CSS declarations")}}para obter mais informações sobre como cada um deles funcionam.

Podemos ver uma lista de links e explorar como funcionam os valores universais. O exemplo ao vivo abaixo permite que você brinque com o CSS e veja o que acontece quando você faz alterações. Usar/modificar o código é realmente a melhor maneira de se familiarizar com HTML e CSS.

Por exemplo:

1. O segundo item da lista tem a classe my-class-1 aplicada. Isso define a cor do elemento \<a> aninhado dentro para herdar. Se você remover a regra, como ela muda a cor do link?
2. Você consegue entende por que o terceiro e o quarto links são da mesma cor? Verifique a descrição dos valores acima se não.
3. Qual dos links mudará de cor se você definir uma nova cor para o elemento \<a> - por exemplo, um {color: red; }?

{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 700)}}

### Redefinindo todos os Valores de Propriedade

A propriedade abreviada CSS _**all**_ pode ser usada para aplicar um desses valores de herança a (quase) todas as propriedades de uma vez. Seu valor pode ser qualquer um dos valores de herança (herdar, inicial, não definido ou reverter). É uma maneira conveniente de desfazer as alterações feitas nos estilos para que você possa voltar a um ponto de partida conhecido antes de iniciar novas alterações.

No exemplo abaixo, temos duas aspas em bloco. O primeiro tem um estilo aplicado ao próprio elemento blockquote, o segundo tem uma classe aplicada ao _blockquote_ que define o valor de **all (todos)** como **unset (indefinido)**.

{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 700)}}

Tente definir o valor de todos para alguns dos outros valores disponíveis e observe qual é a diferença.

## Compreendendo Cascata

Agora entendemos por que um parágrafo aninhado profundamente na estrutura do seu HTML tem a mesma cor do CSS aplicado ao corpo e, a partir das lições introdutórias, entendemos como alterar o CSS aplicado a algo em qualquer ponto do documento - seja atribuindo CSS a um elemento ou criando uma classe. Agora daremos uma olhada apropriada em como a cascata define quais regras CSS se aplicam quando mais de uma coisa pode estilizar um elemento.

Há três fatores a serem considerados, listados aqui em ordem crescente de importância. Os posteriores anulam os anteriores:

1. **Ordem da Fonte**
2. **Especificidade**
3. **Importância**

Vamos dar uma olhada neles para ver como os navegadores descobrem exatamente o que CSS deve ser aplicado.

### Ordem da Fonte (origem)

Já vimos como a ordem da fonte é importante para a cascata. Se você tiver mais de uma regra, que tenha exatamente o mesmo peso, a que vier por último no CSS será a vencedora. Você pode pensar nisso como regras que estão mais próximas do próprio elemento, sobrescrevendo as anteriores, até que a última vença e dê estilo ao elemento.

### Especificidade

Depois de compreender o fato de que a ordem da fonte é importante, em algum momento você se deparará com uma situação em que saberá que uma regra vem depois na folha de estilo, mas uma regra anterior conflitante é aplicada. Isso ocorre porque a regra anterior tem uma especificidade mais alta - é mais específica e, portanto, está sendo escolhida pelo navegador como a que deve estilizar o elemento.

Como vimos anteriormente nesta lição, um seletor de classe tem mais peso do que um seletor de elemento, portanto, as propriedades definidas na classe substituirão aquelas aplicadas diretamente ao elemento.

Algo a se notar aqui é que, embora estejamos pensando em seletores e nas regras que são aplicadas ao que eles selecionam, não é a regra inteira que é substituída, apenas as propriedades que são iguais.

Esse comportamento ajuda a evitar a repetição em seu CSS. Uma prática comum é definir estilos genéricos para os elementos básicos e, em seguida, criar classes para aqueles que são diferentes. Por exemplo, abaixo definimos estilos genéricos para títulos de nível 2 e, em seguida, criamos algumas classes que alteram apenas algumas das propriedades e valores. Os valores definidos inicialmente são aplicados a todos os títulos, depois os valores mais específicos são aplicados aos títulos com as classes.

{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 700)}}

Vamos agora dar uma olhada em como o navegador calculará a especificidade. Já sabemos que um seletor de elemento tem baixa especificidade e pode ser substituído por uma classe. Essencialmente, um valor em pontos é concedido a diferentes tipos de seletores, e somar esses pontos dá a você o peso daquele seletor específico, que pode então ser avaliado em relação a outras combinações potenciais.

A quantidade de especificidade que um seletor tem é medida usando quatro valores (ou componentes) diferentes, que podem ser considerados como milhares, centenas, dezenas e uns - quatro dígitos únicos em quatro colunas:

1. **Thousands**: marque um nesta coluna se a declaração estiver dentro de um atributo {{htmlattrxref ("style")}}, também conhecido como estilos embutidos. Essas declarações não têm seletores, portanto, sua especificidade é sempre simplesmente 1000.
2. **Hundreds**: marque um nesta coluna para cada seletor de ID contido no seletor geral.
3. **Tens**: marque um nesta coluna para cada seletor de classe, seletor de atributo ou pseudoclasse contido no seletor geral.
4. **Ones**: marque um nesta coluna para cada seletor de elemento ou pseudoelemento contido dentro do seletor geral.

> **Nota:** O Seletor universal (`*`), combinadores (`+`, `>`, `~`, ' '), e pseudo-classe de negação (`:not`) não tem efeito de especificidade.

A tabela a seguir mostra alguns exemplos isolados para colocá-lo no clima. Experimente passar por eles e certifique-se de entender por que eles têm a especificidade que demos a eles. Ainda não cobrimos os seletores em detalhes, mas você pode encontrar detalhes de cada seletor em MDN [selectors reference](/pt-BR/docs/Web/CSS/CSS_Selectors).

| Selector                                                                                | Thousands | Hundreds | Tens | Ones | Total specificity |
| --------------------------------------------------------------------------------------- | --------- | -------- | ---- | ---- | ----------------- |
| `h1`                                                                                    | 0         | 0        | 0    | 1    | 0001              |
| `h1 + p::first-letter`                                                                  | 0         | 0        | 0    | 3    | 0003              |
| `li > a[href*="en-US"] > .inline-warning`                                               | 0         | 0        | 2    | 2    | 0022              |
| `#identifier`                                                                           | 0         | 1        | 0    | 0    | 0100              |
| No selector, with a rule inside an element's {{htmlattrxref("style")}} attribute | 1         | 0        | 0    | 0    | 1000              |

Antes de prosseguirmos, vejamos um exemplo em ação.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 700)}}

Então, o que está acontecendo aqui? Em primeiro lugar, estamos interessados apenas nas primeiras sete regras deste exemplo e, como você notará, incluímos seus valores de especificidade em um comentário antes de cada uma.

- Os dois primeiros seletores estão competindo pelo estilo da cor de fundo do link - o segundo vence e torna a cor de fundo azul porque tem um seletor de ID extra na cadeia: sua especificidade é 201 vs. 101.
- O terceiro e o quarto seletores estão competindo pelo estilo da cor do texto do link - o segundo vence e torna o texto branco porque embora tenha um seletor de elemento a menos, o seletor ausente é trocado por um seletor de classe, que vale dez, em vez do que um. Portanto, a especificidade vencedora é 113 contra 104.
- Os seletores 5 a 7 estão competindo pelo estilo da borda do link quando pairados. O seletor seis claramente perde para cinco com uma especificidade de 23 contra 24 - ele tem um seletor de elemento a menos na cadeia. O seletor sete, no entanto, vence o cinco e o seis - ele tem o mesmo número de sub-seletores na cadeia que cinco, mas um elemento foi trocado por um seletor de classe. Portanto, a especificidade vencedora é 33 contra 23 e 24.

> **Nota:** Este foi apenas um exemplo aproximado para facilitar a compreensão. Na realidade, cada tipo de seletor tem seu próprio nível de especificidade que não pode ser substituído por seletores com um nível de especificidade inferior. Por exemplo, um milhão de seletores de **classe** combinados não seriam capazes de sobrescrever as regras de um seletor de **id**.
>
> Uma forma mais precisa de avaliar a especificidade seria pontuar os níveis de especificidade individualmente começando do mais alto e passando para o mais baixo quando necessário. Somente quando há um empate entre as pontuações do seletor dentro de um nível de especificidade, você precisa avaliar o próximo nível abaixo; caso contrário, você pode desconsiderar os seletores de nível de especificidade inferior, pois eles nunca podem substituir os níveis de especificidade mais altos.

### ! Importante

Existe uma parte especial do CSS que você pode usar para ignorar todos os cálculos acima, no entanto, você deve ter muito cuidado ao usá-la -! Importante. Isso é usado para tornar uma determinada propriedade e valor a coisa mais específica, substituindo assim as regras normais da cascata.

Dê uma olhada neste exemplo onde temos dois parágrafos, um dos quais tem um ID.

{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 700)}}

Vamos examinar isso para ver o que está acontecendo - tente remover algumas das propriedades para ver o que acontece e se você tiver dificuldade de entender:

1. Você verá que os valores da terceira regra {{cssxref ("color")}} e {{cssxref ("padding")}} foram aplicados, mas o {{cssxref ("background-color")}} não foram?. Por quê? Na verdade, todos os três devem ser aplicados, porque as regras posteriores na ordem de origem geralmente substituem as regras anteriores.
2. No entanto, as regras acima vencem, porque os seletores de classe têm uma especificidade mais alta do que os seletores de elemento.
3. Ambos elementos tem {{htmlattrxref("class")}} de `better (melhor)`, mas o segundo tem um **id** {{htmlattrxref("id")}} que é mais forte. Como os IDs têm uma especificidade ainda maior do que as classes (você só pode ter um elemento com cada ID exclusivo em uma página, mas muitos elementos com a mesma classe - os seletores de ID são muito específicos no que se destinam), a cor de fundo vermelha e A borda preta de 1 pixel deve ser aplicada ao segundo elemento, com o primeiro elemento recebendo a cor de fundo cinza, e sem borda, conforme especificado pela classe.
4. O segundo elemento obtém a cor de fundo vermelha, mas sem borda. Por quê? Por causa da declaração! Important na segunda regra - incluindo isso depois de border: none significa que essa declaração vai superar o valor de border na regra anterior, embora o ID tenha uma especificidade mais alta.

> **Nota:** A única maneira de sobrescrever essa declaração! Importante seria incluir outra declaração! Importante em uma declaração com a mesma especificidade posteriormente na ordem de origem, ou uma com uma especificidade mais alta.

É útil saber que! Important existe para que você saiba o que é quando o encontrar no código de outras pessoas. No entanto, recomendamos enfaticamente que você nunca o use, a menos que seja absolutamente necessário. ! mudanças importantes na maneira como a cascata normalmente funciona, portanto, pode tornar a depuração de problemas CSS realmente difícil de resolver, especialmente em uma folha de estilo grande.

Uma situação em que você pode ter que usá-lo é quando você está trabalhando em um CMS onde você não pode editar os módulos CSS principais e você realmente deseja sobrescrever um estilo que não pode ser sobrescrito de nenhuma outra maneira. Mas, sério, não use se você puder evitar.

## O Efeito da Localização CSS

Por fim, também é útil observar que a importância de uma declaração CSS depende em qual folha de estilo ela é especificada - é possível que os usuários definam folhas de estilo personalizadas para substituir os estilos do desenvolvedor, por exemplo, o usuário pode ser deficiente visual e deseja para definir o tamanho da fonte em todas as páginas da Web que eles visitam com o dobro do tamanho normal para permitir uma leitura mais fácil.

## Resumindo

As declarações conflitantes serão aplicadas na seguinte ordem, com as posteriores substituindo as anteriores:

1. Declarações nas folhas de estilo do agente do usuário (por exemplo, os estilos padrão do navegador, usados quando nenhum outro estilo está definido).
2. Declarações normais em folhas de estilo do usuário (estilos personalizados definidos por um usuário).
3. Declarações normais em folhas de estilo do autor (esses são os estilos definidos por nós, os desenvolvedores da web).
4. Declarações importantes nas folhas de estilo do autor
5. Declarações importantes nas folhas de estilo do usuário

    Faz sentido que as folhas de estilo dos desenvolvedores da web substituam as folhas de estilo do usuário, para que o design possa ser mantido conforme pretendido, mas às vezes os usuários têm bons motivos para substituir os estilos do desenvolvedor da web, conforme mencionado acima - isso pode ser feito usando! Important em suas regras.

## Teste suas Habilidades!

Abordamos muito neste artigo, mas você consegue se lembrar das informações mais importantes? Você pode encontrar mais alguns testes para verificar se reteve essas informações antes de prosseguir - consulte [Test your skills: the Cascade](/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_tasks).

## O que vem a seguir?

Se você entendeu a maior parte deste artigo, então muito bem - você começou a se familiarizar com a mecânica fundamental do CSS. A seguir, veremos os seletores em detalhes.

Se você não entendeu totalmente a cascata, a especificidade e a herança, não se preocupe! Esta é definitivamente a coisa mais complicada que abordamos até agora no curso e é algo que até mesmo os desenvolvedores profissionais da Web às vezes acham complicado. Aconselhamos que você volte a este artigo algumas vezes à medida que avança no curso e continue pensando a respeito.

Volte aqui se você começar a encontrar problemas estranhos com estilos que não se aplicam conforme o esperado. Pode ser um problema de especificidade.

{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}
