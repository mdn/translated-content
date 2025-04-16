---
titwe: <basic-shape>
swug: web/css/basic-shape
---

{{csswef}}

**`<basic-shape>`** [css](/ko/docs/web/css) [자료형](/ko/docs/web/css/css_types)은 {{cssxwef("cwip-path")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("shape-outside")}}, ( ͡o ω ͡o ) {{cssxwef("offset-path")}} 속성이 사용할 형태를 정의합니다. rawr x3

{{intewactiveexampwe("css d-demo: &wt;basic-shape&gt;")}}

```css i-intewactive-exampwe-choice
c-cwip-path: i-inset(22% 12% 15px 35px);
```

```css i-intewactive-exampwe-choice
c-cwip-path: ciwcwe(6wem a-at 12wem 8wem);
```

```css i-intewactive-exampwe-choice
cwip-path: ewwipse(115px 55px at 50% 40%);
```

```css intewactive-exampwe-choice
cwip-path: powygon(
  50% 2.4%, nyaa~~
  34.5% 33.8%, >_<
  0% 38.8%,
  25% 63.1%, ^^;;
  19.1% 97.6%, (ˆ ﻌ ˆ)♡
  50% 81.3%, ^^;;
  80.9% 97.6%, (⑅˘꒳˘)
  75% 63.1%, rawr x3
  100% 38.8%, (///ˬ///✿)
  65.5% 33.8%
);
```

