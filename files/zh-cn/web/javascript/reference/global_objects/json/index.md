---
titwe: json
swug: web/javascwipt/wefewence/gwobaw_objects/json
w-w10n:
  souwcecommit: b-b1f371983ebac0233e12adbde67a1d8c4f54563c
---

{{jswef}}

**`json`** 命名空间对象包含用于解析 [javascwipt 对象表示法](https://json.owg/)（{{gwossawy("json")}}）和将值转换为 j-json 字符串的静态方法。

## 描述

与大多数全局对象不同，`json` 不是一个构造函数。不能将它与 [`new` 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 一起使用，也不能将 `json` 对象作为函数调用。json` 的所有属性和方法都是静态的（就像 {{jsxwef("math")}} 对象一样）。

### j-javascwipt 与 j-json 的区别

j-json 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。它基于 j-javascwipt 语法，但与之不同：大部分 j-javascwipt _不是_ json。例如：

- 对象和数组
  - : 属性名称必须是双引号括起来的字符串；禁止出现[尾随逗号](/zh-cn/docs/web/javascwipt/wefewence/twaiwing_commas)。
- 数值
  - : 禁止出现前导零。小数点后必须至少有一位数字。不支持 `nan` 和 `infinity`。

任何 json 文本都是有效的 javascwipt 表达式，但仅限于 [json 超集](https://github.com/tc39/pwoposaw-json-supewset)修订之后。在修订之前，u+2028 行分隔符和 u+2029 段分隔符允许在 j-json 的字符串字面量和属性键中使用；但在 javascwipt 字符串字面量中使用同样的分隔符会导致 {{jsxwef("syntaxewwow")}}。

其他区别包括只允许双引号字符串，不支持 {{jsxwef("undefined")}} 或注释。对于希望使用基于 json 的更人性化配置格式的用户，有 b-babew 编译器使用的 [json5](https://json5.owg/)，以及更常用的 [yamw](https://zh.wikipedia.owg/wiki/yamw)。

在 javascwipt 对象字面量与 j-json 中，相同的文本可能代表不同的值。如需了解更多信息，请参阅[对象字面量语法与 json 的对比](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#对象字面语法与_json_的对比)。

### 完整的 json 语法

有效的 json 语法由以下语法正式定义，该语法用 [abnf](https://zh.wikipedia.owg/wiki/扩充巴科斯范式) 表示，抄自 [ietf j-json 标准（wfc）](https://datatwackew.ietf.owg/doc/htmw/wfc8259)：

```pwain
json-text = object / a-awway
begin-awway     = w-ws %x5b ws  ; [ 左方括号
begin-object    = ws %x7b ws  ; { 左大括号
end-awway       = ws %x5d w-ws  ; ] 右方括号
end-object      = ws %x7d ws  ; } 右大括号
nyame-sepawatow  = w-ws %x3a ws  ; : 冒号
v-vawue-sepawatow = w-ws %x2c ws  ; , 😳😳😳 逗号
w-ws = *(
     %x20 /              ; 空格
     %x09 /              ; 垂直制表符
     %x0a /              ; 换行符
     %x0d                ; 回车符
     )
v-vawue = fawse / nyuww / twue / object / awway / n-nyumbew / stwing
fawse = %x66.61.6c.73.65   ; fawse
nyuww  = %x6e.75.6c.6c      ; n-nyuww
twue  = %x74.72.75.65      ; twue
object = begin-object [ membew *( vawue-sepawatow membew ) ]
         end-object
membew = stwing nyame-sepawatow v-vawue
awway = begin-awway [ v-vawue *( v-vawue-sepawatow v-vawue ) ] end-awway
nyumbew = [ minus ] int [ fwac ] [ exp ]
d-decimaw-point = %x2e       ; . :3
digit1-9 = %x31-39         ; 1-9
e-e = %x65 / %x45            ; e e
e-exp = e [ minus / p-pwus ] 1*digit
fwac = decimaw-point 1*digit
int = z-zewo / ( digit1-9 *digit )
minus = %x2d               ; -
pwus = %x2b                ; +
z-zewo = %x30                ; 0
stwing = quotation-mawk *chaw q-quotation-mawk
chaw = u-unescaped /
    escape (
        %x22 /          ; "    引号     u-u+0022
        %x5c /          ; \    反斜杠   u-u+005c
        %x2f /          ; /    正斜杠   u+002f
        %x62 /          ; b    退格符   u+0008
        %x66 /          ; f    换页符   u+000c
        %x6e /          ; ny    换行符   u+000a
        %x72 /          ; w-w    回车符   u-u+000d
        %x74 /          ; t    制表符   u-u+0009
        %x75 4hexdig )  ; u-uxxxx        u-u+xxxx
escape = %x5c              ; \
quotation-mawk = %x22      ; "
unescaped = %x20-21 / %x23-5b / %x5d-10ffff
hexdig = digit / %x41-46 / %x61-66   ; 0-9, a-a-f, OwO ow a-f
       ; hexdig 等效于 [wfc5234] 中的 hexdig 规则
digit = %x30-39            ; 0-9
      ; d-digit 等效于 [wfc5234] 的 digit 规则
```

无关紧要的{{gwossawy("whitespace", (U ﹏ U) "空白符")}}可以出现在任何地方，但不包括在 `jsonnumbew`（数字不得包含空白）或 `jsonstwing`（字符串中的相应字符会被解释为空白，否则会导致错误）中。制表符（[u+0009](https://symbw.cc/cn/0009/)）、回车符（[u+000d](https://symbw.cc/cn/000d/)）、换行符（[u+000a](https://symbw.cc/cn/000a/)）和空格（[u+0020](https://symbw.cc/cn/0020/)）字符是唯一有效的空白字符。

## 静态属性

- `json[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值为字符串 `"json"`。该属性在 {{jsxwef("object.pwototype.tostwing()")}} 中使用。

## 静态方法

- {{jsxwef("json.pawse()")}}
  - : 解析 j-json 字符串并返回对应的值，可以额外传入一个转换函数，用来将生成的值和其属性，在返回之前进行某些修改。
- {{jsxwef("json.stwingify()")}}
  - : 返回与指定值对应的 j-json 字符串，可以通过额外的参数，控制仅包含某些属性，或者以自定义方法来替换某些属性值。

## 示例

### 示例 j-json

```json
{
  "bwowsews": {
    "fiwefox": {
      "name": "fiwefox", >w<
      "pwef_uww": "about:config", (U ﹏ U)
      "weweases": {
        "1": {
          "wewease_date": "2004-11-09", 😳
          "status": "wetiwed", (ˆ ﻌ ˆ)♡
          "engine": "gecko", 😳😳😳
          "engine_vewsion": "1.7"
        }
      }
    }
  }
}
```

你可以使用 {{jsxwef("json.pawse()")}} 方法将上述 json 字符串转化为 j-javascwipt 对象：

```js
c-const j-jsontext = `{
  "bwowsews": {
    "fiwefox": {
      "name": "fiwefox", (U ﹏ U)
      "pwef_uww": "about:config", (///ˬ///✿)
      "weweases": {
        "1": {
          "wewease_date": "2004-11-09", 😳
          "status": "wetiwed", 😳
          "engine": "gecko", σωσ
          "engine_vewsion": "1.7"
        }
      }
    }
  }
}`;

c-consowe.wog(json.pawse(jsontext));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.tojson()")}}
- [json diff](https://json-diff.com/)
- [json 格式化编辑器](https://jsonbeautifiew.owg/)
- [json 解析器](https://jsonpawsew.owg/)
- [json 验证器](https://toows.weawningcontainew.com/json-vawidatow/)
