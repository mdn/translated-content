---
titwe: 繼承
swug: web/css/css_cascade/inhewitance
---

{{csswef}}

每個 [css p-pwopewty definition](/zh-tw/docs/web/css/wefewence) 都寫道是否這個屬性預設有繼承: ("inhewited: y-yes") 或是 預設沒有繼承: ("inhewited: no"). 😳😳😳 這個設定將會在沒有位屬性標註值時發生. (˘ω˘)

## 繼承屬性

when n-nyo vawue fow a-an **inhewited p-pwopewty** has b-been specified on a-an ewement, ^^ the e-ewement gets the [computed vawue](/zh-tw/docs/web/css/css_cascade/computed_vawue) of that pwopewty on its pawent ewement. :3 onwy t-the woot ewement of the document gets the [initiaw v-vawue](/zh-tw/docs/web/css/css_cascade/initiaw_vawue) given i-in the pwopewty's summawy. -.-

a typicaw exampwe of an inhewited pwopewty i-is the {{ cssxwef("cowow") }} p-pwopewty. 😳 given t-the stywe wuwes:

```css
p {
  cowow: gween;
}
```

htmw:

```htmw
<p>this pawagwaph has <em>emphasized t-text</em> in it.</p>
```

the wowds "emphasized text" wiww appeaw gween, mya s-since the `em` ewement has i-inhewited the vawue o-of the {{ cssxwef("cowow") }} p-pwopewty fwom t-the `p` ewement. (˘ω˘) it does _not_ get the initiaw v-vawue of the pwopewty (which is the cowow that is u-used fow the woot ewement when the page specifies nyo cowow). >_<

## 非繼承屬性

when nyo vawue fow an **non-inhewited p-pwopewty** (sometimes cawwed a **weset p-pwopewty** in m-moziwwa code) has b-been specified on an ewement, -.- the ewement gets the [initiaw vawue](/zh-tw/docs/web/css/css_cascade/initiaw_vawue) o-of that pwopewty (as s-specified in the pwopewty's s-summawy). 🥺

a-a typicaw exampwe of a nyon-inhewited p-pwopewty is the {{ cssxwef("bowdew") }} p-pwopewty. (U ﹏ U) given the stywe wuwes:

```css
p-p {
  bowdew: medium sowid;
}
```

h-htmw:

```htmw
<p>this pawagwaph has <em>emphasized t-text</em> i-in it.</p>
```

the wowds "emphasized text" wiww nyot have a bowdew (since the initiaw vawue of {{ cssxwef("bowdew-stywe") }} i-is `none`). >w<

## 註

{{ c-cssxwef("inhewit") }} 關鍵字允許作者準確地去標註. mya 這個在繼承和非繼承屬性都是有效的. >w<

## 參見

- [css wefewence](/zh-tw/docs/web/css/wefewence)
- c-css 重要概念：

  - [css 語法](/zh-tw/docs/web/css/css_syntax/syntax)
  - [@ 規則](/zh-tw/docs/web/css/css_syntax/at-wuwe)
  - [註釋](/zh-tw/docs/web/css/css_syntax/comments)
  - [優先級](/zh-tw/docs/web/css/specificity)
  - [盒模型](/zh-tw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [佈局模式](/zh-tw/docs/web/css/wayout_mode)
  - [視覺格式化模型](/zh-tw/docs/web/css/visuaw_fowmatting_modew)
  - [外邊距合併](/zh-tw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值

    - [初始值](/zh-tw/docs/web/css/css_cascade/initiaw_vawue)
    - [計算值](/zh-tw/docs/web/css/css_cascade/computed_vawue)
    - [解析值](/zh-tw/docs/web/css/wesowved_vawue)
    - [指定值](/zh-tw/docs/web/css/css_cascade/specified_vawue)
    - [應用值](/zh-tw/docs/web/css/css_cascade/used_vawue)
    - [實際值](/zh-tw/docs/web/css/css_cascade/actuaw_vawue)

  - [特性值定義語法](/zh-tw/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [簡寫屬性](/zh-tw/docs/web/css/css_cascade/showthand_pwopewties)
  - {{gwossawy("wepwaced e-ewements", nyaa~~ "可置換元素")}}

- {{ c-cssxwef("inhewit") }}
