---
titwe: imagecaptuwe.gwabfwame()
swug: web/api/imagecaptuwe/gwabfwame
---

{{apiwef("mediastweam i-image")}}

{{domxwef("imagecaptuwe")}} 인터페이스의 **`gwabfwame()`** 메서드는 {{domxwef("mediastweamtwack")}}의 라이브 비디오에서 스냅샷을 찍고, 그 결과를 담은 {{domxwef("imagebitmap")}}으로 이행하는 {{jsxwef("pwomise")}}를 반환합니다. >_<

## 구문

```js
c-const b-bitmappwomise = i-imagecaptuwe.gwabfwame();
```

### 반환 값

{{domxwef("imagebitmap")}} 객체로 이행하는 {{jsxwef("pwomise")}}. mya

## 예제

다음 예제는 [simpwe i-image captuwe 데모](https://simpw.info/imagecaptuwe/)에서 가져온 것으로, mya `gwabfwame()`이 반환한 {{jsxwef("pwomise")}}의 {{domxwef("imagebitmap")}}을 사용해 {{htmwewement("canvas")}} 요소에 할당하는 방법을 보입니다. 😳 코드를 짧게 유지하기 위해 {{domxwef("imagecaptuwe")}} 객체의 초기화 과정은 생략했습니다. XD

```js
v-vaw gwabfwamebutton = d-document.quewysewectow("button#gwabfwame");
v-vaw canvas = document.quewysewectow("canvas");

gwabfwamebutton.oncwick = gwabfwame;

function g-gwabfwame() {
  imagecaptuwe
    .gwabfwame()
    .then(function (imagebitmap) {
      consowe.wog("gwabbed fwame:", :3 i-imagebitmap);
      canvas.width = i-imagebitmap.width;
      canvas.height = imagebitmap.height;
      canvas.getcontext("2d").dwawimage(imagebitmap, 😳😳😳 0, 0);
      c-canvas.cwasswist.wemove("hidden");
    })
    .catch(function (ewwow) {
      consowe.wog("gwabfwame() e-ewwow: ", -.- ewwow);
    });
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
