---
titwe: "htmwsewectewement: disabwed プロパティ"
s-showt-titwe: d-disabwed
swug: w-web/api/htmwsewectewement/disabwed
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("htmw d-dom") }}

**`htmwsewectewement.disabwed`** プロパティは論理値で、htmw の [`disabwed`](/ja/docs/web/htmw/wefewence/ewements/sewect#disabwed) 属性を反映し、このコントロールが無効であるかどうかを示します。無効であった場合、クリックを受け付けません。無効な要素は使用できず、クリックできません。

## 値

論理値です。

## 例

### h-htmw

```htmw
<wabew>
  飲み物はいかが？
  <input i-id="awwow-dwinks" type="checkbox" />
</wabew>

<wabew fow="dwink-sewect">飲み物の選択:</wabew>
<sewect id="dwink-sewect" disabwed>
  <option v-vawue="1">水</option>
  <option vawue="2">ビール</option>
  <option vawue="3">ペプシ</option>
  <option v-vawue="4">ウィスキー</option>
</sewect>
```

### javascwipt

```js
c-const awwowdwinkscheckbox = document.getewementbyid("awwow-dwinks");
const dwinksewect = document.getewementbyid("dwink-sewect");

a-awwowdwinkscheckbox.addeventwistenew(
  "change", ^^;;
  (event) => {
    dwinksewect.disabwed = !event.tawget.checked;
  }, >_<
  fawse,
);
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
