---
title: Уведомление
slug: Web/API/Notification
---

{{APIRef("Web Notifications")}}

Интерфейс `Notification` из [Notifications API](/ru/docs/Web/API/Notifications_API) используется для настройки и отображения уведомлений на рабочий стол пользователя.

{{AvailableInWorkers}}

## Конструктор

- {{domxref("Notification.Notification", "Notification()")}}
  - : Создаёт новый экземпляр объекта `Notification`.

## Свойства

### Собственные свойства

Следующие свойства доступны только для самого объекта `Notification`.

- {{domxref("Notification.permission")}} {{readonlyinline}}
  - : Строка, показывающая текущие права доступа для отображения уведомлений. Возможные значения:

<!---->

- `denied` - Пользователь отказался от отображения уведомлений.
- `granted` - Пользователь дал согласие на отображение уведомлений.
- `default` - Выбор пользователя неизвестен, и поэтому браузер будет действовать так, как если бы значение было `denied`

### Свойства экземпляра

Следующие свойства доступны только для экземпляров объекта `Notification`.

- {{domxref("Notification.actions")}} {{readonlyinline}}
  - : Массив действий уведомления, указывается в опциях как параметр конструктора.
- {{domxref("Notification.badge")}} {{readonlyinline}}
  - : URL изображения, используемого для отображения уведомления в случае, если недостаточно места для самого уведомления.
- {{domxref("Notification.body")}} {{readonlyinline}}
  - : Основное тело (текст) уведомления, указывается в опциях как параметр конструктора.
- {{domxref("Notification.data")}} {{readonlyinline}}
  - : Возвращает структурированную копию содержания уведомления.
- {{domxref("Notification.dir")}} {{readonlyinline}}
  - : Направление текста уведомления, указывается в опциях как параметр конструктора.
- {{domxref("Notification.lang")}} {{readonlyinline}}
  - : Код языка уведомления, указывается в опциях как параметр конструктора.
- {{domxref("Notification.tag")}} {{readonlyinline}}
  - : Идентификатор (ID) уведомления, если есть, указывается в опциях как параметр конструктора.
- {{domxref("Notification.icon")}} {{readonlyinline}}
  - : URL изображения, используемого в качестве иконки уведомления, указывается в опциях как параметр конструктора.
- {{domxref("Notification.image")}} {{readonlyinline}}
  - : URL изображения, которое должно быть изображено в уведомлении, указывается в опциях как параметр конструктора.
- {{domxref("Notification.renotify")}} {{readonlyinline}}

  - : Определяет, должен ли пользователь снова быть уведомлен, если новое уведомление заменяет предыдущее.

- {{domxref("Notification.requireInteraction")}} {{readonlyinline}}
  - : [Булево значение](/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Boolean), отражающее, останется ли уведомление активным до тех пор, пока пользователь вручную не кликнет или не закроет его, в противоположность автоматическому закрытию со временем.
- {{domxref("Notification.silent")}} {{readonlyinline}}

  - : Указывает, должно ли уведомление не сопровождаться звуковым или вибро сигналом, независимо от настроек устройства.

- {{domxref("Notification.timestamp")}} {{readonlyinline}}
  - : Указывает время, в которое уведомление создано, либо применимо (в прошлом, настоящем или будущем).
- {{domxref("Notification.title")}} {{readonlyinline}}
  - : Заголовок уведомления, указывается в опциях как параметр конструктора.
- {{domxref("Notification.vibrate")}} {{readonlyinline}}
  - : Задаёт шаблон вибрации для устройств с вибро.

#### Не поддерживаемые свойства

Следующие свойства указаны в наиболее актуальной спецификации, но пока что не поддерживаются браузерами. Рекомендуем регулярно проверять актуальность этой информации, и если их статус изменится, пожалуйста, просим оповестить нас.

- {{domxref("Notification.noscreen")}} {{readonlyinline}}
  - : Определяет, должно ли срабатывание уведомления включать дисплей устройства или нет.
- {{domxref("Notification.sticky")}} {{readonlyinline}}
  - : Определяет, должно ли уведомление быть "липким", то есть не легко закрываемым.

#### Обработчики событий

- {{domxref("Notification.onclick")}}
  - : Обработчик события {{event("click")}}. Срабатывает каждый раз, когда пользователь кликает по уведомлению.
- {{domxref("Notification.onerror")}}
  - : Обработчик события {{event("error")}}. Срабатывает каждый раз, когда уведомление сталкивается с ошибкой.

#### Устаревшие обработчики событий

Следующие обработчики событий все ещё поддерживаются, как указано в разделе [browser compatibility](#browser_compatibility) ниже, но более не входят в актуальную спецификацию. Небезосновательно можно предположить, что они устарели и могут перестать работать в будущих версиях браузеров.

- {{domxref("Notification.onclose")}}
  - : Обработчик события {{event("close")}}. Срабатывает при закрытии уведомления пользователем.
- {{domxref("Notification.onshow")}}
  - : Обработчик события {{event("show")}}. Срабатывает при отображении уведомления.
- {{domxref("Notification.sound")}} {{readonlyinline}}
  - : Определяет звуковой файл для воспроизведения при уведомлении, по умолчанию установлен системный звук.

## Методы

### Собственные методы

Следующие методы доступны только для самого объекта `Notification`.

- {{domxref("Notification.requestPermission()")}}
  - : Запрашивает разрешение у пользователя показывать уведомления.

### Методы экземпляра

Следующие методы доступны только для экземпляров объекта `Notification`, либо через его [`прототип`](/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain). Объект `Notification` также наследует методы интерфейса {{domxref("EventTarget")}}.

- {{domxref("Notification.close()")}}
  - : Программно закрывает уведомление.

## Пример

Базовый HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

Отправить уведомление можно следующим образом — ниже представлен довольно подробный и полный набор кода, который вы могли бы использовать для того, чтобы сначала проверить поддержку уведомлений, затем проверить, позволено ли данному источнику отправлять уведомления, и наконец, запросив разрешение, если требуется, отправить уведомление.

```js
function notifyMe() {
  // Проверка поддержки браузером уведомлений
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Проверка разрешения на отправку уведомлений
  else if (Notification.permission === "granted") {
    // Если разрешено, то создаём уведомление
    var notification = new Notification("Hi there!");
  }

  // В противном случае, запрашиваем разрешение
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // Если пользователь разрешил, то создаём уведомление
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // В конечном счёте, если пользователь отказался от получения
  // уведомлений, то стоит уважать его выбор и не беспокоить его
  // по этому поводу.
}
```

{{EmbedLiveSample('Пример', '100%', 30)}}

В большинстве случаев вам не надо быть столь многословными. Например в нашем [демо Emogotchi](http://mdn.github.io/emogotchi/) ([исходный код](https://github.com/mdn/emogotchi)), мы просто запускаем {{domxref("Notification.requestPermission")}} несмотря ни на что, чтобы быть уверенными, что мы сможем получить разрешение на отправку уведомлений (тут используется синтаксис новейшего promise-based метода):

```js
Notification.requestPermission().then(function (result) {
  console.log(result);
});
```

Затем мы запускаем простую функцию `spawnNotification()`, когда мы хотим вывести уведомление, передающую аргументы для указания тела, иконки и заголовка, которые нам нужны, а затем она создаёт необходимый объект параметров `options` и запускает уведомление с помощью конструктора {{domxref("Notification.Notification","Notification()")}}.

```js
function spawnNotification(body, icon, title) {
  var options = {
    body: body,
    icon: icon,
  };
  var n = new Notification(title, options);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using the Notifications API](/ru/docs/Web/API/Notifications_API/Using_the_Notifications_API)
