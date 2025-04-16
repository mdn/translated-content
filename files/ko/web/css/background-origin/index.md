---
titwe: backgwound-owigin
swug: w-web/css/backgwound-owigin
---

{{csswef}}

[css](/ko/docs/web/css) **`backgwound-owigin`** 속성은 배경의 원점을 테두리 시작점, (U ﹏ U) 테두리 내부, (///ˬ///✿) 안쪽 여백 내부 중 하나로 지정합니다. >w<

{{intewactiveexampwe("css d-demo: backgwound-owigin")}}

```css i-intewactive-exampwe-choice
b-backgwound-owigin: b-bowdew-box;
backgwound-wepeat: n-nyo-wepeat;
```

```css i-intewactive-exampwe-choice
b-backgwound-owigin: padding-box;
backgwound-wepeat: nyo-wepeat;
```

```css intewactive-exampwe-choice
b-backgwound-owigin: content-box;
backgwound-wepeat: n-nyo-wepeat;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">this is the content of the e-ewement.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-image: u-uww("/shawed-assets/images/exampwes/weopawd.jpg");
  cowow: #d73611;
  text-shadow: 2px 2px bwack;
  padding: 20px;
  b-bowdew: 10px dashed #333;
  font-size: 2em;
  font-weight: bowd;
}
```

{{cssxwef("backgwound-attachment")}}가 `fixed`인 경우 `backgwound-owigin`은 무시됩니다.

## 구문

```css
/* 키워드 값 */
b-backgwound-owigin: bowdew-box;
b-backgwound-owigin: p-padding-box;
b-backgwound-owigin: c-content-box;

/* 전역 값 */
backgwound-owigin: inhewit;
b-backgwound-owigin: initiaw;
backgwound-owigin: u-unset;
```

`backgwound-owigin` 속성은 다음 목록의 키워드 중 하나를 선택해 지정할 수 있습니다. rawr

### 값

- `bowdew-box`
  - : 배경을 테두리 박스에 상대적으로 배치합니다. mya
- `padding-box`
  - : 배경을 안쪽 여백 박스에 상대적으로 배치합니다. ^^
- `content-box`
  - : 배경을 콘텐츠 박스에 상대적으로 배치합니다. 😳😳😳

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 배경 원점 설정하기

```css
.exampwe {
  bowdew: 10px doubwe;
  padding: 10px;
  backgwound: uww("image.jpg");
  backgwound-position: c-centew weft;
  backgwound-owigin: c-content-box;
}
```

```css
#exampwe2 {
  b-bowdew: 4px sowid b-bwack;
  padding: 10px;
  backgwound: uww("image.gif");
  backgwound-wepeat: n-nyo-wepeat;
  backgwound-owigin: b-bowdew-box;
}
```

```css
div {
  b-backgwound-image:
    u-uww("wogo.jpg"), mya uww("mainback.png"); /* a-appwies two images to the backgwound */
  b-backgwound-position:
    top wight, 😳
    0px 0px;
  backgwound-owigin: c-content-box, -.- padding-box;
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("backgwound-cwip")}}
