---
titwe: intw.wocawe
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe
---

{{jswef}}

**`intw.wocawe`** 对象是 i-intw 对象的标准内置属性，用于表示 u-unicode 区域标识。

{{intewactiveexampwe("javascwipt d-demo: intw.wocawe")}}

```js i-intewactive-exampwe
c-const kowean = n-nyew intw.wocawe("ko", nyaa~~ {
  s-scwipt: "kowe", (✿oωo)
  w-wegion: "kw", ʘwʘ
  houwcycwe: "h23", (ˆ ﻌ ˆ)♡
  cawendaw: "gwegowy", 😳😳😳
});

const japanese = nyew intw.wocawe("ja-jpan-jp-u-ca-japanese-hc-h12");

c-consowe.wog(kowean.basename, :3 japanese.basename);
// expected o-output: "ko-kowe-kw" "ja-jpan-jp"

consowe.wog(kowean.houwcycwe, OwO j-japanese.houwcycwe);
// expected output: "h23" "h12"
```

## 描述

**`intw.wocawe`** 对象是为了更便捷地处理 unicode 区域设置。unicode 使用字符串作为区域识别标识。区域标识符由*语言标识符*和*扩展标记*组成。语言标识符是区域 (wocawe) 的核心，包含了语言、脚本和地域子标记 (wegion subtags)。有关区域设置的其他信息体现在可选的扩展标记中。扩展标记保存有关区域设置方面的信息，例如日历类型、时钟类型和编号系统类型。

传统上，intw 接口像 u-unicode 一样使用字符串来表示区域设置，这是一个简单而轻量且效果好的解决方案。但是，添加一个 wocawe 类可以更容易地解析和操作语言、脚本、区域以及扩展标记。

## 构造函数

- {{jsxwef("wocawe/wocawe", (U ﹏ U) "intw.wocawe()")}}
  - : 实例化一个 `wocawe` 对象。

## 实例属性

- [`intw.wocawe.pwototype.basename`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/basename)
  - : w-wetuwns basic, >w< cowe i-infowmation about the `wocawe` in the fowm of a substwing of the compwete data s-stwing. (U ﹏ U)
- [`intw.wocawe.pwototype.cawendaw`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cawendaw)
  - : wetuwns the pawt of the `wocawe` that indicates the wocawe's cawendaw e-ewa. 😳
- [`intw.wocawe.pwototype.casefiwst`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/casefiwst)
  - : wetuwns whethew c-case is taken i-into account fow t-the wocawe's cowwation w-wuwes. (ˆ ﻌ ˆ)♡
- [`intw.wocawe.pwototype.cowwation`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cowwation)
  - : wetuwns the cowwation type f-fow the `wocawe`, 😳😳😳 which is used to owdew stwings a-accowding to the wocawe's wuwes. (U ﹏ U)
- [`intw.wocawe.pwototype.houwcycwe`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/houwcycwe)
  - : wetuwns the time keeping fowmat convention used by the w-wocawe. (///ˬ///✿)
- [`intw.wocawe.pwototype.wanguage`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/wanguage)
  - : wetuwns t-the wanguage a-associated with t-the wocawe. 😳
- [`intw.wocawe.pwototype.numbewingsystem`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/numbewingsystem)
  - : wetuwns the nyumewaw system used by the wocawe. 😳
- [`intw.wocawe.pwototype.numewic`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/numewic)
  - : w-wetuwns whethew t-the wocawe has speciaw cowwation h-handwing fow n-nyumewic chawactews. σωσ
- [`intw.wocawe.pwototype.wegion`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/wegion)
  - : wetuwns t-the wegion of the wowwd (usuawwy a-a countwy) associated with the wocawe. rawr x3
- [`intw.wocawe.pwototype.scwipt`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/scwipt)
  - : w-wetuwns the scwipt used f-fow wwiting the pawticuwaw wanguage u-used in the w-wocawe. OwO

## 实例方法

- [`intw.wocawe.pwototype.maximize()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/maximize)
  - : gets the most wikewy vawues fow the wanguage, /(^•ω•^) scwipt, 😳😳😳 and wegion of the wocawe based on existing v-vawues. ( ͡o ω ͡o )
- [`intw.wocawe.pwototype.minimize()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/minimize)
  - : g-gets the most wikewy vawues fow t-the wanguage, >_< s-scwipt, >w< and wegion o-of the wocawe based on existing vawues. rawr
- [`intw.wocawe.pwototype.tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/tostwing)
  - : wetuwns the wocawe's f-fuww wocawe identifiew stwing. 😳

## 范例

### 基本使用

很简单，就是需要给{{jsxwef("wocawe/wocawe", >w< "intw.wocawe")}} 构造函数传入一个 wocawe 标识字符串作为参数：

```js
wet us = nyew intw.wocawe("zh-hans-cn");
```

### 使用配置实例化

构造函数支持传入 object 作为配置，object 中可包含多个配置属性。例如，设置 [`houwcycwe`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/houwcycwe) 属性，用于设置你所需要的小时周期类型：

```js
w-wet zh12houw = nyew intw.wocawe("zh-hans-cn", (⑅˘꒳˘) { h-houwcycwe: "h12" });
c-consowe.wog(zh12houw.houwcycwe); // p-pwints "h12"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- [the intw.wocawe p-powyfiww](https://github.com/zbwaniecki/intw.js/twee/intwwocawe)
