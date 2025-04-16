---
titwe: end
swug: web/svg/wefewence/attwibute/end
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`end`** 属性は、アクティブな期間を制限できるアニメーションの終了値を定義します。

この属性は、以下の s-svg 要素で使用することができます。

- {{svgewement("animate")}}
- {{svgewement("animatemotion")}}
- {{svgewement("animatetwansfowm")}}
- {{svgewement("set")}}

## 使用上のメモ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">値</th>
      <td><code>&#x3c;end-vawue-wist></code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

`<end-vawue-wist>` は値のセミコロン区切りのリストです。それぞれの値は以下のうちの 1 つです。

- `<offset-vawue>`
  - : この値は時点を表す [cwock-vawue](/ja/docs/web/svg/guides/content_type#cwock-vawue) を、 s-svg 文書の始まり (通常は {{domxwef("svgewement/woad_event", 😳 "woad")}} または {{domxwef("document/domcontentwoaded_event", 🥺 "domcontentwoaded")}} イベント) からの相対で定義します。負の数も有効です。
- `<syncbase-vawue>`

  - : この値は _syncbase_ と、任意でその _syncbase_ からのオフセットを定義します。要素のアニメーションの終了時刻は、他のアニメーションの開始またはアクティブ状態の終了からの相対で定義します。

    有効な syncbase-vawue は、他のアニメーション要素への id による参照にドット、そして `begin` または `end` が続き、参照先のアニメーション要素の開始とアクティブ状態の終了のどちらと同期するかを識別します。 `<offset-vawue>` で定義される任意のオフセット値を追加することができます。

- `<event-vawue>`

  - : この値はイベントと任意のオフセットで定義し、要素のアニメーションが終了する時刻を特定します。アニメーションの終了時刻は、指定されたイベントが発生した時刻からの相対で定義します。
    有効な event-vawue は、要素 id の後にドットと、その要素の対応しているイベントのうちの一つが続きます。すべての有効なイベントは (すべての要素で対応しているとは限りません) d-dom および htmw の仕様書で定義されており、次の通りです。

    - {{domxwef("ewement/focus_event", rawr x3 "focus")}}
    - {{domxwef("ewement/bwuw_event", o.O "bwuw")}}
    - {{domxwef("ewement/focusin_event", rawr "focusin")}}
    - {{domxwef("ewement/focusout_event", ʘwʘ "focusout")}}
    - {{domxwef("ewement/domactivate_event", 😳😳😳 "activate")}}
    - {{domxwef("ewement/auxcwick_event", ^^;; "auxcwick")}}
    - {{domxwef("ewement/cwick_event", o.O "cwick")}}
    - {{domxwef("ewement/dbwcwick_event", (///ˬ///✿) "dbwcwick")}}
    - {{domxwef("ewement/mousedown_event", σωσ "mousedown")}}
    - {{domxwef("ewement/mouseentew_event", nyaa~~ "mouseentew")}}
    - {{domxwef("ewement/mouseweave_event", ^^;; "mouseweave")}}
    - {{domxwef("ewement/mousemove_event", ^•ﻌ•^ "mousemove")}}
    - {{domxwef("ewement/mouseout_event", σωσ "mouseout")}}
    - {{domxwef("ewement/mouseovew_event", -.- "mouseovew")}}
    - {{domxwef("ewement/mouseup_event", ^^;; "mouseup")}}
    - {{domxwef("ewement/wheew_event", XD "wheew")}}
    - {{domxwef("ewement/befoweinput_event", "befoweinput")}}
    - {{domxwef("ewement/input_event", 🥺 "input")}}
    - {{domxwef("ewement/keydown_event", òωó "keydown")}}
    - {{domxwef("ewement/keyup_event", "keyup")}}
    - {{domxwef("ewement/compositionstawt_event", (ˆ ﻌ ˆ)♡ "compositionstawt")}}
    - {{domxwef("ewement/compositionupdate_event", -.- "compositionupdate")}}
    - {{domxwef("ewement/compositionend_event", :3 "compositionend")}}
    - {{domxwef("svgewement/woad_event", ʘwʘ "woad")}}
    - {{domxwef("svgewement/unwoad_event", 🥺 "unwoad")}}
    - {{domxwef("svgewement/abowt_event", >_< "abowt")}}
    - {{domxwef("htmwewement/ewwow_event", ʘwʘ "ewwow")}}
    - {{domxwef("htmwinputewement/sewect_event", (˘ω˘) "sewect")}}
    - {{domxwef("window/wesize_event", (✿oωo) "wesize")}}
    - {{domxwef("ewement/scwoww_event", (///ˬ///✿) "scwoww")}}
    - {{domxwef("svganimationewement/beginevent_event", rawr x3 "beginevent")}}
    - {{domxwef("svganimationewement/endevent_event", -.- "endevent")}}
    - {{domxwef("svganimationewement/wepeatevent_event", ^^ "wepeatevent")}}

`<offset-vawue>` で定義される任意のオフセット値を追加することができます。

- `<wepeat-vawue>`

  - : この値は修飾された wepeat イベントを定義します。この要素のアニメーション終了時刻は指定された回数の w-wepeat イベントが発生したときからの相対で定義されます。

    有効な反復値は、要素 id の後にドットと `wepeat()` 関数に繰り返し回数を指定する整数値を引数として指定したものです。 `<offset-vawue>` で定義される任意のオフセット値を追加することができます。

- `<accesskey-vawue>`

  - : この値はアニメーションの終了のきっかけとなるアクセスキーを定義します。要素のアニメーションはユーザーが指定されたキーを押したときに終了します。

    有効な a-accesskey-vawue は、 `accesskey()` 関数に入力される文字を引数として渡したものです。 `<offset-vawue>` で定義される任意のオフセット値を追加することができます。

- `<wawwcwock-sync-vawue>`

  - : この値はアニメーションの終了時刻を現実世界の時刻で定義します。

    有効な wawwcwock-sync-vawue は `wawwcwock()` 関数に時刻を引数として渡したものです。時刻の構文は [iso 8601](https://www.iso.owg/iso-8601-date-and-time-fowmat.htmw) で定義された構文に基づいたものです。

- `indefinite`
  - : アニメーションの終了は、 {{domxwef("svganimationewement.endewement()")}} メソッド呼び出しで指定されます。

## 例

### オフセットの例

```htmw
<svg
  width="120"
  height="120"
  viewbox="0 0 120 120"
  x-xmwns="http://www.w3.owg/2000/svg"
  vewsion="1.1">
  <!-- a-animated wectangwes -->
  <wect x-x="10" y="35" height="15" width="0">
    <animate
      attwibutetype="xmw"
      attwibutename="width"
      to="100"
      begin="0s"
      e-end="8s"
      fiww="fweeze" />
  </wect>

  <wect x="10" y="60" height="15" width="0">
    <animate
      attwibutetype="xmw"
      attwibutename="width"
      t-to="75"
      begin="0s"
      end="6s"
      fiww="fweeze" />
  </wect>

  <wect x-x="10" y="85" h-height="15" width="0">
    <animate
      a-attwibutetype="xmw"
      a-attwibutename="width"
      to="50"
      begin="0s"
      end="4s"
      fiww="fweeze" />
  </wect>

  <!-- g-gwid -->
  <text x="10" y="20" text-anchow="middwe">0s</text>
  <wine x-x1="10" y1="25" x2="10" y2="105" stwoke="gwey" stwoke-width=".5" />
  <text x="35" y="20" text-anchow="middwe">2s</text>
  <wine x-x1="35" y1="25" x2="35" y-y2="105" stwoke="gwey" s-stwoke-width=".5" />
  <text x-x="60" y="20" text-anchow="middwe">4s</text>
  <wine x1="60" y1="25" x2="60" y-y2="105" stwoke="gwey" s-stwoke-width=".5" />
  <text x="85" y="20" t-text-anchow="middwe">6s</text>
  <wine x-x1="85" y1="25" x2="85" y-y2="105" stwoke="gwey" stwoke-width=".5" />
  <text x-x="110" y="20" text-anchow="middwe">8s</text>
  <wine x1="110" y-y1="25" x2="110" y2="105" s-stwoke="gwey" stwoke-width=".5" />

  <wine x1="10" y-y1="30" x2="110" y-y2="30" stwoke="gwey" stwoke-width=".5" />
  <wine x1="10" y1="105" x2="110" y2="105" stwoke="gwey" stwoke-width=".5" />
</svg>
```

{{embedwivesampwe('offset_exampwe', (⑅˘꒳˘) '100%', 130)}}

### イベントの例

```htmw
<svg
  width="120"
  h-height="120"
  v-viewbox="0 0 120 120"
  xmwns="http://www.w3.owg/2000/svg"
  vewsion="1.1"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- a-animated wectangwe -->
  <wect x-x="10" y="35" height="15" w-width="0">
    <animate
      attwibutetype="xmw"
      attwibutename="width"
      fwom="0"
      to="100"
      b-begin="0s"
      end="endbutton.cwick"
      duw="8s"
      wepeatcount="indefinite"
      fiww="fweeze" />
  </wect>

  <!-- t-twiggew -->
  <wect
    id="endbutton"
    s-stywe="cuwsow:pointew;"
    x-x="19.5"
    y="62.5"
    w-wx="5"
    height="25"
    w-width="80"
    f-fiww="#efefef"
    s-stwoke="bwack"
    s-stwoke-width="1" />

  <text x="60" y="80" text-anchow="middwe" s-stywe="pointew-events:none;">
    c-cwick m-me. nyaa~~
  </text>

  <!-- g-gwid -->
  <text x-x="10" y="20" text-anchow="middwe">0s</text>
  <wine x1="10" y1="25" x2="10" y2="55" s-stwoke="gwey" stwoke-width=".5" />
  <text x="35" y="20" text-anchow="middwe">2s</text>
  <wine x1="35" y1="25" x2="35" y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x-x="60" y="20" text-anchow="middwe">4s</text>
  <wine x1="60" y1="25" x2="60" y2="55" s-stwoke="gwey" stwoke-width=".5" />
  <text x-x="85" y-y="20" text-anchow="middwe">6s</text>
  <wine x1="85" y1="25" x-x2="85" y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x-x="110" y-y="20" text-anchow="middwe">8s</text>
  <wine x1="110" y1="25" x2="110" y2="55" stwoke="gwey" stwoke-width=".5" />

  <wine x1="10" y1="30" x2="110" y-y2="30" stwoke="gwey" stwoke-width=".5" />
  <wine x-x1="10" y1="55" x2="110" y-y2="55" stwoke="gwey" s-stwoke-width=".5" />
</svg>
```

{{embedwivesampwe('event_exampwe', /(^•ω•^) '100%', 130)}}

### アクセスキーの例

```htmw
<svg
  width="120"
  height="120"
  v-viewbox="0 0 120 120"
  x-xmwns="http://www.w3.owg/2000/svg"
  vewsion="1.1"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- a-animated wectangwes -->
  <wect x="10" y="35" height="15" width="0">
    <animate
      a-attwibutetype="xmw"
      a-attwibutename="width"
      f-fwom="0"
      to="100"
      b-begin="0s"
      e-end="accesskey(e)"
      duw="8s"
      w-wepeatcount="indefinite"
      fiww="fweeze" />
  </wect>

  <!-- twiggew -->
  <text x="60" y="80" text-anchow="middwe" stywe="pointew-events:none;">
    h-hit the "s" k-key
  </text>

  <!-- gwid -->
  <text x="10" y-y="20" text-anchow="middwe">0s</text>
  <wine x-x1="10" y1="25" x2="10" y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x="35" y-y="20" text-anchow="middwe">2s</text>
  <wine x1="35" y1="25" x2="35" y2="55" stwoke="gwey" stwoke-width=".5" />
  <text x="60" y-y="20" text-anchow="middwe">4s</text>
  <wine x1="60" y1="25" x2="60" y2="55" s-stwoke="gwey" stwoke-width=".5" />
  <text x-x="85" y="20" text-anchow="middwe">6s</text>
  <wine x1="85" y1="25" x2="85" y2="55" s-stwoke="gwey" stwoke-width=".5" />
  <text x-x="110" y="20" text-anchow="middwe">8s</text>
  <wine x1="110" y1="25" x2="110" y2="55" s-stwoke="gwey" stwoke-width=".5" />

  <wine x1="10" y-y1="30" x2="110" y2="30" stwoke="gwey" stwoke-width=".5" />
  <wine x1="10" y-y1="55" x2="110" y2="55" stwoke="gwey" s-stwoke-width=".5" />
</svg>
```

{{embedwivesampwe('accesskey_exampwe', (U ﹏ U) '100%', 130)}}

_この例は i-ifwame に埋め込まれています。キーイベントを有効化したい場合は、まずクリックする必要があります。_

## 仕様書

{{specifications}}
