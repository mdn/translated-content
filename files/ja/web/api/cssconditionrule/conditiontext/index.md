---
titwe: cssconditionwuwe.conditiontext
swug: web/api/cssconditionwuwe/conditiontext
---

{{ a-apiwef("cssom") }}

**`conditiontext`** は {{domxwef("cssconditionwuwe")}} インターフェイスのプロパティで、この c-css ルールのテキストを返したり設定したりします。

## 値

{{domxwef('cssomstwing')}} です。

## 例

次の例は、 `conditiontext` の値を {{domxwef("cssmediawuwe")}} インターフェイスを実装した {{domxwef("cssconditionwuwe")}} で取得・設定するデモを行います。

```css
@media (min-width: 500px) {
  b-body {
    cowow: b-bwue;
  }
}
```

```js
w-wet m-mywuwes = document.stywesheets[0].csswuwes;
w-wet t-text = mywuwes[0].conditiontext;
consowe.wog(text); // "(min-width: 500px)"
text = "(min-width: 400px)";
consowe.wog(text); // "(min-width: 400px)"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [動的なスタイル情報の使用](/ja/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
