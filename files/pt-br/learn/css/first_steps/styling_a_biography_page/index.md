---
title: Usando seu novo conhecimento
slug: Learn/CSS/First_steps/Styling_a_biography_page
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Com o que você aprendeu nas últimas lições, você deve perceber que pode formatar simples documentos de texto utilizando CSS, implementado seu próprio estilo neles. Esta avaliação lhe dá a oportunidade de fazer exatamente isto.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Antes de tentar esta avaliação você deve ter passado pelo resto do
        módulo básico de CSS, além de também possuir uma compreensão básica de
        HTML (estude
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Trabalhar um pouco de CSS e testar seus novos conhecimentos.</td>
    </tr>
  </tbody>
</table>

## Ponto de partida

Você pode trabalhar com editor ao vivo abaixo, ou pode fazer o [download do ponto de partida](https://github.com/mdn/css-examples/blob/master/learn/getting-started/biog-download.html/) para trabalhar em seu próprio editor de texto. Esta é uma única página de HTML, além do ponto de partida no head do documento. Se preferir, você pode transferir este CSS para um arquivo separado quando criar o exemplo no seu computador. Ou ainda, você pode utilizar uma ferramenta online como por exemplo, o [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), ou [Glitch](https://glitch.com/) para realizar estas tarefas..

> **Nota:** Se ficar emperrado, nos procure por ajuda — veja a seção [Assessment or further help](/pt-BR/docs/Learn/CSS/First_steps/Using_your_new_knowledge#Assessment_or_further_help) no final da página.

## Trabalhando com CSS

O seguite exemplo mostra uma biografia, o qual foi estilizado com CSS. As propriedades CSS que eu usei foram as mencionadas abaixo — cada uma está lincada a sua página de propriedades em MDN, a qual dará mais exemplos do uso dela.

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("text-decoration")}}

Eu usei uma mistura de seletores, estilizando elementos como h1 e h2, mas também criando uma classe para o título da profissão e estilizando ela.

Use CSS para mudar como esta biografia aparece, alterando valores das propriedades que eu utilizei.

1. Faça o cabeçalho rosa, usando a chave de cor CSS `hotpink`.
2. Dê ao cabeçalho um pontilhado de tamanho 10px {{cssxref("border-bottom")}} e que utiliza a chave de cor CSS `purple`.
3. Faça o cabeçalho nível 2 em itálico.
4. Dê ao `ul` usado para informações de contato uma {{cssxref("background-color")}} `#eeeeee`, e uma {{cssxref("border")}} roxa sólida com de tamanho 5px. Implemente um {{cssxref("padding")}} para empurrar o conteúdo para longe da borda.
5. Torne os links `verdes` ao passar o mouse por cima deles.

Você deve acabar com algo parecido com esta imagem.

![Screenshot of how the example should look after completing the assessment.](learn-css-basics-assessment.png)

Após isto, tente pesquisar algumas propriedades não mencionadas nesta página em [MDN CSS referências](/pt-BR/docs/Web/CSS/Reference) e se aventure!

Lembre-se de que não há resosta errada aqui — neste momento de seu aprendizado, você pode se dar ao luxo de de se divertir um pouco.

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

## Avaliação ou ajuda adicional

Se gostaria de ter seu trabalho avaliado, ou se ficou emperrado e gostaria de ajuda:

1. Coloque seu trabalho num editor de texto compartilhado online tal como o [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), ou [Glitch](https://glitch.com/).
2. Escreva um post perguntando por avaliação e/ou ajuda em [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Seu post deve incluir:

   - Um título descritivo, tal como "Avaliação desejada para primeiros passos em CSS".
   - Detalhes do que você já tentou, e o que gostaria que ós fizéssemos, p.e. se você está emperrado e precisa de ajuda, ou se deseja uma avalição.
   - Um link para o exemplo que você deseja ser avaliadao ou precisa de ajuda, em um editor online compartilhado (como mencionado no passo 1 acima). Esta é uma boa prática a se desenvolver — é muito difícil ajudar alguém com um problema de computação se não é possível ver o código dessa pessoa.
   - Um link para a atual págia de tarefa ou avaliaçãopara que possamos ver a questão que você está com dúvida.

## O que vem a seguir?

Parabéns por terminar seu primeiro módulo. Agora você deve ter uma boa compreensão geral de CSS, e ser capaz de entender boa parte do que acontece numa folha de estilos. No próximo módulo, [CSS building blocks](/pt-BR/docs/Learn/CSS/Building_blocks), iremos dar uma olhada com mais profundidade em várias áreas chave.

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
