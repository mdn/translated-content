---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
---

{{CSSRef}}

A propriedade CSS **`font-variation-settings`** fornece controle de baixo nível sobre características de [variable font](/pt-BR/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide), especificando os nomes dos quatro eixos das características que você deseja variar, juntamente com seus valores.

{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}

> **Nota:** This property is a low-level mechanism designed to set variable font features where no other way to enable or access those features exist. You should only use it when no basic properties exist to set those features (e.g. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

> **Nota:** font characteristics set using `font-variation-settings` will always override those set using the corresponding basic font properties, e.g. `font-weight`, no matter where they appear in the cascade. In some browsers, this is currently only true when the `@font-face` declaration includes a `font-weight` range.

## Sintaxe

```css
/* Usar as configurações padrão */
font-variation-settings: normal;

/* Definir valores para os nomes dos eixos de fontes variáveis */
font-variation-settings: "XHGT" 0.7;

/* Valores globais */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: unset;
```

### Values

O valor desta propriedade pode assumir uma de duas formas:

- `normal`
  - : O texto é colocado usando as configurações padrão.
- `<string> <number>`
  - : Ao renderizar texto, a lista de nomes dos eixos de fontes variáveis é passada para o mecanismo de layout de texto para ativar ou desativar os recursos de fonte. Cada configuração é sempre um ou mais pares que consistem em um {{cssxref("&lt;string&gt;")}} de 4 caracteres ASCII seguidos por um {{cssxref("number")}} indicando o valor do eixo a ser definido. Se a `<string>` tiver mais ou menos caracteres ou contiver caracteres fora do intervalo de códigos U+20 - U+7E, toda a propriedade será inválida. O `<number>` pode ser fracionário ou negativo, dependendo do intervalo de valores disponível em sua fonte, conforme definido pelo designer da fonte.

{{csssyntax}}

## Eixos registrados e personalizados

Os eixos de fontes variáveis vêm em dois tipos: **registrados** e **personalizados**.

Os eixos registrados são os mais comumente encontrados - comuns o suficiente para que os autores das especificações considerassem que valia a pena padronizar. Observe que isso não significa que o autor precise incluir tudo isso em sua fonte.

Aqui estão os eixos registrados, juntamente com suas propriedades CSS correspondentes:

| Tag do Eixo    | Propriedade CSS                              |
| -------------- | -------------------------------------------- |
| "wght"         | {{cssxref("font-weight")}}                   |
| "wdth"         | {{cssxref("font-stretch")}}                  |
| "slnt" (slant) | {{cssxref("font-style")}}: `oblique + angle` |
| "ital"         | {{cssxref("font-style")}}: `italic`          |
| "opsz"         | {{cssxref("font-optical-sizing")}}           |

Os eixos personalizados podem ser qualquer coisa que o designer da fonte deseje variar em sua fonte, por exemplo, alturas ascendentes ou descendentes, o tamanho das serifas ou qualquer outra coisa que possam imaginar. Qualquer eixo pode ser usado desde que seja dado um eixo exclusivo de 4 caracteres. Alguns acabam se tornando mais comuns e podem até se registrar com o tempo.

> **Nota:** As tags de eixo registrados são identificadas usando tags minúsculas, enquanto os eixos personalizados devem receber tags maiúsculas. Observe que os designers de fontes não são forçados a seguir essa prática de maneira alguma, e alguns não o fazem. O ponto importante aqui é que as tags de eixo diferenciam maiúsculas de minúsculas.

## Exemplos

Veja abaixo exemplos interativos que demonstram os eixos registrados. Você pode encontrar vários outros exemplos de fontes variáveis em nosso [Variable fonts guide](/pt-BR/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide), [v-fonts.com](https://v-fonts.com/), e [axis-praxis.org](https://www.axis-praxis.org/).

> **Warning:** **Aviso**: Para usar fontes variáveis em seu sistema operacional, você precisa verificar se está atualizado. Por exemplo, os sistemas operacionais Linux precisam da versão mais recente do Linux Freetype, e o macOS anterior à 10.13 não suportam fontes variáveis. Se o seu sistema operacional não estiver atualizado, você não poderá usar fontes variáveis em páginas da Web ou no Firefox Developer Tools.

### Peso (wght)

O CSS do exemplo a seguir pode ser editado para permitir que você mude os valores de peso da fonte.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Inclinação (slnt)

O CSS do exemplo a seguir pode ser editado para permitir que você mude os valores oblíquos / oblíquos da fonte.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}

## Especificações

| Especificação                                                                                                                            | Status                  | Comentário         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------ |
| {{SpecName('CSS4 Fonts', '#low-level-font-variation-settings-control-the-font-variation-settings-property', 'font-variation-settings')}} | {{Spec2('CSS4 Fonts')}} | Initial definition |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.font-variation-settings")}}

## Veja também

- [Variable fonts guide](/pt-BR/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
- [OpenType Font Variations Overview](https://www.microsoft.com/typography/otspec180/otvaroverview.htm)
- [OpenType Design-Variation Axis Tag Registry](https://www.microsoft.com/typography/otspec/dvaraxisreg.htm)
