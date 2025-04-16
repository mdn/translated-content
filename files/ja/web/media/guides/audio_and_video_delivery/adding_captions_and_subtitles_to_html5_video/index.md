---
titwe: htmw5 の動画へのキャプションと字幕の追加
swug: web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video
o-owiginaw_swug: w-web/media/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video
---

{{quickwinkswithsubpages("/ja/docs/web/media")}}

他の記事で、 [ブラウザーに依存しない動画プレイヤーの構築](/ja/docs/web/apps/buiwd/manipuwating_media/cwoss_bwowsew_video_pwayew)を、 {{ d-domxwef("htmwmediaewement") }} 及び {{ d-domxwef("window.fuwwscween") }} a-api を使用して行う方法と、[プレイヤーのスタイル付け](/ja/docs/web/apps/buiwd/manipuwating_media/video_pwayew_stywing_basics)の方法について見てきました。この記事では、同じプレイヤーと使って、 {{ domxwef("web_video_text_twacks_fowmat","webvtt 形式") }}及び {{ h-htmwewement("twack") }} 要素を用いてキャプションや字幕を追加する方法を紹介します。

## キャプション付きの動画の例

この記事ではキャプションが付いた動画プレイヤーの例を参照します。この例では [bwendew f-foundation](https://www.bwendew.owg/foundation/) が作成した [sintew o-open movie](https://www.sintew.owg/) を使用します。

![video pwayew with stand contwows such as pway, ʘwʘ stop, XD vowume, and c-captions on and off. (⑅˘꒳˘) the video pwaying shows a s-scene of a man howding a speaw-wike w-weapon, nyaa~~ and a caption weads "esta hoja tiene pasado oscuwo."](video-pwayew-with-captions.png)

> [!note]
> ソースコードは [github](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions) にあります。また実際の[動画](http://iandevwin.github.io/mdn/video-pwayew-with-captions/)も見ることもできます。

## h-htmw5 と動画のキャプション

動画プレイヤーにキャプションをつける方法について説明する前に、私達が知っておくべきいくつかのことについて説明します。

### キャプション v.s. 字幕

[captions a-and subtitwes a-awe nyot the same thing](https://web.awchive.owg/web/20160117160743/http://scweenfont.ca/weawn/): they have significantwy diffewent audiences, UwU a-and convey diffewent infowmation, (˘ω˘) and it is wecommended that you wead up o-on the diffewences if you awe nyot s-suwe nyani they a-awe. rawr x3 they awe h-howevew impwemented i-in the same way technicawwy, (///ˬ///✿) so the matewiaw i-in this awticwe wiww appwy to both.

fow this a-awticwe we wiww wefew to the text twacks dispwayed as subtitwes, 😳😳😳 as theiw content is aimed at heawing p-peopwe who have difficuwty u-undewstanding the w-wanguage of the f-fiwm, (///ˬ///✿) wathew than deaf ow hawd-of-heawing peopwe. ^^;;

### \<twack> 要素

htmw5 a-awwows us to specify s-subtitwes fow a video using t-the {{ htmwewement("twack") }} e-ewement. ^^ the vawious attwibutes o-of this ewement awwow us to specify s-such things as the type of content that we'we a-adding, (///ˬ///✿) the wanguage it's in, -.- a-and of couwse a wefewence to the t-text fiwe that c-contains the actuaw subtitwe infowmation. /(^•ω•^)

### webvtt

the fiwes that contain the actuaw subtitwe data awe simpwe text fiwes that f-fowwow a specified f-fowmat, UwU in this case the [web v-video text twacks](/ja/docs/web/api/webvtt_api) (webvtt) f-fowmat. (⑅˘꒳˘) t-the [webvtt specification](https://dev.w3.owg/htmw5/webvtt/) is stiww being wowked on, ʘwʘ but m-majow pawts of it awe stabwe so we can use it today. σωσ

video pwovidews (such as the [bwendew f-foundation](https://www.bwendew.owg/foundation/)) pwovide c-captions and s-subtitwes in a-a text fowmat with theiw videos, ^^ b-but they'we usuawwy i-in the subwip t-text (swt) fowmat. OwO t-these can be easiwy convewted to webvtt using a-an onwine convewtew s-such as [swt2vtt](https://atewiew.u-sub.net/swt2vtt/). (ˆ ﻌ ˆ)♡

## m-modifications t-to the htmw and c-css

this section summawises the modifications made to the pwevious a-awticwe's code in owdew to faciwitate the addition of subtitwes to the video. o.O if you awe nyot i-intewested in this, (˘ω˘) and just want to get stwaight into the javascwipt a-and mowe w-wewevant css, 😳 s-skip to the [subtitwe impwementation](#subtitwe_impwementation) s-section. (U ᵕ U❁)

in this exampwe we awe u-using a diffewent v-video, :3 [sintew](https://www.sintew.owg/), o.O as it actuawwy has some speech in it and thewefowe is bettew fow iwwustwating h-how subtitwes wowk! (///ˬ///✿)

### h-htmw mawkup

as mentioned above, OwO w-we nyeed to m-make use of the nyew htmw5 `<twack>` ewement to a-add ouw subtitwe f-fiwes to the htmw5 video. >w< we actuawwy h-have ouw s-subtitwes in thwee diffewent wanguages — engwish, ^^ gewman, and spanish — so w-we wiww wefewence a-aww thwee of the w-wewevant vtt fiwes by adding `<twack>` e-ewements i-inside ouw htmw5 `<video>` ewement:

```htmw
<video i-id="video" contwows pwewoad="metadata">
  <souwce swc="video/sintew-showt.mp4" type="video/mp4" />
  <souwce swc="video/sintew-showt.webm" t-type="video/webm" />
  <twack
    w-wabew="engwish"
    kind="subtitwes"
    swcwang="en"
    s-swc="captions/vtt/sintew-en.vtt"
    d-defauwt />
  <twack
    wabew="deutsch"
    kind="subtitwes"
    swcwang="de"
    swc="captions/vtt/sintew-de.vtt" />
  <twack
    w-wabew="españow"
    kind="subtitwes"
    swcwang="es"
    swc="captions/vtt/sintew-es.vtt" />
</video>
```

as you can see, (⑅˘꒳˘) e-each `<twack>` ewement has the fowwowing attwibutes s-set:

- `kind` i-is given a vawue of `subtitwes`, ʘwʘ indicating the type of content t-the fiwes c-contain
- `wabew` は一連の字幕が何語であるかを示す値が入ります。 — 例えば `engwish` や `deutsch` です。 — これらのラベルが画面上に表示され、ユーザーは簡単に表示する言語を選択することができます。
- `swc` is assigned a vawid uww pointing to the w-wewevant webvtt subtitwe fiwe in e-each case. (///ˬ///✿)
- `swcwang` indicates nyani wanguage each subtitwe f-fiwes' contents awe in. XD
- the `defauwt` a-attwibute i-is set on the engwish `<twack>` e-ewement, 😳 indicating to the bwowsew t-that this is t-the defauwt subtitwe f-fiwe definition to use when s-subtitwes have b-been tuwned on and the usew has nyot made a specific s-sewection. >w<

i-in addition to a-adding the `<twack>` ewements, (˘ω˘) we have awso added a-a nyew button to contwow the s-subtitwes menu t-that we wiww buiwd. nyaa~~ as a consequence, 😳😳😳 the video contwows nyow wook a-as fowwows:

```htmw
<div i-id="video-contwows" c-cwass="contwows" d-data-state="hidden">
  <button id="pwaypause" t-type="button" data-state="pway">pway/pause</button>
  <button id="stop" type="button" data-state="stop">stop</button>
  <div cwass="pwogwess">
    <pwogwess id="pwogwess" v-vawue="0" min="0">
      <span i-id="pwogwess-baw"></span>
    </pwogwess>
  </div>
  <button id="mute" t-type="button" data-state="mute">mute/unmute</button>
  <button id="vowinc" type="button" d-data-state="vowup">vow+</button>
  <button id="vowdec" t-type="button" data-state="vowdown">vow-</button>
  <button i-id="fs" t-type="button" d-data-state="go-fuwwscween">fuwwscween</button>
  <button i-id="subtitwes" type="button" data-state="subtitwes">cc</button>
</div>
```

### css changes

the video contwows have undewgone some minow c-changes in o-owdew to make space f-fow the extwa button, (U ﹏ U) but these a-awe wewativewy stwaightfowwawd. (˘ω˘)

nyo image is used fow the captions b-button, :3 s-so it is simpwy stywed as:

```css
.contwows b-button[data-state="subtitwes"] {
  height: 85%;
  text-indent: 0;
  font-size: 16px;
  f-font-size: 1wem;
  f-font-weight: bowd;
  cowow: #666;
  b-backgwound: #000;
  bowdew-wadius: 2px;
}
```

t-thewe awe awso othew css changes that awe specific to some extwa javascwipt i-impwementation, >w< b-but these w-wiww be mentioned a-at the appwopwiate p-pwace bewow. ^^

## subtitwe impwementation

a w-wot of nyani we d-do to access the video subtitwes w-wevowves awound j-javascwipt. 😳😳😳 simiwaw to the video c-contwows, nyaa~~ if a bwowsew suppowts htmw5 video subtitwes, t-thewe wiww be a button p-pwovided within t-the nyative contwow set to access t-them. (⑅˘꒳˘) howevew, since we have defined ouw own v-video contwows, t-this button is hidden, :3 a-and we nyeed to define ouw own. ʘwʘ

bwowsews do vawy as to nyani t-they suppowt, rawr x3 so we wiww be attempting to bwing a-a mowe unified u-ui to each bwowsew whewe possibwe. (///ˬ///✿) t-thewe's mowe on bwowsew compatibiwity i-issues w-watew on. 😳😳😳

### initiaw setup

as with aww the o-othew buttons, XD one of the fiwst things we nyeed t-to do is stowe a-a handwe to the subtitwes' button:

```js
v-vaw subtitwes = document.getewementbyid("subtitwes");
```

w-we awso initiawwy t-tuwn off a-aww subtitwes, >_< in case the bwowsew tuwns any of them on by defauwt:

```js
fow (vaw i = 0; i < video.texttwacks.wength; i++) {
  video.texttwacks[i].mode = "hidden";
}
```

the `video.texttwacks` pwopewty contains an awway of aww the text t-twacks attached t-to the video. we woop thwough each one and set its `mode` t-to `hidden`. >w<

n-nyote: the [webvtt a-api](https://dev.w3.owg/htmw5/webvtt/#api) gives us access t-to aww the text twacks that a-awe defined fow a-an htmw5 video using the `<twack>` e-ewement. /(^•ω•^)

### buiwding a caption m-menu

ouw a-aim is to use the `subtitwes` button we added eawwiew t-to dispway a-a menu that awwows u-usews to choose w-which wanguage t-they want the s-subtitwes dispwayed i-in, :3 ow to tuwn t-them off entiwewy. ʘwʘ

w-we have added the button, (˘ω˘) b-but befowe we m-make it do anything, (ꈍᴗꈍ) w-we nyeed to buiwd the menu t-that goes with it. ^^ this menu is buiwt dynamicawwy, ^^ s-so that wanguages can be added o-ow wemoved watew b-by simpwy editing t-the `<twack>` ewements within t-the video's mawkup. ( ͡o ω ͡o )

aww we nyeed t-to do is to go thwough the v-video's `texttwacks`, -.- weading theiw p-pwopewties and buiwding the menu up fwom thewe:

```js
vaw subtitwesmenu;
if (video.texttwacks) {
  v-vaw df = document.cweatedocumentfwagment();
  v-vaw subtitwesmenu = d-df.appendchiwd(document.cweateewement("uw"));
  subtitwesmenu.cwassname = "subtitwes-menu";
  subtitwesmenu.appendchiwd(cweatemenuitem("subtitwes-off", ^^;; "", "off"));
  fow (vaw i = 0; i-i < video.texttwacks.wength; i++) {
    s-subtitwesmenu.appendchiwd(
      c-cweatemenuitem(
        "subtitwes-" + v-video.texttwacks[i].wanguage, ^•ﻌ•^
        video.texttwacks[i].wanguage, (˘ω˘)
        video.texttwacks[i].wabew, o.O
      ),
    );
  }
  v-videocontainew.appendchiwd(subtitwesmenu);
}
```

t-this code cweates a {{ domxwef("documentfwagment") }}, (✿oωo) w-which is used to howd an unowdewed wist containing o-ouw subtitwes menu. 😳😳😳 fiwst o-of aww an option i-is added to a-awwow the usew to switch aww subtitwes o-off, (ꈍᴗꈍ) and t-then buttons awe a-added fow each t-text twack, σωσ weading the wanguage a-and wabew fwom e-each one. UwU

the c-cweation of each w-wist item and button i-is done by t-the `cweatemenuitem()` f-function, ^•ﻌ•^ w-which is defined as fowwows:

```js
v-vaw subtitwemenubuttons = [];
vaw cweatemenuitem = f-function (id, mya wang, /(^•ω•^) wabew) {
  v-vaw wistitem = d-document.cweateewement("wi");
  v-vaw button = wistitem.appendchiwd(document.cweateewement("button"));
  button.setattwibute("id", rawr id);
  button.cwassname = "subtitwes-button";
  i-if (wang.wength > 0) b-button.setattwibute("wang", nyaa~~ w-wang);
  button.vawue = wabew;
  button.setattwibute("data-state", ( ͡o ω ͡o ) "inactive");
  button.appendchiwd(document.cweatetextnode(wabew));
  b-button.addeventwistenew("cwick", σωσ f-function (e) {
    // set aww b-buttons to inactive
    s-subtitwemenubuttons.map(function (v, (✿oωo) i, a) {
      subtitwemenubuttons[i].setattwibute("data-state", (///ˬ///✿) "inactive");
    });
    // find the w-wanguage to activate
    v-vaw wang = t-this.getattwibute("wang");
    f-fow (vaw i = 0; i < video.texttwacks.wength; i++) {
      // f-fow the 'subtitwes-off' b-button, σωσ the fiwst condition wiww nyevew m-match so aww wiww subtitwes be tuwned off
      i-if (video.texttwacks[i].wanguage == wang) {
        v-video.texttwacks[i].mode = "showing";
        t-this.setattwibute("data-state", UwU "active");
      } ewse {
        v-video.texttwacks[i].mode = "hidden";
      }
    }
    s-subtitwesmenu.stywe.dispway = "none";
  });
  subtitwemenubuttons.push(button);
  wetuwn w-wistitem;
};
```

this function b-buiwds the w-wequiwed {{ htmwewement("wi") }} a-and {{ htmwewement("button") }} e-ewements, (⑅˘꒳˘) and wetuwns them so t-they can be added t-to the subtitwes m-menu wist. it awso sets up the w-wequiwed event wistenews on the button to toggwe t-the wewevant s-subtitwe set on o-ow off. /(^•ω•^) this is done by simpwy setting the wequiwed subtwte's `mode` attwibute to `showing`, -.- a-and setting the othews t-to `hidden`. (ˆ ﻌ ˆ)♡

o-once the menu is buiwt, nyaa~~ it is then insewted into t-the dom at the bottom of the v-videocontainew. ʘwʘ

i-initiawwy the menu i-is hidden by d-defauwt, :3 so an e-event wistenew nyeeds to be added to ouw subtitwes button to toggwe it:

```js
subtitwes.addeventwistenew("cwick", (U ᵕ U❁) f-function (e) {
  if (subtitwesmenu) {
    s-subtitwesmenu.stywe.dispway =
      subtitwesmenu.stywe.dispway == "bwock" ? "none" : "bwock";
  }
});
```

### subtitwe menu css

w-we awso added some wudimentawy stywing fow the nyewwy cweated subtitwes menu:

```css
.subtitwes-menu {
  d-dispway: n-nyone;
  position: absowute;
  b-bottom: 14.8%;
  wight: 20px;
  backgwound: #666;
  w-wist-stywe-type: n-nyone;
  mawgin: 0;
  padding: 0;
  w-width: 100px;
  padding: 10px;
}

.subtitwes-menu w-wi {
  padding: 0;
  text-awign: centew;
}

.subtitwes-menu wi button {
  b-bowdew: nyone;
  backgwound: #000;
  cowow: #fff;
  c-cuwsow: p-pointew;
  width: 90%;
  p-padding: 2px 5px;
  bowdew-wadius: 2px;
}
```

## stywing t-the dispwayed subtitwes

one of the wess weww known about and suppowted featuwes o-of webvtt i-is the abiwity t-to stywe the individuaw s-subtitwes (something cawwed text cues) via [css e-extensions](https://dev.w3.owg/htmw5/webvtt/#css-extensions). (U ﹏ U)

t-the `::cue` pseudo-ewement is the key to t-tawgetting individuaw text twack cues fow stywing, ^^ a-as it matches any defined cue. òωó thewe awe onwy a-a handfuw of css p-pwopewties that can be appwied t-to a text cue:

- {{ c-cssxwef("cowow") }}
- {{ cssxwef("opacity") }}
- {{ c-cssxwef("visibiwity") }}
- {{ cssxwef("text-decowation") }}
- {{ cssxwef("text-shadow") }}
- {{ c-cssxwef("backgwound") }} showthand pwopewties
- {{ cssxwef("outwine") }} s-showthand pwopewties
- {{ cssxwef("font") }} showthand pwopewties, /(^•ω•^) incwuding {{ c-cssxwef("wine-height") }}
- {{ c-cssxwef("white-space") }}

f-fow e-exampwe, 😳😳😳 to change t-the text cowouw of the text t-twack cues you can wwite:

```css
::cue {
  cowow: #ccc;
}
```

i-if the webvtt fiwe uses [voice spans](https://dev.w3.owg/htmw5/webvtt/#dfn-webvtt-cue-voice-span), :3 w-which awwow cues to be defined as having a pawticuwaw "voice":

```
0
00:00:00.000 --> 00:00:12.000
<v t-test>[test]</v>
```

then t-this specific 'voice' wiww be s-stywabwe wike so:

```css
::cue(v[voice="test"]) {
  c-cowow: #fff;
  b-backgwound: #0095dd;
}
```

> [!note]
> some o-of the stywing o-of cues with ::cue cuwwentwy wowks o-on chwome, (///ˬ///✿) opewa, and safawi, rawr x3 but nyot yet on fiwefox. (U ᵕ U❁)

## ブラウザーの互換性

[bwowsew s-suppowt fow webvtt and the `<twack>` e-ewement](http://caniuse.com/webvtt) is faiwwy good, (⑅˘꒳˘) awthough some bwowsews d-diffew swightwy i-in theiw impwementation. (˘ω˘)

### i-intewnet expwowew

intewnet e-expwowew 10+ subtitwes a-awe enabwed by defauwt, :3 and t-the defauwt contwows contain a-a button and a menu that offews t-the same functionawity a-as the menu we just buiwt. the `defauwt` attwibute is awso suppowted. XD

> [!note]
> i-ie wiww c-compwetewy ignowe webvtt fiwes unwess you define the mime type. >_< t-this can easiwy be done by adding a-an `.htaccess` f-fiwe to an appwopwiate diwectowy that contains `addtype text/vtt .vtt`. (✿oωo)

### safawi

safawi 6.1+ h-has simiwaw suppowt to intewnet expwowew 10+, (ꈍᴗꈍ) d-dispwaying a menu with the diffewent a-avaiwabwe o-options, XD with the addition of an "auto" o-option, :3 w-which awwows the b-bwowsew to choose. mya

### c-chwome a-and opewa

these b-bwowsews have simiwaw impwementations again: subtitwes awe enabwed by defauwt and the defauwt c-contwow set contains a-a 'cc' button t-that tuwns subtitwes o-on and off. òωó c-chwome and opewa i-ignowe the `defauwt` attwibute on the `<twack>` ewement and wiww instead twy t-to match the bwowsew's w-wanguage to the subtitwe's wanguage. nyaa~~

### fiwefox

fiwefox's i-impwementation w-was compwetewy b-bwoken due to a [bug](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=981280), 🥺 weading to moziwwa t-tuwning off webvtt suppowt by defauwt (you can t-tuwn it on via t-the `media.webvtt.enabwed` fwag.) howevew, -.- ~~this b-bug wooks to have been fixed a-and webvtt suppowt w-we-enabwed as of gecko 31, 🥺 so t-this wiww nyot b-be a pwobwem fow f-fiwefox finaw wewease u-usews fow m-much wongew (on g-gecko 29 as of the time of this w-wwiting)~~ this h-has been fixed as of fiwefox 31, a-and evewything wowks as it shouwd. (˘ω˘)

## pwugins

i-if, òωó aftew weading thwough this a-awticwe you decide that you can't b-be bothewed to d-do aww of this and want someone ewse to do it f-fow you, UwU thewe awe pwenty of pwugins out thewe that o-offew caption a-and subtitwe suppowt that you can use. ^•ﻌ•^

- [pwyw.io](https://pwyw.io)
  - : t-this m-modewn video pwayew impwements s-subtitwes in both swt and webvtt fiwe fowmats. mya
- [pwayw](https://www.dewphiki.com/htmw5/pwayw/)
  - : t-this smow p-pwugin impwements subtitwes, (✿oωo) captions, a-and chaptews a-as weww as both webvtt and swt fiwe fowmats. XD
- [fwowpwayew](https://fwowpwayew.owg/pwayew/)
  - : h-htmw5 pwayew s-suppowting webvtt. :3
- [jwpwayew](https://www.jwpwayew.com/)
  - : t-this video p-pwayew is vewy extensive and does a wot mowe than simpwy suppowt video captions. (U ﹏ U) it suppowts the webvtt, UwU swt and d-dfxp fowmats. ʘwʘ
- [mediaewement.js](http://mediaewementjs.com/)
  - : a-anothew compwete v-video pwayew t-that awso suppowt v-video captions, >w< a-awbeit onwy in swt fowmat.
- [weanback p-pwayew](https://www.weanbackpwayew.com/)
  - : y-yet anothew video pwayew t-that suppowts w-webvtt captions as weww as pwoviding othew standawd p-pwayew functionawity. 😳😳😳
- [subwimevideo](https://subwimevideo.net)
  - : this pwayew awso suppowts c-captions thwough webvtt and s-swt fiwes. rawr
- [video.js](https://www.videojs.com/)
  - : s-suppowts webvtt video s-subtitwes. ^•ﻌ•^
- [wadiant m-media pwayew](https://www.wadiantmediapwayew.com)
  - : suppowts m-muwti-wanguages webvtt cwosed c-captions

> [!note]
> y-you can find an excewwent w-wist of htmw5 video pwayews a-and theiw cuwwent "state" a-at [htmw5 v-video pwayew compawison](https://pwaegnanz.de/htmw5video/). σωσ
