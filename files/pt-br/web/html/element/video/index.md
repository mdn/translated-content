---
title: video
slug: Web/HTML/Element/video
---

## Sumário

O elemento HTML `<video>` é utilizado para incorporar conteúdo de vídeo em um documento HTML ou XHTML.

Para uma lista de formatos suportados veja [Media formats supported by the audio and video elements](/En/Media_formats_supported_by_the_audio_and_video_elements).

## Contexto de uso

| Conteúdo permitido          | [Transparent content](/pt-BR/HTML/Content_categories#transparent_content), contendo ou um atributo **src** ou um ou mais elementos {{ HTMLElement("source") }}, seguido por [flow content](/pt-BR/HTML/Content_categories#flow_content) ou [phrasing content](/pt-BR/HTML/Content_categories#phrasing_content) , sem `<video>` ou elementos {{ HTMLElement("audio") }}. |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omissão de tag              | Nenhuma, tanto as tags iniciais quanto as finais devem estar presentes.                                                                                                                                                                                                                                                                                                 |
| Permissão de elementos pais | Qualquer elemento que aceite [flow content](/pt-BR/HTML/Content_categories#flow_content), ou qualquer outro elemento que aceite [phrasing content](/pt-BR/HTML/Content_categories#phrasing_content).                                                                                                                                                                    |
| Documento normativo         | [HTML 5, section 4.8.6](https://www.w3.org/TR/html5/video.html#video)                                                                                                                                                                                                                                                                                                   |

## Atributos

Como qualquer elemento HTML, este elemento suporta os [global attributes](/pt-BR/HTML/Global_attributes).

- {{ htmlattrdef("autoplay") }}
  - : Um atributo Booleano; se especificado, o video vai ser executado assim que possível sem precisar de carregar todo o arquivo.

> **Nota:** Algumas versões do Chrome aceitam somente o `autostart` e não o autoplay

- {{ htmlattrdef("autobuffer") }} {{ Non-standard_inline() }}

  - : Um atributo Booleano; se especificado, o video vai começar a carregar automaticamente mesmo que não especificado para tocar automaticamente. Isso deve ser usado em casos que é esperado que o vídeo seja reproduzido (por exemplo, se o usuário acessa a página para assistir o vídeo, mas não se o vídeo estiver incorporado à pagina junto a outro conteúdo). O vídeo é carregado até que o cache de mídia.

    > **Note:** **Nota de implementação:** embora parte dos primeiros rascunhos das especificações do HTML5, o atributo `autobuffer` foi removido das últimas versões. Ele foi removido do Gecko 2.0 e outros navegadores, e nunca implementado em outros. A especificação define um novo atributo enumerado, `preload`, para substituir o atributo `autobuffer`, com sintaxe diferente. {{ bug(548523) }}

- {{ htmlattrdef("buffered") }}
  - : Um atributo que pode ser lido para determinar os intervalos do vídeo que já foram carregados. Este atributo contém um objeto {{ domxref("TimeRanges") }}.
- {{ htmlattrdef("controls") }}
  - : Se esse atributo estiver presente, o Gecko oferecerá controles para permitir o usuário controlar a reprodução do vídeo, incluindo volume, navegação, e pausa/continuação da reprodução.
- {{ htmlattrdef("height") }}
  - : A altura da área de exibição do vídeo, em pixels de CSS.
- {{ htmlattrdef("loop") }}
  - : Um atributo Booleano; se especificado, ao chegar no fim do vídeo, ele voltará automaticamente para o começo.
- {{ htmlattrdef("muted") }}
  - : Um atributo Booleano que indica a configuração padrão do áudio contido no vídeo. Se definido, o áudio vai começar mudo. Seu valor padrão é falso, significando que o áudio será reproduzido juntamente com o vídeo.
- {{ htmlattrdef("played") }}
  - : Um objeto {{ domxref("TimeRanges") }} indicando que todo o vídeo foi reproduzido.
- {{ htmlattrdef("preload") }}

  - : Esse atributo enumerado pretende dar uma sugestão ao navegador sobre o que o autor pensa que proporcionará uma melhor experiência do usuário. Ele pode ter os seguintes valores:

    - none: indica que o usuário não necessitará consultar o vídeo ou que o servidor quer minimizar seu tráfego; em outros termos indica que o vídeo não deve ser pré-carregado.
    - metadata: indica que embora o usuário não necessitará consultar o vídeo, pegar os meta-dados (ex: comprimento) é interessante.
    - auto: indica que o usuário necessita ter prioridade; em outros termos isso indicou que, se necessário, o vídeo inteiro pode ser baixado, mesmo que não seja esperado a execução.
    - a _string vazia_: é um sinônimo do valor auto.

    Se não definido, seu valor padrão será definido pelo navegador (isto é, cada navegador pode escolher seu valor padrão), embora a especificação recomenda que seja definido para o metadata.

    > **Note:** **Notas de uso:**- O atributo `autoplay` tem precedência sobre o `preload`, pois se é necessário executar o vídeo automaticamente, o navegador obviamente o baixará. Definindo ambos `autoplay` e `preload` é permitido pela especificação.
    >
    > - O navegador não é forçado pela especifição a seguir o valor desse atributo; é apenas uma sugestão.

- {{ htmlattrdef("poster") }}
  - : Uma URL indicando uma imagem de prévia do vídeo até o usuário reproduzir ou navegar por ele. Se este atributo não estiver especificado, nada será mostrado até que o primeiro quadro esteja disponível; então o primeiro quadro será exibido como imagem de prévia.
- {{ htmlattrdef("src") }}
  - : A URL do vídeo a ser incorporado. Isto é opcional; ao invés disso você pode usar o elemento {{ HTMLElement("source") }} dentro do bloco do vídeo para especificar o vídeo a ser incorporado .
- {{ htmlattrdef("width") }}
  - : A largura da área de exibição do vídeo, em pixels de CSS.

O tempo de compensação (time offset) entre o áudio e o vídeo está especificado como um valor de ponto flutuante (float) representando o número de segundos da compensação.

> **Nota:** A definição de valor de tempo de compensação ainda não foi completada na especificação do HTML 5 e está sujeita a mudança.

## Exemplos

```html
<!-- Exemplo simples de vídeo -->
<video src="arquivovideo.ogg" autoplay poster="imagemprevia.jpg">
  Desculpa, o seu navegador não suporta vídeos incorporados, mas você pode
  <a href="videofile.ogg">baixá-lo</a>
  e assistir pelo seu reprodutor de mídia favorito!
</video>

<!-- Vídeo com legendas -->
<video src="foo.ogg">
  <track kind="subtitles" src="foo.en.vtt" srclang="en" label="English" />
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska" />
</video>
```

O primeiro exemplo reproduz um vídeo, começando a reprodução assim que o vídeo for recebido para permitir a execução sem parar a execução para baixar mais. Até que o vídeo comece a reproduzir, a imagem "imagemprevia.jpg" será mostrada em seu lugar.

O segundo exemplo permite o usuário escolher entre diferentes legendas.

## Suporte ao Servidor

Se o tipo MIME do vídeo não estiver definido corretamente no servidor, o vídeo poderá não ser mostrado ou uma caixa cinza contendo um X (se o JavaScript estiver habilitado) será exibida em seu lugar.

Se você disponibiliza seu vídeos como Ogg Theora, você pode corrigir esse problema para o servidor web Apache adicionando a extensão utilizada por seu arquivos de vídeo (".ogm", ".ogv", e ".ogg" são as mais comuns) para o tipo MIME "video/ogg" através do arquivo "mime.types" localizado em "/etc/apache" ou através da configuração de diretiva "AddType" no httpd.conf.

```
AddType video/ogg .ogm
AddType video/ogg .ogv
AddType video/ogg .ogg
```

Se você disponibilizar seu vídeos como WebM, você pode corrigir esse problema para o servidor web Apache adicionando a extensão usada por seu arquivos de vídeo (".webm" é a mais comum) para o tipo MIME "video/webm" através do arquivo "mime.types" localizado em "/etc/apache" ou através da configuração de diretiva "AddType" no httpd.conf.

```
AddType video/webm .webm
```

Seu serviço de hospedagem talvez forneça uma interface simples para mudar a configuração dos tipos MIME para as novas tecnologias até que uma atualização global ocorra naturalmente.

## Interface do DOM

Esse elemento implementa a interface [`HTMLVideoElement`](/pt-BR/DOM/HTMLVideoElement).

## Compatibilidade com navegadores

{{Compat("html.elements.video")}}

## Veja também

- [Media formats supported by the audio and video elements](/En/Media_formats_supported_by_the_audio_and_video_elements)
- [`audio`](http://developer-new.mozilla.org/pt-BR/docs/HTML/Element/audio)
- [Using HTML5 audio and video](/pt-BR/Using_HTML5_audio_and_video)
- [Manipulating video using canvas](/En/Manipulating_video_using_canvas)
- [`nsIDOMHTMLMediaElement`](/En/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement)
- [TinyVid](http://tinyvid.tv/) - exemplos utilizando arquivos ogg em HTML5.
- [The `video` element](http://www.whatwg.org/specs/web-apps/current-work/#video) (Especificação HTML 5)
- [Configuring servers for Ogg media](/pt-BR/Configuring_servers_for_Ogg_media)
