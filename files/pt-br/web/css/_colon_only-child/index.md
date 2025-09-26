---
title: :only-child
slug: Web/CSS/:only-child
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) de CSS **`:only-child`** representa um elemento sem nenhum elemento-irmão. É o mesmo que `:first-child:last-child` ou `:nth-child(1):nth-last-child(1)`, mas com uma especificidade mais baixa.

```css
/* Seleciona cada <p>, mas apenas se for o */
/* único filho de seu elemento-pai */
p:only-child {
  background-color: lime;
}
```

> [!NOTE]
> Originalmente, foi definido que o elemento selecionado deveria ter um elemento-pai. A partir de Selectors Level 4, isso não é mais necessário.

## Sintaxe

{{csssyntax}}

## Exemplos

### Exemplo básico

#### HTML

```html
<main>
  <div>
    <i>Eu sou um filho único solitário.</i>
  </div>

  <div>
    <i>Eu tenho irmãos.</i><br />
    <b>Eu também!</b><br />
    <span>Eu também tenho irmãos, <span>mas este é um filho único.</span></span>
  </div>
</main>
```

#### CSS

```css
main :only-child {
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('Basic_example','100%',180)}}

### Exemplo de lista

#### HTML

```html
<ol>
  <li>
    Primeiro
    <ul>
      <li>Essa lista tem apenas um elemento.</li>
    </ul>
  </li>
  <li>
    Segundo
    <ul>
      <li>Essa lista tem três elementos.</li>
      <li>Essa lista tem três elementos.</li>
      <li>Essa lista tem três elementos.</li>
    </ul>
  </li>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}
li:only-child {
  color: red;
  list-style-type: square;
}
```

#### Resultado

{{EmbedLiveSample('A_list_example', '100%', 210)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{Cssxref(":only-of-type")}}
- {{Cssxref(":first-child")}}
- {{Cssxref(":last-child")}}
- {{Cssxref(":nth-child")}}
