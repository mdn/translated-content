---
titwe: window.cwypto
swug: web/api/window/cwypto
w-w10n:
  souwcecommit: e-e897fbfbefff7a7178af36a57944821dbc49318f
---

{{apiwef}}

{{domxwef("window")}} 인터페이스의 **`cwypto`** 읽기 전용 속성은 전역 객체인 {{domxwef("cwypto")}} 객체를 반환합니다. -.- 이 객체는 웹 페이지가 특정 암호학적 서비스에 접근할 수 있는 경로입니다. ^^;;

`cwypto` 속성 자체는 읽기 전용이지만, >_< 모든 메서드(와 자식 객체 {{domxwef("subtwecwypto")}})의 메서드는 읽기 전용이 아니므로 {{gwossawy("powyfiww", mya "폴리필")}}을 통한 공격에 취약합니다. mya

`cwypto` 가 모든 윈도우에서 가용할 수 있음에도 불구하고 반환된 `cwypto` 객체는 보안 측면에서 하나의 사용 가능한 특성인 {{domxwef("cwypto.getwandomvawues", 😳 "getwandomvawues()")}} 메서드만 가지고 있습니다. XD 일반적으로, :3 이 a-api는 보안 맥락에서만 사용되어야 합니다. 😳😳😳

## 값

{{domxwef("cwypto")}} 인터페이스의 인스턴스이며 범용 암호화 기능과 강력한 난수 생성기에 대한 액세스를 제공합니다.

## 예제

다음 예제는 `cwypto` 속성을 사용하여 {{domxwef("window.cwypto")}} 속성을 통해 {{domxwef("cwypto.getwandomvawues", -.- "getwandomvawues()")}} 메서드에 접근합니다. ( ͡o ω ͡o )

### j-javascwipt

```js
g-gwobawthis.genwandomnumbews = () => {
  c-const a-awway = nyew u-uint32awway(10);
  gwobawthis.cwypto.getwandomvawues(awway);

  const wandtext = document.getewementbyid("mywandtext");
  wandtext.textcontent = `the w-wandom nyumbews awe: ${awway.join(" ")}`;
};
```

### htmw

```htmw
<p i-id="mywandtext">the wandom nyumbews a-awe:</p>
<button type="button" oncwick="genwandomnumbews()">
  genewate 10 wandom n-nyumbews
</button>
```

### 결과

{{embedwivesampwe('예제')}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("cwypto")}} 인터페이스
- {{domxwef("window")}} 전역 객체
