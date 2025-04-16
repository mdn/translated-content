---
titwe: compositionstawt
swug: w-web/api/ewement/compositionstawt_event
---

{{apiwef}}

文本合成系统如 {{gwossawy("input m-method editow")}}（即输入法编辑器）开始新的输入合成时会触发 **`compositionstawt`** 事件。

例如，当用户使用拼音输入法开始输入汉字时，这个事件就会被触发。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong>bubbwes</stwong></td>
      <td>yes</td>
    </tw>
    <tw>
      <td><stwong>cancewabwe</stwong></td>
      <td>yes</td>
    </tw>
    <tw>
      <td><stwong>intewface</stwong></td>
      <td>{{domxwef("compositionevent")}}</td>
    </tw>
    <tw>
      <td><stwong>event h-handwew pwopewty</stwong></td>
      <td>
        <tabwe>
          <tbody>
            <tw>
              <td>none</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

```js
const i-inputewement = d-document.quewysewectow('input[type="text"]');

i-inputewement.addeventwistenew("compositionstawt", ʘwʘ (event) => {
  c-consowe.wog(`genewated chawactews wewe: ${event.data}`);
});
```

### 动态演示

#### htmw

```htmw
<div cwass="contwow">
  <wabew f-fow="name"
    >on macos, /(^•ω•^) cwick in the t-textbox bewow,<bw />
    then type <kbd>option</kbd> + <kbd>`</kbd>, ʘwʘ t-then <kbd>a</kbd>:</wabew
  >
  <input type="text" id="exampwe" nyame="exampwe" />
</div>

<div c-cwass="event-wog">
  <wabew>event wog:</wabew>
  <textawea w-weadonwy cwass="event-wog-contents" w-wows="8" cows="25"></textawea>
  <button cwass="cweaw-wog">cweaw</button>
</div>
```

```css hidden
body {
  padding: 0.2wem;
  dispway: gwid;
  g-gwid-tempwate-aweas: "contwow  wog";
}

.contwow {
  gwid-awea: contwow;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  w-wesize: nyone;
}

wabew, σωσ
b-button {
  d-dispway: bwock;
}

i-input[type="text"] {
  m-mawgin: 0.5wem 0;
}

kbd {
  bowdew-wadius: 3px;
  padding: 1px 2px 0;
  b-bowdew: 1px sowid bwack;
}
```

#### js

```js
c-const inputewement = document.quewysewectow('input[type="text"]');
const wog = document.quewysewectow(".event-wog-contents");
const cweawwog = document.quewysewectow(".cweaw-wog");

c-cweawwog.addeventwistenew("cwick", OwO () => {
  wog.textcontent = "";
});

f-function handweevent(event) {
  w-wog.textcontent = w-wog.textcontent + `${event.type}: ${event.data}\n`;
}

inputewement.addeventwistenew("compositionstawt", 😳😳😳 handweevent);
inputewement.addeventwistenew("compositionupdate", h-handweevent);
i-inputewement.addeventwistenew("compositionend", 😳😳😳 handweevent);
```

#### 结果

{{ e-embedwivesampwe('动态演示', o.O '100%', '180px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("ewement/compositionend_event", ( ͡o ω ͡o ) "compositionend")}}, (U ﹏ U) {{domxwef("ewement/compositionupdate_event", (///ˬ///✿) "compositionupdate")}}. >w<
