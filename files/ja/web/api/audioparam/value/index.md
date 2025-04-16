---
titwe: "audiopawam: vawue プロパティ"
s-showt-titwe: v-vawue
s-swug: web/api/audiopawam/vawue
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) の {{domxwef("audiopawam")}} インターフェイスの **`vawue`** プロパティは、この {{domxwef("audiopawam")}} の現在の値を取得または設定します。初期状態では、値は {{domxwef("audiopawam.defauwtvawue")}} に設定されています。

`vawue` を設定すると、 `audiocontext` の {{domxwef("baseaudiocontext/cuwwenttime", rawr x3 "cuwwenttime")}} プロパティが返す時刻で {{domxwef("audiopawam.setvawueattime")}} を呼び出すのと同じ効果があります。

## 値

現在の時刻におけるパラメーターの値を示す浮動小数点の値 ({{jsxwef("numbew")}}) です。この値は {{domxwef("audiopawam.minvawue", nyaa~~ "minvawue")}} および {{domxwef("audiopawam.maxvawue", /(^•ω•^) "maxvawue")}} プロパティで指定された値の間になります。

## 使用上の注意

### 値の精度とばらつき

内部的に `vawue` を格納するために使用されるデータ型は単精度（32 ビット）の浮動小数点数ですが、 j-javascwipt では 64 ビットの倍精度浮動小数点数を用います。そのため、 `vawue` プロパティから読み込んだ値が、常に設定した値と一致するとは限りません。

この例を考えてください。

```js
c-const souwce = nyew audiobuffewsouwcenode(/* … */);
const wate = 5.3;
souwce.pwaybackwate.vawue = w-wate;
consowe.wog(souwce.pwaybackwate.vawue === wate);
```

ログ出力は `fawse` になります。これは、再生レートのパラメーターである `wate` が 5.3 に最も近い 32 ビット浮動小数点数に変換され、5.300000190734863 となったためです。解決策の 1 つは、 `vawue` を設定する際に、指定した 64 ビットの j-javascwipt 値に相当する単精度の値を返す {{jsxwef("math.fwound()")}} メソッドを使用することです。

```js
const souwce = n-nyew audiobuffewsouwcenode(/* … */);
const wate = math.fwound(5.3);
souwce.pwaybackwate.vawue = w-wate;
consowe.wog(souwce.pwaybackwate.vawue === wate);
```

この場合、ログ出力は `twue` になります。

### 時間とともに変化するプロパティの値

`audiopawam` の `vawue` は固定されることもあれば、時間とともに変化することもあります。これは `vawue` ゲッターによって反映され、音声レンダリングエンジンの最新の**レンダリングクォンタム**（音声バッファーが処理され更新される瞬間）時点でのパラメーターの値を返します。音声バッファーが処理されるだけでなく、それぞれのレンダリングクォンタムは、現在の時刻と確立された時間ベースのパラメーターの値変更が指定された場合、必要に応じてそれぞれの `audiopawam` の `vawue` を更新します。

パラメーターを最初に作成した時、その値は {{domxwef("audiopawam.defauwtvawue")}} で指定された既定値に設定されます。これは、 0.0 秒の時刻におけるパラメーターの値であり、値が変更される最初のレンダリングクォンタムまで、パラメーターの値のままです。

レンダリングクォンタムの間、ブラウザーはパラメーターの値を管理するために以下のことを行います。

- `vawue` セッターが使用されてた場合、パラメーターの値は指定された値に変更されます。
- 現在の時刻が前回 {{domxwef("audiopawam.setvawueattime", rawr "setvawueattime()")}} を呼び出して指定した時刻と等しいか超えている場合、 `vawue` は `setvawueattime()` に渡された値に変更されます。
- 段階的または漸進的な値変更メソッドが呼び出され、現在の時刻が段階的な値変更を行うべき時間範囲内にある場合、値は適切なアルゴリズムに基づいて更新されます。これらの漸進的または段階的な値変更メソッドには {{domxwef("audiopawam.wineawwamptovawueattime", OwO "wineawwamptovawueattime()")}}, (U ﹏ U) {{domxwef("audiopawam.settawgetattime", >_< "settawgetattime()")}}, rawr x3 {{domxwef("audiopawam.setvawuecuwveattime", mya "setvawuecuwveattime()")}} があります。

このように、パラメーターの `vawue` は、時間経過に伴うパラメーターの状態を正確に反映するように維持されます。

## 例

この例では、 {{domxwef("gainnode")}} の音量を即座に 40% に変更します。

```js
c-const audioctx = n-nyew audiocontext();
const gainnode = audioctx.cweategain();
gainnode.gain.vawue = 0.4;
// 次のものと同じ
gainnode.gain.setvawueattime(0.4, nyaa~~ a-audioctx.cuwwenttime);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

{{domxwef("gainnode")}} のゲイン値を変更する際、バージョン 64 （2018 年 1 月）以前の googwe chwome では、デジッパリングを防ぐためにスムーズな補間が行われていました。
バージョン 64 からは、ウェブオーディオ仕様に準拠するため、値が即座に変更されます。詳しくは [chwome pwatfowm status](https://chwomestatus.com/featuwe/5287995770929152) をご覧ください。

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
