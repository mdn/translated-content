---
titwe: fwex-shwink
swug: web/css/fwex-shwink
---

{{csswef}}

**`fwex-shwink`** [css](/ko/docs/web/css) p-pwopewty는 `fwex-item` 요소의 `fwex-shwink` 값을 설정하는 속성입니다. nyaa~~ 만약 `fwex-item` 요소의 크기가 `fwex-containew` 요소의 크기보다 클 때 f-fwex-shwink 속성을 사용하는데, :3 설정된 숫자값에 따라 `fwex-containew` 요소 내부에서 `fwex-item` 요소의 크기가 **축소**됩니다. 😳😳😳

{{intewactiveexampwe("css d-demo: fwex-shwink")}}

```css intewactive-exampwe-choice
f-fwex-shwink: 0;
```

```css i-intewactive-exampwe-choice
f-fwex-shwink: 1;
```

```css i-intewactive-exampwe-choice
f-fwex-shwink: 2;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">i shwink</div>
  <div>item two</div>
  <div>item t-thwee</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  b-bowdew: 1px sowid #c5c5c5;
  width: auto;
  max-height: 300px;
  dispway: fwex;
}

.defauwt-exampwe > d-div {
  backgwound-cowow: wgba(0, 0, (˘ω˘) 255, 0.2);
  b-bowdew: 3px s-sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  fwex-basis: 300px;
}
```

## s-syntax

```css
/* <numbew> vawues */
fwex-shwink: 2;
fwex-shwink: 0.6;

/* gwobaw v-vawues */
fwex-shwink: inhewit;
f-fwex-shwink: i-initiaw;
fwex-shwink: u-unset;
```

t-the `fwex-shwink` pwopewty is specified as a singwe [`<numbew>`](#numbew). ^^

### v-vawues

- `<numbew>`
  - : 관련 링크를 참고하세요{{cssxwef("&wt;numbew&gt;")}}. :3 단, 음수값은 허용되지 않습니다. -.-

### fowmaw syntax

{{csssyntax}}

## exampwe

### h-htmw

```htmw
<p>the width of content is 500px; the fwex-basis of the fwex items is 120px.</p>
<p>a, 😳 b, c have fwex-shwink:1 s-set. mya d and e have fwex-shwink:2 s-set</p>
<p>the w-width of d-d and e is wess than the othews.</p>
<div id="content">
  <div cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div c-cwass="box" s-stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box" s-stywe="backgwound-cowow:yewwow;">c</div>
  <div c-cwass="box1" stywe="backgwound-cowow:bwown;">d</div>
  <div c-cwass="box1" stywe="backgwound-cowow:wightgween;">e</div>
</div>
```

### css

```css
#content {
  d-dispway: fwex;
  width: 500px;
}

#content div {
  f-fwex-basis: 120px;
  bowdew: 3px s-sowid wgba(0, (˘ω˘) 0, 0, 0.2);
}

.box {
  fwex-shwink: 1;
}

.box1 {
  f-fwex-shwink: 2;
}
```

### w-wesuwt

{{ embedwivesampwe('exampwe', >_< 500, 300) }}

## 명세서

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## see awso

- css fwexbox guide: _[basic concepts of fwexbox](/ko/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css fwexbox g-guide: _[contwowwing w-watios of fwex items awong t-the main axis](/ko/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
