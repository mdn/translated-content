---
title: O que é CSS?
slug: Learn/CSS/First_steps/What_is_CSS
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**{{Glossary("CSS")}}** (Folhas de Estilo em Cascata) permite a você criar páginas web agradáveis, mas como isso funciona por baixo dos panos? Este artigo explica o que é CSS, com um exemplo de sintaxe simples, e, também, trata alguns conceitos-chaves sobre a linguagem.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico sobre computador,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >softwares básicos instalados</a
        >, conhecimento básico de
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >como trabalhar com arquivos</a
        >, e conhecimento básico sobre HTML (estude
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender o que é CSS.</td>
    </tr>
  </tbody>
</table>

No módulo [Introdução ao HTML](/pt-BR/docs/Learn/HTML/Introduction_to_HTML) vimos o que é HTML, e como ele é usado para fazer marcação de documentos. Estes documentos serão legíveis em um navegador web. Títulos serão mais largos do que textos comuns, parágrafos quebram em uma nova linha e tendo espaços entre eles. Links são coloridos e sublinhados para distingui-los do resto do texto. O que você está vendo é o estilo padrão do navegador - vários estilos básicos que o navegador aplica ao HTML, para garantir que ele será legível mesmo se não for explicitamente estilizado pelo autor da página web.

![The default styles used by a browser](html-example.png)

No entanto, a web seria um lugar chato se todos os web sites tivessem estilos iguais ao mostrado na imagem acima. Usando CSS você pode controlar exatamente a aparência dos elementos HTML no navegador, apresentando a sua marcação com o design que desejar.

## Para que serve o CSS?

Como falamos antes, CSS é uma linguagem para especificar como documentos são apresentados aos usuários — como eles são estilizados, dispostos etc.

Um **documento** é normalmente um arquivo texto estruturado usando uma linguagem de marcação — {{Glossary("HTML")}} é a linguagem de marcação mais comum, mas você também pode encontrar outras, como {{Glossary("SVG")}} ou {{Glossary("XML")}}.

**Apresentar** um documento para um usuário significa convertê-lo para um formato utilizável pelo seu público. {{Glossary("browser","Browsers")}}, como {{Glossary("Mozilla Firefox","Firefox")}}, {{Glossary("Google Chrome","Chrome")}}, ou {{Glossary("Microsoft Edge","Edge")}} , são projetados para apresentar documentos visualmente, por exemplo, um uma tela de computador, projetor ou impressora.

> **Nota:** **Observação**: Um navegador web é as vezes chamado de {{Glossary("User agent","user agent")}}, o que, basicamente, significa um programa de computador que representa uma pessoa por trás do sistema. Navegadores web são o principal tipo de agente do usuário que nos referimos quando falamos sobre CSS, contudo, ele não é o único. Há outros agentes de usuário disponíveis — tais como aqueles que convertem documentos HTML e CSS para PDF a serem impressos.

O CSS pode ser usado para estilizar um documento muito básico de texto — por exemplo, alterando a [cor](/pt-BR/docs/Web/CSS/color_value) e [tamanho](/pt-BR/docs/Web/CSS/font-size) dos títulos e links. Pode ser usado para criar layout — por exemplo, [transformando uma simples coluna de texto em um layout](/pt-BR/docs/Web/CSS/Layout_cookbook/Column_layouts) com uma área de conteúdo principal e um sidebar (barra lateral) para as informações relacionadas. Pode até ser usado para efeitos tais como [animação](/pt-BR/docs/Web/CSS/CSS_Animations). Dê uma olhada nos links deste parágrafo, para ver exemplos específicos.

## Sintaxe CSS

CSS é uma linguagem baseada em regras. — Você define regras especificando grupos de estilo que devem ser aplicados para elementos particulares ou grupos de elementos na sua página web. Por exemplo, "Quero que o título principal, na minha página, seja mostrado como um texto grande e de cor vermelha.".

O código seguinte mostra uma regra CSS muito simples, que chegaria perto do estilo descrito acima:

```css
h1 {
  color: red;
  font-size: 5em;
}
```

A regra é aberta com um {{Glossary("CSS Selector", "selector")}} . Isso _seleciona_ o elemento HTML que vamos estilizar. Neste caso, estamos estilizando títulos de nível um ({{htmlelement("h1")}}).

Temos, então, um conjunto de chaves `{ }`. Dentro deles, haverá uma ou mais **declarações**, que tomam a forma de pares **propriedade** e **valor**. Cada par especifica uma propriedade do(s) elemento(s) que estamos selecionando e, em seguida, então um valor que gostaríamos de atribuir à propriedade

Antes dos dois pontos, temos a propriedade, e, depois, o valor. CSS {{Glossary("property/CSS","properties")}} possui diferentes valores permitidos, dependendo de qual propriedade está sendo especificado. Em nosso exemplo, temos a propriedade `color`, que pode tomar vários [valores para cor](/pt-BR/docs/Learn/CSS/Building_blocks/Values_and_units#Color). Também temos a propriedade `font-size`. Essa propriedade pode ter vários [unidades de tamanho](/pt-BR/docs/Learn/CSS/Building_blocks/Values_and_units#Numbers_lengths_and_percentages) como um valor.

Uma folha de estilo CSS conterá muitas regras tais como essa, escrita uma após a outra.

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

Você constatará que rapidamente aprende alguns valores, enquanto outros precisará pesquisar. As páginas de propriedades individuais no MDN dá a você uma maneira rápida de procurar propriedades e seus respectivos valores, quando você esquecer, ou desejar saber quais valores pode usar.

> **Nota:** **Observação**: Você pode achar links para todas as páginas de propriedades CSS (junto com outros recursos CSS) listados no MDN [referência CSS](/pt-BR/docs/Web/CSS/Reference). Alternativamente, você deve se acostumar a pesquisar por "mdn _css-feature-name_" no seu motor de busca favorito sempre que precisar procurar mais informações sobre uma característica CSS. Por exemplo, experimente pesquisar por "mdn color" e "mdn font-size"!

## Módulos CSS

Como existem tantas coisas que você pode estilizar com CSS, a linguagem é dividida em módulos. Verá referência a esses módulos a medida que explora o MDN e muita das páginas da documentação são organizadas em torno de um módulo em particular. Por exemplo, poderia dar uma olhada na referência MDN para os módulos [Backgrounds and Borders](/pt-BR/docs/Web/CSS/CSS_Backgrounds_and_Borders) para descobrir qual é o seu objetivo, e quais diferentes propriedades e outras características ele contém. Você também encontrará links para a especificação CSS que define a tecnologia (veja abaixo).

Nesse ponto você não precisa se preocupar muito sobre como o CSS é estruturado. No entanto, isso pode tornar fácil achar informação se, por exemplo, você estiver ciente de que uma determinada propriedade provavelmente será encontrada entre outras coisas semelhantes e estiver, portanto, provavelmente na mesma especificação.

Para um exemplo específico, vamos voltar ao módulo Backgrounds e Borders — você pode achar que isso tem um senso lógico para as propriedades [`background-color`](/pt-BR/docs/Web/CSS/background-color) e [`border-color`](/pt-BR/docs/Web/CSS/border-color) serem definidas neste módulo. E, você está certo!

### Especificações CSS

Todas as tecnologias de padrões web (HTML, CSS, JavaScript, etc.) são definidos em documentos gigantes chamados especificações (ou simplesmente "specs"), que são publicados por organizações de padrões (tais como {{glossary("W3C")}}, {{glossary("WHATWG")}}, {{glossary("ECMA")}}, ou {{glossary("Khronos")}}) e definem precisamente como essas tecnologias devem se comportar.

Com CSS não é diferente — ele é desenvolvido por um grupo dentro do W3C chamado [CSS Working Group](https://www.w3.org/Style/CSS/). Esse grupo é formado por representantes de fornecedores de navegadores web e outras companhias que tem interesse em CSS. Também existe outras pessoas, conhecidas como peritos convidados _(invited experts_), que agem como vozes independentes; eles não são associados como um membro de alguma organização.

Novas características CSS são desenvolvidas, ou especificadas, pelo CSS Working Group. As vezes, porque um navegador em particular está interessado em alguma capacidade, outras vezes, porque designers web e desenvolvedores estão perguntando por uma característica, e, algumas vezes, porque o Working Group em si tem identificado uma necessidade. O CSS está em constante desenvolvimento, com novas peculiaridades ficando disponíveis. Contudo, uma ideia chave sobre CSS é que todos trabalham pesado para nunca alterar as coisas de uma maneira que não quebrem os sites antigos. Um site construído no ano 2000, usando um CSS limitado da época, deverá ainda ser utilizável em um navegador moderno!

Como iniciante no CSS, é provável que você ache as especificações CSS impressionantes — eles são direcionados a engenheiros para implementar suporte aos recursos nos agentes de usuário (navegadores), não para desenvolvedores lerem com o intuito de entender CSS. Muitos desenvolvedores experientes preferem consultar a documentação do MDN ou outros tutoriais. No entanto, vale a pena saber que eles existem, entender a relação entre o CSS que você usa, suporte ao navegador (veja abaixo), e os specs (especificações).

## Suporte do navegador

Uma vez que o CSS tenha sido especificado, então se torna útil para nós, em termos de desenvolvimento de páginas web, apenas se um ou mais navegadores implementá-los. Isso significa que o código foi escrito para transformar as instruções do nosso arquivo CSS em algo que possa ser mostrado na tela. Vamos olhar um pouco mais esse processo nas lições [Como o CSS funciona](/pt-BR/docs/Learn/CSS/First_steps/How_CSS_works). É inusitado implementarem uma característica ao mesmo tempo, e, geralmente, existe uma lacuna na qual se pode usar parte do CSS em alguns navegadores e em outros não. Por esse motivo, ser capaz de verificar o estado da implemtação é útil. Para cada página de propriedade no MDN, pode-se ver o estado dela, que se esta interessado. Assim, você saberá se pode usá-la em uma página.

A seguir, é apresentado o gráfico de dados compat para propriedade CSS [`font-family`](/pt-BR/docs/Web/CSS/font-family).

{{Compat("css.properties.font-family")}}

## A seguir

Agora que você tem algum entendimento do que o CSS é, vamos ao [Iniciando com CSS](/pt-BR/docs/Learn/CSS/First_steps/Getting_started), onde pode começar a escrever alguma coisa, você mesmo.

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}
