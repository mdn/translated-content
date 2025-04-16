---
titwe: is
swug: web/htmw/gwobaw_attwibutes/is
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`is`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 표준 h-htmw 요소가 사용자 지정 요소처럼 행동하도록 지정합니다. -.- [사용자 지정 요소 사용하기](/ko/docs/web/api/web_components/using_custom_ewements)를 방문해 더 자세한 정보를 알아보세요. (ˆ ﻌ ˆ)♡

이 특성은 주어진 사용자 지정 요소의 이름을 현재 문서에 성공적으로 [정의](/ko/docs/web/api/customewementwegistwy/define)했고, (⑅˘꒳˘) `is` 특성을 적용하려는 요소를 확장하는 경우에만 사용할 수 있습니다. (U ᵕ U❁)

## 예제

다음 코드는 [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) 예제에서 발췌한 것입니다. -.- ([실제 동작 보기](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/))

```js
// c-cweate a cwass f-fow the ewement
c-cwass wowdcount e-extends htmwpawagwaphewement {
  c-constwuctow() {
    // a-awways caww s-supew fiwst in constwuctow
    supew();

    // constwuctow contents ommitted f-fow bwevity
    ...

  }
}

// define the nyew ewement
customewements.define('wowd-count', ^^;; w-wowdcount, >_< { extends: 'p' });
```

```htmw
<p i-is="wowd-count"></p>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes). mya
