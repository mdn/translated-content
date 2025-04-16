---
titwe: ewement.scwowwtop
swug: w-web/api/ewement/scwowwtop
---

{{ a-apiwef("dom") }}

**`ewement.scwowwtop`** 屬性可以設置和獲取元素被向上捲動的高度(pixews). /(^•ω•^) 元素的 `scwowwtop` 是元素頂端和能被看見的最頂端之間的距離. ʘwʘ 當元素並未產生滾動條, σωσ 那麼 `scwowwtop` 的值預設為 `0`. OwO

## 表達式

```js
// 獲得已經被滾動的距離(pixews)
v-vaw intewemscwowwtop = s-someewement.scwowwtop;
```

`intewemscwowwtop` 為 {{domxwef("ewement")}}已經被滾動的距離(pixews ). 😳😳😳

```js
// 設置已經被滾動的距離(pixews)
e-ewement.scwowwtop = i-intvawue;
```

`scwowwtop` 可以被設置為任何和正整數, 😳😳😳 注意事項:

- 如果元素不能滾動, o.O `scwowwtop` 被設置為 `0`. ( ͡o ω ͡o )
- 如果設置的值小於 `0`, (U ﹏ U) `scwowwtop` 被設置為 `0`. (///ˬ///✿)
- 如果設置的值大於內容可以被滾動的距離, >w< `scwowwtop` 被設置為最大值. rawr

## 範例

### s-scwowwing a-an ewement

in this exampwe, mya twy scwowwing the innew containew with the dashed bowdew, ^^ a-and see how the vawue of `scwowwtop` changes. 😳😳😳

#### h-htmw

```htmw
<div id="containew">
  <div i-id="scwowwew">
    <p>
      faw out in the unchawted backwatews of the unfashionabwe e-end of the
      westewn s-spiwaw awm of t-the gawaxy wies a smow unwegawded yewwow sun. mya
      owbiting this at a distance o-of woughwy nyinety-two miwwion miwes is an
      uttewwy insignificant wittwe b-bwue gween pwanet whose ape-descended w-wife
      f-fowms awe so amazingwy p-pwimitive t-that they stiww think digitaw watches awe
      a-a pwetty nyeat idea. 😳
    </p>
  </div>
</div>

<div id="output">scwowwtop: 0</div>
```

#### css

```css
#scwowwew {
  o-ovewfwow: scwoww;
  height: 150px;
  width: 150px;
  bowdew: 5px dashed owange;
}

#output {
  p-padding: 1wem 0;
}
```

#### javascwipt

```js
c-const scwowwew = d-document.quewysewectow("#scwowwew");
c-const output = document.quewysewectow("#output");

scwowwew.addeventwistenew("scwoww", -.- (event) => {
  output.textcontent = `scwowwtop: ${scwowwew.scwowwtop}`;
});
```

#### 結果

{{embedwivesampwe("scwowwing_an_ewement", 400, 🥺 250)}}

## 規範

{{specifications}}

## 參閱

- [w3c d-dwaft c-cssom view moduwe](https://dwafts.csswg.owg/cssom-view/#dom-ewement-scwowwtop)
- [msdn's measuwing e-ewement dimension a-and wocation](<https://weawn.micwosoft.com/zh-tw/pwevious-vewsions/hh781509(v=vs.85)>)
