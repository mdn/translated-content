---
title: Pseudo-classes
slug: Web/CSS/Pseudo-classes
---

{{ CSSRef() }}

Uma _**pseudo-classe**_ CSS é uma palavra-chave adicionada a seletores que especifica um estado especial do elemento selecionado. Por exemplo, {{Cssxref(":hover")}} pode ser usado para alterar a cor de um botão quando o usuário passar o cursor sobre ele.

```css
/*Qualquer botão sobre o qual o ponteiro do usuário esteja passando sobre*/
button:hover {
  color: blue;
}
```

Pseudo-classes permitem que você aplique um estilo a um elemento não apenas em relação ao conteúdo da árvore do documento, mas também em relação a fatores externos como o histórico de navegação ({{CSSxRef(":visited")}}, por exemplo), o status do seu conteúdo (como {{ CSSxRef(":checked")}} em certos elementos de um formulário), ou a posição do mouse (como {{CSSxRef(":hover")}}, que permite saber se o mouse está sobre um elemento ou não).

> [!NOTE]
> Diferentemente das pseudo-classes, [pseudo-elementos](/pt-BR/docs/Web/CSS/Pseudo-elements) podem ser usados para estilizar uma _parte específica_ de um elemento.

## Sintaxe

```
seletor:pseudo-classe {
  propriedade: valor;
}
```

Assim como nas classes regulares, você pode encadear juntas quantas pseudo-classes você desejar em um seletor.

## Índice de pseudo-classes padrão

- {{ Cssxref(":active") }}
- {{ Cssxref(":checked") }}
- {{ Cssxref(":default") }}
- {{ Cssxref(":dir", ":dir()")}}
- {{ Cssxref(":disabled") }}
- {{ Cssxref(":empty") }}
- {{ Cssxref(":enabled") }}
- {{ Cssxref(":first") }}
- {{ Cssxref(":first-child") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":fullscreen") }}
- {{ Cssxref(":focus") }}
- {{ Cssxref(":hover") }}
- {{ Cssxref(":indeterminate") }}
- {{ Cssxref(":in-range") }}
- {{ Cssxref(":invalid") }}
- {{ Cssxref(":lang", ":lang()") }}
- {{ Cssxref(":last-child") }}
- {{ Cssxref(":last-of-type") }}
- {{ Cssxref(":left") }}
- {{ Cssxref(":link") }}
- {{ Cssxref(":not", ":not()") }}
- {{ Cssxref(":nth-child", ":nth-child()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}
- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":only-child") }}
- {{ Cssxref(":only-of-type") }}
- {{ Cssxref(":optional") }}
- {{ Cssxref(":out-of-range") }}
- {{ Cssxref(":read-only") }}
- {{ Cssxref(":read-write") }}
- {{ Cssxref(":required") }}
- {{ Cssxref(":right") }}
- {{ Cssxref(":root") }}
- {{ Cssxref(":scope") }}
- {{ Cssxref(":target") }}
- {{ Cssxref(":valid") }}
- {{ Cssxref(":visited") }}

## Especificações

{{Specifications}}

## Veja também

- {{ Cssxref("pseudo-elements") }}
