---
title: Como funciona o CSS
slug: Learn/CSS/First_steps/How_CSS_works
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Using_your_new_knowledge", "Learn/CSS/First_steps")}}

Nós aprendemos o básico de CSS, porque e como escrever simples folhas de estílo. Nesta lição, nós daremos uma olhada em como um navegador transforma um CSS e HTML em uma página da web.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisito:</th>
      <td>
        Alfabetização em computação básica,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >softwares básicos instalados</a
        >, conhecimento básico sobre
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabalhar com arquivos</a
        >, e o básico de HTML (estude
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender o básico sobre como o CSS e o HTML são interpretados pelo
        navegador (que em seu nome original chama-se browser do inglês), e o que
        acontece quando um browser encontra regras CSS mas não as compreende.
      </td>
    </tr>
  </tbody>
</table>

## Como o CSS funciona?

Quando um navegador redenriza um documento, ele combina o documento com suas informações de estilo. E o documento é processado em estágios, nos quais estão listados abaixo. É sugerível ter em mente que esta é uma versão simplificada do que ocorre quando um navegador redenriza uma página web, e que diferentes navegadores podem manipular estes processos de diferentes formas. De toda forma, esta listagem é muito aproximada do processo comum feito pela maioria dos navegadores.

1. O navegador carrega o HTML (e.g. que é recebido pela internet).
2. Ele então converte o {{Glossary("HTML")}} para um {{Glossary("DOM")}} (_Document Object Model_). O DOM representa o documento na memória do computador. O DOM será também melhor detalhado na próxima seção.
3. O navegador então requisita a maioria dos recursos que estão lincados no documento HTML, elementos como imagens encorporadas e vídeos, e também, folhas de estilo CSS. O código em JavaScript é manipulado um pouco mais tarde durante o processo, e não falaremos muito sobre a manipulação do JavaScript agora para mantermos as coisas simples.
4. O navegador analisa o CSS encontrado (fetched) e interpreta as diferentes regras por meio de seus diferentes tipos de seletores em diferentes baldes (buckets), tais como elementos (ex: h1, h2), classes (.myElement), ID (#myNav), e outros mais. Baseado nos seletores encontrados, o navegador insere as regras de estilização que devem ser aplicadas para cada node no DOM, e anexa o estilo para os elementos como foram especificados nas folhas de estilização (este processo intermediário é chamado de render tree ou árvore de renderização).
5. A árvore de renderização é organizada na estrutura e deve aparecer depois das regras de estilo serem aplicadas ao documento.
6. O visual de visualização da página é por fim mostrado na tela (este estágio é chamado de _painting_ ou pintura).

O diagrama a seguir também apresenta uma visão simples do processo.

![Rendering process overview](rendering.svg)

## Sobre o DOM

Um DOM uma estrutura árborea (tree-like). Cada elemento, atributo, ou fragmento de texto na linguagem de marcação (markup language) torna-se um {{Glossary("Node/DOM","DOM node (nó ou ponto de intersecção)")}} na estrutura de árvore. Os nodes (nós) são definidos por meio do relacionamento com outros nodes presentes DOM. Alguns elementos são pais ou superiores a elementos dentro de si (child node, ou em português, nós filhos ou nós secundários), e child nodes possuem elementos irmãos.

Compreender o DOM ajuda você organizar, debugar e manter seu CSS porque o DOM é onde seu CSS e o conteúdo do documento são combinados. Quando você começa a trabalhar com as DevTools do browser você estará navegando os elementos do DOM como itens ordenados selecionáveis para assim decidir quais regras de estilização aplicar.

## Uma representação prática do DOM

Ao invés de um longa e chata explicação, vamos observar um exemplo para vermos como um trecho real de um documento HTML é convertido em um DOM.

Pegue o seguinte código HTML:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

No DOM, o node (nó) especifica nosso elementro `<p>` como um elemento pai. Seus filhos são um text node e a árvore de nós que corresponde ao nossos elementos `<span>`. Os nós `SPAN` são também elementos pais, tendo os text nodes (textos dentro de si) como seus filhos:

```
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
```

Esta é a forma como um browser interpreta o nosso trecho de documento HTML acima apresentado — O browser renderiza a árvore DOM e nos retorna uma saída no browser da seguinte forma:

{{EmbedLiveSample('A_real_DOM_representation', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

## Aplicando CSS ao DOM

Vamos adicionar um curto CSS ao nosso documento, para estiliza-lo. Novamente, usamos o trecho HTML seguinte:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

Vamos supor que aplicamos o seguinte CSS a ele:

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

O browser irá interpretar o HTML e criar um DOM baseado nele. Como a única regra de estilização CSS disponível possui um seletor `span`, o browser fará a combinação do CSS rapidamente! Ele irá aplicar a regra de estilo para cada um da árvore `<span>`s, e então paint (pintar) o resultado final na tela.

Ao atualizar há a seguinte saída:

{{EmbedLiveSample('Applying_CSS_to_the_DOM', '100%', 55)}}

Em nosso artigo [Debugging CSS](/pt-BR/docs/Learn/CSS/Building_blocks/Debugging_CSS) no próximo módulo nós estaremos usando as DevTools do browser para debugar problemas no CSS, e aprenderemos mais sobre como o navegador interpreta o CSS.

## O que acontece se um navegador não entende o CSS encontrado?

[Em uma lição anterior](/pt-BR/docs/Learn/CSS/First_steps/What_is_CSS#Browser_support), eu mencionei que navegadores não implementam todo o novo CSS ao mesmo tempo. Em adição, muitas pessoas não usam a versão mais recente de um navegador. Dado que o CSS é processado o tempo todo, e que portanto está adiantado em relação ao que os browsers podem reconhecer, você pode imaginar o que acontece se um browser encontra um seletor ou uma declaração CSS que ele não reconhece.

A resposta é que ele não faz nada e vai para o próximo conteúdo em CSS!

Se um browser está analisando suas regras, e encontra uma propriedade ou valor que ele não entende, ele o ignora e segue para a próxima declaração. Ele vai fazer isto se você cometeu algum erro ou digitou incorretamente uma propriedade ou valor, ou se tal propriedade ou valor é recente e o browser ainda não o processa.

Similarmente, se um browser encontra um seletor que não comprende, ele o ignorará e seguirá para a próxima regra.

No exemplo abaixo usei a grafia em inglês britânico para a propriedade cor, o que a torna inválida e portanto ela não é reconhecida. Por isso, o parágrafo não recebe a coloração azul. Todos os outros CSS foram aplicados, no entanto, apenas aquele que foi considerado inválido foi ignorado.

```html
<p>Quero que este texto esteja grande, em negrito, e azul.</p>
```

```css
p {
  font-weight: bold;
  colour: blue; /* grafia incorreta da propriedade cor */
  font-size: 200%;
}
```

{{EmbedLiveSample('Skipping_example', '100%', 200)}}

Este comportamento é bastante útil. Ele significa que você pode usar o novo CSS como uma melhoria, sabendo que não ocorrerá um erro se ele não for completamente compreendido - o browser ou vai entender esta característica ou não. Em conjunto com a maneira que a cascata funciona, e o fato que browsers usarão o último CSS que eles encontrarem numa folha de estilos quando você possui duas regras com a mesma especificidade, você pode oferecer alternativas para browsers que não processam estilos CSS mais novos.

Isto funciona particularmente bem quando você usa um valor que é relativamente recente e que não é processado em todo lugar. Por exemplo, alguns browsers antigos não processam `calc()` como um valor. Eu posso dar um recuo com uma largura em pixels para um box, e então seguir e dar uma largura com o valor de `100% - 50px` com `calc()`. Browsers antigos irão utilizar a versão em pixels, ignorando a linha que trata de `calc()`, já que eles não a compreendem. Browsers mais novos irão interpretar inicialmente a linha que utiliza pixels, para em seguida a sobrepor com a linha utilizando `calc()` conforme ela aparece na cascata.

```css
.box {
  width: 500px;
  width: calc(100% - 50px);
}
```

Iremos visualizar várias outras maneiras de auxiliar diferentes browsers em lições futuras.

## E por último

Você está quase encerrando este módulo; só temos mais uma tarefa para fazer. No próximo artigo, você utilizará seu novo conhecimento para reestilizar um exemplo, testando seus aprendizados de CSS no processo.

{{PreviousMenuNext("Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps/Using_your_new_knowledge", "Learn/CSS/First_steps")}}
