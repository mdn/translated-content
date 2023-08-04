---
title: Árvore de Acessibilidade
slug: Glossary/Accessibility_tree
---

A **árvore de acessibilidade** contém informação relacionada à {{Glossary("accessibility", "acessibilidade")}} para a maioria dos elementos HTML.

Navegadores convertem a marcação em uma representação interna chamada [árvore do DOM](/pt-BR/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree). A árvore do DOM contém objetos representando todas as marcações de elementos, atributos e nós de texto. Os navegadores, então, criam uma árvore de acessibilidade baseada na árvore do DOM, a qual é usada por APIs específicas de plataforma para fornecer uma representação que possa ser entendida por tecnologias assistivas, como leitores de tela.

Há quatro coisas em um objeto da árvore de acessibilidade:

- **nome**
  - : Como podemos nos referir a esse objeto? Por exemplo, um link com o texto "Leia mais" terá "Leia mais" como seu atributo _name_ (saiba mais como os nomes são computados em [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **descrição**
  - : Como podemos descrever esse objeto se quisermos fornecer mais detalhes além do nome? A descrição de uma tabela pode explicar que tipo de informação ela contém.
- **função**
  - : Que tipo de objeto é esse? Por exemplo, é um botão, uma barra de navegação ou uma lista de items?
- **estado**
  - : Tem um estado? Os exemplos incluem caixas de seleção marcadas ou desmarcadas, e recolhido ou expandido para o elemento [`<summary>`](/pt-BR/docs/Web/HTML/Element/summary).

Adicionalmente, a árvore de acessibilidade frequentemente contém informação sobre o que pode ser feito com um elemento: um link pode ser seguido, uma entrada de texto pode ser digitada, entre outras coisas.

Enquanto continua em forma de rascunho na Web Incubator Community Group, o Modelo de Objeto de Acessibilidade (**[Accessibility Object Model](https://wicg.github.io/aom/explainer.html),** AOM), tem a intenção de incubar APIs que facilitam expressar a semântica de acessibilidade e potencialmente permitir acesso de leitura à árvore de acessibilidade computada.

1. [Glossário](/pt-BR/docs/Glossario)

   1. {{Glossary("Accessibility", "Acessibilidade")}}
   2. {{Glossary("ARIA")}}
