---
title: ":empty"
slug: Web/CSS/:empty
---

{{ CSSRef() }}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:empty`** representa qualquer elemento que não tenha filhos. Aqui, filhos podem ser outros elementos ou blocos de texto (incluindo espaços em branco). Comentários e instruções de processamento não são considerados ao se determinar se um elemento é vazio.

```css
/* Seleciona qualquer <div> que não tenha conteúdo */
div:empty {
  background: lime;
}
```

## Sintaxe

{{csssyntax}}

## Exemplos

### HTML

```html
<div class="box"><!-- Eu serei verde. --></div>
<div class="box">Eu serei rosa.</div>
<div class="box">
  <!-- Eu serei rosa por causa do espaço em branco em volta desse comantário -->
</div>
```

### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
```

```css
.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

### Resultado

{{EmbedLiveSample('Examples', 300, 80)}}

## Questões de acessibilidade

Tecnologias assistivas como leitores de tela não conseguem identificar e processar conteúdos interativos que estejam vazios. Todo conteúdo interativo deve ter um nome acessível, que é criado ao fornecer um valor de texto para o elemento pai do controle interativo ([âncoras](/pt-BR/docs/Web/HTML/Element/a), [botões](/pt-BR/docs/Web/HTML/Element/button), etc.). Nomes acessíveis expõem o controle interativo à [árvore de acessibilidade](/pt-BR/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs), uma API que comunica informações importantes úteis para tecnologias assistivas.

The text that provides the interactive control's accessible name can be hidden using [a combination of properties](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) that remove it visually from the screen but keep it parseable by assistive technology. This is commonly used for buttons that rely solely on an icon to convey purpose.

- [What is an accessible name? | The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## Specifications

| Specification                                               | Status                        | Comment            |
| ----------------------------------------------------------- | ----------------------------- | ------------------ |
| {{ SpecName('CSS4 Selectors', '#empty-pseudo', ':empty') }} | {{ Spec2('CSS4 Selectors') }} | No change          |
| {{ SpecName('CSS3 Selectors', '#empty-pseudo', ':empty') }} | {{ Spec2('CSS3 Selectors') }} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.selectors.empty")}}
