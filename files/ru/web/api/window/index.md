---
title: Window
slug: Web/API/Window
---

{{APIRef}}

Объект `window` представляет собой окно, содержащее DOM документ; свойство `document` указывает на [DOM document](/ru/docs/DOM/document), загруженный в данном окне. Окно текущего документа может быть получено с помощью свойства {{Domxref("document.defaultView")}}.

Данный раздел содержит описание всех методов, свойств и событий, доступных через объект `window` DOM. Объект `window` реализует интерфейс `Window`, который наследуется от интерфейса [`AbstractView`](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-AbstractView). Некоторые дополнительные глобальные функции, пространства имён объектов, интерфейсы и конструкторы, как правило, не связанные с окном, но доступные в нем, перечислены в [JavaScript ссылки](/ru/docs/JavaScript/Reference) и [DOM ссылки](/ru/docs/DOM/DOM_Reference).

В браузерах, поддерживающих вкладки, таком как Firefox, каждая вкладка содержит свой собственный объект `window` (и если вы пишете расширение, окно браузера тоже является отдельным объектом window - см. [Работа с окнами в chrome коде](/ru/docs/Working_with_windows_in_chrome_code#Content_windows)). Таким образом, объект `window` не разделяется между разными вкладками в одном и том же окне. Некоторые методы, а именно {{Domxref("window.resizeTo")}} и {{Domxref("window.resizeBy")}} применяется для всего окна и не принадлежат объекту `window` отдельной вкладки. Как правило, если что-то логически нельзя отнести ко вкладке, это относят к окну.

## Свойства

_Данный интерфейс наследует свойства из интерфейса {{domxref("EventTarget")}} и реализует свойства из {{domxref("WindowOrWorkerGlobalScope")}} и миксин {{domxref("WindowEventHandlers")}}._

Отметим, что свойства, являющиеся объектами (например, перезаписанные прототипы встроенных элементов), перечислены в отдельном разделе ниже.

- {{domxref("Window.applicationCache")}} {{readOnlyInline}}
  - : Объект {{domxref("OfflineResourceList")}}, обеспечивающий для окна доступ к ресурсам вне сети.
- {{domxref("Window.closed")}} {{Non-standard_inline}}{{readOnlyInline}}
  - : Свойство, указывающее было ли текущее окно закрыто или нет.
- {{domxref("Window.Components")}} {{Non-standard_inline}}
  - : Точка доступа к богатой функциональности [XPCOM](/ru/docs/XPCOM). Некоторые свойства, т.к. [classes](/ru/docs/Components.classes), доступны только для достаточно привилегированного кода. **Web-код не должен использовать эти свойства.**
- {{domxref("console","Window.console")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Возвращает ссылку на объект консоли, обеспечивающего доступ к консоли браузера.
- {{domxref("Window.content")}} and Window.content {{Non-standard_inline}}{{ReadOnlyInline}}
  - : Возвращает ссылку на элемент содержимого в текущем окне. Устаревший вариант в нижним подчёркиванием более не доступен для Web-содержимого.
- {{domxref("Window.controllers")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Возвращает XUL контроллер объектов для текущего окна chrome.
- {{domxref("Window.crypto")}} {{readOnlyInline}}
  - : Возвращает зашифрованный объект браузера.
- {{domxref("Window.defaultStatus")}}
  - : Получает/устанавливает текст статус-бара для данного окна.
- {{domxref("Window.devicePixelRatio")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Возвращает соотношение между физическими пикселями и пикселями на дисплее текущего устройства.
- {{domxref("Window.dialogArguments")}} {{ReadOnlyInline}}
  - : Получает аргументы, переданные в окно (если это диалоговое окно) в момент вызова {{domxref("window.showModalDialog()")}}. Это `nsIArray`.
- {{domxref("Window.directories")}}
  - : Синоним {{domxref("window.personalbar")}}
- {{domxref("Window.document")}} {{ReadOnlyInline}}
  - : Возвращает ссылку на содержащийся в окне документ.
- {{domxref("Window.frameElement")}} {{readOnlyInline}}
  - : Возвращает элемент, в который встроено окно, или null, если оно не встроено.
- {{domxref("Window.frames")}} {{readOnlyInline}}
  - : Возвращает массив дополнительных фреймов в текущем окне.
- {{domxref("Window.fullScreen")}}
  - : Это свойство указывает, отображается ли окно в полноэкранном режиме или нет.
- {{domxref("Window.globalStorage")}} {{Non-standard_inline}}
  - : Не поддерживает с Gecko 13 (Firefox 13). Использовать вместо него{{domxref("Window.localStorage")}}. Было: Множественные объекты хранения, которые используются для хранения данных на нескольких страницах.
- {{domxref("Window.history")}} {{ReadOnlyInline}}
  - : Возвращает ссылку на объект истории.
- {{domxref("Window.innerHeight")}}
  - : Получает высоту области содержимого окна браузера, включая, если есть, горизонтальный скроллбар.
- {{domxref("window.innerWidth")}}
  - : Получает ширину области содержимого окна браузера, включая, если есть, вертикальный скроллбар.
- {{domxref("Window.isSecureContext")}} {{readOnlyInline}}
  - : Указывает, способен ли контекст использовать функциональность, требующую безопасного контекста.
- {{domxref("Window.length")}} {{readOnlyInline}}
  - : Возвращает число фреймов в окне. Смотрите также {{domxref("window.frames")}}.
- {{domxref("Window.location")}} {{ReadOnlyInline}}
  - : Получает/устанавливает расположение или текущий URL для текущего объекта окна.
- {{domxref("Window.locationbar")}} {{ReadOnlyInline}}
  - : Возвращает объект locationbar, который может быть добавлен и убран из окна.
- {{domxref("Window.localStorage")}} {{readOnlyInline}}
  - : Возвращает ссылку на локальный объект хранилища, используемый для хранения данных, которые могут быть доступны только первоисточникам, создавшим их.
- {{domxref("Window.menubar")}} {{ReadOnlyInline}}
  - : Возвращает объект menubar, который может быть добавлен и убран из окна.
- {{domxref("Window.messageManager")}}
  - : Возвращает объект [message manager](/ru/docs/The_message_manager) для окна.
- {{domxref("Window.mozAnimationStartTime")}} {{ReadOnlyInline}}
  - : Время в миллисекундах с момента начала цикла данной анимации.
- {{domxref("Window.mozInnerScreenX")}} {{ReadOnlyInline}}{{non-standard_inline}}
  - : Возвращает горизонтальную (X) координату верхнего левого угла окна просмотра в экранных координатах. Значение возвращается в CSS-пикселях. Смотри `mozScreenPixelsPerCSSPixel` в `nsIDOMWindowUtils` для конвертирования и адаптирования к экранным пикселям, если необходимо.
- {{domxref("Window.mozInnerScreenY")}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Возвращает вертикальные (Y) координаты верхнего левого угла окна просмотра в экранных координатах. Значение возвращается в CSS-пикселях. Смотри `mozScreenPixelsPerCSSPixel` для конвертирования и адаптирования к экранным пикселям, если необходимо.
- {{domxref("Window.mozPaintCount")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Возвращает количество раз, за которые текущий документ был отрендерен для текущего экрана в этом окне. Может быть использовано для подсчёта скорости преобразования.
- {{domxref("Window.name")}}
  - : Получает/устанавливает имя для окна.
- {{domxref("Window.navigator")}} {{readOnlyInline}}
  - : Возвращает ссылку на объект навигатора.
- {{domxref("Window.opener")}}
  - : Возвращает ссылку на окно, открывшее текущее окно.
- {{domxref("Window.orientation")}}{{non-standard_inline}}{{deprecated_inline}}{{readOnlyInline}}
  - : Возвращает ориентировку в градусах (с увеличением на 90 градусов) окна просмотра относительно настоящей ориентировки устройства.
- {{domxref("Window.outerHeight")}} {{readOnlyInline}}
  - : Получает высоту вместе с внешней частью браузерного окна.
- {{domxref("Window.outerWidth")}} {{readOnlyInline}}
  - : Получает ширину вместе с внешней частью браузерного окна.
- {{domxref("Window.scrollX","Window.pageXOffset")}} {{readOnlyInline}}
  - : Псевдоним для {{domxref("window.scrollX")}}.
- {{domxref("Window.scrollY","Window.pageYOffset")}}{{readOnlyInline}}
  - : Псевдоним для {{domxref("window.scrollY")}}
- {{domxref("Window.sessionStorage")}} {{readOnlyInline}}
  - : Возвращает ссылку на объект хранения сессии, используемый для хранения данных, которые могут быть получены только источником, создавшим их.
- {{domxref("Window.parent")}} {{readOnlyInline}}
  - : Возвращает ссылку на родителя текущего окна или встроенного фрейма.
- {{domxref("Window.performance")}} {{readOnlyInline}}
  - : Обеспечивает главенствующее пространство для атрибутов, [относящихся к производительности](/ru/docs/Navigation_timing).
- {{domxref("Window.personalbar")}} {{readOnlyInline}}
  - : Возвращает объект personalbar, который может быть добавлен и убран из окна.
- {{domxref("Window.pkcs11")}}
  - : Раньше предоставлял доступ к установке и удалению PKCS11 модуля.
- {{domxref("Window.returnValue")}}
  - : Возвращаемое значение, которое будет передано в функцию, которая вызвала {{domxref("window.showModalDialog()")}} для отображения окна как модального диалога.
- {{domxref("Window.screen")}} {{readOnlyInline}}
  - : Возвращает ссылку на объект экрана, ассоциируемый с окном.
- {{domxref("Window.screenX")}} {{readOnlyInline}}
  - : Возвращает горизонтальный размер левой рамки браузера пользователя с левой стороны экрана.
- {{domxref("Window.screenY")}} {{readOnlyInline}}
  - : Возвращает вертикальный размер верхней рамки браузера пользователя с верхней стороны экрана.
- {{domxref("Window.scrollbars")}} {{readOnlyInline}}
  - : Возвращает объект scrollbars, который может быть добавлен и убран из окна.
- {{domxref("Window.scrollMaxX")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Максимальный отступ, на который может быть проскроллено окно по горизонтали, состоящее из разницы ширины документа и ширины области просмотра.
- {{domxref("Window.scrollMaxY")}}{{non-standard_inline}}{{ReadOnlyInline}}
  - : Максимальный отступ, на который может быть проскроллено окно по вертикали, (т.е., разница высоты документа и высоты области просмотра).
- {{domxref("Window.scrollX")}} {{readOnlyInline}}
  - : Возвращает число пикселей, на которое документ уже был проскроллен по горизонтали.
- {{domxref("Window.scrollY")}} {{readOnlyInline}}
  - : Возвращает число пикселей, на которое документ уже был проскроллен по вертикали.
- {{domxref("Window.self")}} {{ReadOnlyInline}}
  - : Возвращает ссылку на самого себя.
- {{domxref("Window.sessionStorage")}}
  - : Возвращает объект хранилища для данных в пределах сессии одной страницы.
- {{domxref("Window.sidebar")}} {{non-standard_inline}}{{ReadOnlyInline}}
  - : Возвращает ссылку на объект окна sidebar.
- {{domxref("Window.speechSynthesis")}} {{ReadOnlyInline}}
  - : Возвращает объект {{domxref("SpeechSynthesis")}}, который является точкой входа для использования [Web Speech API](/ru/docs/Web/API/Web_Speech_API), функциональности для речевого синтеза.
- {{domxref("Window.status")}}
  - : Получает/устанавливает текст в statusbar внизу браузера.
- {{domxref("Window.statusbar")}} {{readOnlyInline}}
  - : Возвращает объект statusbar, который может быть добавлен и убран из окна.
- {{domxref("Window.toolbar")}} {{readOnlyInline}}
  - : Возвращает объект toolbar, который может быть добавлен и убран из окна.
- {{domxref("Window.top")}} {{readOnlyInline}}
  - : Возвращает ссылку на самое первое окно в иерархии текущих окон. Только для чтения.
- {{domxref("Window.window")}} {{ReadOnlyInline}}
  - : Возвращает ссылку на текущее окно.
- `window[0]`, `window[1]`, etc.
  - : Возвращает ссылку на объект окна во фреймах. Смотри {{domxref("Window.frames")}}.

### Свойства, реализованные из других мест

- {{domxref("WindowOrWorkerGlobalScope.caches")}} {{readOnlyinline}}
  - : Возвращает объект {{domxref("CacheStorage")}}, связанный с текущим контекстом. Этот объект добавляет такой функционал как хранение ресурсов для использования вне сети и генерирования встроенных ответов на запросы.
- {{domxref("WindowOrWorkerGlobalScope.indexedDB")}} {{readonlyInline}}
  - : Обеспечивает механизм для приложений для возможности асинхронного доступа индексированных баз данных; возвращает объект {{domxref("IDBFactory")}}.
- {{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} {{readOnlyinline}}
  - : Возвращает булевское значение, указывающее является ли текущий контент безопасным (`true`) или нет (`false`).
- {{domxref("WindowOrWorkerGlobalScope.origin")}} {{readOnlyinline}}
  - : Возвращает источник глобального объекта, преобразованного в строку. (Это свойство пока ещё не существует, поэтому не может быть использовано в браузерах.)

## Методы

_Этот интерфейс наследует методы от интерфейса {{domxref("EventTarget")}} и реализует свойства {{domxref("WindowOrWorkerGlobalScope")}} и {{domxref("EventTarget")}}._

- {{domxref("Window.alert()")}}
  - : Отображает предупреждающее диалоговое окно.
- {{domxref("Window.back()")}} {{Non-standard_inline}}
  - : Возвращается на один шаг назад в истории окна.
- {{domxref("Window.blur()")}}
  - : Убирает фокус с окна.
- {{domxref("Window.cancelIdleCallback()")}} {{experimental_inline}}
  - : Позволяет отменить колбэк-функцию прежде чем определить расписание её вызова с {{domxref("Window.requestIdleCallback")}}.
- {{domxref("Window.captureEvents()")}} {{Deprecated_inline}}
  - : Регистрирует окно, которое будет перехватывать все события определённого типа.
- {{domxref("Window.clearImmediate()")}}
  - : Отменяет повторяющееся исполнение, установленное с помощью `setImmediate`.
- {{domxref("WindowTimers.clearInterval()")}}
  - : Отменяет повторяющееся исполнение, установленное с помощью {{domxref("WindowTimers.setInterval()")}}.
- {{domxref("WindowTimers.clearTimeout()")}}
  - : Отменяет повторяющееся исполнение, установленное с помощью {{domxref("WindowTimers.setTimeout()")}}.
- {{domxref("Window.close()")}}
  - : Закрывает текущее окно.
- {{domxref("Window.confirm()")}}
  - : Отображает диалог с сообщением, на которое пользователь должен ответить.
- {{domxref("Window.disableExternalCapture()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.dispatchEvent()")}}
  - : Используется для вызова события.
- {{domxref("Window.dump()")}}
  - : Отправляет сообщение в консоль.
- {{domxref("Window.enableExternalCapture()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.find()")}}
  - : Ищет необходимую строку в окне window.
- {{domxref("Window.focus()")}}
  - : Устанавливает фокус на текущем окне.
- {{domxref("Window.forward()")}} {{Non-standard_inline}}
  - : Переходит на один документ вперёд в текущей истории окна.
- {{domxref("Window.getAttention()")}}
  - : Заставляет мигать иконку приложения.
- {{domxref("Window.getAttentionWithCycleCount()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.getComputedStyle()")}}
  - : Получает подсчитанные стили для определённого элемента. Подсчитанные стили включают подсчитанные значения всех CSS-свойств элемента.
- {{domxref("Window.getDefaulComputedStyle()")}}
  - : Получает подсчитанные стили по умолчанию для определённого элемента, игнорируя авторские стили.
- {{domxref("Window.getSelection()")}}
  - : Возвращает выбранный объект, представляющий выбранный элемент(ы).
- {{domxref("Window.home()")}} {{Non-standard_inline}}
  - : Возвращает браузер на домашнюю страницу.
- {{domxref("Window.matchMedia()")}}
  - : Возвращает объект {{domxref("MediaQueryList")}}, представляющий указанную строку медиавыражения.
- {{domxref("Window.maximize()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.minimize()")}} (top-level XUL windows only)
  - : Минимизирует окно.
- {{domxref("Window.moveBy()")}}
  - : Сдвигает текущее окно на определённое значение.
- {{domxref("Window.moveTo()")}}
  - : Сдвигает окно до определённых координат.
- {{domxref("Window.mozRequestAnimationFrame()")}}
  - : Сообщает браузеру, что анимация находится в прогрессе, требуя, чтобы браузер определил время перерисовки окна для следующего анимационного фрейма. Это вызовет событие `MozBeforePaint,` прежде чем произойдёт перерисовка .
- {{domxref("Window.open()")}}
  - : Открывает новое окно.
- {{domxref("Window.openDialog()")}}
  - : Opens a new dialog window.
- {{domxref("Window.postMessage()")}}
  - : Предоставляет безопасный способ для одного окна передать строку с данными в другое окно, которое должно находиться в пределах того же домена, что и первое.
- {{domxref("Window.print()")}}
  - : Открывает Print Dialog для распечатки текущего документа.
- {{domxref("Window.prompt()")}}
  - : Возвращает текст, введённый пользователем в диалоге подсказки.
- {{domxref("Window.releaseEvents()")}} {{Deprecated_inline}}
  - : Возвращает окно с захваченных событий определённого типа.
- {{domxref("element.removeEventListener","Window.removeEventListener()")}}
  - : Удаляет обработчик события из окна.
- {{domxref("Window.requestIdleCallback()")}} {{experimental_inline}}
  - : Позволяет назначить расписание задачи во время периода простоя браузера.
- {{domxref("Window.resizeBy()")}}
  - : Меняет размер текущего окна на определённое число.
- {{domxref("Window.resizeTo()")}}
  - : Динамически меняет размер окна.
- {{domxref("Window.restore()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.routeEvent()")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.scroll()")}}
  - : Scrolls the window to a particular place in the document.
- {{domxref("Window.scrollBy()")}}
  - : Прокручивает документ в окна на данное число.
- {{domxref("Window.scrollByLines()")}}
  - : Прокручивает документ на данное число строк.
- {{domxref("Window.scrollByPages()")}}
  - : Прокручивает документ на данное число страниц.
- {{domxref("Window.scrollTo()")}}
  - : Прокручивает до заданных координат в документе.
- {{domxref("Window.setCursor()")}}
  - : Меняет курсор для текущего окна.
- {{domxref("Window.setImmediate()")}}
  - : Исполняет функцию после того, как браузер некую тяжёлую задачу.
- {{domxref("WindowTimers.setInterval()")}}
  - : Назначает выполнение функции каждые X миллисекунд.
- {{domxref("Window.setResizable")}}
  - : {{todo("NeedsContents")}}
- {{domxref("WindowTimers.setTimeout()")}}
  - : Устанавливает отложенное выполнение функции.
- {{domxref("Window.showModalDialog()")}}
  - : Отображает модальный диалог.
- {{domxref("Window.sizeToContent()")}}
  - : Подгоняет размер окна под его содержимое.
- {{domxref("Window.stop()")}}
  - : Останавливает загрузку страницы.
- {{domxref("Window.updateCommands()")}}
  - : Обновляет состояние команд текущего окна chrome (UI).

### Методы, реализованные из других мест

- {{domxref("EventTarget.addEventListener()")}}

  - : Регистрирует обработчики определённого типа событий в окне.

- {{domxref("WindowOrWorkerGlobalScope.atob()")}}
  - : Декодирует строку данных, которая была закодирована, используя кодировку base-64.
- {{domxref("WindowOrWorkerGlobalScope.btoa()")}}
  - : Создать закодированную base-64 ASCII строку из строки бинарных данных.
- {{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}
  - : Отменяет повторяющееся исполнение, установленного с помощью {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}.
- {{domxref("WindowOrWorkerGlobalScope.clearTimeout()")}}
  - : Отменяет отложенное исполнение, установленного с {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}.
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap()")}}
  - : Принимает множество различных изображений и возвращает {{domxref("Promise")}}, который возвращает {{domxref("ImageBitmap")}}. Опционально ресурс может быть обрезан до прямоугольника, заданного в пикселях _(sx, sy)_ с шириной sw и высотой sh.
- {{domxref("WindowOrWorkerGlobalScope.fetch()")}}
  - : Начинает процесс загрузки ресурса из сети.
- {{domxref("EventTarget.removeEventListener")}}
  - : Удаляет обработчик события из окна.
- {{domxref("WindowOrWorkerGlobalScope.setInterval()")}}
  - : Устанавливает расписание для исполнения функции каждый раз через заданное число миллисекунд.
- {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}
  - : Устанавливает расписание для исполнения функции в назначенное время.

## Обработчики событий

Это методы объекта window, которые могут устанавливаться для перехвата всех событий, которые могут происходить с объектом window.

Интерфейс наследует обработчики событий от _{{domxref("EventTarget")}}_ интерфейса и реализует обработчики событий _{{domxref("WindowEventHandlers")}}._

> **Примечание:** Начиная с Gecko 9.0, вы можете использовать синтаксис `if ("onabort" in window),` чтобы определить существует ли обработчик данного события. Интерфейсы обработчиков событий были обновлены таким образом, чтобы соответствовать web IDL интерфейсам. Смотри [обработчики событий DOM](/ru/docs/DOM/DOM_event_handlers) для деталей.

- {{domxref("GlobalEventHandlers.onabort")}}
  - : Обработчик события для отмены событий в окне.
- {{domxref("WindowEventHandlers.onafterprint")}}
  - : Вызывается, когда закрывается диалоговое окно распечатки. Смотри событие {{event("afterprint")}}.
- {{domxref("WindowEventHandlers.onbeforeprint")}}
  - : Вызывается, когда открывается диалоговое окно распечатки. Смотри событие {{event("beforeprint")}}.
- {{domxref("Window.onbeforeinstallprompt")}}
  - : Событие вызывается прежде чем пользователь согласится сохранить сайт на домашний экран на мобильном устройстве.
- {{domxref("WindowEventHandlers.onbeforeunload")}}
  - : Событие вызывается перед удалением события из окна.
- {{domxref("GlobalEventHandlers.onblur")}}
  - : Свойство обработчика событий для исчезновение фокуса на окне.
- {{domxref("GlobalEventHandlers.onchange")}}
  - : Свойство обработчика событий для изменения в окне.
- {{domxref("GlobalEventHandlers.onclick")}}
  - : Свойство обработчика событий для клика в окне.
- {{domxref("GlobalEventHandlers.ondblclick")}}
  - : Вызывается, когда был сделан двойной клик ЛЮБОЙ кнопкой мыши.
- {{domxref("GlobalEventHandlers.onclose")}}
  - : Свойство обработчика событий для обработки закрытия окна.
- {{domxref("GlobalEventHandlers.oncontextmenu")}}
  - : Свойство обработчика событий для правого клика в окне.
- {{domxref("Window.ondevicelight")}}
  - : Свойство обработчика событий для отслеживания изменения уровня света.
- {{domxref("Window.ondevicemotion")}}
  - : Вызывается, если было определено изменение акселерометра (для мобильных устройств).
- {{domxref("Window.ondeviceorientation")}}
  - : Вызывается, когда была изменена ориентация (для мобильных устройств).
- {{domxref("Window.ondeviceorientation")}}
  - : Свойство обработчика событий для смены ориентации любого устройства.
- {{domxref("Window.ondeviceproximity")}}
  - : Свойство обработчика событий для определения близости устройства.
- {{domxref("GlobalEventHandlers.onerror")}}
  - : Свойство обработчика событий для события {{event("error")}}, возникшего в окне.
- {{domxref("GlobalEventHandlers.onfocus")}}
  - : Свойство обработчика событий для события {{event("focus")}} в окне.
- {{domxref("WindowEventHandlers.onhashchange")}}
  - : Свойство обработчика событий для отлова изменения хэша в окне; вызывается, когда часть URL после ("#") была изменена.
- {{domxref("Window.onappinstalled")}}
  - : Вызывается, когда страница установлена, как приложение. Смотри {{event('appinstalled')}} событие.
- {{domxref("Window.oninput")}}
  - : Вызывается, когда значение элемента \<input> было изменено.
- {{domxref("GlobalEventHandlers.onkeydown")}}
  - : Свойство обработчика событий для события {{event("keydown")}} в окне.
- {{domxref("GlobalEventHandlers.onkeypress")}}
  - : Свойство обработчика событий для события {{event("keypress")}} в окне.
- {{domxref("GlobalEventHandlers.onkeyup")}}
  - : Свойство обработчика событий для события {{event("keyup")}} в окне.
- {{domxref("WindowEventHandlers.onlanguagechange")}}
  - : Свойство обработчика событий для события {{event("languagechange")}} в окне.
- {{domxref("GlobalEventHandlers.onload")}}
  - : Свойство обработчика событий для загрузки окна.
- {{domxref("WindowEventHandlers.onmessage")}}
  - : {{event("Event_handlers", "event handler")}}, представляющий собой код, который будет вызван, когда произойдёт событие {{event("message")}}.
- {{domxref("GlobalEventHandlers.onmousedown")}}
  - : Свойство обработчика событий для события mousedown в окне.
- {{domxref("GlobalEventHandlers.onmousemove")}}
  - : Свойство обработчика событий для события mousemove в окне.
- {{domxref("GlobalEventHandlers.onmouseout")}}
  - : Свойство обработчика событий для события mouseout в окне.
- {{domxref("GlobalEventHandlers.onmouseover")}}
  - : Свойство обработчика событий для события mouseover в окне.
- {{domxref("GlobalEventHandlers.onmouseup")}}
  - : Свойство обработчика событий для события mouseup в окне.
- {{domxref("Window.onmozbeforepaint")}}
  - : Свойство обработчика событий для события `MozBeforePaint`, которое присылается прежде чем окно будет перерисовано, если событие необходимо из-за вызова метода {{domxref("Window.mozRequestAnimationFrame()")}}.
- {{domxref("WindowEventHandlers.onoffline")}}
  - : Вызывается, когда было потеряно соединение с сетью. Смотри событие {{event("offline")}}.
- {{domxref("WindowEventHandlers.ononline")}}
  - : Вызывается, когда соединение с сетью было установлено. Смотри событие {{event("online")}}.
- {{domxref("WindowEventHandlers.onpageshow")}}
  - : Свойство обработчика событий для события pageshow в окне.
- {{domxref("WindowEventHandlers.onpagehide")}}
  - : Свойство обработчика событий для события pagehide в окне.
- {{domxref("Window.onpaint")}}
  - : Свойство обработчика событий для события paint в окне.
- {{domxref("WindowEventHandlers.onpopstate")}}
  - : Вызывается, когда была нажата кнопка назад.
- {{domxref("Window.onrejectionhandled")}} {{experimental_inline}}
  - : Свойство обработчика событий для обработки отказа события {{jsxref("Promise")}}.
- {{domxref("GlobalEventHandlers.onreset")}}
  - : Свойство обработчика событий для события reset в окне.
- {{domxref("GlobalEventHandlers.onresize")}}
  - : Свойство обработчика событий для изменения размера окна.
- {{domxref("GlobalEventHandlers.onscroll")}}
  - : Свойство обработчика событий для прокрутки окна.
- {{domxref("GlobalEventHandlers.onwheel")}}
  - : Вызывается, когда было прокручено колёсико мыши в любую сторону.
- {{domxref("GlobalEventHandlers.onselect")}}
  - : Свойство обработчика событий для события выбора в окне.
- {{domxref("GlobalEventHandlers.onselectionchange")}}
  - : {{event("Event_handlers", "event handler")}}, представляющий собой код, который будет вызван, когда произойдёт событие {{event("selectionchange")}}.
- {{domxref("GlobalEventHandlers.onsubmit")}}
  - : Свойство обработчика событий для события submits в окне формы.
- {{domxref("WindowEventHandlers.onunhandledrejection")}} {{experimental_inline}}
  - : Свойство обработчика событий для отвязки обработчика отказа события {{jsxref("Promise")}}.
- {{domxref("Window.onunload")}}
  - : Свойство обработчика событий для события unload в окне.
- {{domxref("Window.onuserproximity")}}
  - : Свойство обработчика событий для события изменения близости пользователя к устройству.
- {{domxref("Window.onvrdisplayconnected")}} {{experimental_inline}}
  - : Представляет обработчик события, который будет запущен, когда подходящее устройство виртуальной реальности было присоединено к компьютеру (когда запускается событие {{event("vrdisplayconnected")}}).
- {{domxref("Window.onvrdisplaydisconnected")}} {{experimental_inline}}
  - : Представляет обработчик события, который будет запущен, когда подходящее устройство виртуальной реальности было отсоединено от компьютера (когда запускается событие {{event("vrdisplaydisconnected")}}).
- {{domxref("Window.onvrdisplaypresentchange")}} {{experimental_inline}}
  - : Представляет обработчик события, который будет запущен, когда изменится состояние устройства виртуальной реальности — т.е. перейдёт от представленного к непредставленному или наоборот (когда будет запущено событие {{event("onvrdisplaypresentchange")}}).

## Конструкторы

Смотрите также [DOM Interfaces](/ru/docs/DOM/DOM_Reference).

- {{domxref("Window.ConstantSourceNode")}}
  - : Создаёт экземпляр {{domxref("ConstantSourceNode")}}

<!---->

- {{domxref("Window.DOMParser")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.GeckoActiveXObject")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Image")}}
  - : Создаёт {{domxref("HTMLImageElement")}}.
- {{domxref("Option")}}
  - : Создаёт {{domxref("HTMLOptionElement")}}
- {{domxref("Window.QueryInterface")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XMLSerializer")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Worker")}}
  - : Используется для создания [Web worker](/ru/docs/DOM/Using_web_workers)
- {{domxref("Window.XPCNativeWrapper")}}
  - : {{todo("NeedsContents")}}
- {{domxref("Window.XPCSafeJSObjectWrapper")}}
  - : {{todo("NeedsContents")}}

## Интерфейс

Смотри [DOM Reference](/ru/docs/DOM/DOM_Reference)

## Смотрите также

- [Working with windows in chrome code](/ru/docs/Working_with_windows_in_chrome_code)
