---
title: Firefox 49 para desenvolvedores
slug: Mozilla/Firefox/Releases/49
---

[Para testar estes novos recursos do Firefox,
Instale Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) Firefox 49 foi lançado em 20 de Setembro de 2016. Este artigo faz uma lista das principais alterações não só para desenvolvedores web, mas também desenvolvedores Firefox e Gecko e de extensões.

## Mudanças para desenvolvedores web

### Ferramentas de desenvolvimento

- Erros de JavaScript registrados no console [Agora com um link \[Leia Mais\]](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) para ajuda complementar na depuração ([Erro do Firefox 1179876](https://bugzil.la/1179876)).
- CSS autocompletar: mostra mais sugestões para o autocompletar
  ([Erro do Firefox 1260419](https://bugzil.la/1260419)).
- O inspector de animação agora [fornece informações do desempenho da animação](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further_information_about_animation_compositing) nas ferramentas de desenvolvimento ([Erro do Firefox 1254408](https://bugzil.la/1254408)).
- O [menu de contexto do Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element_popup_context_menu) foi reorganizado ser mais claro e fácil de usar ([Erro do Firefox 1211613](https://bugzil.la/1211613)).
- O Inspector agora suporta sintaxe para valores de cores em `#RRGGBBAA` e `#RGBA` ([Erro do Firefox 1271191](https://bugzil.la/1271191)).
- As ferramentas de desvenvolvedor deixa de exibir marcas de fechamento automático (tal como {{HTMLElement("br")}} e {{HTMLElement("img")}} como se eles tivessem uma tag de fechamento em páginas HTML ; o comportamento é inalteravel para páginas XHTML ([Erro do Firefox 820926](https://bugzil.la/820926)).
- Melhorias na acessibilidade!
  - A caixa de ferramenta faz um trabalho melhor em assegurar que o foco no teclado seja mais visível ([Erro do Firefox 1242851](https://bugzil.la/1242851)).
  - Foram adicionados rótulos de acessibilidade a controles não marcados ([Erro do Firefox 1242715](https://bugzil.la/1242715)).
  - Adicionada semântica de exibição de árvore adequada e navegação de teclado para a exibição de marcação do Inspetor ([Erro do Firefox 1242694](https://bugzil.la/1242694)).

- O [Monitor de Rede](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) agora mostra uma coluna de Causa, onde fornece e indica o que causa de cada requerimento de rede específico ([Erro do Firefox 1134073](https://bugzil.la/1134073)).
- Na _about:debugging_ página de extesões, o botão de recarregar é o único abilitado para extensões temporárias. Será desabilitado para todas as outras extensões ([Erro do Firefox 1273184](https://bugzil.la/1273184)).
- Na página Workers em _about:debbuging_, uma mensagem de alerta será exibida na seção Service Workers se o [service workers for incompatíveil](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service_workers_not_compatible) com as configurações atuais do navegador ([Erro do Firefox 1266415](https://bugzil.la/1266415)).
- _about:debugging_ agora existe uma [nova página de Tabs](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs) disponível, quer fornece uma lista completa de todas abas abertas debugaveis na instancia do Firefox ([Erro do Firefox 1266128](https://bugzil.la/1266128)).
- A opção _Desabilitar Cache_ na [Caixa de ferramentas de configurações avançadas](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced_settings) foi renomeada para Desabilitar HTTP Cache, para clarear que isso afeta o cache do HTTP, e não [Service Workers](/pt-BR/docs/Web/API/Service_Worker_API)/o [Cache API](/pt-BR/docs/Web/API/Cache) (bug(1253018)).
- O [Inspector de armazenamento agora permite IndexedDB databases ser deletado](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) através de seu próprio menu ([Erro do Firefox 1205123](https://bugzil.la/1205123)), e mostrará uma mensagem de alerta se a IndexedDB poder ser deletada por alguma rasão (Se ainda existir conexão ativa, por exemplo) ([Erro do Firefox 1268460](https://bugzil.la/1268460)).

### HTML

- Adicionado suporte para estes elementros: {{HTMLElement("details")}} e {{HTMLElement("summary")}} ([Erro do Firefox 1226455](https://bugzil.la/1226455)).
- O [`pattern`](/pt-BR/docs/Web/HTML/Reference/Elements/input#pattern) atribuido para {{HTMLElement("input")}} agora usa o parâmetro `'u'` no JavaScript base {{jsxref("RegExp")}} ([Erro do Firefox 1227906](https://bugzil.la/1227906)).
- Para corresponder a uma mudança específica, de um valor inválido [`kind`](/pt-BR/docs/Web/HTML/Reference/Elements/track#kind) atributo do elemento {{HTMLElement('track')}} é agora tratado como `"metadata"` ao invés de`"subtitles"` ([Erro do Firefox 1269712](https://bugzil.la/1269712)).
- O atributo [`sandbox`](/pt-BR/docs/Web/HTML/Reference/Elements/iframe#sandbox) do elemento {{HTMLElement("iframe")}} agora suporta os valores 'allow-popups-to-escape-sandbox' e 'allow-modals' ([Erro do Firefox 1190641](https://bugzil.la/1190641)).
- Suporte para atributos microdata e a Microdata API foram removidas ([Erro do Firefox 909633](https://bugzil.la/909633)).
- O atributo [`referrerpolicy`](/pt-BR/docs/Web/HTML/Reference/Elements/a#referrerpolicy) do elemento {{HTMLElement("a")}} agora suporta esses atributos `'no-referrer-when-downgrade`' e `'origin-when-cross-origin'` ([Erro do Firefox 1178337](https://bugzil.la/1178337)).
- O [`form`](/pt-BR/docs/Web/HTML/Reference/Elements/label#form) que é atributo do elemento {{HTMLElement("label")}} foi removido. A propriedade {{domxref("HTMLLabelElement.form")}} ainda existe, mas agora retorna o formulário na qual o controle do label's está associado , se houver um controle (e se esse controle for associado ao formulário) ([Erro do Firefox 1268852](https://bugzil.la/1268852)).

### CSS

- Adicionado {{cssxref("background-position-x")}} e {{cssxref("background-position-y")}}, que permite específicar e compensar separadamente a horizontal e a vertial para melhor posicionar a imagem de fundo; eles são compentes de {{cssxref("background-position")}} ([Erro do Firefox 550426](https://bugzil.la/550426)).
- Adicionado suporte para `as tags round` e `space` para {{cssxref("background-repeat")}} ([Erro do Firefox 548372](https://bugzil.la/548372)).
- no {{cssxref("background-clip")}}, as tags `text` são ativadas por padrão ([Erro do Firefox 1264905](https://bugzil.la/1264905)).
- Adicionado suporte a cores específicas como o canal alpha usando 4- e 8-digitos CSS hex [cor](/pt-BR/docs/Web/CSS/Reference/Values/color_value) de valores (#RRGGBBAA e #RGBA) ([Erro do Firefox 567283](https://bugzil.la/567283)).
- A pseudo-class {{cssxref(":dir()")}} foi desprezado ([Erro do Firefox 859301](https://bugzil.la/859301)).
- Em nossa implementação experimental (ainda não ativa por padrão) de {{cssxref("clip-path")}}, podemos agora interpolar entre valores {{cssxref("&lt;basic-shape&gt;")}} ([Erro do Firefox 1110460](https://bugzil.la/1110460)).
- Adicionado a [`unidade de comprimento q`](/pt-BR/docs/Web/CSS/length#q) ([Erro do Firefox 1274526](https://bugzil.la/1274526)).
- A propiedade {{cssxref("text-align-last")}} foi desprezada ([Erro do Firefox 1039541](https://bugzil.la/1039541)).
- Adicionado suporte para {{cssxref("overflow-wrap")}}, substituindo {{cssxref("word-wrap")}} que ainda é suportado como nome alternativo ([Erro do Firefox 955857](https://bugzil.la/955857)).
- Nossa experiencia com a implementação do [CSS Grids](/pt-BR/docs/Web/CSS/Guides/Grid_layout) foi melhorado:
  - implementado {{cssxref("&lt;percentage&gt;")}} para as propriedades {{cssxref("grid-gap")}}, {{cssxref("grid-row-gap")}}, e {{cssxref("grid-column-gap")}} ([Erro do Firefox 1266268](https://bugzil.la/1266268)).
  - Implementado suporte a layout grid layout para {{cssxref("align")}}, {{cssxref("justify-self")}}`:baseline` e `last-baseline` (aka "baseline self-alignment") ([Erro do Firefox 1221525](https://bugzil.la/1221525)).
  - Implementado alinhamento de conteúdo baseline de item em grid ([Erro do Firefox 1256429](https://bugzil.la/1256429)).

- Nosso experimeto implementação de [CSS Masks](/pt-BR/docs/Web/CSS/CSS_masking) foi melhorado:
  - A propiedade {{cssxref("mask-origin")}} agora usa `border-box` ao invés de `padding-box` como valor inicial, para coincidir com a especificação ([Erro do Firefox 1258286](https://bugzil.la/1258286)).
  - A propriedade {{cssxref("mask-repeat")}} suporta os seguintes volumes: `space` e `round` values ([Erro do Firefox 1258626](https://bugzil.la/1258626)).
  - Corrigido o problema que impedia o atributo {{cssxref("mask-position")}} de ser animado ([Erro do Firefox 1273804](https://bugzil.la/1273804)).

- O controle de preferências {{cssxref("text-emphasis")}} foi removido, assim o suporte para esta propiedade não pode ser mais desabilitado ([Erro do Firefox 1229609](https://bugzil.la/1229609)).

### JavaScript

- As armadilhas para ES2015 (ES6) {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "getPrototypeOf()")}} e {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} foram implementadas ([Erro do Firefox 888969](https://bugzil.la/888969)).
- O metodos ES2015 (ES6) {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}, {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}, {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}, e {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}, e {{jsxref("RegExp.@@species", "RegExp[@@species]")}} getter foram implementados ([Erro do Firefox 887016](https://bugzil.la/887016)).
- A versão obsoleta, `sem padrão nos argumentos de flags` do `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} foi remivida ([Erro do Firefox 1108382](https://bugzil.la/1108382)).
- O comportamento do metodo {{jsxref("Date.parse()")}} quando analisam 2-digit years foi modificado para mais interoperável com o navegador Google Chrome ([Erro do Firefox 1265136](https://bugzil.la/1265136)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- O metodo {{domxref("DOMTokenList.supports()")}} foi adicionado ([Erro do Firefox 1257849](https://bugzil.la/1257849)).
- O metodo {{domxref("DOMTokenList.replace()")}} foi adicionado ([Erro do Firefox 1224186](https://bugzil.la/1224186)).
- O caractere principal `'?'` agora é ignorado no parâmetro do construtor {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} ([Erro do Firefox 1268361](https://bugzil.la/1268361)).
- O valor retornado por {{domxref("URL.origin")}}, {{domxref("HTMLAnchorElement.origin")}}, e {{domxref("HTMLAreaElement.origin")}} para URL usando o `blob:` o esquema não está mais incorreto `null` mas em vez disso, a origem da URL formado pela remorção da tag `blob:` ([Erro do Firefox 1270451](https://bugzil.la/1270451)).
- No modo de pre-renderização, a propriedade {{domxref('Document.visibilityState')}} agora retorna `'prerender'` ([Erro do Firefox 1069772](https://bugzil.la/1069772)).
- A propriedade {{domxref("Window.isSecureContext")}} foi implantada ([Erro do Firefox 1162772](https://bugzil.la/1162772)).
- Os metodos DOM4 {{domxref("ChildNode.before()")}}, {{domxref("ChildNode.after()")}}, {{domxref("ChildNode.replaceWith()")}}, {{domxref("ParentNode.append()")}} e {{domxref("ParentNode.prepend()")}} foram implementados ([Erro do Firefox 911477](https://bugzil.la/911477)).
- O metodo {{domxref("TouchList.identifiedTouch()")}} foi removido ([Erro do Firefox 1188539](https://bugzil.la/1188539)).
- Por padrão, a característica `scrollbars` {{domxref("Window")}} é habilitado quando chamado {{domxref("Window.open()")}}. Anteriormente, quanto era altamente recomendado ativar ele, pois não era padrão ([Erro do Firefox 1257887](https://bugzil.la/1257887)).
- Adicionado o _metodo experimental_ e _non-standard_ do metodo {{domxref("HTMLMediaElement.seekToNextFrame()")}}, que permite bucar quadro a quadro no conteúdo do vídeo ([Erro do Firefox 1235301](https://bugzil.la/1235301)). Equanto você é incentivado a expertimentar, dessar forma você nos ajuda a entender o quão útil ele é, _não use ele em produção de código!_
- A propriedade {{domxref("HTMLLabelElement.form")}} agora retorna a forma com que o controle de label's foi assiciado, se houver um controle (e se esse controle for associado ao formulário). Anteriormente, labels eram diretamente associados com formulários usando essa propriedade ([Erro do Firefox 1268852](https://bugzil.la/1268852)).
- Suporte ao paramtro third de {{domxref("EventTarget.addEventListener()")}}, ou um {{jsxref("Boolean")}} ou a `EventListenerOptions` foi adicionado ([Erro do Firefox 1266164](https://bugzil.la/1266164) and [Erro do Firefox 1266066](https://bugzil.la/1266066)).
- O volume do áudio relativo a {{domxref("KeyboardEvent.key")}} foram renomeados. `"VolumeDown"` é agora `"AudioVolumeDown"`, `"VolumeUp"` é agora `"AudioVolumeUp"`, e `"VolumeMute"` e agora `"AudioVolumeMute".` Isso traz Firefox para alinhamento com os últimos rascunhos de especificações de UI Events ([Erro do Firefox 1272578](https://bugzil.la/1272578)). Veja [Code values](/pt-BR/docs/Web/API/KeyboardEvent/code#code_values) para uma lista completa de possibilidades de códigos.
- Os códigos ateriormente referidos a `"MozHomeScreen"`, `"MozCameraFocusAdjust"`, e `"MozPhoneCall"` agora tem nomes oficiais na especificação UI Events: `"GoHome"`, `"CameraFocus"`, e `"Call"`. Firefox 49 foi atualizado para utilizar os novos nomes ([Erro do Firefox 1272599](https://bugzil.la/1272599)). Veja [Code values](/pt-BR/docs/Web/API/KeyboardEvent/code#code_values) para uma lista completa de possilidades de códigos
- O valor dos códigos `"Separator"` e `"MediaSkip"` foram removidos, por serem desatualizados e não utilizados ([Erro do Firefox 1232919](https://bugzil.la/1232919)).
- Valor do código e a correspondencia dos códigos `"Hyper"` e `"Super"`foi adicionado para representar os modificadores de herança dos códigos ([Erro do Firefox 1232919](https://bugzil.la/1232919)).
- _Duas teclas do teclado numérico multimídia foram adicionados_: `"Key11"` e `"Key12"` ([Erro do Firefox 1232919](https://bugzil.la/1232919)).
- _Foram adicionados novos códigos para controle de audio_: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, e `"AudioTrebleUp"` ([Erro do Firefox 123919](https://bugzil.la/123919)).
- Adiconado código para controle do mocrofone: `"MicrophoneToggle"`, `"MicrophoneVolumeDown"`, `"MicrophoneVolumeUp"`, e `"MicrophoneVolumeMute"` ([Erro do Firefox 123919](https://bugzil.la/123919)).
- _Adicionado novo código de suporte a dispositivos de reconhecimento de fala_: "`SpeechCorrectionList"` e `"SpeechInputToggle"` ([Erro do Firefox 1232919](https://bugzil.la/1232919)).
- _Nova tecla foi adicionada para suportar botões especiais em telefones_: `"AppSwitch"`, `"Call"`, `"CameraFocus"`, `"EndCall"`, `"GoBack"`, `"GoHome"`, `"HeadsetHook"`, `"LastNumberRedial"`, `"Notification"`, `"MannerMode"`, e `"VoiceDial"` ([Erro do Firefox 1232919](https://bugzil.la/1232919)).
- Um novo botão de aplicação foi adicionado: `"LaunchContacts"` e `"LaunchPhone"` ([Erro do Firefox 1232919](https://bugzil.la/1232919)).
- Adicionado novos códigos de suporte a dispositivos de TV: `"TV3DMode"`, `"TVAntennaCable"`, `"TVAudioDescription"`, `"TVAudioDescriptionMixDown"`, `"TVAudioDescriptionMixUp"`, `"TVContentsMenu"`, `"TVDataService"`, `"TVInput"`, `"TVInputComponent1"`, `"TVInputComponent2"`, `"TVInputComposite1"`, `"TVInputComposite2"`, `"TVInputHDMI1"`, `"TVInputHDMI2"`, `"TVInputHDMI3"`, `"TVInputHDMI4"`, `"TVInputVGA1"`, `"TVMediaContext"`, `"TVNetwork"`, `"TVNumberEntry"`, `"TVRadioService"`, `"TVSatellite"`, `"TVSatelliteBS"`, `"TVSatelliteCS"`, `"TVSatelliteToggle"`, `"TVTerrestrialAnalog"`, `"TVTerrestrialDigital"`, `"TVTimer"`, e `"DVR"` ([Erro do Firefox 1232919](https://bugzil.la/1232919)).
- O código `"MediaSelect"` foi substituido pelo valor padrão `"LaunchMediaPlayer"` ([Erro do Firefox 1272592](https://bugzil.la/1272592)).
- _Foram adicionados códigos adicionais para mídia-player_. São esses `"MediaAudioTrack"`, `"MediaSkipBackward"`, `"MediaSkipForward"`, `"MediaStepBackward"`, `"MediaStepForward"`, `"MediaTopMenu"`, `"NavigateIn"`, `"NavigateNext"`, `"NavigateOut"`, e `"NavigatePrevious"` ([Erro do Firefox 1232919](https://bugzil.la/1232919)).

#### Canvas

- A propriedade {{domxref("CanvasRenderingContext2D.filter")}}, que fornece suporte para adicionar foltros a uma canvas, agora é ativa por padrão e não precisa mais ser abilitado nas preferências ([Erro do Firefox 1173545](https://bugzil.la/1173545)).

#### WebGL

- A extensão {{domxref("EXT_color_buffer_float")}} {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} foi implementada ([Erro do Firefox 1129332](https://bugzil.la/1129332)).
- O evento [`webglcontextcreationerror`](/pt-BR/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event), que é criando quando a tentativa de criação de contexto do WebGL falha, foi implementado ([Erro do Firefox 1271478](https://bugzil.la/1271478)). Use isso para ajudar a entender melhor, tanto para depuração quanto para o processamento de errros de produção.

#### IndexedDB

- Agora você pode renomear IndexedDB indexes; a propriedade {{domxref("IDBIndex.name")}} já não é mais de leitura-única ([Erro do Firefox 1118028](https://bugzil.la/1118028)).
- Você também pode renomear {{domxref("IDBObjectStore")}}s; a propriedade {{domxref("IDBObjectStore.name")}} já não é de leitura-única ([Erro do Firefox 1118028](https://bugzil.la/1118028)).

#### Service Workers e relatórios

- O Objeto [Fetch API](/pt-BR/docs/Web/API/Fetch_API)'s {{domxref("Response")}} agora implementa a propriedade {{domxref("Response.redirected", "redirected")}} , que indica se a resposta é para uma solicitação que foi redirecionada. Por favor ervise o relatório de segurança na documentação usanda anteriormente nessa propriedade ([Erro do Firefox 1243792](https://bugzil.la/1243792)).
- Na [API de Permissões](/pt-BR/docs/Web/API/Permissions_API), Firefox já não suporta a palavra `PermissionDescriptor` ti push (referido na especificação como `PushPermissionDescriptor`); Isso ocorre porque o Firefox depende de um sistema de cotas para controloar o status `userVisibleOnly`, e estava lançando um erro ao encontrar uma instância do `PushPermissionDescriptor` ([Erro do Firefox 1266821](https://bugzil.la/1266821)). Com essa palavra removida, o Firefox simplismente ignora.

#### Streams de mídia

- Antigamente, era possível chamar {{domxref("MediaDevices.getUserMedia()")}} como requerimento ambos áudio e vídeo para ter sucesso nos casos em que o usuário tem apenas um dos dois tipos de hardware disponíveis . Isso foi fixado ([Erro do Firefox 802326](https://bugzil.la/802326)).
- Nas versões anteriores do Firefox, era possível chamar por {{domxref("MediaDevices.getUserMedia()")}} que solicita tando audio quanto vídeo para ter êxito mesmo que o usuário tenha negado acesso a um, mas não a ambos os dispositivos de correspondência. Isso foi fixado ([Erro do Firefox 802326](https://bugzil.la/802326)). Isso envolve pequenas alterações na interface de usuários, para remover a opção para escolher "sem áudio" ou "Sem vídeo" quando o usuário é solicitado para as permissões.
- O metodo {{domxref("MediaStream.getTrackById()")}} foi implantado ([Erro do Firefox 1208390](https://bugzil.la/1208390)).

#### WebRTC

- O metodo {{domxref("RTCPeerConnection.addTrack()")}} foi atualizado para permitir tracks sue não são componentes dos stream especificados a serem adicionados à conexão. Ao invés, os streams são usados para agrupar tracks na extremidade receptora da conexão ([Erro do Firefox 1271669](https://bugzil.la/1271669)).

#### Novas APIs

- A API {{domxref("PerformanceObserver")}} agpra é ativa por padrão no Nightly. Isso não é atio por padrão em outras versõs do Firefox 49 ([Erro do Firefox 1271487](https://bugzil.la/1271487)).

#### Outras

- {{domxref("XMLHttpRequest.getResponseHeader()")}} e {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} retornar cabeçalhos vazios caso a preferência `network.http.keep_empty_response_headers_as_empty_string` esta configurado para `true` ([Erro do Firefox 669259](https://bugzil.la/669259)).
- O Firefox OS-apenas [API Banco de Dados](/pt-BR/docs/Archive/Firefox_OS/API/Data_Store_API) foi removida ([Erro do Firefox 1261009](https://bugzil.la/1261009)).
- A [API de Tela Cheia](/pt-BR/docs/Web/API/Fullscreen_API) manipulador de eventos {{domxref("Document.onfullscreenchange")}} e {{domxref("Document.onfullscreenerror")}} foram removidos de {{domxref("Element")}} como nunca foram usados la; As versões de prefixo desses manipuladores de eventos foram mantidas lá para fins de compatibilidade, Contudo ([Erro do Firefox 1270386](https://bugzil.la/1270386)). Observe que ele não é ativado por padrão, mas está atrás da preferência `full-screen-api.unprefix.enabled` ([Erro do Firefox 1268749](https://bugzil.la/1268749)).
- A propriedade obsoleta {{domxref("Document.mozFullScreen")}} não foi pré-fixada {{domxref("Document.fullscreen")}} [Erro do Firefox 1269157](https://bugzil.la/1269157)}. Perceba que ela não é ativa por padrão nas preferencias the `full-screen-api.unprefix.enabled` ([Erro do Firefox 1268749](https://bugzil.la/1268749)).
- A propriedade leitor {{domxref("Document.fullscreenElement")}} e {{domxref("Document.fullscreenEnabled")}} deixa de lançar exceção se hover tentativa de alterar o seu valor; ao invés disso, o novo valor é ignorado e a função setter é uma no-op ([Erro do Firefox 1269798](https://bugzil.la/1269798)).
- Qualquer tipode de dado pode ser agora recuperado da área de tranferência usada {{domxref("DataTransfer.getData()")}}: anteriormente, apenas alguns tipos de dados do tipo MIME eram suportados [Erro do Firefox 860857](https://bugzil.la/860857).
- Nossa implementação da [API da cronometragrm de frames](/pt-BR/docs/Web/API/Frame_Timing_API), consistindo nas duas interfaces `PerformanceCompositeTiming` e `PerformanceRenderTiming`, foram removidas pois as especificações foram totalmente reescritas ([Erro do Firefox 1271846](https://bugzil.la/1271846)).
- Para especificações correspondentes, a propriedade {{domxref("VTTCue.positionAlign")}} agora retorna um `PositionAlign` enum em vez de `Align` enum ([Erro do Firefox 1276129](https://bugzil.la/1276129)).
- A parte de síntese da [API Web Speech](/pt-BR/docs/Web/API/Web_Speech_API#Speech_synthesis) agora é ativo por padrão ([Erro do Firefox 1268633](https://bugzil.la/1268633)).
- A [API Timeline de performace](/pt-BR/docs/Web/API/Performance_Timeline) agora está disponível de padrão no Nightly (embrora não no Aurora, Beta ou Release).
- O evento [`install`](/pt-BR/docs/Web/API/Window/appinstalled_event), e o {{domxref("Window.oninstall")}} manipulador de evento, são agora suportado por [Web Manifests](/pt-BR/docs/Web/Progressive_web_apps/Manifest) ([Erro do Firefox 1265279](https://bugzil.la/1265279)).
- Quando usar o metodo {{domxref("AudioContext.createPeriodicWave()")}} de [Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API), você pode específicar se a onda periódica resultante deve ser normalizada incluindo um objeto de dicionário como o terceiro parâmetro, que inclui um único parâmetro — `{disableNormalization: true}` ([Erro do Firefox 1265405](https://bugzil.la/1265405)).
- Na APIWebVTT, {{domxref("VTTCue.positionAlign")}} retorna corretamente um `PositionAlignSetting` enum conforme a especificação; anteriormente ele retornava um `AlignSetting` enum ([Erro do Firefox 1276129](https://bugzil.la/1276129)).
- A parte de síntese de fala da API Web Speech agora é habilitado por padrão em todos os navegadores desktop ([Erro do Firefox 1268633](https://bugzil.la/1268633)).
- O contrutor de [API Web Animations](/pt-BR/docs/Web/API/Web_Animations_API) {{domxref("Animation.Animation()", "Animation()")}} agora aceita null na timeline ([Erro do Firefox 1096776](https://bugzil.la/1096776)).

### MathML

_Sem mudanças._

### SVG

- Removido o suporte por ser considerador obsoleto os seguintes elementos: {{SVGElement('altGlyph')}}, {{SVGElement('altGlyphDef')}} e {{SVGElement('altGlyphItem')}} ([Erro do Firefox 1260032](https://bugzil.la/1260032)).

### Audio/Video

_Sem mudanças._

## HTTP

- `O diretiva Cache-Control: immutable` foi implantada ([Erro do Firefox 1267474](https://bugzil.la/1267474)). Veja também essa [postagem no blog](https://bitsup.blogspot.de/2016/05/cache-control-immutable.html) para mais informações.

## Networking

- A implementação do [Auto-configuração de Proxy (PAC)](</pt-BR/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) foi atualizada. Agora `weekdayRange`, `dateRange`, e `timeRange` suportam "intervalos invertidos", por exempo, `weekdayRange("SAT", "MON")` avaliare `true` se o dia atual é Saturday, Sunday, ou Monday ([Erro do Firefox 1251332](https://bugzil.la/1251332)).

## Segurança

- A propriedade {{domxref("Window.isSecureContext")}}, indica se o contexto é capaz de usar recursos que exigem [contextos de segurança](/pt-BR/docs/Web/Security/Secure_Contexts), foi implementado ([Erro do Firefox 1162772](https://bugzil.la/1162772)).

## Compatilibidade

A fim de melhorar a compatilidade com o conteúdo existente, Firefox agora aceita algumas propriedades e atributos do webkit.

- As propriedades a seguir também trabalham com prefixo -webkit:
  - {{cssxref("-webkit-align-items")}}
  - {{cssxref("-webkit-align-content")}}
  - {{cssxref("-webkit-align-self")}}
  - {{cssxref("-webkit-animation")}}
  - {{cssxref("-webkit-animation-delay")}}
  - {{cssxref("-webkit-animation-direction")}}
  - {{cssxref("-webkit-animation-duration")}}
  - {{cssxref("-webkit-animation-fill-mode")}}
  - {{cssxref("-webkit-animation-iteration-count")}}
  - {{cssxref("-webkit-animation-name")}}
  - {{cssxref("-webkit-animation-play-state")}}
  - {{cssxref("-webkit-animation-timing-function")}}
  - {{cssxref("-webkit-backface-visibility")}}
  - {{cssxref("-webkit-background-clip")}}
  - {{cssxref("-webkit-background-origin")}}
  - {{cssxref("-webkit-background-size")}}
  - {{cssxref("-webkit-border-bottom-left-radius")}}
  - {{cssxref("-webkit-border-bottom-right-radius")}}
  - {{cssxref("-webkit-border-image")}}
  - {{cssxref("-webkit-border-top-left-radius")}}
  - {{cssxref("-webkit-border-top-right-radius")}}
  - {{cssxref("-webkit-border-radius")}}
  - {{cssxref("-webkit-box-shadow")}}
  - {{cssxref("-webkit-filter")}}
  - {{cssxref("-webkit-flex")}}
  - {{cssxref("-webkit-flex-basis")}}
  - {{cssxref("-webkit-flex-direction")}}
  - {{cssxref("-webkit-flex-flow")}}
  - {{cssxref("-webkit-flex-grow")}}
  - {{cssxref("-webkit-flex-shrink")}}
  - {{cssxref("-webkit-flex-wrap")}}
  - {{cssxref("-webkit-justify-content")}}
  - {{cssxref("-webkit-order")}}
  - {{cssxref("-webkit-perspective")}}
  - {{cssxref("-webkit-perspective-origin")}}
  - {{cssxref("-webkit-text-size-adjust")}}
  - {{cssxref("-webkit-transform")}}
  - {{cssxref("-webkit-transform-origin")}}
  - {{cssxref("-webkit-transform-style")}}
  - {{cssxref("-webkit-transition")}}
  - {{cssxref("-webkit-transition-delay")}}
  - {{cssxref("-webkit-transition-duration")}}
  - {{cssxref("-webkit-transition-property")}}
  - {{cssxref("-webkit-transition-timing-function")}}
  - {{cssxref("-webkit-user-select")}}

- As propriedades a seguir correspondem à propriedade prefixa equivalente
  - {{cssxref("-webkit-box-flex")}}
  - {{cssxref("-webkit-box-ordinal-group")}}
  - {{cssxref("-webkit-box-orient")}}
  - {{cssxref("-webkit-box-align")}}
  - {{cssxref("-webkit-box-pack")}}

- Para valores {{cssxref("&lt;image&gt;")}}:
  - As funções a seguir correspondem aos seus equivalentes não predefinidos: {{cssxref("-webkit-linear-gradient", "-webkit-linear-gradient()")}}, {{cssxref("-webkit-radial-gradient", "-webkit-radial-gradient()")}}, {{cssxref("-webkit-repeating-linear-gradient", "-webkit-repeating-linear-gradient()")}}, e {{cssxref("-webkit-repeating-radial-gradient","-webkit-repeating-radial-gradient()")}}.
  - O desatualizado `-webkit-gradient` é suportado (e traduzindo para um gradiente regular)

- Os seguintes valores {{cssxref("display")}} foram traduzidos:
  - `-webkit-box` to `-moz-box`
  - `-webkit-flex` to `flex`
  - `-webkit-inline-box` to `inline-flex`
  - `-webkit-inline-flex` to `-moz-inline-flex`

- As seguintes propriedades são suportadas ( E não mapeia para qualquer equivalente não predefinido):
  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- A interface {{domxref("WebKitCSSMatrix")}} é um nome de {{domxref("DOMMatrix")}}
- Os seguintes recursos de consulta de mídia foram implementados:
  - `-webkit-min-device-pixel-ratio` é um nome para [`min-resolution`](/pt-BR/docs/Web/CSS/Guides/Media_queries/Using#resolution) com o mesmo valor em (em `dppx)`, embora este recurso seja [disabilitado por padrão](https://bugzilla.mozilla.org/show_bug.cgi?id=1237720) (atras de preferências no about:config `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` é um nome de [`max-resolution`](/pt-BR/docs/Web/CSS/Guides/Media_queries/Using#resolution) para o mesmo valor (em `dppx`); essa característica é destivada por padrão, atras da mesma preferência no about:config
  - [`-webkit-transform-3d`](/pt-BR/docs/Web/CSS/Guides/Media_queries/Using#-webkit-transform-3d) sempre combinando, indicando suporte a transformações 3D.

## Mudanças para extensões e desenvolvedores Mozilla

### Extensões WEB

- Suporte a {{WebExtAPIRef("history")}} foi adicionado. Isso fornece acesso a histórico do navegador, com metodos disponíveis para pesquisar no histórico, obtendo informações sobre páginas visitanas anteriormente, e adicionando e removendo entradas no históricos.
- Adicionado o metodo {{WebExtAPIRef("tabs.removeCSS()")}} para aba API. Esse metodo permite remover o CSS que foi anteriormente injetado por chamada {{WebExtAPIRef("tabs.insertCSS()")}}.

### Interfaces

- No {{domxref("EventTarget.addEventListener()")}}, o valor `mozSystemGroup`, ativa apenas com o código rodando no XBL ou no Firefox's chrome, e um {{jsxref("Boolean")}} que indica se o ouvinte foi adicionado ao grupo do sistema. ([Erro do Firefox 1274520](https://bugzil.la/1274520))

### Outros

_Sem mudanças!._

## Outras versões

{{Firefox_for_developers(48)}}
