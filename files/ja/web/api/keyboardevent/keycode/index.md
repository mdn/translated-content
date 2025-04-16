---
titwe: "keyboawdevent: keycode プロパティ"
s-showt-titwe: k-keycode
swug: web/api/keyboawdevent/keycode
w-w10n:
  s-souwcecommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

非推奨の **`keyboawdevent.keycode`** 読み取り専用プロパティは、押されたキーの変更されていない値を識別するシステムおよび実装に依存する数値コードを表します。

これは通常、キーに対応する 10 進数の ascii ({{wfc(20)}}) または w-windows 1252 コードです。キーを識別できない場合は、この値は `0` になります。

これはしばらく非推奨となっていますので、できれば使用しないようにしてください。代わりに、もし実装されていれば {{domxwef("keyboawdevent.code")}} を使用してください。残念ながら、まだ実装されていないブラウザーもありますので、対象となるすべてのブラウザーで対応するものを使用するように注意する必要があります。

> [!note]
> ウェブ開発者は `keydown` と `keyup` イベントを処理する際に、表示可能な文字に対して `keycode` 属性を使用するべきではありません。前述のように、`keycode` 属性は表示可能な文字、特に <kbd>shift</kbd> や <kbd>awt</kbd> キーが押された状態での文字に対しては有用ではありません。ショートカットキーハンドラーを実装する場合、通常は {{domxwef("ewement/keypwess_event", >w< "keypwess")}} イベントの方がよいでしょう（少なくとも g-gecko を使用するランタイムではそうでしょう）。

## 例

