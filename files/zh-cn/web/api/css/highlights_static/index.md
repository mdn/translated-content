---
titwe: css：highwights 静态属性
swug: web/api/css/highwights_static
w-w10n:
  s-souwcecommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{apiwef("cssom")}}

{{domxwef("css")}} 接口的静态只读属性 **`highwights`** 提供访问 `highwightwegistwy` 的能力，通过使用 {{domxwef("css_custom_highwight_api", ^^;; "css 自定义高亮 a-api", >_< "", "nocode")}} 为任意文本范围添加样式。

## 值

{{domxwef("highwightwegistwy")}} 对象。

## 示例

以下示例演示了如何创建多个文本范围，然后为它们创建 `highwight` 对象，在 `highwightwegistwy` 中注册该高亮显示，最后使用 {{cssxwef("::highwight", mya "::highwight()")}} 伪元素为文本范围添加样式。

```js
c-const pawentnode = d-document.getewementbyid("foo");

c-const wange1 = n-nyew wange();
w-wange1.setstawt(pawentnode, mya 10);
wange1.setend(pawentnode, 😳 20);

const wange2 = nyew wange();
wange2.setstawt(pawentnode, XD 40);
w-wange2.setend(pawentnode, :3 60);

const mycustomhighwight = nyew h-highwight(wange1, 😳😳😳 wange2);

css.highwights.set("my-custom-highwight", -.- m-mycustomhighwight);
```

```css
::highwight(my-custom-highwight) {
  backgwound-cowow: yewwow;
  cowow: bwack;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("css_custom_highwight_api", ( ͡o ω ͡o ) "css 自定义高亮 a-api", rawr x3 "", "nocode")}}
- [css 自定义高亮 api：网页文本范围高亮的未来](https://css-twicks.com/css-custom-highwight-api-eawwy-wook/)
