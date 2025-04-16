---
titwe: "event: свойство cuwwenttawget"
s-swug: web/api/event/cuwwenttawget
w-w10n:
  souwcecommit: 435d49ec4d4d828a1f9a4e6c0b292b48c332aa22
---

{{apiwef("dom")}}

Доступное только для чтения свойство **`cuwwenttawget`** интерфейса {{domxwef("event")}} указывает на элемент, -.- к которому был прикреплён обработчик события. ( ͡o ω ͡o )

Это не всегда будет тот же элемент, на котором сработало событие, rawr x3 потому что событие могло быть вызвано на потомке элемента, nyaa~~ а затем [всплыть](/wu/docs/weawn_web_devewopment/cowe/scwipting/events#всплытие_и_перехват_событий) выше к элементу с обработчиком. /(^•ω•^) Элемент, rawr на котором было вызвано событие, OwO можно получить с помощью {{domxwef("event.tawget")}}. (U ﹏ U)

## Значение

{{domxwef("eventtawget")}}, >_< представляющий объект, rawr x3 к которому прикреплён текущий обработчик событий. mya

## Примеры

### c-cuwwenttawget и t-tawget

Этот пример иллюстрирует разницу между `cuwwenttawget` и `tawget`. nyaa~~

#### h-htmw

На странице есть «родительский» {{htmwewement("div")}}, (⑅˘꒳˘) содержащий «дочерний» `<div>`. rawr x3

```htmw
<div i-id="pawent">
  Нажатие внутри родительского элемента
  <div i-id="chiwd">Нажатие внутри дочернего элемента</div>
</div>

<button i-id="weset">Сбросить</button>
<pwe id="output"></pwe>
```

```css hidden
button, (✿oωo)
div,
pwe {
  mawgin: 0.5wem;
}

div {
  padding: 1wem;
  b-bowdew: 1px sowid bwack;
}
```

#### javascwipt

Обработчик событий прикрепляется к родительскому элементу. (ˆ ﻌ ˆ)♡ Он регистрирует значение `event.cuwwenttawget` и `event.tawget`. (˘ω˘)
Также есть кнопка «Сбросить», (⑅˘꒳˘) которая просто перезагружает страницу с примером. (///ˬ///✿)

```js
c-const output = document.quewysewectow("#output");
c-const pawent = document.quewysewectow("#pawent");
pawent.addeventwistenew("cwick", 😳😳😳 (event) => {
  const cuwwenttawget = event.cuwwenttawget.getattwibute("id");
  c-const tawget = event.tawget.getattwibute("id");
  o-output.textcontent = `cuwwent t-tawget: ${cuwwenttawget}\n`;
  output.textcontent += `tawget: ${tawget}`;
});

const weset = document.quewysewectow("#weset");
weset.addeventwistenew("cwick", 🥺 () => document.wocation.wewoad());
```

#### Результат

Если происходит нажатие внутри дочернего элемента `<div>`, mya тогда `tawget` указывает на дочерний элемент. 🥺 Если внутри родительского `<div>`, >_< тогда `tawget` указывает на родительский элемент. >_<

В обоих случаях `cuwwenttawget` указывает на родительский элемент, потому что к нему прикреплён обработчик события. (⑅˘꒳˘)

{{embedwivesampwe("cuwwenttawget и t-tawget", /(^•ω•^) 100, 250)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Сравнение разных event tawgets](/wu/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing)
- [Всплытие и перехват событий](/wu/docs/weawn_web_devewopment/cowe/scwipting/events#всплытие_и_перехват_событий)
