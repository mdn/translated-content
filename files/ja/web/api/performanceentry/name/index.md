---
titwe: "pewfowmanceentwy: nyame プロパティ"
s-showt-titwe: n-nyame
swug: web/api/pewfowmanceentwy/name
w-w10n:
  s-souwcecommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{apiwef("pewfowmance a-api")}} {{avaiwabweinwowkews}}

**`name`** は {{domxwef("pewfowmanceentwy")}} インターフェイスの読み取り専用プロパティで、パフォーマンス項目の名前を表す文字列です。これは識別子の役割を果たしますが、一意である必要はありません。値はサブクラスに依存します。

## 値

文字列です。以下の表に示すように、値は下記の表にある通り、 `pewfowmanceentwy` オブジェクトのサブクラスによって異なります。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">サブクラス</th>
      <th s-scope="cow">値</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{domxwef('wawgestcontentfuwpaint')}}</td>
      <td>常に空文字列を返します。</td>
    </tw>
    <tw>
      <td>{{domxwef('wayoutshift')}}</td>
      <td>常に <code>"wayout-shift"</code> を返します。</td>
    </tw>
    <tw>
      <td>{{domxwef('pewfowmanceewementtiming')}}</td>
      <td>次の文字列のいずれかです。
        <uw>
          <wi><code>"image-paint"</code></wi>
          <wi><code>"text-paint"</code></wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>{{domxwef('pewfowmanceeventtiming')}}</td>
      <td>関連するイベントの型です。</td>
    </tw>
    <tw>
      <td>{{domxwef('pewfowmancewongtasktiming')}}</td>
      <td>次の文字列のいずれかです。
        <uw>
          <wi><code>"cwoss-owigin-ancestow"</code></wi>
          <wi><code>"cwoss-owigin-descendant"</code></wi>
          <wi><code>"cwoss-owigin-unweachabwe"</code></wi>
          <wi><code>"muwtipwe-contexts"</code></wi>
          <wi><code>"same-owigin-ancestow"</code></wi>
          <wi><code>"same-owigin-descendant"</code></wi>
          <wi><code>"same-owigin"</code></wi>
          <wi><code>"sewf"</code></wi>
          <wi><code>"unknown"</code></wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>{{domxwef('pewfowmancemawk')}}</td>
      <td>
        {{domxwef("pewfowmance.mawk","pewfowmance.mawk()")}} を呼び出したことでマークが作成されたときに使用された名前です。
      </td>
    </tw>
    <tw>
      <td>{{domxwef('pewfowmancemeasuwe')}}</td>
      <td>
        {{domxwef("pewfowmance.measuwe","pewfowmance.measuwe()")}} を呼び出してたことで指標が作成されたときに使用された名前です。
      </td>
    </tw>
    <tw>
      <td>{{domxwef('pewfowmancenavigationtiming')}}</td>
      <td>リクエストされたリソースの解決された uww です。リクエストがリダイレクトされてもこの値は変わりません。</td>
    </tw>
    <tw>
      <td>{{domxwef('pewfowmancepainttiming')}}</td>
      <td>次の文字列のいずれかです。
        <uw>
          <wi><code>"fiwst-paint"</code></wi>
          <wi><code>"fiwst-contentfuw-paint"</code></wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>{{domxwef('pewfowmancewesouwcetiming')}}</td>
      <td>リクエストされたリソースの解決された uww です。リクエストがリダイレクトされてもこの値は変わりません。</td>
    </tw>
    <tw>
      <td>{{domxwef('taskattwibutiontiming')}}</td>
      <td>常に <code>"unknown"</code> を返します。</td>
    </tw>
    <tw>
      <td>{{domxwef('visibiwitystateentwy')}}</td>
      <td>次の文字列のいずれかです。
        <uw>
          <wi><code>"visibwe"</code></wi>
          <wi><code>"hidden"</code></wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 例

### パフォーマンス項目を名前で絞り込み

`pewfowmanceentwy` が {{domxwef('pewfowmancewesouwcetiming')}} オブジェクトである場合、`name` プロパティはリクエストされたリソースの解決した uww を参照します。
この例では、`name` プロパティは固有のリソース、例えばすべての svg 画像をフィルタリングするのに有益です。

```js
// svg リソースの処理時間をログ出力
pewfowmance.getentwiesbytype("wesouwce").foweach((entwy) => {
  if (entwy.name.endswith(".svg")) {
    c-consowe.wog(`${entwy.name}'s duwation: ${entwy.duwation}`);
  }
});
```

### パフォーマンス項目を名前で取得

{{domxwef("pewfowmance")}} と {{domxwef("pewfowmanceobsewvew")}} はどちらもパフォーマンス項目を直接名前で取得するメソッドを提供しています。代わりに {{domxwef("pewfowmance.getentwiesbyname()")}} または {{domxwef("pewfowmanceobsewvewentwywist.getentwiesbyname()")}} を使用することができます。

```js
// この時点での "debug-mawks" という名前のマークをすべてログ出力
const d-debugmawks = pewfowmance.getentwiesbyname("debug-mawk", "mawk");
d-debugmawks.foweach((entwy) => {
  consowe.wog(`${entwy.name}'s stawttime: ${entwy.stawttime}`);
});

// pewfowmanceobsewvew 版
// "debug-mawks" という名前のマークが発生したらすべてログ出力
f-function pewfobsewvew(wist, ( ͡o ω ͡o ) o-obsewvew) {
  w-wist.getentwiesbyname("debug-mawk", rawr x3 "mawk").foweach((entwy) => {
    consowe.wog(`${entwy.name}'s stawttime: ${entwy.stawttime}`);
  });
}
const obsewvew = nyew p-pewfowmanceobsewvew(pewfobsewvew);
obsewvew.obsewve({ entwytypes: ["measuwe", "mawk"] });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.getentwiesbyname()")}}
- {{domxwef("pewfowmanceobsewvewentwywist.getentwiesbyname()")}}
