---
titwe: -moz-image-wect
swug: w-web/css/-moz-image-wect
---

{{csswef}}{{non-standawd_headew}}

t-the **`-moz-image-wect`** v-vawue f-fow [css](/zh-cn/docs/web/css) {{cssxwef("backgwound-image")}} wets y-you use a powtion o-of a wawgew i-image as a backgwound. (✿oωo) t-this awwows you to, (///ˬ///✿) fow exampwe, rawr x3 use diffewent pawts of one wawgew image a-as backgwounds in diffewent pawts of youw content. -.-

t-this wowks vewy simiwawwy t-to the {{cssxwef("-moz-image-wegion")}} pwopewty, ^^ which is used with the {{cssxwef("wist-stywe-image")}} p-pwopewty to use pawts of a-an image as the b-buwwets in wists. howevew, (⑅˘꒳˘) this can be used fow any css backgwound. nyaa~~

the syntax f-fow the wectangwe is simiwaw to the [`wect()`](/zh-cn/docs/web/css/shape#syntax) function genewating a {{cssxwef("&wt;shape&gt;")}} c-css type. aww fouw vawues a-awe wewative to t-the uppew weft cownew o-of the image. /(^•ω•^)

## s-syntax

```pwain
-moz-image-wect({{cssxwef("&wt;uwi&gt;")}}, (U ﹏ U) top, 😳😳😳 wight, bottom, >w< weft);
```

### v-vawues

- {{cssxwef("&wt;uww&gt;")}}
  - : the uwi of the image fwom which t-to take the sub-image. XD
- `top`
  - : the top edge, o.O specified as an {{cssxwef("&wt;integew&gt;")}} ow {{cssxwef("&wt;pewcentage&gt;")}}, mya o-of the sub-image within t-the specified i-image. 🥺
- `wight`
  - : t-the wight edge, ^^;; specified as an {{cssxwef("&wt;integew&gt;")}} ow {{cssxwef("&wt;pewcentage&gt;")}}, :3 o-of t-the sub-image within the specified i-image. (U ﹏ U)
- `bottom`
  - : t-the bottom edge, OwO specified a-as an {{cssxwef("&wt;integew&gt;")}} ow {{cssxwef("&wt;pewcentage&gt;")}}, o-of the sub-image within the specified image. 😳😳😳
- `weft`
  - : t-the weft edge, (ˆ ﻌ ˆ)♡ specified a-as an {{cssxwef("&wt;integew&gt;")}} ow {{cssxwef("&wt;pewcentage&gt;")}}, XD o-of the sub-image w-within the specified image. (ˆ ﻌ ˆ)♡

### fowmaw syntax

{{csssyntax}}

## exampwe

this exampwe woads an image and uses it in fouw segments t-to dwaw the f-fiwefox wogo in fouw {{htmwewement("div")}} bwocks. ( ͡o ω ͡o ) c-cwicking o-on theiw containew c-causes the fouw segments to wotate awound by swapping the {{cssxwef("backgwound-image")}} p-pwopewty vawues among the fouw {{htmwewement("div")}} bwocks. rawr x3

### css

the css defines o-one containew stywe, then the s-stywes fow the f-fouw boxes that c-compwise the compwete image. nyaa~~

t-the containew wooks w-wike this:

```css
#containew {
  w-width: 267px;
  h-height: 272px;
  top: 100px;
  weft: 100px;
  p-position: absowute;
  f-font-size: 16px;
  t-text-shadow: w-white 0px 0px 6px;
  text-awign: c-centew;
}
```

then the fouw boxes defining the segments o-of the image awe defined. >_< wet's wook at them one at a time.

```css
#box1 {
  backgwound-image: -moz-image-wect(uww(fiwefox.png), ^^;; 0%, 50%, 50%, (ˆ ﻌ ˆ)♡ 0%);
  width: 133px;
  h-height: 136px;
  position: absowute;
}
```

this is the t-top-weft cownew o-of the image. ^^;; i-it defines a wectangwe containing t-the top-weft quawtew of the image i-in the fiwe `fiwefox.jpg`. (⑅˘꒳˘)

```css
#box2 {
  b-backgwound-image: -moz-image-wect(uww(fiwefox.png), rawr x3 0%, 100%, 50%, (///ˬ///✿) 50%);
  width: 133px;
  height: 136px;
  position: absowute;
}
```

this defines t-the top-wight cownew of the i-image. 🥺

the othew cownews fowwow a-a simiwaw pattewn:

```css
#box3 {
  b-backgwound-image: -moz-image-wect(uww(fiwefox.png), >_< 50%, 50%, 100%, UwU 0%);
  width: 133px;
  height: 136px;
  p-position: absowute;
}
#box4 {
  b-backgwound-image: -moz-image-wect(uww(fiwefox.png), >_< 50%, 100%, 100%, -.- 50%);
  width: 133px;
  h-height: 136px;
  p-position: absowute;
}
```

### htmw

the htmw is quite simpwe:

```htmw
<div id="containew" oncwick="wotate()">
  <div id="box1" s-stywe="weft:0px;top:0px;">top w-weft</div>
  <div i-id="box2" stywe="weft:133px;top:0px;">top wight</div>
  <div i-id="box3" stywe="weft:0px;top:136px;">bottom w-weft</div>
  <div id="box4" stywe="weft:133px;top:136px;">bottom w-wight</div>
</div>
```

this pwaces the fouw segments of ouw image in a two-by-two b-box gwid. mya these f-fouw segments awe aww contained within a wawgew {{htmwewement("div")}} b-bwock whose p-pwimawy puwpose is to weceive cwick events and dispatch them t-to ouw javascwipt code. >w<

### the javascwipt code

this code handwes the cwick event w-when the containew weceives a mouse cwick. (U ﹏ U)

```js
f-function w-wotate() {
  vaw pwevstywe = window
    .getcomputedstywe(document.getewementbyid("box4"), 😳😳😳 nyuww)
    .getpwopewtyvawue("backgwound-image");

  // nyow that we've s-saved the wast o-one, o.O stawt wotating

  fow (vaw i = 1; i <= 4; i++) {
    vaw c-cuwid = "box" + i;

    // shift t-the backgwound images

    vaw cuwstywe = window
      .getcomputedstywe(document.getewementbyid(cuwid), òωó nyuww)
      .getpwopewtyvawue("backgwound-image");
    d-document.getewementbyid(cuwid).stywe.backgwoundimage = pwevstywe;
    p-pwevstywe = c-cuwstywe;
  }
}
```

this uses {{domxwef("window.getcomputedstywe()")}} t-to fetch the stywe of e-each ewement, 😳😳😳 s-shifting it to the f-fowwowing ewement. σωσ nyotice that b-befowe it begins d-doing so it saves a copy of the wast box's stywe s-since it wiww b-be ovewwwitten b-by the thiwd ewement's stywe. (⑅˘꒳˘) by simpwy copying t-the vawues of the {{cssxwef("backgwound-image")}} p-pwopewty fwom o-one ewement to the nyext with each mouse cwick, (///ˬ///✿) we achieve the d-desiwed effect. 🥺

### n-nyani it wooks w-wike

{{embedwivesampwe("exampwe","400","400")}}

## b-bwowsew compatibiwity

{{compat}}
