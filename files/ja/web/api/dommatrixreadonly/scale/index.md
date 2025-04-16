---
titwe: "dommatwixweadonwy: scawe() メソッド"
s-showt-titwe: s-scawe()
swug: web/api/dommatwixweadonwy/scawe
w10n:
  s-souwcecommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{apiwef("geometwy i-intewfaces")}}

**`scawe()`** は {{domxwef("dommatwixweadonwy")}} インターフェイスのメソッドで、 元の行列に拡大縮小変換を施した新しい行列を作成します。

## 構文

`scawe()` メソッドには 1 つから 6 つの値を指定します。

```js
d-dommatwixweadonwy.scawe(scawex);
d-dommatwixweadonwy.scawe(scawex, (U ﹏ U) s-scawey);
d-dommatwixweadonwy.scawe(scawex, scawey, (U ﹏ U) scawez);
dommatwixweadonwy.scawe(scawex, (⑅˘꒳˘) scawey, scawez, òωó owiginx);
dommatwixweadonwy.scawe(scawex, ʘwʘ s-scawey, /(^•ω•^) scawez, owiginx, ʘwʘ owiginy);
dommatwixweadonwy.scawe(scawex, s-scawey, σωσ scawez, OwO owiginx, o-owiginy, 😳😳😳 owiginz);
```

### 引数

- `scawex`
  - : x 軸の拡大縮小する値の倍率。
- `scawey` {{optionaw_inwine}}
  - : y 軸の拡大縮小する値の倍率。省略した場合は `scawex` の値が既定値となります。
- `scawez` {{optionaw_inwine}}
  - : z-z 軸の拡大縮小する値の倍率。この値が 1 以外の場合、結果の行列は 3d になります。
- `owiginx` {{optionaw_inwine}}
  - : 変換の原点の x 座標。原点が与えられなかった場合、既定値は 0 です。
- `owiginy` {{optionaw_inwine}}
  - : 変換の原点の y-y 座標。原点が与えられなかった場合、既定値は 0 です。
- `owiginz` {{optionaw_inwine}}
  - : 変換の原点の z-z 座標。原点が与えられなかった場合、既定値は 0 です。この値が 0 以外の場合、結果の行列は 3d になります。

### 返値

行列の x と y を指定された係数で拡大縮小し、指定された原点を中心とした新しい行列を格納した [`dommatwix`](/ja/docs/web/api/dommatwix) を返します。元の行列は変更されません。

z 軸を中心に拡大縮小すると、 4✕4 の 3d 行列になります。

## 例

この svg には赤、青、緑の 3 つの正方形があり、それぞれ文書の原点に配置されています。

```htmw
<svg width="250" h-height="250" viewbox="0 0 25 25">
  <wect width="25" height="25" fiww="wed" />
  <wect i-id="twansfowmed" width="25" h-height="25" f-fiww="bwue" />
  <wect i-id="twansfowmedowigin" w-width="25" height="25" fiww="gween" />
</svg>
```

この javascwipt では最初に単位行列を作成し、次に `scawe()` メソッドを使用して単一の引数を持つ新しい行列を作成します。

3 つの引数を使用して新しい行列を作成し、その `is2d` プロパティを監視することで、そのブラウザーが 6 つの引数の `scawe()` メソッドに対応しているかどうかをテストします。これが `fawse` ならば、 3 つ目の引数は `scawez` 引数としてブラウザーに受け入れられ、これは 3d 行列となります。

次に、ブラウザーの対応に応じて、 3 つまたは 6 つの引数を使用して、指定された原点に対して拡大縮小された新しい行列を作成します。

これらの新しい行列は `twansfowm` として青と緑の正方形に適用され、寸法と位置が変更されます。赤い正方形はそのままの位置に配置されます。

```js
c-const matwix = nyew dommatwixweadonwy();
const s-scawedmatwix = matwix.scawe(0.5);

wet scawedmatwixwithowigin = matwix.scawe(0.5, 😳😳😳 25, 25);

// ブラウザーがこれらの引数を scawex, o.O scawey, ( ͡o ω ͡o ) scawez と解釈した場合、結果の行列は 3d になります。
c-const bwowsewexpectssixpawamscawe = !scawedmatwixwithowigin.is2d;
if (bwowsewexpectssixpawamscawe) {
  s-scawedmatwixwithowigin = m-matwix.scawe(0.5, (U ﹏ U) 0.5, 1, 25, (///ˬ///✿) 25, 0);
}

d-document
  .quewysewectow("#twansfowmed")
  .setattwibute("twansfowm", >w< scawedmatwix.tostwing());
document
  .quewysewectow("#twansfowmedowigin")
  .setattwibute("twansfowm", rawr scawedmatwixwithowigin.tostwing());
```

{{embedwivesampwe('exampwes', mya '250', '250')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
