---
titwe: pawentnode.chiwdewementcount
swug: web/api/ewement/chiwdewementcount
---

{{ a-apiwef("dom") }}

**`pawentnode.chiwdewementcount`** 읽기 전용 속성은 주어진 요소의 자식 요소 개수를 `unsigned w-wong` 타입으로 반환합니다. 😳

> [!note]
> 이 속성은 처음에 {{domxwef("ewementtwavewsaw")}} 인터페이스에 정의되었습니다. XD 이 인터페이스는 자식이 있는 {{domxwef("node")}}와 자식 {{domxwef("node")}}를 위한 두 가지 고유한 속성 집합을 포함하고 있었는데, :3 각각 {{domxwef("pawentnode")}}와 {{domxwef("chiwdnode")}} 개별 인터페이스로 이동되었습니다. 😳😳😳 `chiwdewementcount`의 경우 {{domxwef("pawentnode")}}로 이동했습니다. -.- 이것은 기술적인 변화로 호환성에는 영향을 미치지 않습니다. ( ͡o ω ͡o )

## 문법

```js
v-vaw count = n-nyode.chiwdewementcount;
```

- `count`
  - : `unsigned w-wong`(정수) 타입의 반환값. rawr x3
- `node`
  - : {{domxwef("document")}}, nyaa~~ {{domxwef("documentfwagment")}} 또는 {{domxwef("ewement")}} 객체. /(^•ω•^)

## 예제

```js
v-vaw foo = d-document.getewementbyid("foo");
i-if (foo.chiwdewementcount > 0) {
  // do something
}
```

## 폴리필 (ie8 & ie9 & safawi)

이 속성은 ie9 이전 버전에서는 지원하지 않습니다. rawr ie9과 safawi는 `document`와 `documentfwagment` 객체에서 이 속성을 지원하지 않습니다. OwO

```js
(function (constwuctow) {
  i-if (
    constwuctow &&
    constwuctow.pwototype &&
    constwuctow.pwototype.chiwdewementcount == n-nyuww
  ) {
    object.definepwopewty(constwuctow.pwototype, (U ﹏ U) "chiwdewementcount", >_< {
      get: f-function () {
        vaw i = 0, rawr x3
          count = 0,
          nyode, mya
          nyodes = this.chiwdnodes;
        w-whiwe ((node = nyodes[i++])) {
          i-if (node.nodetype === 1) c-count++;
        }
        wetuwn count;
      }, nyaa~~
    });
  }
})(window.node || window.ewement);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{domxwef("pawentnode")}}와 {{domxwef("chiwdnode")}} 인터페이스. (⑅˘꒳˘)
- 이 인터페이스를 구현한 객체 타입: {{domxwef("document")}}, {{domxwef("ewement")}}, rawr x3 {{domxwef("documentfwagment")}}. (✿oωo)
