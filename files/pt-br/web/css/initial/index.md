---
title: initial
slug: Web/CSS/initial
---

{{CSSRef}}

A palavra-chave CSS **`initial`** CSS se aplica ao [valor inicial (ou padrão)](/pt-BR/docs/Web/CSS/initial_value) de uma propriedade para um elemento. Este valor inicial é definido pelo navegador. Este valor pode ser aplicado em qualquer propriedade CSS.

Isto inclui também o atalho CSS {{cssxref("all")}}, no qual o `initial` pode ser utilizado para restaurar todas as propriedades CSS para o seu estado inicial.

> **Nota:** Em [propriedades herdadas](/pt-BR/docs/Web/CSS/inheritance#propriedades_herdadas), O valor inicial pode ser inesperado. Neste caso, considere o uso dos termos {cssxref("inherit")}}, {{cssxref("unset")}}, ou {{cssxref("revert")}}.

## Exemplo

#### HTML

```html
<p>
  <span>Este texto é vermelho.</span>
  <em>Este texto está em sua cor inicial (normalmente preto).</em>
  <span>Este texto está em vermelho de novo :) </span>
</p>
```

#### CSS

```css
p {
  color: red;
}

em {
  color: initial;
}
```

{{EmbedLiveSample('Exemplo')}}

## Especificações

| Specification                                         | Status                    | Comment                  |
| ----------------------------------------------------- | ------------------------- | ------------------------ |
| {{ SpecName('CSS4 Cascade', '#initial', 'initial') }} | {{Spec2('CSS4 Cascade')}} | No changes from Level 3. |
| {{ SpecName('CSS3 Cascade', '#initial', 'initial') }} | {{Spec2('CSS3 Cascade')}} | Initial definition.      |

## Compatibilidade de navegadores

{{Compat("css.types.global_keywords.initial")}}

## Veja também

- Utilize {{cssxref("unset")}} para definir uma propriedade para o seu valor herdado caso haja herança, ou para o seu valor inicial, caso não haja..
- Utilize {{cssxref("revert")}} para redefinir uma propriedade ao valor estabelecido pela folha de estilo [user-agent](/pt-BR/docs/Web/HTTP/Headers/User-Agent) (ou por seus estilos de usuário, se existir algum).
- Utilize {{cssxref("inherit")}} para fazer uma propriedade de elemento a mesma de seu elemento pai.
- A propriedade {{cssxref("all")}} permite que você redefina todas as propriedades para os seus estados initial, inherited, reverted, or unset de uma vez.
