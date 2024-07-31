---
title: Como escrever uma entrada no glossário
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
---

{{MDNSidebar}}

Este artigo explica como adicionar e vincular entradas no [glossário MDN Web Docs](/pt-BR/docs/Glossary).
Ele também fornece diretrizes sobre o layout e o conteúdo da entrada do glossário.
O glossário fornece definições para todos os termos, jargões, abreviações e acrônimos que você encontrará ao ler o conteúdo do MDN sobre a Web e o desenvolvimento da Web.

É possível que o glossário nunca esteja completo porque a web está sempre mudando.
Ao contribuir com novas entradas ou corrigir problemas, você pode nos ajudar a atualizar o glossário e preencher lacunas.

Contribuir para o glossário é uma maneira fácil de ajudar a tornar a Web mais compreensível para todos.
Você não precisa de habilidades técnicas de alto nível.
As entradas do glossário devem ser diretas e breves.

## Como escrever uma entrada

Primeiro, escolha o tópico para o qual você gostaria de escrever uma entrada no glossário.
Se você estiver procurando tópicos que precisam de uma entrada de glossário, verifique a [lista de termos não documentados](/pt-BR/docs/Glossary#contribute_to_the_glossary) no final da [página inicial do glossário](/pt-BR/docs /Glossário).

Se você tiver uma ideia para uma nova entrada de glossário, [crie uma nova página](https://github.com/mdn/content#adding-a-new-document) abaixo da [página inicial do glossário](https: //github.com/mdn/content/tree/main/files/en-us/glossary).

### Escreva um sumário

O primeiro parágrafo de qualquer página do glossário é uma descrição simples e curta do termo.
De preferência, não deve ter mais do que duas frases.
Certifique-se de que qualquer pessoa que leia a descrição possa entender imediatamente o termo definido.

> [!CALLOUT]
> Não copie e cole de outras definições ou conteúdo da Internet.
> (E especialmente não a Wikipedia, já que sua gama de versões de licença é menor e incompatível com MDN.) Sua entrada de glossário deve ser conteúdo original.

#### Escrevendo uma boa entrada no glossário

Adicione alguns parágrafos extras, se necessário, mas é fácil acabar escrevendo um artigo inteiro.
Escrever um artigo é bom, mas, por favor, não o crie no/para o glossário.
Se você não tem certeza de onde colocar seu artigo, sinta-se à vontade para [entrar em contato para discuti-lo](/pt-BR/docs/MDN/Community/Contributing/Getting_started#step_4_ask_for_help).

Existem algumas diretrizes simples a serem consideradas para escrever uma entrada de glossário melhor:

- Quando você usa termos na descrição do glossário do termo ou quando você usa abreviação, você deve criar links apropriados.
  Muitas vezes, isso envolve apenas a criação de links para outras páginas do glossário.
- Use termos relacionados apropriados (com links) na entrada do glossário, se isso puder ser feito sem dificultar o entendimento do artigo.
  Ter uma boa rede de links relacionados e úteis torna uma página – ou conjunto de páginas – muito mais fácil de usar.
- Pense nos termos de pesquisa que você escolheria se quisesse encontrar esta página.
  Tente usar todas as palavras que usaria para pesquisar o termo, mas sem tornar a entrada do glossário sem sentido, longa ou difícil de ler.

### Expandir com links

Uma entrada de glossário sempre deve terminar com uma seção _Saiba mais_.
Esta seção deve conter links para ajudar o leitor a seguir em frente: descobrindo mais detalhes; aprender a usar a tecnologia relevante.

É uma boa prática organizar os links em três grupos:

- Conhecimento geral
  - : Esses links fornecem informações de alto nível sobre o termo ou tópico.
    Por exemplo: um link para uma página relevante da [Wikipedia](https://en.wikipedia.org/).
- Referência técnica
  - : Esses links oferecem informações técnicas detalhadas, no MDN Web Docs ou em outros sites.
- Aprenda sobre isso
  - : São links para tutoriais, exercícios, exemplos ou qualquer outro conteúdo instrucional que ajude o leitor a aprender.

## Lidando com a desambiguação

Alguns termos podem ter vários significados, dependendo do contexto.
Para resolver a ambigüidade, siga estas diretrizes:

- A página principal do termo deve ser uma página de desambiguação contendo a macro [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs).
- O termo possui subpáginas que definem o termo para diferentes contextos.

Vamos ilustrar isso com um exemplo.
O termo _assinatura_ pode ter significados diferentes em pelo menos dois contextos diferentes: segurança e função.

1. A página [Glossary/Signature](/pt-BR/docs/Glossary/Signature) é a página de desambiguação com o [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) macro.
2. A página [Glossary/Signature/Security](/pt-BR/docs/Glossary/Signature/Security) é a página que define uma assinatura em um contexto de segurança.
3. A página [Glossário/Assinatura/Função](/pt-BR/docs/Glossary/Signature/Function) é a página que define uma assinatura de função.
