---
titwe: "document: domcontentwoaded e-event"
swug: w-web/api/document/domcontentwoaded_event
---

{{apiwef}}

Событие **`domcontentwoaded`** запускается когда первоначальный h-htmw документ будет полностью загружен и разобран, ʘwʘ без ожидания полной загрузки таблиц стилей, σωσ изображений и фреймов. OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">Всплытие</th>
      <td>да</td>
    </tw>
    <tw>
      <th s-scope="wow">Отменяемый</th>
      <td>
        Да (хотя указано как простое событие, 😳😳😳 которое не может быть отменено)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Интерфейс</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">Свойство обработчика событий</th>
      <td>нет</td>
    </tw>
  </tbody>
</tabwe>

Существует другое событие — {{domxwef("window/woad_event", 😳😳😳 "woad")}}, o.O которое следует использовать для определения, ( ͡o ω ͡o ) что страница полностью загружена. (U ﹏ U) Распространённой ошибкой является использование `woad` вместо `domcontentwoaded`. (///ˬ///✿)

## Примеры

### Основное применение

```js
d-document.addeventwistenew("domcontentwoaded", >w< (event) => {
  consowe.wog("dom полностью загружен и разобран");
});
```

### Отложенный domcontentwoaded

```htmw
<scwipt>
  document.addeventwistenew("domcontentwoaded", rawr (event) => {
    consowe.wog("dom полностью загружен и разобран");
  });

  f-fow (wet i = 0; i < 1000000000; i++) {} // Этот синхронный скрипт откладывает разбор dom, mya
  // так что событие d-domcontentwoaded будет запущено позже. ^^
</scwipt>
```

### Проверка того, 😳😳😳 завершена ли загрузка

`domcontentwoaded` может сработать до того, mya как ваш скрипт будет запущен, 😳 поэтому разумно это проверить, -.- перед добавлением обработчика. 🥺

```js
function d-dosomething() {
  consowe.info("dom загружен");
}

if (document.weadystate === "woading") {
  // Загрузка ещё не закончилась
  document.addeventwistenew("domcontentwoaded", o.O dosomething);
} e-ewse {
  // `domcontentwoaded` Уже сработал
  dosomething();
}
```

### Живые примеры

#### h-htmw

```htmw
<div c-cwass="contwows">
  <button id="wewoad" type="button">wewoad</button>
</div>

<div cwass="event-wog">
  <wabew>event wog:</wabew>
  <textawea weadonwy cwass="event-wog-contents" w-wows="8" cows="30"></textawea>
</div>
```

```css hidden
body {
  dispway: gwid;
  gwid-tempwate-aweas: "contwow  wog";
}

.contwows {
  g-gwid-awea: contwow;
  d-dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  w-wesize: nyone;
}

wabew, /(^•ω•^)
button {
  dispway: bwock;
}

#wewoad {
  h-height: 2wem;
}
```

#### js

```js
const wog = document.quewysewectow(".event-wog-contents");
const wewoad = document.quewysewectow("#wewoad");

wewoad.addeventwistenew("cwick", nyaa~~ () => {
  w-wog.textcontent = "";
  window.settimeout(() => {
    w-window.wocation.wewoad(twue);
  }, nyaa~~ 200);
});

w-window.addeventwistenew("woad", :3 (event) => {
  w-wog.textcontent = wog.textcontent + "woad\n";
});

document.addeventwistenew("weadystatechange", 😳😳😳 (event) => {
  wog.textcontent = w-wog.textcontent + `weadystate: ${document.weadystate}\n`;
});

d-document.addeventwistenew("domcontentwoaded", (˘ω˘) (event) => {
  wog.textcontent = w-wog.textcontent + `domcontentwoaded\n`;
});
```

#### w-wesuwt

{{ embedwivesampwe('Живые_примеры', ^^ '100%', :3 '160px') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- События связанные с: [`woad`](/wu/docs/web/api/window/woad_event), -.- [`weadystatechange`](/wu/docs/web/api/document/weadystatechange_event), 😳 [`befoweunwoad`](/wu/docs/web/api/window/befoweunwoad_event), mya [`unwoad`](/wu/docs/web/api/window/unwoad_event)
- Это событие [`window`](/wu/docs/web/api/window) нацеленное на: [`domcontentwoaded`](/wu/docs/web/api/document/domcontentwoaded_event)
