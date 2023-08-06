---
title: Feature-Policy
slug: Web/HTTP/Headers/Permissions-Policy
---

{{HTTPSidebar}}

O cabeçalho HTTP **`Feature-Policy`** provê um mecanismo para permitir ou proibir o uso de funcionalidades do navegador no seu próprio enquadramento, e o conteúdo dentro de quaisquer elementos {{HTMLElement("iframe")}} no documento.

> **Nota:** Este cabeçalho ainda está em estado experimental, e é sujeito a mudança a qualquer momento. Tenha cautela quando implementando isso no seu site. O cabeçalho agora foi renomeado para `Permissions-Policy` na especificação, e este artigo irá eventualmente ser atualizado para refletir estas atualizações.

Para mais informação, veja o artigo principal [Policy Feature](/docs/Web/HTTP/Feature_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Feature-Policy: <directive> <allowlist>
```

- `<directive>`
  - : A diretiva Feature Policy que irá aplicar a `allowlist`. Veja [Diretivas](#diretivas) abaixo para a lista de nomes de diretivas.
- `<allowlist>`
  - : {{page("Web/HTTP/Feature_Policy/Using_Feature_Policy", "allowlist")}}

## Diretivas

- {{httpheader('Feature-Policy/accelerometer','accelerometer')}}
  - : Controla se o documento atual é permitido de coletar informação sobre a aceleração do dispositivo através da interface {{DOMxRef("Accelerometer")}}.
- {{httpheader('Feature-Policy/ambient-light-sensor','ambient-light-sensor')}}
  - : Controla se o documento atual é permitido de coletar informação sobre a quantidade de luz no ambiente ao redor do dispositivo através da interface {{DOMxRef("AmbientLightSensor")}}.
- {{httpheader('Feature-Policy/autoplay','autoplay')}}
  - : Controla se o documento atual é permitido de tocar a mídia requisitada automaticamente através da interface {{domxref("HTMLMediaElement")}}. Quando esta política é desabilitada e não há ação do usuário, o {{domxref("Promise")}} retornado pelo {{domxref("HTMLMediaElement.play()")}} irá rejeitar com uma {{domxref("DOMException")}}. O atributo _autoplay_ em elementos {{HTMLELement("audio")}} e {{HTMLElement("video")}} será ignorado.
- {{httpheader('Feature-Policy/battery','battery')}}
  - : Controla se o uso da [API de Status de Bateria](/docs/Web/API/Battery_Status_API) é permitido. Quando esta política está desabilitada, o {{JSxRef("Promise")}} retornado pelo{{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} irá rejeitar com um {{DOMxRef("NotAllowedError")}} {{DOMxRef("DOMException")}}.
- {{httpheader('Feature-Policy/camera', 'camera')}}
  - : Controla se o documento atual é permitido de usar entradas de dispositivos de vídeo. Quando esta política está desabilitada, o {{jsxref("Promise")}} retornado pelo {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} irá rejeitar com um {{DOMxRef("NotAllowedError")}} {{DOMxRef("DOMException")}}.
- {{HTTPHeader('Feature-Policy/display-capture', 'display-capture')}}
  - : Controla se o documento atual é permitido ou não de usar o método {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} para capturar conteúdos de tela. Quando esta política está desabilitada, a {{jsxref("Promise")}} retornada pelo `getDisplayMedia()` irá rejeitar com um `NotAllowedError` se a permissão não for obtida para capturar os conteúdos da tela.
- {{httpheader('Feature-Policy/document-domain','document-domain')}}
  - : Controle se o documento atual é permitido de colocar {{domxref("document.domain")}}. Quando esta política está desabilitada, tentativas em colocar {{domxref("document.domain")}} irão falhar e causar uma {{DOMxRef("SecurityError")}} {{domxref("DOMException")}} a ser jogada.
- {{httpheader('Feature-Policy/encrypted-media', 'encrypted-media')}}
  - : Controla se o documento atual é permitido de usar a API [Extensões de Mídias Encriptadas (_Encrypted Media Extensions_)](/pt-BR/docs/Web/API/Encrypted_Media_Extensions_API) (EME). Quando esta política é desabilitada, a {{domxref("Promise")}} retornada pelo {{domxref("Navigator.requestMediaKeySystemAccess()")}} irá rejeitar com um {{domxref("DOMException")}}.
- {{httpheader('Feature-Policy/execution-while-not-rendered', 'execution-while-not-rendered')}}
  - : Controla se as tarefas devem ser executadas em enquadramentos enquanto não são renderizados (e.g. se um enquadramento é [`hidden`](/pt-BR/docs/Web/HTML/Global_attributes/hidden) ou `display: none`).
- {{httpheader('Feature-Policy/execution-while-out-of-viewport', 'execution-while-out-of-viewport')}}
  - : Controla se as tarefas devem ser executadas em enquadramentos enquanto eles estão fora da janela de visualização visível.
- {{httpheader('Feature-Policy/fullscreen','fullscreen')}}
  - : Controla se o documento atual é permitido de usar {{DOMxRef("Element.requestFullScreen()")}}. Quando esta política está desabilitada, a {{JSxRef("Promise")}} retornada rejeita com um {{JSxRef("TypeError")}} {{DOMxRef("DOMException")}}.
- {{httpheader('Feature-Policy/geolocation','geolocation')}}
  - : Controla se o documento atual é permitido de usar a interface {{domxref('Geolocation')}}. Quando a política está desabilitada, chamadas para {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} e {{domxref('Geolocation.watchPosition','watchPosition()')}} irão causar aos _callbacks_ da funções serem invocados com um {{domxref('PositionError')}} de `PERMISSION_DENIED`.
- {{httpheader('Feature-Policy/gyroscope','gyroscope')}}
  - : Controla se o documento atual é permitido de coletar informação sobre a orientação do dispositivo através da interface {{DOMxRef("Gyroscope")}}.
- {{httpheader('Feature-Policy/layout-animations','layout-animations')}}
  - : Controla se o documento atual é permitido de mostrar animações de _layout_.
- {{httpheader('Feature-Policy/legacy-image-formats','legacy-image-formats')}}
  - : Controla se o documento atual é permitido de mostrar imagens em formatos legados.
- {{httpheader('Feature-Policy/magnetometer','magnetometer')}}
  - : Controla se o documento atual é permitido de coletar informação sobre a orientação do dispositivo através da interface {{DOMxRef("Magnetometer")}}.
- {{httpheader('Feature-Policy/microphone','microphone')}}
  - : Controla se o documento atual é permitido de usar entradas de dispositivos de áudio. Quando esta política está desabilitada, a {{jsxref("Promise")}} retornada pelo {{domxref("MediaDevices.getUserMedia()")}} irá rejeitar com um `NotAllowedError`.
- {{httpheader('Feature-Policy/midi', 'midi')}}
  - : Controla se o documento atual é permitido de usar a [API Web MIDI](/pt-BR/docs/Web/API/Web_MIDI_API). Quando esta política está desabilitada, a {{jsxref("Promise")}} retornada pelo {{domxref("Navigator.requestMIDIAccess()")}} irá rejeitar com um {{domxref("DOMException")}}.
- {{httpheader('Feature-Policy/navigation-override','navigation-override')}}
  - : Controla a disponibilidade de mecanismos que habilitam o autor da página a tomar controle sobre o comportamento da [navegação espacial (spatial navigation)](https://www.w3.org/TR/css-nav/), ou cancelar completamente.
- {{httpheader('Feature-Policy/oversized-images','oversized-images')}}
  - : Controla se o documento atual é permitido de baixar e mostrar imagens grandes.
- {{httpheader('Feature-Policy/payment', 'payment')}}
  - : Controla se o documento atual permite o uso da [API de Requisição de Pagamento (_Payment Request API_)](/pt-BR/docs/Web/API/Payment_Request_API). Quando esta política está desabilitada, o construtor {{domxref("PaymentRequest","PaymentRequest()")}} irá jogar um `SecurityError` {{domxref("DOMException")}}.
- {{httpheader('Feature-Policy/picture-in-picture', 'picture-in-picture')}}
  - : Controla se o documento atual permite que um vídeo seja permitido tocar no modo _Picture-in-Picture_ através da API correspondente.
- {{httpheader("Feature-Policy/publickey-credentials-get", "publickey-credentials-get")}}
  - : Controla se o documento atual é permitido de usar a [API de Autenticação Web](/pt-BR/docs/Web/API/Web_Authentication_API) para resgatar credenciais de chave pública já guardadas, i.e. através do {{domxref("CredentialsContainer.get","navigator.credentials.get({publicKey: ..., ...})")}}.
- {{httpheader('Feature-Policy/sync-xhr', 'sync-xhr')}}
  - : Controla se o documento atual é permitido de fazer requisições síncronas {{DOMxRef("XMLHttpRequest")}}.
- {{httpheader('Feature-Policy/usb', 'usb')}}
  - : Controla se o documento atual é permitido de usar a [API WebUSB](https://wicg.github.io/webusb/).
- {{httpheader('Feature-Policy/vr', 'vr')}} {{deprecated_inline}}
  - : Controla se o documento atual é permitido de usar a [API WebVR](/pt-BR/docs/Web/API/WebVR_API). Quando esta política é desabilitada, o {{jsxref("Promise")}} retornado pelo {{domxref("Navigator.getVRDisplays","Navigator.getVRDisplays()")}} irá rejeitar com um {{domxref("DOMException")}}. Tenha em mente que o padrão WebVR está em processo de ser substituído pelo [WebXR](/pt-BR/docs/Web/API/WebXR_Device_API).
- {{httpheader('Feature-Policy/wake-lock', 'wake-lock')}}
  - : Controla se o documento atual é permitido de usar a [API Wake Lock](https://www.w3.org/TR/wake-lock/) para indicar que o dispositivo não deve entrar em modo de economia de energia.
- {{httpheader('Feature-Policy/screen-wake-lock', 'screen-wake-lock')}}
  - : Controla se o documento atual é permitido de utilizar a [API Screen Wake Lock](/pt-BR/docs/Web/API/Screen_Wake_Lock_API) para indicar se o dispositivo deve ou não escurecer a tela.
- {{httpheader("Feature-Policy/xr-spatial-tracking", "xr-spatial-tracking")}}
  - : Controla se o documento atual é permitido ou não de usar a [API WebXR Device](/pt-BR/docs/Web/API/WebXR_Device_API) para intergir com a sessão WebXR.

## Exemplos

SecureCorp Inc. quer desabilitar o Microfone e as APIs de Geolocalização em sua aplicação. Isso pode ser feito entregando o seguinte cabeçalho de resposta HTTP para definir a política de funcionalidade:

```
Feature-Policy: microphone 'none'; geolocation 'none'
```

Especificando a palavra-chave `'none'` para a lista de origem, as funcionalidades especificadas serão desabilitadas para todos os contextos de navegaçnao (incluindo todos os _iframes_), independente da origem.

## Especificações

| Especificação                                                                               | Status                      | Comentário |
| ------------------------------------------------------------------------------------------- | --------------------------- | ---------- |
| {{SpecName("Feature Policy","#permissions-policy-http-header-field","Permissions-Policy")}} | {{Spec2("Feature Policy")}} |            |

## Compatibilidade com navegadores

{{Compat("http.headers.Feature-Policy")}}

## Veja também

- [Feature Policy](/pt-BR/docs/Web/HTTP/Feature_Policy)
- [Usando Feature Policy](/pt-BR/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- {{DOMxRef("Document.featurePolicy")}} and {{DOMxRef("FeaturePolicy")}}
- [Feature-Policy Tester (Chrome Developer Tools extensão)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
