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
<div>{{HTMLSidebar("Elements")}}</div>

<p><span class="seoSummary">Esta página lista todos os {{Glossary("Element","elementos")}} {{Glossary("HTML")}}.</span> Eles são agrupados por função para ajuda-lo a achar o que quer fácilmente. Apesar deste guia ser escrito para aqueles mais inexperientes com a programação, nós esperamos que seja útil para todos.</p>

<h2 id="Elementos_básicos">Elementos básicos</h2>

<p>Elementos básicos são o que constituem a base de todo documento HTML. Se vê esses elementos no código fonte de todas as páginas da web, logo em seguida da declaração de doctype, que está na primeira linha da página. O doctype específica qual a versão de (X)HTML que a página está usando. Os elementos que formam o conteúdo da página são postos entre a tag de abertura {{HTMLElement("html")}} e a tag de fechamento <code>&lt;/html&gt;</code>. O elemento {{HTMLElement("html")}} é também conhecido como o elemento raiz.</p>

<p>{{HTMLRefTable("HTML Root Element")}}</p>

<h2 id="Metadados_do_documento">Metadados do documento</h2>

<p>Os metadados são onde se guardam várias informações sobre a página, incluindo informações sobre estilos, scripts e dados para auxiliar software ({{Glossary("search engine", "ferramentas de pesquisa")}}, {{Glossary("Browser", "navegadores")}}, etc) usar e renderizar a página. Os metadados de estilos e scripts podem ser definidos dentro da própria página ou escritos em um arquivo externo que é referênciado pela mesma.</p>

<p>{{HTMLRefTable("HTML Document Metadata")}}</p>

<h2 id="Separação_de_conteúdo">Separação de conteúdo</h2>

<p>Elementos de separação de conteúdo permitem organizar o conteúdo do documento em partes lógicas. Use elementos de separação para criar um esboço do conteúdo da página, incluindo navegação por cabeçalho e rodapé, e elementos de cabeçalho para identificar seções de conteúdo.</p>

<p>{{HTMLRefTable("HTML Sections")}}</p>

<h2 id="Conteúdo_textual">Conteúdo textual</h2>

<p>Usam-se elementos HTML de conteúdo textual para se organizar blocos ou seções de conteúdo postos entre as tags de abertura {{HTMLElement("body")}} e fechamento <code>&lt;/body&gt;</code>. Importantes para {{Glossary("accessibility","accessibilidade")}} e {{Glossary("SEO")}}, esses elementos identificam o propósito ou estrutura do conteúdo.</p>

<p>{{HTMLRefTable("HTML Grouping Content")}}</p>

<h2 id="Semânticas_textuais_inline">Semânticas textuais inline</h2>

<p>Usa-se a semântica textual inline para definir o significado, estrutura, ou estilo de uma palavra, linha, ou de qualquer outro tipo de texto.</p>

<p>{{HTMLRefTable("HTML Text-Level Semantics")}}</p>

<h2 id="Imagem_e_multimídia">Imagem e multimídia</h2>

<p>HTML suporta vários recursos multimídia como imagens, audio, e video.</p>

<p>{{HTMLRefTable("multimedia")}}</p>

<h2 id="Conteúdo_integrado">Conteúdo integrado</h2>

<p>Além do conteúdo normal de multimídia, HTML pode incluir uma variedade de outros conteúdos, apesar de nem todos serem possuírem fácilidade de interação.</p>

<p>{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}</p>

<h2 id="Scripting">Scripting</h2>

<p>Com o intuito de permitir a criação de conteúdo dinâmico e aplicações Web, HTML foi projetado com suporte a linguagens de scripting, a mais prominiente sendo JavaScript. Certos elementos suportam essa capacidade.</p>

<p>{{HTMLRefTable("HTML Scripting")}}</p>

<h2 id="Demarcando_edições">Demarcando edições</h2>

<p>Estes elementos permitem prover indicações que partes específicas de um texto foram alteradas.</p>

<p>{{HTMLRefTable("HTML Edits")}}</p>

<h2 id="Conteúdo_tabulado">Conteúdo tabulado</h2>

<p>Estes elementos são usados para se criar e manipular dados em tabelas.</p>

<p>{{HTMLRefTable("HTML tabular data")}}</p>

<h2 id="Formulários">Formulários</h2>

<p>HTML provê de vários elementos que podem ser usados juntos para criar formulários que o usuário pode preencher e mandar para o website ou aplicativo. Há muito mais informação no <a href="/pt-BR/docs/Web/Guide/HTML/Forms">guia de formulários HTML</a>.</p>

<p>{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}</p>

<h2 id="Elementos_interativos">Elementos interativos</h2>

<p>HTML oferece uma seleção de elementos que auxiliam na criação de objetos interativos de interface para usuários.</p>

<p>{{HTMLRefTable("HTML interactive elements")}}</p>

<h2 id="Componentes_Web">Componentes Web</h2>

<p>Componentes Web são uma tecnologia relacionada a HTML que faz possível, essencialmente, a criação e customização de elementos como se fossem parte normal do HTML. Além disso, se pode criar versões customizadas de elementos padrão do HTML.</p>

<div class="note"><strong>Observação: </strong>Os elementos pertencentes aos Componentes Web são definidos na <a href="https://www.w3.org/TR/components-intro/">coleção de especificações dos Componentes Web</a> da {{Glossary("W3C","World Wide Web Consortium")}} (W3C) em vez da específicação do HTML. Além disso, a especificação dos Componentes Web ainda não foi finalizada e está sujeita a mudanças.</div>

<p>{{HTMLRefTable({"include":["Web Components"],"elements":["shadow"]})}}</p>

<h2 id="Elementos_obsoletos">Elementos obsoletos</h2>

<div class="warning">
<p><strong>Aviso:</strong> Estes elementos HTML antigos são obsoletos e não devem mais ser usados.<strong> Você deve sempre evitar usa-los em novos projetos, e deve substitui-los assim que possível.</strong> Eles estão listados apenas por motivos educacionais.</p>
</div>

<p>{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}</p>
