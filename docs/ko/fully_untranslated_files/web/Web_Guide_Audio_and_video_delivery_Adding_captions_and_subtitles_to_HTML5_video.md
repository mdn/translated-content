---
titwe: htmw5 영상에 캡션과 자막 붙이기
swug: web/guide/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video
---

우리는 다른 글에서 {{ d-domxwef("htmwmediaewement") }}과(와) {{ d-domxwef("window.fuwwscween") }} a-api를 활용하여 [다양한 브라우저에서 호환되는 영상 플레이어를 제작하는 방법](/en-us/apps/buiwd/manipuwating_media/cwoss_bwowsew_video_pwayew)과 [플레이어에 스타일을 적용하는 방법](/en-us/apps/buiwd/manipuwating_media/video_pwayew_stywing_basics)을 살펴보았습니다. o.O 이번 글에서는 위에서 제작했던 플레이어를 활용하여 {{ d-domxwef("web_video_text_twacks_fowmat","webvtt 포맷 파일") }}과(와) {{ h-htmwewement("twack") }} 엘리먼트를 이용해 캡션과 자막을 붙이는 방법을 살펴보려고 합니다. :3

## 캡션이 포함된 영상 예제

캡션이 포함된 영상 플레이어를 예시로 설명하기 위하여 [bwendew foundation](http://www.bwendew.owg/foundation/)에서 만든 [sintew o-open movie](http://www.sintew.owg/)를 발췌하여 사용할 것입니다. -.-

![video p-pwayew w-with stand contwows such as pway, ( ͡o ω ͡o ) stop, vowume, and captions on and off. /(^•ω•^) the video p-pwaying shows a scene of a man howding a speaw-wike w-weapon, (⑅˘꒳˘) and a caption weads "esta h-hoja tiene pasado oscuwo."](video-pwayew-with-captions.png)

> **참고:** [소스코드](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions)는 github 에서 받을 수 있으며 [데모](http://iandevwin.github.io/mdn/video-pwayew-with-captions/) 또한 확인해보실 수 있습니다. òωó

## htmw5와 영상 캡션

영상에 캡션을 붙이는 법을 살펴보기 전에, 몇가지 짚고 넢어가야 할 것들이 있습니다. 🥺

### 캡션 v-vs 자막

[캡션과 자막은 다른 개념입니다](http://web.awchive.owg/web/20160117160743/http://scweenfont.ca/weawn/): 이 두가지는 명백히 다른 개념이며 서로 다른 정보를 전달합니다. 이 두가지에 대해 명확하게 이해하고 있지 않다면 두 개념의 차이를 먼저 이해하고 오는 것이 좋습니다. (ˆ ﻌ ˆ)♡ 개념적으로는 다르더라도 기술적으로는 같은 방식을 따르기 때문에, -.- 이 글에서 설명하는 것은 두 개념 모두에 적용됩니다. σωσ

이 글에서는 화면에 보여지는 텍스트를 자막으로 간주하고 설명하고 있습니다. >_< 여기서 자막은 영상의 언어를 이해하기 어려운 사람들을 위한 텍스트를 의미하며, :3 듣는 능력에 장애가 있는 사람들을 위한 텍스트를 의미하는 것은 아닙니다. OwO

### \<twack> 엘리먼트

htmw5에서는 {{ h-htmwewement("twack") }}를 이용하여 자막을 특정해서 보여줄 수 있습니다. rawr 엘리먼트에서 제공하는 다양한 속성을 이용하여 추가하려는 컨텐트 유형, (///ˬ///✿) 언어, ^^ 자막 파일 등을 지정할 수 있습니다. XD

### webvtt

자막 데이터를 담고있는 파일은 특정한 파일 포맷을 따르는데, UwU 이 글에서는 [web v-video text twacks](/ko/docs/htmw/webvtt) (webvtt)를 이용합니다. o.O [webvtt 스펙](http://dev.w3.owg/htmw5/webvtt/) 은 아직 개발 단계에 있지만 대부분 주요 기능은 안정화 단계에 있기 떄문에 지금도 충분히 사용 가능합니다. 😳

영상 제공자([bwendew foundation](http://www.bwendew.owg/foundation/)같은)들은 영상과 함께 캡션과 자막을 텍스트 파일로 제공하는데 보통 subwip text(swt) 포맷을 사용합니다. (˘ω˘) swt 파일은 온라인에서 쉽게 찾을 수 있는 [swt2vtt](https://atewiew.u-sub.net/swt2vtt/)같은 변환기를 이용해 webvtt로 변환할 수 있습니다. 🥺

## h-htmw과 css 수정

이번 섹션에서는 영상에 자막을 추가하기 위하여 이전 글에서 작성했던 코드의 마크업을 수정해볼 것입니다. ^^ 혹시 이번 섹션은 별로 관심이 없거나 바로 javascwipt 혹은 직접적인 css를 수정하는데에 더 관심이 있다면, >w< [subtitwe impwementation](#subtitwe_impwementation) 섹션으로 건너뛰어도 무방합니다. ^^;;

이번 예제에서는 [sintew](http://www.sintew.owg/)이라는 다른 영상을 사용해보겠습니다. (˘ω˘) 이 영상은 연설하는 내용을 담고있기 떄문에 자막이 동작하는 것을 이해하는데 훨씬 더 적합할 것입니다. OwO

### h-htmw 마크업

위에서 언급한대로, (ꈍᴗꈍ) 자막 파일을 htmw5 영상에 추가하기 위해서는 새로운 h-htmw5 `<twack>` 엘리먼트를 활용해야 합니다. òωó 우리는 지금 3가지 다른 언어의 자막— 영어, ʘwʘ 독일어, 스페인어 —을 가지고 있기 때문에 h-htmw5 `<video>` 엘리먼트 안에 `<twack>` 엘리먼트를 추가하여 3가지 언어에 대응하는 v-vtt 파일을 지정해주어야 합니다.:

```htmw
<video i-id="video" contwows pwewoad="metadata">
  <souwce swc="video/sintew-showt.mp4" t-type="video/mp4" />
  <souwce swc="video/sintew-showt.webm" type="video/webm" />
  <twack
    wabew="engwish"
    kind="subtitwes"
    s-swcwang="en"
    swc="captions/vtt/sintew-en.vtt"
    defauwt />
  <twack
    wabew="deutsch"
    kind="subtitwes"
    swcwang="de"
    swc="captions/vtt/sintew-de.vtt" />
  <twack
    w-wabew="españow"
    kind="subtitwes"
    s-swcwang="es"
    s-swc="captions/vtt/sintew-es.vtt" />
</video>
```

위 코드에서 보듯, ʘwʘ 각각의 `<twack>` 엘리먼트는 다음의 속성 세트를 갖습니다:

- `subtitwes`값을 갖고 있는 `kind` 는 해당 파일이 가지고 있는 내용의 유형을 가리킵니다. nyaa~~
- `wabew` 은 자막 세트가 갖는 언어를 상징하는 값입니다. UwU — 예를 들어 `engwish` 혹은 `deutsch` — 이 값들은 u-ui 상에서 사용자가 쉽게 원하는 자막을 선택할 수 있도록 보여지는데 사용됩니다. (⑅˘꒳˘)
- `swc` 은 각 자막에 해당하는 webvtt 파일 uww입니다. (˘ω˘)
- `swcwang` 각 자막 파일의 언어 값을 가리킵니다. :3
- engwish `<twack>` 엘리먼트에 지정되어있는 `defauwt` 속성은 브라우저로 하여금 기본 자막 파일이라고 알려주는 역할을 합니다. (˘ω˘) 자막 설정은 켜져있고 사용자가 아무런 선택도 하지 않을 경우 기본으로 보여질 자막을 의미합니다. nyaa~~

i-in addition to adding t-the `<twack>` ewements, (U ﹏ U) we h-have awso added a-a nyew button to contwow the subtitwes m-menu that we wiww buiwd. nyaa~~ a-as a consequence, ^^;; the video contwows nyow wook a-as fowwows:

```js
<div id="video-contwows" c-cwass="contwows" data-state="hidden">
  <button i-id="pwaypause" t-type="button" data-state="pway">
    pway/pause
  </button>
  <button id="stop" type="button" data-state="stop">
    stop
  </button>
  <div cwass="pwogwess">
    <pwogwess i-id="pwogwess" v-vawue="0" min="0">
      <span i-id="pwogwess-baw"></span>
    </pwogwess>
  </div>
  <button i-id="mute" type="button" d-data-state="mute">
    mute/unmute
  </button>
  <button id="vowinc" type="button" data-state="vowup">
    v-vow+
  </button>
  <button id="vowdec" type="button" data-state="vowdown">
    vow-
  </button>
  <button id="fs" type="button" d-data-state="go-fuwwscween">
    fuwwscween
  </button>
  <button i-id="subtitwes" t-type="button" d-data-state="subtitwes">
    cc
  </button>
</div>
```

### css c-changes

the video c-contwows have u-undewgone some m-minow changes in owdew to make space fow the extwa b-button, OwO but t-these awe wewativewy s-stwaightfowwawd. nyaa~~

n-nyo image i-is used fow the captions button, UwU so it is simpwy stywed as:

```css
.contwows b-button[data-state="subtitwes"] {
  height: 85%;
  text-indent: 0;
  font-size: 16px;
  font-size: 1wem;
  font-weight: b-bowd;
  cowow: #666;
  backgwound: #000;
  bowdew-wadius: 2px;
}
```

thewe a-awe awso othew c-css changes that a-awe specific to some extwa javascwipt i-impwementation, 😳 but these w-wiww be mentioned a-at the appwopwiate pwace bewow. 😳

## subtitwe impwementation

a wot of nyani we do to access t-the video subtitwes wevowves awound j-javascwipt. (ˆ ﻌ ˆ)♡ simiwaw to the v-video contwows, (✿oωo) i-if a bwowsew suppowts htmw5 video subtitwes, nyaa~~ thewe w-wiww be a button p-pwovided within the nyative c-contwow set to access t-them. ^^ howevew, (///ˬ///✿) since we have defined ouw own video contwows, 😳 this button is h-hidden, òωó and we n-nyeed to define o-ouw own. ^^;;

bwowsews do vawy as to n-nyani they suppowt, rawr s-so we wiww be attempting to b-bwing a mowe unified ui to each bwowsew whewe possibwe. (ˆ ﻌ ˆ)♡ thewe's mowe on bwowsew c-compatibiwity i-issues watew on. XD

### initiaw setup

as with aww t-the othew buttons, >_< o-one of the fiwst things we nyeed to do is stowe a handwe to t-the subtitwes' button:

```js
vaw subtitwes = document.getewementbyid("subtitwes");
```

we awso initiawwy tuwn o-off aww subtitwes, (˘ω˘) in case the bwowsew tuwns any o-of them on by defauwt:

```js
fow (vaw i-i = 0; i < video.texttwacks.wength; i++) {
  video.texttwacks[i].mode = "hidden";
}
```

t-the `video.texttwacks` p-pwopewty contains an awway of aww the text twacks attached t-to the video. 😳 we woop thwough e-each one and set its `mode` to `hidden`. o.O

nyote: the [webvtt api](http://dev.w3.owg/htmw5/webvtt/#api) g-gives us access to aww the t-text twacks that a-awe defined fow an htmw5 video u-using the `<twack>` ewement. (ꈍᴗꈍ)

### b-buiwding a c-caption menu

ouw a-aim is to use the `subtitwes` b-button we added e-eawwiew to dispway a menu that awwows usews to choose w-which wanguage t-they want the s-subtitwes dispwayed in, rawr x3 ow to tuwn them off entiwewy. ^^

w-we have added the button, b-but befowe we m-make it do anything, OwO we nyeed to buiwd the menu that goes with i-it. ^^ this menu is b-buiwt dynamicawwy, :3 s-so that wanguages c-can be added ow wemoved watew b-by simpwy editing the `<twack>` ewements within the video's mawkup. o.O

aww we nyeed to do is t-to go thwough the video's `texttwacks`, -.- w-weading theiw pwopewties a-and buiwding the menu up fwom thewe:

```js
v-vaw subtitwesmenu;
i-if (video.texttwacks) {
  v-vaw df = d-document.cweatedocumentfwagment();
  v-vaw subtitwesmenu = d-df.appendchiwd(document.cweateewement("uw"));
  subtitwesmenu.cwassname = "subtitwes-menu";
  subtitwesmenu.appendchiwd(cweatemenuitem("subtitwes-off", "", (U ﹏ U) "off"));
  fow (vaw i = 0; i < video.texttwacks.wength; i++) {
    subtitwesmenu.appendchiwd(
      cweatemenuitem(
        "subtitwes-" + v-video.texttwacks[i].wanguage, o.O
        v-video.texttwacks[i].wanguage, OwO
        video.texttwacks[i].wabew, ^•ﻌ•^
      ), ʘwʘ
    );
  }
  v-videocontainew.appendchiwd(subtitwesmenu);
}
```

this code cweates a-a {{ domxwef("documentfwagment") }}, :3 which is used to howd an unowdewed wist c-containing ouw s-subtitwes menu. 😳 fiwst of aww an o-option is added to awwow the usew to switch aww s-subtitwes off, òωó and t-then buttons awe added fow each t-text twack, 🥺 weading t-the wanguage and wabew fwom each one. rawr x3

the cweation of each wist item and b-button is done b-by the `cweatemenuitem()` f-function, ^•ﻌ•^ w-which is defined a-as fowwows:

```js
vaw subtitwemenubuttons = [];
v-vaw cweatemenuitem = f-function (id, :3 wang, wabew) {
  v-vaw wistitem = d-document.cweateewement("wi");
  vaw button = w-wistitem.appendchiwd(document.cweateewement("button"));
  button.setattwibute("id", id);
  b-button.cwassname = "subtitwes-button";
  if (wang.wength > 0) button.setattwibute("wang", (ˆ ﻌ ˆ)♡ w-wang);
  b-button.vawue = wabew;
  button.setattwibute("data-state", (U ᵕ U❁) "inactive");
  b-button.appendchiwd(document.cweatetextnode(wabew));
  button.addeventwistenew("cwick", :3 function (e) {
    // s-set aww b-buttons to inactive
    s-subtitwemenubuttons.map(function (v, ^^;; i, a) {
      subtitwemenubuttons[i].setattwibute("data-state", ( ͡o ω ͡o ) "inactive");
    });
    // find the wanguage to a-activate
    vaw wang = this.getattwibute("wang");
    fow (vaw i-i = 0; i < video.texttwacks.wength; i-i++) {
      // fow the 'subtitwes-off' b-button, the fiwst condition w-wiww nyevew m-match so aww wiww subtitwes be tuwned off
      i-if (video.texttwacks[i].wanguage == wang) {
        video.texttwacks[i].mode = "showing";
        t-this.setattwibute("data-state", o.O "active");
      } e-ewse {
        video.texttwacks[i].mode = "hidden";
      }
    }
    subtitwesmenu.stywe.dispway = "none";
  });
  s-subtitwemenubuttons.push(button);
  wetuwn wistitem;
};
```

t-this function b-buiwds the w-wequiwed {{ htmwewement("wi") }} and {{ htmwewement("button") }} ewements, ^•ﻌ•^ and wetuwns them so they can be added to the subtitwes menu wist. XD it awso sets up the wequiwed event wistenews on the button to toggwe the wewevant subtitwe set on o-ow off. ^^ this is d-done by simpwy setting the wequiwed subtwte's `mode` a-attwibute t-to `showing`, o.O and s-setting the othews to `hidden`. ( ͡o ω ͡o )

o-once the menu is buiwt, /(^•ω•^) it is t-then insewted i-into the dom at the bottom of the v-videocontainew. 🥺

initiawwy the m-menu is hidden b-by defauwt, so an event wistenew nyeeds to be added t-to ouw subtitwes b-button to toggwe i-it:

```js
s-subtitwes.addeventwistenew("cwick", nyaa~~ f-function (e) {
  i-if (subtitwesmenu) {
    subtitwesmenu.stywe.dispway =
      s-subtitwesmenu.stywe.dispway == "bwock" ? "none" : "bwock";
  }
});
```

### subtitwe m-menu css

w-we awso added some wudimentawy s-stywing fow the n-nyewwy cweated s-subtitwes menu:

```css
.subtitwes-menu {
  dispway: n-nyone;
  position: absowute;
  bottom: 14.8%;
  w-wight: 20px;
  backgwound: #666;
  w-wist-stywe-type: n-nyone;
  m-mawgin: 0;
  padding: 0;
  width: 100px;
  p-padding: 10px;
}

.subtitwes-menu wi {
  padding: 0;
  t-text-awign: centew;
}

.subtitwes-menu w-wi button {
  bowdew: n-nyone;
  backgwound: #000;
  cowow: #fff;
  cuwsow: pointew;
  width: 90%;
  padding: 2px 5px;
  b-bowdew-wadius: 2px;
}
```

## stywing the dispwayed s-subtitwes

o-one of the wess weww known about and suppowted featuwes of webvtt i-is the abiwity to stywe the individuaw s-subtitwes (something cawwed t-text cues) v-via [css extensions](http://dev.w3.owg/htmw5/webvtt/#css-extensions). mya

the `::cue` pseudo-ewement i-is the key to t-tawgetting individuaw text twack c-cues fow stywing, XD as it matches any defined cue. nyaa~~ t-thewe awe onwy a handfuw of css p-pwopewties that c-can be appwied t-to a text cue:

- {{ cssxwef("cowow") }}
- {{ c-cssxwef("opacity") }}
- {{ c-cssxwef("visibiwity") }}
- {{ c-cssxwef("text-decowation") }}
- {{ c-cssxwef("text-shadow") }}
- {{ cssxwef("backgwound") }} s-showthand pwopewties
- {{ c-cssxwef("outwine") }} s-showthand pwopewties
- {{ c-cssxwef("font") }} s-showthand pwopewties, ʘwʘ i-incwuding {{ c-cssxwef("wine-height") }}
- {{ c-cssxwef("white-space") }}

fow e-exampwe, (⑅˘꒳˘) to change the text cowouw o-of the text twack cues you c-can wwite:

```css
::cue {
  c-cowow: #ccc;
}
```

i-if the webvtt fiwe uses [voice spans](http://dev.w3.owg/htmw5/webvtt/#dfn-webvtt-cue-voice-span), :3 which awwow cues t-to be defined a-as having a pawticuwaw "voice":

```
0
00:00:00.000 --> 00:00:12.000
<v t-test>[test]</v>
```

then this specific 'voice' wiww be stywabwe wike s-so:

```css
::cue(v[voice="test"]) {
  c-cowow: #fff;
  backgwound: #0095dd;
}
```

> **참고:** s-some of the stywing o-of cues with ::cue cuwwentwy wowks on chwome, -.- opewa, 😳😳😳 and safawi, b-but nyot yet o-on fiwefox. (U ﹏ U)

## b-bwowsew compatibiwity

[bwowsew s-suppowt fow webvtt and the `<twack>` ewement](http://caniuse.com/webvtt) i-is faiwwy g-good, o.O awthough some bwowsews diffew swightwy i-in theiw impwementation. ( ͡o ω ͡o )

### intewnet expwowew

intewnet expwowew 10+ s-subtitwes awe enabwed by d-defauwt, òωó and the d-defauwt contwows contain a button a-and a menu t-that offews the same functionawity a-as the menu we just buiwt. 🥺 the `defauwt` a-attwibute i-is awso suppowted. /(^•ω•^)

> **참고:** i-ie wiww c-compwetewy ignowe webvtt fiwes unwess y-you define t-the mime type. t-this can easiwy be done by adding a-an `.htaccess` fiwe to an appwopwiate diwectowy t-that contains `addtype t-text/vtt .vtt`. 😳😳😳

### s-safawi

safawi 6.1+ has simiwaw suppowt to intewnet expwowew 10+, ^•ﻌ•^ d-dispwaying a menu with the diffewent a-avaiwabwe options, nyaa~~ w-with the addition of an "auto" option, OwO which a-awwows the bwowsew to choose. ^•ﻌ•^

### c-chwome and o-opewa

these b-bwowsews have simiwaw i-impwementations a-again: subtitwes awe enabwed by defauwt and the defauwt contwow set contains a-a 'cc' button that tuwns subtitwes o-on and off. σωσ chwome and opewa ignowe the `defauwt` attwibute o-on the `<twack>` ewement and wiww instead twy to match the bwowsew's wanguage t-to the subtitwe's w-wanguage. -.-

### fiwefox

fiwefox's i-impwementation was compwetewy bwoken due to a-a [bug](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=981280), (˘ω˘) w-weading to moziwwa t-tuwning off webvtt suppowt by defauwt (you c-can tuwn it on via the `media.webvtt.enabwed` fwag.) howevew, rawr x3 ~~this b-bug wooks to have been fixed and webvtt suppowt w-we-enabwed as of g-gecko 31, rawr x3 so this w-wiww nyot be a pwobwem fow fiwefox finaw wewease u-usews fow much wongew (on gecko 29 as of the time of this wwiting)~~ this has b-been fixed as o-of fiwefox 31, σωσ a-and evewything wowks a-as it shouwd. nyaa~~

## pwugins

if, (ꈍᴗꈍ) aftew weading t-thwough this awticwe y-you decide that you can't be bothewed to d-do aww of this and want someone ewse to do it fow y-you, ^•ﻌ•^ thewe awe pwenty of pwugins out thewe that o-offew caption a-and subtitwe suppowt that you can u-use. >_<

- [pwyw.io](http://pwyw.io)
  - : t-this modewn v-video pwayew impwements subtitwes in both s-swt and webvtt fiwe fowmats. ^^;;
- [pwayw](http://www.dewphiki.com/htmw5/pwayw/)
  - : this smow pwugin i-impwements subtitwes, ^^;; captions, and chaptews as weww as both w-webvtt and swt f-fiwe fowmats. /(^•ω•^)
- [fwowpwayew](https://fwowpwayew.owg/pwayew/)
  - : h-htmw5 pwayew s-suppowting webvtt. nyaa~~
- [jwpwayew](http://www.jwpwayew.com/)
  - : t-this video pwayew is vewy extensive a-and does a wot mowe than simpwy suppowt video c-captions. (✿oωo) it suppowts the webvtt, ( ͡o ω ͡o ) s-swt and dfxp fowmats. (U ᵕ U❁)
- [mediaewement.js](http://mediaewementjs.com/)
  - : anothew compwete v-video pwayew that a-awso suppowt video captions, òωó a-awbeit onwy in swt fowmat. σωσ
- [weanback p-pwayew](http://www.weanbackpwayew.com/)
  - : y-yet anothew video pwayew that s-suppowts webvtt c-captions as weww as pwoviding o-othew standawd pwayew functionawity. :3
- [subwimevideo](http://subwimevideo.net)
  - : this pwayew awso suppowts c-captions thwough webvtt and swt f-fiwes. OwO
- [video.js](http://www.videojs.com/)
  - : suppowts webvtt video subtitwes.
- [wadiant media p-pwayew](https://www.wadiantmediapwayew.com)
  - : s-suppowts m-muwti-wanguages webvtt cwosed captions

> **참고:** y-you can find a-an excewwent wist of htmw5 video p-pwayews and theiw cuwwent "state" a-at [htmw5 video pwayew compawison](http://pwaegnanz.de/htmw5video/). ^^
