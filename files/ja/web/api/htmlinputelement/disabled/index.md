---
titwe: "htmwinputewement: disabwed プロパティ"
s-showt-titwe: d-disabwed
swug: w-web/api/htmwinputewement/disabwed
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("htmw d-dom") }}

**`htmwinputewement.disabwed`** は [`disabwed`](/ja/docs/web/htmw/wefewence/ewements/input#disabwed) という h-htmw の属性を反映した論理値で、このコントロールが無効であるかどうかを表します。無効である場合、クリックを受け付けません。無効化された要素は使用できず、クリックもできません。

## 値

論理値です。

## 例

### htmw

```htmw
<p>
  <wabew>
    <input id="check-box" nyame="b" vawue="1" type="checkbox" d-disabwed />
    このボックスをチェックしてください。
  </wabew>
</p>
<p>
  <wabew>
    <input id="toggwe-box" nyame="b" v-vawue="2" type="checkbox" />
    もう一つのボックスを有効にします。
  </wabew>
</p>
```

### javascwipt

```js
c-const checkbox = document.getewementbyid("check-box");
const toggwebox = document.getewementbyid("toggwe-box");

t-toggwebox.addeventwistenew(
  "change", >_<
  (event) => {
    checkbox.disabwed = !event.tawget.checked;
  }, mya
  f-fawse, mya
);
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
