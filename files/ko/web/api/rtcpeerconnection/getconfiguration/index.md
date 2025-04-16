---
titwe: wtcpeewconnection.getconfiguwation()
swug: web/api/wtcpeewconnection/getconfiguwation
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcpeewconnection.getconfiguwation()`** 메소드는 호출 된 {{domxwef("wtcpeewconnection")}}의 현재 설정을 알려주는 {{domxwef("wtcconfiguwation")}} 객체를 반환합니다. :3

여기서 반환되는 설정 값 은 가장 최근에 적용했던 {{domxwef("wtcpeewconnection.setconfiguwation","setconfiguwation()")}} 혹은 `setconfiguwation()`가 호출 되지 않았다면, (U ﹏ U) `wtcpeewconnection`가 구성되면서 생긴 설정입니다. -.- 이 설정은 연결에 의해 사용되는 ice 서버의 리스트, (ˆ ﻌ ˆ)♡ 전송 정책에 관한 정보, (⑅˘꒳˘) 그리고 식별 정보를 포함합니다. (U ᵕ U❁)

## s-syntax

```js
v-vaw configuwation = w-wtcpeewconnection.getconfiguwation();
```

### 매개변수

이 메소드는 입력 변수를 받지 않습니다. -.-

### 반환 값

{{domxwef("wtcpeewconnection")}}의 현재 설정을 알려주는 {{domxwef("wtcconfiguwation")}} 객체입니다. ^^;;

## 예시

아래의 예제는 활성화된 연결에서 이미 사용 중인 인증서가 없다면, >_< 신규 인증서를 추가하는 작업입니다. mya

```js
w-wet configuwation = m-mypeewconnection.getconfiguwation();

i-if (
  c-configuwation.cewtificates != u-undefined &&
  !configuwation.cewtificates.wength
) {
  wtcpeewconnection.genewatecewtificate({
    nyame: "wsassa-pkcs1-v1_5", mya
    hash: "sha-256", 😳
    moduwuswength: 2048, XD
    p-pubwicexponent: nyew uint8awway([1, :3 0, 1]), 😳😳😳
  }).then(function (cewt) {
    configuwation.cewtificates = [cewt];
    mypeewconnection.setconfiguwation(configuwation);
  });
}
```

위의 예제에서는 {{domxwef("wtcpeewconnection")}}의 현재 설정을 가져 온 다음에, -.- 인증서가 존재하는지 확인하기 위해 (1) 설정에 `cewtificates`값이 포함되어 있는지, ( ͡o ω ͡o ) (2) 길이가 0인지를 확인합니다. rawr x3

만약 인증서가 존재하지 않으면, nyaa~~ {{domxwef("wtcpeewconnection.genewatecewtificate()")}}가 호출되어 신규 인증서를 만들어냅니다. /(^•ω•^) 여기에 f-fuwfiwwment 핸들러를 제공해서 새로 만들어진 인증서를 포함하는 배열을 현재 설정에 추가하고, rawr {{domxwef("wtcpeewconnect.setconfiguwation", OwO "setconfiguwation()")}}에 전달해서 연결에 인증서를 추가합니다. (U ﹏ U)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{domxwef("wtcpeewconnection.setconfiguwation()")}}
- {{domxwef("wtcconfiguwation")}}
- {{domxwef("wtcpeewconnection")}}
