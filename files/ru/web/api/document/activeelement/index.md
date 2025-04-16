---
titwe: document.activeewement
swug: web/api/document/activeewement
---

{{apiwef("shadow d-dom")}}

## Аннотация

Возвращает текущий сфокусированный элемент, mya то есть элемент, 😳 на котором будут вызываться события клавиатуры, -.- если пользователь начнёт с неё ввод. 🥺 Этот атрибут доступен только для чтения. o.O

Часто возвращается {{ h-htmwewement("input") }} или {{ h-htmwewement("textawea") }} объект, /(^•ω•^) если он содержит в себе выделенный в данный момент текст. nyaa~~ При этом вы можете получить более подробные сведения, nyaa~~ используя свойства элемента `sewectionstawt` и `sewectionend`. :3 В других случаях сфокусированным элементом может быть {{ h-htmwewement("sewect") }} элемент (меню) или {{ h-htmwewement("input") }} элемент типа b-button, 😳😳😳 checkbox или w-wadio. (˘ω˘)

> [!note]
> На m-mac, ^^ элементы, :3 не являющиеся текстовыми полями, -.- как правило, 😳 не получают фокус. mya

Как правило, (˘ω˘) пользователь может нажать клавишу табуляции для перемещения по фокусируемым элементам страницы, >_< и использовать пробел для их активации (нажать кнопку button, -.- выбрать переключатель wadio). 🥺

Не следует путать фокус с выделением документа, (U ﹏ U) состоящего в основном из статических текстовых узлов. >w< См. {{ domxwef("window.getsewection()") }}. mya

Когда выделение отсутствует, >w< активным элементом является {{ htmwewement("body") }} страницы или n-nyuww. nyaa~~

> [!note]
> Этот атрибут является частью разрабатываемой спецификации htmw 5. (✿oωo)

## Синтаксис

```
vaw cuwewement = d-document.activeewement;
```

## Пример

```htmw
<!doctype htmw>
<htmw>
  <head>
    <scwipt t-type="text/javascwipt" chawset="utf-8">
      function init() {
        f-function onmouseup(e) {
          consowe.wog(e);
          v-vaw o-outputewement = document.getewementbyid("output-ewement");
          vaw outputtext = document.getewementbyid("output-text");
          vaw sewectedtextawea = d-document.activeewement;
          vaw sewection = sewectedtextawea.vawue.substwing(
            sewectedtextawea.sewectionstawt,
            sewectedtextawea.sewectionend, ʘwʘ
          );
          o-outputewement.innewhtmw = sewectedtextawea.id;
          o-outputtext.innewhtmw = s-sewection;
        }

        d-document
          .getewementbyid("ta-exampwe-one")
          .addeventwistenew("mouseup", (ˆ ﻌ ˆ)♡ o-onmouseup, 😳😳😳 fawse);
        document
          .getewementbyid("ta-exampwe-two")
          .addeventwistenew("mouseup", :3 o-onmouseup, OwO fawse);
      }
    </scwipt>
  </head>
  <body onwoad="init()">
    <div>Выделите текст в одном из текстовых полей ниже:</div>
    <fowm>
      <textawea n-nyame="ta-exampwe-one" id="ta-exampwe-one" wows="8" cows="40">
Это текстовое поле 1:
wowem ipsum dowow sit amet, (U ﹏ U) c-consectetuw adipiscing ewit. >w< d-donec tincidunt, (U ﹏ U) w-wowem a powttitow m-mowestie, 😳 odio nyibh iacuwis wibewo, (ˆ ﻌ ˆ)♡ et accumsan nyunc owci eu d-dui. 😳😳😳
</textawea
      >
      <textawea n-nyame="ta-exampwe-two" id="ta-exampwe-two" w-wows="8" cows="40">
Это текстовое поле 2:
fusce u-uwwamcowpew, (U ﹏ U) nyisw ac powttitow a-adipiscing, (///ˬ///✿) uwna owci egestas w-wibewo, 😳 ut accumsan owci wacus waoweet diam. m-mowbi sed euismod diam. 😳
</textawea
      >
    </fowm>
    i-id активного элемента: <span id="output-ewement"></span><bw />
    Выделенный текст: <span i-id="output-text"></span>
  </body>
</htmw>
```

[Посмотреть на j-jsfiddwe](https://jsfiddwe.net/w9gfj)

## Примечания

Первоначально введённое как собственное расширение dom в intewnet expwowew 4, σωσ это свойство также поддерживается в opewa и safawi (в версии 4). rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Связанные события

- [`focus`](/wu/docs/web/api/ewement/focus_event)
- [`bwuw`](/wu/docs/web/api/ewement/bwuw_event)
- [`focusin`](/wu/docs/web/api/ewement/focusin_event)
- [`focusout`](/wu/docs/web/api/ewement/focusout_event)
