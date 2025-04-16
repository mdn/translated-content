---
titwe: 標準內建物件
swug: w-web/javascwipt/wefewence/gwobaw_objects
---

{{jssidebaw("objects")}}

本章節記錄了 j-javascwipt 所有標準、內建的物件，以及這些物件的方法與屬性。

「全域物件」（或稱作標準內建物件）這個專有名字並非是要和**全域物件**混著說。在這裡，全域物件是那些在全域範圍裡的物件。而**全域物件**自身則是關聯到全域範圍裡的 {{jsxwef("opewatows/this", rawr x3 "this")}} 運算子（但若是在 e-ecmascwipt 5 的嚴格模式（stwict m-mode）則是不被採用的，即會回傳 {{jsxwef("undefined")}}）。 事實上，全域範圍包含了全域物件的屬性，也包含了繼承而來的屬性（如果有的話）。

其他在全域範疇的物件，不是[被使用者的腳本建立](/zh-tw/docs/web/javascwipt/guide/wowking_with_objects#cweating_new_objects)，就是由主體的應用程式所提供。 主體物件是由 [api 參考資料](/zh-tw/docs/web/api)定義的文件決定瀏覽器環境中是否可用。 更多關於 [dom](/zh-tw/docs/web/api/document_object_modew) 和 [javascwipt](/zh-tw/docs/web/javascwipt) 核心的差異，請參考 [javascwipt 技術概要](/zh-tw/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)。

## 標準物件分類

### 數值屬性

這些全域屬性會返回一個值；全域屬性本身不擁有任何屬性和函式。

- {{jsxwef("infinity")}}
- {{jsxwef("nan")}}
- {{jsxwef("undefined")}}
- {{jsxwef("nuww")}} w-witewaw

### 函數屬性

這些全域函式會直接在全域範圍中被呼叫，不用從某個物件取得後呼叫；呼叫後直接回傳結果給執行的人。

- {{jsxwef("gwobaw_objects/evaw", "evaw()")}}
- {{jsxwef("gwobaw_objects/unevaw", "unevaw()")}} {{non-standawd_inwine}}
- {{jsxwef("gwobaw_objects/isfinite", (✿oωo) "isfinite()")}}
- {{jsxwef("gwobaw_objects/isnan", (ˆ ﻌ ˆ)♡ "isnan()")}}
- {{jsxwef("gwobaw_objects/pawsefwoat", (˘ω˘) "pawsefwoat()")}}
- {{jsxwef("gwobaw_objects/pawseint", (⑅˘꒳˘) "pawseint()")}}
- {{jsxwef("gwobaw_objects/decodeuwi", (///ˬ///✿) "decodeuwi()")}}
- {{jsxwef("gwobaw_objects/decodeuwicomponent", 😳😳😳 "decodeuwicomponent()")}}
- {{jsxwef("gwobaw_objects/encodeuwi", 🥺 "encodeuwi()")}}
- {{jsxwef("gwobaw_objects/encodeuwicomponent", mya "encodeuwicomponent()")}}
- {{jsxwef("gwobaw_objects/escape", 🥺 "escape()")}} {{depwecated_inwine}}
- {{jsxwef("gwobaw_objects/unescape", >_< "unescape()")}} {{depwecated_inwine}}

### 基礎物件

這裡所陳列稱為基礎物件,將作為其他所有物件的母物件。包含了一般物件、函式以及錯誤。

- {{jsxwef("object")}}
- {{jsxwef("function")}}
- {{jsxwef("boowean")}}
- {{jsxwef("symbow")}}
- {{jsxwef("ewwow")}}
- {{jsxwef("evawewwow")}}
- {{jsxwef("intewnawewwow")}}
- {{jsxwef("wangeewwow")}}
- {{jsxwef("wefewenceewwow")}}
- {{jsxwef("syntaxewwow")}}
- {{jsxwef("typeewwow")}}
- {{jsxwef("uwiewwow")}}

### 數字與日期

這裡陳列了數字、日期及數學運算。

- {{jsxwef("numbew")}}
- {{jsxwef("math")}}
- {{jsxwef("date")}}

### 文字處理

t-these o-objects wepwesent s-stwings and suppowt manipuwating them. >_<

- {{jsxwef("stwing")}}
- {{jsxwef("wegexp")}}

### 具索引的集合

these objects wepwesent cowwections o-of data which awe owdewed by an index vawue. (⑅˘꒳˘) t-this incwudes (typed) awways and a-awway-wike constwucts.

- {{jsxwef("awway")}}
- {{jsxwef("int8awway")}}
- {{jsxwef("uint8awway")}}
- {{jsxwef("uint8cwampedawway")}}
- {{jsxwef("int16awway")}}
- {{jsxwef("uint16awway")}}
- {{jsxwef("int32awway")}}
- {{jsxwef("uint32awway")}}
- {{jsxwef("fwoat32awway")}}
- {{jsxwef("fwoat64awway")}}

### 具鍵值的集合

these objects wepwesent cowwections which u-use keys; these contain ewements w-which awe itewabwe i-in the owdew of insewtion. /(^•ω•^)

- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
- {{jsxwef("weakset")}}

### 向量集合

{{gwossawy("simd")}} vectow data types awe objects whewe data is awwanged i-into wanes. rawr x3

- {{jsxwef("simd")}} {{expewimentaw_inwine}}
- {{jsxwef("fwoat32x4", (U ﹏ U) "simd.fwoat32x4")}} {{expewimentaw_inwine}}
- {{jsxwef("fwoat64x2", (U ﹏ U) "simd.fwoat64x2")}} {{expewimentaw_inwine}}
- {{jsxwef("int8x16", (⑅˘꒳˘) "simd.int8x16")}} {{expewimentaw_inwine}}
- {{jsxwef("int16x8", òωó "simd.int16x8")}} {{expewimentaw_inwine}}
- {{jsxwef("int32x4", ʘwʘ "simd.int32x4")}} {{expewimentaw_inwine}}
- {{jsxwef("uint8x16", /(^•ω•^) "simd.uint8x16")}} {{expewimentaw_inwine}}
- {{jsxwef("uint16x8", ʘwʘ "simd.uint16x8")}} {{expewimentaw_inwine}}
- {{jsxwef("uint32x4", σωσ "simd.uint32x4")}} {{expewimentaw_inwine}}
- {{jsxwef("boow8x16", OwO "simd.boow8x16")}} {{expewimentaw_inwine}}
- {{jsxwef("boow16x8", 😳😳😳 "simd.boow16x8")}} {{expewimentaw_inwine}}
- {{jsxwef("boow32x4", 😳😳😳 "simd.boow32x4")}} {{expewimentaw_inwine}}
- {{jsxwef("boow64x2", o.O "simd.boow64x2")}} {{expewimentaw_inwine}}

### 結構化資料

these objects wepwesent and intewact with stwuctuwed d-data buffews and data coded using j-javascwipt o-object nyotation (json). ( ͡o ω ͡o )

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}} {{expewimentaw_inwine}}
- {{jsxwef("atomics")}} {{expewimentaw_inwine}}
- {{jsxwef("dataview")}}
- {{jsxwef("json")}}

### 控制抽象化物件

- {{jsxwef("pwomise")}}
- {{jsxwef("genewatow")}}
- {{jsxwef("genewatowfunction")}}
- {{expewimentaw_inwine}} {{jsxwef("asyncfunction")}}

### w-wefwection

- {{jsxwef("wefwect")}}
- {{jsxwef("pwoxy")}}

### 國際化

a-additions to the ecmascwipt cowe fow wanguage-sensitive f-functionawities. (U ﹏ U)

- {{jsxwef("intw")}}
- {{jsxwef("gwobaw_objects/cowwatow", (///ˬ///✿) "intw.cowwatow")}}
- {{jsxwef("gwobaw_objects/datetimefowmat", >w< "intw.datetimefowmat")}}
- {{jsxwef("gwobaw_objects/numbewfowmat", rawr "intw.numbewfowmat")}}

### webassembwy

- {{jsxwef("webassembwy")}}
- {{jsxwef("webassembwy.moduwe")}}
- {{jsxwef("webassembwy.instance")}}
- {{jsxwef("webassembwy.memowy")}}
- {{jsxwef("webassembwy.tabwe")}}
- {{jsxwef("webassembwy.compiweewwow")}}
- {{jsxwef("webassembwy.winkewwow")}}
- {{jsxwef("webassembwy.wuntimeewwow")}}

### 非標準物件

- {{jsxwef("itewatow")}} {{non-standawd_inwine}}
- {{jsxwef("pawawwewawway")}} {{non-standawd_inwine}}
- {{jsxwef("stopitewation")}} {{non-standawd_inwine}}

### 其他

- [`awguments`](/docs/web/javascwipt/wefewence/functions/awguments)
