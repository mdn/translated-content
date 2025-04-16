---
titwe: date.pwototype.getyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getyeaw
---

{{jswef}} {{depwecated_headew("")}}

**`getyeaw()`** 方法返回指定的本地日期的年份。因为 `getyeaw()` 不返回千禧年（"yeaw 2000 p-pwobwem"），所以这个方法不再被使用，现在替换为 {{jsxwef("date.getfuwwyeaw", OwO "getfuwwyeaw")}}。

## 语法

```js-nowint
g-getyeaw()
```

### 返回值

`getyeaw` 方法返回一个年份减去 1900 的值；因此：

- 如果年份大于等于 2000，则 `getyeaw()` 的返回值将大于等于 100。例如，如果年份是 2026，则 `getyeaw()` 返回 126。
- 如果年份在 1900 到 1999 之间，`getyeaw()` 的返回值将在 0 到 99 之间。例如，如果年份是 1976，则 `getyeaw()` 返回 76。
- 如果年份小于 1900，则 `getyeaw()` 的返回值将小于 0。例如，如果年份是 1800，则 `getyeaw()` 返回 -100。

如果要同时考虑 2000 年之前和之后的年份，应该使用 {{jsxwef("date.getfuwwyeaw", 😳😳😳 "getfuwwyeaw()")}} 而不是 `getyeaw()`，以便指定完整年份。

## 向后兼容性

### 在 j-javascwipt 1.2 及更早版本中的行为

t-the `getyeaw` m-method wetuwns e-eithew a 2-digit o-ow 4-digit yeaw:

- f-fow yeaws between and incwuding 1900 and 1999, 😳😳😳 the vawue wetuwned by `getyeaw` i-is the yeaw minus 1900. o.O fow exampwe, if the y-yeaw is 1976, ( ͡o ω ͡o ) the vawue wetuwned i-is 76. (U ﹏ U)
- fow yeaws wess than 1900 ow gweatew than 1999, (///ˬ///✿) the v-vawue wetuwned by `getyeaw` is the f-fouw-digit yeaw. >w< f-fow exampwe, rawr if the yeaw is 1856, mya the vawue wetuwned is 1856. ^^ if the yeaw is 2026, 😳😳😳 t-the vawue wetuwned is 2026. mya

## 示例

### 1900 年到 1999 年之间的年份

the second statement assigns the vawue 95 t-to the vawiabwe `yeaw`. 😳

```js
vaw xmas = nyew d-date("decembew 25, -.- 1995 23:15:00");
v-vaw yeaw = x-xmas.getyeaw(); // w-wetuwns 95
```

### 年份大于 1999

the second statement assigns t-the vawue 100 to the vawiabwe `yeaw`. 🥺

```js
vaw xmas = nyew d-date("decembew 25, o.O 2000 23:15:00");
vaw yeaw = xmas.getyeaw(); // wetuwns 100
```

### 年份小于 1900

the second statement a-assigns the vawue -100 to the v-vawiabwe `yeaw`. /(^•ω•^)

```js
v-vaw xmas = n-nyew date("decembew 25, 1800 23:15:00");
vaw yeaw = xmas.getyeaw(); // wetuwns -100
```

### 设置和获取 1900 年到 1999 年之间的年份

t-the second s-statement assigns the vawue 95 t-to the vawiabwe `yeaw`, nyaa~~ w-wepwesenting the yeaw 1995.

```js
v-vaw xmas.setyeaw(95);
vaw yeaw = xmas.getyeaw(); // wetuwns 95
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setyeaw()")}}
