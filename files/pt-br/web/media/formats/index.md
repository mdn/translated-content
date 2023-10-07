---
title: Formatos de mídia suportados por elementos HTML  de áudio e vídeo
slug: Web/Media/Formats
---

Os elementos {{ HTMLElement("audio") }} e {{ HTMLElement("video") }} fornecem suporte para a reprodução de mídias de áudio e vídeo sem necessitar de plug-ins. Codecs de áudio e vídeo são usados para manipular arquivos de áudio e vídeo, diferentes codecs oferecem diferentes níveis de compressão e qualidade. Um formato do repositório é usado para armazenar e transmitir o codec de áudio e vídeo ( ambos juntos, no caso de um vídeo com tilha sonora). Existem muitas combinações de codecs e formatos de containers, embora apenas alguns são relevantes para a internet.

Diferentes navegadores não dão suporte para os mesmos formatos de mídias em suas implementações de áudio e vídeo no HTML5, principalmente por causa de questões de patentes. A área de formatos de mídias na internet tem sofrido muito com leis de patentes em muitos países, incluindo os Estados Unidos e países da União Européia (as notas sobre patentes nesse artigo são fornecidas como estão e sem garantias). Este artigo discute a diferença de codecs e combinações de containers relevantes para a internet, incluindo suporte de navegadores em computadores ou outros tipos de dispositivos.

Para exibir um vídeo usando HTML5, que funcione nas últimas versões dos principais navegadores, você pode disponibilizar seu vídeo em dois formatos: WebM e MPEG H.264 AAC, usando o elemento {{HTMLElement("source")}} desta forma:

```html
<video controls>
  <source src="somevideo.webm" type="video/webm" />
  <source src="somevideo.mp4" type="video/mp4" />
  Desculpe; seu navegador não suporta vídeos HTML5 em WebM com VP8 ou MP4 com
  H.264.
  <!-- Você pode embutir um Flash player aqui, para exibir seu vídeo mp4 em navegadores antigos -->
</video>
```

## WebM

