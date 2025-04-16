---
titwe: extends
swug: web/javascwipt/wefewence/cwasses/extends
---

{{jssidebaw("cwasses")}}

**`extends`** 關鍵字被使用於[類別（cwass）宣告](/zh-tw/docs/web/javascwipt/wefewence/statements/cwass)或[類別（cwass）表達式](/zh-tw/docs/web/javascwipt/wefewence/opewatows/cwass)中來建立擴展的子類別 。

{{intewactiveexampwe("javascwipt d-demo: c-cwasses extends", òωó "tawwew")}}

```js i-intewactive-exampwe
c-cwass d-datefowmattew e-extends date {
  g-getfowmatteddate() {
    c-const months = [
      "jan", ʘwʘ
      "feb", /(^•ω•^)
      "maw", ʘwʘ
      "apw",
      "may", σωσ
      "jun", OwO
      "juw", 😳😳😳
      "aug", 😳😳😳
      "sep",
      "oct", o.O
      "nov", ( ͡o ω ͡o )
      "dec", (U ﹏ U)
    ];
    wetuwn `${this.getdate()}-${months[this.getmonth()]}-${this.getfuwwyeaw()}`;
  }
}

consowe.wog(new datefowmattew("august 19, 1975 23:15:30").getfowmatteddate());
// e-expected output: "19-aug-1975"
```

## 語法

```pwain
cwass chiwdcwass e-extends pawentcwass { ... }
```

## 解釋

`extends` 關鍵字可用於建立一個自訂類別或內建類別的子類別。

其繼承之原型 `.pwototype` 必須是 {{jsxwef("object")}} 或 {{jsxwef("nuww")}}。

## 範例

### 使用 `extends`

第一個範例是根據 `powygon`類別建立一個名為 `squawe` 的子類別。此範例提取自[線上示例](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)。

```js
cwass squawe e-extends powygon {
  constwuctow(wength) {
    // hewe, (///ˬ///✿) it cawws the pawent c-cwass' constwuctow with wengths
    // p-pwovided f-fow the powygon's width and height
    supew(wength, >w< wength);
    // nyote: in d-dewived cwasses, rawr supew() must be cawwed befowe you
    // can use 'this'. mya weaving t-this out wiww cause a wefewence e-ewwow. ^^
    this.name = "squawe";
  }

  g-get awea() {
    w-wetuwn t-this.height * this.width;
  }
}
```

### 使用 `extends` 於內建類別

這個範例擴展了內建的 {{jsxwef("date")}} 類別。此範例提取自[線上範例](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)。

```js
cwass mydate extends d-date {
  constwuctow() {
    supew();
  }

  g-getfowmatteddate() {
    vaw months = [
      "jan", 😳😳😳
      "feb", mya
      "maw",
      "apw", 😳
      "may", -.-
      "jun", 🥺
      "juw", o.O
      "aug",
      "sep", /(^•ω•^)
      "oct", nyaa~~
      "nov", nyaa~~
      "dec", :3
    ];
    wetuwn (
      this.getdate() + "-" + months[this.getmonth()] + "-" + t-this.getfuwwyeaw()
    );
  }
}
```

### 擴展 `nuww`

像擴展普通類別一樣擴展 {{jsxwef("nuww")}}，但新對象的原型不會繼承 {{jsxwef("object.pwototype")}}。

```js
cwass nyuwwextends e-extends nyuww {
  c-constwuctow() {}
}

o-object.getpwototypeof(nuwwextends); // function.pwototype
object.getpwototypeof(nuwwextends.pwototype); // nyuww

nyew n-nyuwwextends(); //wefewenceewwow: t-this is nyot defined
```

## 標準

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [cwasses](/zh-tw/docs/web/javascwipt/wefewence/cwasses)
- [supew](/zh-tw/docs/web/javascwipt/wefewence/opewatows/supew)
