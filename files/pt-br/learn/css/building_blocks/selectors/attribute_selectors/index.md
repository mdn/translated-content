---
title: Seletores de atributo
slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}

Como você sabe de seu estudo de HTML, os elementos podem ter atributos que fornecem mais detalhes sobre o elemento que está sendo marcado. Em CSS, você pode usar seletores de atributo para direcionar elementos com determinados atributos. Esta lição mostrará como usar esses seletores que são muito úteis.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimentos básicos em informática,
        <a
          href="/pt-BR/Learn/Getting_started_with_the_web/Installing_basic_software"
          >software básico instalado</a
        >, conhecimentos básicos de
        <a
          href="/pt-BR/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabalhando com arquivos</a
        >, Basico de HTML (Estude
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução para o HTML</a
        >), e uma ideia de como CSS funciona (Estude
        <a href="/pt-BR/docs/Learn/CSS/First_steps">CSS primeiros paços</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Entender o que são seletores de atributo e como usa-los.</td>
    </tr>
  </tbody>
</table>

## Seletores de Presença e Valor

Esses seletores permitem a seleção de um elemento com base na presença de um atributo sozinho (por exemplo, href) ou em várias correspondências diferentes com o valor do atributo.

| Seletor          | Exemplo                         | Descrição                                                                                                                                   |
| ---------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `[attr]`         | `a[title]`                      | Corresponde a elementos com um atributo attr (cujo nome é o valor entre colchetes).                                                         |
| `[attr=value]`   | `a[href="https://example.com"]` | Corresponde a elementos com um atributo attr cujo valor é exatamente value - a string entre aspas.                                          |
| `[attr~=value]`  | `p[class~="special"]`           | Corresponde a elementos com um atributo attr cujo valor é exatamente value, ou contém valor em sua lista de valores (separados por espaço). |
| `[attr\|=value]` | `div[lang\|="zh"]`              | Corresponde a elementos com um atributo attr cujo valor é exatamente value ou começa com value imediatamente seguido por um hífen.          |

No exemplo abaixo você pode ver esses seletores sendo usados.

- usando `li[class]` podemos combinar qualquer seletor com um atributo de classe. Isso corresponde a todos os itens da lista, **exceto o primeiro.**
- `li[class="a"]` corresponde a um seletor com uma classe de a, mas não a um seletor com uma classe de a com outra classe separada por espaço como parte do valor. Ele seleciona o segundo item da lista.
- `li[class~="a"]` corresponderá a uma classe de a, mas também a um valor que contém a classe de a como parte de uma lista separada por espaços em branco. Ele seleciona o segundo e o terceiro itens da lista.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## Seletores de SubString

Esses seletores permitem uma correspondência mais avançada de substrings dentro do valor do seu atributo. Por exemplo, se você tivesse classes de `box-warning` e `box-error` e quisesse combinar tudo que começou com a string "box-", você poderia usar `[class^="box-"]` para selecionar os dois (ou `[class|="box"]` como descrito abaixo).

| Seletor         | Exemplo             | Descrição                                                                                                        |
| --------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | Corresponde a elementos com um atributo attr (cujo nome é o valor entre colchetes), cujo valor começa com valor. |
| `[attr$=value]` | `li[class$="-box"]` | Corresponde a elementos com um atributo attr cujo valor termina com valor.                                       |
| `[attr*=value]` | `li[class*="box"]`  | Corresponde a elementos com um atributo attr cujo valor contém o valor em qualquer lugar dentro da string.       |

(À parte/lado: pode ser útil notar que `^` e `$` há muito são usados como âncoras nas chamadas expressões regulares para significar que começa com e termina com.)

O próximo exemplo mostra o uso desses seletores:

- li \[class ^ = "a"] corresponde a qualquer valor de atributo que comece com a, portanto, corresponde aos dois primeiros itens da lista.
- li \[class $ = "a"] corresponde a qualquer valor de atributo que termina com a, portanto, corresponde ao primeiro e terceiro item da lista.
- li \[class \* = "a"] corresponde a qualquer valor de atributo onde a apareça em qualquer lugar na string, portanto, corresponde a todos os itens da nossa lista

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## Sensibilidade à maiúsculas

Se você deseja combinar valores de atributo sem distinção entre maiúsculas e minúsculas, você pode usar o valor i antes do colchete de fechamento. Este sinalizador informa ao navegador para corresponder caracteres ASCII sem distinção entre maiúsculas e minúsculas. Sem o sinalizador, os valores serão correspondidos de acordo com a distinção entre maiúsculas e minúsculas do idioma do documento - no caso do HTML, será sensível a maiúsculas e minúsculas.

No exemplo abaixo, o primeiro seletor corresponderá a um valor que começa com um - ele corresponde apenas ao primeiro item da lista porque os outros dois itens da lista começam com um A maiúsculo. O segundo seletor usa o sinalizador que não diferencia maiúsculas de minúsculas e, portanto, corresponde a todos os itens da lista.

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> [!NOTE]
> Há tambem um valor mais novo `s`, que forçará a correspondência com distinção entre maiúsculas e minúsculas em contextos em que a correspondência normalmente não diferencia maiúsculas de minúsculas; no entanto, isso não é bem suportado em navegadores e não é muito útil em um contexto HTML.

## Próximos passos

Agora que terminamos com os seletores de atributo, você pode continuar no próximo artigo e ler sobre [pseudo-class and pseudo-element selectors](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks")}}
