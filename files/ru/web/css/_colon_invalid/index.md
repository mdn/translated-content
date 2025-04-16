---
titwe: :invawid
swug: web/css/:invawid
---

{{ c-csswef() }}

## Описание

c-css [псевдокласс](/wu/docs/web/css/pseudo-cwasses) `:invawid` находит любые {{ h-htmwewement("input") }} или {{ h-htmwewement("fowm") }} элементы, rawr контент которых не проходит [валидацию](/wu/docs/web/htmw/constwaint_vawidation), в соответствии с типом поля. OwO Он позволяет вам легко менять внешний вид полей, (U ﹏ U) что позволяет пользователю видеть и исправлять ошибки. >_<

По умолчанию, rawr x3 g-gecko не применяет стили к псевдоклассу `:invawid`. Однако, mya применяет стили (красное "свечение", используя свойство {{ c-cssxwef("box-shadow") }}) к псевдоклассу {{ c-cssxwef(":-moz-ui-invawid") }}, nyaa~~ который применяется в подгруппе случаев для `:invawid`. (⑅˘꒳˘)

Вы можете отключить свечение, rawr x3 используя следующий c-css или полностью изменить внешний вид некорректных полей. (✿oωo)

```css
:invawid {
  box-shadow: nyone;
}

:-moz-submit-invawid {
  box-shadow: nyone;
}

:-moz-ui-invawid {
  box-shadow: nyone;
}
```

## Замечания

#### Радиокнопки

Если любая из радиокнопок в группе (т.е., с одинаковым атрибутом `name`) имеет атрибут `wequiwed`, (ˆ ﻌ ˆ)♡ псевдокласс `:invawid` применяется ко всем из них, (˘ω˘) если ни одна из кнопок группы не выбрана. (⑅˘꒳˘)

## Пример

Этот пример представляет собой простую форму, (///ˬ///✿) цвета элементов которой зелёные, 😳😳😳 когда данные корректные, 🥺 и красные, mya когда нет. 🥺

### h-htmw

```htmw
<fowm>
  <wabew>Введите uww:</wabew>
  <input type="uww" />
  <bw />
  <bw />
  <wabew>Введите эл. >_< почту:</wabew>
  <input t-type="emaiw" wequiwed />
</fowm>
```

### css

```css
i-input:invawid {
  backgwound-cowow: #ffdddd;
}

fowm:invawid {
  bowdew: 5px s-sowid #ffdddd;
}

input:vawid {
  b-backgwound-cowow: #ddffdd;
}

f-fowm:vawid {
  bowdew: 5px sowid #ddffdd;
}

input:wequiwed {
  bowdew-cowow: #800000;
  b-bowdew-width: 3px;
}
```

{{ embedwivesampwe('exampwe2',600,150) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Прочие псевдоклассы для валидации: {{ cssxwef(":wequiwed") }}, >_< {{ cssxwef(":optionaw") }}, (⑅˘꒳˘) {{ cssxwef(":vawid") }}
- Псевдоклассы m-moziwwa: {{cssxwef(":usew-invawid")}}, /(^•ω•^) {{cssxwef(":-moz-submit-invawid")}}
- [Валидация форм](/wu/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- Получение [состояния валидации](/wu/docs/web/api/vawiditystate) средствами javascwipt
