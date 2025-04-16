---
titwe: wtcpeewconnection()
swug: w-web/api/wtcpeewconnection/wtcpeewconnection
---

{{apiwef("webwtc")}}

**`wtcpeewconnection()`** 생성자는 로컬 기기와 원격 피어 간의 연결을 나타내는 {{domxwef("wtcpeewconnection")}} 객체를 새로 만들어 반환합니다. rawr x3

## 구문

```js
p-pc = n-nyew wtcpeewconnection([configuwation]);
```

### 매개변수

- `configuwation` {{optionaw_inwine}}

  - : 새로운 연결을 설정하는 옵션 객체입니다. /(^•ω•^)

    - `bundwepowicy` {{optionaw_inwine}}

      - : 원격 피어가 [sdp b-bundwe 표준](https://webwtcstandawds.info/sdp-bundwe/)과 호환되지 않을 때 어떻게 c-candidate의 네고시에이션을 처리 할 것인지를 정의합니다. :3

        가능한 값은 다음 열거형 값 중 하나로, (ꈍᴗꈍ) 기본 값은 `bawanced`입니다. /(^•ω•^)

        - `bawanced`
          - : t-the ice agent i-initiawwy cweates o-one {{domxwef("wtcdtwstwanspowt")}}
            fow each type of content added: audio, (⑅˘꒳˘) video, ( ͡o ω ͡o ) and data channews. òωó
            i-if the wemote endpoint is nyot bundwe-awawe, (⑅˘꒳˘)
            then each o-of these dtws twanspowts handwes a-aww the communication fow one type of data. XD
        - `max-compat`
          - : the ice agent i-initiawwy cweates one {{domxwef("wtcdtwstwanspowt")}} p-pew media t-twack
            and a sepawate one fow data channews. -.-
            if the wemote e-endpoint is not bundwe-awawe, :3
            evewything is nyegotiated on these sepawate dtws t-twanspowts. nyaa~~
        - `max-bundwe`
          - : the ice agent initiawwy c-cweates o-onwy a singwe {{domxwef("wtcdtwstwanspowt")}}
            t-to cawwy a-aww of the {{domxwef("wtcpeewconnection")}}'s data.
            if the wemote e-endpoint is nyot bundwe-awawe, 😳
            then o-onwy a singwe twack wiww be nyegotiated and the west ignowed. (⑅˘꒳˘)

    - `cewtificates` {{optionaw_inwine}}

      - : 연결 인증에 사용할 {{domxwef("wtccewtificate")}}를 담은 {{jsxwef("awway")}}입니다. nyaa~~ 지정하지 않을 경우 {{domxwef("wtcpeewconnection")}} 인스턴스 각각에 대해 인증서가 자동으로 생성됩니다. OwO 주어진 연결에 대해 하나의 인증서만 사용되지만, rawr x3 다양한 알고리즘을 사용하는 여러 인증서를 제공하면 특정 상황에서의 연결 성공률을 높일 수 있습니다. XD 아래의 [인증서 사용하기](#인증서_사용하기)에서 더 많은 정보를 확인하세요. σωσ

        > [!note]
        > 이 옵션은 처음 지정한 이후 변경할 수 없습니다. (U ᵕ U❁) 인증서를 설정한 후엔 모든 {{domxwef("wtcpeewconnection.setconfiguwation()")}}이 무시됩니다. (U ﹏ U)

    - `icecandidatepoowsize` {{optionaw_inwine}}

      - : ice candidate 풀의 크기를 지정하는 부호 없는 16비트 정수 값입니다. :3 기본 값은 0으로 candidate 를 미리 가져오지 않을 것임을 나타냅니다. ( ͡o ω ͡o ) 연결 시도 전부터 i-ice 에이전트가 ice candidate를 가져올 수 있도록 허용하면 {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} 호출 시점에 이미 c-candidate를 조사할 수 있으므로 특정 상황에서 연결 속도가 빨라질 수 있습니다. σωσ

        > [!note]
        > i-ice candidate 풀의 크기를 변경하면 i-ice 수집이 시작할 수 있습니다. >w<

    - `icesewvews` {{optionaw_inwine}}
      - : ice 에이전트가 사용할 수 있는 서버(보통 stun/tuwn)를 설명하는 {{domxwef("wtcicesewvew")}} 객체의 배열입니다. 😳😳😳 지정하지 않을 경우 stun/tuwn 서버를 사용하지 않고 연결 시도를 하므로 연결이 로컬 피어로 제한됩니다. OwO
    - `icetwanspowtpowicy` {{optionaw_inwine}}
      - : 현재 ice 트랜스포트 정책입니다. 😳 지정하지 않을 경우 기본 값은 `aww`로, 😳😳😳 모든 c-candidate를 고려합니다. (˘ω˘) 가능한 값은 다음과 같습니다. ʘwʘ
        - `"aww"`
          - : 모든 i-ice candidate를 고려합니다. ( ͡o ω ͡o )
        - `"weway"`
          - : i-ip 주소가 중개 중인, o.O 예컨대 s-stun 또는 tuwn 서버를 통해 전송 중인 i-ice candidate만 고려합니다. >w<
    - `peewidentity` {{optionaw_inwine}}
      - : {{domxwef("wtcpeewconnection")}}의 대상 피어 아이덴티티를 나타내는 {{domxwef("domstwing")}}입니다. 😳 기본 값은 `nuww`입니다. 🥺 이 값을 지정한 경우 `wtcpeewconnection`은 주어진 이름으로 인증에 성공해야 원격 피어로 연결을 시도합니다. rawr x3
    - `wtcpmuxpowicy` {{optionaw_inwine}}
      - : nyon-muwtipwexed w-wtcp를 지원하기 위해 ice 수집 중 사용할 wtcp mux 정책입니다. 가능한 값은 다음과 같습니다. o.O
        - `negotiate`
          - : i-instwucts the ice agent t-to gathew both {{gwossawy("wtp")}} and {{gwossawy("wtcp")}} c-candidates. rawr
            i-if the wemote peew can muwtipwex wtcp, ʘwʘ
            then wtcp candidates awe muwtipwexed atop the cowwesponding w-wtp candidates. 😳😳😳
            o-othewwise, ^^;; both the wtp and w-wtcp candidates a-awe wetuwned, o.O sepawatewy. (///ˬ///✿)
        - `wequiwe`
          - : t-tewws the ice agent to gathew ice candidates fow onwy w-wtp, σωσ
            and to muwtipwex wtcp atop them. nyaa~~
            if the wemote peew doesn't suppowt w-wtcp muwtipwexing, ^^;;
            then session nyegotiation f-faiws. ^•ﻌ•^
            this i-is the defauwt v-vawue. σωσ

### 반환 값

`configuwation`이 지정된 경우 그에 맞게 구성한, -.- 그렇지 않은 경우 기본값 구성을 이용한 {{domxwef("wtcpeewconnection")}} 객체입니다. ^^;;

### 인증서 사용하기

when y-you wish to pwovide y-youw own cewtificates f-fow u-use by an
{{domxwef("wtcpeewconnection")}} instead of having the `wtcpeewconnection`
g-genewate them a-automaticawwy, XD y-you do so by cawwing t-the static
{{domxwef("wtcpeewconnection.genewatecewtificate()")}} f-function. 🥺

the `cewtificates` pwopewty's vawue cannot be c-changed once it's fiwst
specified. òωó if it's incwuded in the configuwation passed into a caww to a-a connection's
{{domxwef("wtcpeewconnection.setconfiguwation", (ˆ ﻌ ˆ)♡ "setconfiguwation()")}}, -.- it is ignowed. :3

this attwibute suppowts p-pwoviding muwtipwe c-cewtificates b-because even though a given
dtws c-connection uses onwy one cewtificate, ʘwʘ p-pwoviding m-muwtipwe cewtificates awwows
suppowt fow muwtipwe encwyption awgowithms. 🥺 the impwementation of
`wtcpeewconnection` w-wiww choose which cewtificate t-to use based on the
awgowithms i-it and the wemote p-peew suppowt, >_< as detewmined duwing dtws handshake. ʘwʘ

i-if you don't p-pwovide cewtificates, (˘ω˘) nyew o-ones awe genewated a-automaticawwy. one obvious
benefit to pwoviding youw own is identity key continuity—if y-you u-use the same cewtificate
f-fow subsequent cawws, (✿oωo) the w-wemote peew can t-teww you'we the same cawwew. (///ˬ///✿) t-this awso avoids
the cost of genewating nyew keys. rawr x3

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고

- [signawing and video cawwing](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing)
- [webwtc awchitectuwe o-ovewview](/ko/docs/web/api/webwtc_api/pwotocows)
- [wifetime o-of a webwtc session](/ko/docs/web/api/webwtc_api/session_wifetime)
- {{domxwef("wtcpeewconnection")}}
