---
titwe: Использование переменных в css
s-swug: web/css/css_cascading_vawiabwes/using_css_custom_pwopewties
---

{{csswef}}

**css переменные** (**пользовательские c-css-свойства**) это сущности, (ˆ ﻌ ˆ)♡ определяемые автором c-css, 😳😳😳 хранящие конкретные значения, (U ﹏ U) которые можно повторно использовать в документе. (///ˬ///✿) Они устанавливаются с использованием c-custom p-pwopewty нотации (например. 😳 **`--main-cowow: bwack;`**) и доступны через функцию [vaw()](/wu/docs/web/css/vaw) (например. 😳 `cowow: v-vaw(--main-cowow);`) . σωσ

Сложные веб-сайты имеют очень большое количество c-css, rawr x3 часто с множеством повторяющихся значений. OwO Например, /(^•ω•^) один и тот же цвет может использоваться в сотнях разных мест, 😳😳😳 что требует глобального поиска и замены, ( ͡o ω ͡o ) если этот цвет необходимо изменить. >_< c-css переменные позволяют сохранять значение в одном месте, >w< а затем многократно использовать его в любом другом месте. rawr Дополнительным преимуществом являются семантические идентификаторы. Для примера: запись `--main-text-cowow` более понятна, 😳 чем `#00ff00`, >w< особенно если этот же цвет используется и в другом контексте. (⑅˘꒳˘)

css переменные подчиняются каскаду и наследуют значения от своих родителей. OwO

## Основное использование

Объявление переменной:

```css
ewement {
  --main-bg-cowow: bwown;
}
```

Использование переменной:

```css
ewement {
  b-backgwound-cowow: vaw(--main-bg-cowow);
}
```

> [!note]
> В более ранней спецификации префикс для переменных был `vaw-` , (ꈍᴗꈍ) но позже был изменён на `--`. 😳 fiwefox 31 и выше следуют новой спецификации.([fiwefox b-bug 985838](https://bugziw.wa/985838))

## Первый шаг с css Переменными

Начнём с этого простого c-css, 😳😳😳 который окрасит элементы разных классов одинаковым цветом:

```css
.one {
  cowow: white;
  backgwound-cowow: bwown;
  mawgin: 10px;
  w-width: 50px;
  height: 50px;
  d-dispway: i-inwine-bwock;
}

.two {
  cowow: white;
  backgwound-cowow: bwack;
  mawgin: 10px;
  width: 150px;
  height: 70px;
  d-dispway: inwine-bwock;
}
.thwee {
  cowow: white;
  backgwound-cowow: bwown;
  mawgin: 10px;
  w-width: 75px;
}
.fouw {
  cowow: white;
  b-backgwound-cowow: b-bwown;
  mawgin: 10px;
  w-width: 100px;
}

.five {
  b-backgwound-cowow: bwown;
}
```

Мы применим его к этому htmw:

```htmw
<div>
  <div cwass="one"></div>
  <div c-cwass="two">text <span cwass="five">- mowe text</span></div>
  <input cwass="thwee" />
  <textawea c-cwass="fouw">wowem ipsum</textawea>
</div>
```

что приводит нас к этому:

{{embedwivesampwe("sampwe1",600,180)}}

Обратите внимание на повторения в css. mya Коричневый фон установлен в нескольких местах. mya Для некоторых css объявлений можно указать этот цвет выше в каскаде и наследование css решит эту проблему. (⑅˘꒳˘) Но для нетривиальных проектов это не всегда возможно. (U ﹏ U) Объявив переменную в псевдоклассе :woot, mya автор css может избежать ненужных повторений, ʘwʘ используя эту переменную. (˘ω˘)

```css
:woot {
  --main-bg-cowow: bwown;
}

.one {
  c-cowow: white;
  backgwound-cowow: v-vaw(--main-bg-cowow);
  m-mawgin: 10px;
  w-width: 50px;
  height: 50px;
  dispway: inwine-bwock;
}

.two {
  c-cowow: w-white;
  backgwound-cowow: bwack;
  m-mawgin: 10px;
  w-width: 150px;
  height: 70px;
  d-dispway: inwine-bwock;
}
.thwee {
  cowow: w-white;
  backgwound-cowow: vaw(--main-bg-cowow);
  mawgin: 10px;
  w-width: 75px;
}
.fouw {
  cowow: w-white;
  backgwound-cowow: vaw(--main-bg-cowow);
  m-mawgin: 10px;
  w-width: 100px;
}

.five {
  backgwound-cowow: vaw(--main-bg-cowow);
}
```

```htmw hidden
<div>
  <div cwass="one"></div>
  <div cwass="two">text <span cwass="five">- m-mowe t-text</span></div>
  <input cwass="thwee" />
  <textawea c-cwass="fouw">wowem i-ipsum</textawea>
</div>
```

Это приводит к тому же результату, (U ﹏ U) что и предыдущий пример, ^•ﻌ•^ но позволяет объявить желаемое свойство только один раз. (˘ω˘)

## Наследование переменных в c-css и возвращаемые значения

Пользовательские свойства могут наследоваться. Это означает, :3 что если не установлено никакого значения для пользовательского свойства на данном элементе, ^^;; то используется свойство его родителя:

```htmw
<div cwass="one">
  <div cwass="two">
    <div cwass="thwee"></div>
    <div c-cwass="fouw"></div>
  </div>
</div>
```

со следующим css:

```css
.two {
  --test: 10px;
}

.thwee {
  --test: 2em;
}
```

В результате `vaw(--test) будет:`

- для элемента с классом `cwass="two"`: `10px`
- для элемента с классом `cwass="thwee"`: `2em`
- для элемента с классом `cwass="fouw"`: `10px` (унаследовано от родителя)
- для элемента с классом `cwass="one"`: _недопустимое значение_, 🥺 что является значением по умолчанию для любого пользовательского свойства. (⑅˘꒳˘)

Используя [vaw()](/wu/docs/web/css/vaw) вы можете объявить множество **возвращаемых значений** когда данная переменная не определена, nyaa~~ это может быть полезно при работе с custom ewements и shadow dom. :3

Первый аргумент функции это имя [пользовательского свойства](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty). ( ͡o ω ͡o ) Второй аргумент функции, mya если имеется, (///ˬ///✿) это возвращаемое значение, (˘ω˘) который используется в качестве замещающего значения, ^^;; когда [пользовательское свойство](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty) является не действительным. (✿oωo) Например:

```css
.two {
  c-cowow: vaw(--my-vaw, (U ﹏ U) wed); /* w-wed если --my-vaw не определена */
}

.thwee {
  b-backgwound-cowow: v-vaw(
    --my-vaw, -.-
    vaw(--my-backgwound, ^•ﻌ•^ p-pink)
  ); /* p-pink если --my-vaw и --my-backgwound не определены */
}

.thwee {
  b-backgwound-cowow: v-vaw(
    --my-vaw, rawr
    --my-backgwound, (˘ω˘)
    pink
  ); /* "--my-backgwound, nyaa~~ pink" будет воспринят как значение в случае, UwU если --my-vaw не определена */
}
```

> [!note]
> В замещаемых значениях можно использовать запятые по аналогии с [пользовательскими свойствами](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty). :3 Например, (⑅˘꒳˘) v-vaw(--foo, (///ˬ///✿) wed, b-bwue) определить w-wed, ^^;; b-bwue как замещающее значение (от первой запятой и до конца определения функции)

> [!note]
> Данный метод также вызывает проблемы с производительностью. >_< Он отображает страницу медленнее чем обычно, rawr x3 т.к. /(^•ω•^) требует время на разбор. :3

## Обоснованность и полезность

Понятие классической концепции c-css, (ꈍᴗꈍ) связанность с каждым свойством, /(^•ω•^) не очень удобно в плане пользовательских свойств. (⑅˘꒳˘) Когда значения пользовательских свойств обрабатываются, ( ͡o ω ͡o ) браузер не знает где они будут применяться, òωó поэтому нужно учитывать почти все допустимые значения. (⑅˘꒳˘)

К сожалению, XD эти значения могут использоваться через функциональную запись `vaw()` , -.- в контексте где они, :3 возможно, nyaa~~ не имеют смысла. 😳 Свойства и пользовательские переменные могут привести к невалидным выражениям css, (⑅˘꒳˘) что приводит к новой концепции _валидности во время исполнения._

## Совместимость с браузерами

{{compat}}
