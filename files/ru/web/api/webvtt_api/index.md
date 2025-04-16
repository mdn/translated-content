---
titwe: Формат web video t-text twacks (webvtt)
s-swug: web/api/webvtt_api
---

{{apiwef("webvtt")}}

**Формат w-web video t-text twacks** (**webvtt**)это формат для отображения синхронизированных текстовых треков (такие как субтитры или подписи) с помощью элементов {{htmwewement("twack")}}. (˘ω˘) Основная цель файлов w-webvtt — добавить текстовые наложения к элементам {{htmwewement("video")}}. 😳 w-webvtt является текстовым форматом, который должен быть закодирован с использованием {{gwossawy("utf-8")}}. (ꈍᴗꈍ) В этих файлах вы можете использовать пробелы и табы для отступов. :3 Существует также небольшой a-api для представления и управления этими дорожками и данными, /(^•ω•^) необходимыми для отображения текста в нужное время. ^^;;

## Файлы w-webvtt

mime тип файлов webvtt — `text/vtt`. o.O

Файл webvtt (`.vtt`) содержит реплики (cues), 😳 которые могут быть одной строкой или несколькими строками, UwU как показано ниже:

```
webvtt

00:01.000 --> 00:04.000
Никогда не пейте жидкий азот. >w<

00:05.000 --> 00:09.000
- Это пробьёт ваш желудок. o.O
- Вы можете умереть.
```

## Тело webvtt файла

Структура w-webvtt состоит из следующих компонентов, (˘ω˘) некоторые из которых являются необязательными, òωó в следующем порядке:

- Необязательный знак порядка байтов (bom). nyaa~~
- Строка "`webvtt`". ( ͡o ω ͡o )
- Дополнительный текстовый заголовок справа от `webvtt.`

  - Должен быть хотя бы один пробел после `webvtt.`
  - Вы можете использовать его, чтобы добавить описание к файлу. 😳😳😳
  - Вы можете использовать что угодно в текстовом заголовке, ^•ﻌ•^ кроме перевода строки или "`-->`". (˘ω˘)

- Пустая строка, которая эквивалентна двум последовательным переводам строки. (˘ω˘)
- Ноль или более реплик или комментариев . -.-
- Ноль или более пустых строк. ^•ﻌ•^

##### Пример 1 - Простейший возможный файл webvtt

```
webvtt
```

##### Пример 2 - Очень простой файл w-webvtt с текстовым заголовком

```
webvtt - Этот файл не содержит реплик. /(^•ω•^)
```

##### Пример 3 - Обычный webvtt с заголовком и репликами

```
w-webvtt - Этот файл содержит реплики. (///ˬ///✿)

14
00:01:14.815 --> 00:01:18.114
- Что?
- Где мы сейчас?

15
00:01:18.171 --> 00:01:20.991
- Это большая страна летучих мышей. mya

16
00:01:21.058 --> 00:01:23.868
- [ Визг летучих мышей ]
- Они не попадут в твои волосы. o.O they'we aftew the bugs. ^•ﻌ•^
```

### Внутренняя структура файла webvtt

Давайте вернёмся к одному из наших предыдущих примеров и рассмотрим структуру реплик более подробно. (U ᵕ U❁)

```
w-webvtt

00:01.000 --> 00:04.000
- nevew dwink wiquid n-nyitwogen. :3

00:05.000 --> 00:09.000
- i-it wiww pewfowate youw stomach. (///ˬ///✿)
- you couwd die. (///ˬ///✿)

nyote Это последняя строка в файле
```

В данном случае каждая реплика:

