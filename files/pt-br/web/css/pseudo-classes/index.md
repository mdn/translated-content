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

> **Nota:** Diferentemente das pseudo-classes, [pseudo-elementos](/pt-BR/docs/Web/CSS/Pseudo-elementos) podem ser usados para estilizar uma _parte específica_ de um elemento.

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

| Especificação                   | Status                       | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{ SpecName('Fullscreen') }}    | {{ Spec2('Fullscreen') }}    | Define `:fullscreen`.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| {{ SpecName('HTML WHATWG') }}   | {{ Spec2('HTML WHATWG') }}   | Nenhuma mudança de {{ SpecName('HTML5 W3C') }}.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| {{SpecName('CSS4 Selectors')}}  | {{Spec2('CSS4 Selectors')}}  | Define `:any-link`, `:local-link`, `:scope`, `:active-drop-target`, `:valid-drop-target`, `:invalid-drop-target`, `:current`, `:past`, `:future`, `:placeholder-shown`, `:user-error`, `:blank`, `:nth-match()`, `:nth-last-match()`, `:nth-column()`, `:nth-last-column()`, e `:matches()`. Nenhuma mudança significante das pseudo-classes definidas em {{SpecName('CSS3 Selectors')}} e {{SpecName('HTML5 W3C')}} (embora o significado semântico que não foram retomadas). |
| {{ SpecName('HTML5 W3C') }}     | {{ Spec2('HTML5 W3C') }}     | Define o siginificado semântico no contexto do HTML `:link`, `:visited`, `:active`, `:enabled`, `:disabled`, `:checked`, e `:indeterminate`. Define `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only`, `:read-write`, e `:dir()`.                                                                                                                                                                                         |
| {{ SpecName('CSS3 Basic UI') }} | {{ Spec2('CSS3 Basic UI') }} | Define `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only`, e `:read-write`, mas sem associar significado semântico.                                                                                                                                                                                                                                                                                                        |
| {{SpecName('CSS3 Selectors')}}  | {{Spec2('CSS3 Selectors')}}  | Define `:target`, `:root`, `:nth-child()`, `:nth-last-of-child()`, `:nth-of-type()`, `:nth-last-of-type()`, `:last-child`, `:first-of-type`, `:last-of-type`, `:only-child`, `:only-of-type`, `:empty`, e `:not()`. Denife a sintaxe de `:enabled`, `:disabled`, `:checked`, e `:indeterminate`, mas sem o significado semântico associado. Nenhuma mudança significativa, para as pseudo-classes definidas em {{SpecName('CSS2.1')}}.                                         |
| {{SpecName('CSS2.1')}}          | {{Spec2('CSS2.1')}}          | Define `:lang()`, `:first-child`, `:hover`, e `:focus`. Nenhuma mudança significativa, para as pseudo-classes definidas em{{SpecName('CSS1')}}.                                                                                                                                                                                                                                                                                                                                |
| {{SpecName('CSS1')}}            | {{Spec2('CSS1')}}            | Define `:link`, `:visited`, e `:active`, mas sem o significado semântico associado.                                                                                                                                                                                                                                                                                                                                                                                            |

## Veja também

- {{ Cssxref("pseudo-elements") }}
