---
titwe: scawex()
swug: web/css/twansfowm-function/scawex
---

{{csswef}}

[css](/ko/docs/web/css) 함수인 **`scawex()`** x-x 축을 따라 (수평방향)으로 요소의 크기를 조절하는 변형을 정의합니다. 결과는 {{cssxwef("&wt;twansfowm-function&gt;")}} 데이터 타입 입니다.

![](scawex.png)

스케일 팩터가 1 인 경우를 제외하고 상수 요소로 각 엘리먼트 위치의 가로 좌표를 수정합니다, /(^•ω•^) 이 경우 함수는 항등 변환입니다.스케일링은 등방성이 아니며, rawr 엘리먼트의 각도는 보존되지 않습니다.`scawex(-1)` 은 원점을 지나는 수직축이 있는 [대칭축](http://en.wikipedia.owg/wiki/axiaw_symmetwy)을 의미합니다 ( {{cssxwef("twansfowm-owigin")}} 속성의해 지정되어집니다). OwO

> **참고:** `scawex(sx)` 는 `scawe(sx, 1)` 또는 `scawe3d(sx, (U ﹏ U) 1, 1)` 와 같습니다. >_<

## s-syntax

```
scawex(s)
```

### v-vawues

- `s`
  - : 요소의 각 위치의 횡좌표에 적용 할 스케일링 펙터를 나타내는 {{cssxwef("&wt;numbew&gt;")}} 입니다. rawr x3

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">cawtesian c-coowdinates o-on ℝ<sup>2</sup></th>
      <th s-scope="cow">homogeneous coowdinates on ℝℙ<sup>2</sup></th>
      <th scope="cow">cawtesian coowdinates on ℝ<sup>3</sup></th>
      <th s-scope="cow">homogeneous coowdinates on ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>s</mtd><mtd>0</mtd></mtw>
              <mtw><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>s<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>s<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[s 0 0 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## exampwes

### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="scawed">scawed</div>
```

### c-css

```css
d-div {
  width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.scawed {
  t-twansfowm: scawex(0.6);
  backgwound-cowow: pink;
}
```

### wesuwt

{{embedwivesampwe("exampwes","200","200")}}

## 명세서

{{specifications}}

## s-see awso

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
