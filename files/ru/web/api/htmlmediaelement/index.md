---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
---

{{APIRef("HTML DOM")}}

Интерфейс HTMLMediaElement добавляет к {{domxref ("HTMLElement")}} свойства и методы, необходимые для поддержки базовых мультимедийных возможностей, общих для аудио и видео. Элементы {{domxref ("HTMLVideoElement")}} и {{domxref ("HTMLAudioElement")}} наследуют этот интерфейс.

{{InheritanceDiagram(600, 120)}}

## Свойства

_Этот интерфейс также наследует свойства от своих предков {{domxref ("HTMLElement")}}, {{domxref ("Element")}}, {{domxref ("Node")}} и {{domxref ("EventTarget") }}._

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : {{Domxref ("AudioTrackList")}}, в котором перечислены объекты {{domxref ("AudioTrack")}}, содержащиеся в элементе.
- {{domxref("HTMLMediaElement.autoplay")}}

  - : {{Jsxref ("Boolean")}}, который отражает атрибут HTML [`autoplay`](/ru/docs/Web/HTML/Element/video#autoplay), указывающий, должно ли воспроизведение начинаться автоматически, как только будет доступно достаточно медиафайлов, чтобы сделать это без прерывания.

    > **Примечание:** Примечание. Сайты, которые автоматически воспроизводят аудио (или видео с аудиодорожкой), могут быть неприятными для пользователей, поэтому их следует по возможности избегать. Если вы должны предлагать функцию автозапуска, вы должны включить её (требуется, чтобы пользователь специально включил её). Однако это может быть полезно при создании элементов мультимедиа, источник которых будет установлен позднее под контролем пользователя.

- {{domxref("HTMLMediaElement.buffered")}} {{readonlyinline}}
  - : Возвращает объект {{domxref ("TimeRanges")}}, который указывает диапазоны медиаисточника, который браузер буферизировал (если есть) в момент обращения к свойству `buffered`.
- {{domxref("HTMLMediaElement.controller")}}
  - : Объект {{domxref ("MediaController")}}, представляющий медиа-контроллер, назначенный элементу, либо `null`, если ни один не назначен.
- {{domxref("HTMLMediaElement.controls")}}
  - : Является {{jsxref ('Boolean')}}, который отражает атрибут HTML [`controls`](/ru/docs/Web/HTML/Element/video#controls), указывающий, должны ли отображаться элементы пользовательского интерфейса для управления ресурсом.
- {{domxref("HTMLMediaElement.controlsList")}} {{readonlyinline}}
  - : Возвращает {{domxref ("DOMTokenList")}}, который помогает агенту пользователя выбирать элементы управления для отображения на элементе мультимедиа всякий раз, когда агент пользователя показывает свой собственный набор элементов управления. DOMTokenList принимает одно или несколько из трёх возможных значений: nodownload, nofullscreen и noremoteplayback.
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : {{Domxref ("DOMString")}}, указывающий настройку CORS для этого медиаэлемента.
- {{domxref("HTMLMediaElement.currentSrc")}} {{readonlyinline}}
  - : Возвращает {{domxref ("DOMString")}} с абсолютным URL-адресом выбранного медиа-ресурса.
- {{domxref("HTMLMediaElement.currentTime")}}
  - : Двойное значение, обозначающее текущее время воспроизведения в секундах. Установка этого значения ищет носитель в новое время.
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : Является {{jsxref ('Boolean')}}, который отражает атрибут HTML [`muted`](/ru/docs/Web/HTML/Element/video#muted), который указывает, должен ли звук вывода медиа-элемента по умолчанию отключаться.
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : Двойное значение, обозначающее скорость воспроизведения по умолчанию для мультимедиа.
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : {{Jsxref ('Boolean')}}, который устанавливает или возвращает состояние удалённого воспроизведения, указывая, разрешено ли медиаэлементу иметь удалённый пользовательский интерфейс воспроизведения.
- {{domxref("HTMLMediaElement.duration")}} {{readonlyinline}}
  - : Возвращает значение типа double, указывающее длину носителя в секундах, или 0, если данные носителя отсутствуют.
- {{domxref("HTMLMediaElement.ended")}} {{readonlyinline}}
  - : Возвращает {{jsxref ('Boolean')}}, который указывает, закончил ли воспроизведение медиа-элемент.
- {{domxref("HTMLMediaElement.error")}} {{readonlyinline}}
  - : Возвращает объект {{domxref ("MediaError")}} для самой последней ошибки или `null`, если ошибки не было.
- {{domxref("HTMLMediaElement.loop")}}
  - : Является {{jsxref ('Boolean')}}, который отражает атрибут HTML [`loop`](/ru/docs/Web/HTML/Element/video#loop), который указывает, должен ли медиа-элемент начинаться сначала, когда он достигает конца.
- {{domxref("HTMLMediaElement.mediaGroup")}}
  - : Это {{domxref ("DOMString")}}, который отражает атрибут HTML [`mediagroup`](/ru/docs/Web/HTML/Element/video#mediagroup), который указывает имя группы элементов, к которой он принадлежит. Группа медиа-элементов имеет общий {{domxref ('MediaController')}}.
- {{domxref("HTMLMediaElement.mediaKeys")}} {{readonlyinline}} {{experimental_inline}}
  - : Возвращает объект {{domxref ("MediaKeys")}} или ноль. MediaKeys - это набор ключей, которые связанный HTMLMediaElement может использовать для дешифрования мультимедийных данных во время воспроизведения.
- {{domxref("HTMLMediaElement.mozAudioCaptured")}} {{readonlyinline}} {{non-standard_inline}}
  - : Возвращает {{jsxref ('Boolean')}}. Связанный с захватом аудиопотока.
- {{domxref("HTMLMediaElement.mozFragmentEnd")}} {{non-standard_inline}}
  - : Двойник, обеспечивающий доступ к времени окончания фрагмента, если медиа-элемент имеет URI-фрагмент для currentSrc, в противном случае он равен продолжительности медиа.
- {{domxref("HTMLMediaElement.mozFrameBufferLength")}} {{non-standard_inline}} {{deprecated_inline}}

  - : Это unsigned long, который указывает число выборок, которые будут возвращены в кадровом буфере каждого события MozAudioAvailable. Это число является общим для всех каналов, и по умолчанию установлено количество каналов \* 1024 (например, 2 канала \* 1024 выборок = всего 2048).

    Для свойства mozFrameBufferLength может быть установлено новое значение для более низкой задержки, больших объёмов данных и т. Д. Указанный размер должен быть числом от 512 до 16384. Использование любого другого размера приводит к возникновению исключения. Лучшее время для установки новой длины - после того, как сработало событие загруженных метаданных, когда известна аудиоинформация, но до того, как аудио началось, или события MozAudioAvailable начали срабатывать.

- {{domxref("HTMLMediaElement.mozSampleRate")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : Возвращает двойное число, представляющее количество семплов в секунду, которые будут воспроизведены. Например, 44100 выборок в секунду - это частота дискретизации, используемая аудио CD.
- {{domxref("HTMLMediaElement.muted")}}
  - : {{Jsxref ('Boolean')}}, определяющий, отключён ли звук. true, если звук отключён, и false в противном случае.
- {{domxref("HTMLMediaElement.networkState")}} {{readonlyinline}}
  - : Возвращает unsigned short (перечисление), указывающее текущее состояние выборки мультимедиа по сети.
- {{domxref("HTMLMediaElement.paused")}} {{readonlyinline}}
  - : Возвращает {{jsxref ('Boolean')}}, который указывает, приостановлен ли медиа-элемент.
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : Двойное число, указывающее скорость воспроизведения мультимедиа.
- {{domxref("HTMLMediaElement.played")}} {{readonlyinline}}
  - : Возвращает объект {{domxref ('TimeRanges')}}, который содержит диапазоны медиаисточников, которые воспроизводил браузер, если таковые имеются.
- {{domxref("HTMLMediaElement.preload")}}
  - : Это {{domxref ("DOMString")}}, который отражает атрибут HTML [`preload`](/ru/docs/Web/HTML/Element/video#preload), указывающий, какие данные должны быть предварительно загружены, если таковые имеются. Возможные значения: `none`, `metadata`, `auto`.
- {{domxref("HTMLMediaElement.preservesPitch")}} {{non-standard_inline}}
  - : Является {{jsxref ('Boolean')}}, который определяет, будет ли сохранена высота звука. Если установлено значение false, высота звука будет регулироваться в зависимости от скорости звука. Это реализовано с помощью префиксов в Firefox (mozPreservedPitch) и WebKit (webkitPreservedPitch).
- {{domxref("HTMLMediaElement.readyState")}} {{readonlyinline}}
  - : Возвращает `unsigned short` (перечисление), указывающее состояние готовности носителя.
- {{domxref("HTMLMediaElement.seekable")}} {{readonlyinline}}
  - : Возвращает объект {{domxref ('TimeRanges')}}, который содержит временные диапазоны, к которым пользователь может обращаться, если таковые имеются.
- {{domxref("HTMLMediaElement.seeking")}} {{readonlyinline}}
  - : Возвращает {{jsxref ('Boolean')}}, который указывает, находится ли медиа в процессе поиска новой позиции.
- {{domxref("HTMLMediaElement.sinkId")}} {{readonlyinline}} {{experimental_inline}}
  - : Возвращает {{domxref ("DOMString")}}, который является уникальным идентификатором аудиоустройства, предоставляющего выходные данные, или пустую строку, если используется пользовательский агент по умолчанию. Этот идентификатор должен быть одним из значений MediaDeviceInfo.deviceid, возвращаемых из {{domxref ("MediaDevices.enumerateDevices ()")}}, id-multimedia или id-communications.
- {{domxref("HTMLMediaElement.src")}}
  - : Это {{domxref ("DOMString")}}, который отражает атрибут HTML [`src`](/ru/docs/Web/HTML/Element/video#src), который содержит URL-адрес используемого медиа-ресурса.
- {{domxref("HTMLMediaElement.srcObject")}}
  - : {{Domxref ('MediaStream')}}, представляющий медиафайл для воспроизведения или воспроизведённый в текущем HTMLMediaElement, или null, если не назначен.
- {{domxref("HTMLMediaElement.textTracks")}} {{readonlyinline}}
  - : Возвращает список объектов {{domxref ("TextTrack")}}, содержащихся в элементе.
- {{domxref("HTMLMediaElement.videoTracks")}} {{readonlyinline}}

  - : Возвращает список объектов {{domxref ("VideoTrack")}}, содержащихся в элементе.

    > **Примечание:** Gecko поддерживает воспроизведение только одной дорожки, а разбор метаданных дорожек доступен только для носителей с форматом контейнера Ogg.

- {{domxref("HTMLMediaElement.volume")}}
  - : Двойной показатель громкости звука, от 0,0 (тихий) до 1,0 (самый громкий).

### Обработчики событий

- {{domxref("HTMLMediaElement.onencrypted")}}
  - : Устанавливает {{domxref ('Event Handler')}}, вызываемый, когда носитель зашифрован.
- {{domxref("HTMLMediaElement.onwaitingforkey")}}
  - : Устанавливает {{domxref ('EventHandler')}}, вызываемый, когда воспроизведение заблокировано во время ожидания ключа шифрования.

## Устаревшие атрибуты

Эти атрибуты устарели и не должны использоваться, даже если браузер все ещё поддерживает их.

- {{domxref("HTMLMediaElement.initialTime")}} {{readonlyinline}} {{non-standard_inline}}
  - : Возвращает значение типа double, указывающее начальную позицию воспроизведения в секундах.
- {{domxref("HTMLMediaElement.mozChannels")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : Возвращает значение типа double, представляющее количество каналов в аудиоресурсе (например, 2 для стерео).

### Устаревшие обработчики событий

- {{domxref("HTMLMediaElement.onmozinterruptbegin")}} {{non-standard_inline}}
  - : Устанавливает {{domxref ("EventHandler")}}, вызываемый, когда медиа-элемент прерывается из-за менеджера аудио-каналов. Это было специфично для Firefox, оно было реализовано для Firefox OS и было удалено в Firefox 55.
- {{domxref("HTMLMediaElement.onmozinterruptend")}} {{non-standard_inline}}
  - : Устанавливает {{domxref ('Event Handler')}}, вызываемый при завершении прерывания. Это было специфично для Firefox, оно было реализовано для Firefox OS и было удалено в Firefox 55.

## Методы

_Этот интерфейс также наследует методы от своих предков {{domxref ("HTMLElement")}}, {{domxref ("Element")}}, {{domxref ("Node")}} и {{domxref ("EventTarget") }}._

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : Добавляет текстовую дорожку (например, дорожку для субтитров) к элементу мультимедиа.
- {{domxref("HTMLMediaElement.captureStream()")}} {{experimental_inline}}
  - : Возвращает {{domxref ("MediaStream")}}, захватывает поток медиа-контента.
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : Определяет, может ли указанный тип носителя воспроизводиться.
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : Прямо стремится к данному времени.
- {{domxref("HTMLMediaElement.load()")}}
  - : Сбрасывает носитель в начало и выбирает наилучший из доступных источников из источников, предоставленных с использованием атрибута [`src`](/ru/docs/Web/HTML/Element/video#src) или элемента {{HTMLElement ("source")}}.
- {{domxref("HTMLMediaElement.mozCaptureStream()")}} {{non-standard_inline}}
  - : \[введите описание]
- {{domxref("HTMLMediaElement.mozCaptureStreamUntilEnded()")}} {{non-standard_inline}}
  - : \[введите описание]
- {{domxref("HTMLMediaElement.mozGetMetadata()")}} {{non-standard_inline}}
  - : Возвращает {{jsxref ('Object')}}, который содержит свойства, которые представляют метаданные из воспроизводимого медиаресурса в виде пар {key: value}. Отдельная копия данных возвращается каждый раз, когда вызывается метод. Этот метод должен вызываться после возникновения события загруженных метаданных.
- {{domxref("HTMLMediaElement.pause()")}}
  - : Пауза воспроизведения мультимедиа.
- {{domxref("HTMLMediaElement.play()")}}
  - : Начинается воспроизведение мультимедиа.
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{non-standard_inline}} {{experimental_inline}}
  - : Стремится к следующему кадру в медиа. Этот нестандартный экспериментальный метод позволяет вручную управлять считыванием и воспроизведением мультимедиа с настраиваемой скоростью или перемещаться по мультимедиа покадрово для выполнения фильтрации или других операций.
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{experimental_inline}}
  - : Возвращает {{jsxref ("Промис")}}. Устанавливает клавиши {{domxref ("MediaKeys")}}, используемые при дешифровании медиафайлов во время воспроизведения.
- {{domxref("HTMLMediaElement.setSinkId()")}} {{experimental_inline}}
  - : Устанавливает идентификатор аудиоустройства, которое будет использоваться для вывода, и возвращает {{jsxref ("Promise")}}. Это работает только тогда, когда приложение имеет право использовать указанное устройство.

## Устаревшие методы

Эти методы устарели и не должны использоваться, даже если браузер все ещё поддерживает их.

- {{domxref("HTMLMediaElement.mozLoadFrom()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Этот метод, доступный только в реализации Mozilla, загружает данные из другого медиа-элемента. Это работает аналогично load () за исключением того, что вместо обычного алгоритма выбора ресурса для источника просто устанавливается значение currentSrc другого элемента. Это оптимизировано, так что этот элемент получает доступ ко всем кешированным и буферизованным данным другого элемента; фактически эти два элемента совместно используют загруженные данные, поэтому данные, загруженные любым из этих элементов, доступны обоим.

## События

_Наследует методы от своего родителя {{domxref ("HTMLElement")}}, определённого в миксине {{domxref ('GlobalEventHandlers')}}. Обработайте эти события, используя addEventListener () или назначив обработчик событий свойству oneventname этого интерфейса._

- {{domxref("HTMLMediaElement.abort_event", 'abort')}}
  - : Срабатывает, когда ресурс загружен не полностью, но не в результате ошибки.
- {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
  - : Запускается, когда пользовательский агент может воспроизводить мультимедиа, но оценивает, что загружено недостаточно данных для воспроизведения мультимедиа до его конца без необходимости остановки для дальнейшей буферизации контента.
- {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : Запускается, когда пользовательский агент может воспроизводить мультимедиа, и оценивает, что было загружено достаточно данных для воспроизведения мультимедиа до его конца, без необходимости остановки для дальнейшей буферизации контента.
- {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : Запускается, когда атрибут продолжительности был обновлён.
- {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
  - : Запускается, когда носитель становится пустым; например, когда носитель уже загружен (или частично загружен), и для его перезагрузки вызывается метод {{domxref ("HTMLMediaElement.load ()")}}.
- {{domxref("HTMLMediaElement.ended_event", 'ended')}}
  - : Срабатывает, когда воспроизведение останавливается, когда достигнут конец носителя (\<audio> или \<video>) или если дальнейшие данные недоступны.
- {{domxref("HTMLMediaElement.error_event", 'error')}}
  - : Срабатывает, когда ресурс не может быть загружен из-за ошибки.
- {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : Запускается, когда первый кадр носителя завершил загрузку.
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : Запускается, когда метаданные были загружены
- {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : Запускается, когда браузер начал загружать ресурс.
- {{domxref("HTMLMediaElement.pause_event", 'pause')}}
  - : Вызывается, когда обрабатывается запрос на приостановку воспроизведения, и действие переходит в состояние паузы, чаще всего это происходит, когда вызывается медиа {{domxref ("HTMLMediaElement.pause ()")}}.
- {{domxref("HTMLMediaElement.play_event", 'play')}}
  - : Срабатывает, когда свойство paused изменяется с true на false, в результате использования метода {{domxref ("HTMLMediaElement.play ()")}} или атрибута autoplay
- {{domxref("HTMLMediaElement.playing_event", "playing")}}
  - : Запускается, когда воспроизведение готово начать после приостановки или задержки из-за отсутствия данных.
- {{domxref("HTMLMediaElement.progress_event", "progress")}}
  - : Периодически запускается, когда браузер загружает ресурс.
- {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : Запускается, когда скорость воспроизведения изменилась.
- {{domxref("HTMLMediaElement.seeked_event", 'seeked ')}}
  - : Запускается, когда скорость воспроизведения изменилась.
- {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
  - : Запускается, когда начинается операция поиска
- {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
  - : Запускается, когда пользовательский агент пытается извлечь данные мультимедиа, но данные неожиданно не поступают.
- {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
  - : Запускается, когда загрузка медиа-данных была приостановлена.
- {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : Запускается, когда время, указанное атрибутом currentTime, было обновлено.
- {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : Запускается при изменении громкости.
- {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
  - : Срабатывает, когда воспроизведение остановлено из-за временной нехватки данных

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Рекомендации

  - {{HTMLElement("video")}} и {{HTMLElement("audio")}} HTML-элементы.
  - {{domxref("HTMLVideoElement")}} и {{domxref("HTMLAudioElement")}} интерфейсы, полученные из HTMLMediaElement.

- Статьи

  - [Использование HTML5 аудио и видео](/ru/docs/Using_HTML5_audio_and_video)
  - [Медиа форматы, поддерживаемые аудио и видео элементами](/ru/docs/Media_formats_supported_by_the_audio_and_video_elements)
  - [API веб-аудио](/ru/docs/Web_Audio_API)
