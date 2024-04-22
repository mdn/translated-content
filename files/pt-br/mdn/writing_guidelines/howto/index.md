---
title: Como adicionar etiquetas às páginas corretamente
slug: MDN/Writing_guidelines/Howto
---

{{MDNSidebar}}

As etiquetas dos artigos são uma forma importante de ajudar visitantes a encontrar o conteúdo procurado. Há muitas etiquetas usadas para ajudar a organizar as informações na MDN. Esta página vai lhe ensinar a melhor maneira de rotular as páginas, a fim de fazer com que as informações sejam organizadas, classificadas e localizadas mais facilmente. Cada página pode ser marcada por etiquetas que ajudam a classificar seu conteúdo.

Você pode encontrar uma boa ajuda quanto às etiquetas em páginas na seção 'etiquetando', em nosso [guia de edição](/pt-BR/docs/MDN/Contribute/Editor/Basics#The_tags_box).

Observe que o uso adequado de etiquetas é importante; nós estamos cada vez mais usando automação para gerar listas de conteúdo, páginas de destino e ligação cruzada de artigos. Falhar em marcar artigos corretamente (como indicado abaixo) pode impedir que os mesmos sejam listados precisamente.

## Métodos de marcações usadas na MDN

Há muitas maneiras das etiquetas serem usadas na MDN:

- Categorização
  - : Qual o tipo desse documento? É uma referência? Um tutorial? Uma página de destino? As etiquetas podem ser usadas em filtros de busca, então elas são realmente importantes!
- Identificação de tópico
  - : Que tópico esse artigo envolve? É sobre uma API? O DOM? Gráficos? Estas também são importantes, pois elas podem ser usadas em filtros de buscas.
- Estado da tecnologia
  - : Qual é o estado dessa tecnologia? Isto não é padrão? Obsoleto ou moderno? Experimental?
- Nível de habilidade
  - : Para tutoriais e guias, quão avançado é o material do artigo?
- Metadados do documento
  - : Os escritores da MDN usam rótulos que informam quais páginas precisam de melhorias e de quais tipos.

## Guia de tipos de marcação

Aqui está um guia rápido sobre os tipos de etiquetas e os possíveis valores para elas.

### Categoria do Documento

Quando você rotula um artigo com uma destas categorias, você ajuda ferramentas automáticas a gerarem mais precisamente as páginas de entrada, tabela de conteúdos e assim por diante. Nosso novo sitema de pesquisa também vai usar esses termos para que nossos visitantes possam localizar referências e guias mais fácilmente.

Nós usamos os seguintes nomes de categorias como termos de etiquetamento padrão:

- `Intro`
  - : O artigo fornece um material introdutório sobre algum tópico. Idealmente, cada área de tecnologia deveria ter apenas uma "introdução".
- `Featured`
  - : O artigo é crucial e será exibido com relevância nas páginas de entrada. Use esta etiqueta moderadamente (nunca mais do que três páginas em cada área da documentação).
- `Reference`
  - : O artigo contém material de referência sobre uma API, elementos, atributos, propriedades, ou coisas semelhantes.
- `Landing`
  - : Indica que esta é uma página de entrada.
- `Guide`
  - : O artigo é um guia ou um tutorial.
- `Example`
  - : O artigo é uma página de amostra de código, ou tem exemplos de códigos (isto é, pedaços de códigos úteis, não uma linha de "exemplo de sintaxe") .

### Tópico

Ao identificar o assunto tratado por um artigo você ajuda a gerar melhores resultados de pesquisa, assim como páginas de entrada e outros auxílios de navegação.

Apesar de ser permitida certa flexibilidade, ao passo que novos assuntos são identificados, preferimos que estas etiquetas tenham os mesmos nomes das APIs, ou tecnologias, demonstradas na página. Alguns exemplos:

- `HTML`
- `CSS`
- `JavaScript` (Lembre-se do "S" maiúsculo!)
- `Document`
- `DOM`
- `API` usada em todas as interfaces, métodos e propriedades
- `Method` usada em todo método de alguma API
- `Property` usada em toda propriedade de alguma API
- `Graphics` gráficos
- `Firefox OS`
- `Gecko`
- `XUL`
- `XPCOM`
- `SVG`
- `WebGL`
- `Element` elemento
- `Node`
- `Tools` ferramentas
- `Web`

No geral, se uma interface que possui várias páginas relacionadas a ela, como [Node](/pt-BR/docs/Web/API/Node) (que possui várias páginas sobre seus muitos métodos e propriedades), seu nome é uma boa etiqueta para identificar um tópico, assim como o nome de uma tecnologia abragente, ou seu tipo. Uma página sobre _WebGL_ pode ser marcada com as tags `Gráficos/Graphics` e `WebGL`, por exemplo, e uma página sobre elementos {{HTMLElement("canvas")}} pode ser marcada com as etiquetas `HTML`, `Elementos/Element`, `Tela/Canvas`, e `Gráficos/Graphics`.

### Estado da tecnologia

Para ajudar a entender se uma tecnologia é viável ou não, nós usamos as etiquetas que descrevem em que ponto estão as suas especificações. Fazer isso não detalha tanto quanto explicar, de fato, qual é a especificação e onde, nesse processo, a tecnologia está (para isto usamos uma tabela de "Especificações"), mas ajuda os leitores a julgar, rapidamente, se usar a tecnologia descrita no artigo é, ou não, uma boa ideia.

Alguns valores possíveis para estas etiquetas:

- `Read-only`
  - : Aplique esta etiqueta para páginas que descrevem atributos ou propriedades que são "somente leitura".
- `Non-standard`
  - : Indica que a tecnologia ou API não pertence a qualquer padrão, mas é considerada estável no(s) navegador(es) que a tem implementada. Se você não usar esta etiqueta os leitores vão presumir que o artigo é padronizado. A tabela de compatibilidade da página deve esclarecer quais navegadores suportam essa tecnologia ou API.
- `Deprecated`
  - : A tecnologia ou API abrigada na página foi marcada como obsoleta na especificação e é esperado que seja, eventualmente, removida mas está, em geral, ainda presente nas versões mais recentes de navegadores.
- `Obsolete`
  - : Foi decidido que a tecnologia ou API está ultrapassada e, assim, foi removida (ou está em processo de remoção) de todas as versões mais recentes de navegadores.
- `Experimental`
  - : A tecnologia ou API não é padronizada, ainda é experimental e pode, ou não, vir a ser parte da especificação. Também está sujeita a alterações no mecanismo do navegador (tipicamente, apenas uma) que a implementa.
- `Needs Privileges`
  - : A API requer acesso privilegiado ao aparelho no qual o código está rodando.
- `Certified Only`
  - : A API funciona, apenas, em código certificado.

Estas etiquetas não são desculpa para não inserir uma [tabela de compatibilidade](/pt-BR/docs/Project:Compatibility_tables) em seu artigo!

### Nível de habilidade

A etiqueta de nível de habilidade é usada, apenas, em guias e tutoriais (ou seja, páginas marcadas como Guias) a fim de auxiliar quem os procura a escolher tutoriais baseados na familiaridade com a tecnologia. Existem trés valores para esta etiqueta:

- `Beginner`
  - : Artigos escritos com a intenção de introduzir uma nova tecnologia, para iniciantes.
- `Intermediate`
  - : Artigos para quem já tem experiência com a tecnologia, mas ainda não a domina completamente.
- `Advanced`
  - : Artigos que levam ao limite as capacidades de quem lê e da tecnologia.

### Metadados do documento

Os escritores da MDN usam etiquetas para identificar artigos que precisam de determinados tipos de trabalho. Segue uma lista das que mais usamos:

- `junk`
  - : Este artigo precisa ser deletado.
- `NeedsContent`
  - : Este artigo é um esboço, ou a informação está, de alguma forma, incompleta. Esta etiqueta significa que alguém precisa revisar o conteúdo e adicionar detalhes e/ou terminar a escrita do artigo.
- `NeedsExample`
  - : O artigo precisa de um ou mais exemplos para ilustrar melhor seu objetivo, de acordo com o [sistema de exemplos dinâmicos.](/pt-BR/docs/MDN/Contribute/Structures/Live_samples)
- `NeedsLiveSamples`
  - : Este arigo necessita que um, ou mais, de seus exemplos sejam modificados para incluir o uso do [sistema de exemplos dinâmicos](/pt-BR/docs/MDN/Contribute/Structures/Live_samples).
- `NeedsUpdate`
  - : O artigo está desatualizado.
- `l10n:exclude`
  - : Não vale a pena traduzir este artigo e ele não aparecerá nas páginas sobre as situações das traduções.
- `l10n:priority`
  - : Este artigo é importante e deve ser visto como prioridade para os tradutores da MDN. É mostrado em uma tabela de maior importância nas páginas sobre as situações das traduções.

### Mapa Literário Web

O projeto _[WebMaker](https://webmaker.org)_, através do [Mapa Literário para a _Web_](https://webmaker.org/literacy)_,_ definiu as habilidades necessárias para aperfeiçoar a leitura, a escrita e a participação na _Web_. Nós usamos essas habilidades literárias em forma de etiquetas, na MDN, para ajudar nossos utilizadores a encontrar as melhores respostas às suas necessidades:

- `Navigation`
  - : Este artigo inclui informação sobre como navegar pela _web_.
- `WebMechanics`
  - : Este artigo tem informação de como a _web_ é organizada e como ela funciona.
- `Search`
  - : Este artigo explica como localizar informação, pessoas e recursos na _web_.
- `Credibility`
  - : A instrução neste artigo ajuda os leitores a entender como avaliar, criticamente, a informação encontrada na _web_.
- `Security`
  - : Este artigo provê informação de como manter sistemas, identidades e conteúdo seguros.
- `Composing`
  - : Este artigo explica como criar e selecionar conteúdo para a _web_.
- `Remixing`
  - : Este artigo ensina como modificar recursos já existentes na _web_ para criar algo novo.
- `Design`
  - : Documentação sobre como aprimorar a estética visual e a experiência dos utilizadores.
- `Accessibility`
  - : Documentos que descrevem como desenvolver conteúdo com acessibilidade, o que significa permitir que o máximo possível de pessoas possa acessá-lo, ainda que as suas habilidades sejam limitadas de alguma forma.
- `CodingScripting`
  - : Como programar e/ou criar experiências interativas na _web_.
- `infrastructure`
  - : Este documento explica as partes técnicas da internete.
- `Sharing`
  - : O conteúdo deste artigo fala sobre as várias maneiras de criar recursos com outras pessoas.
- `Collaborating`
  - : Este artigo provê informação de como trabalhar em conjunto com outras pessoas.
- `Community`
  - : Este artigo detalha como se envolver com as comunidades da _Web_ e entender como elas funcionam.
- `Privacy`
  - : Este material ajuda a examinar as consequências de compatilhar dados _online._
- `OpenPractices`
  - : Este artigo demonstra como manter a _Web_ acessível a todas as pessoas.

## Colocando tudo junto

Para cada página você aplica vários tipos de etiquetas, por exemplo:

- Um tutorial sobre WebGL para iniciantes
  - : `WebGL`, Gráficos, `Graphics`, Guia, `Guide`, Iniciante, `Beginner`
- Referência para elementos {{HTMLElement("canvas")}}
  - : `Canvas`, Tela, `HTML`, `Element`, Elementos, `Graphics` `Reference`, Referencial Gráfico
- Uma página de entrada para as ferramentas de desenvolvedores voltados ao Firefox OS
  - : `Tools`, Ferramentas, `Firefox OS`, `Landing`, Destino

## Etiquetas e filtros de busca

Filtros de busca não vão funcionar apropriadamente, a não ser que marquemos as páginas da MDN corretamente. Aqui está uma tabela dos filtros de pesquisa e sua busca correspondente.

> **Nota:** **Observação:** Se várias etiquetas estiverem listadas abaixo de "Nome da etiqueta", isso significa que, pelo menos, uma delas precisa estar presente para o artigo estar propriamente marcado.

| Grupo do filtro     | Nome do filtro de pesquisa | Nome da _etiqueta_                                                                                   |
| ------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------- |
| Tópico              | Open Web Apps              | `Apps`                                                                                               |
|                     | HTML                       | `HTML`                                                                                               |
|                     | CSS                        | `CSS`                                                                                                |
|                     | JavaScript                 | `JavaScript`                                                                                         |
|                     | APIs e DOM                 | `API`                                                                                                |
|                     | Telas                      | `Canvas`                                                                                             |
|                     | SVG                        | `SVG`                                                                                                |
|                     | MathML                     | `MathML`                                                                                             |
|                     | WebGL                      | `WebGL`                                                                                              |
|                     | XUL                        | `XUL`                                                                                                |
|                     | Marketplace                | `Marketplace`                                                                                        |
|                     | Firefox                    | `Firefox`                                                                                            |
|                     | Firefox para Android       | `Firefox Mobile`                                                                                     |
|                     | Firefox para Computadores  | `Firefox Desktop`                                                                                    |
|                     | Firefox OS                 | `Firefox OS`                                                                                         |
|                     | Dispositivos Móveis        | `Mobile`                                                                                             |
|                     | Desenvolvimento _Web_      | `Web Development`                                                                                    |
|                     | Complementos & Extensões   | `Add-ons` \|\| `Extensions` \|\| `Plugins` \|\| `Themes`                                             |
|                     | Jogos                      | `Games`                                                                                              |
| Nível de habilidade | Sou Especialista           | `Advanced`                                                                                           |
|                     | Nível Intermediário        | `Intermediate`                                                                                       |
|                     | Estou Começando            | `Beginner`                                                                                           |
| Tipo de documento   | Documentos                 | _Esta vai restringir a busca ao teor dos documentos, deixando de fora Hacks e outros conteúdos MDN._ |
|                     | Demos                      | _Isto vai incluir as demonstrações (Demo Studio) nos resultados da busca._                           |
|                     | Ferramentas                | `Tools`                                                                                              |
|                     | Exemplos de Códigos        | `Example`                                                                                            |
|                     | Guia & Tutorial            | `Guide`                                                                                              |
|                     | Perfis de desenvolvedores  | _Esta inclui os perfis de desenvolvedores da comunidade MDN nos resultados da busca._                |
|                     | Recursos Externos          | _Isto é alguma coisa que a equipe de desenvolvimento vai ter que solucionar._                        |

## Problemas de etiquetas que você pode consertar

Há vários tipos de problemas de rotulagem que você pode ajudar a resolver:

- Sem etiquetas
  - : Geralmente os artigos devem ter, _no minimo_, as etiquetas de "[categória](/pt-BR/docs/MDN/Contribute/guia/Como-marcar-as-paginas-corretamente#Categória)" e "[tópico](/pt-BR/docs/MDN/Contribute/guia/Como-marcar-as-paginas-corretamente#Tópico)". Comumente outras etiquetas podem ser adicionadas mas, se você ajudar a garantir que o requesito minimo delas esteja presente, você já terá uma documentação maravilhosa!
- Etiquetas que não seguem nossos padrões
  - : Por favor, conserte qualquer documento cujas etiquetas não sigam as normas estabelecidas nesta página. Leve em consideração que, devido a um [erro no _Kuma_](https://bugzilla.mozilla.org/show_bug.cgi?id=776048), algumas etiquetas traduzidas (como `Référence`) podem aparecer em algumas páginas em inglês. Há uma chance bem grande destas etiquetas voltarem após serem deletadas, então, não se acanhe em consertá-las, até o erro ser corrigiido.
- Etiquetas incorretas
  - : Se você estiver lendo um artigo sobre HTML e este estiver marcado com "JavaScript", provavelmente há algo errado! Da mesma forma, se um artigo discutir os detalhes internos da Mozilla mas exibir uma etiqueta "_Web_", provavelmente existe algo errado aí, também. Remova essas tetiquetas e adicione as corretas, se elas ainda não estiverem lá. Por favor, também corrija etiquetas escritas incorretamente (p.ex. "javascript" não está de todo errada, uma vez que etiquetas não consideram maiúsculas, ou minúsculas, mas vamos ter capricho!: )
- Carência de Etiquetas
  - : Se um artigo tem algumas, mas não todas as etiquetas de que precisa, sinta-se à vontade para adicionar mais. Por exemplo: se uma página de referência de JavaScript estiver (corretamente) marcada com "JavaScript" e nada mais além disso, agradecemos se você inserir a etiqueta "Referência/Reference" lá, também!
- Etiquetas indesejáveis (_spam_)
  - : Esta besta asquerosa é o mais revoltante dos problemas de etiquetas: Algum verme da _Web_ depositou suas excreções nas etiquetass de uma página (como "Programa Grátis!" ou "Ei, eu estava navegando pela sua página e queria perguntar se você me ajudaria a resolver esse problema que estou tendo com o _Flash_ travando o tempo todo"). Temos que remover estas "etiquetas" assim que possível! Elas são horrendas, difíceis de manejar se esperarmos demais, e atrapalham muito a {{Glossary("SEO")}}.

Se você vir um (ou mais) destes problemas, por favor, registre-se, ou entre na MDN e clique no botão "EDITAR", no canto superior direito da página. Quando o editor carregar, role até o pé da página e você verá as etiquetas. Para mais detalhes da interface de marcação, leia a seção "[As caixas de etiquetas](/pt-BR/docs/MDN/Contribute/Editor/Basics#The_tags_box)" do [Guia do editor da MDN](/pt-BR/docs/MDN/Contribute/Editor).
