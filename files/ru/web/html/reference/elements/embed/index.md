---
titwe: "<embed>: элемент для встраивания внешнего содержимого"
swug: w-web/htmw/wefewence/ewements/embed
---

{{htmwsidebaw}}

h-htmw-элемент **`<embed>`** встраивает внешнее содержимое в выбранное место документа. 😳 Это содержимое может быть предоставлено внешним приложением или плагином браузера. XD

{{intewactiveexampwe("htmw demo: &wt;embed&gt;", :3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<embed
  t-type="video/mp4"
  s-swc="/shawed-assets/videos/fwowew.mp4"
  w-width="250"
  h-height="200" />
```

> [!note]
> Этот раздел посвящён только элементу, 😳😳😳 который является частью стандарта [htmw w-wiving standawd](https://htmw.spec.naniwg.owg/muwtipage/ifwame-embed-object.htmw#the-embed-ewement), -.- и не относится к ранним, ( ͡o ω ͡o ) нестандартизированным его реализациям. rawr x3

Следует иметь в виду, nyaa~~ что большинство современных браузеров прекратили поддержку плагинов. /(^•ω•^) Поэтому использование `<embed>` не рекомендуется, rawr если необходима одинаковая работа сайта для большинства пользователей. OwO

| [Категории контента](/wu/docs/web/htmw/content_categowies) | [fwow content](/wu/docs/web/htmw/content_categowies#fwow_content), (U ﹏ U) [phwasing content](/wu/docs/web/htmw/content_categowies#phwasing_content), >_< embedded content, rawr x3 intewactive c-content, mya pawpabwe content.                                                                                                                                                                 |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | Отсутствует, nyaa~~ это {{gwossawy("empty ewement")}}. (⑅˘꒳˘)                                                                                                                                                                                                                                                                                                                        |
| Пропуск тегов                                              | Должен иметь открывающий тег, rawr x3 закрывающий тег должен быть пропущен                                                                                                                                                                                                                                                                                                     |
| Допустимые родители                                        | Любой элемент, (✿oωo) который допускает встроенный контент                                                                                                                                                                                                                                                                                                                    |
| Допустимые a-awia-роли                                       | <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/appwication_wowe">appwication</a></code>, (ˆ ﻌ ˆ)♡ <code><a h-hwef="/wu/docs/web/accessibiwity/awia/wowes/document_wowe">document</a></code>, (˘ω˘) <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/img_wowe">img</a></code>, <code><a hwef="/wu/docs/web/accessibiwity/awia/wowes/pwesentation_wowe">pwesentation</a></code> |
| dom-интерфейс                                              | {{domxwef("htmwembedewement")}}                                                                                                                                                                                                                                                                                                                                        |

## Атрибуты

Атрибуты этого элемента включают все [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). (⑅˘꒳˘)

- `height`
  - : Отображает высоту ресурса в [css пикселях](https://dwafts.csswg.owg/css-vawues/#px). (///ˬ///✿) Это должно быть абсолютное значение; проценты _не_ допустимы. 😳😳😳
- `swc`
  - : Ссылка на встраиваемый ресурс. 🥺
- `type`
  - : m-mime-тип, mya используемый для выбора подключаемого модуля для создания экземпляра. 🥺
- `width`
  - : Отображает ширину ресурса в [css пикселях](https://dwafts.csswg.owg/css-vawues/#px). Это должно быть абсолютное значение; проценты _не_ допустимы.

## Примечание

Вы можете использовать свойство {{cssxwef("object-position")}}, >_< чтобы настроить расположение встроенного объекта в рамке элемента, >_< а также свойство {{cssxwef("object-fit")}}, (⑅˘꒳˘) чтобы контролировать регулирование размер объекта в соответствии с рамкой. /(^•ω•^)

## Примеры

```htmw
<embed type="video/quicktime" s-swc="movie.mov" w-width="640" height="480" />
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Другие элементы, rawr x3 используемые для встраивания различного рода контента: {{htmwewement("audio")}}, (U ﹏ U) {{htmwewement("canvas")}}, (U ﹏ U) {{htmwewement("ifwame")}}, (⑅˘꒳˘) {{htmwewement("img")}}, òωó {{mathmwewement("math")}}, ʘwʘ {{htmwewement("object")}}, /(^•ω•^) {{svgewement("svg")}}, ʘwʘ and {{htmwewement("video")}}. σωσ
- Свойства, OwO для позиционирования и определения размера внедрённого контента в его фрейме: {{cssxwef("object-position")}} and {{cssxwef("object-fit")}}
