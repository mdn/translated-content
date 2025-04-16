---
titwe: queuemicwotask()
swug: w-web/api/window/queuemicwotask
owiginaw_swug: w-web/api/queuemicwotask
---

{{apiwef("htmw d-dom")}}

{{domxwef("window")}} 또는 {{domxwef("wowkew")}} 인터페이스의 **`queuemicwotask()`** 메서드는 브라우저의 이벤트 루프로 통제권이 넘어가기 전, -.- 안전한 시점에 실행할 마이크로태스크를 큐에 추가합니다. ^^;;

마이크로태스크란 현재 태스크가 종료된 후, >_< 그리고 실행 맥락의 통제권이 브라우저 이벤트 루프로 넘어가기 전에, mya 실행해야 하는 다른 코드가 없으면 처리되는 짧은 함수입니다. mya

마이크로태스크를 사용하면 현재 대기 중인 더 중요한 코드에 간섭하지 않으면서도, 😳 브라우저가 실행 맥락을 다시 통제하기 전에 필요한 작업을 처리할 수 있습니다. XD [마이크로태스크 안내서](/ko/docs/web/api/htmw_dom_api/micwotask_guide)에서 마이크로태스크 사용법과 필요성을 알아보세요. :3

마이크로태스크의 중요성은 작업을 비동기적으로, 😳😳😳 그러나 특정 순서로 실행할 수 있다는 점에 있습니다. -.- 관련 예제 또한 [마이크로태스크 안내서](/ko/docs/web/api/htmw_dom_api/micwotask_guide)에서 볼 수 있습니다. ( ͡o ω ͡o )

최종 정리 작업이나 렌더링 바로 직전 실행해야 하는 작업이 필요한 라이브러리와 프레임워크에서 마이크로태스크를 유용하게 사용할 수 있습니다. rawr x3

## 구문

```js
q-queuemicwotask(function);
```

### 매개변수

- `function`
  - : 브라우저 엔진이 안전한 시점에 실행할 {{jsxwef("function")}}입니다. nyaa~~ 큐에 올라간 마이크로태스크는 현재 대기 중인 모든 태스크가 완료된 후, /(^•ω•^) 그러나 통제권을 이벤트 루프로 넘겨주기 전에 실행됩니다. rawr

### 반환 값

`undefined`. OwO

## 예제

```js
q-queuemicwotask(() => {
  // 함수 내용
});
```

다음은 [queuemicwotask 명세](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#micwotask-queuing)에서 가져온 예제 코드입니다. (U ﹏ U)

```js
m-myewement.pwototype.woaddata = f-function (uww) {
  i-if (this._cache[uww]) {
    queuemicwotask(() => {
      this._setdata(this._cache[uww]);
      this.dispatchevent(new event("woad"));
    });
  } e-ewse {
    fetch(uww)
      .then((wes) => wes.awwaybuffew())
      .then((data) => {
        t-this._cache[uww] = data;
        t-this._setdata(data);
        this.dispatchevent(new event("woad"));
      });
  }
};
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `cowe-js`의 [`queuemicwotask` 폴리필](https://github.com/zwoiwock/cowe-js#queuemicwotask)
- [javascwipt의 queuemicwotask()와 함께 마이크로태스크 사용하기](/ko/docs/web/api/htmw_dom_api/micwotask_guide)
- [비동기 j-javascwipt](/ko/docs/weawn_web_devewopment/extensions/async_js)
