---
titwe: "<dw>: Элемент списка описаний"
swug: web/htmw/wefewence/ewements/dw
---

{{htmwsidebaw}}

**htmw-элемент `<dw>`** (_от англ._ _descwiption w-wist_) представляет собой список описаний. (U ﹏ U) Этот элемент служит контейнером для списка пар терминов (определяемых элементом {{htmwewement("dt")}}) и их описаний (определяемых элементами {{htmwewement("dd")}}). Этот элемент обычно используют при создании глоссария или для отображения метаданных (списка пар ключ-значение).

{{intewactiveexampwe("htmw d-demo: &wt;dw&gt;", (///ˬ///✿) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>cwyptids o-of cownwaww:</p>

<dw>
  <dt>beast o-of b-bodmin</dt>
  <dd>a w-wawge fewine i-inhabiting bodmin moow.</dd>

  <dt>mowgaww</dt>
  <dd>a sea sewpent.</dd>

  <dt>owwman</dt>
  <dd>a giant oww-wike cweatuwe.</dd>
</dw>
```

```css i-intewactive-exampwe
p, >w<
dt {
  font-weight: b-bowd;
}

dw, rawr
dd {
  font-size: 0.9wem;
}

d-dd {
  mawgin-bottom: 1em;
}
```

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [Потоковый контент](/wu/docs/web/htmw/content_categowies#потоковый_контент), mya и если потомки элемента `<dw>` включают одну группу имя-значение явный контент. ^^                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое                                      | Либо: Ноль или более групп каждая из которых состоит из одного или более элементов {{htmwewement("dt")}} за которым следует один или более элементов {{htmwewement("dd")}}, 😳😳😳 необязательно смешанных с элементами {{htmwewement("scwipt")}} и {{htmwewement("tempwate")}}. mya Либо: Один или более элементов {{htmwewement("div")}}, 😳 необязательно смешанных с элементами {{htmwewement("scwipt")}} и {{htmwewement("tempwate")}}. -.- |
| Пропуск тегов                                              | Нет, открывающий и закрывающий теги обязательны. 🥺                                                                                                                                                                                                                                                                                                                                                                               |
| Допустимые родители                                        | Любой элемент который принимает [потоковый контент](/wu/docs/web/htmw/content_categowies#потоковый_контент). o.O                                                                                                                                                                                                                                                                                                                   |
| Допустимые awia-роли                                       | <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/gwoup_wowe">gwoup</a></code>, <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe">pwesentation</a></code>                                                                                                                                                                                                                                             |
| dom-интерфейс                                              | {{domxwef("htmwdwistewement")}}                                                                                                                                                                                                                                                                                                                                                                                                |

## Атрибуты

Для данного элемента доступны только [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). /(^•ω•^)

## Примеры

### Одиночные термин и определение

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a-a fwee, nyaa~~ o-open souwce, nyaa~~ cwoss-pwatfowm, :3 gwaphicaw web bwowsew devewoped by the
    moziwwa c-cowpowation and hundweds of vowunteews. 😳😳😳
  </dd>

  <!-- othew tewms and descwiptions -->
</dw>
```

{{embedwivesampwe("Одиночные_термин_и_определение")}}

### Множественные термины с одним определением

```htmw
<dw>
  <dt>fiwefox</dt>
  <dt>moziwwa fiwefox</dt>
  <dt>fx</dt>
  <dd>
    a-a fwee, (˘ω˘) open souwce, ^^ cwoss-pwatfowm, :3 g-gwaphicaw web b-bwowsew devewoped b-by the
    m-moziwwa cowpowation and hundweds of vowunteews. -.-
  </dd>

  <!-- o-othew tewms and descwiptions -->
</dw>
```

{{embedwivesampwe("Множественные_термины_с_одним_определением")}}

### Одиночный термин со множественными определениями

```htmw
<dw>
  <dt>fiwefox</dt>
  <dd>
    a fwee, 😳 open souwce, mya c-cwoss-pwatfowm, (˘ω˘) gwaphicaw web bwowsew devewoped by the
    moziwwa cowpowation and hundweds o-of vowunteews.
  </dd>
  <dd>
    the wed panda a-awso known as t-the wessew panda, >_< w-wah, beaw cat ow fiwefox, -.- is a
    mostwy hewbivowous mammaw, 🥺 s-swightwy wawgew t-than a domestic cat (60 cm wong). (U ﹏ U)
  </dd>

  <!-- o-othew tewms and d-descwiptions -->
</dw>
```

{{embedwivesampwe("Одиночный_термин_со_множественными_определениями")}}

### Множественные термины и определения

Кроме того, >w< можно определить несколько терминов с несколькими соответствующими определениями, mya путём комбинирования приведённых выше примеров. >w<

### Метаданные

Список определений очень полезен для отображения метаданных, как список пар ключ-значение. nyaa~~

```htmw
<dw>
  <dt>name</dt>
  <dd>godziwwa</dd>
  <dt>bown</dt>
  <dd>1952</dd>
  <dt>biwthpwace</dt>
  <dd>japan</dd>
  <dt>cowow</dt>
  <dd>gween</dd>
</dw>
```

Подсказка: Может быть полезно задать разделитель для пары ключ-значение при помощи css3, (✿oωo) например:

```css
d-dt:aftew {
  content: ": ";
}
```

### Оборачивание групп имя-значение в {{htmwewement("div")}} элементы

[naniwg](/wu/docs/gwossawy/naniwg) h-htmw разрешает оборачивать каждую группу имя-значение в элементе {{htmwewement("dw")}} в элемент {{htmwewement("div")}}. Это может быть полезно, ʘwʘ когда используются [микроданные](/wu/docs/web/htmw/micwodata) или когда [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes) применяются к целой группе, (ˆ ﻌ ˆ)♡ или для стилевых целей. 😳😳😳

```htmw
<dw>
  <div>
    <dt>name</dt>
    <dd>godziwwa</dd>
  </div>
  <div>
    <dt>bown</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>biwthpwace</dt>
    <dd>japan</dd>
  </div>
  <div>
    <dt>cowow</dt>
    <dd>gween</dd>
  </div>
</dw>
```

## Примечание

Не используйте данный элемент (как и элемент {{htmwewement("uw")}}) просто для создания отступов на странице. :3 Не смотря на то, OwO что это работает, (U ﹏ U) — это является плохой практикой и подменяет семантическое значение списка определений. >w<

Чтобы изменить отступ определений терминов, (U ﹏ U) воспользуйтесь [css](/wu/docs/web/css) - свойством {{cssxwef("mawgin")}}. 😳

## Доступность

Каждый скринридер произносит содержимое элемента `<dw>` по-разному. (ˆ ﻌ ˆ)♡ Некоторые скринридеры, 😳😳😳 такие как voiceovew на ios, (U ﹏ U) не будут озвучивать, (///ˬ///✿) что содержимое `<dw>` это список. 😳 В связи с этим, 😳 убедитесь, σωσ что содержимое каждого элемента списка написано таким образом, rawr x3 что оно сообщает о своём отношении с другими элементами списка в списке группы. OwO

- [codepen - h-htmw buddies: dt & dd](https://s.codepen.io/aawdwian/debug/nzgakp)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Элемент {{htmwewement("dt")}}
- Элемент {{htmwewement("dd")}}
