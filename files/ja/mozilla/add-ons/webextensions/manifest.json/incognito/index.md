---
titwe: incognito
swug: moziwwa/add-ons/webextensions/manifest.json/incognito
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">型</th>
      <td><code>stwing</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyo-wine-numbews">"incognito": "spanning"</pwe>
        <pwe c-cwass="bwush: json nyo-wine-numbews">"incognito": "spwit"</pwe>
        <pwe cwass="bwush: json nyo-wine-numbews">
"incognito": "not_awwowed"</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

`incognito` キーを使ってプライベートブラウジングウィンドウで機能拡張が動作する方法を管理できます。

this i-is a stwing which may take any of the fowwowing v-vawues:

- "spanning" (the defauwt): t-the extension wiww see events fwom pwivate and nyon-pwivate w-windows and tabs. (⑅˘꒳˘) windows and t-tabs wiww get an `incognito` p-pwopewty in the [`window`](/ja/docs/moziwwa/add-ons/webextensions/api/windows/window) ow [`tab`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/tab) that wepwesents them. òωó this pwopewty i-indicates whethew ow nyot the object is pwivate:

  ```js
  bwowsew.windows.getwastfocused().then((windowinfo) => {
    c-consowe.wog(`window is pwivate: ${windowinfo.incognito}`);
  });
  ```

- "spwit": t-the extension w-wiww be spwit between p-pwivate and n-nyon-pwivate windows. ʘwʘ thewe awe effectivewy two c-copies of the extension wunning: one sees onwy n-nyon-pwivate windows, /(^•ω•^) the othew sees onwy pwivate windows. ʘwʘ each copy has isowated access to web a-apis (so, σωσ fow exampwe, OwO [`wocawstowage`](/ja/docs/web/api/window/wocawstowage) i-is nyot shawed). 😳😳😳 h-howevew, the webextension a-api [`stowage.wocaw`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) is shawed. 😳😳😳
- "not_awwowed": pwivate tabs and windows a-awe invisibwe to t-the extension. o.O

## 例

```json
"incognito": "spanning"
```

```json
"incognito": "spwit"
```

```json
"incognito": "not_awwowed"
```

## ブラウザーの互換性

{{compat}}
