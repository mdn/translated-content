---
title: Categorias de conteúdo
slug: Web/HTML/Content_categories
---

Cada elemento HTML deve permanecer, por regras, definindo que tipo de conteúdo ele pode ter. Essas regras estão agrupadas em modelos de conteúdo para muitos elementos. Cada elemento HTML pertence a nenhum, um, ou múltiplos modelos de conteúdo, cada regra de definição que o conteúdo do elemento deve seguir em um documento HTML.

Há três tipos de categorias de conteúdo:

- Principais categorias de conteúdo, as quais descrevem regras comuns de conteúdo compartilhado por vários elementos;
- Categorias de conteúdo relacionado, as quais decrevem regras comuns de conteúdo para elementos relacioados;
- Categorias de conteúdo específico, as quais descrevem categorias raras compartilhadas somente por poucos elementos, às vezes apenas em um contexto específico.

[![Content_categories_venn.png](/@api/deki/files/6244/=Content_categories_venn.png?size=webview)](/@api/deki/files/6244/=Content_categories_venn.png)

## Principais categorias de conteúdo

### Conteúdo de metadados

Os elementos pertencentes a categoria _conteúdo de metadados_ modificam a apresentação ou o comportamento do resto do documento, define ligações para outros documentos ou transmite outras informações _fora da banda._

