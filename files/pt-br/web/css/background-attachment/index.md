---
title: background-attachment
slug: Web/CSS/background-attachment
---

{{CSSRef}}

## Resumo

Se um {{cssxref("background-image")}} é especificado, a propriedade [CSS](/pt-BR/docs/CSS) **`background-attachment`** determina se aquela posição da imagem é fixa com o viewport, ou se irá rolar juntamente com o seu bloco.

{{cssinfo}}

## Sintaxe

```css
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

background-attachment: inherit;
```

### Valores

- `fixed`
  - : Essa chave significa que o background é fixo em relação ao viewport. Mesmo que um elemento tenha um mecanismo de rolar, o background 'fixed' não movimenta com o elemento.
- `local`
  - : Essa chave significa que o background é fixo em relação ao conteúdo do elemento: ise ele tem um mecanismo de rolar, o background rola com o conteúdo do elemento, e a área pintada e o posicionamento do background são relativos à área de rolagem do elemento ao invés da borda de fronteira deles.
- `scroll`
  - : Essa chave significa que o background é fixo em relação ao elemento em si e não rola com seu conteúdo. (É efetivamente ligado à borda do elemento.)

### Formal syntax

{{csssyntax}}

## Exemplos

### Exemplo simpes

#### CSS

```css
p {
  background-image: url("starsolid.gif");
  background-attachment: fixed;
}
```

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
</p>
```

#### Resultado

{{EmbedLiveSample("Simple_example")}}

### Suporte de múltiplas imagem de background

Essa propriedade suporta múltiplas imagens de background. Você pode especificar `<attachment>` para cada background, separado por vírgulas. Cada imagem é combinada com o correspondente tipo de anexo, do primeiro especificado ao último.

#### CSS

```css
p {
  background-image: url("starsolid.gif"), url("startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
  Suddenly she came upon a little three-legged table, all made of solid glass;
  there was nothing on it except a tiny golden key, and Alice's first thought
  was that it might belong to one of the doors of the hall; but, alas! either
  the locks were too large, or the key was too small, but at any rate it would
  not open any of them. However, on the second time round, she came upon a low
  curtain she had not noticed before, and behind it was a little door about
  fifteen inches high: she tried the little golden key in the lock, and to her
  great delight it fitted!
</p>
```

#### Resultado

{{EmbedLiveSample("Multiple_background_image_support")}}

## Especificações

| Especificação                                                                                | Status                        | Comentário                                                                                      |
| -------------------------------------------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-background-attachment', 'background-attachment')}}      | {{Spec2('CSS3 Backgrounds')}} | The shorthand property has been extended to support multiple backgrounds and the `local` value. |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-attachment', 'background-attachment')}} | {{Spec2('CSS2.1')}}           | Mudança não significativa.                                                                      |
| {{SpecName('CSS1', '#background-attachment', 'background-attachment')}}                      | {{Spec2('CSS1')}}             | Mudança não significativa                                                                       |

## Compatibilidade com navegadores

{{Compat("css.properties.background-attachment")}}

## Veja também

- [Multiple backgrounds](/pt-BR/docs/CSS/Multiple_backgrounds)
