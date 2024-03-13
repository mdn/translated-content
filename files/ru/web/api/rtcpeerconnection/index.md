---
title: Интерфейс RTCPeerConnection
slug: Web/API/RTCPeerConnection
---

{{APIRef('WebRTC')}}

Интерфейс **`RTCPeerConnection`** представляет соединение WebRTC между локальным пиром (участником соединения) на локальном компьютере и удалённым пиром на удалённом компьютере. Он предоставляет методы для соединения с удалённым участником соединения, обслуживания, мониторинга и закрытия соединения.

{{InheritanceDiagram}}

### Устаревший метод

Метод ниже, является устаревшим и не будет в дальнейшем реализован в современных браузерах.

- {{domxref("RTCPeerConnection.createDTMFSender()")}}
  - : Создаёт новый объект типа {{domxref("RTCDTMFSender")}}, связанный с определённым объектом {{domxref("MediaStreamTrack")}}, который сможет отправить объект сигнализации {{Glossary("DTMF")}} поверх соединения..

## События

Для обработки событий используется функция добавления обработчика события {{domxref("EventTarget.addEventListener", "addEventListener()")}} или используется стандартное свойство интерфейса по схеме `onимясобытия` (префикс **on** к которому добавляется имя события прописными буквами) для установки обработчика события.

- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : Событие объекта `RTCPeerConnection` возникает, когда общий статус объекта соединения `RTCPeerConnection` изменился.
    Так же, доступно через свойство установки обработчика события {{domxref("RTCPeerConnection.onconnectionstatechange", "onconnectionstatechange")}}.
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : Событие объекта `RTCPeerConnection` возникает, когда удалённый пир (участник соединения) добавляет объект данных {{domxref("RTCDataChannel")}} в текущее соединение.
    Так же, доступно через свойство установки обработчика события {{domxref("RTCPeerConnection.ondatachannel", "ondatachannel")}}.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : Событие объекта `RTCPeerConnection` возникает, когда специальный объект ICE кандидата ([RTCIceCandidate](/ru/docs/Web/API/RTCIceCandidate)) сгенерирован `RTCPeerConnection` и готов для передачи удалённому пиру по каналу сигнализации.Сам сгенерированный объект кандидата передаётся в параметр вызванного обработчика.
    Так же, доступно через свойство установки обработчика события {{domxref("RTCPeerConnection.onicecandidate", "onicecandidate")}}.
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : Событие типа ошибки {{domxref("RTCPeerConnectionIceErrorEvent")}} , возникает на объекте соединения при генерации ICE кандидата ([RTCIceCandidate](/ru/docs/Web/API/RTCIceCandidate)), если при этом возникла ошибка. Свойства объекта ошибки, возвращаемого в обработчик, описывают подробности ошибки.
    Так же, доступно через свойство установки обработчика события {{domxref("RTCPeerConnection.onicecandidateerror", "onicecandidateerror")}}.
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : Событие объекта `RTCPeerConnection` возникает при изменении статуса ICE соединения. К примеру, [ICE](/ru/docs/Glossary/ICE) соединение разорвано.
    Так же, доступно через свойство установки обработчика события{{domxref("RTCPeerConnection.oniceconnectionstatechange", "oniceconnectionstatechange")}} .
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : Событие объекта `RTCPeerConnection,` возникает, когда статус сборки, представленный классом {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}, изменяется. Это указывает на то, что : согласование соединения ICE ещё не началось (статус равен значению "`new`"); согласование соединения ICE началось (статус равен значению "`gathering`"); согласование ICE соединения завершено (статус равен значению "`complete`").
    Так же, доступно через свойство установки обработчика {{domxref("RTCPeerConnection.onicegatheringstatechange", "onicegatheringstatechange")}} .
