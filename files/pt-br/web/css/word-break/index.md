---
title: word-break
slug: Web/CSS/word-break
---

{{CSSRef}}

A propriedade CSS **`word-break`** é usada para especificar se o navegador deve inserir ou não quebras de linha onde, normalmente, o texto vazaria de seu container.

{{EmbedInteractiveExample("pages/css/word-break.html")}}

> **Nota:** comparando com {{cssxref("overflow-wrap")}}, `word-break` criará uma quebra de linha no ponto exato em que o texto vazaria, mesmo que uma palavra pudesse ser colocada por completo em uma nova linha sem a necessidade de quebra da palavra.

## Sintaxe

```css
/* Valores específicos */
word-break: normal;
word-break: break-all;
word-break: keep-all;

/* Valores globais */
word-break: inherit;
word-break: initial;
word-break: unset;
```

### Valores

- `normal`
  - : Usa a regra de quebra de linha padrão.
- `break-all`
  - : Quebras de linha podem ser inseridas entre quaisquer caracteres de texto não-CJC (Chinês/Japonês/Coreano).
- `keep-all`
  - : Não permite quebra de linha para texto CJC. Texto não-CJC se comporta como `normal`.
- `break-word`
  - : Para evitar o vazamento, palavras que normalmente não seriam quebradas podem ser quebradas em pontos arbitrários se não houver pontos de quebra válidos na linha.

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Conteúdo HTML

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
</p>

<p>4. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  次の単語グレートブリテンおよび北アイルランド連合王国で本当に大きな言葉
</p>
```

### Conteúdo CSS

```css
.narrow {
  padding: 5px;
  border: 1px solid;
  display: table;
  max-width: 100%;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}
```

{{ EmbedLiveSample('Examples', '100%', 600) }}

## Especificações

| Especificação                                                   | Status                 | Commentário       |
| --------------------------------------------------------------- | ---------------------- | ----------------- |
| {{SpecName('CSS3 Text', '#word-break-property', 'word-break')}} | {{Spec2('CSS3 Text')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("css.properties.word-break")}}

## Veja também

- {{cssxref("word-wrap")}}
