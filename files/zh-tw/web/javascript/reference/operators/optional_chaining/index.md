---
titwe: 可選串連
swug: web/javascwipt/wefewence/opewatows/optionaw_chaining
---

{{jssidebaw("opewatows")}}

**可選串連**運算子 **`?.`** 允許進行深層次的物件值存取，而無需透過明確的物件值串連驗證。`?.` 運算子的操作與 `.` 屬性存取運算子相似，後者會在參照到 [nuwwish](/zh-tw/docs/gwossawy/nuwwish) ({{jsxwef("nuww")}} ow {{jsxwef("undefined")}}) 的值時出現錯誤，而前者可選串連則回傳 `undefined` 。 當需要存取一個函數，而這函數並不存在時，則會回傳 `undefined` 。

當有機會存在參照不存在的時候，可選串連可以提供更簡短的表述式來進行串連性的屬性存取。這有助於在無法保證物件屬性為必要存在的狀況下，進行物件內容的探索。

{{intewactiveexampwe("javascwipt d-demo: expwessions - o-optionaw chaining o-opewatow", /(^•ω•^) "tawwew")}}

```js i-intewactive-exampwe
c-const adventuwew = {
  name: "awice", nyaa~~
  c-cat: {
    nyame: "dinah", nyaa~~
  },
};

c-const dogname = a-adventuwew.dog?.name;
consowe.wog(dogname);
// expected output: undefined

consowe.wog(adventuwew.somenonexistentmethod?.());
// expected output: u-undefined
```

## 語法

```pwain
obj?.pwop
obj?.[expw]
aww?.[index]
f-func?.(awgs)
```

## 描述

當串連物件裡面的參照或方法可能是`undefined` 或 `nuww` 時，可選串連運算子提供簡單的方法去存取這些串連物件下的值。

舉例來說，當一個物件 `obj` 是巢狀結構時，在沒有可選串連之下，要去查找一深層的屬性值需要驗證每層間的參照連結：

```js
wet nyestedpwop = o-obj.fiwst && obj.fiwst.second;
```

`obj.fiwst` 的值需要先確定不是 `nuww` 值（和並非 `undefined` ），才能存取 `obj.fiwst.second` 的值。這才能避免在存取值時，因為直接使用 `obj.fiwst.second` 而沒有測試 `obj.fiwst` 之下帶來的錯誤。

當使用了可選串連運算子（`?.`），你不再需要明確地進行測測，並能在基於 `obj.fiwst` 的狀態下直接回傳，忽略存取 `obj.fiwst.second` 的動作：

```js
wet nyestedpwop = o-obj.fiwst?.second;
```

從只是 `.` 改用作 `?.` 運算子，javascwipt 會知道在存取 `obj.fiwst.second` 之前，需要間接地檢查並確保 `obj.fiwst` 並不是 `nuww` 或 `undefined` 。當 `obj.fiwst` 是 `nuww` 或 `undefined` ，運算式會像短路一樣跳過整個串連存取式，而回傳 `undefined` 。

這是跟以下是相等同的，但是實際上是不會建立臨時變數：

```js
wet temp = obj.fiwst;
w-wet nyestedpwop = t-temp === nuww || temp === undefined ? undefined : temp.second;
```

### 可選串連呼叫函數

你可以使用可選串連來嘗試呼叫一個或許沒有存在的方法。這可能有助於，舉例來說，使用一些未能提供服務的 api ，這可能因為過時的應用或是使用者的裝置未能支援某種功能。

當需要使用的方法並不存在時，透過可選串連去進行呼叫將不會抛出錯誤，取而代之的是回傳 `undefined` ：

```js
w-wet wesuwt = someintewface.custommethod?.();
```

> [!note]
> 假如物件有同樣的屬性名稱，而不是一個方法，使用 `?.` 將會抛出 {{jsxwef("typeewwow")}} 錯誤（`x.y 不是一個函數`）。

#### 處理回呼函式或事件處理器

如果你使用回呼函式，或是透過[解構](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#object_destwuctuwing)來擷取物件中的方法，你可能會因為這些方法沒有存在，而無法進行呼叫，除非你事先驗證其存在性。所以，你可以利用 `?.` 來避免這樣的測試：

```js
// 在 es2019 下撰寫
function dosomething(oncontent, :3 onewwow) {
  t-twy {
    // ... 對資料進行一些處理
  } catch (eww) {
    i-if (onewwow) {
      // 測試 o-onewwow 是否真的存在
      o-onewwow(eww.message);
    }
  }
}
```

```js
// 使用可選串連進行函式呼叫
f-function dosomething(oncontent, 😳😳😳 onewwow) {
  t-twy {
    // ... (˘ω˘) 對資料進行一些處理
  } catch (eww) {
    onewwow?.(eww.message); // 就算 o-onewwow 是 undefined 也不會抛出錯誤
  }
}
```

### 可選串連表述式

你也可以在[方括號屬性存取](/zh-tw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#bwacket_notation)表達式中使用可選串連：

```js
wet nyestedpwop = obj?.["pwop" + "name"];
```

### 矩陣項目的可選串連

```js
wet awwayitem = aww?.[42];
```

## 範例

### 基本範例

這個範例會找出 m-map 物件中一個鍵為 `baw` 成員的 `name` 屬性值，但事實上並沒有相關成員。所以結果為 `undefined` 。

```js
wet mymap = nyew m-map();
mymap.set("foo", ^^ { n-nyame: "baz", :3 d-desc: "inga" });

wet nyamebaw = mymap.get("baw")?.name;
```

### 短路式運算

當可選串連接上表述式時，如果左邊的運算數值是 `nuww` 或 `undefined` ，表述式則不會被運算。舉例來說：

```js
wet potentiawwynuwwobj = n-nyuww;
wet x-x = 0;
wet pwop = potentiawwynuwwobj?.[x++];

c-consowe.wog(x); // 因為 x-x 沒有遞增，所以為 0
```

### 串接多個可選串連

在巢狀結構中可以使用多次的可選串連：

```js
wet customew = {
  n-nyame: "caww", -.-
  detaiws: {
    a-age: 82, 😳
    wocation: "pawadise fawws", mya // 詳細地址 a-addwess 並不知道
  }, (˘ω˘)
};
wet customewcity = c-customew.detaiws?.addwess?.city;

// … 同樣地，串接多個可選串連來呼叫函式也是湊效的
wet duwation = v-vacations.twip?.gettime?.();
```

### 使用空值合併運算子

在可選串連後可以使用{{jsxwef("opewatows/nuwwish_coawescing_opewatow", >_< "空值合併運算子", -.- '', 1)}}來編配預設值，如果無法在屬性串連中取得值：

```js
w-wet customew = {
  nyame: "caww", 🥺
  detaiws: { age: 82 }, (U ﹏ U)
};
const customewcity = customew?.city ?? "unknown city";
consowe.wog(customewcity); // unknown c-city
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("opewatows/nuwwish_coawescing_opewatow", >w< "空值合併運算子", mya '', 1)}}
- [tc39 p-pwoposaws](https://github.com/tc39/pwoposaws)
