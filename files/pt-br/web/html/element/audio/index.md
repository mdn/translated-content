---
title: audio
slug: Web/HTML/Element/audio
---

## Sumário

O elemento `audio` é utilizado para embutir conteúdo de som em um documento HTML ou XHTML.O elemento `audio` foi adicionado como parte do HTML5.

Você pode utilizar recursos avançados da API de áudio — que são específicas do Gecko — para gerar e manipular diretamente fluxo de áudio a partir do código JavaScript. Veja [Introducing the audio API extension](/pt-BR/docs/Introducing_the_Audio_API_Extension) para detalhes.

## Contexto de Uso

| Conteúdo permitido       | [Transparent content](/pt-BR/docs/HTML/Content_categories#transparent_content), tanto um atributo `src` quanto um ou mais elementos {{ HTMLElement("source") }}, seguidos por um [flow content](/pt-BR/docs/HTML/Content_categories#flow_content) ou [phrasing content](/pt-BR/docs/HTML/Content_categories#phrasing_content), sem{{ HTMLElement("video") }} ou elementos `<audio>`. |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omissão de tag           | Nenhuma, tanto as tags iniciais quanto as finais devem estar presentes.                                                                                                                                                                                                                                                                                                              |
| Elementos pai permitidos | Qualquer elemento que aceite [flow content](/pt-BR/docs/HTML/Content_categories#flow_content), ou qualquer elemento que aceite [phrasing content](/pt-BR/docs/HTML/Content_categories#phrasing_content).                                                                                                                                                                             |
| Documento normativo      | [HTML5, section 4.8.7](https://www.w3.org/TR/html5/video.html#audio)                                                                                                                                                                                                                                                                                                                 |

## Atributos

Como todos os elementos HTML, este elemento suporta os [global attributes](/pt-BR/docs/HTML/Global_attributes).

- {{ htmlattrdef("autoplay") }}
  - : Um atributo Booleano; se especificado (mesmo se o valor for "false"!), o áudio iniciará automaticamente assim que possível sem parar de carregar os dados.
- {{ htmlattrdef("autobuffer") }}
  - : Um atributo Booleano; se especificado, o audio será baixado automaticamente, mesmo se não está configurado para reprodução automática. Isto continua até que o cache de mídia esteja cheio, ou até que o o arquivo de áudio completo tenha sido baixado, o que vier primeiro. Isto deve ser utilizado apenas quando é esperado que o usuário escolherá tocar o áudio; por exemplo, se o usuário navegou para a página utilizando um link "Reproduzir". Este atributo foi removido no Gecko 2.0 em razão do atributo `preload`.
- {{ htmlattrdef("buffered") }}
  - : Um atributo que pode ser lido para determinar os intervalos do áudio que já foram carregados. Este atributo contém um objeto {{ domxref("TimeRanges") }}.
- {{ htmlattrdef("controls") }}
  - : Se esse atributo estiver presente, o navegador oferecerá controles para permitir ao usuário controlar a reprodução do áudio, incluindo volume, navegação, e pausa/continuação da reprodução.
- {{ htmlattrdef("loop") }}
  - : Um atributo Booleano; se especificado, ao chegar no fim do áudio, ele voltará automaticamente para o começo.
- {{ htmlattrdef("mozCurrentSampleOffset") }} {{ non-standard_inline() }}
  - : The offset, specified as the number of samples since the beginning of the audio stream, at which the audio is currently playing.
- {{ htmlattrdef("muted") }}
  - : Um atributo Booleano que indica se o áudio será inicializado silenciado.
- {{ htmlattrdef("played") }}
  - : Um objeto {{ domxref("TimeRanges") }}indicando que todo o áudio foi reproduzido.
- {{ htmlattrdef("preload") }}

  - : Esse atributo enumerado pretende dar uma sugestão ao navegador sobre o que o autor pensa que proporcionará uma melhor experiência do usuário. Ele pode ter os seguintes valores:

    - none: indica que o usuário não necessitará consultar o áudio ou que o servidor quer minimizar seu tráfego; em outros termos indica que o áudio não deve ser pré-carregado;
    - metadata: indica que embora o usuário não necessitará consultar o áudio, pegar os meta-dados (ex: comprimento) é interessante;
    - auto: indica que o usuário necessita ter prioridade; em outros termos isso significa que, se necessário, o áudio inteiro pode ser baixado, mesmo que não seja esperado a execução;
    - Uma _string vazia_: é um sinônimo do valor auto.

    Se não definido, seu valor padrão será definido pelo navegador (isto é, cada navegador pode escolher seu valor padrão), embora a especificação recomenda que seja definido para o metadata.

    > **Note:** **Notas de uso:**- O atributo `autoplay` tem precedência sobre o `preload`, pois se é necessário executar o áudio automaticamente, o navegador obviamente o baixará. Definindo ambos `autoplay` e `preload` é permitido pela especificação.
    >
    > - O navegador não é forçado pela especifição a seguir o valor desse atributo; é apenas uma sugestão.

- {{ htmlattrdef("src") }}
  - : A URL do áudio a ser incorporado. Isso é sujeito a [HTTP access controls](/pt-BR/docs/HTTP_access_control). Isto é opcional; ao invés disso você pode usar o elemento [`<source>`](http://developer.mozilla.org/pt-BR/docs/pt-BR/HTML/Element/source) dentro do bloco do áudio para especificar o vídeo a ser incorporado .

O tempo de compensação (time offset) entre o áudio e o vídeo está especificado como um valor de ponto flutuante (float) representando o número de segundos da compensação.

> **Nota:** A definição de valor de tempo de compensação ainda não foi completada na especificação do HTML 5 e está sujeita a mudança.

## Examples

```html
<!-- Reprodução simples de áudio -->
<audio
  src="https://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
  autoplay>
  O seu navegador não suporta o elemento <code>audio</code>.
</audio>

<!-- Reprodução de áudio com legendas -->
<audio src="foo.ogg">
  <track kind="captions" src="foo.en.vtt" srclang="en" label="English" />
  <track kind="captions" src="foo.sv.vtt" srclang="sv" label="Svenska" />
</audio>
```

Reproduz o arquivo de áudio anexado a esse artigo.

## Interface do DOM

- [HTMLAudioElement](/pt-BR/docs/DOM/HTMLAudioElement)

## Compatibilidade com navegadores

{{Compat("html.elements.audio")}}

## Veja também

- [Media formats supported by the audio and video elements](/pt-BR/docs/Media_formats_supported_by_the_audio_and_video_elements)
- [Introducing the audio API extension](/pt-BR/docs/Introducing_the_Audio_API_Extension)
- [`HTMLAudioElement`](/pt-BR/docs/DOM/HTMLAudioElement)
- [`nsIDOMHTMLMediaElement`](/pt-BR/docs/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement)
- [`video`](http://developer-new.mozilla.org/pt-BR/docs/HTML/Element/Video)
- [Using audio and video](/pt-BR/docs/Using_HTML5_audio_and_video)
- [The `audio` element](http://www.whatwg.org/specs/web-apps/current-work/#audio) (Especificação HTML5)
