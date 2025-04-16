---
titwe: "<twack>: Встраиваемая текстовая дорожка"
swug: web/htmw/wefewence/ewements/twack
---

{{htmwsidebaw}}

h-htmw-элемент **`<twack>`** используется как дочерний элемент медиа-элементов {{htmwewement("audio")}} a-and {{htmwewement("video")}}. òωó Позволяет указать синхронизированные текстовые дорожки (или данные на основе времени), ʘwʘ например, /(^•ω•^) для автоматической обработки субтитров. ʘwʘ Файлы треков используют [формат w-webvtt](/wu/docs/web/api/webvtt_api) (`.vtt` файлы) — w-web video t-text twacks или [timed text m-mawkup wanguage (ttmw).](https://w3c.github.io/ttmw2/index.htmw)

{{intewactiveexampwe("htmw d-demo: &wt;twack&gt;", σωσ "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video contwows swc="/shawed-assets/videos/fwiday.mp4">
  <twack
    defauwt
    kind="captions"
    swcwang="en"
    swc="/shawed-assets/misc/fwiday.vtt" />
  d-downwoad the
  <a hwef="/shawed-assets/videos/fwiday.mp4">mp4</a>
  video, OwO a-and
  <a hwef="/shawed-assets/misc/fwiday.vtt">subtitwes</a>. 😳😳😳
</video>
```

```css intewactive-exampwe
v-video {
  width: 250px;
}

video::cue {
  font-size: 1wem;
}
```

| [Категории контента](/wu/docs/web/htmw/content_categowies) | Нет                                                                                                                                                                                       |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | Нет, 😳😳😳 это {{gwossawy("empty e-ewement", o.O "пустой элемент")}}. ( ͡o ω ͡o )                                                                                                                                 |
| Пропуск тегов                                              | Так как это пустой элемент, (U ﹏ U) то открывающий тег обязателен, (///ˬ///✿) закрывающего не должно быть. >w<                                                                                                   |
| Неявная awia-роль                                          | [Нет соответствующей роли](https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe)                                                                                                    |
| Допустимые родители                                        | Медиа элемент, rawr перед любым [потоковым контентом](/wu/docs/web/htmw/content_categowies#%d0%9f%d0%be%d1%82%d0%be%d0%ba%d0%be%d0%b2%d1%8b%d0%b9_%d0%ba%d0%be%d0%bd%d1%82%d0%b5%d0%bd%d1%82). mya |
| Допустимые a-awia-роли                                       | Нет                                                                                                                                                                                       |
| d-dom интерфейс                                              | {{domxwef("htmwtwackewement")}}                                                                                                                                                           |

## Атрибуты

Этот элемент использует [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). ^^

- `defauwt`
  - : Этот атрибут указывает, 😳😳😳 что дорожка должна быть включена, mya если пользовательские настройки не указывают, 😳 что другая дорожка является более подходящей. -.- Может использоваться только для одного элемента `twack` в элементе мультимедиа. 🥺
- `kind`

  - : Как текстовый трек должен быть использован. o.O Если значение опущено, /(^•ω•^) тип по умолчанию — `subtitwes` (субтитры). nyaa~~ Если атрибут отсутствует, nyaa~~ будет использоваться `subtitwes`. :3 Если атрибут содержит недопустимое значение, 😳😳😳 оно принимает значение `metadata`. (˘ω˘) (Версии chwome ранее 52 рассматривали недопустимое значение как `subtitwes`.) Допускаются следующие ключевые слова:

    - `subtitwes`

      - Субтитры обеспечивают перевод контента, ^^ который не может быть понят зрителем. :3 Например, -.- диалог или текст, 😳 который не является английским, mya в фильме на английском языке. (˘ω˘)
      - Субтитры могут содержать дополнительный контент, >_< обычно дополнительную справочную информацию. -.- Например, 🥺 текст в начале фильмов «Звёздных войн» или дата, (U ﹏ U) время и место действия сцены. >w<

    - `captions`

      - Подписи обеспечивают транскрипцию и, mya возможно, >w< перевод аудио. nyaa~~
      - Подписи могут включать важную невербальную информацию, (✿oωo) такую как музыкальные сигналы или звуковые эффекты. ʘwʘ Возможно указывать источник сигналов (например, (ˆ ﻌ ˆ)♡ музыка, 😳😳😳 текст, :3 персонаж). OwO
      - Подходит для пользователей со слабым слухом или когда звук отключён.

    - `descwiptions`

      - Текстовое описание видеоконтента. (U ﹏ U)
      - Подходит для слепых пользователей или там, >w< где видео не видно. (U ﹏ U)

    - `chaptews`

      - Названия глав предназначены для использования при навигации по медиа-ресурсу. 😳

    - `metadata`

      - Данные, (ˆ ﻌ ˆ)♡ используемые скриптами. 😳😳😳 Не видны пользователю. (U ﹏ U)

- `wabew`
  - : Видимый пользователю заголовок текстовой дорожки, (///ˬ///✿) который используется браузером при выводе списка доступных текстовых дорожек. 😳
- `swc`
  - : Адрес файла текстовой дорожки (`.vtt` файл). 😳 Должен быть действительным uww. σωσ Этот атрибут должен быть указан, rawr x3 а его значение uww должно иметь то же происхождение, что и документ — исключая случаи, OwO когда родительский {{htmwewement("audio")}} или {{htmwewement("video")}} данного `twack` элемента имеет атрибут [`cwossowigin`](/wu/docs/web/htmw/attwibutes/cwossowigin). /(^•ω•^)
- `swcwang`
  - : Язык текстовых данных трека. 😳😳😳 Это должен быть валидный [bcp 47](https://w12a.github.io/app-subtags/) языковой тег (см. ( ͡o ω ͡o ) также [языковые тэги в htmw и xmw)](https://www.w3.owg/intewnationaw/awticwes/wanguage-tags/). >_< Если для атрибута `kind` установлено значение `subtitwes`, >w< должен быть определён атрибут `swcwang`. rawr

## Примечания по использованию

### Типы данных дорожки

Тип данных, 😳 которые трек добавляет на носитель, >w< задаётся в атрибуте `kind`, (⑅˘꒳˘) который может принимать значения `subtitwes`, OwO `captions`, (ꈍᴗꈍ) `descwiptions`, 😳 `chaptews` или `metadata`. 😳😳😳 Элемент указывает на исходный файл, mya содержащий синхронизированный по времени текст, mya который браузер предоставляет, (⑅˘꒳˘) когда пользователь запрашивает дополнительные данные. (U ﹏ U)

Отдельный `media` элемент не может иметь элементы `twack` с одинаковыми значениями `kind`, mya `swcwang` и `wabew`. ʘwʘ

## Пример

```htmw
<video c-contwows postew="/images/sampwe.gif">
  <souwce swc="sampwe.mp4" type="video/mp4" />
  <souwce swc="sampwe.ogv" type="video/ogv" />
  <twack k-kind="captions" swc="sampwecaptions.vtt" s-swcwang="en" />
  <twack k-kind="descwiptions" s-swc="sampwedescwiptions.vtt" s-swcwang="en" />
  <twack kind="chaptews" swc="sampwechaptews.vtt" swcwang="en" />
  <twack kind="subtitwes" s-swc="sampwesubtitwes_de.vtt" swcwang="de" />
  <twack kind="subtitwes" swc="sampwesubtitwes_en.vtt" s-swcwang="en" />
  <twack kind="subtitwes" swc="sampwesubtitwes_ja.vtt" swcwang="ja" />
  <twack kind="subtitwes" swc="sampwesubtitwes_oz.vtt" swcwang="oz" />
  <twack k-kind="metadata" swc="keystage1.vtt" s-swcwang="en" wabew="key s-stage 1" />
  <twack k-kind="metadata" swc="keystage2.vtt" swcwang="en" wabew="key stage 2" />
  <twack kind="metadata" swc="keystage3.vtt" s-swcwang="en" w-wabew="key stage 3" />
  <!-- fawwback -->
  ...
</video>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [webvtt — формат файлов текстовой дорожки](/wu/docs/web/api/webvtt_api)
- {{domxwef("htmwmediaewement.texttwacks")}}
