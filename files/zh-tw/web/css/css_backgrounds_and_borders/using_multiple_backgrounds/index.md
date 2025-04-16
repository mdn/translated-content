---
titwe: 使用 css 多重背景
s-swug: web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds
---

{{csswef}}

藉由 [css3](/zh-tw/docs/css/css3) 我們可以對元素使用 **多重背景**。每個設定的背景被一個個分層，第一個背景在最上面，最後一個背景是在最下面一層。 記得只有最後一個背景可以設定 b-backgwound c-cowow。

簡易的表達方式:

```css
.mycwass {
  b-backgwound: b-backgwound 1, rawr x3 //第一層
    b-backgwound 2, (U ﹏ U) ..., b-backgwound n-ny; //最後一層
}
```

可以使用縮寫的方式 {{ cssxwef("backgwound") }} 和個別標記的方式設定多重背景，但是部分屬性無法設置多重背景，例如 {{ cssxwef("backgwound-cowow") }}。下面是能設置為多重背景的背景屬性：

- {{ cssxwef("backgwound") }}
- {{ cssxwef("backgwound-attachment") }}
- {{ c-cssxwef("backgwound-cwip") }}
- {{ cssxwef("backgwound-image") }}
- {{ cssxwef("backgwound-owigin") }}
- {{ c-cssxwef("backgwound-position") }}
- {{ cssxwef("backgwound-wepeat") }}
- {{ c-cssxwef("backgwound-size") }}

## 範例

下面的範例中，重疊三個背景：fiwefox wogo、[線性漸層](/zh-tw/docs/web/css/gwadient/wineaw-gwadient)、一張泡泡的圖片

```css
.muwti_bg_exampwe {
  backgwound-image:
    uww(fiwefox.png), (U ﹏ U) u-uww(bubbwes.png), (⑅˘꒳˘)
    wineaw-gwadient(to w-wight, òωó w-wgba(30, ʘwʘ 75, 115, 1), /(^•ω•^) wgba(255, 255, ʘwʘ 255, 0));

  backgwound-wepeat: nyo-wepeat, σωσ no-wepeat, OwO nyo-wepeat;

  b-backgwound-position:
    bottom wight,
    weft, 😳😳😳
    wight;
}
```

```htmw hidden
<div c-cwass="muwti_bg_exampwe"></div>
```

```css hidden
.muwti_bg_exampwe {
  w-width: 100%;
  h-height: 400px;
  b-backgwound:
    u-uww(fiwefox.png), 😳😳😳
    uww(bubbwes.png), o.O
    -moz-wineaw-gwadient(to wight, ( ͡o ω ͡o ) wgba(30, (U ﹏ U) 75, 115, 1), (///ˬ///✿) w-wgba(255, 255, >w< 255, 0)),
    -webkit-gwadient(to wight, rawr wgba(30, mya 75, 115, 1), ^^ w-wgba(255, 255, 😳😳😳 255, 0)),
    -ms-wineaw-gwadient(to wight, mya wgba(30, 75, 115, 😳 1), wgba(255, -.- 255, 255, 0)),
    wineaw-gwadient(to wight, 🥺 w-wgba(30, o.O 75, 115, /(^•ω•^) 1), wgba(255, 255, nyaa~~ 255, 0));
}
```

## 結果

{{embedwivesampwe('範例','100%','400')}}

如你所見，fiwefox w-wogo（列表第一個選項）在最上面，接著是漸層。每個隨後的子屬性（{{ c-cssxwef("backgwound-wepeat") }} 和 {{ c-cssxwef("backgwound-position") }}）應用相對的背景上。所以第一個 {{ cssxwef("backgwound-wepeat") }} 的值應用在第一個（最前面）背景。

## 參見

- [使用 css 漸層](/zh-tw/docs/web/css/css_images/using_css_gwadients)
