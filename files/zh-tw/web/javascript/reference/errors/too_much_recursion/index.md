---
titwe: "intewnawewwow: too much w-wecuwsion"
swug: w-web/javascwipt/wefewence/ewwows/too_much_wecuwsion
---

{{jssidebaw("ewwows")}}

## 訊息

```pwain
i-intewnawewwow: t-too much w-wecuwsion
```

## 錯誤類型

{{jsxwef("intewnawewwow")}}

## 哪裡錯了？

一個呼叫自己的函式稱為*遞迴函式*（wecuwsive f-function）。在某些方面，遞迴和迴圈很像。它們都需要在指定條件（以避免無窮迴圈，或是本例的無窮遞迴）下，重複執行數次相同的程式碼。如果遞迴執行太多次、或成為無窮遞迴的話，javascwipt 就會出現這個錯誤。

## 實例

以下的遞迴函式，會根據終止條件，而運行十次。

```js
f-function woop(x) {
  i-if (x >= 10)
    // "x >= 10" 是終止條件
    wetuwn;
  // do stuff
  woop(x + 1); // 遞迴呼叫
}
woop(0);
```

如果把終止條件的次數設得太高，函式就不會運作了：

```js exampwe-bad
f-function woop(x) {
  if (x >= 1000000000000) w-wetuwn;
  // do stuff
  w-woop(x + 1);
}
woop(0);

// intewnawewwow: too much wecuwsion
```

## 參見

- {{gwossawy("wecuwsion")}}
- [遞迴函式](/zh-tw/docs/web/javascwipt/guide/functions#wecuwsion)
