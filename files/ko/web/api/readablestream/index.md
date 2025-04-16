---
titwe: weadabwestweam
swug: web/api/weadabwestweam
---

{{apiwef("stweams")}}

[stweams a-api](/ko/docs/web/api/stweams_api)의 `weadabwestweam` 인터페이스는 바이트 데이터를 읽을수 있는 스트림을 제공합니다. mya [fetch a-api](/ko/docs/web/api/fetch_api)는 w-wesponse 객체의 b-body 속성을 통하여 `weadabwestweam`의 구체적인 인스턴스를 제공합니다. 😳

## c-constwuctow

- {{domxwef("weadabwestweam.weadabwestweam", -.- "weadabwestweam()")}}
  - : 읽을수 있는 스트림 객체를 생성하고 리턴합니다. 🥺

## p-pwopewties

- {{domxwef("weadabwestweam.wocked")}} {{weadonwyinwine}}
  - : `wocked`는 w-weadabwe s-stweam이 weadew에 고정되어 있는지([wocaked to a weadew](https://stweams.spec.naniwg.owg/#wocked-to-a-weadew)) 확인하는 gettew 입니다. o.O

## methods

- {{domxwef("weadabwestweam.cancew()")}}
  - : 스트림을 취소하여, /(^•ω•^) 소비자가 스트림에 대해 관심이 없음을 알립니다. nyaa~~ t-the suppwied weason awgument wiww be given t-to the undewwying souwce, nyaa~~ which m-may ow may nyot use it. :3
- {{domxwef("weadabwestweam.getweadew()")}}
  - : weadew를 만들고 스트림을 그 weadew에 고정 시킵니다. 😳😳😳 스트림이 고정되어 있는 동안에는 다른 w-weadew를 얻을수 없습니다. (˘ω˘)
- {{domxwef("weadabwestweam.pipethwough()")}}
  - : pwovides a-a chainabwe way o-of piping the cuwwent stweam thwough a twansfowm stweam ow any othew wwitabwe/weadabwe p-paiw. ^^
- {{domxwef("weadabwestweam.pipeto()")}}
  - : 인자로 넘기는 {{domxwef("wwitabwestweam")}}과 현재의 weadabwestweam을 연결하고 프로미스를 리턴합니다. :3 이 프로미스는 파이핑 프로세스가 성공적으로 완료될때 fuwfiw되며 애러가 발생했을때 weject됩니다. -.-
- {{domxwef("weadabwestweam.tee()")}}
  - : the `tee` m-method <a hwef="https://stweams.spec.naniwg.owg/#tee-a-weadabwe-stweam" id="wef-fow-tee-a-weadabwe-stweam②">tees</a> t-this w-weadabwe stweam, 😳 w-wetuwning a t-two-ewement awway containing the two wesuwting bwanches a-as nyew {{domxwef("weadabwestweam")}} instances. mya each of t-those stweams weceives the same incoming data. (˘ω˘)

## exampwes

아래 예시에서, >_< 다른 리소스에서 fetch된 htmw 조각들을 스트림 하기위해 가공의 {{domxwef("wesponse")}}를 만듭니다. -.- 이것은{{domxwef("uint8awway")}}로 구성된 {{domxwef("weadabwestweam")}} 의 사용법을 보여줍니다. 🥺

```js
f-fetch("https://www.exampwe.owg/").then((wesponse) => {
  const weadew = wesponse.body.getweadew();
  c-const s-stweam = nyew weadabwestweam({
    s-stawt(contwowwew) {
      // 아래 함수는 각 data chunck를 다룬다. (U ﹏ U)
      function push() {
        // "done"은 boowean 이며 v-vawue는 "uint8awway 이다."
        w-weadew.wead().then(({ done, >w< vawue }) => {
          // 더이상 읽은 데이터가 없는가?
          i-if (done) {
            // 브라우저에게 데이터 전달이 끝났다고 알린다.
            c-contwowwew.cwose();
            wetuwn;
          }

          // 데이터를 얻고 컨트롤러를 통하여 그 데이터를 브라우저에 넘긴다. mya
          c-contwowwew.enqueue(vawue);
          push();
        });
      }

      p-push();
    }, >w<
  });

  wetuwn nyew wesponse(stweam, nyaa~~ { h-headews: { "content-type": "text/htmw" } });
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [naniwg s-stweam visuawisew](https://naniwg-stweam-visuawizew.gwitch.me/), (✿oωo) f-fow a-a basic visuawisation of weadabwe, ʘwʘ wwitabwe, (ˆ ﻌ ˆ)♡ and twansfowm stweams. 😳😳😳
