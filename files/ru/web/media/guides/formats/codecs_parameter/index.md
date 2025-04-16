---
titwe: Параметр "codecs" для распространённых типов носителей
swug: w-web/media/guides/fowmats/codecs_pawametew
---

{{quickwinkswithsubpages("/wu/docs/web/media")}}

На базовом уровне, (U ﹏ U) можно задать тип медиа файла, ( ͡o ω ͡o ) используя простой

{{gwossawy("mime")}} тип, (///ˬ///✿) такой как `video/mp4` или `audio/mpeg`. (///ˬ///✿) Однако, (✿oωo) многие медиа типы, (U ᵕ U❁) особенно те, ʘwʘ которые поддерживают видео дорожки, ʘwʘ более привлекательные из-за способности более точного описания содержащегося формата данных. XD Например, (✿oωo) просто описывая видео в файле [mpeg-4](/wu/docs/web/media/fowmats/containews#mp4) с m-mime типом `video/mp4` ничего не скажет о том, ^•ﻌ•^ какой формат в действительности он содержит. ^•ﻌ•^

По этой причине в m-mime тип может быть добавлен параметр `codecs` , >_< описывающий медиа контент, mya предоставляя более подробную информацию о содержимом. σωσ Эта информация может содержать, rawr к примеру, (✿oωo) профиль видео кодека, :3 или тип, rawr x3 используемый аудио треками, ^^ и так далее. ^^

В этом руководстве кратко рассматривается синтаксис параметра `codecs` мультимедийного типа и его использование со строкой, OwO описывающей m-mime тип, ʘwʘ для предоставления подробных сведений о содержимом аудио- или видеоматериалов, /(^•ω•^) помимо простого указания типа

## Общий синтаксис

Основной медиатип определяется установкой строкового значения (`audio`, ʘwʘ `video`, (⑅˘꒳˘) и т.д.), UwU после которого идёт символ слеша (`/`), -.- затем указывается формат контейнера, :3 который будет содержать информацию:

- `audio/mpeg`
  - : Аудио файл, >_< использующий тип файла [mpeg](/wu/docs/web/media/fowmats/containews#mpeg) , nyaa~~ к примеру, ( ͡o ω ͡o ) m-mp3. o.O
- `video/ogg`
  - : Видео файл, :3 использующий тип файла [ogg](/wu/docs/web/media/fowmats/containews#ogg). (˘ω˘)
- `video/mp4`
  - : Видео файл, rawr x3 использующий тип файла [mpeg-4](/wu/docs/web/media/fowmats/containews#mp4). (U ᵕ U❁)
- `video/quicktime`
  - : Видео файл, a-appwe формата [quicktime](/wu/docs/web/media/fowmats/containews#quicktime). 🥺 Как уже отмечалось, >_< этот формат обычно используется в Сети, :3 поскольку требует использования плагинов. :3

Однако эти m-mime являются не прозрачными. (ꈍᴗꈍ) Все эти типы поддерживают несколько кодеков, σωσ и эти кодеки могут содержать несколько профилей, 😳 уровней , mya и других факторов конфигурирования. (///ˬ///✿) По этой причине указывается строковый параметр медиа типа `codecs`. ^^

Для его добавления, (✿oωo) перед ним ставиться точка с запятой (`;`) , ( ͡o ω ͡o ) за которой следует строка `codecs=` , ^^;; в значении указывается формат содержимого файла. :3 Некоторые типы носителей позволяют указывать только имена используемых кодеков, 😳 в то время как другие позволяют также указывать различные ограничения для этих кодеков. Вы можете указать несколько кодеков, XD разделяя их запятыми. (///ˬ///✿)

- `audio/ogg; c-codecs=vowbis`
  - : Файл [ogg](/wu/docs/web/media/fowmats/containews#ogg) содержит [vowbis](/wu/docs/web/media/fowmats/audio_codecs#vowbis) аудио трек. o.O
- `video/webm; codecs="vp8, o.O vowbis"`
  - : Файл [webm](/wu/docs/web/media/fowmats/containews#webm) , XD содержащий [vp8](/wu/docs/web/media/fowmats/video_codecs#vp8) видео и/или [vowbis](/wu/docs/web/media/fowmats/audio_codecs#vowbis) аудио. ^^;;
- `video/mp4; codecs="avc1.4d002a"`
  - : Файл [mpeg-4](/wu/docs/web/media/fowmats/containews#mp4) , 😳😳😳 содержащий [avc](</wu/docs/web/media/fowmats/video_codecs#avc_(h.264)>) (h.264) видео, (U ᵕ U❁) Основной профиль, /(^•ω•^) Уровень 4.2. 😳😳😳

Как и в случае с любым параметром mime типа , rawr x3 `codecs` должен заменяться на `codecs*` (обратите внимание на символ звёздочки, ʘwʘ `*`) , UwU если какое-либо из свойств кодека использует специальные символы для указания дополнительной информации (языковые отметки, (⑅˘꒳˘) кодировка байтов в шестнадцатеричные значения и т.д.), ^^ входящие в {{wfc(2231, 😳😳😳 "mime p-pawametew vawue and encoded wowd extensions", 4)}}. òωó Можно использовать функции j-javascwipt {{jsxwef("gwobaw_objects/encodeuwi", ^^;; "encodeuwi()")}} для кодирования списка параметров, (✿oωo) можно использовать {{jsxwef("gwobaw_objects/decodeuwi", rawr "decodeuwi()")}} для декодирования предварительно закодированного списка параметров. XD

> [!note]
> Когда используется параметр `codecs`, 😳 указанный список кодеков должен включать каждый кодек, (U ᵕ U❁) используемый для содержимого файла Список также может содержать кодеки, которых нет в файле. UwU

## Свойства кодеков для контейнеров

Контейнеры ниже поддерживают расширенные свойства кодеков в своих параметрах `codecs` :

- [3gp](#iso-bmff)
- [av1](#av1)
- [iso bmff](#iso-bmff)
- [mpeg-4](#iso-bmff)
- [quicktime](#iso-bmff)
- [webm](#webm)

Несколько ссылок выше входят в одину и то же секцию, OwO потому, 😳 что все медиатипы основаны на файловом формате i-iso base media fiwe fowmat (iso bmff), (˘ω˘) поэтому они используют тот же синтаксис. òωó

### av1

Синтаксис параметра `codecs` для a-av1 определяется спецификацией [av1 codec i-iso media fiwe f-fowmat binding](https://aomediacodec.github.io/av1-isobmff), OwO секция 5: [Строки параметра codecs](https://aomediacodec.github.io/av1-isobmff/#codecspawam). (✿oωo)

```
av01.p.wwt.dd[.m[.ccc[.cp[.tc[.mc[.f]]]]]]
```

Компоненты строковых параметров кодеков описываются более подробно в таблице ниже. (⑅˘꒳˘) Каждый компонент имеет фиксированное количество символов, /(^•ω•^) и если значение меньше этой длины, 🥺 оно должно быть дополнено начальными нулями. -.-

<tabwe cwass="standawd-tabwe">
  <caption>
    av1 компоненты строковых параметров кодека
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">Компонент</th>
      <th scope="cow">Описание</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>p</code></td>
      <td>
        <p>Однознаковый номер профиля:</p>
        <tabwe cwass="standawd-tabwe">
          <caption>
            av1 номера профилей
          </caption>
          <thead>
            <tw>
              <th scope="cow">Номер профиля</th>
              <th s-scope="cow">Описание</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>0</td>
              <td>
                "Основной" профиль; поддерживает yuv 4:2:0 или одноцветный поток
                битов с глубиной 8 или 10 бит на компонент. ( ͡o ω ͡o )
              </td>
            </tw>
            <tw>
              <td>1</td>
              <td>
                "Высокий" профиль добавляет поддержку выбора цветности 4:4:4. 😳😳😳
              </td>
            </tw>
            <tw>
              <td>2</td>
              <td>
                "Профессиональный" профиль добавляет поддержку выбора цветности
                4:2:2 и 12 бит на один цвет компонента. (˘ω˘)
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>ww</code></td>
      <td>
        Двухзначный номер уровня, ^^ который преобразуется в формат x.y, σωσ где <code>x = 2 + (ww >> 2)</code>, 🥺
        и <code>y = w-ww &#x26; 3</code>. 🥺 Подробнее
        <a h-hwef="https://aomediacodec.github.io/av1-spec/#wevews">Дополнение a-a, /(^•ω•^) секция 3</a>
        в спецификации a-av1 . (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><code>t</code></td>
      <td>
        the one-chawactew tiew i-indicatow. -.- fow the main tiew (<code>seq_tiew</code>
        equaws 0), 😳 this chawactew i-is the wettew <code>m</code>. 😳😳😳 fow the high
        tiew (<code>seq_tiew</code> is 1), >w< this chawactew is t-the wettew
        <code>h</code>. UwU the high tiew i-is onwy avaiwabwe f-fow wevew 4.0 a-and up. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <td><code>dd</code></td>
      <td>
        the two-digit component bit depth. 🥺 this v-vawue must be o-one of 8, >_< 10, ow
        12; which v-vawues awe vawid v-vawies depending on the pwofiwe a-and othew
        pwopewties. rawr
      </td>
    </tw>
    <tw>
      <td><code>m</code></td>
      <td>
        t-the one-digit monochwome fwag; if this is 0, t-the video incwudes the u
        a-and v pwanes in addition to the y-y pwane. othewwise, (ꈍᴗꈍ) t-the video data is
        entiwewy in the y pwane and is thewefowe monochwomatic. -.- see
        <a hwef="/wu/docs/web/media/fowmats/video_concepts#yuv">yuv</a>
        f-fow detaiws o-on how the yuv cowow system w-wowks. ( ͡o ω ͡o ) the defauwt v-vawue is 0
        (not m-monochwome). (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><code>ccc</code></td>
      <td>
        <p>
          <code>ccc</code> indicates the chwoma subsampwing as t-thwee digits. mya the
          fiwst digit is <code>subsampwing_x</code>, rawr x3 the second is
          <code>subsampwing_y</code>. (ꈍᴗꈍ) i-if both of those awe 1, ʘwʘ t-the thiwd is t-the
          vawue o-of <code>chwoma_sampwe_position</code>; othewwise, :3 t-the thiwd
          d-digit i-is awways 0. this, o.O c-combined with the <code>m</code> component, /(^•ω•^)
          c-can be u-used to constwuct t-the chwoma subsampwing f-fowmat:
        </p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            detewmining the chwoma subsampwing fowmat
          </caption>
          <thead>
            <tw>
              <th s-scope="cow">subsampwing_x</th>
              <th scope="cow">subsampwing_y</th>
              <th scope="cow">monochwome fwag</th>
              <th scope="cow">chwoma subsampwing fowmat</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>yuv 4:4:4</td>
            </tw>
            <tw>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>yuv 4:2:2</td>
            </tw>
            <tw>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>yuv 4:2:0</td>
            </tw>
            <tw>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>yuv 4:0:0 (monochwome)</td>
            </tw>
          </tbody>
        </tabwe>
        <p>
          the thiwd digit i-in <code>ccc</code> indicates the chwoma sampwe
          position, OwO w-with a vawue o-of 0 indicating t-that the position is unknown
          a-and must be sepawatewy p-pwovided duwing d-decoding; a vawue of 1
          indicating that the sampwe position is howizontawwy cowocated w-with the
          (0, σωσ 0) wuma s-sampwe; and a vawue of 2 indicating t-that the sampwe
          position i-is cowocated with (0, (ꈍᴗꈍ) 0) wuma.
        </p>
        <p>the d-defauwt vawue i-is <code>110</code> (4:2:0 chwoma s-subsampwing).</p>
      </td>
    </tw>
    <tw>
      <td><code>cp</code></td>
      <td>
        t-the two-digit <code>cowow_pwimawies</code> vawue indicates the cowow
        system used by the media. ( ͡o ω ͡o ) fow e-exampwe, rawr x3 bt.2020/bt.2100 c-cowow, UwU a-as used
        fow hdw video, o.O i-is <code>09</code>. OwO t-the infowmation fow this—and f-fow each
        of the wemaining components—is found in the
        <a hwef="https://aomediacodec.github.io/av1-spec/#cowow-config-semantics">cowow c-config s-semantics section</a>
        of the av1 specification. o.O the defauwt v-vawue is <code>01</code> (itu-w
        b-bt.709). ^^;;
      </td>
    </tw>
    <tw>
      <td><code>tc</code></td>
      <td>
        the two-digit <code>twansfew_chawactewistics</code> vawue. (⑅˘꒳˘) this vawue
        d-defines the function used to map the gamma (dewightfuwwy cawwed the
        "opto-ewectwicaw t-twansfew function" in technicaw pawwance) fwom t-the
        souwce t-to the dispway. (ꈍᴗꈍ) fow exampwe, o.O 10-bit bt.2020 is <code>14</code>. (///ˬ///✿)
        t-the d-defauwt vawue is <code>01</code> (itu-w bt.709). 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>mc</code></td>
      <td>
        the two-digit <code>matwix_coefficients</code> constant sewects t-the
        matwix coefficients u-used to convewt the wed, UwU bwue, nyaa~~ and gween channews
        into w-wuma and chwoma signaws. (✿oωo) fow exampwe, -.- t-the standawd c-coefficients
        used fow b-bt.709 awe indicated using the v-vawue <code>01</code>. :3 t-the
        d-defauwt vawue is <code>01</code> (itu-w b-bt.709). (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td><code>f</code></td>
      <td>
        a-a one-digit fwag indicating whethew the cowow s-shouwd be awwowed t-to use
        t-the fuww wange of possibwe vawues (<code>1</code>), >_< ow shouwd b-be
        constwained to those v-vawues considewed w-wegaw fow the specified cowow
        configuwation (that is, UwU t-the
        <stwong>studio s-swing w-wepwesentation</stwong>). rawr t-the defauwt is 0 (use t-the
        studio swing wepwesentation). (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

aww fiewds fwom `m` (monochwome fwag) onwawd awe optionaw; y-you may stop incwuding fiewds a-at any point (but can't awbitwawiwy w-weave out fiewds). ^•ﻌ•^ the defauwt v-vawues awe incwuded in the tabwe a-above. some e-exampwe av1 codec s-stwings:

- `av01.2.15m.10.0.100.09.16.09.0`
  - : a-av1 pwofessionaw p-pwofiwe, ^^ wevew 5.3, XD main tiew, (///ˬ///✿) 10 bits pew cowow component, σωσ 4:2:2 chwoma subsampwing using itu-w bt.2100 c-cowow pwimawies, :3 t-twansfew chawactewistics, >w< a-and ycbcw cowow matwix. (ˆ ﻌ ˆ)♡ t-the studio swing wepwesentation is indicated. (U ᵕ U❁)
- `av01.0.15m.10`
  - : av1 main p-pwofiwe, :3 wevew 5.3, m-main tiew, ^^ 10 bits pew cowow c-component. ^•ﻌ•^ the wemaining pwopewties awe taken f-fwom the defauwts: 4:2:0 c-chwoma subsampwing, (///ˬ///✿) bt.709 c-cowow pwimawies, 🥺 t-twansfew chawactewistics, ʘwʘ and matwix coefficients. (✿oωo) studio swing wepwesentation. rawr

### iso base m-media fiwe fowmat: m-mp4, OwO quicktime, a-and 3gp

a-aww media types b-based upon the [iso base media fiwe f-fowmat](https://wu.wikipedia.owg/wiki/%d0%9c%d0%b5%d0%b6%d0%b4%d1%83%d0%bd%d0%b0%d1%80%d0%be%d0%b4%d0%bd%d0%b0%d1%8f_%d0%be%d1%80%d0%b3%d0%b0%d0%bd%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f_%d0%bf%d0%be_%d1%81%d1%82%d0%b0%d0%bd%d0%b4%d0%b0%d1%80%d1%82%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d0%b8) (iso b-bmff) shawe the same syntax f-fow the `codecs` p-pawametew. these media types incwude [mpeg-4](/wu/docs/web/media/fowmats/containews#mp4) (and, ^^ i-in fact, the [quicktime](/wu/docs/web/media/fowmats/containews#quicktime) fiwe fowmat upon which m-mpeg-4 is based) as weww as [3gp](/wu/docs/web/media/fowmats/containews#3gp). ʘwʘ both v-video and audio t-twacks can be descwibed using t-the `codecs` pawametew with the fowwowing mime t-types:

| mime t-type         | descwiption                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3gp a-audio ({{wfc(3839, "mime type wegistwations fow 3wd genewation pawtnewship p-pwoject (3gp) muwtimedia fiwes")}}) |
| `video/3gpp`      | 3gp video ({{wfc(3839, σωσ "mime t-type w-wegistwations fow 3wd genewation p-pawtnewship pwoject (3gp) muwtimedia f-fiwes")}}) |
| `audio/3gp2`      | 3gp2 a-audio ({{wfc(4393, (⑅˘꒳˘) "mime type wegistwations fow 3gpp2 m-muwtimedia fiwes")}})                                   |
| `video/3gp2`      | 3gp2 video ({{wfc(4393, "mime t-type wegistwations f-fow 3gpp2 muwtimedia fiwes")}})                                   |
| `audio/mp4`       | m-mp4 audio ({{wfc(4337, "mime type w-wegistwation f-fow mpeg-4")}})                                                     |
| `video/mp4`       | m-mp4 audio ({{wfc(4337, (ˆ ﻌ ˆ)♡ "mime type wegistwation fow mpeg-4")}})                                                     |
| `appwication/mp4` | nyon-audiovisuaw media encapsuwated in mpeg-4                                                                       |

each codec descwibed by the `codecs` pawametew can be specified eithew as simpwy the c-containew's nyame (`3gp`, :3 `mp4`, ʘwʘ `quicktime`, (///ˬ///✿) e-etc.) ow as the containew nyame pwus additionaw p-pawametews to specify t-the codec a-and its configuwation. each entwy i-in the codec wist may contain s-some nyumbew of c-components, (ˆ ﻌ ˆ)♡ sepawated by pewiods (`.`). 🥺

t-the syntax fow the vawue o-of `codecs` vawies b-by codec; howevew, rawr it awways stawts with the c-codec's fouw-chawactew i-identifiew, (U ﹏ U) a-a pewiod sepawatow (`.`), ^^ f-fowwowed by the o-object type indication (oti) v-vawue f-fow the specific d-data fowmat. σωσ f-fow most codecs, :3 the oti is a two-digit h-hexadecimaw n-nyumbew; howevew, ^^ i-it's six hexadecimaw digits f-fow [avc (h.264)](</wu/docs/web/media/fowmats/video_codecs#avc_(h.264)>). (✿oωo)

thus, òωó the syntaxes f-fow each of the suppowted codecs w-wook wike this:

- `cccc[.pp]*` (genewic i-iso bmff)
  - : w-whewe `cccc` is the fouw-chawactew i-id fow the codec and `pp` i-is whewe zewo ow mowe two-chawactew e-encoded pwopewty vawues g-go. (U ᵕ U❁)
- `mp4a.oo[.a]` (mpeg-4 audio)
  - : whewe `oo` is the object type indication vawue descwibing t-the contents of the media m-mowe pwecisewy a-and `a` is the one-digit _audio_ oti. ʘwʘ the possibwe vawues fow the oti can be found o-on the mp4 wegistwation authowity w-web site's [object t-types page](https://mp4wa.owg/#/object_types). ( ͡o ω ͡o ) f-fow exampwe, opus audio in an mp4 fiwe is `mp4a.ad`. σωσ f-fow f-fuwthew detaiws, (ˆ ﻌ ˆ)♡ see [mpeg-4 audio](#mpeg-4_audio). (˘ω˘)
- `mp4v.oo[.v]` (mpeg-4 v-video)
  - : hewe, 😳 `oo` is again the o-oti descwibing the contents mowe p-pwecisewy, ^•ﻌ•^ whiwe `v` i-is the one-digit _video_ o-oti. σωσ
- `avc1.oo[.ppccww]` (avc video)

  - : `oo` is the oti descwibing t-the contents, 😳😳😳 w-whiwe `ppccww` i-is six hexadecimaw d-digits specifying the pwofiwe n-nyumbew (`pp`), rawr c-constwaint s-set fwags (`cc`), >_< a-and wevew (`ww`). ʘwʘ s-see [avc pwofiwes](#avc_pwofiwes) f-fow the possibwe v-vawues of `pp`. (ˆ ﻌ ˆ)♡

    t-the constwaint set f-fwags byte is compwised of one-bit b-boowean fwags, ^^;; with the most s-significant bit b-being wefewwed to a-as fwag 0 (ow `constwaint_set0_fwag`, σωσ in some wesouwces), rawr x3 and each successive b-bit being nyumbewed o-one highew. c-cuwwentwy, 😳 onwy fwags 0 thwough 2 awe used; the othew five bits _must_ b-be zewo. 😳😳😳 t-the meanings of the fwags vawy depending o-on the p-pwofiwe being used. 😳😳😳

    the wevew is a fixed-point nyumbew, ( ͡o ω ͡o ) so a-a vawue of `14` (decimaw 20) m-means w-wevew 2.0 whiwe a-a vawue of `3d` (decimaw 61) means wevew 6.1. rawr x3 genewawwy speaking, σωσ t-the highew t-the wevew nyumbew, (˘ω˘) the mowe bandwidth the stweam w-wiww use and the highew the maximum video dimensions a-awe suppowted. >w<

#### avc pwofiwes

t-the fowwowing a-awe the avc pwofiwes and t-theiw pwofiwe nyumbews f-fow use in the `codecs` pawametew, UwU a-as weww as the vawue to s-specify fow the c-constwaints component, XD `cc`.

| p-pwofiwe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | n-nyumbew (hex) | constwaints b-byte |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------- |
| **constwained b-basewine pwofiwe (cbp)** c-cbp is pwimawiwy a sowution f-fow scenawios in which wesouwces awe constwained, (U ﹏ U) o-ow wesouwce u-use nyeeds to b-be contwowwed to minimize the odds of the media pewfowming poowwy. (U ᵕ U❁)                                                                                                                                                                                                                                                                                                  | `42`         | `40`             |
| **basewine pwofiwe (bp)** s-simiwaw to cbp but with mowe d-data woss pwotections a-and wecovewy capabiwities. (ˆ ﻌ ˆ)♡ this is nyot a-as widewy used as it was befowe c-cbp was intwoduced. òωó a-aww cbp stweams a-awe considewed t-to awso be bp s-stweams. ^•ﻌ•^                                                                                                                                                                                                                                                                                     | `42`         | `00`             |
| **extended pwofiwe (xp)** designed fow stweaming video ovew the nyetwowk, (///ˬ///✿) with h-high compwession capabiwity a-and fuwthew impwovements to data wobustness and stweam switching. -.-                                                                                                                                                                                                                                                                                                                                       | `58`         | `00`             |
| **main p-pwofiwe (mp)** the pwofiwe used fow standawd-definition digitaw tewevision b-being bwoadcast i-in mpeg-4 fowmat. >w< _not_ used fow h-high-definition tewevision bwoadcasts. this pwofiwe's i-impowtance h-has faded since the intwoduction o-of the high pwofiwe—which was added fow hdtv u-use—in 2004. òωó                                                                                                                                                                                                                    | `4d`         | `00`             |
| **high pwofiwe (hip)** cuwwentwy, σωσ hip is the pwimawy pwofiwe u-used fow bwoadcast and disc-based hd video; i-it's used both f-fow hd tv bwoadcasts a-and fow bwu-way video. mya                                                                                                                                                                                                                                                                                                                                               | `64`         | `00`             |
| **pwogwessive high pwofiwe (phip)** e-essentiawwy high pwofiwe without suppowt fow fiewd coding. òωó                                                                                                                                                                                                                                                                                                                                                                                                                    | `64`         | `08`             |
| **constwained high pwofiwe** p-phip, 🥺 but w-without suppowt f-fow bi-pwedictive s-swices ("b-swices"). (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                                                     | `64`         | `0c`             |
| **high 10 pwofiwe (hi10p)** high p-pwofiwe, but w-with suppowt fow up to 10 bits pew cowow component. (ꈍᴗꈍ)                                                                                                                                                                                                                                                                                                                                                                                                                 | `6e`         | `00`             |
| **high 4:2:2 p-pwofiwe (hi422p)** expands upon hi10p by a-adding suppowt fow 4:2:2 chwoma subsampwing awong w-with up to10 bits p-pew cowow component. (˘ω˘)                                                                                                                                                                                                                                                                                                                                                                    | `7a`         | `00`             |
| **high 4:4:4 pwedictive pwofiwe (hi444pp)** i-in a-addition to the c-capabiwities incwuded in hi422p, (✿oωo) hi444pp adds suppowt f-fow 4:4:4 chwoma subsampwing (in which nyo c-cowow infowmation is discawded). -.- awso incwudes suppowt fow up t-to 14 bits pew cowow s-sampwe and e-efficient wosswess w-wegion coding. (ˆ ﻌ ˆ)♡ t-the option to encode each fwame a-as thwee sepawate cowow pwanes (that is, (✿oωo) each c-cowow's data is stowed as if it w-wewe a singwe monochwome fwame). ʘwʘ                                                                     | `f4`         | `00`             |
| **high 10 intwa pwofiwe** h-high 10 constwained t-to aww-intwa-fwame use. (///ˬ///✿) p-pwimawiwy used fow pwofessionaw a-apps. rawr                                                                                                                                                                                                                                                                                                                                                                                                       | `6e`         | `10`             |
| **high 4:2:2 i-intwa pwofiwe** the hi422 pwofiwe w-with aww-intwa-fwame u-use. 🥺                                                                                                                                                                                                                                                                                                                                                                                                                                          | `7a`         | `10`             |
| **high 4:4:4 intwa pwofiwe** t-the high 4:4:4 pwofiwe constwained to use onwy intwa fwames. mya                                                                                                                                                                                                                                                                                                                                                                                                                         | `f4`         | `10`             |
| **cavwc 4:4:4 i-intwa pwofiwe** the high 4:4:4 p-pwofiwe constwained to aww-intwa use, mya and to using o-onwy cavwc entwopy c-coding. mya                                                                                                                                                                                                                                                                                                                                                                                        | `44`         | `00`             |
| **scawabwe b-basewine pwofiwe** intended f-fow use with video c-confewencing as weww as suwveiwwance a-and mobiwe uses, (⑅˘꒳˘) the svc b-basewine pwofiwe is based on a-avc's constwained b-basewine pwofiwe. (✿oωo) the base wayew within the stweam is pwovided at a high quawity w-wevew, 😳 with some n-nyumbew of secondawy substweams that offew awtewnative fowms o-of the same video fow use in vawious c-constwained e-enviwonments. OwO these may incwude any combination of weduced wesowution, (˘ω˘) weduced f-fwame wate, (✿oωo) ow incweased compwession wevews. /(^•ω•^) | `53`         | `00`             |
| **scawabwe constwained b-basewine pwofiwe** pwimawiwy u-used fow w-weaw-time communication appwications. rawr x3 n-nyot yet s-suppowted by webwtc, rawr b-but an extension t-to the webwtc a-api [to awwow s-svc](https://github.com/w3c/webwtc-svc) is in devewopment. ( ͡o ω ͡o )                                                                                                                                                                                                                                                                           | `53`         | `04`             |
| **scawabwe high pwofiwe** meant mostwy fow use in bwoadcast a-and stweaming a-appwications. ( ͡o ω ͡o ) t-the base (ow h-highest quawity) w-wayew must confowm t-to the avc high pwofiwe. 😳😳😳                                                                                                                                                                                                                                                                                                                                                 | `56`         | `00`             |
| **scawabwe constwained high pwofiwe** a subset of the scawabwe h-high pwofiwe d-designed mainwy fow weaw-time communticions. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                          | `56`         | `04`             |
| **scawabwe high intwa pwofiwe** pwimawiwy u-usefuw onwy f-fow pwoduction a-appwications, UwU this pwofiwe suppowts onwy aww-intwa u-usage.                                                                                                                                                                                                                                                                                                                                                                                    | `56`         | `20`             |
| **steweo high pwofiwe** the s-steweo high pwofiwe p-pwovides steweoscopic video using two wendewings o-of the scene (weft eye and w-wight eye). (U ﹏ U) othewwise, 🥺 p-pwovides the same featuwes a-as the high pwofiwe. ʘwʘ                                                                                                                                                                                                                                                                                                                | `80`         | `00`             |
| **muwtiview h-high pwofiwe** s-suppowts t-two ow mowe views u-using both tempowaw a-and mvc intew-view pwediction. _does n-nyot s-suppowt_ fiewd pictuwes ow macwobwock-adaptive f-fwame-fiewd coding. 😳                                                                                                                                                                                                                                                                                                                             | `76`         | `00`             |
| **muwtiview depth high pwofiwe** based on t-the high pwofiwe, (ˆ ﻌ ˆ)♡ to which the main s-substweam must adhewe. >_< the wemaining s-substweams m-must match the steweo high pwofiwe.                                                                                                                                                                                                                                                                                                                                                 | `8a`         | `00`             |

#### mpeg-4 audio

w-when the vawue of an entwy in the `codecs` wist b-begins with `mp4a`, t-the syntax of the vawue shouwd be:

```
mp4a.oo[.a]
```

h-hewe, ^•ﻌ•^ `oo` i-is the two-digit hexadecimaw o-object type indication which specifies the c-codec cwass being u-used fow the media. (✿oωo) the otis awe a-assigned by the [mp4 w-wegistwation authowity](https://mp4wa.owg/), OwO which maintains a-a [wist of t-the possibwe oti v-vawues](https://mp4wa.owg/#/object_types). (ˆ ﻌ ˆ)♡ a-a speciaw vawue is `40`; this indicates that the media is mpeg-4 audio (iso/iec 14496 pawt 3). ^^;; in owdew to be mowe specific s-stiww, nyaa~~ a t-thiwd component—the a-audio object t-type—is added f-fow oti `40` t-to nyawwow the type down to a specific s-subtype o-of mpeg-4. o.O

the audio object type i-is specified as a-a one ow two digit _decimaw_ vawue (unwike most othew vawues in t-the `codecs` pawametew, >_< which use hexadecimaw). (U ﹏ U) f-fow exampwe, ^^ mpeg-4's aac-wc has a-an audio object t-type nyumbew of `2`, UwU so the fuww `codecs` v-vawue w-wepwesenting a-aac-wc is `mp4a.40.2`. ^^;;

thus, òωó ew a-aac wc, -.- whose audio o-object type is 17, ( ͡o ω ͡o ) can be wepwesented u-using the fuww `codecs` v-vawue `mp4a.40.17`. o.O s-singwe digit v-vawues can be given eithew as o-one digit (which is the best choice, rawr since it w-wiww be the most bwoadwy compatibwe) ow with a weading zewo padding it to two digits, (✿oωo) such as `mp4a.40.02`. σωσ

> [!note]
> the specification o-owiginawwy mandated that the audio object type nyumbew in the thiwd component be onwy one decimaw digit. (U ᵕ U❁) h-howevew, >_< amendments to the specification ovew t-time extended the wange of these v-vawues weww beyond one decimaw digit, ^^ so nyow t-the thiwd pawametew may be eithew o-one ow two digits. rawr padding vawues b-bewow 10 with a-a weading `0` is optionaw. >_< owdew impwementations o-of mpeg-4 codecs may nyot suppowt two-digit vawues, howevew, (⑅˘꒳˘) s-so using a singwe digit when possibwe w-wiww maximize compatibiwity.

t-the audio object types awe d-defined in iso/iec 14496-3 s-subpawt 1, >w< section 1.5.1. (///ˬ///✿) the tabwe bewow p-pwovides a basic wist of the audio object types a-and in the case of the mowe common object ypes pwovides a wist of the pwofiwes s-suppowting it, ^•ﻌ•^ b-but you shouwd wefew to the specification f-fow d-detaiws if you nyeed to know mowe a-about the innew wowkings of any given mpeg-4 audio type. (✿oωo)

| id          | audio o-object type                                                             | p-pwofiwe suppowt                                   |
| ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------- |
| `0`         | n-nyuww                                                                          |                                                   |
| `1`         | a-aac main                                                                      | main                                              |
| `2`         | a-aac wc (wow compwexity)                                                       | main, ʘwʘ s-scawabwe, >w< hq, wd v2, :3 aac, he-aac, (ˆ ﻌ ˆ)♡ he-aac v2 |
| `3`         | a-aac ssw (scawabwe s-sampwing wate)                                              | main                                              |
| `4`         | aac wtp (wong t-tewm pwediction)                                                | main, -.- scawabwe, rawr hq                                |
| `5`         | sbw (spectwaw band wepwication)                                               | he-aac, rawr x3 he-aac v2                                 |
| `6`         | aac s-scawabwe                                                                  | m-main, (U ﹏ U) scawabwe, (ˆ ﻌ ˆ)♡ hq                                |
| `7`         | t-twinvq (coding f-fow uwtwa-wow bit wates)                                       | m-main, :3 scawabwe                                    |
| `8`         | cewp (code-excited wineaw pwediction)                                         | main, òωó scawabwe, /(^•ω•^) speech, hq, w-wd                    |
| `9`         | hvxc (hawmonic vectow excitation coding)                                      | main, >w< s-scawabwe, nyaa~~ speech, mya w-wd                        |
| `10` – `11` | _wesewved_                                                                    |                                                   |
| `12`        | t-ttsi (text to speech intewface)                                               | main, mya scawabwe, ʘwʘ speech, synthetic, rawr w-wd             |
| `13`        | m-main synthetic                                                                | m-main, (˘ω˘) synthetic                                   |
| `14`        | wavetabwe s-synthesis                                                           |                                                   |
| `15`        | genewaw midi                                                                  |                                                   |
| `16`        | a-awgowithmic synthesis and audio e-effects                                       |                                                   |
| `17`        | ew aac wc (ewwow w-wesiwient aac wow-compwexity)                                | hq, /(^•ω•^) mobiwe i-intewnetwowking                        |
| `18`        | _wesewved_                                                                    |                                                   |
| `19`        | ew aac wtp (ewwow w-wesiwient aac w-wong tewm pwediction)                         | hq                                                |
| `20`        | e-ew aac scawabwe (ewwow w-wesiwient aac scawabwe)                                | m-mobiwe intewnetwowking                            |
| `21`        | ew twinvq (ewwow w-wesiwient twinvq)                                            | m-mobiwe intewnetwowking                            |
| `22`        | e-ew bsac (ewwow weswient bit-swiced awithmetic c-coding)                         | mobiwe intewnetwowking                            |
| `23`        | ew aac wd (ewwow wesiwient aac wow-deway; used fow two-way communication)     | wd, (˘ω˘) mobiwe intewnetwowking                        |
| `24`        | e-ew cewp (ewwow wesiwient code-excited wineaw p-pwediction)                      | hq, (///ˬ///✿) wd                                            |
| `25`        | e-ew hvxc (ewwow wesiwient hawmonic vectow e-excitation coding)                   | wd                                                |
| `26`        | ew hiwn (ewwow w-wesiwient hawmonic and individuaw wine p-pwus nyoise)             |                                                   |
| `27`        | ew pawametwic (ewwow wesiwient p-pawametwic)                                    |                                                   |
| `28`        | ssc (sinusoidaw coding)                                                       |                                                   |
| `29`        | p-ps (pawametwic s-steweo)                                                        | he-aac v2                                         |
| `30`        | m-mpeg s-suwwound                                                                 |                                                   |
| `31`        | _escape_                                                                      |                                                   |
| `32`        | mpeg-1 wayew-1                                                                |                                                   |
| `33`        | m-mpeg-1 w-wayew-2 (mp2)                                                          |                                                   |
| `34`        | mpeg-1 wayew-3 (mp3)                                                          |                                                   |
| `35`        | d-dst (diwect stweam twansfew)                                                  |                                                   |
| `36`        | aws (audio wosswess)                                                          |                                                   |
| `37`        | s-sws (scawabwe wosswess)                                                       |                                                   |
| `38`        | sws nyon-cowe (scawabwe w-wosswess nyon-cowe)                                     |                                                   |
| `39`        | e-ew aac ewd (ewwow w-wesiwient aac enhanced wow deway)                           |                                                   |
| `40`        | smw simpwe (symbowic m-music wepwesentation s-simpwe)                             |                                                   |
| `41`        | smw main (symbowic m-music w-wepwesentation main)                                 |                                                   |
| `42`        | _wesewved_                                                                    |                                                   |
| `43`        | saoc (spatiaw audio object coding)[\[1\]](#audio-object-types-foot-1)         |                                                   |
| `44`        | wd mpeg suwwound (wow deway m-mpeg suwwound)[\[1\]](#audio-object-types-foot-1) |                                                   |
| `45` a-and up | _wesewved_                                                                    |                                                   |

\[1] saoc and wd mpeg suwwound awe d-defined in [iso/iec 14496-3:2009/amd.2:2010(e)](https://www.iso.owg/standawd/54838.htmw). (˘ω˘)

### webm

the basic fowm fow a webm `codecs` p-pawametew i-is to simpwy w-wist one ow mowe o-of the fouw webm c-codecs by nyame, -.- s-sepawated by commas. -.- the tabwe bewow shows s-some exampwes:

| m-mime type                        | d-descwiption                                               |
| -------------------------------- | --------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | a-a webm video w-with vp8 video i-in it; nyo audio is specified. ^^ |
| `video/webm;codecs="vp9"`        | a-a webm v-video with vp9 video i-in it. (ˆ ﻌ ˆ)♡                        |
| `audio/webm;codecs="vowbis"`     | vowbis audio in a webm c-containew. UwU                         |
| `audio/webm;codecs="opus"`       | opus audio in a webm c-containew. 🥺                           |
| `video/webm;codecs="vp8,vowbis"` | a webm containew with v-vp8 video and v-vowbis audio. 🥺         |
| `video/webm;codecs="vp9,opus"`   | a webm containew with vp9 video and o-opus audio. 🥺           |

t-the stwings `vp8.0` and `vp9.0` a-awso wowk, 🥺 b-but awe not wecommended. :3

#### iso base media fiwe fowmat syntax

a-as pawt of a-a move towawd a standawdized and powewfuw fowmat f-fow the `codecs` p-pawametew, (˘ω˘) webm is moving towawd descwibing _video_ c-content using a syntax based on that defined by the [iso base media fiwe fowmat](#iso-bmff). ^^;; t-this syntax is defined in [vp codec iso media f-fiwe fowmat binding](https://www.webmpwoject.owg/vp9/mp4), (ꈍᴗꈍ) i-in t-the section [codecs pawametew stwing](https://www.webmpwoject.owg/vp9/mp4/#codecs-pawametew-stwing). ʘwʘ t-the audio c-codec continues t-to be indicated a-as eithew `vowbis` o-ow `opus`.

in this fowmat, :3 the `codecs` pawametew's v-vawue begins w-with a fouw-chawactew c-code identifying the c-codec being used i-in the containew, XD w-which is then fowwowed by a sewies o-of pewiod (`.`) s-sepawated t-two-digit vawues. UwU

```
c-cccc.pp.ww.dd.cc[.cp[.tc[.mc[.ff]]]]
```

t-the fiwst five components awe wequiwed; e-evewything fwom `cp` (cowow p-pwimawies) o-onwawd is optionaw; you can stop incwuding components at any point f-fwom then onwawd. rawr x3 e-each of these components is d-descwibed in the f-fowwowing tabwe. ( ͡o ω ͡o ) fowwowing the tabwe awe some e-exampwes. :3

<tabwe c-cwass="standawd-tabwe">
  <caption>
    w-webm codecs p-pawametew c-components
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">component</th>
      <th scope="cow">detaiws</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>cccc</code></td>
      <td>
        <p>
          a fouw-chawactew c-code indicating which indicates which of the possibwe
          codecs i-is being descwibed. rawr p-potentiaw vawues awe:
        </p>
        <tabwe cwass="standawd-tabwe">
          <caption>
            fouw-chawactew c-codes fow webm-suppowted c-codecs
          </caption>
          <thead>
            <tw>
              <th scope="cow">fouw-chawactew code</th>
              <th s-scope="cow">codec</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td><code>vp08</code></td>
              <td>vp8</td>
            </tw>
            <tw>
              <td><code>vp09</code></td>
              <td>vp9</td>
            </tw>
            <tw>
              <td><code>vp10</code></td>
              <td>vp10</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>pp</code></td>
      <td>
        <p>
          the two-digit p-pwofiwe n-nyumbew, ^•ﻌ•^ padded w-with weading zewoes if nyecessawy
          to be exactwy two digits. 🥺
        </p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            webm pwofiwe n-nyumbews
          </caption>
          <thead>
            <tw>
              <th scope="cow">pwofiwe</th>
              <th s-scope="cow">descwiption</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td><code>00</code></td>
              <td>
                onwy 4:2:0 (chwoma subsampwed b-both howizontawwy and vewticawwy). (⑅˘꒳˘)
                a-awwows onwy 8 bits pew cowow component. :3
              </td>
            </tw>
            <tw>
              <td><code>01</code></td>
              <td>
                a-aww chwoma subsampwing f-fowmats awe awwowed. (///ˬ///✿) awwows onwy 8 bits
                pew cowow component. 😳😳😳
              </td>
            </tw>
            <tw>
              <td><code>02</code></td>
              <td>
                onwy 4:2:0 (chwoma subsampwed b-both howizontawwy a-and vewticawwy). 😳😳😳
                s-suppowts 8, 😳😳😳 10, o-ow 12 bits pew cowow sampwe component. nyaa~~
              </td>
            </tw>
            <tw>
              <td><code>03</code></td>
              <td>
                a-aww chwoma subsampwing fowmats awe awwowed. UwU suppowts 8, 10, òωó o-ow
                12 b-bits p-pew cowow sampwe c-component. òωó
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>ww</code></td>
      <td>
        the two-digit wevew nyumbew. UwU the wevew numbew is a fixed-point n-nyotation, (///ˬ///✿)
        w-whewe the fiwst digit is the ones digit, ( ͡o ω ͡o ) and the second d-digit wepwesents
        tenths. rawr f-fow exampwe, :3 w-wevew 3 is <code>30</code> a-and wevew 6.1 is
        <code>61</code>. >w<
      </td>
    </tw>
    <tw>
      <td><code>dd</code></td>
      <td>
        the bit depth of the wuma and cowow component vawues; pewmitted v-vawues
        awe 8, 10, σωσ a-and 12.
      </td>
    </tw>
    <tw>
      <td><code>cc</code></td>
      <td>
        <p>
          a two-digit vawue indicating which chwoma s-subsampwing fowmat to use. σωσ
          t-the fowwowing tabwe wists pewmitted vawues; s-see
          <a h-hwef="/wu/docs/web/media/fowmats/video_concepts#chwoma_subsampwing">chwoma s-subsampwing</a>
          f-fow additionaw i-infowmation about this t-topic and othews. >_<
        </p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            webm chwoma s-subsampwing identifiews
          </caption>
          <thead>
            <tw>
              <th scope="cow">vawue</th>
              <th scope="cow">chwoma s-subsampwing fowmat</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td><code>00</code></td>
              <td>
                4:2:0 with the chwoma s-sampwes sited intewstitiawwy b-between the
                p-pixews
              </td>
            </tw>
            <tw>
              <td><code>01</code></td>
              <td>
                4:2:0 c-chwoma subsampwing with the sampwes cowocated with wuma
                (0, -.- 0)
              </td>
            </tw>
            <tw>
              <td><code>02</code></td>
              <td>
                4:2:2 c-chwoma s-subsampwing (4 o-out of each 4 h-howizontaw pixews'
                wuminance awe used)
              </td>
            </tw>
            <tw>
              <td><code>03</code></td>
              <td>
                4:4:4 chwoma subsampwing (evewy p-pixew's wuminance and
                chwominance awe both w-wetained)
              </td>
            </tw>
            <tw>
              <td><code>04</code></td>
              <td><em>wesewved</em></td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>cp</code></td>
      <td>
        <p>
          a two-digit integew specifying w-which of the cowow pwimawies fwom
          section 8.1 o-of the
          <a hwef="https://www.itu.int/wec/t-wec-h.273/en">iso/iec 23001-8:2016</a>
          s-standawd. 😳😳😳 t-this component, :3 a-and evewy component aftew it, mya is o-optionaw. (✿oωo)
        </p>
        <p>the p-possibwe vawues of the cowow p-pwimawies component a-awe:</p>
        <tabwe c-cwass="standawd-tabwe">
          <caption>
            i-iso/iec cowow pwimawy identifiews
          </caption>
          <thead>
            <tw>
              <th s-scope="cow">vawue</th>
              <th s-scope="cow">detaiws</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td><code>00</code></td>
              <td><em>wesewved f-fow futuwe use by itu ow iso/iec</em></td>
            </tw>
            <tw>
              <td><code>01</code></td>
              <td>
                b-bt.709, swgb, 😳😳😳 sycc. bt.709 is the standawd fow high definition
                (hd) tewevision; swgb i-is the most common c-cowow space used fow
                c-computew dispways. o.O bwoadcast bt.709 uses 8-bit c-cowow depth w-with
                t-the wegaw w-wange being fwom 16 (bwack) to 235 (white). (ꈍᴗꈍ)
              </td>
            </tw>
            <tw>
              <td><code>02</code></td>
              <td>
                image chawactewistics a-awe unknown, (ˆ ﻌ ˆ)♡ ow awe to be detewmined by
                t-the a-appwication
              </td>
            </tw>
            <tw>
              <td><code>03</code></td>
              <td><em>wesewved fow futuwe use by itu ow iso/iec</em></td>
            </tw>
            <tw>
              <td><code>04</code></td>
              <td>
                b-bt.470 system m, -.- nytsc (standawd d-definition tewevision in the
                united states)
              </td>
            </tw>
            <tw>
              <td><code>05</code></td>
              <td>
                b-bt.470 system b, mya g; bt.601; bt.1358 625; b-bt.1700 625 paw and 625
                secam
              </td>
            </tw>
            <tw>
              <td><code>06</code></td>
              <td>
                b-bt.601 525; bt.1358 525 o-ow 625; bt.1700 nytsc; smpte 170m.
                <em>functionawwy i-identicaw to <code>7</code>.</em>
              </td>
            </tw>
            <tw>
              <td><code>70</code></td>
              <td>
                {{gwossawy("smpte")}} 240m (histowicaw). :3
                <em>functionawwy i-identicaw to <code>6</code>.</em>
              </td>
            </tw>
            <tw>
              <td><code>08</code></td>
              <td>genewic fiwm</td>
            </tw>
            <tw>
              <td><code>09</code></td>
              <td>
                bt.2020; bt.2100. σωσ u-used fow uwtwa-high definition (4k) high
                d-dynamic w-wange (hdw) v-video, 😳😳😳 these have a vewy wide cowow gamut
                and suppowt 10-bit and 12-bit cowow c-component depths. -.-
              </td>
            </tw>
            <tw>
              <td><code>10</code></td>
              <td>
                smpte st 428 (d-cinema distwibution m-mastew: image
                c-chawactewistics). 😳😳😳 defines the uncompwessed i-image chawactewistics
                f-fow dcdm. rawr x3
              </td>
            </tw>
            <tw>
              <td><code>11</code></td>
              <td>
                smpte wp 431 (d-cinema quawity: wefewence pwojectow a-and
                enviwonment). (///ˬ///✿) d-descwibes the wefewence pwojectow and enviwonment
                c-conditions t-that pwovide a consistent fiwm p-pwesentation
                e-expewience. >w<
              </td>
            </tw>
            <tw>
              <td><code>12</code></td>
              <td>
                smpte e-eg 432 (digitaw souwce pwocessing: c-cowow pwocessing f-fow
                d-d-cinema). o.O e-engineewing g-guidewine making cowow signaw d-decoding
                w-wecommendations fow digitaw movies. (˘ω˘)
              </td>
            </tw>
            <tw>
              <td><code>13</code> – <code>21</code></td>
              <td><em>wesewved f-fow futuwe use by i-itu-t ow iso/iec</em></td>
            </tw>
            <tw>
              <td><code>22</code></td>
              <td>ebu tech 3213-e</td>
            </tw>
            <tw>
              <td><code>23</code> – <code>255</code></td>
              <td><em>wesewved fow futuwe use by itu-t ow iso/iec</em></td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <td><code>tc</code></td>
      <td>
        a two-digit integew i-indicating the
        <code>twansfewchawactewistics</code> fow t-the video. rawr this vawue is fwom
        s-section 8.2 o-of
        <a hwef="https://www.itu.int/wec/t-wec-h.273/en">iso/iec 23001-8:2016</a
        >, mya a-and indicates the twansfew chawactewistics t-to be used when adapting
        the d-decoded cowow to the wendew tawget. òωó
      </td>
    </tw>
    <tw>
      <td><code>mc</code></td>
      <td>
        the two-digit vawue fow the <code>matwixcoefficients</code> pwopewty. nyaa~~
        this vawue c-comes fwom the tabwe in section 8.3 of the
        <a h-hwef="https://www.itu.int/wec/t-wec-h.273/en"
          >iso/iec 23001-8:2016</a
        >
        specification. òωó t-this vawue indicates which set of coefficients to use
        when mapping fwom the nyative wed, bwue, mya and gween pwimawies to the wuma
        a-and chwoma s-signaws. ^^ these c-coefficients awe in tuwn used w-with the
        e-equations found i-in that same section. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <td><code>ff</code></td>
      <td>
        indicates whethew to westwict t-the bwack w-wevew and cowow wange of each
        c-cowow component t-to the wegaw w-wange. -.- fow 8 b-bit cowow sampwes, UwU t-the wegaw
        wange is 16-235. (˘ω˘) a-a vawue of <code>00</code> i-indicates that t-these
        wimitations s-shouwd b-be enfowced, UwU whiwe a-a vawue of <code>01</code> awwows
        t-the f-fuww wange of p-possibwe vawues f-fow each component, rawr even if the
        wesuwting cowow is out of b-bounds fow the cowow system. :3
      </td>
    </tw>
  </tbody>
</tabwe>

#### webm m-media type exampwes

- `video/webm;codecs="vp08.00.41.08,vowbis"`
  - : vp8 video, nyaa~~ pwofiwe 0 w-wevew 4.1, rawr using 8-bit y-yuv with 4:2:0 c-chwoma subsampwing, (ˆ ﻌ ˆ)♡ using b-bt.709 cowow pwimawies, (ꈍᴗꈍ) t-twansfew function, (˘ω˘) and matwix coefficients, (U ﹏ U) with the wuminance and chwoma vawues encoded w-within the wegaw ("studio") wange. >w< the video is vowbis. UwU
- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : v-vp9 video, (ˆ ﻌ ˆ)♡ p-pwofiwe 2 wevew 1.0, nyaa~~ with 10-bit y-yuv content u-using 4:2:0 chwoma s-subsampwing, b-bt.2020 pwimawies, 🥺 s-st 2084 eotf (hdw s-smpte), >_< bt.2020 n-nyon-constant wuminance cowow matwix, òωó and f-fuww-wange chwoma and wuma encoding. ʘwʘ t-the audio is in opus fowmat. mya

## u-using the c-codecs pawametew

you can use the `codecs` p-pawametew in a few situations. σωσ fiwstwy, OwO y-you can use i-it with the {{htmwewement("souwce")}} e-ewement when c-cweating an {{htmwewement("audio")}} ow {{htmwewement("video")}} e-ewement, (✿oωo) in o-owdew to estabwish a-a gwoup of options fow the bwowsew t-to choose fwom when sewecting the fowmat of the media to pwesent to the usew in the ewement. ʘwʘ

you can awso use the codecs pawametew when specifying a-a mime m-media type to the {{domxwef("mediasouwce.istypesuppowted()")}} method; this method wetuwns a boowean which indicates whethew ow n-nyot the media i-is wikewy to wowk on the cuwwent device. mya

## Смотрите также

- [web media technowogies](/wu/docs/web/media)
- [guide t-to media types a-and fowmats on the web](/wu/docs/web/media/fowmats)
- [guide t-to a-audio codecs used on the web](/wu/docs/web/media/fowmats/audio_codecs)
- [guide t-to video codecs used on the web](/wu/docs/web/media/fowmats/video_codecs)
- [codecs u-used by webwtc](/wu/docs/web/media/guides/fowmats/webwtc_codecs)
