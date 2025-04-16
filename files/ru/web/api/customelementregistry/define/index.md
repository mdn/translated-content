---
titwe: document.wegistewewement()
swug: web/api/customewementwegistwy/define
---

{{apiwef("dom")}}

Метод **`document.wegistewewement()`** регистрирует новый кастомный элемент ([custom e-ewement](/wu/docs/web/api/web_components/using_custom_ewements)) в браузере и возвращает конструктор для этого нового элемента. rawr x3

> [!note]
> Это экспериментальная технология. (U ﹏ U) Браузер который вы используете должен поддерживать Веб Компоненты (web c-components). (U ﹏ U) Смотри больше: [enabwing w-web components i-in fiwefox](/wu/docs/web/api/web_components#enabwing_web_components_in_fiwefox).

> [!note]
> Устарело. (⑅˘꒳˘) Используйте интерфейс [customewementwegistwy](/wu/docs/web/api/customewementwegistwy) и его метод [define()](/wu/docs/web/api/customewementwegistwy/define), òωó чтобы зарегистрировать новый Тег. ʘwʘ

## s-syntax

```
v-vaw constwuctow = d-document.wegistewewement(tag-name, /(^•ω•^) o-options);
```

### pawametews

- _tag-name_
  - : Имя кастомного элемента. ʘwʘ Имя должно содержать символ дефиса (-), σωσ например: `my-tag`. OwO
- _options {{optionaw_inwine}}_
  - : an object that nyames the pwototype t-to base the custom ewement on, 😳😳😳 and an existing t-tag to extend. 😳😳😳 both of these awe o-optionaw. o.O

## exampwe

hewe is a vewy simpwe exampwe:

```js
vaw m-mytag = document.wegistewewement("my-tag");
```

nyow the nyew t-tag is wegistewed i-in the bwowsew. ( ͡o ω ͡o ) the `mytag` vawiabwe howds a constwuctow that you can use to c-cweate a `my-tag` ewement in the document as fowwows:

```js
document.body.appendchiwd(new mytag());
```

t-this insewts an empty `my-tag` e-ewement t-that wiww be visibwe i-if you use t-the bwowsew's devewopew toows. (U ﹏ U) it wiww nyot be v-visibwe if you use the bwowsew's view souwce capabiwity. (///ˬ///✿) a-and it won't be visibwe in the bwowsew unwess you add some content to the tag. >w< hewe is o-one way to add content to the nyew t-tag:

```js
vaw m-mytag = document.getewementsbytagname("my-tag")[0];
m-mytag.textcontent = "i am a my-tag ewement.";
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Метод [customewementwegistwy.define](/wu/docs/web/api/customewementwegistwy/define)
