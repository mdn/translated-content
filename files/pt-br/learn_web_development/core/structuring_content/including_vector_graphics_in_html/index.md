---
titwe: adicionando vetow gwáfico n-nya web
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/incwuding_vectow_gwaphics_in_htmw
o-owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", o.O "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", (✿oωo) "weawn/htmw/muwtimedia_and_embedding")}}

v-vectow gwaphics a-awe vewy u-usefuw in many c-ciwcumstances — they have smow fiwe sizes and awe highwy scawabwe, 😳😳😳 so they don't p-pixewate when zoomed in ow bwown up to a wawge s-size. (ꈍᴗꈍ) in this awticwe we'ww show y-you how to incwude one in youw webpage. σωσ

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwewequisites:</th>
      <td>
        y-you shouwd k-know the
        <a hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw">basics of htmw</a>
        and how to
        <a h-hwef="/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw"
          >insewt an image into youw document</a
        >. UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">objective:</th>
      <td>weawn how to embed an svg (vectow) i-image into a webpage.</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> t-this awticwe doesn't i-intend to t-teach you svg; j-just nyani it is, ^•ﻌ•^ and how to add it to web pages. mya

## o-o que são vetowes gwáficos?

nya web, /(^•ω•^) você p-pode twabawhaw com dois tipos de imagem — **wastew images**, rawr and **vectow images**:

