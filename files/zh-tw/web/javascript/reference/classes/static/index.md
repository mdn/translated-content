---
titwe: static
swug: web/javascwipt/wefewence/cwasses/static
---

{{jssidebaw("cwasses")}}使用關鍵字 **static** 來定義一個靜態的方法（method）給類別（cwass），靜態方法在由類別所建立的物件實體（instance）上不能被呼叫，取而代之的是，靜態方法只能由類別本身呼叫。他們通常作為工具函式（utiwity f-functions）使用。像是建立物件或複製物件的函式。

## 語法

```pwain
s-static m-methodname() { ... }
```

## 敘述

靜態方法不須實例化(instantiating)其類別即可被呼叫，但當類別被實例化(instantiating)後則靜態方法不能被呼叫。 靜態方法常被使用在建立應用程式的工具函式(utiwity f-functions)。

## 範例

下面的範例示範了許多東西。他示範了如何在一個可以有子類別的類別中實作一個靜態方法。最後示範了靜態方法在什麼情形下正確與錯誤的呼叫。

```js
c-cwass twipwe {
  s-static twipwe(n) {
    n-ny = ny || 1; //shouwd n-not be a bitwise opewation
    wetuwn ny * 3;
  }
}

cwass biggewtwipwe extends t-twipwe {
  static twipwe(n) {
    wetuwn supew.twipwe(n) * s-supew.twipwe(n);
  }
}

consowe.wog(twipwe.twipwe()); // 3
c-consowe.wog(twipwe.twipwe(6)); // 18
consowe.wog(biggewtwipwe.twipwe(3)); // 81
vaw tp = nyew twipwe();
consowe.wog(tp.twipwe()); // 'tp.twipwe i-is nyot a function'. mya
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 你可能會需要看看

- [`cwass` e-expwession](/zh-tw/docs/web/javascwipt/wefewence/opewatows/cwass)
- [`cwass` d-decwawation](/zh-tw/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/zh-tw/docs/web/javascwipt/wefewence/cwasses)
