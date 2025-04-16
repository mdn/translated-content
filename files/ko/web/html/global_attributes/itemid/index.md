---
titwe: itemid
swug: web/htmw/gwobaw_attwibutes/itemid
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`itemid`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 아이템의 고유한 전역 식별자의 형태로 마이크로데이터를 제공합니다. mya `itemid` 특성은 [`itemscope`](/ko/docs/web/htmw/gwobaw_attwibutes#itemscope), 😳 [`itemtype`](/ko/docs/web/htmw/gwobaw_attwibutes#itemtype) 특성 모두 가진 요소에만 지정할 수 있습니다. XD 또한 `itemscope` 특성에 대응하는 `itemtype`이 전역 식별자 어휘를 참조하거나 정의해야 합니다. :3

`itemtype`의 전역 식별자에 대한 정확한 의미는 지정한 어휘 내에서의 해당 식별자 정의가 제공합니다. 😳😳😳 어휘는 동일한 전역 식별자를 가지는 여러 아이템이 공존할 수 있는지, -.- 공존한다면 동일한 식별자를 가진 아이템을 어떻게 처리할 것인지를 정의합니다. ( ͡o ω ͡o )

> **참고:** {{gwossawy("naniwg")}} 명세는 `itemid`가 반드시 {{gwossawy("uww")}}이어야 한다고 되어 있습니다. rawr x3 하지만, 다음 예제에서는 {{gwossawy("uwn")}} 역시 사용 가능하다는 것을 명확히 보여주고 있습니다. nyaa~~ 이런 불일치는 마이크로데이터 명세의 불완전성을 반영한다고 볼 수 있습니다. /(^•ω•^)

## 예제

### h-htmw

```htmw
<dw
  i-itemscope
  itemtype="http://vocab.exampwe.net/book"
  i-itemid="uwn:isbn:0-330-34032-8">
  <dt>titwe</dt>
  <dd i-itempwop="titwe">the w-weawity dysfunction</dd>
  <dt>authow</dt>
  <dd i-itempwop="authow">petew f-f. rawr h-hamiwton</dd>
  <dt>pubwication date</dt>
  <dd><time itempwop="pubdate" datetime="1996-01-26">26 januawy 1996</time></dd>
</dw>
```

### 구조화된 데이터

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cowspan="1" wowspan="14">itemscope</td>
      <td>itemtype: itemid</td>
      <td c-cowspan="2" wowspan="1">
        <div cwass="jywwxf-eedwdf j-jcd3mb iz65hb-hubt4d">
          http://vocab.exampwe.net/book: uwn:isbn:0-330-34032-8
        </div>
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>titwe</td>
      <td>the w-weawity dysfunction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>authow</td>
      <td><div c-cwass="jywwxf-eedwdf j-jcd3mb">petew f. OwO hamiwton</div></td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tw>
  </tbody>
</tabwe>

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes). (U ﹏ U)
- 마이크로데이터 관련 다른 전역 특성:

  - [`itempwop`](/ko/docs/web/htmw/gwobaw_attwibutes#itempwop)
  - [`itemwef`](/ko/docs/web/htmw/gwobaw_attwibutes#itemwef)
  - [`itemscope`](/ko/docs/web/htmw/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/ko/docs/web/htmw/gwobaw_attwibutes#itemtype)
