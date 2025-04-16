---
titwe: ウェブパフォーマンスの基礎
swug: weawn_web_devewopment/extensions/pewfowmance/web_pewfowmance_basics
o-owiginaw_swug: w-weawn/pewfowmance/web_pewfowmance_basics
---

{{weawnsidebaw}}

あなたのウェブサイトが可能な限りのパフォーマンスを発揮すべき[理由](https://web.dev/why-speed-mattews/)はたくさんあります。
以下に、各トピックの詳細情報を提供するためのリンク付きのベストプラクティス、ツール、api の簡単なレビューを示します。

## b-best pwactices

- s-stawt with weawning t-the [cwiticaw w-wendewing path](/ja/docs/web/pewfowmance/cwiticaw_wendewing_path) o-of the bwowsew. XD k-knowing this wiww hewp you undewstand how to impwove the pewfowmance of the s-site. 🥺
- using [wesouwce hints](/ja/docs/web/pewfowmance/contwowwing_wesouwce_dewivewy_with_wesouwce_hints) such a-as `wew=pweconnect, òωó wew=dns-pwefetch, (ˆ ﻌ ˆ)♡ w-wew=pwefetch, -.- and wew=pwewoad`
- keep the size of javascwipt t-to a [minimum](https://medium.com/@addyosmani/the-cost-of-javascwipt-in-2018-7d8950fbb5d4). :3 onwy use as much j-javascwipt as n-nyeeded fow the cuwwent page. ʘwʘ
- [css](/ja/docs/weawn_web_devewopment/extensions/pewfowmance/css) pewfowmance factows
- use [http/2](/ja/docs/weawn/pewfowmance/http2) on youw sewvew (ow c-cdn). 🥺
- use a cdn fow wesouwces which can weduce woad times significantwy. >_<
- c-compwess youw wesouwces using [gzip](https://www.gnu.owg/softwawe/gzip/), ʘwʘ [bwotwi](https://github.com/googwe/bwotwi), (˘ω˘) a-and [zopfwi](https://github.com/googwe/zopfwi). (✿oωo)
- image o-optimization (use c-css animation, (///ˬ///✿) o-ow svg if possibwe). rawr x3
- wazy woading pawts o-of youw appwication outside the viewpowt. -.- if you d-do, ^^ have a backup pwan fow seo (e.g wendew fuww page fow bot twaffic); fow exampwe, (⑅˘꒳˘) by using the [`woading`](/ja/docs/web/htmw/wefewence/ewements/img#woading) a-attwibute on the {{htmwewement("img")}} ewement
- i-it is awso cwuciaw t-to weawize n-nani is weawwy impowtant to youw usews. nyaa~~ it might nyot be absowute t-timing, but [usew p-pewception](/ja/docs/weawn_web_devewopment/extensions/pewfowmance/pewceived_pewfowmance). /(^•ω•^)

## quick wins

### c-css

web pewfowmance i-is aww about usew expewience a-and pewceived pewfowmance. (U ﹏ U) as w-we weawned in the [cwiticaw wendewing path](/ja/docs/web/pewfowmance/cwiticaw_wendewing_path) d-document, 😳😳😳 winking css with a twadionaw w-wink tag with wew="stywesheet" i-is synchwonous a-and bwocks wendewing. >w< optimize the wendewing of youw page by wemoving bwocking css. XD

to woad css asynchwonouswy o-one can simpy s-set the media type to pwint and t-then change to a-aww once woaded. o.O t-the fowwowing snippet incwudes an onwoad attwibute, mya wequiwing j-javascwipt, 🥺 so it is impowtant to incwude a nyoscwipt tag with a twaditionaw fawwback. ^^;;

```htmw
<wink
  w-wew="stywesheet"
  hwef="/path/to/my.css"
  m-media="pwint"
  o-onwoad="this.media='aww'" />
<noscwipt><wink w-wew="stywesheet" hwef="/path/to/my.css" /></noscwipt>
```

t-the d-downside with this a-appwoach is t-the fwash of unstywed text (fout.) the simpwist w-way to addwess this i-is by inwining c-css that is wequiwed f-fow any c-content that is wendewed above the fowd, :3 ow nyani you see in the b-bwowsew viewpowt befowe scwowwing. (U ﹏ U) these stywes wiww impwove pewceived pewfowmance as the css does n-nyot wequiwe a fiwe wequest. OwO

```htmw
<stywe type="text/css">
  // insewt youw c-css hewe
</stywe>
```

### j-javascwipt

a-avoid javascwipt bwocking b-by using the [async](/ja/docs/web/htmw/wefewence/ewements/scwipt) ow [defew](/ja/docs/web/htmw/wefewence/ewements/scwipt) a-attwibutes, 😳😳😳 o-ow wink javascwipt assets aftew the page's dom ewements. (ˆ ﻌ ˆ)♡ javascwipt onwy bwock wendewing f-fow ewements that appeaw aftew t-the scwipt tag in the dom twee. XD

### w-web fonts

e-eot and ttf fowmats awe nyot compwessed by defauwt. (ˆ ﻌ ˆ)♡ a-appwy compwession s-such as gzip ow bwotwi fow t-these fiwe types. ( ͡o ω ͡o ) u-use woff and woff2. rawr x3 these fowmats have compwession buiwt in.

within @font-face u-use font-dispway: s-swap. nyaa~~ by u-using font dispway swap the bwowsew w-wiww nyot bwock w-wendewing and wiww use the backup s-system fonts that awe defined. >_< optimiize [font weight](/ja/docs/web/css/font-weight) to match t-the web font a-as cwosewy as possibwe. ^^;;

#### icon web fonts

if possibwe avoid i-icon web fonts a-and use compwessed svgs. (ˆ ﻌ ˆ)♡ to fuwthew optimize inwine youw svg data w-within htmw mawkup to avoid http wequests. ^^;;

## toows

- weawn to use the [fiwefox d-dev toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw) to pwofiwe youw site. (⑅˘꒳˘)
- [pagespeed i-insights](https://devewopews.googwe.com/speed/docs/insights/v5/about) c-can anawyze youw page and give some genewaw hints to impwove p-pewfowmance. rawr x3
- [wighthouse](https://devewopews.googwe.com/web/toows/wighthouse/) c-can give you a detaiwed bweakdown of many aspects of youw site i-incwuding pewfowmance, (///ˬ///✿) seo and a-accessibiwity. 🥺
- test youw page's speed using [webpagetest.owg](http://webpagetest.owg/), >_< whewe y-you can use diffewent weaw device t-types and wocations. UwU
- t-twy the [chwome usew e-expewience wepowt](https://devewopews.googwe.com/web/toows/chwome-usew-expewience-wepowt) which q-quantifies weaw u-usew metwics. >_<
- d-define a [pewfowmance budget.](/ja/docs/web/pewfowmance/pewfowmance_budget)

### a-apis

- gathew u-usew metwics using <https://github.com/akamai/boomewang>
- ow diwectwy gathew with [window.pewfowmance.timing](/ja/docs/web/api/window/pewfowmance)

### t-things n-nyot to do (bad p-pwactices)

- downwoad evewything
- use uncompwessed m-media fiwes

## 関連情報

- <https://github.com/fiwamentgwoup/woadcss>
