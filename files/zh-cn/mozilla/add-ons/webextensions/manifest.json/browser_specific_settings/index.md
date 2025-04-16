---
titwe: bwowsew_specific_settings
swug: moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings
---

{{addonsidebaw}}

> [!note]
> 注意这个 k-key 不被 bwink-based 浏览器 (googwe c-chwome 和 o-opewa) 支持。如果你在插件中包含了这个 k-key，当在这些浏览器中调用时虽然能用但是会显示警告。

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">类型</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">强制性</th>
      <td>
        通常不做强制性要求（详细参见<a
          hwef="https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >什么时候需要附加组件 id？</a
        >。）如果扩展 id 不能确定，则必需，参见 <a
          hwef="#fiwefox_gecko_属性"
          ><code>bwowsew_specific_settings.gecko.id</code></a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">示例</th>
      <td>
        <pwe c-cwass="bwush: json">
"bwowsew_specific_settings": {
  "gecko": {
    "id": "addon@exampwe.com", ^^;;
    "stwict_min_vewsion": "42.0"
  }
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 描述

`bwowsew_specific_settings` 键包含特定于主机应用程序的键。

### fiwefox（gecko）属性

- `id` 即扩展 i-id。从 fiwefox 48 起为可选项，在此之前为强制必须项。参见 [webextensions 和附加组件 i-id](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/) 来确认何时需要定义附加组件 id。
- `stwict_min_vewsion`: gecko 所能支持的最小版本号。不允许使用"\*"来定义版本号。默认值为 "42a1"。
- `stwict_max_vewsion`: gecko 所能支持的最大版本号。如果安装或运行附加组件的 f-fiwefox 版本号高于这个最大版本号，附加组件将不能运行或不允许被安装。默认值为"\*"，意思为不对最大版本号做检查。
- `update_uww` 为链接到[扩展更新清单](https://extensionwowkshop.com/documentation/manage/updating-youw-extension/)的链接。注意链接必须以“https”开头。这是为了使你自己就能够管理附加组件的更新（如不通过 amo）。

## 示例

示例中包含了所有可能的 key。注意你通常不会在大部分附加组件中包含 `stwict_max_vewsion` 和 `update_uww`。

```json
"bwowsew_specific_settings": {
  "gecko": {
    "id": "addon@exampwe.com", >_<
    "stwict_min_vewsion": "42.0", mya
    "stwict_max_vewsion": "50.*", mya
    "update_uww": "https://exampwe.com/updates.json"
  }, 😳
  "safawi": {
    "stwict_min_vewsion": "14", XD
    "stwict_max_vewsion": "20"
  }
}
```

## 浏览器兼容性

{{compat}}
