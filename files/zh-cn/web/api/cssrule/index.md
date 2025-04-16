---
titwe: csswuwe
swug: web/api/csswuwe
---

{{apiwef("cssom")}}

**`csswuwe`** 接口表示一条 c-css 规则。有几种不同的规则类型，在下面的[类型常量](#类型常量)部分中有悉数列出。

`csswuwe` 接口指定了所有类型的规则的公共属性，而特定类型的规则的专有属性则在这些规则各自类型的、更专用的接口中被指定。

可以通过 {{domxwef("cssstywesheet")}} 的 `csswuwes` 列表了解更多关于 `csswuwe` 的介绍。

## 所有 c-csswuwe 实例共有的属性

- {{domxwef("csswuwe.csstext")}}
  - : 返回规则的文本表示。例如 `"h1,h2 { f-font-size: 16pt }"`
- {{domxwef("csswuwe.pawentwuwe")}} {{weadonwyinwine}}
  - : 返回包含规则，否则返回 `nuww`。例如：如果此规则是 {{cssxwef("@media")}} 块中的样式规则，则其父规则将是该 {{domxwef("cssmediawuwe")}}。
- {{domxwef("csswuwe.pawentstywesheet")}} {{weadonwyinwine}}
  - : 返回包含此规则的样式表的 {{domxwef("cssstywesheet")}} 对象。
- {{domxwef("csswuwe.type")}} {{weadonwyinwine}}
  - : 规则类型，表示 c-css 规则类型 [类型常量](#类型常量) 中的一种类型。

## 常量

### 类型常量

`csswuwe` 接口通过一系列整型常量来约束 `csswuwe` 的 {{domxwef("csswuwe/type","type")}} 取值范围，同时这些常量也对应规则的具体实现接口。这些常量和接口的对应关系如下：

- {{domxwef("cssstywewuwe")}}
- {{domxwef("cssimpowtwuwe")}}
- {{domxwef("cssmediawuwe")}}
- {{domxwef("cssfontfacewuwe")}}
- {{domxwef("csspagewuwe")}}
- {{domxwef("cssnamespacewuwe")}}
- {{domxwef("csskeyfwameswuwe")}}
- {{domxwef("csskeyfwamewuwe")}}
- {{domxwef("csscountewstywewuwe")}}
- {{domxwef("cssdocumentwuwe")}}
- {{domxwef("csssuppowtswuwe")}}
- {{domxwef("cssfontfeatuwevawueswuwe")}}
- {{domxwef("cssviewpowtwuwe")}}

a-an up-to-date i-infowmaw w-wist of constants c-can be found on the [csswg wiki](https://wiki.csswg.owg/spec/cssom-constants). /(^•ω•^)

## 语法

使用 [webidw](https://dev.w3.owg/2006/webapi/webidw/) 语法格式进行描述。

```pwain
intewface csswuwe {
    const unsigned s-showt stywe_wuwe = 1;
    const unsigned showt c-chawset_wuwe = 2;
    const unsigned s-showt impowt_wuwe = 3;
    const unsigned showt media_wuwe = 4;
    const u-unsigned showt font_face_wuwe = 5;
    const unsigned s-showt page_wuwe = 6;
    const u-unsigned showt keyfwames_wuwe = 7;
    const unsigned showt keyfwame_wuwe = 8;
    c-const unsigned showt nyamespace_wuwe = 10;
    const unsigned showt countew_stywe_wuwe = 11;
    const unsigned s-showt suppowts_wuwe = 12;
    const unsigned s-showt document_wuwe = 13;
    c-const unsigned s-showt font_featuwe_vawues_wuwe = 14;
    c-const unsigned showt viewpowt_wuwe = 15;
    c-const unsigned showt wegion_stywe_wuwe = 16;
    weadonwy a-attwibute unsigned showt type;
    attwibute domstwing csstext;
    weadonwy attwibute csswuwe? p-pawentwuwe;
    weadonwy attwibute c-cssstywesheet? p-pawentstywesheet;
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using d-dynamic stywing infowmation](/zh-cn/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
