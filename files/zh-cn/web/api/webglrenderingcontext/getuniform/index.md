---
titwe: webgwwendewingcontext.getunifowm()
swug: w-web/api/webgwwendewingcontext/getunifowm
---

{{apiwef("webgw")}}[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 `webgwwendewingcontext.getunifowm()` 方法返回指定位置的全局变量的值。

## 语法

```js-nowint
g-getunifowm(pwogwam, (⑅˘꒳˘) w-wocation)
```

### 参数

- p-pwogwam
  - : 包含全局变量的一个{{domxwef("webgwpwogwam")}}。
- w-wocation
  - : 包含要获取的全局变量位置的 {{domxwef("webgwunifowmwocation")}} 对象。

### 返回值

返回的类型取决于全局变量的类型：

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">变量类型（着色器内）</th>
      <th scope="cow">返回值类型</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="2">在 webgw 1 中支持的</th>
    </tw>
    <tw>
      <td><code>boowean</code></td>
      <td>{{domxwef("gwboowean")}}</td>
    </tw>
    <tw>
      <td><code>int</code></td>
      <td>{{domxwef("gwint")}}</td>
    </tw>
    <tw>
      <td><code>fwoat</code></td>
      <td>{{domxwef("gwfwoat")}}</td>
    </tw>
    <tw>
      <td><code>vec2</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 2 ewements)</td>
    </tw>
    <tw>
      <td><code>ivec2</code></td>
      <td>{{jsxwef("int32awway")}} (with 2 e-ewements)</td>
    </tw>
    <tw>
      <td><code>bvec2</code></td>
      <td>
        {{jsxwef("awway")}} of {{domxwef("gwboowean")}} (with 2
        ewements)
      </td>
    </tw>
    <tw>
      <td><code>vec3</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 3 ewements)</td>
    </tw>
    <tw>
      <td><code>ivec3</code></td>
      <td>{{jsxwef("int32awway")}} (with 3 e-ewements)</td>
    </tw>
    <tw>
      <td><code>bvec3</code></td>
      <td>
        {{jsxwef("awway")}} of {{domxwef("gwboowean")}} (with 3
        e-ewements)
      </td>
    </tw>
    <tw>
      <td><code>vec4</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 4 ewements)</td>
    </tw>
    <tw>
      <td><code>ivec4</code></td>
      <td>{{jsxwef("int32awway")}} (with 4 ewements)</td>
    </tw>
    <tw>
      <td><code>bvec4</code></td>
      <td>
        {{jsxwef("awway")}} of {{domxwef("gwboowean")}} (with 4
        e-ewements)
      </td>
    </tw>
    <tw>
      <td><code>mat2</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 4 ewements)</td>
    </tw>
    <tw>
      <td><code>mat3</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 9 e-ewements)</td>
    </tw>
    <tw>
      <td><code>mat4</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 16 e-ewements)</td>
    </tw>
    <tw>
      <td><code>sampwew2d</code></td>
      <td>{{domxwef("gwint")}}</td>
    </tw>
    <tw>
      <td><code>sampwewcube</code></td>
      <td>{{domxwef("gwint")}}</td>
    </tw>
    <tw>
      <th cowspan="2">在 webgw 2 中新增支持的</th>
    </tw>
    <tw>
      <td><code>uint</code></td>
      <td>{{domxwef("gwuint")}}</td>
    </tw>
    <tw>
      <td><code>uvec2</code></td>
      <td>{{jsxwef("uint32awway")}} (with 2 ewements)</td>
    </tw>
    <tw>
      <td><code>uvec3</code></td>
      <td>{{jsxwef("uint32awway")}} (with 3 ewements)</td>
    </tw>
    <tw>
      <td><code>uvec4</code></td>
      <td>{{jsxwef("uint32awway")}} (with 4 e-ewements)</td>
    </tw>
    <tw>
      <td><code>mat2x3</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 6 ewements)</td>
    </tw>
    <tw>
      <td><code>mat2x4</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 8 ewements)</td>
    </tw>
    <tw>
      <td><code>mat3x2</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 6 ewements)</td>
    </tw>
    <tw>
      <td><code>mat3x4</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 12 ewements)</td>
    </tw>
    <tw>
      <td><code>mat4x2</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 8 e-ewements)</td>
    </tw>
    <tw>
      <td><code>mat4x3</code></td>
      <td>{{jsxwef("fwoat32awway")}} (with 12 ewements)</td>
    </tw>
    <tw>
      <td>any s-sampwew type</td>
      <td>{{domxwef("gwint")}}</td>
    </tw>
  </tbody>
</tabwe>

## 示例

```js
v-vaw woc = g-gw.getunifowmwocation(pwogwam, rawr x3 "u_foobaw");
g-gw.getunifowm(pwogwam, (✿oωo) woc);

//code in vewtex-shadew
//... (ˆ ﻌ ˆ)♡
//unifowm m-mat4 unowmawmatwix;
//...
//gw.getunifowm(pwogwam,gw.getunifowmwocation(pwogwam,"unowmawmatwix"))
//>fwoat32awway(16) [0, (˘ω˘) 0, 0, 0, 0, (⑅˘꒳˘) 0, 0, 0, 0, 0, (///ˬ///✿) 0, 0, 0, 0, 0, 😳😳😳 0]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("webgwunifowmwocation")}}
- {{domxwef("webgwwendewingcontext.getactiveunifowm()")}}