O formato [WebM](http://www.webmproject.org/) é baseado em uma versão restrita do container [Matroska](http://corecodec.com/products/matroska). Ele sempre usa o codec de vídeo VP8 ou VP9 e o codec de áudio Vorbis ou Opus. WebM tem suporte nativo em navegadores de desktop e dispositivos móveis como Gecko (Firefox), Chrome e Opera, e o suporte para esse formato pode ser adicionado no Internet Explorer e Safari (mas não no iOS) por meio de um plug-in.

[Declaração da Microsoft sobre o porquê o IE9 não possui suporte nativo para o WebM.](http://blogs.msdn.com/b/ie/archive/2011/02/02/html5-and-web-video-questions-for-the-industry-from-the-community.aspx)

O formato WebM, especificamente o codec de vídeo VP8, tinha sido acusado de violar patentes por um grupo de empresas respondendo um chamado da MPEG LA para a formação de um conjunto de patentes, mas a [MPEG LA concordou em licenciar estas patentes para a Google](http://www.businesswire.com/news/home/20130307006192/en/Google-MPEG-LA-Announce-Agreement-Covering-VP8) sob uma "[licença perpétua intransferível, livre de direitos autorais](http://xiphmont.livejournal.com/59893.html?thread=310261#t310261)". Isto significa, efetivamente, que todas a patentes conhecidas do formato WebM são licenciadas para todos de graça.

Gecko reconhece os seguintes tipos de arquivos WebM:

- `video/webm`
  - : Um arquivo de mídia WebM contendo vídeo (e possivelmente áudio também).
- `audio/webm`
  - : Um arquivo de mídia WebM contendo apenas áudio.

## Ogg Theora Vorbis

O formato de container Ogg com o codec de vídeo Theora e o codec de áudio Vorbis é suportados em desktops e dispositivos móveis Gecko (Firefox), Chrome, Opera e o suporte para esses formatos pode ser adicionado ao Safari (exceto iOS) instalando um plug-in. O Internet Explorer não possui suporte para esse formato.

WebM é geralmente mais utilizado que Ogg Theora Vorbis quando disponível, por que ele possui uma melhor qualidade de compressão e tem suporte na maioria dos navegadores. O formato Ogg, contudo, pode ser usado para navegadores mais antigos (por exemplo o Firefox 3.5/3.6 não tem suporte WebM, mas suporta Ogg).

A situação de patente do Theora é similar com a da WebM.

Você pode ler mais sobre criar méidia com Ogg lendo o [Theora Cookbook](http://en.flossmanuals.net/ogg-theora/).

Grecko reconhece os seguintes tipos MIME como arquivos Ogg:

- `audio/ogg`
  - : Um arquivo Ogg que contem apensa áudio
- `video/ogg`
  - : Um arquivo Ogg que contem vídeo (e possivelmente áudio)
- `application/ogg`
  - : Um arquivo Ogg com conteúdo não especificado. Usando um dos dois tipos de MIME, mas você pode usar ele se você não sabe qual é o conteúdo do arquivo.

## Ogg Opus

O container Ogg pode também conter um áudio codificado usando o [codec Opus](http://www.opus-codec.org/). Suporte para ele está disponível no Gecko 15.0 e versões superiores, em navegadores no desktop e dispositivos móveis.

## Ogg FLAC

O contêiner Ogg pode também conter um áudio codificado usando o [codec FLAC](https://xiph.org/flac/index.html). Suporte para ele está disponível no Gecko 51.0 e versões superiores, somente no desktop.

## MP4 H.264 (AAC ou MP3)

O formato MP4 com o codec de vídeo H.264 e codec de áudio AAC tem suporte nativo para Internet Explorer, Safari e Chrome no desktop e dispositivos móveis, o Opera não possui suporte para este formato. IE e Chrome também possuem suporte para codec de áudio MP3 no container MP4, mas o Safari não tem suporte para isso. Firefox/Firefox para hardware do dispositivo pode manipular o perfil utilizado para codificar o MP4.

> **Nota:** Codificação MP4 com um perfil elevado não será executado em um hardware inferior, como o Firefox OS.

O formato de mídia MPEG é coberto por patentes, do qual não é livremente licenciado. Todas as licenças necessárias podem ser compradas da MPEG LA. Desde H.264 o formato não é livre de direitos autorais, é impróprio para a internet aberta, de acordo com a Mozilla \[[1](http://shaver.off.net/diary/2010/01/23/html5-video-and-codecs/), [2](http://robert.ocallahan.org/2010/01/video-freedom-and-mozilla_23.html)], Google \[[1](http://blog.chromium.org/2011/01/html-video-codec-support-in-chrome.html), [2](http://blog.chromium.org/2011/01/more-about-chrome-html-video-codec.html)] e Opera. Contudo, desde que os formatos de direitos livres não são suportados pelo Internet Explorer e Safari, a [Mozilla decidiu dar suporte para o formato](https://hacks.mozilla.org/2012/03/video-mobile-and-the-open-web/), e a Google nunca cumpriu sua promessa de remover o suporte para o Chrome.

## MP3

O formato de áudio MP3(.mp3 audio/mpeg; diferente do áudio MP3 no MP4 container acima) é suportado na tag \<audio> no Firefox/Firefox para Android/Firefox OS quando o sistema operacional fornece um decodificador MP3, para Internet Explorer, Chrome e Safari.

## WAVE PCM

O formato WAVE, com o codec de áudio PCM (codec WAVE "1") tem suporte nos navegadores Gecko(Firefox) e Safari no desktop e dispositivos móveis. Arquivos com o formato WAVE tipicamente tem a extensão ".wav".

> **Nota:** **Nota: Veja** [RFC 2361](http://www.rfc-editor.org/rfc/rfc2361.txt) para ver registros do codec WAVE

Gecko reconhece os seguintes tipos MIME em arquivos de áudio WAVE:

- `audio/wave` (preferido; não funciona no Chrome)
- `audio/wav`
- `audio/x-wav`
- `audio/x-pn-wav`

## Media Source Extensions (MSE)

[Origem da extesão de mídia](https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html) é um projeto de trabalho da W3C que planeja ampliar {{ domxref("HTMLMediaElement") }} para permitir que o JavaScript gere fluxo de mídia para reprodução. Permitindo que o JavaScript gere fluxos facilita uma variedade de uso, como o fluxo adaptado e o tempo de mudança de transmissão ao vivo. Isto é atualmente um suporte experimental no Firefox desktop, e em outros navegadores também.

Por exemplo, [você pode implementar MPEG-DASH usando JavaScript durante carregamento da decodificação para MSE](http://msopentech.com/blog/2014/01/03/streaming_video_player/).

> **Nota:** Time Shifting é o processo de consumo de uma transmissão ao vivo, algum tempo após ter acontecido.

## Veja também

- [Using audio and video in Firefox](/pt-BR/Using_HTML5_audio_and_video)
- [HTML media support in Firefox](http://bluishcoder.co.nz/2013/08/21/html-media-support-in-firefox.html)
- [Media elements](http://www.whatwg.org/specs/web-apps/current-work/#media-elements) (HTML 5 specification)
- [`video`](/pt-BR/HTML/Element/Video)
- [`audio`](/pt-BR/HTML/Element/Audio)
