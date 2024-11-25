---
title: Using server-sent events
slug: Web/API/Server-sent_events/Using_server-sent_events
---

{{DefaultAPISidebar("Server Sent Events")}}

Разрабатывать web-приложения, использующие [Server-Sent Events](/ru/docs/Web/API/Server-sent_events) намного проще, чем с использованием websockets. Нужно всего лишь немного кода на стороне сервера, чтобы переправлять события web-приложению, но клиентская часть кода для обработки этих событий работает почти точно так же, как и для любых других событий.

## Получение событий от сервера

Server-Sent Event API содержится внутри интерфейса {{domxref("EventSource")}}. Чтобы открыть соединение с сервером для начала записи событий, которые он присылает, необходимо создать новый объект `EventSource`, который будет указывать на URI скрипта, который создаёт события. Например:

```js
const evtSource = new EventSource("ssedemo.php");
```

Если файл с генератором событий размещён на другом домене, то должен быть создан новый объект `EventSource` в который следует передать помимо URI ещё и словарь опций. Например, если предположить, что клиентский скрипт находится на `example.com`:

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", {
  withCredentials: true,
});
```

Как только вы создали экземпляр `EventSource`, вы можете начать получать сообщения с сервера, добавив обработчик события [`message`](/ru/docs/Web/Events/message) :

```js
evtSource.onmessage = function (event) {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.innerHTML = "message: " + event.data;
  eventList.appendChild(newElement);
};
```

Этот код обрабатывает входящие сообщения (то есть уведомления от сервера, на которых нет поля `event`) и добавляет текст сообщения в список в HTML-документе.

Вы также можете обрабатывать события, используя `addEventListener()`:

```js
evtSource.addEventListener("ping", function (event) {
  const newElement = document.createElement("li");
  const time = JSON.parse(event.data).time;

  newElement.innerHTML = "ping at " + time;
  eventList.appendChild(newElement);
});
```

Этот код аналогичен коду выше, за исключением того, что он будет вызываться автоматически всякий раз, когда сервер отправляет сообщение с полем `event`, установленным в «ping»; затем он парсит JSON в поле `data` и выводит эту информацию.

## Отправка событий с сервера

Код на стороне сервера, который отправляет события, должен отвечать, используя MIME-тип `text/event-stream`. Каждое уведомление отправляется в виде блока текста, оканчивающегося парой новых строк (`\n`) . Подробнее о формате потока событий см. [Event stream format](#event_stream_format).

{{Glossary("PHP")}} код, который мы используем для примера приведён ниже:

```php
date_default_timezone_set("America/New_York");
header('Cache-Control: no-cache');
header("Content-Type: text/event-stream\n\n");

$counter = rand(1, 10);
while (1) {
  // Every second, send a "ping" event.

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Send a simple message at random intervals.

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  ob_end_flush();
  flush();
  sleep(1);
}
```

Приведённый выше код генерирует событие каждую секунду с типом события «ping». Данные каждого события - это объект JSON, содержащий метку времени ISO 8601, соответствующую дате, когда было сгенерировано событие. Через случайные интервалы отправляется простое сообщение (без типа `event`).

> [!NOTE]
> Вы можете найти полный пример, который использует код, показанный в этой статье на GitHub - см. [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Обработка ошибок

Когда возникают проблемы (такие как тайм-аут ответа сети или проблемы, связанные с [контролем доступа](/ru/docs/HTTP/Access_control_CORS)), тогда генерируется событие `error`. Вы можете обработать это событие программно, реализовав метод `onerror` для объекта `EventSource`:

```js
evtSource.onerror = function (error) {
  console.error("⛔ EventSource failed: ", error);
};
```

## Закрытие потоков событий

По умолчанию, если соединение между клиентом и сервером закрывается, то соединение сбрасывается. Прервать соединение можно с помощью метода `.close()`.

```js
evtSource.close();
```

## Формат потока событий

Поток событий представляет из себя простой поток текста, который должен иметь кодировку [UTF-8](/ru/docs/Glossary/UTF-8). Сообщения в потоке событий разделяются парой символов новой строки. Двоеточие, как первый символ строки считается комментарием и игнорируется.

> [!NOTE]
> Строка комментария может использоваться, чтобы предотвратить тайм-аут соединений; сервер может периодически отправлять комментарий, чтобы поддерживать соединение.

Каждое сообщение содержит одну или более строчек текста, которые перечисляют поля этого сообщения. Каждое имеет своё имя, за которым следует двоеточие, после которого идут текстовые данные для значения этого поля.

### Поля

Каждое полученное сообщение имеет некоторую комбинацию следующих полей, по одному на строку:

- `event`
  - : Строка, идентифицирующая тип описанного события. Если `event` указан, то событие будет отправлено в браузер обработчику указанного имени события. Исходный код сайта должен использовать `addEventListener()` для обработки именованных событий. Обработчик `onmessage` вызывается, если для сообщения не указано имя события.
- `data`
  - : Поле данных для сообщения. Когда `EventSource` получает несколько последовательных строк, начинающихся с `data:`, [он объединяет их](http://www.w3.org/TR/eventsource/#dispatchMessage), вставляя символ новой строки между каждой из них. Последние переводы строки удаляются.
- `id`
  - : Идентификатор события для установки значения последнего ID события для объекта [`EventSource`](/en/Server-sent_events/EventSource).
- `retry`
  - : Время переподключения, используемое при попытке отправить событие. Это должно быть целое число, указывающее время переподключения в миллисекундах. Если указано нецелое значение, поле игнорируется.

Другие названия полей игнорируются.

> [!NOTE]
> If a line doesn't contain a colon, the entire line is treated as the field name with an empty value string.

### Примеры

#### Сообщения с данными

В следующем примере отправлено три сообщения. Первый - это просто комментарий, так как он начинается с символа двоеточия. Как упоминалось ранее, это может быть полезно в качестве подтверждения активности, если сообщения могут отправляться не регулярно.

Второе сообщение содержит поле данных со значением «some text». Третье сообщение содержит поле данных со значением «another message \n with two lines». Обратите внимание на специальный символ новой строки в значении.

```json
: this is a test stream

data: some text

data: another message
data:
```

#### Именованные события

Данный пример отправляет именованные события. У каждого из них есть имя события, указанное в поле `event`, и поле `data`, значением которого является соответствующая строка JSON с данными, необходимыми для клиента, чтобы реагировать на событие. Поле `data` может, конечно, содержать любые строковые данные; это не обязательно должен быть JSON.

```json
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### Смешивание и сопоставление

Вам не нужно использовать только неназванные сообщения или именованные события. Вы можете смешать их вместе в одном потоке событий.

```json
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## Совместимость с браузерами

### `EventSource`

{{Compat}}
