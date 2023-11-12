---
title: "<track>: Встраиваемая текстовая дорожка"
slug: Web/HTML/Element/track
---

{{HTMLSidebar}}

**HTML-элемент `<track>` **используется как дочерний элемент медиа-элементов {{HTMLElement("audio")}} and {{HTMLElement("video")}}. Позволяет указать синхронизированные текстовые дорожки (или данные на основе времени), например, для автоматической обработки субтитров. Файлы треков используют [формат WebVTT](/ru/docs/Web/API/WebVTT_API) (`.vtt` файлы) — Web Video Text Tracks или [Timed Text Markup Language (TTML).](https://w3c.github.io/ttml2/index.html)

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | Нет                                                                                                                                                                                             |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                            | Нет, это {{Glossary("empty element", "пустой элемент")}}.                                                                                                                                       |
| Пропуск тегов                                                    | Так как это пустой элемент, то открывающий тег обязателен, закрывающего не должно быть.                                                                                                         |
| Неявная ARIA-роль                                                | [Нет соответствующей роли](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                                                          |
| Допустимые родители                                              | Медиа элемент, перед любым [потоковым контентом](/ru/docs/Web/Guide/HTML/Content_categories#%D0%9F%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D1%82). |
| Допустимые ARIA-роли                                             | Нет                                                                                                                                                                                             |
| DOM интерфейс                                                    | {{domxref("HTMLTrackElement")}}                                                                                                                                                                 |

## Атрибуты

Этот элемент использует [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

- {{htmlattrdef("default")}}
  - : Этот атрибут указывает, что дорожка должна быть включена, если пользовательские настройки не указывают, что другая дорожка является более подходящей. Может использоваться только для одного элемента `track` в элементе мультимедиа.
- {{htmlattrdef("kind")}}

  - : Как текстовый трек должен быть использован. Если значение опущено, тип по умолчанию — `subtitles` (субтитры). Если атрибут отсутствует, будет использоваться `subtitles`. Если атрибут содержит недопустимое значение, оно принимает значение `metadata`. (Версии Chrome ранее 52 рассматривали недопустимое значение как `subtitles`.) Допускаются следующие ключевые слова:

    - `subtitles`

      - Субтитры обеспечивают перевод контента, который не может быть понят зрителем. Например, диалог или текст, который не является английским, в фильме на английском языке.
      - Субтитры могут содержать дополнительный контент, обычно дополнительную справочную информацию. Например, текст в начале фильмов «Звёздных войн» или дата, время и место действия сцены.

    - `captions`

      - Подписи обеспечивают транскрипцию и, возможно, перевод аудио.
      - Подписи могут включать важную невербальную информацию, такую как музыкальные сигналы или звуковые эффекты. Возможно указывать источник сигналов (например, музыка, текст, персонаж).
      - Подходит для пользователей со слабым слухом или когда звук отключён.

    - `descriptions`

      - Текстовое описание видеоконтента.
      - Подходит для слепых пользователей или там, где видео не видно.

    - `chapters`

      - Названия глав предназначены для использования при навигации по медиа-ресурсу.

    - `metadata`

      - Данные, используемые скриптами. Не видны пользователю.

- {{htmlattrdef("label")}}
  - : Видимый пользователю заголовок текстовой дорожки, который используется браузером при выводе списка доступных текстовых дорожек.
- {{htmlattrdef("src")}}
  - : Адрес файла текстовой дорожки (`.vtt` файл). Должен быть действительным URL. Этот атрибут должен быть указан, а его значение URL должно иметь то же происхождение, что и документ — исключая случаи, когда родительский {{HTMLElement("audio")}} или {{HTMLElement("video")}} данного `track` элемента имеет атрибут [`crossorigin`](/ru/docs/Web/HTML/CORS_settings_attributes).
- {{htmlattrdef("srclang")}}
  - : Язык текстовых данных трека. Это должен быть валидный [BCP 47](https://r12a.github.io/app-subtags/) языковой тег (см. также [языковые тэги в HTML и XML)](https://www.w3.org/International/articles/language-tags/). Если для атрибута `kind` установлено значение `subtitles`, должен быть определён атрибут `srclang`.

## Примечания по использованию

### Типы данных дорожки

Тип данных, которые трек добавляет на носитель, задаётся в атрибуте `kind`, который может принимать значения `subtitles`, `captions`, `descriptions`, `chapters` или `metadata`. Элемент указывает на исходный файл, содержащий синхронизированный по времени текст, который браузер предоставляет, когда пользователь запрашивает дополнительные данные.

Отдельный `media` элемент не может иметь элементы `track` с одинаковыми значениями `kind`, `srclang` и `label`.

### Обнаружение изменений сигнала

{{page("/ru/docs/Web/API/TextTrack/cuechange_event", "On the track element")}}

## Пример

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
  <!-- Fallback -->
  ...
</video>
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [WebVTT — формат файлов текстовой дорожки](/ru/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
