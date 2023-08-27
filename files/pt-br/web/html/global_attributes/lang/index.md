---
title: lang
slug: Web/HTML/Global_attributes/lang
---

{{HTMLSidebar("Global_attributes")}}

O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **`lang`** ajuda a definir o idioma de um elemento: a língua em que elementos não-editáveis são escritos, ou a língua em que elementos editáveis devem ser escritos pelo usuário. O atributo contém uma uma única "tag de idioma" em um formato definido em [_Tags para identificar linguagens(BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt).

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

Se o valor do atributo é uma _string vazia_ (`lang=""`), o idioma é definido como _unknown (desconhecido)_; se a tag de idioma não é válida conforme o BCP47, ela é definida como _invalid (invalida)_.

> **Note:** ## Sintaxe da tag de idiomaA sintaxe completa do BCP47 é profunda o suficente para caracterizar dialetos de linguagem extremamente expecíficos, mas a maioria dos usos são bem mais simples.Uma tag de idioma é feita de _subtags de idioma_ separadas por hífen, onde cada subtag indica uma certa propriedade da língua. As três subtags mais comuns são:- Subtag de idioma - : Necessária. Um código de 2 ou 3 caracteres que define o idioma base, tipicamente escrita em letras minúsculas. Por exemplo, o código para Inglês é `en` e o código para Português é `pt`.
>
> - Subtag de script
>   - : Opcional. Essa subtag define o sistema de escrita usado para a linguagem, e sempre tem 4 caracteres, com a primeira letra maiúscula. Por exemplo, Francês em Braile é `fr-Brai` e `ja-Kana` é Japonês escrito no alfabeto Katakana. Se a língua é escrita em uma maneira tipicamente comum, como Inglês no alfabeto Latino, não é necessário o uso da subtag.
> - Subtag de região
>   - : Opcional. Essa subtag define um dialeto do idioma base em uma localização particular e tem um código de duas letras maiúsculas referentes ao país, ou um código de três números referentes à uma área fora do país. Por exemplo, `es-ES` é para espanhol falado na Espanha, e `es-013` é o espanhol falado na America Central. "Espanhol Internacional" seria `es`.A subtag de script precede a região da subtag quando ambos estão presentes— `ru-Cyrl-BY` é Russo, escrito no alfabeto Cyrillic, falado em Belarus.Para encontrar os códigos corretos para uma subtag de idioma, acesse [Language Subtag Lookup](https://r12a.github.io/app-subtags/).

Mesmo que o atributo **lang** esteja bem definido ele ainda pode ser ignorado, pois o atributo [**xml:lang**](/pt-BR/docs/Web/HTML/Global_attributes/xml:lang) tem prioridade.

Para as pseudo-classes CSS {{cssxref(":lang")}}, dois nomes de idiomas inválidos são diferentes se seus nomes forem diferentes. Por tanto, enquanto `:lang(es)` corresponde a ambos `lang="es-ES"` e `lang="es-419"`, `:lang(xyzzy)` não corresponde a `lang="xyzzy-Zorp!"`.

## Especificações

| Specification                                                                    | Status                   | Comment                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "dom.html#the-lang-and-xml:lang-attributes", "lang")}} | {{Spec2('HTML WHATWG')}} | Sem mudança até o último registro, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                           |
| {{SpecName('HTML5.1', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}     | {{Spec2('HTML5.1')}}     | Registro de {{SpecName('HTML WHATWG')}}, sem mudança para {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                  |
| {{SpecName('HTML5 W3C', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}   | {{Spec2('HTML5 W3C')}}   | Registro de {{SpecName('HTML WHATWG')}}, comportamento com `xml:lang` e algoritmo de determinação definido. Ele também é um atributo global.                                                                                                                                         |
| {{SpecName('HTML4.01', 'struct/dirlang.html#h-8.1', 'lang')}}                    | {{Spec2('HTML4.01')}}    | Suportado em todos os elementos, mas {{HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}} e {{HTMLElement("script")}}. |

## Compatibilidade com navegadores

{{Compat("html.global_attributes.lang")}}

## Veja também

- Todos [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).
