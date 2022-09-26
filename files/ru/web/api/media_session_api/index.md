---
title: Media Session API
slug: Web/API/Media_Session_API
tags:
  - Media Session API
  - MediaMetadata
  - MediaSession
  - Видео
  - Медиа
  - аудио
translation_of: Web/API/Media_Session_API
---
<p>{{DefaultAPISidebar("Media Session API")}}</p>

<p class="summary">API Media Session даёт разработчику возможность настроить уведомление о медиа. С помощью него можно предоставить метаданные о проигрываемых приложением медиа, а также позволяет приложению реагировать на команды управления воспроизведением. Смысл данного интерфейса в том, чтобы пользователь мог просматривать и управлять медиаконтентом, не переходя на страницу, где происходит воспроизведение.</p>

<h2 id="Принципы_и_использование_Media_Session">Принципы и использование Media Session</h2>

<p>Интерфейс {{domxref("MediaMetadata")}} позволяет приложению передавать метаданные о воспроизводимом контенте браузеру и ОС. Примеры таких метаданных: название, исполнитель, альбом и обложка. Данная информация может отображаться в медиацентре, блоке уведомлений или на экране блокировки.</p>

<p>Интерфейс {{domxref("MediaSession")}} позволяет пользователям контролировать воспроизведение с помощью элементов управления браузера. Взаимодействие с этими элементами также вызывает события в приложении. Так как этот API может использоваться сразу несколькими страницами, браузер контролирует, какая страница получит события. Браузер предоставляет поведение по умолчанию, если оно не было переопределено страницами.</p>

<h2 id="Работа_с_Media_Session_API">Работа с Media Session API</h2>

<p>Главный интерфейс Media Session API -- {{domxref("MediaSession")}}. Не нужно создавать собственный экземпляр <code>MediaSession</code>, доступ к API осуществляется через свойство {{domxref("navigator.mediaSession")}}. Например, следующий код укажет, что страница воспроизводит медиа в данный момент:</p>

<pre class="brush: js">navigator.mediaSession.playbackState = "playing";</pre>

<h2 id="Интерфейсы">Интерфейсы</h2>

<dl>
 <dt>{{domxref("MediaMetadata")}}</dt>
 <dd>Позволяет веб-странице предоставить метаданные о воспроизведении для показа в интерфейсе платформы.</dd>
 <dt>{{domxref("MediaSession")}}</dt>
 <dd>Позволяет странице определить собственные обработчики стандартных медиа-событий.</dd>
</dl>

<h2 id="Объекты">Объекты</h2>

<dl>
 <dt>{{domxref("MediaImage")}}</dt>
 <dd>Объект <code>MediaImage</code> содержит информацию об отображаемой картинке. Чаще всего этим изображением является обложка или постер.</dd>
 <dt>{{domxref("MediaPositionState")}}</dt>
 <dd>Содержит информацию о длине трека, месте и скорости воспроизведения, передаваемую с помощью метода {{domxref("MediaSession.setPositionState", "setPositionState()")}}.</dd>
 <dt>{{domxref("MediaSessionActionDetails")}}</dt>
 <dd>Предоставляет информацию, необходимую для выполнения запрошенного действия, например тип действия или позицию перемотки.</dd>
</dl>

<h2 id="Примеры">Примеры</h2>

<p>Данный пример демонстрирует работу и определение доступности Media Session API. Также, он передаёт метаданные и определяет собственные обработчики событий:</p>

<pre class="brush: js">if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Unforgettable',
    artist: 'Nat King Cole',
    album: 'The Ultimate Collection (Remastered)',
    artwork: [
      { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
      { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
      { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
      { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
      { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
      { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
    ]
  });

  navigator.mediaSession.setActionHandler('play', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('pause', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('seekbackward', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('seekforward', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('previoustrack', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('nexttrack', function() { /* Code excerpted. */ });
}</pre>

<p>Некоторые браузеры отключают автовоспроизведение медиаэлементов на мобильных устройствах и требуют действий пользователя для начала воспроизведения. Этот пример добавит обработчик события <code>pointerup</code> для кнопки воспроизведения на странице, который начнёт работу с медиасессией:</p>

<pre class="brush: js">playButton.addEventListener('pointerup', function(event) {
  var audio = document.querySelector('audio');

  // Пользователь нажал кнопку, начинаем воспроизведение...
  audio.play()
  .then(_ =&gt; { /* Настройка элементов управления (показана выше). */ })
  .catch(error =&gt; { console.log(error) });
});</pre>

<h2 id="Спецификации">Спецификации</h2>

<table>
  <thead>
    <tr>
      <th>Specification</th>
      <th>Status</th>
      <th>Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Media Session')}}</td>
      <td>{{Spec2('Media Session')}}</td>
      <td>Initial definition.</td>
    </tr>
  </tbody>
</table>

<h2 id="Совместимость">Совместимость</h2>

<p>{{Compat("api.MediaSession")}}</p>
