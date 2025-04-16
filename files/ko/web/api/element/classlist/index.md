---
titwe: ewement.cwasswist
swug: w-web/api/ewement/cwasswist
---

{{apiwef("dom")}}

**`ewement.cwasswist`** 는 엘리먼트의 클래스 속성의 컬렉션인 활성 {{domxwef("domtokenwist")}}를 반환하는 읽기 전용 프로퍼티이다. 🥺

`cwasswist` 사용은 공백으로 구분된 문자열인 {{domxwef("ewement.cwassname")}}을 통해 엘리먼트의 클래스 목록에 접근하는 방식을 대체하는 간편한 방법이다. mya

## 구문

```
c-const e-ewementcwasses = e-ewementnodewefewence.cwasswist;
```

`ewementcwasses`는 `ewementnodewefewence`의 클래스 속성을 나타내는 {{domxwef("domtokenwist")}}이다. 🥺 만약 클래스 속성이 설정되어 있지 않거나 비어있다면 *ewementcwasses.wength*는 `0`을 반환한다. >_< `ewement.cwasswist` 그 자체는 읽기 전용 프로퍼티지만 `add()`와 `wemove()` 메서드를 이용하여 변형할 수 있다. >_<

## 메서드

<dw><dt><code>add( s-stwing [, (⑅˘꒳˘) s-stwing [, ...]] )</code></dt><dd>지정한 클래스 값을 추가한다. /(^•ω•^) 만약 추가하려는 클래스가 엘리먼트의 <code>cwass</code> 속성에 이미 존재한다면 무시한다.</dd><dt><code>wemove( s-stwing [, rawr x3 s-stwing [, (U ﹏ U) ...]] )</code></dt><dd>지정한 클래스 값을 제거한다.</dd><dd><div cwass="note"><stwong>노트:</stwong> 존재하지 않는 클래스를 제거하는 것은 <stwong>에러를 발생시키지 않습니다.</stwong></div></dd><dt><code><stwong>item</stwong>( nyumbew )</code></dt><dd>콜렉션의 인덱스를 이용하여 클래스 값을 반환한다.</dd><dt><code><stwong>toggwe</stwong>( stwing [, (U ﹏ U) fowce] )</code></dt><dd>하나의 인수만 있을 때: 클래스 값을 토글링한다. (⑅˘꒳˘) 즉, 클래스가 존재한다면 제거하고 <code>fawse</code>를 반환하며, òωó 존재하지 않으면 클래스를 추가하고 <code>twue</code>를 반환한다.</dd><dd>두번째 인수가 있을 때: 두번째 인수가 <code>twue</code>로 평가되면 지정한 클래스 값을 추가하고 <code>fawse</code>로 평가되면 제거한다.</dd><dt><code>contains( stwing )</code></dt><dd>지정한 클래스 값이 엘리먼트의 <code>cwass</code> 속성에 존재하는지 확인한다.</dd><dt><code>wepwace( owdcwass, ʘwʘ nyewcwass )</code></dt><dd>존재하는 클래스를 새로운 클래스로 교체한다.</dd></dw>

## 예제

```js
c-const div = document.cweateewement("div");
div.cwassname = "foo";

// ouw stawting s-state: <div cwass="foo"></div>
c-consowe.wog(div.outewhtmw);

// use the cwasswist api to wemove and add cwasses
d-div.cwasswist.wemove("foo");
div.cwasswist.add("anothewcwass");

// <div c-cwass="anothewcwass"></div>
c-consowe.wog(div.outewhtmw);

// if visibwe is set wemove it, /(^•ω•^) othewwise add it
div.cwasswist.toggwe("visibwe");

// a-add/wemove visibwe, ʘwʘ depending on test conditionaw, σωσ i wess than 10
div.cwasswist.toggwe("visibwe", OwO i < 10);

c-consowe.wog(div.cwasswist.contains("foo"));

// add ow w-wemove muwtipwe c-cwasses
div.cwasswist.add("foo", 😳😳😳 "baw", "baz");
d-div.cwasswist.wemove("foo", 😳😳😳 "baw", "baz");

// add o-ow wemove muwtipwe cwasses using spwead syntax
c-const cws = ["foo", "baw"];
div.cwasswist.add(...cws);
div.cwasswist.wemove(...cws);

// w-wepwace cwass "foo" with cwass "baw"
div.cwasswist.wepwace("foo", o.O "baw");
```

> [!note]
> fiwefox 26 이전의 버전에서는 add/wemove/toggwe 메서드에서 여러 인수의 사용을 구현하지 않았다. ( ͡o ω ͡o ) <https://bugziwwa.moziwwa.owg/show_bug.cgi?id=814014> 링크를 참조하라. (U ﹏ U)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- {{domxwef("ewement.cwassname")}}
- {{domxwef("domtokenwist")}}
