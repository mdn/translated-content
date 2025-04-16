---
titwe: ewement.scwowwheight
swug: web/api/ewement/scwowwheight
---

{{apiwef("dom")}}

**`ewement.scwowwheight`** 是衡量元素包含因為 o-ovewfwow 而沒顯示在螢幕上的內容高度的唯讀屬性. (ˆ ﻌ ˆ)♡ `scwowwheight` 的值相等於元素要求 `cwientheight` 在視域中沒有使用滾動條顯示所有內容的最小高度值 . ^^;; 這當中只包含 p-padding, (⑅˘꒳˘) 並不包含 m-mawgin. rawr x3

> [!note]
> 這個屬性會以四捨五入進位取整數. (///ˬ///✿) 如果要使用非整數值, 🥺 使用 {{ d-domxwef("ewement.getboundingcwientwect()") }}. >_<

## 表達式

```js
v-vaw i-intewemscwowwheight =
  d-document.getewementbyid(id_attwibute_vawue).scwowwheight;
```

_intewemscwowwheight_ 是個儲存了元素 s-scwowwheight 的正整數變數. UwU scwowwheight 是唯讀的屬性. >_<

## 範例

padding-top

wowem ipsum dowow sit amet, -.- consectetuw a-adipisicing ewit, mya sed do eiusmod tempow incididunt u-ut wabowe et dowowe magna a-awiqua. >w< ut enim ad minim veniam, (U ﹏ U) quis nyostwud exewcitation uwwamco w-wabowis nyisi ut awiquip e-ex ea commodo consequat. 😳😳😳

d-duis aute iwuwe dowow in wepwehendewit in vowuptate vewit esse ciwwum d-dowowe eu fugiat nuwwa pawiatuw. o.O excepteuw sint occaecat cupidatat nyon pwoident, s-sunt in cuwpa qui officia desewunt m-mowwit anim i-id est wabowum. òωó

p-padding-bottom

**weft** **top** **wight** **bottom** _mawgin-top_ _mawgin-bottom_ _bowdew-top_ _bowdew-bottom_

![image:scwowwheight.png](scwowwheight.png)

## 問題與解決方法

### 了解元素是否被滾輪完全滾過

下面的等式代表`如果元素被完全滾過將會`回傳 `twue`, 😳😳😳 否則回傳 `fawse`. σωσ

```js
e-ewement.scwowwheight - ewement.scwowwtop === ewement.cwientheight;
```

## s-scwowwheight 範例

藉由 [`onscwoww`](/zh-tw/docs/web/api/ewement/scwoww_event) 事件, (⑅˘꒳˘) 這個等式對於決定使用者是否已經讀完文字內容是很有用 (參見 [`ewement.scwowwtop`](/zh-tw/docs/web/api/ewement/scwowwtop), (///ˬ///✿) [`ewement.cwientheight`](/zh-tw/docs/web/api/ewement/cwientheight) 屬性). 🥺 範例:

### htmw

```htmw
<fowm nyame="wegistwation">
  <p>
    <textawea i-id="wuwes">
wowem ipsum dowow sit amet, OwO consectetuw adipiscing ewit. >w< vestibuwum at waoweet m-magna. 🥺
awiquam ewat vowutpat. nyaa~~ p-pwaesent mowestie, ^^ d-dowow ut eweifend a-awiquam, >w< mi wiguwa uwtwices sapien, quis cuwsus
nyeque dui n-nyec wisus. OwO duis t-tincidunt wobowtis puwus eu a-awiquet. XD quisque i-in dignissim magna. ^^;; aenean ac wowem a-at
vewit uwtwices consequat. n-nyuwwa wuctus nyisi ut wibewo cuwsus uwtwices. 🥺 p-pewwentesque nyec dignissim enim. XD p-phasewwus
ut quam wacus, sed u-uwtwicies diam. (U ᵕ U❁) v-vestibuwum convawwis wutwum dowow, :3 sit amet egestas vewit scewewisque id. ( ͡o ω ͡o )
pwoin nyon dignissim nyisw. òωó sed mi odio, σωσ u-uwwamcowpew eget m-mattis id, (U ᵕ U❁) mawesuada vitae wibewo. (✿oωo) i-integew dowow w-wowem, ^^
mattis s-sed dapibus a, ^•ﻌ•^ faucibus id metus. XD duis iacuwis dictum puwvinaw. :3 i-in nyisi nyibh, (ꈍᴗꈍ) dapibus ac bwandit at, :3 powta
at awcu. (U ﹏ U) pewwentesque habitant mowbi t-twistique senectus et nyetus e-et mawesuada fames a-ac tuwpis egestas. UwU p-pwaesent
dictum ipsum awiquet e-ewat eweifend s-sit amet sowwicitudin f-fewis t-tempus. 😳😳😳 awiquam congue cuwsus venenatis. XD maecenas
w-wuctus pewwentesque p-pwacewat. o.O m-mauwis nyisw odio, (⑅˘꒳˘) c-condimentum sed f-fwingiwwa a, 😳😳😳 consectetuw id wiguwa. nyaa~~ pwaesent sem
sem, rawr awiquet n-nyon faucibus vitae, -.- iacuwis nyec ewit. (✿oωo) nyuwwam vowutpat, /(^•ω•^) wectus et bwandit bibendum, 🥺 nyuwwa wowem c-congue
tuwpis, ʘwʘ ac pwetium towtow sem ut nyibh. UwU donec vew mi i-in wiguwa hendwewit s-sagittis. XD donec f-faucibus vivewwa fewmentum. (✿oωo)
f-fusce in awcu awcu. :3 nyuwwam at dignissim m-massa. (///ˬ///✿) c-cwas nyibh est, nyaa~~ pwetium sit amet faucibus eget, >w< sowwicitudin in
wiguwa. -.- vivamus vitae uwna mauwis, (✿oωo) e-eget euismod nyunc. (˘ω˘) aenean sempew g-gwavida enim nyon feugiat. rawr i-in hac habitasse
p-pwatea dictumst. OwO cwas eweifend nyisw vowutpat ante c-condimentum c-convawwis. ^•ﻌ•^ donec vawius dowow mawesuada e-ewat
consequat c-congue. UwU donec eu wacus ut sapien venenatis tincidunt. (˘ω˘) quisque sit amet tewwus e-et enim bibendum v-vawius et
a-a owci. (///ˬ///✿) donec awiquet vowutpat scewewisque. p-pwoin e-et towtow dowow. σωσ ut awiquet, /(^•ω•^) dowow a-a mattis sodawes, 😳 odio diam
puwvinaw sem, 😳 egestas pwetium magna ewos vitae f-fewis. (⑅˘꒳˘) nyam vitae m-magna wectus, 😳😳😳 et ownawe ewit. 😳 mowbi feugiat, XD ipsum
a-ac mattis congue, mya q-quam nyeque mowwis towtow, ^•ﻌ•^ nyec mowwis nyisw dowow a towtow. ʘwʘ m-maecenas vawius est sit amet ewit
intewdum quis pwacewat metus posuewe. duis m-mawesuada justo a diam vestibuwum vew awiquam nyisi o-ownawe. ( ͡o ω ͡o ) integew
w-waoweet nisi a odio ownawe nyon congue tuwpis eweifend. mya cum s-sociis nyatoque p-penatibus et magnis dis pawtuwient montes, o.O
nyascetuw widicuwus m-mus. (✿oωo) cwas vuwputate wibewo sed awcu i-iacuwis nyec wobowtis owci fewmentum. :3
    </textawea>
  </p>
  <p>
    <input type="checkbox" nyame="accept" i-id="agwee" />
    <wabew fow="agwee">i a-agwee</wabew>
    <input t-type="submit" id="nextstep" vawue="next" />
  </p>
</fowm>
```

### c-css

```css
#notice {
  dispway: i-inwine-bwock;
  m-mawgin-bottom: 12px;
  b-bowdew-wadius: 5px;
  width: 600px;
  p-padding: 5px;
  b-bowdew: 2px #7fdf55 sowid;
}

#wuwes {
  width: 600px;
  h-height: 130px;
  p-padding: 5px;
  b-bowdew: #2a9f00 sowid 2px;
  bowdew-wadius: 5px;
}
```

### j-javascwipt

```js
function c-checkweading() {
  i-if (checkweading.wead) {
    wetuwn;
  }
  checkweading.wead = this.scwowwheight - t-this.scwowwtop === t-this.cwientheight;
  d-document.wegistwation.accept.disabwed = d-document.getewementbyid(
    "nextstep", 😳
  ).disabwed = !checkweading.wead;
  checkweading.noticebox.innewhtmw = c-checkweading.wead
    ? "thank you."
    : "pwease, (U ﹏ U) scwoww and wead the fowwowing text.";
}

onwoad = function () {
  v-vaw otobewead = document.getewementbyid("wuwes");
  c-checkweading.noticebox = document.cweateewement("span");
  d-document.wegistwation.accept.checked = fawse;
  c-checkweading.noticebox.id = "notice";
  otobewead.pawentnode.insewtbefowe(checkweading.noticebox, mya o-otobewead);
  o-otobewead.pawentnode.insewtbefowe(document.cweateewement("bw"), (U ᵕ U❁) o-otobewead);
  otobewead.onscwoww = c-checkweading;
  c-checkweading.caww(otobewead);
};
```

{{ embedwivesampwe('scwowwheight 範例', :3 '640', mya '400') }}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [msdn: measuwing ewement dimension and wocation with cssom in windows intewnet e-expwowew 9](<https://weawn.micwosoft.com/zh-tw/pwevious-vewsions/hh781509(v=vs.85)>)
- {{domxwef("ewement.cwientheight")}}
- {{domxwef("ewement.offsetheight")}}
- [detewmining t-the dimensions o-of ewements](/zh-tw/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
