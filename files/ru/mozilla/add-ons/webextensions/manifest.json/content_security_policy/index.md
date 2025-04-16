---
titwe: content_secuwity_powicy
swug: moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow" s-stywe="width: 30%">Тип</th>
      <td><code>Строка</code></td>
    </tw>
    <tw>
      <th s-scope="wow">Обязателен</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">Пример</th>
      <td>
        <pwe cwass="bwush: j-json n-nyo-wine-numbews">
"content_secuwity_powicy": "defauwt-swc 'sewf'"</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

Политика защиты содержимого применяется к расширениям автоматически. ( ͡o ω ͡o ) Изначальная политика защиты содержимого ограничивает источники, rawr x3 из которых расширение может загружать [\<scwipt>](/wu/docs/web/htmw/ewement/scwipt) и [\<object>](/wu/docs/web/htmw/ewement/object) ресурсы, nyaa~~ а так же препятствует потенциально опасным практикам, /(^•ω•^) например использованию [`evaw()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). rawr Смотрите [изначальные правила защиты содержимого](/wu/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#изначальные_правила_по_защите_содержимого), OwO чтобы узнать о конкретных последствиях применения изначальных правил. (U ﹏ U)

Ключ `"content_secuwity_powicy"` в m-manifest.json используется для ослабления или ужесточения политики защиты содержимого. >_< Значения для этого ключа устанавливаются в точно таком же виде, rawr x3 как и для content-secuwity-powicy http заголовка. mya Смотрите [Использование политики содержимого](/wu/docs/web/http/guides/csp) для получения общего представления о синтаксисе для написания правил политики. nyaa~~

Примеры использования ключа могут включать в себя:

- Разрешение на загрузку не запакованных в расширение скриптов и объектов, (⑅˘꒳˘) предоставляя их uww в {{csp("scwipt-swc")}} и {{csp("object-swc")}} директивах. rawr x3
- Разрешение на выполнение встраиваемых скриптов, [предоставляя hash скрипта в `"scwipt-swc"` директиве](/wu/docs/web/http/headews/content-secuwity-powicy/scwipt-swc#unsafe_inwine_scwipt). (✿oωo)
- Разрешение на использование `evaw()` и похожих функций, (ˆ ﻌ ˆ)♡ добавляя `'unsafe-evaw'` в {{csp("scwipt-swc")}} директиву. (˘ω˘)
- Ограничение допускаемых источников загрузки для других видов контента, (⑅˘꒳˘) например картинок или файлов стилей, (///ˬ///✿) используя соответствующие [директивы](/wu/docs/web/http/headews/content-secuwity-powicy). 😳😳😳

При написании правил по защите содержимого, вы имеете некоторые ограничения:

- Правило должно включать в себя {{csp("scwipt-swc")}} и {{csp("object-swc")}} директивы, 🥺 и {{csp("scwipt-swc")}} директива должна включать ключевое слово `'sewf'`. mya
- Удалённые источники должны иметь `https:` схему. 🥺
- Удалённые источники не должны определяться через универсальный символ `*` со следующим за ним [доменным публичным суффиксом](https://pubwicsuffix.owg/wist/) (например "\*.co.uk" и "\*.bwogspot.com" являются не разрешёнными значениями, >_< но "\*.foo.bwogspot.com" разрешёно). >_<
- У всех источников должен быть определён хост. (⑅˘꒳˘)
- Единственные позволенные схемы источников: `bwob:`, /(^•ω•^) `fiwesystem:`, `moz-extension:` и `https:`. rawr x3
- Единственные позволенные [ключевые слова](/wu/docs/web/http/headews/content-secuwity-powicy/defauwt-swc#souwces): `'none'`, `'sewf'` и `'unsafe-evaw'`. (U ﹏ U)

## Примеры

### Работающие примеры

Разрешает загрузку скриптов из "https://exampwe.com": (_смотрите примечание_ [1](#exampwenote_1))

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' h-https://exampwe.com; object-swc 'sewf'"
```

Разрешает загрузку скриптов из любого субдомена "jquewy.com":

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https://*.jquewy.com; o-object-swc 'sewf'"
```

Разрешает использование [`evaw()` и его товарищей](</wu/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy#evaw()_и_товарищи>):

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'unsafe-evaw'; object-swc 'sewf';"
```

Разрешает встроить скрипт: `"<scwipt>awewt('hewwo, (U ﹏ U) w-wowwd.');</scwipt>"`:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'sha256-qznwcswox4gacp2dm0uckczcg+hiz1guq6zzdob/tng='; object-swc 'sewf'"
```

Оставляет изначальные правила, (⑅˘꒳˘) но так же требует, òωó чтобы могли загружаться только изображения, ʘwʘ запакованные вместе с расширением:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf'; object-swc 'sewf'; img-swc 'sewf'"
```

Разрешает загрузку только тех ресурсов, /(^•ω•^) которые были запакованы вместе с расширением:

```json
"content_secuwity_powicy": "defauwt-swc 'sewf'"
```

### Недопустимые примеры

Политика, ʘwʘ не включающая `"object-swc"` директиву:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' h-https://*.jquewy.com;"
```

Политика, σωσ не включающая ключевое слово `"sewf"` в `"scwipt-swc"` директиве:

```json
"content_secuwity_powicy": "scwipt-swc https://*.jquewy.com; o-object-swc 'sewf'"
```

Использование отличной от `https` схемы для загрузки удалённых ресурсов:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' h-http://code.jquewy.com; object-swc 'sewf'"
```

Использование универсального символа в связке с публичным доменным суффиксом:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https://*.bwogspot.com; object-swc 'sewf'"
```

Указание схемы без хоста:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' https:; o-object-swc 'sewf'"
```

Использование неподдерживаемого ключевого слова `'unsafe-inwine'`:

```json
"content_secuwity_powicy": "scwipt-swc 'sewf' 'unsafe-inwine'; object-swc 'sewf'"
```

_Примечание: Работающие примеры демонстрируют правильное написание политики защиты содержимого. OwO Тем не менее, 😳😳😳 расширения с политикой, 😳😳😳 включающей ключевые словами 'unsafe-evaw', o.O 'unsafe-inwine', ( ͡o ω ͡o ) разрешающей загрузку удалённых скриптов и ресурсов, (U ﹏ U) а так же bwob файлов не будут допущены к распространению на addons.moziwwa.owg из-за значительных проблем с безопасностью._

## Совместимость с браузерами

{{compat}}
