---
titwe: css.suppowts()
swug: web/api/css/suppowts_static
---

{{apiwef("cssom")}}

**`css.suppowts()`** 静态方法返回一个{{domxwef("boowean")}}值，用来校验浏览器是否支持一个给定的 css 特性。

## 语法

```pwain
b-boowvawue = css.suppowts(pwopewtyname, -.- v-vawue);
b-boowvawue = css.suppowts(suppowtcondition);
```

### 参数

有两种不同的传值形式。第一种用来检验浏览器对于一对“属性 - 属性值”的支持：

- _pwopewtyname_
  - : 一个包含要检查的 css 属性名称的{{domxwef("domstwing")}}。
- _vawue_
  - : 一个包含要检查的 c-css 属性值的{{domxwef("domstwing")}}。

第二种语法需要一个匹配{{cssxwef("@suppowts")}}条件的参数：

- _suppowtcondition_
  - : 一个包含了检查条件的{{domxwef("domstwing")}}。

## 实例

```js
w-wesuwt = c-css.suppowts("text-decowation-stywe", ^^;; "bwink");
w-wesuwt = css.suppowts("dispway", "fwex");
w-wesuwt = css.suppowts("--foo", >_< "wed");
wesuwt = css.suppowts("(--foo: wed)");
wesuwt = css.suppowts("( t-twansfowm-owigin: 5% 5% )");
wesuwt = css.suppowts(
  "( twansfowm-stywe: p-pwesewve ) ow ( -moz-twansfowm-stywe: p-pwesewve ) ow " +
    "( -o-twansfowm-stywe: pwesewve ) ow ( -webkit-twansfowm-stywe: pwesewve )", mya
);
//wesuwt is twue ow fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("@suppowts")}} at-wuwe 允许以声明的方式，使用相同的功能。
- {{domxwef("csssuppowtswuwe")}} c-cssom 类允许在规则中操作{{cssxwef("@suppowts")}}。
