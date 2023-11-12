---
title: WebRTC API
slug: Web/API/WebRTC_API
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communications) - это технология, которая позволяет Web-приложениям и сайтам захватывать и выборочно передавать аудио и/или видео медиа-потоки, а также обмениваться произвольными данными между браузерами, без обязательного использования посредников. Набор стандартов, которые включает в себя технология WebRTC, позволяет обмениваться данными и проводить пиринговые телеконференции, без необходимости пользователю устанавливать плагины или любое другое стороннее программное обеспечение.

WebRTC состоит из нескольких взаимосвязанных программных интерфейсов (API) и протоколов, которые работают вместе. Документация, которую вы здесь найдёте, поможет вам понять основы WebRTC, как настроить и использовать соединение для передачи данных и медиа-потока, и многое другое.

## Совместимость

Поскольку реализация WebRTC находится в процессе становления, и каждый браузер имеет [различный уровень поддержки кодеков](/ru/docs/Web/Media/Formats/WebRTC_codecs) и WebRTC функций, настоятельно рекомендуется использовать полифил-библиотеку [Adapter.js](https://github.com/webrtcHacks/adapter) от Google до начала работы над вашим кодом.

Adapter.js использует клинья и полифилы для гладкой стыковки различий в реализациях WebRTC среди контекстов, его поддерживающих. Adapter.js также обрабатывает префиксы производителей и иные различия именования свойств, облегчая процесс разработки на WebRTC с наиболее совместимым результатом. Библиотека также доступна как [NPM пакет](https://www.npmjs.com/package/webrtc-adapter).

Для дальнейшего изучения библиотеки Adapter.js смотрите [Улучшаем совместимость при использовании WebRTC adapter.js](/ru/docs/Web/API/WebRTC_API/adapter.js).

## Понятия и использование WebRTC

WebRTC является многоцелевым и вместе с [Media Capture and Streams API](/ru/docs/Web/API/Media_Streams_API), предоставляют мощные мультимедийные возможности для Web, включая поддержку аудио и видео конференций, обмен файлами, захват экрана, управление идентификацией и взаимодействие с устаревшими телефонными системами, включая поддержку передачи сигналов тонового набора {{Glossary("DTMF")}}. Соединения между узлами могут создаваться без использования специальных драйверов или плагинов, и часто без промежуточных сервисов.

Соединение между двумя узлами представлено как объект интерфейса {{DOMxRef("RTCPeerConnection")}}. Как только соединение установлено и открыто, используя объект `RTCPeerConnection`, медиапотоки ({{DOMxRef("MediaStream")}}s) и/или каналы данных ({{DOMxRef("RTCDataChannel")}}s) могут быть добавлены в соединение.

Медиа потоки могут состоять из любого количества треков (дорожек) медиаинформации. Эти треки, представлены объектами интерфейса {{DOMxRef("MediaStreamTrack")}} , и могут содержать один или несколько типов медиаданных, включая аудио, видео, текст (такие как субтитры или название глав). Большинство потоков состоят, как минимум, только из одного аудио трека (одной аудио дорожки), или видео дорожки, и могут быть отправлены и получены, как потоки (медиаданные в настоящим времени) или сохранены в файл.

Так же, можно использовать соединение между двумя узлами для обмена произвольными данными, используя объект интерфейса {{DOMxRef("RTCDataChannel")}}, что может быть использовано для передачи служебной информации, биржевых данных , пакетов игровых статусов, передача файлов или закрытых каналов передачи данных.

_**more details and links to relevant guides and tutorials needed**_

## WebRTC интерфейсы

По причине того, что WebRTC предоставляет интерфейсы, работающие совместно для выполнения различных задач, мы разделили их на категории. Смотрите алфавитный указатель боковой панели для быстрой навигации.

### Настройка соединения и управление

Эти интерфейсы используются для настройки, открытия и управлением WebRTC соединениями. Они представляют одноуровневые медиа соединения, каналы данных, и интерфейсы, использующиеся при обмене информацией о возможностях каждого узла, для выбора наилучшей конфигурации при установки двустороннего мультимедийного соединения.

- {{domxref("RTCPeerConnection")}}
  - : Представляет WebRTC соединение между локальным компьютером и удалённым узлом. Используется для обработки успешной передачи данных между двумя узлами.
- {{domxref("RTCSessionDescription")}}
  - : Представляет параметры сессии. Каждый `RTCSessionDescription` содержит описания [типа](/ru/docs/Web/API/RTCSessionDescription/type), показывающего какую часть (предложение/ответ) процесса переговоров он описывает, и [SDP](/ru/docs/Glossary/SDP)-дескриптор сессии`.`
- {{domxref("RTCIceCandidate")}}
  - : Представляет собой кандидата сервера установки интернет соединения (ICE) для установленовки соединения {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCIceTransport")}}
  - : Представляет информацию о средстве подключения к Интернету (ICE).
- {{domxref("RTCPeerConnectionIceEvent")}}
  - : Представляет события, которые происходят в отношении кандидатов ICE, обычно {{domxref ("RTCPeerConnection")}}. Один тип передаётся данному объекту события: {{event ("icecandidate")}}.
- {{domxref("RTCRtpSender")}}
  - : Управляет кодированием и передачей данных через объект типа {{domxref("MediaStreamTrack")}} для объекта типа {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCRtpReceiver")}}
  - : Управляет получением и декодированием данных через объект типа {{domxref("MediaStreamTrack")}} для объекта типа {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCTrackEvent")}}
  - : Указывает на то, что новый входящий объект типа {{domxref("MediaStreamTrack")}} был создан и объект типа {{domxref("RTCRtpReceiver")}} был добавлен в объект {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCCertificate")}}
  - : Представляет сертификат, который использует объект {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCDataChannel")}}
  - : Представляет двунаправленный канал данных между двумя узлами соединения.
- {{domxref("RTCDataChannelEvent")}}
  - : Представляет события, которые возникают при присоединении объекта типа {{domxref("RTCDataChannel")}} к объекту типа {{domxref("RTCPeerConnection")}}. Один тип передаётся этому событию {{event("datachannel")}}.
- {{domxref("RTCDTMFSender")}}
  - : Управляет кодированием и передачей двухтональной мультичастотной (DTMF) сигнализацией для объекта типа {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCDTMFToneChangeEvent")}}
  - : Указывает на входящее событие изменение тона двутоновой мультичастотной сигнализации (DTMF). Это событие не всплывает (если не указано иначе) и не является отменяемым (если не указано иначе).
- {{domxref("RTCStatsReport")}}
  - : Асинхронно сообщает статус для переданного объекта типа {{domxref("MediaStreamTrack")}} .
- {{domxref("RTCIdentityProviderRegistrar")}}
  - : Регистрирует провайдер идентификации (idP).
- {{domxref("RTCIdentityProvider")}}
  - : Активирует возможность браузеру запросить создание или проверку объявления идентификации.
- {{domxref("RTCIdentityAssertion")}}
  - : Представляет идентификатор удалённого узла текущего соединения. Если узел ещё не установлен и подтверждён, ссылка на интерфейс вернёт `null`. После установки не изменяется.
- {{domxref("RTCIdentityEvent")}}
  - : Представляет объект события объявление идентификатора провайдером идентификации (idP). Событие объекта типа {{domxref("RTCPeerConnection")}}. Один тип передаётся этому событию {{event("identityresult")}}.
- {{domxref("RTCIdentityErrorEvent")}}
  - : Представляет объект события ошибки, связанной с провайдером идентификации (idP). Событие объекта типа {{domxref("RTCPeerConnection")}}. Два типа ошибки передаются этому событию : {{event("idpassertionerror")}} и {{event("idpvalidationerror")}}.

## Руководства

- [Обзор архитектуры WebRTC](/ru/docs/Web/API/WebRTC_API/Architecture)
  - : Под API, который применяют разработчики, чтобы создавать и использовать WebRTC, расположен набор сетевых протоколов и стандартов соединения. Этот обзор - витрина этих стандартов.
- [Жизнь WebRTC-сессии](/ru/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC позволяет вам организовать соединение в режиме узел-узел для передачи произвольных данных, аудио-, видео-потоков или любую их комбинацию в браузере. В этой статье мы взглянем на жизнь WebRTC-сессии, начиная с установки соединения и пройдём весь путь до его завершения, когда оно больше не нужно.
- [Обзор WebRTC API](/ru/docs/Web/API/WebRTC_API/Overview)
  - : WebRTC состоит из нескольких взаимосвязанных программных интерфейсов (API) и протоколов, которые работают вместе, чтобы обеспечить поддержку обмена данными и медиа-потоками между двумя и более узлами. В этой статье представлен краткий обзор каждого из этих API и какую цель он преследует.
- [Основы WebRTC](/ru/docs/Web/API/WebRTC_API/WebRTC_basics)
  - : Эта статья проведёт вас через создание кросс-браузерного RTC-приложения. К концу этой статьи вы должны иметь работающий дата- и медиа-канал, работающий в режиме точка-точка.
- [Протоколы WebRTC](/ru/docs/Web/API/WebRTC_API/Protocols)
  - : В этой статье представлены протоколы, в дополнение к которым создан API WebRTC.

<!---->

- [Использование каналов данных в WebRTC](/ru/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Это руководство описывает как вы можете использовать соединение узел-узел и связанный {{domxref("RTCDataChannel")}} для обмена произвольными данными между двумя узлами.

<!---->

- [Взаимосвязи WebRTC](/ru/docs/Web/API/WebRTC_API/Connectivity)
  - : В этой статье описано то, как протоколы, связанные с WebRTC, взаимодействуют друг с другом для того, чтобы создать соединение и передавать данные и/или медиа-потоки между узлами.

## Учебные материалы

- [Увеличение совместимости, используя WebRTC adapter.js](/ru/docs/Web/API/WebRTC_API/adapter.js)
  - : Организация WebRTC [предлагает на GitHub библиотеку adapter.js](https://github.com/webrtc/adapter/) для решения вопросов совместимости WebRTC реализаций в различных браузерах. Эта библиотека является JavaScript клином, который позволяет писать код, согласно спецификации, так, что бы он просто взял, и заработал во всех браузерах с поддержкой WebRTC, не смотря на проблемы совместимости браузеров.
- [Захват кадров с WebRTC](/ru/docs/Web/API/WebRTC_API/Taking_still_photos)
  - : Статья описывает как использовать WebRTC для получения доступа к камере на компьютере или мобильном устройстве с поддержкой WebRTC, и захват кадров с его помощью.
- [Простой пример канала данных RTCDataChannel](/ru/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Интерфейс {{domxref("RTCDataChannel")}} - это функциональность, которая позволяет открыть канал передачи данных между двумя узлами, по которому можно предавать произвольные данные. Эти API намеренно подобны [WebSocket API](/ru/docs/Web/API/WebSocket_API), так, что бы в обоих могла использоваться единая модель программирования.
- [Сигнализация и двухсторонние видео вызовы](/ru/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Например, мы берём чат на веб сокете, который мы создали в другом примере, и добавляем в него способность создавать видео вызовы. Сервер чата расширяется функциональностью обработки WebRTC сигнализации.

## Ресурсы

### Протоколы

#### WebRTC- текущие протоколы

- [Протокол согласования соединения для Web RTC](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-alpn/)
- [WebRTC Аудио кодек и требования к обработке](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-audio/)
- [RTCWeb Каналы данных](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-channel/)
- [RTCWeb Протокол канала данных](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-protocol/)
- [Связь в реальном времени (WebRTC): Медиа транспорт и использование RTP](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-rtp-usage/)
- [WebRTC Безопасная архитектура](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-security-arch/)
- [Транспорты для RTCWEB](http://datatracker.ietf.org/doc/draft-ietf-rtcweb-transports/)

#### Связанные поддерживающие протоколы

- [Установка интерактивной связи (ICE): Протокол обхода транслятора сетевых адресов (NAT) при доставки объектов Offer/Answer](https://tools.ietf.org/html/rfc5245)
- [Сети обхода NAT (STUN)](https://tools.ietf.org/html/rfc5389)
- [Схема URI для протокола сетей обхода NAT (STUN)](https://tools.ietf.org/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://tools.ietf.org/html/rfc7065)
- [An Offer/Answer Model with Session Description Protocol (SDP)](https://tools.ietf.org/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization](https://datatracker.ietf.org/doc/draft-ietf-tram-turn-third-party-authz/)

#### WebRTC статистика

- [WebRTC Statistics API](/ru/docs/Web/API/WebRTC_Statistics_API)

## Спецификации

| Specification                                                                        |
| ------------------------------------------------------------------------------------ |
| [WebRTC: Real-Time Communication Between Browsers](https://w3c.github.io/webrtc-pc/) |
| [Media Capture and Streams](https://w3c.github.io/mediacapture-main/)                |
| [Media Capture from DOM Elements](https://w3c.github.io/mediacapture-fromelement/)   |

В дополнение к этим спецификациям, определяющим API, необходимый для использования WebRTC, имеется несколько протоколов, перечисленных в разделе [ресурсы](#Ресурсы).

## Смотрите также

- {{domxref("MediaDevices")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamConstraints")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MessageEvent")}}
- {{domxref("MediaStream")}}
- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
