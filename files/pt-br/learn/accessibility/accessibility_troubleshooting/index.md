---
title: "Avaliação: solucionando problemas de acessibilidade"
slug: Learn/Accessibility/Accessibility_troubleshooting
---

{{LearnSidebar}}{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}

Na avaliação deste módulo, apresentamos a você um site simples com vários problemas de acessibilidade que você precisa diagnosticar e corrigir.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico de informática, entendimento básico de HTML, CSS e
        Javascript, uma compreesão dos
        <a href="/pt-BR/docs/Learn/Accessibility"
          >artigos anteriores deste curso</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Testar conhecimentos básicos e fundamentais para a acessibilidade.
      </td>
    </tr>
  </tbody>
</table>

## Ponto de partida

Para começar esta avaliação, você deve pegar [o arquivo ZIP que contém os arquivos que compõem o exemplo](https://github.com/mdn/learning-area/blob/master/accessibility/assessment-start/assessment-files.zip?raw=true). Descompacte o conteúdo em um novo diretório em algum lugar de seu computador.

O site de avaliação final, deve ser parecido com esse:

![](assessment-site-finished.png)

Você verá algumas diferenças e/ou problemas com a exibição do estado inicial do site da avaliação - isso se deve principalmente as diferenças na marcação de código, o que, por sua vez, causa alguns problemas de estilo, pois o CSS não está aplicado corretamente. Não se preocupe - você irá corrigir esses problemas nas próximas seções!

## Resumo do projeto

Para este projeto, você é apresentado a um site fictício exibindo um artigo sobre ursos. Da forma como ele está, possui vários problemas de acessibilidade - a sua tarefa é explorar o site existente e corrigí-los da melhor forma possível, respondendo as seguintes perguntas.

### Cor

O texto é difícil de ler devido ao esquema de cores atual. Você pode fazer um teste do contraste de cor atual (texto/plano de fundo), relatar os resultados do teste e corrigí-lo alterando as cores atribuídas?

### HTML semântico

1. O conteúdo ainda não é muito acessível - relate o que acontece quando você tenta navegar utilizando um leitor de telas.
2. Você consegue atualizar o texto do artigo para facilitar a navegação de usuários de leitores de telas?
3. A parte do menu de navegação do site (agrupada em `<div class="nav"></div>`) poderia estar mais acessível se estivesse dentro de um elemento semântico de HTML5 mais adequado. Qual elemento deve ser utilizado? Atualize-o.

> **Nota:** Você precisará atualizar os seletores de CSS que estilizam as respectivas tags para seus equivalentes aos cabeçalhos semânticos. Depois de adicionar elementos de parágrafo, você perceberá que a estilização parecerá bem melhor.

### As imagens

As imagens estão atualmente inacessíveis para os usuários do leitor de tela. Você pode consertar isso?

### O "player" de áudio

1. Foi utilizada o elemento `<audio>` para exibir o "player", porém ele não é acessível para pessoas com deficiência auditiva (surdos) - você consegue adicionar algum tipo de alternativa acessível para esses usuários?
2. O elemento `<audio>` para utilizar o "player" não é acessível para aqueles que usam navegadores mais antigos que não suportam HTML5. Como você pode fazer com que esses usuários consigam ter acesso ao áudio?

### Os formulários

1. O elemento `<input>` no formulário de pesquisa no topo poderia ter um rótulo, mas não queremos adicionar um rótulo de texto visível que possa prejudicar o design e não seja realmente necessário para os usuários com visão. Como você pode adicionar um rótulo acessível apenas aos leitores de tela?
2. Os dois elementos `<input>` no formulário de comentários possui rótulos de texto visíveis, mas não estão associados corretamente entre eles. Como você poderia fazer isso? Note que você precisará atualizar algumas regras de CSS também.

### Os controles de comentários "exibir/ocultar"

O botão de controle "exibir/ocultar" não está acessível por teclado. Você pode torná-lo acessível, tanto em termos de deixá-lo "focável" através da utilização da tecla tab, como ativá-lo usando a tecla enter?

### A tabela

A tabela de dados não está muito acessível no momento - é difícil para os usuários de leitores de tela associarem linhas e colunas de dados juntas, e a tabela também não possui nenhum tipo de resumo para deixar claro o que mostra. Você pode adicionar alguns recursos ao seu HTML para corrigir esse problema?

### Outras considerações?

Você pode citar mais duas ideias de melhorias que poderiam tornar o site mais acessível?

## Avaliação

Se você está fazendo esta avaliação como parte de um curso, você deverá entregar o seu trabalho para um professor para que possa corrigí-lo. Se você é auto-didata, então você pode obter o guia com a marcação correta perguntando no [tópico de discussão para este exercício](https://discourse.mozilla.org/t/accessibility-troubleshooting-assessment/24691&xid=17259,15700021,15700124,15700149,15700186,15700190,15700201,15700214&usg=ALkJrhh-F4r0i3lAG4IX8kI3Nk9lrJQa0A), ou no canal de IRC [#mdn](irc://irc.mozilla.org/mdn) no [IRC do Mozilla](https://wiki.mozilla.org/IRC&xid=17259,15700021,15700124,15700149,15700186,15700190,15700201,15700214&usg=ALkJrhgC5oFTH3iLqIFiwi9njruuEgsWHA). Experimente tentar fazer o exercício primeiro - você não ganhará nada trapaceando!

{{PreviousMenu("Learn/Accessibility/Mobile", "Learn/Accessibility")}}
