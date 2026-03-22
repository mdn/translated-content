---
title: "<video>: O elemento HTML de incorporação de Vídeo"
slug: Web/HTML/Reference/Elements/video
original_slug: Web/HTML/Element/video
---

{{HTMLSidebar}}

O elemento [HTML](/pt-BR/docs/Web/HTML) **`<video>`** incorpora um reprodutor de mídia que suporta a reprodução de vídeo no documento. Você também pode usar `<video>` para conteúdo de áudio, mas o elemento {{HTMLElement("audio")}} pode proporcionar uma experiência de usuário mais adequada.

{{InteractiveExample("HTML Demo: &lt;video&gt;", "tabbed-standard")}}

```html interactive-example
<video controls width="250">
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />

  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />

  Download the
  <a href="/shared-assets/videos/flower.webm">WEBM</a>
  or
  <a href="/shared-assets/videos/flower.mp4">MP4</a>
  video.
</video>
```

O exemplo acima mostra um uso simples do elemento `<video>`. Semelhante ao elemento {{htmlelement("img")}}, incluímos o caminho da mídia que queremos exibir dentro do atributo `src`; também podemos incluir outros atributos para especificar informações, como largura e altura do vídeo, se queremos que ele seja reproduzido automaticamente e em loop, se queremos mostrar os controles de vídeo padrão do navegador etc.

O conteúdo dentro das tags de abertura e fechamento `<video></video>` é exibido como uma alternativa (_fallback_) em navegadores que não suportam o elemento.

## Atributos

Como qualquer elemento HTML, este elemento suporta os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- `autoplay`
  - : Um atributo Booleano; se especificado, o video vai ser executado assim que possível sem precisar de carregar todo o arquivo.

    > [!NOTE]
    > Sites que reproduzem automaticamente áudio (ou vídeos com uma faixa de áudio) podem proporcionar uma experiência desagradável para os usuários, portanto, devem ser evitados sempre que possível. Se você precisar oferecer a funcionalidade de reprodução automática, é recomendável torná-la opcional (exigindo que o usuário a habilite especificamente). No entanto, isso pode ser útil ao criar elementos de mídia cuja fonte será definida posteriormente, sob controle do usuário. Consulte nosso [guia sobre reprodução automática](/pt-BR/docs/Web/Media/Autoplay_guide) para obter informações adicionais sobre como usar a reprodução automática corretamente.

    Para desativar a reprodução automática, `autoplay="false"` não vai funcionar; o vídeo será reproduzido automaticamente se o atributo estiver presente na tag `<video>`. Para remover a reprodução automática, o atributo deve ser removido por completo.

    A reprodução automática não funciona em alguns navegadores (ex., Chrome 70.0) se o atributo `muted` estiver presente.

- `controls`
  - : Se esse atributo estiver presente, o navegador oferecerá controles para permitir o usuário controlar a reprodução do vídeo, incluindo volume, navegação (seek), e pausa/continuação da reprodução.
