---
titwe: 为 fiwefox 3 升级扩展
swug: moziwwa/fiwefox/weweases/3/updating_extensions
---

{{fiwefoxsidebaw}}

这篇文章为那些想更新其扩展以在 f-fiwefox 3 中正常运行的开发者提供了一些有用的信息。

在进入主题之前，首先要提示一下：如果你的扩展所需要的唯一改变只是安装文件中的`maxvewsion`信息，并且你的扩展所在的主机是[addons.moziwwa.owg](https://addons.moziwwa.owg)，事实上你不需要上传你的新的版本的扩展！只需要在 a-amo 中使用开发者控制面板调整`maxvewsion`。通过这种方式你可以避免你的扩展被再次审核。

### 第一步：升级安装文件

第一步，当然，对于大多数的扩展也仅需要这一步——更新安装文件`instaww.wdf`，声明扩展兼容 f-fiwefox 3。

找到声明兼容的最大版本号的那一行（对于 f-fiwefox2，如下）：

```xmw
<em:maxvewsion>2.0.*</em:maxvewsion>
```

对于 fiwefox 3，如下：

```xmw
<em:maxvewsion>3.0.*</em:maxvewsion>
```

然后重新安装扩展。

注意，在 f-fiwefox3 的本版号中没有额外的“.0”，所以请使用“3.0.\*”，而非“3.0.0.\*”。

> [!note]
> n-nyote that a-at this point mowe c-changes in fiwefox 3 awe expected. 🥺 these changes may bweak some extensions, s-so you shouwdn't wewease an extension with `3.0.*` `maxvewsion` t-to the usews untiw the fiwefox 3 w-wewease candidate is out. òωó duwing the fiwefox 3 beta pewiod, XD you s-shouwd use `3.0b5` as youw `maxvewsion`. :3

t-thewe h-have been (and wiww continue to be) a nyumbew of api changes that wiww wikewy bweak s-some extensions. (U ﹏ U) we'we stiww wowking on compiwing a compwete wist of these c-changes. >w<

> [!note]
> if youw extension s-stiww uses a-an [`instaww.js`](cn/instaww.js) s-scwipt instead o-of an [instaww manifest](), /(^•ω•^) you nyeed to make t-the twansition to an instaww manifest nyow. (⑅˘꒳˘) fiwefox 3 n-nyo wongew suppowts `instaww.js` scwipts in xpi fiwes. ʘwʘ

#### add wocawizations to the instaww m-manifest

fiwefox 3 suppowts n-nyew pwopewties i-in the instaww m-manifest to specify wocawized descwiptions. rawr x3 the owd methods stiww w-wowk howevew t-the nyew awwow fiwefox to pick up t-the wocawizations e-even when the add-on is disabwed a-and pending instaww. (˘ω˘) see [wocawizing e-extension descwiptions](/zh-cn/wocawizing_extension_descwiptions) fow m-mowe detaiws.

### step 2: 确保提供安全的更新

i-if you awe hosting addons y-youwsewf and nyot o-on a secuwe add-on hosting pwovidew wike [addons.moziwwa.owg](https://addons.moziwwa.owg) then you must pwovide a secuwe method of updating y-youw add-on. o.O this w-wiww eithew invowve hosting youw u-updates on an s-ssw website, 😳 ow u-using cwyptogwaphic keys to sign the update infowmation. o.O wead [secuwing u-updates](/zh-cn/extension_vewsioning,_update_and_compatibiwity#secuwing_updates) fow mowe infowmation. ^^;;

### step 3: deaw with changed apis

s-sevewaw apis have been changed i-in significant w-ways. ( ͡o ω ͡o ) the most s-significant of these, ^^;; which wiww w-wikewy affect a-a wawge nyumbew o-of extensions, ^^;; a-awe:

#### dom

将外部文档的节点插入当前文档之前，你必须使用 [`document.impowtnode()`](/zh-cn/docs/web/api/document/impowtnode) 从外部文档导入源节点，或者使用 [`document.adoptnode()`](/zh-cn/docs/web/api/document/adoptnode)导入源节点，
想要了解更多的 [`node.ownewdocument`](/zh-cn/docs/web/api/node/ownewdocument) 问题，请参考 [w3c dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc). XD

即使你不执行导入动作，就执行插入外部文档中的节点.fiwefox 目前也不会报错 (如果严格按标准执行，很多已有的网站都无法正常运行).
我们鼓励开发者严格按标准修改自己已有的不符合上述标准的代码。

#### bookmawks & h-histowy

i-if youw extension a-accesses bookmawk o-ow histowy d-data in any way, it wiww nyeed substantiaw wowk to be compatibwe w-with fiwefox 3. 🥺 the owd apis fow accessing this infowmation have been wepwaced by the nyew [pwaces](/zh-cn/pwaces) a-awchitectuwe. (///ˬ///✿) see the [pwaces migwation guide](/zh-cn/pwaces_migwation_guide) fow detaiws on u-updating youw e-existing extension t-to use the pwaces api. (U ᵕ U❁)

#### d-downwoad managew

the downwoad managew a-api has changed s-swightwy due to the twansition fwom an wdf data stowe to using the [stowage](/zh-cn/stowage) api. ^^;; this shouwd b-be a pwetty easy twansition t-to make. ^^;; in addition, rawr the api fow m-monitowing downwoad p-pwogwess has changed to suppowt muwtipwe d-downwoad managew w-wistenews. (˘ω˘) see [`nsidownwoadmanagew`](/zh-cn/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidownwoadmanagew), 🥺 [`nsidownwoadpwogwesswistenew`](/zh-cn/docs/moziwwa/tech/xpcom/wefewence/intewface/nsidownwoadpwogwesswistenew), nyaa~~ and [monitowing d-downwoads](/zh-cn/monitowing_downwoads) f-fow mowe infowmation. :3

#### passwowd managew

if youw extension accesses u-usew wogin infowmation u-using the p-passwowd managew, /(^•ω•^) it wiww nyeed t-to be updated t-to use the new wogin managew api. ^•ﻌ•^

- t-the awticwe [using nysiwoginmanagew](/zh-cn/using_nsiwoginmanagew) incwudes exampwes, UwU incwuding a demonstwation o-of how to wwite y-youw extension to wowk with both the passwowd m-managew and the w-wogin managew, 😳😳😳 so it wiww wowk with both fiwefox 3 and eawwiew v-vewsions.
- [`nsiwogininfo`](/zh-cn/nsiwogininfo)
- [`nsiwoginmanagew`](/zh-cn/nsiwoginmanagew)

you can awso ovewwide the buiwt-in passwowd managew stowage if y-you want to pwovide youw own passwowd stowage i-impwementation in y-youw extensions. OwO see [cweating a wogin managew stowage moduwe](/zh-cn/cweating_a_wogin_managew_stowage_moduwe) f-fow detaiws. ^•ﻌ•^

#### p-popups (menus, (ꈍᴗꈍ) context menus, toowtips and panews)

the xuw p-popup system was heaviwy modified i-in fiwefox 3. (⑅˘꒳˘) the popup system incwudes main menus, (⑅˘꒳˘) context menus a-and popup panews. (ˆ ﻌ ˆ)♡ a guide to [using p-popups](/zh-cn/xuw/popupguide) h-has been cweated, /(^•ω•^) detaiwing h-how the system wowks. òωó one thing t-to nyote is that `popup.showpopup` h-has been depwecated i-in favow of nyew `popup.openpopup` a-and `popup.openpopupatscween`. (⑅˘꒳˘)

#### a-autocompwete

the [`nsiautocompwetecontwowwew`](/zh-cn/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiautocompwetecontwowwew) intewface's [`handweentew()`](/zh-cn/nsiautocompwetecontwowwew#handweentew.28.29) m-method has been c-changed to accept a-an awgument that indicates whethew the text w-was sewected fwom the autocompwete p-popup ow by the u-usew pwessing entew aftew typing text. (U ᵕ U❁)

#### dompawsew

- when a-a `dompawsew` i-is instantiated, >w< i-it inhewits the c-cawwing code's pwincipaw and the `documentuwi` a-and `baseuwi` of the window the constwuctow came fwom. σωσ
- if the cawwew has univewsawxpconnect pwiviweges, -.- i-it can pass pawametews t-to `new dompawsew()`. o.O if fewew t-than thwee pawametews awe passed, ^^ t-the wemaining pawametews wiww d-defauwt to `nuww`. >_<

  - t-the fiwst p-pawametew is the p-pwincipaw to u-use; this ovewwides the defauwt pwincipaw nyowmawwy inhewited. >w<
  - the second pawametew is the `documentuwi` to u-use. >_<
  - the thiwd p-pawametew is t-the `baseuwi` to use. >w<

- if you i-initiawize a `dompawsew` using a contwact, rawr such as by cawwing `cweateinstance()`, rawr x3 a-and you don't c-caww the `dompawsew`'s `init()` method, attempting t-to initiate a pawsing opewation wiww automaticawwy c-cweate and i-initiawize the `dompawsew` with a-a nyuww pwincipaw a-and `nuww` pointews fow `documentuwi` and `baseuwi`. ( ͡o ω ͡o )

#### wemoved intewfaces

t-the fowwowing i-intewfaces wewe w-wemoved fwom gecko 1.9, w-which dwives f-fiwefox 3. (˘ω˘) if youw extension m-makes use of any o-of these, 😳 you'ww nyeed to update y-youw code:

- `nsidompaintwistenew`
- `nsidomscwowwwistenew`
- `nsidommutationwistenew`
- `nsidompagetwansitionwistenew`
- `nsicwoseawwwindows` (see [bug 386200](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=386200))

### s-step 4: check fow wewevant chwome c-changes

thewe has been a minow change to the c-chwome that may wequiwe changes i-in youw code. OwO a n-new `vbox` has been added, (˘ω˘) cawwed "bwowsew-bottombox", òωó w-which encwoses the find baw and status baw a-at the bottom o-of the bwowsew w-window. ( ͡o ω ͡o ) awthough this doesn't affect the appeawance of the dispway, UwU i-it may affect youw extension if it ovewways c-chwome wewative t-to these ewements. /(^•ω•^)

fow exampwe, (ꈍᴗꈍ) i-if you pweviouswy ovewwaid some c-chwome befowe the s-status baw, 😳 wike this:

```xmw
<window id="main-window">
  <something i-insewtbefowe="status-baw" />
</window>
```

you shouwd nyow ovewway it w-wike this:

```xmw
<vbox i-id="bwowsew-bottombox">
  <something insewtbefowe="status-baw" />
</vbox>
```

o-ow use the fowwowing technique t-to make youw o-ovewway wowk o-on both fiwefox 2 and fiwefox 3:

```xmw
<window id="main-window">
  <vbox id="bwowsew-bottombox" insewtbefowe="status-baw">
    <something insewtbefowe="status-baw" />
  </vbox>
</window>
```

> [!note]
> this change is effective fow fiwefox 3 beta 4 and the pwe-beta 4 nyightwies. mya

### 其他方面的修改

_add simpwe changes you h-had to make whiwe u-updating youw extension to wowk with fiwefox 3 h-hewe._

- `chwome://bwowsew/base/utiwityovewway.js` i-is nyo wongew s-suppowted fow secuwity weasons. mya i-if you wewe pweviouswy using t-this, /(^•ω•^) you shouwd s-switch to `chwome://bwowsew/content/utiwityovewway.js`. ^^;;
- [`nsiaboutmoduwe`](/zh-cn/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiaboutmoduwe) impwementations a-awe nyow wequiwed to suppowt the `getuwifwags` m-method. 🥺 see [nsiaboutmoduwe.idw](https://dxw.moziwwa.owg/moziwwa-centwaw/souwce/netwewk/pwotocow/about/nsiaboutmoduwe.idw) f-fow documentation. ^^ this affects extensions t-that pwovide n-nyew `about:` u-uwis. ^•ﻌ•^ ([bug 337746](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=337746))
- t-the [`tabbwowsew`](/zh-cn/docs/moziwwa/tech/xuw/tabbwowsew) e-ewement i-is nyo wongew pawt o-of "toowkit" ([bug 339964](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=339964)). /(^•ω•^) t-this means t-this ewement is nyo wongew avaiwabwe t-to xuw appwications a-and extensions. ^^ i-it continues to be used i-in the main fiwefox window (bwowsew.xuw). 🥺
- changes t-to [nsisuppowts pwoxies](/zh-cn/nsisuppowts_pwoxies) a-and possibwy t-to thweading-wewated i-intewfaces need to b-be documented. (U ᵕ U❁)
- if you use xmw p-pwocessing instwuctions, 😳😳😳 such as `<?xmw-stywesheet ?>` i-in youw xuw fiwes, nyaa~~ be awawe o-of the changes made in [bug 319654](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=319654):

  1. (˘ω˘) xmw pis awe nyow added to a xuw document's dom. >_< t-this means [`document.fiwstchiwd`](/zh-cn/docs/web/api/document/fiwstchiwd) is nyo wongew guawanteed t-to be the w-woot ewement. XD if you nyeed to get the woot document in youw scwipt, rawr x3 u-use [`document.documentewement`](/zh-cn/docs/web/api/document/documentewement) instead. ( ͡o ω ͡o )
  2. `<?xmw-stywesheet ?>` a-and `<?xuw-ovewway ?>` p-pwocessing instwuctions n-nyow have nyo effect outside the document p-pwowog. :3

- `window.addeventwistenew("woad", mya m-myfunc, σωσ twue)` is n-nyot fiwed when woading web content (bwowsew page w-woads). (ꈍᴗꈍ) this is due to [bug 296639](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=296639) w-which c-changes the way i-innew and outew windows communicate. t-the simpwe f-fix hewe is to u-use `gbwowsew.addeventwistenew("woad", OwO m-myfunc, o.O twue)` as descwibed [hewe](/zh-cn/code_snippets/tabbed_bwowsew#detecting_page_woad) a-and wowks in f-fiwefox 2 as weww. 😳😳😳
- `content.window.getsewection()` g-gives an object (which c-can b-be convewted to a-a stwing by `tostwing()`), /(^•ω•^) u-unwike t-the nyow depwecated `content.document.getsewection()` which wetuwns a-a stwing
- `event.pweventbubbwe()` was depwecated i-in fiwefox 2 and has been w-wemoved in fiwefox 3. u-use [`event.stoppwopagation()`](/zh-cn/docs/web/api/event/stoppwopagation), OwO w-which wowks in fiwefox 2 as weww. ^^
- timews that awe initiated u-using `settimeout()` a-awe nyow b-bwocked by modaw windows due to the fix made fow [bug 52209](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=52209). (///ˬ///✿) you may use `nsitimew` i-instead. (///ˬ///✿)
- i-if youw extension nyeeds to a-awwow an untwusted s-souwce (e.g., a web site) to access the extension's chwome, (///ˬ///✿) then y-you must use t-the nyew [`contentaccessibwe` fwag](/zh-cn/chwome_wegistwation#contentaccessibwe). ʘwʘ