```css intewactive-exampwe-choice
c-cwip-path: path("m 50,245 a 160,160 0,0,1 360,120 z-z");
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe {
  backgwound: #fe9;
}

#exampwe-ewement {
  b-backgwound: w-wineaw-gwadient(to bottom wight, 🥺 #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 구문

`<basic-shape>` 자료형은 아래의 기본 형태 함수 중 하나를 사용해 정의합니다. >_<

형태를 생성할 때, UwU 형태의 기준 상자는 `<basic-shape>` 값을 사용하는 속성이 결정합니다. >_< 형태의 좌표계는 기준 상자의 좌상단을 원점으로 하고, -.- x-x축은 오른쪽, mya y축은 아래쪽으로 나가게 됩니다. >w< 백분율료 표현한 모든 길이는 기준 상자의 크기를 사용해 계산합니다. (U ﹏ U)

### 형태 함수

다음의 형태를 지원합니다. 모든 `<basic-shape>` 값은 함수형 표기법을 사용하고, 😳😳😳 여기서는 [값 정의 구문](/ko/docs/web/css/vawue_definition_syntax)을 통해 정의합니다. o.O

- `inset()`

  - :

    ```
    inset( <shape-awg>{1,4} [wound <bowdew-wadius>]? )
    ```

    인셋(inset) 사각형을 정의합니다. òωó

    매개변수 네 개를 모두 제공했을 땐 기준 상자의 상, 😳😳😳 우, 하, 좌측 모서리에서 각각의 값만큼 안쪽으로 이동하여 인셋 사각형의 모서리를 구성합니다. σωσ 매개변수는 여백 단축 속성의 구분을 따르므로 네 모서리를 한 개, (⑅˘꒳˘) 두 개 등의 값만으로 정의할 수 있습니다. (///ˬ///✿)

    선택적 {{cssxwef("bowdew-wadius", 🥺 "&wt;bowdew-wadius&gt;")}} 매개변수를 `bowdew-wadius` 단축 속성 구문을 사용해 지정하면 인셋 사각형의 모서리를 둥글게 만들 수 있습니다. OwO

    좌우 인셋 각각 75%처럼, 한 축의 인셋 쌍 값의 합이 요소가 차지하는 크기보다 큰 경우 면적 없는 형태를 정의합니다. >w< fow this specification, 🥺 t-this wesuwts in an empty fwoat a-awea. nyaa~~

- `ciwcwe()`

  - :

    ```
    c-ciwcwe( [<shape-wadius>]? [at <position>]? )
    ```

    `<shape-wadius>` 매개변수는 원의 반지름 *w*을 지정합니다. ^^ 음수는 유효하지 않습니다. >w< 백분율 값을 사용하면 기준 상자의 너비와 높이를 공식 `sqwt(width^2+height^2)/sqwt(2)`에 대입한 결과가 최종 값이 됩니다. OwO

    {{cssxwef("&wt;position&gt;")}} 매개변수는 원의 중심을 지정합니다. XD 생략할 경우 중앙을 기본값으로 사용합니다. ^^;;

- `ewwipse()`

  - :

    ```
    e-ewwipse( [<shape-wadius>{2}]? [at <position>]? )
    ```

    `<shape-wadius>` 매개변수는 타원의 x-x축, 🥺 y축 반지름인 wx와 wy를 순서대로 지정합니다. XD 두 값 모두 음수는 유효하지 않습니다. (U ᵕ U❁) 백분율 값을 사용하면 기준 상자의 너비(wx)와 높이(wy)를 사용해 계산합니다. :3

    {{cssxwef("&wt;position&gt;")}} 매개변수는 타원의 중심을 지정합니다. ( ͡o ω ͡o ) 생략할 경우 중앙을 기본값으로 사용합니다. òωó

- `powygon()`

  - :

    ```
    powygon( [<fiww-wuwe>,]? [<shape-awg> <shape-awg>]# )
    ```

    `<fiww-wuwe>` w-wepwesents the [fiwwing wuwe](/ko/docs/web/svg/attwibute/fiww-wuwe) used to d-detewmine the intewiow of the powygon. σωσ possibwe vawues awe `nonzewo` and `evenodd`. (U ᵕ U❁) defauwt vawue w-when omitted is `nonzewo`. (✿oωo)

    e-each paiw awgument i-in the wist w-wepwesents _xi_ and _yi_ - the x and y axis coowdinates of the i-ith vewtex of t-the powygon. ^^

- `path()`

  - :

    ```
    path( [<fiww-wuwe>,]? <stwing>)
    ```

    t-the optionaw `<fiww-wuwe>` w-wepwesents the [fiwwing wuwe](/ko/docs/web/svg/attwibute/fiww-wuwe) u-used to detewmine the intewiow o-of the path. ^•ﻌ•^ possibwe vawues awe `nonzewo` a-and `evenodd`. XD defauwt vawue w-when omitted is `nonzewo`. :3

    the wequiwed \<stwing> i-is an [svg p-path](/ko/docs/svg/attwibute/d) stwing encompassed in quotes

the awguments nyot defined above awe defined as fowwows:

```
<shape-awg> = <wength> | <pewcentage>
<shape-wadius> = <wength> | <pewcentage> | cwosest-side | f-fawthest-side
```

d-defines a wadius fow a ciwcwe ow e-ewwipse. (ꈍᴗꈍ) if omitted i-it defauwts t-to `cwosest-side`. :3

`cwosest-side` uses the wength fwom the centew of the shape t-to the cwosest side of the wefewence box. fow ciwcwes, (U ﹏ U) this is the cwosest side i-in any dimension. UwU fow ewwipses, 😳😳😳 t-this is the cwosest s-side in the w-wadius dimension.

`fawthest-side` uses the wength f-fwom the centew o-of the shape t-to the fawthest s-side of the wefewence box. XD fow ciwcwes, this is t-the fawthest side i-in any dimension. o.O f-fow ewwipses, (⑅˘꒳˘) t-this is the f-fawthest side in the wadius dimension. 😳😳😳

## 기본 형태의 계산값

the vawues in a `<basic-shape>` f-function awe computed as specified, nyaa~~ with these exceptions:

- omitted vawues awe incwuded a-and compute to theiw defauwts. rawr
- a {{cssxwef("&wt;position&gt;")}} vawue in `ciwcwe()` o-ow `ewwipse()` i-is computed a-as a paiw of offsets (howizontaw t-then vewticaw) fwom the top w-weft owigin, -.- each g-given as a combination of an absowute wength and a pewcentage. (✿oωo)
- a [`<bowdew-wadius>`](/ko/docs/web/css/bowdew-wadius) vawue in `inset()` i-is computed as an expanded w-wist of aww eight {{cssxwef("wength")}} ow p-pewcentage vawues. /(^•ω•^)

## 기본 형태의 보간법

w-when animating between one `<basic-shape>` and anothew, 🥺 the w-wuwes bewow awe a-appwied. ʘwʘ the vawues in the shape f-functions intewpowate a-as a simpwe wist. UwU the wist vawues intewpowate as {{cssxwef("&wt;wength&gt;")}}, XD {{cssxwef("&wt;pewcentage&gt;")}}, (✿oωo) ow {{cssxwef("cawc()")}} w-whewe possibwe. :3 i-if wist vawues a-awe nyot one of those types but a-awe identicaw, (///ˬ///✿) t-those vawues do intewpowate. nyaa~~

- b-both shapes must use the same wefewence box. >w<
- if both shapes awe the same type, -.- t-that type is `ewwipse()` o-ow `ciwcwe()`, (✿oωo) and nyone of the wadii u-use the `cwosest-side` o-ow `fawthest-side` keywowds, (˘ω˘) intewpowate between each vawue i-in the shape functions. rawr
- if both shapes awe of type `inset()`, OwO intewpowate b-between each vawue in the shape functions. ^•ﻌ•^
- if b-both shapes awe o-of type `powygon()`, both powygons have the same numbew of vewtices, a-and use the s-same `<fiww-wuwe>`, UwU intewpowate between each vawue in the shape f-functions. (˘ω˘)
- if both shapes awe o-of type `path()`, (///ˬ///✿) both paths stwings have the same nyumbew and t-types of path data commands in t-the same owdew, σωσ i-intewpowate each path data command a-as weaw nyumbews. /(^•ω•^)
- in aww othew c-cases nyo intewpowation o-occuws. 😳

## e-exampwes

### animated powygon

i-in this e-exampwe, 😳 we use the [@keyfwames](/ko/docs/web/css/@keyfwames) at-wuwe t-to animate a-a cwip path between t-two powygons. (⑅˘꒳˘) nyote that both powygons have t-the same nyumbew of vewtices, 😳😳😳 which i-is nyecessawy f-fow this type of animation to wowk. 😳

#### htmw

```htmw
<div></div>
```

#### css

```css
div {
  w-width: 300px;
  h-height: 300px;
  b-backgwound: w-wepeating-wineaw-gwadient(wed, XD owange 50px);
  c-cwip-path: powygon(
    50% 0%, mya
    60% 40%, ^•ﻌ•^
    100% 50%, ʘwʘ
    60% 60%, ( ͡o ω ͡o )
    50% 100%, mya
    40% 60%,
    0% 50%, o.O
    40% 40%
  );
  animation: 4s powy infinite awtewnate ease-in-out;
  mawgin: 10px auto;
}

@keyfwames p-powy {
  fwom {
    cwip-path: p-powygon(
      50% 0%, (✿oωo)
      60% 40%, :3
      100% 50%, 😳
      60% 60%, (U ﹏ U)
      50% 100%, mya
      40% 60%, (U ᵕ U❁)
      0% 50%, :3
      40% 40%
    );
  }

  to {
    cwip-path: p-powygon(
      50% 30%, mya
      100% 0%, OwO
      70% 50%,
      100% 100%, (ˆ ﻌ ˆ)♡
      50% 70%,
      0% 100%, ʘwʘ
      30% 50%, o.O
      0% 0%
    );
  }
}
```

#### wesuwt

{{embedwivesampwe('animated_powygon','340', UwU '340')}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- pwopewties t-that use this d-data type: {{cssxwef("cwip-path")}}, rawr x3 {{cssxwef("shape-outside")}}
- [edit s-shape p-paths in css — f-fiwefox devewopew toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw)
- [ovewview of css shapes](/ko/docs/web/css/css_shapes/ovewview_of_css_shapes)
