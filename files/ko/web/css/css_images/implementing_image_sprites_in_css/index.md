---
title: CSS로 이미지 스프라이트 구현하기
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
---

{{CSSRef}}

**이미지 스프라이트**는 여러 개의 이미지가 필요한 아주 많은 웹앱에서 사용합니다. 이미지 각각을 별도의 파일로 추가하는 대신, 이미지를 하나의 파일로 만들어서 포함하면 HTTP 요청 수가 줄기 때문에 메모리와 네트워크 사용량 측면에서 효율적입니다.

> [!NOTE]
> HTTP/2를 사용할 땐 오히려 작은 요청을 여러 번 날리는 게 네트워크 사용량에 더 좋을 수도 있습니다.

## 구현

`toolbtn` 클래스가 부여된 모든 아이템에 어떤 이미지가 부여된다고 가정해 봅시다.

```css
.toolbtn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

배경 이미지의 위치는 속성에 지정된 {{cssxref("url()")}} 값 다음에 x, y 2개 값으로 지정할 수도 있고, {{cssxref("background-position")}} 속성으로 지정할 수 있습니다.

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

이 CSS 는 ID 가 'btn1' 인 엘리먼트를 왼쪽으로 20 pixel 이동시키고 ID 가 'btn2' 인 엘리먼트를 왼쪽으로 40 pixel 이동시킬 것입니다 (앞서 보인 이미지 룰에 의해 두 엘리먼트에 `toolbtn` 클래스가 부여됐다고 가정합시다).

비슷하게, 마우스 호버 상태를 만들 수도 있습니다.

```css
#btn:hover {
  background-position: <pixels shifted right>px <pixels shifted down>px;
}
```

## 같이 보기

- [Full working demo at CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)
