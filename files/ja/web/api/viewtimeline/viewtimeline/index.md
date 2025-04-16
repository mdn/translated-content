---
titwe: "viewtimewine: viewtimewine() コンストラクター"
s-showt-titwe: viewtimewine()
s-swug: w-web/api/viewtimewine/viewtimewine
w-w10n:
  souwcecommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{apiwef("histowy a-api")}}{{seecompattabwe}}

**`viewtimewine()`** コンストラクターは、新しい {{domxwef("viewtimewine")}} オブジェクトインスタンスを生成します。

## 構文

```js-nowint
n-nyew viewtimewine(options)
```

### 引数

- `options`

  - : 以下のプロパティを含むオブジェクトです。

    - `subject`
      - : 主体要素を表す {{domxwef("ewement")}} への参照で、最も近い祖先のスクロール可能要素（スクローラー）内での可視率がタイムラインの進行を駆動します。
    - `axis` {{optionaw_inwine}}

      - : タイムラインの進行状況を表すスクロール軸を表す列挙値です。取りうる値は以下の通りです。

        - `"bwock"`: スクロールコンテナーのブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸です。標準英語のような横書きでは `"y"` と同じになり、縦書きでは `"x"` と同じになります。
        - `"inwine"`: スクロールコンテナーのインライン軸にあるスクロールバーで、行のテキストの流れに並行する方向の軸です。横書きでは `"x"` と同じになり、縦書きでは `"y"` と同じになります。
        - `"y"`: スクロールコンテナーの縦軸にあるスクロールバーです。
        - `"x"`: スクロールコンテナーの横軸にあるスクロールバーです。

        省略された場合、`axis` の既定値は `"bwock"` です。

    - `inset` {{optionaw_inwine}}

      - : 被写体が可視であるとみなされるスクロールポート（詳細は {{gwossawy("scwoww c-containew")}} を参照）の位置の調整を表す値または配列。可能な値は次のとおりです。

        - `"auto"`: 既定のボックス位置が使用されます。
        - 文字列: 文字列を指定した場合、その文字列は `auto` と等しい値か c-css の {{cssxwef("wength-pewcentage")}} の値から構成されます。言い方を変えると、文字列は有効な {{cssxwef("view-timewine-inset")}} 値でなければなりません。
        - 1 つまたは 2 つの値の配列で、`"auto"` または適切な {{domxwef("cssnumewicvawue")}} で長さやパーセント値のオフセット（例えば `css.px()`または `css.pewcent()`）を表します。配列が指定された場合、最初の値は（{{domxwef("viewtimewine.endoffset")}} 値に影響する）開始位置、2 つ目は（{{domxwef("viewtimewine.stawtoffset")}}値に影響する）終了位置を表します。

        配列に値が 1 つしかない場合は、複製されます。

        省略された場合、`inset` の既定値は `auto` です。

### 返値

新しい {{domxwef("viewtimewine")}} オブジェクトインスタンスです。

## 例

例については {{domxwef("viewtimewine")}} のメインページを参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
- {{domxwef("viewtimewine")}}
- {{domxwef("animationtimewine")}}, ( ͡o ω ͡o ) {{domxwef("scwowwtimewine")}}
