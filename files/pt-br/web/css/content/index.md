---
title: content
slug: Web/CSS/content
---

{{CSSRef}}

A propriedade CSS **`content`** é usada com os pseudoelementos {{cssxref("::before")}} e {{cssxref("::after")}} para gerar conteúdo em um elemento. Objetos inseridos usando a propriedade `content` são _[elementos substituídos](/pt-BR/docs/CSS/Replaced_element) anônimos_.

```css
/* Palavras-chave que não podem ser combinadas com outros valores */
content: normal;
content: none;

/* Valores <string> com caracteres especiais devem ser escritos */
/* com escape Unicode, por exemplo \00A0 para &nbsp; */
content: "prefixo";

/* Valores <url> */
content: url("http://www.example.com/test.png");

/* Valores <counter> */
content: counter(contador_capitulo);
content: counters(contador_secao, ".");

/* Valores attr() associados ao valor do atributo HTML */
content: attr(valor string);

/* Palavras-chave que variam com o idioma e posição */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* Com exceção de normal e none, vários valores */
/* podem ser usados simultaneamente */
content: open-quote chapter_counter;

/* Valores globais */
content: inherit;
content: initial;
content: unset;
```

{{cssinfo}}

## Sintaxe

### Valores

- `none`
  - : O pseudoelemento não será gerado.
- `normal`
  - : Equivalente a `none` para os pseudoelementos `::before` e `::after`.
- {{cssxref("&lt;string&gt;")}}
  - : Um ou mais caracteres de texto.
- {{cssxref("&lt;url&gt;")}}
  - : Uma URL que designa um recurso externo (como uma imagem). Se o recurso não puder ser exibido, ele será ignorado ou um _placeholder_ será exibido no seu lugar.
- {{cssxref("&lt;counter&gt;")}}

  - : O valor de um contador CSS, geralmente um número. Ele pode ser exibido usando a função [`counter()`](/pt-BR/docs/Web/CSS/counter%28%29) ou [`counters()`](/pt-BR/docs/Web/CSS/counters%28%29).

    A função `counter()` tem duas formas: 'counter(_nome_)' ou 'counter(_nome_, _estilo_)'. O texto gerado será o valor do contador mais próximo do nome fornecido no pseudoelemento. Ele será formatado com o estilo especificado (o padrão é `decimal`).

    A função `counters()` também tem duas formas: 'counters(_nome_, _string_)' ou 'counters(_nome_, _separador_, _estilo_)'. O texto gerado será o valor de todos os contadores com o mesmo nome no escopo do pseudoelemento, do mais afastado ao mais próximo, separados pelo separador especificado. Os contadores serão exibidos no estilo indicado (o padrão é `decimal`).

- `attr(x)`
  - : O valor do atributo `x` do elemento. Se não houver um atributo `x`, uma _string_ vazia será retornada. A diferenciação de maiúsculas e minúsculas dependerá da linguagem do documento.
- `open-quote` | `close-quote`
  - : Esses valores serão substituídos pela _string_ apropriada da propriedade {{cssxref("quotes")}}.
- `no-open-quote` | `no-close-quote`
  - : Não introduzem nenhum conteúdo, mas aumentam (ou diminuem) o nível de aninhamento de aspas.

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Cabeçalhos e citações

Este exemplo insere aspas ao redor de citações e adiciona a palavra "Capítulo" antes dos cabeçalhos.

#### HTML

```html
<h1>5</h1>
<p>
  De acordo com o Sr. Tim Berners-Lee,
  <q cite="https://www.w3.org/People/Berners-Lee/FAQ.html#Internet"
    >I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.</q
  >
  Devemos entender que não há nada fundamentalmente errado em criar algo com
  base nas contribuições de outras pessoas.
</p>

<h1>6</h1>
<p>
  De acordo com o Manifesto Mozilla,
  <q cite="https://www.mozilla.org/about/manifesto/"
    >As pessoas precisam ter a capacidade de moldar a Internet e suas
    experiências com ela.</q
  >
  Portanto, podemos concluir que contribuir para a Web aberta pode proteger
  nossas próprias experiências individuais nela.
</p>
```

#### CSS

```css
q {
  color: blue;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}

h1::before {
  content: "Cap\00EDtulo "; /* O espaço no final cria uma separação
                                entre o conteúdo adicionado e o
                                resto do conteúdo */
}
```

#### Resultado

{{EmbedLiveSample('Headings_and_quotes', '100%', 200)}}

### Imagem combinada com texto

Este exemplo insere uma imagem antes do _link_. Se a imagem não for encontrada, o texto será exibido no seu lugar.

#### HTML

```html
<a href="https://www.mozilla.org/">Mozilla Home Page</a>
```

#### CSS

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico")
    " MOZILLA: ";
  font:
    x-small Arial,
    sans-serif;
  color: gray;
}
```

#### Resultado

{{EmbedLiveSample('Image_combined_with_text', '100%', 60)}}

### Alterando classes específicas

Este exemplo insere texto adicional no final de itens especiais em uma lista.

#### HTML

```html
<h2>Categoriass mais vendidas</h2>
<ol>
  <li>Suspenses políticos</li>
  <li class="new-entry">Histórias de terror</li>
  <li>Biografias</li>
  <li class="new-entry">Romances de Vampiros</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " Novo!"; /* O espaço no final cria uma separação
                         entre o conteúdo adicionado e o
                         resto do conteúdo */
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Targeting_classes', '100%', 160)}}

### Imagens e atributos de elementos

Este exemplo insere uma imagem antes de cada _link_ e adiciona o conteúdo do seu atributo `id` depois.

#### HTML

```html
<ul>
  <li><a id="moz" href="http://www.mozilla.org/"> Mozilla Home Page</a></li>
  <li>
    <a id="mdn" href="https://developer.mozilla.org/">
      Mozilla Developer Network</a
    >
  </li>
</ul>
```

#### CSS

```css
a {
  text-decoration: none;
  border-bottom: 3px dotted navy;
}

a::after {
  content: " (" attr(id) ")";
}

#moz::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico");
}

#mdn::before {
  content: url("mdn-favicon16.png");
}

li {
  margin: 1em;
}
```

#### Resultado

{{EmbedLiveSample('Images_and_element_attributes', '100%', 160)}}

## Especificações

| Especificação                                                | Status                    | Comentário        |
| ------------------------------------------------------------ | ------------------------- | ----------------- |
| {{SpecName("CSS3 Content", "#content-property", "content")}} | {{Spec2("CSS3 Content")}} |                   |
| {{SpecName("CSS2.1", "generate.html#content", "content")}}   | {{Spec2("CSS2.1")}}       | Definição inicial |

## Compatibilidade com navegadores

{{Compat("css.properties.content")}}

## Veja também

- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("quotes")}}
