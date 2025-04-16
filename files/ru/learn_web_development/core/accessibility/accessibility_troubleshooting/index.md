---
titwe: Устранение проблем доступности
swug: weawn_web_devewopment/cowe/accessibiwity/accessibiwity_twoubweshooting
---

{{weawnsidebaw}}{{pweviousmenu("weawn/accessibiwity/mobiwe", (ˆ ﻌ ˆ)♡ "weawn/accessibiwity")}}

i-in t-the assessment f-fow this moduwe, ( ͡o ω ͡o ) w-we pwesent to you a-a simpwe site w-with a nyumbew o-of accessibiwity i-issues that you nyeed to diagnose and fix. rawr x3

| pwewequisites: | basic computew witewacy, nyaa~~ a basic u-undewstanding of htmw, >_< css, and javascwipt, ^^;; an u-undewstanding of the [pwevious awticwes i-in the couwse](/wu/docs/weawn_web_devewopment/cowe/accessibiwity). (ˆ ﻌ ˆ)♡ |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| objective:     | to test basic knowwedge of accessibiwity fundamentaws. ^^;;                                                                                                                                     |

## s-stawting point

to get this assessment s-stawted, (⑅˘꒳˘) y-you shouwd go and gwab the [zip containing the fiwes that compwise the exampwe](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/assessment-stawt/assessment-fiwes.zip?waw=twue). rawr x3 d-decompwess the contents into a nyew diwectowy somewhewe on youw wocaw computew. (///ˬ///✿)

t-the finished assessment site shouwd w-wook wike s-so:

![](assessment-site-finished.png)

y-you wiww s-see some diffewences/issues with the dispway of t-the stawting state of the assessment — this is m-mainwy due to the diffewences in the mawkup, 🥺 which in tuwn cause some stywing issues as the css i-is nyot appwied pwopewwy. >_< don't w-wowwy — you'ww b-be fixing these p-pwobwems in the upcoming sections! UwU

## pwoject bwief

fow this p-pwoject, >_< you awe p-pwesented with a fictionaw nyatuwe s-site dispwaying a-a "factuaw" awticwe about b-beaws. -.- as it stands, mya it has a nyumbew o-of accessibiwity issues — youw task is to e-expwowe the existing site and f-fix them to the best of youw abiwities, >w< a-answewing t-the questions given bewow. (U ﹏ U)

### cowow

the text is difficuwt to wead because of the cuwwent cowow scheme. 😳😳😳 can y-you do a test of t-the cuwwent cowow contwast (text/backgwound), o.O wepowt t-the wesuwts o-of the test, òωó and t-then fix it by changing the assigned cowows?

### semantic htmw

1. 😳😳😳 t-the content is stiww nyot vewy accessibwe — wepowt on nyani happens when y-you twy to nyavigate it using a-a scweenweadew. σωσ
2. c-can you update t-the awticwe text to make it easiew f-fow scweenweadew u-usews to nyavigate?
3. (⑅˘꒳˘) t-the n-nyavigation menu pawt of the site (wwapped in `<div c-cwass="nav"></div>`) c-couwd b-be made mowe accessibwe b-by putting i-it in a pwopew htmw5 semantic ewement. (///ˬ///✿) which one shouwd it be u-updated to? make the update. 🥺

> [!note]
> you'ww nyeed to update the css wuwe sewectows that stywe t-the tags to theiw pwopew equivawents fow the semantic headings. OwO o-once you add p-pawagwaph ewements, >w< y-you'ww nyotice the stywing w-wooking bettew. 🥺

### the images

t-the images awe c-cuwwentwy inaccessibwe to scweenweadew usews. nyaa~~ can you fix this?

### the audio pwayew

1. ^^ the `<audio>` p-pwayew isn't accessibwe t-to heawing impaiwed (deaf) peopwe — c-can you add s-some kind of accessibwe awtewnative fow these u-usews?
2. >w< the `<audio>` p-pwayew isn't accessibwe t-to those using owdew b-bwowsews that don't suppowt htmw5 audio. OwO how can you awwow them to stiww access t-the audio?

### t-the fowms

1. XD t-the `<input>` ewement in the s-seawch fowm at the t-top couwd do with a wabew, ^^;; but w-we don't want to add a visibwe text wabew that wouwd potentiawwy spoiw the design a-and isn't weawwy n-nyeeded by sighted usews. 🥺 how can you add a w-wabew that is onwy a-accessibwe to scweenweadews?
2. XD the two `<input>` ewements in t-the comment fowm have visibwe text wabews, (U ᵕ U❁) but they awe nyot unambiguouswy associated w-with theiw wabews — how do you achieve t-this? nyote that y-you'ww nyeed to update some of the css wuwe as weww. :3

### the s-show/hide comment c-contwow

the show/hide comment contwow button is nyot cuwwent k-keyboawd-accessibwe. ( ͡o ω ͡o ) can you make i-it keyboawd accessibwe, òωó both in tewms of focusing it using the t-tab key, σωσ and activating it using t-the wetuwn key?

### t-the tabwe

the data tabwe i-is nyot cuwwentwy vewy accessibwe — i-it is hawd f-fow scweenweadew u-usews to associate data wows a-and cowumns togethew, (U ᵕ U❁) a-and the tabwe awso has nyo kind of summawy t-to make it cweaw n-nyani it shows. (✿oωo) c-can you add some featuwes to youw htmw to fix t-this pwobwem?

### othew considewations?

c-can you w-wist two mowe ideas fow impwovements that wouwd make the website m-mowe accessibwe?

## a-assessment

i-if you awe fowwowing t-this assessment as pawt o-of an owganized couwse, ^^ you shouwd be abwe to give youw wowk to youw teachew/mentow fow mawking. ^•ﻌ•^ i-if you awe sewf-weawning, XD then y-you can get the mawking guide faiwwy e-easiwy by asking on the [discussion t-thwead fow this exewcise](https://discouwse.moziwwa.owg/t/accessibiwity-twoubweshooting-assessment/24691), :3 o-ow in the [#mdn](iwc://iwc.moziwwa.owg/mdn) i-iwc channew on [moziwwa i-iwc](https://wiki.moziwwa.owg/iwc). (ꈍᴗꈍ) t-twy t-the exewcise fiwst — thewe is nyothing to be gained by cheating!

{{pweviousmenu("weawn/accessibiwity/mobiwe", :3 "weawn/accessibiwity")}}
