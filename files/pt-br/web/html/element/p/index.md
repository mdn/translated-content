---
title: <p> O elemento Parágrafo
slug: Web/HTML/Element/p
---

O **elemento HTML** **`<p>`** representa um parágrafo. Em mídias visuais, parágrafos são representados como blocos indentados de texto com a primeira letra avançada e separados por linhas em branco. Já em HTML, parágrafos são usados para agrupar conteúdos relacionados de qualquer tipo, como imagens e campos de um formulário.

Parágrafos são [Elementos block-level](/pt-BR/docs/Web/HTML/Elementos_block-level), e fecharão automaticamente caso outro [Elemento block-level](/pt-BR/docs/Web/HTML/Elementos_block-level) inicie antes da tag de fechamento `</p>`. Veja "Omissão de tag" abaixo.

- _[Categorias de conteúdo](/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo)_
  [Conteúdos de fluxo](/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conteúdo_de_fluxo), conteúdos palpáveis.
- _Conteúdo permitido_[Conteúdo frasal](/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conte%C3%BAdo_fraseado).
- _Omissão de tag_ A tag de abertura é obrigatória. A tag de fechamento pode ser omitida caso o elemento {{HTMLElement("p")}} seja imediatamente sucedido pelos elementos {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hr")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}}, {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("section")}}, {{HTMLElement("table")}}, {{HTMLElement("ul")}}, ou por outro elemento {{HTMLElement("p")}}, ou, caso não haja mais conteúdo no elemento pai e o elemento pai não for um elemento {{HTMLElement("a")}}.
- _Elementos pai permitidos_ Qualquer elemento que aceite [conteúdo de fluxo](/pt-BR/docs/Web/Guide/HTML/Categorias_de_conteudo#Conte%C3%BAdo_de_fluxo).
- _Interface DOM_ {{domxref("HTMLParagraphElement")}}

## Atributos

Este elemento inclui [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

> **Note:** **Obs.:** O atributo `align` nas tags `<p>` está obsoleto e não deve ser usado.

## Exemplo

### HTML

```html
<p>
  Este é o primeiro parágrafo do texto. Este é o primeiro parágrafo do texto.
  Este é o primeiro parágrafo do texto. Este é o primeiro parágrafo do texto.
</p>

<p>
  Este é o segundo parágrafo do texto. Este é o segundo parágrafo do texto. Este
  é o segundo parágrafo do texto. Este é o segundo parágrafo do texto.
</p>
```

### Resultado

{{EmbedLiveSample('Exemplo')}}

## Estilizando Parágrafos

### HTML

```html
<p>
  Parágrafos separados por linhas em branco são mais legíveis. Porém, também
  podemos distinguir parágrafos indentando suas primeiras linhas. Uma abordagem
  que ocupa menos espaço e é usada para economizar papel quando impresso.
</p>

<p>
  Em textos que serão editados, como trabalhos escolares e rascunhos, usamos
  tanto as linhas em branco quanto a indentação para distinguirmos cada
  parágrafo. Já em publicações, usar ambas é considerado redundante e
  amadoresco.
</p>

<p>
  Em textos arcaicos usava-se o caractere especial: ¶, o <i>caldeirão</i>, para
  separar parágrafos. Atualmente, esta abordagem é considerada claustrofóbica e
  ilegível.
</p>

<p>
  Será mesmo que é ilegível? Clique para visualizar:
  <button data-toggle-text="Que horrível! Mudar de volta!">
    Usar caldeirão nos parágrafos
  </button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.caldeirao {
  text-indent: 0;
  display: inline;
}
p.caldeirao + p.caldeirao::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", function (event) {
  document.querySelectorAll("p").forEach(function (paragraph) {
    paragraph.classList.toggle("caldeirao");
  });
  var newButtonText = event.target.dataset.toggleText;
  var oldText = event.target.innerText;
  event.target.innerText = newButtonText;
  event.target.dataset.toggleText = oldText;
});
```

### Result

{{EmbedLiveSample('Estilizando_Parágrafos')}}

## Considerações acerca da Acessibilidade

Subdividir um conteúdo em parágrafos torna um texto mais acessível. Leitores de tela e outras tecnologias assistivas providenciam atalhos que permitem a navegação entre parágrafos. Possibilitando, então, uma leitura rápida do texto.

Utilizar elementos `<p>` vazios para adicionar linhas em branco entre parágrafos é uma abordagem problemática para os que dependem das tecnologias leitoras de tela. O leitor anunciará a existência de um parágrafo, mas não lerá nenhum conteúdo, pois não há. Isso confunde e frustra os que dependem dos leitures de tela.

Se desejas mais espaço, use {{glossary("CSS")}} propriedades como {{cssxref("margin")}} para recriar o efeito:

```css
p {
  margin-bottom: 2em; // aumenta o espaço em branco após um parágrafo
}
```

## Especificações

| Specification                                                                 | Status                   | Comment                                                        |
| ----------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-p-element', '&lt;p&gt;')}}      | {{Spec2('HTML WHATWG')}} | Nenhuma alteração desde a última w3c {{SpecName("HTML5 W3C")}} |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-p-element', '&lt;p&gt;')}} | {{Spec2('HTML5 W3C')}}   | Atributo `align` está obsoleto                                 |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.3.1', '&lt;p&gt;')}}             | {{Spec2('HTML4.01')}}    | Definição inicial                                              |

## Compatibilidade com navegadores

{{Compat("html.elements.p")}}

## Veja também

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
