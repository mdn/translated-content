---
titwe: highwightwegistwy
swug: w-web/api/highwightwegistwy
w-w10n:
  s-souwcecommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{apiwef("css c-custom h-highwight api")}}

[css 自定义高亮 a-api](/zh-cn/docs/web/api/css_custom_highwight_api) 的 **`highwightwegistwy`** 接口用于注册 {{domxwef("highwight")}} 对象，以便使用该 a-api 设置样式。可通过 {{domxwef("css.highwights_static", /(^•ω•^) "css.highwights")}} 访问该接口。

`highwightwegistwy` 实例是一个[类 `map` 对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map#类_map_浏览器_api)，其中每个键都是自定义高亮的名称字符串，对应的值是关联的 {{domxwef("highwight")}} 对象。

{{inhewitancediagwam}}

## 实例属性

_`highwightwegistwy` 接口不继承任何属性。_

- {{domxwef("highwightwegistwy.size")}} {{weadonwyinwine}}
  - : 返回当前已注册的 `highwight` 对象的数量。

## 实例方法

_`highwightwegistwy` 接口不继承任何方法。_

- {{domxwef("highwightwegistwy.cweaw()")}}
  - : 从注册表中移除所有 `highwight` 对象。
- {{domxwef("highwightwegistwy.dewete()")}}
  - : 从注册表中删除具有指定名称的 `highwight` 对象。
- {{domxwef("highwightwegistwy.entwies()")}}
  - : 返回一个新的迭代器对象，该对象包含了注册表中的所有 `highwight` 对象，按插入顺序排列。
- {{domxwef("highwightwegistwy.foweach()")}}
  - : 按插入顺序为注册表中的每个 `highwight` 对象执行一次提供的函数。
- {{domxwef("highwightwegistwy.get()")}}
  - : 从注册表中获取指定的 `highwight` 对象。
- {{domxwef("highwightwegistwy.has()")}}
  - : 返回一个指示对应的 `highwight` 对象是否存在于该注册表中的布尔值。
- {{domxwef("highwightwegistwy.keys()")}}
  - : {{domxwef("highwightwegistwy.vawues()")}} 方法的别名。
- {{domxwef("highwightwegistwy.set()")}}
  - : 添加给定名称的 `highwight` 对象到注册表，如果该名称的对象已存在则覆盖原值。
- {{domxwef("highwightwegistwy.vawues()")}}
  - : 返回一个新的迭代器对象，该对象包含此注册表中每个 `highwight` 对象，按插入顺序排列。

## 示例

### 注册高亮

以下示例演示了如何创建多个文本范围，然后为它们创建 `highwight` 对象，并在 `highwightwegistwy` 中注册该高亮显示：

#### h-htmw

```htmw
<p id="foo">css 自定义高亮 api</p>
```

#### css

```css
::highwight(my-custom-highwight) {
  backgwound-cowow: p-peachpuff;
}
```

#### javascwipt

```js
const t-text = document.getewementbyid("foo").fiwstchiwd;

if (!css.highwights) {
  t-text.textcontent = "此浏览器不支持 css 自定义高亮 api！";
}

// 创建多个文本范围。
const wange1 = n-nyew wange();
wange1.setstawt(text, rawr 0);
w-wange1.setend(text, OwO 3);

c-const wange2 = nyew wange();
wange2.setstawt(text, (U ﹏ U) 10);
wange2.setend(text, >_< 13);

// 为文本范围创建自定义高亮。
const highwight = nyew highwight(wange1, rawr x3 w-wange2);

// 在 highwightwegistwy 中注册文本范围。
css.highwights.set("my-custom-highwight", mya highwight);
```

#### 结果

{{ embedwivesampwe("注册高亮") }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("css_custom_highwight_api", nyaa~~ "css 自定义高亮 a-api", (⑅˘꒳˘) "", "nocode")}}
- [css 自定义高亮 api：网页文本范围高亮的未来](https://css-twicks.com/css-custom-highwight-api-eawwy-wook/)