Os elementos pertencentes a essa categoria são {{HTMLElement("base")}}, {{HTMLElement("command")}}, {{HTMLElement("link")}}, {{HTMLElement("meta")}}, {{HTMLElement("noscript")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} e {{HTMLElement("title")}}.

### Conteúdo de fluxo

Elementos pertencentes a categoria de conteúdo de fluxo tipicamente contém texto ou conteúdo embutido. Eles são: {{HTMLElement("a")}}, {{HTMLElement("abbr")}}, {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}},{{HTMLElement("bdo")}}, {{HTMLElement("bdi")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("del")}}, {{HTMLElement("details")}}, {{HTMLElement("dfn")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("figure")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("ins")}}, {{HTMLElement("kbd")}}, {{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("main")}}, {{HTMLElement("map")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("menu")}}, {{HTMLElement("meter")}}, {{HTMLElement("nav")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("ol")}}, {{HTMLElement("output")}}, {{HTMLElement("p")}}, {{HTMLElement("pre")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("section")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("table")}}, {{HTMLElement("template")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("ul")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} e Text.

Alguns outros elementos pertencem a essa categoria, mas somente se uma condição específica é realizada:

- {{HTMLElement("area")}}, se for um descendente de um elemento {{HTMLElement("map")}}
- {{HTMLElement("link")}}, se o atributo **[itemprop](/pt-BR/docs/HTML/Global_attributes#attr-itemprop)** estiver presente
- {{HTMLElement("meta")}}, se o atributo **[itemprop](/pt-BR/docs/HTML/Global_attributes#attr-itemprop)** estiver presente
- {{HTMLElement("style")}}, se o atributo [`scoped`](/pt-BR/docs/Web/HTML/Element/style#scoped) estiver presente

### Conteúdo de seccionamento

Os elementos pertencentes ao modelo de conteúdo de seccionamento criam uma [seção no esboço atual](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document) que define o escopo dos elementos {{HTMLElement("header")}}, elementos {{HTMLElement("footer")}} e na [conteúdo do cabeçalho](#Heading_content).

Elementos pertencentes a essa categoria são {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} e {{HTMLElement("section")}}.

> **Nota:** Não confunda esse modelo de conteúdo com a categoria de [seccionamento raiz](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document#sectioning_root) que isola seus conteúdos dos esboços regulares.

### Conteúdo do cabeçalho

O conteúdo do cabeçalho define o título de uma seção, se é marcada por um explícito elemento do [conteúdo de seccionamento](#Sectioning_content) ou implicitamente definido pelo próprio conteúdo do cabeçalho.

Os elementos pertencentes a essa categoria são {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}} e {{HTMLElement("hgroup")}}.

> **Nota:** Embora provavelmente contenha algum conteúdo do cabeçalho, o {{HTMLElement("header")}} não faz parte do conteúdo do cabeçalho em si.

### Conteúdo fraseado

O conteúdo fraseado define o texto e a marcação que ele contém. Séries de conteúdos fraseados compõem parágrafos.

Os elementos pertencentes a essa categoria são {{HTMLElement("abbr")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("command")}}, {{HTMLElement("datalist")}}, {{HTMLElement("dfn")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("kbd")}}, {{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("meter")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} e texto simples (não consistindo somente de caracteres de espaço em branco).

Alguns outros elementos pertencem a essa categoria, mas somente se uma condição específica é realizada:

- {{HTMLElement("a")}}, se contém somente conteúdo fraseado
- {{HTMLElement("area")}}, se for um descendente de um elemento {{HTMLElement("map")}}
- {{HTMLElement("del")}}, se contém somente conteúdo fraseado
- {{HTMLElement("ins")}}, se contém somente conteúdo fraseado
- {{HTMLElement("link")}}, se o atributo [**itemprop**](/pt-BR/docs/HTML/Global_attributes#attr-itemprop) estiver presente
- {{HTMLElement("map")}}, se contém somente conteúdo fraseado
- {{HTMLElement("meta")}}, se o atributo [**itemprop**](/pt-BR/docs/HTML/Global_attributes#attr-itemprop) estiver presente

### Conteúdo embutido

O conteúdo embutido importa outro recurso ou insere conteúdo de uma outra linguagem de marcação no documento. Os elementos que pertencem a essa categoria incluem: {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}} e {{HTMLElement("video")}}.

### Conteúdo interativo

O conteúdo interativo inclui elementos que são especificamente desenvolvidos para a interação do usuário. Os elementos que pertencem a essa categoria incluem: {{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, e {{HTMLElement("textarea")}}. Alguns elementos pertencem a essa categoria somente sob condições específicas:

- {{HTMLElement("audio")}}, se o atributo [`controls`](/pt-BR/docs/Web/HTML/Element/audio#controls) estiver presente
- {{HTMLElement("img")}}, se o atributo [`usemap`](/pt-BR/docs/Web/HTML/Element/img#usemap) estiver presente
- {{HTMLElement("input")}}, se o atributo [`type`](/pt-BR/docs/Web/HTML/Element/input#type) não estiver no modo escondido
- {{HTMLElement("menu")}}, se o atributo [`type`](/pt-BR/docs/Web/HTML/Element/menu#type) estiver no modo barra de ferramentas
- {{HTMLElement("object")}}, se o atributo [`usemap`](/pt-BR/docs/Web/HTML/Element/object#usemap) estiver presente
- {{HTMLElement("video")}}, se o atributo [`controls`](/pt-BR/docs/Web/HTML/Element/video#controls) estiver presente

### Conteúdo associado ao **form**

O conteúdo associado ao **form** compreende elementos que têm um formulário de proprietário, exposto por um atributo **form**. Um formulário de proprietário é ou um elemento {{HTMLElement("form")}} ou o elemento o qual o ID é especificado no atributo **form**.

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Essa categoria contém várias sub-categorias:

- listed
  - : Elementos que estão listados nas coleções IDL [form.elements](/pt-BR/docs/DOM/form.elements) e fieldset.elements. Contém {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} e {{HTMLElement("textarea")}}.
- labelable
  - : Elementos que podem ser associados com elementos {{HTMLElement("label")}}. Contém {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} e {{HTMLElement("textarea")}}.
- submittable
  - : Elementos que podem ser usados para construir o formulário de dados quando o formulário é enviado. Contém {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, e {{HTMLElement("textarea")}}.
- resettable
  - : Elementos que podem ser afetados quando um formulário é reinicializado. Contém {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("output")}},{{HTMLElement("select")}} e {{HTMLElement("textarea")}}.

## Modelo de conteúdo transparente

Se um elemento tem um modelo de conteúdo transparente, então seu conteúdo deve ser estruturado de tal forma que ele seja um HTML5 válido, mesmo se o elemento transparente for removido e substituído pelos elementos filhos.

Por exemplo, os elementos {{HTMLElement("del")}} e {{HTMLELement("ins")}} são transparentes:

```
<p>We hold these truths to be <del><em>sacred &amp; undeniable</em></del> <ins>self-evident</ins>.</p>
```

Se aqueles elementos forem removidos, esse fragmento continuaria sendo um HTML válido.

```
<p>We hold these truths to be <em>sacred &amp; undeniable</em> self-evident.</p>
```

## Outros modelos de conteúdo

Raiz de secionamento.
