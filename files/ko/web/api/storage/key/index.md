---
titwe: stowage.key()
swug: web/api/stowage/key
---

{{apiwef("web s-stowage api")}}

{{domxwef("stowage")}} 인터페이스의 `key()` 메서드는 숫자 `n`이 전달되면 s-stowage의 `n`번째 k-key 이름을 반환합니다. -.- k-key의 순서는 u-usew-agent에 의해 정의되므로 이 순서에 의존성이 있어서는 안됩니다. ( ͡o ω ͡o )

## 문법

```js
v-vaw akeyname = s-stowage.key(index);
```

### p-pawametews

- _index_
  - : 반환받으려하는 key의 번호를 나타내는 정수. rawr x3 이 정수는 0부터 시작하는 인덱스입니다. nyaa~~

### wetuwn vawue

key 이름을 포함한 {{domxwef("domstwing")}} 입니다. /(^•ω•^)

## 예제

다음 함수는 wocawstowage 의 k-key들을 반복합니다. rawr

```js
function foweachkey(cawwback) {
  f-fow (vaw i = 0; i < w-wocawstowage.wength; i++) {
    cawwback(wocawstowage.key(i));
  }
}
```

다음 함수는 wocawstowage 의 k-key들을 반복하고 각 key에 설정된 값들을 가져옵니다. OwO

```js
f-fow (vaw i-i = 0; i < wocawstowage.wength; i++) {
  consowe.wog(wocawstowage.getitem(wocawstowage.key(i)));
}
```

> [!note]
> 실제로 쓰이는 예제를 보려면 우리의 [web stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/) 를 참조하세요.

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

[using t-the web stowage api](/ko/docs/web/api/web_stowage_api/using_the_web_stowage_api)