- {{domxref("RTCPeerConnection.isolationchange_event", "isolationchange")}}
  - : Событие объекта `RTCPeerConnection` возникает, когда свойство {{domxref("MediaStreamTrack.isolated", "isolated")}} на одном из объектов {{domxref("MediaStreamTrack")}} , связанного с соединением изменяет своё значение. Объект трека является изолированным {{domxref("MediaStreamTrack.isolated", "isolated")}}, если его содержимое не может быть доступно содержащему его документу, по причине невозможности аутентификации, или объект трека прибыл не из источника происхождения страницы.
    Так же, доступно через свойство установки обработчика {{domxref("RTCPeerConnection.onisolationchange", "onisolationchange")}}.
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Событие объекта `RTCPeerConnection` возникает, когда необходимо запустить согласование (пересогласование) ICE соединения; может произойти при первом открытии соединения , или при необходимости принятия изменений условий сети. Получатель должен ответить, создав предложение и отправив его другому партнёру.
    Так же, доступно через свойство установки обработчика {{domxref("RTCPeerConnection.onnegotiationneeded", "onnegotiationneeded")}}.
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : Событие `signalingstatechange` возникает, когда статус сигнализации ICE соединения изменился..
    Так же, доступно через свойство установки обработчика {{domxref("RTCPeerConnection.onsignalingstatechange", "onsignalingstatechange")}}.
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : Событие `track` возникает после того, как новый объект трека был добавлен в один из объектов интерфейса {{domxref("RTCRtpReceiver")}} , которые входят в состав соединения.
    Так же, доступно через свойство установки обработчика {{domxref("RTCPeerConnection.ontrack", "ontrack")}} .

### Устаревшие события

- {{domxref("RTCPeerConnection.addstream_event", "addstream")}}
  - : Возникает, когда новый объект {{domxref("MediaStream")}} был добавлен в соединение. Вместо наблюдения за этим устаревшим событием, разработчику следует наблюдать за каждым событием {{domxref("RTCPeerConnection.track_event", "track")}}, возникающим при добавлении в соединение объекта {{domxref("MediaStreamTrack")}}..
    Установка обработчика возможна через свойство {{domxref("RTCPeerConnection.onaddstream", "onaddstream")}} .
- {{domxref("RTCPeerConnection.identityresult_event", "identityresult")}}
  - : В старой версии спецификации WebRTC это событие использовалось для указания доступности подтверждения идентичности. Теперь, следует ждать возвращение промиса от {{domxref("RTCPeerConnection.peerIdentity", "peerIdentity")}} для подтверждения личности.
    Установка обработчика возможна через свойство {{domxref("RTCPeerConnection.onidentityresult", "onidentityresult")}}.
- {{domxref("RTCPeerConnection.idpassertionerror_event", "idpassertionerror")}}
  - : В старой версии спецификации WebRTC это событие использовалось для определения возникшей ошибки при попытке генерации подтверждения идентичности. Теперь, нужно ожидать результата работы промиса, возвращаемого методом доступа {{domxref("RTCPeerConnection.peerIdentity", "peerIdentity")}} , передающий в метод перехвата ошибок промиса, возникшую ошибку.
    Установка обработчика возможна через свойство {{domxref("RTCPeerConnection.onidpassertionerror", "onidpinsertionerror")}}..
- {{domxref("RTCPeerConnection.idpvalidationerror_event", "idpvalidationerror")}}
  - : В старой версии спецификации WebRTC это событие использовалось для определения того, что ошибка возникла при попытке подтверждения идентичности. Теперь, следует ожидать результат работы промиса, возвращаемого методом доступа {{domxref("RTCPeerConnection.peerIdentity", "peerIdentity")}}, для перехвата ошибки в соответствующем методе.
    Установка обработчика возможна через свойство {{domxref("RTCPeerConnection.onpeeridentity", "onpeerdentity")}} .
- {{domxref("RTCPeerConnection.peeridentity_event", "peeridentity")}}
  - : В старой версии спецификации WebRTC это событие использовалось для доставки полученной идентичности. Теперь, нужно ожидать результата работы промиса, возвращаемого методом доступа {{domxref("RTCPeerConnection.peerIdentity", "peerIdentity")}}, для получения идентичности.