- `controlslist`
  - : O atributo [`controlslist`](https://wicg.github.io/controls-list/explainer.html), quando definido, ajuda o navegador a selecionar que controles mostrar no elemento `video` sempre que o navegador exibir o seu próprio conjunto de controles (ou seja, quando o atributo `controls` for especificado).

    Os valores permitidos são `nodownload`, `nofullscreen` e `noremoteplayback`.

    Use o atributo [`disablepictureinpicture`](#disablepictureinpicture) se você quiser desabilitar o modo Picture-In-Picture (e o controle).

- `crossorigin`
  - : Esse atributo [enumerado](/pt-BR/docs/Glossary/Enumerated) indica se deve usar CORS para buscar o vídeo relacionado. [Recursos habilitados para CORS](/pt-BR/docs/Web/HTML/CORS_enabled_image) podem ser reutilizados no elemento {{HTMLElement("canvas")}} sem serem _contaminados_. Os valores permitidos são:
    - `anonymous`
      Envia uma solicitação de origem cruzada sem uma credencial. Em outras palavras, ele envia o cabeçalho HTTP `Origin:` sem um cookie, certificado X.509 ou realizar uma autenticação HTTP Basic. Se o servidor não fornecer credenciais ao site de origem (não definindo o cabeçalho HTTP `Access-Control-Allow-Origin:`), o recurso será contaminado e seu uso restrito.
    - `use-credentials`
      - : Envia uma solicitação de origem cruzada com uma credencial. Em outras palavras, envia o cabeçalho HTTP `Origin:` com um cookie, um certificado, ou realiza autenticação HTTP Basic. Se o servidor não fornecer credenciais ao o site de origem (por meio do cabeçalho HTTP `Access-Control-Allow-Credentials:`), o recurso será contaminado e seu uso será restrito.

    Quando não está presente, o recurso é buscado sem uma solicitação CORS (ou seja, sem enviar o cabeçalho HTTP `Origin:`), impedindo seu uso não contaminado em elementos {{HTMLElement('canvas')}}. Se for inválido, é tratado como se a palavra-chave enumerada `anonymous` tivesse sido usada. Consulte os [atributos de configuração de CORS](/pt-BR/docs/Web/HTML/Attributes/crossorigin) para obter informações adicionais.

- `disablepictureinpicture`
  - : Impede o navegador de sugerir um menu de contexto Picture-in-Picture ou de solicitar automaticamente o Picture-in-Picture em alguns casos..
- `disableremoteplayback`
  - : Um atributo Booleano usado para desativar a capacidade de reprodução remota em dispositivos conectados usando tecnologias com fio (HDMI, DVI, etc.) e sem fio (Miracast, Chromecast, DLNA, AirPlay, etc.).

    No Safari, você pode usar [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) como alternativa.

- `height`
  - : A altura da área de exibição do vídeo, em [pixels de CSS](https://drafts.csswg.org/css-values/#px) (apenas valores absolutos; [sem porcentagens](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).
- `loop`
  - : Um atributo Booleano; se especificado, ao chegar no fim do vídeo, ele voltará automaticamente para o começo.
- `muted`
  - : Um atributo Booleano que indica a configuração padrão do áudio contido no vídeo. Se definido, o áudio vai começar mudo. Seu valor padrão é falso, significando que o áudio será reproduzido juntamente com o vídeo.
- `playsinline`
  - : Um atributo booleano que indica que o vídeo deve ser reproduzido "em linha" (inline), ou seja, dentro da área de reprodução do elemento. Observe que a ausência deste atributo _não_ implica que o vídeo será sempre reproduzido em tela cheia.
- `poster`
  - : Uma URL indicando uma imagem de prévia do vídeo até o usuário reproduzir ou navegar por ele. Se este atributo não estiver especificado, nada será mostrado até que o primeiro quadro esteja disponível; então o primeiro quadro será exibido como imagem de prévia.
- `preload`
  - : Esse atributo enumerado pretende dar uma sugestão ao navegador sobre o que o autor pensa que proporcionará uma melhor experiência do usuário. Ele pode ter os seguintes valores:
    - `none`: indica que o usuário não necessitará consultar o vídeo ou que o servidor quer minimizar seu tráfego; em outros termos indica que o vídeo não deve ser pré-carregado.
    - `metadata`: indica que embora o usuário não necessitará consultar o vídeo, pegar os meta-dados (ex: comprimento) é interessante.
    - `auto`: indica que o usuário necessita ter prioridade; em outros termos isso indicou que, se necessário, o vídeo inteiro pode ser baixado, mesmo que não seja esperado a execução.
    - a _string vazia_: é um sinônimo do valor `auto`.

    Se não definido, seu valor padrão será definido pelo navegador (isto é, cada navegador pode escolher seu valor padrão), embora a especificação recomende que seja definido para o `metadata`.

    > [!NOTE]
    >
    > >
    >
    > - O atributo `autoplay` tem precedência sobre o `preload`, pois se é necessário executar o vídeo automaticamente, o navegador obviamente o baixará. Definindo ambos `autoplay` e `preload` é permitido pela especificação.
    > - O navegador não é forçado pela especifição a seguir o valor desse atributo; é apenas uma sugestão.

- `src`
  - : A URL do vídeo a ser incorporado. Isto é opcional; ao invés disso você pode usar o elemento {{ HTMLElement("source") }} dentro do bloco do vídeo para especificar o vídeo a ser incorporado .
- `width`
  - : A largura da área de exibição do vídeo, em [pixels de CSS](https://drafts.csswg.org/css-values/#px) (apenas valores absolutos; [sem porcentagens](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Eventos

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Nome do evento</th>
      <th scope="col">Quando é disparado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}} {{Deprecated_Inline}}
      </td>
      <td>
        O buffer de entrada de um {{DOMxRef("ScriptProcessorNode")}} está pronto para
        ser processado.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        O navegador pode reproduzir a mídia, mas estima que não há dados suficientes
        carregados para reproduzir a mídia até o final sem ter que parar para carregar
        mais conteúdo.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        O navegador estima que pode reproduzir a mídia até o final sem
        precisar parar para carregar mais conteúdo.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("OfflineAudioContext.complete_event", "complete")}}
      </td>
      <td>
        A renderização de um {{DOMxRef("OfflineAudioContext")}} foi concluída.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td>O atributo <code>duration</code> foi atualizado.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        A mídia ficou vazia; por exemplo, este evento é enviado se a mídia já foi
        carregada (ou parcialmente carregada), e o método
        <a href="/pt-BR/docs/Web/API/HTMLMediaElement/load" rel="internal"
          ><code>load()</code></a
        >
        é chamado para recarregá-la.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>A reprodução foi interrompida porque o final da mídia foi alcançado.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.error_event", 'error')}}
      </td>
      <td>
        Ocorreu um erro ao buscar os dados da mídia, ou o tipo do recurso não
        é um formato de mídia suportado.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>O primeiro quadro da mídia terminou de carregar.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>Os metadados foram carregados.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
      </td>
      <td>Disparado quando o navegador começou a carregar o recurso.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.pause_event", 'pause')}}
      </td>
      <td>A reprodução foi pausada.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.play_event", 'play')}}
      </td>
      <td>A reprodução começou.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.playing_event", 'playing ')}}
      </td>
      <td>
        A reprodução está pronta para começar depois de ter sido pausada ou
        atrasada devido à falta de dados.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.progress_event", 'progress')}}
      </td>
      <td>Disparado periodicamente conforme o navegador carrega um recurso.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>A taxa de reprodução foi alterada.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td>Uma operação de <em>navegação</em> foi concluída.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td>Uma operação de <em>navegação</em> foi iniciada.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>
        O agente do usuário está tentando buscar dados de mídia, mas os dados
        não estão sendo recebidos conforme o esperado.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>O carregamento dos dados da mídia foi suspenso.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td>
        O tempo indicado pelo atributo <code>currentTime</code> foi atualizado.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
      </td>
      <td>O volume foi alterado.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
      </td>
      <td>A reprodução foi interrompida devido à falta temporária de dados.</td>
    </tr>
  </tbody>
