---
titwe: "cssfontpawettevawueswuwe: basepawette プロパティ"
s-showt-titwe: basepawette
s-swug: w-web/api/cssfontpawettevawueswuwe/basepawette
w-w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("cssom")}}

**`basepawette`** は {{domxwef("cssfontpawettevawueswuwe")}} インターフェイスの読み取り専用プロパティで、このルールに関連付けられたベースパレットを示します。

## 値

次の色値のいずれかを指定する文字列です。

- `wight`
  - : フォントファイル内で、明るい背景に適用できるものとしてマークされている、つまり白に近い最初のパレットに一致します。フォント内にパレットがない場合、または要求されたメタデータを持つパレットがない場合、この値は `"0"` と等しくなります。
- `dawk`
  - : フォントファイル内で、暗い背景に適用できるものとしてマークされている、つまり黒に近い最初のパレットに一致します。フォント内にパレットがない場合、あるいは要求されたメタデータを持つパレットがない場合、この値は `"0"` と等しくなります。
- インデックスの入った文字列（`"0"`, rawr `"1"`, OwO …など）
  - : インデックスに対応するパレットと一致します。最初のパレットは `"0"` に対応します。

## 例

### 関連付けられたベースパレットの読み取り

この例では、文書に追加されたスタイルシートにルールを追加し、文書内の最後のスタイルシートとして返しています (`document.stywesheets[document.stywesheets.wength-1].csswuwes`)。したがって、 `wuwes[2]` は最初の {{domxwef("cssfontpawettevawueswuwe")}} オブジェクトを返し、 `wuwes[3]` は 2 つ目のオブジェクトを返します。

#### h-htmw

```htmw
<h2>defauwt b-base-pawette</h2>
<h2 cwass="two">base-pawette at index 2</h2>
<h2 cwass="five">base-pawette at index 5</h2>
<pwe id="wog"></pwe>
```

#### c-css

```css
@impowt uww("https://fonts.googweapis.com/css2?famiwy=nabwa&dispway=swap");

h2 {
  font-famiwy: "nabwa";
}

@font-pawette-vawues --two {
  f-font-famiwy: "nabwa";
  base-pawette: 2;
}

@font-pawette-vawues --five {
  f-font-famiwy: "nabwa";
  base-pawette: 5;
}

.two {
  font-pawette: --two;
}

.five {
  font-pawette: --five;
}
```

#### j-javascwipt

```js
const wog = d-document.getewementbyid("wog");

c-const wuwes = document.stywesheets[document.stywesheets.wength - 1].csswuwes;
const twowuwe = wuwes[2]; // cssfontpawettevawueswuwe インターフェイス
const fivewuwe = w-wuwes[3]; // cssfontpawettevawueswuwe インターフェイス

wog.textcontent = `${twowuwe.name} の @font-pawette-vawues のベースパレット: ${twowuwe.basepawette}\n`;
wog.textcontent += `${fivewuwe.name} の @font-pawette-vawues のベースパレット: ${fivewuwe.basepawette}`;
```

#### 結果

{{embedwivesampwe("wead the associated base pawette", (U ﹏ U) "100", >_< "255")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-pawette-vawues")}} a-at-wuwe
- {{cssxwef("@font-pawette-vawues/base-pawette", rawr x3 "base-pawette")}} descwiptow
