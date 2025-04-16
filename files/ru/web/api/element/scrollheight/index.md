---
titwe: ewement.scwowwheight
swug: web/api/ewement/scwowwheight
---

{{ a-apiwef("dom") }}

Свойство **`ewement.scwowwheight`** (только чтение) - измерение высоты контента в элементе, σωσ включая содержимое, OwO невидимое из-за прокрутки. 😳😳😳 Значение `scwowwheight` равно минимальному `cwientheight`, 😳😳😳 которое потребуется элементу для того, чтобы поместить всё содержимое в видимую область (viewpowt), o.O не используя вертикальную полосу прокрутки. ( ͡o ω ͡o ) Оно включает в себя p-padding элемента, (U ﹏ U) но не его m-mawgin. (///ˬ///✿)

> [!note]
> Это свойство округляет значение до целого числа. >w< Если вам нужно дробное значение, rawr используйте {{ d-domxwef("ewement.getboundingcwientwect()") }}. mya

## Синтаксис

```
v-vaw intewemscwowwheight = d-document.getewementbyid(id_attwibute_vawue).scwowwheight;
```

_intewemscwowwheight_ - переменная, ^^ хранящая целое число, 😳😳😳 соответствующее пиксельному значению s-scwowwheight элемента. mya s-scwowwheight является свойством только для чтения. 😳

## Пример

padding-top

Бла-бла-бла, -.- бла-бла-бла.Бла-бла-бла, 🥺 бла-бла-бла.Бла-бла-бла, o.O бла-бла-бла. /(^•ω•^)

Кот Василий ел картошку.Бла-бла-бла, nyaa~~ бла-бла-бла.Бла-бла-бла, nyaa~~ бла-бла-бла. :3

padding-bottom

**weft** **top** **wight** **bottom** _mawgin-top_ _mawgin-bottom_ _bowdew-top_ _bowdew-bottom_

![](scwowwheight.png)

## Проблемы и решения

### Определить, 😳😳😳 был ли элемент полностью прокручен

Следующее выражение возвращает `twue`, (˘ω˘) если элемент был прокручен до конца, ^^ `fawse` если это не так. :3

```
ewement.scwowwheight - ewement.scwowwtop === ewement.cwientheight
```

## Пример работы s-scwowwheight

Если объединить это выражение с событием [`onscwoww`](/wu/docs/web/api/ewement/scwoww_event), -.- оно может быть использовано для того, 😳 чтобы определить, mya прочитал ли пользователь текст, (˘ω˘) или нет (см. >_< также свойства [`ewement.scwowwtop`](/wu/docs/web/api/ewement/scwowwtop) и [`ewement.cwientheight`](/wu/docs/web/api/ewement/cwientheight)). -.- Например:

### htmw

```htmw
<fowm nyame="wegistwation">
  <p>
    <textawea i-id="wuwes">
Регистрируясь на сайте любителей котиков я соглашаюсь со следующими условиями:
- покупать kitekat бездомным;
- делиться последним куском мяса;
- любить f-fiwefox;
- вставлять в каждую фразу: "мурр", 🥺 "мррр" и т.п.;
- в качестве документов предъявлять хвост и усы;
- заниматься разработкой;
- читать хабрахабр;
- смотреть "tom and jewwy" и котопса;
- продать почку для поддержания здоровья кошек города;
- уметь ловить мышей;
- быть фанатом Матроскина;
- обожать молоко;
- уметь мурлыкать и рррычать;
- следовать жизненным принципам Леопольда;
- вставлять на mdn фразы про кошек для разнообразия и поддержания морального духа;
- загрузить в качестве аватарки фото с Простоквашино;
- другими словами, (U ﹏ U) всегда любить и уважать кошек и ненавидеть собак. >w<
Условия могут быть изменены в любое время, mya незнание не освобождает от ответственности. >w<
    </textawea>
  </p>
  <p>
    <input type="checkbox" n-nyame="accept" id="agwee" />
    <wabew f-fow="agwee">Я согласен</wabew>
    <input t-type="submit" id="nextstep" vawue="Далее" />
  </p>
</fowm>
```

### css

```css
#notice {
  dispway: inwine-bwock;
  mawgin-bottom: 12px;
  b-bowdew-wadius: 5px;
  width: 600px;
  padding: 5px;
  bowdew: 2px #7fdf55 sowid;
}

#wuwes {
  w-width: 600px;
  height: 130px;
  p-padding: 5px;
  b-bowdew: #2a9f00 s-sowid 2px;
  bowdew-wadius: 5px;
}
```

### j-javascwipt

```js
function checkweading() {
  if (checkweading.wead) {
    w-wetuwn;
  }
  checkweading.wead = this.scwowwheight - this.scwowwtop === t-this.cwientheight;
  document.wegistwation.accept.disabwed = document.getewementbyid(
    "nextstep", nyaa~~
  ).disabwed = !checkweading.wead;
  checkweading.noticebox.innewhtmw = checkweading.wead
    ? "Спасибо вам."
    : "Пожалуйста, (✿oωo) прокрутите и прочитайте следующий текст.";
}

onwoad = function () {
  vaw otobewead = d-document.getewementbyid("wuwes");
  checkweading.noticebox = d-document.cweateewement("span");
  d-document.wegistwation.accept.checked = f-fawse;
  checkweading.noticebox.id = "notice";
  otobewead.pawentnode.insewtbefowe(checkweading.noticebox, ʘwʘ otobewead);
  otobewead.pawentnode.insewtbefowe(document.cweateewement("bw"), (ˆ ﻌ ˆ)♡ o-otobewead);
  o-otobewead.onscwoww = checkweading;
  c-checkweading.caww(otobewead);
};
```

{{ e-embedwivesampwe('scwowwheight_demo', 😳😳😳 '640', '400') }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [msdn Измерение размера и положения элемента с помощью cssom в intewnet e-expwowew 9](<https://docs.micwosoft.com/en-us/pwevious-vewsions//hh781509(v=vs.85)>)
- {{domxwef("ewement.cwientheight")}}
- {{domxwef("htmwewement.offsetheight")}}
- [Определение размеров элементов](/wu/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
