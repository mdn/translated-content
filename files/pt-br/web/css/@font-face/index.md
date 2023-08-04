---
title: "@font-face"
slug: Web/CSS/@font-face
---

{{CSSRef}}

O **`@font-face`** [CSS](/pt-BR/docs/CSS) [at-rule](/pt-BR/docs/CSS/At-rule) especifica uma fonte customizada com a qual exibe o texto; a fonte pode ser carregada de um servidor remoto ou de uma fonte instalada localmente no computador do usuário.

Se a função `local()` for fornecida, a especificação do nome da fonte a ser procurada no computador do usuário, e a {{Glossary("user agent")}} encontrar uma correspondência, essa fonte local será usada. Caso contrário, o recurso de fonte especificado usando a função `url()` é baixado e usado.

Ao permitir que os autores forneçam suas próprias fontes, `@font-face` torna possível projetar conteúdo sem se limitar às chamadas fontes "seguras para a web" (ou seja, as fontes que são tão comuns que são consideradas como universalmente disponível). A capacidade de especificar o nome de uma fonte instalada localmente a ser procurada e usada permite personalizar a fonte além do básico, ao mesmo tempo em que é possível fazê-lo sem depender de uma conexão com a Internet.

É comum usar `url()` e `local()` juntos, para que a cópia instalada da fonte do usuário seja usada, se disponível, voltando ao download de uma cópia da fonte, caso ela não seja encontrada no dispositivo do usuário.

A regra de CSS `@font-face` pode ser usada não apenas no nível superior de um CSS, mas também dentro de qualquer [CSS conditional-group at-rule](/pt-BR/docs/Web/CSS/At-rule#Conditional_group_rules).

```css
@font-face {
  font-family: "Open Sans";
  src:
    url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

## Sintaxe

### Descritores

- {{cssxref("@font-face/font-display", "font-display")}}
  - : Determina como uma fonte é exibida, com base em se e quando é baixada e pronta para uso.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Especifica um nome que será usado como o valor nominal da fonte para as propriedades da fonte.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Um valor {{cssxref ("font-stretch")}}. Desde o Firefox 61 (e em outros navegadores modernos), isso também aceita dois valores para especificar um intervalo suportado por uma fonte, por exemplo, extensão de fonte: `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Um valor {{cssxref ("font-style")}}. Desde o Firefox 61 (e em outros navegadores modernos), isso também aceita dois valores para especificar um intervalo suportado por uma fonte, por exemplo `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Um valor de {{cssxref ("font-weight")}}. Desde o Firefox 61 (e em outros navegadores modernos), isso também aceita dois valores para especificar um intervalo suportado por uma fonte, por exemplo `font-weight: 100 400;`
- {{cssxref("@font-face/font-variant", "font-variant")}}
  - : Um valor {{cssxref("font-variant")}}.
- {{cssxref("font-feature-settings", "font-feature-settings")}}
  - : Permite o controle sobre recursos tipográficos avançados em fontes OpenType.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Permite o controle de baixo nível sobre as variações de fonte OpenType ou TrueType, especificando os nomes dos quatro eixos das letras dos recursos para variar, juntamente com seus valores de variação.
- {{cssxref("@font-face/src", "src")}}

  - : Especifica o recurso que contém os dados da fonte. Pode ser um URL para um local de arquivo de fonte remota ou o nome de uma fonte no computador do usuário.

    Para fornecer ao navegador uma dica sobre o formato de um recurso de fonte - para que ele possa selecionar um adequado - é possível incluir um tipo de formato dentro de uma função `format()`:

    ```css
    src:
      url(ideal-sans-serif.woff) format("woff"),
      url(basic-sans-serif.ttf) format("truetype");
    ```

    Os tipos disponíveis são: `"woff"`, `"woff2"`, `"truetype"`, `"opentype"`, `"embedded-opentype"`, e `"svg"`.

- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : O intervalo de pontos de código Unicode a serem usados na fonte.

### Sintaxe formal

{{csssyntax}}

## Exemplos

Este exemplo simplesmente especifica uma fonte para download a ser usada, aplicando-a a todo o corpo do documento:

[Veja este exemplo](https://mdn.mozillademos.org/files/7775/webfont-sample.html)

```css
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
}

p {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

```html
<p>This is Bitstream Vera Serif Bold.</p>
```

Neste exemplo, a cópia local do usuário "Helvetica Neue Bold" é usada; se o usuário não tiver essa fonte instalada (dois nomes diferentes são tentados), a fonte para download denominada "MgOpenModernaBold.ttf" será usada:

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

## Font MIME Types

| Formato                | MIME type    |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open File Format   | `font/woff`  |
| Web Open File Format 2 | `font/woff2` |

## Notes

- As fontes da Web estão sujeitas à mesma restrição de domínio (os arquivos de fonte devem estar no mesmo domínio da página que os utiliza), a menos que os [Controles de Acessos HTTP](/pt-BR/docs/HTTP_access_control) sejam usados para relaxar essa restrição.
- `@font-face` não pode ser declarado dentro de um seletor CSS. Por exemplo, o seguinte não funcionará:

  ```css example-bad
  .className {
    @font-face {
      font-family: MyHelvetica;
      src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url(MgOpenModernaBold.ttf);
      font-weight: bold;
    }
  }
  ```

## Especificações

| Especificação                                               | Status                  | Comentário                                                           |
| ----------------------------------------------------------- | ----------------------- | -------------------------------------------------------------------- |
| {{SpecName('WOFF2.0', '', 'WOFF2 font format')}}            | {{Spec2('WOFF2.0')}}    | Especificação de formato de fonte com novo algoritmo de compactação. |
| {{SpecName('WOFF1.0', '', 'WOFF font format')}}             | {{Spec2('WOFF1.0')}}    | Especificação de formato                                             |
| {{SpecName('CSS3 Fonts', '#font-face-rule', '@font-face')}} | {{Spec2('CSS3 Fonts')}} | Definição Inicial                                                    |

## Compatibilidade com navegadores

{{Compat("css.at-rules.font-face")}}

## Veja Também

- [About WOFF](/pt-BR/docs/WOFF)
- [Everythingfonts font-face generator](https://everythingfonts.com/font-face)
- [FontSquirrel @font-face generator](http://www.fontsquirrel.com/fontface/generator)
- [Beautiful fonts with @font-face](http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Open Font Library](http://openfontlibrary.org/)
- [When can I use WOFF?](http://caniuse.com/woff)
- [When can I use SVG Fonts?](http://caniuse.com/svg-fonts)
- [Free Fancy Cool Fonts](https://coolfont.org)
