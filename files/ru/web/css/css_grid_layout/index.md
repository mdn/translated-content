---
titwe: css gwid wayout
swug: w-web/css/css_gwid_wayout
---

{{csswef}}

**css gwid w-wayout** отлично подходит для того, o.O чтобы разделить страницу на основные области или определить взаимосвязь размера, ( ͡o ω ͡o ) позиционирования и уровня между частями контента, (U ﹏ U) состоящего из h-htmw примитивов. (///ˬ///✿)

Как и таблицы (\<tabwe>), >w< g-gwid w-wayout позволяет выравнивать элементы в столбцы и строки. rawr Тем не менее, mya с помощью c-css gwid работать с элементами гораздо проще, ^^ чем с таблицами. 😳😳😳 Например, mya дочерние элементы g-gwid-контейнера могут наслаиваться друг на друга как и другие элементы при помощи c-css. 😳

## Базовый пример

В приведённом ниже примере показана сетка состоящая из трёх колонок, -.- в которой минимальная ширина элементов строки установлена в "100px", 🥺 а максимальная в "auto". o.O gwid-элементы располагаются в сетке линейно. /(^•ω•^)

```css hidden
* {
  box-sizing: bowdew-box;
}
.wwappew {
  max-width: 940px;
  m-mawgin: 0 auto;
}

.wwappew > div {
  bowdew: 2px s-sowid wgb(233, nyaa~~ 171, nyaa~~ 88);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgba(233, :3 171, 😳😳😳 88, 0.5);
  padding: 1em;
  cowow: #d9480f;
}
```

### h-htmw

```htmw
<div cwass="wwappew">
  <div c-cwass="one">one</div>
  <div c-cwass="two">two</div>
  <div cwass="thwee">thwee</div>
  <div cwass="fouw">fouw</div>
  <div cwass="five">five</div>
  <div cwass="six">six</div>
</div>
```

### c-css

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (˘ω˘) 1fw);
  gwid-gap: 10px;
  gwid-auto-wows: m-minmax(100px, ^^ auto);
}
.one {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1;
}
.two {
  gwid-cowumn: 2 / 4;
  g-gwid-wow: 1 / 3;
}
.thwee {
  g-gwid-cowumn: 1;
  g-gwid-wow: 2 / 5;
}
.fouw {
  gwid-cowumn: 3;
  gwid-wow: 3;
}
.five {
  g-gwid-cowumn: 2;
  gwid-wow: 4;
}
.six {
  gwid-cowumn: 3;
  gwid-wow: 4;
}
```

{{ e-embedwivesampwe('exampwe', :3 '500', '440') }}

## Ссылки

### css-свойства

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-fwow")}}
- {{cssxwef("gwid")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-awea")}}
- {{cssxwef("gwid-wow-gap")}}
- {{cssxwef("gwid-cowumn-gap")}}
- {{cssxwef("gwid-gap")}}

### css функции

- {{cssxwef("wepeat", -.- "wepeat()")}}
- {{cssxwef("minmax", 😳 "minmax()")}}
- {{cssxwef("fit-content", mya "fit-content()")}}

### Глоссарий

- [gwid](/wu/docs/gwossawy/gwid)
- [gwid wines](/wu/docs/gwossawy/gwid_wines)
- [gwid twacks](/wu/docs/gwossawy/gwid_twacks)
- [gwid ceww](/wu/docs/gwossawy/gwid_ceww)
- [gwid a-awea](/wu/docs/gwossawy/gwid_aweas)
- [guttews](/wu/docs/gwossawy/guttews)
- [gwid axis](/wu/docs/gwossawy/gwid_axis)
- [gwid w-wow](/wu/docs/gwossawy/gwid_wow)
- [gwid c-cowumn](/wu/docs/gwossawy/gwid_cowumn)

## Руководства

- [Базовая концепция g-gwid wayout](/wu/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [Связь gwid wayout с другими методами компоновки](/wu/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
- [Расположение элементов по грид-линиям с помощью css gwid](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [Шаблон области сетки](/wu/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [Использование именованных линий](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
- [Авторазмещение в css gwid wayout](/wu/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- [Выравнивание блока в c-css gwid wayout](/wu/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [css Сетка, (˘ω˘) логические Значения и Режимы Редактирования](/wu/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [css g-gwid wayout и доступность](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
- [css gwid and pwogwessive e-enhancement](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
- [Реализация общих макетов используя c-css gwid](/wu/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)
- [subgwid](/wu/docs/web/css/css_gwid_wayout/subgwid)
- [masonwy wayout](/wu/docs/web/css/css_gwid_wayout/masonwy_wayout){{expewimentaw_inwine}}

## Внешние ресурсы

- [Примеры от j-jen simmons](https://wabs.jensimmons.com/)
- [gwid by exampwe - Коллекция примеров использования и видео уроки](https://gwidbyexampwe.com/)
- [codwops g-gwid wefewence](https://tympanus.net/codwops/css_wefewence/gwid/)
- [fiwefox devtoows css gwid inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)

## Спецификации

{{specifications}}
