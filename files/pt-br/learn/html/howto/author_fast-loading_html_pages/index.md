---
title: Dicas para criar páginas HTML de carregamento rápido
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
---

Estas dicas são baseadas em conhecimento comum e experimentação.

Uma página web otimizada não apenas provê um site mais responsivo aos visitantes, como também reduz a carga sobre os servidores e a conexão com a Internet. Isso pode ser crucial para sites de grande volume ou sites que tenham um pico de tráfego devido a circunstâncias extraordinárias, como plantões de notícias urgentes.

Otimizar a performance do carregamento de páginas não serve apenas para o conteúdo que será visto por visitantes com linha discada ou aparelhos móveis. É igualmente importante para banda larga e pode levar a melhorias dramáticas até mesmo para seus visitantes com as mais rápidas conexões.

## Dicas

### Reduza o peso da página

O peso da página é, de longe, o fator mais importante na performance de seu carregamento.

Reduzir o peso da página através da eliminação de espaço em branco desnecessário e comentários, comumente conhecido como minimização, e mover scripts e CSS _inline_ para arquivos externos pode melhorar a performance de download sem muita necessidade de outras mudanças na estrutura da página.

Ferramentas como [HTML Tidy](http://tidy.sourceforge.net/) podem automaticamente cortar espaços em branco desnecessários e linhas vazias de um código HTML validado. Outras ferramentas podem "comprimir" JavaScript ao reformatar o código-fonte ou o obfuscando e substituindo identificadores longos por versões mais curtas.

### Minimize o número de arquivos

Reduzir o número de arquivos referenciados por uma página diminui o número de conexões [HTTP](/pt-BR/docs/HTTP) requeridas para realizar o download da página.

Dependendo das configurações de cache do _browser_, este pode enviar uma requisição `If-Modified-Since` ao servidor para cada arquivo CSS, JavaScript ou de imagem, perguntando se o arquivo foi modificado desde a última vez que foi baixado.

Ao reduzir o número de arquivos referenciados de dentro de uma página, reduz-se o tempo necessário para essas requisições serem enviadas e suas respostas recebidas.

Se você usa muitas imagens de fundo em seu CSS, pode reduzir o número de verificações HTTP combinando imagens em um único arquivo, o que é conhecido como um _sprite_ de imagens. Então você apenas utiliza a mesma imagem cada vez que precisá-la, ajustando as coordenadas x/y apropriadamente. Essa técnica funciona melhor com elementos que terão dimensões limitadas, não sendo aplicável para todas as imagens. Contudo, o número menor de requisições HTTP e _caching_ de uma única imagem devem ajudar a reduzir o tempo de carregamento.

Muito tempo gasto pesquisando quando foi a modificação mais recente de arquivos referenciados pode atrasar a exibição inicial de uma página, já que o _browser_ deve verificar o momento de modificação para cada arquivo CSS ou JavaScript antes de carregar a página.

### Reduza pesquisa de domínio

Já que cada domínio distinto demanda tempo durante uma pesquisa de DNS, o tempo de carregamento da página aumentará conforme o número de domínios distintos que aparecem em links de CSS e fontes de JavaScript e imagens.

Pode nem sempre ser prático, mas você deve sempre tomar cuidado para utilizar apenas o mínimo necessário de domínios diferentes nas suas páginas.

### Conteúdo em cache reutilizado

Assegure que qualquer conteúdo que possa ser armazenado em cache o seja, e com tempos de expiração adequados.

Em especial, atente ao cabeçalho `Last-Modified`. Ele permite mecanismos de cache eficientes; através desse cabeçalho, informações sobre o arquivo que o agente de usuário quer carregar, como quando foi modificado da última vez, são transferidas. A maioria dos servidores web automaticamente anexam o cabeçalho `Last-Modified` a páginas estáticas (p. ex.: `.html`, `.css`), baseado na data de última modificação armazenada no sistema de arquivos. Com páginas dinâmicas (p. ex:`.php`, `.aspx`), isso não pode ser feito, e o cabeçalho não é enviado.

Então, para essas páginas que são geradas dinamicamente, alguma pesquisa adicional é benéfica. Isso vai salvar muito tempo em requisições nas páginas que normalmente não permitem armazenamento em cache.

Mais informações:

1. [Get HTTP Condicional para Hackers RSS](http://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](http://annevankesteren.nl/archives/2005/05/http-304)
3. [Sobre o Last-Modified HTTP e ETag](http://www.cmlenz.net/archives/2005/05/on-http-last-modified-and-etag)

### Estabeleça a ordem dos componentes da página de forma otimizada

Baixe o conteúdo da página primeiro, junto com qualquer CSS ou JavaScript que pode ser requerido para sua exibição inicial, de modo que o usuário receba a resposta mais rápida possível durante o carregamento. Esse conteúdo é tipicamente texto, e portanto pode ser beneficiado por técnicas de compressão de texto durante o tráfego, permitindo uma resposta ainda mais rápida ao usuário.

Quaisquer elementos dinâmicos que requeiram que a página complete seu carregamento antes de serem usados devem ser inicialmente desabilitados, e apenas habilitados após o carregamento completo. Isso fará com que o JavaScript seja carregado após o conteúdo da página, o que melhorará a aparência geral do carregamento.

### Reduza o número de scripts _inline_

Scripts _inline_ podem ser custosos para o carregamento, uma vez que o parser deve assumir que o script pode modificar a estrutura da página enquanto o processo de _parsing_ está em andamento. Reduzir o número de scripts _inline_ no geral e reduzir o uso de `document.write()` para a saída de conteúdo pode melhorar o carregamento da página. Use métodos [AJAX](/pt-BR/docs/AJAX) modernos para manipular o conteúdo da página, ao invés de abordagens antigas baseadas em `document.write()`.

### Use CSS moderno e marcação validada

O uso de CSS moderno reduz a quantidade de marcação, pode reduzir a necessidade de imagens, em termos de layout, e frequentemente substitui imagens de textos estilizados — que "custam" muito mais do que o texto estilizado com CSS.

Usar marcações validadas tem outras vantagens. Primeiro, _browsers_ não precisarão realizar correção de erros durante o _parsing_ de HTML (isso é à parte da preocupação filosófica de permitir variação de formato na entrada do usuário, e então programaticamente "corrigir" ou normalizá-la; ou se, ao invés disso, forçar um formato de entrada rígido, sem tolerância a desvios).

Além do mais, marcação válida permite o livre uso de outras ferramentas que podem pré-processar páginas web. Por exemplo, [HTML Tidy](http://tidy.sourceforge.net/) pode remover espaços em branco e tags finais opcionais; contudo, a ferramenta não será executada em uma página com erros graves de marcação.

### Divida seu conteúdo

Layout de tabelas é um método legado que não deve mais ser empregado. Layouts utilizando blocos {{ HTMLElement("div") }} e, no futuro próximo, [layout multi-colunas CSS3](/pt-BR/docs/CSS/Using_CSS_multi-column_layouts) ou [layout de caixas flexíveis CSS3](/pt-BR/docs/Usando_caixas_flexiveis_css), devem ser utilizadas ao invés disso.

Tabelas ainda são consideradas marcações válidas, mas devem ser usadas para exibir dados tabulares. Para ajudar o browser a renderizar sua página mais rapidamente, você deve evitar aninhar suas tabelas.

Ao invés de realizar aninhamentos profundos como:

```
<TABLE>
  <TABLE>
    <TABLE>
          ...
    </TABLE>
  </TABLE>
</TABLE>
```

use tabelas não-aninhadas ou divs, como em

```
<TABLE>...</TABLE>
<TABLE>...</TABLE>
<TABLE>...</TABLE>
```

Veja também: [Especificações do layout multi-colunas CSS3](https://www.w3.org/TR/css3-multicol/) e [layout de caixas flexíveis CSS3](https://www.w3.org/TR/css3-flexbox/)

### Especifique tamanhos para imagens e tabelas

Se o _browser_ puder imediatamente determinar a altura e/ou largura de suas imagens e tabelas, ele será capaz de exibir uma página sem ter que recalcular o fluxo do conteúdo. Isso não apenas acelera a exibição da página como previne mudanças irritantes no layout ao finalizar o carregamento. Por essa razão, `height` e `width` devem ser especificadas para imagens, sempre que possível.

Tabelas devem usar a combinação CSS selector:property:

```
  table-layout: fixed;
```

e devem especificar as larguras das colunas usando as tags HTML `COL` e `COLGROUP`.

### Escolha bem seus requisitos de agente de usuário

Para atingir as maiores melhorias no design de páginas, tenha certeza de que requisitos de agente de usuário razoáveis estejam especificados para os projetos. Não espere que seu conteúdo apareça de forma perfeita, pixel por pixel, em todos os _browsers_, especialmente nos obsoletos.

Idealmente, seus requisitos básicos devem ser baseados em considerações sobre os _browsers_ modernos que suportam os padrões relevantes. Isso pode incluir: Firefox 3.6+ em qualquer plataforma, Internet Explorer 8.0+ no Windows, Opera 10+ no Windows, e Safari 4 no Mac OS X.

Note, contudo, que muitas das dicas listadas neste artigo são técnicas de senso comum que se aplicam a qualquer agente-usuário, e podem ser aplicadas a qualquer página web, independentemente de requisitos de compatibilidade em _browsers_.

## Exemplo de estrutura de página

- `html`

- `head`

  - `link`...
    Arquivos CSS requeridos para a aparência da página. Minimize o número de arquivos para performance enquanto mantém CSS não-relacionado em arquivos separados para manutenção.

  - `script`...
    Arquivos JavaScript para funções **requeridas** durante o carregamento da página, sem qualquer DHTML que só pode ser executado após o carregamento completo.

- Minimize o número de arquivos para performance enquanto mantém JavaScript não-relacionado em arquivos separados para manutenção.

- `body`
- Páginas de conteúdo visíveis ao usuário em pequenas divisões (tabelas / divs) que podem ser exibidas sem esperar a página inteira ser baixada.

  - `script`...
    Quaisquer scripts que forem usados para realizar DHTML. Um script DHTML geralmente só pode ser executado após o carregamento completo da página e a inicialização de todos os objetos necessários. Não há necessidade de carregar esses scripts antes do conteúdo. Isso apenas desacelera a aparência inicial do carregamento da página.

- Minimize o número de arquivos para performance enquanto mantém CSS não-relacionado em arquivos separados para manutenção.
- Se uma ou mais imagens forem usadas para efeitos de _rollover_, você deve pré-carregá-las aqui após o conteúdo da página ter sido baixado.

## Use async and defer, se possível

Faça com que scripts JavaScript sejam compatíveis tanto com [async](/pt-BR/docs/HTML/Element/script#Attributes) como [defer](/pt-BR/docs/HTML/Element/script#Attributes) e use [async](/pt-BR/docs/HTML/Element/script#Attributes) sempre que possível, especialmente se você tiver múltiplas tags de script.

Com isso, a página pode parar de renderizar enquanto o JavaScript ainda estiver sendo carregado. Do contrário, o _browser_ não renderizará nada que estiver após as tags de script sem esses atributos.

Nota: Apesar desses atributos ajudarem muito na primeira vez que a página for carregada, você não pode confiar que vai funcionar em todos os _browsers_. Se você seguir todas as orientações para produzir bom código JavaScript, não há necessidade de alterá-lo.

## Links Relacionados

- Livro: ["Speed Up Your Site" por Andy King](http://www.websiteoptimization.com/)
- O excelente e muito completo [Melhores Práticas para Acelerar Seu Web Site](http://developer.yahoo.com/performance/rules.html) (Yahoo!)
- Ferramentas para analisar e otimizar a performance: [Google PageSpeed](https://developers.google.com/speed/pagespeed/)

## Informações do Documento Original

- Autor(es): Bob Clary, Evangelista de Tecnologia, Netscape Communications
- Última Data de Atualização: Publicado em 04 Abr 2003
- Informações de Copyright: Copyright © 2001-2003 Netscape. Todos os direitos reservados.
- Nota: Este artigo reeditado foi originalmente parte do site DevEdge.
