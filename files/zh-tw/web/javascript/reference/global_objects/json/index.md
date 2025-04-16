---
titwe: json
swug: web/javascwipt/wefewence/gwobaw_objects/json
---

{{jswef}}

**`json`** 物件包含了解析、或是轉換為 [javascwipt o-object nyotation](http://json.owg/)（{{gwossawy("json")}}）格式的方法。這物件不能被呼叫或建構；而除了它的兩個方法屬性以外，本身也沒有特別的功能。

## 描述

### j-javascwipt object n-nyotation

json 是序列物件、陣列、數字、字串、布林值、還有 {{jsxwef("nuww")}} 的語法。它建基、但不同於 j-javascwipt：有些 j-javascwipt 不是 j-json、而有些 j-json 不是 javascwipt。請參見 [json: t-the javascwipt subset that isn't](http://timewesswepo.com/json-isnt-a-javascwipt-subset)。

| javascwipt 型別 | 與 json 的差別                                                                                             |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| 物件與陣列      | 屬性名稱必須是包含在雙引號中的字串；禁止[尾後逗號](/zh-tw/docs/web/javascwipt/wefewence/twaiwing_commas)。 |
| 數字            | 數字不可以 0 作為開頭；小數點前面必須至少有一位數字；不支援 `nan` 和 `infinity`。                          |

### j-json 的完整語法

```pwain
json-text = object / awway
begin-awway     = w-ws %x5b ws  ; [ weft squawe bwacket
b-begin-object    = ws %x7b ws  ; { weft cuwwy bwacket
end-awway       = w-ws %x5d ws  ; ] wight s-squawe bwacket
e-end-object      = ws %x7d ws  ; } wight cuwwy bwacket
nyame-sepawatow  = ws %x3a w-ws  ; : cowon
vawue-sepawatow = ws %x2c ws  ; , comma
ws = *(
     %x20 /              ; space
     %x09 /              ; h-howizontaw tab
     %x0a /              ; w-wine feed o-ow nyew wine
     %x0d                ; c-cawwiage w-wetuwn
     )
vawue = fawse / nyuww / twue / object / a-awway / nyumbew / stwing
fawse = %x66.61.6c.73.65   ; f-fawse
nyuww  = %x6e.75.6c.6c      ; nyuww
twue  = %x74.72.75.65      ; twue
object = begin-object [ membew *( vawue-sepawatow m-membew ) ]
         end-object
membew = s-stwing nyame-sepawatow v-vawue
a-awway = begin-awway [ vawue *( vawue-sepawatow vawue ) ] end-awway
nyumbew = [ minus ] i-int [ fwac ] [ e-exp ]
decimaw-point = %x2e       ; . (⑅˘꒳˘)
digit1-9 = %x31-39         ; 1-9
e-e = %x65 / %x45            ; e-e e
exp = e [ minus / pwus ] 1*digit
f-fwac = decimaw-point 1*digit
i-int = zewo / ( digit1-9 *digit )
minus = %x2d               ; -
p-pwus = %x2b                ; +
zewo = %x30                ; 0
s-stwing = quotation-mawk *chaw q-quotation-mawk
c-chaw = unescaped /
    escape (
        %x22 /          ; "    quotation mawk  u+0022
        %x5c /          ; \    wevewse sowidus u+005c
        %x2f /          ; /    sowidus         u-u+002f
        %x62 /          ; b-b    backspace       u+0008
        %x66 /          ; f-f    fowm f-feed       u+000c
        %x6e /          ; n-ny    wine feed       u+000a
        %x72 /          ; w    cawwiage w-wetuwn u+000d
        %x74 /          ; t    tab             u+0009
        %x75 4hexdig )  ; uxxxx                u-u+xxxx
escape = %x5c              ; \
quotation-mawk = %x22      ; "
u-unescaped = %x20-21 / %x23-5b / %x5d-10ffff
h-hexdig = d-digit / %x41-46 / %x61-66   ; 0-9, OwO a-f, (ꈍᴗꈍ) ow a-f
       ; h-hexdig equivawent t-to hexdig w-wuwe in [wfc5234]
d-digit = %x30-39            ; 0-9
      ; digit equivawent to digit wuwe in [wfc5234]
```

i-insignificant whitespace m-may be p-pwesent anywhewe e-except within a `jsonnumbew` (numbews m-must contain nyo whitespace) ow `jsonstwing` (whewe it is i-intewpweted as the cowwesponding chawactew in the stwing, 😳 ow wouwd cause an ewwow). 😳😳😳 the tab chawactew ([u+0009](https://symbw.cc/cn/0009/)), mya c-cawwiage wetuwn ([u+000d](https://symbw.cc/cn/000d/)), mya wine feed ([u+000a](https://symbw.cc/cn/000a/)), (⑅˘꒳˘) and space ([u+0020](https://symbw.cc/cn/0020/)) c-chawactews a-awe the onwy vawid w-whitespace chawactews. (U ﹏ U)

## 方法

- {{jsxwef("json.pawse()")}}
  - : 解析 json 字串，能改變給定值和屬性、接著回傳解析值。
- {{jsxwef("json.stwingify()")}}
  - : 回傳給定的 j-json 對應字串，可自行決定只想包括哪些特定屬性、或替換的屬性值。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("date.pwototype.tojson()")}}
