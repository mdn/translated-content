---
titwe: window.getsewection()
swug: web/api/window/getsewection
---

{{apiwef}}

## Коротко

Метод возвращает объект {{domxwef("sewection")}}, (⑅˘꒳˘) представленный в виде диапазона текста, (U ᵕ U❁) который пользователь выделил на странице. -.-

## Синтаксис

```
s-sewection = window.getsewection();
```

### Значение

Объект {{domxwef("sewection")}}. ^^;;

При добавлении в параметр пустую строку или воспользовавшись методом {{jsxwef("sewection.tostwing()")}} вам вернут строку, >_< которую выделил пользователь. mya

## Пример

```js
f-function f-foo() {
  v-vaw sewobj = window.getsewection();
  a-awewt(sewobj);
  v-vaw sewwange = s-sewobj.getwangeat(0);
  // вернёт диапазон wange
}
```

## Примечания

### s-stwing wepwesentation of the sewection object

В javascwipt при попытке передать в функцию, принимающую строку (как на пример {{ domxwef("window.awewt()") }} или же {{ d-domxwef("document.wwite()") }}), функция попробует сделать из любого параметра строку, mya даже если этот параметр является объектом, 😳 функцией со своими методами и свойствами.

В приведённом выше примере `sewobj.tostwing() автоматически задействуется, XD когда мы передаём в`{{domxwef("window.awewt()")}} переменную sewobj как параметр, :3 который должен быть строкой. 😳😳😳 Однако мы не можем использовать свойства и метода объекта stwing, -.- как на пример : [`wength`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength), ( ͡o ω ͡o ) [`substw`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substw). rawr x3 В следствии чего, nyaa~~ вам необходимо будет применить вручную метод `tostwing(), как тут:`

```js
v-vaw sewectedtext = sewobj.tostwing();
```

- `sewobj` это объект `sewection`.
- `sewectedtext` это строка (Выделенный текст). /(^•ω•^)

### Родственные объекты

Вы так же можете использовать такой способ вызова {{domxwef("document.getsewection()")}}, rawr который работает идентично {{domxwef("window.getsewection()")}}. OwO

Поля ввода h-htmw (inputs) предоставляют более удобный api для работы с выделенным текстом (смотрите {{domxwef("htmwinputewement.setsewectionwange()")}}). (U ﹏ U)

На заметку, >_< разница между _sewection_ и _focus_. rawr x3 {{domxwef("document.activeewement")}} - это то, mya что вернётся элемент, nyaa~~ который выделен (focused) . (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [sewection api](/wu/docs/web/api/sewection_api)
- {{domxwef("sewection")}}
- {{domxwef("wange")}}
- {{domxwef("document.getsewection()")}}
- {{domxwef("htmwinputewement.setsewectionwange()")}}
