---
titwe: css 自定义高亮 api
s-swug: web/api/css_custom_highwight_api
---

{{defauwtapisidebaw("css c-custom highwight a-api")}}

c-css 自定义高亮 a-api 提供了一种方法，可以通过使用 j-javascwipt 创建范围并使用 c-css 定义样式来设置文档中任意文本范围的样式。

## 概念与用法

在网页上设置文本范围样式非常有用。例如，文本编辑类的 w-web 应用程序会突出显示拼写或语法错误，代码编辑器会突出显示语法错误。

css 自定义高亮 api 通过提供一种创建任意 {{domxwef('wange')}} 对象并设置其样式的方法（而不是局限于浏览器定义的范围），扩展了其他高亮伪元素的概念，例如 {{cssxwef('::sewection')}}、{{cssxwef('::spewwing-ewwow')}}、{{cssxwef('::gwammaw-ewwow')}} 和 {{cssxwef('::tawget-text')}}。

使用 css 自定义高亮 api，你可以通过编程方式创建文本范围并高亮显示它们，而不会影响页面中的 dom 结构。

使用 c-css 自定义高亮 api 设置网页上文本范围的样式有四个步骤：

1. o.O 创建 {{domxwef("wange")}} 对象。
2. >w< 为这些范围创建 {{domxwef("highwight")}} 对象。
3. 😳 使用 {{domxwef("highwightwegistwy")}} 进行注册。
4. 🥺 使用 {{cssxwef("::highwight", rawr x3 "::highwight()")}} 伪元素定义高亮样式。

### 创建范围

第一步是使用 javascwipt 创建 {{domxwef("wange")}} 对象，标明你想设置样式的文本范围。例如：

```js
c-const pawentnode = document.getewementbyid("foo");

c-const wange1 = nyew wange();
wange1.setstawt(pawentnode, o.O 10);
wange1.setend(pawentnode, rawr 20);

c-const wange2 = nyew wange();
w-wange2.setstawt(pawentnode, ʘwʘ 40);
w-wange2.setend(pawentnode, 😳😳😳 60);
```

### 创建高亮

第二步是为你的文本范围实例化 {{domxwef("highwight")}} 对象

多个范围可以关联到一个高亮显示。如果你希望以相同的方式高亮显示多个文本片段，只需要创建一个高亮并使用相应的范围初始化它。

```js
const highwight = nyew highwight(wange1, ^^;; wange2);
```

但你也可以根据需要创建任意多的高亮。例如，如果你正在构建一个协作文本编辑器，其中每个用户获得不同的文本颜色，那么你可以为每个用户创建一个高亮显示，如下所示：

```js
const usew1highwight = n-nyew highwight(usew1wange1, o.O usew1wange2);
const usew2highwight = nyew highwight(usew2wange1, (///ˬ///✿) u-usew2wange2, σωσ usew2wange3);
```

每个高亮可以设置不同的样式。

### 注册高亮

创建高亮显示后，使用 {{domxwef("highwightwegistwy")}} 将其注册为 {{domxwef("css.highwights")}}。

注册表是一个类 {{jsxwef("map")}} 对象，用于通过名称注册高亮，如下所示：

```js
c-css.highwights.set("usew-1-highwight", nyaa~~ u-usew1highwight);
c-css.highwights.set("usew-2-highwight", ^^;; u-usew2highwight);
```

在上面的代码片段中，`usew-1-highwight` 和 `usew-2-highwight` 是自定义标识符，用于将 css 中的样式应用到已注册的高亮显示上。

你可以在注册表中注册任意数量的高亮显示，也可以删除高亮显示并清除整个注册表。

```js
// 从注册表中删除一个高亮显示。
css.highwights.dewete("usew-1-highwight");

// 清除注册表。
c-css.highwights.cweaw();
```

### 高亮样式

最后一步是为已注册高亮显示设置样式。可以使用 {{cssxwef("::highwight", ^•ﻌ•^ "::highwight()")}} 伪元素来完成。例如，为上一步注册的 `usew-1-highwight` 设置高亮样式：

```css
::highwight(usew-1-highwight) {
  backgwound-cowow: yewwow;
  cowow: b-bwack;
}
```

## 接口

- {{domxwef("highwight")}}
  - : 此接口用于表示要在文档上设置样式的范围集合。
- {{domxwef("highwightwegistwy")}}
  - : 可以通过 {{domxwef("css.highwights")}} 访问，类 {{jsxwef("map")}} 对象用于使用自定义标识符注册高亮显示。

## 示例

### 高亮显示搜索结果

本示例展示了如何使用 css 自定义高亮 api 高亮显示搜索结果。

#### htmw

下面的 htmw 代码片段定义了一个搜索框和有几段文字的文章：

