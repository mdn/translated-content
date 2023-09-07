---
title: <meta>
slug: Web/HTML/Element/meta
---

{{HTMLSidebar}}

O elemento **HTML `<meta>` **define qualquer informação de metadados que não podem ser definidos por outros elementos **HTML.** ({{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} ou {{HTMLElement("title")}}).

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/pt-BR/docs/Web/HTML/Content_categories">Categoria</a> de
        conteúdo
      </th>
      <td>
        Conteúdo de metadado. Se o
        <a href="/pt-BR/docs/Web/HTML/Element/meta#itemprop"><code>itemprop</code></a> atributo estiver
        presente:
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >flow content</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th>Conteúdo permitido</th>
      <td>Nenhum, é um {{Glossary("elemento vazio")}}.</td>
    </tr>
    <tr>
      <th>Omissão de tag</th>
      <td>
        Como é um elemento vazio, a marcação inicial deve estar presente e a de
        fechamento não.
      </td>
    </tr>
    <tr>
      <th>Elementos pai permitidos</th>
      <td>
        <code>&#x3C;meta charset></code>, <code>&#x3C;meta http-equiv></code>:
        um elemento {{HTMLElement("head")}}. Se o
        <a href="/pt-BR/docs/Web/HTML/Element/meta#http-equiv"><code>http-equiv</code></a> não for uma
        declaração de codificação, ele pode estar dentro de um elemento
        {{HTMLElement("noscript")}}, dentro de um elemento
        {{HTMLElement("head")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Papéis ARIA permitid</th>
      <td>Nenhum</td>
    </tr>
    <tr>
      <th>Interface DOM</th>
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Esse elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

> **Nota:** o atributo global [`name`](/pt-BR/docs/Web/HTML/Element/meta#name) tem um significado específico para o elemento {{HTMLElement("meta")}}, e o atributo [`itemprop`](/pt-BR/docs/Web/HTML/Element/meta#itemprop) não deve ser definido no mesmo elemento`<meta>` que tem algum desses atributos existentes: [`name`](/pt-BR/docs/Web/HTML/Element/meta#name), [`http-equiv`](/pt-BR/docs/Web/HTML/Element/meta#http-equiv) ou [`charset`](/pt-BR/docs/Web/HTML/Element/meta#charset).

- {{htmlattrdef("charset")}}

  - : Este atributo define a codificação de caracteres usada na página. Pode ser substituído localmente usando o atributo _lang_ em qualquer elemento. Esse atributo é literalmente uma amarra e deve ser um dos _MIME names_ preferidos para uma codificação de caracteres como definido pela IANA ([defined by the IANA](https://www.iana.org/assignments/character-sets)). Embora o padrão não solicite uma codificação específica, ele dá algumas sugestões:

    - Autores são encorajados a usar UTF-8.
    - Autores não devem usar codificações incompatíveis com ASCII (
      isto é, aqueles que não mapeiam os pontos de código de 8 bits 0x20 a 0x7E para os pontos de código Unicode 0x0020 a 0x007E), pois representam um risco de segurança: navegadores que não os suportam podem interpretar conteúdo maligno como Elementos HTML. Esse é o caso de pelo menos os seguintes caracteres: JIS_C6226-1983, JIS_X0212-1990, HZ-GB-2312, JOHAB, a família ISO-2022 e a família EBCDIC.
    - Autores não devem usar CESU-8, UTF-7, BOCU-1 e SCSU, also falling in that category and not intended to be used on the web. Cross-scripting attacks with some of these encodings have been documented.
    - Autores não devem usar UTF-32 pois nem todos algorítimos de codificação HTML5 conseguem distingui-lo do UTF-16.

    > **Note:** **Notas:**- O conjunto de caracteres declarado deve corresponder ao da página. Não há motivo válido para declarar um conjunto de caracteres imprecisos.
    >
    > - Esse elemento {{HTMLElement ("meta")}} deve estar dentro do elemento {{HTMLElement ("head")}} e dentro dos primeiros 1024 bytes da página, pois alguns navegadores só olham para esses primeiros bytes antes de escolher um caractere definido para a página.
    > - Esse elemento {{HTMLElement ("meta")}} é apenas uma parte do algoritmo para determinar o conjunto de caracteres de uma página que os navegadores aplicam. O cabeçalho HTTP Content-Type e quaisquer elementos da BOM têm precedência sobre esse elemento.
    > - É uma boa prática, e altamente recomendável, definir o conjunto de caracteres usando este atributo. Se nenhum conjunto de caracteres estiver definido para uma página, várias técnicas de scripts cruzados poderão prejudicar o usuário da página, como a técnica de cross-scripting de fallback UTF-7. Sempre definindo esta meta irá proteger contra esses riscos.
    > - Esse elemento {{HTMLElement("meta")}} é um sinônimo para o pre-HTML5 `<meta http-equiv="Content-Type" content="text/html; charset=IANAcharset">` onde o atributo `IANAcharset` corresponde ao valor equivalente de [`charset`](/pt-BR/docs/Web/HTML/Element/meta#charset). Essa sintaxe ainda é permitida, embora obsoleta e não mais recomendada.

- {{htmlattrdef("content")}}
  - : Esse atributo fornece o valor associado ao atributo [`http-equiv`](/pt-BR/docs/Web/HTML/Element/meta#http-equiv) ou [`name`](/pt-BR/docs/Web/HTML/Element/meta#name), dependendo do contexto.
- {{htmlattrdef("http-equiv")}}

  - : Este enumerado atributo define a pragma isso pode alterar o comportamento de servers e user-agents. o valor do pragma é definido usando [`content`](/pt-BR/docs/Web/HTML/Element/meta#content) e pode ser um dos seguintes:

    - `"content-language"`

      - : este pragma define a linguagem default da página

        > **Note:** não use este pragma, ele esta obsoleto. use o atributo global `lang` no {{HTMLElement("html")}} ao invés deste.

    - `"Content-Security-Policy"`
      - : Este valor permite os administradores do web site definam uma [política de conteúdo](/pt-BR/docs/Web/Security/CSP/CSP_policy_directives) para a página atual. Com algumas exceções, politicas de conteúdo envolvem especificar origens de servidores e endpoints de scripts permitidos, isso ajuda na defesa de cross-server scripting attacks.
    - `"content-type"`

      - : Esse atributo define o [MIME type](/pt-BR/docs/MIME) e o conjunto de caracteres do documento. Isso segue a mesma sintaxe como o HTTP `content-type` entity-header field, mas isto esta dentro de um elemento HTML, a maioria dos valores não é possível. Sendo assim a sintaxe válida para este conteúdo é a literal string '`text/html`' eventualmente seguido por estes caracteres com a seguinte sintaxe: '`; charset=`_`IANAcharset`_' onde `IANAcharset` é o _MIME preferido nome para um conjunto de caracteres como_ [definido pela IANA.](https://www.iana.org/assignments/character-sets)

        > **Note:** **nota de uso:**- Nao use esta pragma ela esta obsoleta. use [`charset`](/pt-BR/docs/Web/HTML/Element/meta#charset) atributo {{HTMLElement("meta")}} element instead.
        >
        > - como o {{HTMLElement("meta")}} pode nao ser usado para mudar o tipo de documento no XHTML, ou em um documento de HTML5 seguindo uma syntax de XHTML, nunca marque MIME type para um XHTML MIME type desta forma. isso sera incoerente.
        > - somente um documento HTML pode usar o content-type, então a maioria disto é redundante: isso porque esta obsoleto e trocado pelo atributo [`charset`](/pt-BR/docs/Web/HTML/Element/meta#charset).

    - `"default-style"`
      - : Este pragma preferencia de stylesheet a ser usado na página. o atributo [`content`](/pt-BR/docs/Web/HTML/Element/meta#content) deve conter o **title** de um {{HTMLElement("link")}} elemento de quem [`href`](/pt-BR/docs/Web/HTML/Element/link#href) atributo link um CSS stylesheet, ou um **title** de um elemento {{HTMLElement("style")}} do qual contem um [CSS](/pt-BR/docs/Web/CSS) stylesheet.
    - `"refresh"`

      - : este pragma especifica:

        - o numero de segundos até a página ser recarregada, se o atributo [`content`](/pt-BR/docs/Web/HTML/Element/meta#content) contém apenas um número inteiro não negativo;
        - o número de segundos até a página ser redirecionada para outro lugar, se o atributo [`content`](/pt-BR/docs/Web/HTML/Element/meta#content) contém um inteiro não negativo seguido de uma string '`;url=`' e uma URL válida.

    - `"set-cookie"`

      - : este pragma define um [cookie](/pt-BR/docs/cookie) para a página. este conteúdo deve seguir a sintaxe definida em [IETF HTTP Cookie Specification](https://tools.ietf.org/html/draft-ietf-httpstate-cookie-14).

        > **Nota:** não use este pragma está obsoleto. Use HTTP header set-cookie instead.

- {{htmlattrdef("name")}}

  - : Este atributo define o nome do document-level metadata. Isso não deve ser marcado se um dos atributos [`itemprop`](/pt-BR/docs/Web/HTML/Element/meta#itemprop), [`http-equiv`](/pt-BR/docs/Web/HTML/Element/meta#http-equiv) ou [`charset`](/pt-BR/docs/Web/HTML/Element/meta#charset) já estiver preparado.
    este document-level metadata name é associado a um valor, contido pelo atributo [`content`](/pt-BR/docs/Web/HTML/Element/meta#content). os possíveis valores para o elemento name são, com seu valor associado, guardado via [`content`](/pt-BR/docs/Web/HTML/Element/meta#content) attribute:

    - `application-name`, define o nome da aplicação que esta rodando na página;

      > **Nota:**- Browsers podem usar isso para identificar a aplicação. isso é diferente do elemento {{HTMLElement("title")}}, que geralmente constituí no nome da aplicação, mas também contém informações específicas como o nome do documento ou status;
      >
      > - Webpages simples não deveriam definir application-name meta.

    - `author`, definindo, em formato livre, o nome do author do documento;
    - `description`, contém uma curta e precisa descrição do conteúdo da página. vários browsers, como o Firefox e o Opera, usam este meta como descrição padrão da página quando é marcada.
    - `generator`, contendo, em um formato livre, o identificador do software que gerou a página;
    - `keywords`, contendo, como strings separadas por vírgula, palavras relevantes associadas ao conteúdo da página;
    - `referrer` {{experimental_inline}} controlando o conteúdo de um HTTP `Referer` HTTP header anexado a qualquer pedido enviado deste documento:

      | `no-referrer`                | não envia um HTTP `Referer` header.                                                                                                                                                                       |
      | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | `origin`                     | envia a [origin](/pt-BR/docs/Glossary/Origin) de um documento.                                                                                                                                            |
      | `no-referrer-when-downgrade` | Envia a origem como referenciador para um destino prioritariamente tão seguro (https-> https), mas não envie um referenciador para um destino menos seguro (https-> http). Este é o comportamento padrão. |
      | `origin-when-crossorigin`    | Envia uma URL completa (sem parâmetros) ao executar uma solicitação de mesma origem, mas envie apenas a origem do documento para outros casos.                                                            |
      | `unsafe-URL`                 | Envia um URL completo (sem parâmetros) ao executar uma solicitação de mesma origem ou origem cruzada.                                                                                                     |

      > **Nota:** alguns browsers suportam keywords `always`, `default`, e `never` para referenciar. estes valores estão descontinuados.

      > **Nota:** dinamicamente inseridos `<meta name="referrer">` (por document.write ou appendChild) cria um nao-determinismo quando isso vem para enviar referências ou não. Note também quando muitas politicas conflitantes são definidas, o No-referrer politia é aplicada.

    o atributo também pode ter um valor retirado de uma extensa lista definida em [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions). Embora nenhum tenha sido formalmente aceito ainda, alguns nomes comumente usados estão entre as propostas:

    - `creator`, definindo, em um formato livre, o nome do criador do documento. Note que também pode ser o nome de uma instituição. se há mais de uma, vários elementos {{HTMLElement("meta")}} podem ser usados;
    - `googlebot`, é um sinônimo de `robots`, mas só é seguido por Googlebot, o indexador crawler do Google;
    - `publisher`, definido, em um formato livre, o nome do editor do documento. Note que também pode ser o nome de uma instituição;
    - `robots`, definindo o comportamento que crawlers devem ter com a página. É separado por vírgula a lista de valores seguintes:

      | Value          | Description                                                                                                                                            | Used by                                                                                                                                                                                                                                                                                                                                                      |
      | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
      | `index`        | permite o robô indexar uma página                                                                                                                      | All                                                                                                                                                                                                                                                                                                                                                          |
      | `noindex`      | previne o robô de indexar uma página                                                                                                                   | All                                                                                                                                                                                                                                                                                                                                                          |
      | `follow`       | permite o robô a seguir os links da página                                                                                                             | All                                                                                                                                                                                                                                                                                                                                                          |
      | `nofollow`     | previne o robô a seguir os links da página                                                                                                             | All                                                                                                                                                                                                                                                                                                                                                          |
      | `noodp`        | previne o uso de descrição [Open Directory Project](https://www.dmoz.org/), caso existam, como descrição da página o resultado na ferramenta de busca. | [Google](https://www.google.com/support/webmasters/bin/answer.py?hl=en&answer=79812), [Yahoo](https://help.yahoo.com/l/us/yahoo/search/indexing/indexing-11.html;_ylt=Arh3LHnisvRMPJKzQqmJ97JYqCN4), [Bing](https://www.bing.com/toolbox/blogs/webmaster/archive/2008/06/03/robots-exclusion-protocol-joining-together-to-provide-better-documentation.aspx) |
      | `noarchive`    | previne a ferramenta de busca pecar o conteúdo da página                                                                                               | [Google](https://www.google.com/support/webmasters/bin/answer.py?hl=en&answer=79812), [Yahoo](https://help.yahoo.com/l/us/yahoo/search/indexing/basics-10.html;_ylt=Aszma_Ly8TfhL7mn_LGWn5RYqCN4)                                                                                                                                                            |
      | `nosnippet`    | Impede a exibição de qualquer descrição da página na página de resultados do mecanismo de pesquisa                                                     | [Google](https://www.google.com/support/webmasters/bin/answer.py?answer=35304)                                                                                                                                                                                                                                                                               |
      | `noimageindex` | previne esta página de aparecer como referencia de alguma imagem indexada                                                                              | [Google](https://www.google.com/support/webmasters/bin/answer.py?hl=en&answer=79812)                                                                                                                                                                                                                                                                         |
      | `nocache`      | sinônimo de `noarchive`                                                                                                                                | [Bing](https://www.bing.com/toolbox/blogs/webmaster/archive/2008/06/03/robots-exclusion-protocol-joining-together-to-provide-better-documentation.aspx)                                                                                                                                                                                                      |

      > **Note:** **Notes:**- Somente robôs cooperativos seguirão as regras definidas pelo nome do robô. Não espere manter as colheitadeiras de e-mail à distância com isso.
      >
      > - O robô ainda precisa acessar a página para ler o valor meta. Se você quiser mantê-los sob controle, por exemplo, para evitar o consumo de largura de banda, use um arquivo robots.txt (ou em complemento).
      > - Se você quiser remover a página de um índice, a alteração do meta para `noindex` funcionará, mas somente quando o robô visitar a página novamente. Verifique se o arquivo robots.txt não está impedindo essas visitas. Alguns mecanismos de busca possuem ferramentas para desenvolvedores, permitindo uma remoção rápida de algumas páginas.
      > - Alguns valores possíveis são mutuamente exclusivos, como usar `index` e `noindex`, ou `follow` e `nofollow`, ao mesmo tempo. Nestes casos, o comportamento do robô é indefinido e pode variar de um para o outro. Então evite esses casos.
      > - Alguns robôs rastreadores de mecanismos de pesquisa, como os do Google, Yahoo Search ou Bing, suportam os mesmos valores em uma diretiva `HTTP, X-Robot-Tags`: isso permite que eles usem esses pragma em documentos não HTML, como imagens

    - `slurp`, qual é um sinônimo de `robots`, mas somente seguido por Slurp, o indexador crawler para Yahoo Search;

    Finalmente, alguns nomes estão em uso comum, embora não estejam sendo padronizados:

    - `viewport`, que dá dicas sobre o tamanho inicial do {{glossary ("viewport")}}. Este pragma é usado apenas por vários dispositivos móveis.

      | Value           | Possible values                                         | Description                                                                                                                                                               |
      | --------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | `width`         | um numero inteiro positivo ou o literal `device-width`  | define a largura em pixel de um viewport                                                                                                                                  |
      | `height`        | um numero inteiro positivo ou o literal `device-height` | define a altura em pixel de um viewport                                                                                                                                   |
      | `initial-scale` | um numero positivo entre `0.0` e `10.0`                 | define a relação entre a largura do dispositivo (largura do dispositivo no modo retrato ou altura do dispositivo no modo paisagem) e o tamanho da janela de visualização. |
      | `maximum-scale` | um numero positivo entre `0.0` e `10.0`                 | define o valor máximo de zoom; deve ser maior ou igual ao `minimum-scale` ou o comportamento sera indeterminado.                                                          |
      | `minimum-scale` | um numero positivo entre `0.0` e `10.0`                 | define o valor mínimo do zoom; deve ser menor ou igual ao `maximum-scale` ou o comportamento sera indeterminado                                                           |
      | `user-scalable` | um valor booleano (`yes` ou `no`)                       | se setado `no`, o usuário não poderá usar zoom na página. o valor padrão é `yes`.                                                                                         |

      | Specification                                                                 | Status                   | Comment                                             |
      | ----------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------- |
      | {{SpecName('CSS3 Device', '#viewport-meta', '&lt;meta name="viewport"&gt;')}} | {{Spec2('CSS3 Device')}} | Non-normatively describes the Viewport META element |

      > **Note:** **Notes:**- Embora não seja padronizado, esse atributo é usado por diferentes navegadores móveis, como o Safari Mobile, o Firefox para celular ou o Opera Mobile.
      >
      > - Os valores padrão podem mudar de um dispositivo e navegador para outro.
      > - Para aprender sobre esse pragma no Firefox para celular, veja [este artigo](/pt-BR/docs/Mobile/Viewport_meta_tag).

- {{htmlattrdef("scheme")}}

  - : Este atributo define o esquema no qual os metadados são descritos. Um esquema é um contexto que leva às interpretações corretas dos [`content`](/pt-BR/docs/Web/HTML/Element/meta#content) valores, como um formato.

    > **Note:** **Notes:** Não use este atributo pois esta obsoleto.Não há substituto para isso, pois não houve uso real para isso. Omitir completamente.

## Notes

Dependendo do conjunto escolhido, o tipo de metadata pode ser uma das seguintes:

- se [`name`](/pt-BR/docs/Web/HTML/Element/meta#name) é definido, isto é _document-level_ _metadata_, aplicando para a página inteira.
- se [`http-equiv`](/pt-BR/docs/Web/HTML/Element/meta#http-equiv) é definido, isto é um _pragma diretiva_, i.e. normalmente informação dada pelo web server sobre como a página web deve ser entregue.
- se [`charset`](/pt-BR/docs/Web/HTML/Element/meta#charset) é definido, isto é uma declaração de _charset_, i.e. o charset usado para o formulário serializado da página da Web

- se [`itemprop`](/pt-BR/docs/Web/HTML/Element/meta#itemprop) é definido, isto é _user-defined metadata_, transparente para o user-agent, pois a semântica dos metadados é específica do usuário. {{experimental_inline}}

## Exemplos

```html
<!-- In HTML5 -->
<meta charset="utf-8" />

<!-- redireciona a página depois de 3 segundos -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Especificações

| Specification                                                                                     | Status                       | Comment                                              |
| ------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('Referrer Policy', '#referrer-policy-delivery-meta', '&lt;meta name="referrer"&gt;')}} | {{Spec2('Referrer Policy')}} | Define valores e semantica `<meta name="referrer">`. |
| {{SpecName('HTML WHATWG', 'semantics.html#the-meta-element', '&lt;meta&gt;')}}                    | {{Spec2('HTML WHATWG')}}     | Adiciona o atributo `itemprop`                       |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-meta-element', '&lt;meta&gt;')}}              | {{Spec2('HTML5 W3C')}}       | Adiciona o atributo `charset`                        |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.4.4.2', '&lt;meta&gt;')}}                          | {{Spec2('HTML4.01')}}        |                                                      |

## Compatibilidade com navegadores

{{Compat("html.elements.meta")}}

## See also

- The other elements containing metadata: {{HTMLElement("base")}}, {{HTMLElement("head")}}, {{HTMLElement("link")}}, {{HTMLElement("style")}},{{HTMLElement("title")}}.