</table>

## Notas de uso

Os navegadores não dão suporte a todos os mesmos formatos de vídeo; você pode fornecer múltiplas fontes dentro de elementos {{htmlelement("source")}} aninhados, e o navegador utilizará a primeira que tiver suporte.

```html
<video controls>
  <source src="meuVideo.webm" type="video/webm" />
  <source src="meuVideo.mp4" type="video/mp4" />
  <p>
    O seu navegador não tem suporte a vídeo HTML. Em vez disso, aqui está
    <a href="meuVideo.mp4" download="meuVideo.mp4">o link do vídeo</a>.
  </p>
</video>
```

Nós oferecemos um guia abrangente e detalhado sobre [tipos de arquivos de mídia](/pt-BR/docs/Web/Media/Guides/Formats) e o [guia sobre os codecs compatíveis com vídeo](/pt-BR/docs/Web/Media/Formats/Video_codecs). Também está disponível um [guia sobre os codecs de áudio](/pt-BR/docs/Web/Media/Formats/Audio_codecs) que podem ser usados com eles.

Outras notas de uso:

- Se você não especificar o atributo `controls`, o vídeo não incluirá os controles padrão do navegador; você pode criar seus próprios controles personalizados usando JavaScript e a API {{domxref("HTMLMediaElement")}}. Consulte [Criando um player de vídeo compatível com vários navegadores](/pt-BR/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) para obter mais detalhes.
- Para permitir o controle preciso do conteúdo do seu vídeo (e áudio), os elementos `HTMLMediaElement` disparam muitos [eventos](/pt-BR/docs/Web/API/HTMLMediaElement#events) diferentes. Além de fornecer controlabilidade, esses eventos permitem que você monitore o progresso tanto do download quanto da reprodução da mídia, bem como o estado e a posição da reprodução.
- Você pode usar a propriedade {{cssxref("object-position")}} para ajustar o posicionamento do vídeo dentro do quadro do elemento e a propriedade {{cssxref("object-fit")}} para controlar como o tamanho do vídeo é ajustado para caber dentro do quadro.
- Para exibir legendas/legendas junto com o seu vídeo, você pode usar JavaScript junto com o elemento {{htmlelement("track")}} e o formato [WebVTT](/pt-BR/docs/Web/API/WebVTT_API). Consulte [Adicionando legendas em um vídeo HTML](/pt-BR/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) para obter mais informações.
- Você pode reproduzir arquivos de áudio usando um elemento `<video>`. Isso pode ser útil, por exemplo, se você precisar executar áudio com uma transcrição [WebVTT](/pt-BR/docs/Web/API/WebVTT_API), já que o elemento {{HTMLElement("audio")}} não permite legendas usando WebVTT.
- Para testar o conteúdo de alternativa (_fallback_) em navegadores que suportam o elemento, você pode substituir `<video>` por um elemento que não exista, como `<notavideo>`.

Uma boa fonte geral de informações sobre o uso de HTML `<video>` é o tutorial para iniciantes em [Conteúdo de vídeo e áudio](/pt-BR/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio).

### Estilização com CSS

O elemento `<video>` é um [replaced element](/pt-BR/docs/Web/CSS/Replaced_element) — seu valor {{cssxref("display")}} é `inline` por padrão, mas sua largura e altura padrão na viewport são definidas pelo vídeo que está sendo incorporado.

Não há considerações especiais para estilizar `<video>`; uma estratégia comum é atribuir a ele um valor `display` de `block` para facilitar o posicionamento, o tamanho etc. e, em seguida, fornecer informações de estilo e layout conforme necessário. [Noções básicas de estilo do player de vídeo](/pt-BR/docs/Web/Media/Audio_and_video_delivery/Video_player_styling_basics) fornece algumas técnicas de estilo úteis.

### Detectando a adição e a remoção de faixas

Você pode detectar quando as faixas são adicionadas e removidas de um elemento `<video>` usando os eventos {{domxref("VideoTrackList/addtrack_event", "addtrack")}} e {{domxref("VideoTrackList/removetrack_event", "removetrack")}}. Entretanto, esses eventos não são enviados diretamente para o próprio elemento `<video>`. Em vez disso, eles são enviados para o objeto da lista de faixas dentro do {{domxref("HTMLMediaElement")}} do elemento `<video>` que corresponde ao tipo de faixas que foi adicionada ao elemento:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : Um {{domxref("AudioTrackList")}} contendo todas as faixas de áudio do elemento de mídia. Você pode adicionar um listener no evento `addtrack` deste objeto para ser alertado quando novas faixas de áudio forem adicionadas ao elemento.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Adicione um listener `addtrack` a este objeto {{domxref("VideoTrackList")}} para ser informado quando faixas de vídeo forem adicionadas ao elemento.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Adicione um listener de evento `addtrack` a este {{domxref("TextTrackList")}} para ser notificado quando novas faixas de texto forem adicionadas ao elemento.

Por exemplo, para detectar quando faixas de áudio são adicionadas ou removidas de um elemento `<video>`, você pode usar um código como este:

```js
const elem = document.querySelector("video");

elem.audioTracks.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTracks.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

Este código monitora as faixas de áudio que foram adicionadas ou removidas do elemento e chama uma função hipotética em um editor de faixas para registrar e remover a faixa da lista de faixas disponíveis do editor.

Você também pode usar {{domxref("EventTarget.addEventListener", "addEventListener()")}} para ouvir os eventos {{domxref("VideoTrackList/addtrack_event", "addtrack")}} e {{domxref("VideoTrackList/removetrack_event", "removetrack")}}.

## Suporte do servidor para vídeo

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

## Exemplos

### Fonte única

Esse exemplo reproduz um vídeo quando ativado, fornecendo ao usuário os controles de vídeo padrão do navegador para controlar a reprodução.

#### HTML

```html
<!-- Exemplo de vídeo simples -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster de peach.blender.org -->
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Desculpe, seu navegador não suporta vídeos incorporados, mas não se preocupe,
  você pode
  <a href="https://archive.org/details/BigBuckBunny_124">baixá-lo</a>
  e assisti-lo com seu player de vídeo favorito!
</video>
```

#### Resultado

{{EmbedLiveSample('Fonte única', '', '400')}}

Até que o vídeo comece a ser reproduzido, a imagem fornecida no atributo `poster` é exibida em seu lugar. Se o navegador não tiver suporte para reprodução de vídeo, o texto de alternativa (_fallback_) será exibido.

### Múltiplas fontes

Este exemplo se baseia no anterior, oferecendo três fontes diferentes para a mídia; isso permite que o vídeo seja assistido independentemente dos codecs de vídeo suportados pelo navegador.

#### HTML

```html
<!-- Usando multiplas fontes como alternativa para a tag video -->
<!-- 'Elephants Dream' by Orange Open Movie Project Studio, licensed under CC-3.0, hosted by archive.org -->
<!-- Poster hospedado por Wikimedia -->
<video
  width="620"
  controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
    type="video/ogg" />
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi" />
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4" />

  Desculpe, seu navegador não suporta vídeos incorporados, mas não se preocupe,
  você pode fazer o
  <a
    href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    download="ed_1024_512kb.mp4">
    download do MP4
  </a>
  e assisti-lo com seu player de vídeo favorito!
</video>
```

#### Resultado

{{EmbedLiveSample('Múltiplas fontes', '', '400')}}

Primeiro, é tentado o formato [Ogg](/pt-BR/docs/Web/Media/Formats/Containers#ogg). Se não for possível reproduzi-lo, será tentado o AVI. Por fim, é tentado o [MP4](/pt-BR/docs/Web/Media/Formats/Containers#mpeg-4_mp4). Uma mensagem de fallback é exibida se o vídeo não puder ser reproduzido, mas a mesma não será exibida se todas as fontes falharem.

Alguns tipos de arquivos de mídia permitem que você forneça informações mais específicas usando o parâmetro [`codecs`](/pt-BR/docs/Web/Media/Formats/codecs_parameter) como parte da string de tipo do arquivo. Um exemplo relativamente simples é `video/webm; codecs="vp8, vorbis"`, que indica que o arquivo é um vídeo [WebM](/pt-BR/docs/Web/Media/Formats/Containers#webm) usando [VP8](/pt-BR/docs/Web/Media/Formats/Video_codecs#vp8) para o vídeo e [Vorbis](/pt-BR/docs/Web/Media/Formats/Audio_codecs#vorbis) para o áudio.

## Preocupações com a acessibilidade

Os vídeos devem fornecer legendas e transcrições que descrevam com precisão o seu conteúdo (consulte [Adicionando legendas e subtítulos a vídeos em HTML](/pt-BR/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) para obter mais informações sobre como implementá-las). As legendas permitem que pessoas com perda auditiva compreendam o conteúdo de áudio de um vídeo enquanto ele está sendo reproduzido, enquanto as transcrições permitem que pessoas que precisam de mais tempo possam revisar o conteúdo de áudio em um ritmo e formato que seja confortável para elas.

Vale ressaltar que, embora seja possível legendar mídia somente de áudio, isso só pode ser feito ao reproduzir áudio em um elemento {{HTMLElement("video")}}, uma vez que a região de vídeo do elemento é usada para apresentar as legendas. Este é um dos cenários especiais em que é útil reproduzir áudio em um elemento de vídeo.

Se serviços de legendagem automática forem usados, é importante revisar o conteúdo gerado para garantir que ele represente com precisão o vídeo original.

Além do diálogo falado, legendas e transcrições também devem identificar músicas e efeitos sonoros que transmitam informações importantes. Isso inclui emoção e tom:

```plain
14
00:03:14 --> 00:03:18
[Música rock dramática]

15
00:03:19 --> 00:03:21
[sussurrando] O que é aquilo lá longe?

16
00:03:22 --> 00:03:24
É… é um…

16 00:03:25 --> 00:03:32
[Barulho alto]
[Barulho de pratos]
```

As legendas não devem obstruir o assunto principal do vídeo. Elas podem ser posicionadas usando [a configuração `align` VTT cue](/pt-BR/docs/Web/API/WebVTT_API#cue_settings).

- [Web Video Text Tracks Format (WebVTT)](/pt-BR/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Sumário técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#conteúdo_de_fluxo"
          >Conteúdo de fluxo</a
        >, conteúdo de fraseado, conteúdo incorporado. Se possui o atributo
        <a href="/pt-BR/docs/Web/HTML/Element/video#controls"><code>controls</code></a>: interactive
        conteúdo interativo e conteúdo palpável.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <p>
          Se o elemento possui um atributo <a href="/pt-BR/docs/Web/HTML/Element/video#src"><code>src</code></a>
          : zero ou mais elementos {{HTMLElement("track")}},
          seguido de conteúdo transparente que não contém elementos de mídia – ou seja
          nenhum {{HTMLElement("audio")}} ou {{HTMLElement("video")}}.
        </p>
        <p>
          Caso contrário: zero ou mais elementos {{HTMLElement("source")}}, seguido
          de zero ou mais elementos {{HTMLElement("track")}}, seguido de conteúdo
          transparente que não contém elementos de mídia – ou seja, nenhum
          {{HTMLElement("audio")}} ou {{HTMLElement("video")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>Nenhuma, ambas as tags de abertura e fechamento são obrigatórias.</td>
    </tr>
    <tr>
      <th scope="row">Pais permitidos</th>
      <td>Qualquer elemento que aceite conteúdo embutido.</td>
    </tr>
    <tr>
      <th scope="row">ARIA role implícito</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Nenhuma ARIA role correspondente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">ARIA roles permitidas</th>
      <td><a href="/pt-BR/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLVideoElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Guia para tipos de mídia e formatos para web](/pt-BR/docs/Web/Media/Guides/Formats)
  - [Formatos de contêiner de mídia (tipos de arquivo)](/pt-BR/docs/Web/Media/Formats/Containers)
  - [Guia de codecs de vídeo na Web](/pt-BR/docs/Web/Media/Formats/Video_codecs)
  - [Guia de codecs de áudio da Web](/pt-BR/docs/Web/Media/Formats/Audio_codecs)

- Posicionamento e dimensionamento da imagem em seu quadro: {{cssxref("object-position")}} and {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [Usando áudio e vídeo em HTML](/pt-BR/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Manipulando vídeo usando canvas](/pt-BR/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Configurando servidores para mídia Ogg](/pt-BR/docs/Web/Media/Formats/Configuring_servers_for_Ogg_media)