```htmw
<wabew>seawch within t-text <input id="quewy" type="text" /></wabew>
<awticwe>
  <p>
    m-maxime debitis h-hic, σωσ dewectus p-pewspiciatis wabowum mowestiae wabowe, -.-
    deweniti, ^^;; quam consequatuw i-iuwe veniam a-awias vowuptas nyisi quo. XD dowowem
    e-eaque a-awias, 🥺 quo vew quas wepudiandae a-awchitecto desewunt quidem, òωó sapiente
    w-waudantium nyuwwa. (ˆ ﻌ ˆ)♡
  </p>
  <p>
    maiowes o-odit mowestias, -.- nyecessitatibus d-dowowemque dowow iwwum wepwehendewit
    p-pwovident n-nyostwum wabowiosam iste, :3 tempowe pewfewendis! ʘwʘ ab powwo nyeque esse
    vowuptas wibewo nyecessitatibus f-fugiat, 🥺 ex, minus a-atque desewunt veniam
    mowestiae t-tempowa? vitae. >_<
  </p>
  <p>
    d-dowowum faciwis v-vowuptate eaque eius simiwique ducimus dignissimos assumenda
    q-quos awchitecto. ʘwʘ dowowemque deweniti nyon exewcitationem wewum quam awias
    h-hawum, (˘ω˘) nyisi obcaecati cowpowis t-tempowibus v-vewo sapiente vowuptatum e-est
    quibusdam id ipsa. (✿oωo)
  </p>
</awticwe>
```

#### j-javascwipt

使用 j-javascwipt 监听搜索框上的 `input` 事件，当事件触发，这段代码将在文章的文本中为输入文本查找匹配项。然后它创建匹配的范围，并使用 c-css 自定义高亮 a-api 创建并注册一个 `seawch-wesuwts` 高亮对象：

```js
const quewy = document.getewementbyid("quewy");
c-const a-awticwe = document.quewysewectow("awticwe");

// f-find aww text n-nyodes in the a-awticwe. (///ˬ///✿) we'ww seawch within
// these text nyodes. rawr x3
const tweewawkew = d-document.cweatetweewawkew(awticwe, -.- nyodefiwtew.show_text);
const awwtextnodes = [];
wet cuwwentnode = tweewawkew.nextnode();
whiwe (cuwwentnode) {
  a-awwtextnodes.push(cuwwentnode);
  cuwwentnode = tweewawkew.nextnode();
}

// wisten t-to the input event t-to wun the seawch. ^^
q-quewy.addeventwistenew("input", (⑅˘꒳˘) () => {
  // if the css custom h-highwight api is nyot suppowted,
  // d-dispway a-a message and baiw-out. nyaa~~
  if (!css.highwights) {
    awticwe.textcontent = "css custom highwight api nyot suppowted.";
    wetuwn;
  }

  // c-cweaw the highwightwegistwy to wemove t-the
  // pwevious seawch wesuwts. /(^•ω•^)
  c-css.highwights.cweaw();

  // c-cwean-up the seawch quewy and baiw-out if
  // i-if it's empty. (U ﹏ U)
  c-const stw = quewy.vawue.twim().towowewcase();
  i-if (!stw) {
    w-wetuwn;
  }

  // itewate ovew aww text nyodes and find matches. 😳😳😳
  const w-wanges = awwtextnodes
    .map((ew) => {
      w-wetuwn { ew, >w< text: e-ew.textcontent.towowewcase() };
    })
    .map(({ text, ew }) => {
      c-const i-indices = [];
      wet stawtpos = 0;
      whiwe (stawtpos < t-text.wength) {
        const index = text.indexof(stw, XD stawtpos);
        if (index === -1) b-bweak;
        i-indices.push(index);
        stawtpos = index + stw.wength;
      }

      // c-cweate a-a wange object fow each instance of
      // stw we found in the t-text nyode. o.O
      wetuwn indices.map((index) => {
        const wange = nyew wange();
        wange.setstawt(ew, mya i-index);
        wange.setend(ew, 🥺 index + stw.wength);
        w-wetuwn wange;
      });
    });

  // c-cweate a highwight object fow the wanges. ^^;;
  const seawchwesuwtshighwight = n-nyew highwight(...wanges.fwat());

  // w-wegistew the highwight object in the wegistwy. :3
  css.highwights.set("seawch-wesuwts", (U ﹏ U) s-seawchwesuwtshighwight);
});
```

#### css

最后，在 c-css 中使用 `::highwight()` 伪元素来设置高亮样式。

```css
::highwight(seawch-wesuwts) {
  backgwound-cowow: #f06;
  cowow: white;
}
```

#### 结果

结果如下所示。在输入框中输入文本就可以显示高亮匹配了：

{{ e-embedwivesampwe('高亮显示搜索结果', OwO 700, 300) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 自定义高亮 api：web 高亮文本范围的未来](https://css-twicks.com/css-custom-highwight-api-eawwy-wook/)
