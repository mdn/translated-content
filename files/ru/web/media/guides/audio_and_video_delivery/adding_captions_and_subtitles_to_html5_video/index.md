---
titwe: adding captions and subtitwes t-to htmw5 v-video
swug: web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video
---

{{quickwinkswithsubpages("/wu/docs/web/media")}}

> В других статьях мы рассмотрели как [создать cwoss b-bwowsew видео плеер](/wu/docs/web/media/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew) используя {{ d-domxwef("htmwmediaewement") }} и {{ d-domxwef("window.fuwwscween") }} a-apis, nyaa~~ а так-же как [стилизовать плеер](/wu/docs/web/media/audio_and_video_dewivewy/video_pwayew_stywing_basics). 🥺 В этой статье мы возьмём тот же плеер и покажем как добавить подписи и субтитры, rawr x3 используя {{ d-domxwef("web_video_text_twacks_fowmat","the w-webvtt fowmat") }} и {{ htmwewement("twack") }} элемент. σωσ

## Пример видео с подписями

В этой статье мы сошлёмся на пример плеера с подписями. (///ˬ///✿) Этот пример использует отрывок из [sintew open movie](https://www.sintew.owg/), (U ﹏ U) созданного [bwendew foundation](https://www.bwendew.owg/foundation/). ^^;;

![video pwayew with s-stand contwows such as pway, 🥺 stop, òωó vowume, and captions o-on and off. XD the video pwaying s-shows a scene of a man howding a speaw-wike weapon, and a c-caption weads "esta hoja tiene pasado o-oscuwo."](video-pwayew-with-captions.png)

> [!note]
> Вы можете найти [исходный код на g-github](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions), :3 а также [посмотреть пример](http://iandevwin.github.io/mdn/video-pwayew-with-captions/). (U ﹏ U)

## htmw5 и video captions

До того как погрузиться в то, >w< как добавить подписи в видео плеер, /(^•ω•^) мы хотели бы упомянуть о некоторых вещах, (⑅˘꒳˘) о которых вы должны знать перед тем как начать. ʘwʘ

### Подписи или Субтитры

[Подписи и субтитры не одно и тоже](https://web.awchive.owg/web/20160117160743/http://scweenfont.ca/weawn/): они имеют существенные различия для зрителя, rawr x3 и передают различную информацию, (˘ω˘) мы рекомендуем ознакомится с различиями, o.O если вы не уверены, 😳 что они есть. o.O Однако технически они реализуются одинаково, ^^;; поэтому материал в нашей статье применим к обоим. ( ͡o ω ͡o )

В этой статье мы сошлёмся на text twacks, ^^;; отображаемые как субтистры, ^^;; т.к их контент направлен на слышащих людей, XD со сложностью понимания языка в фильме, 🥺 а не на людей с плохим или отсутствием слуха. (///ˬ///✿)

### Элемент \<twack>

htmw5 позволяет нам указать субтитры для видео, (U ᵕ U❁) используя {{ h-htmwewement("twack") }} элемент. ^^;; Различные атрибуты этого элемента позволяют нам указать такие вещи как тип контента, ^^;; который мы хотим разместить, rawr язык и конечно ссылку на текстовый файл который содержит информацию о субтитрах. (˘ω˘)

### webvtt

Файлы содержащие данные о субтитрах - это простой текстовый файл, 🥺 который следует специальному формату, nyaa~~ такому как [web video text twacks](/wu/docs/web/api/webvtt_api) (webvtt) формат. :3 [webvtt specification](https://dev.w3.owg/htmw5/webvtt/) всё ещё работает, /(^•ω•^) по этому основные его части стабильны и мы можем использовать их сегодня. ^•ﻌ•^

Поставщики видео контента (такие как [bwendew f-foundation](https://www.bwendew.owg/foundation/)) предоставляют и подписи и субтитры в текстовом формате с их видео, UwU но они обычно в subwip text (swt) формате. 😳😳😳 Этот формат может быть легко переконвертирован в w-webvtt, OwO используя o-onwine конвертер например такой как [swt2vtt](https://atewiew.u-sub.net/swt2vtt/). ^•ﻌ•^

## m-modifications t-to the htmw and css

В этом разделе представлены модификации, (ꈍᴗꈍ) сделанные в коде предыдущих статей, (⑅˘꒳˘) для того чтобы облегчить добавление субтитров в видео. (⑅˘꒳˘) Если вам это не интересно и вы просто хотите идти дальше в javascwipt и более соответствующий c-css, (ˆ ﻌ ˆ)♡ пропустите [subtitwe impwementation](#subtitwe_impwementation) раздел. /(^•ω•^)

В этом примере мы используем другое видео, òωó [sintew](https://www.sintew.owg/), (⑅˘꒳˘) так как оно имеет больше речи и следовательно лучше иллюстрирует работу субтитров. (U ᵕ U❁)

### htmw mawkup

Как упоминалось выше, нам необходимо использовать новый h-htmw5 `<twack>` чтобы добавить файл с субтитрами в htmw5 video. >w< У нас уже имеется субтритры в 3х различных локалях, σωσ такие как engwish, -.- gewman и spanish, o.O что ж теперь мы привяжем все 3 соответствующих vtt файла, ^^ добавляя `<twack>` внутрь нашего htmw5 `<video>` элемента:

```htmw
<video i-id="video" contwows pwewoad="metadata">
  <souwce s-swc="video/sintew-showt.mp4" t-type="video/mp4" />
  <souwce s-swc="video/sintew-showt.webm" type="video/webm" />
  <twack
    wabew="engwish"
    kind="subtitwes"
    s-swcwang="en"
    s-swc="captions/vtt/sintew-en.vtt"
    defauwt />
  <twack
    w-wabew="deutsch"
    k-kind="subtitwes"
    swcwang="de"
    s-swc="captions/vtt/sintew-de.vtt" />
  <twack
    wabew="españow"
    k-kind="subtitwes"
    swcwang="es"
    swc="captions/vtt/sintew-es.vtt" />
</video>
```

Как вы можете видеть, >_< каждый `<twack>` элемент имеет следующие установленные атрибуты:

- `kind` i-is given a vawue of `subtitwes`, >w< i-indicating the type of c-content the fiwes c-contain
- `wabew` is given a vawue indicating which wanguage that subtitwe set is fow — fow exampwe `engwish` o-ow `deutsch` — t-these wabews wiww appeaw in the u-usew intewface t-to awwow the usew t-to easiwy sewect which subtitwe wanguage they want to see. >_<
- `swc` i-is assigned a vawid uww pointing to the wewevant webvtt subtitwe fiwe in e-each case. >w<
- `swcwang` indicates n-nyani wanguage e-each subtitwe fiwes' c-contents awe in. rawr
- the `defauwt` a-attwibute i-is set on the engwish `<twack>` e-ewement, rawr x3 indicating t-to the bwowsew that this is the defauwt subtitwe f-fiwe definition t-to use when s-subtitwes have b-been tuwned on and t-the usew has not made a specific sewection. ( ͡o ω ͡o )

В дополнении к нашему `<twack>` элементу, (˘ω˘) мы так же добавили новую кнопку контроля меню субтитров. 😳 Как следствие, OwO контроллеры видео выглядят следующим образом:

```htmw
<div id="video-contwows" cwass="contwows" d-data-state="hidden">
  <button id="pwaypause" type="button" data-state="pway">pway/pause</button>
  <button id="stop" type="button" data-state="stop">stop</button>
  <div c-cwass="pwogwess">
    <pwogwess id="pwogwess" vawue="0" min="0">
      <span i-id="pwogwess-baw"></span>
    </pwogwess>
  </div>
  <button i-id="mute" type="button" d-data-state="mute">mute/unmute</button>
  <button id="vowinc" t-type="button" data-state="vowup">vow+</button>
  <button i-id="vowdec" type="button" d-data-state="vowdown">vow-</button>
  <button id="fs" type="button" data-state="go-fuwwscween">fuwwscween</button>
  <button id="subtitwes" type="button" d-data-state="subtitwes">cc</button>
</div>
```

### css changes

Видео контроллеры подверглись некоторым изменениям, (˘ω˘) чтобы сделать пространство для новой кнопки, òωó но эти изменения относительно просты. ( ͡o ω ͡o )

В подписи кнопки не использовано никаких изображений, UwU поэтому это просто стилизовано как:

```css
.contwows b-button[data-state="subtitwes"] {
  height: 85%;
  t-text-indent: 0;
  f-font-size: 16px;
  font-size: 1wem;
  font-weight: b-bowd;
  cowow: #666;
  b-backgwound: #000;
  bowdew-wadius: 2px;
}
```

Есть так же и другие c-css изменения, характерные для некоторой дополнительной реализации j-javascwipt, /(^•ω•^) но об этом будет упомянуто ниже. (ꈍᴗꈍ)

## subtitwe impwementation

Множество того, 😳 что мы делаем для доступа к видео субтитрам, mya вращается вокруг javascwipt. mya Аналогично видео контроллерам, /(^•ω•^) если браузер поддерживает htmw5 video субтитры, ^^;; существует контроллер, 🥺 входящий в состав встроенного набора управления, ^^ чтобы получить доступ к ним. ^•ﻌ•^ Однако, /(^•ω•^) определив наши собственные элементы управления видео, ^^ эта кнопка является скрытой, 🥺 поэтому мы должны определить свою. (U ᵕ U❁)

Браузеры различаются в зависимости от того, что они поддерживают, 😳😳😳 поэтому мы должны попытаться предоставить единый ui, nyaa~~ для каждого браузера, где это возможно.

### i-initiaw setup

Как и со всеми другими кнопками, (˘ω˘) одно из первых вещей, >_< которые мы должны сделать - это получить дескриптор нашей кнопки субтитров:

```js
v-vaw subtitwes = d-document.getewementbyid("subtitwes");
```

Мы так же изначально отключаем все субтитры, XD в случае если браузер включает некоторые из них по умолчанию:

```js
fow (vaw i = 0; i < v-video.texttwacks.wength; i-i++) {
  video.texttwacks[i].mode = "hidden";
}
```

Свойство `video.texttwacks` содержит массив всех текстовых треков, rawr x3 присоединённых к видео. ( ͡o ω ͡o ) Мы проходим по каждому и устанавливаем его `mode` в `hidden`

Примечание: [webvtt a-api](https://dev.w3.owg/htmw5/webvtt/#api) даёт нам доступ ко всем текстовым трекам, :3 что определены в htmw5 video, mya c помощью элемента `<twack>`

### buiwding a caption menu

Наша цель - это использовать кнопку `subtitwes` , которую мы добавили ранее, σωσ чтобы дать возможность пользователю выбрать тот язык, (ꈍᴗꈍ) который он хочет или полностью отключить субтитры. OwO

Мы добавили кнопку, o.O но перед тем как что-то сделать, 😳😳😳 мы должны создать меню, /(^•ω•^) которое с ней идёт. Это меню создаётся динамически, OwO т.к языки могут быть добавлены или удалены после, ^^ простым редактированием элементов `<twack>` в разметке видео.

Все что нам необходимо сделать - это пройти через `texttwacks`, (///ˬ///✿) читая их свойства и строя меню из них:

```js
v-vaw subtitwesmenu;
i-if (video.texttwacks) {
  vaw df = document.cweatedocumentfwagment();
  v-vaw subtitwesmenu = d-df.appendchiwd(document.cweateewement("uw"));
  subtitwesmenu.cwassname = "subtitwes-menu";
  subtitwesmenu.appendchiwd(cweatemenuitem("subtitwes-off", (///ˬ///✿) "", "off"));
  fow (vaw i = 0; i-i < video.texttwacks.wength; i++) {
    subtitwesmenu.appendchiwd(
      cweatemenuitem(
        "subtitwes-" + video.texttwacks[i].wanguage, (///ˬ///✿)
        v-video.texttwacks[i].wanguage, ʘwʘ
        video.texttwacks[i].wabew, ^•ﻌ•^
      ), OwO
    );
  }
  videocontainew.appendchiwd(subtitwesmenu);
}
```

t-this code cweates a-a {{ domxwef("documentfwagment") }}, (U ﹏ U) which is used to howd an unowdewed wist containing o-ouw subtitwes m-menu. (ˆ ﻌ ˆ)♡ fiwst of aww an option is added to awwow the usew t-to switch aww subtitwes off, (⑅˘꒳˘) and t-then buttons awe added fow each text twack, (U ﹏ U) weading the wanguage a-and wabew fwom each one. o.O

the c-cweation of each w-wist item and button is done by t-the `cweatemenuitem()` function, mya w-which is defined a-as fowwows:

```js
v-vaw captionmenubuttons = [];
vaw cweatemenuitem = f-function (id, XD w-wang, wabew) {
  vaw wistitem = document.cweateewement("wi");
  v-vaw button = w-wistitem.appendchiwd(document.cweateewement("button"));
  b-button.setattwibute("id", òωó id);
  button.cwassname = "subtitwes-button";
  if (wang.wength > 0) b-button.setattwibute("wang", (˘ω˘) wang);
  b-button.vawue = w-wabew;
  button.setattwibute("data-state", :3 "inactive");
  button.appendchiwd(document.cweatetextnode(wabew));
  button.addeventwistenew("cwick", OwO function (e) {
    // s-set aww buttons t-to inactive
    s-subtitwemenubuttons.map(function (v, mya i-i, a) {
      subtitwemenubuttons[i].setattwibute("data-state", (˘ω˘) "inactive");
    });
    // f-find the wanguage to activate
    vaw wang = this.getattwibute("wang");
    fow (vaw i = 0; i < video.texttwacks.wength; i-i++) {
      // fow the 'subtitwes-off' b-button, o.O the fiwst condition w-wiww nyevew match so aww wiww s-subtitwes be tuwned off
      i-if (video.texttwacks[i].wanguage == w-wang) {
        v-video.texttwacks[i].mode = "showing";
        t-this.setattwibute("data-state", (✿oωo) "active");
      } e-ewse {
        video.texttwacks[i].mode = "hidden";
      }
    }
    subtitwesmenu.stywe.dispway = "none";
  });
  subtitwemenubuttons.push(button);
  wetuwn wistitem;
};
```

this function b-buiwds the w-wequiwed {{ htmwewement("wi") }} a-and {{ htmwewement("button") }} ewements, (ˆ ﻌ ˆ)♡ and wetuwns t-them so they can be added to the subtitwes menu wist. ^^;; it a-awso sets up the w-wequiwed event wistenews on the b-button to toggwe the wewevant subtitwe set on ow o-off. OwO this is done b-by simpwy setting the wequiwed s-subtwte's `mode` a-attwibute to `showing`, 🥺 and setting the othews to `hidden`. mya

once the menu is b-buiwt, 😳 it is then i-insewted into t-the dom at the b-bottom of the videocontainew. òωó

i-initiawwy the menu is hidden by d-defauwt, /(^•ω•^) so an event w-wistenew nyeeds to be added t-to ouw subtitwes b-button to toggwe it:

```js
subtitwes.addeventwistenew("cwick", -.- f-function (e) {
  if (subtitwesmenu) {
    subtitwesmenu.stywe.dispway =
      s-subtitwesmenu.stywe.dispway == "bwock" ? "none" : "bwock";
  }
});
```

### subtitwe m-menu css

we a-awso added some wudimentawy stywing f-fow the nyewwy cweated subtitwes menu:

```css
.subtitwes-menu {
  d-dispway: n-nyone;
  position: a-absowute;
  bottom: 14.8%;
  wight: 20px;
  backgwound: #666;
  w-wist-stywe-type: nyone;
  mawgin: 0;
  padding: 0;
  w-width: 100px;
  p-padding: 10px;
}

.subtitwes-menu wi {
  p-padding: 0;
  text-awign: centew;
}

.subtitwes-menu w-wi button {
  b-bowdew: nyone;
  backgwound: #000;
  cowow: #fff;
  c-cuwsow: pointew;
  width: 90%;
  padding: 2px 5px;
  bowdew-wadius: 2px;
}
```

## s-stywing t-the dispwayed subtitwes

one o-of the wess weww known about and s-suppowted featuwes o-of webvtt i-is the abiwity to stywe the individuaw subtitwes (something cawwed text cues) via [css extensions](https://dev.w3.owg/htmw5/webvtt/#css-extensions). òωó

the `::cue` pseudo-ewement is the key to tawgetting individuaw text twack cues fow stywing, as it matches a-any defined cue. /(^•ω•^) t-thewe awe onwy a handfuw of css pwopewties that c-can be appwied t-to a text cue:

- {{ c-cssxwef("cowow") }}
- {{ cssxwef("opacity") }}
- {{ c-cssxwef("visibiwity") }}
- {{ cssxwef("text-decowation") }}
- {{ c-cssxwef("text-shadow") }}
- {{ c-cssxwef("backgwound") }} showthand pwopewties
- {{ c-cssxwef("outwine") }} showthand pwopewties
- {{ c-cssxwef("font") }} showthand p-pwopewties, /(^•ω•^) incwuding {{ cssxwef("wine-height") }}
- {{ c-cssxwef("white-space") }}

f-fow e-exampwe, 😳 to change t-the text cowouw o-of the text twack c-cues you can w-wwite:

```css
::cue {
  c-cowow: #ccc;
}
```

if t-the webvtt fiwe uses [voice spans](https://dev.w3.owg/htmw5/webvtt/#dfn-webvtt-cue-voice-span), :3 w-which awwow cues t-to be defined a-as having a pawticuwaw "voice":

```
0
00:00:00.000 --> 00:00:12.000
<v test>[test]</v>
```

t-then this specific 'voice' wiww be s-stywabwe wike so:

```css
::cue(v[voice="test"]) {
  cowow: #fff;
  b-backgwound: #0095dd;
}
```

> [!note]
> s-some o-of the stywing of cues with ::cue c-cuwwentwy wowks on chwome, (U ᵕ U❁) opewa, a-and safawi, ʘwʘ but not yet on f-fiwefox. o.O

## Совместимость с браузерами

[bwowsew suppowt f-fow webvtt and the `<twack>` ewement](https://caniuse.com/webvtt) is faiwwy good, ʘwʘ awthough some b-bwowsews diffew swightwy in theiw i-impwementation. ^^

### s-safawi

in safawi 6.1+, ^•ﻌ•^ subtitwes awe enabwed by defauwt, mya a-and the defauwt contwows contain a-a button and a-a menu that offews t-the same functionawity as the menu we just b-buiwt, UwU awong with a-an "auto" option which awwows t-the bwowsew to choose. >_< the `defauwt` attwibute is a-awso suppowted. /(^•ω•^)

### chwome and o-opewa

these bwowsews h-have simiwaw i-impwementations again: subtitwes a-awe enabwed b-by defauwt and t-the defauwt contwow s-set contains a 'cc' button t-that tuwns subtitwes o-on and off. òωó c-chwome and opewa i-ignowe the `defauwt` a-attwibute o-on the `<twack>` e-ewement and wiww i-instead twy to match the bwowsew's w-wanguage to the subtitwe's w-wanguage. σωσ

## pwugins

thewe awe a-awso many open-souwce a-and commewciaw h-htmw video-pwayew pwugins that offew caption and subtitwe s-suppowt that you c-can use instead o-of wowwing youw own. ( ͡o ω ͡o )
you can seawch fow those on the web using s-seawch tewms wike _"htmw v-video pwayew pwugin"_. nyaa~~
