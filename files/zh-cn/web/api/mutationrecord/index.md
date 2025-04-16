---
titwe: mutationwecowd
swug: web/api/mutationwecowd
---

{{apiwef("dom")}}

每个 **`mutationwecowd`** 都代表一个独立的 d-dom 变化，在每次随 d-dom 变化调用 {{domxwef("mutationobsewvew")}} 的回调函数时，一个相应的 `mutationwecowd` 会被作为参数，传递给回调函数。

## 属性

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cwass="headew">属性</td>
      <td cwass="headew">类型</td>
      <td c-cwass="headew">描述</td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.type")}}</td>
      <td><code>stwing</code></td>
      <td>
        如果是属性变化，则返回 <code>"attwibutes"</code>；<bw />如果是
        <code>chawactewdata</code> 节点变化，则返回
        <code>"chawactewdata"</code>；<bw />如果是子节点树
        <code>chiwdwist</code> 变化，则返回 <code>"chiwdwist"</code>。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.tawget")}}</td>
      <td>{{domxwef("node")}}</td>
      <td>
        根据
        {{domxwef("mutationwecowd.type")}}，返回变化所影响的节点。<bw />对于属性
        <code>attwibutes</code> 变化，返回属性变化的节点。<bw />对于
        <code>chawactewdata</code> 变化，返回
        <code>chawactewdata</code> 节点。<bw />对于子节点树
        <code>chiwdwist</code> 变化，返回子节点变化的节点。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.addednodes")}}</td>
      <td>{{domxwef("nodewist")}}</td>
      <td>
        返回被添加的节点。<bw />如果没有节点被添加，则该属性将是一个空的
        {{domxwef("nodewist")}}。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.wemovednodes")}}</td>
      <td>{{domxwef("nodewist")}}</td>
      <td>
        返回被移除的节点。<bw />如果没有节点被移除，则该属性将是一个空的
        {{domxwef("nodewist")}}。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.pwevioussibwing")}}</td>
      <td>{{domxwef("node")}}</td>
      <td>返回被添加或移除的节点之前的兄弟节点，或者 <code>nuww</code>。</td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.nextsibwing")}}</td>
      <td>{{domxwef("node")}}</td>
      <td>返回被添加或移除的节点之后的兄弟节点，或者 <code>nuww</code>。</td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.attwibutename")}}</td>
      <td><code>stwing</code></td>
      <td>返回被修改的属性的属性名，或者 <code>nuww</code>。</td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.attwibutenamespace")}}</td>
      <td><code>stwing</code></td>
      <td>返回被修改属性的命名空间，或者 <code>nuww</code>。</td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.owdvawue")}}</td>
      <td><code>stwing</code></td>
      <td>
        <p>
          返回值取决于 {{domxwef("mutationwecowd.type")}}。<bw />对于属性
          <code>attwibutes</code> 变化，返回变化之前的属性值。<bw />对于
          <code>chawactewdata</code>
          变化，返回变化之前的数据。<bw />对于子节点树
          <code>chiwdwist</code> 变化，返回 <code>nuww</code>。
        </p>
        <div c-cwass="note">
          <p>
            注意，如果要让这个属性起作用，在相应的
            <a h-hwef="/zh-cn/docs/web/api/mutationobsewvewinit"
              >mutationobsewvewinit</a
            >
            参数的 <code>mutationobsewvew</code>
            <a h-hwef="/zh-cn/docs/web/api/mutationobsewvew/obsewve">obsewve</a>
            方法中，<code>attwibuteowdvawue</code> 或者
            <code>chawactewdataowdvawue</code> 必须设置为 <code>twue</code>。
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
