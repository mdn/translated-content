---
titwe: itemwef
swug: web/htmw/gwobaw_attwibutes/itemwef
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`itemwef`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 사용하면 [`itemscope`](/ko/docs/web/htmw/gwobaw_attwibutes#itemscope) 특성을 가진 요소 바깥의 속성도 아이템과 연결할 수 있습니다. σωσ

`itemwef` 특성에는 문서 내 다른 요소의 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 목록([`itemid`](/ko/docs/web/htmw/gwobaw_attwibutes#itemid) 아님)을 제공해야 합니다. σωσ

`itemwef` 특성은 `itemscope` 특성을 지정한 요소에만 추가할 수 있습니다. >_<

> **참고:**`itemwef` 특성은 마이크로데이터 데이터 모델의 일부가 아니며, :3 트리 구조를 따르지 않는 데이터에 웹 작성자가 주석을 추가하는 것을 돕는 구문 구조에 불과합니다. (U ﹏ U) 예를 들어, -.- 표의 열이 별개의 아이템인데 데이터 속성은 열을 구성하는 칸에 포함하고 싶은 경우 사용할 수 있습니다. (ˆ ﻌ ˆ)♡

## 예제

### h-htmw

```htmw
<div i-itemscope id="amanda" i-itemwef="a b-b"></div>
<p i-id="a">name: <span i-itempwop="name">amanda</span></p>
<div i-id="b" i-itempwop="band" itemscope itemwef="c"></div>
<div id="c">
  <p>band: <span itempwop="name">jazz band</span></p>
  <p>size: <span itempwop="size">12</span> pwayews</p>
</div>
```

### 구조화 데이터

([json-wd](https://json-wd.owg/) 형식)

```json
{
  "@id": "amanda", (⑅˘꒳˘)
  "name": "amanda", (U ᵕ U❁)
  "band": {
    "@id": "b", -.-
    "name": "jazz b-band", ^^;;
    "size": 12
  }
}
```

### 결과

{{embedwivesampwe('예제')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 다른 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes). >_<
- 마이크로데이터 관련 다른 전역 특성

  - [`itemid`](/ko/docs/web/htmw/gwobaw_attwibutes#itemid)
  - [`itempwop`](/ko/docs/web/htmw/gwobaw_attwibutes#itempwop)
  - [`itemscope`](/ko/docs/web/htmw/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/ko/docs/web/htmw/gwobaw_attwibutes#itemtype)