- {{domxref("RTCPeerConnection.removestream_event", "removestream")}}
  - : Возникает на объекте `RTCPeerConnection`, когда объект {{domxref("MediaStream")}} удаляется из соединения. Теперь, необходимо наблюдать за событиями {{domxref("MediaStream.removetrack_event", "removetrack")}} на каждом потоке, входящем в состав объекта соединения `RTCPeerConnection`.
    Установка обработчика возможна через свойство {{domxref("RTCPeerConnection.onremovestream", "onaddstream")}} .

## Константы

### Перечисление RTCBundlePolicy

Перечисление `RTCBundlePolicy` (политика сборки пакетов) определяет строковые константы, которые используются для запроса определённой политики при сборке ICE кандидатов, в случае, если удалённый участник соединения (удалённая точка) не совместим со стандартом [SDP BUNDLE standard](https://webrtcstandards.info/sdp-bundle/) для объединения нескольких медиапотоков в один транспортный пакет.

> **Примечание:** В технических терминах BUNDLE (пакет) позволяет всем медиапотокам между двумя пирами проходить через один 5 - ти элементный кортеж (тип транспортного протокола передачи сообщений при установки TCP, UDP, и ICMP соединений, состоящий из пяти элементов анализа данных). То есть, с одного IP-адреса и порта на одном узле на один IP-адрес и порт на другом узле с использованием одного и того же транспортного протокола.

| Константа      | Описание                                                                                                                                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"balanced"`   | Сбалансированный. Агент ICE изначально создаёт по одному объекту {{domxref ("RTCDtlsTransport")}} для каждого типа добавляемого контента: аудио, видео и каналов данных. Если удалённая конечная точка не опознает пакеты, то каждый из этих DTLS транспортов обрабатывает все коммуникации для одного типа данных. |
| `"max-compat"` | Максимально совместимый. Агент ICE изначально создаёт один объект {{domxref ("RTCDtlsTransport")}} для каждой медиа-дорожки и отдельный для каналов данных. Если удалённая точка не поддерживает опознавание пакета, все согласовывается на этих отдельных DTLS транспортах                                         |
| `"max-bundle"` | Максимальный пакет. Агент ICE изначально создаёт только один объект {{domxref ("RTCDtlsTransport")}} для переноса всех данных RTCPeerConnection. Если удалённая точка не поддерживает опознавание пакета, то согласовывается только одна дорожка, а остальные игнорируются.                                         |

### Перечисление RTCIceConnectionState

Перечисление `RTCIceConnectionState` определяет строковые константы, использующиеся для описания текущего состояния ICE агента и его соединения с ICE сервером {{Glossary("STUN")}} или {{Glossary("TURN")}} .

| Константа        | Описание                                                                                                                                                                                                                                                                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`          | ICE агент собирает адреса или ожидает получения удалённых кандидатов от вызова метода {{domxref("RTCPeerConnection.addIceCandidate()")}}. Или все сразу.                                                                                                                                                                                                  |
| `"checking"`     | ICE агент получил один или несколько удалённых кандидатов и проверяет парность локального и удалённого кандидатов относительно друг друга, пытаясь обнаружить совместимости. Но ещё не обнаружил пару, соответствующую устанавливаемому удалённому соединению.Не исключено, что сборка кандидатов продолжиться.                                           |
| `"connected"`    | Совместимая парность локального и удалённого кандидатов найдена для всех компонентов соединения, и соединение было установлено. Не исключено продолжение сборки и проверки кандидатов в процессе соединения, для наилучший совместимости.                                                                                                                 |
| `"completed"`    | Агент ICE завершил сбор кандидатов, проверил все пары относительно друг друга, и установил все соединения для всех компонентов.                                                                                                                                                                                                                           |
| `"failed"`       | Агент ICE проверил все пары кандидатов между собой и не нашёл совместимых сопоставлений для всех компонентов соединения. Или не нашёл совместимых соединений для некоторых компонентов.                                                                                                                                                                   |
| `"disconnected"` | Проверяет, что компоненты все ещё подключены, хотя бы для одного объекта {{domxref("RTCPeerConnection")}}. Это менее строгий тест, чем `"failed"`, и он может периодически запускаться и разрешаться спонтанно в менее надёжных сетях, или во время временного отключения. Когда проблема исчезнет, соединение может вернуться в состояние `"connected".` |
| `"closed"`       | ICE агент закрыл соединение для объекта {{domxref("RTCPeerConnection")}} и больше не обрабатывает запросы.                                                                                                                                                                                                                                                |

### Перечисление RTCIceGatheringState

Перечисление `RTCIceGatheringState` определяет строковые константы, которые описывают текущий статус ICE сборки, возвращаемый свойством {{domxref("RTCPeerConnection.iceGatheringState")}}. Для определения изменения этого свойства можно подписаться на событие {{event("icegatheringstatechange")}}.

| Константы     | Описание                                                                                                                                                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`       | Соединение только что создано, и ещё не имело сетевой активности.                                                                                                                                                                      |
| `"gathering"` | Агент ICE находиться в процессе сборки кандидатов соединения.                                                                                                                                                                          |
| `"complete"`  | Агент ICE завершил сборку кандидатов. Если произойдёт, что-то (например, добавление нового ICE сервера), для чего потребуется новая сборка кандидатов, статус переключиться в значение "`gathering`" и начнётся пересборка кандидатов. |

### Перечисление RTCIceTransportPolicy

Перечисление `RTCIceTransportPolicy` определяет строковые константы, использующиеся для ограничения политик передачи ICE кандидатов, учитывающихся во время процесса соединения..

| Константа  | Описание                                                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `"all"`    | Все ICE кандидаты будут рассмотрены.                                                                                             |
| `"public"` | Будут рассматриваться ICE кандидаты, только имеющие публичные IP адреса. _Удалён в спецификации от 13 мая 2016 (working draft)._ |
| `"relay"`  | Будут рассматриваться ICE кандидаты, только с переданными IP адресами через TURN сервер.                                         |

### Перечисление RTCPeerConnectionState

Перечисление `RTCPeerConnectionState` определяет строковые константы, описывающие статус `RTCPeerConnection`. Эти значения возвращаются свойством (методом доступа) {{domxref("RTCPeerConnection.connectionState", "connectionState")}} . Этот статус представляет собирательный статус всех ICE передач (которые имеют тип {{domxref("RTCIceTransport")}} или {{domxref("RTCDtlsTransport")}}) , использующиеся соединением.

| Константа        | Описание                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`          | Новый. По меньшей мере один из объектов ICE передачи ({{domxref("RTCIceTransport")}} или {{domxref("RTCDtlsTransport")}} ) в соединении находиться в статусе `"new"` и ни один из них не находиться в одном из перечисленных статусов : `"connecting"`, `"checking"`, `"failed"`, или `"disconnected"`, или все объекты передач соединения находятся в статусе `"closed"`. |
| `"connecting"`   | В процессе соединения. Один или несколько объектов ICE передачи находятся в процессе установки соединения. Т.е. их свойство `RTCIceConnectionState` либо имеет значение `"checking"` , либо `"connected"`, и ни один из объектов передачи не находиться в статусе `"failed"` . **<<< Make this a link once I know where that will be documented**                          |
| `"connected"`    | Соединён. Каждый объект ICE передачи, использующийся соединением либо используется (имеет статус `"connected"` или `"completed"`) , либо закрыт (имеет статус `"closed"`); кроме того, по крайней мере один объект передачи имеет статус либо `"connected"` , либо `"completed"`.                                                                                          |
| `"disconnected"` | Разъединён. По меньшей мере один из объектов ICE передачи в соединении имеет статус `"disconnected"` и ни один из объекто передачи не находиться в статусе : `"failed"`, `"connecting"`, или `"checking"`.                                                                                                                                                                 |
| `"failed"`       | Неудачно. Один или несколько объектов передачи могут находиться в статусе `"failed"`.                                                                                                                                                                                                                                                                                      |
| `"closed"`       | Закрыто. Соединение `RTCPeerConnection` закрыто.Ранее входило в значения перечисления [`RTCSignalingState`](#RTCSignalingState_enum) (и поэтому может быть найдено в свойстве {{domxref("RTCPeerConnection.signalingState", "signalingState")}}) до 13 мая, 2016.                                                                                                          |

### Перечисление RTCRtcpMuxPolicy

Перечисление `RTCRtcpMuxPolicy` содержит строковые константы, определяющие , что собираемые кандидаты должны иметь поддержку немультиплексированного RTCP . **<<\<add a link to info about multiplexed RTCP.**

| Константа     | Описание                                                                                                                                                                                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"negotiate"` | Instructs the ICE agent to gather both {{Glossary("RTP")}} and {{Glossary("RTCP")}} candidates. If the remote peer can multiplex RTCP, then RTCP candidates are multiplexed atop the corresponding RTP candidates. Otherwise, both the RTP and RTCP candidates are returned, separately. |
| `"require"`   | Tells the ICE agent to gather ICE candidates for only RTP, and to multiplex RTCP atop them. If the remote peer doesn't support RTCP multiplexing, then session negotiation fails.                                                                                                        |

### Перечисление RTCSignalingState

Перечисление `RTCSignalingState` определяет возможные значения состояния сигнализирования {{domxref("RTCPeerConnection.signalingState")}}, указывая в каком месте процесса сигнализации в настоящее время находиться обмен предложением или ответом.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Константа</th>
      <th scope="col">Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"stable"</code></td>
      <td>
        <p>
          Стабильно. Текущего процесса обмена предложения/ответ не происходит.
          Это может означать, что объект соединения
          {{domxref("RTCPeerConnection")}} новый, и в этом случае
          объекты описания
          {{domxref("RTCPeerConnection.localDescription", "localDescription")}}
          и
          {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}}
          имеют значения <code>null</code>; Так же, может означать, что
          согласование завершено и соединение успешно установлено.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>"have-local-offer"</code></td>
      <td>
        Имеет локальное предложение. Локальный пир вызвал метод
        {{domxref("RTCPeerConnection.setLocalDescription()")}},
        передав в него объект описания SDP , представляющий предложение (обычно,
        созданного вызовом метода
        {{domxref("RTCPeerConnection.createOffer()")}}), и это
        предложение было успешно применено.
      </td>
    </tr>
    <tr>
      <td><code>"have-remote-offer"</code></td>
      <td>
        Имеет удалённое предложение. Удалённый пир создал предложение,
        использовал сервер сигнализации для передачи этого предложения
        локальному пользователю, которое было установлено им в параметр, через
        вызов метода
        {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
      </td>
    </tr>
    <tr>
      <td><code>"have-local-pranswer"</code></td>
      <td>
        Имеет локальный предварительный ответ. Предложение удалённого пира было
        применено, и ответ был создан (обычно, через вызов метода
        {{domxref("RTCPeerConnection.createAnswer()")}}) и
        использовано в параметре метода установки локального дескриптора
        {{domxref("RTCPeerConnection.setLocalDescription()")}}.
        Этот предварительный ответ описывает поддерживаемые медиа форматы и тому
        подобное. Но он не имееет включённых в него полного набора ICE
        кандидатов. Позже, дополнительные кандидаты будут доставлены отдельно.
      </td>
    </tr>
    <tr>
      <td><code>"have-remote-pranswer"</code></td>
      <td>
        Имеет предварительный удалённый ответ. Предварительный удалённый ответ
        был получен и успешно применён в ответ на предложение, отправленное
        ранее и установленное методом <code>setLocalDescription()</code>.
      </td>
    </tr>
    <tr>
      <td><code>"closed"</code></td>
      <td>
        <p>Закрыто. Соединение закрыто.</p>
        <div class="note">
          <p>
            <strong>Примечание :</strong> Это значение перенесено в перечисление
            <a href="#RTCPeerConnectionState_enum"
              ><code>RTCPeerConnectionState</code></a
            >
            в черновике от 13 мая 2016, поскольку оно отражает статус соединения
            <code>RTCPeerConnection</code>, а не статус сигнализации. Теперь,
            для проверки закрытия соединения нужно проверять статус
            {{domxref("RTCPeerConnection.connectionState", "connectionState")}}
            на значение <code>"closed"</code> .
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- <http://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple>
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML5 video capture, peer-to-peer video and filesharing application ([source on GitHub](https://github.com/chrisjohndigital/TutorRoom))
