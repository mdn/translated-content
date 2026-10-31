---
title: Formato de descrição OpenSearch
slug: Web/XML/Guides/OpenSearch
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

O **[formato de descrição OpenSearch](https://github.com/dewitt/opensearch)** pode ser usado para descrever a interface web de um mecanismo de busca. Isso permite que um site descreva seu próprio mecanismo de busca, para que um navegador ou outro aplicativo cliente possa usar esse mecanismo de busca. O OpenSearch é suportado por (pelo menos) Firefox, Edge, Safari e Chrome. (Consulte [Material de referência](#material_de_referência) para links para a documentação de outros navegadores.)

O Firefox também suporta recursos adicionais que não fazem parte do padrão OpenSearch, como sugestões de busca. Este artigo se concentra na criação de mecanismos de busca compatíveis com OpenSearch que suportam esses recursos adicionais do Firefox.

## Visão geral

A barra de endereços nos navegadores tem dupla finalidade: você pode digitar uma URL para ir diretamente a um site, ou pode digitar um termo de busca para consultar um mecanismo de busca. O mecanismo de busca retorna uma lista de resultados que você pode navegar diretamente, ou você pode abrir a página completa de resultados do mecanismo de busca.

Por padrão, os navegadores podem se conectar a alguns mecanismos de busca populares, como Google, Bing ou Yandex. O protocolo OpenSearch permite que sites definam seus próprios mecanismos de busca, permitindo que os usuários pesquisem nesses sites diretamente da barra de endereços do navegador. Por exemplo, o site do MDN possui um mecanismo de busca para todo o site. Se o MDN se registrar como um mecanismo de busca, os usuários podem pesquisar no MDN diretamente da barra de endereços.

Os navegadores consultam um mecanismo de busca solicitando uma URL. O site define um modelo para a URL a ser solicitada, e o navegador preenche os termos de busca do usuário nos espaços reservados especificados. Por exemplo, se a URL do mecanismo de busca é `https://example.com/search?q={searchTerms}`, então o navegador solicitará `https://example.com/search?q=foo` quando o usuário digitar "foo" na barra de endereços. O mecanismo de busca gera uma resposta — seja uma lista de resultados de busca ou uma página completa de resultados de busca.

Um site define seu mecanismo de busca vinculando a um arquivo de descrição XML em seu HTML. Quando o usuário visita o site pela primeira vez, o navegador detecta esse arquivo de descrição e registra o mecanismo de busca. O navegador então usa o mecanismo de busca registrado para lidar com buscas da barra de endereços.

> [!NOTE]
> O Chrome registra mecanismos de busca de sites como "inativos" por padrão. Os usuários devem ativar manualmente cada site nas configurações do mecanismo de busca.

## Arquivo de descrição OpenSearch

O arquivo XML que descreve um mecanismo de busca segue o modelo básico abaixo. As seções em _\[colchetes]_ devem ser personalizadas para seu mecanismo específico.

```xml
<OpenSearchDescription
  xmlns="http://a9.com/-/spec/opensearch/1.1/"
  xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Search engine full name and summary]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
</OpenSearchDescription>
```

- ShortName
  - : Um nome curto para o mecanismo de busca. Deve ter **16 caracteres ou menos** de texto simples, sem HTML ou outra marcação.
- Description
  - : Uma breve descrição do mecanismo de busca. Deve ter **1024 caracteres ou menos** de texto simples, sem HTML ou outra marcação.
- InputEncoding
  - : A [codificação de caracteres](/pt-BR/docs/Glossary/Character_encoding) a ser usada ao enviar entrada para o mecanismo de busca.
- Image
  - : URL de um ícone para o mecanismo de busca. Quando possível, inclua uma imagem de 16×16 do tipo `image/x-icon` (como `/favicon.ico`) e uma imagem de 64×64 do tipo `image/jpeg` ou `image/png`.

    A URL também pode usar o [esquema de URL `data:`](/pt-BR/docs/Web/URI/Reference/Schemes/data). (Você pode gerar uma URL `data:` a partir de um arquivo de ícone em [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data).)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    O Firefox armazena em cache o ícone como uma URL `data:` [base64](https://en.wikipedia.org/wiki/Base64) (os plugins de busca são armazenados na pasta `searchplugins/` do [perfil](https://support.mozilla.org/pt-BR/kb/profiles-where-firefox-stores-user-data)). As URLs `http:` e `https:` são convertidas em URLs `data:` quando isso é feito.

    > [!NOTE]
    > Para ícones carregados remotamente (ou seja, de URLs `https://` em vez de URLs `data:`), o Firefox rejeitará ícones maiores que **10 kilobytes**.

    ![Sugestões de busca do Google exibidas na caixa de busca do Firefox](searchsuggestionsample.png)

- Url
  - : Descreve a URL ou URLs a serem usadas para a busca. O atributo `template` indica a URL base para a consulta de busca.

    O Firefox suporta três tipos de URL:
    - `type="text/html"` especifica a URL para a consulta de busca real.
    - `type="application/x-suggestions+json"` especifica a URL para buscar sugestões de busca. No Firefox 63 em diante, `type="application/json"` é aceito como alias disso.
    - `type="application/x-moz-keywordsearch"` especifica a URL usada quando uma busca por palavra-chave é inserida na barra de localização. Isso é suportado apenas no Firefox.

    Para esses tipos de URL, você pode usar `{searchTerms}` para substituir os termos de busca inseridos pelo usuário na barra de busca ou barra de localização. Outros parâmetros de busca dinâmicos suportados são descritos nos [parâmetros OpenSearch 1.1](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters).

    Para sugestões de busca, o modelo de URL `application/x-suggestions+json` é usado para buscar uma lista de sugestões no formato [JSON](/pt-BR/docs/Glossary/JSON).

## Vinculando ao arquivo de descrição OpenSearch

Para suportar a detecção automática, adicione um elemento `<link>` para cada mecanismo de busca ao `<head>` de sua página web:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[descriptionURL]" />
```

Substitua os itens em _\[colchetes]_ conforme explicado abaixo:

- `searchTitle`
  - : O nome da busca a ser realizada, como "Pesquisar MDC" ou "Yahoo! Search". Isso deve corresponder ao `<ShortName>` do seu arquivo de plugin.
- `descriptionURL`
  - : A URL para o arquivo de descrição XML, para que o navegador possa baixá-lo.

Se seu site oferece vários mecanismos de busca, você pode suportar a detecção automática para todos eles. Por exemplo:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Author"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Title"
  href="http://example.com/mysitetitle.xml" />
```

Dessa forma, seu site pode oferecer dois mecanismos de busca: um por autor e outro por título.

> [!NOTE]
> No Firefox, uma mudança de ícone na caixa de busca indica que há um plugin de busca fornecido. (Veja a imagem, o sinal de mais verde.) Assim, se uma caixa de busca não for mostrada na interface do usuário, eles _não_ receberão nenhuma indicação. _Em geral, o comportamento varia entre os navegadores_.

## Suporte a atualizações automáticas para descrições OpenSearch

O arquivo de descrição OpenSearch pode ser atualizado automaticamente. Para suportar isso, inclua um elemento `Url` extra com `type="application/opensearchdescription+xml"` e `rel="self"`. O atributo `template` deve ser a URL do documento OpenSearch para atualizar automaticamente.

Por exemplo:

```xml
<Url
  type="application/opensearchdescription+xml"
  rel="self"
  template="https://example.com/mysearchdescription.xml" />
```

## Dicas para solução de problemas

Se houver um erro em seu arquivo de descrição XML, você pode encontrar erros ao adicionar o mecanismo de busca. Se a mensagem de erro não for útil, use as dicas a seguir para solucionar o problema:

- Verifique se o seu servidor serve descrições OpenSearch com `Content-Type: application/opensearchdescription+xml`.
- Certifique-se de que seu arquivo de descrição XML está bem formado. Você pode verificar carregando o arquivo diretamente em um navegador. Os e comerciais (`&`) na URL `template` devem ser escapados como `&amp;`, e as tags devem ser fechadas com uma barra final ou uma tag de fechamento correspondente.
- Certifique-se de incluir o atributo `xmlns` — sem ele, você pode receber uma mensagem de erro como "Firefox could not download the search plugin".
- Você **deve** incluir uma URL `text/html` — mecanismos de busca que incluem apenas tipos de URL Atom ou [RSS](/pt-BR/docs/Glossary/RSS) (que são válidos, mas o Firefox não suporta) também gerarão o erro "could not download the search plugin".
- Favicons buscados remotamente não devem ter mais de 10 KB (consulte [Firefox bug 361923](https://bugzil.la/361923)).
- Como mencionado anteriormente, os navegadores podem não ativar atalhos de busca de sites por padrão. Verifique as configurações do navegador e certifique-se de que o mecanismo de busca está ativado.

Além disso, o serviço de plugins de busca fornece um mecanismo de registro que pode ser útil para desenvolvedores de plugins. Use `about:config` para definir a preferência `browser.search.log` como `true`. Em seguida, as informações de registro aparecerão no [Console do navegador](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) do Firefox (Ferramentas ➤ Ferramentas do navegador ➤ Console do navegador) quando plugins de busca são adicionados.

## Material de referência

- [Documentação do OpenSearch](https://github.com/dewitt/opensearch)
- [Notas de lançamento do Safari 8.0: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Guia de desenvolvimento do Microsoft Edge: Search provider discovery](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [The Chromium Projects: Tab to Search](https://www.chromium.org/tab-to-search/)
- imdb.com tem um [`osd.xml` funcional](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - crie plugins OpenSearch. [Customized Search through Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