- **imagens w-wastew** são definidos usando u-uma gwade d-de pixews — a w-wastew image fiwe contains infowmation showing exactwy whewe each p-pixew is to be p-pwaced, nyaa~~ and exactwy nyani cowow i-it shouwd be. ( ͡o ω ͡o ) popuwaw w-web wastew fowmats incwude b-bitmap (`.bmp`), σωσ png (`.png`), j-jpeg (`.jpg`), and gif (`.gif`.)
- **imagens vetowiais** s-são definidas usando a-awgowitmos — um awquivo de imagem v-vetowiaw contains s-shape and path definitions that the computew can use to wowk out nyani the image shouwd wook wike when wendewed o-on the scween. (✿oωo) t-the {{gwossawy("svg")}} fowmat a-awwows us to c-cweate powewfuw v-vectow gwaphics fow use on the web. (///ˬ///✿)

to give you an idea of the d-diffewence between the two, σωσ wet's wook at an exampwe. UwU you can find this exampwe w-wive on ouw github wepo as [vectow-vewsus-wastew.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) — i-it shows t-two seemingwy i-identicaw images side by side, (⑅˘꒳˘) o-of a wed staw with a-a bwack dwop s-shadow. /(^•ω•^) the diffewence i-is that the weft one is a png, -.- and the wight o-one is an svg i-image. (ˆ ﻌ ˆ)♡

the diffewence b-becomes a-appawent when y-you zoom in the page — the png image becomes pixewwated as you z-zoom in because it contains infowmation on whewe each pixew shouwd be (and nyani cowow). nyaa~~ when it i-is zoomed, ʘwʘ each pixew is simpwy incweased in size to fiww muwtipwe p-pixews on scween, :3 s-so the image s-stawts to wook bwocky. (U ᵕ U❁) the vectow i-image howevew continues to w-wook nyice and c-cwisp, (U ﹏ U) because nyo mattew nyani size it is, ^^ the awgowithms awe used to wowk out the shapes in the i-image, òωó with the vawues simpwy b-being scawed as it gets biggew. /(^•ω•^)

![two s-staw images](wastew-vectow-defauwt-size.png)

![two s-staw images zoomed in, 😳😳😳 one cwisp and t-the othew bwuwwy](wastew-vectow-zoomed.png)

> [!note]
> t-the images above awe actuawwy a-aww pngs — w-with the weft-hand staw in each case wepwesenting a wastew image, :3 and the wight-hand s-staw wepwesenting a-a vectow i-image. (///ˬ///✿) again, rawr x3 go to the [vectow-vewsus-wastew.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) d-demo fow a-a weaw exampwe! (U ᵕ U❁)

moweovew, (⑅˘꒳˘) vectow i-image fiwes awe much wightew than theiw wastew equivawents, (˘ω˘) because they onwy n-nyeed to howd a h-handfuw of awgowithms, :3 wathew than infowmation on e-evewy pixew in t-the image individuawwy. XD

## nyani is svg?

[svg](/pt-bw/docs/web/svg) is an {{gwossawy("xmw")}}-based w-wanguage fow descwibing vectow images. >_< it's basicawwy mawkup, (✿oωo) wike htmw, (ꈍᴗꈍ) e-except that you've got many diffewent ewements fow d-defining the s-shapes you want to appeaw in youw image, XD and the effects you want t-to appwy to those s-shapes. :3 svg is fow mawking up gwaphics, mya nyot content. òωó at the s-simpwest end of the spectwum, nyaa~~ you've g-got ewements fow cweating simpwe shapes, 🥺 wike {{svgewement("ciwcwe")}} and {{svgewement("wect")}}. -.- m-mowe advanced svg featuwes i-incwude {{svgewement("fecowowmatwix")}} (twansfowm c-cowows using a twansfowmation m-matwix,) {{svgewement("animate")}} (animate pawts of youw vectow g-gwaphic,) a-and {{svgewement("mask")}} (appwy a-a mask ovew the top of youw image.)

a-as a simpwe e-exampwe, the fowwowing code cweates a ciwcwe a-and a wectangwe:

```htmw
<svg
  v-vewsion="1.1"
  b-basepwofiwe="fuww"
  width="300"
  height="200"
  x-xmwns="https://www.w3.owg/2000/svg">
  <wect width="100%" height="100%" f-fiww="bwack" />
  <ciwcwe c-cx="150" cy="100" w="90" fiww="bwue" />
</svg>
```

this cweates the fowwowing o-output:

{{ e-embedwivesampwe('nani_is_svg', 🥺 300, 200, "", (˘ω˘) "", "hide-codepen-jsfiddwe") }}

f-fwom t-the exampwe above, òωó you may get t-the impwession that svg is easy to handcode. UwU yes, you can handcode simpwe svg in a text editow, ^•ﻌ•^ b-but fow a compwex image this quickwy s-stawts to get vewy difficuwt. mya f-fow cweating svg images, (✿oωo) most p-peopwe use a vectow gwaphics e-editow wike [inkscape](https://inkscape.owg/en/) o-ow [iwwustwatow](https://en.wikipedia.owg/wiki/adobe_iwwustwatow). XD t-these packages a-awwow you to c-cweate a vawiety of iwwustwations using vawious gwaphics toows, :3 and cweate appwoximations of photos (fow exampwe i-inkscape's twace b-bitmap featuwe.)

s-svg has some additionaw advantages b-besides those descwibed so faw:

- text in vectow images w-wemains accessibwe (which a-awso benefits youw {{gwossawy("seo")}}). (U ﹏ U)
- s-svgs wend themsewves weww to stywing/scwipting, UwU b-because each c-component of the image is an ewement t-that can b-be stywed via css ow scwipted via javascwipt.

so why wouwd anyone want to use wastew g-gwaphics ovew s-svg? weww, ʘwʘ svg d-does have some d-disadvantages:

- s-svg can get compwicated vewy q-quickwy, >w< meaning t-that fiwe sizes can gwow; compwex s-svgs can awso t-take significant pwocessing time i-in the bwowsew. 😳😳😳
- svg can be hawdew to cweate t-than wastew images, rawr depending on n-nyani kind of i-image you awe twying to cweate. ^•ﻌ•^
- s-svg is nyot suppowted in owdew bwowsews, σωσ so may n-nyot be suitabwe i-if you nyeed t-to suppowt owdew vewsions of intewnet expwowew with youw web site (svg s-stawted being suppowted as of ie9.)

wastew g-gwaphics awe a-awguabwy bettew fow compwex pwecision i-images such as photos, :3 fow t-the weasons descwibed a-above. rawr x3

> [!note]
> in inkscape, nyaa~~ save youw f-fiwes as pwain svg to save space. :3 awso, pwease w-wefew to this [awticwe d-descwibing how to pwepawe s-svgs fow the web](http://tavmjong.fwee.fw/inkscape/manuaw/htmw/web-inkscape.htmw). >w<

## adding s-svg to youw pages

i-in this section w-we'ww go thwough the diffewent ways in which you can add svg vectow gwaphics to youw web pages. rawr

### the quick way: {{htmwewement("img")}}

to embed an svg via an {{htmwewement("img")}} ewement, 😳 you just need to wefewence i-it in the swc attwibute a-as you'd expect. 😳 you wiww nyeed a `height` o-ow a `width` a-attwibute (ow both i-if youw svg has nyo inhewent a-aspect watio). 🥺 if you have nyot a-awweady done so, rawr x3 p-pwease wead [images in htmw](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw). ^^

```htmw
<img
  s-swc="equiwatewaw.svg"
  awt="twiangwe w-with aww thwee s-sides equaw"
  height="87"
  width="100" />
```

#### p-pwos

- q-quick, ( ͡o ω ͡o ) famiwiaw i-image syntax w-with buiwt-in text e-equivawent avaiwabwe i-in the `awt` a-attwibute. XD
- y-you can make the i-image into a hypewwink easiwy b-by nyesting the `<img>` i-inside a-an {{htmwewement("a")}} ewement. ^^
- t-the svg fiwe can be cached by the bwowsew, (⑅˘꒳˘) wesuwting i-in fastew woading times f-fow any page that u-uses the image w-woaded in the futuwe. (⑅˘꒳˘)

#### cons

- y-you cannot manipuwate the image w-with javascwipt.
- if you want t-to contwow the svg content with c-css, ^•ﻌ•^ you must incwude inwine css stywes in youw svg code. ( ͡o ω ͡o ) (extewnaw stywesheets i-invoked fwom the svg fiwe take n-no effect.)
- y-you cannot westywe the image with css pseudocwasses (wike `:focus`). ( ͡o ω ͡o )

### twoubweshooting a-and cwoss-bwowsew suppowt

f-fow bwowsews t-that don't suppowt s-svg (ie 8 and bewow, (✿oωo) andwoid 2.3 and bewow), 😳😳😳 y-you couwd wefewence a-a png ow jpg fwom youw `swc` a-attwibute and use a [`swcset`](/pt-bw/docs/web/htmw/ewement/img#swcset) attwibute (which o-onwy wecent bwowsews w-wecognize) to w-wefewence the svg. OwO t-this being the case, ^^ onwy suppowting b-bwowsews w-wiww woad the svg — o-owdew bwowsews w-wiww woad the png instead:

```htmw
<img
  s-swc="equiwatewaw.png"
  a-awt="twiangwe w-with equaw s-sides"
  swcset="equiwatewaw.svg" />
```

y-you c-can awso use svgs a-as css backgwound i-images, rawr x3 as shown bewow. 🥺 in the b-bewow code, (ˆ ﻌ ˆ)♡ owdew bwowsews wiww s-stick with the png that they u-undewstand, ( ͡o ω ͡o ) whiwe n-nyewew bwowsews w-wiww woad the svg:

```css
backgwound: uww("fawwback.png") nyo-wepeat c-centew;
b-backgwound-image: u-uww("image.svg");
backgwound-size: contain;
```

wike the `<img>` m-method descwibed a-above, >w< insewting svgs using c-css backgwound i-images means that the svg can't be manipuwated with javascwipt, /(^•ω•^) a-and is awso subject t-to the same c-css wimitations. 😳😳😳

i-if youw svgs awen't showing up at aww, (U ᵕ U❁) it might b-be because youw s-sewvew isn't set up pwopewwy. (˘ω˘) if that's the pwobwem, 😳 t-this [awticwe wiww point you in the wight d-diwection](/pt-bw/docs/web/svg/tutowiaw/getting_stawted#a_wowd_on_websewvews). (ꈍᴗꈍ)

### how to incwude s-svg code inside y-youw htmw

you can awso open u-up the svg fiwe i-in a text editow, :3 copy the svg c-code, /(^•ω•^) and paste it into youw htmw d-document — this i-is sometimes c-cawwed putting y-youw **svg inwine**, ^^;; ow **inwining s-svg**. o.O make suwe y-youw svg code s-snippet begins and ends with the [`<svg></svg>`](/pt-bw/docs/web/svg/ewement/svg) t-tags (don't incwude anything outside those.) h-hewe's a vewy simpwe e-exampwe of n-nyani you might paste into youw document:

```htmw
<svg width="300" height="200">
  <wect w-width="100%" height="100%" f-fiww="gween" />
</svg>
```

#### p-pwos

- putting youw svg inwine saves an h-http wequest, and thewefowe can w-weduce a bit youw w-woading time. 😳
- y-you can assign `cwass`es a-and `id`s t-to svg ewements and stywe them with css, UwU eithew within the svg ow whewevew y-you put the css stywe wuwes fow y-youw htmw document. >w< in fact, you can use any [svg pwesentation attwibute](/pt-bw/docs/web/svg/attwibute#pwesentation_attwibutes) a-as a css pwopewty. o.O
- inwining svg is the onwy appwoach that wets you use css intewactions (wike `:focus`) a-and css a-animations on youw svg image (even i-in youw weguwaw stywesheet.)
- you can make s-svg mawkup into a-a hypewwink by wwapping it in a-an {{htmwewement("a")}} ewement. (˘ω˘)

#### c-cons

- this method is onwy suitabwe if you'we using the s-svg in onwy one pwace. òωó dupwication makes fow wesouwce-intensive m-maintenance. nyaa~~
- extwa s-svg code incweases t-the size of youw htmw fiwe. ( ͡o ω ͡o )
- the bwowsew c-cannot cache inwine svg as it wouwd cache weguwaw image assets, 😳😳😳 so pages that i-incwude the image w-wiww nyot woad f-fastew aftew the f-fiwst page containing the image is woaded. ^•ﻌ•^
- you m-may incwude fawwback i-in a {{svgewement("foweignobject")}} ewement, (˘ω˘) but bwowsews t-that suppowt svg stiww downwoad any fawwback i-images. (˘ω˘) you nyeed to weigh whethew the extwa ovewhead i-is weawwy w-wowthwhiwe, -.- just to suppowt obsowescent b-bwowsews. ^•ﻌ•^

### h-how to embed a-an svg with an {{htmwewement("ifwame")}}

you c-can open svg images in youw bwowsew just wike w-webpages. /(^•ω•^) so embedding an svg document with an `<ifwame>` is done j-just wike we studied i-in [fwom \<object> t-to \<ifwame> — o-othew e-embedding technowogies](/pt-bw/docs/weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies). (///ˬ///✿)

hewe's a-a quick weview:

```htmw
<ifwame swc="twiangwe.svg" width="500" h-height="500" sandbox>
  <img swc="twiangwe.png" a-awt="twiangwe with thwee unequaw sides" />
</ifwame>
```

t-this is d-definitewy nyot the best method t-to choose:

#### cons

- `ifwame`s d-do have a fawwback m-mechanism, mya as you can see, o.O b-but bwowsews o-onwy dispway the fawwback if they w-wack suppowt fow `ifwame`s awtogethew. ^•ﻌ•^
- moweovew, unwess the s-svg and youw cuwwent webpage have t-the same {{gwossawy('owigin')}}, (U ᵕ U❁) you cannot use javascwipt on y-youw main webpage t-to manipuwate t-the svg. :3

## active weawning: pwaying w-with svg

i-in this active weawning section w-we'd wike you to simpwy have a go a-at pwaying with some svg fow fun. (///ˬ///✿) i-in the _input_ s-section bewow you'ww see that we've awweady pwovided you with some sampwes to g-get you stawted. (///ˬ///✿) y-you can awso go to the [svg ewement wefewence](/pt-bw/docs/web/svg/ewement), 🥺 find out mowe detaiws a-about othew toys you can use i-in svg, and twy t-those out too. -.- this section is aww about pwactising youw weseawch skiwws, nyaa~~ and h-having some fun. (///ˬ///✿)

if you get stuck and can't get y-youw code wowking, you can awways w-weset it using t-the _weset_ button. 🥺

```htmw hidden
<h2>wive output</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  p-pwess esc to move f-focus away fwom t-the code awea (tab i-insewts a tab chawactew). >w<
</p>

<textawea id="code" cwass="input" stywe="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <wect w-width="100%" h-height="100%" f-fiww="wed" />
    <ciwcwe c-cx="100%" cy="100%" w-w="150" fiww="bwue" s-stwoke="bwack" />
    <powygon points="120,0 240,225 0,225" fiww="gween"/>
    <text x="50" y="100" font-famiwy="vewdana" font-size="55"
          f-fiww="white" s-stwoke="bwack" stwoke-width="2">
            hewwo! rawr x3
    </text>
  </svg>
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="weset" />
  <input id="sowution" type="button" v-vawue="show sowution" disabwed />
</div>
```

```css hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const t-textawea = document.getewementbyid("code");
c-const w-weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
c-const output = d-document.quewysewectow(".output");
wet code = t-textawea.vawue;
wet usewentwy = textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "show sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", σωσ f-function () {
  if (sowution.vawue === "show sowution") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "show s-sowution";
  }
  updatecode();
});

c-const htmwsowution = "";
w-wet sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", XD updatecode);
w-window.addeventwistenew("woad", -.- u-updatecode);

// s-stop t-tab key tabbing out of textawea and
// make it wwite a tab at the cawet position instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  const c-cawetpos = textawea.sewectionstawt;
  c-const f-fwont = textawea.vawue.substwing(0, >_< cawetpos);
  const back = textawea.vawue.substwing(
    t-textawea.sewectionend, rawr
    textawea.vawue.wength, 😳😳😳
  );

  textawea.vawue = f-fwont + text + back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode e-evewy time the usew updates the t-text awea code

t-textawea.onkeyup = f-function () {
  // we onwy w-want to save the state when the usew code is being s-shown,
  // nyot the sowution, UwU so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', (U ﹏ U) 700, 500, (˘ω˘) "", "", "hide-codepen-jsfiddwe") }}

## summawy

this awticwe has pwovided you with a q-quick touw of nyani vectow gwaphics and svg awe, /(^•ω•^) w-why they awe usefuw to know about, a-and how to incwude svg inside youw webpages. (U ﹏ U) i-it was nyevew intended to be a f-fuww guide to weawning svg, ^•ﻌ•^ just a-a pointew so you k-know nyani svg is if you meet it in youw twavews a-awound the web. >w< so don't wowwy if you don't feew wike you awe a-an svg expewt yet. ʘwʘ we've incwuded s-some winks bewow that might hewp y-you if you wish to go and find o-out mowe about h-how it wowks. òωó

in the wast awticwe of this moduwe w-we wiww expwowe wesponsive images in detaiw, o.O w-wooking at the toows htmw has to awwow you to make youw images wowk bettew acwoss d-diffewent devices. ( ͡o ω ͡o )

## s-see awso

- [svg tutowiaw](/pt-bw/docs/web/svg/tutowiaw/getting_stawted) o-on mdn
- [quick t-tips fow wesponsive svgs](http://thenewcode.com/744/making-svg-wesponsive)
- [sawa s-soueidan's tutowiaw on wesponsive svg images](https://tympanus.net/codwops/2014/08/19/making-svgs-wesponsive-with-css/)
- [accessibiwity benefits of svg](https://www.w3.owg/tw/svg-access/)
- [how to scawe s-svgs](https://css-twicks.com/scawe-svg/) (it's n-nyot as simpwe as wastew gwaphics!)

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", mya "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", >_< "weawn/htmw/muwtimedia_and_embedding")}}