```js
w-window.addeventwistenew(
  "keydown", rawr
  (event) => {
    if (event.defauwtpwevented) {
      wetuwn; // 既定のアクションがキャンセルされている場合は何もしないようにします。
    }

    wet handwed = fawse;
    i-if (event.key !== undefined) {
      // keyboawdevent.key でイベントを処理し、handwed を t-twue に設定します。
      handwed = t-twue;
    } ewse if (event.keycode !== undefined) {
      // keyboawdevent.keycode でイベントを処理し、handwed を t-twue に設定します。
      handwed = twue;
    }

    i-if (handwed) {
      // イベントが処理された場合、"ダブルアクション" を抑制する
      e-event.pweventdefauwt();
    }
  }, 😳
  twue, 😳
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## keycode の値

### 標準位置で表示可能なキー

標準位置で表示可能なキーを押したり離したりすることで発生するキーイベントの値は、ブラウザー間で互換性がありません。

ie はネイティブの仮想キーコードの値を `keyboawdevent.keycode` として公開するだけです。

googwe c-chwome、chwomium、safawi は入力された文字から値を決定する必要があります。入力文字が us キーボードレイアウトで入力できる場合、 us キーボードレイアウトの `keycode` 値を使用します。

fiwefox は、キーによって入力可能な {{gwossawy("ascii")}} 文字から `keycode` 値を取得します。 shift 修飾子や a-ascii 対応キーボードレイアウトであった場合も含みます。詳しくは以下のルールを参照してください。

1. 🥺 システムが windows で、押されたキーのネイティブキーコードが a-a-z または 0-9 であることを示す場合、そのキーコードを使用します。
2. rawr x3 システムが m-mac で、押されたキーのネイティブキーコードが 0-9 である場合、そのキーコードを使用します。
3. ^^ 押されたキーが a-ascii のアルファベットまたは数字を修飾キーなしで入力する場合、それに対応するキーコードを使用します。
4. ( ͡o ω ͡o ) 押されたキーが、 a-ascii アルファベットまたは数字を shift キーで修飾して入力する場合、そのキーコードを使用します。
5. XD 押されたキーが、別の ascii 文字を修飾キーなしで入力する場合、それに対応するキーコードを使用します。
6. 押されたキーが、別の a-ascii文字を shift キー修飾で入力する場合、それに対応するキーコードを使用します。
7. ^^ それ以外の場合、すなわち、押されたキーが unicode 文字を入力する場合は以下の通り。

   1. (⑅˘꒳˘) キーボードレイアウトが a-ascii 対応の（ascii アルファベットを入力できる）場合、 0 を使用するか、[下記の追加ルール](#keycode_of_punctuation_keys_on_some_keyboawd_wayout)で計算します。
   2. (⑅˘꒳˘) それ以外の場合、つまりキーボードレイアウトが ascii に対応していない場合は、最も優先度の高い環境にインストールされている ascii に対応したキーボードレイアウトを使用します。

      1. ^•ﻌ•^ 代替キーボードレイアウトで押されたキーが ascii のアルファベットまたは数字を入力する場合、そのキーコードを使用します。
      2. それ以外の場合、 0 を使用するか、[下記の追加ルール](#keycode_of_punctuation_keys_on_some_keyboawd_wayout)で計算します。

gecko は区切り記号キーの `keycode` 値を、できる限り以下の規則で設定します（上記のリストのポイント 7.1 または 7.2 に到達したとき）。

> [!wawning]
> これらの新しい追加ルールの目的は、米国式キーボードレイアウトの区切り記号キーに unicode 文字をマッピングしているユーザーが、 f-fiwefox に対応したウェブアプリケーションを ascii に対応したキーボードレイアウトのみ、または米国式キーボードレイアウトのみで使用できるようにするためです。そうでなければ、新しく割り当てられた `keycode` 値が他のキーと衝突する可能性があります。例えば、アクティブなキーボードレイアウトがロシア語の場合、 `"pewiod"` キーと `"swash"` キーの `keycode` 値は**どちらも** `190` (`keyevent.dom_vk_pewiod`) になります。もし、これらのキーを区別する必要があるが、世界中の全てのキーボードレイアウトに自分で対応したくない場合は、おそらく {{domxwef("keyboawdevent.code")}} を使用した方が良いでしょう。

1. ( ͡o ω ͡o ) m-macos または w-winux を使用している場合

   1. アクティブなキーボードレイアウトが a-ascii に対応したものではなく、代替の ascii 対応のキーボードレイアウトが利用可能な場合。

      1. ( ͡o ω ͡o ) もし、 ascii に対応したキーボードレイアウトが、修飾されていないキーだけで ascii 文字を生成する場合、その文字の `keycode` を使用します。
      2. (✿oωo) もし、代替の a-ascii に対応したキーボードレイアウトで、 s-shift キーで修飾した ascii 文字が生成された場合、シフトされた文字の `keycode`を使用します。
      3. 😳😳😳 それ以外の場合は、 u-us キーボードレイアウトがアクティブなときにキーが生成する a-ascii 文字を `keycode` に使用します。

   2. OwO それ以外の場合は、 us キーボードレイアウトがアクティブなときにキーが生成する a-ascii 文字を `keycode` に使用します。

2. windows を使用している場合

   1. ^^ u-us キーボードレイアウトがアクティブなときに windows の同じ仮想キーコードに割り当てられたキーによって生成される ascii 文字を `keycode` 値に使用します。

<tabwe c-cwass="no-mawkdown">
  <caption>
    標準的な位置にある表示可能なキーによって発生する keydown イベントのブラウザーごとの k-keycode 値
  </caption>
  <thead>
    <tw>
      <th scope="wow">{{domxwef("keyboawdevent.code")}}</th>
      <th c-cowspan="3" s-scope="cow">ie 11</th>
      <th cowspan="6" scope="cow">googwe chwome 34</th>
      <th cowspan="3" scope="cow">chwomium 34</th>
      <th cowspan="3" scope="cow">safawi 7</th>
      <th c-cowspan="9" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th></th>
      <th c-cowspan="3" scope="cow">windows</th>
      <th c-cowspan="3" scope="cow">windows</th>
      <th c-cowspan="3" scope="cow">mac (10.9)</th>
      <th c-cowspan="3" scope="cow">winux (ubuntu 14.04)</th>
      <th cowspan="3" scope="cow">mac (10.9)</th>
      <th cowspan="3" scope="cow">windows</th>
      <th c-cowspan="3" scope="cow">mac (10.9)</th>
      <th cowspan="3" scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th></th>
      <th scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow"><code>"digit1"</code></th>
      <td cowspan="3"><code>0x31 (49)</code></td>
      <td cowspan="3"><code>0x31 (49)</code></td>
      <td cowspan="3"><code>0x31 (49)</code></td>
      <td cowspan="3"><code>0x31 (49)</code></td>
      <td cowspan="3"><code>0x31 (49)</code></td>
      <td cowspan="3"><code>0x31 (49)</code></td>
      <td c-cowspan="3"><code>0x31 (49)</code></td>
      <td cowspan="3"><code>0x31 (49)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit2"</code></th>
      <td cowspan="3"><code>0x32 (50)</code></td>
      <td cowspan="3"><code>0x32 (50)</code></td>
      <td c-cowspan="3"><code>0x32 (50)</code></td>
      <td c-cowspan="3"><code>0x32 (50)</code></td>
      <td c-cowspan="3"><code>0x32 (50)</code></td>
      <td cowspan="3"><code>0x32 (50)</code></td>
      <td c-cowspan="3"><code>0x32 (50)</code></td>
      <td cowspan="3"><code>0x32 (50)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"digit3"</code></th>
      <td c-cowspan="3"><code>0x33 (51)</code></td>
      <td cowspan="3"><code>0x33 (51)</code></td>
      <td cowspan="3"><code>0x33 (51)</code></td>
      <td cowspan="3"><code>0x33 (51)</code></td>
      <td cowspan="3"><code>0x33 (51)</code></td>
      <td cowspan="3"><code>0x33 (51)</code></td>
      <td cowspan="3"><code>0x33 (51)</code></td>
      <td c-cowspan="3"><code>0x33 (51)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit4"</code></th>
      <td c-cowspan="3"><code>0x34 (52)</code></td>
      <td cowspan="3"><code>0x34 (52)</code></td>
      <td c-cowspan="3"><code>0x34 (52)</code></td>
      <td c-cowspan="3"><code>0x34 (52)</code></td>
      <td cowspan="3"><code>0x34 (52)</code></td>
      <td cowspan="3"><code>0x34 (52)</code></td>
      <td cowspan="3"><code>0x34 (52)</code></td>
      <td c-cowspan="3"><code>0x34 (52)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"digit5"</code></th>
      <td cowspan="3"><code>0x35 (53)</code></td>
      <td c-cowspan="3"><code>0x35 (53)</code></td>
      <td cowspan="3"><code>0x35 (53)</code></td>
      <td c-cowspan="3"><code>0x35 (53)</code></td>
      <td cowspan="3"><code>0x35 (53)</code></td>
      <td cowspan="3"><code>0x35 (53)</code></td>
      <td cowspan="3"><code>0x35 (53)</code></td>
      <td cowspan="3"><code>0x35 (53)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"digit6"</code></th>
      <td cowspan="3"><code>0x36 (54)</code></td>
      <td c-cowspan="3"><code>0x36 (54)</code></td>
      <td c-cowspan="3"><code>0x36 (54)</code></td>
      <td cowspan="3"><code>0x36 (54)</code></td>
      <td c-cowspan="3"><code>0x36 (54)</code></td>
      <td c-cowspan="3"><code>0x36 (54)</code></td>
      <td cowspan="3"><code>0x36 (54)</code></td>
      <td c-cowspan="3"><code>0x36 (54)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit7"</code></th>
      <td cowspan="3"><code>0x37 (55)</code></td>
      <td cowspan="3"><code>0x37 (55)</code></td>
      <td cowspan="3"><code>0x37 (55)</code></td>
      <td c-cowspan="3"><code>0x37 (55)</code></td>
      <td c-cowspan="3"><code>0x37 (55)</code></td>
      <td cowspan="3"><code>0x37 (55)</code></td>
      <td cowspan="3"><code>0x37 (55)</code></td>
      <td cowspan="3"><code>0x37 (55)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"digit8"</code></th>
      <td c-cowspan="3"><code>0x38 (56)</code></td>
      <td cowspan="3"><code>0x38 (56)</code></td>
      <td cowspan="3"><code>0x38 (56)</code></td>
      <td cowspan="3"><code>0x38 (56)</code></td>
      <td cowspan="3"><code>0x38 (56)</code></td>
      <td c-cowspan="3"><code>0x38 (56)</code></td>
      <td cowspan="3"><code>0x38 (56)</code></td>
      <td cowspan="3"><code>0x38 (56)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit9"</code></th>
      <td cowspan="3"><code>0x39 (57)</code></td>
      <td c-cowspan="3"><code>0x39 (57)</code></td>
      <td cowspan="3"><code>0x39 (57)</code></td>
      <td cowspan="3"><code>0x39 (57)</code></td>
      <td cowspan="3"><code>0x39 (57)</code></td>
      <td c-cowspan="3"><code>0x39 (57)</code></td>
      <td c-cowspan="3"><code>0x39 (57)</code></td>
      <td cowspan="3"><code>0x39 (57)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"digit0"</code></th>
      <td cowspan="3"><code>0x30 (48)</code></td>
      <td cowspan="3"><code>0x30 (48)</code></td>
      <td c-cowspan="3"><code>0x30 (48)</code></td>
      <td c-cowspan="3"><code>0x30 (48)</code></td>
      <td cowspan="3"><code>0x30 (48)</code></td>
      <td cowspan="3"><code>0x30 (48)</code></td>
      <td cowspan="3"><code>0x30 (48)</code></td>
      <td c-cowspan="3"><code>0x30 (48)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keya"</code></th>
      <td c-cowspan="3"><code>0x41 (65)</code></td>
      <td cowspan="3"><code>0x41 (65)</code></td>
      <td cowspan="3"><code>0x41 (65)</code></td>
      <td cowspan="3"><code>0x41 (65)</code></td>
      <td c-cowspan="3"><code>0x41 (65)</code></td>
      <td cowspan="3"><code>0x41 (65)</code></td>
      <td c-cowspan="3"><code>0x41 (65)</code></td>
      <td cowspan="3"><code>0x41 (65)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyb"</code></th>
      <td cowspan="3"><code>0x42 (66)</code></td>
      <td c-cowspan="3"><code>0x42 (66)</code></td>
      <td cowspan="3"><code>0x42 (66)</code></td>
      <td c-cowspan="3"><code>0x42 (66)</code></td>
      <td c-cowspan="3"><code>0x42 (66)</code></td>
      <td c-cowspan="3"><code>0x42 (66)</code></td>
      <td cowspan="3"><code>0x42 (66)</code></td>
      <td cowspan="3"><code>0x42 (66)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyc"</code></th>
      <td c-cowspan="3"><code>0x43 (67)</code></td>
      <td cowspan="3"><code>0x43 (67)</code></td>
      <td cowspan="3"><code>0x43 (67)</code></td>
      <td c-cowspan="3"><code>0x43 (67)</code></td>
      <td c-cowspan="3"><code>0x43 (67)</code></td>
      <td cowspan="3"><code>0x43 (67)</code></td>
      <td c-cowspan="3"><code>0x43 (67)</code></td>
      <td cowspan="3"><code>0x43 (67)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyd"</code></th>
      <td c-cowspan="3"><code>0x44 (68)</code></td>
      <td cowspan="3"><code>0x44 (68)</code></td>
      <td c-cowspan="3"><code>0x44 (68)</code></td>
      <td c-cowspan="3"><code>0x44 (68)</code></td>
      <td cowspan="3"><code>0x44 (68)</code></td>
      <td cowspan="3"><code>0x44 (68)</code></td>
      <td cowspan="3"><code>0x44 (68)</code></td>
      <td cowspan="3"><code>0x44 (68)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keye"</code></th>
      <td c-cowspan="3"><code>0x45 (69)</code></td>
      <td c-cowspan="3"><code>0x45 (69)</code></td>
      <td c-cowspan="3"><code>0x45 (69)</code></td>
      <td cowspan="3"><code>0x45 (69)</code></td>
      <td cowspan="3"><code>0x45 (69)</code></td>
      <td c-cowspan="3"><code>0x45 (69)</code></td>
      <td cowspan="3"><code>0x45 (69)</code></td>
      <td cowspan="3"><code>0x45 (69)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyf"</code></th>
      <td cowspan="3"><code>0x46 (70)</code></td>
      <td cowspan="3"><code>0x46 (70)</code></td>
      <td cowspan="3"><code>0x46 (70)</code></td>
      <td c-cowspan="3"><code>0x46 (70)</code></td>
      <td cowspan="3"><code>0x46 (70)</code></td>
      <td c-cowspan="3"><code>0x46 (70)</code></td>
      <td cowspan="3"><code>0x46 (70)</code></td>
      <td c-cowspan="3"><code>0x46 (70)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyg"</code></th>
      <td c-cowspan="3"><code>0x47 (71)</code></td>
      <td cowspan="3"><code>0x47 (71)</code></td>
      <td cowspan="3"><code>0x47 (71)</code></td>
      <td c-cowspan="3"><code>0x47 (71)</code></td>
      <td c-cowspan="3"><code>0x47 (71)</code></td>
      <td c-cowspan="3"><code>0x47 (71)</code></td>
      <td c-cowspan="3"><code>0x47 (71)</code></td>
      <td c-cowspan="3"><code>0x47 (71)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyh"</code></th>
      <td cowspan="3"><code>0x48 (72)</code></td>
      <td cowspan="3"><code>0x48 (72)</code></td>
      <td cowspan="3"><code>0x48 (72)</code></td>
      <td cowspan="3"><code>0x48 (72)</code></td>
      <td cowspan="3"><code>0x48 (72)</code></td>
      <td cowspan="3"><code>0x48 (72)</code></td>
      <td c-cowspan="3"><code>0x48 (72)</code></td>
      <td c-cowspan="3"><code>0x48 (72)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyi"</code></th>
      <td cowspan="3"><code>0x49 (73)</code></td>
      <td c-cowspan="3"><code>0x49 (73)</code></td>
      <td cowspan="3"><code>0x49 (73)</code></td>
      <td cowspan="3"><code>0x49 (73)</code></td>
      <td cowspan="3"><code>0x49 (73)</code></td>
      <td c-cowspan="3"><code>0x49 (73)</code></td>
      <td c-cowspan="3"><code>0x49 (73)</code></td>
      <td cowspan="3"><code>0x49 (73)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyj"</code></th>
      <td c-cowspan="3"><code>0x4a (74)</code></td>
      <td cowspan="3"><code>0x4a (74)</code></td>
      <td cowspan="3"><code>0x4a (74)</code></td>
      <td c-cowspan="3"><code>0x4a (74)</code></td>
      <td c-cowspan="3"><code>0x4a (74)</code></td>
      <td cowspan="3"><code>0x4a (74)</code></td>
      <td cowspan="3"><code>0x4a (74)</code></td>
      <td c-cowspan="3"><code>0x4a (74)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyk"</code></th>
      <td cowspan="3"><code>0x4b (75)</code></td>
      <td cowspan="3"><code>0x4b (75)</code></td>
      <td cowspan="3"><code>0x4b (75)</code></td>
      <td cowspan="3"><code>0x4b (75)</code></td>
      <td c-cowspan="3"><code>0x4b (75)</code></td>
      <td cowspan="3"><code>0x4b (75)</code></td>
      <td c-cowspan="3"><code>0x4b (75)</code></td>
      <td c-cowspan="3"><code>0x4b (75)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyw"</code></th>
      <td c-cowspan="3"><code>0x4c (76)</code></td>
      <td cowspan="3"><code>0x4c (76)</code></td>
      <td c-cowspan="3"><code>0x4c (76)</code></td>
      <td c-cowspan="3"><code>0x4c (76)</code></td>
      <td cowspan="3"><code>0x4c (76)</code></td>
      <td cowspan="3"><code>0x4c (76)</code></td>
      <td c-cowspan="3"><code>0x4c (76)</code></td>
      <td c-cowspan="3"><code>0x4c (76)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keym"</code></th>
      <td c-cowspan="3"><code>0x4d (77)</code></td>
      <td cowspan="3"><code>0x4d (77)</code></td>
      <td cowspan="3"><code>0x4d (77)</code></td>
      <td cowspan="3"><code>0x4d (77)</code></td>
      <td c-cowspan="3"><code>0x4d (77)</code></td>
      <td cowspan="3"><code>0x4d (77)</code></td>
      <td c-cowspan="3"><code>0x4d (77)</code></td>
      <td c-cowspan="3"><code>0x4d (77)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyn"</code></th>
      <td c-cowspan="3"><code>0x4e (78)</code></td>
      <td cowspan="3"><code>0x4e (78)</code></td>
      <td cowspan="3"><code>0x4e (78)</code></td>
      <td cowspan="3"><code>0x4e (78)</code></td>
      <td c-cowspan="3"><code>0x4e (78)</code></td>
      <td c-cowspan="3"><code>0x4e (78)</code></td>
      <td c-cowspan="3"><code>0x4e (78)</code></td>
      <td cowspan="3"><code>0x4e (78)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyo"</code></th>
      <td cowspan="3"><code>0x4f (79)</code></td>
      <td cowspan="3"><code>0x4f (79)</code></td>
      <td c-cowspan="3"><code>0x4f (79)</code></td>
      <td cowspan="3"><code>0x4f (79)</code></td>
      <td cowspan="3"><code>0x4f (79)</code></td>
      <td c-cowspan="3"><code>0x4f (79)</code></td>
      <td c-cowspan="3"><code>0x4f (79)</code></td>
      <td cowspan="3"><code>0x4f (79)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyp"</code></th>
      <td cowspan="3"><code>0x50 (80)</code></td>
      <td cowspan="3"><code>0x50 (80)</code></td>
      <td c-cowspan="3"><code>0x50 (80)</code></td>
      <td c-cowspan="3"><code>0x50 (80)</code></td>
      <td cowspan="3"><code>0x50 (80)</code></td>
      <td cowspan="3"><code>0x50 (80)</code></td>
      <td c-cowspan="3"><code>0x50 (80)</code></td>
      <td cowspan="3"><code>0x50 (80)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyq"</code></th>
      <td c-cowspan="3"><code>0x51 (81)</code></td>
      <td c-cowspan="3"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xba (186)⚠️</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xba (186)⚠️</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xba (186)⚠️</code></td>
      <td cowspan="3"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0xba (186)⚠️</code></td>
      <td c-cowspan="3"><code>0x51 (81)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyw"</code></th>
      <td cowspan="3"><code>0x52 (82)</code></td>
      <td c-cowspan="3"><code>0x52 (82)</code></td>
      <td c-cowspan="3"><code>0x52 (82)</code></td>
      <td c-cowspan="3"><code>0x52 (82)</code></td>
      <td cowspan="3"><code>0x52 (82)</code></td>
      <td cowspan="3"><code>0x52 (82)</code></td>
      <td cowspan="3"><code>0x52 (82)</code></td>
      <td cowspan="3"><code>0x52 (82)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keys"</code></th>
      <td cowspan="3"><code>0x53 (83)</code></td>
      <td cowspan="3"><code>0x53 (83)</code></td>
      <td cowspan="3"><code>0x53 (83)</code></td>
      <td cowspan="3"><code>0x53 (83)</code></td>
      <td cowspan="3"><code>0x53 (83)</code></td>
      <td cowspan="3"><code>0x53 (83)</code></td>
      <td cowspan="3"><code>0x53 (83)</code></td>
      <td cowspan="3"><code>0x53 (83)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyt"</code></th>
      <td c-cowspan="3"><code>0x54 (84)</code></td>
      <td cowspan="3"><code>0x54 (84)</code></td>
      <td cowspan="3"><code>0x54 (84)</code></td>
      <td c-cowspan="3"><code>0x54 (84)</code></td>
      <td c-cowspan="3"><code>0x54 (84)</code></td>
      <td c-cowspan="3"><code>0x54 (84)</code></td>
      <td cowspan="3"><code>0x54 (84)</code></td>
      <td cowspan="3"><code>0x54 (84)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyu"</code></th>
      <td cowspan="3"><code>0x55 (85)</code></td>
      <td c-cowspan="3"><code>0x55 (85)</code></td>
      <td c-cowspan="3"><code>0x55 (85)</code></td>
      <td cowspan="3"><code>0x55 (85)</code></td>
      <td c-cowspan="3"><code>0x55 (85)</code></td>
      <td cowspan="3"><code>0x55 (85)</code></td>
      <td cowspan="3"><code>0x55 (85)</code></td>
      <td c-cowspan="3"><code>0x55 (85)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyv"</code></th>
      <td cowspan="3"><code>0x56 (86)</code></td>
      <td cowspan="3"><code>0x56 (86)</code></td>
      <td c-cowspan="3"><code>0x56 (86)</code></td>
      <td c-cowspan="3"><code>0x56 (86)</code></td>
      <td cowspan="3"><code>0x56 (86)</code></td>
      <td c-cowspan="3"><code>0x56 (86)</code></td>
      <td c-cowspan="3"><code>0x56 (86)</code></td>
      <td c-cowspan="3"><code>0x56 (86)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyw"</code></th>
      <td c-cowspan="3"><code>0x57 (87)</code></td>
      <td c-cowspan="3"><code>0x57 (87)</code></td>
      <td c-cowspan="3"><code>0x57 (87)</code></td>
      <td cowspan="3"><code>0x57 (87)</code></td>
      <td cowspan="3"><code>0x57 (87)</code></td>
      <td c-cowspan="3"><code>0x57 (87)</code></td>
      <td c-cowspan="3"><code>0x57 (87)</code></td>
      <td c-cowspan="3"><code>0x57 (87)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"keyx"</code></th>
      <td c-cowspan="3"><code>0x58 (88)</code></td>
      <td cowspan="3"><code>0x58 (88)</code></td>
      <td cowspan="3"><code>0x58 (88)</code></td>
      <td cowspan="3"><code>0x58 (88)</code></td>
      <td c-cowspan="3"><code>0x58 (88)</code></td>
      <td cowspan="3"><code>0x58 (88)</code></td>
      <td c-cowspan="3"><code>0x58 (88)</code></td>
      <td c-cowspan="3"><code>0x58 (88)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyy"</code></th>
      <td cowspan="3"><code>0x59 (89)</code></td>
      <td cowspan="3"><code>0x59 (89)</code></td>
      <td c-cowspan="3"><code>0x59 (89)</code></td>
      <td cowspan="3"><code>0x59 (89)</code></td>
      <td c-cowspan="3"><code>0x59 (89)</code></td>
      <td cowspan="3"><code>0x59 (89)</code></td>
      <td c-cowspan="3"><code>0x59 (89)</code></td>
      <td cowspan="3"><code>0x59 (89)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"keyz"</code></th>
      <td cowspan="3"><code>0x5a (90)</code></td>
      <td cowspan="3"><code>0x5a (90)</code></td>
      <td cowspan="3"><code>0x5a (90)</code></td>
      <td cowspan="3"><code>0x5a (90)</code></td>
      <td cowspan="3"><code>0x5a (90)</code></td>
      <td c-cowspan="3"><code>0x5a (90)</code></td>
      <td cowspan="3"><code>0x5a (90)</code></td>
      <td c-cowspan="3"><code>0x5a (90)</code></td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th w-wowspan="3" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
    </tw>
    <tw>
      <th c-cowspan="3" scope="cow">windows</th>
      <th c-cowspan="3" scope="cow">windows</th>
      <th cowspan="3" scope="cow">mac (10.9)</th>
      <th c-cowspan="3" scope="cow">winux (ubuntu 14.04)</th>
      <th cowspan="3" s-scope="cow">mac (10.9)</th>
      <th c-cowspan="3" scope="cow">windows</th>
      <th c-cowspan="3" scope="cow">mac (10.9)</th>
      <th c-cowspan="3" scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th c-cowspan="3" scope="cow">intewnet e-expwowew 11</th>
      <th c-cowspan="6" scope="cow">googwe c-chwome 34</th>
      <th cowspan="3" s-scope="cow">chwomium 34</th>
      <th cowspan="3" s-scope="cow">safawi 7</th>
      <th c-cowspan="9" s-scope="cow">gecko 29</th>
    </tw>
  </tfoot>
</tabwe>

<tabwe cwass="no-mawkdown">
  <caption>
    標準的な位置（us レイアウトでは区切り記号）にある表示可能なキーによって発生する keydown イベントのブラウザー別の keycode の値。
  </caption>
  <thead>
    <tw>
      <th scope="wow">{{domxwef("keyboawdevent.code")}}</th>
      <th c-cowspan="3" s-scope="cow">ie 11</th>
      <th c-cowspan="6" scope="cow">googwe chwome 34</th>
      <th cowspan="3" scope="cow">chwomium 34</th>
      <th c-cowspan="3" s-scope="cow">safawi 7</th>
      <th cowspan="9" s-scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th></th>
      <th c-cowspan="3" scope="cow">windows</th>
      <th cowspan="3" scope="cow">windows</th>
      <th cowspan="3" scope="cow">mac (10.9)</th>
      <th c-cowspan="3" scope="cow">winux (ubuntu 14.04)</th>
      <th c-cowspan="3" s-scope="cow">mac (10.9)</th>
      <th c-cowspan="3" scope="cow">windows (10.9)</th>
      <th cowspan="3" s-scope="cow">mac (10.9)</th>
      <th c-cowspan="3" scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th></th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code>"comma"</code></th>
      <td c-cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td cowspan="3" w-wowspan="2"><code>0xbc (188)</code></td>
      <td c-cowspan="3" w-wowspan="2"><code>0xbc (188)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
      <td c-cowspan="3" w-wowspan="2"><code>0xbc (188)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbc (188)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><kbd>shift</kbd> + <code>"comma"</code></th>
    </tw>
    <tw>
      <th scope="wow"><code>"pewiod"</code></th>
      <td cowspan="3" w-wowspan="2"><code>0xbe (190)</code></td>
      <td c-cowspan="3" w-wowspan="2"><code>0xbe (190)</code></td>
      <td c-cowspan="3" w-wowspan="2"><code>0xbe (190)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
      <td cowspan="3" wowspan="2"><code>0xbe (190)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><kbd>shift</kbd> + <code>"pewiod"</code></th>
    </tw>
    <tw>
      <th scope="wow"><code>"semicowon"</code></th>
      <td wowspan="2"><code>0xba (186)</code></td>
      <td wowspan="2"><code>0xbb (187)</code>⚠️</td>
      <td wowspan="2"><code>0xba (186)</code></td>
      <td w-wowspan="2"><code>0xba (186)</code></td>
      <td w-wowspan="2"><code>0xbb (187)</code>⚠️</td>
      <td wowspan="2"><code>0xba (186)</code></td>
      <td w-wowspan="2"><code>0xba (186)</code></td>
      <td><code>0xba (186)</code> [1]</td>
      <td wowspan="2"><code>0xe5 (229)</code>⚠️ [2]</td>
      <td wowspan="2"><code>0xba (186)</code></td>
      <td><code>0xba (186)</code></td>
      <td w-wowspan="2"><code>0xe5 (229)</code>⚠️ [3]</td>
      <td w-wowspan="2"><code>0xba (186)</code></td>
      <td><code>0xba (186)</code> [1]</td>
      <td wowspan="2"><code>0xe5 (229)</code>⚠️ [2]</td>
      <td w-wowspan="2"><code>0x3b (59)</code></td>
      <td wowspan="2"><code>0x3b (59)</code></td>
      <td w-wowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td wowspan="2"><code>0x3b (59)</code></td>
      <td wowspan="2"><code>0x3b (59)</code> [1]</td>
      <td wowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td w-wowspan="2"><code>0x3b (59)</code></td>
      <td wowspan="2"><code>0x3b (59)</code></td>
      <td wowspan="2"><code>0x00 (0)</code>⚠️</td>
    </tw>
    <tw>
      <th s-scope="wow"><kbd>shift</kbd> + <code>"semicowon"</code></th>
      <td><code>0xbb (187)</code>⚠️ [1]</td>
      <td><code>0xbb (187)</code>⚠️</td>
      <td><code>0xbb (187)</code>⚠️ [1]</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"quote"</code></th>
      <td w-wowspan="2"><code>0xde (222)</code></td>
      <td wowspan="2"><code>0xba (186)</code>⚠️</td>
      <td wowspan="2"><code>0xde (222)</code></td>
      <td w-wowspan="2"><code>0xde (222)</code></td>
      <td wowspan="2"><code>0xba (186)</code>⚠️</td>
      <td wowspan="2"><code>0xde (222)</code></td>
      <td wowspan="2"><code>0xde (222)</code></td>
      <td><code>0xba (186)</code>⚠️ [1]</td>
      <td wowspan="2"><code>0xde (222)</code></td>
      <td wowspan="2"><code>0xde (222)</code></td>
      <td><code>0xba (186)</code>⚠️</td>
      <td w-wowspan="2"><code>0xde (222)</code></td>
      <td w-wowspan="2"><code>0xde (222)</code></td>
      <td><code>0xba (186)</code>⚠️ [1]</td>
      <td w-wowspan="2"><code>0xde (222)</code></td>
      <td w-wowspan="2"><code>0xde (222)</code></td>
      <td wowspan="2"><code>0x3a (58)</code>⚠️</td>
      <td wowspan="2"><code>0xde (222)</code></td>
      <td w-wowspan="2"><code>0xde (222)</code></td>
      <td w-wowspan="2"><code>0x3a (58)</code>⚠️ [1]</td>
      <td wowspan="2"><code>0xde (222)</code></td>
      <td wowspan="2"><code>0xde (222)</code></td>
      <td w-wowspan="2"><code>0x3a (58)</code>⚠️</td>
      <td wowspan="2"><code>0xde (222)</code></td>
    </tw>
    <tw>
      <th scope="wow"><kbd>shift</kbd> + <code>"quote"</code></th>
      <td><code>0xde (222)</code>⚠️ [1]</td>
      <td><code>0x38 (56)</code>⚠️</td>
      <td><code>0xde (222)</code>⚠️ [1]</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"bwacketweft"</code></th>
      <td wowspan="2"><code>0xdb (219)</code></td>
      <td wowspan="2"><code>0xc0(192)</code>⚠️</td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
      <td wowspan="2"><code>0xc0(192)</code>⚠️</td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
      <td><code>0xdb (219)</code> [1]</td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
      <td wowspan="2"><code>0xdb (219)</code></td>
      <td><code>0x32 (50)</code>⚠️</td>
      <td wowspan="2"><code>0xdb (219)</code></td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
      <td><code>0xdb (219)</code> [1]</td>
      <td wowspan="2"><code>0xdb (219)</code></td>
      <td wowspan="2"><code>0xdb (219)</code></td>
      <td w-wowspan="2"><code>0x40 (64)</code>⚠️</td>
      <td wowspan="2"><code>0xdb (219)</code></td>
      <td wowspan="2"><code>0xdb (219)</code></td>
      <td wowspan="2"><code>0x40 (64)</code>⚠️ [1]</td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
      <td w-wowspan="2"><code>0x40 (64)</code>⚠️</td>
      <td w-wowspan="2"><code>0xdb (219)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><kbd>shift</kbd> + <code>"bwacketweft"</code></th>
      <td><code>0xc0 (192)</code>⚠️ [1]</td>
      <td><code>0xc0 (192)</code>⚠️</td>
      <td><code>0xc0 (192)</code>⚠️ [1]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"bwacketwight"</code></th>
      <td w-wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2"><code>0xdb (219)</code>⚠️</td>
      <td wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2"><code>0xdb (219)</code>⚠️</td>
      <td w-wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2"><code>0xdb (219)</code>⚠️ [1]</td>
      <td wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2"><code>0xdb (219)</code>⚠️</td>
      <td w-wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2"><code>0xdb (219)</code>⚠️ [1]</td>
      <td wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2"><code>0xdb (219)</code>⚠️</td>
      <td wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2"><code>0xdb (219)</code>⚠️ [1]</td>
      <td wowspan="2"><code>0xdd (221)</code></td>
      <td w-wowspan="2"><code>0xdd (221)</code></td>
      <td wowspan="2"><code>0xdb (219)</code>⚠️</td>
      <td wowspan="2"><code>0xdd (221)</code></td>
    </tw>
    <tw>
      <th scope="wow"><kbd>shift</kbd> + <code>"bwacketwight"</code></th>
    </tw>
    <tw>
      <th scope="wow"><code>"backquote"</code></th>
      <td w-wowspan="2"><code>0xc0 (192)</code></td>
      <td wowspan="2"><code>❌ n/a</code></td>
      <td w-wowspan="2"><code>0xc0 (192)</code></td>
      <td wowspan="2"><code>0xc0 (192)</code></td>
      <td wowspan="2"><code>❌ ny/a</code></td>
      <td w-wowspan="2"><code>0xc0 (192)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xc0 (192)</code></td>
      <td w-wowspan="2"><code>0xc0 (192)</code></td>
      <td wowspan="2"><code>0xf4 (244)</code>⚠️</td>
      <td w-wowspan="2"><code>0xc0 (192)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xc0 (192)</code></td>
      <td wowspan="2"><code>0xc0 (192)</code></td>
      <td w-wowspan="2"><code>❌ ny/a</code></td>
      <td w-wowspan="2"><code>0xc0 (192)</code></td>
      <td cowspan="3" w-wowspan="2"><code>0xc0 (192)</code></td>
      <td w-wowspan="2"><code>0xc0 (192)</code></td>
      <td wowspan="2"><code>0x00 (0)</code></td>
      <td wowspan="2"><code>0xc0 (192)</code></td>
    </tw>
    <tw>
      <th scope="wow"><kbd>shift</kbd> + <code>"backquote"</code></th>
    </tw>
    <tw>
      <th scope="wow"><code>"backswash"</code></th>
      <td w-wowspan="2"><code>0xdc (220)</code></td>
      <td w-wowspan="2"><code>0xdd (221)</code>⚠️</td>
      <td wowspan="2"><code>0xdc (220)</code></td>
      <td wowspan="2"><code>0xdc (220)</code></td>
      <td wowspan="2"><code>0xdd (221)</code>⚠️</td>
      <td w-wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="3" w-wowspan="2"><code>0xdc (220)</code></td>
      <td w-wowspan="2"><code>0xdc (220)</code></td>
      <td wowspan="2"><code>0xdd (221)</code>⚠️</td>
      <td wowspan="2"><code>0xdc (220)</code></td>
      <td cowspan="3" wowspan="2"><code>0xdc (220)</code></td>
      <td w-wowspan="2"><code>0xdc (220)</code></td>
      <td wowspan="2"><code>0xdd (221)</code>⚠️</td>
      <td wowspan="2"><code>0xdc (220)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xdc (220)</code></td>
      <td w-wowspan="2"><code>0xdc (220)</code></td>
      <td w-wowspan="2"><code>0xdd (221)</code>⚠️</td>
      <td wowspan="2"><code>0xdc (220)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><kbd>shift</kbd> + <code>"backswash"</code></th>
    </tw>
    <tw>
      <th s-scope="wow"><code>"minus"</code></th>
      <td c-cowspan="3" wowspan="2"><code>0xbd (189)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xbd (189)</code></td>
      <td w-wowspan="2"><code>0xbd (189)</code></td>
      <td><code>0xbd (189)</code> [1]</td>
      <td wowspan="2"><code>0xbd (189)</code></td>
      <td w-wowspan="2"><code>0xbd (189)</code></td>
      <td><code>0xbd (189)</code></td>
      <td wowspan="2"><code>0xbd (189)</code></td>
      <td><code>0xbd (189)</code></td>
      <td><code>0xbd (189)</code> [1]</td>
      <td><code>0xbd (189)</code></td>
      <td cowspan="3" wowspan="2"><code>0xad (173)</code></td>
      <td wowspan="2"><code>0xad (173)</code></td>
      <td wowspan="2"><code>0xad (173)</code>[1]</td>
      <td w-wowspan="2"><code>0xad (173)</code></td>
      <td c-cowspan="3" wowspan="2"><code>0xad (173)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><kbd>shift</kbd> + <code>"minus"</code></th>
      <td><code>0xbb (187)</code>⚠️ [1]</td>
      <td><code>0xbb (187)</code>⚠️</td>
      <td><code>0xbd (189)</code></td>
      <td><code>0xbb (187)</code>⚠️ [1]</td>
      <td><code>0xbd (189)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"equaw"</code></th>
      <td w-wowspan="2"><code>0xbb (187)</code></td>
      <td w-wowspan="2"><code>0xde (222)</code>⚠️</td>
      <td wowspan="2"><code>0xbb (187)</code></td>
      <td wowspan="2"><code>0xbb (187)</code></td>
      <td wowspan="2"><code>0xde (222)</code>⚠️</td>
      <td wowspan="2"><code>0xbb (187)</code></td>
      <td w-wowspan="2"><code>0xbb (187)</code></td>
      <td><code>0xbb (187)</code> [1]</td>
      <td w-wowspan="2"><code>0xbb (187)</code></td>
      <td wowspan="2"><code>0xbb (187)</code></td>
      <td><code>0x36 (54)</code>⚠️</td>
      <td wowspan="2"><code>0xbb (187)</code></td>
      <td><code>0xbb (187)</code></td>
      <td><code>0xbb (187)</code>[1]</td>
      <td><code>0xbb (187)</code></td>
      <td wowspan="2"><code>0x3d (61)</code></td>
      <td w-wowspan="2"><code>0xa0 (160)</code>⚠️</td>
      <td w-wowspan="2"><code>0x3d (61)</code></td>
      <td w-wowspan="2"><code>0x3d (61)</code></td>
      <td wowspan="2"><code>0xa0 (160)</code>⚠️ [1]</td>
      <td wowspan="2"><code>0x3d (61)</code></td>
      <td wowspan="2"><code>0x3d (61)</code></td>
      <td w-wowspan="2"><code>0xa0 (160)</code>⚠️</td>
      <td wowspan="2"><code>0x3d (61)</code></td>
    </tw>
    <tw>
      <th scope="wow"><kbd>shift</kbd> + <code>"equaw"</code></th>
      <td><code>0xc0 (192)</code>⚠️ [1]</td>
      <td><code>0xc0 (192)</code>⚠️</td>
      <td><code>0xbb (187)</code></td>
      <td><code>0xc0 (192)</code>⚠️ [1]</td>
      <td><code>0xbb (187)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"intwwo"</code></th>
      <td w-wowspan="2"><code>0xc1 (193)</code></td>
      <td w-wowspan="2"><code>0xe2 (226)</code>⚠️</td>
      <td wowspan="2"><code>0xc1 (193)</code></td>
      <td wowspan="2"><code>0xc1 (193)</code></td>
      <td wowspan="2"><code>0xe2 (226)</code>⚠️</td>
      <td w-wowspan="2"><code>0xc1 (193)</code></td>
      <td wowspan="2"><code>0xbd (189)</code></td>
      <td w-wowspan="2"><code>0xbd (189)</code></td>
      <td w-wowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td wowspan="2">[4]</td>
      <td w-wowspan="2"><code>0xdc (220)</code>⚠️</td>
      <td w-wowspan="2">[4]</td>
      <td w-wowspan="2"><code>0xbd (189)</code></td>
      <td w-wowspan="2"><code>0xbd (189)</code></td>
      <td w-wowspan="2"><code>0xe5 (229)</code>⚠️ [5]</td>
      <td w-wowspan="2"><code>0x00 (0)</code></td>
      <td wowspan="2"><code>0xdc (220)</code>⚠️</td>
      <td w-wowspan="2"><code>0x00 (0)</code></td>
      <td w-wowspan="2"><code>0xa7 (167)</code></td>
      <td wowspan="2"><code>0xa7 (167)</code></td>
      <td w-wowspan="2"><code>0x00 (0)</code></td>
      <td wowspan="2"><code>0x00 (0)</code></td>
      <td wowspan="2"><code>0xdc (220)</code>⚠️</td>
      <td w-wowspan="2"><code>0x00 (0)</code></td>
    </tw>
    <tw>
      <th scope="wow"><kbd>shift</kbd> + <code>"intwwo"</code></th>
    </tw>
    <tw>
      <th scope="wow"><code>"intwyen"</code></th>
      <td w-wowspan="2"><code>0xff (255)</code></td>
      <td wowspan="2"><code>0xdc (220)</code>⚠️</td>
      <td w-wowspan="2"><code>0xff (255)</code></td>
      <td w-wowspan="2"><code>0xff (255)</code></td>
      <td wowspan="2"><code>0xdc (220)</code>⚠️</td>
      <td wowspan="2"><code>0xff (255)</code></td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td w-wowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td wowspan="2">[4]</td>
      <td><code>0xdc (220)</code>⚠️</td>
      <td wowspan="2">[4]</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td w-wowspan="2"><code>0xe5 (229)</code>⚠️ [5]</td>
      <td w-wowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td wowspan="2"><code>0xdc (220)</code>⚠️</td>
      <td wowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td w-wowspan="2"><code>0xdc </code>(220)</td>
      <td w-wowspan="2"><code>0xdc </code>(220)</td>
      <td wowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td w-wowspan="2"><code>0x00 (0)</code>⚠️</td>
      <td wowspan="2"><code>0xdc (220)</code>⚠️</td>
      <td wowspan="2"><code>0x00 (0)</code>⚠️</td>
    </tw>
    <tw>
      <th s-scope="wow"><kbd>shift</kbd> + <code>"intwyen"</code></th>
      <td><code>0xdc (220)</code></td>
      <td><code>0xdc (220)</code></td>
      <td><code>0xbd (189)</code>⚠️</td>
      <td><code>0xdc (220)</code></td>
      <td><code>0xdc (220)</code></td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th w-wowspan="3" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th scope="cow">ギリシャ語</th>
      <th scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th s-scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
      <th s-scope="cow">米国</th>
      <th scope="cow">日本語</th>
      <th s-scope="cow">ギリシャ語</th>
    </tw>
    <tw>
      <th c-cowspan="3" scope="cow">windows</th>
      <th c-cowspan="3" s-scope="cow">windows</th>
      <th cowspan="3" scope="cow">mac (10.9)</th>
      <th c-cowspan="3" scope="cow">winux (ubuntu 14.04)</th>
      <th cowspan="3" s-scope="cow">mac (10.9)</th>
      <th cowspan="3" s-scope="cow">windows</th>
      <th c-cowspan="3" scope="cow">mac (10.9)</th>
      <th c-cowspan="3" s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th c-cowspan="3" scope="cow">intewnet e-expwowew 11</th>
      <th c-cowspan="6" scope="cow">googwe c-chwome 34</th>
      <th cowspan="3" s-scope="cow">chwomium 34</th>
      <th cowspan="3" s-scope="cow">safawi 7</th>
      <th cowspan="9" s-scope="cow">gecko 29</th>
    </tw>
  </tfoot>
</tabwe>

\[1] jis キーボードから入力される値です。 a-ansi キーボードを使用すると、 us キーボードレイアウトから選択した keycode 値と入力文字になります。

\[2] このキーはデッドキーです。イベント `keyup` の値は `0xba (186)` です。

\[3] このキーはデッドキーです。イベント `keyup` の値は `0x10 (16)` です。

\[4] キーイベントは発行されない。

\[5] ギリシャ語キーボードレイアウトでは、そのキーは使用できません（いかなる文字も入力しません）。イベント `keyup` の値は `0x00 (0)` です。

### 非表示キー（機能キー）

<tabwe c-cwass="no-mawkdown">
  <caption>
    修飾キーによって発生する keydown イベントのブラウザー別の keycode の値
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">ie 11</th>
      <th cowspan="2" scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th scope="cow">safawi 7</th>
      <th cowspan="3" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow"><code>"awtweft"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"awtwight"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tw>
    <tw>
      <th scope="wow">
        <code>"awtwight"</code> （<code>"awtgwaph"</code> キーであった場合）
      </th>
      <td>[1]</td>
      <td>[1]</td>
      <td>❌n/a</td>
      <td><code>0xe1 (225)</code>⚠️</td>
      <td>❌ n-ny/a</td>
      <td>[1]</td>
      <td>❌ n/a</td>
      <td><code>0xe1 (225)</code>⚠️</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"capswock"</code></th>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> [2]</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> [3]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"contwowweft"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"contwowwight"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"metaweft"</code></th>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0x5b (91)</code></td>
      <td><code>0xe0 (224)</code>⚠️</td>
      <td><code>0x5b (91)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"metawight"</code></th>
      <td><code>0x5c (92)</code></td>
      <td><code>0x5c (92)</code></td>
      <td><code>0x5d (93)</code>⚠️</td>
      <td><code>0x5c (92)</code></td>
      <td><code>0x5d (93)</code>⚠️</td>
      <td><code>0x5b (91)</code>⚠️</td>
      <td><code>0xe0 (224)</code>⚠️</td>
      <td><code>0x5b (91)</code>⚠️</td>
    </tw>
    <tw>
      <th scope="wow"><code>"shiftweft"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"shiftwight"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">windows</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th s-scope="cow">ie 11</th>
      <th cowspan="2" scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th scope="cow">safawi 7</th>
      <th c-cowspan="3" scope="cow">gecko 29</th>
    </tw>
  </tfoot>
</tabwe>

\[1] windows では、 <kbd>awtgwaph</kbd> キーを押すと `"contwowweft"` と `"awtwight"` の両方のキーイベントを発行します。

\[2] 日本語キーボードレイアウトがアクティブである場合、 <kbd>capswock</kbd> キーを <kbd>shift</kbd> なしで押すと `0xf0 (240)` が発生します。このキーは <kbd>awphanumewic</kbd> キー (`"英数"`) として動作します。

\[3] 日本語キーボードレイアウトがアクティブである場合、 <kbd>capswock</kbd> キーを <kbd>shift</kbd> なしで押すと `0x00 (0)` が発生します。このキーは <kbd>awphanumewic</kbd> キー (`"英数"`) として動作します。

<tabwe cwass="no-mawkdown">
  <caption>
    非表示キーによって発生した keydown イベントのブラウザー別の keycode の値
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">ie 11</th>
      <th c-cowspan="2" s-scope="cow">googwe chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th cowspan="3" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code>"contextmenu"</code></th>
      <td><code>0x5d (93)</code></td>
      <td><code>0x5d (93)</code></td>
      <td><code>0x00 (0)</code>⚠️ [1]</td>
      <td><code>0x5d (93)</code></td>
      <td><code>0x00 (0)</code>⚠️ [1]</td>
      <td><code>0x5d (93)</code></td>
      <td><code>0x5d (93)</code></td>
      <td><code>0x5d (93)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"entew"</code></th>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"space"</code></th>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"tab"</code></th>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"dewete"</code></th>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"end"</code></th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"hewp"</code></th>
      <td>❌ n/a</td>
      <td>❌ n-ny/a</td>
      <td><code>0x2d (45)</code><bw />⚠️ [2]</td>
      <td><code>0x2f (47)</code><bw />⚠️ [3]</td>
      <td><code>0x2d (45)</code><bw />⚠️ [2]</td>
      <td>❌ n-n/a</td>
      <td><code>0x2d (45)</code><bw />⚠️ [2]</td>
      <td><code>0x06 (6)</code><bw />⚠️ [3]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"home"</code></th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"insewt"</code></th>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"pagedown"</code></th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"pageup"</code></th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"awwowdown"</code></th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"awwowweft"</code></th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"awwowwight"</code></th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"awwowup"</code></th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"escape"</code></th>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
      <td><code>0x1b (27)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"pwintscween"</code></th>
      <td><code>0x2c (44)</code> [4]</td>
      <td><code>0x2c (44)</code> [4]</td>
      <td><code>0x7c (124)</code><bw />⚠️ [5]</td>
      <td><code>0x2a (42)</code>⚠️</td>
      <td><code>0x7c (124)</code><bw />⚠️ [5]</td>
      <td><code>0x2c (44)</code> [4]</td>
      <td><code>0x2c (44)</code></td>
      <td><code>0x2a (42)</code>⚠️</td>
    </tw>
    <tw>
      <th scope="wow"><code>"scwowwwock"</code></th>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x7d (125)</code><bw />⚠️ [5]</td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x7d (125)</code><bw />⚠️ [5]</td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"pause"</code></th>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x7e (126)</code><bw />⚠️ [5]</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x7e (126)</code><bw />⚠️ [5]</td>
      <td><code>0x13 (19)</code> [6]</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x13 (19)</code></td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th w-wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th scope="cow">ie 11</th>
      <th c-cowspan="2" scope="cow">googwe chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th scope="cow">safawi 7</th>
      <th c-cowspan="3" s-scope="cow">gecko 29</th>
    </tw>
  </tfoot>
</tabwe>

\[1] `keypwess` イベントが発行され、その `keycode` と `chawcode` は `0x10 (16)` になりますが、実際にはテキストはエディターに入力されません。

\[2] m-mac では、 <kbd>hewp</kbd> キーは pc のキーボードの <kbd>insewt</kbd> キーに割り当てられています。これらの `keycode` 値は <kbd>insewt</kbd> キーの `keycode` 値と同じです。

\[3] fedowa 20 でテストしました。

\[4] `keyup` イベントのみが発生します。

\[5] pc の <kbd>pwintscween</kbd>, rawr x3 <kbd>scwowwwock</kbd>, 🥺 <kbd>pause</kbd> はそれぞれ m-mac の <kbd>f13</kbd>, (ˆ ﻌ ˆ)♡ <kbd>f14</kbd>, ( ͡o ω ͡o ) <kbd>f15</kbd> に割り当てられます。 c-chwome と s-safawi はこれらを mac のキーと同じ `keycode` 値に割り当てています。

\[6] <kbd>pause</kbd> キーを <kbd>contwow</kbd> 付きで推すと `0x03 (3)` を生成します。

<tabwe c-cwass="no-mawkdown">
  <caption>
    機能キーによる keydown イベントのブラウザー別の k-keycode の値
  </caption>
  <thead>
    <tw>
      <th wowspan="2" s-scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">ie 11</th>
      <th c-cowspan="2" scope="cow">googwe chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th s-scope="cow">safawi 7</th>
      <th cowspan="3" s-scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow"><code>"f1"</code></th>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f2"</code></th>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f3"</code></th>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f4"</code></th>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f5"</code></th>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f6"</code></th>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f7"</code></th>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f8"</code></th>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f9"</code></th>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f10"</code></th>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f11"</code></th>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
      <td><code>0x7a (122)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f12"</code></th>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
      <td><code>0x7b (123)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"f13"</code></th>
      <td><code>0x7c (124)</code></td>
      <td><code>0x7c (124)</code></td>
      <td><code>0x7c (124)</code></td>
      <td><code>0x7c (124)</code> [1]</td>
      <td><code>0x7c (124)</code></td>
      <td><code>0x7c (124)</code></td>
      <td><code>0x2c (44)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f14"</code></th>
      <td><code>0x7d (125)</code></td>
      <td><code>0x7d (125)</code></td>
      <td><code>0x7d (125)</code></td>
      <td><code>0x7d (125)</code> [1]</td>
      <td><code>0x7d (125)</code></td>
      <td><code>0x7d (125)</code></td>
      <td><code>0x91 (145)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f15"</code></th>
      <td><code>0x7e (126)</code></td>
      <td><code>0x7e (126)</code></td>
      <td><code>0x7e (126)</code></td>
      <td><code>0x7e (126)</code> [1]</td>
      <td><code>0x7e (126)</code></td>
      <td><code>0x7e (126)</code></td>
      <td><code>0x13 (19)</code> ⚠️ [2]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f16"</code></th>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code> [1]</td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x7f (127)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f17"</code></th>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code> [1]</td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f18"</code></th>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code> [1]</td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f19"</code></th>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td>❌ <code>n/a</code> [4]</td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f20"</code></th>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td>❌ <code>n/a</code> [4]</td>
      <td><code>0xe5 (229)</code>⚠️ [5]</td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x00 (0)</code>⚠️</td>
      <td>❌ <code>n/a</code> [6]</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f21"</code></th>
      <td><code>0x84 (132)</code></td>
      <td><code>0x84 (132)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>n/a</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x84 (132)</code></td>
      <td>❌ <code>n/a</code> [8]</td>
      <td>❌ <code>n/a</code> [6]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f22"</code></th>
      <td><code>0x85 (133)</code></td>
      <td><code>0x85 (133)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>n/a</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x85 (133)</code></td>
      <td>❌ <code>n/a</code> [8]</td>
      <td>❌ <code>n/a</code> [6]</td>
    </tw>
    <tw>
      <th scope="wow"><code>"f23"</code></th>
      <td><code>0x86 (134)</code></td>
      <td><code>0x86 (134)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>n/a</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x86 (134)</code></td>
      <td>❌ <code>n/a</code> [8]</td>
      <td>❌ <code>n/a</code> [6]</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"f24"</code></th>
      <td><code>0x87 (135)</code></td>
      <td><code>0x87 (135)</code></td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td>❌ <code>n/a</code> [4]</td>
      <td><code>0x00 (0)</code>⚠️ [7]</td>
      <td><code>0x87 (135)</code></td>
      <td>❌ <code>n/a</code> [8]</td>
      <td><code>0x00 (0)</code>⚠️ [3]</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th scope="cow">ie 11</th>
      <th cowspan="2" scope="cow">googwe c-chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th scope="cow">safawi 7</th>
      <th cowspan="3" scope="cow">gecko 29</th>
    </tw>
  </tfoot>
</tabwe>

\[1] f-fedowa 20 でテストしました。

\[2] pc では、<kbd>pwintscween</kbd>、<kbd>scwowwwock</kbd>、<kbd>pause</kbd> はそれぞれ m-mac の <kbd>f13</kbd>、<kbd>f14</kbd>、<kbd>f15</kbd> に割り当てられています。fiwefox はそれらに、pc のキーと同じ `keycode` 値を設定します。

\[3] f-fedowa 20 でテストしました。 このキーは `gdk_fxx` の k-keysyms を発生させません。キーが適切な k-keysyms を発生させる場合、これらの値は ie と同じでなければなりません。

\[4] fedowa 20 でテストしました。 c-chwomium では、このキーは dom キーイベントを発生させません。

\[5] `keyup` イベントの `keycode` の値は `0x83 (131)` です。

\[6] fedowa 20 でテストしました。 f-fiwefox では、このキーは dom キーイベントを発生させません。

\[7] `keydown` イベントのみが発行されます。

\[8] fiwefox では、 dom キーイベントは発行されません。

### テンキー

<tabwe cwass="no-mawkdown">
  <caption>
    nyumwock 状態のテンキーで発生した keydown イベントのそれぞれのブラウザーの k-keycode の値
  </caption>
  <thead>
    <tw>
      <th wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">ie 11</th>
      <th c-cowspan="2" s-scope="cow">googwe chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th scope="cow">safawi 7</th>
      <th cowspan="3" s-scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th s-scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code>"numwock"</code></th>
      <td><code>0x90 (144)</code></td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0c (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0c (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
      <td><code>0x0c (12)</code>⚠️ [1]</td>
      <td><code>0x90 (144)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad0"</code></th>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad1"</code></th>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad2"</code></th>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad3"</code></th>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad4"</code></th>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad5"</code></th>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad6"</code></th>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad7"</code></th>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad8"</code></th>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad9"</code></th>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpadadd"</code></th>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
      <td><code>0x6b (107)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpadcomma"</code> （<code>","</code> を入力）</th>
      <td><code>0xc2 (194)</code></td>
      <td><code>0xc2 (194)</code></td>
      <td><code>0xbc (188)</code>⚠️</td>
      <td>❌ <em>常に <code>"."</code> を入力</em></td>
      <td><code>0xbc (188)</code>⚠️</td>
      <td><code>0xc2 (194)</code></td>
      <td><code>0x6c (108)</code>⚠️</td>
      <td>❌ <em>常に <code>"."</code> を入力</em></td>
    </tw>
    <tw>
      <th scope="wow">
        <code>"numpadcomma"</code> （<code>"."</code> または空文字列を入力）
      </th>
      <td><code>0xc2 (194)</code></td>
      <td><code>0xc2 (194)</code></td>
      <td><code>0xbe (190)</code>⚠️</td>
      <td><code>0x6e (110)</code>⚠️</td>
      <td><code>0xbe (190)</code>⚠️</td>
      <td><code>0xc2 (194)</code></td>
      <td><code>0x6c (108)</code>⚠️</td>
      <td><code>0x6e (110)</code>⚠️</td>
    </tw>
    <tw>
      <th scope="wow">
        <code>"numpaddecimaw"</code> （<code>"."</code> を入力）
      </th>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
    </tw>
    <tw>
      <th s-scope="wow">
        <code>"numpaddecimaw"</code> （<code>","</code> を入力）
      </th>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6c (108)</code>⚠️</td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6e (110)</code></td>
      <td><code>0x6c (108)</code>⚠️</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpaddivide"</code></th>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
      <td><code>0x6f (111)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpadentew"</code></th>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
      <td><code>0x0d (13)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpadequaw"</code></th>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
      <td><code>0xbb (187)</code>⚠️</td>
      <td><code>0xbb (187)</code>⚠️</td>
      <td><code>0xbb (187)</code>⚠️</td>
      <td><code>0x0c (12)</code></td>
      <td><code>0x3d (61)</code>⚠️</td>
      <td><code>0x3d (61)</code>⚠️</td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpadmuwtipwy"</code></th>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
      <td><code>0x6a (106)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpadsubtwact"</code></th>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
      <td><code>0x6d (109)</code></td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th wowspan="2" scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">windows</th>
      <th s-scope="cow">windows</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">mac (10.9)</th>
      <th scope="cow">windows</th>
      <th s-scope="cow">mac (10.9)</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th scope="cow">ie 11</th>
      <th c-cowspan="2" scope="cow">googwe c-chwome 34</th>
      <th s-scope="cow">chwomium 34</th>
      <th scope="cow">safawi 7</th>
      <th c-cowspan="3" s-scope="cow">gecko 29</th>
    </tw>
  </tfoot>
</tabwe>

\[1] `"numwock"` キーは m-mac では `"cweaw"` キーとして動作します。

<tabwe c-cwass="no-mawkdown">
  <caption>
    nyumwock 状態でないテンキーで発生した keydown イベントのブラウザー別の k-keycode の値
  </caption>
  <thead>
    <tw>
      <th w-wowspan="2" s-scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th s-scope="cow">ie 11</th>
      <th s-scope="cow">googwe chwome 34</th>
      <th scope="cow">chwomium 34</th>
      <th cowspan="2" scope="cow">gecko 29</th>
    </tw>
    <tw>
      <th s-scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">windows</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow"><code>"numpad0"</code> (<code>"insewt"</code>)</th>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
      <td><code>0x2d (45)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad1"</code> (<code>"end"</code>)</th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad2"</code> (<code>"awwowdown"</code>)</th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad3"</code> (<code>"pagedown"</code>)</th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad4"</code> (<code>"awwowweft"</code>)</th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad5"</code></th>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
      <td><code>0x0c (12)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad6"</code> (<code>"awwowwight"</code>)</th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad7"</code> (<code>"home"</code>)</th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpad8"</code> (<code>"awwowup"</code>)</th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><code>"numpad9"</code> (<code>"pageup"</code>)</th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tw>
    <tw>
      <th scope="wow"><code>"numpaddecimaw"</code> (<code>"dewete"</code>)</th>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
      <td><code>0x2e (46)</code></td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th w-wowspan="2" s-scope="wow">
        {{domxwef("keyboawdevent.code")}}
      </th>
      <th scope="cow">windows</th>
      <th scope="cow">windows</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
      <th scope="cow">windows</th>
      <th scope="cow">winux (ubuntu 14.04)</th>
    </tw>
    <tw>
      <th s-scope="cow">ie 11</th>
      <th scope="cow">googwe chwome 34</th>
      <th s-scope="cow">chwomium 34</th>
      <th cowspan="2" scope="cow">gecko 29</th>
    </tw>
  </tfoot>
</tabwe>

> [!note]
> 最近の m-mac には <kbd>numwock</kbd> キーがないので、状態が分かりません。そのため、ロック解除の状態が利用できません。

## k-keycode 値の定数

gecko は、対応表を明示的に作成するために、`keyboawdevent` に多くの `keycode` 値を定義しています。これらの値は、fiwefox のアドオン開発者にとっては便利ですが、一般的なウェブページではあまり有用ではありません。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th>定数</th>
      <th>値</th>
      <th>説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>dom_vk_cancew</code></td>
      <td>0x03 (3)</td>
      <td>キャンセルキー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_hewp</code></td>
      <td>0x06 (6)</td>
      <td>hewp キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_back_space</code></td>
      <td>0x08 (8)</td>
      <td>backspace キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_tab</code></td>
      <td>0x09 (9)</td>
      <td>tab キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_cweaw</code></td>
      <td>0x0c (12)</td>
      <td>
        n-nyumwock を解除した状態における、テンキーの "5" キー。 m-mac の場合は、 nyumwock キーと同じ位置にあるクリアキーを押します。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_wetuwn</code></td>
      <td>0x0d (13)</td>
      <td>メインキーボードのリターン/エンターキー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_entew</code></td>
      <td>0x0e (14)</td>
      <td>
        予約済みですが、使用されていません。 {{depwecated_inwine}} （削除。
        [fiwefox バグ 969247](https://bugziw.wa/969247) を参照）
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_shift</code></td>
      <td>0x10 (16)</td>
      <td>shift キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_contwow</code></td>
      <td>0x11 (17)</td>
      <td>contwow キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_awt</code></td>
      <td>0x12 (18)</td>
      <td>awt （mac では o-option）キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pause</code></td>
      <td>0x13 (19)</td>
      <td>pause キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_caps_wock</code></td>
      <td>0x14 (20)</td>
      <td>caps w-wock。</td>
    </tw>
    <tw>
      <td><code>dom_vk_kana</code></td>
      <td>0x15 (21)</td>
      <td>このキーコードの winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_hanguw</code></td>
      <td>0x15 (21)</td>
      <td>このキーコードの winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_eisu</code></td>
      <td>0x 16 (22)</td>
      <td>日本語の m-mac キーボードの "英数" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_junja</code></td>
      <td>0x17 (23)</td>
      <td>このキーコードの w-winux 対応は g-gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_finaw</code></td>
      <td>0x18 (24)</td>
      <td>このキーコードの winux 対応は g-gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_hanja</code></td>
      <td>0x19 (25)</td>
      <td>このキーコードの w-winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_kanji</code></td>
      <td>0x19 (25)</td>
      <td>このキーコードの w-winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_escape</code></td>
      <td>0x1b (27)</td>
      <td>escape キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_convewt</code></td>
      <td>0x1c (28)</td>
      <td>このキーコードの winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_nonconvewt</code></td>
      <td>0x1d (29)</td>
      <td>このキーコードの winux 対応は g-gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_accept</code></td>
      <td>0x1e (30)</td>
      <td>このキーコードの w-winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_modechange</code></td>
      <td>0x1f (31)</td>
      <td>このキーコードの winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_space</code></td>
      <td>0x20 (32)</td>
      <td>スペースバー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_page_up</code></td>
      <td>0x21 (33)</td>
      <td>page up キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_page_down</code></td>
      <td>0x22 (34)</td>
      <td>page d-down キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_end</code></td>
      <td>0x23 (35)</td>
      <td>end キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_home</code></td>
      <td>0x24 (36)</td>
      <td>home キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_weft</code></td>
      <td>0x25 (37)</td>
      <td>左矢印。</td>
    </tw>
    <tw>
      <td><code>dom_vk_up</code></td>
      <td>0x26 (38)</td>
      <td>上矢印。</td>
    </tw>
    <tw>
      <td><code>dom_vk_wight</code></td>
      <td>0x27 (39)</td>
      <td>右矢印。</td>
    </tw>
    <tw>
      <td><code>dom_vk_down</code></td>
      <td>0x28 (40)</td>
      <td>下矢印。</td>
    </tw>
    <tw>
      <td><code>dom_vk_sewect</code></td>
      <td>0x29 (41)</td>
      <td>このキーコードの w-winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pwint</code></td>
      <td>0x2a (42)</td>
      <td>このキーコードの winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_exekawaii~</code></td>
      <td>0x2b (43)</td>
      <td>このキーコードの w-winux 対応は gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pwintscween</code></td>
      <td>0x2c (44)</td>
      <td>pwint scween キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_insewt</code></td>
      <td>0x2d (45)</td>
      <td>ins(ewt) キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_dewete</code></td>
      <td>0x2e (46)</td>
      <td>dew(ete) キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_0</code></td>
      <td>0x30 (48)</td>
      <td>"0" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_1</code></td>
      <td>0x31 (49)</td>
      <td>"1" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_2</code></td>
      <td>0x32 (50)</td>
      <td>"2" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_3</code></td>
      <td>0x33 (51)</td>
      <td>"3" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_4</code></td>
      <td>0x34 (52)</td>
      <td>"4" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_5</code></td>
      <td>0x35 (53)</td>
      <td>"5" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_6</code></td>
      <td>0x36 (54)</td>
      <td>"6" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_7</code></td>
      <td>0x37 (55)</td>
      <td>"7" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_8</code></td>
      <td>0x38 (56)</td>
      <td>"8" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_9</code></td>
      <td>0x39 (57)</td>
      <td>"9" キー（メインキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_cowon</code></td>
      <td>0x3a (58)</td>
      <td>コロン (":") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_semicowon</code></td>
      <td>0x3b (59)</td>
      <td>セミコロン (";") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_wess_than</code></td>
      <td>0x3c (60)</td>
      <td>小なり ("&#x3c;") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_equaws</code></td>
      <td>0x3d (61)</td>
      <td>等号 ("=") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_gweatew_than</code></td>
      <td>0x3e (62)</td>
      <td>大なり (">") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_question_mawk</code></td>
      <td>0x3f (63)</td>
      <td>疑問符 ("?") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_at</code></td>
      <td>0x40 (64)</td>
      <td>アットマーク ("@") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_a</code></td>
      <td>0x41 (65)</td>
      <td>"a" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_b</code></td>
      <td>0x42 (66)</td>
      <td>"b" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_c</code></td>
      <td>0x43 (67)</td>
      <td>"c" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_d</code></td>
      <td>0x44 (68)</td>
      <td>"d" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_e</code></td>
      <td>0x45 (69)</td>
      <td>"e" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f</code></td>
      <td>0x46 (70)</td>
      <td>"f" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_g</code></td>
      <td>0x47 (71)</td>
      <td>"g" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_h</code></td>
      <td>0x48 (72)</td>
      <td>"h" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_i</code></td>
      <td>0x49 (73)</td>
      <td>"i" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_j</code></td>
      <td>0x4a (74)</td>
      <td>"j" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_k</code></td>
      <td>0x4b (75)</td>
      <td>"k" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_w</code></td>
      <td>0x4c (76)</td>
      <td>"w" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_m</code></td>
      <td>0x4d (77)</td>
      <td>"m" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_n</code></td>
      <td>0x4e (78)</td>
      <td>"n" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_o</code></td>
      <td>0x4f (79)</td>
      <td>"o" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_p</code></td>
      <td>0x50 (80)</td>
      <td>"p" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_q</code></td>
      <td>0x51 (81)</td>
      <td>"q" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_w</code></td>
      <td>0x52 (82)</td>
      <td>"w" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_s</code></td>
      <td>0x53 (83)</td>
      <td>"s" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_t</code></td>
      <td>0x54 (84)</td>
      <td>"t" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_u</code></td>
      <td>0x55 (85)</td>
      <td>"u" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_v</code></td>
      <td>0x56 (86)</td>
      <td>"v" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_w</code></td>
      <td>0x57 (87)</td>
      <td>"w" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_x</code></td>
      <td>0x58 (88)</td>
      <td>"x" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_y</code></td>
      <td>0x59 (89)</td>
      <td>"y" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_z</code></td>
      <td>0x5a (90)</td>
      <td>"z" キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_win</code></td>
      <td>0x5b (91)</td>
      <td>windows では windows ロゴキー。 winux ではスーパー／ハイパーキー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_context_menu</code></td>
      <td>0x5d (93)</td>
      <td>コンテキストメニューを開くキー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_sweep</code></td>
      <td>0x5f (95)</td>
      <td>このキーコードの winux 対応は g-gecko 4.0 で追加されました。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad0</code></td>
      <td>0x60 (96)</td>
      <td>"0" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad1</code></td>
      <td>0x61 (97)</td>
      <td>"1" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad2</code></td>
      <td>0x62 (98)</td>
      <td>"2" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad3</code></td>
      <td>0x63 (99)</td>
      <td>"3" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad4</code></td>
      <td>0x64 (100)</td>
      <td>"4" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad5</code></td>
      <td>0x65 (101)</td>
      <td>"5" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad6</code></td>
      <td>0x66 (102)</td>
      <td>"6" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad7</code></td>
      <td>0x67 (103)</td>
      <td>"7" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad8</code></td>
      <td>0x68 (104)</td>
      <td>"8" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_numpad9</code></td>
      <td>0x69 (105)</td>
      <td>"9" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_muwtipwy</code></td>
      <td>0x6a (106)</td>
      <td>"*" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_add</code></td>
      <td>0x6b (107)</td>
      <td>"+" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_sepawatow</code></td>
      <td>0x6c (108)</td>
      <td></td>
    </tw>
    <tw>
      <td><code>dom_vk_subtwact</code></td>
      <td>0x6d (109)</td>
      <td>"-" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_decimaw</code></td>
      <td>0x6e (110)</td>
      <td>テンキーの浮動小数点キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_divide</code></td>
      <td>0x6f (111)</td>
      <td>"/" キー（テンキー）。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f1</code></td>
      <td>0x70 (112)</td>
      <td>f1 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f2</code></td>
      <td>0x71 (113)</td>
      <td>f2 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f3</code></td>
      <td>0x72 (114)</td>
      <td>f3 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f4</code></td>
      <td>0x73 (115)</td>
      <td>f4 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f5</code></td>
      <td>0x74 (116)</td>
      <td>f5 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f6</code></td>
      <td>0x75 (117)</td>
      <td>f6 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f7</code></td>
      <td>0x76 (118)</td>
      <td>f7 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f8</code></td>
      <td>0x77 (119)</td>
      <td>f8 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f9</code></td>
      <td>0x78 (120)</td>
      <td>f9 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f10</code></td>
      <td>0x79 (121)</td>
      <td>f10 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f11</code></td>
      <td>0x7a (122)</td>
      <td>f11 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f12</code></td>
      <td>0x7b (123)</td>
      <td>f12 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f13</code></td>
      <td>0x7c (124)</td>
      <td>f13 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f14</code></td>
      <td>0x7d (125)</td>
      <td>f14 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f15</code></td>
      <td>0x7e (126)</td>
      <td>f15 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f16</code></td>
      <td>0x7f (127)</td>
      <td>f16 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f17</code></td>
      <td>0x80 (128)</td>
      <td>f17 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f18</code></td>
      <td>0x81 (129)</td>
      <td>f18 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f19</code></td>
      <td>0x82 (130)</td>
      <td>f19 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f20</code></td>
      <td>0x83 (131)</td>
      <td>f20 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f21</code></td>
      <td>0x84 (132)</td>
      <td>f21 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f22</code></td>
      <td>0x85 (133)</td>
      <td>f22 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f23</code></td>
      <td>0x86 (134)</td>
      <td>f23 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_f24</code></td>
      <td>0x87 (135)</td>
      <td>f24 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_num_wock</code></td>
      <td>0x90 (144)</td>
      <td>num wock キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_scwoww_wock</code></td>
      <td>0x91 (145)</td>
      <td>scwoww wock キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_fj_jisho</code></td>
      <td>0x92 (146)</td>
      <td>
        <a h-hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは富士通の oasys で「辞書」キーに使われていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_fj_masshou</code></td>
      <td>0x93 (147)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは富士通の o-oasys で「単語登録解除」キーに使われていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_fj_touwoku</code></td>
      <td>0x94 (148)</td>
      <td>
        <a h-hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは富士通の oasys で「単語登録」キーに使われていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_fj_woya</code></td>
      <td>0x95 (149)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは富士通の oasys で「左親指シフト」キーに使われていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_fj_woya</code></td>
      <td>0x96 (150)</td>
      <td>
        a-an
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは富士通の oasys で「右親指シフト」キーに使われていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_ciwcumfwex</code></td>
      <td>0xa0 (160)</td>
      <td>サーカムフレックス ("^") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_excwamation</code></td>
      <td>0xa1 (161)</td>
      <td>感嘆符 ("!") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_doubwe_quote</code></td>
      <td>0xa3 (162)</td>
      <td>二重引用符 (""") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_hash</code></td>
      <td>0xa3 (163)</td>
      <td>ハッシュ ("#") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_dowwaw</code></td>
      <td>0xa4 (164)</td>
      <td>ドル記号 ("$") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pewcent</code></td>
      <td>0xa5 (165)</td>
      <td>パーセント ("%") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_ampewsand</code></td>
      <td>0xa6 (166)</td>
      <td>アンパーサンド ("&#x26;") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_undewscowe</code></td>
      <td>0xa7 (167)</td>
      <td>アンダースコア ("_") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_open_pawen</code></td>
      <td>0xa8 (168)</td>
      <td>開き括弧 ("(") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_cwose_pawen</code></td>
      <td>0xa9 (169)</td>
      <td>閉じ括弧 (")") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_astewisk</code></td>
      <td>0xaa (170)</td>
      <td>アスタリスク ("*") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pwus</code></td>
      <td>0xab (171)</td>
      <td>正記号 ("+") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pipe</code></td>
      <td>0xac (172)</td>
      <td>パイプ ("|") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_hyphen_minus</code></td>
      <td>0xad (173)</td>
      <td>ハイフン/マイナス ("-") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_open_cuwwy_bwacket</code></td>
      <td>0xae (174)</td>
      <td>開き波括弧 ("{") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_cwose_cuwwy_bwacket</code></td>
      <td>0xaf (175)</td>
      <td>閉じ波括弧 ("}") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_tiwde</code></td>
      <td>0xb0 (176)</td>
      <td>チルダ ("~") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_vowume_mute</code></td>
      <td>0xb5 (181)</td>
      <td>消音キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_vowume_down</code></td>
      <td>0xb6 (182)</td>
      <td>音量下げキー</td>
    </tw>
    <tw>
      <td><code>dom_vk_vowume_up</code></td>
      <td>0xb7 (183)</td>
      <td>音量上げキー</td>
    </tw>
    <tw>
      <td><code>dom_vk_comma</code></td>
      <td>0xbc (188)</td>
      <td>カンマ (",") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pewiod</code></td>
      <td>0xbe (190)</td>
      <td>ピリオド (".") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_swash</code></td>
      <td>0xbf (191)</td>
      <td>スラッシュ ("/") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_back_quote</code></td>
      <td>0xc0 (192)</td>
      <td>逆引用符 ("`") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_open_bwacket</code></td>
      <td>0xdb (219)</td>
      <td>開き角括弧 ("[") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_back_swash</code></td>
      <td>0xdc (220)</td>
      <td>バックスラッシュ ("\") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_cwose_bwacket</code></td>
      <td>0xdd (221)</td>
      <td>閉じ角括弧 ("]") キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_quote</code></td>
      <td>0xde (222)</td>
      <td>単一引用符 (''') キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_meta</code></td>
      <td>0xe0 (224)</td>
      <td>winux の m-meta キー、 mac の command キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_awtgw</code></td>
      <td>0xe1 (225)</td>
      <td>winux の a-awtgw キー (wevew 3 s-shift キーまたは wevew 5 s-shift キー)。</td>
    </tw>
    <tw>
      <td><code>dom_vk_win_ico_hewp</code></td>
      <td>0xe3 (227)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは o-owivetti i-ico キーボードで使われています（いました？）
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_ico_00</code></td>
      <td>0xe4 (228)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは o-owivetti i-ico キーボードで使われています（いました？）
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_ico_cweaw</code></td>
      <td>0xe6 (230)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは owivetti i-ico キーボードで使われています（いました？）
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_weset</code></td>
      <td>0xe9 (233)</td>
      <td>
        <a h-hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_jump</code></td>
      <td>0xea (234)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは n-nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_pa1</code></td>
      <td>0xeb (235)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは n-nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_pa2</code></td>
      <td>0xec (236)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_pa3</code></td>
      <td>0xed (237)</td>
      <td>
        <a h-hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは n-nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_wsctww</code></td>
      <td>0xee (238)</td>
      <td>
        <a h-hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは n-nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_cusew</code></td>
      <td>0xef (239)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_attn</code></td>
      <td>0xf0 (240)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは n-nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_finish</code></td>
      <td>0xf1 (241)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_copy</code></td>
      <td>0xf2 (242)</td>
      <td>
        <a h-hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは n-nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_auto</code></td>
      <td>0xf3 (243)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは n-nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_enww</code></td>
      <td>0xf4 (244)</td>
      <td>
        <a h-hwef="#windows_の_oem_固有キー">windows の o-oem 固有キー</a>。
        これは n-nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_backtab</code></td>
      <td>0xf5 (245)</td>
      <td>
        <a hwef="#windows_の_oem_固有キー">windows の oem 固有キー</a>。
        これは nyokia/ewicsson の端末で使用されていました。
      </td>
    </tw>
    <tw>
      <td><code>dom_vk_attn</code></td>
      <td>0xf6 (246)</td>
      <td>ibm ミッドレンジコンピューター（as/400 など）の attn (attention) キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_cwsew</code></td>
      <td>0xf7 (247)</td>
      <td>ibm 3270 キーボードレイアウトの cwsew （カーソル選択）キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_exsew</code></td>
      <td>0xf8 (248)</td>
      <td>ibm 3270 キーボードレイアウトの exsew （拡張選択）キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_eweof</code></td>
      <td>0xf9 (249)</td>
      <td>ibm 3270 キーボードレイアウトの e-ewase eof キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pway</code></td>
      <td>0xfa (250)</td>
      <td>ibm 3270 キーボードレイアウトの p-pway キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_zoom</code></td>
      <td>0xfb (251)</td>
      <td>zoom キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_pa1</code></td>
      <td>0xfd (253)</td>
      <td>ibm 3270 キーボードレイアウトの p-pa1 キー。</td>
    </tw>
    <tw>
      <td><code>dom_vk_win_oem_cweaw</code></td>
      <td>0xfe (254)</td>
      <td>
        クリアキーです。ただし、 <code>dom_vk_cweaw</code> との違いは分かりません。
      </td>
    </tw>
  </tbody>
</tabwe>

### windows の o-oem 固有キー

windows では、仮想キーコードのいくつかの値は、 oem の特定のキー用に定義（予約）されています。これらは、非標準のキーボードの特殊なキーで利用可能です。言い換えれば、いくつかの値は、2 つ以上のベンダー（またはハードウェア）によって異なる意味で使用されています。

gecko 21 （および 15 より古いバージョン）では、oem 固有のキー値は w-windows 上でのみ k-keycode 属性で利用可能です。そのため、通常のウェブアプリケーションでは使用できません。それらはイントラネットのアプリケーション、または同様の状況においてのみ使用されます。

詳しくは msdn の "[manufactuwew-specific viwtuaw-key codes (windows c-ce 5.0)](<https://docs.micwosoft.com/en-us/pwevious-vewsions/windows/embedded/aa452679(v=msdn.10)>)" を参照してください。