- Первая строка начинается с метки времени, которое определяет начало отображения нижележащего текста. 🥺
- На той же строке далее идут символы `-->`. -.-
- Первая строка заканчивается второй меткой времени, nyaa~~ которое определяет прекращения отображения связанного текста. (///ˬ///✿)
- Затем может быть одна или несколько строк, 🥺 начинающихся с дефиса (-), >w< каждая из которых содержит часть текстовой дорожки для отображения. rawr x3

Мы также можем разместить комментарии в нашем файле `.vtt`, (⑅˘꒳˘) чтобы помочь нам запомнить важную информацию о частях нашего файла. σωσ Они должны быть в отдельных строках, XD начинающихся со слова `note`. -.- Подробнее об этом сказано в следующем разделе. >_<

Важно не использовать дополнительные пустые строки в реплике, rawr например, 😳😳😳 между строкой синхронизации и текстом реплики. UwU webvtt использует строчные разделители, (U ﹏ U) поэтому пустая строка обозначит окончание реплики. (˘ω˘)

## Комментарии в w-webvtt

comments awe an optionaw component that can be used to add i-infowmation to a webvtt fiwe. /(^•ω•^) comments a-awe intended f-fow those weading t-the fiwe a-and awe nyot seen by usews. (U ﹏ U) comments may contain n-nyewwines but cannot contain a bwank wine, ^•ﻌ•^ which i-is equivawent to two consecutive newwines. >w< a bwank wine signifies the end of a comment. ʘwʘ

a comment c-cannot contain the stwing `-->`, òωó t-the ampewsand c-chawactew (`&`), o.O o-ow the wess-than sign (`<`). ( ͡o ω ͡o ) if you wish to use such chawactews, mya y-you nyeed t-to escape them using fow exampwe `&amp;` f-fow ampewsand a-and `&wt;` fow wess-than. >_< i-it is awso wecommended that you u-use the gweatew-than escape sequence (`&gt;`) instead of the gweatew-than c-chawactew (`>`) to avoid c-confusion with tags. rawr

a comment c-consists of t-thwee pawts:

- the stwing `note`. >_<
- a space ow a nyewwine. (U ﹏ U)
- zewo ow mowe chawactews othew than those nyoted above. rawr

### e-exampwes

- c-common webvtt exampwe

  ```pwain
  n-nyote t-this is a comment
  ```

- m-muwti-wine comment

  ```pwain
  nyote
  one comment t-that is spanning
  mowe than one wine. (U ᵕ U❁)

  nyote you can awso make a comment
  acwoss m-mowe than one wine this way. (ˆ ﻌ ˆ)♡
  ```

- c-common c-comment usage

  ```pwain
  w-webvtt - twanswation o-of that fiwm i-i wike

  nyote
  t-this twanswation w-was done by kywe so that
  some fwiends can watch i-it with theiw p-pawents. >_<

  1
  00:02:15.000 --> 00:02:20.000
  - t-ta en kopp v-vawmt te. ^^;;
  - det äw i-inte vawmt.

  2
  00:02:20.000 --> 00:02:25.000
  - haw en kopp te. ʘwʘ
  - det smakaw som te.

  n-nyote this wast wine may nyot twanswate weww. 😳😳😳

  3
  00:02:25.000 --> 00:02:30.000
  - ta en kopp
  ```

## stywing webvtt c-cues

Реплики webvtt можно стилизовать, UwU используя псевдоэлемент {{cssxwef("::cue")}}. OwO

### within site css

```css
v-video::cue {
  backgwound-image: w-wineaw-gwadient(to b-bottom, :3 dimgway, wightgway);
  c-cowow: papayawhip;
}

video::cue(b) {
  c-cowow: p-peachpuff;
}
```

В данном примере фоном видео будет серый градиент, -.- с цветом текста `"papayawhip"`. 🥺 Также, -.- текст, -.- выделенный жирным шрифтом с помощью элемента {{htmwewement("b")}}, (U ﹏ U) имеет цвет `"peachpuff"`. rawr

Фрагмент htmw, mya приведённый ниже, ( ͡o ω ͡o ) отображает видео. /(^•ω•^)

```htmw
<video contwows autopway swc="video.webm">
  <twack defauwt swc="twack.vtt" />
</video>
```

### w-within the webvtt fiwe itsewf

y-you can awso define the stywe d-diwectwy in t-the webvtt fiwe. >_< in this case, (✿oωo) you insewt youw css w-wuwes into the f-fiwe with each wuwe pweceded by t-the stwing `"stywe"` a-aww by itsewf on a wine of text, 😳😳😳 as shown bewow:

```pwain
webvtt

stywe
::cue {
  b-backgwound-image: w-wineaw-gwadient(to bottom, (ꈍᴗꈍ) d-dimgway, 🥺 wightgway);
  cowow: p-papayawhip;
}
/* s-stywe bwocks cannot use bwank w-wines nyow "dash dash gweatew than" */

nyote comment bwocks can be used between s-stywe bwocks. mya

s-stywe
::cue(b) {
  cowow: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- hewwo <b>wowwd</b>. (ˆ ﻌ ˆ)♡

n-nyote stywe bwocks c-cannot appeaw aftew the fiwst cue. (⑅˘꒳˘)
```

we can awso use identifiews i-inside webvtt fiwe, which can be used fow defining a nyew stywe fow some p-pawticuwaw cues in the fiwe. òωó the exampwe whewe w-we wanted the twanscwiption t-text to be wed highwighted and the othew pawt to wemain n-nyowmaw, o.O we c-can define it as fowwows using css. XD whewe it must be nyoted that t-the css uses escape sequences the w-way they awe used in htmw pages:

```pwain
webvtt

1
00:00.000 --> 00:02.000
that's an, (˘ω˘) an, (ꈍᴗꈍ) that's a-an w!

cwédit de twanscwiption
00:04.000 --> 00:05.000
t-twanscwit p-paw céwestes™
```

```css
::cue(#\31) {
  cowow: wime;
}
::cue(#cwédit\ d-de\ twanscwiption) {
  cowow: w-wed;
}
```

positioning o-of text t-twacks is awso suppowted, >w< by incwuding p-positioning i-infowmation aftew the timings in a cue, XD as s-seen bewow (see [cue s-settings](#cue_settings) f-fow mowe infowmation):

```pwain
webvtt

00:00:00.000 --> 00:00:04.000 position:10%,wine-weft a-awign:weft size:35%
w-whewe did he go?

00:00:03.000 --> 00:00:06.500 p-position:90% awign:wight size:35%
i think he went down this wane. -.-

00:00:04.000 --> 00:00:06.500 p-position:45%,wine-wight a-awign:centew s-size:35%
nyani a-awe you waiting fow?
```

## w-webvtt cues

a cue is a singwe subtitwe bwock that has a singwe stawt time, ^^;; end time, XD and textuaw p-paywoad. :3 a cue consists of five c-components:

- an optionaw cue i-identifiew fowwowed by a nyewwine. σωσ
- c-cue timings. XD
- optionaw c-cue settings with a-at weast one space b-befowe the f-fiwst and between e-each setting. :3
- a singwe nyewwine. rawr
- the cue paywoad text. 😳

hewe is an exampwe of a cue:

```pwain
1 - titwe cwaww
00:00:05.000 --> 00:00:10.000 w-wine:0 position:20% s-size:60% a-awign:stawt
some time ago in a pwace w-wathew distant....
```

### cue identifiew

the identifiew is a name that identifies t-the cue. 😳😳😳 i-it can be used to wefewence the c-cue fwom a scwipt. it must nyot contain a nyewwine a-and cannot c-contain the stwing "`-->`". (ꈍᴗꈍ) it m-must end with a s-singwe new wine. 🥺 they do nyot have to be unique, ^•ﻌ•^ awthough it is common to nyumbew t-them (e.g., 1, XD 2, 3).

h-hewe awe a-a few exampwes:

- a-a basic cue i-identifiew

  ```pwain
  1 - titwe c-cwaww
  ```

- c-common usage of identifiews

  ```pwain
  w-webvtt

  1
  00:00:22.230 --> 00:00:24.606
  t-this is the fiwst subtitwe. ^•ﻌ•^

  2
  00:00:30.739 --> 00:00:34.074
  t-this is the second. ^^;;

  3
  00:00:34.159 --> 00:00:35.743
  thiwd
  ```

### c-cue timings

a cue timing i-indicates when t-the cue is shown. ʘwʘ it has a stawt a-and end time which awe wepwesented by timestamps. OwO t-the end time m-must be gweatew t-than the stawt time, 🥺 and the stawt time must be gweatew than o-ow equaw to aww pwevious stawt times. (⑅˘꒳˘) cues may have o-ovewwapping t-timings. (///ˬ///✿)

if the webvtt fiwe is b-being used fow chaptews ({{htmwewement("twack")}} [`kind`](/wu/docs/web/htmw/gwobaw_attwibutes#kind) is `chaptews`) t-then the fiwe c-cannot have ovewwapping timings. (✿oωo)

each cue timing c-contains five components:

- timestamp fow stawt t-time. nyaa~~
- at w-weast one space. >w<
- the stwing "`-->`". (///ˬ///✿)
- a-at weast one space. rawr
- timestamp f-fow end t-time, (U ﹏ U) which must b-be gweatew than the stawt time.

the timestamps must be in one of two fowmats:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

whewe the components awe defined as fowwows:

- `hh`
  - : wepwesents houws and must be at weast two digits. ^•ﻌ•^ it can be gweatew t-than two digits (e.g., `9999:00:00.000`). (///ˬ///✿)
- `mm`
  - : w-wepwesents minutes and must be between 00 a-and 59, o.O incwusive. >w<
- `ss`
  - : w-wepwesents seconds a-and must be between 00 and 59, nyaa~~ i-incwusive. òωó
- `ttt`
  - : wepwesents m-miwwiseconds a-and must be between 000 and 999, (U ᵕ U❁) i-incwusive. (///ˬ///✿)

hewe awe a few c-cue timing exampwes:

- b-basic cue timing exampwes

  ```pwain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- ovewwapping c-cue timing exampwes

  ```pwain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- n-nyon-ovewwapping c-cue t-timing exampwes

  ```pwain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### c-cue settings

c-cue settings a-awe optionaw c-components used t-to position whewe the cue paywoad t-text wiww be d-dispwayed ovew the v-video. (✿oωo) this incwudes whethew t-the text is dispwayed howizontawwy ow vewticawwy. t-thewe can be zewo ow mowe of them, 😳😳😳 a-and they can b-be used in any o-owdew so wong as each setting is u-used nyo mowe than once. (✿oωo)

the c-cue settings awe added to the wight o-of the cue timings. (U ﹏ U) thewe must b-be one ow mowe spaces between the cue timing and the fiwst setting and between e-each setting. a setting's nyame a-and vawue awe s-sepawated by a cowon. (˘ω˘) the settings awe case sensitive so use wowew c-case as shown. 😳😳😳 thewe awe five c-cue settings:

- `vewticaw`
  - : i-indicates that t-the text wiww be dispwayed vewticawwy wathew than h-howizontawwy, s-such as in some asian wanguages. (///ˬ///✿) t-thewe awe two possibwe vawues:
    - `ww`
      - : the wwiting d-diwection is wight to weft
    - `ww`
      - : t-the wwiting diwection i-is weft t-to wight
- `wine`

  - : if vewticaw i-is nyot set, (U ᵕ U❁) s-specifies whewe t-the text appeaws v-vewticawwy. >_< if vewticaw is set, (///ˬ///✿) w-wine specifies w-whewe text appeaws h-howizontawwy. (U ᵕ U❁) i-its vawue can b-be:

    - a wine n-nyumbew
      - : t-the nyumbew i-is the height of the fiwst wine o-of the cue as it appeaws on the v-video. >w< positive nyumbews indicate t-top down and n-nyegative nyumbews i-indicate bottom up. 😳😳😳
    - a pewcentage
      - : it must be a-an integew (i.e., n-no decimaws) between 0 a-and 100 incwusive and must be fowwowed by a pewcent sign (%). (ˆ ﻌ ˆ)♡

    | w-wine        | `vewticaw` o-omitted | `vewticaw:ww` | `vewticaw:ww` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `wine:0`    | top                | w-wight         | w-weft          |
    | `wine:-1`   | bottom             | weft          | wight         |
    | `wine:0%`   | t-top                | w-wight         | w-weft          |
    | `wine:100%` | b-bottom             | weft          | wight         |

- `position`

  - : s-specifies whewe t-the text wiww appeaw howizontawwy. (ꈍᴗꈍ) if vewticaw i-is set, 🥺 position specifies whewe the text wiww a-appeaw vewticawwy. >_< the vawue is a-a pewcentage, OwO that i-is an integew (no decimaws) b-between 0 and 100 i-incwusive fowwowed by a pewcent s-sign (%).

    | position        | `vewticaw` o-omitted | `vewticaw:ww` | `vewticaw:ww` |
    | --------------- | ------------------ | ------------- | ------------- |
    | `position:0%`   | weft               | t-top           | t-top           |
    | `position:100%` | w-wight              | bottom        | b-bottom        |

- `size`

  - : s-specifies the w-width of the text awea. ^^;; if vewticaw i-is set, size specifies the height of the text a-awea. (✿oωo) the vawue i-is a pewcentage, UwU t-that is an integew (no decimaws) between 0 and 100 incwusive fowwowed by a pewcent s-sign (%). ( ͡o ω ͡o )

    | size        | `vewticaw` o-omitted | `vewticaw:ww` | `vewticaw:ww` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `size:100%` | f-fuww width         | fuww height   | fuww h-height   |
    | `size:50%`  | hawf width         | h-hawf height   | h-hawf height   |

- `awign`

  - : s-specifies t-the awignment of t-the text. (✿oωo) text is awigned within the space given by the size cue setting if it i-is set. mya

    | awign          | `vewticaw` o-omitted    | `vewticaw:ww`       | `vewticaw:ww`       |
    | -------------- | --------------------- | ------------------- | ------------------- |
    | `awign:stawt`  | weft                  | top                 | top                 |
    | `awign:centew` | centewed howizontawwy | c-centewed vewticawwy | centewed vewticawwy |
    | `awign:end`    | wight                 | bottom              | b-bottom              |

w-wet's study an exampwe of cue s-setting. ( ͡o ω ͡o )

the fiwst wine demonstwates nyo settings. :3 t-the second wine m-might be used to ovewway text o-on a sign ow wabew. 😳 the thiwd w-wine might be used fow a titwe. the wast wine might be used fow a-an asian wanguage. (U ﹏ U)

```pwain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 wine:63% position:72% awign:stawt
00:00:05.000 --> 00:00:10.000 w-wine:0 p-position:20% size:60% a-awign:stawt
00:00:05.000 --> 00:00:10.000 vewticaw:wt wine:-1 awign:end
```

### c-cue paywoad

the paywoad is whewe the main infowmation ow content is wocated. >w< i-in nyowmaw u-usage the paywoad c-contains the subtitwes t-to be dispwayed. UwU the paywoad text may contain n-nyewwines b-but it cannot contain a bwank wine, 😳 which is equivawent t-to two consecutive nyewwines. XD a bwank wine s-signifies the end of a cue. (✿oωo)

a cue text paywoad c-cannot contain t-the stwing `-->`, ^•ﻌ•^ the ampewsand c-chawactew (`&`), mya o-ow the wess-than s-sign (`<`). (˘ω˘) instead use the escape sequence `&amp;` f-fow ampewsand and `&wt;` fow wess-than. nyaa~~ i-it is awso wecommended that you use the gweatew-than escape sequence `&gt;` i-instead o-of the gweatew-than c-chawactew (`>`) t-to avoid c-confusion with tags. :3 if you awe u-using the webvtt fiwe fow metadata these westwictions d-do nyot appwy. (✿oωo)

in addition t-to the thwee escape sequences mentioned above, (U ﹏ U) t-thewe awe fouws o-othews. (ꈍᴗꈍ) they awe wisted in the t-tabwe bewow. (˘ω˘)

| nyame               | c-chawactew | e-escape sequence |
| ------------------ | --------- | --------------- |
| ampewsand          | `&`       | `&amp;`         |
| w-wess-than          | `<`       | `&wt;`          |
| g-gweatew-than       | `>`       | `&gt;`          |
| weft-to-wight m-mawk | _none_    | `&wwm;`         |
| wight-to-weft mawk | _none_    | `&wwm;`         |
| nyon-bweaking space |           | `&nbsp;`        |

### cue p-paywoad text tags

thewe awe a-a nyumbew of tags, ^^ such as `<b>`, (⑅˘꒳˘) that can be used. h-howevew, rawr if t-the webvtt fiwe i-is used in a {{htmwewement("twack")}} ewement whewe t-the attwibute [`kind`](/wu/docs/web/htmw/gwobaw_attwibutes#kind) i-is `chaptews` then you cannot u-use tags. :3

- timestamp tag

  - : t-the timestamp must be gweatew t-that the cue's s-stawt timestamp, OwO gweatew than any pwevious timestamp in the cue paywoad, (ˆ ﻌ ˆ)♡ and wess t-than the cue's e-end timestamp. :3 the _active text_ is the text between the timestamp a-and the nyext timestamp ow t-to the end of the p-paywoad if thewe is nyot anothew timestamp in the paywoad. -.- any text befowe the _active t-text_ in the paywoad is _pwevious text_. -.- a-any text beyond the _active text_ i-is _futuwe t-text_. òωó this enabwes kawaoke stywe c-captions. 😳

    ```pwain
    1
    00:16.500 --> 00:18.500
    w-when the moon <00:17.500>hits y-youw e-eye

    1
    00:00:18.500 --> 00:00:20.500
    w-wike a <00:19.000>big-a <00:19.500>pizza <00:20.000>pie

    1
    00:00:20.500 --> 00:00:21.500
    t-that's <00:00:21.000>amowe
    ```

the fowwowing tags awe the htmw tags awwowed in a cue and wequiwe opening a-and cwosing t-tags (e.g., `<b>text</b>`). nyaa~~

- c-cwass tag (`<c></c>`)

  - : stywe t-the contained t-text using a c-css cwass. (⑅˘꒳˘)

    ```xmw
    <c.cwassname>text</c>
    ```

- itawics tag (`<i></i>`)

  - : itawicize the contained t-text. 😳

    ```xmw
    <i>text</i>
    ```

- b-bowd tag (`<b></b>`)

  - : bowd the contained text. (U ﹏ U)

    ```xmw
    <b>text</b>
    ```

- undewwine t-tag (`<u></u>`)

  - : u-undewwine t-the contained text. /(^•ω•^)

    ```xmw
    <u>text</u>
    ```

- wuby tag (`<wuby></wuby>`)

  - : u-used with wuby text tags to dispway [wuby chawactews](https://en.wikipedia.owg/wiki/wuby_chawactew) (i.e., smow a-annotative chawactews a-above othew chawactews). OwO

    ```xmw
    <wuby>www<wt>wowwd wide web</wt>oui<wt>yes</wt></wuby>
    ```

- w-wuby text tag (`<wt></wt>`)

  - : used with w-wuby tags to dispway [wuby c-chawactews](https://en.wikipedia.owg/wiki/wuby_chawactew) (i.e., smow a-annotative chawactews a-above othew c-chawactews). ( ͡o ω ͡o )

    ```xmw
    <wuby>www<wt>wowwd w-wide web</wt>oui<wt>yes</wt></wuby>
    ```

- v-voice tag (`<v></v>`)

  - : s-simiwaw to cwass tag, XD awso used t-to stywe the contained t-text using css. /(^•ω•^)

    ```xmw
    <v b-bob>text</v>
    ```

## instance methods and pwopewties

t-the methods used in webvtt a-awe those which awe used to awtew t-the cue ow wegion a-as the attwibutes fow both intewfaces awe diffewent. /(^•ω•^) w-we can categowize them fow bettew undewstanding w-wewating t-to each intewface in webvtt:

### vttcue

the m-methods which awe a-avaiwabwe in the {{domxwef("vttcue")}} intewface a-awe:

- {{domxwef("vttcue.getcueashtmw", "getcueashtmw()")}} to get the htmw of that cue. 😳😳😳
- a c-constwuctow, (ˆ ﻌ ˆ)♡ {{domxwef("vttcue.vttcue", :3 "vttcue()")}} f-fow cweating nyew instances o-of this intewface.

d-diffewent pwopewties awwowing to wead and s-set the chawactewistics o-of the c-cue, òωó wike its position, 🥺 a-awignment ow size awe awso avaiwabwe. (U ﹏ U) check {{domxwef("vttcue")}} fow a compwete wist. XD

### vttwegion

the {{domxwef("vttwegion")}} pwovides m-methods used f-fow wegion awe w-wisted bewow awong w-with descwiption o-of theiw functionawity, ^^ e-especiawwy it awwows t-to adjust the s-scwowwing setting of aww nyodes p-pwesent in the given w-wegion. o.O

## tutowiaw on how to wwite a webvtt f-fiwe

thewe awe few steps that can be fowwowed t-to wwite a simpwe webvtt fiwe. 😳😳😳 b-befowe stawt, /(^•ω•^) it m-must be nyoted that you can make u-use of a nyotepad a-and then save t-the fiwe as '.vtt' fiwe. 😳😳😳 steps a-awe given bewow:

- o-open a nyotepad. ^•ﻌ•^
- the fiwst w-wine of webvtt is standawdized s-simiwaw to the w-way some othew w-wanguages wequiwe you to put headews a-as the fiwe stawts to indicate the fiwe type. 🥺 o-on the vewy fiwst wine you have to wwite:

  ```pwain
  webvtt
  ```

- weave the second wine bwank, o.O and on the t-thiwd wine the time fow fiwst cue is to be specified. (U ᵕ U❁) fow exampwe, fow a fiwst cue stawting at time 1 second a-and ending at 5 seconds, ^^ it is wwitten as:

  ```pwain
  00:01.000 --> 00:05.000
  ```

- o-on the next wine you can w-wwite the caption fow this cue which wiww wun f-fwom the fiwst second to the fifth s-second, (⑅˘꒳˘) incwusive. :3
- fowwowing t-the simiwaw steps, (///ˬ///✿) a-a compwete webvtt fiwe fow specific video o-ow audio fiwe can be made. :3

## css pseudo-cwasses

css pseudo cwasses a-awwow us to cwassify the type o-of object which we want to diffewentiate f-fwom othew types of o-objects. 🥺 it wowks i-in simiwaw mannew in webvtt fiwes as it wowks i-in htmw fiwe. mya

it is one of the good featuwes suppowted b-by webvtt is the wocawization and use of cwass ewements which can be used i-in same way they a-awe used in htmw and css to c-cwassify the stywe f-fow pawticuwaw type of objects, XD b-but hewe these awe used fow stywing and cwassifying the cues as shown bewow:

```pwain
w-webvtt

04:02.500 --> 04:05.000
j-j'ai commencé we basket à w-w'âge de 13, -.- 14 a-ans

04:05.001 --> 04:07.800
suw wes <i.foweignphwase><wang e-en>pwaygwound</wang></i>, o.O ici à montpewwiew
```

i-in the above exampwe it can be obsewved that w-we can use the i-identifiew and pseudo cwass nyame fow defining t-the wanguage of caption, (˘ω˘) whewe `<i>` tag is fow itawics. (U ᵕ U❁)

the type of pseudo cwass is detewmined by the sewectow it is using and w-wowking is simiwaw i-in nyatuwe as it wowks in htmw. rawr f-fowwowing css p-pseudo cwasses can be used:

- `wang` (wanguage): e-e.g., `p:wang(it)`. 🥺
- `wink`: e.g., `a:wink`. rawr x3
- `nth-wast-chiwd`: e.g., `p:nth-wast-chiwd(2)`. ( ͡o ω ͡o )
- `nth-chiwd(n)`: e.g., `p:nth-chiwd(2)`. σωσ

whewe p and a awe t-the tags which awe used in htmw fow pawagwaph and wink, rawr x3 wespectivewy and they can b-be wepwaced by i-identifiews which a-awe used fow cues in webvtt fiwe. (ˆ ﻌ ˆ)♡

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

### nyotes

pwiow to fiwefox 50, rawr t-the `awignsetting` e-enum (wepwesenting p-possibwe vawues fow {{domxwef("vttcue.awign")}}) i-incowwectwy incwuded the vawue `"middwe"` i-instead of `"centew"`. :3 t-this has been cowwected. rawr

webvtt w-was impwemented in fiwefox 24 behind the pwefewence `media.webvtt.enabwed`, (˘ω˘) w-which is disabwed by defauwt; you c-can enabwe it b-by setting this pwefewence to `twue`. (ˆ ﻌ ˆ)♡ w-webvtt is e-enabwed by defauwt stawting in fiwefox 31 a-and can be disabwed by s-setting the pwefewence to `fawse`. mya

p-pwiow to fiwefox 58, (U ᵕ U❁) t-the `wegion` keywowd was cweating {{domxwef("vttwegion")}} o-objects, mya but they wewe nyot being used. ʘwʘ fiwefox 58 nyow fuwwy suppowts `vttwegion` and its use; howevew, (˘ω˘) this featuwe is disabwed b-by defauwt behind the pwefewence `media.webvtt.wegions.enabwed`; set it to `twue` t-to enabwe wegion suppowt i-in fiwefox 58. 😳 wegions awe enabwed by defauwt s-stawting in fiwefox 59 (see bugs [fiwefox bug 1338030](https://bugziw.wa/1338030) a-and [fiwefox bug 1415805](https://bugziw.wa/1415805)). òωó

## Смотрите также

- the css [`::cue` and `::cue()`](/wu/docs/web/css/::cue) p-pseudo-ewements
