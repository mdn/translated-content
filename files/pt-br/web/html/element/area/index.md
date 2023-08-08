---
title: <area>
slug: Web/HTML/Element/area
---

{{HTMLSidebar}}

O _HTML `<area>` elemento_ define uma região hot-spot em uma imagem, e, opcionalmente, associa-lo com um {{Glossary ("Hyperlink", "link de hipertexto")}}. Este elemento é usado somente dentro de um {{HTMLElement ("map")}} elemento.

- _[As categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [de conteúdo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content) , [conteúdo fraseado](/pt-BR/docs/HTML/Content_categories#Phrasing_content) .
- _Permitida conteúdo_ vazio; este é um elemento vazio.
- _Tag omissão_ {{no_tag_omission}}
- _Permitida elementos pai_ Qualquer elemento que aceita [conteúdo fraseado](/pt-BR/docs/HTML/Content_categories#Phrasing_content) . O `<area>` elemento deve ter um ancestral {{HTMLElement ("mapa")}}, mas ele não precisa ser um pai direta.
- _Interface DOM_ {{domxref ("HTMLAreaElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{Htmlattrdef ("accesskey")}}
  - : Especifica um acelerador de navegação pelo teclado para o elemento. Pressionando ALT ou uma chave semelhante, em associação com o caractere especificado seleciona a forma de controle correlacionada com a seqüência de teclas. Os projetistas de página são avisados para evitar sequências de teclas já vinculados aos navegadores. Este atributo é global desde HTML5.
- {{Htmlattrdef ("alt")}}
  - : Uma alternativa seqüência de texto para exibir em navegadores que não exibem imagens. O texto deve ser formulada de modo a que apresenta o usuário com o mesmo tipo de escolha como a imagem iria oferecer quando exibido sem o texto alternativo. Em HTML4, este atributo é necessário, mas pode ser uma string vazia (""). Em HTML5, este atributo é necessário apenas se o **href** atributo é usado.
- {{Htmlattrdef ("coords")}}
  - : Um conjunto de valores que especificam as coordenadas da região de hot-spot. O número e o significado dos valores dependem do valor especificado para a **forma** de atributo. Para um `rect` forma ou retângulo, o **coords** valor é de dois pares x, y: left, top, right, e bottom. Para um `círculo` forma, o valor é `x, y, r` onde `x, y` é um par especificando o centro do círculo e `r` é um valor para o raio. Para um `poli` ou polígono \<forma>, o valor é um conjunto de pares x, y de cada ponto no polígono: `X1, Y1, X2, Y2, x3, y3`, e assim por diante. Em HTML4, os valores são números de pixels ou porcentagens, se um sinal de porcentagem (%) é anexado; em HTML5, os valores são números de pixels CSS.
- {{Htmlattrdef ("download")}}
  - : Este atributo, se presente, indica que o autor tem a intenção que o hiperlink seja usado para o download de um recurso. Consulte {{HTMLElement ("a")}} para uma descrição completa da [`download`](/pt-BR/docs/Web/HTML/Element/a#download) atributo.
- {{Htmlattrdef ("href")}}
  - : A meta de hyperlink para a área. Seu valor é uma URL válida. Em HTML4, quer este atributo ou o **nohref** atributo deve estar presente no elemento. Em HTML5, este atributo pode ser omitido; em caso afirmativo, o elemento de área não representa um hiperlink.
- {{Htmlattrdef ("hreflang")}}
  - : Indica o idioma do recurso ligado. Os valores permitidos são determinados por [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) . Utilize este atributo somente se a **href** atributo está presente.
- {{Htmlattrdef ("name")}}
  - : Defina um nome para a área clicável de modo que possa ser programado por navegadores mais antigos.
- {{Htmlattrdef ("media")}}

  - : Uma dica da mídia para o qual o recurso ligado foi projetado, por exemplo `impressão e tela` . Se omitido, o padrão é `tudo` . Utilize este atributo somente se a **href** atributo está presente.

- {{Htmlattrdef ("nohref")}}

  - : Indica que não existe hyperlink para a área associada. Ou este atributo ou a **href** atributo deve estar presente no elemento.

    > **Note:** **Nota de Uso:** Este atributo é obsoleto em HTML5, em vez omitindo o atributo **href** é suficiente.

- {{Htmlattrdef ("rel")}}
  - : Para âncoras contendo o **href** atributo, este atributo especifica a relação do objeto de destino para o objeto link. O valor é uma lista de valores de relacionamento, separados por vírgulas. Os valores e sua semântica será registrado por alguma autoridade que poderia ter significado para o autor do documento. A relação padrão, se nenhum outro é dado, é nula. Utilize este atributo somente se a **href** atributo está presente.
- {{Htmlattrdef ("shape")}}
  - : A forma do ponto de acesso associado. As especificações para colar 5 e HTML 4 definem os valores `rect` , que define uma região rectangular; `círculo` , o qual define uma região circular; `poli` , que define um polígono; e `padrão` , o que indica toda a região além de quaisquer formas definidas. Muitos navegadores, principalmente o Internet Explorer 4 e superior, apoio `circ` , `polígono` , e `retângulo` como valores válidos para **forma** ; estes valores são {{Non-standard_inline}}.
- {{Htmlattrdef ("tabindex")}}
  - : Um valor numérico que especifica a posição da área definida na ordem de tabulação browser. Este atributo é global em HTML5.
- {{Htmlattrdef ("target")}}

  - : Este atributo especifica onde exibir o recurso ligado. Em HTML4, este é o nome de, ou uma palavra-chave para um quadro. Em HTML5, que é um nome ou palavra-chave para um _contexto de navegação_ (por exemplo, aba, janela ou quadro embutido). As seguintes palavras-chave têm significados especiais:

    - `_self` : Carregar a resposta no mesmo quadro HTML4 (ou contexto de navegação HTML5), como o atual. Este valor é o padrão se o atributo não é especificado.
    - `_blank` : Coloque a resposta em uma nova janela sem nome HTML4 ou contexto de navegação HTML5.
    - `_parent` : Carregar a resposta para o pai HMTL4 conjunto de quadros do quadro atual ou HTML5 pai contexto de navegação do atual. Se não houver nenhum pai, esta opção se comporta da mesma maneira que `_self` .
    - `_top` : Em HTML4: Carregar a resposta para a janela completa, originais, cancelando todos os outros quadros. Em HTML5: Carregar a resposta para o contexto de navegação de nível superior (ou seja, o contexto de navegação que é um ancestral do atual, e não tem pai). Se não houver nenhum pai, esta opção se comporta da mesma maneira que `_self` .

    Utilize este atributo somente se a **href** atributo está presente.

- {{Htmlattrdef ("type")}}
  - : Este atributo especifica o tipo de mídia na forma de um tipo MIME para o destino do link. Geralmente, este é fornecido informações estritamente como consultivo; no entanto, no futuro, um navegador pode adicionar um pequeno ícone para os tipos de multimédia. Por exemplo, um navegador pode adicionar um pequeno ícone de alto-falante quando o tipo está definido para áudio / wav. Para obter uma lista completa de tipos MIME reconhecidos, consulte [https://www.w3.org/TR/html4/references.html # REF-MIMETYPES](https://www.w3.org/TR/html4/references.html#ref-MIMETYPES) . Utilize este atributo somente se a **href** atributo está presente.

## Exemplo

```html
<mapa name="primary">
  <area shape="circle" coords="200,250,25" href="another.htm" />
  <area shape="default" nohref />
</map>
```

## Especificações

| Especificação                                                                               | Estado                    | Comentário |
| ------------------------------------------------------------------------------------------- | ------------------------- | ---------- |
| {{SpecName ('HTML WHATWG', 'a-map-element.html # da-area-elemento', '&lt;area&gt;')}}       | {{Spec2 ('HTML WHATWG')}} |            |
| {{SpecName ('HTML5 W3C', 'incorporado-content-0.html # da-area-elemento', '&lt;area&gt;')}} | {{Spec2 ('HTML5 W3C')}}   |            |
| {{SpecName ('HTML4.01', 'struct / objects.html # h-13.6.1', '&lt;area&gt;')}}               | {{Spec2 ('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.area")}}

## Notas

De acordo com o HTML 3.2, 4.0 e 5 especificações, a tag de fechamento `</ área>` é proibido.

A especificação XHTML 1.0 requer uma barra: `<area />` .

Os **ID** , **classe** e **estilo** atributos têm o mesmo significado que os atributos essenciais definidas na especificação HTML 4, mas somente Netscape e Microsoft defini-los.

Netscape 1 de nível não entendem o **alvo** atributo que se refere aos quadros.

HTML 3.2 define apenas **alt** , **coords** , **href** , **nohref** e shape .
