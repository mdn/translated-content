---
title: Elementos HTML
slug: Web/HTML/Element
tags:
  - Basic
  - Element
  - Elemento
  - HTML
  - Reference
  - Referencia
  - Web
  - básico
translation_of: Web/HTML/Element
---
{{HTMLSidebar("Elements")}}

Esta página lista todos os {{Glossary("Element","elementos")}} {{Glossary("HTML")}}. Eles são agrupados por função para ajuda-lo a achar o que quer fácilmente. Apesar deste guia ser escrito para aqueles mais inexperientes com a programação, nós esperamos que seja útil para todos.

## Elementos básicos

Elementos básicos são o que constituem a base de todo documento HTML. Se vê esses elementos no código fonte de todas as páginas da web, logo em seguida da declaração de doctype, que está na primeira linha da página. O doctype específica qual a versão de (X)HTML que a página está usando. Os elementos que formam o conteúdo da página são postos entre a tag de abertura {{HTMLElement("html")}} e a tag de fechamento `</html>`. O elemento {{HTMLElement("html")}} é também conhecido como o elemento raiz.

{{HTMLRefTable("HTML Root Element")}}

## Metadados do documento

Os metadados são onde se guardam várias informações sobre a página, incluindo informações sobre estilos, scripts e dados para auxiliar software ({{Glossary("search engine", "ferramentas de pesquisa")}}, {{Glossary("Browser", "navegadores")}}, etc) usar e renderizar a página. Os metadados de estilos e scripts podem ser definidos dentro da própria página ou escritos em um arquivo externo que é referênciado pela mesma.

{{HTMLRefTable("HTML Document Metadata")}}

## Separação de conteúdo

Elementos de separação de conteúdo permitem organizar o conteúdo do documento em partes lógicas. Use elementos de separação para criar um esboço do conteúdo da página, incluindo navegação por cabeçalho e rodapé, e elementos de cabeçalho para identificar seções de conteúdo.

{{HTMLRefTable("HTML Sections")}}

## Conteúdo textual

Usam-se elementos HTML de conteúdo textual para se organizar blocos ou seções de conteúdo postos entre as tags de abertura {{HTMLElement("body")}} e fechamento `</body>`. Importantes para {{Glossary("accessibility","accessibilidade")}} e {{Glossary("SEO")}}, esses elementos identificam o propósito ou estrutura do conteúdo.

{{HTMLRefTable("HTML Grouping Content")}}

## Semânticas textuais inline

Usa-se a semântica textual inline para definir o significado, estrutura, ou estilo de uma palavra, linha, ou de qualquer outro tipo de texto.

{{HTMLRefTable("HTML Text-Level Semantics")}}

## Imagem e multimídia

HTML suporta vários recursos multimídia como imagens, audio, e video.

{{HTMLRefTable("multimedia")}}

## Conteúdo integrado

Além do conteúdo normal de multimídia, HTML pode incluir uma variedade de outros conteúdos, apesar de nem todos serem possuírem fácilidade de interação.

{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}

## Scripting

Com o intuito de permitir a criação de conteúdo dinâmico e aplicações Web, HTML foi projetado com suporte a linguagens de scripting, a mais prominiente sendo JavaScript. Certos elementos suportam essa capacidade.

{{HTMLRefTable("HTML Scripting")}}

## Demarcando edições

Estes elementos permitem prover indicações que partes específicas de um texto foram alteradas.

{{HTMLRefTable("HTML Edits")}}

## Conteúdo tabulado

Estes elementos são usados para se criar e manipular dados em tabelas.

{{HTMLRefTable("HTML tabular data")}}

## Formulários

HTML provê de vários elementos que podem ser usados juntos para criar formulários que o usuário pode preencher e mandar para o website ou aplicativo. Há muito mais informação no [guia de formulários HTML](/pt-BR/docs/Web/Guide/HTML/Forms).

{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}

## Elementos interativos

HTML oferece uma seleção de elementos que auxiliam na criação de objetos interativos de interface para usuários.

{{HTMLRefTable("HTML interactive elements")}}

## Componentes Web

Componentes Web são uma tecnologia relacionada a HTML que faz possível, essencialmente, a criação e customização de elementos como se fossem parte normal do HTML. Além disso, se pode criar versões customizadas de elementos padrão do HTML.

> **Note:** **Observação:** Os elementos pertencentes aos Componentes Web são definidos na [coleção de especificações dos Componentes Web](https://www.w3.org/TR/components-intro/) da {{Glossary("W3C","World Wide Web Consortium")}} (W3C) em vez da específicação do HTML. Além disso, a especificação dos Componentes Web ainda não foi finalizada e está sujeita a mudanças.

{{HTMLRefTable({"include":["Web Components"],"elements":["shadow"]})}}

## Elementos obsoletos

> **Warning:** **Aviso:** Estes elementos HTML antigos são obsoletos e não devem mais ser usados. **Você deve sempre evitar usa-los em novos projetos, e deve substitui-los assim que possível.** Eles estão listados apenas por motivos educacionais.

{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}
