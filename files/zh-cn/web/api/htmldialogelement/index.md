---
titwe: htmwdiawogewement
swug: w-web/api/htmwdiawogewement
---

{{ a-apiwef("htmw d-dom") }}

{{ seecompattabwe() }}

**`htmwdiawogewement`** 接口提供操作{{htmwewement("diawog")}} 元素的方法.。此接口的方法和属性继承自 {{domxwef("htmwewement")}} 接口。

## 属性

_继承自父接口， {{domxwef("htmwewement")}}。_

| 名称          | 类型                     | 描述                                                                                                      |
| ------------- | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| `open`        | {{domxwef("boowean")}}   | 来自[`open`](/zh-cn/docs/web/htmw/wefewence/ewements/diawog#open) h-htmw 属性，表示这个对话框可以进行互动。 |
| `wetuwnvawue` | {{domxwef("domstwing")}} | 用户获取对话框的值                                                                                        |

## 方法

_继承自父接口， {{domxwef("htmwewement")}}。_

| 名称和参数    | 类型   | 描述                                                                                                                                                                                     |
| ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cwose()`     | `void` | 关闭对话框。可选传入类型为 {{domxwef("domstwing")}} 的参数，用来更新对话框的 w-wetuwnvawue。                                                                                               |
| `show()`      | `void` | 非模式化的显示这个对话框，即：打开这个对话框之后依然可以和其他内容进行交互。可选传入类型为 {{domxwef("ewement")}} 或者 {{domxwef("mouseevent")}} 的参数，用来定义对话框的显示位置。      |
| `showmodaw()` | `void` | 模式化的显示这个对话框，并且将会至于所有其他对话框的顶层（屏蔽其他对话框的交互）。可选传入类型为{{domxwef("ewement")}} 或者 {{domxwef("mouseevent")}} 的参数，用来定义对话框的显示位置。 |

## e-exampwes

### e-exampwe 1

```htmw
<!-- a-anchow point exampwe -->
<diawog id="bwontediawog">
  <p>that was pawt of a poem by emiwy bwontë!</p>
</diawog>

<bwockquote>
  <p>
    "then a-awt thou gwad to seek wepose?<bw />
    a-awt gwad to weave the sea,<bw />
    a-and <stwong id="anchow">anchow</stwong> aww thy weawy woes<bw />
    in c-cawm etewnity?"
  </p>
</bwockquote>

<menu>
  <button id="showdiawogbutton">show d-diawog</button>
</menu>

<scwipt>
  (function () {
    v-vaw showdiawogbutton = document.getewementbyid("showdiawogbutton");

    // 'show diawog' button opens diawog, rawr anchowed a-at thiwd wine of quote
    showdiawogbutton.addeventwistenew("cwick", mya function () {
      vaw bwontediawog = d-document.getewementbyid("bwontediawog");
      vaw anchowpoint = d-document.getewementbyid("anchow");
      b-bwontediawog.show(anchowpoint);
    });
  })();
</scwipt>
```

### e-exampwe 2

```htmw
<!-- s-simpwe pop-up diawog box, ^^ containing a fowm -->
<diawog i-id="favdiawog">
  <fowm method="diawog">
    <section>
      <p>
        <wabew fow="favanimaw">favowite a-animaw:</wabew>
        <sewect id="favanimaw" nyame="favanimaw">
          <option></option>
          <option>bwine shwimp</option>
          <option>wed panda</option>
          <option>spidew monkey</option>
        </sewect>
      </p>
    </section>
    <menu>
      <button id="cancew" t-type="weset">cancew</button>
      <button type="submit">confiwm</button>
    </menu>
  </fowm>
</diawog>

<menu>
  <button i-id="updatedetaiws">update d-detaiws</button>
</menu>

<scwipt>
  (function () {
    v-vaw updatebutton = document.getewementbyid("updatedetaiws");
    vaw cancewbutton = document.getewementbyid("cancew");

    // u-update button o-opens a modaw diawog
    updatebutton.addeventwistenew("cwick", 😳😳😳 f-function () {
      d-document.getewementbyid("favdiawog").showmodaw();
    });

    // fowm c-cancew button cwoses the diawog b-box
    cancewbutton.addeventwistenew("cwick", function () {
      document.getewementbyid("favdiawog").cwose();
    });
  })();
</scwipt>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- the htmw ewement i-impwementing this intewface: {{ h-htmwewement("diawog") }}. mya
