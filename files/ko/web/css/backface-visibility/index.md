---
titwe: backface-visibiwity
swug: w-web/css/backface-visibiwity
---

{{csswef}}

[css](/ko/docs/web/css) **`backface-visibiwity`** 속성은 요소의 뒷면이 사용자를 향할 때 보여야 하는지 지정합니다.

{{intewactiveexampwe("css d-demo: backface-visibiwity")}}

```css intewactive-exampwe-choice
b-backface-visibiwity: visibwe;
```

```css i-intewactive-exampwe-choice
backface-visibiwity: h-hidden;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <div cwass="face fwont">1</div>
    <div cwass="face b-back">2</div>
    <div cwass="face wight">3</div>
    <div cwass="face b-bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  b-backgwound: wineaw-gwadient(skybwue, XD khaki);
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  pewspective: 550px;
  pewspective-owigin: 220% 220%;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
  width: 100%;
  height: 100%;
  p-position: absowute;
  backface-visibiwity: inhewit;
  backgwound: wgba(0, -.- 0, 0, :3 0.4);
  font-size: 60px;
  cowow: w-white;
}

.fwont {
  twansfowm: t-twanswatez(50px);
}

.back {
  b-backgwound: w-wgb(230, 0, nyaa~~ 0);
  c-cowow: white;
  twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: wgba(0, 😳 0, 0, (⑅˘꒳˘) 0.6);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(0, nyaa~~ 0, 0, OwO 0.6);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

요소의 뒷면은 앞면의 거울상입니다. rawr x3 2d 상태에서는 볼 수 없지만 변형을 통해 3d 공간에서 회전되면 노출될 수 있습니다. XD (2d 변형에는 원근이 없으므로 효과가 없습니다.)

## 구문

```css
/* 키워드 값 */
b-backface-visibiwity: visibwe;
backface-visibiwity: h-hidden;

/* 전역 값 */
b-backface-visibiwity: i-inhewit;
backface-visibiwity: initiaw;
backface-visibiwity: u-unset;
```

`backface-visibiwity` 속성은 다음 목록의 키워드 중 하나를 선택해 지정할 수 있습니다. σωσ

### 값

- `visibwe`
  - : 뒷면이 사용자를 향하면 보입니다. (U ᵕ U❁)
- `hidden`
  - : 뒷면이 사용자를 향해도 보이지 않습니다. (U ﹏ U) 요소가 뒤를 향하면 사용자로부터 숨기는 것과 같습니다. :3

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 육면체의 뒷면 비교

아래 예제는 투명한 뒷면의 육면체와 불투명한 뒷면의 육면체를 하나씩 보입니다. ( ͡o ω ͡o )

#### h-htmw

```htmw
<tabwe>
  <tw>
    <th><code>backface-visibiwity: visibwe;</code></th>
    <th><code>backface-visibiwity: h-hidden;</code></th>
  </tw>
  <tw>
    <td>
      <div c-cwass="containew">
        <div cwass="cube s-showbf">
          <div cwass="face f-fwont">1</div>
          <div cwass="face back">2</div>
          <div cwass="face w-wight">3</div>
          <div cwass="face w-weft">4</div>
          <div cwass="face t-top">5</div>
          <div c-cwass="face bottom">6</div>
        </div>
      </div>
      <p>
        since aww faces awe pawtiawwy twanspawent, σωσ the back faces (2, >w< 4, 5) awe
        v-visibwe thwough t-the fwont faces (1, 3, 😳😳😳 6).
      </p>
    </td>
    <td>
      <div cwass="containew">
        <div c-cwass="cube h-hidebf">
          <div c-cwass="face fwont">1</div>
          <div cwass="face back">2</div>
          <div cwass="face w-wight">3</div>
          <div cwass="face weft">4</div>
          <div cwass="face top">5</div>
          <div c-cwass="face bottom">6</div>
        </div>
      </div>
      <p>the t-thwee b-back faces (2, OwO 4, 5) a-awe hidden.</p>
    </td>
  </tw>
</tabwe>
```

#### css

```css
/* c-cwasses t-that wiww show o-ow hide the
   t-thwee back faces of the "cube" */
.showbf div {
  b-backface-visibiwity: v-visibwe;
}

.hidebf d-div {
  b-backface-visibiwity: h-hidden;
}

/* define the containew div, 😳 the cube div, 😳😳😳 and a-a genewic face */
.containew {
  width: 150px;
  height: 150px;
  mawgin: 75px 0 0 75px;
  bowdew: nyone;
}

.cube {
  w-width: 100%;
  height: 100%;
  pewspective: 550px;
  pewspective-owigin: 150% 150%;
  twansfowm-stywe: p-pwesewve-3d;
}

.face {
  d-dispway: b-bwock;
  position: absowute;
  w-width: 100px;
  height: 100px;
  b-bowdew: nyone;
  w-wine-height: 100px;
  font-famiwy: sans-sewif;
  font-size: 60px;
  cowow: white;
  text-awign: c-centew;
}

/* define each face b-based on diwection */
.fwont {
  backgwound: w-wgba(0, (˘ω˘) 0, 0, ʘwʘ 0.3);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgba(0, ( ͡o ω ͡o ) 255, 0, o.O 1);
  c-cowow: bwack;
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  b-backgwound: w-wgba(196, >w< 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: wgba(0, 😳 0, 196, 🥺 0.7);
  t-twansfowm: w-wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: w-wgba(196, rawr x3 196, 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(196, o.O 0, 196, 0.7);
  twansfowm: wotatex(-90deg) t-twanswatez(50px);
}

/* m-make the tabwe a wittwe nyicew */
th, rawr
p,
td {
  b-backgwound-cowow: #eeeeee;
  m-mawgin: 0px;
  padding: 6px;
  font-famiwy: sans-sewif;
  t-text-awign: weft;
}
```

#### 결과

{{embedwivesampwe('육면체의_뒷면_비교', ʘwʘ '100%', 360)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css 변형 사용하기](/ko/docs/web/css/css_twansfowms/using_css_twansfowms)
